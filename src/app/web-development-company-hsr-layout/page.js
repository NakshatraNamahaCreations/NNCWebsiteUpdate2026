import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'
import PremiumCTA from '@/components/PremiumCTA'

export const metadata = {
  title: 'Web Development Company in HSR Layout for Business Growth',

  description:
    'Top web development company HSR Layout offering fast, scalable and responsive websites for startups, SMEs and enterprises, built for performance and growth.',

  alternates: {
    canonical: `${SITE.url}/web-development-company-hsr-layout`,
  },

  keywords:
    'web development company hsr layout, website development hsr layout, web developers hsr layout, custom website development hsr layout, responsive website development hsr layout',

  openGraph: {
    title: 'Web Development Company in HSR Layout for Business Growth',
    description:
      'Work with a leading web development company HSR Layout to build fast, scalable and responsive websites.',
    url: `${SITE.url}/web-development-company-hsr-layout`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Web Development Company HSR Layout – NNC Digital',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Web Development Company in HSR Layout for Business Growth',
    description:
      'Professional web development company HSR Layout delivering scalable and high-performance websites.',
    images: [SITE.teamPhoto],
  },
}
const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',

  name: 'Web Development Company HSR Layout',

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
    { '@type': 'Place', name: 'HSR Layout' },
    { '@type': 'City', name: 'Bangalore' },
    { '@type': 'City', name: 'Koramangala' },
    { '@type': 'City', name: 'Electronic City' },
  ],

  serviceType: [
    'Website Development',
    'Custom Web Development',
    'Frontend Development',
    'Backend Development',
    'Full Stack Development',
    'Responsive Website Development',
    'Website Redesign',
  ],

  description:
    'Leading web development company HSR Layout offering fast, scalable and responsive websites and web applications for startups, SMEs and enterprises.',

  url: `${SITE.url}/web-development-company-hsr-layout`,

  offers: [
    {
      '@type': 'Offer',
      name: 'Business Website Development HSR Layout — Starter',
      price: '20000',
      priceCurrency: 'INR',
      description:
        'Professional website development including responsive design, fast performance, SEO-ready structure and up to 10 pages.',
    },
    {
      '@type': 'Offer',
      name: 'Custom Website Development HSR Layout',
      price: '50000',
      priceCurrency: 'INR',
      description:
        'Custom-built websites with scalable architecture, modern frameworks, API integration and high-performance optimization.',
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
      item: `${SITE.url}/website-development`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Web Development Company HSR Layout',
      item: `${SITE.url}/web-development-company-hsr-layout`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',

  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best web development company in HSR Layout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Digital is a leading web development company HSR Layout specializing in scalable, responsive and high-performance websites and web applications.',
      },
    },
    {
      '@type': 'Question',
      name: 'What services does a web development company HSR Layout provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A web development company HSR Layout provides custom website development, frontend and backend development, full stack development and website redesign services.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build responsive websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all our websites are mobile-first and fully responsive across all devices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you redesign existing websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we upgrade outdated websites into modern, fast and high-performing web platforms.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of website development in HSR Layout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Website development costs in HSR Layout start from ₹20,000 and vary based on features, complexity and project requirements.',
      },
    },
  ],
}
const data = {
  badge: 'Web Development Company · HSR Layout',

  h1: 'Web Development Company',
  h1Accent: 'in HSR Layout',

  heroImage: '/assets/images3.png',

  tagline:
    'Top Web Development Company HSR Layout delivering fast, scalable and high-performance websites and web applications for startups, SMEs and enterprises.',

  stat1: '565+',
  stat1Label: 'Projects Delivered',

  serviceName: 'web development company HSR Layout',

  h2Features: 'Web Development Company HSR Layout Services',

  featuresSubText:
    'As a leading Web Development Company HSR Layout, we build scalable, responsive and performance-driven websites using modern technologies tailored to your business needs.',

  features: [
    {
      h3: 'Custom Website Development',
      desc: 'Our Web Development Company HSR Layout builds custom websites tailored to your business goals with scalable architecture.',
    },
    {
      h3: 'Corporate Website Development',
      desc: 'Professional corporate websites with structured architecture, performance optimization and modern frameworks.',
    },
    {
      h3: 'Business Website Development',
      desc: 'Conversion-focused websites developed by our Web Development Company HSR Layout to generate leads and drive growth.',
    },
    {
      h3: 'Frontend Development',
      desc: 'Modern frontend development using React, Next.js and optimized UI components for fast performance.',
    },
    {
      h3: 'Backend Development',
      desc: 'Robust backend systems, APIs and database solutions for scalable applications.',
    },
    {
      h3: 'Full Stack Development',
      desc: 'End-to-end web development solutions covering both frontend and backend.',
    },
    {
      h3: 'Responsive Website Development',
      desc: 'Mobile-first responsive websites ensuring seamless performance across all devices.',
    },
    {
      h3: 'Website Redesign & Upgrade',
      desc: 'Upgrade outdated websites into modern, fast and scalable web platforms.',
    },
    {
      h3: 'Hire Web Developers HSR Layout',
      desc: 'Work with experienced developers from our Web Development Company HSR Layout for ongoing projects.',
    },
  ],

  h2Why: 'Why Choose Our Web Development Company HSR Layout?',

  why: [
    {
      n: '01',
      h3: 'Experienced Developers',
      body: 'Our Web Development Company HSR Layout delivers high-quality and scalable web solutions using modern technologies.',
    },
    {
      n: '02',
      h3: 'Modern Tech Stack',
      body: 'We use React, Next.js, Node.js and advanced frameworks for building high-performance websites.',
    },
    {
      n: '03',
      h3: 'Scalable Development',
      body: 'Our Web Development Company HSR Layout builds websites that grow with your business needs.',
    },
    {
      n: '04',
      h3: 'Fast & Optimized Websites',
      body: 'We deliver high-performance websites with fast loading speed and optimized Core Web Vitals.',
    },
    {
      n: '05',
      h3: 'Full Ownership & Transparency',
      body: 'You get complete ownership and control over your website with no lock-in.',
    },
    {
      n: '06',
      h3: 'Proven Experience',
      body: 'Our Web Development Company HSR Layout has delivered 565+ successful projects across industries.',
    },
  ],

  techStack: [
    'React',
    'Next.js',
    'Node.js',
    'MongoDB',
    'HTML',
    'CSS',
    'Tailwind CSS',
    'JavaScript',
  ],

  h2Tech: 'Web Development Technologies',

  h2Faq: 'Web Development Company HSR Layout — Frequently Asked Questions',

  faqs: [
    {
      q: 'Which is the best web development company in HSR Layout?',
      a: 'NNC is a leading Web Development Company HSR Layout specializing in scalable, responsive and high-performance websites.',
    },
    {
      q: 'What services does a web development company HSR Layout provide?',
      a: 'A Web Development Company HSR Layout provides custom website development, frontend, backend, full stack development and website redesign services.',
    },
    {
      q: 'Do you build responsive websites?',
      a: 'Yes, all websites built by our Web Development Company HSR Layout are mobile-first and responsive.',
    },
    {
      q: 'Do you redesign existing websites?',
      a: 'Yes, we upgrade outdated websites into modern, fast and high-performing platforms.',
    },
    {
      q: 'How long does website development take?',
      a: 'Projects handled by our Web Development Company HSR Layout typically take 1–3 weeks depending on complexity.',
    },
    {
      q: 'What technologies do you use?',
      a: 'We use React, Next.js, Node.js and modern frameworks for development.',
    },
    {
      q: 'Are your websites SEO-friendly?',
      a: 'Yes, all websites are optimized for SEO, performance and scalability.',
    },
  ],
}

export default function WebDevelopmentCompanyBangalorePage() {
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
        title: 'Web Development Company',
        accent: 'in HSR Layout',
        description:
            'Leading web development company HSR Layout offering fast, scalable and responsive websites and web applications for startups, SMEs and enterprises.',
        }}

        cta={{
        title: 'Partner with the Best',
        highlight: 'Web Development Company HSR Layout',
        description:
            'Looking for a reliable web development company HSR Layout? We build high-performance, scalable and responsive websites that help your business grow online.',
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
