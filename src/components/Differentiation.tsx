'use client';

import { Zap, Cpu, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

interface DiffItem {
  icon: LucideIcon;
  gradient: string;
  title: string;
  text: string;
  delay: number;
}

const items: DiffItem[] = [
  {
    icon: Zap,
    gradient: 'from-purple-500 to-blue-500',
    title: 'Real-time',
    text: 'Scores update as your data changes. No batch processing, no delays.',
    delay: 0,
  },
  {
    icon: Cpu,
    gradient: 'from-blue-500 to-violet-500',
    title: 'AI-native',
    text: 'Built from the ground up with machine learning — not bolted on.',
    delay: 0.1,
  },
  {
    icon: Sparkles,
    gradient: 'from-violet-500 to-purple-500',
    title: 'Zero complexity',
    text: 'No setup headaches. Connect your data and get insights in minutes.',
    delay: 0.2,
  },
];

export function Differentiation() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Title */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
            Why ScoreJam
          </h2>
        </AnimatedSection>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={item.title} delay={item.delay}>
                <div className="group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 hover:border-[var(--card-border-hover)] transition-all duration-300 h-full text-center md:text-left">
                  {/* Icon with gradient background circle */}
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${item.gradient} mb-5 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                  </div>

                  {/* Title */}
                  <h3 className="text-[var(--text-primary)] font-semibold text-lg mb-2">{item.title}</h3>

                  {/* Description */}
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{item.text}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
