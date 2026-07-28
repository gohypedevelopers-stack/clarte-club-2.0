"use client"

import { useEffect, useState } from "react"
import { X, User, Mail, Lock, LogOut, Package, ExternalLink, Loader2, CheckCircle2 } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import {
  customerAccessTokenCreate,
  customerCreate,
  getCustomer,
  customerAccessTokenDelete,
} from "@/lib/shopify"

const CUSTOMER_TOKEN_KEY = "clarte_customer_token"

export function getStoredCustomerToken(): string | null {
  if (typeof window === "undefined") return null
  return localStorage.getItem(CUSTOMER_TOKEN_KEY)
}

export function setStoredCustomerToken(token: string | null) {
  if (typeof window === "undefined") return
  if (token) {
    localStorage.setItem(CUSTOMER_TOKEN_KEY, token)
  } else {
    localStorage.removeItem(CUSTOMER_TOKEN_KEY)
  }
  window.dispatchEvent(new CustomEvent("auth-state-changed"))
}

type AuthModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AuthModal({ open, onOpenChange }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "register" | "account">("login")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [successMsg, setSuccessMsg] = useState<string | null>(null)

  // Form states
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  // Customer data state
  const [customer, setCustomer] = useState<any>(null)

  const shopifyDomain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN || "shapar-ay.myshopify.com"

  // Check auth state whenever modal opens or token changes
  useEffect(() => {
    if (!open) return

    const token = getStoredCustomerToken()
    if (token) {
      fetchCustomerProfile(token)
    } else {
      setCustomer(null)
      setMode("login")
    }
  }, [open])

  const fetchCustomerProfile = async (token: string) => {
    setLoading(true)
    setError(null)
    try {
      const data = await getCustomer(token)
      if (data) {
        setCustomer(data)
        setMode("account")
      } else {
        // Token expired or invalid
        setStoredCustomerToken(null)
        setCustomer(null)
        setMode("login")
      }
    } catch (err: any) {
      console.warn("Failed to fetch customer info:", err)
      setStoredCustomerToken(null)
      setCustomer(null)
      setMode("login")
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) {
      setError("Please fill in all fields.")
      return
    }
    setLoading(true)
    setError(null)
    setSuccessMsg(null)

    try {
      const tokenObj = await customerAccessTokenCreate(email, password)
      if (tokenObj?.accessToken) {
        setStoredCustomerToken(tokenObj.accessToken)
        await fetchCustomerProfile(tokenObj.accessToken)
      } else {
        setError("Invalid email or password.")
      }
    } catch (err: any) {
      setError(err.message || "Failed to log in. Please check your credentials.")
    } finally {
      setLoading(false)
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) {
      setError("Please provide an email and password.")
      return
    }
    setLoading(true)
    setError(null)
    setSuccessMsg(null)

    try {
      await customerCreate({ email, password, firstName, lastName })
      setSuccessMsg("Account created successfully! Logging you in...")
      // Auto login after registration
      const tokenObj = await customerAccessTokenCreate(email, password)
      if (tokenObj?.accessToken) {
        setStoredCustomerToken(tokenObj.accessToken)
        await fetchCustomerProfile(tokenObj.accessToken)
      } else {
        setMode("login")
      }
    } catch (err: any) {
      setError(err.message || "Failed to register account.")
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    const token = getStoredCustomerToken()
    if (token) {
      customerAccessTokenDelete(token)
    }
    setStoredCustomerToken(null)
    setCustomer(null)
    setMode("login")
    setEmail("")
    setPassword("")
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        className="!z-[10001] border-l border-white/10 bg-black p-0 text-white shadow-2xl overflow-y-auto"
        style={{ width: "min(100vw, 440px)", maxWidth: "none" }}
      >
        <div className="flex h-full min-h-screen flex-col justify-between px-6 py-8">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9B07A]">
                CLARTÉ CLUB
              </span>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="text-white/60 hover:text-white transition-colors cursor-pointer"
              >
                <X className="size-5" />
              </button>
            </div>

            <SheetHeader className="sr-only">
              <SheetTitle>Customer Authentication</SheetTitle>
              <SheetDescription>Log in or register for your Clarte Club account</SheetDescription>
            </SheetHeader>

            {/* Error & Success Messages */}
            {error && (
              <div className="mt-6 rounded border border-red-500/30 bg-red-950/40 p-3 text-[12px] text-red-200">
                {error}
              </div>
            )}

            {successMsg && (
              <div className="mt-6 flex items-center gap-2 rounded border border-emerald-500/30 bg-emerald-950/40 p-3 text-[12px] text-emerald-200">
                <CheckCircle2 className="size-4 shrink-0 text-emerald-400" />
                <span>{successMsg}</span>
              </div>
            )}

            {/* VIEW 1: LOGIN */}
            {mode === "login" && (
              <div className="mt-8 space-y-6">
                <div>
                  <h2 className="text-[1.25rem] font-medium tracking-wide uppercase text-white">
                    Sign In
                  </h2>
                  <p className="mt-1 text-[12px] text-white/60 tracking-wider">
                    Enter your Shopify store credentials to access your account & orders.
                  </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70 mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-white/40" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="yourname@example.com"
                        className="w-full h-11 bg-white/5 border border-white/15 pl-10 pr-3 text-[13px] text-white placeholder-white/30 focus:border-[#C9B07A] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70 mb-1.5">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-white/40" />
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full h-11 bg-white/5 border border-white/15 pl-10 pr-3 text-[13px] text-white placeholder-white/30 focus:border-[#C9B07A] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex h-11 w-full items-center justify-center bg-[#C9B07A] text-[12px] font-semibold uppercase tracking-[0.18em] text-black transition-colors hover:bg-[#b0965d] active:bg-[#977f4c] disabled:opacity-50 cursor-pointer mt-2"
                  >
                    {loading ? (
                      <span className="inline-flex items-center gap-2">
                        <Loader2 className="size-4 animate-spin" />
                        Signing In...
                      </span>
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </form>

                <div className="pt-4 border-t border-white/10 space-y-3 text-center">
                  <p className="text-[11px] text-white/60 tracking-wider">
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setError(null)
                        setSuccessMsg(null)
                        setMode("register")
                      }}
                      className="text-[#C9B07A] hover:underline font-semibold cursor-pointer"
                    >
                      Create Account
                    </button>
                  </p>

                  <a
                    href={`https://${shopifyDomain}/account/login`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] text-white/50 hover:text-white tracking-wider transition-colors pt-2"
                  >
                    <span>Login via Shopify Portal</span>
                    <ExternalLink className="size-3" />
                  </a>
                </div>
              </div>
            )}

            {/* VIEW 2: REGISTER */}
            {mode === "register" && (
              <div className="mt-8 space-y-6">
                <div>
                  <h2 className="text-[1.25rem] font-medium tracking-wide uppercase text-white">
                    Create Account
                  </h2>
                  <p className="mt-1 text-[12px] text-white/60 tracking-wider">
                    Join Clarté Club to manage orders and checkout faster.
                  </p>
                </div>

                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70 mb-1.5">
                        First Name
                      </label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="John"
                        className="w-full h-11 bg-white/5 border border-white/15 px-3 text-[13px] text-white placeholder-white/30 focus:border-[#C9B07A] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70 mb-1.5">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Doe"
                        className="w-full h-11 bg-white/5 border border-white/15 px-3 text-[13px] text-white placeholder-white/30 focus:border-[#C9B07A] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70 mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-white/40" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="yourname@example.com"
                        className="w-full h-11 bg-white/5 border border-white/15 pl-10 pr-3 text-[13px] text-white placeholder-white/30 focus:border-[#C9B07A] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70 mb-1.5">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-white/40" />
                      <input
                        type="password"
                        required
                        minLength={5}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Minimum 5 characters"
                        className="w-full h-11 bg-white/5 border border-white/15 pl-10 pr-3 text-[13px] text-white placeholder-white/30 focus:border-[#C9B07A] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex h-11 w-full items-center justify-center bg-[#C9B07A] text-[12px] font-semibold uppercase tracking-[0.18em] text-black transition-colors hover:bg-[#b0965d] active:bg-[#977f4c] disabled:opacity-50 cursor-pointer mt-2"
                  >
                    {loading ? (
                      <span className="inline-flex items-center gap-2">
                        <Loader2 className="size-4 animate-spin" />
                        Creating Account...
                      </span>
                    ) : (
                      "Create Account"
                    )}
                  </button>
                </form>

                <div className="pt-4 border-t border-white/10 text-center">
                  <p className="text-[11px] text-white/60 tracking-wider">
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setError(null)
                        setSuccessMsg(null)
                        setMode("login")
                      }}
                      className="text-[#C9B07A] hover:underline font-semibold cursor-pointer"
                    >
                      Sign In
                    </button>
                  </p>
                </div>
              </div>
            )}

            {/* VIEW 3: ACCOUNT DASHBOARD */}
            {mode === "account" && customer && (
              <div className="mt-8 space-y-6">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-[#C9B07A]/20 border border-[#C9B07A]/50 text-[#C9B07A]">
                      <User className="size-5" />
                    </div>
                    <div>
                      <h2 className="text-[1.1rem] font-semibold uppercase text-white tracking-wider">
                        Welcome, {customer.firstName || "Member"}
                      </h2>
                      <p className="text-[12px] text-white/60 truncate">{customer.email}</p>
                    </div>
                  </div>
                </div>

                {/* Orders Section */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <h3 className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C9B07A]">
                      <Package className="size-4" />
                      <span>Recent Orders</span>
                    </h3>
                  </div>

                  {customer.orders?.edges?.length > 0 ? (
                    <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                      {customer.orders.edges.map(({ node }: any) => (
                        <div
                          key={node.id}
                          className="flex items-center justify-between rounded border border-white/10 bg-white/5 p-3 text-[12px]"
                        >
                          <div>
                            <p className="font-semibold text-white">Order #{node.orderNumber || node.name}</p>
                            <p className="text-[10px] text-white/50">
                              {new Date(node.processedAt).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-[#C9B07A]">
                              {node.totalPrice?.currencyCode} {node.totalPrice?.amount}
                            </p>
                            <p className="text-[10px] text-emerald-400 capitalize">
                              {node.fulfillmentStatus?.toLowerCase() || "Processing"}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="rounded border border-white/10 bg-white/5 p-4 text-center text-[12px] text-white/50">
                      No orders found yet.
                    </div>
                  )}
                </div>

                {/* External Actions */}
                <div className="space-y-2 pt-4 border-t border-white/10">
                  <a
                    href={`https://${shopifyDomain}/account`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-full items-center justify-center gap-2 border border-white/20 text-[11px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-white/10 transition-colors"
                  >
                    <span>View Orders on Shopify</span>
                    <ExternalLink className="size-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex h-10 w-full items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-red-400 hover:text-red-300 transition-colors cursor-pointer"
                  >
                    <LogOut className="size-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 border-t border-white/10 pt-4 text-center">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
              Clarté Eyewear • Shopify Authenticated
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
