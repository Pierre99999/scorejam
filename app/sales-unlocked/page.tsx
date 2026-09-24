import type { Metadata } from "next"
import { MethodPage } from "@/components/method-page"

export const metadata: Metadata = {
  title: "Sales Unlocked — Stop persuading, start building decisions | 34 Elements",
  description:
    "3 gates and a momentum that turn conversations into signed deals: the opportunity, winning, the impact — and the momentum read continuously. Available as a guided program with 1-on-1 coaching or a one-day on-site workshop.",
  alternates: { canonical: "/sales-unlocked" },
  openGraph: {
    title: "Sales Unlocked | 34 Elements",
    description:
      "3 gates and a momentum that turn conversations into signed deals. Applied to your real pipeline, starting with your next call.",
    url: "/sales-unlocked",
    type: "website",
  },
}

export default function SalesUnlockedPage() {
  return <MethodPage method="sales" />
}
