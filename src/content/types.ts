/**
 * The shape both languages have to fill.
 *
 * Every string the page renders lives in src/content/pt-BR.ts and src/content/en.ts, typed against
 * this file. That is what keeps one language from silently falling behind the other: adding a
 * field breaks the build until both dictionaries carry it.
 */

import type { Locale } from '@/lib/site'

/** A block of history. One company, one or more roles inside it. */
export interface ExperienceEntry {
  /** The whole span, shown in the narrow left column of the row. */
  period: string
  /** Row heading: the role when the block holds one, the company when it holds several. */
  title: string
  /** Appended to the heading when `title` is a role. Absent where naming the company is not ours. */
  company?: string
  companyUrl?: string
  /** Only when the same company held more than one role, most recent first. */
  roles?: { role: string; period: string }[]
  description: string[]
  tags: string[]
}

export interface ProjectEntry {
  name: string
  /** A number a reader can go and check at `url`. Never an estimate, never rounded up. */
  metric?: string
  description: string
  url?: string
  tags: string[]
}

export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'linkedin'
}

/** A section of the scrolling column. Its `id` is both the anchor and the nav entry. */
export interface Section {
  id: string
  heading: string
}

/** One numbered block of a legal page. The number comes from the position in the list. */
export interface LegalSection {
  heading: string
  paragraphs: string[]
  /** Rendered as a bulleted list under the paragraphs, where the section enumerates. */
  items?: string[]
}

/**
 * A page of prose with legal weight: the privacy policy today, whatever joins it later. It carries
 * its own head copy because its title and description have nothing to do with the portfolio's, and
 * the route it is served at lives in `src/lib/site.ts`, since the slug differs per language.
 */
export interface LegalPageContent {
  meta: { title: string; description: string }
  /** Short form, for the link in the footer of the home page. */
  linkLabel: string
  heading: string
  /** The last revision, written out. The git history of this file is the long version. */
  updated: string
  intro: string[]
  sections: LegalSection[]
  /** The address a data subject request goes to, rendered as the closing section. */
  contact: { heading: string; paragraph: string; email: string }
  backLabel: string
}

export interface SiteContent {
  locale: Locale
  meta: { title: string; description: string }
  hero: { name: string; role: string; tagline: string }
  about: Section & { paragraphs: string[] }
  experience: Section & { entries: ExperienceEntry[] }
  projects: Section & { entries: ProjectEntry[] }
  privacy: LegalPageContent
  socials: SocialLink[]
  ui: {
    skipToContent: string
    /** Accessible name of the section navigation. */
    navLabel: string
    /** Accessible name of the link to the other language. */
    languageSwitch: string
  }
}
