import { readdirSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Route discovery for the sitemap.
 *
 * A hand-maintained list of URLs goes stale on the first page somebody adds in a hurry, and
 * nothing fails when it does, the page simply never gets indexed. Reading the App Router tree
 * from disk removes the human step: if the page exists, it is in the sitemap.
 *
 * This runs while `next build` renders sitemap.xml, in Node, with the repository on disk. It is
 * never bundled for the browser: only src/app/sitemap.ts imports it, and that file is built into
 * a static XML artefact.
 */

const APP_DIR = join(process.cwd(), 'src', 'app')
const PAGE_FILES = ['page.tsx', 'page.ts', 'page.jsx', 'page.js', 'page.mdx']

/** Segments the App Router does not turn into URL segments, plus the ones we cannot enumerate. */
function classify(segment: string): 'transparent' | 'skip' | 'segment' {
  // (marketing), route group: affects layout, not the URL.
  if (segment.startsWith('(') && segment.endsWith(')')) return 'transparent'
  // _components, @modal, api, private folders, parallel routes, and handlers that a static
  // export does not serve as pages.
  if (segment.startsWith('_') || segment.startsWith('@') || segment === 'api') return 'skip'
  // [slug], the value set lives in generateStaticParams, not in the folder name. Declare those
  // routes explicitly in src/app/sitemap.ts; see references/seo.md in the starter skill.
  if (segment.startsWith('[')) return 'skip'
  return 'segment'
}

function walk(dir: string, route: string, found: string[]): void {
  const entries = readdirSync(dir, { withFileTypes: true })

  if (entries.some((entry) => entry.isFile() && PAGE_FILES.includes(entry.name))) {
    found.push(route === '' ? '/' : route)
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    const kind = classify(entry.name)
    if (kind === 'skip') continue
    const nextRoute = kind === 'transparent' ? route : `${route}/${entry.name}`
    walk(join(dir, entry.name), nextRoute, found)
  }
}

/** Every statically rendered page route, sorted, starting with '/'. */
export function discoverRoutes(): string[] {
  const found: string[] = []
  walk(APP_DIR, '', found)
  return [...new Set(found)].sort()
}
