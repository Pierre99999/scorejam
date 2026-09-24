"use client"

import { useMemo, useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { testimonials } from "@/lib/testimonials"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Quote } from "lucide-react"

export default function TestimonialsPage() {
  const { language } = useLanguage()
  const t = translations[language].testimonialsPage

  const [program, setProgram] = useState<"all" | "startup" | "sales">("all")
  const [cohort, setCohort] = useState<"all" | string>("all")

  // Unique numeric cohorts sorted ascending
  const cohorts = useMemo(() => {
    const nums = Array.from(
      new Set(testimonials.map((item) => item.cohort).filter((c) => Boolean(c) && /^\d+$/.test(c))),
    )
    return nums.sort((a, b) => Number(a) - Number(b))
  }, [])

  // Apply filters
  const filtered = useMemo(() => {
    return testimonials.filter((testimony) => {
      const programOk =
        program === "all" ||
        (program === "startup" && testimony.program === "Startup Unlocked") ||
        (program === "sales" && testimony.program === "Sales Unlocked")

      const cohortOk = cohort === "all" || testimony.cohort === cohort
      return programOk && cohortOk
    })
  }, [program, cohort])

  return (
    <div className="min-h-screen bg-paper">
      <SiteHeader />

      {/* Hero — left-aligned with an eyebrow, like every other page on the site.
          The count sits on the right so the navy band is not half empty. */}
      <section className="border-b border-line bg-navy px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1.4fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">{t.hero.eyebrow}</p>
            <h1 className="mt-5 max-w-2xl text-balance font-serif text-4xl font-normal leading-[1.08] text-white md:text-5xl">
              {t.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/75">{t.hero.subtitle}</p>
          </div>

          <p className="flex items-baseline gap-3 border-t border-white/20 pt-5 lg:flex-col lg:items-start lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <span className="font-serif text-5xl leading-none text-orange md:text-6xl">{testimonials.length}</span>
            <span className="text-sm uppercase tracking-[0.14em] text-white/60">{t.testimonialsText}</span>
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 pb-20 pt-14 md:px-10 md:pt-16">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-4 grid gap-3 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="program" className="text-navy">
                {t.filters.program}
              </Label>
              <Select value={program} onValueChange={(v) => setProgram(v as typeof program)}>
                <SelectTrigger id="program" className="w-full border-line bg-white">
                  <SelectValue placeholder={t.filters.program} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t.filters.all}</SelectItem>
                  <SelectItem value="startup">Startup Unlocked</SelectItem>
                  <SelectItem value="sales">Sales Unlocked</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="cohort" className="text-navy">
                {t.filters.cohort}
              </Label>
              <Select value={cohort} onValueChange={(v) => setCohort(v as typeof cohort)}>
                <SelectTrigger id="cohort" className="w-full border-line bg-white">
                  <SelectValue placeholder={t.filters.cohort} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t.filters.allCohorts}</SelectItem>
                  {cohorts.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mb-4 text-sm text-muted">
            {t.showing} {filtered.length} {t.of} {testimonials.length} {t.testimonialsText}
          </div>

          {/* Masonry columns: cards keep their natural height, so short quotes
              no longer leave a tall empty gap under them. */}
          <div className="[column-gap:1.5rem] md:columns-2 lg:columns-3">
            {filtered.map((testimony, idx) => (
              <article
                key={`${testimony.name}-${idx}`}
                className="mb-6 break-inside-avoid rounded-2xl border border-line bg-white p-6 transition-all hover:border-orange hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center gap-2">
                    {testimony.program ? (
                      <span className="inline-flex items-center rounded-full bg-navy px-2.5 py-0.5 text-[10px] font-semibold text-white">
                        {testimony.program}
                      </span>
                    ) : null}
                    {testimony.cohort ? (
                      <span className="inline-flex items-center rounded-full border border-line bg-paper-2 px-2.5 py-0.5 text-[10px] font-semibold text-navy">
                        {`${t.cohortLabel} ${testimony.cohort}`}
                      </span>
                    ) : null}
                  </div>
                  <Quote className="mt-4 h-6 w-6 text-orange" aria-hidden="true" />
                  <p className="mt-3 whitespace-pre-line leading-relaxed text-navy">{testimony.text[language]}</p>
                </div>

                <div className="mt-6 border-t border-line pt-4">
                  <div className="truncate font-semibold text-navy">{testimony.name}</div>
                  <div className="truncate text-sm text-muted">
                    {[testimony.role, testimony.company].filter(Boolean).join(" — ")}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
