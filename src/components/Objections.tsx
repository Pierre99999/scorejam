"use client";

import { AnimatedSection } from "./AnimatedSection";

const objections = [
  {
    number: "01",
    question: '"This looks like a form."',
    answer:
      "It isn't. Forms collect random answers. ScoreJam builds a scientific diagnostic in 5 minutes — every question is weighted, scored, and tied to a personalized recommendation, with analytics for the creator.",
    punchline: "A form gives you data. ScoreJam gives you a decision.",
  },
  {
    number: "02",
    question: '"I can do this with a single prompt."',
    answer:
      "Sure. Now add scoring logic, an adaptive recommendation engine, aggregate analytics, branding, and embedding — in 5 minutes, every time.",
    punchline: "A prompt gives you an answer. ScoreJam gives you a product.",
  },
];

export function Objections() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Section heading */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-purple-400 text-xs font-medium tracking-wide uppercase mb-4">
            What People Get Wrong
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
            Two objections. Two answers.
          </h2>
        </AnimatedSection>

        {/* Two objections */}
        <div className="space-y-8">
          {objections.map((obj, index) => (
            <AnimatedSection key={obj.number} delay={0.1 + index * 0.15}>
              <div className="relative rounded-2xl p-px bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-purple-500/10">
                <div className="relative rounded-2xl bg-[var(--card-bg)] p-6 sm:p-8 overflow-hidden">
                  {/* Subtle inner glow */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-[var(--glow-purple)] blur-2xl pointer-events-none opacity-50" />

                  <div className="relative flex gap-6">
                    {/* Number */}
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 text-lg font-bold">
                        {obj.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      {/* Question */}
                      <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] leading-snug mb-4">
                        {obj.question}
                      </h3>

                      {/* Answer */}
                      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                        {obj.answer}
                      </p>

                      {/* Punchline */}
                      <p className="text-purple-400 font-semibold">
                        {obj.punchline}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
