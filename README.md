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
src/app/            pages, sitemap.ts, robots.ts, not-found.tsx, icon.svg (placeholder mark)
src/lib/site.ts     name, URL, description, locale, navigation
src/lib/routes.ts   route discovery that feeds the sitemap
src/components/ui/  container, section, button
src/styles/         globals.css — every colour in the project
scripts/            export check and local preview
docs/DEPLOY.md      Easypanel service, build arguments, domain
```

## Adding a page

Create `src/app/<path>/page.tsx`, export `metadata` with a title, and add the entry to `NAV` in
`src/lib/site.ts` if it belongs in the menu. The sitemap needs no edit: it reads the route tree
from disk at build time, and `pnpm verify` fails if an exported page is missing from it.

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
