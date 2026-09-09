# syntax=docker/dockerfile:1

# Production image: Next builds the site to static files, nginx serves them.
#
# Three stages, so the runtime image carries no Node, no toolchain and no dependencies, only
# the exported HTML. It is what Easypanel builds from this repository. See docs/DEPLOY.md.

# ---------------------------------------------------------------------------
# Stage 1: dependencies
# ---------------------------------------------------------------------------
FROM node:22-alpine AS deps
WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# ---------------------------------------------------------------------------
# Stage 2: build
# ---------------------------------------------------------------------------
FROM node:22-alpine AS builder
WORKDIR /app

RUN corepack enable

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# NEXT_PUBLIC_* is inlined into the bundle at build time, which is why this is a build argument
# and not a runtime variable: setting it in the panel after the fact changes nothing, the image
# has to be rebuilt. The default is the production domain, already baked into src/lib/site.ts;
# override it to build a staging or preview image.
ARG NEXT_PUBLIC_SITE_URL=https://mariovalney.com
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL \
    NEXT_TELEMETRY_DISABLED=1

# The export check runs here on purpose: a page missing from the sitemap fails the image build
# instead of reaching production unnoticed.
RUN pnpm build && pnpm check:export

# ---------------------------------------------------------------------------
# Stage 3: runtime
# ---------------------------------------------------------------------------
FROM nginxinc/nginx-unprivileged:stable-alpine AS runner

# This image already runs as a non-root user, which is why it listens on 8080 and not 80.
COPY nginx/ /etc/nginx/conf.d/
COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:8080/healthz || exit 1
