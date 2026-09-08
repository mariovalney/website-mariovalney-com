import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { Container } from '@/components/ui/container'
import { NAV, SITE, THEME_COLOR } from '@/lib/site'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  // Makes every relative URL in metadata (canonical, Open Graph, images) resolve to an absolute
  // one. Without it, crawlers receive paths they cannot follow.
  metadataBase: new URL(SITE.url),
  title: { default: SITE.name, template: `%s · ${SITE.name}` },
  description: SITE.description,
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: SITE.name,
    description: SITE.description,
    url: SITE.url,
    locale: SITE.locale,
  },
  twitter: { card: 'summary_large_image' },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: THEME_COLOR.light },
    { media: '(prefers-color-scheme: dark)', color: THEME_COLOR.dark },
  ],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={SITE.locale} className={inter.variable}>
      <body className="flex min-h-dvh flex-col">
        <header className="border-b border-border bg-bg-surface">
          <Container className="flex items-center justify-between gap-6 py-4">
            <Link href="/" className="font-bold text-fg-primary">
              {SITE.name}
            </Link>
            <nav aria-label="Principal">
              <ul className="flex gap-6 text-sm">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-fg-primary">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Container>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-border">
          <Container className="py-8 text-sm text-fg-muted">
            © {new Date().getFullYear()} {SITE.name}
          </Container>
        </footer>
      </body>
    </html>
  )
}
