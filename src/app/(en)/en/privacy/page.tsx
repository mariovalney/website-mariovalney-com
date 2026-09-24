import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'
import { en } from '@/content/en'
import { metadataFor } from '@/lib/metadata'
import { PRIVACY_ROUTES } from '@/lib/site'

export const metadata: Metadata = metadataFor(en, {
  meta: en.privacy.meta,
  routes: PRIVACY_ROUTES,
})

export default function EnglishPrivacyPage() {
  return <LegalPage content={en} page={en.privacy} routes={PRIVACY_ROUTES} />
}
