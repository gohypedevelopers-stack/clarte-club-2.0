"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

type DenimSlide = {
  title: string
  image: string
  alt: string
}

const denimSlides: DenimSlide[] = [
  {
    title: "SKINNY DENIMS",
    image: "/images/products/product5-white.png",
    alt: "Model wearing skinny denim",
  },
  {
    title: "BOOTCUT DENIMS",
    image: "/images/products/product5-white.png",
    alt: "Model wearing bootcut denim",
  },
  {
    title: "LOW-RISE DENIMS",
    image: "/images/products/product5-white.png",
    alt: "Model wearing low-rise denim",
  },
  {
    title: "STRAIGHT DENIMS",
    image: "/images/products/product5-white.png",
    alt: "Model wearing straight denim",
  },
  {
    title: "RELAXED DENIMS",
    image: "/images/products/product5-white.png",
    alt: "Model wearing relaxed denim",
  },
]

function DenimSlideCard({ slide }: { slide: DenimSlide }) {
  return (
    <article className="relative h-[500px] w-full overflow-hidden bg-[#F6F2EA] sm:h-[580px] md:h-[640px] lg:h-[700px]">
      <Image
        src={slide.image}
        alt={slide.alt}
        fill
        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 64vw, 627px"
        className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
        priority={false}
      />

      {/* Vignette Overlay for readability */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
      />

      <div className="absolute inset-x-6 bottom-14 z-10 text-white">
        <h3
          className="font-semibold uppercase tracking-[0.1em]"
          style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.25rem)" }}
        >
          {slide.title}
        </h3>

        <Link
          href="/collections"
          className="group relative mt-3 inline-flex h-8 items-center justify-center overflow-hidden border border-white/80 px-4 text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-white no-underline transition-colors duration-300 hover:text-black"
        >
          {/* Slide fill background on hover */}
          <span
            aria-hidden
            className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 ease-out group-hover:translate-x-0"
          />
          <span className="relative z-10">Explore Collection</span>
        </Link>
      </div>
    </article>
  )
}

export function DenimCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [api, current])

  return (
    <section className="w-full bg-[#F6F2EA] pb-16 pt-10 text-black md:pb-20">
      <div className="relative w-full">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          aria-label="Denim collection carousel"
        >
          <CarouselContent className="-ml-1.5">
            {denimSlides.map((slide) => (
              <CarouselItem
                key={slide.title}
                className="basis-[92%] pl-1.5 sm:basis-[72%] md:basis-[48%] lg:basis-1/3"
              >
                <DenimSlideCard slide={slide} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Progress Indicators overlaying the bottom center */}
        {count > 0 && (
          <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2.5">
            {Array.from({ length: count }).map((_, index) => {
              const isActive = index === current
              return (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  aria-pressed={isActive}
                  onClick={() => api?.scrollTo(index)}
                  className={cn(
                    "relative overflow-hidden transition-all duration-300",
                    isActive
                      ? "h-[2.5px] w-8 rounded-full bg-white/30"
                      : "h-1.5 w-1.5 rounded-full bg-white/45 hover:bg-white/70"
                  )}
                >
                  {isActive && (
                    <span
                      className="absolute left-0 top-0 bottom-0 bg-[#C9B07A]"
                      style={{
                        animation: "hero-progress 5000ms linear forwards",
                      }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

