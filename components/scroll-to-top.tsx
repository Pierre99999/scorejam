"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

/**
 * Forces every route change to land at the top of the page.
 *
 * The site sets `scroll-behavior: smooth` on <html> so that in-page anchors
 * (#formats, #method) glide instead of jumping. That same rule fights with
 * Next.js' own scroll restoration on navigation: the router's jump to the top
 * gets turned into a slow animation that the newly painted page interrupts,
 * so you land somewhere in the middle of the new page.
 *
 * Here we disable smooth scrolling for the instant it takes to snap to the top,
 * then restore it so anchor links keep their easing.
 */
export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Preserve deep links to a section (e.g. /startup-unlocked#formats).
    if (window.location.hash) return

    const root = document.documentElement
    const previous = root.style.scrollBehavior
    root.style.scrollBehavior = "auto"
    window.scrollTo(0, 0)
    root.style.scrollBehavior = previous
  }, [pathname])

  return null
}
