'use client';

import { AnimatedSection } from './AnimatedSection';

export function ManifestoContent() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Hero */}
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold tracking-wider uppercase mb-6">
            Our philosophy
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6 text-balance">
            Freedom kills quality. We chose quality.
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto text-balance">
            Survey tools give you total freedom — to write bad questions, build broken scoring, and collect data that leads nowhere. We took that freedom away on purpose.
          </p>
        </AnimatedSection>

        {/* The dirty secret of survey tools */}
        <AnimatedSection delay={0.1} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-6">
            The dirty secret of survey tools
          </h2>
          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
            <p>
              Typeform, SurveyMonkey, Google Forms — same promise: 3,000 templates, total customization, change everything. Sounds great. Also why most assessments are garbage.
            </p>
            <p>
              The person building the questionnaire isn&apos;t a methodologist. They&apos;re a CS manager who needs answers by Friday. They pick a template, tweak some questions, and unknowingly introduce leading scales, flat scoring, and missing dimensions.
            </p>
            <p>
              These tools have a philosophy problem. They believe the creator knows best. We believe the opposite.
            </p>
          </div>
        </AnimatedSection>

        {/* Pullquote 1 */}
        <AnimatedSection delay={0.15} className="mb-16">
          <blockquote className="relative py-8 px-6 md:px-12 border-l-4 border-purple-500 bg-[var(--card-bg)] rounded-r-xl">
            <p className="text-xl md:text-2xl font-medium text-[var(--text-primary)] italic">
              &ldquo;Giving everyone a scalpel doesn&apos;t make everyone a surgeon.&rdquo;
            </p>
          </blockquote>
        </AnimatedSection>

        {/* Our bet */}
        <AnimatedSection delay={0.2} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-6">
            Our bet
          </h2>
          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
            <p className="text-lg font-medium text-[var(--text-primary)]">
              You should not be writing your own diagnostic questions.
            </p>
            <p>
              Building a sound diagnostic is a discipline — scoring direction, format diversity, anchor calibration, statistical differentiation — that has nothing to do with your domain expertise.
            </p>
            <p>
              You know what you need to learn. That&apos;s the hard part. Turning that into a reliable instrument? That&apos;s our job. You give us context. We deliver a finished diagnostic. You review it and publish it.
            </p>
          </div>
        </AnimatedSection>

        {/* Why constraints beat customization */}
        <AnimatedSection delay={0.25} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-6">
            Why constraints beat customization
          </h2>
          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
            <p>
              Can you change the questions? You can adjust wording. You cannot blow the structure apart.
            </p>
            <p>
              Every question maps to a focus area, carries a scoring direction, and uses a format chosen for signal quality. Delete one and you lose a critical data point. Add one and you risk breaking the scoring. Reorder them and you tank completion rates.
            </p>
            <p className="font-medium text-[var(--text-primary)]">
              The constraint is the quality. Remove it and you&apos;re back to a form builder.
            </p>
          </div>
        </AnimatedSection>

        {/* Pullquote 2 */}
        <AnimatedSection delay={0.3} className="mb-16">
          <blockquote className="relative py-8 px-6 md:px-12 border-l-4 border-purple-500 bg-[var(--card-bg)] rounded-r-xl">
            <p className="text-xl md:text-2xl font-medium text-[var(--text-primary)] italic">
              &ldquo;We don&apos;t give you a form builder. We give you a finished diagnostic.&rdquo;
            </p>
          </blockquote>
        </AnimatedSection>

        {/* Comparison */}
        <AnimatedSection delay={0.35} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8">
            Survey tools vs ScoreJam
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Survey tools */}
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold text-[var(--text-secondary)] mb-4">With survey tools</h3>
              <ul className="space-y-3">
                {[
                  'Pick from 3,000 templates',
                  'Customize every question, color, layout',
                  'Write your own questions and hope they work',
                  'Collect answers with no built-in scoring',
                  'Export to spreadsheet, figure it out yourself',
                  'Participants fill out a form and leave',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                    <span className="text-gray-400 mt-0.5">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ScoreJam */}
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-purple-400 mb-4">With ScoreJam</h3>
              <ul className="space-y-3">
                {[
                  'Describe what you need to learn',
                  'We build the diagnostic — questions, scoring, recommendations',
                  'Review and publish',
                  'Every answer scored, segmented, prioritized',
                  'Intelligence dashboards with actions',
                  'Participants get personalized insights back',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--text-primary)]">
                    <span className="text-purple-400 mt-0.5">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* What we believe */}
        <AnimatedSection delay={0.4} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8">
            What we believe
          </h2>
          <div className="space-y-6">
            {[
              { title: 'Freedom is overrated', desc: "We'd rather constrain you to a great outcome than empower you to build a mediocre one." },
              { title: 'Questions are engineering', desc: "A good question produces a score that differentiates, feeds an analytics dimension, and drives a recommendation. That's engineering, not copywriting." },
              { title: 'Context in, intelligence out', desc: 'You know your business. We know diagnostics. The combination is better than either alone.' },
              { title: 'Participants deserve value', desc: "Ours get real-time scored feedback and personalized recommendations. That's why they finish." },
              { title: 'Data without decisions is noise', desc: "Scored segments with priorities and actions — that's intelligence. A spreadsheet of responses is not." },
            ].map((belief, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-1">{belief.title}</h3>
                  <p className="text-[var(--text-secondary)]">{belief.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* What this means in practice */}
        <AnimatedSection delay={0.45} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8">
            What this means in practice
          </h2>
          <div className="space-y-4">
            {[
              { yes: true, label: 'Diagnostic ready in minutes', desc: 'Describe your goal. Get a complete diagnostic ready to publish.' },
              { yes: false, label: 'No drag-and-drop builder', desc: 'No blank canvas. No "add question" button. Built for you.' },
              { yes: true, label: 'Fine-tune wording', desc: 'Adjust phrasing to match your tone. Structure stays intact.' },
              { yes: false, label: 'No structural overhaul', desc: "Can't delete focus areas or rewrite scoring. That's the guarantee." },
              { yes: true, label: 'Intelligence dashboards', desc: 'Segments, priorities, risk flags, and actions.' },
              { yes: false, label: 'No raw data dumps', desc: 'No spreadsheet. No "figure it out yourself."' },
              { yes: true, label: 'Participants get value back', desc: 'Scored feedback and personalized recommendations in real time.' },
              { yes: false, label: 'No anonymous form experience', desc: 'People engage because they get something back.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 py-3 border-b border-[var(--line-subtle)] last:border-b-0">
                <span className={`px-2 py-0.5 rounded text-xs font-semibold ${item.yes ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                  {item.yes ? 'YES' : 'NO'}
                </span>
                <div>
                  <h3 className="font-medium text-[var(--text-primary)]">{item.label}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* This isn't for everyone */}
        <AnimatedSection delay={0.5} className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-6">
            This isn&apos;t for everyone
          </h2>
          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
            <p>
              If you want to hand-craft every question and control every pixel — Typeform is beautiful, SurveyMonkey is powerful, Google Forms is free. Use them.
            </p>
            <p>
              But if you need answers — scored, segmented, actionable, without weeks of design and analysis — that&apos;s what we built.
            </p>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.55} className="text-center">
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
              Trust the diagnostic. See what it finds.
            </h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-lg mx-auto">
              Five minutes. No form builder. No templates. Context in, intelligence out.
            </p>
            <a
              href="https://www.scorejam.app/app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-purple-900/30"
            >
              Start for free
            </a>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
