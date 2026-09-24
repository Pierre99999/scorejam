import type { Metadata } from "next"
import { ContactPage } from "@/components/contact-page"

export const metadata: Metadata = {
  title: "Contact | 34 Elements",
  description:
    "Book a free 15-minute call with Pierre, take the free diagnostic to find out which method fits, or write directly. No preparation needed.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Let's talk | 34 Elements",
    description: "Fifteen minutes is usually enough to know which method fits — or whether neither does.",
    url: "/contact",
    type: "website",
  },
}

export default function Page() {
  return <ContactPage />
}
