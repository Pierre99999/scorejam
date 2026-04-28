'use client';

import { AnimatedSection } from '@/components/AnimatedSection';

const audiences = [
  'Independent consultants',
  'Fractional execs',
  'Methodology builders',
  'Executive coaches',
  'B2B trainers',
  'Subject-matter experts',
];

export function TrustStrip() {
  return (
    <section className="py-8 border-b border-[var(--line-subtle)]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center gap-4">
            <p className="text-sm font-medium text-[var(--text-secondary)]">
              Built for the people who sell their thinking.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-[var(--text-muted)]">
              {audiences.map((audience, index) => (
                <span key={audience} className="flex items-center">
                  {audience}
                  {index < audiences.length - 1 && (
                    <span className="ml-2 text-purple-400">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
