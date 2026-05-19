import type { Metadata } from "next"

import { CollectionPage } from "@/components/collection/CollectionPage"

export const metadata: Metadata = {
  title: "Collection | SUOS",
  description: "Browse the SUOS men's clothing collection.",
}

export default function Page() {
  return <CollectionPage />
}
