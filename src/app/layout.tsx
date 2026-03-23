import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SignupShell } from '@/components/SignupShell';
import { CookieConsent } from '@/components/CookieConsent';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Feedback that works',
  description: 'ScoreJam automatically builds statistically sound diagnostics from your context—then turns answers into clear insights, priorities, and next steps.',
  icons: {
    icon: '/favicon.webp',
    shortcut: '/favicon.webp',
    apple: '/favicon.webp',
  },
  openGraph: {
    title: 'Feedback that works',
    description: 'ScoreJam automatically builds statistically sound diagnostics from your context—then turns answers into clear insights, priorities, and next steps.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-[var(--page-bg)] text-[var(--text-primary)] antialiased transition-colors duration-300`}>
        <SignupShell>
          {children}
          <CookieConsent />
        </SignupShell>
      </body>
    </html>
  );
}
