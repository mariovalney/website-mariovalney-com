#!/usr/bin/env node
/**
 * Serves out/ the way nginx.conf will serve it in production: trailing slashes redirected,
 * /sobre resolved to sobre.html, unknown paths answered with 404.html and a real 404 status.
 *
 * `next dev` renders through the framework and hides export-only mistakes (a missing static
 * asset, a link that only works with the dev server). This is the cheap way to see the artefact
 * that actually ships. No dependency: the point is that it works right after `pnpm build`.
 */

import { createReadStream, existsSync, statSync } from 'node:fs'
import { createServer } from 'node:http'
import { extname, join, normalize } from 'node:path'

const OUT = join(process.cwd(), 'out')
const PORT = Number(process.env.PORT || 3001)

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

  const file = resolveFile(pathname === '/' ? '/index.html' : pathname)
  const target = file ?? join(OUT, '404.html')
  const status = file ? 200 : 404

  res.writeHead(status, { 'Content-Type': TYPES[extname(target)] || 'application/octet-stream' })
  createReadStream(target).pipe(res)
}).listen(PORT, () => {
  console.warn(`Preview of out/ on http://localhost:${PORT}`)
})
