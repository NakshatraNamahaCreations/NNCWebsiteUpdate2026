import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Business Website Design in Bangalore for Growth',

  description:
    'Looking for Business Website Design in Bangalore? We create high-converting, responsive websites for startups, SMEs and enterprises.',

  alternates: {
    canonical: `${SITE.url}/business-website-design-in-bangalore`,
  },

  keywords:
    'business website design in bangalore, website design company in bangalore, web design agency bangalore, responsive website design bangalore, ui ux design bangalore, corporate website design bangalore, custom website design bangalore, modern website design bangalore',

  openGraph: {
    title: 'Business Website Design in Bangalore for Growth',
    description:
      'Professional Business Website Design in Bangalore with modern UI/UX, responsive layouts and high-converting digital experiences.',
    url: `${SITE.url}/business-website-design-in-bangalore`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Business Website Design in Bangalore – NNC Digital',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Business Website Design in Bangalore for Growth',
    description:
      'Build high-converting business websites with modern UI/UX and responsive design tailored for your brand.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',

  name: 'Business Website Design in Bangalore',

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
    'Website Design',
    'Business Website Design',
    'Corporate Website Design',
    'UI UX Design',
    'Responsive Website Design',
    'Custom Website Design',
  ],

  description:
    'Business Website Design in Bangalore offering UI/UX design, responsive layouts and high-converting digital experiences for startups and enterprises.',

  url: `${SITE.url}/business-website-design-in-bangalore`,

  offers: [
    {
      '@type': 'Offer',
      name: 'Business Website Design Bangalore — Starter',
      price: '25000',
      priceCurrency: 'INR',
      description:
        'Professional website design — up to 10 pages, responsive layout, UI/UX design and basic SEO setup.',
    },
    {
      '@type': 'Offer',
      name: 'Custom Website Design Bangalore',
      price: '60000',
      priceCurrency: 'INR',
      description:
        'Advanced custom website design with modern UI/UX, responsive layouts and scalable architecture.',
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
      name: 'Website Design',
      item: `${SITE.url}/website-design`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Business Website Design in Bangalore',
      item: `${SITE.url}/business-website-design-in-bangalore`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',

  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who provides the best Business Website Design in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Digital offers Business Website Design in Bangalore with modern UI/UX, responsive layouts and high-converting designs for businesses.',
      },
    },
    {
      '@type': 'Question',
      name: 'What services are included in Business Website Design in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Services include UI/UX design, responsive layouts, landing pages, corporate website design and conversion-focused website experiences.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you create responsive website designs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, every Business Website Design in Bangalore we deliver is mobile-first, responsive and optimized for performance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you design corporate websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we design corporate websites with service pages, brand-focused layouts and lead-generation features.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of website design in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Website design starts from ₹25,000 for business websites and increases based on features and complexity.',
      },
    },
    {
    '@type': 'Question',
    name: 'How long does Business Website Design in Bangalore take?',
    acceptedAnswer: {
        '@type': 'Answer',
        text: 'The timeline for Business Website Design in Bangalore typically ranges from 2 to 4 weeks depending on the project scope, features, and customization requirements.',
    },
    },
    {
    '@type': 'Question',
    name: 'Do you offer custom Business Website Design in Bangalore?',
    acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide fully customized Business Website Design in Bangalore tailored to your brand, industry and business goals with modern UI/UX and scalable design.',
    },
    },
  ],
}


const data = {
  badge: 'Website Design · Bangalore',

  h1: 'Business Website Design',
  h1Accent: 'in Bangalore',
  heroImage: '/assets/images7.png',

  tagline:
    'Business Website Design in Bangalore focused on creating high-converting, modern and responsive websites for startups, SMEs and enterprises. Our Business Website Design in Bangalore ensures strong digital presence and growth.',

  stat1: '565+',
  stat1Label: 'Projects Delivered',

  serviceName: 'website design in Bangalore',

  h2Features: 'Business Website Design in Bangalore — Services',

  featuresSubText:
    'Our Business Website Design in Bangalore includes modern UI/UX, responsive layouts and performance-driven design using in-house expertise with no outsourcing.',

  features: [
    {
      h3: 'Custom Website Design Bangalore',
      desc: 'We deliver Business Website Design in Bangalore with scalable UI/UX and conversion-focused layouts tailored for business growth.',
    },
    {
      h3: 'Corporate Website Design Bangalore',
      desc: 'Professional corporate websites with service pages, case studies and lead generation funnels.',
    },
    {
      h3: 'Business Website UI/UX Design',
      desc: 'Modern UI/UX design ensuring seamless user experience and higher conversions.',
    },
    {
      h3: 'Responsive Website Design',
      desc: 'Business Website Design in Bangalore that is mobile-first and optimized across all devices.',
    },
    {
      h3: 'Landing Page Design Bangalore',
      desc: 'High-converting landing pages designed for marketing campaigns and lead generation.',
    },
    {
      h3: 'Website Redesign Services',
      desc: 'Upgrade your existing website with modern Business Website Design in Bangalore and improved performance.',
    },
    {
      h3: 'Figma & Wireframing',
      desc: 'We provide complete UI planning with wireframes and Figma design systems.',
    },
    {
      h3: 'Affordable Website Design Bangalore',
      desc: 'Cost-effective Business Website Design in Bangalore solutions for startups and SMEs.',
    },
    {
      h3: 'Hire Website Designers Bangalore',
      desc: 'Hire expert designers for Business Website Design in Bangalore with modern UI/UX expertise.',
    },
  ],

  h2Why: 'Why Choose NNC for Business Website Design in Bangalore?',

  why: [
    {
      n: '01',
      h3: 'Trusted Design Partner',
      body: 'We deliver Business Website Design in Bangalore focused on performance, conversions and brand experience.',
    },
    {
      n: '02',
      h3: 'In-house design team',
      body: 'No outsourcing — ensuring quality and consistency in every Business Website Design in Bangalore project.',
    },
    {
      n: '03',
      h3: 'Modern design approach',
      body: 'We use latest UI/UX trends and tools to create future-ready websites.',
    },
    {
      n: '04',
      h3: 'Transparent pricing',
      body: 'Clear pricing structure with no hidden costs.',
    },
    {
      n: '05',
      h3: 'Full ownership',
      body: 'Complete control over design files and website assets.',
    },
    {
      n: '06',
      h3: 'Proven experience',
      body: '565+ successful projects delivered across industries.',
    },
  ],

  techStack: [
    'Figma',
    'Adobe XD',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'React JS',
    'Next JS',
    'Framer Motion',
  ],

  h2Tech: 'Technology Stack for Business Website Design',

  h2Faq: 'Business Website Design in Bangalore — FAQs',

  faqs: [
    {
      q: 'Who provides the best Business Website Design in Bangalore?',
      a: 'NNC Digital offers Business Website Design in Bangalore with modern UI/UX, responsive layouts and high-converting design solutions.',
    },
    {
      q: 'What services are included in website design?',
      a: 'Business Website Design in Bangalore includes UI/UX design, responsive layouts, landing pages and corporate website design.',
    },
    {
      q: 'Do you design mobile-friendly websites?',
      a: 'Yes, every Business Website Design in Bangalore project is mobile-first and optimized for all devices.',
    },
    {
      q: 'What is the cost of website design in Bangalore?',
      a: 'Website design starts from ₹25,000 and varies based on features and complexity.',
    },
    {
    q: 'How long does Business Website Design in Bangalore take?',
    a: 'Business Website Design in Bangalore usually takes 2 to 4 weeks depending on the project scope, features and customization requirements.',
    },
    {
    q: 'Do you provide custom website design solutions?',
    a: 'Yes, we offer Business Website Design in Bangalore tailored to your brand, industry and goals with modern UI/UX and scalable design.',
    },
  ],
}


export default function BuissnessWebsiteDesignBangalorePage() {
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
