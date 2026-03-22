'use client';

import { Target, Clock, EyeOff } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

interface ProblemCard {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  title: string;
  text: string;
  delay: number;
}

const cards: ProblemCard[] = [
  {
    icon: Target,
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-400',
    title: 'No prioritization',
    text: 'Too many leads, no way to know which ones matter most.',
    delay: 0,
  },
  {
    icon: Clock,
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
    title: 'Wasted effort',
    text: 'Sales teams spend hours chasing prospects that will never convert.',
    delay: 0.1,
  },
  {
    icon: EyeOff,
    iconBg: 'bg-violet-500/10',
    iconColor: 'text-violet-400',
    title: 'Zero visibility',
    text: "Marketing can't see what's actually driving conversions.",
    delay: 0.2,
  },
];

export function Problem() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Subtle gradient background hint */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-widest text-purple-400 mb-3">
            The Problem
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight tracking-tight max-w-3xl mx-auto">
            You&apos;re losing opportunities every day
          </h2>
        </AnimatedSection>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <AnimatedSection key={card.title} delay={card.delay}>
                <div className="group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 hover:border-[var(--card-border-hover)] transition-all duration-300 h-full">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 ${card.iconBg} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className={`w-6 h-6 ${card.iconColor}`} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-[var(--text-primary)] font-semibold text-lg mb-2">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
