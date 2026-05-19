import { ProductCardView } from "@/components/home/TrendingSection"

import { collectionProducts } from "@/components/collection/collectionData"

export function CollectionGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {collectionProducts.map((product) => (
        <ProductCardView key={product.id} product={product} />
      ))}
    </div>
  )
}
