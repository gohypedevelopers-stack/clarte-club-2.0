"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Check, X } from "lucide-react"

import { CartOfferProgress } from "@/components/cart/CartOfferProgress"
import { trendingProducts } from "@/components/product/productData"
import { CartRecommendationsCarousel } from "@/components/cart/CartRecommendationsCarousel"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet"

type CartItem = {
  id: string
  image: string
  alt: string
  title: string
  size: string
  price: string
}

const cartItems: CartItem[] = [
  {
    id: "cart-item-1",
    image: trendingProducts[0].image,
    alt: trendingProducts[0].alt,
    title: trendingProducts[0].name ?? "Signature Frame",
    size: "XS",
    price: trendingProducts[0].price ?? "₹ 4,500",
  },
  {
    id: "cart-item-2",
    image: trendingProducts[2].image,
    alt: trendingProducts[2].alt,
    title: trendingProducts[2].name ?? "Signature Frame",
    size: "XS",
    price: trendingProducts[2].price ?? "₹ 4,500",
  },
]

const promoStripText = "Additional Discount on Pre-paid | Free Return and Exchange"

const recommendations = [
  {
    id: "recommendation-1",
    image: trendingProducts[0].image,
    alt: trendingProducts[0].alt,
  },
  {
    id: "recommendation-2",
    image: trendingProducts[0].image,
    alt: trendingProducts[0].alt,
  },
  {
    id: "recommendation-3",
    image: trendingProducts[0].image,
    alt: trendingProducts[0].alt,
  },
]

function CartItemRow({ item }: { item: CartItem }) {
  return (
    <article className="grid grid-cols-[100px_minmax(0,1fr)] gap-4">
      <div className="relative aspect-[3/4] overflow-hidden bg-[#111]">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="100px"
          className="object-cover object-center"
        />
      </div>

      <div className="flex min-w-0 flex-col justify-between py-0.5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-[0.82rem] font-medium uppercase leading-[1.2] tracking-[0.08em] text-white">
              {item.title}
            </h3>

            <div className="mt-2.5 flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.06em] text-white/60">
              <span>{item.size}</span>
              <button
                type="button"
                className="transition-opacity hover:opacity-70 underline underline-offset-2"
              >
                Edit Size
              </button>
            </div>
          </div>

          <button
            type="button"
            aria-label={`Remove ${item.title}`}
            className="mt-0.5 text-[0.85rem] font-light uppercase leading-none text-white/70 transition-opacity hover:opacity-70 cursor-pointer"
          >
            <X className="size-4 stroke-[1.8]" />
          </button>
        </div>

        <div className="mt-5 flex items-end justify-between">
          <div className="flex items-center gap-2.5 text-[0.8rem] leading-none border border-white/10 px-2 py-1 bg-white/5">
            <button
              type="button"
              aria-label="Decrease quantity"
              className="text-white/60 hover:text-white transition-colors px-1"
            >
              -
            </button>
            <span className="font-semibold text-white px-0.5">1</span>
            <button
              type="button"
              aria-label="Increase quantity"
              className="text-white/60 hover:text-white transition-colors px-1"
            >
              +
            </button>
          </div>

          <p className="text-[0.85rem] font-semibold tracking-[0.08em] text-[#C9B07A]">
            {item.price}
          </p>
        </div>
      </div>
    </article>
  )
}

function PromoMarqueeRow() {
  return (
    <div className="flex shrink-0 items-center gap-10 whitespace-nowrap pr-10 text-[11px] font-semibold uppercase tracking-[0.16em] text-black">
      {Array.from({ length: 4 }).map((_, index) => (
        <span key={`promo-${index}`} className="whitespace-nowrap">
          {promoStripText}
        </span>
      ))}
    </div>
  )
}

type CartSidebarProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CartSidebar({ open, onOpenChange }: CartSidebarProps) {
  useEffect(() => {
    if (open) {
      (window as any).lenis?.stop()
      if (window.location.hash) {
        try {
          const state = typeof window.history.state === "object" && window.history.state !== null 
            ? window.history.state 
            : {};
          window.history.replaceState(state, document.title, window.location.pathname + window.location.search);
        } catch (err) {
          console.error("Failed to clear hash safely in CartSidebar:", err);
        }
      }
    } else {
      (window as any).lenis?.start()
    }
    return () => {
      (window as any).lenis?.start()
    }
  }, [open])

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        showCloseButton={false}
        overlayClassName="!z-[10000] bg-black/50 backdrop-blur-[1px]"
        className="!z-[10001] overflow-hidden border-l border-white/10 bg-black p-0 text-white shadow-[0_0_80px_rgba(0,0,0,0.45)] ease-in-out duration-300"
        style={{ width: "min(100vw, 420px)", maxWidth: "none" }}
      >
        <div className="flex h-full min-h-0 flex-col overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-white">
              <Check className="size-4 stroke-[2.4] text-[#C9B07A]" />
              <span>{cartItems.length} {cartItems.length === 1 ? "ITEM" : "ITEMS"} ADDED</span>
            </div>

            <SheetClose asChild>
              <button
                type="button"
                className="inline-flex items-center gap-2 text-[0.75rem] font-medium uppercase tracking-[0.18em] text-white/70 transition-opacity hover:opacity-100 cursor-pointer"
              >
                <span>CLOSE</span>
                <X className="size-4 stroke-[1.8]" />
              </button>
            </SheetClose>
          </div>

          <SheetTitle className="sr-only">Cart</SheetTitle>
          <SheetDescription className="sr-only">
            Your cart items, offers, recommendations, and checkout actions.
          </SheetDescription>

          <div className="flex-none px-5 py-4">
            <CartOfferProgress />
          </div>

          <div
            data-lenis-prevent
            className="cart-item-scrollbar min-h-0 flex-1 overflow-y-auto px-5 pb-4"
          >
            <section className="space-y-4">
              {cartItems.map((item) => (
                <CartItemRow key={`scroll-${item.id}`} item={item} />
              ))}
            </section>
          </div>

          <div className="flex-none bg-black">
            <div className="overflow-hidden bg-[#C9B07A] px-3 py-1.5 text-black">
              <div className="flex w-max items-center animate-[marquee_18s_linear_infinite] motion-reduce:animate-none [will-change:transform]">
                <PromoMarqueeRow />
                <PromoMarqueeRow />
              </div>
            </div>

            <div className="px-5 py-4 bg-black">
              <CartRecommendationsCarousel items={recommendations} />

              <div className="mt-5 pb-2">
                <button
                  type="button"
                  className="flex h-11 w-full items-center justify-center bg-[#C9B07A] text-[13px] font-semibold uppercase tracking-[0.18em] text-black transition-colors hover:bg-[#b0965d] active:bg-[#977f4c] cursor-pointer"
                >
                  Checkout
                </button>

                <Link
                  href="/cart"
                  className="mt-3 block text-center text-[10px] font-medium uppercase tracking-[0.16em] text-white/70 hover:text-white underline underline-offset-4 transition-colors"
                >
                  View Shopping Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
