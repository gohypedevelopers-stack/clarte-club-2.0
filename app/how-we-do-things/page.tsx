// Clarté Club - Considered Eyewear
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How We Do Things | Clarté Club",
  description: "How Clarté Club designs, packages, and prices its sunglasses and eyewear. Considered, honest, and deliberately unhurried.",
}

export default function HowWeDoThingsPage() {
  const sections = [
    {
      title: "On the product",
      text: "The product is where our attention goes first, second, and third. We chose the shapes because we wear them. We selected the materials because they last. We inspect every frame before it leaves our hands.",
      subtext: "Nothing here is designed to be trendy. Trends are exhausting, and we're already tired. We designed things we'd still want to wear in three years."
    },
    {
      title: "On the packaging",
      text: "Our packaging is calm. Not because we ran out of ideas, but because we prefer it that way. The box delivers your frames safely, the case protects them for the long run, and the items inside are there only because they are useful."
    },
    {
      title: "On the writing",
      text: "If you've noticed we don't shout on this website, that's on purpose. We're not going to tell you these are the best sunglasses you'll ever own. We don't actually know that. What we can tell you is what we made, how we made it, and why we thought it was worth doing."
    },
    {
      title: "On the price",
      text: "One honest number. What you see is the true price, not an inflated cost with a fake discount stapled underneath it. If a price ever moves, it's a structural adjustment, not a countdown timer or a manufactured sale."
    },
    {
      title: "On what we don't do",
      text: "We don't restock things forever. We don't try to be everything. We don't run our own factory and we won't pretend we do. We don't send you a message every week because we're bored. We'd rather be a genuinely honest brand than a bigger one."
    }
  ]

  return (
    <main className="flex-1 bg-black text-white font-sans min-h-screen pt-[var(--header-stack-height)] pb-24">
      
      {/* Hero Section */}
      <section className="relative w-full border-b border-white/10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center space-y-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-white/40">
            Our Philosophy
          </p>
          <h1 className="font-heading text-[38px] md:text-[54px] font-normal uppercase leading-[1.05] tracking-tight text-white">
            How we do things.
          </h1>
          <p className="mx-auto max-w-2xl text-[15px] leading-[1.8] text-white/60 font-light mt-4">
            Here's the short version of how we work. If you're going to buy something we made, you probably want to know what went into it.
          </p>
        </div>
      </section>

      {/* Structured Content Grid */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {sections.map((section, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start border-b border-white/5 pb-12 last:border-0 last:pb-0">
              {/* Left Title */}
              <div className="md:col-span-4 sticky top-24">
                <h2 className="font-heading text-lg font-normal uppercase tracking-wider text-white/90">
                  {section.title}
                </h2>
              </div>
              
              {/* Right Content */}
              <div className="md:col-span-8 space-y-4">
                <p className="text-[15px] leading-[1.8] text-white/60 font-light">
                  {section.text}
                </p>
                {section.subtext && (
                  <p className="text-[15px] leading-[1.8] text-white/40 font-light italic">
                    {section.subtext}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Statement */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center border-t border-white/10">
        <p className="text-[15px] leading-[1.8] text-white/50 font-light font-sans tracking-wide italic">
          Old school, but not old fashioned. There's a difference.
        </p>
      </section>

    </main>
  )
}
