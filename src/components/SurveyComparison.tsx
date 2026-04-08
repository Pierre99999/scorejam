'use client';

import { AnimatedSection } from './AnimatedSection';
import { X, Check } from 'lucide-react';

const surveyToolsItems = [
  'Pick from 3,000 templates',
  'Customize everything yourself',
  'Write your own questions (and hope they\'re good)',
  'Export raw data to a spreadsheet',
  'Figure out what it all means',
];

const scoreJamItems = [
  'Describe what you need to learn',
  'We build the diagnostic — questions, scoring, recommendations',
  'Review it. Publish it.',
  'Get scored segments, priorities, and actions — not raw data',
];

const statCards = [
  {
    label: "Creator's job",
    scoreJam: 'Review & publish',
    other: 'Not build from scratch',
  },
  {
    label: 'Question quality',
    scoreJam: 'Validated by design',
    other: 'Not dependent on the creator',
  },
  {
    label: 'Failure mode',
    scoreJam: 'Prevented',
    other: 'Not shifted to the user',
  },
];

export function SurveyComparison() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-purple-400 text-xs font-medium tracking-wide uppercase mb-4">
            The Problem with Survey Tools
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight tracking-tight text-balance max-w-4xl mx-auto">
            Survey tools trust you to write good questions. That&apos;s the problem.
          </h2>
          <p className="mt-6 text-[var(--text-secondary)] text-lg max-w-3xl mx-auto leading-relaxed text-pretty">
            Most assessments fail before a single response comes in — because the questions were broken from the start. Leading scales. Missing dimensions. Scores that don&apos;t differentiate. We&apos;d rather build it right than let you build it wrong.
          </p>
        </AnimatedSection>

        {/* Comparison columns */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Left column - Survey tools */}
            <div className="relative rounded-xl p-[1px] bg-gradient-to-br from-gray-500/30 via-gray-400/20 to-gray-500/10">
              <div className="rounded-xl bg-gray-50 dark:bg-gray-900 p-6 h-full">
                <h3 className="text-lg font-semibold text-[var(--text-secondary)] mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <X className="w-4 h-4 text-gray-500" />
                  </span>
                  With survey tools
                </h3>
                <ul className="space-y-4">
                  {surveyToolsItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                        <X className="w-3 h-3 text-gray-500" />
                      </span>
                      <span className="text-[var(--text-secondary)] text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right column - ScoreJam */}
            <div className="relative rounded-xl p-[1px] bg-gradient-to-br from-purple-500/50 via-blue-500/30 to-purple-500/20 shadow-lg shadow-purple-500/10">
              <div className="rounded-xl bg-gray-50 dark:bg-gray-900 p-6 h-full">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </span>
                  With ScoreJam
                </h3>
                <ul className="space-y-4">
                  {scoreJamItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </span>
                      <span className="text-[var(--text-primary)] text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Stat cards */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {statCards.map((card, i) => (
              <div
                key={i}
                className="relative rounded-xl p-[1px] bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-purple-500/10"
              >
                <div className="rounded-xl bg-white dark:bg-gray-800 p-5 h-full border border-gray-100 dark:border-gray-700">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-3">
                    {card.label}
                  </p>
                  <p className="text-lg font-bold text-purple-500 mb-1">
                    {card.scoreJam}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {card.other}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
