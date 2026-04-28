"use client";

import { AnimatedSection } from "./AnimatedSection";

const jobs = [
  {
    title: "Qualify",
    headline: "Stop discovery calls that go nowhere.",
    description:
      "Send a 5-minute diagnostic before every sales call. Walk in already knowing where they hurt, what they've tried, and where you're the answer.",
    audience: "For consultants and fractional execs running their own pipeline.",
  },
  {
    title: "Diagnose",
    headline: "Replace the unbillable \"audit week.\"",
    description:
      "Turn the assessment you do at the start of every engagement into a scored, repeatable, brandable artifact. Charge for it. Or use it to land the bigger contract.",
    audience: "For coaches, trainers, and methodology-builders.",
  },
  {
    title: "Productize",
    headline: "Sell your framework while you sleep.",
    description:
      "Publish your signature diagnostic on your site. Prospects self-score, get a personalized report, and book a call only if they fit. You wake up to qualified leads.",
    audience: "For anyone with a method worth packaging.",
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="relative py-28 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-purple-400 text-xs font-medium tracking-wide uppercase mb-4">
            Use Cases
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
            The job ScoreJam does for you
          </h2>
        </AnimatedSection>

        {/* Three columns */}
        <div className="grid md:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <AnimatedSection key={job.title} delay={0.1 + index * 0.1}>
              <div className="relative h-full rounded-2xl p-px bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-purple-500/10">
                <div className="relative h-full rounded-2xl bg-[var(--card-bg)] p-6 sm:p-8 overflow-hidden">
                  {/* Subtle inner glow */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-[var(--glow-purple)] blur-2xl pointer-events-none opacity-50" />

                  <div className="relative flex flex-col h-full">
                    {/* Title badge */}
                    <span className="inline-block self-start px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wide mb-4">
                      {job.title}
                    </span>

                    {/* Headline */}
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] leading-snug mb-4">
                      {job.headline}
                    </h3>

                    {/* Description */}
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-4 flex-grow">
                      {job.description}
                    </p>

                    {/* Audience */}
                    <p className="text-sm text-purple-400 font-medium">
                      {job.audience}
                    </p>
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
