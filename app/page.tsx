import type { Metadata } from "next"
import { HomePage } from "@/components/home-page"

export const metadata: Metadata = {
  title: "34 Elements — Build a better company. Win better deals.",
  description:
    "Two methods from 25 years of entrepreneurship and 17 years in Silicon Valley. Startup Unlocked makes your company make sense. Sales Unlocked makes your sales convert. Each available as a book, a guided program, or a day on site.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "34 Elements — Build a better company. Win better deals.",
    description:
      "Two methods. Three ways to live them. Startup Unlocked for strategy, Sales Unlocked for conversion.",
    url: "/",
    type: "website",
  },
}

export default function Page() {
  return <HomePage />
}
