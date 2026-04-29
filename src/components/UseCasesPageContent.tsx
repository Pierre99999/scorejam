'use client';

import { motion } from 'framer-motion';

const useCases = [
  {
    persona: 'B2B sales consultant',
    color: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    headline: 'Stop giving away your pipeline playbook on free calls.',
    before: '60-min discovery calls. Half don\'t convert. They take the insights and ghost.',
    withScoreJam: 'Pipeline Health Diagnostic — 12 questions, scored report naming exactly where revenue leaks.',
    unlock: 'Calls start at \'let\'s discuss your three weak points\' — not \'tell me about your pipeline.\'',
  },
  {
    persona: 'Fractional CMO',
    color: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    headline: 'Prove their positioning is broken before they pay you to fix it.',
    before: 'Every prospect thinks their messaging is \'fine.\' You can\'t prove otherwise without doing the audit first.',
    withScoreJam: 'Drop in their URL + 3 competitors. AI-powered audit returns a comparative scorecard in minutes.',
    unlock: 'The audit names the gap. The call is now about scope, not convincing.',
  },
  {
    persona: 'Leadership coach',
    color: 'bg-green-500/20 text-green-400 border-green-500/30',
    headline: 'Stand out from 10,000 coaches who all sound the same.',
    before: '\'Develops high-performing leaders\' — every coach says it. Prospects pick whoever was referred.',
    withScoreJam: 'Leaders take a 16-question diagnostic built around your 5-pillar model. They get a profile in your voice.',
    unlock: 'They didn\'t meet \'a coach.\' They met your worldview operating on their leadership.',
  },
  {
    persona: 'Product strategy consultant',
    color: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    headline: 'Show founders that intuition isn\'t strategy — without confrontation.',
    before: 'Founders insist their strategy is sound. Pushing back loses the deal.',
    withScoreJam: 'Strategy Maturity Assessment scores discovery rigor, prioritization, validation depth, success metrics.',
    unlock: 'The diagnostic delivers the uncomfortable truth. You\'re the trusted guide who fixes it.',
  },
  {
    persona: 'Methodology trainer',
    color: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
    headline: 'Beat \'we\'ll just do it internally\' before they say it.',
    before: 'Buyers stall. They try to replicate your training from a slide deck.',
    withScoreJam: 'Pre-training capability diagnostic scores each participant. Manager sees aggregated team gaps.',
    unlock: 'Personalized intervention with measurable baseline. Procurement objections evaporate.',
  },
  {
    persona: 'Retention consultant',
    color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    headline: 'Prove churn isn\'t a support problem — it\'s a value-realization problem.',
    before: 'Founders blame their support team. They won\'t pay until they believe the real cause.',
    withScoreJam: 'Post-Purchase Evaluator routes churn signal to expectation, value, confidence, or onboarding.',
    unlock: 'Churn becomes diagnosable. You arrive with the answer, not the question.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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

      {/* Use Cases Grid */}
      <section className="relative py-16 px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative h-full rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] p-6 flex flex-col">
                {/* Persona Badge */}
                <span className={`inline-block self-start px-3 py-1 rounded-full text-xs font-medium border ${useCase.color} mb-4`}>
                  {useCase.persona}
                </span>
                
                {/* Headline */}
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6 leading-snug">
                  {useCase.headline}
                </h3>
                
                {/* Before Block */}
                <div className="mb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-red-400/80 mb-1 block">
                    Before
                  </span>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {useCase.before}
                  </p>
                </div>
                
                {/* With ScoreJam Block */}
                <div className="mb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-purple-400/80 mb-1 block">
                    With ScoreJam
                  </span>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {useCase.withScoreJam}
                  </p>
                </div>
                
                {/* Unlock Block */}
                <div className="mt-auto pt-4 border-t border-[var(--line-subtle)]">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-green-400/80 mb-1 block">
                    Unlock
                  </span>
                  <p className="text-sm text-[var(--text-primary)] font-medium leading-relaxed">
                    {useCase.unlock}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-6">
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
