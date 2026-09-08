import { ButtonLink } from '@/components/ui/button-link'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SITE } from '@/lib/site'

// First-pass copy, written from the positioning and not from a portfolio: refine it against the
// real projects before pointing the domain here.
const HIGHLIGHTS = [
  {
    title: 'Engenharia',
    body: 'Web, APIs e integrações. Software que entra em produção e continua de pé depois.',
  },
  {
    title: 'Produto',
    body: 'Descoberta, escopo e a decisão do que não entra. O que sobra é o que alguém usa.',
  },
  {
    title: 'IA e operações',
    body: 'Automação aplicada ao trabalho que hoje é feito na mão, com o resultado medido.',
  },
]

export default function HomePage() {
  return (
    <>
      <Container className="py-24">
        <h1 className="max-w-3xl text-4xl sm:text-5xl">{SITE.name}</h1>
        <p className="mt-5 max-w-2xl text-lg text-fg-secondary">{SITE.description}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          {/* Second CTA fica para quando houver link de contato ou de trabalhos. */}
          <ButtonLink href="/sobre">Sobre mim</ButtonLink>
        </div>
      </Container>

      <Section className="border-t border-border bg-bg-surface" title="No que trabalho">
        <ul className="grid gap-4 sm:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <li
              key={item.title}
              className="rounded-lg border border-border bg-bg-elevated p-6 shadow-1"
            >
              <h3 className="text-base">{item.title}</h3>
              <p className="mt-2 text-sm text-fg-secondary">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
