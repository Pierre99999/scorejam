'use client';

import { motion } from 'framer-motion';

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
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[var(--text-primary)] leading-snug tracking-tight">
            In the AI era, getting answers got cheap.{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Asking the right question is what&apos;s still hard.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
