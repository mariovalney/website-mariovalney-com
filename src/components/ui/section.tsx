import type { ReactNode } from 'react'
import { Container } from '@/components/ui/container'
import { cn } from '@/lib/utils'

/** A vertical block of content. Keeps spacing between sections consistent across pages. */
export function Section({
  children,
  className,
  title,
  lead,
}: {
  children?: ReactNode
  className?: string
  title?: string
  lead?: string
}) {
  return (
    <section className={cn('py-16', className)}>
      <Container>
        {title ? <h2 className="text-2xl">{title}</h2> : null}
        {lead ? <p className="mt-3 max-w-2xl text-fg-secondary">{lead}</p> : null}
        {children ? <div className={cn(title || lead ? 'mt-8' : undefined)}>{children}</div> : null}
      </Container>
    </section>
  )
}
