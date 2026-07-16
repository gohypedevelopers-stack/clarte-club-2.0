import { FrameSequenceHero } from "@/components/home/FrameSequenceHero"
import { DenimCarousel } from "@/components/home/DenimCarousel"
import { DenimEditorialSection } from "@/components/home/DenimEditorialSection"
import { MotionBannerSection } from "@/components/home/MotionBannerSection"
import { LookbookCarousel } from "@/components/home/LookbookCarousel"
import { LaunchOfferBar } from "@/components/home/LaunchOfferBar"
import { EditsCarousel } from "@/components/home/EditsCarousel"
import { TrendingSection } from "@/components/home/TrendingSection"
import { BrandPhilosophy } from "@/components/home/BrandPhilosophy"
import { ComingSoonMarquee } from "@/components/home/ComingSoonMarquee"

export const dynamic = "force-dynamic"

export default function Home() {
  return (
    <main className="flex-1 -mt-[var(--header-stack-height)] bg-black">
      <FrameSequenceHero />
      <LaunchOfferBar />
      <TrendingSection />
      {/* <BrandPhilosophy /> */}
      <MotionBannerSection />
      <DenimCarousel />
      <EditsCarousel />
      <ComingSoonMarquee />
      <DenimEditorialSection />
      <LookbookCarousel />
    </main>
  )
}
