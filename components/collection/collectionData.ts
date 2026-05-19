import type { ProductCard } from "@/components/home/TrendingSection"

const baseProducts: ProductCard[] = [
  {
    id: "collection-product-1",
    image: "/images/products/product1.png",
    alt: "Model wearing a blue denim outfit",
    badge: "NEW ARRIVAL",
    swatches: ["#0a1a2b", "#15436b", "#d1d9e2"],
  },
  {
    id: "collection-product-2",
    image: "/images/products/product2.png",
    alt: "Model wearing a denim jacket in monochrome",
    swatches: ["#0a1a2b", "#15436b", "#d1d9e2"],
  },
  {
    id: "collection-product-3",
    image: "/images/products/product3.png",
    alt: "Model seated in a black tailored look",
    badge: "BESTSELLER",
    swatches: ["#0a1a2b", "#15436b", "#d1d9e2"],
  },
  {
    id: "collection-product-4",
    image: "/images/products/product4.png",
    alt: "Model wearing an all-black outfit",
    swatches: ["#0a1a2b", "#15436b", "#d1d9e2"],
  },
]

export const collectionProducts: ProductCard[] = [
  ...baseProducts.map((product) => ({
    ...product,
    id: `${product.id}-row-1`,
  })),
  ...baseProducts.map((product) => ({
    ...product,
    id: `${product.id}-row-2`,
  })),
  ...baseProducts.map((product) => ({
    ...product,
    id: `${product.id}-row-3`,
  })),
]
