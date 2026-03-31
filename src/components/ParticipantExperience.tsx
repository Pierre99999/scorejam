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

function ParticipantFlow() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6">
      {/* Image 1 - Questions */}
      <div className="relative rounded-xl p-[1px] bg-gradient-to-br from-purple-500/50 via-purple-400/30 to-purple-500/20 shadow-lg shadow-purple-500/10 w-full max-w-xs">
        <div className="rounded-xl bg-white dark:bg-[#0f1219] p-2 overflow-hidden">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%201-Ba80hITOfBnfky7vSv9bvSx9AxCBZb.png"
            alt="ScoreJam diagnostic questionnaire"
            className="w-full h-64 object-cover object-top rounded-lg dark:invert dark:hue-rotate-180"
          />
          <p className="text-center text-sm font-medium text-[var(--text-primary)] mt-2">Questions</p>
        </div>
      </div>

      {/* Arrow 1 */}
      <div className="hidden lg:flex items-center justify-center text-purple-400">
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>
      <div className="lg:hidden flex items-center justify-center text-purple-400">
        <svg className="w-8 h-8 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>

      {/* Image 2 - Recommendation */}
      <div className="relative rounded-xl p-[1px] bg-gradient-to-br from-purple-500/50 via-purple-400/30 to-purple-500/20 shadow-lg shadow-purple-500/10 w-full max-w-xs">
        <div className="rounded-xl bg-white dark:bg-[#0f1219] p-2 overflow-hidden">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%202-va44g9fX6fnLFurnjI2h8q9yExhnj1.png"
            alt="Participant recommendation with score"
            className="w-full h-64 object-cover object-top rounded-lg dark:invert dark:hue-rotate-180"
          />
          <p className="text-center text-sm font-medium text-[var(--text-primary)] mt-2">Real-time Feedback</p>
        </div>
      </div>

      {/* Arrow 2 */}
      <div className="hidden lg:flex items-center justify-center text-purple-400">
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>
      <div className="lg:hidden flex items-center justify-center text-purple-400">
        <svg className="w-8 h-8 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>

      {/* Image 3 - Final Recommendations */}
      <div className="relative rounded-xl p-[1px] bg-gradient-to-br from-purple-500/50 via-purple-400/30 to-purple-500/20 shadow-lg shadow-purple-500/10 w-full max-w-xs">
        <div className="rounded-xl bg-white dark:bg-[#0f1219] p-2 overflow-hidden">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%203-7FhLXg8UcrqoD1Jd0F90ZiT6nzHOTF.png"
            alt="Final personalized recommendations"
            className="w-full h-64 object-cover object-top rounded-lg dark:invert dark:hue-rotate-180"
          />
          <p className="text-center text-sm font-medium text-[var(--text-primary)] mt-2">Full Recommendations</p>
        </div>
      </div>
    </div>
  );
}

export function ParticipantExperience() {
  return (
    <section className="relative py-16 px-6 overflow-hidden">
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
            They Get <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Insights</span>. You Get <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Intelligence</span>.
          </h2>
        </AnimatedSection>

        {/* Subtitle */}
        <AnimatedSection className="text-center mb-12" delay={0.15}>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed mb-4">
            Every participant receives real-time scoring, personalized recommendations, and a clear picture of where they stand. It&apos;s not a form, it&apos;s a conversation that gives back.
          </p>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            That&apos;s why completion rates stay high and the data you collect actually means something.
          </p>
        </AnimatedSection>

        {/* Image Flow */}
        <AnimatedSection delay={0.2}>
          <ParticipantFlow />
        </AnimatedSection>
      </div>
    </section>
  );
}
