'use client';

import { AnimatedSection } from './AnimatedSection';

export function Solution() {
  const title = 'From Questions To Decisions Automatically';
  const highlightKeywords = ['decisions'];
  let highlightedPart = '';
  let beforePart = title;
  let afterPart = '';

  for (const kw of highlightKeywords) {
    const idx = title.toLowerCase().indexOf(kw.toLowerCase());
    if (idx !== -1) {
      beforePart = title.slice(0, idx);
      highlightedPart = title.slice(idx, idx + kw.length);
      afterPart = title.slice(idx + kw.length);
      break;
    }
  }

  return (
    <section className="relative py-24 overflow-hidden">
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
            {beforePart}
            {highlightedPart ? (
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {highlightedPart}
              </span>
            ) : null}
            {afterPart}
          </h2>
          <p className="text-[var(--text-secondary)] text-xl leading-relaxed mb-8">
            ScoreJam builds structured diagnostics, scores what matters, and shows you exactly what to do next.
          </p>
          <p className="text-lg sm:text-xl font-medium italic text-[var(--text-primary)] opacity-80 border-l-2 border-purple-500 pl-4 mx-auto max-w-xl text-left">
            You&apos;re not collecting answers. You&apos;re generating decisions.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
