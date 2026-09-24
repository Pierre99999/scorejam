"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Cookie } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

const CONSENT_COOKIE = "cookie_consent" // values: "accepted" | "rejected"

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null
  const match = document.cookie.match(
    new RegExp("(?:^|; )" + name.replace(/([$?*|{}()[\]\\/+^])/g, "\\$1") + "=([^;]*)"),
  )
  return match ? decodeURIComponent(match[1]) : null
}

function setCookie(name: string, value: string, days = 180) {
  try {
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString()
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/; expires=${expires}; SameSite=Lax`
  } catch {
    // no-op
  }
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const { language } = useLanguage()
  const t = translations[language].cookies

  useEffect(() => {
    const status = getCookie(CONSENT_COOKIE)
    setVisible(!status)
  }, [])

  const acceptAll = () => {
    setCookie(CONSENT_COOKIE, "accepted")
    setVisible(false)
  }

  const rejectNonEssential = () => {
    setCookie(CONSENT_COOKIE, "rejected")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-[60] md:left-1/2 md:right-auto md:-translate-x-1/2 md:inset-x-auto"
    >
      <div className="rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-lg backdrop-blur">
        <div className="flex items-start gap-3">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-amber-200 bg-amber-50 text-amber-700">
            <Cookie className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="min-w-0 grow">
            <p className="text-sm text-gray-800">{t.message}</p>
            <p className="mt-1 text-xs text-gray-500">
              {t.policy}{" "}
              <Link href="/privacy" className="underline underline-offset-2 hover:text-gray-700">
                {t.privacyLink}
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:justify-end">
          <Button
            variant="outline"
            className="border-gray-200 bg-transparent text-gray-800 hover:bg-gray-50"
            onClick={rejectNonEssential}
          >
            {t.rejectBtn}
          </Button>
          <Button className="bg-indigo-600 text-white hover:bg-indigo-700" onClick={acceptAll}>
            {t.acceptBtn}
          </Button>
        </div>
      </div>
    </div>
  )
}
