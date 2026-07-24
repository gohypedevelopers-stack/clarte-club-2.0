"use client"

import { cn } from "@/lib/utils"

const marqueeText =
  "CAPS — COMING SOON • LEATHER CARRYALLS — COMING SOON • PREMIUM CASE COLLECTION — COMING SOON • ACETATE WRIST STRAPS — COMING SOON • GLASSES CARE KITS — COMING SOON • "

function MarqueeStrip() {
  return (
    <div className="flex shrink-0 items-center gap-16 pr-16 whitespace-nowrap">
      {Array.from({ length: 4 }).map((_, repeatIndex) => (
        <span key={`repeat-${repeatIndex}`} className="whitespace-nowrap font-marquee text-[10.08px] font-normal uppercase tracking-[0.25em] text-[#F6F2EA]">
          {marqueeText}
        </span>
      ))}
    </div>
  )
}

export function ComingSoonMarquee() {
  return (
    <section className="w-full overflow-hidden bg-[#161618] py-4 text-white border-y border-white/5">
      <h2 className="sr-only">Future release announcements</h2>

      <div
        className={cn(
          "flex w-max items-center animate-[marquee_30s_linear_infinite] motion-reduce:animate-none",
          "[will-change:transform]"
        )}
      >
        <MarqueeStrip />
        <MarqueeStrip />
      </div>
    </section>
  )
}
