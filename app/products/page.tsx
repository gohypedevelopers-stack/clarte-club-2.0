import type { Metadata } from "next"

import { ProductPage } from "@/components/product/ProductPage"
import { featuredProduct } from "@/components/product/productData"

export const metadata: Metadata = {
  title: "Bootcut Denim | Clarte Club 2.0",
  description: "An editorial product page for Clarte Club 2.0 featuring bootcut denim.",
}

export default function Page() {
  return <ProductPage product={featuredProduct} />
}

