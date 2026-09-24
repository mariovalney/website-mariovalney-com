import type { Metadata, Viewport } from 'next'
import type { SiteContent } from '@/content/types'
import {
  HOME_ROUTES,
  LOCALES,
  type LocaleRoutes,
  languageAlternates,
  otherLocale,
  SITE,
  THEME_COLOR,
} from '@/lib/site'

/** A page other than the home one: its own head copy and its own route in each language. */
export interface PageHead {
  meta: { title: string; description: string }
  routes: LocaleRoutes
}

/**
 * The head of a page. Built from the same dictionary the page renders, so the description a
 * crawler reads and the one a visitor reads cannot disagree.
 *
 * Called with one argument it describes the home page of `content.locale`; `page` overrides the
 * copy and the route pair for anything else, such as the privacy policy.
 *
 * `alternates.languages` is what Next turns into the hreflang tags, and both versions of a page
 * carry the same pair: each points at itself and at its translation, with pt-BR as x-default
 * because it is what the domain is for.
 */
export function metadataFor(content: SiteContent, page?: PageHead): Metadata {
  const routes = page?.routes ?? HOME_ROUTES
  const meta = page?.meta ?? content.meta
  const route = routes[content.locale]
  const locale = LOCALES[content.locale]
  const other = LOCALES[otherLocale(content.locale)]

  return {
    // Makes every relative URL below resolve to an absolute one. Without it, crawlers receive
    // paths they cannot follow.
    metadataBase: new URL(SITE.url),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: route,
      languages: languageAlternates(routes),
    },
    openGraph: {
      type: 'website',
      siteName: SITE.name,
      title: meta.title,
      description: meta.description,
      url: route,
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
