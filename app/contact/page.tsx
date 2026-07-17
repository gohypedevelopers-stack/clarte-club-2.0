// Clarté Club - Considered Eyewear
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Clarté Club",
  description: "Get in touch with Clarté Club. Email, WhatsApp, or Instagram, a real person replies, usually the same day.",
}

export default function ContactPage() {
  const contactMethods = [
    {
      name: "Email",
      value: "hello@clarteclub.in",
      href: "mailto:hello@clarteclub.in",
      label: "Write to us"
    },
    {
      name: "WhatsApp",
      value: "+91 00000 00000",
      href: "https://wa.me/910000000000", // Update with correct phone link format
      label: "Chat with us"
    },
    {
      name: "Instagram",
      value: "@clarteclub",
      href: "https://instagram.com/clarteclub",
      label: "Send a DM"
    }
  ]

  return (
    <main className="flex-1 bg-black text-white font-sans min-h-screen pt-[var(--header-stack-height)] pb-24">
      
      {/* Hero Section */}
      <section className="relative w-full border-b border-white/10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center space-y-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-white/40">
            Get in touch
          </p>
          <h1 className="font-heading text-[38px] md:text-[54px] font-normal uppercase leading-[1.05] tracking-tight text-white">
            Say hello.
          </h1>
          <p className="mx-auto max-w-2xl text-[15px] leading-[1.8] text-white/60 font-light mt-4">
            A real person reads these, usually one of us, and we try to reply the same day. Longer if it's the weekend.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {contactMethods.map((method, idx) => (
            <a
              key={idx}
              href={method.href}
              target={method.name !== "Email" ? "_blank" : undefined}
              rel={method.name !== "Email" ? "noopener noreferrer" : undefined}
              className="group block border border-white/10 p-8 hover:border-white transition-all duration-300 hover:bg-white/5 space-y-4"
            >
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/45 block group-hover:text-[#C9B07A] transition-colors duration-300">
                {method.label}
              </span>
              <h2 className="font-heading text-xl font-normal uppercase tracking-wider text-white">
                {method.name}
              </h2>
              <p className="text-[14px] text-white/60 font-light group-hover:text-white transition-colors duration-300 font-mono tracking-wide">
                {method.value}
              </p>
            </a>
          ))}
        </div>
      </section>

    </main>
  )
}
