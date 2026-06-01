'use client';

import { AnimatedSection } from './AnimatedSection';

const mistakes = [
  'Hiring the wrong person.',
  'Building the wrong feature.',
  'Chasing the wrong prospect.',
  'Ignoring the wrong customer signal.',
  'Launching the wrong message.',
];

export function Channels() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Section heading */}
        <AnimatedSection className="mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
            The Cost of Being Wrong
          </h2>
        </AnimatedSection>

        {/* Mistakes list */}
        <AnimatedSection delay={0.1}>
          <div className="space-y-3">
            {mistakes.map((mistake, index) => (
              <p key={index} className="text-lg text-[var(--text-secondary)]">
                {mistake}
              </p>
            ))}
          </div>
        </AnimatedSection>

        {/* Conclusion */}
        <AnimatedSection delay={0.2} className="mt-10">
          <p className="text-xl font-semibold text-[var(--text-primary)] mb-2">
            Every one of those decisions is expensive.
          </p>
          <p className="text-lg text-[var(--text-secondary)]">
            ScoreJam helps you test assumptions before you bet.
          </p>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.3} className="mt-10">
          <a
            href="https://www.scorejam.app/app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 hover:-translate-y-0.5"
          >
            Start Your First Diagnostic
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
