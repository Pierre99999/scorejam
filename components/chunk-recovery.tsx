"use client"

import { useEffect } from "react"

/**
 * Recovers from "Loading chunk X failed" errors by reloading with a cache-busting param.
 * This commonly happens after a redeploy when the HTML references older chunk ids.
 */
export function ChunkRecovery() {
  useEffect(() => {
    const reloadWithBuster = () => {
      try {
        const url = new URL(window.location.href)
        url.searchParams.set("_", Date.now().toString())
        window.location.replace(url.toString())
      } catch {
        window.location.reload()
      }
    }

    const onError = (e: ErrorEvent) => {
      const msg = String(e?.message || "")
      // Example: "Loading chunk 581 failed."
      if (msg.includes("Loading chunk") || msg.includes("ChunkLoadError")) {
        reloadWithBuster()
      }
    }

    const onRejection = (e: PromiseRejectionEvent) => {
      const reason = e?.reason
      const msg = typeof reason === "string" ? reason : reason?.message ? String(reason.message) : ""
      if (msg.includes("Loading chunk") || reason?.name === "ChunkLoadError") {
        reloadWithBuster()
      }
    }

    window.addEventListener("error", onError)
    window.addEventListener("unhandledrejection", onRejection)
    return () => {
      window.removeEventListener("error", onError)
      window.removeEventListener("unhandledrejection", onRejection)
    }
  }, [])

  return null
}
