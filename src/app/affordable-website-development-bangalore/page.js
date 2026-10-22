import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'
import PremiumCTA from '@/components/PremiumCTA'

export const metadata = {
  title: 'Affordable Website Development Bangalore for Business Growth',

  description:
    'Get Affordable Website Development Bangalore with modern, responsive and high-converting websites designed for startups, SMEs and growing businesses.',

  alternates: {
    canonical: `${SITE.url}/affordable-website-development-bangalore`,
  },

  keywords:
    'Affordable Website Development Bangalore, low cost website development bangalore, website development company bangalore, responsive website development bangalore, budget website design bangalore, small business website development bangalore',

  openGraph: {
    title: 'Affordable Website Development Bangalore for Business Growth',
    description:
      'Build fast, scalable and affordable websites with a trusted website development company in Bangalore. Designed for performance, SEO and conversions.',
    url: `${SITE.url}/affordable-website-development-bangalore`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Affordable Website Development Bangalore – NNC Digital',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Affordable Website Development Bangalore for Business Growth',
    description:
      'Affordable Website Development Bangalore for startups and businesses. Fast, responsive and conversion-focused websites.',
    images: [SITE.teamPhoto],
  },
}


const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',

  name: 'Affordable Website Development Bangalore',

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
    'Business Website Development',
    'Corporate Website Development',
    'Landing Page Development',
  ],

  description:
    'Affordable Website Development Bangalore offering responsive, fast and conversion-focused websites for startups, SMEs and enterprises.',

  url: `${SITE.url}/affordable-website-development-bangalore`,

  offers: [
    {
      '@type': 'Offer',
      name: 'Starter Website Development Bangalore',
      price: '15000',
      priceCurrency: 'INR',
      description:
        'Affordable website development package with responsive design, basic UI and essential pages for small businesses.',
    },
    {
      '@type': 'Offer',
      name: 'Custom Website Development Bangalore',
      price: '40000',
      priceCurrency: 'INR',
      description:
        'Custom-built website with modern UI, responsive layouts and performance optimization.',
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
      name: 'Affordable Website Development Bangalore',
      item: `${SITE.url}/aaffordable-website-development-bangalore`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Affordable Website Development Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Affordable Website Development Bangalore focuses on cost-effective, responsive and high-performing websites for startups and small businesses.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does website development cost in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Website development costs in Bangalore typically start from ₹15,000 and vary based on features, design and project requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide responsive website development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all websites are mobile-first and responsive, ensuring smooth performance across all devices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get a custom website within budget?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer affordable custom website development solutions tailored to your business goals and budget.',
      },
    },
  ],
}

const data = {
  badge: 'Affordable Website Development · Bangalore',

  h1: 'Affordable Website Development',
  h1Accent: 'in Bangalore',
  heroImage: '/assets/images3.png',

  tagline:
    'Affordable Website Development Bangalore services focused on fast, responsive and high-performing websites with modern UI/UX design for startups, SMEs and growing businesses.',

  stat1: '565+',
  stat1Label: 'Projects Delivered',

  serviceName: 'Affordable Website Development Bangalore',

  h2Features: 'Affordable Website Development Bangalore Services',

  featuresSubText:
    'As a trusted provider of Affordable Website Development Bangalore, we deliver modern UI/UX, responsive layouts and conversion-focused websites. Our affordable website development in Bangalore is designed to help startups, SMEs and enterprises grow online.',

  features: [
    {
      h3: 'Custom Website Development Bangalore',
      desc: 'Our Affordable Website Development Bangalore solutions include custom-built websites tailored to your business needs with scalable architecture.',
    },
    {
      h3: 'Corporate Website Development Bangalore',
      desc: 'Professional corporate websites developed under our Affordable Website Development Bangalore approach with strong branding and structured layouts.',
    },
    {
      h3: 'Business Website Development Bangalore',
      desc: 'Affordable business websites designed through our affordable website development in Bangalore services to generate leads and drive growth.',
    },
    {
      h3: 'UI/UX Design & Development Bangalore',
      desc: 'Modern UI/UX design integrated into our Affordable Website Development Bangalore services for better engagement and conversions.',
    },
    {
      h3: 'Responsive Website Development Bangalore',
      desc: 'Mobile-first responsive websites as part of our Affordable Website Development Bangalore offering, ensuring seamless performance across devices.',
    },
    {
      h3: 'Landing Page Development Bangalore',
      desc: 'High-converting landing pages built under our affordable website development in Bangalore services for campaigns and lead generation.',
    },
    {
      h3: 'Website Redesign Services Bangalore',
      desc: 'Upgrade outdated websites with our Affordable Website Development Bangalore solutions for modern performance and UX.',
    },
    {
      h3: 'Budget Website Development Bangalore',
      desc: 'Cost-effective solutions under our Affordable Website Development Bangalore services, ideal for startups and small businesses.',
    },
    {
      h3: 'Hire Website Developers Bangalore',
      desc: 'Work with experienced developers delivering Affordable Website Development Bangalore using modern frameworks.',
    },
  ],

  h2Why: 'Why Choose NNC for Affordable Website Development Bangalore?',

  why: [
    {
      n: '01',
      h3: 'Affordable & Transparent Pricing',
      body: 'Our Affordable Website Development Bangalore services come with clear pricing, ensuring value for your investment.',
    },
    {
      n: '02',
      h3: 'In-house Development Team',
      body: 'All Affordable Website Development Bangalore projects are handled by our in-house team for consistent quality.',
    },
    {
      n: '03',
      h3: 'Modern Development Approach',
      body: 'We use the latest technologies to deliver Affordable Website Development Bangalore solutions that are fast and scalable.',
    },
    {
      n: '04',
      h3: 'Conversion-Focused Websites',
      body: 'Our Affordable Website Development Bangalore services focus on driving leads, engagement and business growth.',
    },
    {
      n: '05',
      h3: 'Full Ownership',
      body: 'With our affordable website development in Bangalore, you get full ownership without lock-in.',
    },
    {
      n: '06',
      h3: 'Proven Experience',
      body: 'We have delivered 565+ successful projects through our Affordable Website Development Bangalore services.',
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

  h2Faq: 'Affordable Website Development Bangalore — Frequently Asked Questions',

  faqs: [
    {
      q: 'What is Affordable Website Development Bangalore?',
      a: 'Affordable Website Development Bangalore refers to cost-effective, responsive and high-performing website solutions designed for startups and small businesses.',
    },
    {
      q: 'How much does website development cost in Bangalore?',
      a: 'Affordable website development in Bangalore typically starts from ₹15,000 and depends on features and complexity.',
    },
    {
      q: 'Do you build responsive websites?',
      a: 'Yes, all our Affordable Website Development Bangalore services include mobile-first responsive websites.',
    },
    {
      q: 'Can I get a custom website within budget?',
      a: 'Yes, our Affordable Website Development Bangalore solutions are tailored to fit your budget and business goals.',
    },
    {
      q: 'Do you redesign existing websites?',
      a: 'Yes, we upgrade websites through our Affordable Website Development Bangalore services to modern standards.',
    },
    {
      q: 'What technologies do you use?',
      a: 'We use React, Next.js and modern tools to deliver Affordable Website Development Bangalore solutions.',
    },
    {
      q: 'How long does website development take?',
      a: 'Affordable Website Development Bangalore projects usually take 1–3 weeks depending on requirements.',
    },
  ],
}


export default function AffordableWebsiteDevelopmentBangalorePage() {
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
            title: 'Affordable Website Development',
            accent: 'in Bangalore',
            description:
            'Looking for Affordable Website Development Bangalore? We build fast, responsive and high-performing websites with modern UI/UX design, tailored for startups, SMEs and growing businesses.',
        }}

        cta={{
            title: 'Partner with the Best',
            highlight: 'Affordable Website Development Bangalore',
            description:
            'Work with a trusted provider of Affordable Website Development Bangalore to build scalable, responsive and conversion-focused websites that help your business grow online.',
        }}

        showCTA={true}/>

      </main>
      
      <SeoKeywords />
      
      <Footer />
      <WaFloat />
      <AnimObserver />
    </>
  )
}
