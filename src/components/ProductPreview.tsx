'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

// Segment card component
function SegmentCard({
  icon,
  title,
  titleColor,
  borderColor,
  count,
  percent,
  tags,
  description,
}: {
  icon: string;
  title: string;
  titleColor: string;
  borderColor: string;
  count: number;
  percent: string;
  tags: string[];
  description: string;
}) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-t-4 ${borderColor} border border-gray-100 dark:border-gray-700 flex flex-col h-full`}>
      <div className="flex items-center gap-1.5 mb-2">
        <span className="text-sm">{icon}</span>
        <span className={`text-sm font-bold uppercase tracking-wide ${titleColor}`}>{title}</span>
      </div>
      <div className="mb-2">
        <span className="text-4xl font-bold text-gray-900 dark:text-white">{count}</span>
        <p className="text-sm text-gray-500 dark:text-gray-400">{percent}</p>
      </div>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {tags.map((tag, i) => (
          <span key={i} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-auto">{description}</p>
    </div>
  );
}

// Key finding row component
function KeyFindingRow({
  number,
  title,
  recommendation,
  barColor,
  barPercent,
  score,
  percent,
}: {
  number: number;
  title: string;
  recommendation: string;
  barColor: string;
  barPercent: number;
  score: string;
  percent: string;
}) {
  return (
    <div className="py-4 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400 dark:text-gray-500 font-medium">{number}</span>
          <span className="text-sm font-semibold text-gray-900 dark:text-white">{title}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">{score}</span>
          <span className="text-sm font-bold text-gray-900 dark:text-white">{percent}</span>
        </div>
      </div>
      <div className="h-2 rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden mb-2">
        <div
          className={`h-full rounded-full ${barColor}`}
          style={{ width: `${barPercent}%` }}
        />
      </div>
      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
        <span className="text-gray-400 dark:text-gray-500">&gt;</span>
        <span>{recommendation}</span>
      </div>
    </div>
  );
}

function DashboardMockup() {
  const segments = [
    {
      icon: '🔥',
      title: 'HOT',
      titleColor: 'text-red-500',
      borderColor: 'border-t-red-500',
      count: 2,
      percent: '20%',
      tags: ['Generating qualified leads', 'High-value prospects', 'Continuous insights'],
      description: 'Engage with personalized offers and insights.',
    },
    {
      icon: '🌶️',
      title: 'WARM',
      titleColor: 'text-orange-500',
      borderColor: 'border-t-orange-400',
      count: 3,
      percent: '30%',
      tags: ['Occasional data collection', 'Basic feedback needs', 'Low engagement'],
      description: 'Introduce interactive elements to surveys.',
    },
    {
      icon: '❄️',
      title: 'COOL',
      titleColor: 'text-blue-500',
      borderColor: 'border-t-blue-400',
      count: 3,
      percent: '30%',
      tags: ['Static tools', 'Limited engagement', 'Basic data needs'],
      description: 'Consider upgrading to more dynamic feedback tools.',
    },
    {
      icon: '⬇️',
      title: 'DISQUALIFIED',
      titleColor: 'text-gray-500 dark:text-gray-400',
      borderColor: 'border-t-gray-300 dark:border-t-gray-600',
      count: 2,
      percent: '20%',
      tags: [],
      description: 'Remove from active engagement list.',
    },
  ];

  const findings = [
    {
      number: 1,
      title: 'Inadequate feedback tools',
      recommendation: 'Invest in advanced survey tools to enhance engagement.',
      barColor: 'bg-blue-500',
      barPercent: 31,
      score: '31.1/100',
      percent: '31%',
    },
    {
      number: 2,
      title: 'Lack of instant scoring',
      recommendation: 'Develop capabilities for real-time scoring and recommendations.',
      barColor: 'bg-orange-400',
      barPercent: 68,
      score: '67.8/100',
      percent: '40%',
    },
    {
      number: 3,
      title: 'High interest in AI automation',
      recommendation: 'Explore AI solutions to streamline diagnostics.',
      barColor: 'bg-yellow-400',
      barPercent: 70,
      score: '61.1/100',
      percent: '70%',
    },
  ];

  return (
    <div className="relative rounded-xl p-[1px] bg-gradient-to-br from-purple-500/50 via-blue-500/30 to-purple-500/20 shadow-lg shadow-purple-500/10">
      <div className="relative rounded-xl bg-gray-50 dark:bg-gray-900 p-6 overflow-hidden">
        {/* Subtle corner glows */}
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-purple-200/30 dark:bg-purple-500/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-blue-200/30 dark:bg-blue-500/20 blur-3xl pointer-events-none" />

        {/* Segments header */}
        <div className="relative flex items-center gap-2 mb-4">
          <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">SEGMENTS</span>
        </div>

        {/* Segment cards grid */}
        <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {segments.map((segment, i) => (
            <SegmentCard key={i} {...segment} />
          ))}
        </div>

        {/* Key Findings */}
        <div className="relative bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm font-bold text-gray-900 dark:text-white">Key Findings</span>
          </div>
          {findings.map((finding, i) => (
            <KeyFindingRow key={i} {...finding} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProductPreview() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
            Your Scoring Dashboard
          </h2>
          <p className="mt-4 text-[var(--text-secondary)] text-lg">Real-time insights at a glance</p>
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
