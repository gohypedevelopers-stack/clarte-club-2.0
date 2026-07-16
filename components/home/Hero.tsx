"use client"

import Link from "next/link"

export function Hero() {
  return (
    <section className="relative -mt-[var(--header-stack-height)] min-h-[100svh] overflow-hidden bg-black pt-[var(--header-stack-height)] text-white">
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
        {/* Subtle overlay for text readability and cinematic feel */}
        <div className="absolute inset-0 bg-black/35" />
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
