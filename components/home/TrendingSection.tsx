"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, ChevronLeft, ChevronRight, Heart, ShoppingBag } from "lucide-react"

import { ProductQuickViewModal } from "@/components/product/ProductQuickViewModal"
import {
  featuredProduct,
  trendingProducts,
  type ProductCard,
} from "@/components/product/productData"
import { addToCart } from "@/lib/cart"

const eyewearDetails = { shape: "Round", lens: "UV400" }

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
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [added, setAdded] = useState(false)

  // Touch Swipe Gesture State for Homepage Cards
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

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

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const distance = touchStartX.current - touchEndX.current
    const minSwipeDistance = 30

    if (distance > minSwipeDistance) {
      handleNextImage()
    } else if (distance < -minSwipeDistance) {
      handlePreviousImage()
    }

    touchStartX.current = null
    touchEndX.current = null
  }

  const toggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    setIsWishlisted(!isWishlisted)
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    addToCart({
      id: product.id,
      image: product.image,
      alt: product.alt,
      title: product.name ?? "Signature Frame",
      size: "XS",
      price: product.price ?? "₹ 4,500",
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <article className="group relative flex flex-col w-full cursor-pointer">
      {/* ── 1. Image Container (Rounded Corners + Overlays) ── */}
      <div
        className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-neutral-100 select-none shadow-sm"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Link href="/products" className="absolute inset-0 cursor-pointer z-0">
          <Image
            key={`${product.id}-${activeImageIndex}`}
            src={activeImage}
            alt={product.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </Link>

        {/* Badge */}
        {product.badge ? (
          <span
            className="absolute left-3 top-3 z-10 px-2.5 py-1 text-[10px] font-bold uppercase leading-none tracking-wider rounded-md shadow-md"
            style={{ background: "#C9B07A", color: "#0F0F10" }}
          >
            {product.badge}
          </span>
        ) : null}

        {/* Top Right Wishlist Icon Button (High Contrast White Badge as in Image 2) */}
        <button
          type="button"
          aria-label="Add to wishlist"
          onClick={toggleWishlist}
          className={`absolute right-3 top-3 z-10 flex size-8 items-center justify-center rounded-lg shadow-md border transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer ${
            isWishlisted
              ? "bg-[#0F0F10] text-[#C9B07A] border-[#C9B07A]"
              : "bg-white/95 text-neutral-800 border-black/10 hover:bg-white hover:text-black"
          }`}
        >
          <Heart
            className="size-4 transition-colors duration-200"
            style={{
              fill: isWishlisted ? "#C9B07A" : "none",
              strokeWidth: 2,
            }}
          />
        </button>

        {/* Left & Right Gallery Arrows on Hover (as in second image) */}
        {hasGalleryControls ? (
          <>
            <button
              type="button"
              aria-label="Previous product image"
              onClick={(e) => {
                e.stopPropagation()
                e.preventDefault()
                handlePreviousImage()
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex size-9 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-md opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-white hover:text-black hover:scale-105 active:scale-95 cursor-pointer shadow-md"
            >
              <ArrowLeft className="size-4" strokeWidth={2.2} />
            </button>

            <button
              type="button"
              aria-label="Next product image"
              onClick={(e) => {
                e.stopPropagation()
                e.preventDefault()
                handleNextImage()
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex size-9 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-md opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-white hover:text-black hover:scale-105 active:scale-95 cursor-pointer shadow-md"
            >
              <ArrowRight className="size-4" strokeWidth={2.2} />
            </button>
          </>
        ) : null}

        {/* Carousel Pagination Dots (. . .) */}
        {hasGalleryControls ? (
          <div className="absolute bottom-3 inset-x-0 z-10 flex items-center justify-center pointer-events-auto">
            <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
              {gallery.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                    setActiveImageIndex(idx)
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeImageIndex
                      ? "w-3.5 bg-white"
                      : "w-1.5 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        ) : null}

        {/* Quick View Button on Image Hover */}
        <button
          type="button"
          aria-label={`Quick view ${product.alt}`}
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
            setQuickViewOpen(true)
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full bg-black text-white text-[10px] font-semibold uppercase tracking-wider opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-neutral-800 shadow-xl cursor-pointer"
        >
          Quick View
        </button>
      </div>

      {/* ── 2. Content Details Below Image (Title + Price on left, Plus (+) button on right) ── */}
      <div className="mt-3 flex items-center justify-between gap-2 px-1">
        <div className="min-w-0 flex-1">
          <Link href="/products" className="block group/title">
            <h3 className="text-xs sm:text-sm font-semibold text-black truncate transition-colors group-hover/title:text-[#C9B07A]">
              {product.name ?? "Signature Frame"}
            </h3>
          </Link>
          <p className="mt-0.5 text-xs text-neutral-600 font-medium">
            {product.price ? product.price.replace("₹", "RS.") : "RS. 4,500"}
          </p>
        </div>

        {/* Standalone Cart Icon button */}
        <button
          type="button"
          aria-label="Add to cart"
          onClick={handleAddToCart}
          className={`flex shrink-0 items-center justify-center p-1.5 text-black hover:text-[#C9B07A] transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer ${
            added ? "text-emerald-600" : ""
          }`}
          title="Add to Cart"
        >
          {added ? (
            <Check className="size-5 animate-in zoom-in-50 duration-200 text-emerald-600" />
          ) : (
            <ShoppingBag className="size-5 stroke-[1.8]" />
          )}
        </button>
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
    <section id="new-drops" className="w-full bg-white px-4 pt-14 pb-4 text-black sm:px-6 lg:px-8 md:pt-16 md:pb-4">
      <div className="flex w-full flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[10px] uppercase font-semibold tracking-[0.25em] text-[#C9B07A] mb-1">
            Fresh Arrivals
          </p>
          <h2 className="font-heading text-[clamp(1.7rem,2.2vw,2.6rem)] font-semibold uppercase leading-none tracking-[-0.04em]">
            New Drops
          </h2>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {trendingProducts.map((product) => (
          <ProductCardView key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Link
          href="/collections"
          className="inline-flex h-9 items-center justify-center border border-black px-5 text-[0.6875rem] uppercase tracking-[0.12em] transition-colors hover:bg-black hover:text-white font-medium"
        >
          View All Drops
        </Link>
      </div>
    </section>
  )
}
