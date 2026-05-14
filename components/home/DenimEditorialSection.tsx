import Image from "next/image"

import { cn } from "@/lib/utils"

type DenimPanelProps = {
  src: string
  alt: string
  className?: string
  imageClassName?: string
  sizes?: string
}

function DenimPanel({
  src,
  alt,
  className,
  imageClassName,
  sizes = "(max-width: 1279px) 100vw, 50vw",
}: DenimPanelProps) {
  return (
    <div className={cn("relative overflow-hidden bg-[#f3f0ea]", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={cn("object-cover object-center", imageClassName)}
      />
    </div>
  )
}

export function DenimEditorialSection() {
  return (
    <section className="w-full bg-white text-black">
      <h2 className="sr-only">Skinny denims editorial</h2>

      <div className="grid grid-cols-1 gap-0 bg-white xl:grid-cols-2">
        <DenimPanel
          src="/images/products/product6.png"
          alt="Model sitting in a denim set on a chair"
          className="aspect-square w-full"
          imageClassName="object-[center_22%]"
        />
        <DenimPanel
          src="/images/products/product7.png"
          alt="Model sitting in denim beside greenery"
          className="aspect-square w-full"
          imageClassName="object-[center_32%]"
        />
      </div>

      <div className="relative overflow-hidden bg-[#f3f0ea] aspect-[17/9] md:aspect-[20/9]">
        <Image
          src="/images/products/product8.png"
          alt="Model reclining in a denim look across stacked screens"
          fill
          sizes="100vw"
          className="object-cover object-[center_44%]"
        />

        <div className="absolute left-6 top-6 z-10 sm:left-10 sm:top-9">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.12em] text-black/90">
            Skinny Denims
          </p>
        </div>
      </div>
    </section>
  )
}
