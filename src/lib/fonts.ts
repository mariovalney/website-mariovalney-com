import { Inter } from 'next/font/google'

/**
 * One font instance for the whole site. Both root layouts import it, so the two languages share a
 * single self-hosted copy instead of each triggering its own subset.
 */
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
