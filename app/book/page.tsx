import { permanentRedirect } from "next/navigation"

/** The book is now the first format on the Startup Unlocked page. */
export default function Page() {
  permanentRedirect("/startup-unlocked#formats")
}
