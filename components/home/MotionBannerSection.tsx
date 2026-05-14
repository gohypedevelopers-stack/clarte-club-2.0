import Image from "next/image"

export function MotionBannerSection() {
  return (
    <section className="w-full bg-white pt-10 md:pt-14 pb-0">
      <h2 className="sr-only">Motion banner</h2>

      <div className="relative aspect-[3/1] w-full overflow-hidden bg-[#5a0f17]">
        <Image
          src="/images/products/product15.png"
          alt="Model in denim with red motion blur"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </div>
    </section>
  )
}
