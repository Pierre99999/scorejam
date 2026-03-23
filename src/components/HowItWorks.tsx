'use client';

import { Target, Brain, BarChart3 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import Script from 'next/script';

declare global {
  interface Window {
    ScoreJam?: {
      popup: (formId: string, options: { width: string; height: string; onClose?: () => void }) => void;
    };
  }
}

interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  text: string;
  delay: number;
}

const steps: Step[] = [
  {
    number: '01',
    icon: Target,
    title: 'Start From Your Context',
    text: 'Paste a URL or describe your goal. We identify what matters.',
    delay: 0,
  },
  {
    number: '02',
    icon: Brain,
    title: 'We Design The Diagnostic',
    text: 'ScoreJam generates structured, statistically sound questions and scoring logic.',
    delay: 0.15,
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'Get Clarity On What To Do Next',
    text: 'Answers turn into scores, priorities, and clear actions.',
    delay: 0.3,
  },
];

export function HowItWorks() {
  const openScoreJamForm = () => {
    if (typeof window !== 'undefined' && window.ScoreJam) {
      window.ScoreJam.popup('scorejam-27', {
        width: '800px',
        height: '90vh',
        onClose: () => {
          console.log('Popup closed');
        },
      });
    }
  };

  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      <Script src="https://www.scorejam.app/sdk/embed.js" strategy="lazyOnload" />
      {/* Subtle gradient background */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-purple-400 text-xs font-medium tracking-wide uppercase mb-4">
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
            How It Works
          </h2>
        </AnimatedSection>

        {/* Steps grid */}
        <div className="relative">
          {/* Dashed connecting line — desktop only */}
          <div
            className="hidden md:block absolute top-[52px] left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-px pointer-events-none"
            aria-hidden="true"
          >
            <div className="w-full h-full border-t-2 border-dashed border-[var(--card-border-hover)]" />
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
                        <div className="w-full h-full rounded-full bg-[var(--page-bg)] flex items-center justify-center">
                          <span className="text-sm font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            {step.number}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 bg-[var(--badge-bg)]">
                      <Icon className="w-6 h-6 text-purple-400" strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3 className="text-[var(--text-primary)] font-semibold text-lg mb-2">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-xs mx-auto">
                      {step.text}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* Experience it button */}
        <AnimatedSection className="text-center mt-12" delay={0.4}>
          <button
            onClick={openScoreJamForm}
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 hover:-translate-y-0.5"
          >
            Experience it
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}
