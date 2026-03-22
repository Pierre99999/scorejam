'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, Eye, EyeOff, Sparkles } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function GoogleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [showPassword, setShowPassword] = useState(false);
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="login-modal"
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

            {/* LEFT SIDE — Welcome back (hidden on mobile) */}
            <div className="relative w-full lg:w-1/2 hidden lg:flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-950/30 via-[var(--page-bg)] to-blue-950/20" />
                <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-[var(--glow-purple)] blur-[100px]" />
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[var(--glow-blue)] blur-[80px]" />
                <div
                  className="absolute inset-0 opacity-[var(--grid-opacity)]"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />
              </div>

              <div className="relative w-full px-8 py-12 lg:px-16 lg:py-16 flex flex-col gap-8 items-center text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/15 to-blue-500/15 border border-purple-500/20">
                  <Sparkles size={32} className="text-purple-400" />
                </div>
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] leading-[1.15] tracking-tight">
                    Welcome back!
                  </h1>
                  <p className="mt-4 text-base text-[var(--text-secondary)] leading-relaxed max-w-md">
                    Your scoring dashboard is waiting. Log in to access your diagnostics, insights, and team data.
                  </p>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 border border-purple-500/10 p-5 max-w-sm">
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    Need an account? Click &quot;Start for free&quot; in the header to get started in minutes.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE — Login Form */}
            <div className="relative w-full lg:w-1/2 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-[var(--line-subtle)] bg-[var(--section-bg)]">
              <div className="w-full px-6 py-12 lg:px-10 lg:py-16 flex flex-col gap-6">
                <h2 className="text-2xl font-bold text-[var(--text-primary)]">Log in to your account</h2>

                {/* Google button */}
                <button
                  type="button"
                  className="flex items-center justify-center gap-3 w-full px-4 py-3.5 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] hover:border-[var(--card-border-hover)] text-sm font-medium text-[var(--text-secondary)] transition-all duration-150"
                >
                  <GoogleIcon />
                  Continue with Google
                </button>

                {/* Divider */}
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-[var(--line-subtle)]" />
                  <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">or</span>
                  <div className="flex-1 h-px bg-[var(--line-subtle)]" />
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="login-email" className="text-sm font-medium text-[var(--text-secondary)]">Email</label>
                    <input
                      id="login-email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-purple-500/60 focus:border-purple-500/50 transition-all duration-150"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <label htmlFor="login-password" className="text-sm font-medium text-[var(--text-secondary)]">Password</label>
                      <button type="button" className="text-xs text-purple-400 hover:text-purple-300 font-medium transition-colors">Forgot password?</button>
                    </div>
                    <div className="relative">
                      <input
                        id="login-password"
                        type={showPassword ? 'text' : 'password'}
                        autoComplete="current-password"
                        placeholder="Your password"
                        className="w-full px-4 py-3 pr-11 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-purple-500/60 focus:border-purple-500/50 transition-all duration-150"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors duration-150"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Log in
                  </button>

                  <div className="flex items-center justify-center gap-2 pt-2">
                    <Lock size={13} className="text-[var(--text-muted)] shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">Your data is secure. No spam.</p>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>

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
                Coming soon — stay tuned!
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
