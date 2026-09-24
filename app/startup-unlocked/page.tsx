import type { Metadata } from "next"
import { MethodPage } from "@/components/method-page"

export const metadata: Metadata = {
  title: "Startup Unlocked — Build the company, not just the product | 34 Elements",
  description:
    "34 elements that turn a product into a company: vision, value proposition, positioning, target, business model, go-to-market, team and metrics. Available as a book, a guided program with 1-on-1 coaching, or a one-day on-site workshop.",
  alternates: { canonical: "/startup-unlocked" },
  openGraph: {
    title: "Startup Unlocked | 34 Elements",
    description:
      "34 elements that turn a product into a company. Read the book, follow the guided program, or transform in a day on site.",
    url: "/startup-unlocked",
    type: "website",
  },
}

export default function StartupUnlockedPage() {
  return <MethodPage method="startup" />
}
