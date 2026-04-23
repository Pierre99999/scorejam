'use client';

import { AnimatedSection } from './AnimatedSection';

export function VideoSection() {
  // Convert youtu.be link to embed format
  const videoId = '4ETGZLfedl0';
  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-purple-400 text-xs font-semibold tracking-wider uppercase mb-6">
            Watch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] tracking-tight">
            ScoreJam in 60s
          </h2>
        </AnimatedSection>

        {/* Video embed */}
        <AnimatedSection delay={0.1}>
          <div className="relative rounded-2xl p-px bg-gradient-to-br from-purple-500/40 via-blue-500/30 to-purple-500/10 shadow-2xl shadow-purple-900/20">
            <div className="relative rounded-2xl bg-gray-50 dark:bg-gray-900 p-2 overflow-hidden">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                <iframe
                  src={embedUrl}
                  title="ScoreJam in 60 seconds"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
