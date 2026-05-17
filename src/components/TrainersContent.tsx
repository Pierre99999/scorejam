'use client';

import { motion } from 'framer-motion';

const stages = [
  {
    number: '01',
    timing: 'Before the training',
    title: 'Are we training the right things?',
    description: "You're scoping a program. You know roughly what skills matter, but not where the actual gaps are. Training on the wrong things wastes time and trust. This diagnostic surfaces what your people genuinely need to learn — before you build the curriculum.",
    goesTo: 'the team or cohort about to be trained.',
    getBack: 'a ranked map of capability gaps, with the urgency and impact behind each one.',
    cta: 'Run a Training Needs Diagnostic',
    ctaLink: 'https://www.scorejam.app/app',
  },
  {
    number: '02',
    timing: 'Right after the training',
    title: 'How was it?',
    description: "Your cohort just finished. You need to know what worked, what missed, and what to change before the next group goes through. Generic satisfaction surveys (\"rate the instructor 1–5\") tell you nothing you can act on. This one evaluates the program, not the participant — content, facilitation, experience, knowledge transfer, value — with answers specific enough to drive real improvements.",
    goesTo: 'people who just attended.',
    getBack: 'a program-improvement report — what to keep, what to rework, what to drop.',
    cta: 'Run a Training Satisfaction Diagnostic',
    ctaLink: 'https://www.scorejam.app/app',
  },
  {
    number: '03',
    timing: 'Six months later',
    title: 'Did it stick?',
    description: "The training felt great on day one. But the question that matters is whether the methodology is still being used six months in — and whether the metrics it was supposed to move have actually moved. This diagnostic measures durable behavior change, attributable outcomes, and how far the methodology has spread beyond the original cohort.",
    goesTo: 'the original participants, six months or more after the program.',
    getBack: 'a persistence score, an outcome-attribution view, and a reversion-pattern map showing where the training is fading.',
    cta: 'Run a Training Impact Diagnostic',
    ctaLink: 'https://www.scorejam.app/app',
  },
];

const specificSituations = [
  {
    title: 'Measure actual skill levels — before, after, or independently of training',
    description: 'When you need a concrete picture of what people can do today. Useful as a baseline before a program, as proof of skill gain after one, or as a standalone capability check.',
    cta: 'Run a Skills Validation Diagnostic',
    ctaLink: 'https://www.scorejam.app/app',
  },
  {
    title: 'Stage learners on a beginner-to-advanced continuum',
    description: "When your training is leveled or your audience spans novices to experienced practitioners. This places each person on a maturity ladder and surfaces what they need to learn next.",
    cta: 'Run a Skills Maturity Diagnostic',
    ctaLink: 'https://www.scorejam.app/app',
  },
  {
    title: 'Check exam readiness before a certification attempt',
    description: "When you're prepping people for a specific certification. This predicts pass likelihood, surfaces weak domains, and tells you who's ready to sit the exam and who needs more time.",
    cta: 'Run a Certification Readiness Diagnostic',
    ctaLink: 'https://www.scorejam.app/app',
  },
];

export function TrainersContent() {
  return (
    <main className="min-h-screen bg-[var(--bg-base)] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-purple-400 text-xs font-medium tracking-wide uppercase mb-6">
            For Trainers
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
            Designed for people who{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              deliver training.
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Whatever stage you&apos;re in — scoping a program, just finished a cohort, or wondering if last year&apos;s training actually stuck — there&apos;s a diagnostic for that moment.
          </p>
          <p className="mt-4 text-base font-semibold text-[var(--text-primary)]">
            Pick the moment you&apos;re in.
          </p>
        </motion.div>

        {/* Stages */}
        <div className="space-y-16 mb-24">
          {stages.map((stage, index) => (
            <motion.article
              key={stage.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Stage header */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {stage.number}
                </span>
                <div>
                  <p className="text-sm font-medium text-purple-400 uppercase tracking-wider">
                    {stage.timing}
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                    {stage.title}
                  </h2>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                {stage.description}
              </p>

              {/* Goes out to / You get back */}
              <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6">
                <div className="space-y-3">
                  <p className="text-sm">
                    <span className="font-semibold text-purple-400">Goes out to:</span>{' '}
                    <span className="text-[var(--text-secondary)]">{stage.goesTo}</span>
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold text-purple-400">You get back:</span>{' '}
                    <span className="text-[var(--text-secondary)]">{stage.getBack}</span>
                  </p>
                </div>
              </div>

              {/* CTA */}
              <a
                href={stage.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors"
              >
                <span>&rarr;</span>
                {stage.cta}
              </a>

              {/* Divider */}
              {index < stages.length - 1 && (
                <div className="mt-16 border-t border-[var(--line-subtle)]" />
              )}
            </motion.article>
          ))}
        </div>

        {/* Specific Situations */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
            For specific situations
          </h2>
          <p className="text-[var(--text-secondary)] mb-10">
            Beyond the three core moments above, trainers reach for these when the situation calls for it.
          </p>

          <div className="space-y-8">
            {specificSituations.map((situation, index) => (
              <div
                key={index}
                className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 hover:border-[var(--card-border-hover)] transition-colors"
              >
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                  {situation.title}
                </h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  {situation.description}
                </p>
                <a
                  href={situation.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                >
                  <span>&rarr;</span>
                  {situation.cta}
                </a>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6 text-center"
        >
          <p className="text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)]">Running multiple cohorts?</strong>{' '}
            Each diagnostic is independent — you can run Stage 2 on the team that just finished and Stage 1 on the next cohort in the same week. They don&apos;t need to be sequenced.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
