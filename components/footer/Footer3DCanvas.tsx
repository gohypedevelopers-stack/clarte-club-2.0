"use client"

import React, { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"

interface Footer3DCanvasProps {
  className?: string
}

export function Footer3DCanvas({ className = "" }: Footer3DCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let animationFrameId: number
    let renderer: THREE.WebGLRenderer | null = null
    let scene: THREE.Scene | null = null
    let camera: THREE.PerspectiveCamera | null = null
    let modelGroup: THREE.Group | null = null

    // Mouse tracking for subtle hover reaction
    let mouseX = 0
    let mouseY = 0
    let targetRotationX = 0
    let targetRotationY = 0

    const width = container.clientWidth || 200
    const height = container.clientHeight || 200

    // 1. Scene setup
    scene = new THREE.Scene()

    // 2. Camera setup
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.set(0, 0, 8)

    // 3. Renderer setup
    renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2

    container.appendChild(renderer.domElement)

    // 4. Lighting setup (Luxury warm studio lighting)
    const ambientLight = new THREE.AmbientLight(0xfff8ee, 1.8)
    scene.add(ambientLight)

    const mainLight = new THREE.DirectionalLight(0xfff5e6, 3.5)
    mainLight.position.set(5, 8, 5)
    scene.add(mainLight)

    const fillLight = new THREE.DirectionalLight(0xc9b07a, 1.5)
    fillLight.position.set(-5, -2, -3)
    scene.add(fillLight)

    const rimLight = new THREE.PointLight(0xffffff, 2, 10)
    rimLight.position.set(0, 4, -4)
    scene.add(rimLight)

    // 5. Load GLTF Model
    const loader = new GLTFLoader()
    loader.load(
      "/3d/clarte.glb",
      (gltf) => {
        modelGroup = gltf.scene

        // Compute bounding box to auto-center and auto-scale model
        const box = new THREE.Box3().setFromObject(modelGroup)
        const center = box.getCenter(new THREE.Vector3())
        const size = box.getSize(new THREE.Vector3())

        const maxDim = Math.max(size.x, size.y, size.z)
        const scale = 3.2 / (maxDim || 1)
        modelGroup.scale.set(scale, scale, scale)

        // Re-center geometry
        modelGroup.position.x = -center.x * scale
        modelGroup.position.y = -center.y * scale
        modelGroup.position.z = -center.z * scale

        // Adjust materials for premium look
        modelGroup.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh
            if (mesh.material) {
              if (Array.isArray(mesh.material)) {
                mesh.material.forEach((m) => {
                  m.side = THREE.DoubleSide
                })
              } else {
                mesh.material.side = THREE.DoubleSide
              }
            }
          }
        })

        // Wrap in parent pivot for continuous smooth rotation
        const pivot = new THREE.Group()
        pivot.add(modelGroup)
        scene?.add(pivot)
        modelGroup = pivot

        setIsLoaded(true)
      },
      undefined,
      (error) => {
        console.error("Error loading 3D model /3d/clarte.glb:", error)
        setHasError(true)
      }
    )

    // 6. Handle Mouse Movement
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      mouseX = (x / rect.width - 0.5) * 2
      mouseY = (y / rect.height - 0.5) * 2
    }

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        const rect = container.getBoundingClientRect()
        const touch = event.touches[0]
        const x = touch.clientX - rect.left
        const y = touch.clientY - rect.top
        mouseX = (x / rect.width - 0.5) * 2
        mouseY = (y / rect.height - 0.5) * 2
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("touchmove", handleTouchMove, { passive: true })

    // 7. Handle Resize
    const handleResize = () => {
      if (!container || !renderer || !camera) return
      const newWidth = container.clientWidth
      const newHeight = container.clientHeight
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }

    const resizeObserver = new ResizeObserver(() => handleResize())
    resizeObserver.observe(container)

    // 8. Animation Render Loop
    let clock = new THREE.Clock()

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      const elapsedTime = clock.getElapsedTime()

      if (modelGroup) {
        // Continuous auto 360 rotation
        modelGroup.rotation.y = elapsedTime * 0.45

        // Smooth interactive mouse tilt
        targetRotationX = mouseY * 0.35
        targetRotationY = mouseX * 0.35

        modelGroup.rotation.x += (targetRotationX - modelGroup.rotation.x) * 0.05
        modelGroup.rotation.z += (-targetRotationY - modelGroup.rotation.z) * 0.05

        // Subtle floating bob effect
        modelGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.12
      }

      if (renderer && scene && camera) {
        renderer.render(scene, camera)
      }
    }

    animate()

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("touchmove", handleTouchMove)
      resizeObserver.disconnect()

      if (renderer && renderer.domElement) {
        renderer.dispose()
        if (renderer.domElement.parentElement === container) {
          container.removeChild(renderer.domElement)
        }
      }
    }
  }, [])

  if (hasError) return null

  return (
    <div className={`relative ${className}`}>
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing relative z-10"
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="size-4 rounded-full border border-white/20 border-t-white/80 animate-spin" />
        </div>
      )}
    </div>
  )
}
