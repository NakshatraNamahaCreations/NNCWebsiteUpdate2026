import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title:
    'Corporate Website Development Bangalore | Professional Business Websites',

  description:
    'Looking for Corporate Website Development Bangalore? NNC Digital builds high-performance corporate websites and scalable business solutions for companies.',

  alternates: {
    canonical: `${SITE.url}/corporate-website-development-bangalore`,
  },

  keywords:
    'corporate website development bangalore, website development company in bangalore, web development company in bangalore, business website development bangalore, corporate web design bangalore, responsive website development bangalore, react js development company bangalore, next js development company bangalore, web design agency bangalore, hire web developers bangalore',

  openGraph: {
    title:
      'Corporate Website Development Bangalore | Professional Business Websites',

    description:
      'NNC Digital offers Corporate Website Development Bangalore services delivering scalable, high-performance corporate websites using modern technologies.',

    url: `${SITE.url}/corporate-website-development-bangalore`,
    type: 'website',

    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Corporate Website Development Bangalore – NNC Digital',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',

    title:
      'Corporate Website Development Bangalore | Professional Business Websites',

    description:
      'Work with experts in Corporate Website Development Bangalore delivering high-performance business websites and scalable digital solutions.',

    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',

  name: 'Corporate Website Development Bangalore',

  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,

    address: {
      '@type': 'PostalAddress',
      streetAddress: '7th Floor, Magnolia, Prestige Shantiniketan',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      postalCode: '560048',
      addressCountry: 'IN',
    },
  },

  areaServed: [
    { '@type': 'City', name: 'Bangalore' },
    { '@type': 'City', name: 'Whitefield' },
    { '@type': 'City', name: 'Electronic City' },
    { '@type': 'City', name: 'Koramangala' },
    { '@type': 'City', name: 'Indiranagar' },
  ],

  serviceType: [
    'Corporate Website Development',
    'Website Development',
    'Web Development',
    'Business Website Development',
    'Website Design',
    'React JS Development',
    'Next JS Development',
    'Responsive Website Development',
  ],

  description:
    'NNC Digital provides Corporate Website Development Bangalore services including business websites, UI/UX design, React JS, Next JS and scalable web applications for companies focused on growth.',

  url: `${SITE.url}/corporate-website-development-bangalore`,

  offers: [
    {
      '@type': 'Offer',
      name: 'Corporate Website Development Bangalore — Starter',
      price: '25000',
      priceCurrency: 'INR',
      description:
        'Professional corporate website — up to 10 pages, responsive design, CMS integration and basic SEO setup.',
    },
    {
      '@type': 'Offer',
      name: 'Advanced Corporate Website Development Bangalore',
      price: '60000',
      priceCurrency: 'INR',
      description:
        'Advanced corporate websites using React JS and Next JS with scalable architecture, SEO optimization and high performance.',
    },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',

  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Website Development',
      item: `${SITE.url}/website-development`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Corporate Website Development Bangalore',
      item: `${SITE.url}/corporate-website-development-bangalore`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',

  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best Corporate Website Development Bangalore service provider?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Digital is a leading provider of Corporate Website Development Bangalore services with 565+ projects delivered and a 4.9★ Google rating. We build scalable business websites and web applications for companies.',
      },
    },
    {
      '@type': 'Question',
      name: 'What services are included in Corporate Website Development Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Corporate Website Development Bangalore includes business websites, corporate portals, UI/UX design, responsive layouts, CMS development and scalable web applications using modern technologies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build corporate websites for businesses in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we specialize in Corporate Website Development Bangalore creating professional business websites, service pages and lead-generation platforms.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you use React JS and Next JS for development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our Corporate Website Development Bangalore services include modern frameworks like React JS and Next JS for high performance and scalability.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are your websites mobile responsive?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, every Corporate Website Development Bangalore project is mobile-first, responsive and optimized for speed across all devices.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of corporate website development in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Corporate website development in Bangalore starts from ₹25,000 and can go higher based on features, design and functionality.',
      },
    },
  ],
}

    const data = {
  badge: 'Website Development · Bangalore',

  h1: 'Corporate Website Development',
  h1Accent: 'Bangalore',

  heroImage: '/assets/images6.png',

  tagline:
    'NNC Digital specializes in Corporate Website Development Bangalore, delivering high-performance corporate websites, scalable applications and modern digital solutions for startups, SMEs and enterprises.',

  stat1: '565+',
  stat1Label: 'Projects Delivered',

  serviceName: 'Corporate Website Development Bangalore',

  h2Features: 'Corporate Website Development Services in Bangalore',

  featuresSubText:
    'Our Corporate Website Development Bangalore services focus on building scalable, secure and performance-driven corporate websites using modern technologies and in-house expertise.',

        features: [
  {
    h3: 'Custom Corporate Website Development Bangalore',
    desc: 'We deliver Corporate Website Development Bangalore solutions with scalable architecture, clean code and performance-driven development.',
  },
  {
    h3: 'Corporate Website Solutions Bangalore',
    desc: 'We build professional corporate websites with service pages, case studies and lead generation funnels designed for business growth.',
  },
  {
    h3: 'Business Website Design Bangalore',
    desc: 'We design conversion-focused websites with modern UI, strong user experience and mobile-first responsive layouts.',
  },
  {
    h3: 'React JS Development Company Bangalore',
    desc: 'Our Corporate Website Development Bangalore services include fast and scalable React JS applications for dashboards and enterprise platforms.',
  },
  {
    h3: 'Next JS Development Company Bangalore',
    desc: 'We develop SEO-friendly Next JS applications with SSR and high-performance architecture for scalable business websites.',
  },
  {
    h3: 'Responsive Web Development Bangalore',
    desc: 'As part of Corporate Website Development Bangalore, we deliver mobile-first websites optimized for speed, usability and performance.',
  },
  {
    h3: 'Website Design Services Bangalore',
    desc: 'We provide UI/UX design, wireframes, Figma design and frontend development services.',
  },
  {
    h3: 'Affordable Web Development Bangalore',
    desc: 'Our Corporate Website Development Bangalore solutions are cost-effective and ideal for startups and SMEs with transparent pricing.',
  },
  {
    h3: 'Hire Web Developers Bangalore',
    desc: 'Hire expert developers skilled in React, Next, Node and full-stack web development for business-ready solutions.',
  },
],
  h2Why: 'Why Choose NNC for Corporate Website Development Bangalore?',

  why: [
    {
      n: '01',
      h3: 'Trusted Corporate Website Development Partner',
      body: 'We provide Corporate Website Development Bangalore solutions focused on performance, scalability and business growth.',
    },
    {
      n: '02',
      h3: 'In-house development',
      body: 'Our Corporate Website Development Bangalore team ensures no outsourcing and consistent quality delivery.',
    },
    {
      n: '03',
      h3: 'Modern tech stack',
      body: 'Corporate Website Development Bangalore using React JS, Next JS and modern frameworks for scalability.',
    },
    {
      n: '04',
      h3: 'Transparent pricing',
      body: 'Corporate Website Development Bangalore with fixed pricing and no hidden costs.',
    },
    {
      n: '05',
      h3: 'Full ownership',
      body: 'Corporate Website Development Bangalore ensures full control over code and design assets.',
    },
    {
      n: '06',
      h3: 'Proven experience',
      body: 'Our Corporate Website Development Bangalore services have delivered 565+ successful projects.',
    },
  ],

  techStack: [
    'React JS',
    'Next JS',
    'Node JS',
    'Tailwind CSS',
    'TypeScript',
    'MongoDB',
    'PostgreSQL',
    'Figma',
  ],

  h2Tech: 'Corporate Website Development Technology Stack',

  h2Faq: 'Corporate Website Development Bangalore — FAQs',

  faqs: [
    {
      q: 'Which is the best Corporate Website Development Bangalore company?',
      a: 'NNC Digital is a trusted provider of Corporate Website Development Bangalore delivering scalable and high-performance corporate websites.',
    },
    {
      q: 'What services are included in Corporate Website Development Bangalore?',
      a: 'Corporate Website Development Bangalore includes business websites, UI/UX design, responsive development and scalable applications.',
    },
    {
      q: 'Do you build corporate websites?',
      a: 'Yes, we specialize in Corporate Website Development Bangalore for companies across industries.',
    },
    {
      q: 'Do you use modern technologies?',
      a: 'Yes, Corporate Website Development Bangalore uses React JS, Next JS and modern frameworks.',
    },
    {
      q: 'Are websites mobile responsive?',
      a: 'Yes, every Corporate Website Development Bangalore project is mobile-first and optimized.',
    },
    {
      q: 'What is the cost?',
      a: 'Corporate Website Development Bangalore starts from ₹25,000 depending on requirements.',
    },
  ],
}

export default function CustomWebsiteDevelopmentCompanyBangalorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>
        <ServicePageContent data={data} />
      </main>
      <SeoKeywords />
      <Footer />
      <WaFloat />
      <AnimObserver />
    </>
  )
}
