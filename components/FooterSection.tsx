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
      className="group relative inline-flex items-center text-[11px] uppercase tracking-[0.13em] text-[#0F0F10]/90 transition-colors duration-300 hover:text-[#C9B07A] py-0.5 w-fit font-medium"
    >
      <span>{children}</span>
      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#C9B07A] transition-all duration-300 group-hover:w-full" />
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
      <h3 className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#0F0F10]">
        {title}
      </h3>
      <div className="mt-5 flex flex-col gap-3">
        {children}
      </div>
    </div>
  )
}

export function FooterSection() {
  return (
    <footer className="w-full border-t border-[#C9B07A]/20" style={{ background: "#F6F2EA" }}>
      <div className="mx-auto max-w-[1268px] px-5 pt-8 pb-0 sm:px-8 md:pt-10 md:pb-0">
        
        {/* Top Header Block with Logo */}
        <div className="flex flex-col gap-6 border-b border-[#0F0F10]/8 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" aria-label="Clarte Club Home" className="transition-all duration-300 hover:opacity-75 hover:scale-[1.01]">
            <Image
              src="/logo.svg"
              alt="Clarte Club"
              width={200}
              height={90}
              className="h-auto w-[8.5rem] object-contain"
            />
          </Link>
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#0F0F10]/70 font-semibold">
            Signature Eyewear &bull; Crafted for Style
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid gap-10 pt-8 pb-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          
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
            <h3 className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#0F0F10]">
              Contact
            </h3>
            <div className="mt-5 space-y-4 text-[11px] uppercase tracking-[0.08em] text-[#0F0F10]/90">
              <div className="space-y-1">
                <p className="font-semibold text-[#0F0F10]/60 text-[9px] tracking-[0.15em]">For Customer Care</p>
                <p className="normal-case tracking-[0.02em] font-semibold text-[#0F0F10] hover:text-[#C9B07A] transition-colors duration-200">
                  <a href="mailto:customercare@clarteclub.in">customercare@clarteclub.in</a>
                </p>
              </div>

              <div className="space-y-1">
                <p className="font-semibold text-[#0F0F10]/60 text-[9px] tracking-[0.15em]">For Online Orders</p>
                <p className="normal-case tracking-[0.02em] font-semibold text-[#0F0F10] hover:text-[#C9B07A] transition-colors duration-200">
                  <a href="tel:+91000000000">+91 00000 00000</a>
                </p>
              </div>

              <div className="space-y-1">
                <p className="font-semibold text-[#0F0F10]/60 text-[9px] tracking-[0.15em]">Timings</p>
                <p className="normal-case tracking-[0.02em] font-semibold text-[#0F0F10]">
                  Mon-Sat : 9AM - 8PM
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#0F0F10]">
              Newsletter
            </h3>
            <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.12em] text-[#0F0F10]/70 leading-relaxed">
              Subscribe for exclusive launches & offers
            </p>

            <form className="mt-6 flex flex-col gap-2">
              <div className="relative flex items-center border-b border-[#0F0F10]/20 pb-2.5 transition-colors duration-300 focus-within:border-[#C9B07A]">
                <input
                  type="email"
                  required
                  aria-label="Email address"
                  placeholder="ENTER YOUR EMAIL"
                  className={cn(
                    "min-w-0 flex-1 bg-transparent text-[11px] uppercase tracking-[0.08em] text-[#0F0F10] outline-none placeholder:text-[#0F0F10]/50 pr-14",
                    "selection:bg-[#C9B07A]/30"
                  )}
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="absolute right-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0F0F10] hover:text-[#C9B07A] transition-colors duration-300 cursor-pointer py-1"
                >
                  JOIN
                </button>
              </div>
              <p className="text-[9px] uppercase tracking-[0.06em] text-[#0F0F10]/60 mt-1.5 leading-normal">
                By subscribing, you agree to our Terms & Privacy Policy.
              </p>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#0F0F10]/8 mt-8 pt-8 pb-10 px-1">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Copyright */}
            <div className="text-[9px] uppercase tracking-[0.14em] text-[#0F0F10]/65 font-medium z-10">
              &copy; {new Date().getFullYear()} CLARTÉ CLUB. ALL RIGHTS RESERVED.
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 z-10">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="group flex size-7 items-center justify-center rounded-full border border-[#0F0F10]/10 hover:border-[#C9B07A] hover:bg-[#C9B07A]/5 transition-all duration-300"
              >
                <FacebookIcon className="size-[12px] text-[#0F0F10]/60 group-hover:text-[#C9B07A] transition-colors duration-300" style={{ strokeWidth: "1.75px" }} />
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="group flex size-7 items-center justify-center rounded-full border border-[#0F0F10]/10 hover:border-[#C9B07A] hover:bg-[#C9B07A]/5 transition-all duration-300"
              >
                <InstagramIcon className="size-[12px] text-[#0F0F10]/60 group-hover:text-[#C9B07A] transition-colors duration-300" style={{ strokeWidth: "1.75px" }} />
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                className="group flex size-7 items-center justify-center rounded-full border border-[#0F0F10]/10 hover:border-[#C9B07A] hover:bg-[#C9B07A]/5 transition-all duration-300"
              >
                <YoutubeIcon className="size-[12px] text-[#0F0F10]/60 group-hover:text-[#C9B07A] transition-colors duration-300" style={{ strokeWidth: "1.75px" }} />
              </a>
            </div>
        </div>
      </div>
    </div>
  </footer>
  )
}
