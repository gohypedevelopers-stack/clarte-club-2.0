"use client"

import Image from "next/image"
import { Heart, MessageCircle, Bookmark, Play } from "lucide-react"

import SimpleMarquee from "@/components/fancy/blocks/simple-marquee"

type LookbookSlide = {
  id: string
  image: string
  alt: string
  username: string
  caption: string
  time: string
  imagePos?: string
}

const track1: LookbookSlide[] = [
  { id: "t1-1", image: "/images/products/product9.png",       alt: "Style with Clarté frames", username: "street_style", caption: "Loving my new shades from @clarteclub", time: "2 hours ago",  imagePos: "center 16%" },
  { id: "t1-2", image: "/images/products/product10.png",      alt: "Style with Clarté frames", username: "street_style", caption: "Loving my new shades from @clarteclub", time: "5 hours ago",  imagePos: "center 14%" },
  { id: "t1-3", image: "/images/products/product11.png",      alt: "Style with Clarté frames", username: "street_style", caption: "Loving my new shades from @clarteclub", time: "10 hours ago", imagePos: "center 20%" },
  { id: "t1-4", image: "/images/products/product12.png",      alt: "Style with Clarté frames", username: "street_style", caption: "Loving my new shades from @clarteclub", time: "23 hours ago", imagePos: "center 22%" },
  { id: "t1-5", image: "/images/products/product13.png",      alt: "Style with Clarté frames", username: "street_style", caption: "Loving my new shades from @clarteclub", time: "1 hour ago",   imagePos: "center 18%" },
  { id: "t1-6", image: "/images/products/product14.png",      alt: "Style with Clarté frames", username: "street_style", caption: "Loving my new shades from @clarteclub", time: "8 hours ago",  imagePos: "center 24%" },
]

const track2: LookbookSlide[] = [
  { id: "t2-1", image: "/images/products/product14.png",      alt: "Style with Clarté frames", username: "street_style", caption: "Loving my new shades from @clarteclub", time: "3 hours ago",  imagePos: "center 24%" },
  { id: "t2-2", image: "/images/products/product5-white.png", alt: "Style with Clarté frames", username: "street_style", caption: "Loving my new shades from @clarteclub", time: "15 hours ago", imagePos: "center 32%" },
  { id: "t2-3", image: "/images/products/product9.png",       alt: "Style with Clarté frames", username: "street_style", caption: "Loving my new shades from @clarteclub", time: "20 hours ago", imagePos: "center 44%" },
  { id: "t2-4", image: "/images/products/product10.png",      alt: "Style with Clarté frames", username: "street_style", caption: "Loving my new shades from @clarteclub", time: "7 hours ago",  imagePos: "center 14%" },
  { id: "t2-5", image: "/images/products/product11.png",      alt: "Style with Clarté frames", username: "street_style", caption: "Loving my new shades from @clarteclub", time: "12 hours ago", imagePos: "center 20%" },
  { id: "t2-6", image: "/images/products/product12.png",      alt: "Style with Clarté frames", username: "street_style", caption: "Loving my new shades from @clarteclub", time: "18 hours ago", imagePos: "center 22%" },
]

function Avatar() {
  return (
    <div
      className="size-7 shrink-0 overflow-hidden rounded-full"
      style={{ background: "linear-gradient(135deg, #C9B07A 0%, #8A8072 100%)" }}
    >
      <div className="flex size-full items-center justify-center">
        <span className="text-[9px] font-bold text-white">CC</span>
      </div>
    </div>
  )
}

function SocialCard({ slide }: { slide: LookbookSlide }) {
  return (
    <article
      className="mx-2 flex shrink-0 flex-col overflow-hidden"
      style={{
        width: "210px",
        background: "#ffffff",
        border: "1px solid rgba(15,15,16,0.08)",
        boxShadow: "0 2px 14px rgba(0,0,0,0.09)",
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-2.5">
        <Avatar />
        <span
          className="text-[11px] font-semibold"
          style={{ color: "#0F0F10", letterSpacing: "0.01em" }}
        >
          {slide.username}
        </span>
      </div>

      {/* Image */}
      <div className="group relative aspect-[4/5] w-full overflow-hidden bg-[#e8e4db]">
        <Image
          src={slide.image}
          alt={slide.alt}
          fill
          sizes="210px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          style={{ objectPosition: slide.imagePos ?? "center" }}
        />
        {/* Play badge */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div
            className="grid size-10 place-items-center rounded-full"
            style={{
              background: "rgba(255,255,255,0.82)",
              backdropFilter: "blur(3px)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
            }}
          >
            <Play
              className="ml-0.5 size-4 fill-current"
              style={{ color: "rgba(15,15,16,0.72)" }}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-1.5 px-3 pb-3 pt-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Heart
              className="size-[15px] cursor-pointer transition-colors hover:text-rose-500"
              style={{ color: "#0F0F10", strokeWidth: 1.5 }}
            />
            <MessageCircle
              className="size-[15px] cursor-pointer"
              style={{ color: "#0F0F10", strokeWidth: 1.5 }}
            />
          </div>
          <Bookmark
            className="size-[15px] cursor-pointer"
            style={{ color: "#0F0F10", strokeWidth: 1.5 }}
          />
        </div>
        <p className="line-clamp-2 text-[10.5px] leading-snug" style={{ color: "#0F0F10" }}>
          <span className="font-semibold">{slide.username} </span>
          {slide.caption}
        </p>
        <p
          className="text-[9px] uppercase"
          style={{ letterSpacing: "0.12em", color: "#8A8072" }}
        >
          {slide.time}
        </p>
      </div>
    </article>
  )
}

export function LookbookCarousel() {
  return (
    <section
      className="w-full overflow-hidden py-12 md:py-16"
      style={{ background: "#0F0F10" }}
    >
      {/* Heading */}
      <div className="mb-10 text-center">
        <p
          className="mb-2 uppercase"
          style={{ fontSize: "0.5rem", letterSpacing: "0.32em", color: "#8A8072" }}
        >
          Community
        </p>
        <h2
          className="font-heading font-semibold uppercase leading-none"
          style={{
            fontSize: "clamp(1.2rem, 2vw, 1.8rem)",
            letterSpacing: "0.18em",
            color: "#F6F2EA",
          }}
        >
          As Seen On
        </h2>
        <div
          className="mx-auto mt-3"
          style={{ width: "32px", height: "1px", background: "#C9B07A" }}
        />
      </div>

      {/* Row 1 — scrolls LEFT */}
      <SimpleMarquee
        direction="left"
        baseVelocity={20}
        slowdownOnHover
        slowDownFactor={0}
        useScrollVelocity={false}
        scrollAwareDirection={false}
        scrollSpringConfig={{ damping: 40, stiffness: 200 }}
        repeat={4}
        className="overflow-hidden"
      >
        {track1.map((slide) => (
          <SocialCard key={slide.id} slide={slide} />
        ))}
      </SimpleMarquee>

      <div className="mt-3" />

      {/* Row 2 — scrolls RIGHT */}
      <SimpleMarquee
        direction="right"
        baseVelocity={16}
        slowdownOnHover
        slowDownFactor={0}
        useScrollVelocity={false}
        scrollAwareDirection={false}
        scrollSpringConfig={{ damping: 40, stiffness: 200 }}
        repeat={4}
        className="overflow-hidden"
      >
        {track2.map((slide) => (
          <SocialCard key={slide.id} slide={slide} />
        ))}
      </SimpleMarquee>
    </section>
  )
}
