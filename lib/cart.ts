import {
  cartCreate,
  cartLinesAdd,
  cartLinesUpdate,
  cartLinesRemove,
} from "./shopify"

export type CartItem = {
  id: string
  merchandiseId?: string
  image: string
  alt: string
  title: string
  size: string
  price: string
  quantity: number
}

const CART_KEY = "clarte_cart_items"
const SHOPIFY_CART_ID_KEY = "clarte_shopify_cart_id"
const SHOPIFY_CHECKOUT_URL_KEY = "clarte_shopify_checkout_url"

export function getShopifyCartId(): string | null {
  if (typeof window === "undefined") return null
  return localStorage.getItem(SHOPIFY_CART_ID_KEY)
}

export function getShopifyCheckoutUrl(): string | null {
  if (typeof window === "undefined") return null
  return localStorage.getItem(SHOPIFY_CHECKOUT_URL_KEY)
}

export function getCartItems(): CartItem[] {
  if (typeof window === "undefined") return []
  const stored = localStorage.getItem(CART_KEY)
  if (!stored) {
    const initialItems: CartItem[] = [
      {
        id: "cart-item-1",
        image: "/images/products/product1.png",
        alt: "Model wearing Heritage Oval sunglasses in glossy black frame",
        title: "Heritage Oval",
        size: "XS",
        price: "₹ 4,500",
        quantity: 1,
      },
      {
        id: "cart-item-2",
        image: "/images/products/product3.png",
        alt: "Model wearing Heritage Aviator sunglasses with dark metal frame",
        title: "Heritage Aviator",
        size: "XS",
        price: "₹ 4,500",
        quantity: 1,
      },
    ]
    localStorage.setItem(CART_KEY, JSON.stringify(initialItems))
    return initialItems
  }
  try {
    return JSON.parse(stored)
  } catch {
    return []
  }
}

export function saveCartItems(items: CartItem[]) {
  if (typeof window === "undefined") return
  localStorage.setItem(CART_KEY, JSON.stringify(items))
  window.dispatchEvent(new CustomEvent("cart-updated"))
}

export async function syncShopifyCart(item: CartItem) {
  if (!item.merchandiseId) return
  try {
    const cartId = getShopifyCartId()
    if (!cartId) {
      const cart = await cartCreate([
        {
          merchandiseId: item.merchandiseId,
          quantity: item.quantity,
        },
      ])
      if (cart?.id) {
        localStorage.setItem(SHOPIFY_CART_ID_KEY, cart.id)
        if (cart.checkoutUrl) {
          localStorage.setItem(SHOPIFY_CHECKOUT_URL_KEY, cart.checkoutUrl)
        }
      }
    } else {
      await cartLinesAdd(cartId, [
        {
          merchandiseId: item.merchandiseId,
          quantity: item.quantity,
        },
      ])
    }
  } catch (error) {
    console.warn("Failed to sync cart with Shopify API:", error)
  }
}

export function addToCart(item: Omit<CartItem, "quantity">) {
  const items = getCartItems()
  const existing = items.find((i) => i.id === item.id && i.size === item.size)
  let updatedItem: CartItem
  if (existing) {
    existing.quantity += 1
    updatedItem = existing
  } else {
    updatedItem = { ...item, quantity: 1 }
    items.push(updatedItem)
  }
  saveCartItems(items)
  syncShopifyCart(updatedItem)

  window.dispatchEvent(
    new CustomEvent("cart-updated", { detail: { open: true, addedItem: item } })
  )
}

export function updateCartQuantity(id: string, size: string, quantity: number) {
  let items = getCartItems()
  if (quantity <= 0) {
    items = items.filter((i) => !(i.id === id && i.size === size))
  } else {
    const item = items.find((i) => i.id === id && i.size === size)
    if (item) item.quantity = quantity
  }
  saveCartItems(items)
}

export function removeFromCart(id: string, size: string) {
  let items = getCartItems()
  items = items.filter((i) => !(i.id === id && i.size === size))
  saveCartItems(items)
}
