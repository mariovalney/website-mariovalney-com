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
      'Founder and Head of IT. More than ten years between writing software and answering for the teams and the operation that keep it running.',
  },

  hero: {
    name: 'Mário Valney',
    role: 'Founder and Head of IT',
    tagline:
      'I lead engineering and product without letting go of the technical side. Over ten years delivering value on both ends.',
  },

  about: {
    id: 'about',
    heading: 'About',
    paragraphs: [
      'Software is more than code. It exists to meet a need and solve a problem, and that reading is what carries through both writing the system and deciding what is worth building.',
      'I started by writing code and moved on to answering for the whole: two to three development teams at once, with scope, schedule and budget, and later an entire IT operation. Products are built, managed and used by people, and understanding everyone involved weighs as much as the technical call.',
      'A technical decision that ignores cost is half a decision. I went after the other half: strategic IT management at FGV, PMI-aligned project management, and financial mathematics, accounting and economic feasibility analysis of investment projects at Saint Paul.',
      'I am still hands on. I have contributed to WordPress since 2012, with code merged into core, and I am currently taking a postgraduate degree in software engineering for applied AI.',
      'I am also a private pilot. Flying is working under pressure, managing risk, planning and communicating clearly, and none of that stays at the airfield.',
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
    id: 'open-source',
    heading: 'Open Source',
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

  privacy: {
    meta: {
      title: 'Privacy Policy · Mário Valney',
      description:
        'What this site collects: aggregate audience numbers through Plausible, no cookies, and only the data a sign-in actually needs.',
    },
    linkLabel: 'Privacy',
    heading: 'Privacy Policy',
    updated: 'Last updated in September 2026',
    intro: [
      'This site is static: no database, no session, no account required to read it. Browsing still produces some data, and this page says what that data is, why it exists and what you can ask about it.',
      'It covers mariovalney.com and the projects I publish under this domain. Where a project has rules of its own, they live on that project page and take precedence over this one.',
    ],
    sections: [
      {
        heading: 'Who handles the data',
        paragraphs: [
          'Mário Valney, as an individual, responsible for this site and for the projects published on it. Requests about personal data go to the address at the end of this page.',
        ],
      },
      {
        heading: 'What browsing collects',
        paragraphs: [
          'Audience measurement only, in aggregate numbers. None of it identifies you individually and there is no visitor profile.',
        ],
        items: [
          'The address requested and the time of the request',
          'Where the visit came from, meaning the site or the search that led here',
          'Country, derived from the IP address at the time of the request',
          'Device type, operating system and browser',
        ],
      },
      {
        heading: 'Analytics',
        paragraphs: [
          'Measurement runs on Plausible Analytics, on an instance I host myself. The numbers stay with me and go to no ad network and no data broker.',
          'Plausible writes no cookies and builds no persistent visitor identifier. The IP address is used only to derive the country and is not stored.',
        ],
      },
      {
        heading: 'Cookies',
        paragraphs: [
          'This site writes no cookies of its own and none from third parties, which is why there is no consent banner: there is nothing to consent to. If a project published here needs a cookie, it will be the one strictly required to keep you signed in, and it will be described on that project page.',
        ],
      },
      {
        heading: 'Sign-in and accounts',
        paragraphs: [
          'Not every project has a sign-in. Where one does, I collect only what it takes to authenticate you and reach you: usually the email address and the name, received from the identity provider when you choose to sign in with Google.',
          'Your password never passes through me, and the access requested from the provider stops at the basic profile and the email address. Contacts, files and calendars stay out of it.',
        ],
      },
      {
        heading: 'Why the data is handled',
        paragraphs: [
          'Aggregate audience numbers exist so I can tell what gets read and what needs work, on the legitimate interest basis of the Brazilian data protection law (LGPD).',
          'Sign-in data exists to create and keep your account, on the performance of contract basis, and to meet legal obligations where they apply.',
        ],
      },
      {
        heading: 'Sharing',
        paragraphs: [
          'I do not sell, rent or trade personal data. Sharing is limited to the providers that keep the operation running, such as hosting and the identity provider, and to authorities under a legal order.',
        ],
      },
      {
        heading: 'How long data is kept',
        paragraphs: [
          'Aggregate statistics are kept while they are still useful for comparing periods. Account data lasts as long as the account and is deleted afterwards, except for what the law requires me to keep.',
        ],
      },
      {
        heading: 'Your rights',
        paragraphs: [
          'The LGPD grants confirmation of processing, access, correction, anonymisation, portability, deletion and withdrawal of consent. To exercise any of them, write to the address below. I answer within 15 days.',
        ],
      },
      {
        heading: 'Security',
        paragraphs: [
          'The site is served over HTTPS only. Where there is a sign-in, authentication stays with the identity provider, which is what keeps passwords from being stored here.',
        ],
      },
      {
        heading: 'Changes',
        paragraphs: [
          'This policy can change. The date at the top is the last revision, and the full history of the changes is public in the repository of this site.',
        ],
      },
    ],
    contact: {
      heading: 'Contact',
      paragraph: 'Questions, requests about your data, or a correction to this page:',
      email: 'mariovalney@gmail.com',
    },
    backLabel: 'Back to the home page',
  },

  socials: [
    { label: 'GitHub', href: 'https://github.com/mariovalney', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mariovalney/', icon: 'linkedin' },
  ],

  ui: {
    navLabel: 'Page sections',
    skipToContent: 'Skip to content',
    languageSwitch: 'Ler esta página em português',
  },
}
