import type { ReactNode } from 'react'

/**
 * The list pattern shared by experience and projects.
 *
 * Hovering one row fades its siblings, which is what makes a long list readable without borders
 * between the items. It is pure CSS through Tailwind's named groups: the list is `group/list`, each
 * row is `group`, and the row under the pointer wins with the important modifier. On a touch screen
 * and below `lg` none of it applies, because there is no pointer to follow.
 */
export function EntryList({ children }: { children: ReactNode }) {
  return <ul className="group/list">{children}</ul>
}

export function EntryRow({ period, children }: { period: string; children: ReactNode }) {
  return (
    <li className="group relative mb-12 grid pb-1 transition-all last:mb-0 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:opacity-100!">
      {/* The card is a sibling behind the content rather than a background on the row, so it can
          bleed past the grid gutters without moving anything. */}
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-bg-hover lg:group-hover:shadow-2" />
      <header className="z-10 mt-1 mb-2 text-xs font-semibold tracking-wide text-fg-muted uppercase sm:col-span-2">
        {period}
      </header>
      <div className="z-10 sm:col-span-6">{children}</div>
    </li>
  )
}

export function TagList({ tags }: { tags: string[] }) {
  if (tags.length === 0) return null

  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full bg-accent-subtle px-3 py-1 text-xs leading-5 font-medium text-fg-primary"
        >
          {tag}
        </li>
      ))}
    </ul>
  )
}
