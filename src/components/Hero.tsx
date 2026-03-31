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

// Metric card for the top row
function MetricCard({
  title,
  value,
  suffix,
  progressColor,
  progressPercent,
  statusText,
}: {
  title: string;
  value: string;
  suffix?: string;
  progressColor: string;
  progressPercent: number;
  statusText: string;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-sm border border-gray-100 dark:border-gray-700">
      <p className="text-[10px] text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider leading-tight whitespace-pre-line">
        {title}
      </p>
      <div className="mt-1 flex items-baseline gap-0.5">
        <span className="text-2xl font-bold text-gray-900 dark:text-white">{value}</span>
        {suffix && <span className="text-sm text-gray-500 dark:text-gray-400">{suffix}</span>}
      </div>
      <div className="mt-2 h-1 rounded-full bg-gray-200 dark:bg-gray-600 overflow-hidden">
        <div
          className={`h-full rounded-full ${progressColor}`}
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      <div className="mt-1.5 flex items-center gap-1">
        <span className="text-green-500 dark:text-green-400 text-xs">↗</span>
        <span className="text-xs text-green-500 dark:text-green-400 font-medium">{statusText}</span>
      </div>
    </div>
  );
}

// Score distribution row
function ScoreDistributionRow({
  icon,
  label,
  range,
  barColor,
  barPercent,
  count,
  percent,
}: {
  icon: string;
  label: string;
  range: string;
  barColor: string;
  barPercent: number;
  count: number;
  percent: string;
}) {
  return (
    <div className="py-3 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className="text-sm">{icon}</span>
          <span className="text-sm font-semibold text-gray-900 dark:text-white">{label}</span>
          <span className="text-xs text-gray-400 dark:text-gray-500">{range}</span>
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">{count} · {percent}</span>
      </div>
      <div className="h-2 rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
        <div
          className={`h-full rounded-full ${barColor}`}
          style={{ width: `${barPercent}%` }}
        />
      </div>
    </div>
  );
}

// Dashboard mock card
function DashboardMock() {
  const metrics = [
    { title: 'TOTAL\nPARTICIPANTS', value: '12', progressColor: 'bg-gray-800 dark:bg-gray-300', progressPercent: 100, statusText: '12 responses collected' },
    { title: 'AVERAGE\nSCORE', value: '62', suffix: '/100', progressColor: 'bg-gray-800 dark:bg-gray-300', progressPercent: 62, statusText: 'Strong signal' },
    { title: 'QUALIFIED\nLEADS', value: '58', suffix: '%', progressColor: 'bg-gray-300 dark:bg-gray-500', progressPercent: 58, statusText: 'Score above 60' },
    { title: 'COMPLETION\nRATE', value: '100', suffix: '%', progressColor: 'bg-gray-800 dark:bg-gray-300', progressPercent: 100, statusText: 'Excellent engagement' },
  ];

  const distributions = [
    { icon: '🔥', label: 'Critical Need', range: '80-100', barColor: 'bg-red-500', barPercent: 17, count: 2, percent: '17%' },
    { icon: '🌶️', label: 'High Potential', range: '61-80', barColor: 'bg-orange-400', barPercent: 42, count: 5, percent: '42%' },
    { icon: '❄️', label: 'Moderate Interest', range: '41-60', barColor: 'bg-blue-500', barPercent: 25, count: 3, percent: '25%' },
    { icon: '⬇️', label: 'Low Priority', range: '0-40', barColor: 'bg-teal-400', barPercent: 17, count: 2, percent: '17%' },
  ];

  return (
    <div className="relative rounded-2xl p-px bg-gradient-to-br from-purple-500/40 via-blue-500/30 to-purple-500/10 shadow-2xl shadow-purple-900/30">
      <div className="relative rounded-2xl bg-gray-50 dark:bg-gray-900 p-4 overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-purple-200/30 dark:bg-purple-500/20 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-blue-200/30 dark:bg-blue-500/20 blur-2xl pointer-events-none" />

        {/* Metric cards grid */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {metrics.map((metric, i) => (
            <MetricCard
              key={i}
              title={metric.title}
              value={metric.value}
              suffix={metric.suffix}
              progressColor={metric.progressColor}
              progressPercent={metric.progressPercent}
              statusText={metric.statusText}
            />
          ))}
        </div>

        {/* Score Distribution */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2">Score Distribution</h3>
          {distributions.map((dist, i) => (
            <ScoreDistributionRow
              key={i}
              icon={dist.icon}
              label={dist.label}
              range={dist.range}
              barColor={dist.barColor}
              barPercent={dist.barPercent}
              count={dist.count}
              percent={dist.percent}
            />
          ))}
        </div>
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

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-12 w-full">
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
                AI powered Diagnostics
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
