import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Inter } from 'next/font/google';
import { SignupShell } from '@/components/SignupShell';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const metadata = {
    en: {
      title: 'Scorejam — Turn your data into revenue with AI scoring',
      description: 'AI-powered scoring platform that helps teams prioritize what matters most. Know exactly who to target, when, and why.',
    },
    fr: {
      title: 'Scorejam — Transformez vos données en revenus grâce au scoring IA',
      description: 'Plateforme de scoring IA qui aide les équipes à prioriser ce qui compte. Sachez exactement qui cibler, quand et pourquoi.',
    },
  };

  const m = metadata[locale as keyof typeof metadata] || metadata.en;

  return {
    title: m.title,
    description: m.description,
    openGraph: {
      title: m.title,
      description: m.description,
      type: 'website',
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  // Enable static rendering by setting the locale in the React cache
  setRequestLocale(locale);

  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html lang={locale} className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-[var(--page-bg)] text-[var(--text-primary)] antialiased transition-colors duration-300`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SignupShell>
            {children}
          </SignupShell>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
