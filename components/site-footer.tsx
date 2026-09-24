"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { links } from "@/lib/site-content"
import { Mail, ArrowRight } from "lucide-react"

export function SiteFooter() {
  const { language } = useLanguage()
  const t = translations[language]
  const f = t.footer

  return (
    <footer className="border-t border-line bg-navy text-white">
      <div className="mx-auto max-w-[1180px] px-6 py-14 md:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              {/* Ring keeps the navy tile readable against the navy footer */}
              <Image
                src="/images/34elements-logo.png"
                alt=""
                width={512}
                height={512}
                className="h-11 w-11 flex-none rounded-lg ring-1 ring-white/20"
              />
              <span className="font-serif text-2xl text-white">34 Elements</span>
            </Link>
            <p className="mt-3 max-w-sm leading-relaxed text-white/70">{f.tagline}</p>
            <a
              href={links.switchApp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 font-semibold text-navy-deep transition-all hover:-translate-y-0.5 hover:bg-orange/90"
            >
              {t.common.tryApp}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">({t.common.newTab})</span>
            </a>
          </div>

          {/* Methods */}
          <nav aria-labelledby="footer-methods">
            <h2 id="footer-methods" className="text-sm font-semibold uppercase tracking-wider text-orange">
              {f.methodsTitle}
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <Link href="/startup-unlocked" className="text-white/80 transition-colors hover:text-white">
                  {t.nav.startupUnlocked}
                </Link>
              </li>
              <li>
                <Link href="/sales-unlocked" className="text-white/80 transition-colors hover:text-white">
                  {t.nav.salesUnlocked}
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-white/80 transition-colors hover:text-white">
                  {t.nav.testimonials}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <nav aria-labelledby="footer-contact">
            <h2 id="footer-contact" className="text-sm font-semibold uppercase tracking-wider text-orange">
              {f.contactTitle}
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <Link href="/about" className="text-white/80 transition-colors hover:text-white">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 transition-colors hover:text-white">
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${links.email}`}
                  className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {links.email}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 text-sm text-white/60">
          <p>
            {"\u00A9"} {new Date().getFullYear()} 34 Elements. {f.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
