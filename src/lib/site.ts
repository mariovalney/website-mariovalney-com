/**
 * Everything that names or locates the site, in one place.
 *
 * The URL is baked in at scaffold time rather than read from the environment because it is
 * public information and a build that silently falls back to localhost produces a sitemap full
 * of unreachable URLs. `NEXT_PUBLIC_SITE_URL` still overrides it, for a preview or a staging
 * domain; that variable is inlined into the bundle at build time, so changing it afterwards in
 * the hosting panel does nothing — the image has to be rebuilt.
 */

const FALLBACK_URL = 'https://mariovalney.com'

function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_URL
  let parsed: URL
  try {
    parsed = new URL(raw)
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
  description: 'Desenvolvedor e construtor de produtos, entre engenharia, IA e operações.',
  locale: 'pt-BR',
  url: resolveSiteUrl(),
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

/** Header navigation. Adding a page here does not affect the sitemap — that one discovers routes. */
export const NAV: ReadonlyArray<{ href: string; label: string }> = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre' },
]

/** Absolute URL for a route, the form sitemaps and canonical tags need. */
export function absoluteUrl(route: string): string {
  return route === '/' ? `${SITE.url}/` : `${SITE.url}${route}`
}
