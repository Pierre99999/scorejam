'use client';

import { Check, Eye, Zap, TrendingUp, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { useSignup } from './SignupContext';

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
  onCtaClick: () => void;
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
  onCtaClick,
}: PlanCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl transition-all duration-300 ${
        highlighted
          ? 'scale-[1.03] bg-[var(--section-bg)] shadow-2xl shadow-purple-900/40 ring-2 ring-transparent'
          : 'bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--card-border-hover)]'
      }`}
      style={
        highlighted
          ? {
              background:
                'linear-gradient(var(--section-bg), var(--section-bg)) padding-box, linear-gradient(135deg, #a855f7, #3b82f6) border-box',
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
        <p className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-widest mb-3">
          {name}
        </p>

        {/* Price */}
        <div className="flex items-end gap-1 mb-1">
          {period ? (
            <>
              <span className="text-[var(--text-secondary)] text-2xl font-semibold self-start mt-1.5">$</span>
              <span className="text-5xl font-bold text-[var(--text-primary)] leading-none">{price}</span>
              <span className="text-[var(--text-muted)] text-sm mb-1">{period}</span>
            </>
          ) : (
            <span className="text-4xl font-bold text-[var(--text-primary)] leading-none">{price}</span>
          )}
        </div>

        {/* Description */}
        <p className="text-[var(--text-secondary)] text-sm mb-6">{desc}</p>

        {/* Feature list */}
        <ul className="flex flex-col gap-3 mb-8 flex-1">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className={`mt-0.5 flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full ${
                  highlighted
                    ? 'bg-gradient-to-br from-purple-500 to-blue-500'
                    : 'bg-[var(--card-border)]'
                }`}
              >
                <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
              </span>
              <span className="text-[var(--text-secondary)] text-sm leading-snug">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={onCtaClick}
          className={`w-full flex items-center justify-center px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
            highlighted
              ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-400 hover:to-blue-400 shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 hover:-translate-y-0.5'
              : 'border border-[var(--card-border-hover)] text-[var(--text-secondary)] hover:border-[var(--card-border-hover)] hover:text-[var(--text-primary)] bg-white/5 hover:bg-white/10'
          }`}
        >
          {ctaLabel}
        </button>
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
    <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 flex items-center justify-between hover:border-[var(--card-border-hover)] transition-all duration-200">
      <div>
        <p className="text-[var(--text-primary)] font-semibold text-base">{label}</p>
      </div>
      <div className="text-right">
        <p className="text-[var(--text-primary)] font-bold text-xl">
          <span className="text-[var(--text-secondary)] text-sm font-normal mr-0.5">$</span>
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
    <div className="border border-[var(--card-border)] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/[0.02] transition-colors duration-200"
      >
        <span className="text-[var(--text-primary)] font-medium text-sm">{question}</span>
        <ChevronDown
          className={`w-4 h-4 text-[var(--text-muted)] flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-48' : 'max-h-0'}`}
      >
        <p className="px-6 pb-5 text-[var(--text-secondary)] text-sm leading-relaxed border-t border-[var(--card-border)] pt-4">
          {answer}
        </p>
      </div>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function PricingContent() {
  const { openSignup, openContactSales } = useSignup();

  const starterFeatures = [
    'Included: Build, preview and test 2 diagnostics, no credit card required',
    'Credit Expiration: Valid until used',
  ];

  const proFeatures = [
    'Included Credits: 15 Credits / month',
    'Credit Expiration: Monthly reset',
  ];

  const scaleFeatures = [
    'Unlimited credits',
    'Dedicated account manager',
    'Custom integrations',
    'SLA & premium support',
    'On-premise option',
  ];

  const valueItems = [
    { icon: Eye, gradient: 'from-purple-500 to-blue-500', title: 'Clarity', text: 'Stop guessing. Know exactly where to focus.', delay: 0 },
    { icon: Zap, gradient: 'from-blue-500 to-violet-500', title: 'Speed', text: 'From data to decisions in minutes, not weeks.', delay: 0.1 },
    { icon: TrendingUp, gradient: 'from-violet-500 to-purple-500', title: 'Results', text: 'Teams using Scorejam convert 32% more.', delay: 0.2 },
  ];

  const faqItems = [
    { q: 'Can I try Scorejam for free?', a: 'Yes! The Starter plan is completely free with 50 credits per month. No credit card required.' },
    { q: 'What happens when I run out of credits?', a: 'You can purchase additional credit packs anytime, or upgrade to Pro for more monthly credits.' },
    { q: 'Can I cancel anytime?', a: 'Absolutely. No commitment, no hidden fees. Cancel your Pro subscription anytime.' },
    { q: 'Do unused credits roll over?', a: 'Monthly credits reset each billing cycle, but purchased credit packs never expire.' },
    { q: 'Is there a setup fee?', a: 'No. Zero setup fee, zero complexity. You\'re up and running in 10 minutes.' },
  ];

  return (
    <main className="relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-3xl" />
        <div className="absolute top-48 right-1/4 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl" />
      </div>

      {/* Section 1: Hero */}
      <section className="relative pt-32 pb-16 text-center px-6">
        <AnimatedSection>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight tracking-tight max-w-3xl mx-auto">
            Simple, transparent pricing
          </h1>
          <p className="mt-5 text-lg text-[var(--text-secondary)] max-w-xl mx-auto">Start free. Scale when you&apos;re ready.</p>
        </AnimatedSection>
      </section>

      {/* Section 2: Pricing Plans */}
      <section className="relative py-8 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            <AnimatedSection delay={0}>
              <PlanCard
                name="Starter"
                price="Free"
                desc="Perfect to discover Scorejam"
                features={starterFeatures}
                ctaLabel="Get started free"
                onCtaClick={openSignup}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <PlanCard
                name="Subscription"
                price="14.99"
                period="/month"
                desc="For teams that need real results"
                features={proFeatures}
                ctaLabel="Start Subscription"
                badge="Most popular"
                highlighted
                onCtaClick={openSignup}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <PlanCard
                name="Scale"
                price="Custom"
                desc="For organizations with specific needs"
                features={scaleFeatures}
                ctaLabel="Contact sales"
                onCtaClick={openContactSales}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 3: Credit Packs */}
      <section className="relative py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">Need more credits?</h2>
            <p className="mt-3 text-[var(--text-secondary)] text-sm">Boost your usage with credit packs</p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex flex-col gap-4">
              <CreditPack label="100 credits" price="9" />
              <CreditPack label="500 credits" price="39" />
              <CreditPack label="2000 credits" price="129" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 4: How Credits Work */}
      <section className="relative py-16 px-6">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
              How credits work
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">Each scoring analysis uses credits. A simple questionnaire uses ~5 credits. A detailed diagnostic uses ~20 credits. Credits never expire.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 5: Value Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
              What you actually get
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueItems.map((item) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={item.delay}>
                  <div className="group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 hover:border-[var(--card-border-hover)] transition-all duration-300 h-full text-center md:text-left">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${item.gradient} mb-5 transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                    </div>
                    <h3 className="text-[var(--text-primary)] font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{item.text}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 6: Usage Projection */}
      <section className="relative py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">What can you do with credits?</h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <ul className="flex flex-col gap-4">
              {[
                '50 credits = ~10 basic scoring analyses',
                '500 credits = ~100 basic or ~25 deep analyses',
                'Unlimited = score everything, all the time',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl px-5 py-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
                  </span>
                  <span className="text-[var(--text-secondary)] text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 7: FAQ */}
      <section className="relative py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">Frequently asked questions</h2>
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
