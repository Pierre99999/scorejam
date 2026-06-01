'use client';

import { AnimatedSection } from './AnimatedSection';
import { ArrowRight } from 'lucide-react';

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

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Title */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
            What Makes ScoreJam{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Different?
            </span>
          </h2>
        </AnimatedSection>

        {/* Comparison cards */}
        <div className="space-y-6">
          {comparisons.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="group relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex flex-col md:flex-row items-stretch rounded-2xl border border-[var(--card-border)] overflow-hidden">
                  {/* Others side */}
                  <div className="flex-1 p-6 bg-[var(--card-bg)]/50">
                    <p className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider mb-2">
                      Others
                    </p>
                    <p className="text-lg text-[var(--text-secondary)]">
                      {item.other}
                    </p>
                  </div>
                  
                  {/* Arrow divider */}
                  <div className="hidden md:flex items-center justify-center w-16 bg-gradient-to-b from-purple-500/10 to-blue-500/10">
                    <ArrowRight className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="md:hidden flex items-center justify-center h-12 bg-gradient-to-r from-purple-500/10 to-blue-500/10">
                    <ArrowRight className="w-5 h-5 text-purple-400 rotate-90" />
                  </div>
                  
                  {/* ScoreJam side */}
                  <div className="flex-1 p-6 bg-gradient-to-br from-purple-500/5 to-blue-500/5">
                    <p className="text-xs font-medium text-purple-400 uppercase tracking-wider mb-2">
                      ScoreJam
                    </p>
                    <p className="text-lg font-semibold text-[var(--text-primary)]">
                      {item.scorejam}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
