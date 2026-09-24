"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight, Check } from "lucide-react"

const SIGNUP_URL = "https://www.switch34.com/signup"

/** Real product screenshots, in the reader's language. */
const SHOTS = {
  playbook: { fr: { w: 1066, h: 1362 }, en: { w: 1000, h: 1294 } },
  read: { fr: { w: 1286, h: 780 }, en: { w: 1258, h: 838 } },
  conversation: { fr: { w: 620, h: 140 }, en: { w: 566, h: 132 } },
  deals: { fr: { w: 2240, h: 1208 }, en: { w: 2212, h: 1212 } },
  briefing: { fr: { w: 1036, h: 494 }, en: { w: 912, h: 420 } },
} as const

type Lang = "fr" | "en"

const CONTENT: Record<
  Lang,
  {
    cta: string
    noCard: string
    newTab: string
    hero: { eyebrow: string; title: string; description: string; benefit: string; shotAlt: string }
    problem: { title: string; text: string; strong: string }
    how: {
      title: string
      steps: { n: string; label: string; body: string; shot: keyof typeof SHOTS; alt: string }[]
    }
    value: { title: string; lead: string; shotAlt: string; annotations: { title: string; body: string }[] }
    audiences: {
      title: string
      columns: { title: string; items: string[] }[]
    quote: string
    attribution?: string
  }
    method: { title: string; text: string; doors: string[]; crossLabel: string; cross: string; signature: string }
    pricing: { title: string; price: string; unit: string; details: string[] }
    final: { title: string; text: string }
  }
> = {
  fr: {
    cta: "Essayer Switch gratuitement",
    noCard: "Sans carte bancaire.",
    newTab: "ouvre un nouvel onglet",
    hero: {
      eyebrow: "SWITCH · VENTES COMPLEXES B2B",
      title: "Pour que vendre cesse d'être un pari.",
      description:
        "Switch analyse vos conversations clients à partir de votre playbook commercial. Il distingue ce que le client a confirmé de ce que vous supposez encore — et vous aide à préparer la prochaine conversation.",
      benefit: "Sachez où en est chaque deal. Et quoi faire ensuite.",
      shotAlt: "Analyse d'un deal dans Switch : ce qui est établi, ce qui manque, la prochaine action.",
    },
    problem: {
      title: "Un bon rendez-vous. Mais le deal a-t-il avancé ?",
      text: "Un client intéressé n'a pas encore décidé.",
      strong: "Switch vous montre ce qui est établi, ce qui manque et ce qu'il faut clarifier.",
    },
    how: {
      title: "Vos conversations. Votre playbook. La prochaine action.",
      steps: [
        {
          n: "01",
          label: "Partagez votre savoir-faire",
          body: "Renseignez votre playbook : votre offre, vos clients, ce qui vous fait gagner ou perdre.",
          shot: "playbook",
          alt: "Le playbook commercial renseigné dans Switch.",
        },
        {
          n: "02",
          label: "Ajoutez une conversation",
          body: "Déposez le compte rendu. Switch fait ressortir les preuves, les hypothèses et les points manquants.",
          shot: "conversation",
          alt: "Le briefing du round 2 est prêt : importez la conversation, puis lisez le briefing.",
        },
        {
          n: "03",
          label: "Préparez la suivante",
          body: "Un briefing vous aide à savoir quoi approfondir, quoi confirmer et quelles questions poser.",
          shot: "briefing",
          alt: "Le briefing de préparation du prochain rendez-vous dans Switch.",
        },
      ],
    },
    value: {
      title: "Chaque deal, plus clair.",
      lead: "Une lecture de la conversation, pas un résumé.",
      shotAlt: "Analyse détaillée d'un deal dans Switch.",
      annotations: [
        { title: "Ce qui est établi", body: "Ce que le client a confirmé et sur quoi l'analyse repose." },
        { title: "Ce qui manque", body: "Les hypothèses à vérifier et les questions encore ouvertes." },
        { title: "Ce qui change", body: "Ce qui renforce ou fragilise le deal au fil des conversations." },
        { title: "La prochaine action", body: "Ce que le prochain rendez-vous doit permettre d'établir." },
      ],
    },
    audiences: {
      title: "Pour ceux qui vendent. Et ceux qui les accompagnent.",
      columns: [
        {
          title: "Vous vendez",
          items: [
            "Abordez chaque rendez-vous avec une direction claire.",
            "Voyez ce qui vous a échappé.",
            "Challengez vos impressions.",
            "Préparez les bonnes questions.",
          ],
        },
        {
          title: "Vous dirigez les ventes",
          items: [
            "Appuyez vos revues de deals sur des preuves.",
            "Repérez plus tôt les points de fragilité.",
            "Concentrez votre coaching là où il compte.",
            "Faites vivre votre playbook au quotidien.",
          ],
        },
      ],
      quote: "C'est comme si j'avais quelqu'un avec moi sur chaque deal.",
    },
    method: {
      title: "Votre savoir-faire, appliqué à chaque conversation.",
      text: "Gardez votre méthode : SPIN, MEDDIC, Challenger ou votre propre approche. Switch associe votre playbook à la discipline Sales Unlocked.",
      doors: ["Dois-je rester ?", "Puis-je gagner ?", "Y a-t-il un impact suffisant ?"],
      crossLabel: "À travers les trois",
      cross: "La décision avance-t-elle réellement ?",
      signature:
        "Le compagnon logiciel de la méthode de Pierre Gaubil, auteur de « Pourquoi les meilleurs vendeurs ne vendent pas ».",
    },
    pricing: {
      title: "Un seul prix. Tous vos deals.",
      price: "49,99 € HT",
      unit: "par utilisateur et par mois",
      details: ["Toutes les fonctionnalités incluses.", "Facturation mensuelle. Résiliable à tout moment."],
    },
    final: {
      title: "Faites le point sur un vrai deal.",
      text: "Commencez avec une conversation client. Découvrez ce qui est établi — et ce que la suivante doit clarifier.",
    },
  },
  en: {
    cta: "Try Switch for free",
    noCard: "No credit card required.",
    newTab: "opens in a new tab",
    hero: {
      eyebrow: "SWITCH · COMPLEX B2B SALES",
      title: "You think you know where your deals stand. Most of the time, you're guessing.",
      description:
        "Switch reads your customer conversations and separates what you know from what you assume.",
      benefit: "Know which deals are real. What's missing. And what to do next.",
      shotAlt: "A deal analysis in Switch: what's established, what's missing, the next action.",
    },
    problem: {
      title: "A good meeting. But did the deal move forward?",
      text: "An interested customer hasn't decided yet.",
      strong: "Switch shows you what's established, what's missing, and what needs clarifying.",
    },
    how: {
      title: "Your conversations. Your playbook. The next action.",
      steps: [
        {
          n: "01",
          label: "Share your know-how",
          body: "Set up your playbook: your offer, your customers, what makes you win or lose.",
          shot: "playbook",
          alt: "The sales playbook set up in Switch.",
        },
        {
          n: "02",
          label: "Add a conversation",
          body: "Drop in the notes. Switch surfaces the evidence, the assumptions and the missing points.",
          shot: "conversation",
          alt: "Switch analyzes a conversation and surfaces evidence and assumptions.",
        },
        {
          n: "03",
          label: "Prepare the next one",
          body: "A briefing helps you know what to dig into, what to confirm and which questions to ask.",
          shot: "briefing",
          alt: "The briefing that prepares the next meeting in Switch.",
        },
      ],
    },
    value: {
      title: "Every deal, clearer.",
      lead: "A reading of the conversation, not a summary.",
      shotAlt: "A detailed deal analysis in Switch.",
      annotations: [
        { title: "What's established", body: "What the customer confirmed and what the analysis rests on." },
        { title: "What's missing", body: "The assumptions to verify and the questions still open." },
        { title: "What changes", body: "What strengthens or weakens the deal across conversations." },
        { title: "The next action", body: "What the next meeting needs to establish." },
      ],
    },
    audiences: {
      title: "For those who sell. And those who lead them.",
      columns: [
        {
          title: "You sell",
          items: [
            "Walk into every meeting with a clear direction.",
            "See what slipped past you.",
            "Challenge your impressions.",
            "Prepare the right questions.",
          ],
        },
        {
          title: "You lead sales",
          items: [
            "Ground your deal reviews in evidence.",
            "Spot weak points earlier.",
            "Focus your coaching where it counts.",
            "Bring your playbook to life every day.",
          ],
        },
      ],
      quote: "It's like having someone with me on every deal.",
    },
    method: {
      title: "Your know-how, applied to every conversation.",
      text: "Keep your method: SPIN, MEDDIC, Challenger or your own approach. Switch pairs your playbook with the Sales Unlocked discipline.",
      doors: ["Should I stay?", "Can I win?", "Is the impact big enough?"],
      crossLabel: "Across all three",
      cross: "Is the decision actually moving forward?",
      signature:
        "The software companion to the method of Pierre Gaubil, author of \u201cWhy the best salespeople don't sell.\u201d",
    },
    pricing: {
      title: "One price. All your deals.",
      price: "€49.99 excl. VAT",
      unit: "per user, per month",
      details: ["All features included.", "Billed monthly. Cancel anytime."],
    },
    final: {
      title: "See where your deal really stands.",
      text: "Start with a customer conversation. Discover what's established — and what the next one needs to clarify.",
    },
  },
}

export function SwitchPage() {
  const { language } = useLanguage()
  const lang: Lang = language === "en" ? "en" : "fr"
  const t = CONTENT[lang]

  const shot = (name: keyof typeof SHOTS) => ({
    src: `/images/switch-${name}-${lang}.png`,
    ...SHOTS[name][lang],
  })

  const CtaButton = ({ withNote = true }: { withNote?: boolean }) => (
    <div className="flex flex-col items-start gap-3">
      <a
        href={SIGNUP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-base font-semibold text-navy-deep transition-transform hover:-translate-y-0.5"
      >
        {t.cta}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
        <span className="sr-only">({t.newTab})</span>
      </a>
      {withNote && <p className="text-sm text-muted">{t.noCard}</p>}
    </div>
  )

  return (
    <div className="min-h-screen bg-paper">
      <SiteHeader />

      {/* 1. HERO — the claim and the product, given visual priority */}
      <section className="border-b border-line px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">{t.hero.eyebrow}</p>
            <h1 className="mt-5 text-balance font-serif text-4xl font-normal leading-[1.05] text-navy-deep md:text-5xl lg:text-[3.5rem]">
              {t.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{t.hero.description}</p>
            <p className="mt-6 text-pretty font-serif text-xl leading-snug text-navy md:text-2xl">{t.hero.benefit}</p>
            <div className="mt-9">
              <CtaButton />
            </div>
          </div>

          <figure className="min-w-0 overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-sm md:p-3">
            <Image
              src={shot("read").src || "/placeholder.svg"}
              alt={t.hero.shotAlt}
              width={shot("read").w}
              height={shot("read").h}
              priority
              sizes="(min-width: 1024px) 600px, 100vw"
              className="h-auto w-full rounded-xl"
            />
          </figure>
        </div>
      </section>

      {/* 2. THE PROBLEM — a short visual breath, no heavy text block */}
      <section className="border-b border-line px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[880px] text-center">
          <h2 className="text-balance font-serif text-3xl font-normal leading-tight text-navy md:text-4xl">
            {t.problem.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{t.problem.text}</p>
          <p className="mx-auto mt-8 max-w-2xl text-balance font-serif text-2xl leading-snug text-orange md:text-3xl">
            {t.problem.strong}
          </p>
        </div>
      </section>

      {/* 3. HOW IT WORKS — three ordered steps, each with its real screen */}
      <section className="border-b border-line bg-paper-2 px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <h2 className="max-w-2xl text-balance font-serif text-3xl font-normal leading-tight text-navy md:text-4xl">
            {t.how.title}
          </h2>

          <ol className="mt-14 flex flex-col gap-14 md:gap-20">
            {t.how.steps.map((step, i) => (
              <li
                key={step.n}
                className={`grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12 ${
                  i % 2 === 1 ? "lg:[&>figure]:order-first" : ""
                }`}
              >
                <div className="lg:pt-2">
                  <div className="flex items-baseline gap-3">
                    <span aria-hidden="true" className="font-mono text-sm font-semibold text-navy/40">
                      {step.n}
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy">{step.label}</p>
                  </div>
                  <p className="mt-4 text-lg leading-relaxed text-muted">{step.body}</p>
                </div>

                <figure className="min-w-0 self-start overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-sm md:p-3">
                  <Image
                    src={shot(step.shot).src || "/placeholder.svg"}
                    alt={step.alt}
                    width={shot(step.shot).w}
                    height={shot(step.shot).h}
                    sizes="(min-width: 1024px) 620px, 100vw"
                    className="h-auto w-full rounded-xl"
                  />
                </figure>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. THE VALUE — one real analysis, four short annotations */}
      <section className="border-b border-line px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-2xl">
            <h2 className="text-balance font-serif text-3xl font-normal leading-tight text-navy md:text-4xl">
              {t.value.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">{t.value.lead}</p>
          </div>

          <figure className="mt-10 overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-sm md:p-3">
            <Image
              src={shot("deals").src || "/placeholder.svg"}
              alt={t.value.shotAlt}
              width={shot("deals").w}
              height={shot("deals").h}
              sizes="(min-width: 1180px) 1100px, 100vw"
              className="h-auto w-full rounded-xl"
            />
          </figure>

          <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {t.value.annotations.map((a) => (
              <div key={a.title} className="border-t border-line pt-5">
                <dt className="font-serif text-xl leading-snug text-navy">{a.title}</dt>
                <dd className="mt-2 leading-relaxed text-muted">{a.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 5. TWO AUDIENCES — two columns, then a single generous quote */}
      <section className="border-b border-line bg-paper-2 px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1000px]">
          <h2 className="max-w-2xl text-balance font-serif text-3xl font-normal leading-tight text-navy md:text-4xl">
            {t.audiences.title}
          </h2>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
            {t.audiences.columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-6 bg-paper p-7 md:p-9">
                <h3 className="font-serif text-2xl leading-snug text-navy">{col.title}</h3>
                <ul className="flex flex-col gap-3.5">
                  {col.items.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-navy">
                      <Check className="mt-1 h-4 w-4 flex-none text-orange" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <figure className="mt-16 text-center">
            <blockquote className="mx-auto max-w-3xl text-balance font-serif text-3xl font-normal leading-[1.2] text-navy-deep md:text-4xl">
              « {t.audiences.quote} »
            </blockquote>
            {t.audiences.attribution ? (
              <figcaption className="mt-6 text-sm text-muted">{t.audiences.attribution}</figcaption>
            ) : null}
          </figure>
        </div>
      </section>

      {/* 6. THE METHOD LINK — three doors, one cross-cutting question */}
      <section className="border-b border-line px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1000px]">
          <h2 className="max-w-2xl text-balance font-serif text-3xl font-normal leading-tight text-navy md:text-4xl">
            {t.method.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{t.method.text}</p>

          <div className="mt-12 flex flex-col items-stretch gap-4 md:flex-row md:items-stretch">
            {t.method.doors.map((door, i) => (
              <div key={door} className="flex flex-1 items-center gap-4 md:flex-col md:gap-4">
                <div className="flex w-full flex-1 items-center justify-center rounded-2xl border border-line bg-paper-2 px-5 py-6 text-center">
                  <p className="font-serif text-lg leading-snug text-navy md:text-xl">{door}</p>
                </div>
                <ArrowRight
                  className={`h-5 w-5 flex-none text-navy/40 max-md:rotate-90 ${
                    i < t.method.doors.length - 1 ? "" : "invisible max-md:hidden"
                  }`}
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>

          {/* The dynamic is a question across the three doors, not a fourth door */}
          <div className="mt-6 rounded-2xl bg-navy px-6 py-6 md:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">{t.method.crossLabel}</p>
            <p className="mt-2 text-balance font-serif text-xl leading-snug text-white md:text-2xl">{t.method.cross}</p>
          </div>

          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">{t.method.signature}</p>
        </div>
      </section>

      {/* 7. PRICING — one centered card */}
      <section className="border-b border-line bg-paper-2 px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[520px]">
          <h2 className="text-center text-balance font-serif text-3xl font-normal leading-tight text-navy md:text-4xl">
            {t.pricing.title}
          </h2>

          <div className="mt-10 flex flex-col items-center gap-6 rounded-3xl border border-line bg-paper px-8 py-12 text-center shadow-sm">
            <div>
              <p className="font-serif text-5xl font-normal text-navy-deep md:text-6xl">{t.pricing.price}</p>
              <p className="mt-2 text-sm text-muted">{t.pricing.unit}</p>
            </div>
            <div className="flex flex-col gap-1.5">
              {t.pricing.details.map((d) => (
                <p key={d} className="leading-relaxed text-navy">
                  {d}
                </p>
              ))}
            </div>
            <div className="mt-2 flex flex-col items-center gap-3">
              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-base font-semibold text-navy-deep transition-transform hover:-translate-y-0.5"
              >
                {t.cta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">({t.newTab})</span>
              </a>
              <p className="text-sm text-muted">{t.noCard}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CALL TO ACTION */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-balance font-serif text-4xl font-normal leading-[1.1] text-navy-deep md:text-5xl">
            {t.final.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">{t.final.text}</p>
          <div className="mt-10 flex flex-col items-center gap-3">
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-base font-semibold text-navy-deep transition-transform hover:-translate-y-0.5"
            >
              {t.cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">({t.newTab})</span>
            </a>
            <p className="text-sm text-muted">{t.noCard}</p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
