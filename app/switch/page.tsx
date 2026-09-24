import type { Metadata } from "next"
import { SwitchPage } from "@/components/switch-page"

export const metadata: Metadata = {
  title: "Switch — Pour que vendre cesse d'être un pari | 34 Elements",
  description:
    "Switch analyse vos conversations clients à partir de votre playbook commercial. Il distingue ce que le client a confirmé de ce que vous supposez encore, et vous aide à préparer la prochaine conversation.",
  alternates: { canonical: "/switch" },
  openGraph: {
    title: "Switch — Pour que vendre cesse d'être un pari",
    description: "Sachez où en est chaque deal. Et quoi faire ensuite.",
    url: "/switch",
    type: "website",
  },
}

export default function Page() {
  return <SwitchPage />
}
