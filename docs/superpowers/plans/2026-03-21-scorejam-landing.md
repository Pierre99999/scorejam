# Scorejam Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy a bilingual (EN/FR) conversion-focused landing page for Scorejam at `scorejam.mamifute.fr`.

**Architecture:** Next.js 15 static export served by Nginx in Docker, routed via Traefik. All content is i18n-driven via next-intl with JSON message files. Components use Tailwind + shadcn/ui + Framer Motion.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS v4, shadcn/ui, Framer Motion, next-intl, Docker, Nginx, Traefik

**Spec:** `docs/superpowers/specs/2026-03-21-scorejam-landing-design.md`

---

## File Map

```
/opt/scorejam/
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── components.json              (shadcn config)
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── public/
│   ├── images/
│   │   ├── scorejam-logo.png
│   │   └── scorejam-symbol-white.webp
│   └── robots.txt
├── messages/
│   ├── en.json
│   └── fr.json
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx       (root layout with Inter font, metadata, i18n provider)
│   │   │   └── page.tsx         (assembles all sections)
│   │   ├── layout.tsx           (html/body wrapper)
│   │   └── globals.css          (Tailwind imports + custom styles)
│   ├── i18n/
│   │   ├── request.ts           (next-intl server config)
│   │   └── routing.ts           (locale routing config)
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Solution.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── UseCases.tsx
│   │   ├── ProductPreview.tsx
│   │   ├── SocialProof.tsx
│   │   ├── Differentiation.tsx
│   │   ├── FinalCTA.tsx
│   │   ├── Footer.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   └── AnimatedSection.tsx  (reusable Framer Motion wrapper)
│   └── lib/
│       ├── utils.ts             (cn helper)
│       └── constants.ts         (Calendly URL, external links)
└── docs/                        (already exists)
```

---

### Task 1: Project Scaffolding

**Files:**
- Create: `package.json`, `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`, `src/app/globals.css`, `src/lib/utils.ts`, `components.json`

- [ ] **Step 1: Initialize Next.js project**

```bash
cd /opt/scorejam
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --no-import-alias --no-turbopack
```

Accept defaults. This creates the base project.

- [ ] **Step 2: Install dependencies**

```bash
cd /opt/scorejam
npm install next-intl framer-motion class-variance-authority clsx tailwind-merge lucide-react
```

- [ ] **Step 3: Initialize shadcn/ui**

```bash
cd /opt/scorejam
npx shadcn@latest init -d
```

Select: New York style, Zinc base color, CSS variables.

- [ ] **Step 4: Add shadcn components needed**

```bash
cd /opt/scorejam
npx shadcn@latest add button card tabs badge
```

- [ ] **Step 5: Configure next.config.ts for static export + next-intl**

Replace `next.config.ts` with:

```typescript
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig = {
  output: 'export' as const,
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
```

- [ ] **Step 6: Create utils.ts**

Create `src/lib/utils.ts`:

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 7: Create constants.ts**

Create `src/lib/constants.ts`:

```typescript
export const CALENDLY_URL = 'https://calendly.com/pierre-34elements/15min';
```

All CTA buttons linking to Calendly must use this constant. Never hard-code the URL in components.

- [ ] **Step 8: Update globals.css for dark theme**

Replace `src/app/globals.css` with Tailwind v4 imports + custom dark theme CSS variables (gray-950 background, purple/blue accent gradients).

- [ ] **Step 9: Verify project builds**

```bash
cd /opt/scorejam && npm run build
```

Expected: Build succeeds (may have warnings about missing pages, that's fine).

- [ ] **Step 10: Commit**

```bash
git init && git add -A && git commit -m "chore: scaffold Next.js project with Tailwind, shadcn, Framer Motion, next-intl"
```

---

### Task 2: i18n Setup

**Files:**
- Create: `src/i18n/routing.ts`, `src/i18n/request.ts`, `messages/en.json`, `messages/fr.json`

**IMPORTANT:** Do NOT create a `middleware.ts` file anywhere in this project. This project uses `output: 'export'` (static export), which is incompatible with Next.js middleware. The root `/` → `/en` redirect is handled by Nginx, not Next.js middleware.

- [ ] **Step 1: Create routing config**

Create `src/i18n/routing.ts`:

```typescript
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
});
```

- [ ] **Step 2: Create request config**

Create `src/i18n/request.ts`:

```typescript
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
```

- [ ] **Step 3: Create EN messages file**

Create `messages/en.json` with all section content:

```json
{
  "header": {
    "howItWorks": "How it works",
    "useCases": "Use Cases",
    "bookDemo": "Book a demo"
  },
  "hero": {
    "headline": "Turn your data into revenue with AI scoring",
    "subheadline": "Know exactly who to target, when, and why.",
    "cta1": "Book a demo",
    "cta2": "See how it works"
  },
  "problem": {
    "title": "You're losing opportunities every day",
    "card1Title": "No prioritization",
    "card1Text": "Too many leads, no way to know which ones matter most.",
    "card2Title": "Wasted effort",
    "card2Text": "Sales teams spend hours chasing prospects that will never convert.",
    "card3Title": "Zero visibility",
    "card3Text": "Marketing can't see what's actually driving conversions."
  },
  "solution": {
    "title": "Score what matters",
    "text": "Scorejam analyzes your data in real-time and tells you exactly where to focus — so every action drives revenue."
  },
  "howItWorks": {
    "title": "How it works",
    "step1Title": "Connect your data",
    "step1Text": "Plug in your CRM, analytics, or any data source in minutes.",
    "step2Title": "AI scores everything",
    "step2Text": "Our AI analyzes patterns and assigns actionable scores in real-time.",
    "step3Title": "Act on insights",
    "step3Text": "Focus your team on the opportunities that actually convert."
  },
  "useCases": {
    "title": "Built for your team",
    "sales": "Sales",
    "salesTitle": "Close more deals, faster",
    "salesText": "Prioritize leads by conversion probability. Stop wasting time on dead ends.",
    "salesBullet1": "Lead scoring based on real behavior",
    "salesBullet2": "Pipeline prioritization",
    "salesBullet3": "Automated alerts on hot leads",
    "marketing": "Marketing",
    "marketingTitle": "Know what converts",
    "marketingText": "Understand which campaigns and channels drive actual revenue.",
    "marketingBullet1": "Campaign performance scoring",
    "marketingBullet2": "Channel attribution insights",
    "marketingBullet3": "Audience segmentation",
    "saas": "SaaS",
    "saasTitle": "Reduce churn, grow revenue",
    "saasText": "Identify at-risk accounts and expansion opportunities before it's too late.",
    "saasBullet1": "Health scoring per account",
    "saasBullet2": "Churn prediction",
    "saasBullet3": "Upsell opportunity detection",
    "ecommerce": "E-commerce",
    "ecommerceTitle": "Maximize customer value",
    "ecommerceText": "Score customers by lifetime value and target your best segments.",
    "ecommerceBullet1": "Customer lifetime value scoring",
    "ecommerceBullet2": "Purchase propensity prediction",
    "ecommerceBullet3": "Personalized offer targeting"
  },
  "product": {
    "title": "Your scoring dashboard",
    "subtitle": "Real-time insights at a glance"
  },
  "socialProof": {
    "title": "Results that speak",
    "kpi1Value": "+32%",
    "kpi1Label": "conversion rate",
    "kpi2Value": "-45%",
    "kpi2Label": "wasted time",
    "kpi3Value": "10min",
    "kpi3Label": "setup time"
  },
  "differentiation": {
    "title": "Why Scorejam",
    "item1Title": "Real-time",
    "item1Text": "Scores update as your data changes. No batch processing, no delays.",
    "item2Title": "AI-native",
    "item2Text": "Built from the ground up with machine learning — not bolted on.",
    "item3Title": "Zero complexity",
    "item3Text": "No setup headaches. Connect your data and get insights in minutes."
  },
  "finalCta": {
    "title": "Start focusing on what matters",
    "subtitle": "Join the teams that stopped guessing and started scoring.",
    "cta": "Book a demo"
  },
  "footer": {
    "tagline": "Turn data into revenue.",
    "product": "Product",
    "company": "Company",
    "legal": "Legal",
    "privacy": "Privacy Policy",
    "terms": "Terms of Service",
    "copyright": "© 2026 Scorejam. All rights reserved."
  }
}
```

- [ ] **Step 4: Create FR messages file**

Create `messages/fr.json` with the full French translation:

```json
{
  "header": {
    "howItWorks": "Comment ca marche",
    "useCases": "Cas d'usage",
    "bookDemo": "Reserver une demo"
  },
  "hero": {
    "headline": "Transformez vos donnees en revenus grace au scoring IA",
    "subheadline": "Sachez exactement qui cibler, quand et pourquoi.",
    "cta1": "Reserver une demo",
    "cta2": "Voir comment ca marche"
  },
  "problem": {
    "title": "Vous perdez des opportunites chaque jour",
    "card1Title": "Aucune priorisation",
    "card1Text": "Trop de leads, aucun moyen de savoir lesquels comptent vraiment.",
    "card2Title": "Efforts gaspilles",
    "card2Text": "Vos commerciaux passent des heures sur des prospects qui ne convertiront jamais.",
    "card3Title": "Zero visibilite",
    "card3Text": "Le marketing ne voit pas ce qui genere reellement des conversions."
  },
  "solution": {
    "title": "Scorez ce qui compte",
    "text": "Scorejam analyse vos donnees en temps reel et vous dit exactement ou concentrer vos efforts — pour que chaque action genere du revenu."
  },
  "howItWorks": {
    "title": "Comment ca marche",
    "step1Title": "Connectez vos donnees",
    "step1Text": "Branchez votre CRM, analytics ou toute source de donnees en quelques minutes.",
    "step2Title": "L'IA score tout",
    "step2Text": "Notre IA analyse les patterns et attribue des scores actionnables en temps reel.",
    "step3Title": "Passez a l'action",
    "step3Text": "Concentrez votre equipe sur les opportunites qui convertissent reellement."
  },
  "useCases": {
    "title": "Concu pour votre equipe",
    "sales": "Ventes",
    "salesTitle": "Concluez plus de deals, plus vite",
    "salesText": "Priorisez les leads par probabilite de conversion. Arretez de perdre du temps sur des impasses.",
    "salesBullet1": "Scoring de leads base sur le comportement reel",
    "salesBullet2": "Priorisation du pipeline",
    "salesBullet3": "Alertes automatiques sur les leads chauds",
    "marketing": "Marketing",
    "marketingTitle": "Sachez ce qui convertit",
    "marketingText": "Comprenez quelles campagnes et quels canaux generent du revenu.",
    "marketingBullet1": "Scoring de performance des campagnes",
    "marketingBullet2": "Insights d'attribution par canal",
    "marketingBullet3": "Segmentation d'audience",
    "saas": "SaaS",
    "saasTitle": "Reduisez le churn, augmentez le revenu",
    "saasText": "Identifiez les comptes a risque et les opportunites d'expansion avant qu'il ne soit trop tard.",
    "saasBullet1": "Score de sante par compte",
    "saasBullet2": "Prediction de churn",
    "saasBullet3": "Detection d'opportunites d'upsell",
    "ecommerce": "E-commerce",
    "ecommerceTitle": "Maximisez la valeur client",
    "ecommerceText": "Scorez vos clients par valeur vie et ciblez vos meilleurs segments.",
    "ecommerceBullet1": "Scoring de valeur vie client",
    "ecommerceBullet2": "Prediction de propension d'achat",
    "ecommerceBullet3": "Ciblage d'offres personnalisees"
  },
  "product": {
    "title": "Votre tableau de bord scoring",
    "subtitle": "Des insights en temps reel, en un coup d'oeil"
  },
  "socialProof": {
    "title": "Des resultats qui parlent",
    "kpi1Value": "+32%",
    "kpi1Label": "taux de conversion",
    "kpi2Value": "-45%",
    "kpi2Label": "temps perdu",
    "kpi3Value": "10min",
    "kpi3Label": "temps d'installation"
  },
  "differentiation": {
    "title": "Pourquoi Scorejam",
    "item1Title": "Temps reel",
    "item1Text": "Les scores se mettent a jour quand vos donnees changent. Pas de batch, pas de delais.",
    "item2Title": "IA native",
    "item2Text": "Construit de zero avec le machine learning — pas ajoute apres coup.",
    "item3Title": "Zero complexite",
    "item3Text": "Aucune prise de tete a l'installation. Connectez vos donnees et obtenez des insights en minutes."
  },
  "finalCta": {
    "title": "Concentrez-vous sur l'essentiel",
    "subtitle": "Rejoignez les equipes qui ont arrete de deviner et qui scorent.",
    "cta": "Reserver une demo"
  },
  "footer": {
    "tagline": "Transformez vos donnees en revenus.",
    "product": "Produit",
    "company": "Entreprise",
    "legal": "Mentions legales",
    "privacy": "Politique de confidentialite",
    "terms": "Conditions d'utilisation",
    "copyright": "© 2026 Scorejam. Tous droits reserves."
  }
}
```

- [ ] **Step 5: Create locale layout (contains `<html>` tag with dynamic `lang`)**

Create `src/app/[locale]/layout.tsx`. Note: the `<html>` and `<body>` tags live HERE (not in a root layout) so that `lang` can be set dynamically per locale.

```typescript
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const messages = await getMessages();

  return (
    <html lang={locale} className="dark scroll-smooth">
      <body className={`${inter.className} bg-gray-950 text-white antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

- [ ] **Step 6: Create root layout (minimal wrapper)**

Create `src/app/layout.tsx` — minimal, no `<html>` or `<body>` tags (those are in the locale layout):

```typescript
export const metadata = {
  title: 'Scorejam — Turn your data into revenue',
  description: 'AI-powered scoring platform that helps teams prioritize what matters most.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
```

- [ ] **Step 7: Create placeholder page**

Create `src/app/[locale]/page.tsx`:

```typescript
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('hero');
  return <main><h1>{t('headline')}</h1></main>;
}
```

- [ ] **Step 8: Verify build with i18n**

```bash
cd /opt/scorejam && npm run build
```

Expected: Static pages generated for `/en` and `/fr`.

- [ ] **Step 9: Commit**

```bash
git add -A && git commit -m "feat: add i18n setup with next-intl, EN/FR translations"
```

---

### Task 3: Shared Components (AnimatedSection + LanguageSwitcher)

**Files:**
- Create: `src/components/AnimatedSection.tsx`, `src/components/LanguageSwitcher.tsx`

- [ ] **Step 1: Create AnimatedSection wrapper**

Create `src/components/AnimatedSection.tsx` — a reusable Framer Motion wrapper that applies fade-in + slide-up animation when the section scrolls into view. Props: `children`, `className`, optional `delay`.

```typescript
'use client';
import { motion } from 'framer-motion';

export function AnimatedSection({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
```

- [ ] **Step 2: Create LanguageSwitcher**

Create `src/components/LanguageSwitcher.tsx` — client component that toggles between `/en` and `/fr` by swapping the locale segment in the current path. Uses `usePathname` from next-intl and `Link`.

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "feat: add AnimatedSection and LanguageSwitcher components"
```

---

### Task 4: Download Logo Assets

**Files:**
- Create: `public/images/scorejam-symbol-white.webp`, `public/images/scorejam-logo.png`

- [ ] **Step 1: Download logo files from scorejam.ai**

```bash
cd /opt/scorejam
mkdir -p public/images
curl -o public/images/scorejam-symbol-white.webp https://www.scorejam.ai/images/scorejam-symbol-white.webp
curl -o public/images/scorejam-logo.png https://www.scorejam.ai/icon.png
```

- [ ] **Step 2: Verify files exist and are valid**

```bash
file public/images/scorejam-symbol-white.webp public/images/scorejam-logo.png
```

Expected: WebP and PNG image files.

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "chore: add Scorejam logo assets"
```

---

### Task 5: Header Component

**Files:**
- Create: `src/components/Header.tsx`

- [ ] **Step 1: Build Header**

Create `src/components/Header.tsx` — client component with:
- Sticky positioning, transparent bg with `backdrop-blur` on scroll (use scroll event listener + state)
- Logo on left (image from `/images/scorejam-symbol-white.webp` + "Scorejam" text)
- Nav links center: "How it works" (scroll to `#how-it-works`), "Use Cases" (scroll to `#use-cases`)
- Right: LanguageSwitcher + "Book a demo" Button (gradient, links to Calendly)
- Mobile: hamburger menu toggling a slide-down nav
- All text from `useTranslations('header')`

- [ ] **Step 2: Verify in dev**

```bash
cd /opt/scorejam && npm run dev
```

Check at `http://localhost:3000/en` — header renders, sticky works, mobile menu toggles.

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "feat: add sticky Header with nav, language switcher, mobile menu"
```

---

### Task 6: Hero Section

**Files:**
- Create: `src/components/Hero.tsx`

- [ ] **Step 1: Build Hero**

Create `src/components/Hero.tsx` — client component with:
- Split layout: left text (60%), right mock (40%)
- Headline with gradient text on key words ("revenue", "AI scoring")
- Subheadline in `text-gray-400`
- 2 CTA buttons: "Book a demo" (gradient bg, → Calendly) + "See how it works" (outline, scroll to `#how-it-works`)
- Right side: a stylized dashboard mock built purely in CSS/Tailwind — cards with gradient borders, fake score bars, mini donut chart using CSS gradients
- Framer Motion entrance animation (staggered text + mock slide-in)
- Responsive: stacks vertically on mobile

- [ ] **Step 2: Verify visually**

```bash
cd /opt/scorejam && npm run dev
```

Check both `/en` and `/fr`. Verify responsive layout at mobile breakpoints.

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "feat: add Hero section with split layout, CTAs, dashboard mock"
```

---

### Task 7: Problem Section

**Files:**
- Create: `src/components/Problem.tsx`

- [ ] **Step 1: Build Problem**

Create `src/components/Problem.tsx` — 3 cards in a grid using AnimatedSection with staggered delays. Each card: icon (Lucide), title, description. Dark card bg (`gray-900`), subtle border (`gray-800`), rounded-xl. Icon with gradient accent.

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: add Problem section with 3 pain point cards"
```

---

### Task 8: Solution Section

**Files:**
- Create: `src/components/Solution.tsx`

- [ ] **Step 1: Build Solution**

Create `src/components/Solution.tsx` — centered text section. Title with gradient on key word. Description in `text-gray-400`. Subtle radial gradient glow behind the text. Wrapped in AnimatedSection.

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: add Solution section"
```

---

### Task 9: How It Works Section

**Files:**
- Create: `src/components/HowItWorks.tsx`

- [ ] **Step 1: Build HowItWorks**

Create `src/components/HowItWorks.tsx` — `id="how-it-works"`. 3 horizontal steps with numbered circles (gradient border), connecting dashed lines between them. Each step: number, icon, title, description. Staggered AnimatedSection. Responsive: vertical stack on mobile.

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: add How It Works section with 3 connected steps"
```

---

### Task 10: Use Cases Section

**Files:**
- Create: `src/components/UseCases.tsx`

- [ ] **Step 1: Build UseCases**

Create `src/components/UseCases.tsx` — `id="use-cases"`. Client component using shadcn Tabs (or custom tabs). 4 tabs: Sales, Marketing, SaaS, E-commerce. Each tab content: title, description, 3 bullet points with check icons. Framer Motion AnimatePresence for crossfade between tabs. Wrapped in AnimatedSection.

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: add Use Cases section with 4 tabs"
```

---

### Task 11: Product Preview Section

**Files:**
- Create: `src/components/ProductPreview.tsx`

- [ ] **Step 1: Build ProductPreview**

Create `src/components/ProductPreview.tsx` — full-width dashboard mockup built in CSS/Tailwind:
- Outer frame with gradient border and shadow glow
- Inside: grid of score cards (score number + label + trend arrow), a bar chart (CSS bars with different heights), a pipeline visualization (horizontal bars at different widths with labels)
- All with dark bg, subtle grid pattern
- Wrapped in AnimatedSection with scale-up animation

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: add Product Preview section with CSS dashboard mock"
```

---

### Task 12: Social Proof Section

**Files:**
- Create: `src/components/SocialProof.tsx`

- [ ] **Step 1: Build SocialProof**

Create `src/components/SocialProof.tsx` — client component with:
- 3 large KPI numbers with animated counter (count up from 0 on scroll into view, using requestAnimationFrame)
- Each KPI: large gradient number + label below
- Below KPIs: a row of placeholder logo boxes (gray-800 rounded rectangles with "Logo" text, to be replaced later)
- Wrapped in AnimatedSection

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: add Social Proof section with animated KPIs"
```

---

### Task 13: Differentiation Section

**Files:**
- Create: `src/components/Differentiation.tsx`

- [ ] **Step 1: Build Differentiation**

Create `src/components/Differentiation.tsx` — 3 columns grid. Each: icon with gradient background circle, title, description. AnimatedSection with stagger.

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: add Differentiation section with 3 advantages"
```

---

### Task 14: Final CTA Section

**Files:**
- Create: `src/components/FinalCTA.tsx`

- [ ] **Step 1: Build FinalCTA**

Create `src/components/FinalCTA.tsx` — full-width section with:
- Gradient background (purple→blue at low opacity)
- Centered title + subtitle
- Large CTA button → Calendly
- Subtle radial glow effects
- AnimatedSection wrapper

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: add Final CTA section with gradient background"
```

---

### Task 15: Footer

**Files:**
- Create: `src/components/Footer.tsx`

- [ ] **Step 1: Build Footer**

Create `src/components/Footer.tsx` — server component (no animations needed):
- Logo + tagline
- 3 columns: Product links, Company links, Legal links
- Copyright line
- All text from translations

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: add Footer component"
```

---

### Task 16: Assemble Page + SEO

**Files:**
- Modify: `src/app/[locale]/page.tsx`
- Modify: `src/app/[locale]/layout.tsx` (add metadata)
- Create: `public/robots.txt`

- [ ] **Step 1: Assemble all sections in page.tsx**

Update `src/app/[locale]/page.tsx` to import and render all 11 sections in order: Header, Hero, Problem, Solution, HowItWorks, UseCases, ProductPreview, SocialProof, Differentiation, FinalCTA, Footer.

- [ ] **Step 2: Add per-locale metadata**

Update `src/app/[locale]/layout.tsx` to export `generateMetadata` with locale-aware title, description, and Open Graph tags.

- [ ] **Step 3: Create robots.txt**

Create `public/robots.txt`:

```
User-agent: *
Allow: /
```

- [ ] **Step 4: Verify full page build**

```bash
cd /opt/scorejam && npm run build
```

Expected: Static export generates `/en/index.html` and `/fr/index.html` with all sections.

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "feat: assemble full landing page with SEO metadata"
```

---

### Task 17: Docker + Nginx Setup

**Files:**
- Create: `Dockerfile`, `docker-compose.yml`, `nginx.conf`

- [ ] **Step 1: Create nginx.conf**

Create `nginx.conf`:

```nginx
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    location = / {
        return 302 /en;
    }

    location / {
        try_files $uri $uri/ $uri.html =404;
    }

    error_page 404 /en/index.html;

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml;
}
```

- [ ] **Step 2: Create Dockerfile**

Create `Dockerfile`:

```dockerfile
# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Serve stage
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
```

- [ ] **Step 3: Create docker-compose.yml**

Create `docker-compose.yml`:

```yaml
services:
  scorejam-landing:
    build: .
    container_name: scorejam-landing
    restart: unless-stopped
    networks:
      - traefik_proxy

networks:
  traefik_proxy:
    external: true
```

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "chore: add Dockerfile, docker-compose, nginx config"
```

---

### Task 18: Traefik Config + Deploy

**Files:**
- Create: `/opt/traefik/dynamic/scorejam.yml`

- [ ] **Step 1: Create Traefik dynamic config**

Create `/opt/traefik/dynamic/scorejam.yml`:

```yaml
http:
  routers:
    scorejam:
      rule: "Host(`scorejam.mamifute.fr`)"
      entryPoints:
        - websecure
      service: scorejam-svc
      tls:
        certResolver: myresolver

  services:
    scorejam-svc:
      loadBalancer:
        servers:
          - url: "http://scorejam-landing:80"
```

- [ ] **Step 2: Build and start the container**

```bash
cd /opt/scorejam && docker compose up -d --build
```

Expected: Container `scorejam-landing` starts and joins `traefik_proxy` network.

- [ ] **Step 3: Verify Traefik picks up the route**

```bash
docker logs traefik 2>&1 | tail -20
```

Expected: No errors about the new router. Route for `scorejam.mamifute.fr` is registered.

- [ ] **Step 4: Verify the site is live**

```bash
curl -sI https://scorejam.mamifute.fr/ 2>/dev/null | head -5
```

Expected: HTTP 302 redirect to `/en`.

```bash
curl -s https://scorejam.mamifute.fr/en | head -20
```

Expected: HTML content of the landing page.

- [ ] **Step 5: Verify French route serves correctly**

```bash
curl -s https://scorejam.mamifute.fr/fr | head -5
```

Expected: HTML content with `lang="fr"` — NOT a fallback to the English page.

- [ ] **Step 6: Verify existing services are unaffected**

```bash
curl -sI https://saas.mamifute.fr/ 2>/dev/null | head -3
curl -sI https://ia.mamifute.fr/ 2>/dev/null | head -3
```

Expected: Both return normal responses (200 or 302). No disruption.

- [ ] **Step 7: Commit Traefik config**

```bash
cd /opt/traefik && git add dynamic/scorejam.yml && git commit -m "feat: add Traefik route for scorejam.mamifute.fr"
```

(If `/opt/traefik` is not a git repo, skip this step.)

---

## Task Dependency Order

```
Task 1 (scaffold) → Task 2 (i18n) → Task 3 (shared) → Task 4 (logos)
                                                              ↓
Tasks 5-15 (sections, can be parallelized in batches) ←──────┘
                           ↓
                     Task 16 (assemble page)
                           ↓
                     Task 17 (Docker/Nginx)
                           ↓
                     Task 18 (Traefik + Deploy)
```

Tasks 5-15 (individual section components) can be executed in parallel batches since they are independent components. Recommended batches:
- Batch A: Tasks 5, 6, 7 (Header, Hero, Problem)
- Batch B: Tasks 8, 9, 10 (Solution, HowItWorks, UseCases)
- Batch C: Tasks 11, 12, 13 (ProductPreview, SocialProof, Differentiation)
- Batch D: Tasks 14, 15 (FinalCTA, Footer)
