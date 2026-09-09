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
    role: 'Founder and developer',
    tagline: 'I build software that solves real problems, and have done so for over ten years.',
  },

  about: {
    id: 'about',
    heading: 'About',
    paragraphs: [
      'Software is more than code. It exists to meet a need and solve a problem, and that is how I have worked for more than ten years.',
      'Products are built, managed and used by people. Understanding everyone involved tends to weigh as much as the technical call, which is what I learned leading development teams and later an entire IT operation.',
      'I have contributed to WordPress since 2012: core code, translations, support and WordCamp talks. The plugins I published run on tens of thousands of sites today.',
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
        description: [
          'My own product, from the code to the operation. The focus is putting AI on work that is still done by hand.',
        ],
        tags: ['Product', 'AI', 'Operations'],
      },
      {
        period: 'Oct 2021 - Jul 2026',
        title: 'IT Manager',
        company: 'Fortesec',
        description: [
          'IT operations, leadership of the development team and management of the area projects, in São Paulo.',
        ],
        tags: ['IT operations', 'Leadership', 'Project management', 'AI'],
      },
      {
        period: 'Sep 2016 - Sep 2021',
        title: 'Vizir Software Studio',
        roles: [
          { role: 'Project Manager', period: 'May 2020 - Sep 2021' },
          { role: 'Software Engineer', period: 'Sep 2016 - May 2020' },
        ],
        description: [
          'Two to three development teams at once, holding scope, schedule and budget. I doubled as product owner, refining and discovering features alongside the client.',
          'Before that, close to four years as a fullstack developer with Docker, AWS, Terraform, Magento and WordPress, in Java, PHP, TypeScript, JavaScript and Ruby.',
          'Clients included Avon (Natura &Co), Onyx Card and Grupo JCPM.',
        ],
        tags: ['Project management', 'Product owner', 'PHP', 'TypeScript', 'AWS', 'Docker'],
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
      {
        name: 'HTML Template for CF7',
        metric: '1,000 active installs',
        description:
          'Replaces the plain text email Contact Form 7 sends with an HTML template you can edit.',
        url: 'https://wordpress.org/plugins/html-template-for-cf7/',
        tags: ['WordPress', 'PHP'],
      },
      {
        name: 'payload-simple-social-login',
        description:
          'Google and Microsoft social login for the default Payload CMS authentication.',
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
    navLabel: 'Page sections',
    skipToContent: 'Skip to content',
    languageSwitch: 'Ler esta página em português',
    footer: 'Built with Next.js and served as static HTML.',
  },
}
