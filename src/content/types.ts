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

export interface SiteContent {
  locale: Locale
  meta: { title: string; description: string }
  hero: { name: string; role: string; tagline: string }
  about: Section & { paragraphs: string[] }
  experience: Section & { entries: ExperienceEntry[] }
  projects: Section & { entries: ProjectEntry[] }
  socials: SocialLink[]
  ui: {
    skipToContent: string
    /** Accessible name of the section navigation. */
    navLabel: string
    /** Accessible name of the link to the other language. */
    languageSwitch: string
  }
}
