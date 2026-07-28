"use client"

import { useEffect } from "react"
import { Loader2 } from "lucide-react"

export default function AccountPage() {
  useEffect(() => {
    const shopifyDomain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN || "shapar-ay.myshopify.com"
    window.location.href = `https://${shopifyDomain}/account/login`
  }, [])

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
      <Loader2 className="size-8 animate-spin text-[#C9B07A] mb-4" />
      <h1 className="text-[1.1rem] font-medium uppercase tracking-[0.2em] text-white">
        Redirecting to Shopify Login...
      </h1>
      <p className="mt-2 text-[12px] text-white/50 tracking-wider">
        Please wait while we take you to your account login.
      </p>
    </main>
  )
}
