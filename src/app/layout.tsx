import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SignupShell } from '@/components/SignupShell';
import { CookieConsent } from '@/components/CookieConsent';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Scorejam — Turn your data into revenue with AI scoring',
  description: 'AI-powered scoring platform that helps teams prioritize what matters most. Know exactly who to target, when, and why.',
  openGraph: {
    title: 'Scorejam — Turn your data into revenue with AI scoring',
    description: 'AI-powered scoring platform that helps teams prioritize what matters most. Know exactly who to target, when, and why.',
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
