/**
 * Shared UI strings (de/en) for cross-locale components:
 * Header, Footer, LanguageSwitcher, ArticleLayout.
 * Page-body copy for EN routes lives inline in those .astro / .md files.
 */
import type { Locale } from './config';

export const ui = {
  // Header nav
  'nav.genres': { de: 'Genres', en: 'Genres' },
  'nav.districts': { de: 'Bezirke', en: 'Districts' },
  'nav.hotels': { de: 'Hotels', en: 'Hotels' },
  'nav.clubs': { de: 'Clubs & Bars', en: 'Clubs & Bars' },
  'nav.magazine': { de: 'Magazin', en: 'Magazine' },
  'nav.login': { de: 'Anmelden', en: 'Log in' },
  'nav.listClub': { de: 'Club eintragen', en: 'List your club' },
  'nav.home': { de: 'Start', en: 'Home' },

  // aria
  'aria.openMenu': { de: 'Menü öffnen', en: 'Open menu' },
  'aria.closeMenu': { de: 'Menü schließen', en: 'Close menu' },
  'aria.langSwitch': { de: 'Sprache wechseln', en: 'Switch language' },
  'aria.breadcrumb': { de: 'Brotkrumen', en: 'Breadcrumb' },

  // Article layout
  'article.updated': { de: 'Aktualisiert', en: 'Updated' },
  'article.byline': { de: 'SUFIS Berlin Redaktion', en: 'SUFIS Berlin Editors' },
  'article.related': { de: 'Das könnte dich auch interessieren', en: 'You might also like' },
  'article.moreDiscover': { de: 'Mehr entdecken', en: 'Discover more' },
  'article.guestNote': {
    de: 'Dieser Beitrag wurde von einem externen Partner bereitgestellt.',
    en: 'This article was provided by an external partner.',
  },

  // Footer
  'footer.tagline': {
    de: 'Das unabhängige Verzeichnis für Berlins Clubs, Bars und Nachtleben. Wir verkaufen keine Rankings – wir helfen dir, die richtige Nacht zu finden.',
    en: 'The independent guide to Berlin’s clubs, bars and nightlife. We don’t sell rankings – we help you find the right night out.',
  },
  'footer.discover': { de: 'Entdecken', en: 'Discover' },
  'footer.allClubs': { de: 'Alle Clubs', en: 'All clubs' },
  'footer.byGenre': { de: 'Nach Genre', en: 'By genre' },
  'footer.byDistrict': { de: 'Nach Bezirk', en: 'By district' },
  'footer.hotels': { de: 'Hotels in Berlin', en: 'Hotels in Berlin' },
  'footer.about': { de: 'Über uns', en: 'About' },
  'footer.legal': { de: 'Rechtliches', en: 'Legal' },
  'footer.imprint': { de: 'Impressum', en: 'Imprint' },
  'footer.privacy': { de: 'Datenschutz', en: 'Privacy' },
  'footer.terms': { de: 'AGB', en: 'Terms' },
  'footer.rights': {
    de: '© 2026 sufis-berlin.de · Alle Angaben ohne Gewähr',
    en: '© 2026 sufis-berlin.de · All information without guarantee',
  },
  'footer.disclaimer': {
    de: 'Hinweis: Öffnungszeiten, Türpolitik und Programm können sich kurzfristig ändern. Bitte prüfe vor dem Besuch die offiziellen Kanäle des jeweiligen Clubs. Feiere verantwortungsvoll.',
    en: 'Note: opening hours, door policy and line-ups can change at short notice. Please check each club’s official channels before you head out. Party responsibly.',
  },
} as const;

export type UIKey = keyof typeof ui;

export function t(locale: Locale, key: UIKey): string {
  return ui[key][locale];
}
