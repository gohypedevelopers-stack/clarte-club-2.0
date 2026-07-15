"use client"

import Image from "next/image"

type HighlightBlock = {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  imagePosition?: string
}

const HIGHLIGHTS_DATA: HighlightBlock[] = [
  {
    title: "Handcrafted Italian Bio-Acetate",
    description: "Meticulously sculpted from organically sourced bio-acetate, each frame undergoes a multi-day tumbling process and hand-polishing. This creates a rich, lustrous finish with exceptional durability and lightweight, hypoallergenic comfort.",
    imageSrc: "/images/products/product8.png",
    imageAlt: "Close-up of premium hand-polished acetate frame details",
    imagePosition: "center 42%",
  },
  {
    title: "Signature 5-Barrel Hinges",
    description: "Reinforced custom metal hinges and wire temple cores provide structural longevity. Engineered to distribute weight evenly and balance the fit, ensuring the frames rest comfortably on your nose bridge without sliding.",
    imageSrc: "/images/products/product4.png",
    imageAlt: "Detail view of premium custom hinge construction and wire core craftsmanship",
    imagePosition: "center 36%",
  },
]

export function ProductHighlights() {
  return (
    <section className="w-full bg-[#fcfbfa] border-t border-black/15 py-20 text-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40">
            Craftsmanship & Fit
          </p>
          <h2 className="font-heading text-[32px] md:text-[40px] font-normal uppercase leading-none tracking-tight">
            Product Highlights
          </h2>
          <div className="mx-auto h-[1px] w-16 bg-black/10 pt-1" />
        </div>

        {/* Highlights List */}
        <div className="space-y-24 md:space-y-32">
          {HIGHLIGHTS_DATA.map((block, index) => {
            const isEven = index % 2 === 0
            
            return (
              <div 
                key={block.title}
                className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Image Block */}
                <div className="w-full md:w-1/2">
                  <figure className="relative aspect-[4/5] w-full overflow-hidden bg-[#efefef] border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
                    <Image
                      src={block.imageSrc}
                      alt={block.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={
                        block.imagePosition
                          ? { objectPosition: block.imagePosition }
                          : undefined
                      }
                      className="object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
                    />
                  </figure>
                </div>

                {/* Text Block */}
                <div className="w-full md:w-1/2 space-y-5">
                  <h3 className="font-heading text-[24px] md:text-[30px] font-normal uppercase leading-tight tracking-tight">
                    {block.title}
                  </h3>
                  <div className="h-[2px] w-12 bg-black/80" />
                  <p className="font-sans text-[15px] md:text-[16px] leading-[1.8] text-black/68 font-light max-w-xl">
                    {block.description}
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
