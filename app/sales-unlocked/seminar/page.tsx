import type { Metadata } from "next"
import { SeminarPage } from "@/components/seminar-page"

export const metadata: Metadata = {
  title: "Séminaire Sales Unlocked — Masterclass Switch | 34 Elements",
  description:
    "Une journée avec Pierre Gaubil pour voir la vente autrement. Masterclass Switch : le 14 octobre, à Paris, 8 heures, 249 €.",
  alternates: { canonical: "/sales-unlocked/seminar" },
  openGraph: {
    title: "Séminaire Sales Unlocked — Masterclass Switch",
    description: "Vous allez voir la vente autrement. Et vendre autrement. Le 14 octobre, à Paris.",
    url: "/sales-unlocked/seminar",
    type: "website",
  },
}

export default function Page() {
  return <SeminarPage />
}
