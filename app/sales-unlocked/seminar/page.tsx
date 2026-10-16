import type { Metadata } from "next"
import { SeminarPage } from "@/components/seminar-page"

export const metadata: Metadata = {
  title: "Séminaire — Masterclass Sales Unlocked | 34 Elements",
  description:
    "Une journée avec Pierre Gaubil pour voir la vente autrement. Masterclass Sales Unlocked : le 5 novembre, à Paris, 8 heures, 249 €.",
  alternates: { canonical: "/sales-unlocked/seminar" },
  openGraph: {
    title: "Séminaire — Masterclass Sales Unlocked",
    description: "Vous allez voir la vente autrement. Et vendre autrement. Le 5 novembre, à Paris.",
    url: "/sales-unlocked/seminar",
    type: "website",
  },
}

export default function Page() {
  return <SeminarPage />
}
