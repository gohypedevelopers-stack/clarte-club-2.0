// Clarté Club - Considered Eyewear
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Club | Early Access to Clarté Club Drops",
  description: "The Club is a small, free list for early access to new Clarté Club drops. No points, no tiers, no spam.",
}

export default function TheClubPage() {
  return (
    <main className="flex-1 bg-black text-white font-sans min-h-screen pt-[var(--header-stack-height)] pb-24">
      
      {/* Hero Section */}
      <section className="relative w-full border-b border-white/10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center space-y-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-white/40">
            A Small Circle
          </p>
          <h1 className="font-heading text-[38px] md:text-[54px] font-normal uppercase leading-[1.05] tracking-tight text-white">
            The Club
          </h1>
          <p className="mx-auto max-w-2xl text-[15px] leading-[1.8] text-white/60 font-light mt-4">
            The Club is a small list of people who like what we do and want a heads-up when we make something new. That's it. There is no tier, no points, and nothing to chase.
          </p>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-16 md:grid-cols-2">
          
          {/* What it looks like */}
          <div className="space-y-6">
            <h2 className="font-heading text-lg font-normal uppercase tracking-wider text-white/90 border-b border-white/10 pb-3">
              What being in it looks like
            </h2>
            <ul className="space-y-4 text-[14px] leading-[1.7] text-white/60 font-light list-none pl-0">
              <li className="flex items-start gap-3">
                <span className="text-white/40 mt-1.5 size-1.5 shrink-0 rounded-full bg-white/40" />
                <span>You hear about a drop before it goes on the site.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white/40 mt-1.5 size-1.5 shrink-0 rounded-full bg-white/40" />
                <span>Some drops are only announced to the Club, and never posted anywhere else.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white/40 mt-1.5 size-1.5 shrink-0 rounded-full bg-white/40" />
                <span>You get the odd note from us when something is worth writing about—sometimes that's a new piece, sometimes it's a genuine offer, always because we meant it.</span>
              </li>
            </ul>
          </div>

          {/* What it isn't */}
          <div className="space-y-6">
            <h2 className="font-heading text-lg font-normal uppercase tracking-wider text-white/90 border-b border-white/10 pb-3">
              What it isn't
            </h2>
            <div className="space-y-4">
              <p className="text-[14px] leading-[1.7] text-white/60 font-light">
                Not a rewards program. If you ever start hearing from us more often than you want, one click and you're out. No hard feelings.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Join the Club Form */}
      <section className="mx-auto max-w-xl px-4 py-12 text-center border-t border-white/10 space-y-6">
        <form className="flex flex-col gap-4">
          <div className="relative flex items-center border-b border-white/20 pb-3 transition-colors duration-300 focus-within:border-white">
            <input
              type="email"
              required
              aria-label="Email address"
              placeholder="YOUR EMAIL"
              className="min-w-0 flex-1 bg-transparent text-[13px] uppercase tracking-[0.1em] text-white outline-none placeholder:text-white/30 pr-14"
            />
            <button
              type="submit"
              aria-label="Join the club"
              className="absolute right-0 text-[11px] font-semibold uppercase tracking-[0.15em] text-white hover:text-white/70 transition-colors duration-300 cursor-pointer"
            >
              JOIN
            </button>
          </div>
          <p className="text-[10px] uppercase tracking-[0.15em] text-white/40 leading-normal">
            One list. No spam. Ever.
          </p>
        </form>
      </section>

    </main>
  )
}
