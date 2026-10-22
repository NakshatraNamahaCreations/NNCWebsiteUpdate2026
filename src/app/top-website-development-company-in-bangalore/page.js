import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Top Website Development Company in Bangalore for Business Growth',

  description:
    'Looking for a top Website Development Company in Bangalore? We build high-performance websites and scalable digital solutions for businesses.',

  alternates: {
    canonical: `${SITE.url}/top-website-development-company-in-bangalore`,
  },

  keywords:
    'top website development company in bangalore, website development company in bangalore, web development company in bangalore, best website development company bangalore, custom website development bangalore, corporate website development bangalore, business website development bangalore, react js development company bangalore, next js development company bangalore, responsive website development bangalore, website design company in bangalore, hire web developers bangalore',

  openGraph: {
    title: 'Top Website Development Company in Bangalore for Business Growth',
    description:
      'Work with a top Website Development Company in Bangalore delivering scalable web solutions, React JS and Next JS applications for business growth.',
    url: `${SITE.url}/top-website-development-company-in-bangalore`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Top Website Development Company in Bangalore – NNC Digital',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Top Website Development Company in Bangalore for Business Growth',
    description:
      'Build high-performance websites with a top Website Development Company in Bangalore. Experts in React JS, Next JS and scalable web applications.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',

  name: 'Top Website Development Company in Bangalore',

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
    'Website Development',
    'Web Development',
    'Custom Website Development',
    'Corporate Website Development',
    'Business Website Development',
    'React JS Development',
    'Next JS Development',
    'Responsive Website Development',
  ],

  description:
    'Top Website Development Company in Bangalore offering custom website development, corporate solutions, React JS, Next JS and scalable web applications designed for performance and growth.',

  url: `${SITE.url}/top-website-development-company-in-bangalore`,

  offers: [
    {
      '@type': 'Offer',
      name: 'Business Website Development Bangalore — Starter',
      price: '25000',
      priceCurrency: 'INR',
      description:
        'Professional business website development — up to 10 pages, responsive design, CMS integration and basic SEO setup.',
    },
    {
      '@type': 'Offer',
      name: 'Custom Website Development Bangalore',
      price: '60000',
      priceCurrency: 'INR',
      description:
        'Advanced custom web applications using React JS and Next JS with scalable architecture and high performance.',
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
      name: 'Top Website Development Company in Bangalore',
      item: `${SITE.url}/top-website-development-company-in-bangalore`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the top Website Development Company in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Digital is a top Website Development Company in Bangalore with 565+ projects delivered and a 4.9★ Google rating. We build custom websites, web applications, React JS and Next JS solutions for businesses across industries.',
      },
    },
    {
      '@type': 'Question',
      name: 'What services does a Website Development Company in Bangalore provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Website Development Company in Bangalore provides services such as custom website development, corporate websites, React JS and Next JS applications, responsive design, CMS development and ongoing maintenance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build React JS and Next JS web applications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, as a Website Development Company in Bangalore, we build fast, scalable and SEO-friendly applications using React JS and Next JS technologies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build corporate and business websites in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we build corporate and business websites with service pages, case studies and lead-generation features tailored for business growth.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer responsive website development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, every website we build is fully responsive, mobile-first and optimized for performance across all devices.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of website development in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Website development costs in Bangalore start from ₹25,000 for business websites. Custom web applications can start from ₹60,000 depending on features and complexity.',
      },
    },
  ],
}

const data = {
  badge: 'Website Development · Bangalore',

  h1: 'Top Website Development Company',
  h1Accent: 'in Bangalore',
  heroImage: '/assets/images4.png',

  tagline:
    'Top Website Development Company in Bangalore offering custom website development, corporate solutions, React JS, Next JS and scalable digital platforms for startups, SMEs and enterprises. As a top Website Development Company in Bangalore, we focus on performance, scalability and modern web architecture.',


    
  stat1: '565+',
  stat1Label: 'Projects Delivered',

  serviceName: 'website development in Bangalore',

  h2Features: 'Top Website Development Company in Bangalore — Services',

  featuresSubText:
    'As a top Website Development Company in Bangalore, every project from NNC includes capabilities delivered by permanent in-house specialists with no outsourcing and no compromises. Our top Website Development Company in Bangalore ensures quality, speed and reliability.',

  features: [
    {
      h3: 'Custom Web Development Bangalore',
      desc: 'As a top Website Development Company in Bangalore, we build custom web solutions tailored to your business — scalable architecture and performance-driven development.',
    },
    {
      h3: 'Corporate Website Development Bangalore',
      desc: 'As a trusted Website Development Company in Bangalore, we create professional corporate websites with service pages, case studies and lead generation funnels designed for business growth.',
    },
    {
      h3: 'Business Website Design Bangalore',
      desc: 'As a top Website Development Company in Bangalore, we design conversion-focused business websites with modern UI, strong CTAs and mobile-first responsive layouts.',
    },
    {
      h3: 'React JS Development Company Bangalore',
      desc: 'We build fast, scalable React JS applications ideal for dashboards, portals and SaaS platforms.',
    },
    {
      h3: 'Next JS Development Company Bangalore',
      desc: 'Our Website Development Company in Bangalore delivers SEO-friendly Next JS applications with SSR and high-performance architecture.',
    },
    {
      h3: 'Responsive Web Development Bangalore',
      desc: 'As a top Website Development Company in Bangalore, we deliver mobile-first websites optimized for speed, usability and performance across all devices.',
    },
    {
      h3: 'Website Design Services Bangalore',
      desc: 'We provide UI/UX design, wireframes, Figma design and frontend development services.',
    },
    {
      h3: 'Affordable Web Development Bangalore',
      desc: 'Our Website Development Company in Bangalore offers cost-effective solutions for startups and SMEs with fixed pricing.',
    },
    {
      h3: 'Hire Web Developers Bangalore',
      desc: 'Hire expert developers from a Website Development Company in Bangalore skilled in React, Next, Node and full-stack development.',
    },
  ],

  h2Why: 'Why Choose NNC as Your Top Website Development Company in Bangalore?',

  why: [
    {
      n: '01',
      h3: 'Trusted Website Development Company in Bangalore',
      body: 'Work with a top Website Development Company in Bangalore focused on modern development practices and high-performance digital solutions.',
    },
    {
      n: '02',
      h3: 'In-house development',
      body: 'As a top Website Development Company in Bangalore, we ensure no outsourcing and consistent quality from start to finish.',
    },
    {
      n: '03',
      h3: 'Modern tech stack',
      body: 'Our top Website Development Company in Bangalore uses React JS, Next JS and modern frameworks for scalability.',
    },
    {
      n: '04',
      h3: 'Transparent pricing',
      body: 'Fixed pricing with clear deliverables — no hidden costs or surprises.',
    },
    {
      n: '05',
      h3: 'Full ownership',
      body: 'You get complete source code and design ownership without any lock-in.',
    },
    {
      n: '06',
      h3: 'Proven experience',
      body: 'Our Website Development Company in Bangalore has delivered 565+ successful projects across industries.',
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

  h2Faq: 'Top Website Development Company in Bangalore — Frequently Asked Questions',

  faqs: [
    {
      q: 'Which is the top Website Development Company in Bangalore?',
      a: 'NNC Digital is a top Website Development Company in Bangalore with expertise in custom web solutions, React JS and Next JS applications, delivering scalable and high-performance websites.',
    },
    {
      q: 'Why choose a Website Development Company in Bangalore?',
      a: 'Choosing a Website Development Company in Bangalore ensures better communication, scalability and high-quality digital solutions.',
    },
    {
      q: 'Do you build custom web applications?',
      a: 'Yes, as a Website Development Company in Bangalore, we build scalable custom web applications tailored to your business requirements.',
    },
    {
      q: 'Do you provide ongoing support?',
      a: 'Yes, our Website Development Company in Bangalore offers maintenance, updates and performance optimization services.',
    },
    {
      q: 'How long does it take to develop a website?',
      a: 'The timeline depends on the project scope. A Website Development Company in Bangalore typically takes 2–4 weeks for business websites.',
    },
    {
      q: 'What technologies do you use for website development?',
      a: 'Our Website Development Company in Bangalore uses React JS, Next JS, Node JS, Tailwind CSS and modern backend technologies.',
    },
    {
      q: 'Do you provide SEO-friendly website development?',
      a: 'Yes, our Website Development Company in Bangalore builds SEO-friendly websites with fast loading speed and mobile responsiveness.',
    },
  ],
}

export default function WebsiteDevelopmentCompanyBangalorePage() {
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
