'use client';

import { motion } from 'framer-motion';
import { UserPlus, MessageCircle, Trophy, Target, Users, DollarSign, Send, FileText, MessageSquareText, TrendingUp, Crosshair, Layers, Check, CheckCircle } from 'lucide-react';

const situations = [
  {
    number: '01',
    timing: 'New lead',
    title: 'Are they in pain? Are they ready to buy?',
    description: 'Sort prospects by problem severity and buying readiness so your team calls the right people first.',
    icon: UserPlus,
    color: 'from-amber-400 to-orange-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    cta: 'Problem Discovery Diagnostic',
    secondaryCtas: ['Buying Readiness'],
  },
  {
    number: '02',
    timing: 'Active deal',
    title: 'Right fit? Right product? Real ROI?',
    description: 'Three diagnostics for live deals — pick the one closest to where the conversation is stuck.',
    icon: MessageCircle,
    color: 'from-green-400 to-emerald-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    cta: 'Solution Fit',
    secondaryCtas: ['Product Match Finder', 'ROI Calculator'],
  },
  {
    number: '03',
    timing: 'Deal closed',
    title: 'Why, and what changes next time?',
    description: 'Get the real answer from the buyer while it\'s fresh. Run it on wins to learn what to repeat, on losses to learn what to fix.',
    icon: Trophy,
    color: 'from-blue-400 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    cta: 'Win/Loss Diagnostic',
    secondaryCtas: ['Post-Trial Non-Purchase'],
  },
];

const specificSituations = [
  {
    icon: Target,
    title: 'Competitive Position',
    description: 'When you keep losing to the same competitor',
  },
  {
    icon: Users,
    title: 'Ideal Customer',
    description: 'When sales is closing the wrong deals',
  },
  {
    icon: DollarSign,
    title: 'Pricing Model',
    description: 'When you\'re not sure your pricing is right',
  },
];

const benefits = [
  {
    icon: MessageSquareText,
    title: 'The buyer\'s answer, not the rep\'s theory.',
    description: 'Your CRM is full of closed-lost reasons typed by the rep who lost the deal. "Price." "Timing." "Went with competitor." They\'re guesses, and they build the wrong playbook. ScoreJam goes to the buyer directly and gets the real reason.',
  },
  {
    icon: TrendingUp,
    title: 'Win/loss that runs on wins too.',
    description: 'Most teams only ask questions when they lose, if they ask at all. But the deals you won are where the repeatable pattern lives. ScoreJam\'s Win/Loss diagnostic runs on both: losses tell you what to fix, wins tell you what to systematize.',
  },
  {
    icon: Crosshair,
    title: 'Qualify by pain, not by gut feel.',
    description: 'Reps chase the loudest prospect, not the one in the most pain. ScoreJam sorts new leads by problem severity and buying readiness, so the team spends its hours on the deals most likely to close, in the right order.',
  },
  {
    icon: Layers,
    title: 'One platform for the whole deal cycle.',
    description: 'Discovery in one tool, mid-deal validation in another, win/loss in a consultant\'s slide deck six months later — disconnected data you can\'t learn from. ScoreJam keeps the full cycle in one place.',
  },
];

export function SalesTeamContent() {
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
            For Sales Teams
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight tracking-tight mb-6">
            Stop guessing why you{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              win and why you lose.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            ScoreJam gives sales teams diagnostics that line up with the three situations every deal moves through — a new lead, an active conversation, a deal that just closed. Qualify prospects by real pain and readiness. Diagnose what&apos;s actually stuck mid-deal. And get the truth about every win and loss from the only person who knows it — the buyer.
          </p>
          <div className="mt-8">
            <a
              href="https://www.scorejam.app/app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 hover:-translate-y-0.5"
            >
              Open ScoreJam for sales teams
              <span className="ml-2">&rarr;</span>
            </a>
          </div>
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

          <div className="grid sm:grid-cols-3 gap-4">
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

        {/* Why Sales Teams Choose ScoreJam */}
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
                Why sales teams choose ScoreJam
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

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-16"
        >
          <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
            <Target className="w-5 h-5 text-purple-400" />
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)]">Each diagnostic is independent.</strong>{' '}
            Run them in parallel on different deals.
          </p>
        </motion.div>

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
            Ready to know why you really win and lose?
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
            Open ScoreJam for Sales Teams
            <span className="ml-2">&rarr;</span>
          </a>
        </motion.section>
      </div>
    </main>
  );
}
