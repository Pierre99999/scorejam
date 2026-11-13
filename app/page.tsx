import type { Metadata } from "next"
import { HomePage } from "@/components/home-page"

export const metadata: Metadata = {
  title: "34 Elements, method publisher for founders and sales teams",
  description:
    "Two methods, Startup Unlocked and Sales Unlocked, available as a book, a video program, an on-site day and software.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "34 Elements, method publisher for founders and sales teams",
    description:
      "Two methods, Startup Unlocked and Sales Unlocked, available as a book, a video program, an on-site day and software.",
    url: "/",
    type: "website",
  },
}

export default function Page() {
  return <HomePage />
}
