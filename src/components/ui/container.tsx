import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/** Horizontal rhythm of the whole site: one max width, one gutter, used everywhere. */
export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('mx-auto w-full max-w-5xl px-6', className)}>{children}</div>
}
