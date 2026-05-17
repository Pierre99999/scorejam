'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useSignup } from './SignupContext';
import { cn } from '@/lib/utils';

const roleLinks = [
  { href: '/trainers', label: 'Trainers' },
  { href: '/sales-team', label: 'Sales Team' },
  { href: '/customer-success', label: 'Customer Success' },
  { href: '/product-manager', label: 'Product Manager' },
  { href: '/hr', label: 'HR' },
];

export function Header() {
  const { openSignup, openLogin } = useSignup();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const [mobileRoleOpen, setMobileRoleOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.role-dropdown')) {
        setRoleDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
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
          <Link href="/use-cases" className="hover:text-[var(--text-primary)] transition-colors duration-200">Built for experts</Link>
          
          {/* Role Dropdown */}
          <div className="relative role-dropdown">
            <button
              onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
              className="flex items-center gap-1 hover:text-[var(--text-primary)] transition-colors duration-200"
            >
              Role
              <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", roleDropdownOpen && "rotate-180")} />
            </button>
            
            {roleDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 py-2 rounded-xl bg-[var(--overlay-bg)] backdrop-blur-lg border border-[var(--line-subtle)] shadow-xl shadow-black/20">
                {roleLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setRoleDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
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
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0',
          scrolled || mobileOpen ? 'bg-[var(--overlay-bg)] backdrop-blur-lg' : 'bg-transparent',
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          <Link href="/use-cases" onClick={() => setMobileOpen(false)} className="py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Built for experts</Link>
          
          {/* Mobile Role Accordion */}
          <div>
            <button
              onClick={() => setMobileRoleOpen(!mobileRoleOpen)}
              className="w-full flex items-center justify-between py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              Role
              <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", mobileRoleOpen && "rotate-180")} />
            </button>
            <div className={cn(
              "overflow-hidden transition-all duration-200",
              mobileRoleOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
            )}>
              <div className="pl-4 border-l border-[var(--line-subtle)] ml-2">
                {roleLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
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
