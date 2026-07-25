"use client"

import Image from "next/image"
import Link from "next/link"

function FacebookIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
    </svg>
  )
}

function InstagramIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function YoutubeIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

const clarteClubLinks = [
  { label: "OUR STORY", href: "/about" },
  { label: "HELP", href: "/#help" },
  { label: "CHAT WITH US", href: "/#chat" },
  { label: "RETURNS & EXCHANGE", href: "/#returns" },
  { label: "PRIVACY POLICY", href: "/#privacy" },
  { label: "REFUND POLICY", href: "/#refund" },
  { label: "TERMS OF SERVICE", href: "/#terms" },
] as const

export function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-[#0F0F10] text-[#F6F2EA] pt-10 sm:pt-12 pb-8 border-t border-[#8A8072]/20">
      <div className="w-full px-6 md:px-12 2xl:px-24 mx-auto relative z-10">
        <div className="grid grid-cols-2 gap-8 mb-8 relative z-10 md:grid-cols-12">

          {/* Column 1: Brand Logo & Short Desc */}
          <div className="col-span-2 md:col-span-3">
            <Link href="/" className="block w-32 sm:w-36 md:w-44 -ml-4 -mt-8 -mb-8 sm:-mt-10 sm:-mb-10 hover:opacity-80 transition-opacity">
              <Image
                src="/cartellogo.png"
                alt="Clarté Club"
                width={400}
                height={400}
                className="w-full h-auto object-contain pointer-events-none brightness-0 invert"
              />
            </Link>
            <p className="text-xs text-[#8A8072] leading-relaxed pr-4 font-light mt-0">
              Clarté Club is the destination for premium eyewear and future fashion.
              Elevating your lifestyle through vision.
            </p>
          </div>

          {/* Column 2: CLARTÉ CLUB */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="font-bold text-xs sm:text-sm uppercase mb-4 tracking-wider text-[#F6F2EA]">CLARTÉ CLUB</h4>
            <ul className="space-y-2.5 text-xs text-[#8A8072] uppercase tracking-wider">
              {clarteClubLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-[#C9B07A] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: GET SUPPORT */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="font-bold text-xs sm:text-sm uppercase mb-4 tracking-wider text-[#F6F2EA]">GET SUPPORT</h4>
            
            <div className="space-y-3.5 text-xs">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-wider text-[#8A8072]">CUSTOMER CARE EMAIL</p>
                <p className="text-xs font-semibold text-[#F6F2EA] hover:text-[#C9B07A] transition-colors mt-0.5">
                  <a href="mailto:contact@clarte.club">contact@clarte.club</a>
                </p>
              </div>

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-wider text-[#8A8072]">PHONE ASSISTANCE</p>
                <p className="text-xs font-semibold text-[#F6F2EA] hover:text-[#C9B07A] transition-colors mt-0.5">
                  <a href="tel:+91000000000">+91 00000 00000</a>
                </p>
              </div>

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-wider text-[#8A8072]">SUPPORT HOURS</p>
                <p className="text-xs font-semibold text-[#F6F2EA] mt-0.5">
                  Mon-Sat : 9AM - 8PM IST
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: CONNECT WITH US */}
          <div className="col-span-2 md:col-span-3">
            <h4 className="font-bold text-xs sm:text-sm uppercase mb-3 tracking-wider text-[#F6F2EA]">CONNECT WITH US</h4>
            <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8A8072] leading-relaxed mb-3">
              SUBSCRIBE FOR PRIVATE DROP ANNOUNCEMENTS & CAPSULE ACCESS
            </p>
            
            <form className="flex flex-col space-y-2" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex items-center border-b border-[#8A8072]/40 pb-2 focus-within:border-[#C9B07A] transition-colors">
                <input
                  type="email"
                  required
                  placeholder="ENTER YOUR EMAIL"
                  className="w-full bg-transparent text-xs text-[#F6F2EA] placeholder:text-[#8A8072] uppercase tracking-wider outline-none pr-12 py-1"
                />
                <button
                  type="submit"
                  className="absolute right-0 text-xs font-bold uppercase tracking-wider text-[#F6F2EA] hover:text-[#C9B07A] transition-colors cursor-pointer"
                >
                  JOIN
                </button>
              </div>
              <p className="text-[9px] uppercase tracking-wider text-[#8A8072] pt-1">
                BY SUBSCRIBING, YOU AGREE TO OUR TERMS & PRIVACY POLICY.
              </p>
            </form>

            <div className="mt-5">
              <p className="text-[9px] font-bold uppercase tracking-wider text-[#8A8072] mb-2">
                FOLLOW CLARTÉ CLUB
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex size-8 items-center justify-center rounded-full border border-[#8A8072]/30 text-[#F6F2EA] hover:border-[#C9B07A] hover:text-[#C9B07A] transition-all"
                >
                  <FacebookIcon className="size-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex size-8 items-center justify-center rounded-full border border-[#8A8072]/30 text-[#F6F2EA] hover:border-[#C9B07A] hover:text-[#C9B07A] transition-all"
                >
                  <InstagramIcon className="size-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex size-8 items-center justify-center rounded-full border border-[#8A8072]/30 text-[#F6F2EA] hover:border-[#C9B07A] hover:text-[#C9B07A] transition-all"
                >
                  <YoutubeIcon className="size-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="flex flex-row justify-between items-center pt-4 border-t border-[#8A8072]/20 relative z-10 w-full">
          <p className="text-[8px] sm:text-[9px] text-[#8A8072] uppercase tracking-widest font-medium">
            &copy; {new Date().getFullYear()} CLARTÉ CLUB. ALL RIGHTS RESERVED.
          </p>
          <div className="text-[8px] sm:text-[9px] uppercase tracking-widest text-[#8A8072]">
            PRESENCE OVER NOISE
          </div>
        </div>

      </div>

      {/* Faded Background Text Watermark */}
      <div className="absolute bottom-1 left-0 right-0 text-center pointer-events-none z-0 select-none overflow-hidden leading-none">
        <span className="block text-[6vw] md:text-[5vw] lg:text-5xl xl:text-6xl font-bold uppercase tracking-[0.45em] text-transparent bg-clip-text bg-gradient-to-b from-[#F6F2EA]/12 to-transparent translate-x-[3.5vw]">
          CLARTÉ CLUB
        </span>
      </div>
    </footer>
  )
}
