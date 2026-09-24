import { permanentRedirect } from "next/navigation"

/** The seminar is now the on-site format of Startup Unlocked. */
export default function Page() {
  permanentRedirect("/startup-unlocked#formats")
}
