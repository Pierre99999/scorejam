'use client';

import { motion } from 'framer-motion';
import { Rocket, Users, HeartPulse, AlertTriangle, Shield, Clock, Layers, Check, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';

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

const benefits = [
  {
    icon: AlertCircle,
    title: 'Churn signals while there\'s still time to act.',
    description: 'Health scores tell you a customer is red after they\'ve already checked out. ScoreJam surfaces the real signals — disengagement, dissatisfaction, competitive shopping — early enough to do something about it.',
  },
  {
    icon: RefreshCw,
    title: 'The whole lifecycle, not one snapshot.',
    description: 'Onboarding in one tool, NPS in another, churn discovered in a QBR. ScoreJam runs implementation, onboarding, health, and risk in one place — so each account\'s story stays continuous.',
  },
  {
    icon: Users,
    title: 'Built for accounts, not just feelings.',
    description: 'Generic surveys measure sentiment. ScoreJam diagnoses what\'s actually happening in the account — what\'s blocking activation, what\'s stalling goals, what\'s pulling them toward the exit.',
  },
  {
    icon: Layers,
    title: 'A hundred accounts, a hundred moments.',
    description: 'A good CS team isn\'t running one play. ScoreJam lets you run the implementation diagnostic on a new account and the churn diagnostic on a slipping one — same week, no reconfiguring.',
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight tracking-tight mb-6">
            Stop finding out they&apos;re leaving{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              when it&apos;s already too late.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            ScoreJam gives CS teams diagnostics for every stage your customers move through — implementation, onboarding, ongoing health, and risk. Catch the gaps before kickoff. See where onboarding stalls. Spot churn signals while you can still act. Run them in parallel across every account, each in its own moment.
          </p>
          <div className="mt-8">
            <a
              href="https://www.scorejam.app/app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 hover:-translate-y-0.5"
            >
              Open ScoreJam for customer success
              <span className="ml-2">&rarr;</span>
            </a>
          </div>
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

        {/* Video Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              30s video
            </h2>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden border border-[var(--card-border)] shadow-xl max-w-4xl mx-auto">
            <iframe
              src="https://www.youtube.com/embed/fqNVw6PB_Cc"
              title="ScoreJam for Customer Success"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </motion.section>

        {/* Why CS Teams Choose ScoreJam */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 py-16 -mx-6 px-6 bg-[var(--card-bg)] border-t border-b border-[var(--line-subtle)]"
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                Why CS teams choose ScoreJam
              </h2>
            </div>

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
        </motion.section>

        {/* Pricing Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 py-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
              Simple pricing
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              Start free, upgrade when you need more
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6">
              <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                Starter
              </p>
              <h3 className="text-4xl font-bold text-[var(--text-primary)] mb-1">
                Free
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-6">
                Perfect to discover ScoreJam
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[var(--text-muted)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[var(--text-muted)]" />
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--text-primary)] font-medium">Included:</span> Build, preview and test 2 diagnostics, no credit card required
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[var(--text-muted)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[var(--text-muted)]" />
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--text-primary)] font-medium">Credit Expiration:</span> Valid until used
                  </p>
                </div>
              </div>
            </div>

            {/* Subscription Plan */}
            <div className="relative bg-[var(--card-bg)] border-2 border-purple-500/50 rounded-2xl p-6">
              {/* Badge */}
              <div className="absolute -top-3 right-6">
                <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-rose-400 to-orange-400 text-white text-xs font-bold">
                  Subscription
                </span>
              </div>

              <p className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">
                Subscription
              </p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-lg text-[var(--text-secondary)]">$</span>
                <span className="text-4xl font-bold text-[var(--text-primary)]">14.99</span>
                <span className="text-sm text-[var(--text-secondary)]">/month</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-6">
                For teams that need real results
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-rose-400" />
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--text-primary)] font-medium">Included Credits:</span> 15 Credits / month
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-rose-400" />
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--text-primary)] font-medium">Credit Expiration:</span> Monthly reset
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Final CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="py-16 text-center"
        >
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-6 shadow-lg">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Ready to catch churn before it happens?
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
            Open ScoreJam for Customer Success
            <span className="ml-2">&rarr;</span>
          </a>
        </motion.section>
      </div>
    </main>
  );
}
