"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { bookCover, links, bio, methods } from "@/lib/site-content"
import { featuredTestimonials } from "@/lib/testimonials"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight, Quote, Compass, Target } from "lucide-react"

// Four short, complete quotes read stronger than eight clamped ones.
const featured = featuredTestimonials(4)

export function HomePage() {
  const { language } = useLanguage()
  const all = translations[language]
  const t = all.home
  const tm = t.methodStory

  const cards = [
    {
      key: "startup" as const,
      href: "/startup-unlocked",
      copy: t.methods.startup,
      Icon: Compass,
      count: methods.startup.guided.moduleCount,
      book: methods.startup.book,
      cover: bookCover(methods.startup.book, language),
      theme: methods.startup.theme,
    },
    {
      key: "sales" as const,
      href: "/sales-unlocked",
      copy: t.methods.sales,
      Icon: Target,
      count: methods.sales.guided.moduleCount,
      book: methods.sales.book,
      cover: bookCover(methods.sales.book, language),
      theme: methods.sales.theme,
    },
  ]

  return (
    <div className="min-h-screen bg-paper">
      <SiteHeader />

      {/* ---------- Hero ---------- */}
      <section className="border-b border-line bg-navy px-6 py-20 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1180px] items-center gap-14 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">{t.hero.eyebrow}</p>
            <h1 className="mt-5 max-w-4xl font-serif text-4xl font-normal leading-[1.06] text-white md:text-5xl lg:text-6xl">
              <span className="block text-balance">{t.hero.title}</span>
              <span className="block text-balance text-orange">{t.hero.titleHighlight}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{t.hero.subtitle}</p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/startup-unlocked"
                className="inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 font-semibold text-navy-deep transition-colors hover:bg-orange/90"
              >
                {t.hero.ctaStartup}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/sales-unlocked"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                {t.hero.ctaSales}
              </Link>
            </div>
          </div>

          {/* The two books: the foundation everything else is built on */}
          <div className="flex items-center justify-center">
            {cards.map(({ key, href, copy, cover }, i) =>
              cover ? (
                <Link
                  key={key}
                  href={href}
                  className={`group relative block ${i === 0 ? "z-10 -mr-6" : ""}`}
                >
                  <Image
                    src={cover}
                    alt={copy.name}
                    width={640}
                    height={964}
                    priority
                    className={`h-auto w-[150px] rounded-lg shadow-2xl ring-1 ring-white/20 transition-transform duration-300 group-hover:-translate-y-2 sm:w-[190px] ${
                      i === 0 ? "-rotate-6" : "rotate-6"
                    }`}
                  />
                </Link>
              ) : null,
            )}
          </div>
        </div>
      </section>

      {/* ---------- Two methods ---------- */}
      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">{t.methods.eyebrow}</p>
          <h2 className="mt-4 max-w-3xl font-serif text-3xl font-normal leading-tight text-navy md:text-4xl lg:text-5xl">
            <span className="block text-balance">{t.methods.title}</span>
            <span className="block text-balance">{t.methods.titleLine2}</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{t.methods.subtitle}</p>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {cards.map(({ key, href, copy, Icon, count, book, cover, theme }) => (
              <article
                key={key}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Band painted in the book's own cover colour, with the cover itself */}
                <div className={`flex items-center gap-5 p-7 ${theme.surface}`}>
                  {cover && (
                    <Image
                      src={cover}
                      alt={`${copy.name} — ${all.formats.book.label}`}
                      width={300}
                      height={452}
                      className="h-auto w-[88px] flex-none rounded shadow-xl ring-1 ring-black/15 transition-transform duration-300 group-hover:-translate-y-1"
                    />
                  )}
                  <div className="min-w-0">
                    <div className={`flex items-center gap-2 ${theme.onSurfaceHighlight}`}>
                      <Icon className="h-4 w-4 flex-none" aria-hidden="true" />
                      <span className="text-xs font-semibold uppercase tracking-[0.14em]">
                        {copy.countLabel}
                      </span>
                    </div>
                    <h3 className={`mt-2 font-serif text-2xl leading-tight ${theme.onSurface}`}>
                      {copy.name}
                    </h3>
                    <p className={`mt-1 text-sm ${theme.onSurfaceMuted}`}>
                      {book.status === "available"
                        ? `${all.formats.book.label} · ${book.price[language]}`
                        : `${all.formats.book.label} · ${all.common.comingSoon}`}
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <p className="font-serif text-xl leading-snug text-navy">{copy.promise}</p>

                  <p className={`mt-4 border-l-2 pl-4 leading-relaxed text-navy/70 ${theme.accentBorder}`}>
                    {copy.problem}
                  </p>

                  <div className="mt-auto pt-7">
                    <Link
                      href={href}
                      className={`inline-flex items-center gap-2 font-semibold text-navy underline decoration-2 underline-offset-4 transition-colors hover:opacity-70 ${theme.accentDecoration}`}
                    >
                      {copy.cta}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    <span className="sr-only">{`(${count})`}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- The method behind both ---------- */}
      <section className="border-t border-line bg-navy-deep px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[900px]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">{tm.eyebrow}</p>
          <h2 className="mt-4 max-w-3xl text-balance font-serif text-3xl font-normal leading-tight text-white md:text-4xl lg:text-5xl">
            {tm.title}
          </h2>

          <p className="mt-8 border-l-2 border-orange pl-6 font-serif text-2xl leading-snug text-white md:text-3xl">
            {tm.systemLine}
          </p>

          <ol className="mt-12 flex flex-col gap-4">
            {tm.principles.map((step, i) => (
              <li key={step} className="flex items-start gap-4">
                <span
                  className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-orange text-xs font-bold text-navy-deep"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <span className="text-lg leading-relaxed text-white/85">{step}</span>
              </li>
            ))}
          </ol>

          <p className="mt-12 text-pretty font-serif text-xl leading-snug text-white/90 md:text-2xl">
            {tm.appsLead}{" "}
            {tm.apps.map((app, i) => (
              <span key={app}>
                <span className="text-orange">{app}</span>
                {i < tm.apps.length - 1 ? ". " : "."}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* ---------- Why Pierre ---------- */}
      <section className="border-y border-line bg-paper-2 px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-line bg-white">
              <Image
                src={bio.photo}
                alt="Pierre Gaubil"
                width={900}
                height={1100}
                className="h-auto w-full object-cover"
              />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">{t.why.eyebrow}</p>
              <h2 className="mt-4 font-serif text-3xl font-normal leading-tight text-navy md:text-4xl">
                {t.why.title}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">{t.why.body}</p>

              <dl className="mt-9 grid grid-cols-2 gap-5">
                {t.why.stats.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-line bg-white p-5">
                    <dt className="sr-only">{s.label}</dt>
                    <dd>
                      <span className="block font-serif text-3xl text-navy">{s.num}</span>
                      <span className="mt-1 block text-sm leading-snug text-muted">{s.label}</span>
                    </dd>
                  </div>
                ))}
              </dl>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-navy underline decoration-orange decoration-2 underline-offset-4 transition-colors hover:text-orange"
              >
                {t.why.cta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Proof ---------- */}
      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">{t.proof.eyebrow}</p>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-normal leading-tight text-navy md:text-4xl lg:text-5xl">
            {t.proof.title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{t.proof.subtitle}</p>

          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featured.map((item, idx) => (
              <li
                key={`${item.name}-${idx}`}
                className="flex h-full flex-col justify-between rounded-2xl border border-line bg-white p-6"
              >
                <div>
                  <span className="inline-flex rounded-full bg-navy px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                    {item.method === "sales" ? t.proof.badgeSales : t.proof.badgeStartup}
                  </span>
                  <Quote className="mt-4 h-5 w-5 text-orange" aria-hidden="true" />
                  <blockquote className="mt-3 line-clamp-[10] whitespace-pre-line text-sm leading-relaxed text-navy">
                    {item.text[language]}
                  </blockquote>
                </div>
                <footer className="mt-5 border-t border-line pt-4">
                  <div className="truncate font-semibold text-navy">{item.name}</div>
                  <div className="truncate text-sm text-muted">
                    {[item.role, item.company].filter(Boolean).join(" — ")}
                  </div>
                </footer>
              </li>
            ))}
          </ul>

          <Link
            href="/testimonials"
            className="mt-10 inline-flex items-center gap-2 font-semibold text-navy underline decoration-orange decoration-2 underline-offset-4 transition-colors hover:text-orange"
          >
            {t.proof.cta}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ---------- Final CTA ---------- */}
      <section className="border-t border-line bg-navy px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1180px] text-center">
          <h2 className="mx-auto max-w-2xl text-balance font-serif text-3xl font-normal leading-tight text-white md:text-4xl">
            {t.finalCta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">{t.finalCta.subtitle}</p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/startup-unlocked"
              className="inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 font-semibold text-navy-deep transition-colors hover:bg-orange/90"
            >
              {t.finalCta.ctaStartup}
            </Link>
            <Link
              href="/sales-unlocked"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-navy transition-colors hover:bg-white/90"
            >
              {t.finalCta.ctaSales}
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
            <a
              href={links.freeDiagnostic[language]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 underline decoration-orange decoration-2 underline-offset-4 transition-colors hover:text-white"
            >
              {t.finalCta.ctaDiagnostic}
            </a>
            <a
              href={links.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 underline decoration-orange decoration-2 underline-offset-4 transition-colors hover:text-white"
            >
              {t.finalCta.ctaCall}
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
