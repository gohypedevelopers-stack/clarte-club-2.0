export type CartItem = {
  id: string
  image: string
  alt: string
  title: string
  size: string
  price: string
  quantity: number
}

const CART_KEY = "clarte_cart_items"

export function getCartItems(): CartItem[] {
  if (typeof window === "undefined") return []
  const stored = localStorage.getItem(CART_KEY)
  if (!stored) {
    // If the cart doesn't exist yet, we can prepopulate it with the two initial items
    // to match the original designs until they clear/modify it.
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

export function addToCart(item: Omit<CartItem, "quantity">) {
  const items = getCartItems()
  const existing = items.find((i) => i.id === item.id && i.size === item.size)
  if (existing) {
    existing.quantity += 1
  } else {
    items.push({ ...item, quantity: 1 })
  }
  saveCartItems(items)
  
  // Dispatch custom event with open: true to open the cart sidebar
  window.dispatchEvent(new CustomEvent("cart-updated", { detail: { open: true, addedItem: item } }))
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
