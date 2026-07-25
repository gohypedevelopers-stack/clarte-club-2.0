"use client"

import Link from "next/link"
import Image from "next/image"
import { LaunchOfferBar } from "@/components/home/LaunchOfferBar"

export function Hero() {
  return (
    <section className="relative h-screen h-[100dvh] min-h-[100dvh] w-full overflow-hidden bg-black text-white">
      {/* Background Static Banner */}
      <div className="absolute inset-0 size-full overflow-hidden">
        {/* Mobile View Image - Vertical portrait image */}
        <Image
          src="/images/ChatGPT Image Jul 25, 2026, 11_29_15 AM.png"
          alt="Clarté Club Eyewear Mobile"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 size-full object-cover object-center block md:hidden brightness-[0.85] contrast-[1.03]"
        />
        {/* Desktop View Image */}
        <Image
          src="/images/ChatGPT Image Jul 25, 2026, 11_13_56 AM.png"
          alt="Clarté Club Eyewear"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 size-full object-cover object-center hidden md:block brightness-[0.85] contrast-[1.03]"
        />
        {/* Cinematic dark overlays for header legibility and reduced brightness */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/65 via-black/20 to-black/60" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-black/25" />
      </div>

      {/* Minimal Semi-Transparent Launch Offer Bar positioned at 100vh bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <LaunchOfferBar className="bg-[#121214]/65 backdrop-blur-md border-t border-[#C9B07A]/30" />
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
