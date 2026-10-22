import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'
import PremiumCTA from '@/components/PremiumCTA'

export const metadata = {
  title: 'Hire Web Developers Bangalore for Scalable Web Solutions',

  description:
    'Hire web developers Bangalore to build fast, responsive and scalable websites using modern technologies for startups, SMEs and enterprises.',

  alternates: {
    canonical: `${SITE.url}/hire-web-developers-bangalore`,
  },

  keywords:
    'hire web developers bangalore, web developers bangalore, hire developers bangalore, full stack developers bangalore, frontend developers bangalore, backend developers bangalore',

  openGraph: {
    title: 'Hire Web Developers Bangalore for Scalable Web Solutions',
    description:
      'Hire web developers Bangalore to build high-performance, scalable and responsive websites.',
    url: `${SITE.url}/hire-web-developers-bangalore`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Hire Web Developers Bangalore – NNC Digital',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Hire Web Developers Bangalore for Scalable Web Solutions',
    description:
      'Hire web developers Bangalore for fast, scalable and modern web development.',
    images: [SITE.teamPhoto],
  },
}


const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',

  name: 'Hire Web Developers Bangalore',

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
    'Web Development',
    'Frontend Development',
    'Backend Development',
    'Full Stack Development',
    'Custom Web Development',
  ],

  description:
    'Hire Web Developers Bangalore to build scalable, responsive and high-performance websites and web applications using modern frameworks.',

  url: `${SITE.url}/hire-web-developers-bangalore`,

  offers: [
    {
      '@type': 'Offer',
      name: 'Frontend Developer Hiring Bangalore',
      price: '20000',
      priceCurrency: 'INR',
      description:
        'Hire web developers Bangalore for frontend development using React, Next.js and modern UI frameworks.',
    },
    {
      '@type': 'Offer',
      name: 'Full Stack Developer Hiring Bangalore',
      price: '50000',
      priceCurrency: 'INR',
      description:
        'Hire full stack web developers Bangalore for scalable web applications and backend development.',
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
      name: 'Hire Web Developers Bangalore',
      item: `${SITE.url}/hire-web-developers-bangalore`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',

  mainEntity: [
    {
      '@type': 'Question',
      name: 'How can I hire web developers Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can hire web developers Bangalore through our flexible hiring models including hourly, part-time and full-time engagement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why hire web developers Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hire web developers Bangalore to build fast, scalable and high-performance websites using modern technologies.',
      },
    },
    {
      '@type': 'Question',
      name: 'What technologies do your developers use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our developers use React, Next.js, Node.js and modern frameworks for scalable development.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I hire dedicated developers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can hire web developers Bangalore as dedicated resources for ongoing projects.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build responsive websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all developers build mobile-first and responsive websites optimized for all devices.',
      },
    },
  ],
}

const data = {
  badge: 'Hire Web Developers · Bangalore',

  h1: 'Hire Web Developers',
  h1Accent: 'in Bangalore',

  heroImage: '/assets/images3.png',

  tagline:
    'Hire Web Developers Bangalore to build fast, scalable and high-performance websites and web applications using modern technologies.',

  stat1: '565+',
  stat1Label: 'Projects Delivered',

  serviceName: 'hire web developers Bangalore',

  h2Features: 'Hire Web Developers Bangalore',

  featuresSubText:
    'Our Hire Web Developers Bangalore services give you access to skilled developers who build scalable, responsive and high-performance web solutions for startups, SMEs and enterprises.',

  features: [
    {
      h3: 'Frontend Developers Bangalore',
      desc: 'Hire Web Developers Bangalore specializing in React, Next.js and modern frontend frameworks for responsive user interfaces.',
    },
    {
      h3: 'Backend Developers Bangalore',
      desc: 'Hire Web Developers Bangalore for backend development, APIs and scalable server-side applications.',
    },
    {
      h3: 'Full Stack Developers Bangalore',
      desc: 'Hire Web Developers Bangalore who handle both frontend and backend development for complete web solutions.',
    },
    {
      h3: 'Custom Web Development',
      desc: 'Hire Web Developers Bangalore to build custom websites tailored to your business needs and goals.',
    },
    {
      h3: 'Responsive Web Development',
      desc: 'Mobile-first websites developed by Hire Web Developers Bangalore ensuring seamless performance across all devices.',
    },
    {
      h3: 'E-commerce Development',
      desc: 'Hire Web Developers Bangalore to build scalable e-commerce platforms with modern features.',
    },
    {
      h3: 'Website Redesign & Upgrade',
      desc: 'Upgrade your existing website with Hire Web Developers Bangalore for better performance and scalability.',
    },
    {
      h3: 'Performance Optimization',
      desc: 'Improve speed, SEO and Core Web Vitals with expert Hire Web Developers Bangalore services.',
    },
    {
      h3: 'Dedicated Developers',
      desc: 'Hire Web Developers Bangalore as dedicated resources for long-term projects and ongoing development support.',
    },
  ],

  h2Why: 'Why Hire Web Developers Bangalore from Us?',

  why: [
    {
      n: '01',
      h3: 'Experienced Developers',
      body: 'Hire Web Developers Bangalore with strong expertise in modern frameworks and scalable development.',
    },
    {
      n: '02',
      h3: 'Modern Tech Stack',
      body: 'Our Hire Web Developers Bangalore use React, Next.js, Node.js and advanced technologies.',
    },
    {
      n: '03',
      h3: 'Scalable Development',
      body: 'Hire Web Developers Bangalore to build websites that grow with your business.',
    },
    {
      n: '04',
      h3: 'Fast & Optimized Websites',
      body: 'Our Hire Web Developers Bangalore deliver high-performance and fast-loading websites.',
    },
    {
      n: '05',
      h3: 'Flexible Hiring Models',
      body: 'Hire Web Developers Bangalore on hourly, part-time or full-time basis as per your needs.',
    },
    {
      n: '06',
      h3: 'Proven Track Record',
      body: 'We have delivered 565+ projects through our Hire Web Developers Bangalore services.',
    },
  ],

  techStack: [
    'React',
    'Next.js',
    'Node.js',
    'MongoDB',
    'HTML',
    'CSS',
    'JavaScript',
  ],

  h2Tech: 'Web Development Technologies',

  h2Faq: 'Hire Web Developers Bangalore — Frequently Asked Questions',

  faqs: [
    {
      q: 'How can I hire web developers Bangalore?',
      a: 'You can Hire Web Developers Bangalore through flexible hiring models including hourly, part-time and full-time engagement.',
    },
    {
      q: 'Why should I hire web developers Bangalore?',
      a: 'Hire Web Developers Bangalore to build scalable, fast and high-performance websites using modern technologies.',
    },
    {
      q: 'Do you provide dedicated developers?',
      a: 'Yes, you can Hire Web Developers Bangalore as dedicated resources for long-term projects.',
    },
    {
      q: 'Do you build responsive websites?',
      a: 'Yes, all developers build mobile-first and responsive websites.',
    },
    {
      q: 'What technologies do your developers use?',
      a: 'Our Hire Web Developers Bangalore use React, Next.js, Node.js and modern frameworks.',
    },
    {
      q: 'How long does development take?',
      a: 'Hire Web Developers Bangalore projects typically take 1–3 weeks depending on complexity.',
    },
    {
      q: 'Are your websites SEO-friendly?',
      a: 'Yes, all websites built by Hire Web Developers Bangalore are optimized for SEO and performance.',
    },
  ],
}


export default function HireWebDevelopersBangalorePage() {
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
            title: 'Hire Web Developers',
            accent: 'in Bangalore',
            description:
            'Hire Web Developers Bangalore to build fast, scalable and high-performance websites and web applications using modern technologies for startups, SMEs and enterprises.',
        }}

        cta={{
            title: 'Partner with the Best',
            highlight: 'Hire Web Developers Bangalore',
            description:
            'Looking to Hire Web Developers Bangalore? Work with expert developers to build scalable, responsive and high-performance websites that help your business grow online.',
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
