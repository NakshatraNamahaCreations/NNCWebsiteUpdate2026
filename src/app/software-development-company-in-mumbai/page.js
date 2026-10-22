import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Software Development Company in Mumbai | Product Development',
  description:
    'Choose a software development company in Mumbai to build scalable and secure solutions, with NNC delivering custom software tailored to your business needs.',
  alternates: {
    canonical: `${SITE.url}/software-development-company-in-mumbai`,
  },
  keywords:
    'software development company in mumbai, it software company mumbai, custom software development mumbai, software development services mumbai, web application development mumbai, software company mumbai, enterprise software development mumbai, saas development company mumbai, software developers mumbai, software development agency mumbai',
  openGraph: {
    title: 'Software Development Company in Mumbai | Product Development',
    description:
      'Choose a software development company in Mumbai to build scalable and secure solutions, with NNC delivering custom software tailored to your business needs.',
    url: `${SITE.url}/software-development-company-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Software Development Company in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Software Development Company in Mumbai | Product Development',
    description:
      'Choose a software development company in Mumbai to build scalable and secure solutions, with NNC delivering custom software tailored to your business needs.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Software Development Company in Mumbai',
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
    { '@type': 'City', name: 'Powai' },
  ],
  serviceType: [
    'Software Development',
    'Custom Software Development',
    'Web Application Development',
    'Enterprise Software Development',
    'SaaS Development',
    'IT Software Solutions',
    'CRM Software Development',
    'ERP Software Development',
  ],
  description:
    'Custom software development company in Mumbai — web applications, enterprise software, SaaS products, CRM and ERP systems for Mumbai businesses. Branch office in Thane West. Fixed price. Zero outsourcing.',
  url: `${SITE.url}/software-development-company-in-mumbai`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Custom Software Development Mumbai',
      price: '75000',
      priceCurrency: 'INR',
      description: 'Custom software development — requirement analysis, architecture design, development, testing and deployment.',
    },
    {
      '@type': 'Offer',
      name: 'Enterprise Software Development Mumbai',
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
      name: 'Software Development Company in Bangalore',
      item: `${SITE.url}/software-development-company-in-bangalore`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Software Development Company in Mumbai',
      item: `${SITE.url}/software-development-company-in-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best software development company in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Mumbai's top-rated software development companies — 565+ projects delivered, 4.9★ Google rating, branch office in Thane West. We build custom software, web applications, enterprise platforms and SaaS products for Mumbai businesses.",
      },
    },
    {
      '@type': 'Question',
      name: 'What software development services does NNC provide in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Mumbai provides full software development services — custom software development, web application development, enterprise software, SaaS product development, API development, CRM software, ERP systems and software maintenance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build custom software for Mumbai businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds custom software tailored to specific business processes for Mumbai companies — requirement analysis, architecture design, development, QA testing and deployment. Fixed-price projects with complete source code ownership.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build web applications in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds web applications for Mumbai businesses — React JS or Next JS frontend, Node JS backend, REST APIs, database design and cloud deployment on AWS. Scalable, secure and performant web applications for any industry.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you develop SaaS products in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds SaaS products for Mumbai startups and enterprises — multi-tenant architecture, subscription billing, role-based access control, API integrations and scalable cloud infrastructure. From MVP to production-ready SaaS platform.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does custom software development cost in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Custom software development in Mumbai starts from ₹75,000 for focused business applications. Enterprise software platforms start from ₹2,00,000. All projects are fixed-price — fully scoped before development begins with no hourly billing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a software development office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to discuss your software requirements, review architecture plans and meet the development team building your application.',
      },
    },
  ],
}

const data = {
  badge: 'Software Development · Mumbai',
  h1: 'Software Development Company',
  h1Accent: 'in Mumbai',
  tagline:
    'Custom software development company in Mumbai — web applications, enterprise software, SaaS products, CRM and ERP systems. Fixed price. Source code yours. Branch office in Thane West.',
  desc:
    'NNC Digital is a full-service software development company in Mumbai building custom software, web applications, enterprise platforms and SaaS products for startups, SMEs and large enterprises across Mumbai, Thane and Navi Mumbai. Every project is developed by our in-house team — requirement analysis, UI/UX design, backend development, QA testing and cloud deployment — with zero outsourcing, fixed-price contracts and complete source code ownership on delivery. Visit our branch office in Thane West.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'software development in Mumbai',
  h2Features: 'Software Development Services in Mumbai',
  features: [
    {
      h3: 'Custom Software Development Mumbai',
      desc: 'Custom software built around your exact business processes — workflow automation, data management, reporting dashboards and integrations with existing systems. Fully owned by you with complete source code delivery.',
    },
    {
      h3: 'Web Application Development Mumbai',
      desc: 'Web application development for Mumbai businesses — React JS or Next JS frontend, Node JS REST APIs, PostgreSQL or MongoDB database and AWS cloud deployment. Fast, scalable and secure web applications.',
    },
    {
      h3: 'Enterprise Software Development Mumbai',
      desc: 'Enterprise software for large Mumbai organisations — multi-role platforms, ERP systems, workflow engines, approval hierarchies and integrations with SAP, Salesforce, Tally and other enterprise tools.',
    },
    {
      h3: 'SaaS Product Development Mumbai',
      desc: 'SaaS product development for Mumbai startups — multi-tenant architecture, subscription billing (Razorpay/Stripe), role-based access, onboarding flows and scalable AWS infrastructure. From MVP to full product.',
    },
    {
      h3: 'API Development & Integration Mumbai',
      desc: 'REST API development and third-party integration for Mumbai businesses — payment gateways, CRM systems, ERP platforms, logistics APIs, SMS/email services and custom webhook integrations.',
    },
    {
      h3: 'CRM Software Development Mumbai',
      desc: 'Custom CRM software for Mumbai businesses — lead management, sales pipeline, customer communication, task automation and reporting dashboards built to your specific sales process.',
    },
    {
      h3: 'ERP Software Development Mumbai',
      desc: 'ERP system development for Mumbai companies — inventory management, purchase orders, invoicing, HR and payroll modules built as an integrated platform for operations management.',
    },
    {
      h3: 'Software Maintenance & Support Mumbai',
      desc: 'Ongoing software maintenance for Mumbai businesses — bug fixes, performance optimisation, security updates, feature additions and platform upgrades for existing web applications and software systems.',
    },
    {
      h3: 'Software Consulting Mumbai',
      desc: 'Software architecture consulting for Mumbai businesses — technology stack selection, system design, database architecture, API strategy and cloud infrastructure planning before development begins.',
    },
  ],
  h2Why: 'Why Choose NNC as Your Software Development Company in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — meet the team in Thane West',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to review software architecture, walk through wireframes and meet the developers building your application in person.',
    },
    {
      n: '02',
      h3: 'In-house development team — zero outsourcing',
      body: 'Every software developer, UI/UX designer, QA engineer and DevOps specialist is a full-time NNC employee. Consistent team from requirements to launch — no freelancers, no offshore outsourcing.',
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
      body: 'NNC has built software for startups, healthcare companies, logistics businesses, SaaS founders and enterprises across Mumbai. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['React JS', 'Next JS', 'Node JS', 'PostgreSQL', 'MongoDB', 'AWS', 'TypeScript', 'Docker'],
  h2Tech: 'Software Development Technology Stack',
  h2Faq: 'Software Development Company Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best software development company in Mumbai?',
      a: "NNC Digital is among Mumbai's top software development companies — 565+ projects, 4.9★ Google rating, branch office in Thane West. Custom software, web applications, SaaS and enterprise platforms — all in-house.",
    },
    {
      q: 'Do you build custom software in Mumbai?',
      a: 'Yes. NNC builds custom software for Mumbai businesses — tailored to your exact processes with full source code ownership. Fixed-price, no hourly billing.',
    },
    {
      q: 'Do you build web applications in Mumbai?',
      a: 'Yes. NNC builds web applications — React JS/Next JS frontend, Node JS APIs, cloud deployment on AWS. Scalable and secure for any industry.',
    },
    {
      q: 'Do you develop SaaS products in Mumbai?',
      a: 'Yes. NNC builds SaaS products — multi-tenant architecture, subscription billing, role-based access and scalable AWS infrastructure. MVP to full product.',
    },
    {
      q: 'How much does custom software development cost in Mumbai?',
      a: 'Custom software starts from ₹75,000. Enterprise platforms start from ₹2,00,000. All fixed-price — fully scoped upfront.',
    },
    {
      q: 'Do you have a software development office in Mumbai?',
      a: 'Yes. NNC has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to discuss your project and meet the development team.',
    },
  ],
}

export default function SoftwareDevelopmentCompanyMumbaiPage() {
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
