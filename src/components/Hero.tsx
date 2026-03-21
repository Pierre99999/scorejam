'use client';

import { useTranslations } from 'next-intl';
import { motion, type Variants } from 'framer-motion';
import { CALENDLY_URL } from '@/lib/constants';

// Helper: wraps gradient-keyword spans around a phrase found in the headline
function HighlightedHeadline({ text }: { text: string }) {
  // Keywords to highlight in each language
  const keywords = ['revenue', 'AI scoring', 'revenus', 'scoring IA'];
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

// Score indicator card
function ScoreCard({
  score,
  label,
  color,
}: {
  score: number;
  label: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-3 bg-gray-800/60 rounded-lg px-3 py-2.5">
      <div
        className={`flex items-center justify-center w-10 h-10 rounded-md text-white font-bold text-sm shrink-0 ${color}`}
      >
        {score}
      </div>
      <div className="min-w-0">
        <p className="text-xs text-gray-300 font-medium truncate">{label}</p>
        <div className="mt-1 h-1.5 rounded-full bg-gray-700 overflow-hidden w-24">
          <div
            className={`h-full rounded-full ${color}`}
            style={{ width: `${score}%` }}
          />
        </div>
      </div>
    </div>
  );
}

// Mini bar chart
function MiniBarChart() {
  const bars = [
    { height: '45%', gradient: 'from-purple-500 to-blue-500' },
    { height: '72%', gradient: 'from-purple-500 to-blue-500' },
    { height: '58%', gradient: 'from-purple-400 to-blue-400' },
    { height: '88%', gradient: 'from-purple-400 to-blue-400' },
    { height: '65%', gradient: 'from-purple-500 to-blue-500' },
  ];

  return (
    <div className="mt-4">
      <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-2">
        Conversion trend
      </p>
      <div className="flex items-end gap-1.5 h-16">
        {bars.map((bar, i) => (
          <div key={i} className="flex-1 flex flex-col justify-end h-full">
            <div
              className={`w-full rounded-t bg-gradient-to-t ${bar.gradient} opacity-80`}
              style={{ height: bar.height }}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-1.5 mt-1">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day) => (
          <div key={day} className="flex-1 text-center text-[10px] text-gray-600">
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

// Dashboard mock card
function DashboardMock() {
  return (
    // Gradient border wrapper
    <div className="relative rounded-2xl p-px bg-gradient-to-br from-purple-500/40 via-blue-500/30 to-purple-500/10 shadow-2xl shadow-purple-900/30">
      {/* Inner card */}
      <div className="relative rounded-2xl bg-gray-900 p-5 overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-purple-600/10 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-blue-600/10 blur-2xl pointer-events-none" />

        {/* Header row */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
              AI Score Dashboard
            </p>
            <p className="text-white font-semibold text-sm mt-0.5">
              Lead Intelligence
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-gray-500">Live</span>
          </div>
        </div>

        {/* Score cards */}
        <div className="flex flex-col gap-2">
          <ScoreCard score={87} label="Acme Corp · Sales" color="bg-green-500/20 text-green-400" />
          <ScoreCard score={64} label="Globex Inc · Renewal" color="bg-yellow-500/20 text-yellow-400" />
          <ScoreCard score={92} label="Initech · Expansion" color="bg-purple-500/20 text-purple-400" />
        </div>

        {/* Mini bar chart */}
        <MiniBarChart />

        {/* Footer stat row */}
        <div className="mt-4 pt-3 border-t border-white/5 flex gap-4">
          {[
            { value: '+32%', label: 'Conversion' },
            { value: '10min', label: 'Setup' },
            { value: '−45%', label: 'Waste' },
          ].map((stat) => (
            <div key={stat.label} className="flex-1 text-center">
              <p className="text-sm font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-[10px] text-gray-600 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const t = useTranslations('hero');

  const handleHowItWorks = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
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
              <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium tracking-wide uppercase">
                AI-powered lead scoring
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
            >
              <HighlightedHeadline text={t('headline')} />
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              {t('subheadline')}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
            >
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 hover:-translate-y-0.5"
              >
                {t('cta1')}
              </a>
              <a
                href="#how-it-works"
                onClick={handleHowItWorks}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-gray-300 border border-white/10 hover:border-white/20 hover:text-white bg-white/5 hover:bg-white/10 transition-all duration-200"
              >
                {t('cta2')}
                <span className="ml-2 text-gray-500">→</span>
              </a>
            </motion.div>

            {/* Social proof hint */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-xs text-gray-600"
            >
              No credit card required · Setup in 10 minutes
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
