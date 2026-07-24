"use client"

import Link from "next/link"

export function Hero() {
  return (
    <section className="relative -mt-[var(--header-stack-height)] h-[100svh] w-full overflow-hidden bg-black text-white">
      {/* Background Video */}
      <div className="absolute inset-0 size-full overflow-hidden">
        <video
          src="/video/Parallax_CGI_Video_Prompt_Crea.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 size-full object-cover"
        />
        {/* Subtle overlays for cinematic depth and text legibility */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/70 via-black/20 to-black/30" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/70 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 flex h-full items-end px-6 pb-16 sm:px-10 lg:px-16 lg:pb-20">
        <div className="flex flex-col items-start gap-4 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70 font-medium">
            New Eyewear Collection
          </p>

          <h1 className="font-heading text-3xl font-semibold uppercase leading-none tracking-[-0.045em] text-white sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-md">
            Refine Your Style
          </h1>

          <p className="mt-1 max-w-md text-sm leading-relaxed text-white/70 sm:text-base font-light">
            Considered eyewear designed for modern character.
          </p>

          <Link
            href="/collections"
            className="mt-4 inline-flex items-center justify-center border border-white/85 px-6 py-3 text-xs sm:text-sm uppercase tracking-[0.14em] text-white transition-all hover:bg-white hover:text-black font-medium"
          >
            Explore Collection
          </Link>
        </div>
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
