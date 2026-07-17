// Clarté Club - Considered Eyewear
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Clarté Club | A Considered, Unisex Eyewear Label",
  description: "The story behind Clarté Club: a small, design-led label building considered sunglasses and eyewear, honestly, in small numbers.",
}

export default function AboutPage() {
  const philosophyCards = [
    {
      num: "01",
      title: "Who We Are",
      desc: "Clarté Club is an independent, design-led eyewear studio. We curated the range, selected materials, and refined the details we care about.",
      bg: "bg-neutral-900 text-white border border-white/10",
      image: "/images/products/product1.png"
    },
    {
      num: "02",
      title: "Radical Honesty",
      desc: "We don't run our own factory, and we won't dress that up. We design, we select, we inspect, and we stand behind our work.",
      bg: "bg-[#F6F2EA] text-[#0F0F10] border border-black/5",
      svg: (
        <svg viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 text-[#0F0F10]/25">
          <path d="M15 25h12c2 0 4 2 4 4v2c0 3-2 5-5 5H18c-3 0-5-2-5-5v-2c0-2 2-4 4-4z" />
          <path d="M53 25h12c2 0 4 2 4 4v2c0 3-2 5-5 5H56c-3 0-5-2-5-5v-2c0-2 2-4 4-4z" />
          <path d="M31 29c2-2 4-2 6-2s4 0 6 2" />
          <path d="M13 27C11 20 8 18 5 18M69 27c2-7 5-9 8-9" />
        </svg>
      )
    },
    {
      num: "03",
      title: "Small-Batch Scarcity",
      desc: "To reduce waste and ensure exclusivity, we run batches of only 150–300 frames. Once they sell out, they're gone.",
      bg: "bg-neutral-900 text-white border border-white/10",
      svg: (
        <svg viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 text-white/20">
          <rect x="25" y="15" width="50" height="30" rx="2" />
          <line x1="25" y1="25" x2="75" y2="25" />
          <line x1="25" y1="35" x2="75" y2="35" />
          <circle cx="50" cy="25" r="3" />
          <circle cx="35" cy="35" r="2" />
          <circle cx="65" cy="35" r="2" />
        </svg>
      )
    }
  ]

  const highlights = [
    {
      title: "One Honest Price",
      desc: "What you see is the true price, not an inflated cost with a fake discount. If a price moves, it's a real change, not a fake sale."
    },
    {
      title: "Full UV400 Protection",
      desc: "Every pair carries complete ultraviolet defense, keeping your vision shielded without compromising on structural clarity."
    },
    {
      title: "Zero Restocks",
      desc: "When a design is done, we move on. We'd rather build the next iteration than repeat our past releases indefinitely."
    },
    {
      title: "If it's wrong, we fix it",
      desc: "If something is not right with your frames, tell us. We'll make it right without a fuss. That's a real answer, not a policy line."
    }
  ]

  return (
    <main className="flex-1 bg-black text-white font-sans min-h-screen">
      
      {/* 1. Timeless Hero Section */}
      <section className="relative h-[95vh] w-full overflow-hidden flex flex-col justify-between pt-[var(--header-stack-height)] pb-12 px-6 sm:px-12 md:px-20">
        
        {/* Background Image with dark overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/products/product1.png"
            alt="Clarté Club premium frames"
            fill
            priority
            className="object-cover object-center filter grayscale contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/90" />
        </div>

        {/* Top Header/Breadcrumb */}
        <div className="relative z-10 pt-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/40">
            A Considered Eyewear Label
          </p>
        </div>

        {/* Giant Timeless Title */}
        <div className="relative z-10 text-center my-auto">
          <h1 className="font-heading text-[clamp(2.5rem,7vw,7rem)] font-normal uppercase leading-[0.95] tracking-[-0.04em] text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
            DESIGN IS CURATION
          </h1>
        </div>

        {/* Bottom Metadata & Links */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-end pt-8 border-t border-white/10">
          <div className="md:col-span-8 max-w-lg">
            <p className="text-sm leading-[1.8] text-white/60 font-light">
              Clarté Club is a design-led, independent eyewear studio. We curated the range, selected the materials, and refined the details we care about.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-start md:justify-end gap-6 text-[11px] uppercase tracking-[0.2em] font-medium">
            <Link href="/collections" className="hover:text-[#C9B07A] transition-colors duration-300">
              See the Collection ↗
            </Link>
            <Link href="/how-we-do-things" className="hover:text-[#C9B07A] transition-colors duration-300">
              How We Work ↗
            </Link>
          </div>
        </div>
      </section>

      {/* 2. The Clarté Philosophy (3-Card Grid) */}
      <section className="bg-[#fcfbfa] text-[#0F0F10] py-24 px-6 sm:px-12 md:px-20 border-t border-black/5">
        <div className="mx-auto max-w-7xl">
          
          {/* Header Split */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start mb-16">
            <div className="md:col-span-5">
              <h2 className="font-heading text-3xl md:text-4xl font-normal uppercase tracking-tight text-[#0F0F10] leading-none">
                THE CLARTÉ PHILOSOPHY
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-[15px] leading-[1.8] text-[#0F0F10]/60 font-light">
                We believe in strict constraints. We didn't build this to be everything to everyone. We designed the shapes because we wear them, selected the materials because they last, and set a standard that refuses shortcuts.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophyCards.map((card, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col justify-between p-10 h-[380px] group transition-all duration-500 overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.02)] ${card.bg}`}
              >
                {/* Background Image (If present) */}
                {card.image && (
                  <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 group-hover:scale-105 transition-all duration-700">
                    <Image src={card.image} alt={card.title} fill className="object-cover filter grayscale" />
                  </div>
                )}

                <div className="relative z-10 flex justify-between items-start">
                  <span className="font-mono text-sm tracking-wider opacity-40">{card.num}</span>
                  {card.svg && card.svg}
                </div>

                <div className="relative z-10 space-y-4">
                  <h3 className="font-heading text-xl font-normal uppercase tracking-wider">
                    {card.title}
                  </h3>
                  <p className="text-[13.5px] leading-[1.7] opacity-70 font-light">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Floating Spotlight (Premium Material Highlight) */}
      <section className="relative w-full h-[80vh] min-h-[500px] bg-black overflow-hidden flex items-center px-6 sm:px-12 md:px-20">
        
        {/* Full screen background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/products/product1.png"
            alt="Bio-Acetate detail"
            fill
            className="object-cover object-right opacity-30 filter grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
        </div>

        {/* Floating offset card on the left */}
        <div className="relative z-10 mx-auto max-w-7xl w-full flex justify-start">
          <div className="bg-[#F6F2EA] text-[#0F0F10] max-w-xl p-8 sm:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.3)] space-y-6">
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#0F0F10]/50">
              Material-Led Design
            </p>
            <h3 className="font-heading text-2xl sm:text-3xl font-normal uppercase tracking-tight text-[#0F0F10] leading-none">
              PREMIUM BIO-ACETATE
            </h3>
            <p className="text-[14px] leading-[1.8] text-[#0F0F10]/70 font-light">
              We select custom-engineered bio-acetate polymer derived from wood pulp and cotton fibers. It offers rich structural depth, drapes lightweight on the face, and is completely biodegradable.
            </p>
            
            {/* Carousel navigation simulation */}
            <div className="flex items-center justify-between pt-6 border-t border-[#0F0F10]/10">
              <span className="text-[11px] font-mono tracking-wider text-[#0F0F10]/60">Capsule 01 / 05</span>
              <div className="flex gap-4">
                <span className="cursor-not-allowed opacity-40 font-mono text-xs">←</span>
                <span className="cursor-pointer hover:text-[#C9B07A] font-mono text-xs transition-colors">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Running Ticker (CSS Marquee) */}
      <section className="relative w-full overflow-hidden bg-[#F6F2EA] text-[#0F0F10] py-6 border-y border-black/5">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 20s linear infinite;
          }
        `}} />
        
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee flex gap-12 text-[14px] font-medium uppercase tracking-[0.4em] whitespace-nowrap">
            {/* Repeated twice for seamless loop */}
            {Array(4).fill([
              "Presence over noise",
              "Design is curation",
              "Considered eyewear",
              "Small-batch scarcity"
            ]).flat().map((text, idx) => (
              <span key={idx} className="flex items-center gap-6">
                <span>{text}</span>
                <span className="opacity-30">&bull;</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The Club Mindset (Community Grid) */}
      <section className="bg-black py-24 px-6 sm:px-12 md:px-20">
        <div className="mx-auto max-w-7xl">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#C9B07A]">
              People Behind the Club
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-normal uppercase tracking-tight text-white leading-none">
              THE CLUB MINDSET
            </h2>
            <p className="text-[15px] leading-[1.8] text-white/60 font-light pt-2">
              Because the people who like what we make tend to share a specific mindset. Quiet about it, a little particular. &quot;Club&quot; felt more authentic than &quot;customers.&quot;
            </p>
          </div>

          {/* Simple responsive column gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: "Heritage Collection", tag: "Warm Browns & Tortoise", image: "/images/products/product1.png" },
              { title: "Noir Collection", tag: "Deep, Structural Blacks", image: "/images/products/product1.png" },
              { title: "Crystal Collection", tag: "Translucent & Smoke Tones", image: "/images/products/product1.png" }
            ].map((col, idx) => (
              <div key={idx} className="group relative flex flex-col space-y-4">
                <div className="relative aspect-[3/4] bg-neutral-900 border border-white/10 overflow-hidden">
                  <Image
                    src={col.image}
                    alt={col.title}
                    fill
                    className="object-cover filter grayscale contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                <div className="flex flex-col space-y-1">
                  <h3 className="font-heading text-lg font-normal uppercase text-white/90">{col.title}</h3>
                  <span className="text-[11px] uppercase tracking-wider text-white/40">{col.tag}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Big Statement / Quote Section */}
      <section className="bg-[#F6F2EA] text-[#0F0F10] py-28 px-6 text-center border-t border-black/5">
        <div className="mx-auto max-w-4xl space-y-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#0F0F10]/50 font-medium">Capsule Philosophy</span>
          <p className="font-heading text-2xl sm:text-3xl md:text-4xl font-normal leading-relaxed uppercase max-w-3xl mx-auto">
            &ldquo;Trends are exhausting, and we're already tired. We designed things we'd still want to wear in three years.&rdquo;
          </p>
        </div>
      </section>

      {/* 7. Process Spotlight (Precision Engineering) */}
      <section className="bg-black py-24 px-6 sm:px-12 md:px-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column - Detailed Blueprint SVG */}
            <div className="lg:col-span-5 bg-neutral-950 border border-white/10 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-4 left-4 font-mono text-[9px] text-white/20">CLARTE TECHNICAL SCHEMATIC</div>
              
              <svg viewBox="0 0 200 120" fill="none" stroke="currentColor" strokeWidth="0.75" className="w-full h-auto text-white/25 mt-4">
                <line x1="0" y1="20" x2="200" y2="20" strokeDasharray="2 4" />
                <line x1="0" y1="40" x2="200" y2="40" strokeDasharray="2 4" />
                <line x1="0" y1="60" x2="200" y2="60" strokeDasharray="2 4" />
                <line x1="0" y1="80" x2="200" y2="80" strokeDasharray="2 4" />
                <line x1="0" y1="100" x2="200" y2="100" strokeDasharray="2 4" />
                <line x1="40" y1="0" x2="40" y2="120" strokeDasharray="2 4" />
                <line x1="100" y1="0" x2="100" y2="120" strokeDasharray="2 4" />
                <line x1="160" y1="0" x2="160" y2="120" strokeDasharray="2 4" />
                
                <rect x="25" y="35" width="55" height="35" rx="8" />
                <rect x="120" y="35" width="55" height="35" rx="8" />
                <path d="M80 48 C 90 43, 110 43, 120 48" strokeWidth="1.5" />
                
                <line x1="25" y1="25" x2="80" y2="25" />
                <circle cx="25" cy="25" r="1" fill="currentColor" />
                <circle cx="80" cy="25" r="1" fill="currentColor" />
                <text x="52.5" y="20" fontSize="7" textAnchor="middle" fill="currentColor" fontFamily="monospace">52mm</text>
                
                <line x1="80" y1="25" x2="120" y2="25" />
                <text x="100" y="20" fontSize="7" textAnchor="middle" fill="currentColor" fontFamily="monospace">20mm</text>

                <line x1="15" y1="35" x2="15" y2="70" />
                <circle cx="15" cy="35" r="1" fill="currentColor" />
                <circle cx="15" cy="70" r="1" fill="currentColor" />
                <text x="10" y="52.5" fontSize="7" transform="rotate(-90 10 52.5)" textAnchor="middle" fill="currentColor" fontFamily="monospace">40mm</text>
              </svg>
            </div>

            {/* Right Column - Engineering Description */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#C9B07A]">
                The Engineering
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-normal uppercase tracking-tight text-white leading-none">
                PRECISION MICRO-MILLING
              </h2>
              <div className="h-[2px] w-12 bg-[#C9B07A] my-4" />
              <p className="text-[15px] leading-[1.8] text-white/60 font-light">
                We use state-of-the-art CNC micro-milling machines and custom-machined hydraulic hinges rather than relying on standard manual assembly. High-precision tooling ensures a consistent fit, structural integrity, and long-term durability.
              </p>
              <p className="text-[15px] leading-[1.8] text-white/60 font-light">
                Every frame is milled from a single flat sheet of bio-acetate, ensuring the grain of the tortoise or the clarity of the crystal frame remains structural and uninterrupted.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Studio Highlights (Our Promises) */}
      <section className="bg-[#fcfbfa] text-[#0F0F10] py-24 px-6 sm:px-12 md:px-20 border-t border-black/5">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Side Info */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#0F0F10]/50 font-medium">Standards</span>
            <h2 className="font-heading text-3xl font-normal uppercase tracking-tight text-[#0F0F10] leading-none">
              WHAT WE STAND BEHIND
            </h2>
            <div className="h-[2px] w-12 bg-black my-4" />
            <p className="text-[14px] leading-[1.8] text-[#0F0F10]/60 font-light">
              We design, we select, we inspect, and we stand behind our work. These are the promises we make to anyone who decides to support what we do.
            </p>
          </div>

          {/* Right Side - Table/List */}
          <div className="lg:col-span-8 flex flex-col divide-y divide-black/10">
            {highlights.map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 sm:grid-cols-12 gap-4 py-8 first:pt-0 last:pb-0 items-start">
                <h3 className="sm:col-span-4 font-heading text-md uppercase font-semibold text-[#0F0F10] tracking-wide">
                  {item.title}
                </h3>
                <p className="sm:col-span-8 text-[13.5px] leading-[1.8] text-[#0F0F10]/60 font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. Join CTA Banner */}
      <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden flex flex-col justify-center items-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/products/product1.png"
            alt="Clarté Club"
            fill
            className="object-cover object-center filter grayscale opacity-25"
          />
          <div className="absolute inset-0 bg-black/85" />
        </div>

        <div className="relative z-10 space-y-8 max-w-2xl">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-normal uppercase tracking-tight text-white leading-none">
            LET'S BE QUIET ABOUT IT TOGETHER.
          </h2>
          <p className="text-[15px] leading-[1.8] text-white/50 font-light">
            If any of this sounds like your kind of thing, have a look around or join our list.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/collections"
              className="inline-flex items-center justify-center border border-white/80 px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-black font-medium"
            >
              See the Collection
            </Link>
            <Link
              href="/the-club"
              className="inline-flex items-center justify-center border border-white/80 px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#C9B07A] hover:border-[#C9B07A] hover:text-black font-medium"
            >
              Join the Club
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Massive Signature Brand Footer */}
      <section className="bg-black py-16 text-center select-none overflow-hidden border-t border-white/5">
        <h2 className="font-sans text-[clamp(4rem,14vw,14rem)] font-bold tracking-tighter text-white/5 uppercase leading-none select-none">
          CLARTÉ CLUB
        </h2>
      </section>

    </main>
  )
}
