import { Analytics } from '@/components/analytics'
import { Container } from '@/components/ui/container'
import { SITE } from '@/lib/site'
import '@/styles/globals.css'

/**
 * Exported as out/404.html, which nginx serves for any unknown path with a real 404 status. A soft
 * 404, meaning a 200 with an error page, gets the whole site treated as low quality by crawlers.
 *
 * It sits at src/app/ and renders no <html> or <body> of its own. There is no root layout above it,
 * since each language is a route group with its own, so Next supplies the document instead: adding
 * one here nests <html> inside <html>, and moving the file into a group stops it from being the
 * export's 404 at all. The stylesheet import below is what puts the site's CSS in that document.
 *
 * Both languages appear in the copy because an unmatched address gives no hint which was wanted.
 *
 * It carries the analytics tag of its own, since no layout above it can. The site has exactly two
 * real pages, so any other address in the Plausible Pages report is a 404 by definition, and the
 * ordinary script is enough to read them. The instance does not build script.404.js anyway.
 */
export const metadata = {
  title: `404 · ${SITE.name}`,
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <Container className="py-28 text-center">
      <p className="font-mono text-sm text-fg-muted">404</p>
      <h1 className="mt-2 text-2xl text-fg-primary">Página não encontrada</h1>
      <p className="mt-3">O endereço acessado não existe ou foi movido.</p>
      <p className="mt-1 text-fg-muted" lang="en">
        This address does not exist or has moved.
      </p>
      <p className="mt-8">
        <a href="/" className="font-medium text-fg-primary underline underline-offset-4">
          {SITE.name}
        </a>
      </p>
      <Analytics />
    </Container>
  )
}
