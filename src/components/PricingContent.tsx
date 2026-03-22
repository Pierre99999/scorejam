'use client';

import { Check, ChevronDown } from 'lucide-react';
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
          ) : price === "Free" ? (
            <span className="text-4xl font-bold text-[var(--text-primary)] leading-none">{price}</span>
          ) : (
            <>
              <span className="text-[var(--text-secondary)] text-2xl font-semibold self-start mt-1.5">$</span>
              <span className="text-4xl font-bold text-[var(--text-primary)] leading-none">{price}</span>
            </>
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
  credits,
  validity,
  price,
}: {
  credits: string;
  validity: string;
  price: string;
}) {
  return (
    <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 flex items-center justify-between hover:border-[var(--card-border-hover)] transition-all duration-200">
      <div>
        <p className="text-[var(--text-primary)] font-semibold text-base">{credits}</p>
        <p className="text-[var(--text-secondary)] text-sm">{validity}</p>
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
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96' : 'max-h-0'}`}
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
    'Includes 15 credits',
    'Valid until used',
  ];

  const faqItems = [
    { q: 'How do credits work?', a: 'Think of credits as a flexible currency. Instead of limiting you to "3 Projects" or "100 Responses," we give you credits so you can choose how to use ScoreJam. One month you might use all your credits to create new surveys; the next month you might use them all to analyze responses.' },
    { q: 'What happens to my unused monthly credits?', a: 'Your 15 monthly credits reset at the start of each billing cycle. They do not roll over. This ensures we can maintain the high-performance AI infrastructure required for your analysis at a fair monthly price.' },
    { q: 'What happens if I buy a Jam Pack?', a: 'Jam credits are different from monthly credits. They are purchased separately (e.g., 50 Credits for $49.99) and remain in your "Wallet" for 12 months. The system always uses your expiring monthly credits first, and only touches your Jam wallet if you run out.' },
    { q: 'What happens if I run out of credits mid-survey?', a: 'We will never stop a live survey. We continue to collect responses from your participants so you do not look bad. However, the analysis and dashboard for those new responses will be locked until you purchase a Jam pack or your monthly credits renew.' },
    { q: 'Why is there a cost for AI Smart Edits?', a: 'Minor manual tweaks (like fixing a typo) are always free. Credits are only deducted when you ask our AI to restructure, rewrite, or generate new logic for your diagnostic, as this requires significant processing power.' },
    { q: 'Can I cap my spending?', a: 'Yes. By default, you are never auto-charged for overage. If you run out of credits, ScoreJam will simply pause AI-powered features (like analysis or new diagnostic creation) until you buy Jam packs or your monthly credits renew.' },
    { q: 'Can I cancel anytime?', a: 'Absolutely. Cancel from your dashboard at any time. Your subscription remains active until the end of the current billing cycle, then you simply will not be charged again.' },
    { q: 'What if I need more than 15 credits per month?', a: 'You can purchase Jam Packs (i.e 50 Credits for $49.99) as needed, which remain valid for 12 months. We are also working on higher-tier plans for power users - if you consistently need more capacity, reach out and let us know.' },
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
                name="One-Shot"
                price="19.99"
                desc="One-time purchase, no subscription"
                features={scaleFeatures}
                ctaLabel="Buy now"
                onCtaClick={openSignup}
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
              <CreditPack credits="10 Credits" validity="Valid 1 year" price="9.99" />
              <CreditPack credits="50 Credits" validity="Valid 1 year" price="49.99" />
              <CreditPack credits="100 Credits" validity="Valid 1 year" price="99.99" />
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
            <p className="text-[var(--text-secondary)] leading-relaxed">Each scoring analysis uses credits. A simple diagnostic uses ~3 credits. 50 responses uses ~1 credit. AI analytics uses ~1 credit.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 5: What Are Credits For */}
      <section className="relative py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">What Are Credits For?</h2>
            <p className="mt-4 text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
              Credits power every step of your diagnostic—from creation to continuous improvement.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 hover:border-[var(--card-border-hover)] transition-all duration-200">
                <h3 className="text-[var(--text-primary)] font-semibold text-base mb-2">Generate Your Diagnostic</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">Build structured questionnaires, scoring logic, and recommendations automatically.</p>
              </div>
              <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 hover:border-[var(--card-border-hover)] transition-all duration-200">
                <h3 className="text-[var(--text-primary)] font-semibold text-base mb-2">Analyze Every Response</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">Each answer is processed to update scores, priorities, and insights in real time.</p>
              </div>
              <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 hover:border-[var(--card-border-hover)] transition-all duration-200">
                <h3 className="text-[var(--text-primary)] font-semibold text-base mb-2">Run AI-Powered Analytics</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">Aggregate responses to uncover patterns, gaps, and opportunities.</p>
              </div>
              <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 hover:border-[var(--card-border-hover)] transition-all duration-200">
                <h3 className="text-[var(--text-primary)] font-semibold text-base mb-2">Recompute When Things Change</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">Update a question, adjust scoring, or refine your model—everything is reanalyzed instantly.</p>
              </div>
            </div>
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
