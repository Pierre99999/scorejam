'use client';

import { AnimatedSection } from './AnimatedSection';
import { UserX, Wrench, Target, AlertTriangle, Megaphone } from 'lucide-react';

const mistakes = [
  { icon: UserX, text: 'Hiring the wrong person.' },
  { icon: Wrench, text: 'Building the wrong feature.' },
  { icon: Target, text: 'Chasing the wrong prospect.' },
  { icon: AlertTriangle, text: 'Ignoring the wrong customer signal.' },
  { icon: Megaphone, text: 'Launching the wrong message.' },
];

export function Channels() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Section heading */}
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
            The Cost of Being{' '}
            <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
              Wrong
            </span>
          </h2>
        </AnimatedSection>

        {/* Mistakes grid */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mistakes.map((mistake, index) => {
              const Icon = mistake.icon;
              return (
                <div
                  key={index}
                  className="group relative p-5 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-rose-500/30 transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-rose-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center group-hover:bg-rose-500/20 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-rose-400" />
                    </div>
                    <p className="text-base text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-300">
                      {mistake.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Conclusion */}
        <AnimatedSection delay={0.2} className="mt-14">
          <div className="relative rounded-2xl p-px bg-gradient-to-r from-rose-500/20 via-purple-500/20 to-blue-500/20">
            <div className="relative rounded-2xl bg-[var(--card-bg)] px-8 py-8 text-center overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-rose-500/5 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />
              <p className="relative text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-3">
                Every one of those decisions is expensive.
              </p>
              <p className="relative text-lg text-[var(--text-secondary)] mb-8">
                ScoreJam helps you test assumptions before you bet.
              </p>
              <a
                href="https://www.scorejam.app/app"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 hover:-translate-y-0.5"
              >
                Start Your First Diagnostic
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
