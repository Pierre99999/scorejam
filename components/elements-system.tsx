"use client"

import { Zap } from "lucide-react"
import { startupSystem, type MethodTheme } from "@/lib/site-content"

type Language = "en" | "fr"

type SystemCopy = {
  title: string
  highlight: string
  lead: { start: string; strong: string; end: string }
  componentWord: string
  componentWordPlural: string
  elementWord: string
  elementWordPlural: string
  orderTitle: string
  orderLead: string
}

/**
 * The 34 elements laid out as the periodic-table style system the brand is named
 * after: a stats band, then one row per component with its numbered elements.
 */
export function ElementsSystem({
  copy,
  eyebrow,
  language,
  theme,
}: {
  copy: SystemCopy
  eyebrow: string
  language: Language
  theme: MethodTheme
}) {
  return (
    <>
      <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${theme.accentText}`}>{eyebrow}</p>
      <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-navy md:text-4xl lg:text-5xl">
        <span className="block text-balance">{copy.title}</span>
        <span className="block text-balance">{copy.highlight}</span>
      </h2>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        {copy.lead.start}
        <strong className="font-semibold text-navy">{copy.lead.strong}</strong>
        {copy.lead.end}
      </p>

      {/* Stats band */}
      <dl className="mt-10 flex flex-col overflow-hidden rounded-xl bg-navy sm:flex-row">
        {startupSystem.stats.map((stat, i) => (
          <div
            key={stat.label.en}
            className={`flex flex-1 flex-col items-center gap-1 px-4 py-6 ${
              i > 0 ? "border-t border-white/15 sm:border-l sm:border-t-0" : ""
            }`}
          >
            <dt className="sr-only">{stat.label[language]}</dt>
            <dd className="flex flex-col items-center gap-1">
              <span
                className={`font-serif text-3xl font-semibold leading-none ${
                  stat.highlight ? "text-orange" : "text-white"
                }`}
              >
                {stat.value}
              </span>
              <span className="flex items-center gap-1 text-center text-[11px] font-semibold uppercase tracking-wider text-white/70">
                {stat.label[language]}
                {stat.highlight && i > 0 && <Zap className="h-3 w-3 text-orange" aria-hidden="true" />}
              </span>
            </dd>
          </div>
        ))}
      </dl>

      {/* The ordered system */}
      <div className="mt-16">
        <h3 className="font-serif text-2xl leading-snug text-navy md:text-3xl">{copy.orderTitle}</h3>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted">{copy.orderLead}</p>
      </div>

      <ol className="mt-8 flex flex-col gap-3">
        {startupSystem.components.map((component) => (
          <li
            key={component.index}
            className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5 transition-shadow hover:shadow-md sm:gap-6 sm:p-6"
          >
            <div className="min-w-0 flex-1">
              <p className={`text-[11px] font-semibold uppercase tracking-wider ${theme.accentText}`}>
                {component.plural ? copy.componentWordPlural : copy.componentWord} {component.index} ·{" "}
                {component.label}
              </p>
              <p className="mt-1.5 font-serif text-lg font-medium text-navy">{component.title[language]}</p>
              <p className="mt-1 text-sm italic leading-relaxed text-muted">
                {"« "}
                {component.question[language]}
                {" »"}
              </p>
            </div>

            <div className="flex flex-none items-center gap-2">
              <span
                className={`flex h-9 w-9 flex-none items-center justify-center rounded-full font-serif text-base font-semibold text-white ${theme.accentBg}`}
              >
                {component.elements.length}
              </span>
              <span className="text-sm font-medium text-muted">
                {component.elements.length > 1 ? copy.elementWordPlural : copy.elementWord}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </>
  )
}
