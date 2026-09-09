import type { SiteContent } from '@/content/types'

/**
 * Copy in Brazilian Portuguese. Written from the LinkedIn profile and from numbers checked at
 * wordpress.org, in first person and without a single claim that cannot be verified at the link
 * next to it.
 */
export const ptBR: SiteContent = {
  locale: 'pt-BR',

  meta: {
    title: 'Mário Valney',
    description:
      'Fundador e Head de TI. Mais de dez anos entre escrever software e responder pelos times e pela operação que o sustentam.',
  },

  hero: {
    name: 'Mário Valney',
    role: 'Fundador e Head de TI',
    tagline: 'Lidero engenharia sem largar o código. São mais de dez anos entre as duas coisas.',
  },

  about: {
    id: 'sobre',
    heading: 'Sobre',
    paragraphs: [
      'Software é mais que código. Ele existe para atender uma necessidade e resolver um problema, e é essa leitura que sustenta tanto escrever o sistema quanto decidir o que vale construir.',
      'Comecei escrevendo código e passei a responder pelo conjunto: de dois a três times de desenvolvimento ao mesmo tempo, com escopo, prazo e orçamento, e depois a operação de TI inteira. Produto é feito, gerido e usado por pessoas, e entender quem está envolvido pesa tanto quanto a decisão técnica.',
      'Decisão técnica que ignora custo é meia decisão. Fui atrás da outra metade: gestão estratégica de TI na FGV, gerência de projetos alinhada ao PMI, e matemática financeira, contabilidade e análise de viabilidade econômica de projetos na Saint Paul.',
      'Continuo com a mão na massa. Contribuo com o WordPress desde 2012, com código aceito no core, e hoje curso pós em engenharia de software para IA aplicada.',
      'Também sou piloto privado. Voar é trabalhar sob pressão, gerir risco, planejar e comunicar com clareza, e nada disso fica no hangar.',
    ],
  },

  experience: {
    id: 'experiencia',
    heading: 'Experiência',
    entries: [
      {
        period: 'jul 2026 até agora',
        title: 'Fundador',
        description: ['Em construção.'],
        tags: [],
      },
      {
        period: 'out 2021 - jul 2026',
        title: 'IT Manager',
        company: 'Fortesec',
        description: [
          'Responsável pela operação de TI e pelo time de desenvolvimento, em São Paulo, por quase cinco anos: pessoas, prioridades e os projetos da área.',
        ],
        tags: [
          'Liderança de time',
          'Operações de TI',
          'Gestão de projetos',
          'Desenvolvimento de software',
          'IA',
        ],
      },
      {
        period: 'set 2016 - set 2021',
        title: 'Vizir Software Studio',
        roles: [
          { role: 'Project Manager', period: 'mai 2020 - set 2021' },
          { role: 'Software Engineer', period: 'set 2016 - mai 2020' },
        ],
        description: [
          'De dois a três times de desenvolvimento ao mesmo tempo, respondendo por escopo, prazo e orçamento. Acumulei product owner, refinando e descobrindo funcionalidade junto com o cliente.',
          'Antes disso, quase quatro anos como desenvolvedor fullstack, com Docker, AWS, Terraform, Magento e WordPress, em Java, PHP, TypeScript, JavaScript e Ruby.',
          'Entre os clientes: Avon (Natura &Co), Onyx Card e Grupo JCPM.',
        ],
        tags: [
          'Gestão de projetos',
          'Product owner',
          'Métodos ágeis',
          'PHP',
          'TypeScript',
          'AWS',
          'Docker',
        ],
      },
      {
        period: 'jul 2013 - jun 2015',
        title: 'Front-End Developer',
        company: 'O POVO',
        description: ['Front-end dos produtos digitais do grupo de comunicação, em Fortaleza.'],
        tags: ['Front-end', 'JavaScript', 'CSS'],
      },
      {
        period: 'fev 2008 - jan 2012',
        title: 'Cadete Aviador',
        company: 'Força Aérea Brasileira',
        description: [
          'Quatro anos de formação, em Barbacena e Pirassununga, como chefe de elemento.',
        ],
        tags: ['Aviação', 'Liderança'],
      },
    ],
  },

  projects: {
    id: 'projetos',
    heading: 'Projetos',
    entries: [
      {
        name: 'CF7 to Webhook',
        metric: '30 mil instalações ativas',
        description:
          'Liga formulários do Contact Form 7 a qualquer webhook, e por tabela ao Zapier e afins. Está no repositório oficial do WordPress, com 51 avaliações, todas de cinco estrelas.',
        url: 'https://wordpress.org/plugins/cf7-to-zapier/',
        tags: ['WordPress', 'PHP'],
      },
      {
        name: 'Core do WordPress',
        metric: '4 versões',
        description:
          'Código aceito no core e creditado nas versões 4.7, 4.9, 5.1 e 5.5. Junto disso, tradução, suporte e palestra em WordCamp desde 2012.',
        url: 'https://profiles.wordpress.org/mariovalney/',
        tags: ['Open source', 'WordPress'],
      },
    ],
  },

  socials: [
    { label: 'GitHub', href: 'https://github.com/mariovalney', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mariovalney/', icon: 'linkedin' },
  ],

  ui: {
    navLabel: 'Seções desta página',
    skipToContent: 'Ir direto ao conteúdo',
    languageSwitch: 'Read this page in English',
    footer: 'Feito em Next.js e servido como HTML estático.',
  },
}
