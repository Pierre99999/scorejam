'use client';

import { motion } from 'framer-motion';
import { ClipboardCheck, MessageSquare, TrendingUp, Award, BarChart3, GraduationCap, Users, Send, FileText } from 'lucide-react';

const stages = [
  {
    number: '01',
    timing: 'Before',
    title: 'Are we training the right things?',
    icon: ClipboardCheck,
    color: 'from-amber-400 to-orange-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    goesTo: 'Team or cohort about to be trained',
    getBack: 'Ranked capability gaps with urgency scores',
    cta: 'Training Needs Diagnostic',
  },
  {
    number: '02',
    timing: 'Right after',
    title: 'How was it?',
    icon: MessageSquare,
    color: 'from-green-400 to-emerald-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    goesTo: 'People who just attended',
    getBack: 'Program improvement report',
    cta: 'Training Satisfaction Diagnostic',
  },
  {
    number: '03',
    timing: '6 months later',
    title: 'Did it stick?',
    icon: TrendingUp,
    color: 'from-blue-400 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    goesTo: 'Original participants',
    getBack: 'Persistence score + reversion patterns',
    cta: 'Training Impact Diagnostic',
  },
];

const specificSituations = [
  {
    icon: Award,
    title: 'Skills Validation',
    description: 'Concrete picture of what people can do today',
  },
  {
    icon: BarChart3,
    title: 'Skills Maturity',
    description: 'Stage learners on beginner-to-advanced continuum',
  },
  {
    icon: GraduationCap,
    title: 'Certification Readiness',
    description: 'Predict pass likelihood before the exam',
  },
];

export function TrainersContent() {
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
            For Trainers
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
            Three moments.{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Three diagnostics.
            </span>
          </h1>
          <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
            Pick the moment you&apos;re in.
          </p>
        </motion.div>

        {/* Visual Timeline */}
        <div className="relative mb-20">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500/30 via-green-500/30 to-blue-500/30 -translate-y-1/2" />
          
          <div className="grid lg:grid-cols-3 gap-6">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Card */}
                  <div className={`relative rounded-2xl p-6 ${stage.bgColor} border ${stage.borderColor} hover:scale-[1.02] transition-transform duration-300`}>
                    {/* Timing badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${stage.color} text-white text-xs font-bold mb-4`}>
                      <span>{stage.timing}</span>
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stage.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-xl font-bold text-[var(--text-primary)] mb-6">
                      {stage.title}
                    </h2>
                    
                    {/* Info rows */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                          <Send className="w-4 h-4 text-[var(--text-secondary)]" />
                        </div>
                        <div>
                          <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Goes to</p>
                          <p className="text-sm text-[var(--text-primary)]">{stage.goesTo}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                          <FileText className="w-4 h-4 text-[var(--text-secondary)]" />
                        </div>
                        <div>
                          <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider">You get</p>
                          <p className="text-sm text-[var(--text-primary)]">{stage.getBack}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <a
                      href="https://www.scorejam.app/app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center w-full px-4 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r ${stage.color} hover:opacity-90 transition-opacity`}
                    >
                      {stage.cta}
                    </a>
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
            <p className="text-[var(--text-secondary)]">
              Beyond the three core moments
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {specificSituations.map((situation, index) => {
              const Icon = situation.icon;
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
                    {situation.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {situation.description}
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
            <strong className="text-[var(--text-primary)]">Multiple cohorts?</strong>{' '}
            Run different diagnostics on different groups simultaneously.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
