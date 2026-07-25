// Clarté Club - Our Story (Light Architectural Luxury Layout)
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { TextReveal } from "@/components/ui/text-reveal"
import SecretDesire from "@/components/home/SecretDesire"
import StandardsAccordion from "@/components/about/StandardsAccordion"
import FounderNote from "@/components/about/FounderNote"

export const metadata: Metadata = {
  title: "Our Story | Clarté Club",
  description: "The story behind Clarté Club: built with a clear point of view, obsessive craftsmanship, and quiet distinction.",
}

export default function AboutPage() {
  const highlights = [
    {
      title: "One Honest Price",
      desc: "What you see is the true price, reflecting pure craftsmanship without artificial markups or fake promotional sales. If a price moves, it's a genuine operational change."
    },
    {
      title: "Made to Last & Endure",
      desc: "Built from hand-cured acetate and custom hardware designed for rigorous daily use, not disposable photo props."
    },
    {
      title: "Zero Restocks Policy",
      desc: "When a batch release is complete, we archive the design. We focus on engineering the next evolution rather than endlessly duplicating past drops."
    },
    {
      title: "Direct Commitment & Guarantee",
      desc: "If anything feels remiss with your frame or fit, contact our atelier directly. We repair or replace it without friction or convoluted policy lines."
    }
  ]

  return (
    <main className="flex-1 bg-[#FAF8F5] text-[#0F0F10] font-sans min-h-screen">
      
      {/* 1. OUR STORY - Architectural Header */}
      <section className="w-full px-6 sm:px-12 md:px-20 pt-10 sm:pt-16 pb-12 border-b border-[#E5E0D8]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] uppercase font-semibold tracking-[0.3em] text-[#C9B07A]">
                Our Story
              </span>
              <h1 className="font-heading text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold uppercase leading-none tracking-[-0.03em] text-[#0F0F10] mt-2">
                OUR STORY
              </h1>
            </div>
            <p className="text-[12px] sm:text-[14px] font-semibold uppercase tracking-[0.25em] text-neutral-500 pb-2">
              BUILT WITH A CLEAR POINT OF VIEW
            </p>
          </div>
        </div>
      </section>

      {/* 1.1 Story Visual & Narrative Body */}
      <section className="w-full px-6 sm:px-12 md:px-20 py-12 sm:py-16 border-b border-[#E5E0D8]">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Panel: Architectural Studio Visual */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            <div className="relative aspect-[4/4.5] w-full bg-[#EDE8E0] overflow-hidden border border-[#E5E0D8] shadow-sm">
              <Image
                src="/images/hero-left.png"
                alt="Clarté Club Eyewear Studio"
                fill
                priority
                className="object-cover filter contrast-[1.03]"
              />
            </div>
            <p className="text-[11px] leading-relaxed text-neutral-500 font-light tracking-wide italic">
              Presence over noise. That is the foundational philosophy behind Clarté Club.
            </p>
          </div>

          {/* Right Panel: Genesis Story Narrative */}
          <div className="lg:col-span-7 bg-[#F4F0E8] border border-[#E5E0D8] p-8 sm:p-12 flex flex-col justify-center space-y-6">
            <p className="font-heading text-xl sm:text-2xl font-medium leading-relaxed text-[#0F0F10]">
              Clarté Club started with a simple idea: The things we choose to wear every day should feel distinctive, useful, and deeply personal.
            </p>
            
            <p className="text-[14px] leading-[1.85] text-neutral-600 font-light">
              We began by questioning why modern luxury eyewear was defined by oversized logos and artificial markups. We set out to create an alternative—eyewear built with architectural restraint, premium hand-polished materials, and obsessive attention to proportions.
            </p>

            <p className="text-[14px] leading-[1.85] text-neutral-600 font-light">
              We are starting with frames, but the vision goes far beyond one product category. Over time, Clarté Club is growing into a broader lifestyle label shaped by good design, thoughtful engineering, and a quieter way of doing things.
            </p>

            <div className="pt-6 border-t border-[#E5E0D8] grid grid-cols-3 gap-4 text-[10px] uppercase tracking-[0.2em] font-semibold text-neutral-500">
              <div>
                <span className="block text-[#C9B07A] font-bold text-[9px] mb-1">Focus</span>
                <span className="text-[#0F0F10]">Eyewear & Beyond</span>
              </div>
              <div>
                <span className="block text-[#C9B07A] font-bold text-[9px] mb-1">Ethos</span>
                <span className="text-[#0F0F10]">Quiet Distinction</span>
              </div>
              <div>
                <span className="block text-[#C9B07A] font-bold text-[9px] mb-1">Production</span>
                <span className="text-[#0F0F10]">Small Batch Drops</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. FOUNDER'S NOTE SECTION */}
      <FounderNote />

      {/* Ticker Marquee Bar */}
      <section className="relative w-full overflow-hidden bg-[#F0ECE3] text-[#0F0F10] py-4 border-b border-[#E5E0D8]">
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
          <div className="animate-marquee-light flex gap-8 text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.25em] text-[#0F0F10]/50 whitespace-nowrap select-none">
            {Array(4).fill([
              "DISTINCTIVE DESIGN",
              "HAND-POLISHED ACETATE",
              "LIMITED BATCH DROPS",
              "THE CLARTÉ GUARANTEE",
              "QUIET DISTINCTION"
            ]).flat().map((text, idx) => (
              <span key={idx} className="flex items-center gap-6">
                <span>{text}</span>
                <span className="opacity-40">•</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll-Driven Text Reveal Statement */}
      <section className="w-full bg-[#FAF8F5] border-b border-[#E5E0D8]">
        <TextReveal>
          WE'RE COMMITTED TO **EVERYTHING WE MAKE**, CHOSEN WITH CARE, **CHECKED BEFORE IT EVER REACHES YOU**. THAT'S WHAT WE ACTUALLY **STAND ON**. NOT A CLAIM, JUST THE **WORK BEHIND IT**.
        </TextReveal>
      </section>

      {/* 3. OUR APPROACH Section */}
      <section className="w-full px-6 sm:px-12 md:px-20 py-20 bg-[#FAF8F5] border-b border-[#E5E0D8]">
        <div className="mx-auto max-w-7xl space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E5E0D8] pb-6">
            <div>
              <span className="text-[11px] uppercase font-semibold tracking-[0.3em] text-[#C9B07A]">
                Our Approach
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#0F0F10] mt-2">
                OUR APPROACH
              </h2>
            </div>
            <p className="text-[12px] sm:text-[14px] font-semibold uppercase tracking-[0.25em] text-neutral-500 pb-1">
              FEWER PIECES, CHOSEN WELL
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Frame Details Grid */}
            <div className="lg:col-span-5 flex items-center gap-3">
              {[
                { img: "/images/products/product6.png", alt: "Frame detail 1" },
                { img: "/images/products/product7.png", alt: "Frame detail 2" },
                { img: "/images/products/product8.png", alt: "Frame detail 3" }
              ].map((item, idx) => (
                <div key={idx} className="relative aspect-square flex-1 bg-[#E5E0D8] border border-[#E5E0D8] overflow-hidden group">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>

            {/* Right Approach Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="font-heading text-2xl sm:text-3xl font-semibold uppercase text-[#0F0F10] leading-tight">
                We refuse to flood the market with disposable releases.
              </h3>
              <p className="text-[14px] leading-[1.85] text-neutral-600 font-light max-w-xl">
                Every release starts with a distinct architectural concept and is honed over months of wear testing. We evaluate frame balance, material weight, hardware tension, and tactile finish.
              </p>
              <div className="pt-4 border-t border-[#E5E0D8] inline-block">
                <p className="text-[12px] uppercase tracking-[0.2em] font-semibold text-[#0F0F10]">
                  The category may evolve. The approach will stay unyielding.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Core Values / Secret Desire Section */}
      <SecretDesire />

      {/* 4. THE DIRECTION Section */}
      <section className="relative w-full px-6 sm:px-12 md:px-20 py-20 bg-[#FAF8F5] overflow-hidden border-b border-[#E5E0D8]">
        <div className="mx-auto max-w-7xl space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E5E0D8] pb-6">
            <div>
              <span className="text-[11px] uppercase font-semibold tracking-[0.3em] text-[#C9B07A]">
                The Direction
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#0F0F10] mt-2">
                THE DIRECTION
              </h2>
            </div>
            <p className="text-[12px] sm:text-[14px] font-semibold uppercase tracking-[0.25em] text-neutral-500 pb-1">
              THIS IS ONLY THE BEGINNING
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Direction Narrative Block */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="font-heading text-2xl sm:text-4xl font-semibold uppercase text-[#0F0F10] leading-tight">
                Clarté Club is built slowly, intentionally, and without compromise.
              </h3>
              <p className="text-[14px] leading-[1.85] text-neutral-600 font-light">
                Starting with eyewear as our anchor, we are expanding into curated leather goods, accessories, and subtle daily objects that embody quiet distinction.
              </p>

              <div className="pt-4">
                <Link
                  href="/collections"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#0F0F10] text-[#FAF8F5] text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-[#C9B07A] hover:text-[#0F0F10] transition-all duration-300 shadow-md group"
                >
                  <span>Explore the latest collection</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>

            {/* Right Interactive Card Visual */}
            <div className="lg:col-span-6 flex justify-center items-center py-6">
              <div className="group/card relative w-full sm:w-[500px] aspect-[16/10] cursor-pointer transform origin-center -rotate-3 hover:rotate-0 hover:scale-[1.02] shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.2)] bg-[#FFFFFF] border border-[#E5E0D8] hover:border-[#C9B07A]/60 p-6 transition-all duration-700 ease-out">
                <div className="relative size-full overflow-hidden bg-[#FAF8F5] border border-[#E5E0D8]/60 flex items-center justify-center">
                  <Image
                    src="/images/products/product5-white.png"
                    alt="Clarté Club frame"
                    fill
                    className="object-contain p-4 filter contrast-[1.05] transition-transform duration-700 ease-out group-hover/card:scale-105"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. STANDARDS & PROMISES */}
      <section className="w-full px-6 sm:px-12 md:px-20 py-24 bg-[#FAF8F5] border-b border-[#E5E0D8]">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#C9B07A] font-semibold">Standards</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold uppercase tracking-tight text-[#0F0F10] leading-tight">
              WHAT WE STAND BEHIND
            </h2>
            <div className="h-[2px] w-12 bg-[#0F0F10] my-4" />
            <p className="text-[14px] leading-[1.8] text-neutral-600 font-light">
              We design, inspect, and guarantee every piece that leaves our studio. These are our foundational promises to everyone who supports our vision.
            </p>
          </div>

          <div className="lg:col-span-8">
            <StandardsAccordion items={highlights} />
          </div>

        </div>
      </section>

      {/* Closing Brand Statement Banner */}
      <section className="w-full px-6 sm:px-12 md:px-20 py-20 bg-[#F0ECE3] text-center border-t border-[#E5E0D8]">
        <div className="mx-auto max-w-4xl space-y-4">
          <p className="font-heading text-xl sm:text-3xl font-medium uppercase tracking-wide text-[#0F0F10]">
            The kind of thing that doesn't ask for attention, and quietly gets it anyway.
          </p>
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#C9B07A] font-semibold">
            Clarté Club — Built for Life
          </p>
        </div>
      </section>

    </main>
  )
}
