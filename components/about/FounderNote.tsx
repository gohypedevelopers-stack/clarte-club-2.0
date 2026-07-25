"use client"

import Image from "next/image"

export default function FounderNote() {
  return (
    <section className="w-full px-5 sm:px-12 md:px-20 py-12 sm:py-24 bg-[#fcfbfa] border-b border-black/10">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 border-b border-black/10 pb-5 sm:pb-6 mb-8 sm:mb-12 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-[10px] sm:text-[11px] uppercase font-semibold tracking-[0.3em] text-neutral-500">
              Founder's Note
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#0F0F10] mt-1.5 sm:mt-2">
              BEHIND CLARTÉ CLUB
            </h2>
          </div>
          <p className="text-[11px] sm:text-[14px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-neutral-500 pb-1">
            AN ANTIDOTE TO NOISE
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Column: Founder Portrait Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full bg-[#efefef] overflow-hidden border border-black/10 shadow-sm">
              <Image
                src="/images/hero-right.png"
                alt="Founder of Clarté Club"
                fill
                className="object-cover filter grayscale contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10]/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6 text-[#FAF8F5] text-left">
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#C9B07A] mb-0.5 sm:mb-1">
                  Design Studio & Atelier
                </p>
                <p className="font-heading text-base sm:text-lg font-bold uppercase tracking-wide">
                  Nawaz Gazi
                </p>
                <p className="text-[10px] sm:text-[11px] opacity-80 uppercase tracking-widest">
                  Founder & Creative Director
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Letter */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 bg-[#f4f4f4] border border-black/10 p-5 sm:p-8 md:p-12 text-left flex flex-col items-start justify-center">
            
            <div className="inline-block px-3 py-1 bg-[#e0e0e0] text-[#0F0F10] text-[10px] uppercase font-bold tracking-[0.25em]">
              A Note From The Founder
            </div>

            <h3 className="font-heading text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase text-[#0F0F10] leading-snug sm:leading-tight text-left">
              "We didn't start Clarté Club to build another fast-fashion brand. We started it to create things that last."
            </h3>

            <div className="space-y-3.5 sm:space-y-4 text-[13px] sm:text-[14px] leading-relaxed sm:leading-[1.85] text-neutral-700 font-light text-left">
              <p>
                Every day, we are bombarded by loud logos, endless sales events, and products designed to be replaced in a few months. I felt there was a missing space for people who appreciate quiet distinction—pieces that look effortless, feel substantial, and hold real integrity.
              </p>
              <p>
                Eyewear is the first thing people notice on your face. It frames your expression and carries your personal identity. That’s why we started with frames. We refine every curve, test the weight balance on your bridge, and select materials that age gracefully over years of wear.
              </p>
              <p>
                We operate under simple principles: one honest price without artificial inflation, zero restocks so every drop retains its uniqueness, and a relentless commitment to quality. If a frame isn't good enough for us to wear every single day, it doesn't leave our studio.
              </p>
            </div>

            {/* Quote Signature Block */}
            <div className="w-full pt-5 sm:pt-6 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 text-left">
              <div>
                <p className="font-heading font-bold text-sm sm:text-base uppercase text-[#0F0F10]">
                  Nawaz Gazi
                </p>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#C9B07A] font-semibold">
                  Founder, Clarté Club
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
