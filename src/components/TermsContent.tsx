'use client';

import { useTranslations } from 'next-intl';

export function TermsContent() {
  const t = useTranslations('terms');

  const sections = [
    { title: 'section1Title', text: 'section1Text' },
    { title: 'section2Title', text: 'section2Text' },
    { title: 'section3Title', text: 'section3Text' },
    { title: 'section4Title', text: 'section4Text' },
    { title: 'section5Title', text: 'section5Text' },
    { title: 'section6Title', text: 'section6Text' },
    { title: 'section7Title', text: 'section7Text' },
    { title: 'section8Title', text: 'section8Text' },
    { title: 'section9Title', text: 'section9Text' },
    { title: 'section10Title', text: 'section10Text' },
  ] as const;

  return (
    <main className="relative pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-3 tracking-tight">
          {t('title')}
        </h1>
        <p className="text-sm text-[var(--text-muted)] mb-12">{t('lastUpdated')}</p>

        <div className="flex flex-col gap-10">
          {/* Intro */}
          <p className="text-[var(--text-secondary)] leading-relaxed">{t('intro')}</p>

          {/* Sections */}
          {sections.map(({ title, text }) => (
            <section key={title}>
              <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                {t(title)}
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                {t(text)}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
