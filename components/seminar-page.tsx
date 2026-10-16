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
    lead: string[]
    meta: string[]
    problemTitle: string
    problemLead: [string, string]
    practiceTitle: string
    questions: { title: string; body: string }[]
    outcomes: { title: string; intro: string; items: string[]; closing: string }
    audience: { title: string; groups: string[]; warning: string }
    testimonialsTitle: string
    closing: string
    cta: string
    newTab: string
  }
> = {
  fr: {
    eyebrow: "Masterclass Switch",
    title: ["La plupart des commerciaux essaient de vendre.", "C'est bien ça le problème."],
    lead: [
      "Votre travail n'est pas de convaincre quelqu'un d'acheter. C'est de comprendre ce qui le fait décider.",
      "Une journée pour repenser tout ce que vous pensiez savoir sur la vente.",
    ],
    meta: ["5 novembre", "Paris", "8 heures", "249 €"],
    problemTitle: "Trois mois de relances, de remises et de négociations qui ne mènent nulle part.",
    problemLead: [
      "Le problème, ce n'est pas votre pitch.",
      "C'est que vous avez pris de l'intérêt pour une décision d'achat.",
    ],
    practiceTitle: "Le déclic, puis la pratique.",
    questions: [
      {
        title: "Arrêtez de vendre. Commencez à comprendre.",
        body: "La plupart des commerciaux se concentrent sur ce qu'ils doivent dire ensuite. Les meilleurs se concentrent sur ce qu'ils ne savent pas encore.",
      },
      {
        title: "Votre CRM ne sait pas où en sont vos deals.",
        body: "Votre pipeline reflète ce que croient vos commerciaux. Pas forcément ce que vos prospects ont réellement décidé.",
      },
      {
        title: "Un bon commercial sait quand NE PAS vendre.",
        body: "Qualifier, ce n'est pas chercher des raisons de poursuivre un deal. C'est savoir s'il existe une vraie opportunité qui vaut la peine d'être poursuivie.",
      },
    ],
    outcomes: {
      title: "Après une journée, vous ne regarderez plus votre pipeline de la même façon.",
      intro: "Vous saurez :",
      items: [
        "Distinguer les vraies opportunités des vœux pieux.",
        "Identifier ce qui empêche réellement un prospect de décider.",
        "Arrêter de perdre du temps sur des deals que vous ne devriez pas poursuivre.",
        "Faire avancer les conversations vers des décisions, pas vers des relances sans fin.",
        "Savoir quoi demander ensuite — et pourquoi.",
      ],
      closing: "Ce n'est pas une énième technique de vente. C'est une nouvelle façon de penser.",
    },
    audience: {
      title: "Pour qui ?",
      groups: [
        "Les fondateurs qui vendent encore.",
        "Les dirigeants commerciaux qui s'interrogent sur le fonctionnement de leurs équipes.",
        "Les commerciaux fatigués de courir après des deals qui ne mènent nulle part.",
      ],
      warning: "Si vous cherchez des astuces de closing, ce n'est pas pour vous.",
    },
    testimonialsTitle: "Ils y étaient.",
    closing: "Une journée avec Pierre Gaubil. Le 5 novembre, à Paris. 249 €.",
    cta: "Je réserve ma place",
    newTab: "ouvre un nouvel onglet",
  },
  en: {
    eyebrow: "Switch Masterclass",
    title: ["Most salespeople are trying to sell.", "That's the problem."],
    lead: [
      "Your job isn't to convince someone to buy. It's to understand what makes them decide.",
      "One day to rethink everything you thought you knew about selling.",
    ],
    meta: ["November 5", "Paris", "8 hours", "€249"],
    problemTitle: "Three months of follow-ups, discounts, and negotiations that go nowhere.",
    problemLead: [
      "The problem isn't your pitch.",
      "It's that you've mistaken interest for a buying decision.",
    ],
    practiceTitle: "The click, then the practice.",
    questions: [
      {
        title: "Stop selling. Start understanding.",
        body: "Most salespeople focus on what they should say next. The best ones focus on what they still don't know.",
      },
      {
        title: "Your CRM doesn't know where your deals stand.",
        body: "Your pipeline reflects what your salespeople believe. Not necessarily what your prospects have actually decided.",
      },
      {
        title: "A good salesperson knows when NOT to sell.",
        body: "Qualifying isn't about finding reasons to pursue a deal. It's about knowing whether there's a real opportunity worth pursuing.",
      },
    ],
    outcomes: {
      title: "After one day, you won't look at your pipeline the same way.",
      intro: "You'll know how to:",
      items: [
        "Distinguish real opportunities from wishful thinking.",
        "Identify what's actually preventing a prospect from deciding.",
        "Stop wasting time on deals you shouldn't pursue.",
        "Move conversations toward decisions, not endless follow-ups.",
        "Know what to ask next — and why.",
      ],
      closing: "This isn't another sales technique. It's a new way of thinking.",
    },
    audience: {
      title: "Who should attend?",
      groups: [
        "Founders who still sell.",
        "Sales leaders who question how their teams operate.",
        "Salespeople who are tired of chasing deals that go nowhere.",
      ],
      warning: "If you're looking for closing tricks, this isn't for you.",
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
          <div className="mt-8 flex max-w-[680px] flex-col gap-4 text-lg leading-relaxed text-navy-deep md:text-xl">
            {t.lead.map((p) => (
              <p key={p} className="text-pretty">
                {p}
              </p>
            ))}
          </div>
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

      {/* ---------- The problem ---------- */}
      <section className="border-b border-line px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto flex max-w-[720px] flex-col gap-5">
          <h2 className="text-balance font-serif text-3xl font-normal leading-tight text-navy md:text-4xl">
            {t.problemTitle}
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-navy md:text-xl">
            {t.problemLead[0]} <strong className="font-semibold">{t.problemLead[1]}</strong>
          </p>
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
                key={q.title}
                className="flex items-baseline gap-5 border-t border-line py-6 last:border-b"
              >
                <span className="font-mono text-sm font-semibold text-orange" aria-hidden="true">
                  {`0${i + 1}`}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-pretty font-serif text-xl font-normal leading-snug text-navy md:text-2xl">
                    {q.title}
                  </h3>
                  <p className="text-pretty text-base leading-relaxed text-muted md:text-lg">{q.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- What you leave with ---------- */}
      <section aria-labelledby="seminar-outcomes" className="bg-navy-deep px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[900px]">
          <h2
            id="seminar-outcomes"
            className="text-balance font-serif text-2xl font-normal leading-snug text-white md:text-3xl lg:text-4xl"
          >
            {t.outcomes.title}
          </h2>
          <p className="mt-10 text-lg leading-relaxed text-white/70 md:text-xl">{t.outcomes.intro}</p>
          <ul className="mt-6 flex flex-col">
            {t.outcomes.items.map((item) => (
              <li
                key={item}
                className="flex items-baseline gap-4 border-t border-white/15 py-4 text-lg leading-relaxed text-white last:border-b md:text-xl"
              >
                <span className="text-orange" aria-hidden="true">
                  {"→"}
                </span>
                <span className="text-pretty">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-balance font-serif text-xl font-normal leading-snug text-orange md:text-2xl">
            {t.outcomes.closing}
          </p>
        </div>
      </section>

      {/* ---------- Who should attend ---------- */}
      <section aria-labelledby="seminar-audience" className="border-b border-line px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[900px]">
          <h2
            id="seminar-audience"
            className="text-balance font-serif text-3xl font-normal leading-tight text-navy md:text-4xl"
          >
            {t.audience.title}
          </h2>
          <ul className="mt-12 grid gap-8 md:grid-cols-3">
            {t.audience.groups.map((group) => (
              <li
                key={group}
                className="text-pretty border-t-2 border-navy pt-6 font-serif text-xl leading-snug text-navy md:text-2xl"
              >
                {group}
              </li>
            ))}
          </ul>
          <p className="mt-12 text-pretty border-l-2 border-orange pl-4 text-lg font-semibold leading-relaxed text-navy md:text-xl">
            {t.audience.warning}
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
