# Mário Valney — static site

Next.js 16 App Router in TypeScript, exported to static files (`output: 'export'`) and served by
nginx. There is no database, no authentication and no server at runtime: the production image
contains HTML, CSS and JavaScript, nothing else.

Code, identifiers, comments and commit messages in English. Only the interface is in the site's
own language.

## Structure

```
src/app/            pages, sitemap.ts, robots.ts, not-found.tsx, icon.svg (placeholder mark)
src/lib/site.ts     name, URL, description, locale, navigation, THEME_COLOR
src/lib/routes.ts   build-time route discovery, feeds the sitemap
src/components/ui/  container, section, button
src/styles/         globals.css — the only file with colour literals
scripts/            check-export.mjs (post-build assertions), preview.mjs
Dockerfile          multi-stage build ending in nginx on port 8080
docs/DEPLOY.md      the Easypanel service
```

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
- **Export `metadata` from every page**, with a title and a description. The `%s · <site>`
  template is already in the root layout, so give only the page name.
- **Run `pnpm verify` before calling a task done.** It fails when a page is missing from the
  sitemap, which is the mistake that otherwise reaches production unnoticed.
- **Add a new page to `NAV`** in `src/lib/site.ts` when it belongs in the menu. The sitemap needs
  nothing: it discovers the route.

## Never do this

- **Never add a Route Handler, `revalidate`, ISR, a Server Action or anything else that needs a
  server at request time.** The static export drops them silently — the build passes and the
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
