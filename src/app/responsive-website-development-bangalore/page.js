import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'
import PremiumCTA from '@/components/PremiumCTA'

export const metadata = {
  title: 'Responsive Website Development Bangalore for Business Growth',

  description:
    'Get responsive website development Bangalore services with fast, mobile-first and high-performing websites designed for startups, SMEs and enterprises.',

  alternates: {
    canonical: `${SITE.url}/responsive-website-development-bangalore`,
  },

  keywords:
    'responsive website development bangalore, mobile responsive website bangalore, website development company bangalore, web development services bangalore, custom website development bangalore, responsive web design bangalore',

  openGraph: {
    title: 'Responsive Website Development Bangalore for Business Growth',
    description:
      'Build fast, mobile-first and scalable websites with responsive website development services in Bangalore.',
    url: `${SITE.url}/responsive-website-development-bangalore`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Responsive Website Development Bangalore – NNC Digital',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Responsive Website Development Bangalore for Business Growth',
    description:
      'Responsive website development Bangalore with fast, scalable and mobile-first websites.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',

  name: 'Responsive Website Development Bangalore',

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
    'Responsive Website Development',
    'Custom Website Development',
    'Corporate Website Development',
    'Business Website Development',
    'Landing Page Development',
    'Website Redesign',
  ],

  description:
    'Responsive website development Bangalore offering fast, mobile-first and scalable websites for startups, SMEs and enterprises.',

  url: `${SITE.url}/responsive-website-development-bangalore`,

  offers: [
    {
      '@type': 'Offer',
      name: 'Starter Responsive Website Development Bangalore',
      price: '20000',
      priceCurrency: 'INR',
      description:
        'Responsive website development with mobile-first design, fast loading and SEO-friendly structure.',
    },
    {
      '@type': 'Offer',
      name: 'Custom Responsive Website Development Bangalore',
      price: '50000',
      priceCurrency: 'INR',
      description:
        'Custom-built responsive websites with modern frameworks and performance optimization.',
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
      name: 'Responsive Website Development Bangalore',
      item: `${SITE.url}/responsive-website-development-bangalore`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is responsive website development Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Responsive website development Bangalore focuses on building websites that work seamlessly across mobile, tablet and desktop devices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is responsive development important?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Responsive websites improve user experience, SEO rankings and conversion rates.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build mobile-first websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all our websites are mobile-first and optimized for all screen sizes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of responsive website development in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Responsive website development in Bangalore typically starts from ₹20,000 depending on features and complexity.',
      },
    },
  ],
}

const data = {
  badge: 'Responsive Website Development · Bangalore',

  h1: 'Responsive Website Development',
  h1Accent: 'in Bangalore',

  heroImage: '/assets/images3.png',

  tagline:
    'Responsive Website Development Bangalore services delivering fast, mobile-first and high-performing websites built for scalability, SEO and business growth for startups, SMEs and enterprises.',

  stat1: '565+',
  stat1Label: 'Projects Delivered',

  serviceName: 'responsive website development Bangalore',

  h2Features: 'Responsive Website Development Bangalore Services',

  featuresSubText:
    'Our Responsive Website Development Bangalore services focus on mobile-first architecture, fast performance and scalable web solutions. We specialize in building responsive website development Bangalore solutions tailored for modern businesses.',

  features: [
    {
      h3: 'Custom Website Development Bangalore',
      desc: 'Our Responsive Website Development Bangalore solutions include custom websites built with scalable architecture and modern frameworks.',
    },
    {
      h3: 'Corporate Website Development Bangalore',
      desc: 'Professional corporate websites developed under Responsive Website Development Bangalore standards with structured architecture and responsive layouts.',
    },
    {
      h3: 'Business Website Development Bangalore',
      desc: 'Conversion-focused business websites designed through Responsive Website Development Bangalore services to generate leads and support growth.',
    },
    {
      h3: 'Responsive Web Development Bangalore',
      desc: 'Mobile-first Responsive Website Development Bangalore ensuring seamless performance across mobile, tablet and desktop devices.',
    },
    {
      h3: 'Frontend Development Bangalore',
      desc: 'Modern frontend development using React, Next.js and optimized UI as part of Responsive Website Development Bangalore services.',
    },
    {
      h3: 'Landing Page Development Bangalore',
      desc: 'High-converting landing pages built under Responsive Website Development Bangalore for marketing campaigns and lead generation.',
    },
    {
      h3: 'Website Redesign Bangalore',
      desc: 'Upgrade outdated websites with Responsive Website Development Bangalore to improve speed, design and usability.',
    },
    {
      h3: 'Performance Optimization',
      desc: 'Enhance speed, SEO and Core Web Vitals through Responsive Website Development Bangalore techniques.',
    },
    {
      h3: 'Hire Website Developers Bangalore',
      desc: 'Work with experienced developers delivering Responsive Website Development Bangalore using modern frameworks.',
    },
  ],

  h2Why: 'Why Choose Our Responsive Website Development Bangalore Services?',

  why: [
    {
      n: '01',
      h3: 'Mobile-First Development',
      body: 'Our Responsive Website Development Bangalore approach ensures websites are optimized for mobile devices first.',
    },
    {
      n: '02',
      h3: 'Fast Loading Websites',
      body: 'We deliver Responsive Website Development Bangalore solutions focused on speed and performance.',
    },
    {
      n: '03',
      h3: 'Scalable Architecture',
      body: 'Responsive Website Development Bangalore ensures your website grows with your business needs.',
    },
    {
      n: '04',
      h3: 'SEO-Friendly Development',
      body: 'Our Responsive Website Development Bangalore services follow SEO best practices for better rankings.',
    },
    {
      n: '05',
      h3: 'Full Ownership & Transparency',
      body: 'With Responsive Website Development Bangalore, you get full control and ownership of your website.',
    },
    {
      n: '06',
      h3: 'Proven Track Record',
      body: 'We have delivered 565+ projects using Responsive Website Development Bangalore methodologies.',
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

  h2Faq: 'Responsive Website Development Bangalore — Frequently Asked Questions',

  faqs: [
    {
      q: 'What is Responsive Website Development Bangalore?',
      a: 'Responsive Website Development Bangalore focuses on building websites that work seamlessly across mobile, tablet and desktop devices.',
    },
    {
      q: 'Why is responsive development important?',
      a: 'Responsive Website Development Bangalore improves user experience, SEO rankings and conversion rates.',
    },
    {
      q: 'Do you build mobile-first websites?',
      a: 'Yes, all our Responsive Website Development Bangalore services include mobile-first websites optimized for all screen sizes.',
    },
    {
      q: 'Do you redesign existing websites?',
      a: 'Yes, we upgrade outdated websites using Responsive Website Development Bangalore practices to modern standards.',
    },
    {
      q: 'How long does development take?',
      a: 'Responsive Website Development Bangalore projects usually take 1–3 weeks depending on complexity.',
    },
    {
      q: 'What technologies do you use?',
      a: 'We use React, Next.js and modern tools to deliver Responsive Website Development Bangalore solutions.',
    },
    {
      q: 'Are your websites SEO-friendly?',
      a: 'Yes, all Responsive Website Development Bangalore websites are optimized for SEO and performance.',
    },
  ],
}

export default function ResponsiveWebsiteDevelopmentBangalorePage() {
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
            title: 'Responsive Website Development',
            accent: 'in Bangalore',
            description:
            'Leading responsive website development Bangalore services delivering fast, mobile-first and high-performing websites built for scalability, SEO and business growth for startups, SMEs and enterprises.',
        }}

        cta={{
            title: 'Partner with the Best',
            highlight: 'Responsive Website Development Bangalore',
            description:
            'Looking for expert responsive website development Bangalore? We build fast, scalable and mobile-first websites with modern technologies that help your business grow online.',
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
