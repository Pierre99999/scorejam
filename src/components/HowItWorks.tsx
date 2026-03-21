'use client';

import { Database, Brain, Rocket } from 'lucide-react';
import { useTranslations } from 'next-intl';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

interface Step {
  number: string;
  icon: LucideIcon;
  titleKey: 'step1Title' | 'step2Title' | 'step3Title';
  textKey: 'step1Text' | 'step2Text' | 'step3Text';
  delay: number;
}

const steps: Step[] = [
  {
    number: '01',
    icon: Database,
    titleKey: 'step1Title',
    textKey: 'step1Text',
    delay: 0,
  },
  {
    number: '02',
    icon: Brain,
    titleKey: 'step2Title',
    textKey: 'step2Text',
    delay: 0.15,
  },
  {
    number: '03',
    icon: Rocket,
    titleKey: 'step3Title',
    textKey: 'step3Text',
    delay: 0.3,
  },
];

export function HowItWorks() {
  const t = useTranslations('howItWorks');

  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-widest text-purple-400 mb-3">
            Process
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            {t('title')}
          </h2>
        </AnimatedSection>

        {/* Steps grid */}
        <div className="relative">
          {/* Dashed connecting line — desktop only */}
          <div
            className="hidden md:block absolute top-[52px] left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-px pointer-events-none"
            aria-hidden="true"
          >
            <div className="w-full h-full border-t-2 border-dashed border-gray-700" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={step.number} delay={step.delay}>
                  <div className="flex flex-col items-center text-center">
                    {/* Numbered circle with gradient border */}
                    <div className="relative mb-6 z-10">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-px">
                        <div className="w-full h-full rounded-full bg-gray-950 flex items-center justify-center">
                          <span className="text-sm font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            {step.number}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 bg-purple-500/10">
                      <Icon className="w-6 h-6 text-purple-400" strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {t(step.titleKey)}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                      {t(step.textKey)}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
