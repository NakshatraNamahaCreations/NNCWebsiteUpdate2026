import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Best Website Design & Development Company in Mumbai',
  description:
    'NNC is the best website design and development company in Mumbai to build high performance websites,with NNC delivering modern and scalable solutions.',
  alternates: {
    canonical: `${SITE.url}/best-website-design-and-development-company-in-mumbai`,
  },
  keywords:
    'best website design and development company in mumbai, best website design company mumbai, best website development company mumbai, top website design and development company mumbai, best web design and development mumbai, best website company mumbai, top website company mumbai, best web development company mumbai',
  openGraph: {
    title: 'Best Website Design & Development Company in Mumbai',
    description:
      'NNC is the best website design and development company in Mumbai to build high performance websites,with NNC delivering modern and scalable solutions.',
    url: `${SITE.url}/best-website-design-and-development-company-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Best Website Design and Development Company in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Best Website Design & Development Company in Mumbai',
    description:
      'NNC is the best website design and development company in Mumbai to build high performance websites,with NNC delivering modern and scalable solutions.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Best Website Design and Development Company in Mumbai',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lodha Signet, Kolshet Road, Thane West',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400607',
      addressCountry: 'IN',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Mumbai' },
    { '@type': 'City', name: 'Thane' },
    { '@type': 'City', name: 'Navi Mumbai' },
    { '@type': 'City', name: 'Andheri' },
    { '@type': 'City', name: 'BKC' },
  ],
  serviceType: [
    'Website Design and Development',
    'Custom Website Development',
    'High Performance Website Development',
    'Web Design',
    'Web Development',
    'Full Stack Development',
    'Scalable Website Solutions',
  ],
  description:
    'Best website design and development company in Mumbai — high performance, modern and scalable websites for business growth. In-house team, branch office in Thane West.',
  url: `${SITE.url}/best-website-design-and-development-company-in-mumbai`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Business Website Design & Development Mumbai',
      price: '24999',
      priceCurrency: 'INR',
      description: 'Custom website design and development — modern UI, Next JS, PageSpeed 90+ and SEO setup.',
    },
    {
      '@type': 'Offer',
      name: 'Scalable Web Application Mumbai',
      price: '75000',
      priceCurrency: 'INR',
      description: 'Full stack web application with React frontend, Node JS backend and cloud deployment.',
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
      name: 'Website Development Company Mumbai',
      item: `${SITE.url}/website-development-company-in-mumbai`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Best Website Design and Development Company in Mumbai',
      item: `${SITE.url}/best-website-design-and-development-company-in-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best website design and development company in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Mumbai's best website design and development companies — 565+ projects delivered, 4.9★ Google rating, branch office in Thane West. We build high performance, modern and scalable websites with custom design and Next JS development.",
      },
    },
    {
      '@type': 'Question',
      name: 'What makes NNC the best website design and development company in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC stands out as Mumbai's best website design and development company because design and development are handled by the same in-house team — no handoff issues, consistent quality, PageSpeed 90+ guaranteed, fixed pricing and a branch office in Thane West where clients can meet the team in person.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does website design and development cost in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A custom business website design and development starts from ₹24,999. A scalable web application starts from ₹75,000. All projects are fixed-price — fully scoped before work begins with no surprise invoices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build high performance websites in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds high performance websites using Next JS — server-side rendering, static generation, image optimisation, code splitting and lazy loading. PageSpeed 90+ on mobile and desktop is contractually guaranteed on every project.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build scalable website solutions in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. NNC builds scalable website solutions for Mumbai businesses — clean code architecture, API-driven content, modular components and AWS cloud deployment that scales from launch-day traffic through to thousands of concurrent users.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle both website design and development under one roof in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC handles design and development in-house — Figma UI design, Next JS or React development, backend APIs, database architecture and cloud deployment. Single team, single contract, single point of accountability for your entire Mumbai website.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does NNC have a website design and development office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to review design mockups, see live development builds and meet the team.',
      },
    },
  ],
}

const data = {
  badge: 'Best Website Design & Development · Mumbai',
  h1: 'Best Website Design & Development',
  h1Accent: 'Company in Mumbai',
  tagline:
    'Best website design and development company in Mumbai — high performance, modern and scalable websites built by an in-house team. Custom design, Next JS development, PageSpeed 90+. Office in Thane West. Fixed price.',
  desc:
    "NNC Digital is the best website design and development company in Mumbai — building high performance, modern and scalable websites for startups, SMEs and enterprises across Mumbai, Thane and Navi Mumbai. Our in-house team handles everything from custom Figma UI design to Next JS development, backend APIs and cloud deployment — delivering websites that look exceptional, load fast and scale with your business growth.",
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'website design and development in Mumbai',
  h2Features: 'Website Design & Development Services in Mumbai',
  features: [
    {
      h3: 'Custom Website Design Mumbai',
      desc: 'Fully custom website designs built in Figma — no templates, no page builders. Brand-aligned modern UI with mobile-first responsiveness and conversion-optimised layouts for Mumbai businesses.',
    },
    {
      h3: 'High Performance Website Development Mumbai',
      desc: 'High performance website development with Next JS — SSR, SSG, image optimisation, code splitting and lazy loading. PageSpeed 90+ on mobile and desktop guaranteed on every Mumbai project.',
    },
    {
      h3: 'Scalable Web Application Development Mumbai',
      desc: 'Scalable web applications for Mumbai businesses — React JS frontend, Node JS backend, REST APIs, MongoDB or PostgreSQL database and AWS cloud deployment that handles growth seamlessly.',
    },
    {
      h3: 'Corporate Website Design & Development Mumbai',
      desc: 'Corporate website design and development for Mumbai companies — enterprise-level UI, multi-page architecture, CMS integration and service pages built to convert visitors into leads.',
    },
    {
      h3: 'Ecommerce Website Design & Development Mumbai',
      desc: 'Ecommerce website design and development for Mumbai online stores — custom UI, Shopify or WooCommerce development, Razorpay/UPI integration and conversion-optimised product and checkout pages.',
    },
    {
      h3: 'Landing Page Design & Development Mumbai',
      desc: 'High converting landing pages — custom UI design and fast-loading Next JS development with lead capture forms, A/B test-ready structure and clear CTAs for Google Ads and Meta Ads campaigns.',
    },
    {
      h3: 'UI UX Design & Frontend Development Mumbai',
      desc: 'UI UX design and frontend development by the same in-house team — Figma wireframes, interactive prototypes, React JS implementation and pixel-perfect design-to-code handoff for Mumbai projects.',
    },
    {
      h3: 'Website Redesign Mumbai',
      desc: 'Full website redesign for Mumbai businesses — modern design, improved UX, Next JS rebuild, Core Web Vitals fixes and PageSpeed 90+ without disrupting your existing SEO rankings.',
    },
    {
      h3: 'Website Maintenance & Support Mumbai',
      desc: 'Ongoing website maintenance and support — bug fixes, content updates, security patches, performance monitoring and feature additions for Mumbai businesses after launch.',
    },
  ],
  h2Why: 'Why NNC is the Best Website Design & Development Company in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — meet the team in person',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to review design mockups, see live development builds and meet the designers and developers building your website.',
    },
    {
      n: '02',
      h3: 'Design + development under one roof',
      body: "NNC handles design and development in-house — same team, same contract. No handoff issues between separate design and dev agencies. Your website goes from Figma mockup to live Next JS site by Mumbai's best.",
    },
    {
      n: '03',
      h3: 'High performance — PageSpeed 90+ guaranteed',
      body: 'Every NNC website achieves PageSpeed 90+ on mobile and desktop. Core Web Vitals compliance and high performance architecture are written into every delivery contract — not a best-effort claim.',
    },
    {
      n: '04',
      h3: 'Modern & scalable — Next JS, React, Node JS',
      body: "NNC builds with the modern web stack — Next JS 14, React 18, TypeScript, Node JS and AWS. Scalable, maintainable code that grows with your Mumbai business without costly rewrites.",
    },
    {
      n: '05',
      h3: 'Fixed price — fully scoped before work starts',
      body: 'Every project is scoped and priced upfront — design, development, SEO setup and deployment all included. No hourly billing, no scope creep charges, no surprise invoices.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has built websites for startups, ecommerce brands, SaaS companies and enterprises across Mumbai. 4.9★ rated on Google — verified by real Mumbai clients.',
    },
  ],
  techStack: ['Figma', 'Next JS', 'React JS', 'Node JS', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'AWS'],
  h2Tech: 'Website Design & Development Technology Stack',
  h2Faq: 'Best Website Design & Development Company Mumbai — FAQs',
  faqs: [
    {
      q: 'Which is the best website design and development company in Mumbai?',
      a: "NNC Digital — 565+ projects, 4.9★ Google rating, office in Thane West. High performance, modern and scalable websites with custom design and Next JS development.",
    },
    {
      q: 'How much does website design and development cost in Mumbai?',
      a: 'A custom business website starts from ₹24,999. A scalable web application starts from ₹75,000. All fixed-price — fully scoped before work begins.',
    },
    {
      q: 'Do you build high performance websites in Mumbai?',
      a: 'Yes. NNC builds high performance websites with Next JS — PageSpeed 90+ on mobile and desktop guaranteed in every delivery contract.',
    },
    {
      q: 'Do you handle both design and development in-house in Mumbai?',
      a: 'Yes. Same team handles Figma UI design and Next JS development — no handoff issues, consistent quality, single contract.',
    },
    {
      q: 'Do you build scalable website solutions in Mumbai?',
      a: 'Yes. NNC builds scalable websites with clean architecture, modular components and AWS cloud deployment that grows with your business.',
    },
    {
      q: 'Do you have a website design and development office in Mumbai?',
      a: 'Yes. NNC has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to review designs and meet the team.',
    },
  ],
}

export default function BestWebsiteDesignDevelopmentMumbaiPage() {
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
