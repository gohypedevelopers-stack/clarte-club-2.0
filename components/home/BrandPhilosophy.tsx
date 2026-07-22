"use client"

import { Eye, Layers, Lock, ShieldCheck } from "lucide-react"

const PHILOSOPHIES = [
  {
    icon: Eye,
    title: "Unique Selection",
    description: "Every frame is an editorial statement. We select and design exclusive silhouettes that define modern character rather than following mainstream trends.",
  },
  {
    icon: Lock,
    title: "Scarcity & Small Batches",
    description: "We produce in strictly limited quantities. Once a model sells out, it is rarely restocked, protecting the exclusivity of your aesthetic selection.",
  },
  {
    icon: ShieldCheck,
    title: "Radical Transparency",
    description: "We design and curate premium materials honestly. We do not hide behind marketing buzzwords—we share exact details on custom bio-acetates, hardware, and lenses.",
  },
  {
    icon: Layers,
    title: "Uncompromising Quality",
    description: "Built using Japanese hinges, precision-polished Italian bio-acetate, and premium impact-resistant UV400 protective lenses to guarantee lifetime wearability.",
  },
]

export function BrandPhilosophy() {
  return (
    <section className="w-full bg-[#0f0f10] py-24 text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
            Pillars of Clarté
          </p>
          <h2 className="font-heading text-[32px] md:text-[40px] font-normal uppercase leading-none tracking-tight">
            Our Philosophy
          </h2>
          <div className="mx-auto h-[1px] w-16 bg-white/10 pt-1" />
        </div>

        {/* Grid Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PHILOSOPHIES.map((item) => {
            const Icon = item.icon
            
            return (
              <div 
                key={item.title}
                className="flex flex-col justify-between border border-white/10 p-8 bg-[#161618] hover:border-white/30 transition-all duration-300 group hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
              >
                <div className="space-y-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white/60 group-hover:bg-white group-hover:text-[#0f0f10] transition-colors duration-300">
                    <Icon className="size-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-[18px] font-medium uppercase tracking-wider text-white">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[14px] leading-relaxed text-white/50 font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
