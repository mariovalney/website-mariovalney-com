import { Container } from '@/components/ui/container'
import type { LegalPageContent, SiteContent } from '@/content/types'
import { LOCALES, type LocaleRoutes, otherLocale, SITE } from '@/lib/site'

/**
 * A page of prose with legal weight, for either language: the privacy policy today, whatever
 * joins it later. Same shape as src/components/portfolio.tsx, one copy of the markup fed by the
 * dictionary of the route that renders it.
 *
 * It reads at the narrow `prose` width rather than the portfolio's two columns, and it carries its
 * own small header, since the sticky identity column belongs to the home page.
 *
 * `routes` is the pair this document is served at, which the language switch needs: the slug is
 * copy and differs per language, so it cannot be derived from the current address.
 */
export function LegalPage({
  content,
  page,
  routes,
}: {
  content: SiteContent
  page: LegalPageContent
  routes: LocaleRoutes
}) {
  const other = otherLocale(content.locale)
  const home = LOCALES[content.locale].path

  return (
    <Container className="flex min-h-dvh flex-col py-10 md:py-16">
      <header className="flex items-center justify-between gap-4 border-b border-border pb-6">
        <a
          href={home}
          className="text-sm font-bold tracking-widest text-fg-primary uppercase hover:underline focus-visible:underline"
        >
          {content.hero.name}
        </a>

        {/* A plain anchor, not next/link: the other language is a separate root layout, so the
            browser has to load the document anyway. */}
        <a
          href={routes[other]}
          hrefLang={other}
          aria-label={content.ui.languageSwitch}
          className="rounded-md border border-border px-2 py-1 text-xs font-bold tracking-widest text-fg-muted uppercase transition-colors hover:border-fg-muted hover:text-fg-primary"
        >
          {LOCALES[other].label}
        </a>
      </header>

      <main id="content" className="grow py-12 md:py-16">
        <p className="font-mono text-sm text-fg-muted">{page.updated}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-fg-primary sm:text-4xl">
          {page.heading}
        </h1>

        <div className="mt-6 max-w-2xl space-y-4">
          {page.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-14 max-w-2xl space-y-10">
          {page.sections.map((section, index) => (
            <section key={section.heading}>
              <h2 className="flex items-baseline gap-3 text-sm font-bold tracking-widest text-fg-primary uppercase">
                {/* The number is the position in the list, never typed into the dictionary: the
                    two languages then cannot number the same document differently. */}
                <span className="font-mono font-normal text-fg-muted" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {section.heading}
              </h2>

              <div className="mt-3 space-y-3 text-sm leading-normal">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>

              {section.items ? (
                <ul className="mt-3 space-y-1 text-sm leading-normal">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-fg-muted" aria-hidden="true">
                        ·
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <section>
            <h2 className="flex items-baseline gap-3 text-sm font-bold tracking-widest text-fg-primary uppercase">
              <span className="font-mono font-normal text-fg-muted" aria-hidden="true">
                {String(page.sections.length + 1).padStart(2, '0')}
              </span>
              {page.contact.heading}
            </h2>
            <p className="mt-3 text-sm leading-normal">{page.contact.paragraph}</p>
            <p className="mt-1 text-sm">
              <a
                href={`mailto:${page.contact.email}`}
                className="font-medium text-fg-primary underline underline-offset-4"
              >
                {page.contact.email}
              </a>
            </p>
          </section>
        </div>
      </main>

      <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-sm text-fg-muted">
        {/* One template string rather than four expressions, so React emits a single text node
            instead of splitting it with <!-- --> separators. The closing year is the build year,
            which moves on every deploy. */}
        <p>{`${SITE.copyrightFrom}-${new Date().getFullYear()} © ${content.hero.name}`}</p>
        <a
          href={home}
          className="underline underline-offset-4 transition-colors hover:text-fg-primary"
        >
          {page.backLabel}
        </a>
      </footer>
    </Container>
  )
}
