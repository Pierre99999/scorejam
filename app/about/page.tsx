import type { Metadata } from "next"
import { AboutPage } from "@/components/about-page"

export const metadata: Metadata = {
  title: "About Pierre Gaubil | 34 Elements",
  description:
    "Five companies co-founded, two exits, one IPO. Seventeen years building in Silicon Valley, then 25 years investing in and coaching over 300 entrepreneurs. The story behind Startup Unlocked and Sales Unlocked.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Pierre Gaubil | 34 Elements",
    description: "25 years of building, turned into two methods.",
    url: "/about",
    type: "profile",
  },
}

export default function Page() {
  return <AboutPage />
}
