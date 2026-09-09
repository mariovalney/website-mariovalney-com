'use client'

import { useEffect, useState } from 'react'
import type { Section } from '@/content/types'
import { cn } from '@/lib/utils'

/**
 * The section navigation, and the only client component in the project.
 *
 * On a desktop screen the section headings are hidden, so this list is what tells the reader
 * where they are. Without JavaScript the links stay ordinary anchors that still work; only the
 * active marker is lost, which is why the marker is never the sole indication of anything.
 */
export function SiteNav({ sections, label }: { sections: Section[]; label: string }) {
  const [active, setActive] = useState(sections[0]?.id ?? '')

  useEffect(() => {
    const targets = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null)

    if (targets.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length === 0) return
        // The visible section nearest the top wins, so scrolling up and scrolling down both
        // settle on the one actually being read instead of flickering between neighbours.
        const nearestTop = visible.reduce((a, b) =>
          a.boundingClientRect.top <= b.boundingClientRect.top ? a : b,
        )
        setActive(nearestTop.target.id)
      },
      // A band across the upper middle of the viewport: a section counts as current once its
      // top passes the first fifth, and stops counting well before it leaves the screen.
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 },
    )

    for (const target of targets) observer.observe(target)
    return () => observer.disconnect()
  }, [sections])

  return (
    <nav className="mt-16 hidden lg:block" aria-label={label}>
      <ul className="w-max">
        {sections.map((section) => {
          const isActive = active === section.id
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="group flex items-center py-3"
                aria-current={isActive ? 'true' : undefined}
              >
                <span
                  className={cn(
                    'mr-4 h-px w-8 bg-fg-muted transition-all motion-reduce:transition-none',
                    'group-hover:w-16 group-hover:bg-fg-primary group-focus-visible:w-16',
                    isActive && 'w-16 bg-fg-primary',
                  )}
                />
                <span
                  className={cn(
                    'text-xs font-bold uppercase tracking-widest text-fg-muted transition-colors',
                    'group-hover:text-fg-primary group-focus-visible:text-fg-primary',
                    isActive && 'text-fg-primary',
                  )}
                >
                  {section.heading}
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
