import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

const WIDTHS = {
  /** Reading width, for a page of prose. */
  prose: 'max-w-5xl',
  /** The two-column portfolio, which needs room for a sticky column beside the content. */
  wide: 'max-w-7xl',
} as const

/** Horizontal rhythm of the whole site: one max width, one gutter, used everywhere. */
export function Container({
  children,
  className,
  width = 'prose',
}: {
  children: ReactNode
  className?: string
  width?: keyof typeof WIDTHS
}) {
  return <div className={cn('mx-auto w-full px-6', WIDTHS[width], className)}>{children}</div>
}
