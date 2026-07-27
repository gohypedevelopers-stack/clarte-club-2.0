import type { Metadata } from "next"
import { ProductPage } from "@/components/product/ProductPage"
import { featuredProduct } from "@/components/product/productData"
import { getShopifyProducts, getShopifyProductByHandle } from "@/lib/shopify-adapter"

export const metadata: Metadata = {
  title: "Products | Clarte Club",
  description: "Browse premium products at Clarte Club.",
}

export default async function Page() {
  const products = await getShopifyProducts(1)
  const firstHandle = products[0]?.handle
  const liveProduct = firstHandle ? await getShopifyProductByHandle(firstHandle) : null

  return <ProductPage product={liveProduct || featuredProduct} />
}
