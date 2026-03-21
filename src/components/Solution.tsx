'use client';

import { useTranslations } from 'next-intl';
import { AnimatedSection } from './AnimatedSection';

export function Solution() {
  const t = useTranslations('solution');

  // Split "Score what matters" to highlight "what matters"
  const title = t('title');
  const highlightKeywords = ['what matters', 'ce qui compte'];
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
          <p className="text-xs font-medium uppercase tracking-widest text-purple-400 mb-4">
            Solution
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
            {beforePart}
            {highlightedPart ? (
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {highlightedPart}
              </span>
            ) : null}
            {afterPart}
          </h2>
          <p className="text-gray-400 text-xl leading-relaxed mb-8">
            {t('text')}
          </p>
          <p className="text-lg sm:text-xl font-medium italic text-white/80 border-l-2 border-purple-500 pl-4 mx-auto max-w-xl text-left">
            {t('punchline')}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
