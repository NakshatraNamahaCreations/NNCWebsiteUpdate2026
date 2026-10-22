import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Best Website Development Company in Bangalore | Web Design',
  description:
    'Get results driven websites from the best website development company in Bangalore, with NNC delivering fast, scalable solutions tailored to your business goals.',
  alternates: {
    canonical: `${SITE.url}/best-website-development-company-in-bangalore`,
  },
  keywords:
    'best website development company in bangalore, top website development company bangalore, best web development company bangalore, best website design company bangalore, best web designers bangalore, best website developers bangalore, website development company bangalore',
  openGraph: {
    title: 'Best Website Development Company in Bangalore | Web Design',
    description:
      'Get results driven websites from the best website development company in Bangalore, with NNC delivering fast, scalable solutions tailored to your business goals.',
    url: `${SITE.url}/best-website-development-company-in-bangalore`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Best Website Development Company in Bangalore – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Best Website Development Company in Bangalore | Web Design',
    description:
      'Get results driven websites from the best website development company in Bangalore, with NNC delivering fast, scalable solutions tailored to your business goals.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Best Website Development Company in Bangalore',
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
    'Web Design',
    'Custom Website Development',
    'Corporate Website Development',
    'React JS Development',
    'Next JS Development',
    'Responsive Web Design',
  ],
  description:
    'Best website development company in Bangalore — custom website development, corporate websites, React JS, Next JS, responsive web design and results-driven web solutions for Bangalore businesses.',
  url: `${SITE.url}/best-website-development-company-in-bangalore`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Business Website Bangalore',
      price: '25000',
      priceCurrency: 'INR',
      description: 'Professional business website — up to 10 pages, responsive design, CMS, contact forms and basic SEO setup.',
    },
    {
      '@type': 'Offer',
      name: 'Custom Website Development Bangalore',
      price: '60000',
      priceCurrency: 'INR',
      description: 'Custom website with React JS or Next JS — bespoke design, advanced functionality, CMS integration and performance optimisation.',
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
      name: 'Website Development Company in Bangalore',
      item: `${SITE.url}/website-development-company-in-bangalore`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Best Website Development Company in Bangalore',
      item: `${SITE.url}/best-website-development-company-in-bangalore`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best website development company in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is rated among the best website development companies in Bangalore — 565+ projects delivered, 4.9★ Google rating, headquartered in Whitefield, Bangalore. We build custom websites, corporate websites, React JS and Next JS web applications for Bangalore businesses.",
      },
    },
    {
      '@type': 'Question',
      name: 'What makes NNC the best website development company in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC is rated best for three reasons — in-house Bangalore team with zero outsourcing, modern tech stack (React JS and Next JS) that outperforms WordPress on Core Web Vitals, and fixed-price projects fully scoped before development starts. 565+ websites delivered and 4.9★ on Google.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build React JS and Next JS websites in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds React JS and Next JS websites in Bangalore — fast, SEO-friendly websites with server-side rendering (SSR), static site generation (SSG) and excellent Core Web Vitals scores.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build corporate and business websites in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds corporate and business websites for Bangalore companies — multi-page corporate sites, service pages, team profiles, blog sections, contact forms and SEO-ready structure.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to build a website with the best company in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A professional business website starts from ₹25,000. Custom React JS or Next JS websites start from ₹60,000. All fixed-price — no hourly billing, no hidden charges.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer responsive website development in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every website NNC builds is fully responsive — mobile-first design tested across all devices with Core Web Vitals optimisation for Google ranking.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a website development office in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital is headquartered at Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit us to review wireframes, approve designs and meet the development team.',
      },
    },
  ],
}

const data = {
  badge: 'Best Website Development · Bangalore',
  h1: 'Best Website Development Company',
  h1Accent: 'in Bangalore',
  tagline:
    'Best website development company in Bangalore — custom website development, corporate website design, React JS, Next JS, responsive websites and web design services. Results-driven. Fixed price.',
  desc:
    'NNC Digital is rated the best website development company in Bangalore — 565+ websites delivered, 4.9★ Google rating, in-house team of 35+ specialists at our Whitefield, Bangalore office. We build custom websites, corporate websites, React JS and Next JS web applications and responsive business websites for startups, SMEs and enterprises. Every website is built in-house with zero outsourcing, fixed-price contracts and complete source code ownership.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'website development in Bangalore',
  h2Features: 'Website Development Services from the Best in Bangalore',
  features: [
    {
      h3: 'Custom Website Development Bangalore',
      desc: 'Custom website development for Bangalore businesses — bespoke design, tailored functionality, CMS integration and performance-optimised build. No templates, no page builders. Every element coded to your exact specification.',
    },
    {
      h3: 'Corporate Website Development Bangalore',
      desc: 'Corporate website development for Bangalore companies — multi-page sites with service pages, team profiles, case studies, blog and contact forms. Built to reflect your brand and generate qualified enquiries.',
    },
    {
      h3: 'React JS Development Bangalore',
      desc: 'React JS website development for Bangalore businesses — dynamic single-page applications, interactive dashboards and component-based websites. Fast, scalable and easy to maintain.',
    },
    {
      h3: 'Next JS Development Bangalore',
      desc: 'Next JS development for Bangalore — server-side rendering (SSR), static site generation (SSG) and incremental static regeneration. Fast, SEO-friendly websites with excellent Core Web Vitals scores.',
    },
    {
      h3: 'Responsive Website Development Bangalore',
      desc: 'Fully responsive websites for Bangalore — mobile-first design tested across all screen sizes. Fast-loading pages with Core Web Vitals optimisation and Google-friendly performance scores.',
    },
    {
      h3: 'Business Website Design Bangalore',
      desc: 'Professional business website design for Bangalore SMEs and startups — clean, conversion-focused design with strong calls-to-action, fast load times and mobile-first layouts that work across all devices.',
    },
    {
      h3: 'E-commerce Website Development Bangalore',
      desc: 'E-commerce website development for Bangalore businesses — product catalogues, shopping cart, payment gateway integration (Razorpay, Stripe), order management and admin dashboard.',
    },
    {
      h3: 'Landing Page Development Bangalore',
      desc: 'High-converting landing page development for Bangalore businesses — campaign-specific pages, lead capture forms, A/B test-ready design and fast load times for Google Ads and SEO traffic.',
    },
    {
      h3: 'Website Maintenance Bangalore',
      desc: 'Ongoing website maintenance for Bangalore businesses — content updates, performance optimisation, security patches, plugin updates and technical support. Monthly retainer plans available.',
    },
  ],
  h2Why: 'Why NNC is the Best Website Development Company in Bangalore',
  why: [
    {
      n: '01',
      h3: 'Bangalore headquarters — review designs in person',
      body: 'NNC is headquartered at Prestige Shantiniketan, Whitefield, Bangalore. Visit us to review wireframes, approve designs on screen and meet the development team building your website.',
    },
    {
      n: '02',
      h3: 'In-house team — zero outsourcing',
      body: 'Every designer, developer and project manager is a full-time NNC employee in Bangalore. Consistent team from brief to launch — no freelancers, no offshore outsourcing.',
    },
    {
      n: '03',
      h3: 'React JS & Next JS — modern, fast, SEO-friendly',
      body: 'NNC builds on React JS and Next JS — delivering websites that outperform WordPress and template builds on Core Web Vitals, page speed and Google Search performance.',
    },
    {
      n: '04',
      h3: 'Fixed price — fully scoped before development starts',
      body: 'Every project is scoped in detail and priced upfront. No hourly billing, no scope creep charges. You know the exact cost, timeline and deliverables before a single line of code is written.',
    },
    {
      n: '05',
      h3: 'Source code ownership — no lock-in',
      body: 'You own the source code, design files and hosting credentials on delivery. No platform lock-in, no monthly licensing fees. Take the code anywhere at any time.',
    },
    {
      n: '06',
      h3: '565+ projects — 4.9★ Google rating',
      body: 'NNC has built websites for startups, ecommerce brands, corporates, healthcare companies and SaaS businesses across Bangalore. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['React JS', 'Next JS', 'Node JS', 'Tailwind CSS', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Figma'],
  h2Tech: 'Technology Stack',
  h2Faq: 'Best Website Development Company Bangalore — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best website development company in Bangalore?',
      a: "NNC Digital — 565+ projects, 4.9★ Google rating, headquartered in Whitefield, Bangalore. Custom websites, React JS, Next JS — all built in-house.",
    },
    {
      q: 'What makes NNC the best website development company in Bangalore?',
      a: 'In-house Bangalore team, modern React JS/Next JS stack, fixed-price projects and 565+ delivered websites with 4.9★ Google rating.',
    },
    {
      q: 'Do you build React JS and Next JS websites in Bangalore?',
      a: 'Yes. NNC builds React JS and Next JS websites — fast, SEO-friendly with SSR, SSG and excellent Core Web Vitals.',
    },
    {
      q: 'How much does website development cost in Bangalore?',
      a: 'Business websites start from ₹25,000. Custom React JS/Next JS websites start from ₹60,000. All fixed-price.',
    },
    {
      q: 'Do you offer responsive website development in Bangalore?',
      a: 'Yes. Every website is fully responsive — mobile-first, tested across all devices with Core Web Vitals optimisation.',
    },
    {
      q: 'Do you have a website development office in Bangalore?',
      a: 'Yes. NNC is at Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit to review wireframes and meet the team.',
    },
  ],
}

export default function BestWebsiteDevelopmentCompanyBangalorePage() {
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
