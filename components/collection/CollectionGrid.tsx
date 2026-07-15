"use client"

import { ProductCardView } from "@/components/home/TrendingSection"
import { collectionProducts } from "@/components/collection/collectionData"

export function CollectionGrid({
  selectedCategory,
  selectedType,
}: {
  selectedCategory: string | null
  selectedType: string | null
}) {
  // Filter products based on selected states
  const filteredProducts = collectionProducts.filter((product) => {
    const matchesCategory = selectedCategory === null || product.category === selectedCategory
    const matchesType = selectedType === null || product.type === selectedType
    return matchesCategory && matchesType
  })

  if (filteredProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center border border-black/10 py-20 text-center bg-black/[0.01]">
        <p className="font-heading text-[18px] uppercase tracking-wider text-black/60">
          No frames found
        </p>
        <p className="text-[13px] text-black/40 uppercase mt-2">
          Try clearing your active filters to browse the entire collection.
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {filteredProducts.map((product) => (
        <ProductCardView key={product.id} product={product} />
      ))}
    </div>
  )
}
