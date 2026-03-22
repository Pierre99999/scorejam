'use client';

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { cn } from '@/lib/utils';

type TabKey = 'sales' | 'marketing' | 'saas' | 'ecommerce';

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
    title: 'Close more deals, faster',
    text: 'Prioritize leads by conversion probability. Stop wasting time on dead ends.',
    bullets: [
      'Lead scoring based on real behavior',
      'Pipeline prioritization',
      'Automated alerts on hot leads',
    ],
  },
  {
    tabKey: 'marketing',
    label: 'Marketing',
    title: 'Know what converts',
    text: 'Understand which campaigns and channels drive actual revenue.',
    bullets: [
      'Campaign performance scoring',
      'Channel attribution insights',
      'Audience segmentation',
    ],
  },
  {
    tabKey: 'saas',
    label: 'SaaS',
    title: 'Reduce churn, grow revenue',
    text: "Identify at-risk accounts and expansion opportunities before it's too late.",
    bullets: [
      'Health scoring per account',
      'Churn prediction',
      'Upsell opportunity detection',
    ],
  },
  {
    tabKey: 'ecommerce',
    label: 'E-commerce',
    title: 'Maximize customer value',
    text: 'Score customers by lifetime value and target your best segments.',
    bullets: [
      'Customer lifetime value scoring',
      'Purchase propensity prediction',
      'Personalized offer targeting',
    ],
  },
];

const tabKeys: TabKey[] = ['sales', 'marketing', 'saas', 'ecommerce'];

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
            Built for your team
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
