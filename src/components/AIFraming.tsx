'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { TrendingUp, HeartHandshake, Layers, Users, GraduationCap, Rocket } from 'lucide-react';

const useCases = [
  {
    icon: TrendingUp,
    title: 'Sales',
    description: 'Know which prospects are worth pursuing, why deals stall, and why you really win or lose.',
    href: '/sales-team',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: HeartHandshake,
    title: 'Customer Success',
    description: 'Spot churn risks before renewal and understand what customers need to grow.',
    href: '/customer-success',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Layers,
    title: 'Product',
    description: 'Validate priorities, launches, adoption, and product-market fit with real user evidence.',
    href: '/product-manager',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: Users,
    title: 'HR & People',
    description: 'Evaluate role fit, performance, engagement, and culture with data you can act on.',
    href: '/hr',
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    icon: GraduationCap,
    title: 'Training',
    description: 'Measure needs before training, satisfaction after training, and impact months later.',
    href: '/trainers',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: Rocket,
    title: 'Founders',
    description: 'Know if the market is real, if the message lands, and where growth actually comes from.',
    href: '/founders',
    gradient: 'from-purple-500 to-blue-500',
  },
];

export function AIFraming() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-gradient-to-r from-purple-500/5 to-blue-500/5 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
            In the AI era, getting answers got cheap.{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Asking the right question is what&apos;s still hard.
            </span>
          </h2>
        </motion.div>

        {/* Use Cases Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <div className="mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-purple-400 text-xs font-medium tracking-wide uppercase mb-4">
              Use Cases
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Every important decision starts with a{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                question.
              </span>
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={useCase.href}
                    className="group block p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-purple-500/50 transition-all duration-300 h-full relative overflow-hidden"
                  >
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${useCase.gradient} blur-3xl opacity-20`} />
                    </div>
                    
                    {/* Icon */}
                    <div className={`relative inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${useCase.gradient} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    
                    <h4 className="relative text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {useCase.title}
                    </h4>
                    <p className="relative text-sm text-[var(--text-secondary)] leading-relaxed">
                      {useCase.description}
                    </p>
                    
                    {/* Arrow indicator */}
                    <div className="relative mt-4 flex items-center text-xs font-medium text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Learn more</span>
                      <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
