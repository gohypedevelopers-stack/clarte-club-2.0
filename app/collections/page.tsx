import type { Metadata } from "next"

import { CollectionPage } from "@/components/collection/CollectionPage"

export const metadata: Metadata = {
  title: "Collection | Clarte Club 2.0",
  description: "Browse the Clarte Club 2.0 men's clothing collection.",
}

export default function Page() {
  return <CollectionPage />
}
