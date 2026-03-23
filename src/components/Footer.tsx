'use client';

import Image from 'next/image';
import Link from 'next/link';

export function Footer() {

  return (
    <footer className="border-t border-[var(--card-border)] py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top: Logo + tagline */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/scorejam-symbol-white.webp"
                alt="Scorejam logo"
                width={24}
                height={24}
                className="rounded-sm"
              />
              <span className="font-bold text-[var(--text-primary)] text-lg tracking-tight">
                Scorejam
              </span>
            </div>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">Turn data into revenue.</p>
          </div>
        </div>

        {/* Middle: Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-10">
          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">Product</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/#how-it-works"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="/#use-cases"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
                >
                  Use Cases
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">Company</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">Legal</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom: copyright */}
        <div className="border-t border-[var(--card-border)] pt-8">
          <p className="text-sm text-[var(--text-muted)] text-center">&copy; 2026 Scorejam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
