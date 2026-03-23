'use client';

import { AnimatedSection } from './AnimatedSection';
import {
  Globe,
  Mail,
  MessageSquare,
  Linkedin,
  QrCode,
  Share2,
  Send,
  Smartphone,
} from 'lucide-react';

const channels = [
  { icon: Globe, name: 'Website', gradient: 'from-blue-500 to-cyan-400' },
  { icon: Mail, name: 'Email', gradient: 'from-purple-500 to-pink-400' },
  { icon: MessageSquare, name: 'Slack', gradient: 'from-emerald-500 to-teal-400' },
  { icon: Linkedin, name: 'LinkedIn', gradient: 'from-blue-600 to-blue-400' },
  { icon: Send, name: 'WhatsApp', gradient: 'from-green-500 to-emerald-400' },
  { icon: QrCode, name: 'Widgets', gradient: 'from-violet-500 to-purple-400' },
  { icon: Smartphone, name: 'iFrame', gradient: 'from-rose-500 to-pink-400' },
  { icon: Share2, name: 'CRM', gradient: 'from-indigo-500 to-blue-400' },
];

export function Channels() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Section heading */}
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-purple-400 text-xs font-medium tracking-wide uppercase mb-4">
            Distribution
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
            Publish Everywhere In One Click
          </h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Easily share your diagnostics across multiple channels to reach your audience wherever they are.
          </p>
        </AnimatedSection>

        {/* Channel cards grid */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {channels.map(({ icon: Icon, name, gradient }) => (
              <div
                key={name}
                className="group relative rounded-2xl p-px bg-gradient-to-br from-purple-500/15 via-blue-500/5 to-purple-500/0 hover:from-purple-500/30 hover:via-blue-500/15 hover:to-purple-500/10 transition-all duration-300"
              >
                <div className="relative flex flex-col items-center gap-3 rounded-2xl bg-[var(--card-bg)] px-4 py-6 sm:py-8 overflow-hidden">
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-[var(--glow-purple)] blur-2xl" />
                  </div>

                  {/* Icon */}
                  <div
                    className={`relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                  </div>

                  {/* Label */}
                  <span className="relative text-sm font-medium text-[var(--text-primary)]">
                    {name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Micro-text */}
        <AnimatedSection delay={0.2} className="mt-10">
          <div className="relative rounded-2xl p-px bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-purple-500/5">
            <div className="relative rounded-2xl bg-[var(--card-bg)] px-8 py-6 text-center overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[var(--glow-purple)] blur-2xl pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-[var(--glow-blue)] blur-2xl pointer-events-none" />
              <p className="relative text-[var(--text-secondary)] text-base leading-relaxed max-w-2xl mx-auto">
                Publishing is easy — website embed, email, Slack, LinkedIn, WhatsApp, widgets, iFrame, or CRM. One diagnostic, every channel, zero friction.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
