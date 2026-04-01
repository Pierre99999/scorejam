'use client';

import { AnimatedSection } from './AnimatedSection';

export function Solution() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Radial gradient glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[600px] h-[300px] rounded-full bg-gradient-radial from-purple-600/15 via-blue-600/10 to-transparent blur-3xl" />
      </div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <AnimatedSection>
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-purple-400 text-xs font-medium tracking-wide uppercase mb-4">
            Solution
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight tracking-tight mb-6">
            From Noise To <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Next Steps</span>, Automatically
          </h2>
          <p className="text-[var(--text-secondary)] text-xl leading-relaxed mb-8">
            Tell ScoreJam what you&apos;re trying to learn. It builds a structured diagnostic with calibrated scoring, delivers it to your audience, and returns with the patterns, segments, and priorities you need to act.
          </p>
          <p className="text-lg sm:text-xl font-medium italic text-[var(--text-primary)] opacity-80 border-l-2 border-purple-500 pl-4 mx-auto max-w-xl text-left">
            You don&apos;t design questions. You don&apos;t analyze spreadsheets. You get clarity.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
