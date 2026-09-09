import { SITE } from '@/lib/site'

/**
 * Plausible, self-hosted. A plain tag rather than next/script: the site is static HTML with no
 * client-side navigation, so the script belongs in the document, where it runs during parse.
 * next/script would only load it after hydration, and its beforeInteractive strategy does not emit
 * a real <script src> in the App Router at all, it pushes onto a queue.
 *
 * Both root layouts render this, since the two languages have a root layout each and there is no
 * shared one to put it in.
 */
export function Analytics() {
  return (
    <script
      defer
      // Derived rather than written out: a staging build then reports the staging host, which
      // Plausible discards as an unknown site instead of mixing it into the production numbers.
      data-domain={new URL(SITE.url).host}
      src="https://analytics.amestris.cloud/js/script.js"
    />
  )
}
