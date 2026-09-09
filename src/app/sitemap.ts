import type { MetadataRoute } from 'next'
import { discoverRoutes } from '@/lib/routes'
import { absoluteUrl } from '@/lib/site'

// A static export has no server to render metadata on request; this pins the route to build time.
export const dynamic = 'force-static'

/**
 * sitemap.xml, built from the routes that exist on disk.
 *
 * Dynamic routes ([slug]) are not discoverable from folder names, add them here, from the same
 * source generateStaticParams uses, so the two can never disagree.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return discoverRoutes().map((route) => ({
    url: absoluteUrl(route),
    lastModified,
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }))
}
