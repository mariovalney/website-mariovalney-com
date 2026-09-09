# Mário Valney, static site

Next.js 16 App Router in TypeScript, exported to static files (`output: 'export'`) and served by
nginx. There is no database, no authentication and no server at runtime: the production image
contains HTML, CSS and JavaScript, nothing else.

Code, identifiers, comments and commit messages in English. Only the interface is in the site's
own language.

## Structure

```
src/app/(pt)/       root layout and page for pt-BR, served at /
src/app/(en)/en/    root layout and page for English, served at /en
src/app/            not-found.tsx, sitemap.ts, robots.ts, icon.svg (placeholder mark)
src/content/        types.ts plus one dictionary per language: every string the page renders
src/components/     portfolio.tsx, site-nav.tsx (the only client component), entry-list.tsx
src/lib/site.ts     name, URL, LOCALES, THEME_COLOR
src/lib/routes.ts   build-time route discovery, feeds the sitemap
src/styles/         globals.css, the only file with colour literals
nginx/              default.conf, plus the legacy redirect and gone maps it includes
scripts/            check-export.mjs (post-build assertions), preview.mjs
Dockerfile          multi-stage build ending in nginx on port 8080
docs/DEPLOY.md      the Easypanel service
```

There is no `src/app/layout.tsx` on purpose. Each language is a route group with its own root
layout, which is the only stable way to get `<html lang>` right per language while keeping `/` as
the Portuguese home and the sitemap on automatic route discovery.

## How to work here

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm verify     # typecheck + lint + build + export check. This is the gate.
pnpm preview    # serves out/ the way nginx does, after a build
```

## Always do this

- **Put every colour in `src/styles/globals.css`.** Style with the tokens (`text-fg-primary`,
  `bg-bg-surface`, `border-border`). A loose hex is how a site starts drifting visually, and the
  drift is only obvious once it is everywhere. `THEME_COLOR` in `src/lib/site.ts` is the single
  exception, because a browser meta tag cannot read a CSS variable; it carries a light and a dark
  value, both tracking `--bg-surface`. The palette is monochrome by choice: emphasis comes from
  contrast, not from a second hue.
- **Export `metadata` from every page**, built with `metadataFor()` in `src/lib/metadata.ts` so the
  canonical URL, the hreflang pair and the Open Graph locale stay consistent between the two
  languages.
- **Run `pnpm verify` before calling a task done.** It fails when a page is missing from the
  sitemap, which is the mistake that otherwise reaches production unnoticed.
- **Put every string in `src/content/`**, never inline in a component, and add it to both
  languages. The shared type in `src/content/types.ts` is what makes the compiler enforce that.
- **Add a redirect to `nginx/legacy-redirects.map` or `nginx/legacy-gone.map`**, with the key
  written without a trailing slash. `nginx/default.conf` normalises the address in the rewrite
  phase, before the lookup, so a key with a slash never matches. `scripts/preview.mjs` reads the
  same files, so `pnpm preview` redirects exactly like production.

## Never do this

- **Never add a Route Handler, `revalidate`, ISR, a Server Action or anything else that needs a
  server at request time.** The static export drops them silently, the build passes and the
  feature simply does not exist in production. If the site genuinely needs one, that is a change
  of deployment model: switch to `output: 'standalone'` and a Node runtime image, deliberately.
- **Never add a database or a CMS without deciding the deployment first.** Content that changes
  without a rebuild has nowhere to live in this architecture.
- **Never hardcode the domain in a page.** It lives in `src/lib/site.ts`; use `absoluteUrl()`.
- **Never use `any`, and never disable a Biome rule with a comment** without saying why in the
  pull request.
- **Never commit `.env.local`.**

## Adding a dynamic route

`src/lib/routes.ts` cannot enumerate `[slug]` from the folder name. Export `generateStaticParams`
in the page, and add the same routes to `src/app/sitemap.ts` from the same source, so the two
cannot disagree. `pnpm check:export` fails if an exported page is missing from the sitemap.
