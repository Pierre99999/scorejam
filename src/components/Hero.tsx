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

// Dashboard mock card - matches the provided screenshot
function DashboardMock() {
  const metrics = [
    { label: 'TOTAL PARTICIPANTS', value: '51', sub: '51 responses collected', subColor: 'text-green-500' },
    { label: 'AVERAGE SCORE', value: '55', suffix: '/100', sub: 'Moderate signal', subColor: 'text-[var(--text-secondary)]' },
    { label: 'HIGH SCORE', value: '2', suffix: '%', sub: 'Score above 70', subColor: 'text-red-400' },
    { label: 'COMPLETION RATE', value: '100', suffix: '%', sub: 'Excellent engagement', subColor: 'text-green-500' },
  ];

  const distributions = [
    { icon: '🔥', label: 'Strong Signal', range: '80-100', barColor: 'bg-red-500', barPercent: 2, count: 1, percent: '2%' },
    { icon: '🌶️', label: 'Positive Signal', range: '61-80', barColor: 'bg-orange-400', barPercent: 61, count: 31, percent: '61%' },
    { icon: '❄️', label: 'Mixed Signal', range: '41-60', barColor: 'bg-blue-500', barPercent: 4, count: 2, percent: '4%' },
    { icon: '⬇️', label: 'Weak Signal', range: '0-40', barColor: 'bg-teal-400', barPercent: 33, count: 17, percent: '33%' },
  ];

  const insights = [
    { icon: '💡', type: 'Opportunity', typeColor: 'bg-green-500/20 text-green-400', title: 'High conversion potential with improved feature alignment.', sub: 'Only 23% confirmed strong feature match.' },
    { icon: '⚠️', type: 'Risk', typeColor: 'bg-yellow-500/20 text-yellow-400', title: 'Significant pipeline stall issues reported.', sub: 'Stalled deals are a regular issue for 59% of respondents.' },
    { icon: '📈', type: 'Trend', typeColor: 'bg-blue-500/20 text-blue-400', title: 'Improving average scores indicate growing readiness.', sub: 'Last 7 days average score is 57.1.' },
  ];

  const segments = [
    { label: 'HOT', value: 15, color: 'border-red-500', labelColor: 'text-red-500', tags: ['high engagement', 'strong need for improvement', 'open to feedback'] },
    { label: 'WARM', value: 25, color: 'border-orange-400', labelColor: 'text-orange-400', tags: [] },
    { label: 'COOL', value: 10, color: 'border-blue-400', labelColor: 'text-blue-400', desc: 'Provide resources on effective sales strategies.' },
    { label: 'DISQUALIFIED', value: 1, color: 'border-gray-400', labelColor: 'text-gray-400', desc: 'Long-term nurture.' },
  ];

  const painPoints = [
    { rank: 1, label: 'Pipeline stall issues', score: '40.7/100', percent: '59%', barPercent: 59, barColor: 'bg-orange-400' },
    { rank: 2, label: 'Low conversion rates', score: '69.1/100', percent: '55%', barPercent: 55, barColor: 'bg-orange-400' },
    { rank: 3, label: 'Lack of structured feedback', score: '67/100', percent: '63%', barPercent: 63, barColor: 'bg-orange-400' },
  ];

  return (
    <div className="relative rounded-2xl p-px bg-gradient-to-br from-purple-500/40 via-blue-500/30 to-purple-500/10 shadow-2xl shadow-purple-900/30">
      <div className="relative rounded-2xl bg-gray-50 dark:bg-gray-900 p-3 overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-purple-200/30 dark:bg-purple-500/20 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-blue-200/30 dark:bg-blue-500/20 blur-2xl pointer-events-none" />

        {/* Metric cards grid */}
        <div className="grid grid-cols-4 gap-1.5 mb-2">
          {metrics.map((metric, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-md p-1.5 border border-gray-100 dark:border-gray-700">
              <p className="text-[6px] text-[var(--text-secondary)] font-semibold uppercase tracking-wider">{metric.label}</p>
              <div className="flex items-baseline gap-0.5">
                <span className="text-sm font-bold text-[var(--text-primary)]">{metric.value}</span>
                {metric.suffix && <span className="text-[8px] text-[var(--text-secondary)]">{metric.suffix}</span>}
              </div>
              <p className={`text-[6px] ${metric.subColor}`}>↗ {metric.sub}</p>
            </div>
          ))}
        </div>

        {/* Score Distribution */}
        <div className="bg-white dark:bg-gray-800 rounded-md p-2 border border-gray-100 dark:border-gray-700 mb-2">
          <h3 className="text-[8px] font-bold text-[var(--text-primary)] mb-1.5">Score Distribution</h3>
          {distributions.map((dist, i) => (
            <div key={i} className="py-1">
              <div className="flex items-center justify-between mb-0.5">
                <div className="flex items-center gap-1">
                  <span className="text-[8px]">{dist.icon}</span>
                  <span className="text-[7px] font-semibold text-[var(--text-primary)]">{dist.label}</span>
                  <span className="text-[6px] text-[var(--text-secondary)]">{dist.range}</span>
                </div>
                <span className="text-[6px] text-[var(--text-secondary)]">{dist.count} · {dist.percent}</span>
              </div>
              <div className="h-1 rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
                <div className={`h-full rounded-full ${dist.barColor}`} style={{ width: `${dist.barPercent}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Insights */}
        <div className="grid grid-cols-3 gap-1.5 mb-2">
          {insights.map((insight, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-md p-1.5 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[8px]">{insight.icon}</span>
                <span className={`px-1 py-0.5 rounded text-[5px] font-medium ${insight.typeColor}`}>{insight.type}</span>
              </div>
              <p className="text-[6px] font-semibold text-[var(--text-primary)] leading-tight">{insight.title}</p>
              <p className="text-[5px] text-[var(--text-secondary)] leading-tight mt-0.5">{insight.sub}</p>
            </div>
          ))}
        </div>

        {/* Lead Segments */}
        <div className="mb-2">
          <p className="text-[7px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1.5 flex items-center gap-1">
            <span>👥</span> LEAD SEGMENTS
          </p>
          <div className="grid grid-cols-4 gap-1.5">
            {segments.map((seg, i) => (
              <div key={i} className={`bg-white dark:bg-gray-800 rounded-md p-1.5 border-t-2 ${seg.color} border-x border-b border-gray-100 dark:border-gray-700`}>
                <p className={`text-[6px] font-bold ${seg.labelColor} flex items-center gap-0.5`}>
                  {seg.label === 'HOT' && '🔥'}
                  {seg.label === 'WARM' && '🌶️'}
                  {seg.label === 'COOL' && '❄️'}
                  {seg.label === 'DISQUALIFIED' && '⬇️'}
                  {seg.label}
                </p>
                <p className="text-lg font-bold text-[var(--text-primary)]">{seg.value}</p>
                {seg.tags && seg.tags.length > 0 && (
                  <div className="flex flex-col gap-0.5 mt-1">
                    {seg.tags.map((tag, j) => (
                      <span key={j} className="text-[5px] text-[var(--text-secondary)] bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">{tag}</span>
                    ))}
                  </div>
                )}
                {seg.desc && <p className="text-[5px] text-[var(--text-secondary)] mt-1">{seg.desc}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Pain Points */}
        <div className="bg-white dark:bg-gray-800 rounded-md p-2 border border-gray-100 dark:border-gray-700">
          <p className="text-[7px] font-semibold text-[var(--text-primary)] mb-1.5 flex items-center gap-1">
            <span>⚙️</span> Pain Points
          </p>
          {painPoints.map((pain, i) => (
            <div key={i} className="py-1">
              <div className="flex items-center justify-between mb-0.5">
                <div className="flex items-center gap-1">
                  <span className="text-[6px] text-[var(--text-secondary)]">{pain.rank}</span>
                  <span className="text-[7px] font-semibold text-[var(--text-primary)]">{pain.label}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[5px] text-[var(--text-secondary)] bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">{pain.score}</span>
                  <span className="text-[7px] font-bold text-[var(--text-primary)]">{pain.percent}</span>
                </div>
              </div>
              <div className="h-1 rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
                <div className={`h-full rounded-full ${pain.barColor}`} style={{ width: `${pain.barPercent}%` }} />
              </div>
            </div>
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
                For independent consultants, fractional execs, coaches, and trainers
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-[1.1] tracking-tight"
            >
              Your expertise is stuck in your calendar. <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Let it work without you.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Turn the framework you&apos;ve used 100 times into a scored diagnostic prospects take in 10 minutes — and arrive pre-sold.
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
                Start free — your first diagnostic in 5 min
              </a>
              <a
                href="#how-it-works"
                onClick={handleHowItWorks}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-[var(--text-secondary)] border border-[var(--line-subtle)] hover:border-[var(--card-border-hover)] hover:text-[var(--text-primary)] bg-white/5 hover:bg-white/10 transition-all duration-200"
              >
                See it built live
                <span className="ml-2 text-[var(--text-muted)]">&rarr;</span>
              </a>
            </motion.div>

            {/* Social proof hint */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-xs text-[var(--text-muted)]"
            >
              No credit card. No agency quote. No more rebuilding the same scorecard for every client.
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
