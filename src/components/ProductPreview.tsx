'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

function GridBackground() {
  return (
    <div
      className="absolute inset-0 opacity-[0.04] pointer-events-none rounded-xl"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }}
    />
  );
}

function ScoreCard({
  value,
  label,
  trend,
}: {
  value: string;
  label: string;
  trend: 'up' | 'down';
}) {
  return (
    <div className="flex-1 bg-gray-800/60 rounded-xl p-4 border border-white/5">
      <div className="flex items-start justify-between mb-1">
        <span className="text-3xl font-bold text-white">{value}</span>
        <span
          className={`text-xs font-semibold px-1.5 py-0.5 rounded ${
            trend === 'up'
              ? 'bg-green-500/15 text-green-400'
              : 'bg-red-500/15 text-red-400'
          }`}
        >
          {trend === 'up' ? '↑' : '↓'}
        </span>
      </div>
      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{label}</p>
    </div>
  );
}

function BarChart() {
  const bars = [
    { height: '55%' },
    { height: '80%' },
    { height: '45%' },
    { height: '95%' },
    { height: '70%' },
    { height: '60%' },
    { height: '88%' },
  ];

  return (
    <div className="mt-6">
      <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-3">
        Score distribution
      </p>
      <div className="flex items-end gap-2 h-24 bg-gray-800/40 rounded-lg px-3 py-3">
        {bars.map((bar, i) => (
          <div key={i} className="flex-1 flex flex-col justify-end h-full">
            <div
              className="w-full rounded-t bg-gradient-to-t from-purple-500 to-blue-500 opacity-80 transition-all"
              style={{ height: bar.height }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function PipelineBar({
  label,
  width,
  count,
}: {
  label: string;
  width: string;
  count: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-gray-500 w-20 shrink-0 text-right">{label}</span>
      <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
          style={{ width }}
        />
      </div>
      <span className="text-xs text-gray-400 w-8 shrink-0">{count}</span>
    </div>
  );
}

function DashboardMockup() {
  return (
    /* Gradient border wrapper */
    <div className="relative rounded-xl p-[1px] bg-gradient-to-br from-purple-500/50 via-blue-500/30 to-purple-500/20 shadow-lg shadow-purple-500/10">
      <div className="relative rounded-xl bg-gray-900 p-6 overflow-hidden">
        <GridBackground />

        {/* Subtle corner glows */}
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

        {/* Dashboard header */}
        <div className="relative flex items-center justify-between mb-6">
          <div>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">
              AI Score Dashboard
            </p>
            <p className="text-white font-semibold text-sm mt-0.5">Lead Intelligence</p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-gray-500">Live</span>
          </div>
        </div>

        {/* Top row: 3 score cards */}
        <div className="relative flex gap-3">
          <ScoreCard value="87" label="Qualified" trend="up" />
          <ScoreCard value="64" label="In Progress" trend="down" />
          <ScoreCard value="92" label="Converted" trend="up" />
        </div>

        {/* Middle: bar chart */}
        <div className="relative">
          <BarChart />
        </div>

        {/* Bottom: pipeline visualization */}
        <div className="relative mt-6">
          <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-3">
            Pipeline
          </p>
          <div className="flex flex-col gap-2.5">
            <PipelineBar label="Qualified" width="72%" count="144" />
            <PipelineBar label="In Progress" width="48%" count="96" />
            <PipelineBar label="Converted" width="30%" count="61" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductPreview() {
  const t = useTranslations('product');

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            {t('title')}
          </h2>
          <p className="mt-4 text-gray-400 text-lg">{t('subtitle')}</p>
        </AnimatedSection>

        {/* Dashboard mockup with scale-up animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}
