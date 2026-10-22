import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'
import PremiumCTA from '@/components/PremiumCTA'

export const metadata = {
  title: 'Website Development Services Bangalore for Business Growth',

  description:
    'Professional website development services Bangalore with fast, responsive and scalable websites for startups, SMEs and growing businesses.',

  alternates: {
    canonical: `${SITE.url}/website-development-services-bangalore`,
  },

  keywords:
    'website development services bangalore, web development company bangalore, custom website development bangalore, responsive website development bangalore, business website development bangalore',

  openGraph: {
    title: 'Website Development Services Bangalore for Business Growth',
    description:
      'Build fast, scalable and responsive websites with expert website development services in Bangalore.',
    url: `${SITE.url}/website-development-services-bangalore`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Website Development Services Bangalore – NNC Digital',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Website Development Services Bangalore for Business Growth',
    description:
      'Website development services Bangalore with fast, scalable and responsive websites.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',

  name: 'Website Development Services Bangalore',

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
    'Responsive Website Development',
    'Custom Website Development',
    'Corporate Website Development',
    'Business Website Development',
    'Landing Page Development',
    'Website Redesign',
  ],

  description:
    'Leading website development services Bangalore offering responsive, fast and scalable websites built for startups, SMEs and enterprises.',

  url: `${SITE.url}/website-development-services-bangalore`,

  offers: [
    {
      '@type': 'Offer',
      name: 'Starter Website Development Bangalore',
      price: '20000',
      priceCurrency: 'INR',
      description:
        'Professional website development — up to 10 pages, responsive layouts, fast performance and SEO-friendly structure.',
    },
    {
      '@type': 'Offer',
      name: 'Custom Website Development Bangalore',
      price: '50000',
      priceCurrency: 'INR',
      description:
        'Custom-built website with scalable architecture, modern frameworks and high-performance optimization.',
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
      name: 'Website Development Services Bangalore',
      item: `${SITE.url}/website-development-services-bangalore`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',

  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best website development services company in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Digital is a leading website development services company in Bangalore specializing in responsive, scalable and high-performance web solutions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What website development services do you provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide website development services including custom development, responsive websites, corporate websites, landing pages and website redesign solutions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build responsive websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all our websites are mobile-first and responsive, ensuring seamless performance across all devices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you redesign existing websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we upgrade outdated websites into modern, fast and high-performing platforms.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of website development in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Website development costs in Bangalore start from ₹20,000 and vary depending on features, complexity and project requirements.',
      },
    },
  ],
}

const data = {
  badge: 'Website Development Services · Bangalore',

  h1: 'Website Development Services',
  h1Accent: 'in Bangalore',
  heroImage: '/assets/images3.png',

  tagline:
    'Website Development Services Bangalore delivering fast, responsive and high-performing websites built for scalability, SEO and business growth.',

  stat1: '565+',
  stat1Label: 'Projects Delivered',

  serviceName: 'website development services Bangalore',

  h2Features: 'Website Development Services Bangalore',

  featuresSubText:
    'Our Website Development Services Bangalore focus on building scalable, responsive and performance-driven websites using modern technologies for startups, SMEs and enterprises.',

  features: [
    {
      h3: 'Custom Website Development Bangalore',
      desc: 'Our Website Development Services Bangalore include custom websites built with scalable architecture tailored to your business needs.',
    },
    {
      h3: 'Corporate Website Development Bangalore',
      desc: 'Professional corporate websites developed under Website Development Services Bangalore with structured architecture and performance optimization.',
    },
    {
      h3: 'Business Website Development Bangalore',
      desc: 'Conversion-focused business websites created through Website Development Services Bangalore to generate leads and drive growth.',
    },
    {
      h3: 'Responsive Website Development Bangalore',
      desc: 'Mobile-first responsive websites ensuring seamless performance across devices as part of Website Development Services Bangalore.',
    },
    {
      h3: 'Frontend Development Bangalore',
      desc: 'Modern frontend development using React, Next.js and optimized UI components.',
    },
    {
      h3: 'Landing Page Development Bangalore',
      desc: 'High-converting landing pages built for campaigns and lead generation.',
    },
    {
      h3: 'Website Redesign Bangalore',
      desc: 'Upgrade outdated websites into fast, responsive and modern web platforms.',
    },
    {
      h3: 'Performance Optimization',
      desc: 'Improve speed, SEO and Core Web Vitals through advanced development techniques.',
    },
    {
      h3: 'Hire Website Developers Bangalore',
      desc: 'Work with experienced developers delivering Website Development Services Bangalore using modern frameworks.',
    },
  ],

  h2Why: 'Why Choose Our Website Development Services Bangalore?',

  why: [
    {
      n: '01',
      h3: 'Experienced Development Team',
      body: 'Our Website Development Services Bangalore are handled by expert developers ensuring high-quality and scalable solutions.',
    },
    {
      n: '02',
      h3: 'Modern Technologies',
      body: 'We use React, Next.js and advanced frameworks to deliver Website Development Services Bangalore.',
    },
    {
      n: '03',
      h3: 'SEO-Friendly Development',
      body: 'All Website Development Services Bangalore projects follow SEO best practices for better ranking.',
    },
    {
      n: '04',
      h3: 'Responsive & Fast Websites',
      body: 'We build mobile-first websites with fast loading speed and optimized performance.',
    },
    {
      n: '05',
      h3: 'Full Ownership',
      body: 'With our Website Development Services Bangalore, you get complete ownership of your website.',
    },
    {
      n: '06',
      h3: 'Proven Experience',
      body: 'We have delivered 565+ successful projects using Website Development Services Bangalore methodologies.',
    },
  ],

  techStack: [
    'React',
    'Next.js',
    'HTML',
    'CSS',
    'Tailwind CSS',
    'JavaScript',
  ],

  h2Tech: 'Website Development Technologies',

  h2Faq: 'Website Development Services Bangalore — Frequently Asked Questions',

  faqs: [
    {
      q: 'What are Website Development Services Bangalore?',
      a: 'Website Development Services Bangalore include building responsive, scalable and high-performance websites for businesses.',
    },
    {
      q: 'Why choose Website Development Services Bangalore?',
      a: 'Website Development Services Bangalore ensure fast, SEO-friendly and scalable websites tailored for business growth.',
    },
    {
      q: 'Do you build responsive websites?',
      a: 'Yes, all our Website Development Services Bangalore include mobile-first responsive websites.',
    },
    {
      q: 'Do you redesign websites?',
      a: 'Yes, we upgrade outdated websites into modern, fast and high-performing platforms.',
    },
    {
      q: 'How long does development take?',
      a: 'Website Development Services Bangalore projects usually take 1–3 weeks depending on requirements.',
    },
    {
      q: 'What technologies do you use?',
      a: 'We use React, Next.js and modern frameworks to deliver Website Development Services Bangalore.',
    },
    {
      q: 'Are your websites SEO-friendly?',
      a: 'Yes, all websites built under Website Development Services Bangalore are optimized for SEO and performance.',
    },
  ],
}

export default function WebsiteDevelopmentServicesBangalorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>

        <ServicePageContent 
        data={data} 
        customHero={{
        title: 'Website Development ',
        accent: 'in Bangalore',
        description:
            'Looking for reliable Website Development Services Bangalore? We build fast, scalable and responsive websites with modern technologies for startups, SMEs and growing businesses.',
        }}

        cta={{
        title: 'Partner with the Best',
        highlight: 'Website Development Services Bangalore',
        description:
            'Work with a trusted team offering Website Development Services Bangalore to create high-performance, scalable and conversion-focused websites that help your business grow online.',
        }}
        showCTA={true}

      />
      </main>
      
      <SeoKeywords />
      
      <Footer />
      <WaFloat />
      <AnimObserver />
    </>
  )
}
