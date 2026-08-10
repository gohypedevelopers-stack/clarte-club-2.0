import React from "react"
import { ScrollVideoHero } from "@/components/test-hero/ScrollVideoHero"

export const metadata = {
  title: "Scroll Video Hero Test • Clarté Club",
  description: "Test page for high-performance canvas scroll video hero section with inertia dampening.",
}

export default function TestHeroPage() {
  return (
    <main className="min-h-screen -mt-[var(--header-stack-height)] bg-black text-white selection:bg-white selection:text-black">
      {/* Pinned Scroll Video Hero Section */}
      <ScrollVideoHero />

      {/* Subsequent Page Content to verify unpinning & natural scroll flow */}
      <section className="relative z-20 bg-neutral-950 py-32 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="space-y-4">
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">
              NEXT SECTION • UNPINNED
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">
              CRAFTED FOR EYES THAT DISCERNINGLY SEE THE DIFFERENCE
            </h2>
            <p className="text-white/60 font-light text-base md:text-lg max-w-2xl leading-relaxed">
              You have smoothly scrolled through the 100vh hero section. Notice how the canvas frame video sequence decelerated smoothly without any frame drop or jarring cutoff.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-4">
              <div className="text-3xl font-serif italic text-white">01</div>
              <h3 className="text-lg font-medium text-white">Pre-Loaded Memory</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                All 192 webp frames loaded into HTMLImageElement memory before render, ensuring instant canvas draws without HTTP requests during scroll.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-4">
              <div className="text-3xl font-serif italic text-white">02</div>
              <h3 className="text-lg font-medium text-white">Spring Physics Lerp</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Framer Motion spring interpolation smoothly coasts frame state over 2–4 extra frames when mouse wheel or touch drag stops.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-4">
              <div className="text-3xl font-serif italic text-white">03</div>
              <h3 className="text-lg font-medium text-white">100vh Pin Travel</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                The scroll container height is exactly 200vh with sticky top-0 pinning, restricting video scroll travel to exactly 100vh.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
