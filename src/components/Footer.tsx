'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { useSignup } from './SignupContext';

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const { openContactSales } = useSignup();

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
            <p className="mt-2 text-sm text-[var(--text-secondary)]">{t('tagline')}</p>
          </div>
        </div>

        {/* Middle: Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-10">
          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">{t('product')}</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="#how-it-works"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="#use-cases"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
                >
                  Use Cases
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">{t('company')}</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <button
                  onClick={openContactSales}
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
                >
                  {t('contactUs')}
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">{t('legal')}</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href={`/${locale}/privacy`}
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
                >
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/terms`}
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
                >
                  {t('terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom: copyright */}
        <div className="border-t border-[var(--card-border)] pt-8">
          <p className="text-sm text-[var(--text-muted)] text-center">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
