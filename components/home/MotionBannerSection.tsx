import Image from "next/image"

export function MotionBannerSection() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black">
      <Image
        src="/images/products/product8.png"
        alt="Editorial fashion image"
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />
    </section>
  )
}
