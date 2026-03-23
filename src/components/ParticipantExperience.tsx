"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ParticipantCard() {
  return (
    <div className="relative rounded-2xl p-px bg-gradient-to-br from-blue-500/50 via-blue-400/30 to-blue-500/20 shadow-2xl shadow-blue-900/20 dark:shadow-blue-500/10 max-w-2xl mx-auto">
      {/* Dark mode card */}
      <div className="hidden dark:block relative rounded-2xl bg-[#1a1f2e] p-8 overflow-hidden">
        {/* Inner card with border */}
        <div className="relative rounded-xl border border-blue-500/40 bg-[#1e2436] p-8">
          {/* Score badge */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">6.7/10</span>
            </div>
          </div>
          
          {/* Title */}
          <h3 className="text-2xl font-bold text-white text-center mb-4">
            Automated Consultant Tier
          </h3>
          
          {/* Description */}
          <p className="text-gray-300 text-center leading-relaxed">
            You require complex, multi-step recommendations that usually require a human consultant; ScoreJam automates this delivery instantly. Self-Assessment: High-fit; your logic requirements are exactly what we built the Smart Question Engine for.
          </p>
        </div>
        
        {/* Navigation buttons */}
        <div className="flex gap-3 mt-6">
          <button className="px-6 py-3 rounded-lg bg-gray-700 text-white font-medium hover:bg-gray-600 transition-colors">
            Previous
          </button>
          <button className="flex-1 px-6 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-400 transition-colors">
            Next
          </button>
        </div>
      </div>

      {/* Light mode card */}
      <div className="block dark:hidden relative rounded-2xl bg-white p-8 overflow-hidden">
        {/* Inner card with border */}
        <div className="relative rounded-xl border border-blue-300/60 bg-blue-50/50 p-8">
          {/* Score badge */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">6.7/10</span>
            </div>
          </div>
          
          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
            Automated Consultant Tier
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 text-center leading-relaxed">
            You require complex, multi-step recommendations that usually require a human consultant; ScoreJam automates this delivery instantly. Self-Assessment: High-fit; your logic requirements are exactly what we built the Smart Question Engine for.
          </p>
        </div>
        
        {/* Navigation buttons */}
        <div className="flex gap-3 mt-6">
          <button className="px-6 py-3 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition-colors">
            Previous
          </button>
          <button className="flex-1 px-6 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-400 transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export function ParticipantExperience() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[var(--glow-blue)] rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[var(--glow-purple)] rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <AnimatedSection className="text-center mb-4">
          <span className="px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-purple-400 text-xs font-medium tracking-wide uppercase">
            For Participants
          </span>
        </AnimatedSection>

        {/* Title */}
        <AnimatedSection className="text-center mb-4" delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
            An Experience, Not A Questionnaire
          </h2>
        </AnimatedSection>

        {/* Subtitle */}
        <AnimatedSection className="text-center mb-12" delay={0.15}>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Participants receive real-time feedback, scoring, and tailored recommendations as they progress. This creates continuous engagement, and eliminates survey fatigue.
          </p>
        </AnimatedSection>

        {/* Card */}
        <AnimatedSection delay={0.2}>
          <ParticipantCard />
        </AnimatedSection>
      </div>
    </section>
  );
}
