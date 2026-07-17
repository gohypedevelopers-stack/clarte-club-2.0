import { CornerUpLeft, Lock, ShoppingCart } from "lucide-react"

const benefits = [
  {
    icon: ShoppingCart,
    title: "FREE SHIPPING",
    description: "On orders over $250 CAD",
  },
  {
    icon: CornerUpLeft,
    title: "FREE RETURNS",
    description: "On full priced items only",
  },
  {
    icon: Lock,
    title: "PAYMENT SECURE",
    description: "Guaranteed payment protection",
  },
] as const

export function CollectionBenefitsBar() {
  return (
    <section
      aria-label="Store benefits"
      className="mt-10 -mx-4 bg-accent px-4 py-7 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
    >
      <ul className="mx-auto grid max-w-[980px] grid-cols-3 gap-2 px-1 sm:px-0 sm:gap-8">
        {benefits.map(({ icon: Icon, title, description }) => (
          <li key={title} className="flex justify-center">
            <div className="flex w-full max-w-[250px] flex-col items-center text-center gap-1.5 text-black sm:flex-row sm:items-start sm:text-left sm:gap-3">
              <Icon
                aria-hidden="true"
                className="size-5 shrink-0 stroke-[1.8] sm:mt-0.5 sm:size-6"
              />

              <div className="min-w-0">
                <p className="text-[0.62rem] font-semibold uppercase leading-tight tracking-[0.03em] sm:text-[0.95rem] sm:font-medium sm:tracking-[0.01em]">
                  {title}
                </p>
                <p className="text-[0.58rem] leading-tight text-black/85 mt-0.5 sm:text-[0.9rem] sm:text-black/90 sm:mt-0">
                  {description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
