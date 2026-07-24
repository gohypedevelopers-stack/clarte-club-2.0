export function ShippingAnnouncementBar() {
  return (
    <section className="announcement-bar bg-black text-[#F6F2EA]">
      <div className="flex h-full w-full items-center justify-center px-4 font-marquee text-[10.08px] font-normal uppercase tracking-[0.2em] leading-none sm:px-6 lg:grid lg:grid-cols-3 lg:px-8">
        <p className="hidden lg:block justify-self-start whitespace-nowrap">
          International Shipping Available
        </p>
        <p className="text-center justify-self-center whitespace-nowrap">
          Free Shipping on Orders above Rs 2,900 | Launch Offer 30% off
        </p>
        <p className="hidden lg:block justify-self-end whitespace-nowrap text-right">
          Easy Exchange and Returns
        </p>
      </div>
    </section>
  )
}
