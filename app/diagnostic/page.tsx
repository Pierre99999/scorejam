import { permanentRedirect } from "next/navigation"

/** The diagnostic is now offered from the contact page. */
export default function Page() {
  permanentRedirect("/contact")
}
