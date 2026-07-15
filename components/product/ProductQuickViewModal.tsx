"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Star, X } from "lucide-react"
import { useEffect, useState } from "react"
import type { ButtonHTMLAttributes } from "react"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import type { ProductDetail } from "@/components/product/productData"

type ProductQuickViewModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  product: ProductDetail
  gallery: string[]
  initialImageIndex?: number
}

function QuickViewColorSwatches({
  colors,
  selectedColor,
  onSelectColor,
}: {
  colors: ProductDetail["colors"]
  selectedColor: string
  onSelectColor: (colorName: string) => void
}) {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {colors.map((color) => {
        const isSelected = color.name === selectedColor

        return (
          <button
            key={color.name}
            type="button"
            aria-pressed={isSelected}
            aria-label={`Select ${color.name}`}
            onClick={() => onSelectColor(color.name)}
            className={cn(
              "flex h-[32px] w-[64px] items-stretch justify-stretch bg-white transition-[box-shadow] duration-200 ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black/45 cursor-pointer",
              isSelected
                ? "border-[2px] border-black p-[3px]"
                : "border border-black/10 p-0 hover:border-black/30"
            )}
          >
            <span
              className="block h-full w-full"
              style={{ backgroundColor: color.value }}
            />
          </button>
        )
      })}
    </div>
  )
}

function QuickViewSizeButton({
  active,
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cn(
        "flex h-10 items-center justify-center border text-[12px] font-bold tracking-wider uppercase transition-[background-color,border-color,color,transform] duration-200 ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black/45 cursor-pointer",
        active
          ? "border-black bg-black text-white"
          : "border-black/15 bg-white text-black hover:border-black hover:bg-black/[0.04]",
        "min-w-0 px-3",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export function ProductQuickViewModal({
  open,
  onOpenChange,
  product,
  gallery,
  initialImageIndex = 0,
}: ProductQuickViewModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(() =>
    Math.min(initialImageIndex, Math.max(gallery.length - 1, 0))
  )
  const [selectedColor, setSelectedColor] = useState(product.colorName)
  const [selectedSize, setSelectedSize] = useState(
    product.sizes[1] ?? product.sizes[0] ?? ""
  )

  useEffect(() => {
    if (!open) {
      return
    }

    const { body, documentElement } = document
    const previousBodyOverflow = body.style.overflow
    const previousHtmlOverflow = documentElement.style.overflow
    const previousBodyOverscrollBehavior = body.style.overscrollBehavior
    const previousHtmlOverscrollBehavior = documentElement.style.overscrollBehavior

    body.style.overflow = "hidden"
    documentElement.style.overflow = "hidden"
    body.style.overscrollBehavior = "none"
    documentElement.style.overscrollBehavior = "none"

    return () => {
      body.style.overflow = previousBodyOverflow
      documentElement.style.overflow = previousHtmlOverflow
      body.style.overscrollBehavior = previousBodyOverscrollBehavior
      documentElement.style.overscrollBehavior = previousHtmlOverscrollBehavior
    }
  }, [open])

  const galleryImages =
    gallery.length > 0 ? gallery : product.gallery.map((image) => image.src)

  const activeImage =
    galleryImages[activeImageIndex] ?? galleryImages[0] ?? product.gallery[0]?.src

  const handlePreviousImage = () => {
    if (galleryImages.length === 0) {
      return
    }

    setActiveImageIndex(
      (currentIndex) =>
        (currentIndex - 1 + galleryImages.length) % galleryImages.length
    )
  }

  const handleNextImage = () => {
    if (galleryImages.length === 0) {
      return
    }

    setActiveImageIndex((currentIndex) => (currentIndex + 1) % galleryImages.length)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        overlayClassName="bg-black/80 backdrop-blur-[1px]"
        onClick={(event) => event.stopPropagation()}
        onPointerDown={(event) => event.stopPropagation()}
        className="!gap-0 !w-[min(96vw,956px)] !max-w-none max-h-[calc(100dvh-1.25rem)] overflow-hidden rounded-none border-0 bg-white p-0 text-black ring-0 sm:max-w-none"
      >
        <DialogTitle className="sr-only">{product.title} quick view</DialogTitle>
        <DialogDescription className="sr-only">
          Quick view dialog for {product.title}
        </DialogDescription>

        <div className="grid h-[min(88dvh,520px)] grid-cols-1 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)]">
          <div className="relative min-h-[360px] bg-[#111] lg:min-h-0">
            <Image
              key={`${activeImage ?? ""}-${activeImageIndex}`}
              src={activeImage ?? product.gallery[0]?.src ?? ""}
              alt={product.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover object-center"
            />

            {galleryImages.length > 1 ? (
              <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-between px-3 text-white">
                <button
                    type="button"
                    aria-label="Previous image"
                    onClick={handlePreviousImage}
                    className="inline-flex size-10 items-center justify-center text-white/90 transition-opacity hover:opacity-70"
                  >
                  <ChevronLeft className="size-7 stroke-[1.8]" />
                </button>

                <button
                  type="button"
                  aria-label="Next image"
                  onClick={handleNextImage}
                  className="inline-flex size-10 items-center justify-center text-white/90 transition-opacity hover:opacity-70"
                >
                  <ChevronRight className="size-7 stroke-[1.8]" />
                </button>
              </div>
            ) : null}

            <div className="absolute bottom-3 left-3 bg-white/75 px-2 py-1 text-[0.85rem] font-medium text-black">
              {galleryImages.length > 0 ? activeImageIndex + 1 : 1}/
              {galleryImages.length || 1}
            </div>
          </div>

          <div className="relative min-h-0 overflow-hidden px-5 py-3.5 sm:px-6 sm:py-3.5 lg:px-7 lg:py-4">
            <DialogClose asChild>
              <button
                type="button"
                aria-label="Close quick view"
                className="absolute right-4 top-3 inline-flex size-8 items-center justify-center text-[1.1rem] font-semibold leading-none text-black transition-opacity hover:opacity-70"
              >
                <X className="size-5 stroke-[2.1]" />
              </button>
            </DialogClose>

            <div className="space-y-4 pr-3">
              <div className="space-y-1">
                <p className="text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.22em] text-[#C9B07A]">
                  {product.editLabel}
                </p>
                <h2 className="font-heading text-[24px] sm:text-[32px] md:text-[38px] font-normal uppercase leading-[0.95] tracking-[-0.06em]">
                  {product.title}
                </h2>
              </div>

              {/* PRICE BLOCK */}
              <div className="space-y-1.5 border-b border-black/10 pb-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-[14px] sm:text-[16px] leading-none text-black/45 line-through">
                    {product.originalPrice}
                  </span>
                  <span className="font-heading text-[18px] sm:text-[22px] font-medium leading-none tracking-[-0.04em] text-black">
                    {product.price}
                  </span>
                  <span className="inline-flex items-center justify-center bg-black text-[#F6F2EA] px-2.5 py-1 text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-wider leading-none">
                    1,238 Sold Today
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.06em] text-black/60 ml-auto">
                    <Star className="size-3.5 fill-[#f2a33c] text-[#f2a33c]" />
                    {product.rating}
                  </span>
                </div>
                <p className="text-[8px] sm:text-[9px] text-black/40 uppercase tracking-wider font-light">
                  INCL. OF ALL TAXES
                </p>
              </div>

              <p className="max-w-[36rem] font-sans text-[13px] sm:text-[15px] font-normal leading-[1.6] text-black/65">
                {product.description}{" "}
                <Link
                  href="/products#details"
                  className="font-semibold text-black underline underline-offset-4"
                >
                  See More....
                </Link>
              </p>

              <section className="space-y-2">
                <p className="text-[13px] sm:text-[15px] font-bold uppercase tracking-wider text-black">
                  Color: <span className="font-normal text-black/60 normal-case">{selectedColor}</span>
                </p>

                <QuickViewColorSwatches
                  colors={product.colors}
                  selectedColor={selectedColor}
                  onSelectColor={setSelectedColor}
                />
              </section>

              <section className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-[13px] sm:text-[15px] font-bold uppercase tracking-wider text-black">
                    Choose Size
                  </h3>
                  <Link
                    href="/products#size-guide"
                    className="text-[11px] font-bold text-black/45 uppercase tracking-wider underline underline-offset-4 transition-opacity hover:opacity-70"
                  >
                    Size Guide
                  </Link>
                </div>

                <div className="flex gap-2.5">
                  {product.sizes.map((size) => (
                    <QuickViewSizeButton
                      key={size}
                      active={selectedSize === size}
                      onClick={() => setSelectedSize(size)}
                      className="flex-1"
                    >
                      {size}
                    </QuickViewSizeButton>
                  ))}
                </div>
              </section>

              <button
                type="button"
                className="flex h-12 w-full items-center justify-center bg-black text-[15px] sm:text-[18px] font-medium uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-90 cursor-pointer"
              >
                Add To Cart
              </button>

              <div className="pt-1 text-center">
                <Link
                  href="/products"
                  className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.12em] text-black/55 underline underline-offset-4 transition-opacity hover:opacity-70"
                >
                  View Full Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
