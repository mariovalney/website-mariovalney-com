import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // The whole site is emitted as static files under out/. There is no Node process in
  // production, which is why the runtime image is just nginx. Anything that needs a server
  // at request time (Route Handlers, ISR, revalidate) does not work under this mode.
  output: 'export',
  // Static export has no image optimisation server, so next/image serves the original file.
  images: { unoptimized: true },
  // A broken type stops the build instead of shipping. Linting is Biome's job, outside the build.
  typescript: { ignoreBuildErrors: false },
  poweredByHeader: false,
  // URLs stay without a trailing slash: /sobre, never /sobre/. nginx.conf redirects the slashed
  // form so the same page is never reachable at two addresses.
  trailingSlash: false,
}

export default nextConfig
