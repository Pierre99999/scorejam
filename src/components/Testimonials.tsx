'use client';

import { AnimatedSection } from './AnimatedSection';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'Scorejam completely changed how we prioritize leads. We finally focus on what actually converts.',
    author: 'Sarah M.',
    role: 'Head of Sales, TechCorp',
  },
  {
    quote: 'Setup took 10 minutes. The insights we got in the first week were worth months of manual analysis.',
    author: 'Marc D.',
    role: 'Marketing Director, GrowthLab',
  },
  {
    quote: 'We reduced our sales cycle by 35% simply by scoring prospects with Scorejam. Game changer.',
    author: 'Julie R.',
    role: 'CEO, DataFlow',
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-widest text-purple-400 mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
            What Our Users Say
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <AnimatedSection key={item.author} delay={index * 0.1}>
              <div className="group relative h-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 transition-all duration-300 hover:border-[var(--card-border-hover)]">
                <Quote className="w-8 h-8 text-purple-500/30 mb-4" />
                <blockquote className="text-[var(--text-secondary)] leading-relaxed mb-6 italic">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <div className="mt-auto">
                  <p className="text-[var(--text-primary)] font-semibold text-sm">
                    {item.author}
                  </p>
                  <p className="text-[var(--text-muted)] text-sm">
                    {item.role}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
