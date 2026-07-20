"use client"

import { ChevronDown } from "lucide-react"
import { CollectionFilters } from "@/components/collection/CollectionFilters"

export function CollectionHeader({
  selectedCategory,
  setSelectedCategory,
  selectedType,
  setSelectedType,
}: {
  selectedCategory: string | null
  setSelectedCategory: (cat: string | null) => void
  selectedType: string | null
  setSelectedType: (type: string | null) => void
}) {
  return (
    <header className="w-full">
      <div className="flex flex-col gap-5">
        <div className="space-y-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40">
            Clarté Club
          </p>
          <h1 className="font-heading text-[clamp(1.7rem,2.2vw,2.6rem)] font-normal uppercase leading-none tracking-tight text-black">
            Eyewear Collection
          </h1>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between border-t border-black/10 pt-4">
          <div className="flex flex-wrap items-center gap-4 text-[13px] uppercase tracking-[0.08em] text-black/60">
            <span>CURATED PIECES</span>
            <span className="text-black/45">|</span>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-75 cursor-pointer"
            >
              <span className="font-medium">SORT BY:</span>
              <span className="font-semibold text-black">BESTSELLER</span>
              <ChevronDown className="size-4 stroke-[1.9]" />
            </button>
          </div>

          <CollectionFilters 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
        </div>
      </div>
    </header>
  )
}
