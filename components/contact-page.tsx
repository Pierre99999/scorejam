"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { links } from "@/lib/site-content"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CalendarDays, Mail, ClipboardCheck, ExternalLink } from "lucide-react"

export function ContactPage() {
  const { language } = useLanguage()
  const all = translations[language]
  const t = all.contact

  const cards = [
    {
      Icon: CalendarDays,
      title: t.callTitle,
      desc: t.callDesc,
      cta: t.callCta,
      href: links.calendly,
      primary: true,
    },
    {
      Icon: ClipboardCheck,
      title: t.diagnosticTitle,
      desc: t.diagnosticDesc,
      cta: t.diagnosticCta,
      href: links.freeDiagnostic[language],
      primary: false,
    },
    {
      Icon: Mail,
      title: t.emailTitle,
      desc: t.emailDesc,
      cta: links.email,
      href: `mailto:${links.email}`,
      primary: false,
    },
  ]

  return (
    <div className="min-h-screen bg-paper">
      <SiteHeader />

      {/* ---------- Hero ---------- */}
      <section className="border-b border-line bg-navy px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1180px]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">{t.eyebrow}</p>
          <h1 className="mt-5 font-serif text-4xl font-normal leading-[1.08] text-white md:text-5xl">
            {t.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{t.lead}</p>
        </div>
      </section>

      {/* ---------- Contact options ---------- */}
      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1180px] gap-6 lg:grid-cols-3">
          {cards.map(({ Icon, title, desc, cta, href, primary }) => (
            <article
              key={title}
              className={`flex h-full flex-col rounded-2xl border bg-white p-7 ${
                primary ? "border-2 border-orange shadow-lg" : "border-line"
              }`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="mt-5 font-serif text-2xl leading-snug text-navy">{title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{desc}</p>

              <div className="mt-auto pt-7">
                <a
                  href={href}
                  {...(href.startsWith("mailto:")
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold transition-colors ${
                    primary
                      ? "bg-orange text-navy-deep hover:bg-orange/90"
                      : "bg-navy text-white hover:bg-navy-deep"
                  }`}
                >
                  <span className="truncate">{cta}</span>
                  {!href.startsWith("mailto:") && (
                    <>
                      <ExternalLink className="h-4 w-4 flex-none" aria-hidden="true" />
                      <span className="sr-only">({all.common.newTab})</span>
                    </>
                  )}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
