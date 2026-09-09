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
      'Desenvolvedor há mais de dez anos, entre engenharia, produto e operação. Contribuo com o WordPress desde 2012.',
  },

  hero: {
    name: 'Mário Valney',
    role: 'Fundador e desenvolvedor',
    tagline: 'Crio software para resolver problemas reais. Faço isso há mais de dez anos.',
  },

  about: {
    id: 'sobre',
    heading: 'Sobre',
    paragraphs: [
      'Software é mais que código. Ele existe para atender uma necessidade e resolver um problema, e é com essa cabeça que trabalho há mais de dez anos.',
      'Produto é feito, gerido e usado por pessoas. Entender quem está envolvido costuma pesar tanto quanto a decisão técnica, e foi o que aprendi liderando times de desenvolvimento e, depois, uma operação de TI inteira.',
      'Contribuo com o WordPress desde 2012: código no core, tradução, suporte e palestra em WordCamp. Os plugins que publiquei rodam hoje em dezenas de milhares de sites.',
      'Também sou piloto privado. Voar cobra trabalho sob pressão, gestão de risco, planejamento e comunicação clara, e nada disso fica no hangar.',
    ],
  },

  experience: {
    id: 'experiencia',
    heading: 'Experiência',
    entries: [
      {
        period: 'jul 2026 até agora',
        title: 'Fundador',
        description: [
          'Produto próprio, do código à operação. O foco é usar IA no trabalho que hoje é feito na mão.',
        ],
        tags: ['Produto', 'IA', 'Operações'],
      },
      {
        period: 'out 2021 - jul 2026',
        title: 'IT Manager',
        company: 'Fortesec',
        description: [
          'Operação de TI, liderança do time de desenvolvimento e gestão dos projetos da área, em São Paulo.',
        ],
        tags: ['Operações de TI', 'Liderança', 'Gestão de projetos', 'IA'],
      },
      {
        period: 'set 2016 - set 2021',
        title: 'Vizir Software Studio',
        roles: [
          { role: 'Project Manager', period: 'mai 2020 - set 2021' },
          { role: 'Software Engineer', period: 'set 2016 - mai 2020' },
        ],
        description: [
          'De dois a três times de desenvolvimento ao mesmo tempo, cuidando de escopo, prazo e orçamento. Acumulei product owner, refinando e descobrindo funcionalidade junto com o cliente.',
          'Antes disso, quase quatro anos como desenvolvedor fullstack, com Docker, AWS, Terraform, Magento e WordPress, em Java, PHP, TypeScript, JavaScript e Ruby.',
          'Entre os clientes: Avon (Natura &Co), Onyx Card e Grupo JCPM.',
        ],
        tags: ['Gestão de projetos', 'Product owner', 'PHP', 'TypeScript', 'AWS', 'Docker'],
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
      {
        name: 'HTML Template for CF7',
        metric: 'mil instalações ativas',
        description:
          'Troca o e-mail em texto puro do Contact Form 7 por um template HTML que dá para editar.',
        url: 'https://wordpress.org/plugins/html-template-for-cf7/',
        tags: ['WordPress', 'PHP'],
      },
      {
        name: 'payload-simple-social-login',
        description:
          'Login social com Google e Microsoft para a autenticação padrão do Payload CMS.',
        url: 'https://github.com/mariovalney/payload-simple-social-login',
        tags: ['TypeScript', 'Payload CMS'],
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
