#!/usr/bin/env node
/**
 * Serves out/ the way nginx/default.conf serves it in production: trailing slashes redirected, the
 * legacy blog addresses answered with their 301 or 410, unknown paths answered with 404.html and a
 * real 404 status.
 *
 * The redirect lists are not copied here. This reads nginx/*.map, the same files nginx includes,
 * so the preview cannot drift from production.
 *
 * `next dev` renders through the framework and hides export-only mistakes (a missing static
 * asset, a link that only works with the dev server). This is the cheap way to see the artefact
 * that actually ships. No dependency: the point is that it works right after `pnpm build`.
 */

import { createReadStream, existsSync, readFileSync, statSync } from 'node:fs'
import { createServer } from 'node:http'
import { extname, join, normalize } from 'node:path'

const OUT = join(process.cwd(), 'out')
const NGINX = join(process.cwd(), 'nginx')
const PORT = Number(process.env.PORT || 3001)

/** Parses `key value;` lines out of an nginx map file, ignoring comments and blank lines. */
function loadMap(name) {
  const file = join(NGINX, name)
  if (!existsSync(file)) return []
  return readFileSync(file, 'utf8')
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line !== '' && !line.startsWith('#'))
    .map((line) => line.match(/^(\S+)\s+"?([^";]+)"?\s*;$/))
    .filter((match) => match !== null)
    .map(([, key, value]) => [key, value])
}

const GONE = new Set(loadMap('legacy-gone.map').map(([key]) => key))
const REDIRECTS = new Map(loadMap('legacy-redirects.map'))
// nginx names its captures $cat; JavaScript wants $<cat> in the replacement.
const PATTERNS = loadMap('legacy-patterns.map').map(([key, value]) => [
  new RegExp(key.replace(/^~/, '')),
  value.replace(/\$([a-z]+)/g, '$<$1>'),
])

function legacyRedirect(pathname) {
  const exact = REDIRECTS.get(pathname)
  if (exact) return exact
  for (const [pattern, target] of PATTERNS) {
    if (pattern.test(pathname)) return pathname.replace(pattern, target)
  }
  return null
}

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
}

if (!existsSync(OUT)) {
  console.error('out/ does not exist. Run `pnpm build` first.')
  process.exit(1)
}

function resolveFile(pathname) {
  // normalize() plus the prefix check keeps ../ out of the served directory.
  const candidates = [pathname, `${pathname}.html`, join(pathname, 'index.html')]
  for (const candidate of candidates) {
    const full = normalize(join(OUT, candidate))
    if (!full.startsWith(OUT)) continue
    if (existsSync(full) && statSync(full).isFile()) return full
  }
  return null
}

createServer((req, res) => {
  const url = new URL(req.url || '/', `http://localhost:${PORT}`)
  const pathname = decodeURIComponent(url.pathname)

  if (pathname.length > 1 && pathname.endsWith('/')) {
    res.writeHead(301, { Location: pathname.replace(/\/+$/, '') + url.search })
    res.end()
    return
  }

  // Same order as the server block: the slash is normalised above, then gone, then the lists.
  if (GONE.has(pathname)) {
    res.writeHead(410, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('410 Gone\n')
    return
  }

  const redirect = legacyRedirect(pathname)
  if (redirect) {
    res.writeHead(301, { Location: redirect })
    res.end()
    return
  }

  const file = resolveFile(pathname === '/' ? '/index.html' : pathname)
  const target = file ?? join(OUT, '404.html')
  const status = file ? 200 : 404

  res.writeHead(status, { 'Content-Type': TYPES[extname(target)] || 'application/octet-stream' })
  createReadStream(target).pipe(res)
}).listen(PORT, () => {
  console.warn(`Preview of out/ on http://localhost:${PORT}`)
})
