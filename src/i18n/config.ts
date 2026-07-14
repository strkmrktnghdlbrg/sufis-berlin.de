/**
 * Minimal i18n layer for sufis-berlin.de.
 * German (default) lives on the site root and keeps its existing URLs.
 * English lives under /en/ and mirrors the booking-core routes only.
 */
export type Locale = 'de' | 'en';

export const locales: Locale[] = ['de', 'en'];
export const defaultLocale: Locale = 'de';

export const localeNames: Record<Locale, string> = {
  de: 'Deutsch',
  en: 'English',
};

export const htmlLang: Record<Locale, string> = {
  de: 'de',
  en: 'en',
};

export const ogLocale: Record<Locale, string> = {
  de: 'de_DE',
  en: 'en_US',
};

/** URL prefix for a locale ("" for the default, "/en" otherwise). */
export function localePrefix(locale: Locale): string {
  return locale === defaultLocale ? '' : `/${locale}`;
}

/** Home URL per locale. */
export function homeUrl(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}/`;
}

/** Hotels index URL per locale (slug identical in both locales). */
export function hotelsIndexUrl(locale: Locale): string {
  return `${localePrefix(locale)}/hotels/`;
}

/** Hotel detail URL. Slug is identical across locales. */
export function hotelUrl(slug: string, locale: Locale): string {
  return `${localePrefix(locale)}/hotels/${slug}/`;
}

/** Nightlife hub (genre / district) detail URL. Slug is identical across locales. */
export function berlinUrl(slug: string, locale: Locale): string {
  return `${localePrefix(locale)}/berlin/${slug}/`;
}

/** Genre overview URL (DE: /genres/, EN: /en/genres/). */
export function genresIndexUrl(locale: Locale): string {
  return `${localePrefix(locale)}/genres/`;
}

/** District overview URL (DE: /bezirke/, EN: /en/districts/). */
export function districtsIndexUrl(locale: Locale): string {
  return locale === 'en' ? '/en/districts/' : '/bezirke/';
}

/** Legal page URLs per locale. */
export const legalUrl = {
  imprint: { de: '/impressum/', en: '/en/imprint/' },
  privacy: { de: '/datenschutz/', en: '/en/privacy/' },
  terms: { de: '/agb/', en: '/en/terms/' },
} as const;
