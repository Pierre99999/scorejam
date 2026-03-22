'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, ChevronDown, Shield } from 'lucide-react';

type ConsentState = 'pending' | 'accepted' | 'rejected' | 'custom';

interface CookiePreferences {
  essential: boolean; // always true
  analytics: boolean;
  marketing: boolean;
}

const STORAGE_KEY = 'scorejam_cookie_consent';

function getStoredConsent(): CookiePreferences | null {
  if (typeof window === 'undefined') return null;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

function storeConsent(prefs: CookiePreferences) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
}

export function CookieConsent() {
  const [state, setState] = useState<ConsentState>('pending');
  const [showDetails, setShowDetails] = useState(false);
  const [prefs, setPrefs] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) {
      setState('accepted');
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = { essential: true, analytics: true, marketing: true };
    storeConsent(allAccepted);
    setState('accepted');
  };

  const handleRejectAll = () => {
    const essentialOnly = { essential: true, analytics: false, marketing: false };
    storeConsent(essentialOnly);
    setState('rejected');
  };

  const handleSavePreferences = () => {
    storeConsent(prefs);
    setState('custom');
  };

  if (state !== 'pending') return null;

  return (
    <AnimatePresence>
      <motion.div
        key="cookie-banner"
        className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1], delay: 1 }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="relative rounded-2xl p-px bg-gradient-to-br from-purple-500/25 via-blue-500/15 to-purple-500/10">
            <div className="relative rounded-2xl bg-[var(--card-bg)] backdrop-blur-xl shadow-2xl shadow-black/20 overflow-hidden">
              {/* Subtle glow */}
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[var(--glow-purple)] blur-3xl pointer-events-none" />

              <div className="relative p-6">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/15">
                    <Cookie size={18} className="text-purple-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-1">
                      We value your privacy
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      We use cookies to enhance your experience, analyze site traffic, and personalize content. You can choose which cookies to accept.
                    </p>
                  </div>
                </div>

                {/* Details toggle */}
                <button
                  onClick={() => setShowDetails((v) => !v)}
                  className="flex items-center gap-2 text-xs font-medium text-purple-400 hover:text-purple-300 transition-colors duration-200 mb-4"
                >
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${showDetails ? 'rotate-180' : ''}`}
                  />
                  Customize preferences
                </button>

                {/* Cookie categories (collapsible) */}
                <AnimatePresence>
                  {showDetails && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-3 mb-5 pb-5 border-b border-[var(--line-subtle)]">
                        {/* Essential */}
                        <div className="flex items-center justify-between gap-4 rounded-xl bg-[var(--section-bg)] border border-[var(--line-subtle)] px-4 py-3">
                          <div className="flex items-center gap-3">
                            <Shield size={14} className="text-green-400 shrink-0" />
                            <div>
                              <p className="text-sm font-medium text-[var(--text-primary)]">Essential</p>
                              <p className="text-xs text-[var(--text-muted)]">Required for the site to function properly</p>
                            </div>
                          </div>
                          <span className="text-xs font-medium text-green-400 shrink-0">Always on</span>
                        </div>

                        {/* Analytics */}
                        <label className="flex items-center justify-between gap-4 rounded-xl bg-[var(--section-bg)] border border-[var(--line-subtle)] px-4 py-3 cursor-pointer hover:border-[var(--card-border-hover)] transition-colors duration-200">
                          <div>
                            <p className="text-sm font-medium text-[var(--text-primary)]">Analytics</p>
                            <p className="text-xs text-[var(--text-muted)]">Help us understand how you use our site</p>
                          </div>
                          <div className="relative shrink-0">
                            <input
                              type="checkbox"
                              checked={prefs.analytics}
                              onChange={(e) => setPrefs((p) => ({ ...p, analytics: e.target.checked }))}
                              className="sr-only peer"
                            />
                            <div className="w-9 h-5 rounded-full bg-[var(--line-subtle)] peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-blue-500 transition-all duration-200" />
                            <div className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow-sm peer-checked:translate-x-4 transition-transform duration-200" />
                          </div>
                        </label>

                        {/* Marketing */}
                        <label className="flex items-center justify-between gap-4 rounded-xl bg-[var(--section-bg)] border border-[var(--line-subtle)] px-4 py-3 cursor-pointer hover:border-[var(--card-border-hover)] transition-colors duration-200">
                          <div>
                            <p className="text-sm font-medium text-[var(--text-primary)]">Marketing</p>
                            <p className="text-xs text-[var(--text-muted)]">Used to deliver relevant ads and campaigns</p>
                          </div>
                          <div className="relative shrink-0">
                            <input
                              type="checkbox"
                              checked={prefs.marketing}
                              onChange={(e) => setPrefs((p) => ({ ...p, marketing: e.target.checked }))}
                              className="sr-only peer"
                            />
                            <div className="w-9 h-5 rounded-full bg-[var(--line-subtle)] peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-blue-500 transition-all duration-200" />
                            <div className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow-sm peer-checked:translate-x-4 transition-transform duration-200" />
                          </div>
                        </label>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {showDetails ? (
                    <button
                      onClick={handleSavePreferences}
                      className="flex-1 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 shadow-lg shadow-purple-900/20 hover:-translate-y-0.5 transition-all duration-200"
                    >
                      Save preferences
                    </button>
                  ) : (
                    <button
                      onClick={handleAcceptAll}
                      className="flex-1 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 shadow-lg shadow-purple-900/20 hover:-translate-y-0.5 transition-all duration-200"
                    >
                      Accept all
                    </button>
                  )}
                  <button
                    onClick={handleRejectAll}
                    className="flex-1 px-5 py-2.5 rounded-xl text-sm font-semibold border border-[var(--card-border)] text-[var(--text-secondary)] hover:border-[var(--card-border-hover)] hover:text-[var(--text-primary)] bg-white/5 hover:bg-white/10 transition-all duration-200"
                  >
                    Essential only
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
