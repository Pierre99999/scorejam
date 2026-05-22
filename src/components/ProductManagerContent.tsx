'use client';

import { motion } from 'framer-motion';
import { Layers, Rocket, Zap, Target, Map, CheckSquare, Search, Check, CheckCircle } from 'lucide-react';

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

const benefits = [
  {
    icon: Map,
    title: 'Roadmap calls backed by users, not HiPPOs.',
    description: 'The loudest voice usually wins the roadmap. ScoreJam validates priorities with real user data — what\'s urgent, what\'s nice-to-have, what they\'d trade off.',
  },
  {
    icon: CheckSquare,
    title: 'A go/no-go you can defend.',
    description: '"Looks ready" isn\'t a launch decision. ScoreJam gives you a clear go / conditional-go / no-go from the people testing it — blockers separated from things that can wait.',
  },
  {
    icon: Search,
    title: 'Why adoption stalls, not just that it did.',
    description: 'Analytics tell you usage dropped. ScoreJam tells you why — where the friction is, what\'s confusing, what\'s missing — straight from the users hitting it.',
  },
  {
    icon: Layers,
    title: 'Every product decision in one place.',
    description: 'Roadmap surveys here, beta feedback there, adoption guesses everywhere. ScoreJam keeps prioritization, validation, and improvement together — one continuous read on the product.',
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight tracking-tight mb-6">
            Stop building on the{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              loudest opinion in the room.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            ScoreJam gives product teams diagnostics for every decision you make — what to build, what&apos;s ready to ship, and what&apos;s working once it&apos;s live. Validate the roadmap with real user data. Get a clear go/no-go before launch. Find the friction that&apos;s blocking adoption. The data comes from the people who actually use it.
          </p>
          <div className="mt-8">
            <a
              href="https://www.scorejam.app/app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 hover:-translate-y-0.5"
            >
              Open ScoreJam for product managers
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

        {/* Why PMs Choose ScoreJam */}
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
                Why PMs choose ScoreJam
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
            Ready to build on data, not opinions?
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
            Open ScoreJam for Product Managers
            <span className="ml-2">&rarr;</span>
          </a>
        </motion.section>
      </div>
    </main>
  );
}
