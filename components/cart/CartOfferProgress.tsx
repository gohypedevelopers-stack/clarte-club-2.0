"use client"

const offerMilestones = [
  { label: "SHOP ₹4500", position: "27.5%" },
  { label: "SHOP ₹12000", position: "64.5%" },
  { label: "SHOP ₹15000", position: "90.5%" },
] as const

export function CartOfferProgress({ dark = true }: { dark?: boolean }) {
  return (
    <section className="mx-auto w-full max-w-[440px] text-center">
      <h2 className={`text-[12px] sm:text-[14px] font-semibold uppercase leading-normal tracking-[0.12em] ${dark ? "text-white" : "text-[#0F0F10]"}`}>
        SHOP FOR <span className="text-[#C9B07A]">₹2000</span> TO GET 10% OFF
      </h2>

      <div className="relative mt-4 h-[3.2rem]">
        <div className={`absolute left-0 top-[0.875rem] h-px w-[90.5%] ${dark ? "bg-white/30" : "bg-black/20"}`} />
        <div className="absolute left-0 top-[0.875rem] h-px w-[27.5%] bg-[#C9B07A]" />

        {offerMilestones.map((item) => (
          <div
            key={item.label}
            className="absolute top-[0.875rem] -translate-x-1/2 -translate-y-1/2"
            style={{ left: item.position }}
          >
            <span className={`block size-3.5 rounded-full border-[1.5px] ${dark ? "border-white bg-black" : "border-[#0F0F10] bg-white"}`} />
            <span className={`absolute left-1/2 top-[1.3rem] -translate-x-1/2 whitespace-nowrap text-[8.5px] font-medium uppercase tracking-[0.06em] sm:text-[9.5px] ${dark ? "text-white/60" : "text-neutral-500"}`}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
