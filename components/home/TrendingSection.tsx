"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"

import { ProductQuickViewModal } from "@/components/product/ProductQuickViewModal"
import {
  featuredProduct,
  trendingProducts,
  type ProductCard,
} from "@/components/product/productData"

const eyewearFits = ["Narrow", "Medium", "Wide"]
const eyewearDetails = { shape: "Round", lens: "UV400" }


function SizeMarker({ size }: { size: string }) {
  return (
    <span className="group/size relative inline-flex flex-col items-center pb-0.5">
      <span className="leading-none">{size}</span>
      <span
        aria-hidden="true"
        className="mt-[1px] h-px w-full origin-left scale-x-0 bg-current transition-transform duration-200 group-hover/size:scale-x-100"
      />
    </span>
  )
}

export function ProductCardView({
  product,
  expanded = false,
}: {
  product: ProductCard
  expanded?: boolean
}) {
  const gallery = product.gallery?.length ? product.gallery : [product.image]
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [quickViewOpen, setQuickViewOpen] = useState(false)

  const activeImage = gallery[activeImageIndex] ?? product.image
  const hasGalleryControls = gallery.length > 1

  const handlePreviousImage = () => {
    setActiveImageIndex(
      (currentIndex) => (currentIndex - 1 + gallery.length) % gallery.length
    )
  }

  const handleNextImage = () => {
    setActiveImageIndex((currentIndex) => (currentIndex + 1) % gallery.length)
  }

  return (
    <article className="group relative overflow-hidden" style={{ background: "#0F0F10" }}>
      <div className="relative aspect-[330/479]">
        <Link href="/products" className="absolute inset-0 cursor-pointer z-0">
          <Image
            key={`${product.id}-${activeImageIndex}`}
            src={activeImage}
            alt={product.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-top transition-opacity duration-400"
          />
        </Link>

        {/* Badge */}
        {product.badge ? (
          <span
            className="absolute left-3 top-3 z-10 px-2.5 py-1 text-[10px] font-semibold uppercase leading-none tracking-[0.18em]"
            style={{ background: "#C9B07A", color: "#0F0F10" }}
          >
            {product.badge}
          </span>
        ) : null}

        {/* Plus icon top-right */}
        <div
          aria-hidden
          className="absolute right-3 top-3 z-10 inline-flex size-7 items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100"
          style={{ border: "1px solid rgba(201,176,122,0.5)", background: "rgba(15,15,16,0.6)" }}
        >
          <Plus className="size-3.5" style={{ color: "#C9B07A", strokeWidth: 2.2 }} />
        </div>

        {/* Gallery arrows */}
        {hasGalleryControls ? (
          <div className="pointer-events-none absolute inset-x-3 top-1/2 z-20 flex -translate-y-1/2 items-center justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
            <button
              type="button"
              aria-label="Previous product image"
              onClick={(e) => { e.stopPropagation(); handlePreviousImage() }}
              className="pointer-events-auto inline-flex size-9 items-center justify-center transition-colors duration-200"
              style={{ background: "rgba(15,15,16,0.55)", color: "#F6F2EA" }}
            >
              <ChevronLeft className="size-5" strokeWidth={2} />
            </button>
            <button
              type="button"
              aria-label="Next product image"
              onClick={(e) => { e.stopPropagation(); handleNextImage() }}
              className="pointer-events-auto inline-flex size-9 items-center justify-center transition-colors duration-200"
              style={{ background: "rgba(15,15,16,0.55)", color: "#F6F2EA" }}
            >
              <ChevronRight className="size-5" strokeWidth={2} />
            </button>
          </div>
        ) : null}

        {/* ── Hover panel: peek strip + full details ── */}
        <div
          className="absolute inset-x-0 bottom-0 z-10"
          data-hover-panel
          data-expanded={expanded ? "true" : "false"}
        >
          {/* Always-visible peek strip (name + price) */}
          <Link
            href="/products"
            className="flex items-center justify-between gap-3 px-4 cursor-pointer hover:opacity-90 transition-opacity"
            style={{
              height: "52px",
              background: "rgba(10,10,11,0.94)",
              borderTop: "1px solid rgba(201,176,122,0.22)",
              display: "flex",
            }}
          >
            <div className="min-w-0">
              <p
                className="text-[11px] font-medium uppercase leading-tight truncate"
                style={{ letterSpacing: "0.1em", color: "#F6F2EA" }}
              >
                {product.name ?? "Signature Frame"}
              </p>
              <p
                className="mt-0.5 text-[10px] font-light uppercase leading-tight"
                style={{ letterSpacing: "0.06em", color: "#C9B07A" }}
              >
                {product.price ?? "₹ 4,500"}
              </p>
            </div>
          </Link>

          {/* Extended details — hidden until hover slides panel up */}
          <div
            className="flex flex-col gap-3 px-4 pb-4 pt-3"
            style={{ background: "rgba(10,10,11,0.97)" }}
          >
            {/* Frame details row */}
            <div className="flex items-center gap-3">
              <span
                className="text-[9px] uppercase"
                style={{ letterSpacing: "0.16em", color: "#FFFFFF" }}
              >
                {eyewearDetails.shape}
              </span>
              <span
                aria-hidden
                style={{ width: "1px", height: "10px", background: "rgba(255,255,255,0.3)", display: "inline-block" }}
              />
              <span
                className="text-[9px] uppercase"
                style={{ letterSpacing: "0.16em", color: "#FFFFFF" }}
              >
                {eyewearDetails.lens} Lens
              </span>
            </div>

            {/* Fit sizes + Quick View */}
            <div className="flex items-center justify-between gap-3">
              <div
                className="flex flex-wrap items-center gap-1.5 text-[10px] font-normal uppercase"
                style={{ letterSpacing: "0.12em", color: "#FFFFFF" }}
              >
                {eyewearFits.map((fit) => (
                  <SizeMarker key={fit} size={fit} />
                ))}
              </div>

              <button
                type="button"
                aria-label={`Quick view ${product.alt}`}
                onClick={(e) => { e.stopPropagation(); setQuickViewOpen(true) }}
                className="group/qv shrink-0 text-[10px] font-medium uppercase"
                style={{ letterSpacing: "0.14em", color: "#C9B07A" }}
              >
                <span className="inline-block bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-200 group-hover/qv:bg-[length:100%_1px]">
                  Quick View
                </span>
              </button>
            </div>

            {/* Add to Cart */}
            <button
              type="button"
              className="group/cart relative overflow-hidden text-[10px] font-semibold uppercase"
              style={{
                height: "2.4rem",
                width: "100%",
                border: "1px solid rgba(201,176,122,0.45)",
                letterSpacing: "0.18em",
                color: "#F6F2EA",
              }}
            >
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full transition-transform duration-300 ease-out group-hover/cart:translate-x-0"
                style={{ background: "rgba(201,176,122,0.15)" }}
              />
              <span className="relative">Add To Cart</span>
            </button>
          </div>
        </div>
      </div>

      <ProductQuickViewModal
        key={`${product.id}-${quickViewOpen ? "open" : "closed"}-${activeImageIndex}`}
        open={quickViewOpen}
        onOpenChange={setQuickViewOpen}
        product={featuredProduct}
        gallery={gallery}
        initialImageIndex={activeImageIndex}
      />
    </article>
  )
}

export function TrendingSection() {
  return (
    <section className="w-full bg-white px-4 py-14 text-black sm:px-6 lg:px-8 md:py-16">
      <div className="flex w-full flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="font-heading text-[clamp(1.7rem,2.2vw,2.6rem)] font-semibold uppercase leading-none tracking-[-0.04em]">
          Trending
        </h2>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {trendingProducts.map((product) => (
          <ProductCardView key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          href="/collections"
          className="inline-flex h-9 items-center justify-center border border-black px-5 text-[0.6875rem] uppercase tracking-[0.12em] transition-colors hover:bg-black hover:text-white"
        >
          View All
        </Link>
      </div>
    </section>
  )
}
