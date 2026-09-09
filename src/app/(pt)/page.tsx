import type { Metadata } from 'next'
import { Portfolio } from '@/components/portfolio'
import { ptBR } from '@/content/pt-BR'
import { metadataFor } from '@/lib/metadata'

export const metadata: Metadata = metadataFor(ptBR)

export default function HomePage() {
  return <Portfolio content={ptBR} />
}
