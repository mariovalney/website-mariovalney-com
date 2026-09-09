import type { ReactNode } from 'react'
import { inter } from '@/lib/fonts'
import { siteViewport } from '@/lib/metadata'
import '@/styles/globals.css'

/**
 * Root layout of the Portuguese site, served at /.
 *
 * There is no src/app/layout.tsx on purpose: two route groups with a root layout each is what
 * lets <html lang> be correct per language without a dynamic segment, which would take the
 * sitemap off automatic route discovery. See src/lib/routes.ts.
 */
export const viewport = siteViewport

export default function PortugueseLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
