'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Lock,
  Zap,
  Building2,
  Users,
  Headphones,
  Settings,
  Server,
} from 'lucide-react';

interface ContactSalesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactSalesModal({ isOpen, onClose }: ContactSalesModalProps) {
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  const scaleFeatures = [
    { text: 'Unlimited credits for your entire team', icon: <Users size={16} className="text-purple-400 shrink-0" /> },
    { text: 'Dedicated account manager', icon: <Headphones size={16} className="text-blue-400 shrink-0" /> },
    { text: 'Custom integrations & API access', icon: <Settings size={16} className="text-violet-400 shrink-0" /> },
    { text: 'SLA & premium support', icon: <Building2 size={16} className="text-green-400 shrink-0" /> },
    { text: 'On-premise deployment option', icon: <Server size={16} className="text-orange-400 shrink-0" /> },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="contact-sales-modal"
          className="fixed inset-0 z-50 bg-[var(--page-bg)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="flex flex-col lg:flex-row w-full h-full overflow-y-auto"
            initial={{ scale: 0.97 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="fixed top-5 right-5 z-[60] p-2.5 rounded-full bg-[var(--section-bg)] backdrop-blur-sm border border-[var(--line-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--card-bg)] transition-all duration-150"
            >
              <X size={20} />
            </button>

            {/* LEFT SIDE — Marketing (hidden on mobile) */}
            <div className="relative w-full lg:w-1/2 hidden lg:flex items-center justify-center overflow-hidden">
              {/* Background decorations */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-950/30 via-[var(--page-bg)] to-purple-950/20" />
                <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-[var(--glow-blue)] blur-[100px]" />
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[var(--glow-purple)] blur-[80px]" />
                <div
                  className="absolute inset-0 opacity-[var(--grid-opacity)]"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />
              </div>

              <div className="relative w-full px-8 py-12 lg:px-16 lg:py-16 flex flex-col gap-8">
                {/* Headline */}
                <div>
                  <div className="inline-flex items-center gap-2 mb-5">
                    <span className="px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-blue-400 text-xs font-medium tracking-wide uppercase">
                      <Zap size={12} className="inline -mt-0.5 mr-1" />
                      Enterprise
                    </span>
                  </div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] leading-[1.15] tracking-tight">
                    Let&apos;s build your custom plan.
                  </h1>
                  <p className="mt-4 text-base text-[var(--text-secondary)] leading-relaxed">
                    Our sales team will work with you to create a tailored solution that fits your organization&apos;s needs.
                  </p>
                </div>

                {/* Scale features */}
                <div>
                  <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-4">
                    What&apos;s included in Scale:
                  </p>
                  <div className="flex flex-col gap-3">
                    {scaleFeatures.map(({ text, icon }) => (
                      <div
                        key={text}
                        className="flex items-center gap-4 rounded-xl bg-[var(--card-bg)] border border-[var(--line-subtle)] px-5 py-4 hover:border-[var(--card-border-hover)] transition-all duration-200"
                      >
                        <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/15">
                          {icon}
                        </span>
                        <span className="text-sm font-medium text-[var(--text-primary)]">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reassurance */}
                <div className="rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-blue-500/10 p-5">
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    Our team typically responds within 24 hours. We&apos;ll schedule a call to understand your needs and propose a tailored plan.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE — Contact Form */}
            <div className="relative w-full lg:w-1/2 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-[var(--line-subtle)] bg-[var(--section-bg)]">
              <div className="w-full px-6 py-12 lg:px-10 lg:py-16 flex flex-col gap-6">
                {/* Form title */}
                <div>
                  <h2 className="text-2xl font-bold text-[var(--text-primary)]">
                    Contact our sales team
                  </h2>
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    Fill in your details and we&apos;ll get back to you shortly.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-name" className="text-sm font-medium text-[var(--text-secondary)]">
                      Full name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/50 transition-all duration-150"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-email" className="text-sm font-medium text-[var(--text-secondary)]">
                      Work email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/50 transition-all duration-150"
                    />
                  </div>

                  {/* Company */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-company" className="text-sm font-medium text-[var(--text-secondary)]">
                      Company
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Your company name"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/50 transition-all duration-150"
                    />
                  </div>

                  {/* Phone (optional) */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-phone" className="text-sm font-medium text-[var(--text-secondary)]">
                      Phone{' '}
                      <span className="text-[var(--text-muted)] text-xs font-normal">(optional)</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/50 transition-all duration-150"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-message" className="text-sm font-medium text-[var(--text-secondary)]">
                      Message{' '}
                      <span className="text-[var(--text-muted)] text-xs font-normal">(optional)</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      placeholder="Tell us about your needs..."
                      className="w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/50 transition-all duration-150 resize-none"
                    />
                  </div>

                  {/* CTA button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 shadow-lg shadow-blue-900/30 hover:shadow-blue-900/50 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Request a demo
                  </button>

                  {/* Sub-CTA */}
                  <p className="text-center text-xs text-[var(--text-muted)]">No commitment — we&apos;ll reach out within 24h</p>

                  {/* Security note */}
                  <div className="flex items-center justify-center gap-2 pt-2">
                    <Lock size={13} className="text-[var(--text-muted)] shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">Your data is secure. No spam.</p>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Coming soon toast */}
          <AnimatePresence>
            {toastVisible && (
              <motion.div
                key="toast"
                className="fixed bottom-6 left-1/2 -translate-x-1/2 px-5 py-3 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] text-sm text-[var(--text-primary)] shadow-xl z-[60]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                Request received — we&apos;ll be in touch soon!
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
