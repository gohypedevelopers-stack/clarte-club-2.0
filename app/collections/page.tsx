import type { Metadata } from "next"

import { CollectionPage } from "@/components/collection/CollectionPage"

export const metadata: Metadata = {
  title: "Collection | Clarte Club",
  description: "Browse the Clarte Club men's clothing collection.",
}

export default function Page() {
  return <CollectionPage />
}
