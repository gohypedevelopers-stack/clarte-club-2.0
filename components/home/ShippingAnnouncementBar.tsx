export function ShippingAnnouncementBar() {
  return (
    <section className="announcement-bar bg-black text-white">
      <div className="flex h-full w-full items-center justify-center px-4 text-[10px] sm:text-[11px] lg:text-[13px] font-normal leading-none sm:px-6 lg:grid lg:grid-cols-3 lg:px-8">
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
