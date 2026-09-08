import type { Metadata } from 'next'
import { Container } from '@/components/ui/container'

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Desenvolvedor entre engenharia, produto e operações. Um pouco sobre o que faço.',
  // Relative to metadataBase, so the canonical tag comes out absolute.
  alternates: { canonical: '/sobre' },
}

// First-pass copy. Substituir pela bio real (LinkedIn, projetos, links de contato).
export default function AboutPage() {
  return (
    <Container className="py-20">
      <h1 className="text-3xl">Sobre</h1>
      <div className="mt-6 max-w-2xl space-y-4 text-fg-secondary">
        <p>
          Sou desenvolvedor e trabalho na fronteira entre engenharia, produto e operações: escrevo o
          software, participo das decisões de produto e cuido do que precisa rodar todos os dias.
        </p>
        <p>
          O foco recente é aplicar IA a esse conjunto: automatizar trabalho repetitivo, encurtar
          ciclo de decisão e transformar processo manual em ferramenta.
        </p>
        <p>Escrevo sobre isso e construo produtos.</p>
      </div>
    </Container>
  )
}
