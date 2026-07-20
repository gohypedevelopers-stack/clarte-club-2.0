// Clarté Club - Considered Eyewear
"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Heart, Search, ShoppingBag, UserRound, Menu, X } from "lucide-react"
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
import { CartSidebar } from "@/components/cart/CartSidebar"
import { SearchSidebar } from "@/components/home/SearchSidebar"
import { WishlistSidebar } from "@/components/wishlist/WishlistSidebar"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet"

type NavKey = "shop" | "bestsellers" | "collections" | "about"
type ActiveMenu = NavKey | "wishlist"

type PrimaryNavItem = {
  key: NavKey
  label: string
  href: string
}

const primaryNav: PrimaryNavItem[] = [
  { key: "shop", label: "Shop", href: "/#shop" },
  { key: "bestsellers", label: "Bestsellers", href: "/#bestsellers" },
  { key: "collections", label: "Collections", href: "/collections" },
  { key: "about", label: "About", href: "/about" },
]

const megaMenuFeatured = ["New", "Bestsellers", "Sale"]

const megaMenuCategories = [
  "Aviator Sunglasses",
  "Round Sunglasses",
  "Square Sunglasses",
  "Oval Sunglasses",
  "Cateye Sunglasses",
  "Hexagonal Sunglasses",
  "D-Frame Sunglasses",
  "Optical Glasses",
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
  onMouseEnter?: MouseEventHandler<HTMLAnchorElement>
  onMouseLeave?: MouseEventHandler<HTMLAnchorElement>
  onFocus?: FocusEventHandler<HTMLAnchorElement>
  onBlur?: FocusEventHandler<HTMLAnchorElement>
  onClick?: MouseEventHandler<HTMLAnchorElement>
  ariaHaspopup?: "menu"
  ariaExpanded?: boolean
}) {
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
        "group/link inline-flex flex-col items-start whitespace-nowrap uppercase pb-0.5 text-current transition-[color,opacity] duration-300 ease-out",
        mobile
          ? "flex-none text-[0.75rem] tracking-[0.18em]"
          : "text-[0.72rem] tracking-[0.2em]",
        active || selected ? "opacity-100" : "hover:opacity-60"
      )}
    >
      <span className="leading-none">{children}</span>
      <span
        aria-hidden="true"
        className={cn(
          "mt-[1px] h-px w-full origin-left bg-current transition-transform duration-200",
          active || selected
            ? "scale-x-100"
            : "scale-x-0 group-hover/link:scale-x-100 group-focus-visible/link:scale-x-100"
        )}
      />
    </Link>
  )
}

function IconButton({
  label,
  children,
  tone = "dark",
  onClick,
  ariaExpanded,
  ariaHaspopup,
}: {
  label: string
  children: ReactNode
  tone?: "dark" | "light"
  onClick?: () => void
  ariaExpanded?: boolean
  ariaHaspopup?: "menu" | "dialog"
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-expanded={ariaExpanded}
      aria-haspopup={ariaHaspopup}
      onClick={onClick}
      className={cn(
        "inline-flex size-9 items-center justify-center text-current transition-[color,opacity] duration-300 ease-out hover:opacity-60 focus-visible:outline-none focus-visible:ring-2",
        tone === "light"
          ? "focus-visible:ring-white/30"
          : "focus-visible:ring-black/25"
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
              className="group/item inline-flex flex-col items-start text-left text-[0.95rem] leading-none tracking-[0.01em] text-black focus-visible:outline-none hover:text-black"
            >
              <span className="leading-none">{item}</span>
              <span
                aria-hidden="true"
                className="mt-[1px] h-px w-full origin-left scale-x-0 bg-current transition-transform duration-200 group-hover/item:scale-x-100 group-focus-visible/item:scale-x-100"
              />
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

function WishlistPanel() {
  return (
    <div className="h-full w-full bg-white text-black">
      <div className="mx-auto flex h-full w-full max-w-[1160px] flex-col px-6 py-8 lg:px-8">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-[0.78rem] font-medium uppercase tracking-[0.08em]">
            My Wishlist
          </h2>

          <button
            type="button"
            className="inline-flex h-8 items-center bg-black px-3 text-[0.75rem] font-medium text-white transition-opacity hover:opacity-80"
          >
            Share Wishlist
          </button>
        </div>

        <div className="flex flex-1 items-start justify-center pt-12">
          <div className="w-full bg-black px-4 py-2 text-center text-[0.78rem] text-white">
            There are no items in your Wishlist
          </div>
        </div>
      </div>
    </div>
  )
}

function getNavKeyFromHash(hash: string): NavKey | null {
  const normalized = hash.replace(/^#/, "").toLowerCase()

  if (
    normalized === "shop" ||
    normalized === "bestsellers"
  ) {
    return normalized
  }

  return null
}

export function Navbar({
  className,
}: {
  className?: string
}) {
  const defaultNavKey: NavKey = "shop"
  const pathname = usePathname()
  const isOverlay = pathname === "/"

  const safeClearHash = () => {
    if (typeof window !== "undefined" && window.location.hash) {
      try {
        const url = window.location.pathname + window.location.search;
        const state = typeof window.history.state === "object" && window.history.state !== null 
          ? window.history.state 
          : {};
        window.history.replaceState(state, document.title, url);
      } catch (err) {
        console.error("Failed to clear hash safely:", err);
      }
    }
  };

  const [isScrolled, setIsScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [wishlistOpen, setWishlistOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedNav, setSelectedNav] = useState<NavKey | null>(defaultNavKey)
  const [activeMenu, setActiveMenu] = useState<ActiveMenu | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const scrollFrameRef = useRef<number | null>(null)
  const menuCloseTimeoutRef = useRef<number | null>(null)
  const headerRef = useRef<HTMLElement | null>(null)
  const announcementHeightRef = useRef(0)
  const hasOpenMenu = Boolean(activeMenu)
  const isInteractiveSurface = isHovered || hasOpenMenu
  const isLightSurface = !isOverlay || isScrolled || isInteractiveSurface
  const tone: "dark" | "light" = isLightSurface ? "dark" : "light"
  const isWishlistOpen = wishlistOpen

  useEffect(() => {
    if (mobileMenuOpen) {
      (window as any).lenis?.stop()
      safeClearHash()
    } else {
      (window as any).lenis?.start()
    }
    return () => {
      (window as any).lenis?.start()
    }
  }, [mobileMenuOpen])

  const openMenu = (menu: NavKey) => {
    if (menuCloseTimeoutRef.current !== null) {
      window.clearTimeout(menuCloseTimeoutRef.current)
      menuCloseTimeoutRef.current = null
    }

    setIsHovered(true)
    setActiveMenu(menu)
  }

  const closeMenu = () => {
    if (menuCloseTimeoutRef.current !== null) {
      window.clearTimeout(menuCloseTimeoutRef.current)
      menuCloseTimeoutRef.current = null
    }

    setIsHovered(false)
    setActiveMenu(null)
  }

  const scheduleMenuClose = () => {
    if (menuCloseTimeoutRef.current !== null) {
      window.clearTimeout(menuCloseTimeoutRef.current)
    }

    menuCloseTimeoutRef.current = window.setTimeout(() => {
      closeMenu()
    }, 90)
  }

  const cancelMenuClose = () => {
    if (menuCloseTimeoutRef.current !== null) {
      window.clearTimeout(menuCloseTimeoutRef.current)
      menuCloseTimeoutRef.current = null
    }

    setIsHovered(true)
  }

  const toggleWishlist = () => {
    setWishlistOpen((current) => !current)
  }

  useEffect(() => {
    const updateSelectedNav = () => {
      const hash = typeof window !== "undefined" ? window.location.hash : ""
      if (pathname === "/collections" || pathname.startsWith("/collections/") || pathname.startsWith("/collection/")) {
        setSelectedNav("collections")
      } else if (pathname === "/about" || pathname.startsWith("/about/")) {
        setSelectedNav("about")
      } else if (pathname === "/") {
        setSelectedNav(getNavKeyFromHash(hash) ?? "shop")
      } else {
        setSelectedNav(null)
      }
    }

    updateSelectedNav()
    window.addEventListener("hashchange", updateSelectedNav)
    window.addEventListener("popstate", updateSelectedNav)

    return () => {
      if (menuCloseTimeoutRef.current !== null) {
        window.clearTimeout(menuCloseTimeoutRef.current)
        menuCloseTimeoutRef.current = null
      }
      window.removeEventListener("hashchange", updateSelectedNav)
      window.removeEventListener("popstate", updateSelectedNav)
    }
  }, [pathname])

  useIsomorphicLayoutEffect(() => {
    const readAnnouncementHeight = () => {
      const rawValue = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue("--announcement-height")
        .trim()
      const parsedValue = Number.parseFloat(rawValue)

      return Number.isFinite(parsedValue) ? parsedValue : 50
    }

    const syncHeaderMetrics = () => {
      announcementHeightRef.current = readAnnouncementHeight()
    }

    const updateScrollState = () => {
      scrollFrameRef.current = null

      const nextIsScrolled = window.scrollY > announcementHeightRef.current

      setIsScrolled((current) =>
        current === nextIsScrolled ? current : nextIsScrolled
      )

      // Clear the hash from the address bar when scrolled near the top of the page
      if (window.scrollY < 80 && window.location.hash) {
        safeClearHash();
        setSelectedNav(defaultNavKey);
      }
    }

    const syncScrollState = () => {
      syncHeaderMetrics()
      updateScrollState()
    }

    const scheduleScrollStateUpdate = () => {
      if (scrollFrameRef.current !== null) {
        return
      }

      scrollFrameRef.current = window.requestAnimationFrame(updateScrollState)
    }

    syncScrollState()
    window.addEventListener("scroll", scheduleScrollStateUpdate, {
      passive: true,
    })
    window.addEventListener("pageshow", syncScrollState)
    window.addEventListener("resize", syncScrollState)

    return () => {
      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current)
        scrollFrameRef.current = null
      }

      window.removeEventListener("scroll", scheduleScrollStateUpdate)
      window.removeEventListener("pageshow", syncScrollState)
      window.removeEventListener("resize", syncScrollState)
    }
  }, [isOverlay])

  const headerContent = (
    <header
      ref={headerRef}
      className={cn(
        "main-navbar navbar-shell border-b",
        isScrolled ? "translate-y-0" : "translate-y-[var(--announcement-height)]",
        "h-[64px] lg:h-[80px]",
        isInteractiveSurface
          ? "bg-white text-black border-transparent shadow-none"
          : isLightSurface
            ? "bg-white text-black border-black/10 shadow-[0_1px_0_rgba(0,0,0,0.08)]"
            : "bg-transparent text-white border-transparent shadow-none",
        isScrolled && "is-scrolled",
        className
      )}
    >
      <div className="relative h-full w-full px-4 sm:px-6 lg:px-8">
        <div className="hidden h-full lg:flex items-center justify-between">
          <nav
            aria-label="Primary"
            className="flex items-center gap-6 xl:gap-10"
            onMouseEnter={cancelMenuClose}
            onMouseLeave={scheduleMenuClose}
          >
            {primaryNav.map((item) => (
              <NavLink
                key={item.key}
                href={item.href}
                active={activeMenu === item.key}
                selected={selectedNav === item.key}
                ariaHaspopup={item.key === "shop" ? "menu" : undefined}
                ariaExpanded={item.key === "shop" ? activeMenu === item.key : undefined}
                onMouseEnter={() => {
                  if (item.key === "shop") openMenu(item.key)
                }}
                onFocus={() => {
                  if (item.key === "shop") openMenu(item.key)
                }}
                onBlur={(event) => {
                  const nextTarget = event.relatedTarget as Node | null

                  if (
                    !nextTarget ||
                    !headerRef.current?.contains(nextTarget)
                  ) {
                    setActiveMenu(null)
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
            aria-label="Clarte Club home"
            onClick={() => {
              safeClearHash()
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity hover:opacity-70 z-10"
          >
            <Image
              src="/logo.svg"
              alt="Clarte Club"
              width={140}
              height={84}
              priority
              className={cn(
                "block h-auto w-[4.6rem] max-w-none transition-[filter] duration-300 ease-out",
                !isLightSurface && "invert"
              )}
            />
          </Link>

          <div className="flex items-center gap-4 xl:gap-6">
            <div className="relative h-[34px] w-[220px] shrink-0 xl:w-[266px]">
              <button
                type="button"
                aria-label="Search products"
                aria-haspopup="dialog"
                aria-expanded={searchOpen}
                onClick={() => setSearchOpen(true)}
                className={cn(
                  "relative flex h-full w-full items-center border border-current/80 bg-transparent px-4 pr-10 text-left text-[0.875rem] text-current outline-none transition-[color,border-color,opacity] duration-300 ease-out hover:opacity-80"
                )}
              >
                <span
                  className="block truncate text-current/80"
                >
                  What are you looking for?
                </span>
              </button>
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 stroke-[1.75] text-current transition-colors duration-300 ease-out"
              />
            </div>

            <IconButton
              label="Cart"
              tone={tone}
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag className="size-[18px] stroke-[1.7]" />
            </IconButton>

            <div className="flex shrink-0 items-center gap-4">
              <IconButton
                label="Wishlist"
                tone={tone}
                onClick={toggleWishlist}
                ariaHaspopup="menu"
                ariaExpanded={isWishlistOpen}
              >
                <Heart className="size-[18px] stroke-[1.7]" />
              </IconButton>
              <IconButton label="Account" tone={tone}>
                <UserRound className="size-[18px] stroke-[1.7]" />
              </IconButton>
            </div>
          </div>
        </div>

        {/* Mobile Header Row */}
        <div className="grid h-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center lg:hidden">
          <div className="justify-self-start">
            <IconButton
              label="Open Menu"
              tone={tone}
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="size-[20px] stroke-[1.7]" />
            </IconButton>
          </div>

          <Link
            href="/"
            aria-label="Clarte Club home"
            onClick={() => {
              safeClearHash()
            }}
            className="justify-self-center transition-opacity hover:opacity-70"
          >
            <Image
              src="/logo.svg"
              alt="Clarte Club"
              width={100}
              height={60}
              priority
              className={cn(
                "block h-auto w-[3.3rem] max-w-none transition-[filter] duration-300 ease-out",
                !isLightSurface && "invert"
              )}
            />
          </Link>

          <div className="flex items-center justify-self-end gap-1.5">
            <IconButton
              label="Search"
              tone={tone}
              onClick={() => setSearchOpen(true)}
            >
              <Search className="size-[18px] stroke-[1.7]" />
            </IconButton>
            <IconButton
              label="Cart"
              tone={tone}
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag className="size-[18px] stroke-[1.7]" />
            </IconButton>
          </div>
        </div>

        <div
          aria-hidden={!activeMenu}
          className={cn(
            "absolute left-0 top-full hidden w-full bg-white text-black shadow-[0_24px_60px_rgba(0,0,0,0.08)] transition-opacity duration-150 ease-out lg:block lg:h-[460px] lg:overflow-hidden",
            activeMenu
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          )}
          onMouseEnter={cancelMenuClose}
          onMouseLeave={scheduleMenuClose}
        >
          {activeMenu === "wishlist" ? (
            <WishlistPanel />
          ) : activeMenu === "shop" ? (
            <div className="grid h-full w-full gap-x-14 gap-y-8 px-4 py-6 sm:px-6 lg:grid-cols-[minmax(10rem,12rem)_minmax(14rem,18rem)_minmax(0,1fr)] lg:px-8">
              <MenuSection
                title="Featured"
                items={megaMenuFeatured}
                open={Boolean(activeMenu)}
                onClose={closeMenu}
              />

              <MenuSection
                title="Categories"
                items={megaMenuCategories}
                open={Boolean(activeMenu)}
                onClose={closeMenu}
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
          ) : null}
        </div>
      </div>

      <SearchSidebar open={searchOpen} onOpenChange={setSearchOpen} />
      <CartSidebar open={cartOpen} onOpenChange={setCartOpen} />
      <WishlistSidebar open={wishlistOpen} onOpenChange={setWishlistOpen} />
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="w-[300px] sm:w-[350px] p-0 bg-[#F6F2EA] text-black border-r border-black/10 flex flex-col h-full z-[99999]">
          <div className="flex items-center justify-between px-6 py-5 border-b border-black/5">
            <SheetTitle className="text-[12px] font-semibold uppercase tracking-[0.2em] text-black/50">
              Menu
            </SheetTitle>
            <SheetClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none cursor-pointer">
              <X className="h-5 w-5 stroke-[1.5]" />
              <span className="sr-only">Close</span>
            </SheetClose>
          </div>

          <div
            data-lenis-prevent
            className="flex-1 overflow-y-auto px-6 py-8 space-y-8"
          >
            {/* Primary Nav Links */}
            <nav aria-label="Mobile Primary Navigation" className="flex flex-col gap-6">
              {primaryNav.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => {
                    setSelectedNav(item.key)
                    setMobileMenuOpen(false)
                  }}
                  className={cn(
                    "text-[18px] font-normal uppercase tracking-[0.12em] text-black hover:opacity-60 transition-opacity",
                    selectedNav === item.key && "font-semibold"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="h-px bg-black/5" />

            {/* Eyewear Categories in Menu */}
            <div className="space-y-4">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-black/40">
                Shop By Style
              </h3>
              <div className="flex flex-col gap-3.5">
                {megaMenuCategories.map((cat) => (
                  <Link
                    key={cat}
                    href="/collections"
                    onClick={() => {
                      setMobileMenuOpen(false)
                    }}
                    className="text-[13px] uppercase tracking-[0.08em] text-black/80 hover:text-black transition-colors"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="px-6 pt-6 pb-10 border-t border-black/5 bg-[#ebe8e1] space-y-4">
            <div className="flex items-center justify-center gap-14">
              <Link
                href="/account"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-black/70 hover:text-black transition-colors"
              >
                <UserRound className="size-[15px] stroke-[1.5]" />
                Account
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  toggleWishlist()
                }}
                className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-black/70 hover:text-black transition-colors cursor-pointer"
              >
                <Heart className="size-[15px] stroke-[1.5]" />
                Wishlist
              </button>
            </div>
            <p className="text-[9px] uppercase tracking-widest text-black/30 text-center pt-2">
              &copy; {new Date().getFullYear()} Clarte Club
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )

  return isOverlay ? (
    <div className="main-navbar-slot">{headerContent}</div>
  ) : (
    headerContent
  )
}
