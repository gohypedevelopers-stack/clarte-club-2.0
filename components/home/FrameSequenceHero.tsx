"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FRAME_COUNT = 120;

const SLIDES = [
  {
    tag: "New Eyewear Collection",
    title: "Refine Your Style",
    description: "Scroll to explore the collection.",
    ctaText: "Explore Collection",
    ctaLink: "/collections"
  },
  {
    tag: "Handcrafted Designs",
    title: "Uncompromised Quality",
    description: "Meticulously designed frames made to last.",
    ctaText: "View Bestsellers",
    ctaLink: "/#bestsellers"
  },
  {
    tag: "The Craftsmanship",
    title: "Sculpted Frames",
    description: "Indulge in silhouettes that frame your perspective.",
    ctaText: "Shop Acetate",
    ctaLink: "/collections"
  },
  {
    tag: "Exclusive Colorways",
    title: "Earthy Palettes",
    description: "Inspired by natural tones and modern design.",
    ctaText: "Discover More",
    ctaLink: "/about"
  },
  {
    tag: "Elevate Your Look",
    title: "See Beyond The Ordinary",
    description: "Experience the next iteration of eyewear design.",
    ctaText: "Shop the Collection",
    ctaLink: "/collections"
  }
];

function getFramePath(index: number) {
  const frameNumber = String(index + 1).padStart(4, "0");
  return `/video/eyewear-hero-frames/eyewear-hero-frames/frame_${frameNumber}-clean.png`;
}

export function FrameSequenceHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const progressTextRef = useRef<HTMLSpanElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const indicatorLabelRef = useRef<HTMLSpanElement>(null);
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const content = contentRef.current;

    if (!section || !canvas || !content) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const images: HTMLImageElement[] = [];
    const playhead = { frame: 0 };

    let loadedCount = 0;
    let currentFrame = 0;
    let resizeFrame = 0;
    let cachedWidth = 0;
    let cachedHeight = 0;
    let isMobile = false;

    function resizeCanvas() {
      cachedWidth = canvas!.clientWidth;
      cachedHeight = canvas!.clientHeight;
      isMobile = window.innerWidth < 1024;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas!.width = Math.round(cachedWidth * pixelRatio);
      canvas!.height = Math.round(cachedHeight * pixelRatio);

      context!.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    }

    function drawCover(image: HTMLImageElement) {
      if (!cachedWidth || !cachedHeight) return;

      context!.clearRect(0, 0, cachedWidth, cachedHeight);

      const imageRatio = image.naturalWidth / image.naturalHeight;
      const canvasRatio = cachedWidth / cachedHeight;

      if (!isMobile) {
        let drawWidth: number;
        let drawHeight: number;
        let offsetX: number;
        let offsetY: number;

        if (imageRatio > canvasRatio) {
          drawHeight = cachedHeight;
          drawWidth = drawHeight * imageRatio;
          offsetX = (cachedWidth - drawWidth) / 2;
          offsetY = 0;
        } else {
          drawWidth = cachedWidth;
          drawHeight = drawWidth / imageRatio;
          offsetX = 0;
          offsetY = (cachedHeight - drawHeight) / 2;
        }

        context!.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
      } else {
        // Draw blurred cover as background
        let coverWidth: number;
        let coverHeight: number;
        let coverX: number;
        let coverY: number;

        if (imageRatio > canvasRatio) {
          coverHeight = cachedHeight;
          coverWidth = coverHeight * imageRatio;
          coverX = (cachedWidth - coverWidth) / 2;
          coverY = 0;
        } else {
          coverWidth = cachedWidth;
          coverHeight = coverWidth / imageRatio;
          coverX = 0;
          coverY = (cachedHeight - coverHeight) / 2;
        }

        context!.save();
        if ("filter" in context!) {
          context!.filter = "blur(20px) brightness(0.5) saturate(0.8)";
        }
        context!.drawImage(image, coverX - 10, coverY - 10, coverWidth + 20, coverHeight + 20);
        context!.restore();

        // Draw clean contain as foreground
        let containWidth: number;
        let containHeight: number;
        let containX: number;
        let containY: number;

        if (imageRatio < canvasRatio) {
          containHeight = cachedHeight;
          containWidth = containHeight * imageRatio;
          containX = (cachedWidth - containWidth) / 2;
          containY = 0;
        } else {
          containWidth = cachedWidth;
          containHeight = containWidth / imageRatio;
          containX = 0;
          containY = (cachedHeight - containHeight) / 2;
        }

        context!.drawImage(image, containX, containY, containWidth, containHeight);
      }
    }

    function renderFrame() {
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.round(playhead.frame))
      );

      const image = images[frameIndex];
      if (!image?.complete || !image.naturalWidth) return;

      currentFrame = frameIndex;
      drawCover(image);

      if (loadedCount >= FRAME_COUNT) {
        const progressPercent = Math.round((frameIndex / (FRAME_COUNT - 1)) * 100);
        if (progressTextRef.current) {
          progressTextRef.current.textContent = `${String(progressPercent).padStart(2, "0")}%`;
        }
        if (progressBarRef.current) {
          progressBarRef.current.style.transform = `scaleY(${progressPercent / 100})`;
        }
        if (indicatorLabelRef.current) {
          indicatorLabelRef.current.textContent = "Scroll";
        }
      }
    }

    resizeCanvas();

    for (let index = 0; index < FRAME_COUNT; index += 1) {
      const image = new Image();
      image.src = getFramePath(index);
      image.decoding = "async";

      image.onload = () => {
        loadedCount += 1;
        const currentProgress = Math.round((loadedCount / FRAME_COUNT) * 100);
        setLoading(currentProgress);

        if (progressTextRef.current) {
          progressTextRef.current.textContent = `${String(currentProgress).padStart(2, "0")}%`;
        }
        if (progressBarRef.current) {
          progressBarRef.current.style.transform = `scaleY(${currentProgress / 100})`;
        }
        if (indicatorLabelRef.current) {
          indicatorLabelRef.current.textContent = currentProgress < 100 ? "Loading" : "Scroll";
        }

        if (index === 0) {
          renderFrame();
        }
      };

      images.push(image);
    }

    const gsapContext = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          // Dynamically calculate exactly 500vh scroll distance
          end: () => `+=${window.innerHeight * 5}`,
          // Sync closely with scroll (0.5s scrub provides a smooth deceleration catch-up without feeling delayed/laggy)
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onToggle: (self) => {
            if (self.isActive) {
              document.body.classList.add("hero-pin-active");
            } else {
              document.body.classList.remove("hero-pin-active");
            }
          },
          onRefresh: (self) => {
            if (self.isActive) {
              document.body.classList.add("hero-pin-active");
            } else {
              document.body.classList.remove("hero-pin-active");
            }
          }
        },
      });

      // Drive frame sequence via scroll
      timeline.to(
        playhead,
        {
          frame: FRAME_COUNT - 1,
          duration: 1,
          ease: "none",
          onUpdate: renderFrame,
        },
        0
      );

      // Subtle canvas parallax scale
      timeline.fromTo(
        canvas,
        { scale: 1.08, yPercent: -2 },
        { scale: 1.02, yPercent: 2, duration: 1, ease: "none" },
        0
      );

      // Select all slide content items
      const slides = section.querySelectorAll(".slide-content");

      // Initialize slide states in GSAP
      gsap.set(slides, { yPercent: 15, opacity: 0, pointerEvents: "none" });
      gsap.set(slides[0], { yPercent: 0, opacity: 1, pointerEvents: "auto" });

      // Slide 0 exits
      timeline.to(slides[0], {
        opacity: 0,
        yPercent: -15,
        pointerEvents: "none",
        duration: 0.05,
      }, 0.15);

      // Slide 1 enters & exits
      timeline.fromTo(slides[1],
        { opacity: 0, yPercent: 15 },
        { opacity: 1, yPercent: 0, pointerEvents: "auto", duration: 0.05 },
        0.20
      );
      timeline.to(slides[1], {
        opacity: 0,
        yPercent: -15,
        pointerEvents: "none",
        duration: 0.05,
      }, 0.35);

      // Slide 2 enters & exits
      timeline.fromTo(slides[2],
        { opacity: 0, yPercent: 15 },
        { opacity: 1, yPercent: 0, pointerEvents: "auto", duration: 0.05 },
        0.40
      );
      timeline.to(slides[2], {
        opacity: 0,
        yPercent: -15,
        pointerEvents: "none",
        duration: 0.05,
      }, 0.55);

      // Slide 3 enters & exits
      timeline.fromTo(slides[3],
        { opacity: 0, yPercent: 15 },
        { opacity: 1, yPercent: 0, pointerEvents: "auto", duration: 0.05 },
        0.60
      );
      timeline.to(slides[3], {
        opacity: 0,
        yPercent: -15,
        pointerEvents: "none",
        duration: 0.05,
      }, 0.75);

      // Slide 4 enters & remains
      timeline.fromTo(slides[4],
        { opacity: 0, yPercent: 15 },
        { opacity: 1, yPercent: 0, pointerEvents: "auto", duration: 0.05 },
        0.80
      );

      if (timeline.scrollTrigger && timeline.scrollTrigger.isActive) {
        document.body.classList.add("hero-pin-active");
      }
    }, section);

    function handleResize() {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(() => {
        resizeCanvas();
        const image = images[currentFrame];
        if (image?.complete) drawCover(image);
        ScrollTrigger.refresh();
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(resizeFrame);
      window.removeEventListener("resize", handleResize);
      document.body.classList.remove("hero-pin-active");
      gsapContext.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] w-full overflow-hidden bg-black"
    >
      {/* Frame sequence canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full will-change-transform"
        aria-label="Clarte Club eyewear scroll animation"
      />

      {/* Left-side cinematic gradient for text legibility */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/70 via-black/10 to-black/25" />

      {/* Bottom vignette */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/60 via-transparent to-black/15" />

      {/* Hero content slides container */}
      <div
        ref={contentRef}
        className="absolute inset-0 z-10 flex items-end px-6 pb-12 md:px-12 md:pb-16 lg:px-20 lg:pb-20"
      >
        <div className="relative w-full max-w-4xl h-[280px] md:h-[240px] lg:h-[280px]">
          {SLIDES.map((slide, index) => (
            <div
              key={index}
              className="slide-content absolute bottom-0 left-0 w-full flex flex-col items-start origin-bottom"
              style={{
                opacity: index === 0 ? 1 : 0,
                transform: index === 0 ? "translateY(0%)" : "translateY(15%)",
                pointerEvents: index === 0 ? "auto" : "none",
              }}
            >
              <p className="mb-4 text-xs uppercase tracking-[0.4em] text-white/60 font-medium">
                {slide.tag}
              </p>

              <h1 className="font-heading text-2xl font-semibold uppercase leading-none tracking-[-0.045em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.18)] sm:text-3xl md:text-4xl lg:text-[2.85rem] xl:text-[3.25rem] whitespace-nowrap">
                {slide.title}
              </h1>

              <p className="mt-5 max-w-sm text-sm leading-6 text-white/60 md:text-base">
                {slide.description}
              </p>

              <Link
                href={slide.ctaLink}
                className="mt-8 inline-flex items-center justify-center border border-white/85 px-5 py-2.5 text-[0.875rem] uppercase tracking-[0.12em] text-white transition-colors hover:bg-white/10"
              >
                {slide.ctaText}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Animated load & scroll status indicator */}
      <div className="absolute bottom-8 right-6 z-20 flex items-center gap-4 text-white md:right-12 lg:right-20 select-none">
        <div className="flex flex-col items-end gap-0.5">
          <span ref={indicatorLabelRef} className="text-[9px] uppercase tracking-[0.25em] text-white/40 font-medium font-sans">
            {loading < 100 ? "Loading" : "Scroll"}
          </span>
          <span ref={progressTextRef} className="text-sm font-mono tracking-wider tabular-nums font-semibold text-white">
            {loading}%
          </span>
        </div>
        
        <div className="relative h-10 w-px bg-white/20 overflow-hidden">
          <div
            ref={progressBarRef}
            className="absolute top-0 left-0 w-full bg-white origin-top transition-transform duration-75"
            style={{
              height: "100%",
              transform: `scaleY(${loading / 100})`
            }}
          />
        </div>
      </div>

      {/* SR anchors preserved from original Hero */}
      <span id="shop" className="sr-only">Shop</span>
      <span id="bestsellers" className="sr-only">Bestsellers</span>
      <span id="contact" className="sr-only">Contact Us</span>
      <span id="collections" className="sr-only">Collection</span>
    </section>
  );
}
