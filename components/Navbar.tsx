"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, Search, UserRound } from "lucide-react"
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type FocusEventHandler,
  type MouseEventHandler,
  type ReactNode,
} from "react"

import { cn } from "@/lib/utils"
import { SearchSidebar } from "@/components/home/SearchSidebar"

type NavKey = "women" | "men" | "bestsellers"

type PrimaryNavItem = {
  key: NavKey
  label: string
  href: string
}

const primaryNav: PrimaryNavItem[] = [
  { key: "women", label: "Women", href: "/#women" },
  { key: "men", label: "Men", href: "/#men" },
  { key: "bestsellers", label: "Bestsellers", href: "/#bestsellers" },
]

const megaMenuFeatured = ["New", "Bestsellers", "Sale"]

const megaMenuCategories = [
  "Bootcut Jeans",
  "Low Waist Jeans",
  "Straight-Leg Jeans",
  "Wide-Leg Jeans",
  "Baggy / Loose Fit Jeans",
  "Mom Jeans",
  "Dad Jeans",
  "Flared Jeans",
]

const megaMenuCards = [
  {
    src: "/images/nav1.png",
    alt: "Editorial preview for the Off Beat Edit collection",
    eyebrow: "Spotlight",
    titleLines: ["Off Beat", "Edit"],
  },
  {
    src: "/images/nav2.png",
    alt: "Editorial preview for the Country Edit collection",
    eyebrow: "New Launch",
    titleLines: ["Country", "Edit"],
  },
]

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

function NavLink({
  href,
  children,
  active = false,
  selected = false,
  mobile = false,
  tone = "dark",
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  onClick,
  ariaHaspopup,
  ariaExpanded,
}: {
  href: string
  children: ReactNode
  active?: boolean
  selected?: boolean
  mobile?: boolean
  tone?: "dark" | "light"
  onMouseEnter?: MouseEventHandler<HTMLAnchorElement>
  onMouseLeave?: MouseEventHandler<HTMLAnchorElement>
  onFocus?: FocusEventHandler<HTMLAnchorElement>
  onBlur?: FocusEventHandler<HTMLAnchorElement>
  onClick?: MouseEventHandler<HTMLAnchorElement>
  ariaHaspopup?: "menu"
  ariaExpanded?: boolean
}) {
  const isEmphasized = active

  return (
    <Link
      href={href}
      aria-current={selected ? "page" : undefined}
      aria-haspopup={ariaHaspopup}
      aria-expanded={ariaExpanded}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      onClick={onClick}
      className={cn(
        "relative whitespace-nowrap uppercase transition-opacity",
        mobile
          ? "flex-none text-[0.75rem] tracking-[0.18em]"
          : "text-[0.875rem] tracking-[0.12em]",
        isEmphasized ? "opacity-100" : "hover:opacity-60",
        isEmphasized &&
          cn(
            "after:absolute after:left-0 after:top-full after:mt-1.5 after:h-px after:w-full after:content-['']",
            tone === "light" ? "after:bg-white" : "after:bg-black"
          )
      )}
    >
      {children}
    </Link>
  )
}

function IconButton({
  label,
  children,
  tone = "dark",
  onClick,
}: {
  label: string
  children: ReactNode
  tone?: "dark" | "light"
  onClick?: () => void
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cn(
        "inline-flex size-9 items-center justify-center transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2",
        tone === "light"
          ? "text-white focus-visible:ring-white/30"
          : "text-black focus-visible:ring-black/25"
      )}
    >
      {children}
    </button>
  )
}

function MenuSection({
  title,
  items,
  open,
  onClose,
}: {
  title: string
  items: string[]
  open: boolean
  onClose: () => void
}) {
  return (
    <section className="min-w-0">
      <p className="text-[1rem] font-semibold uppercase tracking-[0.08em] text-black">
        {title}
      </p>

      <ul className="mt-7 space-y-4">
        {items.map((item) => (
          <li key={item}>
            <button
              type="button"
              tabIndex={open ? 0 : -1}
              onClick={onClose}
              className="block text-left text-[0.95rem] leading-[1.55] tracking-[0.01em] transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:opacity-70"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

function MenuCard({
  src,
  alt,
  eyebrow,
  titleLines,
}: {
  src: string
  alt: string
  eyebrow: string
  titleLines: string[]
}) {
  return (
    <article className="relative aspect-[314/412] overflow-hidden bg-neutral-100">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 48vw, 314px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.12)_58%,rgba(0,0,0,0.28)_100%)]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)]">
        <span className="text-[0.95rem] font-light uppercase tracking-[0.16em]">
          {eyebrow}
        </span>
        <div className="mt-3 space-y-0.5">
          {titleLines.map((line) => (
            <div
              key={line}
              className="text-[clamp(2rem,2.7vw,3.05rem)] font-light uppercase leading-[0.9] tracking-[-0.05em]"
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

function getNavKeyFromHash(hash: string): NavKey | null {
  const normalized = hash.replace(/^#/, "").toLowerCase()

  if (
    normalized === "women" ||
    normalized === "men" ||
    normalized === "bestsellers"
  ) {
    return normalized
  }

  return null
}

export function Navbar({
  variant = "solid",
  className,
}: {
  variant?: "solid" | "overlay"
  className?: string
}) {
  const defaultNavKey: NavKey = "men"
  const [isScrolled, setIsScrolled] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const [isSettlingTop, setIsSettlingTop] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [selectedNav, setSelectedNav] = useState<NavKey>(defaultNavKey)
  const [activeMenu, setActiveMenu] = useState<NavKey | null>(null)
  const lastScrollYRef = useRef(0)
  const topRevealTimerRef = useRef<number | null>(null)
  const menuCloseTimerRef = useRef<number | null>(null)
  const isOverlay = variant === "overlay"
  const isOverlayLight = isOverlay && !isScrolled && !isSettlingTop
  const tone: "dark" | "light" = isOverlayLight ? "light" : "dark"
  const visualActiveMenu = activeMenu ?? selectedNav
  const overlayTransform = isOverlay
    ? showHeader
      ? isSettlingTop
        ? "translate3d(0,50px,0)"
        : isScrolled
          ? "translate3d(0,0,0)"
          : "translate3d(0,50px,0)"
      : "translate3d(0,-120%,0)"
    : undefined

  const clearMenuCloseTimer = () => {
    if (menuCloseTimerRef.current !== null) {
      window.clearTimeout(menuCloseTimerRef.current)
      menuCloseTimerRef.current = null
    }
  }

  const openMenu = (menu: NavKey) => {
    clearMenuCloseTimer()
    setActiveMenu(menu)
  }

  const scheduleMenuClose = () => {
    clearMenuCloseTimer()
    menuCloseTimerRef.current = window.setTimeout(() => {
      setActiveMenu(null)
      menuCloseTimerRef.current = null
    }, 180)
  }

  useEffect(() => {
    const updateSelectedNav = () => {
      setSelectedNav(getNavKeyFromHash(window.location.hash) ?? defaultNavKey)
    }

    updateSelectedNav()
    window.addEventListener("hashchange", updateSelectedNav)
    window.addEventListener("popstate", updateSelectedNav)

    return () => {
      window.removeEventListener("hashchange", updateSelectedNav)
      window.removeEventListener("popstate", updateSelectedNav)
    }
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (!isOverlay) {
      return
    }

    const clearTopRevealTimer = () => {
      if (topRevealTimerRef.current !== null) {
        window.clearTimeout(topRevealTimerRef.current)
        topRevealTimerRef.current = null
      }
      setIsSettlingTop(false)
    }

    const updateScrollState = () => {
      const currentY = window.scrollY
      const previousY = lastScrollYRef.current
      const hasScrolledPastThreshold = currentY > 50
      const scrollDelta = currentY - previousY

      clearTopRevealTimer()
      setIsScrolled(hasScrolledPastThreshold)

      if (hasScrolledPastThreshold) {
        setIsSettlingTop(false)
        if (scrollDelta > 8) {
          setShowHeader(true)
        } else if (scrollDelta < -8) {
          clearMenuCloseTimer()
          setActiveMenu(null)
          setShowHeader(false)
        }
      } else {
        setShowHeader(true)

        if (previousY > 50) {
          setIsScrolled(true)
          setIsSettlingTop(true)
          topRevealTimerRef.current = window.setTimeout(() => {
            setIsScrolled(false)
            setIsSettlingTop(false)
            topRevealTimerRef.current = null
          }, 700)
        } else {
          setIsScrolled(false)
          setIsSettlingTop(false)
        }
      }

      lastScrollYRef.current = currentY
    }

    let rafId1 = 0
    let rafId2 = 0

    const syncScrollState = () => {
      updateScrollState()

      rafId1 = window.requestAnimationFrame(() => {
        updateScrollState()
        rafId2 = window.requestAnimationFrame(updateScrollState)
      })
    }

    lastScrollYRef.current = window.scrollY
    syncScrollState()
    window.addEventListener("scroll", updateScrollState, { passive: true })
    window.addEventListener("pageshow", syncScrollState)

    return () => {
      clearTopRevealTimer()
      window.cancelAnimationFrame(rafId1)
      window.cancelAnimationFrame(rafId2)
      window.removeEventListener("scroll", updateScrollState)
      window.removeEventListener("pageshow", syncScrollState)
    }
  }, [isOverlay])

  useEffect(() => {
    return () => {
      if (menuCloseTimerRef.current !== null) {
        window.clearTimeout(menuCloseTimerRef.current)
      }
    }
  }, [])

  return (
    <header
      className={cn(
        isOverlay
          ? cn(
              "fixed inset-x-0 top-0 z-[100] h-[98px] transform-gpu transition-[background-color,color,box-shadow,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
              showHeader
                ? isScrolled
                  ? "bg-white text-black shadow-[0_1px_0_rgba(0,0,0,0.08)]"
                  : "bg-transparent text-white"
                : "bg-white text-black shadow-[0_1px_0_rgba(0,0,0,0.08)] pointer-events-none"
            )
          : "border-b border-transparent bg-white text-black lg:h-[98px]",
        className
      )}
      style={isOverlay ? { transform: overlayTransform } : undefined}
    >
      <div className="h-full w-full px-4 sm:px-6 lg:px-8">
        <div className="hidden h-full lg:grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-0">
          <nav
            aria-label="Primary"
            className="flex items-center gap-10 justify-self-start"
          >
            {primaryNav.map((item) => (
              <NavLink
                key={item.key}
                href={item.href}
                active={visualActiveMenu === item.key}
                selected={selectedNav === item.key}
                ariaHaspopup="menu"
                ariaExpanded={activeMenu === item.key}
                tone={tone}
                onMouseEnter={() => openMenu(item.key)}
                onMouseLeave={scheduleMenuClose}
                onFocus={() => openMenu(item.key)}
                onBlur={(event) => {
                  const nextTarget = event.relatedTarget as Node | null

                  if (!nextTarget || !event.currentTarget.contains(nextTarget)) {
                    scheduleMenuClose()
                  }
                }}
                onClick={() => {
                  setSelectedNav(item.key)
                  setActiveMenu(null)
                }}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link
            href="/"
            aria-label="SUOS home"
            className="justify-self-center transition-opacity hover:opacity-70"
          >
            <Image
              src="/logo.svg"
              alt="SUOS"
              width={260}
              height={120}
              priority
              className={cn(
                "block h-auto w-[9.5rem] max-w-none",
                isOverlayLight && "invert"
              )}
            />
          </Link>

          <div className="flex items-center justify-self-end gap-4 xl:gap-6">
            <div className="relative h-[34px] w-[220px] shrink-0 xl:w-[266px]">
              <button
                type="button"
                aria-label="Search products"
                aria-haspopup="dialog"
                aria-expanded={searchOpen}
                onClick={() => setSearchOpen(true)}
                className={cn(
                  "relative flex h-full w-full items-center bg-transparent px-4 pr-10 text-left text-[0.875rem] outline-none transition-opacity hover:opacity-80",
                  isOverlayLight
                    ? "border border-white/80 text-white"
                    : "border border-black/80 text-black"
                )}
              >
                <span
                  className={cn(
                    "block truncate",
                    isOverlayLight ? "text-white/80" : "text-black/80"
                  )}
                >
                  What are you looking for?
                </span>
              </button>
              <Search
                aria-hidden="true"
                className={cn(
                  "pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 stroke-[1.75]",
                  tone === "light" ? "text-white" : "text-black"
                )}
              />
            </div>

            <Link
              href="/#contact"
              className={cn(
                "shrink-0 whitespace-nowrap text-[0.875rem] uppercase tracking-[0.12em] transition-opacity hover:opacity-60",
                tone === "light" ? "text-white" : "text-black"
              )}
            >
              Contact Us
            </Link>

            <div className="flex shrink-0 items-center gap-4">
              <IconButton label="Wishlist" tone={tone}>
                <Heart className="size-[18px] stroke-[1.7]" />
              </IconButton>
              <IconButton label="Account" tone={tone}>
                <UserRound className="size-[18px] stroke-[1.7]" />
              </IconButton>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-4 lg:hidden">
          <div className="flex items-center justify-between gap-4">
            <IconButton
              label="Search"
              tone={tone}
              onClick={() => setSearchOpen(true)}
            >
              <Search className="size-[18px] stroke-[1.7]" />
            </IconButton>

            <Link
              href="/"
              aria-label="SUOS home"
              className="transition-opacity hover:opacity-70"
            >
              <Image
                src="/logo.svg"
                alt="SUOS"
                width={220}
                height={102}
                priority
                className={cn(
                  "block h-auto w-[8.75rem] max-w-none",
                  isOverlayLight && "invert"
                )}
              />
            </Link>

            <div className="flex items-center gap-2">
              <IconButton label="Wishlist" tone={tone}>
                <Heart className="size-[18px] stroke-[1.7]" />
              </IconButton>
              <IconButton label="Account" tone={tone}>
                <UserRound className="size-[18px] stroke-[1.7]" />
              </IconButton>
            </div>
          </div>

          <nav
            aria-label="Primary"
            className={cn(
              "flex items-center gap-6 overflow-x-auto pb-1 text-[0.75rem] uppercase tracking-[0.18em] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
              tone === "light" ? "text-white" : "text-black"
            )}
          >
            {primaryNav.map((item) => (
              <NavLink
                key={item.key}
                href={item.href}
                active={selectedNav === item.key}
                selected={selectedNav === item.key}
                mobile
                tone={tone}
                onClick={() => setSelectedNav(item.key)}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              href="/#contact"
              className={cn(
                "flex-none whitespace-nowrap text-[0.75rem] uppercase tracking-[0.18em] transition-opacity hover:opacity-60",
                tone === "light" ? "text-white" : "text-black"
              )}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>

      <div
        aria-hidden={!activeMenu}
        className={cn(
          "absolute left-0 top-full hidden w-full border-t border-black/10 bg-white text-black shadow-[0_24px_60px_rgba(0,0,0,0.08)] transition-[opacity,transform] duration-200 ease-out lg:block lg:h-[460px] lg:overflow-hidden",
          activeMenu
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
        onMouseEnter={clearMenuCloseTimer}
        onMouseLeave={scheduleMenuClose}
      >
        <div className="grid h-full w-full gap-x-14 gap-y-8 px-4 py-6 sm:px-6 lg:grid-cols-[minmax(10rem,12rem)_minmax(14rem,18rem)_minmax(0,1fr)] lg:px-8">
          <MenuSection
            title="Featured"
            items={megaMenuFeatured}
            open={Boolean(activeMenu)}
            onClose={() => setActiveMenu(null)}
          />

          <MenuSection
            title="Categories"
            items={megaMenuCategories}
            open={Boolean(activeMenu)}
            onClose={() => setActiveMenu(null)}
          />

          <div className="grid w-full max-w-[652px] min-w-0 grid-cols-2 gap-6 justify-self-end">
            {megaMenuCards.map((card) => (
              <MenuCard
                key={card.src}
                src={card.src}
                alt={card.alt}
                eyebrow={card.eyebrow}
                titleLines={card.titleLines}
              />
            ))}
          </div>
        </div>
      </div>

      <SearchSidebar open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  )
}
