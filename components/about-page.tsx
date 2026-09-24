"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { bio, bookCover, links, methods } from "@/lib/site-content"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight } from "lucide-react"

export function AboutPage() {
  const { language } = useLanguage()
  const all = translations[language]
  const t = all.about

  const bookCovers = (
    [
      { key: "startup", href: "/startup-unlocked", tilt: "-rotate-6" },
      { key: "sales", href: "/sales-unlocked", tilt: "rotate-6" },
    ] as const
  ).flatMap(({ key, href, tilt }) => {
    const cover = bookCover(methods[key].book, language)
    return cover ? [{ key, href, tilt, cover, name: all.home.methods[key].name }] : []
  })

  return (
    <div className="min-h-screen bg-paper">
      <SiteHeader />

      {/* ---------- Hero ---------- */}
      <section className="border-b border-line bg-navy px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">{t.eyebrow}</p>
            <h1 className="mt-5 max-w-2xl text-balance font-serif text-4xl font-normal leading-[1.08] text-white md:text-5xl">
              {t.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">{t.lead}</p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/15">
            <Image
              src={bio.photo}
              alt="Pierre Gaubil"
              width={900}
              height={1100}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ---------- Stats ---------- */}
      <section className="border-b border-line bg-paper-2 px-6 py-12 md:px-10">
        <dl className="mx-auto grid max-w-[1180px] grid-cols-2 gap-6 lg:grid-cols-4">
          {all.home.why.stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-serif text-3xl text-navy md:text-4xl">{s.num}</span>
                <span className="mt-1 block text-sm leading-snug text-muted">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ---------- Chapters ---------- */}
      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <div className="flex flex-col gap-12">
            {t.chapters.map((c, i) => (
              <article key={c.heading} className="border-l-2 border-orange pl-6 md:pl-8">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-2 font-serif text-2xl leading-snug text-navy md:text-3xl">{c.heading}</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="border-t border-line bg-navy px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1180px] text-center">
          {/* 25 years, turned into two books */}
          <div className="mb-10 flex items-center justify-center">
            {bookCovers.map(({ key, href, name, cover, tilt }) => (
              <Link key={key} href={href} className={`group block ${key === "startup" ? "z-10 -mr-5" : ""}`}>
                <Image
                  src={cover}
                  alt={name}
                  width={520}
                  height={784}
                  className={`h-auto w-[112px] rounded-lg shadow-2xl ring-1 ring-white/20 transition-transform duration-300 group-hover:-translate-y-2 sm:w-[136px] ${tilt}`}
                />
              </Link>
            ))}
          </div>

          <h2 className="font-serif text-3xl font-normal text-white md:text-4xl">{t.ctaTitle}</h2>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/startup-unlocked"
              className="inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 font-semibold text-navy-deep transition-colors hover:bg-orange/90"
            >
              {t.ctaStartup}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/sales-unlocked"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-navy transition-colors hover:bg-white/90"
            >
              {t.ctaSales}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={links.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              {t.ctaCall}
              <span className="sr-only">({all.common.newTab})</span>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
