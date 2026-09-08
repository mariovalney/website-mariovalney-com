# Deploy

Production runs as an **Easypanel app service** built from the repository `Dockerfile`.
Public URL: **https://mariovalney.com**

## The image

Three stages, so the runtime image carries no Node and no dependencies:

| Stage | What it does |
|---|---|
| `deps` | `pnpm install --frozen-lockfile` |
| `builder` | `pnpm build && pnpm check:export`, producing `out/` |
| `runner` | `nginx-unprivileged` serving `out/` on port **8080** |

The export check runs inside the build: a page missing from `sitemap.xml` fails the image, rather
than reaching production unnoticed.

## The trap: build-time versus runtime

There are no runtime variables. The site is static, so **everything is decided at build time**,
including the URL that ends up in `sitemap.xml`, in `robots.txt` and in every canonical tag.
Changing a variable in the Easypanel panel does nothing on its own — the image has to be rebuilt.

| Variable | Set at | Value | Notes |
|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Build (`--build-arg`) | `https://mariovalney.com` | Optional. `src/lib/site.ts` already carries the production domain; this overrides it for a staging build. |

## Setting up the service

1. **Create an App service** in the project.
2. **Source:** this GitHub repository, branch `main`.
3. **Build:** Dockerfile, at the repository root. No build arguments are needed for production.
4. **Port:** `8080`. This is the one thing people get wrong — the unprivileged nginx image cannot
   bind to 80.
5. **Domain:** `https://mariovalney.com`, HTTPS with a certificate issued by Easypanel.
6. **Health check:** path `/healthz`, expecting 200. It answers `ok` and nothing else, so it hands
   an anonymous caller no fingerprint of the deployment.
7. **Deploy**, and enable auto-deploy on push to `main` if the team wants it.

## Verifying a deploy

```bash
curl -sS https://mariovalney.com/healthz                                   # ok
curl -sS -o /dev/null -w '%{http_code}\n' https://mariovalney.com/          # 200
curl -sS -o /dev/null -w '%{http_code}\n' https://mariovalney.com/nao-existe # 404, never 200
curl -sS https://mariovalney.com/sitemap.xml | head                        # absolute URLs on the real domain
curl -sS -o /dev/null -D - https://mariovalney.com/sobre/ | grep -i location # redirect to /sobre
```

The third check matters more than it looks: a static host that answers 200 with the 404 page turns
every broken link into a page crawlers treat as real content.

## Running the image locally

```bash
docker build -t website-mariovalney-com .
docker run --rm -p 8080:8080 website-mariovalney-com
# http://localhost:8080
```

Without Docker, `pnpm build && pnpm preview` serves `out/` with the same routing rules.

## If the site outgrows a static export

A contact form that sends email, a CMS preview, ISR, an authenticated area: none of it works
under `output: 'export'`, and the build gives no warning — the feature just is not there. Moving
means `output: 'standalone'`, a Node runtime image (`node server.js`, port 3000) and a service
that stays up. Decide it explicitly, in one change, rather than discovering it in production.
