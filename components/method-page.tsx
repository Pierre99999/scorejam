"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { bookCover, getMethod, links, type MethodKey } from "@/lib/site-content"
import { methodTestimonials } from "@/lib/testimonials"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ElementsSystem } from "@/components/elements-system"
import { SalesMethod } from "@/components/sales-method"
import { ReleaseSeal } from "@/components/release-seal"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowRight, BookOpen, Users, MapPin, Check, ExternalLink, Plus } from "lucide-react"

export function MethodPage({ method }: { method: MethodKey }) {
  const { language } = useLanguage()
  const all = translations[language]
  const t = all.method[method]
  // Read directly so each branch keeps its own shape: Sales has the gates map,
  // Startup has the 34-element system.
  const salesT = all.method.sales
  const fm = all.formats
  const os = all.onsite
  // Switch is live and gets a full section; Compass34 is only announced for now.
  // Kept as two separate refs so each section keeps its own shape.
  const sw = all.salesSoftware
  const startupSw = all.startupSoftware
  const cfg = getMethod(method)

  // "How it works" copy for the guided program, kept per-method from the original pages.
  const hiw = method === "startup" ? all.compassPage.howItWorks : all.switchPage.howItWorks

  const other = method === "startup" ? "sales" : "startup"
  const otherSlug = other === "startup" ? "/startup-unlocked" : "/sales-unlocked"
  const otherCfg = getMethod(other)

  const th = cfg.theme
  const proof = methodTestimonials(method)
  const bookAvailable = cfg.book.status === "available"
  const cover = bookCover(cfg.book, language)
  const otherCover = bookCover(otherCfg.book, language)
  const bookBuy = cfg.book.buy[language]
  const bookPrice = cfg.book.price[language]
  // Only an unreleased book carries a publication seal.
  const release = !bookAvailable ? cfg.book.releaseDate : undefined
  // A method can rewrite the whole on-site day when the shared one doesn't fit.
  const osDay = "onsiteDay" in t ? t.onsiteDay : undefined
  const guidedSignup = cfg.guided.signup[language]
  const guidedSignupFallback = cfg.guided.signup.fr
  const guidedPrice = cfg.guided.price[language]

  return (
    <div className="min-h-screen bg-paper">
      <SiteHeader />

      {/* ---------- Hero: the book is the foundation, so it leads ---------- */}
      <section className={`border-b border-line px-6 py-20 md:px-10 md:py-28 ${th.surface}`}>
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${th.onSurfaceHighlight}`}>
              {t.eyebrow}
            </p>
            <h1 className={`mt-5 font-serif text-4xl font-normal leading-[1.06] md:text-5xl lg:text-6xl ${th.onSurface}`}>
              <span className="block text-balance">{t.heroTitle}</span>
              <span className={`block text-balance ${th.onSurfaceHighlight}`}>{t.heroHighlight}</span>
            </h1>
            <p className={`mt-6 max-w-2xl text-lg leading-relaxed ${th.onSurfaceMuted}`}>{t.heroLead}</p>

            <div className="mt-9 flex flex-wrap gap-3">
              {method === "sales" && (
                <a
                  href={links.switchApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-navy-deep transition-transform hover:-translate-y-0.5"
                >
                  {all.common.tryApp}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">({all.common.newTab})</span>
                </a>
              )}
              {method === "sales" && (
                <Link
                  href="/switch"
                  className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 font-semibold transition-colors ${th.onSurfaceBorder} ${th.onSurface} ${th.onSurfaceHover}`}
                >
                  {salesT.ctaSwitch}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}
              {method === "sales" && (
                <Link
                  href="/sales-unlocked/seminar"
                  className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 font-semibold transition-colors ${th.onSurfaceBorder} ${th.onSurface} ${th.onSurfaceHover}`}
                >
                  {language === "fr" ? "Séminaire" : "Seminar"}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}
              <a
                href="#formats"
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-opacity hover:opacity-90 ${th.accentBg} ${th.onAccent}`}
              >
                {t.ctaFormats}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#method"
                className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 font-semibold transition-colors ${th.onSurfaceBorder} ${th.onSurface} ${th.onSurfaceHover}`}
              >
                {t.ctaMethod}
              </a>
            </div>

            {/* Format progression strip */}
            <ul className={`mt-14 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm ${th.onSurfaceMuted}`}>
              {fm.progression.map((step, i) => (
                <li key={step} className="flex items-center gap-3">
                  {i > 0 && <span aria-hidden="true" className="opacity-40">/</span>}
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* The book cover: the source the whole method comes from */}
          {cover && (
            <div className="flex justify-center lg:justify-end">
              {/* Light frame so the cover stays legible even when it shares the hero's colour */}
              <div className="relative w-full max-w-[300px] rounded-xl bg-paper p-3 shadow-2xl">
                <Image
                  src={cover}
                  alt={t.bookTitle}
                  width={860}
                  height={1300}
                  priority
                  className="h-auto w-full rounded-md"
                />
                {!bookAvailable && (
                  <span className={`absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider shadow-md ring-2 ring-paper ${th.accentBg} ${th.onAccent}`}>
                    {all.common.comingSoon}
                  </span>
                )}
                {release && (
                  <ReleaseSeal
                    label={release.label[language]}
                    day={release.day[language]}
                    className="-bottom-4 -right-4"
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ---------- Who it's for: sits right under the hero to qualify the reader early ---------- */}
      <section className="border-b border-line px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-x-16 gap-y-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${th.accentText}`}>{t.audience.eyebrow}</p>
            <h2 className="mt-4 text-balance font-serif text-2xl font-normal leading-snug text-navy md:text-3xl">
              {t.audience.title}
            </h2>
          </div>
          {t.audience.roles.length > 0 ? (
            <ul className="flex max-w-2xl flex-col gap-4 md:pt-9">
              {t.audience.roles.map((role) => (
                <li key={role.label} className="text-pretty text-lg leading-relaxed text-muted">
                  <span className="font-semibold text-navy">{role.label}</span>
                  {": "}
                  {role.text}
                </li>
              ))}
            </ul>
          ) : (
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted md:pt-9">{t.audience.body}</p>
          )}
        </div>
      </section>

      {/* ---------- The problem: Sales-only punchy statement bridging "who it's for" and the method ---------- */}
      {method === "sales" && (
        <section className="bg-navy-deep px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[900px]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">
              {salesT.problem.eyebrow}
            </p>
            <div className="mt-6 flex flex-col gap-1.5 font-serif text-3xl font-normal leading-tight text-white md:text-4xl lg:text-5xl">
              {salesT.problem.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <p className="mt-10 text-balance font-serif text-2xl leading-snug text-white md:text-3xl">
              {salesT.problem.question}{" "}
              <span className="text-orange">{salesT.problem.answer}</span>
            </p>
          </div>
        </section>
      )}

      {/* ---------- The method ---------- */}
      <section id="method" className="scroll-mt-20 px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          {method === "startup" ? (
            /* Startup Unlocked is presented as the 34-element system */
            <ElementsSystem
              copy={all.method.startup.system}
              eyebrow={all.method.startup.methodEyebrow}
              language={language}
              theme={th}
            />
          ) : (
            /* Sales Unlocked is presented as an argument, not a diagram */
            <SalesMethod copy={salesT.map} eyebrow={salesT.methodEyebrow} theme={th} />
          )}
        </div>
      </section>

      {/* ---------- Sales only: compact bridge to the Switch product page ---------- */}
      {method === "sales" && (
        <section className="border-y border-line bg-paper-2 px-6 py-14 md:px-10 md:py-16">
          <div className="mx-auto grid max-w-[1180px] items-center gap-x-16 gap-y-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div>
              <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${th.accentText}`}>
                {salesT.switchBridge.eyebrow}
              </p>
              <h2 className="mt-4 font-serif text-2xl font-normal leading-snug text-navy md:text-3xl">
                <span className="block text-balance">{salesT.switchBridge.title}</span>
                <span className="block text-balance text-orange">{salesT.switchBridge.highlight}</span>
              </h2>
            </div>
            <div className="flex flex-col items-start gap-6">
              <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted">{salesT.switchBridge.body}</p>
              <Link
                href="/switch"
                className="inline-flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-navy-deep transition-colors hover:bg-orange/90"
              >
                {salesT.switchBridge.cta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ---------- Proof: two short pull-quotes from clients of this method ---------- */}
      {proof.length > 0 && (
        <section className="border-t border-line px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-[1180px]">
            <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${th.accentText}`}>
              {all.methodProof.eyebrow}
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {proof.map((quote) => (
                <figure
                  key={`${quote.name}-${quote.company}`}
                  className="flex flex-col rounded-2xl border border-line bg-paper-2 p-8"
                >
                  <span className={`font-serif text-5xl leading-none ${th.accentText}`} aria-hidden="true">
                    &ldquo;
                  </span>
                  <blockquote className="mt-2 flex-1 text-pretty font-serif text-xl leading-snug text-navy md:text-2xl">
                    {quote.text[language]}
                  </blockquote>
                  <figcaption className="mt-6 text-sm text-muted">
                    <span className="font-semibold text-navy">{quote.name}</span>
                    {" — "}
                    {quote.role}, {quote.company}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------- Three formats ---------- */}
      <section id="formats" className="scroll-mt-20 border-y border-line bg-paper-2 px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${th.accentText}`}>
            {t.formatsEyebrow}
          </p>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-normal leading-tight text-navy md:text-4xl lg:text-5xl">
            {t.formatsTitle}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{t.formatsSubtitle}</p>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {/* --- Book --- */}
            <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-7">
              <header>
                <div className={`flex items-center gap-2 ${th.accentText}`}>
                  <BookOpen className="h-5 w-5" aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-wider">{fm.progression[0]}</span>
                </div>
                <h3 className="mt-4 font-serif text-2xl text-navy">{fm.book.label}</h3>
              </header>

              {cover ? (
                <div className="relative mt-6">
                  <Image
                    src={cover}
                    alt={t.bookTitle}
                    width={420}
                    height={630}
                    className="h-auto w-full rounded-xl shadow-lg ring-1 ring-black/10"
                  />
                  {!bookAvailable && (
                    <span className={`absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider shadow-md ${th.accentBg} ${th.onAccent}`}>
                      {all.common.comingSoon}
                    </span>
                  )}
                  {release && (
                    <ReleaseSeal
                      label={release.label[language]}
                      day={release.day[language]}
                      size="sm"
                      className="-bottom-3 -right-3"
                    />
                  )}
                </div>
              ) : (
                <div className="mt-6 flex items-center justify-center rounded-xl border border-dashed border-line bg-paper-2 px-6 py-12">
                  <span className="rounded-full bg-navy px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                    {all.common.comingSoon}
                  </span>
                </div>
              )}

              <div className="mt-6 flex flex-1 flex-col">
                <h4 className="font-semibold text-navy">{t.bookTitle}</h4>
                <p className="mt-2 leading-relaxed text-muted">{t.bookDesc}</p>

                <div className="mt-auto pt-6">
                  {bookAvailable && bookBuy ? (
                    <>
                      {bookPrice && (
                        <p className="mb-3 font-serif text-2xl text-navy">{bookPrice}</p>
                      )}
                      <a
                        href={bookBuy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 font-semibold text-white transition-colors hover:bg-navy-deep"
                      >
                        {fm.book.cta}
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        <span className="sr-only">({all.common.newTab})</span>
                      </a>
                    </>
                  ) : (
                    <p className="rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm text-muted">
                      {fm.book.comingSoonNote}
                    </p>
                  )}
                </div>
              </div>
            </article>

            {/* --- Guided program (highlighted) --- */}
            <article className={`flex h-full flex-col rounded-2xl border-2 bg-white p-7 shadow-lg ${th.accentBorder}`}>
              <header>
                <div className={`flex items-center gap-2 ${th.accentText}`}>
                  <Users className="h-5 w-5" aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-wider">{fm.progression[1]}</span>
                </div>
                <h3 className="mt-4 font-serif text-2xl text-navy">{fm.guided.label}</h3>
              </header>

              <div className="mt-6 flex gap-3">
                <div className="flex-1 rounded-xl bg-paper-2 px-4 py-3 text-center">
                  <div className="font-serif text-2xl text-navy">{cfg.guided.moduleCount}</div>
                  <div className="text-xs text-muted">{fm.guided.modulesLabel}</div>
                </div>
                <div className="flex-1 rounded-xl bg-paper-2 px-4 py-3 text-center">
                  <div className="font-serif text-2xl text-navy">{cfg.guided.coachingHours}h</div>
                  <div className="text-xs leading-tight text-muted">{fm.guided.coachingLabel}</div>
                </div>
              </div>

              <p className="mt-5 leading-relaxed text-muted">{t.guidedDesc}</p>

              {/* Apply cycle */}
              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {fm.guided.cycleTitle}
                </h4>
                <ol className="mt-3 flex flex-col gap-2">
                  {t.cycle.map((step, i) => (
                    <li key={step} className="flex items-start gap-2.5 text-sm text-navy">
                      <span className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full text-[11px] font-bold ${th.accentBg} ${th.onAccent}`}>
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-auto pt-6">
                {guidedPrice && <p className="mb-3 font-serif text-2xl text-navy">{guidedPrice}</p>}
                {guidedSignup ? (
                  <a
                    href={guidedSignup}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold transition-opacity hover:opacity-90 ${th.accentBg} ${th.onAccent}`}
                  >
                    {language === "fr" ? fm.guided.ctaFr : fm.guided.ctaEn}
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">({all.common.newTab})</span>
                  </a>
                ) : (
                  <>
                    {guidedSignupFallback && (
                      <a
                        href={guidedSignupFallback}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold transition-opacity hover:opacity-90 ${th.accentBg} ${th.onAccent}`}
                      >
                        {fm.guided.ctaFr}
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        <span className="sr-only">({all.common.newTab})</span>
                      </a>
                    )}
                    <p className="mt-3 text-sm text-muted">{fm.guided.frOnlyNote}</p>
                  </>
                )}

                {/* Full "how it works" detail, moved into a dialog to keep the page scannable */}
                <Dialog>
                  <DialogTrigger className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-orange hover:bg-paper-2">
                    <Plus className="h-4 w-4" aria-hidden="true" />
                    {all.common.readMore}
                  </DialogTrigger>
                  <DialogContent className="max-h-[85vh] max-w-3xl overflow-y-auto bg-paper">
                    <DialogHeader>
                      <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${th.accentText}`}>
                        {fm.progression[1]} · {fm.guided.label}
                      </p>
                      <DialogTitle className="mt-2 font-serif text-2xl font-normal leading-tight text-navy md:text-3xl">
                        {hiw.title}
                      </DialogTitle>
                      <DialogDescription className="mt-2 leading-relaxed text-muted">
                        {hiw.description}
                      </DialogDescription>
                    </DialogHeader>

                    {/* Three-step cycle */}
                    <h3 className="mt-6 font-serif text-xl leading-snug text-navy">
                      {hiw.threeStepCycle.title}
                    </h3>
                    <ol className="mt-4 flex flex-col gap-3">
                      {hiw.threeStepCycle.steps.map((step, i) => (
                        <li
                          key={step.title}
                          className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5"
                        >
                          <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-navy font-serif text-sm text-white">
                            {i + 1}
                          </span>
                          <div>
                            <h4 className="font-semibold text-navy">{step.title}</h4>
                            <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ol>

                    {/* Coaching hours */}
                    <h3 className="mt-8 font-serif text-xl leading-snug text-navy">
                      {hiw.coachingHours.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{hiw.coachingHours.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-3">
                      {hiw.coachingHours.hours.map((hour) => (
                        <li
                          key={hour.title}
                          className="flex min-w-[140px] flex-1 flex-col items-center gap-0.5 rounded-2xl border border-line bg-white px-4 py-4 text-center"
                        >
                          <span className={`font-serif text-lg ${th.accentText}`}>{hour.title}</span>
                          <span className="text-xs text-muted">{hour.desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Why the sequence works */}
                    <h3 className="mt-8 font-serif text-xl leading-snug text-navy">
                      {hiw.whyItWorks.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted">{hiw.whyItWorks.description}</p>
                    <p className={`mt-4 border-l-2 pl-4 font-serif italic leading-relaxed text-navy ${th.accentBorder}`}>
                      {hiw.whyItWorks.conclusion}
                    </p>

                    <a
                      href={guidedSignup ?? guidedSignupFallback ?? links.calendly}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-8 inline-flex items-center justify-center gap-2 self-start rounded-full px-6 py-3 font-semibold transition-opacity hover:opacity-90 ${th.accentBg} ${th.onAccent}`}
                    >
                      {language === "fr" ? fm.guided.ctaFr : fm.guided.ctaEn}
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      <span className="sr-only">({all.common.newTab})</span>
                    </a>
                  </DialogContent>
                </Dialog>
              </div>
            </article>

            {/* --- On-site workshop --- */}
            {/* Kept navy on both pages: it is the "deep end" of the ladder, and
                navy + orange type reads well against either hero colour. */}
            <article className="flex h-full flex-col rounded-2xl border border-line bg-navy p-7 text-white">
              <header>
                <div className="flex items-center gap-2 text-orange">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-wider">{fm.progression[2]}</span>
                </div>
                <h3 className="mt-4 font-serif text-2xl text-white">{t.onsiteLabel}</h3>
              </header>

              <p className="mt-6 leading-relaxed text-white/75">{t.onsiteDesc}</p>

              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  {os.includesTitle}
                </h4>
                <ul className="mt-3 flex flex-col gap-2">
                  {("onsiteIncludes" in t ? t.onsiteIncludes : os.includes).map((inc) => (
                    <li key={inc} className="flex items-start gap-2.5 text-sm text-white/85">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-orange" aria-hidden="true" />
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6">
                <p className="font-serif text-2xl text-white">{cfg.onsite.price[language]}</p>
                <p className="mb-3 text-xs text-white/55">{cfg.onsite.priceNote[language]}</p>
                <a
                  href={cfg.onsite.cta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  {fm.onsite.cta}
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">({all.common.newTab})</span>
                </a>

                {/* Full on-site day detail, moved into a dialog */}
                <Dialog>
                  <DialogTrigger className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white/80 transition-colors hover:bg-white/10 hover:text-white">
                    <Plus className="h-4 w-4" aria-hidden="true" />
                    {all.common.readMore}
                  </DialogTrigger>
                  <DialogContent className="max-h-[85vh] max-w-3xl overflow-y-auto bg-paper">
                    <DialogHeader>
                      <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${th.accentText}`}>
                        {fm.progression[2]} · {t.onsiteLabel}
                      </p>
                      <DialogTitle className="mt-2 font-serif text-2xl font-normal leading-tight text-navy md:text-3xl">
                        {osDay?.dayTitle ?? os.dayTitle}
                      </DialogTitle>
                      <DialogDescription className="mt-2 leading-relaxed text-muted">
                        {osDay ? osDay.intro[0] : t.onsiteDesc}
                      </DialogDescription>
                    </DialogHeader>

                    {/* The rest of the intro cannot sit inside DialogDescription (a <p>) */}
                    {osDay && (
                      <div className="flex flex-col gap-3">
                        {osDay.intro.slice(1).map((paragraph) => (
                          <p key={paragraph} className="leading-relaxed text-muted">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    )}

                    {/* Day timeline */}
                    <ol className="mt-6 grid gap-3 sm:grid-cols-2">
                      {(osDay?.day ?? os.day).map((phase, i) => (
                        <li key={phase.when} className="flex h-full flex-col rounded-2xl border border-line bg-white p-5">
                          <div className="flex items-center gap-2">
                            <span className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${th.accentBg} ${th.onAccent}`}>
                              {i + 1}
                            </span>
                            <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                              {phase.when}
                            </span>
                          </div>
                          <h4 className="mt-2.5 font-serif text-base leading-snug text-navy">{phase.heading}</h4>
                          <p className="mt-1.5 text-sm leading-relaxed text-muted">{phase.desc}</p>
                        </li>
                      ))}
                    </ol>

                    {/* Deliverables */}
                    <h3 className="mt-8 font-serif text-xl leading-snug text-navy">
                      {osDay?.deliverableTitle ?? os.deliverableTitle}
                    </h3>
                    <ul className="mt-4 flex flex-col gap-3">
                      {(osDay?.deliverable ?? os.deliverable).map((d) => (
                        <li key={d.heading} className="flex items-start gap-3">
                          <Check className={`mt-0.5 h-5 w-5 flex-none ${th.accentText}`} aria-hidden="true" />
                          <div>
                            <div className="font-semibold text-navy">{d.heading}</div>
                            <div className="text-sm leading-relaxed text-muted">{d.desc}</div>
                          </div>
                        </li>
                      ))}
                    </ul>

                    {/* Who it's for — the shared list is written for the Startup day only */}
                    {!osDay && (
                      <>
                        <h3 className="mt-8 font-serif text-xl leading-snug text-navy">{os.forWhoTitle}</h3>
                        <ul className="mt-4 flex flex-col gap-3">
                          {os.forWho.map((w) => (
                            <li
                              key={w.bold}
                              className="rounded-2xl border border-line bg-white p-4 text-sm leading-relaxed text-muted"
                            >
                              <strong className="font-semibold text-navy">{w.bold}</strong> {w.text}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                    <p className={`mt-5 border-l-2 pl-4 text-sm leading-relaxed text-muted ${th.accentBorder}`}>{os.note}</p>

                    <a
                      href={cfg.onsite.cta}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center justify-center gap-2 self-start rounded-full bg-navy px-6 py-3 font-semibold text-white transition-colors hover:bg-navy-deep"
                    >
                      {fm.onsite.cta}
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      <span className="sr-only">({all.common.newTab})</span>
                    </a>
                  </DialogContent>
                </Dialog>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ---------- Sales only: the software that carries the method.
                    Compass34 is not ready yet, so Startup gets a one-line notice instead. ---------- */}
      {method === "sales" && (
        <section className="border-b border-line px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-[1180px]">
            <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${th.accentText}`}>{sw.eyebrow}</p>
            <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <h2 className="max-w-2xl text-balance font-serif text-3xl font-normal leading-tight text-navy md:text-4xl lg:text-5xl">
                {sw.title}
              </h2>
              {/* The full Switch product page — problem, product, method and pricing */}
              <Link
                href="/switch"
                className="inline-flex flex-none items-center gap-2 self-start rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-navy-deep transition-colors hover:bg-orange/90 md:self-auto"
              >
                {sw.discoverCta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            {/* Reset the category before describing the product */}
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {sw.positioning.lead}{" "}
              <strong className="font-medium text-navy">{sw.positioning.emphasis}</strong>
            </p>

            {/* Each category asks a sharper question than the one above it */}
            <dl className="mt-8 flex max-w-2xl flex-col">
              {sw.ladder.map((step, i) => {
                const isLast = i === sw.ladder.length - 1
                return (
                  <div
                    key={step.name}
                    className={`flex flex-col gap-1 border-t border-line py-4 sm:flex-row sm:items-baseline sm:gap-6 ${
                      isLast ? "border-b" : ""
                    }`}
                  >
                    <dt
                      className={`text-xs font-semibold uppercase tracking-[0.14em] sm:w-[40%] sm:flex-none ${
                        isLast ? th.accentText : "text-muted"
                      }`}
                    >
                      {step.name}
                    </dt>
                    <dd
                      className={`leading-relaxed sm:flex-1 ${
                        isLast ? "font-serif text-xl leading-snug text-navy" : "text-muted"
                      }`}
                    >
                      {step.question}
                    </dd>
                  </div>
                )
              })}
            </dl>

            {/* Two audiences, the same product — read side by side */}
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
              {sw.benefits.map((group) => (
                <div key={group.audience} className="flex flex-col gap-5 bg-white p-6 md:p-8">
                  <h3 className={`text-xs font-semibold uppercase tracking-[0.18em] ${th.accentText}`}>
                    {group.audience}
                  </h3>
                  <ul className="flex flex-col gap-3.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3 leading-relaxed text-navy">
                        <Check className={`mt-1 h-4 w-4 flex-none ${th.accentText}`} aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <figure className="mt-12 flex flex-col gap-5 rounded-2xl border border-line bg-white p-6 md:p-8">
              <figcaption className="flex flex-col gap-3 md:flex-row md:items-baseline md:gap-8">
                <h3 className="text-pretty font-serif text-xl leading-snug text-navy md:w-[34%] md:flex-none">
                  {sw.video.label}
                </h3>
                <p className="max-w-2xl leading-relaxed text-muted md:flex-1">{sw.video.caption}</p>
              </figcaption>

              <div className="min-w-0 overflow-hidden rounded-xl border border-line bg-navy-deep">
                {/* Keyed by src so switching language mounts the right language's demo.
                    preload="metadata" keeps the page light: the file only loads once played. */}
                <video
                  key={sw.video.src}
                  src={sw.video.src}
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={sw.video.ariaLabel}
                  className="aspect-[16/10] h-auto w-full"
                >
                  <p className="p-4 text-sm leading-relaxed text-paper">
                    {sw.video.fallback}{" "}
                    <a href={sw.video.src} download className="underline">
                      {sw.video.fallbackCta}
                    </a>
                  </p>
                </video>
              </div>
            </figure>

            <p className={`mt-10 border-l-2 pl-4 font-serif text-xl leading-snug text-navy ${th.accentBorder}`}>
              {sw.closing}
            </p>

            {/* Pricing for the software */}
            <div className="mt-14 rounded-2xl border border-line bg-white p-8 md:p-10">
              <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${th.accentText}`}>
                {sw.pricing.eyebrow}
              </p>
              <h3 className="mt-3 font-serif text-2xl leading-tight text-navy md:text-3xl">{sw.pricing.title}</h3>

              {/* A single price, and the free trial that comes before it */}
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <div className={`flex flex-col rounded-xl border bg-paper-2 p-6 ${th.accentBorder}`}>
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted">
                    {sw.pricing.plan.label}
                  </p>
                  <p className="mt-4 flex flex-wrap items-baseline gap-2">
                    <span className="font-serif text-4xl leading-none text-navy">{sw.pricing.plan.amount}</span>
                    <span className="text-sm text-muted">{sw.pricing.plan.unit}</span>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{sw.pricing.plan.detail}</p>
                </div>

                <div className="flex flex-col rounded-xl border border-line bg-paper p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted">
                    {sw.pricing.trial.label}
                  </p>
                  <p className="mt-4 font-serif text-4xl leading-none text-navy">{sw.pricing.trial.amount}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{sw.pricing.trial.detail}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={links.switchApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-opacity hover:opacity-90 ${th.accentBg} ${th.onAccent}`}
                >
                  {sw.pricing.button}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">({all.common.newTab})</span>
                </a>
                <p className="text-sm leading-relaxed text-muted">
                  <span className="font-medium text-navy">switch34.com</span>
                  <span className="mx-2 text-line" aria-hidden="true">
                    &middot;
                  </span>
                  {sw.pricing.note}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ---------- Startup only: Compass34 is announced, nothing more ---------- */}
      {method === "startup" && (
        <section className="border-b border-line px-6 py-14 md:px-10">
          <div className="mx-auto max-w-[1180px]">
            <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${th.accentText}`}>
              {startupSw.eyebrow}
            </p>
            <p className="mt-4 max-w-2xl text-pretty font-serif text-2xl leading-snug text-navy md:text-3xl">
              {startupSw.comingSoon}
            </p>
          </div>
        </section>
      )}

      {/* ---------- Cross-sell ---------- */}
      <section className="border-t border-line bg-navy px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto flex max-w-[1180px] flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            {/* The other method's book, so the pairing is visible, not just stated */}
            {otherCover && (
              <Image
                src={otherCover}
                alt=""
                width={220}
                height={330}
                className="hidden h-auto w-[76px] flex-none rounded shadow-lg ring-1 ring-white/15 sm:block"
              />
            )}
            <div>
              <h2 className="max-w-xl font-serif text-2xl leading-snug text-white md:text-3xl">{t.crossTitle}</h2>
              <p className="mt-2 text-white/70">{t.crossBody}</p>
            </div>
          </div>
          <Link
            href={otherSlug}
            className="inline-flex flex-none items-center gap-2 rounded-full bg-orange px-6 py-3 font-semibold text-navy-deep transition-colors hover:bg-orange/90"
          >
            {t.crossCta}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ---------- Closing band: the page ends on a sentence, not a bare button ---------- */}
      <section className="border-t border-line bg-paper-2 px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[680px]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">{all.methodClose.eyebrow}</p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-normal leading-[1.1] text-navy md:text-4xl">
            {all.methodClose.title}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted">{t.closeBody}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={links.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-semibold text-white transition-colors hover:bg-navy-deep"
            >
              {all.contact.callCta}
            </a>
            {/* The free diagnostic scores the 34 elements: it exists for Startup Unlocked only. */}
            {method === "startup" && (
              <a
                href={links.freeDiagnostic[language]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 font-semibold text-navy transition-colors hover:border-orange"
              >
                {all.contact.diagnosticCta}
              </a>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
