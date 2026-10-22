import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Software Development Company in Bangalore | IT Softwares',
  description:
    'We are the best software development company in Bangalore to build scalable web and mobile solutions, with NNC delivering secure, high performance applications.',
  alternates: {
    canonical: `${SITE.url}/software-development-company-in-bangalore`,
  },
  keywords:
    'software development company in bangalore, it software company bangalore, custom software development bangalore, software development services bangalore, web application development bangalore, software company bangalore, enterprise software development bangalore, saas development company bangalore, software developers bangalore',
  openGraph: {
    title: 'Software Development Company in Bangalore | IT Softwares',
    description:
      'We are the best software development company in Bangalore to build scalable web and mobile solutions, with NNC delivering secure, high performance applications.',
    url: `${SITE.url}/software-development-company-in-bangalore`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Software Development Company in Bangalore – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Software Development Company in Bangalore | IT Softwares',
    description:
      'We are the best software development company in Bangalore to build scalable web and mobile solutions, with NNC delivering secure, high performance applications.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Software Development Company in Bangalore',
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
    'Software Development',
    'Custom Software Development',
    'Web Application Development',
    'Enterprise Software Development',
    'SaaS Development',
    'IT Software Solutions',
  ],
  description:
    'Software development company in Bangalore — custom software development, web application development, enterprise software, SaaS development and IT software solutions for Bangalore businesses.',
  url: `${SITE.url}/software-development-company-in-bangalore`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Custom Software Development Bangalore',
      price: '75000',
      priceCurrency: 'INR',
      description: 'Custom software development — requirement analysis, architecture design, development, testing and deployment.',
    },
    {
      '@type': 'Offer',
      name: 'Enterprise Software Development Bangalore',
      price: '200000',
      priceCurrency: 'INR',
      description: 'Enterprise software platform — multi-role access, integrations, dashboards and dedicated infrastructure.',
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
      name: 'CRM Software Development Bangalore',
      item: `${SITE.url}/crm-software-development-company-in-bangalore`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Software Development Company in Bangalore',
      item: `${SITE.url}/software-development-company-in-bangalore`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best software development company in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Bangalore's top-rated software development companies — 565+ projects delivered, 4.9★ Google rating, headquartered in Whitefield, Bangalore. We build custom software, web applications, enterprise platforms and SaaS products for Bangalore businesses.",
      },
    },
    {
      '@type': 'Question',
      name: 'What software development services does NNC provide in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Bangalore provides full software development services — custom software development, web application development, enterprise software, SaaS product development, API development, CRM software, ERP systems and software maintenance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build custom software for Bangalore businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds custom software tailored to specific business processes for Bangalore companies — requirement analysis, architecture design, development, QA testing and deployment. Fixed-price projects with complete source code ownership.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build web applications in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds web applications for Bangalore businesses — React JS or Next JS frontend, Node JS backend, REST APIs, database design and cloud deployment on AWS. Scalable, secure and performant web applications for any industry.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you develop SaaS products in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds SaaS products for Bangalore startups and enterprises — multi-tenant architecture, subscription billing, role-based access control, API integrations and scalable cloud infrastructure. From MVP to production-ready SaaS platform.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does custom software development cost in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Custom software development in Bangalore starts from ₹75,000 for focused business applications. Enterprise software platforms start from ₹2,00,000. All projects are fixed-price — fully scoped before development begins with no hourly billing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a software development office in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital is headquartered at Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit us to discuss your software requirements, review architecture plans and meet the development team building your application.',
      },
    },
  ],
}

const data = {
  badge: 'Software Development · Bangalore',
  h1: 'Software Development Company',
  h1Accent: 'in Bangalore',
  tagline:
    'Best software development company in Bangalore — custom software development, web application development, enterprise software, SaaS development & IT software solutions. Fixed price. Source code yours.',
  desc:
    'NNC Digital is a full-service software development company in Bangalore building custom software, web applications, enterprise platforms and SaaS products for startups, SMEs and large enterprises. Every project is developed by our in-house Bangalore software team — requirement analysis, UI/UX design, backend development, QA testing and cloud deployment — with zero outsourcing, fixed-price contracts and complete source code ownership on delivery.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'software development in Bangalore',
  h2Features: 'Software Development Services in Bangalore',
  features: [
    {
      h3: 'Custom Software Development Bangalore',
      desc: 'Custom software built around your exact business processes — workflow automation, data management, reporting dashboards and integrations with existing systems. Fully owned by you with complete source code delivery.',
    },
    {
      h3: 'Web Application Development Bangalore',
      desc: 'Web application development for Bangalore businesses — React JS or Next JS frontend, Node JS REST APIs, PostgreSQL or MongoDB database and AWS cloud deployment. Fast, scalable and secure web applications.',
    },
    {
      h3: 'Enterprise Software Development Bangalore',
      desc: 'Enterprise software for large Bangalore organisations — multi-role platforms, ERP systems, workflow engines, approval hierarchies and integrations with SAP, Salesforce, Tally and other enterprise tools.',
    },
    {
      h3: 'SaaS Product Development Bangalore',
      desc: 'SaaS product development for Bangalore startups — multi-tenant architecture, subscription billing (Razorpay/Stripe), role-based access, onboarding flows and scalable AWS infrastructure. From MVP to full product.',
    },
    {
      h3: 'API Development & Integration Bangalore',
      desc: 'REST API development and third-party integration for Bangalore businesses — payment gateways, CRM systems, ERP platforms, logistics APIs, SMS/email services and custom webhook integrations.',
    },
    {
      h3: 'CRM Software Development Bangalore',
      desc: 'Custom CRM software for Bangalore businesses — lead management, sales pipeline, customer communication, task automation and reporting dashboards built to your specific sales process.',
    },
    {
      h3: 'ERP Software Development Bangalore',
      desc: 'ERP system development for Bangalore companies — inventory management, purchase orders, invoicing, HR and payroll modules built as an integrated platform for operations management.',
    },
    {
      h3: 'Software Maintenance & Support Bangalore',
      desc: 'Ongoing software maintenance for Bangalore businesses — bug fixes, performance optimisation, security updates, feature additions and platform upgrades for existing web applications and software systems.',
    },
    {
      h3: 'Software Consulting Bangalore',
      desc: 'Software architecture consulting for Bangalore businesses — technology stack selection, system design, database architecture, API strategy and cloud infrastructure planning before development begins.',
    },
  ],
  h2Why: 'Why Choose NNC as Your Software Development Company in Bangalore?',
  why: [
    {
      n: '01',
      h3: 'Bangalore headquarters — meet the team in person',
      body: 'NNC is headquartered at Prestige Shantiniketan, Whitefield, Bangalore. Visit us to review software architecture, walk through wireframes and meet the developers building your application.',
    },
    {
      n: '02',
      h3: 'In-house development team — zero outsourcing',
      body: 'Every software developer, UI/UX designer, QA engineer and DevOps specialist is a full-time NNC employee in Bangalore. Consistent team from requirements to launch — no freelancers, no offshore outsourcing.',
    },
    {
      n: '03',
      h3: 'Modern tech stack — React, Node JS, AWS',
      body: 'NNC builds on a modern, proven technology stack — React JS, Next JS, Node JS, PostgreSQL, MongoDB and AWS. Scalable architecture that supports growth from 100 to 100,000 users without a rewrite.',
    },
    {
      n: '04',
      h3: 'Fixed price — fully scoped before development starts',
      body: 'Every software project is scoped in detail and priced upfront. No hourly billing, no scope creep charges. You know the exact cost, timeline and feature list before a single line of code is written.',
    },
    {
      n: '05',
      h3: 'Source code ownership — complete, no lock-in',
      body: 'You own 100% of the source code, database schema and infrastructure credentials on delivery. No licensing fees, no platform lock-in. Hand the code to any developer or team at any time.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has built software for startups, healthcare companies, logistics businesses, SaaS founders and enterprises across Bangalore. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['React JS', 'Next JS', 'Node JS', 'PostgreSQL', 'MongoDB', 'AWS', 'TypeScript', 'Docker'],
  h2Tech: 'Software Development Technology Stack',
  h2Faq: 'Software Development Company Bangalore — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best software development company in Bangalore?',
      a: "NNC Digital is among Bangalore's top software development companies — 565+ projects, 4.9★ Google rating, headquartered in Whitefield. Custom software, web applications, SaaS and enterprise platforms — all in-house.",
    },
    {
      q: 'Do you build custom software in Bangalore?',
      a: 'Yes. NNC builds custom software for Bangalore businesses — tailored to your exact processes with full source code ownership. Fixed-price, no hourly billing.',
    },
    {
      q: 'Do you build web applications in Bangalore?',
      a: 'Yes. NNC builds web applications — React JS/Next JS frontend, Node JS APIs, cloud deployment on AWS. Scalable and secure for any industry.',
    },
    {
      q: 'Do you develop SaaS products in Bangalore?',
      a: 'Yes. NNC builds SaaS products — multi-tenant architecture, subscription billing, role-based access and scalable AWS infrastructure. MVP to full product.',
    },
    {
      q: 'How much does custom software development cost in Bangalore?',
      a: 'Custom software starts from ₹75,000. Enterprise platforms start from ₹2,00,000. All fixed-price — fully scoped upfront.',
    },
    {
      q: 'Do you have a software development office in Bangalore?',
      a: 'Yes. NNC is headquartered at Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit us to discuss your project and meet the development team.',
    },
  ],
}

export default function SoftwareDevelopmentCompanyBangalorePage() {
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
