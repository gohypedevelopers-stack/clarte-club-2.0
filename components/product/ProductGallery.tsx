"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import type { ProductImage } from "@/components/product/productData"

export function ProductGallery({
  images,
}: {
  images: ProductImage[]
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  if (!images || images.length === 0) return null

  const activeImage = images[activeImageIndex]

  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:gap-4 lg:items-start w-full xl:sticky xl:top-6 self-start">
      {/* Desktop Vertical Thumbnail Column (Left side) */}
      <div className="hidden lg:flex lg:flex-col gap-2 w-[80px] shrink-0">
        {images.map((image, index) => {
          const isSelected = index === activeImageIndex
          return (
            <button
              key={`${image.src}-thumb-desk-${index}`}
              type="button"
              onClick={() => setActiveImageIndex(index)}
              className={cn(
                "relative aspect-[3/4] w-full overflow-hidden bg-[#efefef] transition-all duration-200 border cursor-pointer",
                isSelected
                  ? "border-black ring-1 ring-black"
                  : "border-black/5 opacity-60 hover:opacity-100 hover:border-black/20"
              )}
            >
              <Image
                src={image.src}
                alt={`View thumbnail ${index + 1}`}
                fill
                sizes="80px"
                className="object-cover object-center"
              />
            </button>
          )
        })}
      </div>

      {/* Main Image View (Right side on desktop) */}
      <figure className="relative aspect-[3/4] w-full overflow-hidden bg-[#efefef] flex-1 border border-black/5">
        <Image
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw"
          style={
            activeImage.objectPosition
              ? { objectPosition: activeImage.objectPosition }
              : undefined
          }
          className="object-cover transition-all duration-300"
        />
      </figure>

      {/* Mobile Horizontal Thumbnail Strip (Below image on mobile) */}
      <div className="flex lg:hidden gap-2 overflow-x-auto pb-1 mt-1 scrollbar-none scroll-smooth">
        {images.map((image, index) => {
          const isSelected = index === activeImageIndex
          return (
            <button
              key={`${image.src}-thumb-mob-${index}`}
              type="button"
              onClick={() => setActiveImageIndex(index)}
              className={cn(
                "relative h-16 w-12 shrink-0 overflow-hidden bg-[#efefef] transition-all duration-200 border cursor-pointer",
                isSelected
                  ? "border-black ring-1 ring-black"
                  : "border-black/5 opacity-60 hover:opacity-100"
              )}
            >
              <Image
                src={image.src}
                alt={`View thumbnail ${index + 1}`}
                fill
                sizes="48px"
                className="object-cover object-center"
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}
