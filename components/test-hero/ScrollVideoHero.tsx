"use client"

import React, { useEffect, useRef, useState } from "react"
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion"

const DESKTOP_TOTAL_FRAMES = 240
const DESKTOP_PREFIX = "/video frame/frame_"
const DESKTOP_SUFFIX = ".webp"

const MOBILE_TOTAL_FRAMES = 156
const MOBILE_PREFIX = "/video frame/mobile/frame_"
const MOBILE_SUFFIX = ".webp"

function formatDesktopFrameIndex(index: number): string {
  return String(index + 1).padStart(4, "0")
}

function formatMobileFrameIndex(index: number): string {
  return String(index + 1).padStart(4, "0")
}

export function ScrollVideoHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Screen size detection
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [showScrollCue, setShowScrollCue] = useState(true)

  // Preloading & Frame Cache
  const desktopImagesRef = useRef<HTMLImageElement[]>([])
  const mobileImagesRef = useRef<HTMLImageElement[]>([])

  // Continuous physics frame tracking
  const currentFrameRef = useRef<number>(0)
  const targetFrameRef = useRef<number>(0)
  const lastScrollTargetRef = useRef<number>(0)
  const scrollVelocityRef = useRef<number>(0)
  
  // Active frame count depending on mobile vs desktop
  const activeTotalFrames = isMobile ? MOBILE_TOTAL_FRAMES : DESKTOP_TOTAL_FRAMES

  // Track scroll position across container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Frame target calculation based on scroll progress
  const rawFrameIndex = useTransform(scrollYProgress, [0, 1], [0, activeTotalFrames - 1])

  useEffect(() => {
    const unsubscribe = rawFrameIndex.on("change", (latest) => {
      targetFrameRef.current = latest
      // Hide scroll cue on mobile as soon as user begins scrolling
      if (isMobile && Math.abs(latest - lastScrollTargetRef.current) > 0.3) {
        setShowScrollCue(false)
      }
      lastScrollTargetRef.current = latest
    })

    return () => {
      unsubscribe()
    }
  }, [rawFrameIndex, isMobile])

  // Timer to animate scroll cue for 2 seconds on mobile on initial load, then hide
  useEffect(() => {
    if (!isMobile) return
    const timer = setTimeout(() => {
      setShowScrollCue(false)
    }, 2200)

    return () => clearTimeout(timer)
  }, [isMobile])

  // Screen size listener
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Fast Async Progressive Preloader (Instant First Frame + Priority Streaming)
  useEffect(() => {
    let mounted = true

    const desktopImages: HTMLImageElement[] = []
    const mobileImages: HTMLImageElement[] = []

    // Helper to load single image asynchronously
    const loadImage = (src: string): Promise<HTMLImageElement> => {
      return new Promise((resolve) => {
        const img = new Image()
        img.src = src
        img.onload = () => resolve(img)
        img.onerror = () => resolve(img)
      })
    }

    // Stream frames in priority order: first 10 frames instantly, then rest concurrently
    const streamFrames = async () => {
      // 1. Instant load first frame for mobile and desktop
      const firstDesktop = await loadImage(`${DESKTOP_PREFIX}${formatDesktopFrameIndex(0)}${DESKTOP_SUFFIX}`)
      const firstMobile = await loadImage(`${MOBILE_PREFIX}${formatMobileFrameIndex(0)}${MOBILE_SUFFIX}`)

      if (!mounted) return
      desktopImages[0] = firstDesktop
      mobileImages[0] = firstMobile
      desktopImagesRef.current = desktopImages
      mobileImagesRef.current = mobileImages

      // 2. Stream remaining active device frames in high-speed parallel batches
      const activePrefix = isMobile ? MOBILE_PREFIX : DESKTOP_PREFIX
      const activeSuffix = isMobile ? MOBILE_SUFFIX : DESKTOP_SUFFIX
      const activeTotal = isMobile ? MOBILE_TOTAL_FRAMES : DESKTOP_TOTAL_FRAMES
      const activeRef = isMobile ? mobileImagesRef : desktopImagesRef
      const activeArray = isMobile ? mobileImages : desktopImages
      const formatFn = isMobile ? formatMobileFrameIndex : formatDesktopFrameIndex

      // Batch size 15 for maximum parallel HTTP/2 throughput
      const BATCH_SIZE = 15
      for (let i = 1; i < activeTotal; i += BATCH_SIZE) {
        if (!mounted) break
        const batchPromises: Promise<HTMLImageElement>[] = []
        for (let j = i; j < Math.min(i + BATCH_SIZE, activeTotal); j++) {
          batchPromises.push(loadImage(`${activePrefix}${formatFn(j)}${activeSuffix}`))
        }
        const loadedBatch = await Promise.all(batchPromises)
        if (!mounted) break
        loadedBatch.forEach((img, idx) => {
          activeArray[i + idx] = img
        })
        activeRef.current = [...activeArray]
      }

      // 3. Secondary background preloading for the other device set
      const secondaryPrefix = !isMobile ? MOBILE_PREFIX : DESKTOP_PREFIX
      const secondarySuffix = !isMobile ? MOBILE_SUFFIX : DESKTOP_SUFFIX
      const secondaryTotal = !isMobile ? MOBILE_TOTAL_FRAMES : DESKTOP_TOTAL_FRAMES
      const secondaryRef = !isMobile ? mobileImagesRef : desktopImagesRef
      const secondaryArray = !isMobile ? mobileImages : desktopImages
      const secondaryFormatFn = !isMobile ? formatMobileFrameIndex : formatDesktopFrameIndex

      for (let i = 1; i < secondaryTotal; i += BATCH_SIZE) {
        if (!mounted) break
        const batchPromises: Promise<HTMLImageElement>[] = []
        for (let j = i; j < Math.min(i + BATCH_SIZE, secondaryTotal); j++) {
          batchPromises.push(loadImage(`${secondaryPrefix}${secondaryFormatFn(j)}${secondarySuffix}`))
        }
        const loadedBatch = await Promise.all(batchPromises)
        if (!mounted) break
        loadedBatch.forEach((img, idx) => {
          secondaryArray[i + idx] = img
        })
        secondaryRef.current = [...secondaryArray]
      }
    }

    streamFrames()

    return () => {
      mounted = false
    }
  }, [isMobile])

  // Canvas drawing & Seamless Coasting Physics (Zero-Reflow 60fps Canvas Render)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    // Cached layout dimensions to prevent DOM reflow thrashing inside RAF
    let cachedWidth = 0
    let cachedHeight = 0
    let dpr = 1

    const resizeCanvas = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      cachedWidth = canvas.clientWidth
      cachedHeight = canvas.clientHeight
      canvas.width = cachedWidth * dpr
      canvas.height = cachedHeight * dpr
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Helper to find closest available loaded frame if targeted frame is still downloading
    const getBestAvailableImage = (targetIndex: number, images: HTMLImageElement[]): HTMLImageElement | null => {
      if (images[targetIndex]?.complete && images[targetIndex]?.naturalWidth > 0) {
        return images[targetIndex]
      }
      // Search backwards for nearest loaded frame
      for (let i = targetIndex - 1; i >= 0; i--) {
        if (images[i]?.complete && images[i]?.naturalWidth > 0) {
          return images[i]
        }
      }
      // Fallback search forwards
      for (let i = targetIndex + 1; i < images.length; i++) {
        if (images[i]?.complete && images[i]?.naturalWidth > 0) {
          return images[i]
        }
      }
      return images[0] || null
    }

    const render = () => {
      const activeFramesCount = isMobile ? MOBILE_TOTAL_FRAMES : DESKTOP_TOTAL_FRAMES
      const activeImages = isMobile ? mobileImagesRef.current : desktopImagesRef.current

      const target = targetFrameRef.current
      const diff = target - currentFrameRef.current

      // Fast responsive lerp tracking with instant crisp snap when near target to eliminate floaty drift on scroll stop
      if (Math.abs(diff) < 0.01) {
        currentFrameRef.current = target
      } else {
        currentFrameRef.current += diff * 0.35
      }

      // Clamp current frame position within valid bounds [0, activeFramesCount - 1]
      const rawCurrent = Math.max(0, Math.min(activeFramesCount - 1, currentFrameRef.current))
      currentFrameRef.current = rawCurrent

      // Use exact rounded frame index for clean single-frame rendering (eliminates ghosting / double-image outlines)
      const frameIndex = Math.round(rawCurrent)
      const img = getBestAvailableImage(frameIndex, activeImages)

      if (img && img.complete && img.naturalWidth > 0 && cachedWidth > 0 && cachedHeight > 0) {
        ctx.save()
        ctx.scale(dpr, dpr)
        ctx.clearRect(0, 0, cachedWidth, cachedHeight)

        const imgRatio = img.naturalWidth / img.naturalHeight
        const canvasRatio = cachedWidth / cachedHeight

        let drawWidth = cachedWidth
        let drawHeight = cachedHeight
        let offsetX = 0
        let offsetY = 0

        if (canvasRatio > imgRatio) {
          drawHeight = cachedWidth / imgRatio
          offsetY = (cachedHeight - drawHeight) / 2
        } else {
          drawWidth = cachedHeight * imgRatio
          offsetX = (cachedWidth - drawWidth) / 2
        }

        // Draw crisp single frame at 100% opacity with zero ghosting or blur
        ctx.globalAlpha = 1.0
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)

        ctx.restore()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isMobile])

  const isCueVisible = !isMobile || showScrollCue

  return (
    <div ref={containerRef} className="relative w-full h-[300vh] bg-black">
      {/* Sticky Container pinning canvas over 300vh container track */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* High Performance Pure Video Canvas (Instant Hydration, Zero Loading Screen) */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 size-full object-cover z-0 pointer-events-none"
        />

        {/* Subtle Vignette Gradient for Depth */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />

        {/* Minimal Subtle Bottom Scroll Cue */}
        <div className="relative z-10 size-full flex flex-col justify-end px-6 pb-24 md:pb-12 pointer-events-none">
          <div className="flex items-center justify-center w-full text-white font-mono text-[10px] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] min-h-[40px]">
            <AnimatePresence>
              {isCueVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex flex-col items-center gap-1.5"
                >
                  <span className="text-[10px] tracking-[0.3em] font-medium uppercase text-white/90">SCROLL</span>
                  <svg className="w-4 h-4 text-white animate-bounce opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  )
}
