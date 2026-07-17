import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Clarté Club | A Considered, Unisex Eyewear Label",
  description: "The story behind Clarté Club: a small, design-led label building considered sunglasses and eyewear, honestly, in small numbers.",
}

export default function AboutPage() {
  return (
    <main className="flex-1 bg-black text-white font-sans min-h-screen pt-[var(--header-stack-height)] pb-24">
      
      {/* Editorial Title Hero */}
      <section className="relative w-full border-b border-white/10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center space-y-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-white/40">
            Our Story
          </p>
          <h1 className="font-heading text-[38px] md:text-[54px] font-normal uppercase leading-[1.05] tracking-tight text-white">
            About us.
          </h1>
          <p className="mx-auto max-w-2xl text-[15px] leading-[1.8] text-white/60 font-light mt-4">
            A small, design-led label building considered sunglasses and eyewear, honestly, in small numbers.
          </p>
        </div>
      </section>

      {/* Philosophy Grid */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 items-start">
          
          {/* Story Text Block (7 cols) */}
          <div className="lg:col-span-7 space-y-12 pr-0 lg:pr-12">
            
            {/* Who we are */}
            <div className="space-y-3">
              <h2 className="font-heading text-lg font-normal uppercase tracking-wider text-white/90">
                Who we are
              </h2>
              <p className="text-[15px] leading-[1.8] text-white/60 font-light">
                Clarté Club is a design-led, independent eyewear studio. We curated the range, selected the materials, and refined the details we care about. Then we set a standard and refused to ship anything that fell short.
              </p>
            </div>
            
            {/* What we don't do */}
            <div className="space-y-3">
              <h2 className="font-heading text-lg font-normal uppercase tracking-wider text-white/90">
                What we don't do
              </h2>
              <p className="text-[15px] leading-[1.8] text-white/60 font-light">
                We don't run our own factory, and we won't dress that up. We design, we select, we inspect, and we stand behind our work. If something isn't right, we will make it right.
              </p>
            </div>

            {/* How we release */}
            <div className="space-y-3">
              <h2 className="font-heading text-lg font-normal uppercase tracking-wider text-white/90">
                How we release
              </h2>
              <p className="text-[15px] leading-[1.8] text-white/60 font-light">
                In small numbers. When something sells out, it's out. We move on to the next thing rather than restock the last one forever.
              </p>
            </div>

            {/* Why we call it a Club */}
            <div className="space-y-3">
              <h2 className="font-heading text-lg font-normal uppercase tracking-wider text-white/90">
                Why we call it a Club
              </h2>
              <p className="text-[15px] leading-[1.8] text-white/60 font-light">
                Because the people who like what we make tend to share a specific mindset. Quiet about it, a little particular. &quot;Club&quot; felt more authentic than &quot;customers.&quot;
              </p>
            </div>

          </div>

          {/* Large Image Frame (5 cols) */}
          <div className="lg:col-span-5 relative aspect-[4/5] bg-neutral-900 border border-white/10 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
            <Image
              src="/images/products/product1.png"
              alt="Model posing in Clarté Club structured frames"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover object-top filter grayscale contrast-[1.08] hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>

        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center border-t border-white/10 space-y-8">
        <p className="text-[16px] leading-[1.8] text-white/70 font-light">
          If any of this sounds like your kind of thing, have a look around.
        </p>
        <Link
          href="/collections"
          className="inline-flex items-center justify-center border border-white/80 px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-black font-medium"
        >
          See the Collection
        </Link>
      </section>

    </main>
  )
}
