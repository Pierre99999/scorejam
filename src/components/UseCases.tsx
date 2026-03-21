'use client';

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { cn } from '@/lib/utils';

type TabKey = 'sales' | 'marketing' | 'saas' | 'ecommerce';

const tabKeys: TabKey[] = ['sales', 'marketing', 'saas', 'ecommerce'];

interface TabContent {
  tabKey: TabKey;
  titleKey: 'salesTitle' | 'marketingTitle' | 'saasTitle' | 'ecommerceTitle';
  textKey: 'salesText' | 'marketingText' | 'saasText' | 'ecommerceText';
  bullets: [string, string, string];
}

const tabs: TabContent[] = [
  {
    tabKey: 'sales',
    titleKey: 'salesTitle',
    textKey: 'salesText',
    bullets: ['salesBullet1', 'salesBullet2', 'salesBullet3'],
  },
  {
    tabKey: 'marketing',
    titleKey: 'marketingTitle',
    textKey: 'marketingText',
    bullets: ['marketingBullet1', 'marketingBullet2', 'marketingBullet3'],
  },
  {
    tabKey: 'saas',
    titleKey: 'saasTitle',
    textKey: 'saasText',
    bullets: ['saasBullet1', 'saasBullet2', 'saasBullet3'],
  },
  {
    tabKey: 'ecommerce',
    titleKey: 'ecommerceTitle',
    textKey: 'ecommerceText',
    bullets: ['ecommerceBullet1', 'ecommerceBullet2', 'ecommerceBullet3'],
  },
];

export function UseCases() {
  const t = useTranslations('useCases');
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            {t('title')}
          </h2>
        </AnimatedSection>

        {/* Tab buttons */}
        <AnimatedSection delay={0.1} className="flex flex-wrap justify-center gap-2 mb-10">
          {tabKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={cn(
                'px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border',
                activeTab === key
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white border-transparent shadow-lg shadow-purple-900/30'
                  : 'text-gray-400 border-gray-800 bg-gray-900/50 hover:border-gray-700 hover:text-gray-200 hover:bg-gray-900/70'
              )}
            >
              {t(key)}
            </button>
          ))}
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
                <div className="relative rounded-2xl bg-gray-900/80 p-8 sm:p-10 overflow-hidden backdrop-blur-sm">
                  {/* Subtle inner glow */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-purple-600/8 blur-2xl pointer-events-none" />
                  <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-blue-600/8 blur-2xl pointer-events-none" />

                  <div className="relative">
                    {/* Content title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                      {t(activeContent.titleKey)}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl">
                      {t(activeContent.textKey)}
                    </p>

                    {/* Bullet points */}
                    <ul className="space-y-4">
                      {activeContent.bullets.map((bulletKey) => (
                        <li key={bulletKey} className="flex items-start gap-3">
                          <CheckCircle
                            className="w-5 h-5 text-purple-400 shrink-0 mt-0.5"
                            strokeWidth={1.5}
                          />
                          <span className="text-gray-300 text-base leading-relaxed">
                            {t(bulletKey as Parameters<typeof t>[0])}
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
