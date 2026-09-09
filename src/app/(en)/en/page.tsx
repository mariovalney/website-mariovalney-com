import type { Metadata } from 'next'
import { Portfolio } from '@/components/portfolio'
import { en } from '@/content/en'
import { metadataFor } from '@/lib/metadata'

export const metadata: Metadata = metadataFor(en)

export default function EnglishHomePage() {
  return <Portfolio content={en} />
}
