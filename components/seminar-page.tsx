"use client"

import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight, ChevronDown } from "lucide-react"

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
  {
  name: "Sébastien Cuisinier",
  role: "Directeur Commercial",
  company: "MDO",
  quote: {
  fr: "Pendant mes études, j'avais été particulièrement marqué par la notion de « myopie du décideur ». Avec Pierre Gaubil, j'ai découvert la myopie du vendeur ! À force d'être éblouis par les méthodes de vente apprises depuis des années, hypnotisés par nos funnels et CRM à renseigner, nous perdons de vue l'essentiel. Cette journée m'a permis de retrouver une vision plus claire de mon métier.",
  en: "During my studies, I was particularly struck by the notion of \"decision-maker myopia\". With Pierre Gaubil, I discovered salesperson myopia! Dazzled by the sales methods we've learned for years, hypnotized by our funnels and the CRMs we have to fill in, we lose sight of what matters. This day gave me back a clearer vision of my job.",
  },
  },
  {
  name: "Benoit Bernard",
  role: "Directeur",
  company: "Poitou Décort",
  quote: {
  fr: "Partir ou rester ! Notre temps est précieux. Merci Pierre de nous avoir bousculés dans nos certitudes et de nous permettre, dès aujourd'hui, d'être plus efficients et efficaces dans notre activité commerciale. Une expérience et une expertise incisives qui nous transforment après seulement une petite journée.",
  en: "Walk away or stay! Our time is precious. Thank you, Pierre, for shaking up our certainties and for enabling us, starting today, to be more efficient and effective in our sales activity. Incisive experience and expertise that transform us after just one short day.",
  },
  },
  {
  name: "Nadège Kaci",
  role: "COO",
  company: "Tonton Gégé",
  quote: {
  fr: "Je suis venue chercher un déclic. Pierre me l'a apporté à 1 000 %. Une phrase m'a particulièrement arrêtée : « Les problèmes d'entreprise justifient une décision, les douleurs humaines la déclenchent. »\n\nJe pensais qu'il me manquait le bon argumentaire, la bonne approche commerciale. En réalité, il me manquait aussi une grille de lecture : celle qui permet de dépasser le problème exprimé pour comprendre la douleur profonde qui pousse réellement un client à agir. C'est toute la différence.\n\nUne journée dense, sans filtre, qui pousse à remettre en question ses certitudes et surtout à regarder sa stratégie commerciale avec beaucoup plus de lucidité.\n\nSi vous vendez en B2B et que vos opportunités avancent, discutent, mûrissent… mais ne se concluent jamais, cette masterclass mérite votre attention. Elle vous aidera peut-être à arrêter de vous raconter des histoires sur votre stratégie commerciale et à revenir à l'essentiel : comprendre ce qui déclenche réellement la décision avec les bonnes conversations.\n\nMerci pour la qualité de la journée et le format petit groupe.",
  en: "I came looking for a breakthrough. Pierre delivered it 1,000%. One sentence really stopped me: \"Business problems justify a decision; human pain triggers it.\"\n\nI thought I was missing the right pitch, the right sales approach. In reality, I was also missing a reading grid: one that lets you look past the stated problem to understand the deep pain that actually drives a client to act. That makes all the difference.\n\nA dense, unfiltered day that pushes you to question your certainties and, above all, to look at your sales strategy with much more clarity.\n\nIf you sell B2B and your opportunities move forward, get discussed, mature… but never close, this masterclass deserves your attention. It may help you stop telling yourself stories about your sales strategy and get back to what matters: understanding what really triggers the decision, through the right conversations.\n\nThank you for the quality of the day and the small-group format.",
  },
  },
  {
  name: "François-Xavier Bravo",
  role: "Coach agile",
  company: "",
  quote: {
  fr: "Merci encore Pierre pour cette journée qui a été riche en enseignements et en recadrages de croyances (spoiler alert : on ne fait JAMAIS de démo produit en premier !). Mon conseil pour ceux qui vont me lire : arrêtez de perdre du temps et allez écouter Pierre ! Ses enseignements vous apporteront une valeur inestimable !",
  en: "Thanks again, Pierre, for a day rich in lessons and in reframed beliefs (spoiler alert: you NEVER lead with a product demo!). My advice to anyone reading this: stop wasting time and go listen to Pierre! His teachings will bring you invaluable value!",
  },
  },
  {
  name: "Rémy Deloffre",
  role: "Transformational CFO",
  company: "",
  quote: {
  fr: "Merci pour cette journée riche en transmission, on sent une méthode de vente vécue, revisitée, et transmise avec conviction. Je recommande vivement !!!",
  en: "Thank you for a day so rich in knowledge-sharing. You can feel a sales method that has been lived, revisited, and passed on with conviction. I highly recommend it!!!",
  },
  },
]

const VISIBLE_TESTIMONIALS = 4
const LONG_QUOTE_LENGTH = 400

function SeminarTestimonials({
  language,
  showAllLabel,
  showLessLabel,
}: {
  language: Lang
  showAllLabel: string
  showLessLabel: string
}) {
  const [expanded, setExpanded] = useState(false)
  const hiddenCount = TESTIMONIALS.length - VISIBLE_TESTIMONIALS
  const visible = expanded ? TESTIMONIALS : TESTIMONIALS.slice(0, VISIBLE_TESTIMONIALS)

  return (
    <>
      <ul id="seminar-testimonials-list" className="mt-12 grid gap-12 md:grid-cols-2">
        {visible.map((item, index) => {
          const paragraphs = item.quote[language].split("\n\n")
          const isLong = item.quote[language].length > LONG_QUOTE_LENGTH
          const attribution = [item.role, item.company].filter(Boolean).join(", ")
          return (
            <li key={item.name || index} className={isLong ? "md:col-span-2" : undefined}>
              <figure className="flex flex-col gap-6 border-t-2 border-orange pt-8">
                <blockquote
                  className={`flex flex-col gap-4 text-pretty font-serif text-navy ${
                    isLong ? "text-lg leading-relaxed md:text-xl" : "text-xl leading-snug md:text-2xl"
                  }`}
                >
                  {paragraphs.map((paragraph, i) => (
                    <p key={i}>
                      {i === 0 ? "« " : ""}
                      {paragraph}
                      {i === paragraphs.length - 1 ? " »" : ""}
                    </p>
                  ))}
                </blockquote>
                {item.name ? (
                  <figcaption className="text-sm leading-relaxed text-muted">
                    <span className="font-semibold uppercase tracking-[0.12em] text-navy">{item.name}</span>
                    {attribution ? <span>{` — ${attribution}`}</span> : null}
                  </figcaption>
                ) : null}
              </figure>
            </li>
          )
        })}
      </ul>
      {hiddenCount > 0 ? (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          aria-controls="seminar-testimonials-list"
          className="mt-12 inline-flex items-center gap-2 border-b-2 border-orange pb-1 text-sm font-semibold uppercase tracking-[0.12em] text-navy transition-colors hover:text-orange"
        >
          {expanded ? showLessLabel : `${showAllLabel} (${hiddenCount})`}
          <ChevronDown aria-hidden="true" className={`size-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      ) : null}
    </>
  )
}

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
    blockers: {
      title: string
      lead: string
      headers: [string, string]
      rows: [string, string][]
    }
    testimonialsTitle: string
    testimonialsShowAll: string
    testimonialsShowLess: string
    closingTitle: string
    closingLead: string
    closing: string
    cta: string
    newTab: string
    guaranteeTitle: string
    guarantee: string
  }
> = {
  fr: {
    eyebrow: "Masterclass Switch",
    title: ["La plupart des commerciaux essaient de vendre.", "C'est bien ça le problème."],
    lead: [
      "Votre travail n'est pas de convaincre quelqu'un d'acheter. C'est de comprendre ce qui le fait décider.",
      "Une journée pour repenser tout ce que vous pensiez savoir sur la vente.",
    ],
    meta: ["2 décembre", "Paris", "8 heures", "249 €"],
  problemTitle: "Vous ne perdez pas vos ventes au moment où vos prospects disent non.",
  problemLead: [
  "Vous les perdez bien avant. Lorsque vous prenez leurs déclarations pour des décisions, leurs intérêts pour des intentions et vos hypothèses pour des faits.",
  "Et vous ne le savez même pas.",
  ],
    practiceTitle: "Trois convictions qui changent tout.",
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
    blockers: {
      title: "Vos ventes bloquent. Apprenez à comprendre pourquoi.",
      lead: "Pendant cette journée, vous apprendrez à lire autrement vos opportunités pour savoir quoi approfondir, comment avancer et quand renoncer.",
      headers: ["Ce que vous apprendrez", "Le problème que vous résolvez"],
      rows: [
        ["Distinguer les faits des suppositions", "Arrêter de perdre des deals qu'on croyait gagnés"],
        ["Comprendre les décisions", "Réduire les cycles de vente interminables"],
        ["Qualifier radicalement", "Ne plus perdre de temps avec les mauvais prospects"],
        ["Construire de l'impact", "Réduire la pression sur les remises"],
        ["Savoir renoncer", "Concentrer les commerciaux sur les bonnes opportunités"],
      ],
    },
    testimonialsTitle: "Ils y étaient.",
    testimonialsShowAll: "Voir tous les témoignages",
    testimonialsShowLess: "Réduire",
    closingTitle: "Et si vous arrêtiez enfin de courir après vos prospects ?",
    closingLead: "Une journée pour changer définitivement votre manière d'aborder la vente.",
    closing: "Une journée avec Pierre Gaubil. Le 2 décembre, à Paris. 249 €.",
    cta: "Je réserve ma place",
    newTab: "ouvre un nouvel onglet",
    guaranteeTitle: "Satisfait ou remboursé",
    guarantee:
      "Je crois tellement à ce séminaire que si vous n'êtes pas satisfait, je vous rembourse la journée.",
  },
  en: {
    eyebrow: "Switch Masterclass",
    title: ["Most salespeople are trying to sell.", "That's the problem."],
    lead: [
      "Your job isn't to convince someone to buy. It's to understand what makes them decide.",
      "One day to rethink everything you thought you knew about selling.",
    ],
    meta: ["December 2", "Paris", "8 hours", "€249"],
  problemTitle: "You don't lose your deals when your prospects say no.",
  problemLead: [
  "You lose them long before. When you take their statements for decisions, their interest for intent, and your assumptions for facts.",
  "And you don't even know it.",
  ],
    practiceTitle: "Three convictions that change everything.",
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
    blockers: {
      title: "Your deals are stuck. Learn to understand why.",
      lead: "During this day, you'll learn to read your opportunities differently, so you know what to dig into, how to move forward, and when to walk away.",
      headers: ["What you'll learn", "The problem it solves"],
      rows: [
        ["Separate facts from assumptions", "Stop losing deals you thought you'd won"],
        ["Understand decisions", "Shorten never-ending sales cycles"],
        ["Qualify radically", "Stop wasting time on the wrong prospects"],
        ["Build impact", "Reduce pressure on discounts"],
        ["Know when to walk away", "Focus salespeople on the right opportunities"],
      ],
    },
    testimonialsTitle: "They were there.",
    testimonialsShowAll: "See all testimonials",
    testimonialsShowLess: "Show less",
    closingTitle: "What if you finally stopped chasing your prospects?",
    closingLead: "One day to permanently change the way you approach selling.",
    closing: "A day with Pierre Gaubil. December 2, in Paris. €249.",
    cta: "Book my place",
    newTab: "opens a new tab",
    guaranteeTitle: "Satisfied or refunded",
    guarantee:
      "I believe in this seminar so much that if you're not satisfied, I'll refund the day.",
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

      {/* ---------- Why deals get stuck: skill → problem solved ---------- */}
      <section aria-labelledby="seminar-blockers" className="border-b border-line px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[900px]">
          <h2
            id="seminar-blockers"
            className="text-balance font-serif text-3xl font-normal leading-tight text-navy md:text-4xl"
          >
            {t.blockers.title}
          </h2>
          <p className="mt-5 max-w-[720px] text-pretty text-lg leading-relaxed text-muted md:text-xl">
            {t.blockers.lead}
          </p>
          <table className="mt-12 w-full table-fixed border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-navy">
                {t.blockers.headers.map((header) => (
                  <th
                    key={header}
                    scope="col"
                    className="pb-4 pr-4 align-bottom text-xs font-semibold uppercase tracking-[0.16em] text-navy md:text-sm"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.blockers.rows.map(([skill, problem]) => (
                <tr key={skill} className="border-b border-line">
                  <th
                    scope="row"
                    className="py-5 pr-4 align-top text-pretty font-serif text-lg font-normal leading-snug text-navy md:text-2xl"
                  >
                    {skill}
                  </th>
                  <td className="py-5 align-top text-pretty text-base leading-relaxed text-muted md:text-lg">
                    {problem}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
          <SeminarTestimonials
            language={language}
            showAllLabel={t.testimonialsShowAll}
            showLessLabel={t.testimonialsShowLess}
          />
        </div>
      </section>

      {/* ---------- Closing call to action ---------- */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto flex max-w-[900px] flex-col items-start gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-balance font-serif text-3xl font-normal leading-tight text-navy md:text-5xl">
              {t.closingTitle}
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-navy/80 md:text-xl">
              {t.closingLead}
            </p>
          </div>
          <p className="text-balance font-serif text-2xl font-normal leading-snug text-navy md:text-3xl">
            {t.closing}
          </p>
          <ReserveButton />
          <div className="flex max-w-[640px] flex-col gap-2 border-t border-navy/15 pt-6">
            <p className="font-serif text-xl font-normal text-navy">{t.guaranteeTitle}</p>
            <p className="text-pretty text-base leading-relaxed text-navy/80">{t.guarantee}</p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
