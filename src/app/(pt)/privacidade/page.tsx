import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'
import { ptBR } from '@/content/pt-BR'
import { metadataFor } from '@/lib/metadata'
import { PRIVACY_ROUTES } from '@/lib/site'

export const metadata: Metadata = metadataFor(ptBR, {
  meta: ptBR.privacy.meta,
  routes: PRIVACY_ROUTES,
})

export default function PrivacyPage() {
  return <LegalPage content={ptBR} page={ptBR.privacy} routes={PRIVACY_ROUTES} />
}
