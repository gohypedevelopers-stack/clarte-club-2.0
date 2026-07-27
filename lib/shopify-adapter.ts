import {
  fetchAllProducts,
  fetchCollectionByHandle,
  fetchProductByHandle,
  formatMoney,
  toProductCard,
  extractOptionValues,
} from "./shopify"
import type { ProductCard, ProductDetail } from "@/components/product/productData"

function getProductFallbackImages(indexOrId: number | string): string[] {
  let idx = 1
  if (typeof indexOrId === "number") {
    idx = (indexOrId % 20) + 1
  } else {
    let hash = 0
    const str = String(indexOrId || "default")
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i)
      hash |= 0
    }
    idx = (Math.abs(hash) % 20) + 1
  }

  const img1 = `/images/products/product${idx}.png`
  const img2 = `/images/products/product${(idx % 20) + 1}.png`
  const img3 = `/images/products/product${((idx + 1) % 20) + 1}.png`
  const img4 = `/images/products/product${((idx + 2) % 20) + 1}.png`

  return [img1, img2, img3, img4]
}

export function shopifyProductToCard(node: any, index = 0): ProductCard {
  if (!node) {
    return {
      id: "fallback-1",
      name: "Signature Eyewear",
      price: "₹ 4,500",
      image: "/images/products/product1.png",
      alt: "Signature Eyewear",
      swatches: ["#000000", "#6f5639"],
    }
  }

  const card = toProductCard(node)
  const defaultGallery = getProductFallbackImages(index)

  const rawImages =
    Array.isArray(node.images) && node.images.length
      ? node.images.map((i: any) => i.url || i)
      : (node.featuredImage?.url
          ? [node.featuredImage.url]
          : ((card as any)?.gallery && (card as any).gallery.length > 1 ? (card as any).gallery : []))

  const images = rawImages.length > 1 ? rawImages : (rawImages.length === 1 && node.featuredImage?.url ? [rawImages[0], ...defaultGallery.slice(1)] : defaultGallery)

  const handle = node.handle || card?.handle || ""
  const href = handle ? `/products/${handle}` : "/products"

  return {
    id: node.id || handle || card?.id || "product-1",
    handle,
    href,
    name: node.title || card?.title || "Signature Frame",
    price: card?.price || (node.price ? formatMoney(node.price, node.currencyCode || "INR") : "₹ 4,500"),
    image: images[0] || card?.img || "/images/products/product1.png",
    alt: node.title || card?.title || "Product image",
    badge: card?.badge,
    swatches: extractOptionValues(node, "color").length
      ? extractOptionValues(node, "color")
      : ["#000000", "#6f5639", "#ebe8e1"],
    gallery: images,
  }
}

function stripHtml(html: string): string {
  if (!html) return ""
  return html.replace(/<[^>]*>?/gm, " ").replace(/\s+/g, " ").trim()
}

export function shopifyProductToDetail(node: any): ProductDetail {
  const identifier = node?.title || node?.handle || node?.id || "default"
  const defaultGallery = getProductFallbackImages(identifier)

  const rawImages = Array.isArray(node?.images) && node.images.length > 0
    ? node.images.map((i: any) => ({ src: i.url || i, alt: i.alt || node.title || "" }))
    : node?.featuredImage?.url
      ? [{ src: node.featuredImage.url, alt: node.title || "" }, ...defaultGallery.slice(1).map((src: string) => ({ src, alt: node?.title || "" }))]
      : defaultGallery.map((src: string) => ({ src, alt: node?.title || "" }))

  const images = rawImages

  const colorValues = extractOptionValues(node, "color")
  const colors = colorValues.length
    ? colorValues.map((name: string) => ({ name, value: "#000000" }))
    : [
        { name: "Glossy Black", value: "#000000" },
        { name: "Royal Tortoise", value: "#6f5639" },
      ]

  const sizeValues = extractOptionValues(node, "size")

  return {
    slug: node?.handle || "product",
    editLabel: node?.vendor?.toUpperCase() || "CLARTE CLUB",
    title: node?.title?.toUpperCase() || "SIGNATURE FRAME",
    breadcrumb: [
      { label: "Homepage", href: "/" },
      { label: "Collections", href: "/collections" },
      { label: node?.title || "Product" },
    ],
    originalPrice: node?.compareAtPrice
      ? formatMoney(node.compareAtPrice, node.currencyCode || "INR")
      : "",
    price: node?.price ? formatMoney(node.price, node.currencyCode || "INR") : "₹ 4,500",
    sold: "1,200+ Sold",
    rating: "4.8",
    description:
      stripHtml(node?.description || node?.descriptionHtml) ||
      "An architectural frame sculpted from premium bio-acetate with custom hardware and signature wire cores.",
    detailsBody:
      node?.descriptionHtml ||
      node?.description ||
      "Precision-sculpted bio-acetate frame with 100% UV400 protective lenses.",
    careNotes: [
      "Wipe lenses with the microfiber cleaning cloth.",
      "Store in the provided protective case.",
      "Avoid leaving in direct high heat.",
    ],
    shippingNotes: [
      "Standard delivery in 2-4 business days.",
      "Free exchange within 14 days.",
      "Cash on delivery available across India.",
    ],
    colorName: colorValues[0] || "Glossy Black",
    colors,
    sizes: sizeValues,
    gallery: images.length ? images : [{ src: "/images/products/product1.png", alt: "Frame image" }],
    deliveryPerks: [
      { label: "Fast delivery", detail: "2-4 days", icon: "truck" },
      { label: "Easy exchange", detail: "14 days", icon: "exchange" },
      { label: "Secure checkout", detail: "COD available", icon: "shield" },
      { label: "Tracked shipping", detail: "Live updates", icon: "card" },
    ],
    completeLook: images.slice(0, 3),
  }
}

export async function getShopifyProducts(limit = 50): Promise<ProductCard[]> {
  try {
    const products = await fetchAllProducts(limit)
    if (products && products.length > 0) {
      console.log(`🛍️ [Shopify API] Successfully loaded ${products.length} live products from shapar-ay.myshopify.com`)
      return products.map((p: any, i: number) => shopifyProductToCard(p, i))
    } else {
      console.log("ℹ️ [Shopify API] Store returned 0 products or is empty")
    }
  } catch (error) {
    console.warn("❌ [Shopify API] Failed to fetch products from Shopify API:", error)
  }
  return []
}

export async function getShopifyCollectionProducts(handle: string, limit = 50): Promise<ProductCard[]> {
  try {
    const collection = await fetchCollectionByHandle(handle, limit)
    if (collection?.products?.length) {
      console.log(`🛍️ [Shopify API] Loaded ${collection.products.length} products for collection '${handle}'`)
      return collection.products.map((p: any, i: number) => shopifyProductToCard(p, i))
    }
  } catch (error) {
    console.warn(`❌ [Shopify API] Failed to fetch collection '${handle}' from Shopify API:`, error)
  }
  return []
}

export async function getShopifyProductByHandle(handle: string): Promise<ProductDetail | null> {
  try {
    const product = await fetchProductByHandle(handle)
    if (product) {
      console.log(`🛍️ [Shopify API] Loaded product '${product.title}' (${handle})`)
      return shopifyProductToDetail(product)
    }
  } catch (error) {
    console.warn(`❌ [Shopify API] Failed to fetch product '${handle}' from Shopify API:`, error)
  }
  return null
}
