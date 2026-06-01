'use client';

import { AnimatedSection } from './AnimatedSection';

const comparisons = [
  {
    other: 'Most tools collect answers.',
    scorejam: 'ScoreJam helps you understand what the answers mean.',
  },
  {
    other: 'Most AI tools generate content.',
    scorejam: 'ScoreJam generates a decision system.',
  },
  {
    other: 'Most surveys produce data.',
    scorejam: 'ScoreJam produces evidence.',
  },
];

export function Differentiation() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Title */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
            What Makes ScoreJam Different?
          </h2>
        </AnimatedSection>

        {/* Comparison list */}
        <div className="space-y-10">
          {comparisons.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="text-center">
                <p className="text-lg text-[var(--text-secondary)] mb-2">
                  {item.other}
                </p>
                <p className="text-xl font-semibold text-[var(--text-primary)]">
                  {item.scorejam}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
