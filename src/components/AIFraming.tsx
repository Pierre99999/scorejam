'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const useCases = [
  {
    title: 'Sales',
    description: 'Know which prospects are worth pursuing, why deals stall, and why you really win or lose.',
    href: '/sales-team',
  },
  {
    title: 'Customer Success',
    description: 'Spot churn risks before renewal and understand what customers need to grow.',
    href: '/customer-success',
  },
  {
    title: 'Product',
    description: 'Validate priorities, launches, adoption, and product-market fit with real user evidence.',
    href: '/product-manager',
  },
  {
    title: 'HR & People',
    description: 'Evaluate role fit, performance, engagement, and culture with data you can act on.',
    href: '/hr',
  },
  {
    title: 'Training',
    description: 'Measure needs before training, satisfaction after training, and impact months later.',
    href: '/trainers',
  },
  {
    title: 'Founders',
    description: 'Know if the market is real, if the message lands, and where growth actually comes from.',
    href: '/founders',
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
          className="mt-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-12">
            Every important decision starts with a question.
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={useCase.href}
                  className="block p-5 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-purple-500/50 transition-all duration-200 h-full"
                >
                  <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                    {useCase.title}
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {useCase.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
