import Image from "next/image"
import { Sunglasses3DCanvas } from "@/components/home/Sunglasses3DCanvas"

export function Hero() {
  return (
    <section className="relative h-screen h-[100dvh] min-h-[100dvh] w-full overflow-hidden bg-black text-white flex flex-col justify-between">
      {/* Background Editorial Image */}
      <div className="absolute inset-0 size-full overflow-hidden pointer-events-none">
        {/* Mobile View Image */}
        <Image
          src="/images/ChatGPT Image Jul 25, 2026, 11_29_15 AM.png"
          alt="Clarté Club Eyewear Mobile"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 size-full object-cover object-center block md:hidden brightness-[0.75] contrast-[1.05]"
        />
        {/* Desktop View Image */}
        <Image
          src="/images/ChatGPT Image Jul 25, 2026, 11_13_56 AM.png"
          alt="Clarté Club Eyewear"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 size-full object-cover object-center hidden md:block brightness-[0.75] contrast-[1.05]"
        />
        {/* Cinematic Vignette & Gradient Overlays */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
        <div className="absolute inset-0 z-[1] bg-black/30" />
      </div>

      {/* Center Interactive 3D Model Container */}
      <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center pt-8 md:pt-12">
        <div className="w-full max-w-4xl h-[70vh] md:h-[78vh] relative">
          <Sunglasses3DCanvas modelPath="/video/blender1.glb" className="w-full h-full" />
        </div>
      </div>

      <span id="shop" className="sr-only">
        Shop
      </span>
      <span id="bestsellers" className="sr-only">
        Bestsellers
      </span>
      <span id="contact" className="sr-only">
        Contact Us
      </span>
      <span id="collections" className="sr-only">
        Collection
      </span>
    </section>
  )
}
