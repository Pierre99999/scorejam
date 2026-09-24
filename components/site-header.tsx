"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { ArrowRight, Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { links } from "@/lib/site-content"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const pathname = usePathname()
  const t = translations[language].nav

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const navItems = [
    { href: "/", label: t.home },
    { href: "/startup-unlocked", label: t.startupUnlocked },
    { href: "/sales-unlocked", label: t.salesUnlocked },
    { href: "/about", label: t.about },
    { href: "/testimonials", label: t.testimonials },
    { href: "/contact", label: t.contact },
  ]

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-paper/80 px-6 py-4 backdrop-blur supports-[backdrop-filter]:bg-paper/60 md:px-10">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-none items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2"
          aria-label="34 Elements — go to homepage"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/34elements-logo.png"
            alt=""
            width={512}
            height={512}
            priority
            className="h-9 w-9 flex-none rounded-lg"
          />
          <span className="text-base font-bold tracking-tight text-navy">34 Elements</span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 ${
                isActive(item.href) ? "font-semibold text-navy" : "text-muted hover:text-navy"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: try, language, CTA, mobile trigger */}
        <div className="flex flex-none items-center gap-3">
          {/* Highest-intent action: kept visible at every breakpoint */}
          <a
            href={links.switchApp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-orange px-4 py-2 text-sm font-semibold text-navy-deep transition-all hover:-translate-y-0.5 hover:bg-orange/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2"
          >
            {translations[language].common.tryApp}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">({translations[language].common.newTab})</span>
          </a>
          <button
            className="hidden rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-navy transition-colors hover:bg-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 lg:inline-flex"
            onClick={() => setLanguage(language === "en" ? "fr" : "en")}
            aria-label={language === "en" ? "Passer en français" : "Switch to English"}
          >
            {language === "en" ? "FR" : "EN"}
          </button>

          <a
            href={links.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-orange hover:text-navy-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 lg:inline-flex"
          >
            {t.letsTalk}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">({translations[language].common.newTab})</span>
          </a>

          {/* Mobile Menu Trigger */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-white text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {open && (
        <>
          <button
            aria-label="Close menu overlay"
            className="fixed inset-0 z-40 bg-navy/10 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-menu"
            className="absolute left-0 right-0 top-full z-50 border-b border-line bg-paper shadow-lg lg:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col p-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`rounded-xl px-4 py-3 text-base hover:bg-paper-2 ${
                    isActive(item.href) ? "bg-paper-2 font-semibold text-navy" : "font-medium text-navy"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <button
                className="rounded-xl px-4 py-3 text-left text-base font-medium text-navy hover:bg-paper-2"
                onClick={() => {
                  setLanguage(language === "en" ? "fr" : "en")
                  setOpen(false)
                }}
              >
                {language === "en" ? "Français" : "English"}
              </button>

              <div className="mt-4 flex flex-col gap-3 border-t border-line pt-4">
                <a
                  href={links.switchApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-orange py-3 font-semibold text-navy-deep transition-all hover:bg-orange/90"
                  onClick={() => setOpen(false)}
                >
                  {translations[language].common.tryApp}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">({translations[language].common.newTab})</span>
                </a>
                <a
                  href={links.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-navy py-3 font-semibold text-white transition-all hover:bg-orange hover:text-navy-deep"
                  onClick={() => setOpen(false)}
                >
                  {t.letsTalk}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">({translations[language].common.newTab})</span>
                </a>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}
