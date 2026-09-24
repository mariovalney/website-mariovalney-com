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
    tagline:
      'Lidero engenharia e produto sem abandonar a abordagem técnica. São mais de dez anos entregando valor nas duas pontas.',
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
    id: 'open-source',
    heading: 'Open Source',
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

  privacy: {
    meta: {
      title: 'Política de Privacidade · Mário Valney',
      description:
        'O que este site coleta: audiência agregada pelo Plausible, sem cookies, e apenas os dados necessários onde existe login.',
    },
    linkLabel: 'Privacidade',
    heading: 'Política de Privacidade',
    updated: 'Atualizada em setembro de 2026',
    intro: [
      'Este site é estático: não tem banco de dados, não cria sessão e não pede cadastro para ser lido. Ainda assim, navegar por aqui gera alguns dados, e esta página diz quais são, por que existem e o que você pode pedir sobre eles.',
      'O texto vale para mariovalney.com e para os projetos que eu publico sob este domínio. Quando um projeto tiver regra própria, ela fica na página dele e prevalece sobre esta.',
    ],
    sections: [
      {
        heading: 'Quem trata os dados',
        paragraphs: [
          'Mário Valney, pessoa física, responsável por este site e pelos projetos publicados nele. Pedidos sobre dados pessoais chegam pelo e-mail no fim desta página.',
        ],
      },
      {
        heading: 'O que é coletado na navegação',
        paragraphs: [
          'Somente medição de audiência, em números agregados. Nada disso identifica você individualmente e não existe perfil de visitante.',
        ],
        items: [
          'Endereço acessado e horário do acesso',
          'Origem da visita, ou seja, o site ou a busca que trouxe você até aqui',
          'País, derivado do endereço IP no momento do acesso',
          'Tipo de dispositivo, sistema operacional e navegador',
        ],
      },
      {
        heading: 'Analytics',
        paragraphs: [
          'A medição usa o Plausible Analytics em instância própria, hospedada por mim. Os números ficam comigo e não são enviados a redes de anúncios nem a corretores de dados.',
          'O Plausible não grava cookies e não cria identificador persistente do visitante. O endereço IP é usado apenas para derivar o país e não é armazenado.',
        ],
      },
      {
        heading: 'Cookies',
        paragraphs: [
          'Este site não grava cookies próprios nem de terceiros, e por isso não exibe banner de consentimento: não há o que consentir. Se um projeto publicado aqui precisar de cookie, será o estritamente necessário para manter você conectado, e estará descrito na página do projeto.',
        ],
      },
      {
        heading: 'Login e conta',
        paragraphs: [
          'Nem todo projeto tem login. Onde tiver, eu coleto apenas o necessário para autenticar e falar com você: em geral o e-mail e o nome, recebidos do provedor de identidade quando você escolhe entrar com o Google.',
          'Sua senha nunca passa por mim, e o acesso pedido ao provedor se limita ao perfil básico e ao e-mail. Contatos, arquivos e agenda ficam de fora.',
        ],
      },
      {
        heading: 'Por que os dados são tratados',
        paragraphs: [
          'A audiência agregada existe para eu entender o que é lido e o que precisa melhorar, com base no legítimo interesse previsto na LGPD.',
          'Os dados de login existem para criar e manter a sua conta, com base na execução do contrato de uso do serviço, e para cumprir obrigação legal quando houver.',
        ],
      },
      {
        heading: 'Compartilhamento',
        paragraphs: [
          'Não vendo, não alugo e não troco dados pessoais. O compartilhamento se limita aos prestadores que sustentam a operação, como hospedagem e provedor de identidade, e às autoridades quando houver ordem legal.',
        ],
      },
      {
        heading: 'Por quanto tempo os dados ficam',
        paragraphs: [
          'As estatísticas agregadas ficam guardadas enquanto servirem para comparar períodos. Dados de conta duram enquanto a conta existir e são apagados depois, salvo o que a lei obrigar a manter.',
        ],
      },
      {
        heading: 'Seus direitos',
        paragraphs: [
          'A LGPD garante confirmação do tratamento, acesso, correção, anonimização, portabilidade, eliminação e revogação do consentimento. Para exercer qualquer um deles, basta escrever para o e-mail abaixo. Respondo em até 15 dias.',
        ],
      },
      {
        heading: 'Segurança',
        paragraphs: [
          'O site é servido apenas por HTTPS. Onde existe login, a autenticação fica com o provedor de identidade, o que evita guardar senha aqui.',
        ],
      },
      {
        heading: 'Alterações',
        paragraphs: [
          'Esta política pode mudar. A data no topo indica a última revisão, e o histórico completo das mudanças é público no repositório do site.',
        ],
      },
    ],
    contact: {
      heading: 'Contato',
      paragraph: 'Dúvida, pedido sobre seus dados ou correção nesta página:',
      email: 'mariovalney@gmail.com',
    },
    backLabel: 'Voltar para a página inicial',
  },

  socials: [
    { label: 'GitHub', href: 'https://github.com/mariovalney', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mariovalney/', icon: 'linkedin' },
  ],

  ui: {
    navLabel: 'Seções desta página',
    skipToContent: 'Ir direto ao conteúdo',
    languageSwitch: 'Read this page in English',
  },
}
