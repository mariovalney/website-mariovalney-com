import type { ReactNode } from 'react'
import { Analytics } from '@/components/analytics'
import { inter } from '@/lib/fonts'
import { siteViewport } from '@/lib/metadata'
import '@/styles/globals.css'

/** Root layout of the English site, served at /en. Mirror of the Portuguese one. */
export const viewport = siteViewport

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
