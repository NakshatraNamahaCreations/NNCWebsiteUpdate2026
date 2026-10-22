import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'React JS Development Company in Bangalore for Scalable Applications',

  description:
    'Looking for a React JS Development Company in Bangalore? We build fast, scalable and high-performance web applications using modern React technologies.',

  alternates: {
    canonical: `${SITE.url}/react-js-development-company-in-bangalore`,
  },

  keywords:
    'React JS Development Company in Bangalore, react js developers bangalore, frontend development bangalore, react js company bangalore, web app development bangalore, next js development bangalore, ui development bangalore, hire react developers bangalore',

  openGraph: {
    title: 'React JS Development Company in Bangalore',
    description:
      'Professional React JS Development Company in Bangalore building scalable, high-performance web applications for startups and enterprises.',
    url: `${SITE.url}/react-js-development-company-in-bangalore`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'React JS Development Company in Bangalore – NNC Digital',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'React JS Development Company in Bangalore',
    description:
      'Build scalable and high-performance applications with our React JS Development Company in Bangalore.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',

  name: 'React JS Development Company in Bangalore',

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
    'React JS Development',
    'Frontend Development',
    'Web Application Development',
    'UI Development',
    'Next JS Development',
  ],

  description:
    'React JS Development Company in Bangalore offering scalable frontend development, web applications and modern UI solutions using React JS and Next JS technologies.',

  url: `${SITE.url}/react-js-development-company-in-bangalore`,

  offers: [
    {
      '@type': 'Offer',
      name: 'React JS Development Bangalore — Starter',
      price: '30000',
      priceCurrency: 'INR',
      description:
        'Basic React JS web application with responsive UI, reusable components and API integration.',
    },
    {
      '@type': 'Offer',
      name: 'Advanced React JS Development Bangalore',
      price: '80000',
      priceCurrency: 'INR',
      description:
        'Scalable React JS application with advanced architecture, performance optimization and modern frontend stack.',
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
      name: 'Web Development',
      item: `${SITE.url}/web-development`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'React JS Development Company in Bangalore',
      item: `${SITE.url}/react-js-development-company-in-bangalore`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',

  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who provides the best React JS Development Company in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Digital is a leading React JS Development Company in Bangalore delivering scalable and high-performance web applications using modern React architecture.',
      },
    },
    {
      '@type': 'Question',
      name: 'What services are included in React JS development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Services include frontend development, web applications, UI components, API integration and performance optimization using React JS.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build scalable React applications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we build scalable React JS applications with reusable components, optimized performance and modern architecture.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you develop corporate web applications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we develop enterprise-grade web applications with advanced features, dashboards and integrations.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of React JS development in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'React JS development starts from ₹30,000 and varies based on features, complexity and scalability requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does React JS development take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'React JS development typically takes 2 to 6 weeks depending on project scope and functionality.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide custom React JS development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer custom React JS development tailored to your business needs with scalable architecture and modern UI.',
      },
    },
  ],
}   

const data = {
  badge: 'React JS Development · Bangalore',

  h1: 'React JS Development Company',
  h1Accent: 'in Bangalore',

  heroImage: '/assets/images8.png',

  tagline:
    'React JS Development Company in Bangalore delivering fast, scalable and high-performance web applications for startups, SMEs and enterprises. As a trusted React JS Development Company in Bangalore, we focus on modern architecture and performance.',

  stat1: '565+',
  stat1Label: 'Projects Delivered',

  serviceName: 'react js development in Bangalore',

  h2Features: 'React JS Development Company in Bangalore — Services',

  featuresSubText:
    'Our React JS Development Company in Bangalore provides modern frontend development, scalable architecture and high-performance applications using the React ecosystem.',

  features: [
    {
      h3: 'Custom React JS Development',
      desc: 'As a React JS Development Company in Bangalore, we build scalable web applications using modern architecture and reusable components.',
    },
    {
      h3: 'Frontend Development Bangalore',
      desc: 'Our React JS Development Company in Bangalore delivers high-performance UI with responsive layouts and seamless user experience.',
    },
    {
      h3: 'React JS Web Applications',
      desc: 'We develop dynamic and interactive web applications for startups and enterprises.',
    },
    {
      h3: 'Next JS Development',
      desc: 'As a React JS Development Company in Bangalore, we build SEO-friendly applications using SSR and SSG for better performance.',
    },
    {
      h3: 'UI Component Development',
      desc: 'Reusable UI components and design systems for scalable development.',
    },
    {
      h3: 'Single Page Applications (SPA)',
      desc: 'Our React JS Development Company in Bangalore builds fast and responsive SPAs with optimized performance.',
    },
    {
      h3: 'API Integration',
      desc: 'Seamless integration with backend services and APIs for scalable applications.',
    },
    {
      h3: 'Performance Optimization',
      desc: 'We optimize React applications for speed, performance and scalability.',
    },
    {
      h3: 'Hire React Developers Bangalore',
      desc: 'Hire expert developers from a React JS Development Company in Bangalore for modern and scalable applications.',
    },
  ],

  h2Why: 'Why Choose NNC for React JS Development Company in Bangalore?',

  why: [
    {
      n: '01',
      h3: 'Expert React Developers',
      body: 'As a React JS Development Company in Bangalore, we deliver high-performance applications using modern React architecture.',
    },
    {
      n: '02',
      h3: 'In-house development',
      body: 'Our React JS Development Company in Bangalore ensures no outsourcing and consistent quality delivery.',
    },
    {
      n: '03',
      h3: 'Modern tech stack',
      body: 'React JS, Next JS and advanced frontend technologies for scalable solutions.',
    },
    {
      n: '04',
      h3: 'Scalable architecture',
      body: 'Applications built by our React JS Development Company in Bangalore are designed for long-term scalability.',
    },
    {
      n: '05',
      h3: 'Full ownership',
      body: 'Complete source code and ownership without any lock-in.',
    },
    {
      n: '06',
      h3: 'Proven experience',
      body: 'Our React JS Development Company in Bangalore has delivered 565+ successful projects.',
    },
  ],

  techStack: [
    'React JS',
    'Next JS',
    'JavaScript',
    'TypeScript',
    'Tailwind CSS',
    'Redux',
    'Node JS',
    'Framer Motion',
  ],

  h2Tech: 'Technology Stack for React JS Development',

  h2Faq: 'React JS Development Company in Bangalore — FAQs',

  faqs: [
    {
      q: 'Who provides the best React JS Development Company in Bangalore?',
      a: 'NNC Digital is a React JS Development Company in Bangalore delivering scalable and high-performance web applications.',
    },
    {
      q: 'What services are included in React JS development?',
      a: 'As a React JS Development Company in Bangalore, we offer frontend development, UI components, web apps and API integrations.',
    },
    {
      q: 'Do you build scalable applications?',
      a: 'Yes, our React JS Development Company in Bangalore builds scalable and performance-optimized applications.',
    },
    {
      q: 'What is the cost of React JS development?',
      a: 'React JS development starts from ₹30,000 depending on features and complexity.',
    },
    {
      q: 'How long does development take?',
      a: 'Development typically takes 2 to 6 weeks based on project scope.',
    },
    {
      q: 'Do you provide custom React solutions?',
      a: 'Yes, we are a React JS Development Company in Bangalore offering custom solutions tailored to business needs.',
    },
  ],
}

export default function ReactWebsiteDesignBangalorePage() {
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
