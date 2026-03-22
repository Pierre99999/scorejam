'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Check,
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
  const t = useTranslations('contactSales');
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
    { key: 'feature1' as const, icon: <Users size={16} className="text-purple-400 shrink-0" /> },
    { key: 'feature2' as const, icon: <Headphones size={16} className="text-blue-400 shrink-0" /> },
    { key: 'feature3' as const, icon: <Settings size={16} className="text-violet-400 shrink-0" /> },
    { key: 'feature4' as const, icon: <Building2 size={16} className="text-green-400 shrink-0" /> },
    { key: 'feature5' as const, icon: <Server size={16} className="text-orange-400 shrink-0" /> },
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
                      {t('badge')}
                    </span>
                  </div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] leading-[1.15] tracking-tight">
                    {t('headline')}
                  </h1>
                  <p className="mt-4 text-base text-[var(--text-secondary)] leading-relaxed">
                    {t('subtext')}
                  </p>
                </div>

                {/* Scale features card */}
                <div className="rounded-xl bg-[var(--card-bg)] border border-[var(--line-subtle)] p-5">
                  <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-4">
                    {t('featuresTitle')}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {scaleFeatures.map(({ key, icon }) => (
                      <li key={key} className="flex items-center gap-3">
                        <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-lg bg-[var(--section-bg)] border border-[var(--line-subtle)]">
                          {icon}
                        </span>
                        <span className="text-sm text-[var(--text-secondary)]">{t(key)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Reassurance */}
                <div className="rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-blue-500/10 p-5">
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {t('reassurance')}
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
                    {t('formTitle')}
                  </h2>
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    {t('formSubtitle')}
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-name" className="text-sm font-medium text-[var(--text-secondary)]">
                      {t('nameLabel')}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      autoComplete="name"
                      placeholder={t('namePlaceholder')}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/50 transition-all duration-150"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-email" className="text-sm font-medium text-[var(--text-secondary)]">
                      {t('emailLabel')}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      placeholder={t('emailPlaceholder')}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/50 transition-all duration-150"
                    />
                  </div>

                  {/* Company */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-company" className="text-sm font-medium text-[var(--text-secondary)]">
                      {t('companyLabel')}
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      autoComplete="organization"
                      placeholder={t('companyPlaceholder')}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/50 transition-all duration-150"
                    />
                  </div>

                  {/* Phone (optional) */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-phone" className="text-sm font-medium text-[var(--text-secondary)]">
                      {t('phoneLabel')}{' '}
                      <span className="text-[var(--text-muted)] text-xs font-normal">(optional)</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder={t('phonePlaceholder')}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/50 transition-all duration-150"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-message" className="text-sm font-medium text-[var(--text-secondary)]">
                      {t('messageLabel')}{' '}
                      <span className="text-[var(--text-muted)] text-xs font-normal">(optional)</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      placeholder={t('messagePlaceholder')}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/50 transition-all duration-150 resize-none"
                    />
                  </div>

                  {/* CTA button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 shadow-lg shadow-blue-900/30 hover:shadow-blue-900/50 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    {t('cta')}
                  </button>

                  {/* Sub-CTA */}
                  <p className="text-center text-xs text-[var(--text-muted)]">{t('ctaSub')}</p>

                  {/* Security note */}
                  <div className="flex items-center justify-center gap-2 pt-2">
                    <Lock size={13} className="text-[var(--text-muted)] shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">{t('securityNote')}</p>
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
                {t('toast')}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
