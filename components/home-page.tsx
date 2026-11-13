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

function CatalogLink({ href, className, children }: { href: string; className: string; children: React.ReactNode }) {
  const { language } = useLanguage()
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className="sr-only"> ({translations[language].common.newTab})</span>
    </a>
  )
}

export function HomePage() {
  const { language } = useLanguage()
  const all = translations[language]
  const t = all.home
  const tm = t.methodStory

  const tc = t.catalog
  const startup = methods.startup
  const sales = methods.sales
  const catalogRows = [
    {
      key: "startup" as const,
      href: "/startup-unlocked",
      copy: tc.startup,
      cover: bookCover(startup.book, language),
      theme: startup.theme,
      cells: [
        { href: startup.book.buy[language] ?? "/startup-unlocked" },
        { href: startup.guided.signup[language] ?? startup.guided.signup.fr ?? "/startup-unlocked" },
        { href: startup.onsite.cta },
        { href: links.freeDiagnostic[language] },
      ],
    },
    {
      key: "sales" as const,
      href: "/sales-unlocked",
      copy: tc.sales,
      cover: bookCover(sales.book, language),
      theme: sales.theme,
      cells: [
        { href: sales.book.buy[language] ?? "/sales-unlocked" },
        { href: sales.guided.signup[language] ?? sales.guided.signup.fr ?? "/sales-unlocked" },
        { href: sales.onsite.cta },
        { href: links.switchApp },
      ],
    },
  ]

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
      <Link
        href="/sales-unlocked/seminar"
        className="group flex items-center justify-center gap-2 bg-orange px-6 py-2.5 text-center text-sm font-semibold text-navy-deep transition-colors hover:bg-orange/90"
      >
        <span className="text-pretty">
          {language === "fr"
            ? "Inscrivez-vous au séminaire Sales Unlocked du 2 décembre"
            : "Register for the Sales Unlocked seminar on December 2"}
        </span>
        <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </Link>
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

      {/* ---------- Catalogue: two methods, four formats ---------- */}
      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <h2 className="max-w-3xl text-balance font-serif text-3xl font-normal leading-tight text-navy md:text-4xl lg:text-5xl">
            {tc.title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{tc.intro}</p>

          {/* Desktop: a true table, every cell is a link */}
          <div className="mt-12 hidden overflow-hidden rounded-2xl border border-line bg-white lg:block">
            <table className="w-full table-fixed border-collapse text-left">
              <thead>
                <tr className="border-b border-line bg-paper-2">
                  <th scope="col" className="w-[19%] px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    {tc.methodHeader}
                  </th>
                  {tc.columns.map((col) => (
                    <th key={col} scope="col" className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {catalogRows.map((row, r) => (
                  <tr key={row.key} className={r === 0 ? "border-b border-line" : ""}>
                    <th scope="row" className="px-6 py-6 align-top">
                      <Link href={row.href} className="group flex items-start gap-4">
                        {row.cover && (
                          <Image
                            src={row.cover}
                            alt=""
                            width={120}
                            height={180}
                            className="h-auto w-12 flex-none rounded shadow-md ring-1 ring-black/10"
                          />
                        )}
                        <span>
                          <span className="block font-serif text-xl leading-tight text-navy group-hover:underline group-hover:decoration-orange group-hover:decoration-2 group-hover:underline-offset-4">
                            {row.copy.name}
                          </span>
                          <span className="mt-1 block text-sm font-normal text-muted">({row.copy.tag})</span>
                        </span>
                      </Link>
                    </th>
                    {row.cells.map((cell, c) => (
                      <td key={c} className="p-0 align-top">
                        <CatalogLink
                          href={cell.href}
                          className="group flex h-full min-h-28 flex-col justify-between gap-3 px-6 py-6 transition-colors hover:bg-paper"
                        >
                          <span className="leading-relaxed text-navy">{row.copy.cells[c]}</span>
                          <ArrowRight
                            className="h-4 w-4 text-orange transition-transform group-hover:translate-x-1"
                            aria-hidden="true"
                          />
                        </CatalogLink>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile and tablet: one card per method */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:hidden">
            {catalogRows.map((row) => (
              <article key={row.key} className="overflow-hidden rounded-2xl border border-line bg-white">
                <Link href={row.href} className={`flex items-center gap-4 p-6 ${row.theme.surface}`}>
                  {row.cover && (
                    <Image
                      src={row.cover}
                      alt=""
                      width={120}
                      height={180}
                      className="h-auto w-14 flex-none rounded shadow-lg ring-1 ring-black/15"
                    />
                  )}
                  <span>
                    <span className={`block font-serif text-2xl leading-tight ${row.theme.onSurface}`}>{row.copy.name}</span>
                    <span className={`mt-1 block text-sm ${row.theme.onSurfaceMuted}`}>({row.copy.tag})</span>
                  </span>
                </Link>
                <ul className="divide-y divide-line">
                  {row.cells.map((cell, c) => (
                    <li key={c}>
                      <CatalogLink
                        href={cell.href}
                        className="group flex items-center justify-between gap-4 px-6 py-4 transition-colors hover:bg-paper"
                      >
                        <span>
                          <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                            {tc.columns[c]}
                          </span>
                          <span className="mt-1 block leading-relaxed text-navy">{row.copy.cells[c]}</span>
                        </span>
                        <ArrowRight className="h-4 w-4 flex-none text-orange" aria-hidden="true" />
                      </CatalogLink>
                    </li>
                  ))}
                </ul>
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

          <dl className="mt-12 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15">
            {tm.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse gap-1 bg-navy-deep px-4 py-6 text-center md:px-8">
                <dt className="text-sm leading-snug text-white/70">{stat.label}</dt>
                <dd className="font-serif text-4xl text-orange md:text-5xl">{stat.num}</dd>
              </div>
            ))}
          </dl>

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

          <div className="mt-8 flex flex-col items-center gap-4">
            <a
              href={links.freeDiagnostic[language]}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-white underline decoration-orange decoration-2 underline-offset-4 transition-colors hover:text-orange"
            >
              {t.finalCta.ctaDiagnostic}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only"> ({all.common.newTab})</span>
            </a>
            <a
              href={links.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 underline underline-offset-4 transition-colors hover:text-white"
            >
              {t.finalCta.ctaCall}
              <span className="sr-only"> ({all.common.newTab})</span>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
