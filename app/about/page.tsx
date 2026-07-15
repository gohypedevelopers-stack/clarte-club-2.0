import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us | Clarte Club",
  description: "Learn about the curation philosophy, batch scarcity, and premium materials behind Clarte Club eyewear.",
}

export default function AboutPage() {
  return (
    <main className="flex-1 bg-white text-black font-sans">
      
      {/* Editorial Title Hero */}
      <section className="relative w-full border-b border-black/10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-black/45">
            Transparent Vision
          </p>
          <h1 className="font-heading text-[38px] md:text-[54px] font-normal uppercase leading-[1.05] tracking-tight">
            Design is Curation
          </h1>
          <p className="mx-auto max-w-2xl text-[16px] leading-[1.8] text-black/60 font-light mt-4">
            We do not believe in the marketing hype of &quot;artisan handmade&quot; shortcuts. We believe in meticulous curation, premium engineering, and small-batch scarcity.
          </p>
        </div>
      </section>

      {/* Philosophy Grid */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          
          {/* Story Text Block */}
          <div className="space-y-8 pr-0 lg:pr-8">
            <div className="space-y-4">
              <h2 className="font-heading text-[26px] md:text-[32px] font-normal uppercase tracking-tight leading-tight">
                Our Story: Why Eyewear?
              </h2>
              <div className="h-[2px] w-12 bg-black" />
            </div>
            
            <p className="text-[15px] leading-[1.8] text-black/70 font-light">
              Clarté Club was established as a luxury design label focused on highlighting individual character. We quickly realized that eyewear represents the most personal design decision you make daily. It frames how you see the world, and how the world sees you.
            </p>

            <p className="text-[15px] leading-[1.8] text-black/70 font-light">
              Rather than branding ourselves as another mass-market license holder, we designed Clarté to exist as a modern alternative. Every capsule is developed in-house, focusing on geometric structure and classic silhouettes reimagined for modern editorial lifestyles.
            </p>
          </div>

          {/* Large Image Frame */}
          <div className="relative aspect-[4/5] bg-[#efefef] border border-black/5 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
            <Image
              src="/images/products/product1.png"
              alt="Model posing in Clarte Club structured frames"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
              priority
            />
          </div>

        </div>
      </section>

      {/* Materials & Production Transparency */}
      <section className="w-full bg-[#fcfbfa] border-t border-black/10 py-20 text-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center space-y-3">
            <h2 className="font-heading text-[28px] md:text-[34px] font-normal uppercase tracking-tight">
              Radical Transparency
            </h2>
            <p className="text-[12px] uppercase tracking-widest text-black/45">
              Honest specifications of our production
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Spec 1 */}
            <div className="border border-black/10 p-8 bg-white space-y-4">
              <h3 className="font-heading text-[16px] font-semibold uppercase tracking-wider text-black">
                Bio-Acetate Frames
              </h3>
              <p className="text-[14px] leading-[1.7] text-black/60 font-light">
                We select custom-engineered bio-acetate polymer derived from wood pulp and cotton fibers. It offers rich structural depth, drapes lightweight on the face, and is completely biodegradable.
              </p>
            </div>

            {/* Spec 2 */}
            <div className="border border-black/10 p-8 bg-white space-y-4">
              <h3 className="font-heading text-[16px] font-semibold uppercase tracking-wider text-black">
                Small-Batch Scarcity
              </h3>
              <p className="text-[14px] leading-[1.7] text-black/60 font-light">
                To reduce waste and ensure exclusivity, we run batches of only 150–300 frames per model. We do not restock capsules once they are exhausted, protecting your unique style choice.
              </p>
            </div>

            {/* Spec 3 */}
            <div className="border border-black/10 p-8 bg-white space-y-4">
              <h3 className="font-heading text-[16px] font-semibold uppercase tracking-wider text-black">
                Engineered, Not Handmade
              </h3>
              <p className="text-[14px] leading-[1.7] text-black/60 font-light">
                We use state-of-the-art CNC micro-milling machines and hydraulic hinges rather than relying on manual assembly. High-precision tooling ensures consistent fit, structural integrity, and durability.
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}
