import type { Metadata } from "next"

import { ProductPage } from "@/components/product/ProductPage"
import { featuredProduct } from "@/components/product/productData"

export const metadata: Metadata = {
  title: "Bootcut Denim | Clarte Club",
  description: "An editorial product page for Clarte Club featuring bootcut denim.",
}

export default function Page() {
  return <ProductPage product={featuredProduct} />
}

