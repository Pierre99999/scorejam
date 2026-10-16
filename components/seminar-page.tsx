"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight } from "lucide-react"

/** Where a seat is reserved — Stripe payment link for the masterclass. */
const BOOKING_URL = "https://buy.stripe.com/6oU4gzcBkczT8xSgmc0co01"

type Lang = "fr" | "en"

type SeminarTestimonial = {
  name: string
  role: string
  company: string
  quote: Record<Lang, string>
}

const TESTIMONIALS: SeminarTestimonial[] = [
  {
    name: "Bruno Virieux",
    role: "CEO",
    company: "PrediSurge",
    quote: {
      fr: "Oubliez tout ce que vous pensiez savoir sur les ventes : ce que propose Pierre, c'est un reset total. Le plus impressionnant ? Tout ce que vous découvrez paraît immédiatement évident… et surtout, directement actionnable dès la sortie de la salle.",
  en: "Forget everything you thought you knew about sales: what Pierre offers is a total reset. The most impressive part? Everything you discover feels immediately obvious… and above all, directly actionable the moment you leave the room.",
  },
  },
  {
  name: "Théo Vasquez",
  role: "CEO",
  company: "Levier",
  quote: {
  fr: "Pierre a changé ma façon de voir la vente. Ça m'a débloqué !",
  en: "Pierre changed the way I see sales. It unlocked me!",
  },
  },
  {
  name: "François Moyne",
  role: "",
  company: "Woosmap",
  quote: {
  fr: "Ce n'est pas encore une énième nouvelle méthode/technique de vente. Ton approche est très pragmatique et transposable quel que soit son domaine d'activité. J'ai particulièrement apprécié ton concept de \"donnée construite\".",
  en: "This isn't yet another new sales method or technique. Your approach is very pragmatic and transferable whatever your line of business. I especially appreciated your concept of \"constructed data\".",
  },
  },
  {
  name: "François Bourghelle",
  role: "Directeur",
  company: "ARI affichage & PLV",
  quote: {
  fr: "Enfin une formation qui incite à l'action ! Une prise de recul sur nos pratiques, des échanges, une méthode et un outil à s'approprier et, dès aujourd'hui, une autre manière d'aborder les entretiens et de construire son action.",
  en: "Finally, a training that drives action! A step back from our practices, real exchanges, a method and a tool to make your own and, starting today, a different way to approach meetings and build your plan of action.",
  },
  },
  {
  name: "Elisa Passeron-Nguyen",
  role: "",
  company: "CSL Conseil",
  quote: {
  fr: "Tu nous as montré de façon magistrale comment mener une « autopsie d'un processus commercial » ! Cela n'a plus rien à voir avec une « simple » vente standard, telle que nous la connaissions depuis toujours, pour devenir plutôt de l'ingénierie commerciale.",
  en: "You masterfully showed us how to run an \"autopsy of a sales process\"! It has nothing to do anymore with a \"simple\" standard sale as we've always known it; it becomes sales engineering.",
  },
  },
  {
  name: "Eric Lenoir",
  role: "Président",
  company: "Groupe Agapé",
  quote: {
  fr: "Cette journée de transformation était vraiment décapante. Ton expérience, la singularité de ta vision et ton amour de la transmission nous ont permis de faire un sacré saut, qui rayonne déjà dans l'entreprise.",
  en: "This day of transformation was truly bracing. Your experience, the uniqueness of your vision and your love of passing on knowledge allowed us to take a huge leap, one that is already spreading across the company.",
  },
  },
]

const CONTENT: Record<
  Lang,
  {
    eyebrow: string
    title: string[]
    meta: string[]
    intro: string[]
    introEmphasis: string
    practiceTitle: string
    questions: string[]
    practice: string[]
    bring: { lead: string; strong: string }
    testimonialsTitle: string
    closing: string
    cta: string
    newTab: string
  }
> = {
  fr: {
    eyebrow: "Masterclass Switch",
    title: ["Vous allez voir la vente autrement.", "Et vendre autrement."],
    meta: ["5 novembre", "Paris", "8 heures", "249 €"],
    intro: [
      "J'ai formé des dizaines et des dizaines d'entreprises à la discipline Switch. J'en ai écrit un livre. J'en ai fait un logiciel.",
      "Et les retours sont forts : des cycles de vente raccourcis de manière drastique. Certains participants me rapportent qu'ils signent 100 % des prospects auprès desquels ils choisissent de s'engager.",
      "Ce qui revient surtout, c'est ceci : une façon de voir la vente radicalement différente. Simple à comprendre une fois qu'on l'a vue.",
    ],
    introEmphasis: "Et qui change tout.",
    practiceTitle: "Le déclic, puis la pratique.",
    questions: [
      "Pourquoi un prospect intéressé n'achète-t-il pas ?",
      "Qu'est-ce qui fait réellement avancer une décision ?",
      "Quand faut-il s'engager dans une vente — et quand faut-il arrêter ?",
    ],
    practice: [
      "Pendant une journée, je vous forme à Switch, une discipline pour construire des décisions d'achat.",
      "On la décortique. On travaille sur vos ventes. Et on met en place votre première utilisation de Switch.",
    ],
    bring: {
      lead: "Venez avec une opportunité commerciale. Repartez avec ",
      strong: "une autre lecture de la situation et les prochaines actions à mener.",
    },
    testimonialsTitle: "Ils y étaient.",
    closing: "Une journée avec Pierre Gaubil. Le 5 novembre, à Paris. 249 €.",
    cta: "Je réserve ma place",
    newTab: "ouvre un nouvel onglet",
  },
  en: {
    eyebrow: "Switch Masterclass",
    title: ["You'll see selling differently.", "And sell differently."],
    meta: ["November 5", "Paris", "8 hours", "€249"],
    intro: [
      "I've trained dozens upon dozens of companies in the Switch discipline. I wrote a book about it. I built software for it.",
      "And the feedback is strong: sales cycles cut down drastically. Some participants tell me they close 100% of the prospects they choose to commit to.",
      "What comes up most is this: a radically different way of seeing selling. Simple to grasp once you've seen it.",
    ],
    introEmphasis: "And it changes everything.",
    practiceTitle: "The click, then the practice.",
    questions: [
      "Why doesn't an interested prospect buy?",
      "What actually moves a decision forward?",
      "When should you commit to a sale — and when should you stop?",
    ],
    practice: [
      "For a full day, I train you in Switch, a discipline for building buying decisions.",
      "We take it apart. We work on your own deals. And we set up your first use of Switch.",
    ],
    bring: {
      lead: "Come with a live opportunity. Leave with ",
      strong: "a different reading of the situation and the next actions to take.",
    },
    testimonialsTitle: "They were there.",
    closing: "A day with Pierre Gaubil. November 5, in Paris. €249.",
    cta: "Book my place",
    newTab: "opens a new tab",
  },
}

export function SeminarPage() {
  const { language } = useLanguage()
  const t = CONTENT[language]

  const ReserveButton = ({ className = "" }: { className?: string }) => (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-base font-semibold text-white transition-transform hover:-translate-y-0.5 ${className}`}
    >
      {t.cta}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
      <span className="sr-only">({t.newTab})</span>
    </a>
  )

  return (
    <div className="min-h-screen bg-paper">
      <SiteHeader />

      {/* ---------- Hero: the promise, then the practical facts ---------- */}
      <section className="border-b border-line bg-orange px-6 py-20 text-navy-deep md:px-10 md:py-28">
        <div className="mx-auto max-w-[900px]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-deep/70">{t.eyebrow}</p>
          <h1 className="mt-6 font-serif text-4xl font-normal leading-[1.05] md:text-5xl lg:text-6xl">
            {t.title.map((line, i) => (
              <span key={line} className={`block text-balance ${i === t.title.length - 1 ? "text-white" : ""}`}>
                {line}
              </span>
            ))}
          </h1>
          <ul className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium uppercase tracking-[0.12em] text-navy-deep/80">
            {t.meta.map((item, i) => (
              <li key={item} className="flex items-center gap-4">
                {i > 0 && (
                  <span aria-hidden="true" className="text-navy-deep/40">
                    ·
                  </span>
                )}
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <ReserveButton />
          </div>
        </div>
      </section>

      {/* ---------- The credibility and the results ---------- */}
      <section className="border-b border-line px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[720px]">
          <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted md:text-xl">
            {t.intro.map((p) => (
              <p key={p} className="text-pretty">
                {p}
              </p>
            ))}
            <p className="text-pretty font-serif text-2xl leading-snug text-navy md:text-3xl">{t.introEmphasis}</p>
          </div>
        </div>
      </section>

      {/* ---------- The click: the three questions are the signature element ---------- */}
      <section className="border-b border-line px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[900px]">
          <h2 className="text-balance font-serif text-3xl font-normal leading-tight text-navy md:text-4xl">
            {t.practiceTitle}
          </h2>
          <ul className="mt-12 flex flex-col">
            {t.questions.map((q, i) => (
              <li
                key={q}
                className="flex items-baseline gap-5 border-t border-line py-6 last:border-b"
              >
                <span className="font-mono text-sm font-semibold text-orange" aria-hidden="true">
                  {`0${i + 1}`}
                </span>
                <p className="text-pretty font-serif text-xl leading-snug text-navy md:text-2xl">{q}</p>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex max-w-[720px] flex-col gap-6 text-lg leading-relaxed text-muted md:text-xl">
            {t.practice.map((p) => (
              <p key={p} className="text-pretty">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Come with a deal, leave with a plan ---------- */}
      <section className="bg-navy-deep px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[900px]">
          <p className="text-balance font-serif text-2xl font-normal leading-snug text-white md:text-3xl lg:text-4xl">
            {t.bring.lead}
            <span className="text-orange">{t.bring.strong}</span>
          </p>
        </div>
      </section>

      {/* ---------- Testimonials ---------- */}
      <section aria-labelledby="seminar-testimonials" className="border-b border-line px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[900px]">
          <h2
            id="seminar-testimonials"
            className="text-balance font-serif text-3xl font-normal leading-tight text-navy md:text-4xl"
          >
            {t.testimonialsTitle}
          </h2>
          <ul className={`mt-12 grid gap-12 ${TESTIMONIALS.length > 1 ? "md:grid-cols-2" : ""}`}>
            {TESTIMONIALS.map((item) => (
              <li key={item.name}>
                <figure className="flex flex-col gap-6 border-t-2 border-orange pt-8">
                  <blockquote className="text-pretty font-serif text-xl leading-snug text-navy md:text-2xl">
                    <p>{`« ${item.quote[language]} »`}</p>
                  </blockquote>
                  <figcaption className="text-sm leading-relaxed text-muted">
                    <span className="font-semibold uppercase tracking-[0.12em] text-navy">{item.name}</span>
                    <span>{` — ${[item.role, item.company].filter(Boolean).join(", ")}`}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Closing call to action ---------- */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto flex max-w-[900px] flex-col items-start gap-8">
          <p className="text-balance font-serif text-2xl font-normal leading-snug text-navy md:text-3xl">
            {t.closing}
          </p>
          <ReserveButton />
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
