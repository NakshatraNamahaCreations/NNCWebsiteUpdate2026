import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title:
    'Custom Website Development Company in Bangalore | Scalable Web Solutions',

  description:
    'Looking for a Custom Website Development Company in Bangalore? NNC Digital builds high-performance websites and scalable web solutions for businesses.',

  alternates: {
    canonical: `${SITE.url}/custom-website-development-company-in-bangalore`,
  },

  keywords:
    'custom website development company in bangalore, website development company in bangalore, web development company in bangalore, best website development company bangalore, website design company in bangalore, web design agency bangalore, custom web development bangalore, corporate website development bangalore, business website development bangalore, react js development company bangalore, next js development company bangalore, responsive website development bangalore, hire web developers bangalore',

  openGraph: {
    title:
      'Custom Website Development Company in Bangalore | Scalable Web Solutions',

    description:
      'NNC Digital is a Custom Website Development Company in Bangalore delivering scalable, high-performance websites and web applications using React JS, Next JS and modern technologies.',

    url: `${SITE.url}/custom-website-development-company-in-bangalore`,
    type: 'website',

    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Custom Website Development Company in Bangalore – NNC Digital',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',

    title:
      'Custom Website Development Company in Bangalore | Scalable Web Solutions',

    description:
      'Work with a Custom Website Development Company in Bangalore delivering high-performance websites, React JS and Next JS applications for business growth.',

    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',

  name:
    'Custom Website Development Company in Bangalore',

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
    'Custom Website Development',
    'Website Development',
    'Web Development',
    'Corporate Website Development',
    'Business Website Development',
    'Website Design',
    'React JS Development',
    'Next JS Development',
    'Responsive Website Development',
  ],

  description:
    'NNC Digital is a Custom Website Development Company in Bangalore offering website development, UI/UX design, React JS, Next JS and scalable web applications for startups, SMEs and enterprises focused on performance and growth.',

  url: `${SITE.url}/custom-website-development-company-in-bangalore`,

  offers: [
    {
      '@type': 'Offer',
      name: 'Business Website Development Bangalore — Starter',
      price: '25000',
      priceCurrency: 'INR',
      description:
        'Professional business website — up to 10 pages, responsive design, CMS integration and basic SEO setup.',
    },
    {
      '@type': 'Offer',
      name: 'Custom Website Development Bangalore',
      price: '60000',
      priceCurrency: 'INR',
      description:
        'Advanced custom web applications using React JS and Next JS with scalable architecture, SEO optimization and high performance.',
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
      name: 'Custom Website Development Company in Bangalore',
      item: `${SITE.url}/custom-website-development-company-in-bangalore`,
    },
  ],
}


const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',

  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best Custom Website Development Company in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Digital is a Custom Website Development Company in Bangalore with 565+ projects delivered and a 4.9★ Google rating. We build scalable websites, web applications, React JS and Next JS solutions for startups, SMEs and enterprises.',
      },
    },

    {
      '@type': 'Question',
      name: 'What services does a Custom Website Development Company in Bangalore provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Custom Website Development Company in Bangalore provides services including custom website development, corporate website development, business websites, React JS and Next JS applications, responsive design, CMS development and ongoing support.',
      },
    },

    {
      '@type': 'Question',
      name: 'Do you provide custom website development in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we are a Custom Website Development Company in Bangalore delivering tailored web solutions based on business goals. Our websites are scalable, SEO-friendly and optimized for performance.',
      },
    },

    {
      '@type': 'Question',
      name: 'Do you build React JS and Next JS web applications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, as a Custom Website Development Company in Bangalore, we develop high-performance web applications using React JS and Next JS with modern architecture, SSR and SEO optimization.',
      },
    },

    {
      '@type': 'Question',
      name: 'Do you build corporate and business websites in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we build corporate and business websites including service pages, case studies, landing pages and lead-generation funnels designed to increase conversions.',
      },
    },

    {
      '@type': 'Question',
      name: 'Do you offer responsive website development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, every project delivered by our Custom Website Development Company in Bangalore is mobile-first, fully responsive and optimized for speed and performance across all devices.',
      },
    },

    {
      '@type': 'Question',
      name: 'What is the cost of custom website development in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Custom website development costs in Bangalore start from ₹25,000 for business websites. Advanced web applications using React JS and Next JS start from ₹60,000 depending on complexity and features.',
      },
    },

    {
      '@type': 'Question',
      name: 'Why choose NNC as your Custom Website Development Company in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Digital is a trusted Custom Website Development Company in Bangalore known for its in-house team, transparent pricing, modern tech stack and proven experience in delivering scalable web solutions.',
      },
    },
  ],
}


const data = {
  badge: 'Website Development · Bangalore',

  h1: 'Custom Website Development Company',
  h1Accent: 'in Bangalore',

  heroImage: '/assets/images5.png',

  tagline:
    'NNC Digital is a Custom Website Development Company in Bangalore delivering high-performance web solutions, scalable applications and modern digital platforms for startups, SMEs and enterprises. Our Custom Website Development Company in Bangalore focuses on performance, scalability and long-term business growth.',

  stat1: '565+',
  stat1Label: 'Projects Delivered',

  serviceName: 'website development in Bangalore',

  h2Features: 'Website Development Services in Bangalore',

  featuresSubText:
    'As a Custom Website Development Company in Bangalore, we deliver high-quality web solutions through our in-house team with no outsourcing. Our Custom Website Development Company in Bangalore ensures performance, scalability and reliable digital growth for businesses.',

  features: [
    {
      h3: 'Custom Web Development Bangalore',
      desc: 'As a Custom Website Development Company in Bangalore, we deliver scalable web solutions with performance-driven architecture and modern development practices.',
    },
    {
      h3: 'Corporate Website Development Bangalore',
      desc: 'As a Custom Website Development Company in Bangalore, we build corporate websites with service pages, case studies and lead generation funnels.',
    },
    {
      h3: 'Business Website Design Bangalore',
      desc: 'As a Custom Website Development Company in Bangalore, we design high-converting websites with modern UI and mobile-first responsiveness.',
    },
    {
      h3: 'React JS Development Company Bangalore',
      desc: 'Our Custom Website Development Company in Bangalore builds fast and scalable React JS applications ideal for dashboards, portals and SaaS platforms.',
    },
    {
      h3: 'Next JS Development Company Bangalore',
      desc: 'As a Custom Website Development Company in Bangalore, we deliver SEO-friendly Next JS applications with SSR and high-performance architecture.',
    },
    {
      h3: 'Responsive Web Development Bangalore',
      desc: 'Our Custom Website Development Company in Bangalore delivers mobile-first websites optimized for speed, performance and usability across all devices.',
    },
    {
      h3: 'Website Design Services Bangalore',
      desc: 'As a Custom Website Development Company in Bangalore, we provide UI/UX design, wireframes, Figma design and frontend development services.',
    },
    {
      h3: 'Affordable Web Development Bangalore',
      desc: 'Our Custom Website Development Company in Bangalore offers cost-effective solutions for startups and SMEs with transparent pricing.',
    },
    {
      h3: 'Hire Web Developers Bangalore',
      desc: 'Hire expert developers from a Custom Website Development Company in Bangalore skilled in React, Next, Node and full-stack development.',
    },
  ],

  h2Why: 'Why Choose NNC as Your Custom Website Development Company in Bangalore?',

  why: [
    {
      n: '01',
      h3: 'Trusted Web Development Partner',
      body: 'Work with a Custom Website Development Company in Bangalore focused on delivering scalable, high-performance and business-driven digital solutions.',
    },
    {
      n: '02',
      h3: 'In-house development',
      body: 'As a Custom Website Development Company in Bangalore, we ensure no outsourcing and consistent quality from planning to deployment.',
    },
    {
      n: '03',
      h3: 'Modern tech stack',
      body: 'Our Custom Website Development Company in Bangalore uses React JS, Next JS and modern frameworks to build fast, scalable and future-ready web applications.',
    },
    {
      n: '04',
      h3: 'Transparent pricing',
      body: 'As a Custom Website Development Company in Bangalore, we offer fixed pricing with clear deliverables and no hidden costs.',
    },
    {
      n: '05',
      h3: 'Full ownership',
      body: 'Our Custom Website Development Company in Bangalore ensures you get complete source code, design ownership and full control without any lock-in.',
    },
    {
      n: '06',
      h3: 'Proven experience',
      body: 'Our Custom Website Development Company in Bangalore has delivered 565+ successful projects across industries with proven results.',
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

  h2Tech: 'Website Development Technology Stack',

  h2Faq: 'Custom Website Development Company in Bangalore — FAQs',

  faqs: [
    {
      q: 'Which is the best Custom Website Development Company in Bangalore?',
      a: 'NNC Digital is a Custom Website Development Company in Bangalore delivering scalable web solutions using modern technologies like React JS and Next JS.',
    },
    {
      q: 'Do you provide custom website development?',
      a: 'Yes, as a Custom Website Development Company in Bangalore, we build tailored web applications designed for performance and scalability.',
    },
    {
      q: 'What services do you provide?',
      a: 'We provide custom website development, corporate websites, React JS and Next JS applications, UI/UX design and maintenance services.',
    },
    {
      q: 'Do you provide ongoing support?',
      a: 'Yes, we offer maintenance, updates and performance optimization services.',
    },
    {
      q: 'How long does it take to develop a website?',
      a: 'Most business websites take 2–4 weeks depending on complexity.',
    },
    {
      q: 'What technologies do you use?',
      a: 'We use React JS, Next JS, Node JS and modern frontend and backend technologies.',
    },
    {
      q: 'Do you provide SEO-friendly development?',
      a: 'Yes, all websites are optimized for speed, SEO and mobile performance.',
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
