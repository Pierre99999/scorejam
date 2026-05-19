'use client';

import { motion } from 'framer-motion';
import { ClipboardCheck, MessageSquare, TrendingUp, Target, Clock, FileCheck, Layers, CheckCircle } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Designed for training, not adapted from surveys.',
    description: 'Most trainers measure training with survey tools built for marketing research or NPS. They produce "satisfaction averages" that say nothing about whether the training worked.',
  },
  {
    icon: Clock,
    title: 'The 6-month diagnostic that almost nobody runs.',
    description: 'Every trainer knows they should measure impact months after the program ends. Almost none do, because designing a behavior-persistence instrument from scratch is hard.',
  },
  {
    icon: FileCheck,
    title: 'Evidence you can hand to a client or a boss.',
    description: 'Spreadsheet feedback and Typeform exports don\'t survive a stakeholder meeting. ScoreJam produces structured reports — ranked gap maps, program improvement reports, persistence scores.',
  },
  {
    icon: Layers,
    title: 'One platform, three moments, same cohort.',
    description: 'Trainers running needs assessments in one tool, post-program surveys in another, and skipping impact altogether end up with disconnected data they can\'t cross-reference.',
  },
];

const moments = [
  {
    timing: 'Before',
    title: 'Training Needs Diagnostic',
    description: 'Scope programs against real gaps',
    icon: ClipboardCheck,
    color: 'from-amber-400 to-orange-500',
  },
  {
    timing: 'Right after',
    title: 'Training Satisfaction Diagnostic',
    description: 'Evaluate cohorts in a way that drives change',
    icon: MessageSquare,
    color: 'from-green-400 to-emerald-500',
  },
  {
    timing: '6 months later',
    title: 'Training Impact Diagnostic',
    description: 'Prove durable behavior change',
    icon: TrendingUp,
    color: 'from-blue-400 to-cyan-500',
  },
];

export function TrainersLandingContent() {
  return (
    <main className="min-h-screen bg-[var(--bg-base)]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[var(--glow-purple)] blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[var(--glow-blue)] blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-purple-400 text-xs font-medium tracking-wide uppercase mb-6">
              For Trainers
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight tracking-tight mb-6">
              Stop guessing what your training{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                actually changes.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto mb-10">
              ScoreJam gives trainers three diagnostics that line up with the three moments that matter — before, right after, and six months later. Scope programs against real gaps. Evaluate cohorts in a way that actually drives change. Prove durable behavior change to clients and stakeholders who keep asking &quot;did it work?&quot;
            </p>

            <a
              href="https://www.scorejam.app/app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 hover:-translate-y-0.5"
            >
              Open ScoreJam for Trainers
              <span className="ml-2">&rarr;</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Three Moments Section */}
      <section className="py-20 border-t border-[var(--line-subtle)]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Three moments that matter
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              One platform, consistent measurement, connected insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {moments.map((moment, index) => {
              const Icon = moment.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 text-center hover:border-purple-500/30 transition-colors"
                >
                  <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${moment.color} text-white text-xs font-bold mb-4`}>
                    {moment.timing}
                  </div>
                  <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${moment.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                    {moment.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {moment.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[var(--card-bg)] border-t border-b border-[var(--line-subtle)]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Why trainers choose ScoreJam
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-6 shadow-lg">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Ready to prove your training works?
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-8">
              Start free. Your first diagnostic up and running in 5 minutes.
            </p>
            <a
              href="https://www.scorejam.app/app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 hover:-translate-y-0.5"
            >
              Open ScoreJam for Trainers
              <span className="ml-2">&rarr;</span>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
