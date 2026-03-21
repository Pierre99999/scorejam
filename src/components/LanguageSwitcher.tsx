'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function LanguageSwitcher() {
  const pathname = usePathname();

  // Determine current locale from the URL path (e.g. /en/... or /fr/...)
  const currentLocale = pathname.startsWith('/fr') ? 'fr' : 'en';
  const otherLocale = currentLocale === 'en' ? 'fr' : 'en';

  // Swap the locale segment in the path
  const otherPath = pathname.replace(/^\/(en|fr)/, `/${otherLocale}`);

  return (
    <Link href={otherPath} aria-label={`Switch to ${otherLocale.toUpperCase()}`}>
      {otherLocale.toUpperCase()}
    </Link>
  );
}
