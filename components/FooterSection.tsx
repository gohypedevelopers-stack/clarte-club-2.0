import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

function FacebookIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function YoutubeIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
      <polygon points="10 15 15 12 10 9" />
    </svg>
  )
}

const companyLinks = [
  { label: "About Us", href: "/#about" },
  { label: "Help", href: "/#help" },
  { label: "Chat With Us", href: "/#chat" },
  { label: "Privacy Policy", href: "/#privacy" },
  { label: "Refund Policy", href: "/#refund" },
  { label: "Terms of Service", href: "/#terms" },
] as const

const quickLinks = [
  { label: "My Account", href: "/#account" },
  { label: "Returns/ Exchange", href: "/#returns" },
  { label: "Order Tracking", href: "/#tracking" },
] as const

const bottomLinks = [
  { label: "Privacy Policy", href: "/#privacy" },
  { label: "Terms of Use", href: "/#terms" },
  { label: "Returns", href: "/#returns" },
] as const

function FooterLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="inline-block w-fit text-[10px] uppercase tracking-[0.14em] text-[#F6F2EA]/70 transition-all duration-300 hover:text-[#C9B07A] hover:translate-x-0.5"
    >
      {children}
    </Link>
  )
}

function FooterGroup({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col">
      <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9B07A]">
        {title}
      </h3>
      <div className="mt-5 flex flex-col gap-3.5">
        {children}
      </div>
    </div>
  )
}

export function FooterSection() {
  return (
    <footer className="w-full border-t border-[#C9B07A]/25" style={{ background: "#0F0F10" }}>
      <div className="mx-auto max-w-[1268px] px-5 py-14 sm:px-8 md:py-16">
        
        {/* Top Header Block with Logo */}
        <div className="flex flex-col gap-6 border-b border-[#F6F2EA]/10 pb-8 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" aria-label="Clarte Club Home" className="transition-opacity hover:opacity-85">
            <Image
              src="/logo.svg"
              alt="Clarte Club"
              width={200}
              height={90}
              className="h-auto w-[8.5rem] object-contain invert brightness-95"
            />
          </Link>
          <p className="text-[9.5px] uppercase tracking-[0.26em] text-[#8A8072]">
            Signature Eyewear &bull; Crafted for Style
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          
          <FooterGroup title="Company">
            {companyLinks.map((link) => (
              <FooterLink key={link.label} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterGroup>

          <FooterGroup title="Quick Links">
            {quickLinks.map((link) => (
              <FooterLink key={link.label} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterGroup>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9B07A]">
              Contact
            </h3>
            <div className="mt-5 space-y-4.5 text-[10px] uppercase tracking-[0.1em] text-[#F6F2EA]/85">
              <div className="space-y-1">
                <p className="font-semibold text-[#8A8072] text-[9px] tracking-[0.16em]">For Customer Care</p>
                <p className="normal-case tracking-[0.02em] font-medium text-[#F6F2EA] hover:text-[#C9B07A] transition-colors duration-200">
                  <a href="mailto:customercare@clarteclub.in">customercare@clarteclub.in</a>
                </p>
              </div>

              <div className="space-y-1">
                <p className="font-semibold text-[#8A8072] text-[9px] tracking-[0.16em]">For Online Orders</p>
                <p className="normal-case tracking-[0.02em] font-medium text-[#F6F2EA] hover:text-[#C9B07A] transition-colors duration-200">
                  <a href="tel:+91000000000">+91 000000000</a>
                </p>
              </div>

              <div className="space-y-1">
                <p className="font-semibold text-[#8A8072] text-[9px] tracking-[0.16em]">Timings</p>
                <p className="normal-case tracking-[0.02em] font-medium text-[#F6F2EA]">
                  Mon-Sat : 9AM - 8PM
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9B07A]">
              Newsletter
            </h3>
            <p className="mt-2.5 text-[9px] uppercase tracking-[0.16em] text-[#8A8072] leading-relaxed">
              Subscribe for exclusive launches & offers
            </p>

            <div className="mt-5">
              <div className="flex items-center gap-3 border-b border-[#F6F2EA]/20 pb-2 transition-colors duration-300 focus-within:border-[#C9B07A]">
                <input
                  type="email"
                  aria-label="Email address"
                  placeholder="Enter your email address"
                  className={cn(
                    "min-w-0 flex-1 bg-transparent text-[11px] text-[#F6F2EA] outline-none placeholder:text-[#F6F2EA]/30",
                    "selection:bg-[#C9B07A] selection:text-black"
                  )}
                />
                <button
                  type="button"
                  aria-label="Submit newsletter email"
                  className="inline-flex size-6 items-center justify-center text-[#F6F2EA]/70 transition-colors hover:text-[#C9B07A]"
                >
                  <ArrowRight className="size-4 stroke-[1.8]" />
                </button>
              </div>

              <button
                type="button"
                className="group relative mt-5 flex h-11 w-full items-center justify-center overflow-hidden border border-[#C9B07A] bg-transparent text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C9B07A] transition-colors duration-300 hover:text-black"
              >
                {/* Gold fill slide-in */}
                <span
                  className="absolute inset-0 -translate-x-full bg-[#C9B07A] transition-transform duration-300 ease-out group-hover:translate-x-0"
                  aria-hidden
                />
                <span className="relative z-10">Subscribe</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="relative border-t border-[#F6F2EA]/10 pt-8 mt-12">
          
          {/* Main Footer links row */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8 relative z-10">
            {bottomLinks.map((link) => (
              <FooterLink key={link.label} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </div>

          {/* Social / Copyright / Watermark Row */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between relative z-10">
            {/* Copyright */}
            <div className="text-[9px] uppercase tracking-[0.18em] text-[#8A8072]">
              &copy; {new Date().getFullYear()} CLARTÉ CLUB. ALL RIGHTS RESERVED.
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5 text-[#F6F2EA]/60">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="hover:text-[#C9B07A] transition-colors duration-200"
              >
                <FacebookIcon className="size-[15px] stroke-[1.5]" />
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="hover:text-[#C9B07A] transition-colors duration-200"
              >
                <InstagramIcon className="size-[15px] stroke-[1.5]" />
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                className="hover:text-[#C9B07A] transition-colors duration-200"
              >
                <YoutubeIcon className="size-[15px] stroke-[1.5]" />
              </a>
            </div>
          </div>

          {/* Giant Faded Background watermark */}
          <div
            className="absolute left-1/2 bottom-3 -translate-x-1/2 pointer-events-none select-none z-0"
            style={{
              fontSize: "clamp(2rem, 9.8vw, 7.8rem)",
              fontWeight: 800,
              letterSpacing: "0.22em",
              color: "rgba(246, 242, 234, 0.038)",
              textTransform: "uppercase",
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            CLARTÉ CLUB
          </div>
        </div>

      </div>
    </footer>
  )
}
