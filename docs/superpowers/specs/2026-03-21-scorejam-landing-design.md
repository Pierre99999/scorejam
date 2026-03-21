# Scorejam Landing Page — Design Spec

## Overview

Complete rebuild of the Scorejam landing page as a modern, conversion-focused SaaS landing page. Deployed at `scorejam.mamifute.fr` behind the existing Traefik reverse proxy.

## Goals

1. Reposition Scorejam from "AI scoring tool" to "business revenue machine"
2. Clear value proposition with pain-point-driven messaging
3. Bilingual (EN/FR) with i18n
4. Premium dark-mode design (Linear/Stripe aesthetic)
5. High conversion: clear CTA hierarchy pointing to Calendly booking

## Tech Stack

- **Framework**: Next.js 15 (App Router, static export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + shadcn/ui components
- **Animations**: Framer Motion
- **i18n**: next-intl with `/en` and `/fr` routes
- **Deployment**: Docker multi-stage (Node build → Nginx alpine serve)
- **Routing**: Traefik dynamic config at `/opt/traefik/dynamic/scorejam.yml`

## Infrastructure

### Docker Setup

- Multi-stage Dockerfile: Node 20 alpine for build, Nginx alpine for serve
- docker-compose.yml connecting to `traefik_proxy` external network
- Container name: `scorejam-landing`

### Traefik Config

New file `/opt/traefik/dynamic/scorejam.yml`:
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

**Safety**: This is a new file — no existing configs are modified.

## i18n Strategy

- `next-intl` with static rendering
- Messages in `/messages/en.json` and `/messages/fr.json`
- Default locale: `en`
- Language switcher in header
- Root `/` redirects to `/en`

## Visual Design

### Color Palette
- Background: `gray-950` (#030712)
- Section alt: `gray-900` (#111827)
- Card bg: `gray-900` with `gray-800` border
- Primary accent: gradient `from-purple-500 to-blue-500`
- Text primary: white
- Text secondary: `gray-400`
- CTA primary: gradient purple→blue fill
- CTA secondary: outline with gradient border

### Typography
- Font: Inter (Google Fonts)
- Headlines: bold, large, with gradient text on key words
- Body: regular weight, good line-height for readability

### Spacing & Layout
- Max width: `max-w-7xl` (1280px) centered
- Section padding: `py-24` (consistent)
- Mobile-first responsive design
- Smooth scroll between sections

### Animations
- Framer Motion `whileInView` fade-in + slide-up on sections
- Staggered children animations on card groups
- Hover scale on interactive elements
- Counter animation on KPI numbers

## Page Sections

### 1. Header
- Fixed/sticky, transparent bg with blur on scroll
- Logo (left) + nav links (center) + language switcher + CTA button (right)
- Nav: How it works, Use Cases (Pricing removed — out of scope, no target)
- Mobile: hamburger menu
- CTA: "Book a demo" → Calendly link

### 2. Hero
- Split layout: text left, product mock right
- EN Headline: "Turn your data into revenue with AI scoring"
- FR Headline: "Transformez vos donnees en revenus grace au scoring IA"
- Subheadline explaining the value
- 2 CTAs: "Book a demo" (primary, → Calendly) + "See how it works" (secondary, scroll to section 4)
- Right side: stylized dashboard mock built in CSS (gradient cards, score indicators, mini chart)

### 3. Problem
- Title: "You're losing opportunities every day" / "Vous perdez des opportunites chaque jour"
- 3 cards with icons:
  1. Too many leads, no prioritization
  2. Sales teams waste time on wrong prospects
  3. Marketing lacks visibility on what converts
- Dark cards with subtle border, icon with gradient accent

### 4. Solution
- Title: "Score what matters" / "Scorez ce qui compte"
- Centered text explaining Scorejam's real-time analysis
- Subtle background gradient or glow effect

### 5. How It Works
- 3 horizontal steps with numbered circles and connecting lines
  1. Connect your data
  2. AI analyzes & scores
  3. Act on insights
- Each step has icon, title, description
- Connecting line/arrow between steps

### 6. Use Cases
- 4 tabs: Sales, Marketing, SaaS, E-commerce
- Each tab shows: title, description, 3 bullet benefits, mini illustration
- Tab switching with Framer Motion crossfade

### 7. Product Preview
- Dashboard mockup built with CSS/Tailwind
- Shows: score cards, bar chart, pipeline visualization, trend indicators
- Floating/elevated with shadow and subtle glow
- Optional: gradient border around the preview

### 8. Social Proof
- Large animated KPIs: "+32% conversion", "-45% wasted time", "10min setup"
- Counter animation on scroll into view
- Logo bar below (placeholder logos for now)
- Optional: 1-2 short testimonial quotes

### 9. Differentiation
- 3 columns:
  1. Real-time scoring
  2. AI-native architecture
  3. No setup complexity
- Each with icon, title, short description
- Gradient accent on icons

### 10. Final CTA
- Full-width section with gradient background
- "Start focusing on what matters" / "Concentrez-vous sur l'essentiel"
- Single prominent CTA button → Calendly
- Subtle particle or glow effect in background

### 11. Footer
- Logo + tagline
- Links: Product, Company, Legal
- Social icons (placeholder)
- Copyright

## Components Architecture

All components are React server components where possible, client components only when needed (animations, tabs, language switcher).

```
components/
  Header.tsx          — sticky nav, client (scroll detection)
  Hero.tsx            — split hero, client (animations)
  Problem.tsx         — 3 pain point cards, client (scroll animations)
  Solution.tsx        — centered solution text, client (animations)
  HowItWorks.tsx      — 3 steps with connectors, client (animations)
  UseCases.tsx        — tabbed content, client (tab state + animations)
  ProductPreview.tsx  — dashboard mock, client (animations)
  SocialProof.tsx     — animated counters, client (counter animation)
  Differentiation.tsx — 3 advantage columns, client (animations)
  FinalCTA.tsx        — gradient CTA section, client (animations)
  Footer.tsx          — static footer, server component
  LanguageSwitcher.tsx — locale toggle, client
  ui/                 — shadcn/ui components (Button, Card, Tabs, etc.)
```

## External Links

- "Book a demo" CTA → `https://calendly.com/pierre-34elements/15min`
- Logo assets downloaded from `scorejam.ai` and stored locally in `/public/images/`

## Nginx Config (Static Export)

Since Next.js static export doesn't support middleware, the Nginx config in the container must handle:
- Root `/` redirect to `/en` via `return 302 /en;`
- Serving static files from the export output

## SEO (Baseline)

In scope (minimal technical SEO):
- `<title>` and `<meta description>` per locale
- Open Graph tags (og:title, og:description, og:image)
- `robots.txt` allowing all crawlers

Out of scope:
- Blog/content SEO
- Sitemap generation
- Structured data

## Out of Scope

- Backend/API
- Authentication/Login
- Pricing page
- Analytics integration
- Contact form
