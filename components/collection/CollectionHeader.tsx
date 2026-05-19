import { ChevronDown } from "lucide-react"

import { CollectionFilters } from "@/components/collection/CollectionFilters"

export function CollectionHeader() {
  return (
    <header className="w-full">
      <div className="flex flex-col gap-5">
        <h1 className="font-heading text-[clamp(1.7rem,2.2vw,2.6rem)] font-semibold uppercase leading-none tracking-[-0.05em] text-black">
          Men&apos;s Clothing
        </h1>

        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-wrap items-center gap-4 text-[14px] uppercase tracking-[0.08em] text-black/80">
            <span>190 ITEMS</span>
            <span className="text-black/45">|</span>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-70"
            >
              <span className="font-medium">SORT BY:</span>
              <span className="font-semibold text-black">BESTSELLER</span>
              <ChevronDown className="size-4 stroke-[1.9]" />
            </button>
          </div>

          <CollectionFilters />
        </div>
      </div>
    </header>
  )
}
