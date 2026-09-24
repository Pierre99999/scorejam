import type { MetadataRoute } from "next"
import { links } from "@/lib/site-content"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/startup-unlocked", priority: 0.9 },
    { path: "/sales-unlocked", priority: 0.9 },
    { path: "/about", priority: 0.7 },
    { path: "/testimonials", priority: 0.7 },
    { path: "/contact", priority: 0.6 },
  ]

  return routes.map(({ path, priority }) => ({
    url: `${links.siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  }))
}
