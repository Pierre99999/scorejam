'use client';

import { useTranslations } from 'next-intl';
import { Check, Eye, Zap, TrendingUp, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { CALENDLY_URL } from '@/lib/constants';

// ─── Plan cards ───────────────────────────────────────────────────────────────

interface PlanCardProps {
  name: string;
  price: string;
  period?: string;
  desc: string;
  features: string[];
  ctaLabel: string;
  badge?: string;
  highlighted?: boolean;
}

function PlanCard({
  name,
  price,
  period,
  desc,
  features,
  ctaLabel,
  badge,
  highlighted,
}: PlanCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl transition-all duration-300 ${
        highlighted
          ? 'scale-[1.03] bg-gray-900 shadow-2xl shadow-purple-900/40 ring-2 ring-transparent'
          : 'bg-gray-900/50 border border-gray-800 hover:border-gray-700 hover:bg-gray-900/70'
      }`}
      style={
        highlighted
          ? {
              background:
                'linear-gradient(#0d0d14, #0d0d14) padding-box, linear-gradient(135deg, #a855f7, #3b82f6) border-box',
              border: '2px solid transparent',
            }
          : undefined
      }
    >
      {/* Most popular badge */}
      {badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-semibold whitespace-nowrap shadow-lg shadow-purple-900/30">
            {badge}
          </span>
        </div>
      )}

      <div className="flex flex-col flex-1 p-7 pt-8">
        {/* Plan name */}
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">
          {name}
        </p>

        {/* Price */}
        <div className="flex items-end gap-1 mb-1">
          {period ? (
            <>
              <span className="text-gray-400 text-2xl font-semibold self-start mt-1.5">$</span>
              <span className="text-5xl font-bold text-white leading-none">{price}</span>
              <span className="text-gray-500 text-sm mb-1">{period}</span>
            </>
          ) : (
            <span className="text-4xl font-bold text-white leading-none">{price}</span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-6">{desc}</p>

        {/* Feature list */}
        <ul className="flex flex-col gap-3 mb-8 flex-1">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className={`mt-0.5 flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full ${
                  highlighted
                    ? 'bg-gradient-to-br from-purple-500 to-blue-500'
                    : 'bg-gray-800'
                }`}
              >
                <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
              </span>
              <span className="text-gray-300 text-sm leading-snug">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full flex items-center justify-center px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
            highlighted
              ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-400 hover:to-blue-400 shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 hover:-translate-y-0.5'
              : 'border border-gray-700 text-gray-300 hover:border-gray-600 hover:text-white bg-white/5 hover:bg-white/10'
          }`}
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}

// ─── Credit pack card ─────────────────────────────────────────────────────────

function CreditPack({
  label,
  price,
}: {
  label: string;
  price: string;
}) {
  return (
    <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-5 flex items-center justify-between hover:border-gray-700 hover:bg-gray-900/60 transition-all duration-200">
      <div>
        <p className="text-white font-semibold text-base">{label}</p>
      </div>
      <div className="text-right">
        <p className="text-white font-bold text-xl">
          <span className="text-gray-400 text-sm font-normal mr-0.5">$</span>
          {price}
        </p>
      </div>
    </div>
  );
}

// ─── FAQ item ─────────────────────────────────────────────────────────────────

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-800 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/[0.02] transition-colors duration-200"
      >
        <span className="text-white font-medium text-sm">{question}</span>
        <ChevronDown
          className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-48' : 'max-h-0'}`}
      >
        <p className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-gray-800 pt-4">
          {answer}
        </p>
      </div>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function PricingContent() {
  const t = useTranslations('pricing');

  const starterFeatures = [
    t('starterFeature1'),
    t('starterFeature2'),
    t('starterFeature3'),
    t('starterFeature4'),
  ];

  const proFeatures = [
    t('proFeature1'),
    t('proFeature2'),
    t('proFeature3'),
    t('proFeature4'),
    t('proFeature5'),
  ];

  const scaleFeatures = [
    t('scaleFeature1'),
    t('scaleFeature2'),
    t('scaleFeature3'),
    t('scaleFeature4'),
    t('scaleFeature5'),
  ];

  const valueItems = [
    { icon: Eye, gradient: 'from-purple-500 to-blue-500', titleKey: 'valueItem1Title' as const, textKey: 'valueItem1Text' as const, delay: 0 },
    { icon: Zap, gradient: 'from-blue-500 to-violet-500', titleKey: 'valueItem2Title' as const, textKey: 'valueItem2Text' as const, delay: 0.1 },
    { icon: TrendingUp, gradient: 'from-violet-500 to-purple-500', titleKey: 'valueItem3Title' as const, textKey: 'valueItem3Text' as const, delay: 0.2 },
  ];

  const faqItems = [
    { q: t('faq1Q'), a: t('faq1A') },
    { q: t('faq2Q'), a: t('faq2A') },
    { q: t('faq3Q'), a: t('faq3A') },
    { q: t('faq4Q'), a: t('faq4A') },
    { q: t('faq5Q'), a: t('faq5A') },
  ];

  return (
    <main className="relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-3xl" />
        <div className="absolute top-48 right-1/4 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl" />
      </div>

      {/* ── Section 1: Hero ── */}
      <section className="relative pt-32 pb-16 text-center px-6">
        <AnimatedSection>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-3xl mx-auto">
            {t('title')}
          </h1>
          <p className="mt-5 text-lg text-gray-400 max-w-xl mx-auto">{t('subtitle')}</p>
        </AnimatedSection>
      </section>

      {/* ── Section 2: Pricing Plans ── */}
      <section className="relative py-8 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Starter */}
            <AnimatedSection delay={0}>
              <PlanCard
                name={t('starter')}
                price={t('starterPrice')}
                desc={t('starterDesc')}
                features={starterFeatures}
                ctaLabel={t('starterCta')}
              />
            </AnimatedSection>

            {/* Pro — highlighted */}
            <AnimatedSection delay={0.1}>
              <PlanCard
                name={t('pro')}
                price={t('proPrice')}
                period={t('proPeriod')}
                desc={t('proDesc')}
                features={proFeatures}
                ctaLabel={t('proCta')}
                badge={t('proBadge')}
                highlighted
              />
            </AnimatedSection>

            {/* Scale */}
            <AnimatedSection delay={0.2}>
              <PlanCard
                name={t('scale')}
                price={t('scalePrice')}
                desc={t('scaleDesc')}
                features={scaleFeatures}
                ctaLabel={t('scaleCta')}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Section 3: Credit Packs ── */}
      <section className="relative py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">{t('creditsTitle')}</h2>
            <p className="mt-3 text-gray-400 text-sm">{t('creditsSubtitle')}</p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex flex-col gap-4">
              <CreditPack label={t('creditsPack1')} price={t('creditsPack1Price')} />
              <CreditPack label={t('creditsPack2')} price={t('creditsPack2Price')} />
              <CreditPack label={t('creditsPack3')} price={t('creditsPack3Price')} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Section 4: How Credits Work ── */}
      <section className="relative py-16 px-6">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {t('howCreditsTitle')}
            </h2>
            <p className="text-gray-400 leading-relaxed">{t('howCreditsText')}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Section 5: Value Section ── */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              {t('valueTitle')}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueItems.map((item) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.titleKey} delay={item.delay}>
                  <div className="group bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 hover:bg-gray-900/70 transition-all duration-300 h-full text-center md:text-left">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${item.gradient} mb-5 transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">{t(item.titleKey)}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{t(item.textKey)}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Section 6: Usage Projection ── */}
      <section className="relative py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">{t('projectionTitle')}</h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <ul className="flex flex-col gap-4">
              {[t('projectionItem1'), t('projectionItem2'), t('projectionItem3')].map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-gray-900/40 border border-gray-800 rounded-xl px-5 py-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
                  </span>
                  <span className="text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Section 7: FAQ ── */}
      <section className="relative py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">{t('faqTitle')}</h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex flex-col gap-3">
              {faqItems.map((item, i) => (
                <FaqItem key={i} question={item.q} answer={item.a} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
