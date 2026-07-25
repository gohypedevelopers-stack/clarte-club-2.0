export function ShippingAnnouncementBar() {
  return (
    <section className="announcement-bar bg-black text-[#F6F2EA] overflow-hidden">
      <div className="flex h-full w-full items-center justify-center px-2 min-[370px]:px-4 font-marquee text-[8.5px] min-[370px]:text-[9.5px] sm:text-[10.08px] font-normal uppercase tracking-[0.08em] min-[370px]:tracking-[0.14em] sm:tracking-[0.2em] leading-none sm:px-6 lg:grid lg:grid-cols-3 lg:px-8">
        <p className="hidden lg:block justify-self-start whitespace-nowrap">
          Shipping Available
        </p>
        <p className="text-center justify-self-center whitespace-nowrap max-w-full truncate sm:overflow-visible sm:whitespace-nowrap">
          Free Shipping on Orders above Rs 2,900 | Launch Offer 30% off
        </p>
        <p className="hidden lg:block justify-self-end whitespace-nowrap text-right">
          Easy Exchange and Returns
        </p>
      </div>
    </section>
  )
}
