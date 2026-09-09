/**
 * Everything that names or locates the site, in one place.
 *
 * The URL is baked in at scaffold time rather than read from the environment because it is
 * public information and a build that silently falls back to localhost produces a sitemap full
 * of unreachable URLs. `NEXT_PUBLIC_SITE_URL` still overrides it, for a preview or a staging
 * domain; that variable is inlined into the bundle at build time, so changing it afterwards in
 * the hosting panel does nothing: the image has to be rebuilt.
 */

const FALLBACK_URL = 'https://mariovalney.com'

/**
 * Values typed into a hosting panel arrive dirty in two predictable ways: without the scheme,
 * because Easypanel's $(PRIMARY_DOMAIN) expands to the bare host, and wrapped in quotes, when the
 * env parser keeps them. Neither is a reason to fail the build of a site that is always https, so
 * both are normalised. Anything else still throws, because a bad URL here reaches every canonical
 * tag and every entry of the sitemap.
 */
function resolveSiteUrl(): string {
  const raw = (process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_URL).trim().replace(/^["']|["']$/g, '')
  const candidate = /^https?:\/\//i.test(raw) ? raw : `https://${raw.replace(/^\/+/, '')}`

  let parsed: URL
  try {
    parsed = new URL(candidate)
  } catch {
    throw new Error(
      `Invalid site URL: ${raw}. Set NEXT_PUBLIC_SITE_URL to an absolute URL, or fix FALLBACK_URL in src/lib/site.ts.`,
    )
  }
  // Stored without the trailing slash so `${SITE.url}${route}` never produces a double slash.
  return parsed.origin + parsed.pathname.replace(/\/$/, '')
}

export const SITE = {
  name: 'Mário Valney',
  url: resolveSiteUrl(),
  /** First year of the copyright range in the footer. The second is the build year. */
  copyrightFrom: 1992,
} as const

/**
 * The two builds of the site. Each locale is a route group with its own root layout, which is what
 * lets `<html lang>` be right on both without a dynamic segment; see src/app/.
 */
export const LOCALES = {
  'pt-BR': { path: '/', ogLocale: 'pt_BR', label: 'PT' },
  en: { path: '/en', ogLocale: 'en_US', label: 'EN' },
} as const

export type Locale = keyof typeof LOCALES

/** The locale a route does not use, for the language switch in the header. */
export function otherLocale(locale: Locale): Locale {
  return locale === 'pt-BR' ? 'en' : 'pt-BR'
}

/**
 * hreflang, identical on both pages: each one points at itself and at its translation. pt-BR is
 * the x-default because it sits at the root and is what the domain is for.
 */
export const LANGUAGE_ALTERNATES = {
  'pt-BR': LOCALES['pt-BR'].path,
  en: LOCALES.en.path,
  'x-default': LOCALES['pt-BR'].path,
} as const

/**
 * The only literal colours outside src/styles/globals.css. The browser reads them from a meta tag
 * before any stylesheet exists, so they cannot be CSS tokens.
 *
 * They track --bg-surface, not --accent: the mobile address bar sits directly above the site
 * header, and the palette is monochrome, so an accent-coloured bar would be a near-black strip
 * over a white header. Two values because a single one is wrong in one of the two themes; Next
 * emits one meta tag per entry, each behind its own media query.
 */
export const THEME_COLOR = {
  light: '#f5f5f6',
  dark: '#131316',
} as const

/** Absolute URL for a route, the form sitemaps and canonical tags need. */
export function absoluteUrl(route: string): string {
  return route === '/' ? `${SITE.url}/` : `${SITE.url}${route}`
}
