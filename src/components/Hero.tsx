'use client';

import { motion, type Variants } from 'framer-motion';
import { useSignup } from './SignupContext';

// Helper: wraps gradient-keyword spans around a phrase found in the headline
function HighlightedHeadline({ text }: { text: string }) {
  const keywords = ['revenue', 'AI scoring'];
  let remaining = text;
  const parts: Array<{ text: string; highlight: boolean }> = [];

  while (remaining.length > 0) {
    let earliest: { index: number; keyword: string } | null = null;
    for (const kw of keywords) {
      const idx = remaining.toLowerCase().indexOf(kw.toLowerCase());
      if (idx !== -1 && (earliest === null || idx < earliest.index)) {
        earliest = { index: idx, keyword: kw };
      }
    }
    if (!earliest) {
      parts.push({ text: remaining, highlight: false });
      break;
    }
    if (earliest.index > 0) {
      parts.push({ text: remaining.slice(0, earliest.index), highlight: false });
    }
    parts.push({ text: remaining.slice(earliest.index, earliest.index + earliest.keyword.length), highlight: true });
    remaining = remaining.slice(earliest.index + earliest.keyword.length);
  }

  return (
    <>
      {parts.map((part, i) =>
        part.highlight ? (
          <span
            key={i}
            className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          >
            {part.text}
          </span>
        ) : (
          <span key={i}>{part.text}</span>
        ),
      )}
    </>
  );
}

// Stagger animation variants
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};
const mockVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 } },
};

// Dashboard mock card
function DashboardMock() {
  return (
    <div className="relative rounded-2xl p-px bg-gradient-to-br from-purple-500/40 via-blue-500/30 to-purple-500/10 shadow-2xl shadow-purple-900/30">
      <div className="relative rounded-2xl bg-gray-50 dark:bg-gray-900 p-3 overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-purple-200/30 dark:bg-purple-500/20 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-blue-200/30 dark:bg-blue-500/20 blur-2xl pointer-events-none" />

        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202026-04-01%20a%CC%80%2010.26.45-d5xSorHObrrazJVItUSboTimzMmQxE.png"
          alt="ScoreJam dashboard showing participant metrics, score distribution, and insights"
          className="w-full rounded-xl dark:invert dark:hue-rotate-180 dark:brightness-[1.8] dark:contrast-[0.8]"
        />
      </div>
    </div>
  );
}

export function Hero() {
  const { openSignup } = useSignup();

  const handleHowItWorks = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[var(--glow-purple)] blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[var(--glow-blue)] blur-3xl" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[var(--grid-opacity)]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          {/* Left: Text */}
          <motion.div
            className="flex-1 lg:w-3/5 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-purple-400 text-xs font-medium tracking-wide uppercase">
                For Sales, CS, HR, L&amp;D, Product, and Marketing teams
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-[1.1] tracking-tight"
            >
              See What Your <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Data</span> Has Been Trying To <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Tell You</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              ScoreJam builds the diagnostic, scores every answer, and delivers the insights, so you know exactly who to prioritize, what to fix, and where to act.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
            >
              <a
                href="https://www.scorejam.app/app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 hover:-translate-y-0.5"
              >
                Start for free
              </a>
              <a
                href="#how-it-works"
                onClick={handleHowItWorks}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-[var(--text-secondary)] border border-[var(--line-subtle)] hover:border-[var(--card-border-hover)] hover:text-[var(--text-primary)] bg-white/5 hover:bg-white/10 transition-all duration-200"
              >
                See how it works
                <span className="ml-2 text-[var(--text-muted)]">&rarr;</span>
              </a>
            </motion.div>

            {/* Social proof hint */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-xs text-[var(--text-muted)]"
            >
              No credit card required · Your first diagnostic in 5 minutes
            </motion.p>
          </motion.div>

          {/* Right: Dashboard Mock */}
          <motion.div
            className="lg:w-2/5 w-full max-w-sm mx-auto lg:mx-0"
            variants={mockVariants}
            initial="hidden"
            animate="visible"
          >
            <DashboardMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
