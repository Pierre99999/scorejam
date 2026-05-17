'use client';

import { motion } from 'framer-motion';
import { Rocket, Users, HeartPulse, AlertTriangle, Shield } from 'lucide-react';

const situations = [
  {
    number: '01',
    timing: 'About to deploy',
    title: 'Are they ready to go live?',
    description: 'Spot the gaps — technical, organizational, resourcing — before kickoff, so implementation doesn\'t stall.',
    icon: Rocket,
    color: 'from-amber-400 to-orange-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    cta: 'Implementation Readiness Diagnostic',
    secondaryCtas: [],
  },
  {
    number: '02',
    timing: 'Onboarding',
    title: 'Are they getting there, and is value landing?',
    description: 'Track activation milestones and surface where customers get stuck. Run it during onboarding to unblock, run it just after to evaluate the experience.',
    icon: Users,
    color: 'from-green-400 to-emerald-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    cta: 'Onboarding Progress',
    secondaryCtas: ['Post-Purchase Experience'],
  },
  {
    number: '03',
    timing: 'Live',
    title: 'Are they healthy, hitting their goals, and ready to grow?',
    description: 'Three diagnostics for active accounts — pick the one that matches what you need to know.',
    icon: HeartPulse,
    color: 'from-blue-400 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    cta: 'Customer Health',
    secondaryCtas: ['Goal Achievement', 'Expansion Readiness'],
  },
  {
    number: '04',
    timing: 'At risk',
    title: 'Are they about to leave, and can we save them?',
    description: 'Surface churn signals early — dissatisfaction, disengagement, competitive evaluation — and identify which accounts to prioritize for save motion.',
    icon: AlertTriangle,
    color: 'from-red-400 to-rose-500',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    cta: 'Churn Risk Diagnostic',
    secondaryCtas: [],
  },
];

const specificSituations = [
  {
    icon: Shield,
    title: 'Risk & Compliance',
    description: 'When a customer needs a security or compliance posture check',
  },
];

export function CustomerSuccessContent() {
  return (
    <main className="min-h-screen bg-[var(--bg-base)] pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-purple-400 text-xs font-medium tracking-wide uppercase mb-6">
            For Customer Success Teams
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
            Pick the stage{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              your customer is in.
            </span>
          </h1>
        </motion.div>

        {/* Situations Grid - 4 columns for CS */}
        <div className="relative mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {situations.map((situation, index) => {
              const Icon = situation.icon;
              return (
                <motion.div
                  key={situation.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative h-full"
                >
                  {/* Card */}
                  <div className={`relative rounded-2xl p-5 ${situation.bgColor} border ${situation.borderColor} hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col`}>
                    {/* Timing badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${situation.color} text-white text-xs font-bold mb-4 w-fit`}>
                      <span>{situation.timing}</span>
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${situation.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-lg font-bold text-[var(--text-primary)] mb-3 min-h-[52px]">
                      {situation.title}
                    </h2>
                    
                    {/* Description */}
                    <p className="text-sm text-[var(--text-secondary)] mb-6 flex-grow">
                      {situation.description}
                    </p>
                    
                    {/* CTA */}
                    <div className="mt-auto space-y-2">
                      <a
                        href="https://www.scorejam.app/app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center w-full px-4 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r ${situation.color} hover:opacity-90 transition-opacity`}
                      >
                        {situation.cta}
                      </a>
                      {situation.secondaryCtas && situation.secondaryCtas.map((secondaryCta, idx) => (
                        <a
                          key={idx}
                          href="https://www.scorejam.app/app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-xl text-sm font-medium text-[var(--text-primary)] border border-[var(--card-border)] hover:border-purple-500/50 hover:bg-purple-500/10 transition-all"
                        >
                          {secondaryCta}
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
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

          <div className="flex justify-center">
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
                  className="group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300 text-center max-w-sm"
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
            <Users className="w-5 h-5 text-purple-400" />
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)]">Each diagnostic is independent.</strong>{' '}
            Run them in parallel on different accounts.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
