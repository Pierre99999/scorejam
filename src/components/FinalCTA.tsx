'use client';

import { AnimatedSection } from './AnimatedSection';
import { useSignup } from './SignupContext';

export function FinalCTA() {
  const { openSignup } = useSignup();

  return (
    <AnimatedSection className="relative w-full bg-gradient-to-br from-purple-900/20 via-[var(--page-bg)] to-blue-900/20 overflow-hidden">
      {/* Radial glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--glow-purple)] blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[var(--glow-blue)] blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-[var(--glow-purple)] blur-3xl" />
      </div>

      <div className="relative py-24 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] tracking-tight">
          Right Questions. Honest Answers. Clear Actions.
        </h2>
        <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
          Join the teams that stopped guessing and started scoring.
        </p>
        <div className="mt-10">
          <button
            onClick={openSignup}
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 hover:-translate-y-0.5"
          >
            Start for free
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
}
