'use client';

import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

// Parse the display value into a numeric target and surrounding text
function parseKpiValue(raw: string): { prefix: string; number: number; suffix: string } {
  const match = raw.match(/^([^0-9]*)(\d+)([^0-9]*)$/);
  if (!match) return { prefix: '', number: 0, suffix: raw };
  return {
    prefix: match[1],
    number: parseInt(match[2], 10),
    suffix: match[3],
  };
}

function AnimatedKpi({ rawValue, label }: { rawValue: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);

  const { prefix, number, suffix } = parseKpiValue(rawValue);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1400; // ms
    const start = performance.now();

    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * number));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }, [isInView, number]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent tabular-nums">
        {prefix}
        {count}
        {suffix}
      </p>
      <p className="mt-3 text-[var(--text-secondary)] text-sm font-medium uppercase tracking-wider">{label}</p>
    </div>
  );
}



export function SocialProof() {
  const outcomes = [
    { title: 'From hours to minutes', text: 'A complete diagnostic, live and collecting responses, before your coffee gets cold.' },
    { title: 'From data to decisions', text: 'Every response is scored, segmented, and translated into priorities. No spreadsheet squinting.' },
    { title: 'From one-way surveys to two-way value', text: 'Participants get personalized insights. You get structured intelligence. Both sides win.' },
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Title */}
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
            What Changes When You Stop Guessing
          </h2>
        </AnimatedSection>

        {/* Outcome cards */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {outcomes.map((outcome, i) => (
              <div key={i} className="text-center p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--card-border-hover)] transition-colors">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">{outcome.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{outcome.text}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        
      </div>
    </section>
  );
}
