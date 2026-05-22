import { FooterSection } from "@/components/FooterSection"
import { SustainabilityMarquee } from "@/components/home/SustainabilityMarquee"

export function SiteFooter() {
  return (
    <div className="w-full">
      <SustainabilityMarquee />
      <FooterSection />
    </div>
  )
}
