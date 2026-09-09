# Mário Valney

Desenvolvedor e construtor de produtos, entre engenharia, IA e operações.

Static site: Next.js 16 App Router exported to plain HTML, served by nginx. No database, no
authentication, no runtime server.

## Running it

```bash
pnpm install          # Node 22+, pnpm 10
pnpm dev              # http://localhost:3000
pnpm verify           # typecheck + lint + build + export check. This is the gate.
pnpm preview          # serves out/ exactly as nginx will, on http://localhost:3001
```

## Structure

```
src/app/(pt)/       the Portuguese site, at /
src/app/(en)/en/    the English site, at /en
src/app/            not-found.tsx, sitemap.ts, robots.ts, icon.svg (placeholder mark)
src/content/        every string on the page, one file per language, one shared type
src/components/     portfolio.tsx (the page), site-nav.tsx (scroll spy), entry-list.tsx
src/lib/site.ts     name, URL, locales, THEME_COLOR
src/lib/routes.ts   route discovery that feeds the sitemap
src/styles/         globals.css, every colour in the project
nginx/              default.conf and the legacy redirect maps
scripts/            export check and local preview
docs/DEPLOY.md      Easypanel service, build arguments, domain
```

## Changing the site

**Copy** lives in `src/content/pt-BR.ts` and `src/content/en.ts`, both typed against
`src/content/types.ts`. Adding a field there breaks the build until both languages carry it, which
is what keeps one from falling behind the other. Section anchors come from the same files, so
renaming a section renames its anchor and its navigation entry together.

**A new page** is `src/app/(pt)/<path>/page.tsx` with an exported `metadata`, mirrored under
`src/app/(en)/en/<path>/`. The sitemap needs no edit: it reads the route tree from disk at build
time, and `pnpm verify` fails if an exported page is missing from it.

**A redirect** goes in `nginx/legacy-redirects.map` or `nginx/legacy-gone.map`, never in
`next.config.ts`: a static export has no server to run `redirects()`. Keys carry no trailing slash,
because `nginx/default.conf` normalises the address before looking it up.

## Rules that keep the site consistent

- **No hex outside `src/styles/globals.css`.** Use the tokens (`text-fg-primary`, `bg-bg-surface`,
  `border-border`). The single exception is `THEME_COLOR` in `src/lib/site.ts`, which a browser
  meta tag requires as a literal. `.github/workflows/ci.yml` fails the build on a hex written
  anywhere else.
- **No Route Handlers, no `revalidate`, no server-side data at request time.** The build produces
  static files; anything needing a server silently stops working. If the site starts needing one,
  see the note at the end of `docs/DEPLOY.md`.
- **`pnpm verify` before every commit.** CI runs the same command.

## Deploy

`docs/DEPLOY.md`. In short: Easypanel app service, built from this `Dockerfile`, listening on
port 8080.
