import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

type EditSlide = {
  id: string
  image: string
  alt: string
  label?: string
}

const editSlides: EditSlide[] = [
  {
    id: "edit-1",
    image: "/images/products/product1.png",
    alt: "Model wearing premium Heritage Oval sunglasses",
    label: "The Clean Line Edit",
  },
  {
    id: "edit-2",
    image: "/images/products/product2.png",
    alt: "Model wearing dark metal frames in monochrome",
    label: "Monochrome Studies",
  },
  {
    id: "edit-3",
    image: "/images/products/product3.png",
    alt: "Model wearing clear acetate optical frames",
    label: "Tailored Restraint",
  },
  {
    id: "edit-4",
    image: "/images/products/product4.png",
    alt: "Model wearing tortoiseshell D-frame sunglasses",
    label: "All Black Volume",
  },
  {
    id: "edit-5",
    image: "/images/products/product1.png",
    alt: "Model wearing premium Heritage Oval sunglasses",
    label: "The Clean Line Edit",
  },
  {
    id: "edit-6",
    image: "/images/products/product2.png",
    alt: "Model wearing dark metal frames in monochrome",
    label: "Monochrome Studies",
  },
  {
    id: "edit-7",
    image: "/images/products/product3.png",
    alt: "Model wearing clear acetate optical frames",
    label: "Tailored Restraint",
  },
  {
    id: "edit-8",
    image: "/images/products/product4.png",
    alt: "Model wearing tortoiseshell D-frame sunglasses",
    label: "All Black Volume",
  },
]

function EditCard({ slide }: { slide: EditSlide }) {
  return (
    <article className="group relative aspect-[330/479] overflow-hidden" style={{ background: "#0F0F10" }}>
      <Image
        src={slide.image}
        alt={slide.alt}
        fill
        sizes="(max-width: 640px) 88vw, (max-width: 1024px) 52vw, 24vw"
        className="object-cover object-top transition-[transform,opacity] duration-500 group-hover:scale-[1.04] group-hover:opacity-70"
      />

      {/* Permanent bottom vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5"
        style={{
          background: "linear-gradient(to top, rgba(10,10,11,0.75) 0%, transparent 100%)",
        }}
      />

      {/* Hover overlay — slides up */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 translate-y-2 opacity-0 transition-[transform,opacity] duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100"
        style={{ padding: "1rem 1rem 1.1rem" }}
      >
        {/* Gold hairline rule */}
        <div
          className="mb-2.5 w-8"
          style={{ height: "1px", background: "#C9B07A" }}
        />
        <p
          className="text-[10px] font-semibold uppercase leading-tight"
          style={{ letterSpacing: "0.18em", color: "#F6F2EA" }}
        >
          {slide.label ?? "Edit Name"}
        </p>
        <p
          className="mt-1 text-[9px] font-normal uppercase"
          style={{ letterSpacing: "0.22em", color: "#C9B07A" }}
        >
          Shop Edit →
        </p>
      </div>
    </article>
  )
}

export function EditsCarousel() {
  return (
    <section
      className="w-full px-4 py-14 sm:px-6 lg:px-8 md:py-20"
      style={{ background: "#0F0F10" }}
    >
      {/* Section header */}
      <div className="mb-8 flex w-full flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p
            className="mb-1.5 uppercase"
            style={{
              fontSize: "0.52rem",
              letterSpacing: "0.28em",
              color: "#8A8072",
            }}
          >
            Curated selections
          </p>
          <h2
            className="font-heading font-semibold uppercase leading-none"
            style={{
              fontSize: "clamp(1.7rem, 2.2vw, 2.6rem)",
              letterSpacing: "-0.04em",
              color: "#F6F2EA",
            }}
          >
            Edits
            <span
              style={{
                display: "inline-block",
                width: "0.35em",
                height: "0.35em",
                borderRadius: "50%",
                background: "#C9B07A",
                marginLeft: "0.25em",
                verticalAlign: "middle",
                marginBottom: "0.12em",
              }}
            />
          </h2>
        </div>
      </div>

      <Carousel
        opts={{ align: "start", loop: false }}
        className="w-full"
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
