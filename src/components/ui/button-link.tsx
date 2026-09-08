import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

const VARIANTS = {
  primary: 'bg-accent text-accent-fg hover:bg-accent-hover active:bg-accent-press',
  secondary: 'border border-border bg-bg-elevated text-fg-primary hover:bg-bg-surface',
} as const

/**
 * The site's call to action. A static site has no forms to submit, so every button is a link —
 * keeping it that way avoids a <button> that does nothing without JavaScript.
 */
export function ButtonLink({
  href,
  children,
  variant = 'primary',
  className,
}: {
  href: string
  children: ReactNode
  variant?: keyof typeof VARIANTS
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium transition-colors',
        VARIANTS[variant],
        className,
      )}
    >
      {children}
    </Link>
  )
}
