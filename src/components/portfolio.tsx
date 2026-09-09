import type { ReactNode } from 'react'
import { EntryList, EntryRow, TagList } from '@/components/entry-list'
import { SiteNav } from '@/components/site-nav'
import { Container } from '@/components/ui/container'
import { SocialIcon } from '@/components/ui/social-icon'
import type { Section, SiteContent } from '@/content/types'
import { LOCALES, otherLocale } from '@/lib/site'

/**
 * The whole page, for either language. The two routes differ only in the dictionary they hand in,
 * so there is one copy of the markup and no way for the layouts to drift apart.
 *
 * Two columns on `lg`: the left one sticks and carries identity plus navigation, the right one
 * scrolls. Below `lg` they stack and each section grows a sticky heading bar, because there is no
 * side navigation to say where the reader is.
 */
export function Portfolio({ content }: { content: SiteContent }) {
  const sections = [content.about, content.experience, content.projects]
  const other = otherLocale(content.locale)

  return (
    <Container width="wide" className="relative min-h-dvh py-12 md:px-12 md:py-16 lg:py-0">
      {/* Hidden until it has keyboard focus. Not moved off screen with a transform: this sits in a
          centred container, so shifting it by its own width still leaves it visible on a wide
          viewport. sr-only does not depend on where the element happens to be. */}
      <a
        href="#content"
        className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:top-4 focus-visible:left-4 focus-visible:z-50 focus-visible:rounded-md focus-visible:bg-accent focus-visible:px-4 focus-visible:py-3 focus-visible:text-sm focus-visible:font-bold focus-visible:tracking-widest focus-visible:text-accent-fg focus-visible:uppercase"
      >
        {content.ui.skipToContent}
      </a>

      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-fg-primary sm:text-5xl">
              {content.hero.name}
            </h1>
            <p className="mt-3 text-lg font-medium tracking-tight text-fg-primary sm:text-xl">
              {content.hero.role}
            </p>
            <p className="mt-4 max-w-xs leading-normal">{content.hero.tagline}</p>

            <SiteNav sections={sections} label={content.ui.navLabel} />
          </div>

          <div className="mt-10 flex items-center gap-5 lg:mt-0">
            <ul className="flex items-center gap-5">
              {content.socials.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-fg-muted transition-colors hover:text-fg-primary"
                  >
                    <span className="sr-only">{social.label}</span>
                    <SocialIcon icon={social.icon} />
                  </a>
                </li>
              ))}
            </ul>

            <span className="h-4 w-px bg-border" aria-hidden="true" />

            {/* A plain anchor, not next/link: the other language is a separate root layout, so the
                browser has to load the document anyway. */}
            <a
              href={LOCALES[other].path}
              hrefLang={other}
              aria-label={content.ui.languageSwitch}
              className="rounded-md border border-border px-2 py-1 text-xs font-bold tracking-widest text-fg-muted uppercase transition-colors hover:border-fg-muted hover:text-fg-primary"
            >
              {LOCALES[other].label}
            </a>
          </div>
        </header>

        <main id="content" className="pt-16 lg:w-[52%] lg:py-24">
          <SectionShell section={content.about}>
            <div className="space-y-4">
              {content.about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </SectionShell>

          <SectionShell section={content.experience}>
            <EntryList>
              {content.experience.entries.map((entry) => (
                <EntryRow key={`${entry.period}-${entry.title}`} period={entry.period}>
                  <h3 className="text-base leading-tight font-medium text-fg-primary">
                    {entry.company ? `${entry.title} · ${entry.company}` : entry.title}
                  </h3>

                  {entry.roles ? (
                    <ol className="mt-1 space-y-0.5">
                      {entry.roles.map((role) => (
                        <li key={role.role} className="text-sm text-fg-muted">
                          {role.role}, {role.period}
                        </li>
                      ))}
                    </ol>
                  ) : null}

                  <div className="mt-2 space-y-2">
                    {entry.description.map((paragraph) => (
                      <p key={paragraph.slice(0, 32)} className="text-sm leading-normal">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <TagList tags={entry.tags} />
                </EntryRow>
              ))}
            </EntryList>
          </SectionShell>

          <SectionShell section={content.projects}>
            <EntryList>
              {content.projects.entries.map((entry) => (
                <EntryRow key={entry.name} period={entry.metric ?? ''}>
                  <h3 className="text-base leading-tight font-medium text-fg-primary">
                    {entry.url ? (
                      <a
                        href={entry.url}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline focus-visible:underline"
                      >
                        {entry.name}
                      </a>
                    ) : (
                      entry.name
                    )}
                  </h3>
                  <p className="mt-2 text-sm leading-normal">{entry.description}</p>
                  <TagList tags={entry.tags} />
                </EntryRow>
              ))}
            </EntryList>
          </SectionShell>

          <footer className="max-w-md pb-16 text-sm text-fg-muted lg:pb-24">
            <p>{content.ui.footer}</p>
            <p className="mt-2">
              © {new Date().getFullYear()} {content.hero.name}
            </p>
          </footer>
        </main>
      </div>
    </Container>
  )
}

/**
 * A section of the scrolling column. The heading bar is sticky and blurred below `lg` and
 * screen-reader-only above it, where the side navigation already names the section. It is the
 * choice that keeps the reading column free of headings.
 */
function SectionShell({ section, children }: { section: Section; children: ReactNode }) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-28 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-bg-base/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:mx-auto lg:w-full lg:px-0 lg:py-0">
        <h2
          id={`${section.id}-heading`}
          className="text-sm font-bold tracking-widest text-fg-primary uppercase"
        >
          {section.heading}
        </h2>
      </div>
      {children}
    </section>
  )
}
