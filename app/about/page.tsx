// Clarté Club - Our Story (Light Mode Architectural Layout)
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { TextReveal } from "@/components/ui/text-reveal"
import SecretDesire from "@/components/home/SecretDesire"
import StandardsAccordion from "@/components/about/StandardsAccordion"

export const metadata: Metadata = {
  title: "Our Story | Clarté Club",
  description: "The story behind Clarté Club: an independent, design-led studio building considered eyewear in strictly limited numbers.",
}

export default function AboutPage() {
  const philosophyCards = [
    {
      num: "01",
      title: "Who We Are",
      subtitle: "Independent Studio",
      desc: "Clarté Club is an independent, design-led eyewear studio. We curate the range, select materials, and refine every line with intention.",
      image: "/images/hero-left.png",
      tag: "Design Curation",
      badge: "Studio Curation",
      specs: ["Considered Shapes", "Studio Curation", "Unisex Aesthetics"]
    },
    {
      num: "02",
      title: "Radical Honesty",
      subtitle: "Transparent Curation",
      desc: "We don't run our own factory, and we won't dress that up. We design, select, inspect, and stand behind every single pair we produce.",
      image: "/images/products/product4.png",
      tag: "Pure Curation",
      badge: "Zero Pretense",
      specs: ["Direct Pricing", "Full Transparency", "Zero Fake Sales"]
    },
    {
      num: "03",
      title: "Small-Batch Scarcity",
      subtitle: "150-300 Frames Per Run",
      desc: "To eliminate excess waste and ensure true exclusivity, we release strictly limited runs. When a batch sells out, it is retired.",
      image: "/images/products/product12.png",
      tag: "Limited Releases",
      badge: "Batch Exclusivity",
      specs: ["Max 300 Units", "Serialized Runs", "Zero Restocks"]
    }
  ]

  const highlights = [
    {
      title: "One Honest Price",
      desc: "What you see is the true price, not an inflated cost with a fake discount. If a price moves, it's a real change, not a fake sale."
    },
    {
      title: "Made to Last",
      desc: "Built for daily use, not just for photos."
    },
    {
      title: "Zero Restocks",
      desc: "When a design is done, we move on. We'd rather build the next iteration than repeat our past releases indefinitely."
    },
    {
      title: "If it's wrong, we fix it",
      desc: "If something is not right with your order, tell us. We'll make it right without a fuss. That's a real answer, not a policy line."
    }
  ]

  return (
    <main className="flex-1 bg-[#FAF8F5] text-[#0F0F10] font-sans min-h-screen">
      
      {/* 1. Header & Architectural Title Section */}
      <section className="w-full px-6 sm:px-12 md:px-20 pt-4 sm:pt-6 pb-8 border-b border-[#E5E0D8]">
        <div className="mx-auto max-w-7xl">
          
          {/* Header Title */}
          <h1 className="font-heading text-[clamp(2.8rem,7.5vw,7.5rem)] font-extrabold uppercase leading-none tracking-[-0.03em] text-[#0F0F10]">
            OUR STORY
          </h1>

          {/* 3 Sub-header Mantras Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 mt-6 border-t border-[#E5E0D8] text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-500">
            <div>DESIGN-LED INDEPENDENT STUDIO</div>
            <div>CONSIDERED MATERIALS & LONGEVITY</div>
            <div>DESIGNED WITH PURPOSE</div>
          </div>

        </div>
      </section>

      {/* 2. Asymmetric Hero Visual Grid */}
      <section className="w-full px-6 sm:px-12 md:px-20 py-16 border-b border-[#E5E0D8]">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Panel: Architectural Portrait */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="relative aspect-[4/5] w-full bg-[#EDE8E0] overflow-hidden border border-[#E5E0D8]">
              <Image
                src="/images/hero-left.png"
                alt="Clarté Club Eyewear Studio"
                fill
                priority
                className="object-cover filter contrast-[1.03]"
              />
            </div>
            <p className="text-[12px] leading-relaxed text-neutral-500 font-light tracking-wide">
              Presence over noise. That's the whole idea.
            </p>
          </div>

          {/* Right Panel: Clean Knolling Frame Card */}
          <div className="lg:col-span-7 bg-[#F4F0E8] border border-[#E5E0D8] p-8 sm:p-12 flex flex-col justify-between">
            <div className="relative aspect-[16/10] w-full bg-[#FFFFFF] overflow-hidden border border-[#E5E0D8] shadow-sm">
              <Image
                src="/products/product-11.png"
                alt="Precision bio-acetate construction"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#E5E0D8] mt-8">
              <div>
                <p className="text-[11px] uppercase font-semibold tracking-[0.2em] text-[#C9B07A]">
                  Precision Curation
                </p>
                <h3 className="font-heading text-xl uppercase font-medium text-[#0F0F10] mt-1">
                  Materials, Chosen Carefully
                </h3>
              </div>
              <Link
                href="/collections"
                className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#0F0F10] hover:text-[#C9B07A] transition-colors"
              >
                Explore Range →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Watermark Marquee Scrolling Ticker */}
      <section className="relative w-full overflow-hidden bg-[#F0ECE3] text-[#0F0F10] py-6 border-b border-[#E5E0D8]">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marqueeLight {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-light {
            display: flex;
            width: max-content;
            animation: marqueeLight 25s linear infinite;
          }
        `}} />
        
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee-light flex gap-12 text-[clamp(1.5rem,3.5vw,3rem)] font-extrabold uppercase tracking-[0.25em] text-[#0F0F10]/15 whitespace-nowrap select-none">
            {Array(4).fill([
              "CLARTÉ CLUB",
              "CONSIDERED EYEWEAR",
              "DESIGN IS CURATION",
              "SMALL-BATCH SCARCITY"
            ]).flat().map((text, idx) => (
              <span key={idx} className="flex items-center gap-8">
                <span>{text}</span>
                <span className="opacity-40">•</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Scroll-Driven Text Reveal Statement */}
      <section className="w-full bg-[#FAF8F5] border-b border-[#E5E0D8]">
        <TextReveal>
          WE'RE COMMITTED TO **EVERYTHING WE MAKE**, CHOSEN WITH CARE, **CHECKED BEFORE IT EVER REACHES YOU**. THAT'S WHAT WE ACTUALLY **STAND ON**. NOT A CLAIM, JUST THE **WORK BEHIND IT**.
        </TextReveal>
      </section>

      {/* 5. OUR MISSION Section */}
      <section className="w-full px-6 sm:px-12 md:px-20 py-20 bg-[#FAF8F5] border-b border-[#E5E0D8]">
        <div className="mx-auto max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Mission Image & Captions */}
            <div className="lg:col-span-6 space-y-6">
              <div className="border-b border-[#E5E0D8] pb-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0F0F10]">
                  OUR MISSION
                </p>
              </div>
              <div className="relative aspect-[16/10] w-full bg-[#E5E0D8] overflow-hidden border border-[#E5E0D8]">
                <Image
                  src="/images/products/product1.png"
                  alt="Clarté frame silhouette"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col sm:flex-row justify-between text-[11px] text-neutral-500 font-light uppercase tracking-wider gap-2">
                <span>We design everything ourselves. If it doesn't feel right, it doesn't carry our name.</span>
              </div>
            </div>

            {/* Right Column: Text & Quality Card */}
            <div className="lg:col-span-6 space-y-6">
              <p className="text-[13.5px] leading-[1.8] text-neutral-600 font-light max-w-md lg:ml-auto">
                The details most people miss are the ones we spend the most time on.
              </p>
              
              {/* Quality Card Frame */}
              <div className="group relative aspect-[4/3] w-full bg-[#FFFFFF] border border-[#E5E0D8] overflow-hidden p-8 flex flex-col justify-end shadow-sm">
                <Image
                  src="/images/products/product12.png"
                  alt="Quality detail"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/30 to-transparent" />
                
                <div className="relative z-10 flex items-end justify-between pt-12">
                  <h3 className="font-heading text-3xl sm:text-4xl uppercase font-bold text-[#0F0F10] tracking-tight">
                    Quality
                  </h3>
                  <Link
                    href="/collections"
                    className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0F0F10] hover:text-[#C9B07A] transition-colors"
                  >
                    Explore More ↗
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. OUR APPROACH Section */}
      <section className="w-full px-6 sm:px-12 md:px-20 py-20 bg-[#FAF8F5] border-b border-[#E5E0D8]">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left 3 Small Square Grid */}
          <div className="lg:col-span-4 flex items-center gap-3">
            {[
              { img: "/images/products/product6.png", alt: "Frame detail 1" },
              { img: "/images/products/product7.png", alt: "Frame detail 2" },
              { img: "/images/products/product8.png", alt: "Frame detail 3" }
            ].map((item, idx) => (
              <div key={idx} className="relative aspect-square flex-1 bg-[#E5E0D8] border border-[#E5E0D8] overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Right Text Block */}
          <div className="lg:col-span-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <h2 className="font-heading text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-[#0F0F10] shrink-0">
              OUR APPROACH
            </h2>
            <div className="space-y-4 max-w-md">
              <p className="text-[13.5px] leading-[1.8] text-neutral-600 font-light">
                No rushing. No shortcuts. Just work worth putting our name on.
              </p>
              <Link
                href="/how-we-do-things"
                className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[#0F0F10] hover:text-[#C9B07A] transition-colors"
              >
                EXPLORE MORE ↗
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 6.5 Core Pillars - Expanding Accordion Cards Section */}
      <SecretDesire />

      {/* 7. Overlapping Floating Glasses Frame Banner (Before Footer) */}
      <section className="relative w-full px-6 sm:px-12 md:px-20 pt-16 pb-24 bg-[#FAF8F5] overflow-hidden border-b border-[#E5E0D8]">
        <div className="mx-auto max-w-7xl relative space-y-12">
          
          {/* Top Line */}
          <div className="flex justify-between items-center border-b border-[#E5E0D8] pb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400">
            <span>SOCIAL</span>
            <span>RESPONSIBILITY</span>
          </div>

          {/* Heading on top before image drop */}
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase leading-tight tracking-tight text-[#0F0F10]">
              One standard. Everything we make.
            </h2>
          </div>

          {/* Floating Rotated Overlapping Glass Frame Card Container */}
          <div className="relative w-full pt-4 pb-8 flex justify-center items-center">
            <div className="group/card relative w-[85%] sm:w-[620px] aspect-[16/9] z-20 cursor-pointer transform origin-center -rotate-6 sm:-rotate-8 hover:rotate-0 hover:scale-[1.03] shadow-[0_30px_70px_rgba(0,0,0,0.15)] hover:shadow-[0_45px_100px_rgba(0,0,0,0.25)] bg-[#FFFFFF] border border-[#E5E0D8] hover:border-[#C9B07A]/60 p-4 sm:p-6 transition-all duration-700 ease-out">
              <div className="relative size-full overflow-hidden bg-[#FAF8F5] border border-[#E5E0D8]/60 flex items-center justify-center">
                <Image
                  src="/images/products/product5-white.png"
                  alt="Clarté Club considered eyewear frame"
                  fill
                  className="object-contain p-4 filter contrast-[1.05] transition-transform duration-700 ease-out group-hover/card:scale-105"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. Standards & Promises Table */}
      <section className="w-full px-6 sm:px-12 md:px-20 py-24 bg-[#FAF8F5] border-b border-[#E5E0D8]">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#C9B07A] font-semibold">Standards</span>
            <h2 className="font-heading text-3xl font-semibold uppercase tracking-tight text-[#0F0F10] leading-none">
              WHAT WE STAND BEHIND
            </h2>
            <div className="h-[2px] w-12 bg-[#0F0F10] my-4" />
            <p className="text-[14px] leading-[1.8] text-neutral-600 font-light">
              We design, we select, we inspect, and we stand behind our work. These are the promises we make to anyone who supports what we do.
            </p>
          </div>

          <div className="lg:col-span-8">
            <StandardsAccordion items={highlights} />
          </div>

        </div>
      </section>

      {/* 9. Closing Statement */}
      <section className="w-full px-6 sm:px-12 md:px-20 py-20 bg-[#F0ECE3] text-center border-t border-[#E5E0D8]">
        <div className="mx-auto max-w-4xl">
          <p className="font-heading text-xl sm:text-3xl font-medium uppercase tracking-wide text-[#0F0F10]">
            The kind of thing that doesn't ask for attention, and quietly gets it anyway.
          </p>
        </div>
      </section>

    </main>
  )
}
