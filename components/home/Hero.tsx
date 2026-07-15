"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

type HeroSlide = {
  leftImage: string
  rightImage: string
}

const heroSlides: HeroSlide[] = [
  {
    leftImage: "/images/products/product1.png",
    rightImage: "/images/products/product2.png",
  },
  {
    leftImage: "/images/hero-left.png",
    rightImage: "/images/hero-right.png",
  },
  {
    leftImage: "/images/products/product3.png",
    rightImage: "/images/products/product4.png",
  },
  {
    leftImage: "/images/products/product8.png",
    rightImage: "/images/products/product9.png",
  },
]

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 5000)

    return () => {
      window.clearInterval(interval)
    }
  }, [activeSlide])

  return (
    <section className="relative -mt-[var(--header-stack-height)] min-h-[100svh] overflow-hidden bg-[#d4cdc1] pt-[var(--header-stack-height)] text-white">
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => {
          const isActive = index === activeSlide

          return (
            <div
              key={slide.leftImage}
              aria-hidden={!isActive}
              className={cn(
                "absolute inset-0 grid grid-rows-2 transition-opacity duration-700 ease-out lg:grid-cols-2 lg:grid-rows-1",
                isActive ? "opacity-100" : "pointer-events-none opacity-0"
              )}
            >
              <div className="relative min-h-[50svh] lg:min-h-0">
                <Image
                  src={slide.leftImage}
                  alt=""
                  fill
                  priority={isActive}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="relative min-h-[50svh] lg:min-h-0">
                <Image
                  src={slide.rightImage}
                  alt=""
                  fill
                  priority={isActive}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top grayscale"
                />
              </div>
            </div>
          )
        })}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/8 via-transparent to-black/10" />
      </div>

      <div className="relative z-10 flex min-h-[calc(100svh-var(--header-stack-height))] items-end justify-center px-5 pb-20 sm:px-6 lg:pb-[7rem]">
        <div className="flex flex-col items-center gap-5 text-center">
          <h1 className="font-heading text-[clamp(2.5rem,5.2vw,5.4rem)] font-semibold uppercase leading-none tracking-[-0.045em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.18)]">
            Refine Your Style
          </h1>
          <Link
            href="/collections"
            className="inline-flex items-center justify-center border border-white/85 px-5 py-2.5 text-[0.875rem] uppercase tracking-[0.12em] transition-colors hover:bg-white/10"
          >
            Explore Collection
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 right-7 z-20 flex items-center gap-2 text-white/85">
        <div className="flex items-center gap-2">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.leftImage}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-pressed={index === activeSlide}
              onClick={() => setActiveSlide(index)}
              className={cn(
                "rounded-full transition-all duration-300",
                index === activeSlide
                  ? "size-3 bg-white"
                  : "size-3 bg-white/35 hover:bg-white/60"
              )}
            />
          ))}
        </div>
        <span className="ml-1 text-sm font-normal tracking-[0.04em]">
          {activeSlide + 1}/{heroSlides.length}
        </span>
      </div>

      <span id="shop" className="sr-only">
        Shop
      </span>
      <span id="bestsellers" className="sr-only">
        Bestsellers
      </span>
      <span id="contact" className="sr-only">
        Contact Us
      </span>
      <span id="collections" className="sr-only">
        Collection
      </span>
    </section>
  )
}
