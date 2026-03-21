'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from './LanguageSwitcher';
import { CALENDLY_URL } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Header() {
  const t = useTranslations('header');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-gray-950/80 backdrop-blur-lg border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent',
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0 group"
        >
          <Image
            src="/images/scorejam-symbol-white.webp"
            alt="Scorejam logo"
            width={32}
            height={32}
            className="rounded-sm"
          />
          <span className="font-bold text-white text-lg tracking-tight group-hover:text-white/90 transition-colors">
            Scorejam
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a
            href="#how-it-works"
            onClick={(e) => handleAnchorClick(e, '#how-it-works')}
            className="hover:text-white transition-colors duration-200"
          >
            {t('howItWorks')}
          </a>
          <a
            href="#use-cases"
            onClick={(e) => handleAnchorClick(e, '#use-cases')}
            className="hover:text-white transition-colors duration-200"
          >
            {t('useCases')}
          </a>
        </nav>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-5">
          <span className="text-sm font-medium text-gray-400 hover:text-white transition-colors cursor-pointer">
            <LanguageSwitcher />
          </span>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 transition-all duration-200 shadow-md shadow-purple-900/30"
          >
            {t('bookDemo')}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile slide-down panel */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-white/5',
          mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0',
          scrolled || mobileOpen ? 'bg-gray-950/95 backdrop-blur-lg' : 'bg-transparent',
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          <a
            href="#how-it-works"
            onClick={(e) => handleAnchorClick(e, '#how-it-works')}
            className="py-2.5 text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            {t('howItWorks')}
          </a>
          <a
            href="#use-cases"
            onClick={(e) => handleAnchorClick(e, '#use-cases')}
            className="py-2.5 text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            {t('useCases')}
          </a>
          <div className="pt-2 pb-1 border-t border-white/5 flex items-center justify-between mt-1">
            <span className="text-sm font-medium text-gray-400">
              <LanguageSwitcher />
            </span>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 transition-all duration-200"
            >
              {t('bookDemo')}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
