'use client';

import { motion } from 'framer-motion';

const useCases = [
  {
    persona: 'B2B sales consultant',
    headline: 'Stop giving away your pipeline playbook on free calls.',
    before: '60-min discovery calls. Half don\'t convert. They take the insights and ghost.',
    withScoreJam: 'Pipeline Health Diagnostic — 12 questions, scored report naming exactly where revenue leaks.',
    unlock: 'Calls start at "let\'s discuss your three weak points" — not "tell me about your pipeline."',
  },
  {
    persona: 'Fractional CMO',
    headline: 'Prove their positioning is broken before they pay you to fix it.',
    before: 'Every prospect thinks their messaging is "fine." You can\'t prove otherwise without doing the audit first.',
    withScoreJam: 'Drop in their URL + 3 competitors. AI-powered audit returns a comparative scorecard in minutes.',
    unlock: 'The audit names the gap. The call is now about scope, not convincing.',
  },
  {
    persona: 'Leadership coach',
    headline: 'Stand out from 10,000 coaches who all sound the same.',
    before: '"Develops high-performing leaders" — every coach says it. Prospects pick whoever was referred.',
    withScoreJam: 'Leaders take a 16-question diagnostic built around your 5-pillar model. They get a profile in your voice.',
    unlock: 'They didn\'t meet "a coach." They met your worldview operating on their leadership.',
  },
  {
    persona: 'Product strategy consultant',
    headline: 'Show founders that intuition isn\'t strategy — without confrontation.',
    before: 'Founders insist their strategy is sound. Pushing back loses the deal.',
    withScoreJam: 'Strategy Maturity Assessment scores discovery rigor, prioritization, validation depth, success metrics.',
    unlock: 'The diagnostic delivers the uncomfortable truth. You\'re the trusted guide who fixes it.',
  },
  {
    persona: 'Methodology trainer',
    headline: 'Beat "we\'ll just do it internally" before they say it.',
    before: 'Buyers stall. They try to replicate your training from a slide deck.',
    withScoreJam: 'Pre-training capability diagnostic scores each participant. Manager sees aggregated team gaps.',
    unlock: 'Personalized intervention with measurable baseline. Procurement objections evaporate.',
  },
  {
    persona: 'Retention consultant',
    headline: 'Prove churn isn\'t a support problem — it\'s a value-realization problem.',
    before: 'Founders blame their support team. They won\'t pay until they believe the real cause.',
    withScoreJam: 'Post-Purchase Evaluator routes churn signal to expectation, value, confidence, or onboarding.',
    unlock: 'Churn becomes diagnosable. You arrive with the answer, not the question.',
  },
];

export function UseCasesPageContent() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Hero Block */}
      <section className="relative py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium tracking-wide uppercase mb-6"
          >
            Built for experts
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight tracking-tight"
          >
            Let your expertise do the convincing — <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">before the call.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto"
          >
            Stop giving away your framework on free discovery calls. Turn it into a diagnostic that proves your value in 10 minutes.
          </motion.p>
        </div>
      </section>

      {/* Use Cases - Paragraph Style */}
      <section className="relative py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-24">
          {useCases.map((useCase, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Number + Persona */}
              <div className="mb-8">
                <span className="text-sm font-semibold text-purple-400 tracking-wider uppercase">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                  {useCase.persona}
                </h3>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] leading-snug mb-8">
                {useCase.headline}
              </h2>

              {/* Content Flow */}
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  <span className="font-semibold text-red-400">The problem:</span>{' '}
                  <span className="text-[var(--text-secondary)]">{useCase.before}</span>
                </p>
                
                <p>
                  <span className="font-semibold text-purple-400">With ScoreJam:</span>{' '}
                  <span className="text-[var(--text-secondary)]">{useCase.withScoreJam}</span>
                </p>
                
                <p className="text-[var(--text-primary)] font-medium border-l-4 border-purple-500 pl-6 py-2">
                  {useCase.unlock}
                </p>
              </div>

              {/* Divider - except last */}
              {index < useCases.length - 1 && (
                <div className="mt-16 border-b border-[var(--line-subtle)]" />
              )}
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="https://www.scorejam.app/app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 hover:-translate-y-0.5"
            >
              Try ScoreJam now
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
