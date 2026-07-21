"use client"

import { useState } from "react"
import { CollectionGrid } from "@/components/collection/CollectionGrid"
import { CollectionBenefitsBar } from "@/components/collection/CollectionBenefitsBar"
import { CollectionHeader } from "@/components/collection/CollectionHeader"

export function CollectionPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<string>("bestseller")

  return (
    <main className="flex-1 bg-white text-black">
      <section className="w-full bg-white px-4 pt-8 pb-16 text-black sm:px-6 lg:px-8 md:pt-10">
        <CollectionHeader 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <div className="mt-3.5">
          <CollectionGrid 
            selectedCategory={selectedCategory}
            selectedType={selectedType}
            sortBy={sortBy}
          />
        </div>

        <CollectionBenefitsBar />
      </section>
    </main>
  )
}
