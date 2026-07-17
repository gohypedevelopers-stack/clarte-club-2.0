"use client"

import { useEffect, useRef, useState } from "react"
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
  const [categoryOpen, setCategoryOpen] = useState(false)
  const [typeOpen, setTypeOpen] = useState(false)

  const categoryRef = useRef<HTMLDivElement>(null)
  const typeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
        setCategoryOpen(false)
      }
      if (typeRef.current && !typeRef.current.contains(event.target as Node)) {
        setTypeOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleClearFilters = () => {
    setSelectedCategory(null)
    setSelectedType(null)
    setCategoryOpen(false)
    setTypeOpen(false)
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Category Selection Filter */}
      <div ref={categoryRef} className="relative z-30">
        <button
          type="button"
          onClick={() => {
            setCategoryOpen(!categoryOpen)
            setTypeOpen(false)
          }}
          className={cn(
            "h-11 border border-black bg-white pl-4 pr-10 text-[12px] font-semibold uppercase tracking-[0.08em] transition-colors hover:bg-black hover:text-white focus:bg-black focus:text-white cursor-pointer outline-none flex items-center justify-between gap-2 min-w-[170px]",
            (categoryOpen || selectedCategory) && "bg-black text-white"
          )}
        >
          <span>{selectedCategory ? `Collection: ${selectedCategory}` : "Collection: All"}</span>
          <svg className={cn("size-3 fill-current absolute right-4 top-1/2 -translate-y-1/2 transition-transform duration-200", categoryOpen && "rotate-180")} viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </button>

        {categoryOpen && (
          <ul className="absolute left-0 top-full z-50 mt-1 w-full border border-black bg-white shadow-lg py-1 overflow-hidden">
            {[
              { value: null, label: "Collection: All" },
              { value: "Heritage", label: "Heritage" },
              { value: "Noyer", label: "Noyer" },
              { value: "Crystal", label: "Crystal" },
              { value: "Atelier", label: "Atelier" },
            ].map((opt) => (
              <li key={opt.label}>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory(opt.value)
                    setCategoryOpen(false)
                  }}
                  className={cn(
                    "w-full px-4 py-2.5 text-left text-[12px] font-medium uppercase tracking-[0.08em] transition-colors hover:bg-[#F6F2EA] hover:text-black text-black cursor-pointer bg-white",
                    selectedCategory === opt.value && "bg-[#ebe8e1] font-semibold"
                  )}
                >
                  {opt.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Frame Type Selection Filter */}
      <div ref={typeRef} className="relative z-30">
        <button
          type="button"
          onClick={() => {
            setTypeOpen(!typeOpen)
            setCategoryOpen(false)
          }}
          className={cn(
            "h-11 border border-black bg-white pl-4 pr-10 text-[12px] font-semibold uppercase tracking-[0.08em] transition-colors hover:bg-black hover:text-white focus:bg-black focus:text-white cursor-pointer outline-none flex items-center justify-between gap-2 min-w-[150px]",
            (typeOpen || selectedType) && "bg-black text-white"
          )}
        >
          <span>{selectedType ? `Type: ${selectedType}` : "Type: All"}</span>
          <svg className={cn("size-3 fill-current absolute right-4 top-1/2 -translate-y-1/2 transition-transform duration-200", typeOpen && "rotate-180")} viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </button>

        {typeOpen && (
          <ul className="absolute left-0 top-full z-50 mt-1 w-full border border-black bg-white shadow-lg py-1 overflow-hidden">
            {[
              { value: null, label: "Type: All" },
              { value: "Sunglasses", label: "Sunglasses" },
              { value: "Optical", label: "Optical" },
            ].map((opt) => (
              <li key={opt.label}>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedType(opt.value)
                    setTypeOpen(false)
                  }}
                  className={cn(
                    "w-full px-4 py-2.5 text-left text-[12px] font-medium uppercase tracking-[0.08em] transition-colors hover:bg-[#F6F2EA] hover:text-black text-black cursor-pointer bg-white",
                    selectedType === opt.value && "bg-[#ebe8e1] font-semibold"
                  )}
                >
                  {opt.label}
                </button>
              </li>
            ))}
          </ul>
        )}
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
