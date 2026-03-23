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

// Placeholder logo boxes (client logos / integrations)
function LogoPlaceholders() {
  const logos = [0, 1, 2, 3, 4, 5];
  return (
    <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
      {logos.map((i) => (
        <div
          key={i}
          className="h-12 w-24 rounded-lg bg-[var(--card-bg)] border border-[var(--line-subtle)] animate-pulse"
          style={{ animationDelay: `${i * 120}ms` }}
        />
      ))}
    </div>
  );
}

export function SocialProof() {
  const kpis = [
    { rawValue: '10', label: 'Minutes from objective to live diagnostic' },
    { rawValue: '95%', label: 'AI-Built. You edit the last 5%.' },
    { rawValue: '0', label: 'Code required. Zero learning curve, zero friction.' },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Title */}
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
            Results That Speak
          </h2>
        </AnimatedSection>

        {/* KPI counters */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 max-w-3xl mx-auto">
            {kpis.map((kpi, i) => (
              <AnimatedKpi key={i} rawValue={kpi.rawValue} label={kpi.label} />
            ))}
          </div>
        </AnimatedSection>

        {/* Logo row */}
        <AnimatedSection delay={0.2}>
          <LogoPlaceholders />
        </AnimatedSection>
      </div>
    </section>
  );
}
