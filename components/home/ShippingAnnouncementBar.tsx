export function ShippingAnnouncementBar() {
  return (
    <section className="relative z-30 h-[50px] w-full bg-black text-white">
      <div className="grid h-full w-full grid-cols-3 items-center px-4 text-[14px] font-normal leading-none sm:px-6 md:px-8">
        <p className="justify-self-start whitespace-nowrap">
          International Shipping Available
        </p>
        <p className="justify-self-center whitespace-nowrap text-center">
          Free Shipping on Orders above Rs 2,900 | Launch Offer 30% off
        </p>
        <p className="justify-self-end whitespace-nowrap text-right">
          Easy Exchange and Returns
        </p>
      </div>
    </section>
  )
}
