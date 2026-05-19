import { CollectionGrid } from "@/components/collection/CollectionGrid"
import { CollectionHeader } from "@/components/collection/CollectionHeader"

export function CollectionPage() {
  return (
    <main className="flex-1 bg-white">
      <section className="w-full bg-white px-4 pt-8 pb-16 text-black sm:px-6 lg:px-8 md:pt-10 md:pb-20">
        <CollectionHeader />

        <div className="mt-8">
          <CollectionGrid />
        </div>
      </section>
    </main>
  )
}
