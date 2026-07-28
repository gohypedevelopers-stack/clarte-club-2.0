"use client"

import Image from "next/image"
import Link from "next/link"

export function ComingSoonMarquee() {
  return (
    <Link
      href="/collections"
      aria-label="The Club Is Expanding - Discover Collections"
      className="w-full relative block overflow-hidden bg-black text-white aspect-[2.2/1] sm:aspect-[2.5/1] md:aspect-[2.8/1] border-y border-white/10 group cursor-pointer"
    >
      {/* Architectural Banner Image optimized for mobile and desktop */}
      <Image
        src="/images/club-expanding.png"
        alt="The Club Is Expanding - New Categories. Same Clarté."
        fill
        priority
        sizes="100vw"
        className="object-contain sm:object-cover object-center filter brightness-100 contrast-[1.02] transition-transform duration-1000 group-hover:scale-[1.01]"
      />
    </Link>
  )
}
