'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useSignup } from './SignupContext';
import { cn } from '@/lib/utils';

export function Header() {
  const { openSignup, openLogin } = useSignup();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    
    // If not on home page, navigate to home with anchor
    if (pathname !== '/') {
      router.push('/' + href);
      return;
    }
    
    // If on home page, smooth scroll to section
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
          ? 'bg-[var(--overlay-bg)] backdrop-blur-lg border-b border-[var(--line-subtle)] shadow-lg shadow-black/20'
          : 'bg-transparent',
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center shrink-0 group">
          <Image src="/logo-black.webp" alt="ScoreJam logo" width={140} height={32} className="block dark:hidden" />
          <Image src="/logo-white.webp" alt="ScoreJam logo" width={140} height={32} className="hidden dark:block" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--text-secondary)]">
          <a href="#how-it-works" onClick={(e) => handleAnchorClick(e, '#how-it-works')} className="hover:text-[var(--text-primary)] transition-colors duration-200">How it works</a>
          <Link href="/b2b-teams" className="hover:text-[var(--text-primary)] transition-colors duration-200">B2B Teams</Link>
          <Link href="/manifesto" className="hover:text-[var(--text-primary)] transition-colors duration-200">Manifesto</Link>
          <Link href="/pricing" className="hover:text-[var(--text-primary)] transition-colors duration-200">Pricing</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="https://www.scorejam.app/app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
          >
            Log in
          </a>
          <a
            href="https://www.scorejam.app/app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 transition-all duration-200 shadow-md shadow-purple-900/30"
          >
            Start for free
          </a>
        </div>

        <button
          className="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-[var(--line-subtle)]',
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0',
          scrolled || mobileOpen ? 'bg-[var(--overlay-bg)] backdrop-blur-lg' : 'bg-transparent',
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          <a href="#how-it-works" onClick={(e) => handleAnchorClick(e, '#how-it-works')} className="py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">How it works</a>
          <Link href="/b2b-teams" onClick={() => setMobileOpen(false)} className="py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">B2B Teams</Link>
          <Link href="/manifesto" onClick={() => setMobileOpen(false)} className="py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Manifesto</Link>
          <Link href="/pricing" onClick={() => setMobileOpen(false)} className="py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Pricing</Link>
          <div className="pt-2 pb-1 border-t border-[var(--line-subtle)] flex items-center justify-between mt-1">
            <a
              href="https://www.scorejam.app/app"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              Log in
            </a>
            <a
              href="https://www.scorejam.app/app"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 transition-all duration-200"
            >
              Start for free
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
