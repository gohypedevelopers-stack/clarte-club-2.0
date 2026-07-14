import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

type EditSlide = {
  id: string
  image: string
  alt: string
}

const editSlides: EditSlide[] = [
  {
    id: "edit-1",
    image: "/images/products/product1.png",
    alt: "Model wearing a blue denim outfit",
  },
  {
    id: "edit-2",
    image: "/images/products/product2.png",
    alt: "Model wearing a denim jacket in monochrome",
  },
  {
    id: "edit-3",
    image: "/images/products/product3.png",
    alt: "Model seated in a black tailored look",
  },
  {
    id: "edit-4",
    image: "/images/products/product4.png",
    alt: "Model wearing an all-black outfit",
  },
  {
    id: "edit-5",
    image: "/images/products/product1.png",
    alt: "Model wearing a blue denim outfit",
  },
  {
    id: "edit-6",
    image: "/images/products/product2.png",
    alt: "Model wearing a denim jacket in monochrome",
  },
  {
    id: "edit-7",
    image: "/images/products/product3.png",
    alt: "Model seated in a black tailored look",
  },
  {
    id: "edit-8",
    image: "/images/products/product4.png",
    alt: "Model wearing an all-black outfit",
  },
]

function EditCard({ slide }: { slide: EditSlide }) {
  return (
    <article className="relative aspect-[330/479] overflow-hidden bg-[#eef2f2]">
      <Image
        src={slide.image}
        alt={slide.alt}
        fill
        sizes="(max-width: 640px) 88vw, (max-width: 1024px) 52vw, 24vw"
        className="object-cover object-center transition-transform duration-500 hover:scale-[1.01]"
      />

      <div className="absolute inset-x-3 bottom-3 z-10">
        <p className="inline-block bg-white/0 px-1 py-0.5 text-[14px] uppercase tracking-[0.08em] text-black">
          Edit Name
        </p>
      </div>
    </article>
  )
}

export function EditsCarousel() {
  return (
    <section className="w-full bg-white px-4 py-14 text-black sm:px-6 lg:px-8 md:py-16">
      <div className="flex w-full flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="font-heading text-[clamp(1.7rem,2.2vw,2.6rem)] font-semibold uppercase leading-none tracking-[-0.04em]">
          Edits
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="mt-8 w-full"
        aria-label="Edit collection carousel"
      >
        <CarouselContent>
          {editSlides.map((slide) => (
            <CarouselItem
              key={slide.id}
              className="basis-[88%] sm:basis-[56%] md:basis-[38%] lg:basis-[24%]"
            >
              <EditCard slide={slide} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
