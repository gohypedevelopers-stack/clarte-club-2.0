"use client"

import { cn } from "@/lib/utils"

export function CollectionFilters({
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
  const hasActiveFilters = selectedCategory !== null || selectedType !== null

  const handleClearFilters = () => {
    setSelectedCategory(null)
    setSelectedType(null)
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Category Selection Filter */}
      <div className="relative">
        <select
          value={selectedCategory || ""}
          onChange={(e) => setSelectedCategory(e.target.value ? e.target.value : null)}
          className="h-11 border border-black bg-white pl-4 pr-10 text-[12px] font-semibold uppercase tracking-[0.08em] transition-colors hover:bg-black hover:text-white focus:bg-black focus:text-white cursor-pointer outline-none appearance-none"
        >
          <option value="" className="bg-white text-black">Collection: All</option>
          <option value="Heritage" className="bg-white text-black">Heritage</option>
          <option value="Noyer" className="bg-white text-black">Noyer</option>
          <option value="Crystal" className="bg-white text-black">Crystal</option>
          <option value="Atelier" className="bg-white text-black">Atelier</option>
        </select>
        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
          <svg className="size-3 fill-current" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>

      {/* Frame Type Selection Filter */}
      <div className="relative">
        <select
          value={selectedType || ""}
          onChange={(e) => setSelectedType(e.target.value ? e.target.value : null)}
          className="h-11 border border-black bg-white pl-4 pr-10 text-[12px] font-semibold uppercase tracking-[0.08em] transition-colors hover:bg-black hover:text-white focus:bg-black focus:text-white cursor-pointer outline-none appearance-none"
        >
          <option value="" className="bg-white text-black">Type: All</option>
          <option value="Sunglasses" className="bg-white text-black">Sunglasses</option>
          <option value="Optical" className="bg-white text-black">Optical</option>
        </select>
        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
          <svg className="size-3 fill-current" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>

      {/* Clear Filters Button */}
      {hasActiveFilters && (
        <button
          onClick={handleClearFilters}
          className="h-11 border border-red-800 text-red-800 bg-red-50/20 px-4 text-[12px] font-semibold uppercase tracking-[0.08em] hover:bg-red-800 hover:text-white transition-colors duration-200 cursor-pointer"
        >
          Clear Filters
        </button>
      )}
    </div>
  )
}
