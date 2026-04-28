'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface UseCase {
  team: string;
  gradient: string;
  tagline: string;
  description: string;
}

const useCases: UseCase[] = [
  {
    team: 'Sales',
    gradient: 'from-purple-500 to-blue-500',
    tagline: 'Qualify leads before the first call',
    description:
      'Send a 5-minute diagnostic before discovery. Walk in knowing their pain, budget signals, and urgency — not guessing from a job title.',
  },
  {
    team: 'Customer Success',
    gradient: 'from-blue-500 to-cyan-500',
    tagline: 'Spot churn risk before it satisfies',
    description:
      'Quarterly health checks that score sentiment, adoption gaps, and expansion readiness. Know who needs a call before they send the cancellation email.',
  },
  {
    team: 'HR',
    gradient: 'from-cyan-500 to-teal-500',
    tagline: 'Hear what exit interviews miss',
    description:
      'Pulse checks, onboarding feedback, and culture diagnostics that surface patterns — not just complaints. Built for People teams who want signal, not surveys.',
  },
  {
    team: 'L&D',
    gradient: 'from-teal-500 to-green-500',
    tagline: 'Assess skills before you design training',
    description:
      'Pre- and post-program diagnostics that prove impact and surface skill gaps. Stop guessing what your learners need.',
  },
  {
    team: 'Marketing',
    gradient: 'from-green-500 to-yellow-500',
    tagline: 'Capture intent, not just emails',
    description:
      "Turn content downloads into scored leads with embedded diagnostics. Know who's ready to buy, who's just browsing, and what message will land.",
  },
  {
    team: 'Product',
    gradient: 'from-yellow-500 to-orange-500',
    tagline: 'Prioritize with real user signal',
    description:
      "Discovery surveys that score feature demand, willingness to pay, and switching intent. Ship what matters, not what's loudest.",
  },
];

function AnimatedSection({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function B2BTeamsContent() {
  const [active, setActive] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const next = useCallback(() => setActive((i) => (i + 1) % useCases.length), []);
  const prev = useCallback(() => setActive((i) => (i - 1 + useCases.length) % useCases.length), []);

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [autoPlay, next]);

  const current = useCases[active];

  return (
    <main className="pt-24 pb-20">
      <section className="relative py-28 overflow-hidden">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-purple-500/10 blur-[120px]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="inline-block px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-purple-400 text-xs font-medium uppercase tracking-wide mb-6">
              For B2B Teams
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
              Built For Your Team
            </h1>
            <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Sales · CS · HR · L&D · Marketing · Product
            </p>
          </AnimatedSection>

          {/* Team pills */}
          <AnimatedSection delay={0.2} className="mt-10">
            <div className="flex flex-wrap justify-center gap-2">
              {useCases.map((uc, i) => (
                <button
                  key={uc.team}
                  onClick={() => {
                    setActive(i);
                    setAutoPlay(false);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    i === active
                      ? `bg-gradient-to-r ${current.gradient} text-white shadow-lg`
                      : 'bg-[var(--card-bg)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--line-subtle)]'
                  }`}
                >
                  {uc.team}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Card */}
          <AnimatedSection delay={0.3} className="mt-10">
            <div
              className="relative rounded-2xl p-px bg-gradient-to-br from-purple-500/40 via-blue-500/30 to-purple-500/10 shadow-xl max-w-2xl mx-auto"
              onMouseEnter={() => setAutoPlay(false)}
              onMouseLeave={() => setAutoPlay(true)}
            >
              <div className="relative rounded-2xl bg-[var(--card-bg)] p-8 min-h-[180px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${current.gradient} text-white mb-4`}
                    >
                      {current.team}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">{current.tagline}</h3>
                    <p className="mt-3 text-[var(--text-secondary)] leading-relaxed">{current.description}</p>
                  </motion.div>
                </AnimatePresence>

                {/* Nav arrows */}
                <button
                  onClick={() => {
                    prev();
                    setAutoPlay(false);
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[var(--card-bg)] border border-[var(--line-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--card-border-hover)] transition-all"
                  aria-label="Previous use case"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => {
                    next();
                    setAutoPlay(false);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[var(--card-bg)] border border-[var(--line-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--card-border-hover)] transition-all"
                  aria-label="Next use case"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </AnimatedSection>

          {/* Progress dots */}
          <AnimatedSection delay={0.4} className="mt-6">
            <div className="flex justify-center gap-2">
              {useCases.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActive(i);
                    setAutoPlay(false);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active ? 'w-6 bg-purple-500' : 'w-1.5 bg-[var(--text-muted)]'
                  }`}
                  aria-label={`Go to ${useCases[i].team}`}
                />
              ))}
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection delay={0.5} className="mt-12">
            <a
              href="https://www.scorejam.app/app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 hover:-translate-y-0.5"
            >
              Start for free
            </a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
