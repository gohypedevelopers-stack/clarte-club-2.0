import Link from "next/link"

import { LaunchOfferCountdown } from "@/components/home/LaunchOfferCountdown"
import { getServerTimestamp } from "@/lib/server-time"

const launchDeadline = Date.parse("2026-07-18T00:00:00Z")

export function LaunchOfferBar() {
  const initialNow = getServerTimestamp()

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(90deg, #0a0a0b 0%, #141415 50%, #0a0a0b 100%)",
        borderTop: "1px solid rgba(201,176,122,0.25)",
        borderBottom: "1px solid rgba(201,176,122,0.10)",
      }}
    >
      {/* Subtle gold noise texture overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 100% at 50% 50%, rgba(201,176,122,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex h-[88px] w-full max-w-[1268px] items-center justify-between gap-4 px-5 sm:px-8 md:h-[96px]">

        {/* Left: Headline */}
        <div className="flex shrink-0 flex-col" style={{ minWidth: 0 }}>
          <span
            className="uppercase"
            style={{
              fontSize: "clamp(0.42rem, 0.8vw, 0.65rem)",
              letterSpacing: "0.25em",
              color: "#F6F2EA",
              lineHeight: 1,
            }}
          >
            Limited time
          </span>
          <span
            className="mt-1 block font-semibold uppercase leading-none"
            style={{
              fontSize: "clamp(0.75rem, 1.5vw, 1.1rem)",
              letterSpacing: "0.08em",
              color: "#F6F2EA",
            }}
          >
            Launch Offer{" "}
            <span
              style={{
                color: "#C9B07A",
                borderBottom: "1.5px solid rgba(201,176,122,0.55)",
                paddingBottom: "1px",
              }}
            >
              Live Now
            </span>
          </span>
        </div>

        {/* Center: Countdown */}
        <div className="flex flex-1 items-center justify-center">
          {/* Thin vertical rule left */}
          <div
            aria-hidden
            className="mr-4 hidden shrink-0 sm:block"
            style={{ width: "1px", height: "36px", background: "rgba(201,176,122,0.2)" }}
          />

          <LaunchOfferCountdown
            targetTimestamp={launchDeadline}
            initialNow={initialNow}
          />

          {/* Thin vertical rule right */}
          <div
            aria-hidden
            className="ml-4 hidden shrink-0 sm:block"
            style={{ width: "1px", height: "36px", background: "rgba(201,176,122,0.2)" }}
          />
        </div>

        {/* Right: CTA */}
        <Link
          href="/collections"
          className="group relative shrink-0 overflow-hidden"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "clamp(2rem, 4vw, 2.6rem)",
            paddingInline: "clamp(0.9rem, 2vw, 1.75rem)",
            border: "1px solid rgba(201,176,122,0.55)",
            fontSize: "clamp(0.5rem, 0.9vw, 0.7rem)",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#C9B07A",
            textDecoration: "none",
            transition: "color 280ms ease",
            whiteSpace: "nowrap",
          }}
        >
          {/* Hover fill */}
          <span
            aria-hidden
            className="absolute inset-0 -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"
            style={{ background: "rgba(201,176,122,0.12)" }}
          />
          <span className="relative">Shop Now</span>
        </Link>
      </div>
    </section>
  )
}
