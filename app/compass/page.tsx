import { permanentRedirect } from "next/navigation"

/**
 * "The Compass" is now the guided format of Startup Unlocked.
 * Permanent redirect so old inbound links and rankings carry over.
 */
export default function Page() {
  permanentRedirect("/startup-unlocked#formats")
}
