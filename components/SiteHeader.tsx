import { Navbar } from "@/components/Navbar"
import { ShippingAnnouncementBar } from "@/components/home/ShippingAnnouncementBar"

export function SiteHeader() {
  return (
    <div className="sticky top-[calc(-1*var(--announcement-height))] z-50 flex flex-col w-full">
      <ShippingAnnouncementBar />
      <Navbar />
    </div>
  )
}
