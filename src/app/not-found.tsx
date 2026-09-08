import { ButtonLink } from '@/components/ui/button-link'
import { Container } from '@/components/ui/container'

/**
 * Exported as out/404.html. nginx serves it for any unknown path, with a real 404 status —
 * a soft 404 (200 with an error page) gets the whole site treated as low quality by crawlers.
 */
export default function NotFound() {
  return (
    <Container className="py-28 text-center">
      <p className="font-mono text-sm text-fg-muted">404</p>
      <h1 className="mt-2 text-2xl">Página não encontrada</h1>
      <p className="mt-3 text-fg-secondary">O endereço acessado não existe ou foi movido.</p>
      <div className="mt-8 flex justify-center">
        <ButtonLink href="/" variant="secondary">
          Voltar ao início
        </ButtonLink>
      </div>
    </Container>
  )
}
