"use client"

export function MotionBannerSection() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black">
      <video
        src="/video/Model_wearing_sunglasses_banner_202607161313.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 size-full object-cover object-center"
      />
      {/* Subtle vignette for cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
    </section>
  )
}
