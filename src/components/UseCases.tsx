'use client';

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { cn } from '@/lib/utils';

type TabKey = 'sales' | 'marketing' | 'customer-success' | 'product' | 'hr' | 'training';

interface TabContent {
  tabKey: TabKey;
  label: string;
  title: string;
  text: string;
  bullets: string[];
}

const tabs: TabContent[] = [
  {
    tabKey: 'sales',
    label: 'Sales',
    title: 'Close More Deals, Faster',
    text: 'Prioritize leads by conversion probability. Stop wasting time on dead ends.',
    bullets: [
      'Uncover prospect pain points and rank outreach by urgency',
      'Validate solution fit before investing sales time',
      'Match each prospect to the right product, tier, or plan',
      'Generate ROI projections that help buyers get internal buy-in',
      'Score buying readiness to know who to engage now vs. nurture',
    ],
  },
  {
    tabKey: 'marketing',
    label: 'Marketing',
    title: 'Know Your Market Before You Spend',
    text: 'Validate positioning, pricing, and channels with real audience data.',
    bullets: [
      'Define your ideal customer profile from actual survey data',
      'Test market demand before committing resources',
      'Benchmark your positioning against competitors',
      'Find the right price point and packaging model',
      'Discover which channels your buyers actually use',
      'Measure product-market fit with the Sean Ellis test',
      'Audit brand perception — close the gap between intended and real',
    ],
  },
  {
    tabKey: 'customer-success',
    label: 'Customer Success',
    title: 'Retain More, Rescue Faster',
    text: 'Spot at-risk accounts before they churn. Track health at every stage.',
    bullets: [
      'Check implementation readiness before go-live',
      'Track onboarding progress and unblock stuck accounts',
      'Monitor account health across satisfaction dimensions',
      'Verify customers are hitting the outcomes they bought for',
      'Detect churn signals early and trigger the right intervention',
      'Assess compliance posture and operational risk',
    ],
  },
  {
    tabKey: 'product',
    label: 'Product',
    title: 'Build What Matters, Fix What Hurts',
    text: 'Replace gut feelings with scored user feedback on every product decision.',
    bullets: [
      'Prioritize your roadmap with evidence-based feature ranking',
      'Validate beta features before full launch',
      'Pinpoint UX friction and usability blockers',
      'Run product satisfaction surveys with built-in NPS',
      "Diagnose why specific features aren't getting adopted",
    ],
  },
  {
    tabKey: 'hr',
    label: 'HR',
    title: 'Measure People, Not Opinions',
    text: 'Turn performance reviews, culture checks, and hiring into structured data.',
    bullets: [
      'Run structured individual performance evaluations',
      'Assess team effectiveness and collaboration dynamics',
      'Evaluate role fit across technical, behavioral, and cultural dimensions',
      'Measure employee engagement drivers and killers',
      "Audit culture health — what's real vs. what's performative",
    ],
  },
  {
    tabKey: 'training',
    label: 'Training & L&D',
    title: 'Prove Training Works — Or Fix It',
    text: 'Assess skills before, validate impact after. No more guessing if programs delivered.',
    bullets: [
      'Verify actual skill levels against stated competencies',
      'Place learners on a maturity continuum with a clear next step',
      'Identify training gaps and prioritize what to teach first',
      'Score certification readiness before exam day',
      'Collect post-training feedback that drives program improvement',
    ],
  },
];

const tabKeys: TabKey[] = ['sales', 'marketing', 'customer-success', 'product', 'hr', 'training'];

export function UseCases() {
  const [activeTab, setActiveTab] = useState<TabKey>('sales');

  const activeContent = tabs.find((tab) => tab.tabKey === activeTab)!;

  return (
    <section id="use-cases" className="relative py-24 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Section heading */}
        <AnimatedSection className="text-center mb-12">
          <p className="text-xs font-medium uppercase tracking-widest text-purple-400 mb-3">
            Use Cases
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
            Built For Your Team
          </h2>
        </AnimatedSection>

        {/* Tab buttons */}
        <AnimatedSection delay={0.1} className="flex flex-wrap justify-center gap-2 mb-10">
          {tabKeys.map((key) => {
            const tab = tabs.find((t) => t.tabKey === key)!;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={cn(
                  'px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border',
                  activeTab === key
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white border-transparent shadow-lg shadow-purple-900/30'
                    : 'text-[var(--text-secondary)] border-[var(--card-border)] bg-[var(--card-bg)] hover:border-[var(--card-border-hover)] hover:text-[var(--text-primary)]'
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </AnimatedSection>

        {/* Tab content with AnimatePresence crossfade */}
        <AnimatedSection delay={0.2}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              <div className="relative rounded-2xl p-px bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-purple-500/5">
                <div className="relative rounded-2xl bg-[var(--card-bg)] p-8 sm:p-10 overflow-hidden backdrop-blur-sm">
                  {/* Subtle inner glow */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[var(--glow-purple)] blur-2xl pointer-events-none" />
                  <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-[var(--glow-blue)] blur-2xl pointer-events-none" />

                  <div className="relative">
                    {/* Content title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-3">
                      {activeContent.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8 max-w-2xl">
                      {activeContent.text}
                    </p>

                    {/* Bullet points */}
                    <ul className="space-y-4">
                      {activeContent.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <CheckCircle
                            className="w-5 h-5 text-purple-400 shrink-0 mt-0.5"
                            strokeWidth={1.5}
                          />
                          <span className="text-[var(--text-secondary)] text-base leading-relaxed">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </AnimatedSection>
      </div>
    </section>
  );
}
