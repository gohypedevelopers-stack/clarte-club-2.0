import { ChevronDown, SlidersHorizontal } from "lucide-react"

const filters = [
  { label: "CATEGORY", icon: ChevronDown },
  { label: "PRICE", icon: ChevronDown },
  { label: "COLOR", icon: ChevronDown },
  { label: "SIZE", icon: ChevronDown },
  { label: "ALL FILTERS", icon: SlidersHorizontal },
]

export function CollectionFilters() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {filters.map(({ label, icon: Icon }) => (
        <button
          key={label}
          type="button"
          className="inline-flex h-11 items-center justify-between gap-3 border border-black bg-white px-4 text-[14px] uppercase tracking-[0.08em] transition-colors hover:bg-black hover:text-white"
        >
          <span>{label}</span>
          <Icon className="size-4 shrink-0 stroke-[1.9]" />
        </button>
      ))}
    </div>
  )
}
