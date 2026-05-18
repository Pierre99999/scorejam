'use client';

import { motion } from 'framer-motion';
import { Layers, Rocket, Zap, Target, Send, FileText } from 'lucide-react';

const situations = [
  {
    number: '01',
    timing: 'Deciding what to build next',
    title: 'Which features actually matter most?',
    description: 'Validate roadmap priorities with real user data — what\'s urgent, what\'s nice-to-have, what users would trade off if forced to choose.',
    icon: Layers,
    color: 'from-amber-400 to-orange-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    cta: 'Feature Prioritization Diagnostic',
    secondaryCtas: [],
  },
  {
    number: '02',
    timing: 'Getting ready to ship',
    title: 'Is this feature ready to launch?',
    description: 'Get a go / conditional-go / no-go read on a new feature from the people testing it. Surface launch blockers vs. post-launch improvements before GA.',
    icon: Rocket,
    color: 'from-green-400 to-emerald-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    cta: 'Beta Feature Validation Diagnostic',
    secondaryCtas: [],
  },
  {
    number: '03',
    timing: 'Improving what\'s live',
    title: 'Where\'s the friction, and what\'s blocking adoption?',
    description: 'Three diagnostics for shipped products — pick the one that matches what you need to know.',
    icon: Zap,
    color: 'from-blue-400 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    cta: 'UX Assessment',
    secondaryCtas: ['Product Satisfaction', 'Feature Adoption Barriers'],
  },
];

const specificSituations = [
  {
    icon: Target,
    title: 'Product-Market Fit Validator',
    description: 'When you\'re not sure the product is solving the right problem for the right market.',
  },
];

export function ProductManagerContent() {
  return (
    <main className="min-h-screen bg-[var(--bg-base)] pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-purple-400 text-xs font-medium tracking-wide uppercase mb-6">
            For Product Managers
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
            Pick the decision{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              you&apos;re making.
            </span>
          </h1>
        </motion.div>

        {/* Situations Grid */}
        <div className="relative mb-20">
          <div className="grid lg:grid-cols-3 gap-6 items-stretch">
            {situations.map((situation, index) => {
              const Icon = situation.icon;
              return (
                <motion.div
                  key={situation.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative h-full"
                >
                  {/* Card */}
                  <div className={`relative rounded-2xl p-6 ${situation.bgColor} border ${situation.borderColor} hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col`}>
                    {/* Timing badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${situation.color} text-white text-xs font-bold mb-4 w-fit`}>
                      <span>{situation.timing}</span>
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${situation.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 min-h-[56px]">
                      {situation.title}
                    </h2>
                    
                    {/* Description */}
                    <p className="text-sm text-[var(--text-secondary)] mb-6 flex-grow">
                      {situation.description}
                    </p>
                    
                    {/* Diagnostic names */}
                    <div className="mt-auto space-y-1 text-center">
                      <p className={`text-base font-semibold bg-gradient-to-r ${situation.color} bg-clip-text text-transparent`}>
                        {situation.cta}
                      </p>
                      {situation.secondaryCtas && situation.secondaryCtas.map((secondaryCta, idx) => (
                        <p
                          key={idx}
                          className={`text-base font-semibold bg-gradient-to-r ${situation.color} bg-clip-text text-transparent`}
                        >
                          {secondaryCta}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Single CTA button */}
          <div className="text-center mt-10">
            <a
              href="https://www.scorejam.app/app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 hover:-translate-y-0.5"
            >
              Open ScoreJam for product managers
            </a>
          </div>
        </div>

        {/* Specific Situations */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-2">
              For specific situations
            </h2>
          </div>

          <div className="grid sm:grid-cols-1 gap-4 max-w-md mx-auto">
            {specificSituations.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={index}
                  href="https://www.scorejam.app/app"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </motion.section>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5"
        >
          <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
            <Target className="w-5 h-5 text-purple-400" />
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)]">Each diagnostic is independent.</strong>{' '}
            Run them in parallel on different features or releases.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
