'use client';

import { useSignup } from './SignupContext';
import { AnimatedSection } from './AnimatedSection';

export function InlineCTA() {
  const { openSignup } = useSignup();

  return (
    <AnimatedSection className="py-28">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <a
          href="https://www.scorejam.app/app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 hover:-translate-y-0.5"
        >
          Start for free
        </a>
      </div>
    </AnimatedSection>
  );
}
