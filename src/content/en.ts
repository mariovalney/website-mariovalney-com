import type { SiteContent } from '@/content/types'

/**
 * English copy. Not a machine translation of pt-BR: the same facts, written to read naturally,
 * with the same rule that every number has a link where it can be checked.
 */
export const en: SiteContent = {
  locale: 'en',

  meta: {
    title: 'Mário Valney',
    description:
      'Developer for more than ten years, working across engineering, product and operations. WordPress contributor since 2012.',
  },

  hero: {
    name: 'Mário Valney',
    role: 'Founder and Head of IT',
    tagline: 'I build software that solves real problems, and have done so for over ten years.',
  },

  about: {
    id: 'about',
    heading: 'About',
    paragraphs: [
      'Software is more than code. It exists to meet a need and solve a problem, and that reading is what carries through both writing the system and deciding what is worth building.',
      'I started by writing code and moved on to answering for the whole: two to three development teams at once, with scope, schedule and budget, and later an entire IT operation. Products are built, managed and used by people, and understanding everyone involved weighs as much as the technical call.',
      'A technical decision that ignores cost is half a decision. I went after the other half: strategic IT management at FGV, PMI-aligned project management, and financial mathematics, accounting and economic feasibility analysis of investment projects at Saint Paul.',
      'I am still hands on. I have contributed to WordPress since 2012, with code merged into core, and I am currently taking a postgraduate degree in software engineering for applied AI.',
      'I am also a private pilot. Flying demands working under pressure, managing risk, planning and communicating clearly, and none of that stays at the airfield.',
    ],
  },

  experience: {
    id: 'experience',
    heading: 'Experience',
    entries: [
      {
        period: 'Jul 2026 to now',
        title: 'Founder',
        description: ['Under construction.'],
        tags: [],
      },
      {
        period: 'Oct 2021 - Jul 2026',
        title: 'IT Manager',
        company: 'Fortesec',
        description: [
          'Answerable for the IT operation and the development team, in São Paulo, for close to five years: people, priorities and the projects of the area.',
        ],
        tags: [
          'Team leadership',
          'IT operations',
          'Project management',
          'Software development',
          'AI',
        ],
      },
      {
        period: 'Sep 2016 - Sep 2021',
        title: 'Vizir Software Studio',
        roles: [
          { role: 'Project Manager', period: 'May 2020 - Sep 2021' },
          { role: 'Software Engineer', period: 'Sep 2016 - May 2020' },
        ],
        description: [
          'Two to three development teams at once, answering for scope, schedule and budget. I doubled as product owner, refining and discovering features alongside the client.',
          'Before that, close to four years as a fullstack developer with Docker, AWS, Terraform, Magento and WordPress, in Java, PHP, TypeScript, JavaScript and Ruby.',
          'Clients included Avon (Natura &Co), Onyx Card and Grupo JCPM.',
        ],
        tags: [
          'Project management',
          'Product owner',
          'Agile',
          'PHP',
          'TypeScript',
          'AWS',
          'Docker',
        ],
      },
      {
        period: 'Jul 2013 - Jun 2015',
        title: 'Front-End Developer',
        company: 'O POVO',
        description: ['Front-end for the media group digital products, in Fortaleza.'],
        tags: ['Front-end', 'JavaScript', 'CSS'],
      },
      {
        period: 'Feb 2008 - Jan 2012',
        title: 'Aviator Cadet',
        company: 'Brazilian Air Force',
        description: ['Four years of training, in Barbacena and Pirassununga, as element leader.'],
        tags: ['Aviation', 'Leadership'],
      },
    ],
  },

  projects: {
    id: 'projects',
    heading: 'Projects',
    entries: [
      {
        name: 'CF7 to Webhook',
        metric: '30,000 active installs',
        description:
          'Connects Contact Form 7 submissions to any webhook, and through that to Zapier and the like. Published on the official WordPress repository, with 51 reviews, all five stars.',
        url: 'https://wordpress.org/plugins/cf7-to-zapier/',
        tags: ['WordPress', 'PHP'],
      },
      {
        name: 'WordPress core',
        metric: '4 releases',
        description:
          'Code merged into core and credited in 4.7, 4.9, 5.1 and 5.5. Alongside it, translation, support and WordCamp talks since 2012.',
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
    navLabel: 'Page sections',
    skipToContent: 'Skip to content',
    languageSwitch: 'Ler esta página em português',
    footer: 'Built with Next.js and served as static HTML.',
  },
}
