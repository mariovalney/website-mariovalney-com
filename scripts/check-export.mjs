#!/usr/bin/env node
/**
 * Post-build assertions on out/.
 *
 * `next build` succeeding says the code compiles, not that the site is publishable. The failure
 * this catches most often is a page that exists but is missing from sitemap.xml — nothing breaks,
 * the page simply never gets indexed, and nobody notices for months. Comparing the exported HTML
 * against the sitemap makes that a build error instead.
 */

import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join, relative, sep } from 'node:path'

const OUT = join(process.cwd(), 'out')
const REQUIRED = ['index.html', '404.html', 'sitemap.xml', 'robots.txt']

const problems = []

if (!existsSync(OUT)) {
  console.error('out/ does not exist. Run `pnpm build` first.')
  process.exit(1)
}

for (const file of REQUIRED) {
  if (!existsSync(join(OUT, file))) problems.push(`out/${file} is missing.`)
}
if (problems.length > 0) report()

/** Every exported page, as the route nginx will serve it under. */
function exportedRoutes() {
  const routes = []
  const walk = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name)
      if (entry.isDirectory()) {
        // _next holds build assets and _not-found is the 404 under another name: neither is a page.
        if (!entry.name.startsWith('_')) walk(full)
        continue
      }
      if (!entry.name.endsWith('.html')) continue
      const rel = relative(OUT, full).split(sep).join('/')
      // 404.html and _not-found.html are the same error page, and it belongs in no sitemap.
      if (rel === '404.html' || rel.startsWith('_')) continue
      routes.push(rel === 'index.html' ? '/' : `/${rel.replace(/\.html$/, '')}`)
    }
  }
  walk(OUT)
  return routes.sort()
}

const sitemapXml = readFileSync(join(OUT, 'sitemap.xml'), 'utf8')
const locs = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim())

if (locs.length === 0) problems.push('sitemap.xml has no <loc> entries.')

const origins = new Set()
const sitemapRoutes = []
for (const loc of locs) {
  let parsed
  try {
    parsed = new URL(loc)
  } catch {
    problems.push(`sitemap.xml has a non-absolute URL: ${loc}`)
    continue
  }
  origins.add(parsed.origin)
  sitemapRoutes.push(parsed.pathname === '/' ? '/' : parsed.pathname.replace(/\/$/, ''))
}
sitemapRoutes.sort()

if (origins.size > 1) {
  problems.push(`sitemap.xml mixes origins: ${[...origins].join(', ')}`)
}
const [origin] = origins
if (origin && /localhost|127\.0\.0\.1|example\.com/.test(origin)) {
  problems.push(
    `sitemap.xml points at ${origin}. Set the real domain in src/lib/site.ts (FALLBACK_URL) or NEXT_PUBLIC_SITE_URL.`,
  )
}

const exported = exportedRoutes()
const missing = exported.filter((route) => !sitemapRoutes.includes(route))
const extra = sitemapRoutes.filter((route) => !exported.includes(route))

if (missing.length > 0) {
  problems.push(
    `Exported pages absent from sitemap.xml: ${missing.join(', ')}. If they are dynamic routes, declare them in src/app/sitemap.ts.`,
  )
}
if (extra.length > 0) {
  problems.push(`sitemap.xml lists URLs with no exported page: ${extra.join(', ')}`)
}

const robots = readFileSync(join(OUT, 'robots.txt'), 'utf8')
if (!robots.includes('/sitemap.xml')) {
  problems.push('robots.txt does not point at the sitemap.')
}

report()

function report() {
  if (problems.length > 0) {
    console.error('Export check failed:')
    for (const problem of problems) console.error(`  - ${problem}`)
    process.exit(1)
  }
  console.warn(`Export check passed: ${exported.length} pages, all present in sitemap.xml.`)
}
