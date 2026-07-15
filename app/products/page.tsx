import type { Metadata } from "next"

import { ProductPage } from "@/components/product/ProductPage"
import { featuredProduct } from "@/components/product/productData"

export const metadata: Metadata = {
  title: "Heritage Oval | Clarte Club",
  description: "An editorial product page for Clarte Club featuring Heritage Oval sunglasses.",
}

export default function Page() {
  return <ProductPage product={featuredProduct} />
}

