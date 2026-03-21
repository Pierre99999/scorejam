'use client';

import { useTranslations } from 'next-intl';
import { AnimatedSection } from './AnimatedSection';
import { Quote } from 'lucide-react';

const testimonials = [
  { quoteKey: 'quote1', authorKey: 'author1', roleKey: 'role1' },
  { quoteKey: 'quote2', authorKey: 'author2', roleKey: 'role2' },
  { quoteKey: 'quote3', authorKey: 'author3', roleKey: 'role3' },
] as const;

export function Testimonials() {
  const t = useTranslations('testimonials');

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-widest text-purple-400 mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            {t('title')}
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <AnimatedSection key={item.quoteKey} delay={index * 0.1}>
              <div className="group relative h-full bg-gray-900/50 border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-gray-700">
                <Quote className="w-8 h-8 text-purple-500/30 mb-4" />
                <blockquote className="text-gray-300 leading-relaxed mb-6 italic">
                  &ldquo;{t(item.quoteKey)}&rdquo;
                </blockquote>
                <div className="mt-auto">
                  <p className="text-white font-semibold text-sm">
                    {t(item.authorKey)}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {t(item.roleKey)}
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
