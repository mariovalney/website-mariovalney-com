import type { Metadata, Viewport } from 'next'
import type { SiteContent } from '@/content/types'
import { LANGUAGE_ALTERNATES, LOCALES, otherLocale, SITE, THEME_COLOR } from '@/lib/site'

/**
 * The head of a locale's page. Built from the same dictionary the page renders, so the description
 * a crawler reads and the one a visitor reads cannot disagree.
 *
 * `alternates.languages` is what Next turns into the hreflang tags, and both pages carry the same
 * pair: each points at itself and at its translation, with pt-BR as x-default because it is what
 * the domain is for.
 */
export function metadataFor(content: SiteContent): Metadata {
  const locale = LOCALES[content.locale]
  const other = LOCALES[otherLocale(content.locale)]

  return {
    // Makes every relative URL below resolve to an absolute one. Without it, crawlers receive
    // paths they cannot follow.
    metadataBase: new URL(SITE.url),
    title: content.meta.title,
    description: content.meta.description,
    alternates: {
      canonical: locale.path,
      languages: LANGUAGE_ALTERNATES,
    },
    openGraph: {
      type: 'website',
      siteName: SITE.name,
      title: content.meta.title,
      description: content.meta.description,
      url: locale.path,
      locale: locale.ogLocale,
      alternateLocale: other.ogLocale,
    },
    twitter: { card: 'summary_large_image' },
  }
}

/** Identical on both locales: the address bar follows the theme, not the language. */
export const siteViewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: THEME_COLOR.light },
    { media: '(prefers-color-scheme: dark)', color: THEME_COLOR.dark },
  ],
}
