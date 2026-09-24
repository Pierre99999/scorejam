/**
 * Single source of truth for everything volatile on the site:
 * prices, purchase links, signup links, coaching hours, availability status.
 *
 * Change a price or a URL here and it updates everywhere.
 */

export type Lang = "en" | "fr"
export type MethodKey = "startup" | "sales"

/** Shared external destinations. */
export const links = {
  calendly: "https://calendly.com/pierre-34elements/15min",
  /** The self-assessment lives on Compass34, with one page per language. */
  freeDiagnostic: {
    en: "https://www.compass34.com/self-assessment",
    fr: "https://www.compass34.com/auto-evaluation",
  },
  brevoForm:
    "https://2d47962a.sibforms.com/serve/MUIFAH1znjy2ZHbXoyrrERj3tVcGx7VTxg87zk9JHNmfufP0O4bVgGiieCcJqMsmyQgFTx2fI2oOdw-AWhyi2HwMntjHsKkMJrHg-acMMO_RSnZraTOqK-XWZJlYy4-AG1C1Eof8FIHF_3nxpKMrCb4q1qpqhtBwuKyQYgtYBLmV8fRJprcuMUjKA3VxyaC37ZYmJk6iOznIt3T6",
  compass34App: "https://www.compass34.com/",
  /** Where the Switch software is tried — free, no card required. */
  switchApp: "https://www.switch34.com",
      email: "pierre@34elements.com",
  siteUrl: "https://www.34elements.com",
} as const

/** Pierre's track record. Single place, so every page agrees. */
export const bio = {
  companiesFounded: 5,
  exits: 2,
  ipo: 1,
  siliconValleyYears: 17,
  entrepreneurYears: 20,
  supported: "300+",
  booksPublished: 2,
  photo: "/images/pierre-gaubil.png",
} as const

type LocalizedString = Record<Lang, string>
type LocalizedNullable = Record<Lang, string | null>

export type BookFormat = {
  status: "available" | "coming-soon"
  /** One cover per edition: each language shows its own artwork. */
  cover: LocalizedNullable
  price: LocalizedNullable
  buy: LocalizedNullable
  /**
   * Publication date, drawn as a small seal on the cover while the book is
   * still coming soon. Omitted once the book is available.
   */
  releaseDate?: {
    label: LocalizedString
    day: LocalizedString
  }
}

export type GuidedFormat = {
  moduleCount: number
  coachingHours: number
  price: LocalizedNullable
  signup: LocalizedNullable
}

export type OnsiteFormat = {
  price: LocalizedString
  priceNote: LocalizedString
  cta: string
}

/**
 * Each method inherits the palette of its own book cover, so the site and the
 * books read as one object. The two covers are inversions of each other:
 * Startup Unlocked is navy with orange type, Sales Unlocked is orange with navy type.
 */
export type MethodTheme = {
  /** Dominant cover colour, used for filled bands and the book "spine". */
  surface: string
  /** Text colour that sits on `surface`. */
  onSurface: string
  /** Muted text colour on `surface`. */
  onSurfaceMuted: string
  /** Headline highlight colour on `surface`, mirroring the cover's title colour. */
  onSurfaceHighlight: string
  /** Border colour for outline buttons on `surface`. */
  onSurfaceBorder: string
  /** Hover wash for outline buttons on `surface`. */
  onSurfaceHover: string
  /** The secondary cover colour, used for accents on light backgrounds. */
  accentText: string
  accentBg: string
  accentBorder: string
  /** Underline colour for text links. */
  accentDecoration: string
  /** Tinted chip background on light backgrounds. */
  accentSoft: string
  /** Text colour that sits on `accentBg`. */
  onAccent: string
}

export type Method = {
  key: MethodKey
  slug: string
  theme: MethodTheme
  book: BookFormat
  guided: GuidedFormat
  onsite: OnsiteFormat
}

export const methods: Record<MethodKey, Method> = {
  startup: {
    key: "startup",
    slug: "startup-unlocked",
    // Cover: navy background, orange title.
    theme: {
      surface: "bg-navy",
      onSurface: "text-white",
      onSurfaceMuted: "text-white/70",
      onSurfaceHighlight: "text-orange",
      onSurfaceBorder: "border-white/30",
      onSurfaceHover: "hover:bg-white/10",
      accentText: "text-orange",
      accentBg: "bg-orange",
      accentBorder: "border-orange",
      accentDecoration: "decoration-orange",
      accentSoft: "bg-orange/15",
      onAccent: "text-navy-deep",
    },
    book: {
      status: "available",
      cover: {
        en: "/images/startup-unlocked-cover.jpg",
        fr: "/images/startup-unlocked-cover-fr.jpg",
      },
      price: { en: "€26", fr: "26 €" },
      buy: { en: "https://a.co/d/dveCYfg", fr: "https://amzn.eu/d/7DKBoCU" },
    },
    guided: {
      moduleCount: 10,
      coachingHours: 4,
      price: { en: "€1,450", fr: "1 450 €" },
      signup: {
        en: "https://www.34elements.online/video-workshop/buy",
        fr: "https://www.34elements.online/atelier-the-compass/buy",
      },
    },
    onsite: {
      price: { en: "€1,900 excl. tax", fr: "1 900 € HT" },
      priceNote: {
        en: "all-inclusive, except travel expenses",
        fr: "tout compris, hors frais de déplacement",
      },
      cta: links.calendly,
    },
  },

  sales: {
    key: "sales",
    slug: "sales-unlocked",
    // Cover: orange background, navy title — the exact inverse of Startup Unlocked.
    theme: {
      surface: "bg-orange",
      onSurface: "text-navy-deep",
      onSurfaceMuted: "text-navy-deep/75",
      // The cover sets "UNLOCKED" in white on orange.
      onSurfaceHighlight: "text-white",
      onSurfaceBorder: "border-navy/30",
      onSurfaceHover: "hover:bg-navy/10",
      accentText: "text-navy",
      accentBg: "bg-navy",
      accentBorder: "border-navy",
      accentDecoration: "decoration-navy",
      accentSoft: "bg-navy/10",
      onAccent: "text-white",
    },
    book: {
      status: "available",
      cover: {
        en: "/images/sales-unlocked-cover.jpg",
        fr: "/images/sales-unlocked-cover-fr.jpg",
      },
      price: { en: "€26", fr: "26 €" },
      buy: {
        en: "https://www.amazon.com/dp/2959564642",
        fr: "https://www.amazon.fr/dp/2959564634",
      },
    },
    guided: {
      moduleCount: 5,
      coachingHours: 2,
      price: { en: "€725", fr: "725 €" },
      signup: {
        // No English signup page exists yet — the EN button is simply not rendered.
        en: null,
        fr: "https://www.34elements.online/elab-the-switch/buy",
      },
    },
    onsite: {
      price: { en: "€1,900 excl. tax", fr: "1 900 € HT" },
      priceNote: {
        en: "all-inclusive, except travel expenses",
        fr: "tout compris, sauf frais de déplacement",
      },
      cta: links.calendly,
    },
  },
}

/**
 * Offers that exist commercially but are not part of the three-format story.
 * Preserved here so the data is not lost and can be surfaced again later.
 */
export const additionalOffers = {
  startup: {
    bootcamp: { price: { en: "€3,500", fr: "3 500 €" } },
    software: { name: "Compass34", price: { en: "€19", fr: "19 €" }, url: links.compass34App },
  },
  sales: {
    bootcamp: { price: { en: "€1,750", fr: "1 750 €" } },
    software: { name: "Switch34", price: { en: null, fr: null }, url: null },
  },
} as const

export function getMethod(key: MethodKey): Method {
  return methods[key]
}

/**
 * The cover of the edition matching the reader's language, falling back to the
 * English artwork when a localised cover does not exist yet.
 */
export function bookCover(book: BookFormat, language: Lang): string | null {
  return book.cover[language] ?? book.cover.en
}

/* ------------------------------------------------------------------------- *
 * The 34 elements — the system behind Startup Unlocked
 * ------------------------------------------------------------------------- */

/**
 * Element names stay in English in both locales: they are the labels of the
 * periodic-table style grid the brand is named after, not prose to translate.
 * Only the component titles and their decisive questions are localised.
 */
export type SystemElement = {
  n: number
  name: string
  /** Rendered as a muted suffix, e.g. "Fundraising · if you raise". */
  condition?: { en: string; fr: string }
}

export type SystemComponent = {
  /** Displayed position: "1"…"10", or "8 & 9" where two components share a row. */
  index: string
  /** True when `index` covers more than one component (plural label). */
  plural?: boolean
  label: string
  title: { en: string; fr: string }
  question: { en: string; fr: string }
  elements: SystemElement[]
}

export const startupSystem: {
  stats: { value: string; label: { en: string; fr: string }; highlight?: boolean }[]
  components: SystemComponent[]
} = {
  stats: [
    { value: "34", label: { en: "Elements", fr: "Éléments" }, highlight: true },
    { value: "10", label: { en: "Components", fr: "Composantes" } },
    { value: "172", label: { en: "Scored criteria", fr: "Critères notés" } },
    { value: "34", label: { en: "Decisive questions", fr: "Questions décisives" }, highlight: true },
    { value: "87", label: { en: "Red flags", fr: "Signaux d'alarme" } },
  ],
  components: [
    {
      index: "1",
      label: "Foundation",
      title: { en: "The foundations", fr: "Les fondations" },
      question: { en: "Who are you — and why you?", fr: "Qui êtes-vous — et pourquoi vous ?" },
      elements: [
        { n: 1, name: "Founders" },
        { n: 2, name: "Purpose" },
        { n: 3, name: "Vision" },
        { n: 4, name: "Team" },
        { n: 5, name: "Culture" },
      ],
    },
    {
      index: "2",
      label: "Value",
      title: { en: "The value", fr: "La valeur" },
      question: {
        en: "Which problem — seen the way nobody else sees it?",
        fr: "Quel problème — vu comme personne ne le voit ?",
      },
      elements: [
        { n: 6, name: "Problem" },
        { n: 7, name: "Competition" },
        { n: 8, name: "Point of View" },
        { n: 9, name: "Value Proposition" },
      ],
    },
    {
      index: "3",
      label: "Target",
      title: { en: "The target", fr: "La cible" },
      question: {
        en: "For whom, precisely — and why now?",
        fr: "Pour qui, précisément — et pourquoi maintenant ?",
      },
      elements: [
        { n: 10, name: "Market & Segmentation" },
        { n: 11, name: "Positioning" },
        { n: 12, name: "Ideal Client" },
        { n: 13, name: "Timing" },
      ],
    },
    {
      index: "4",
      label: "Product",
      title: { en: "The product", fr: "Le produit" },
      question: {
        en: "One key action, real barriers, a trajectory.",
        fr: "Une key action, des barrières, une trajectoire.",
      },
      elements: [
        { n: 14, name: "Product Vision" },
        { n: 15, name: "Roadmap" },
        { n: 16, name: "Product Experience" },
        { n: 17, name: "Barriers to Entry" },
      ],
    },
    {
      index: "5",
      label: "Reach",
      title: { en: "The reach", fr: "La conquête" },
      question: {
        en: "A message, channels, a way into the market.",
        fr: "Un message, des canaux, une entrée sur le marché.",
      },
      elements: [
        { n: 18, name: "Go-to-Market" },
        { n: 19, name: "Message & Story" },
        { n: 20, name: "Distribution" },
      ],
    },
    {
      index: "6",
      label: "Usage",
      title: { en: "The usage", fr: "L'usage" },
      question: { en: "Adopted, retained — and paying.", fr: "Adoptés, retenus — et payants." },
      elements: [
        { n: 21, name: "Monetization" },
        { n: 22, name: "Retention" },
        { n: 23, name: "Adoption" },
      ],
    },
    {
      index: "7",
      label: "Playbook",
      title: { en: "The playbook", fr: "Le playbook" },
      question: {
        en: "Measure, learn — and actually change.",
        fr: "Mesurer, apprendre — et changer vraiment.",
      },
      elements: [
        { n: 24, name: "Metrics" },
        { n: 25, name: "Learnings" },
        { n: 26, name: "Execution" },
      ],
    },
    {
      index: "8 & 9",
      plural: true,
      label: "Finance",
      title: { en: "The money", fr: "L'argent" },
      question: {
        en: "Revenue, cost, cash — the reality, not the pitch.",
        fr: "Revenu, coût, cash — la réalité, pas le pitch.",
      },
      elements: [
        { n: 27, name: "Revenue" },
        { n: 28, name: "Cost" },
        { n: 29, name: "Cash" },
        { n: 30, name: "Fundraising", condition: { en: "if you raise", fr: "si vous levez" } },
      ],
    },
    {
      index: "10",
      label: "Scale",
      title: { en: "The scale", fr: "L'échelle" },
      question: {
        en: "Multiply — without depending on you.",
        fr: "Multiplier — sans dépendre de vous.",
      },
      elements: [
        { n: 31, name: "Leverage" },
        { n: 32, name: "Distribution Amplification" },
        { n: 33, name: "Organization" },
        { n: 34, name: "Expansion" },
      ],
    },
  ],
}

