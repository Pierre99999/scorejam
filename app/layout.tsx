import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ChunkRecovery } from "@/components/chunk-recovery"
import { CookieConsent } from "@/components/cookie-consent"
import { LanguageProvider } from "@/lib/language-context"
import { ScrollToTop } from "@/components/scroll-to-top"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.34elements.com"),
  title: {
    default: "34 Elements — Build a better company. Win better deals.",
    template: "%s",
  },
  description:
    "Two methods from 25 years of entrepreneurship and 17 years in Silicon Valley. Startup Unlocked for strategy, Sales Unlocked for conversion.",
  icons: {
    icon: "/images/34elements-logo.png",
    apple: "/images/34elements-logo.png",
  },
  openGraph: {
    siteName: "34 Elements",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/34elements-logo.png", width: 1024, height: 1024, alt: "34 Elements" }],
  },
    generator: 'v0.app'
}

export const viewport = {
  themeColor: "#1A2B5C",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-paper">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {/* Auto-recover from stale chunk errors */}
          <ChunkRecovery />
          {/* Every navigation should land at the top of the page */}
          <ScrollToTop />
          {children}
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  )
}
