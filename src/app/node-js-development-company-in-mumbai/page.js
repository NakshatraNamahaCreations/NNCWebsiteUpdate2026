import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Node JS Development Company in Mumbai | Backend Development',
  description:
    'Choose a Node JS development company in Mumbai to build scalable backend systems, with NNC delivering high performance APIs and web applications for business.',
  alternates: {
    canonical: `${SITE.url}/node-js-development-company-in-mumbai`,
  },
  keywords:
    'node js development company in mumbai, node js development mumbai, node js developers mumbai, backend development company mumbai, nodejs development mumbai, node js api development mumbai, hire node js developers mumbai, node js web application mumbai, express js development mumbai',
  openGraph: {
    title: 'Node JS Development Company in Mumbai | Backend Development',
    description:
      'Choose a Node JS development company in Mumbai to build scalable backend systems, with NNC delivering high performance APIs and web applications for business.',
    url: `${SITE.url}/node-js-development-company-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Node JS Development Company in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Node JS Development Company in Mumbai | Backend Development',
    description:
      'Choose a Node JS development company in Mumbai to build scalable backend systems, with NNC delivering high performance APIs and web applications for business.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Node JS Development Company in Mumbai',
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
    'Node JS Development',
    'Backend Development',
    'API Development',
    'Express JS Development',
    'REST API Development',
    'Node JS Web Application',
    'Microservices Development',
  ],
  description:
    'Node JS development company in Mumbai — scalable backend systems, high performance REST APIs, web applications and microservices for Mumbai businesses. Branch office in Thane West.',
  url: `${SITE.url}/node-js-development-company-in-mumbai`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Node JS API Development Mumbai',
      price: '50000',
      priceCurrency: 'INR',
      description: 'REST API development with Node JS and Express JS — authentication, database integration and deployment.',
    },
    {
      '@type': 'Offer',
      name: 'Node JS Web Application Mumbai',
      price: '100000',
      priceCurrency: 'INR',
      description: 'Full-stack Node JS web application with React JS frontend, REST APIs, database and AWS deployment.',
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
      name: 'Software Development Company Mumbai',
      item: `${SITE.url}/software-development-company-in-mumbai`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Node JS Development Company in Mumbai',
      item: `${SITE.url}/node-js-development-company-in-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best Node JS development company in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Mumbai's top-rated Node JS development companies — 565+ projects delivered, 4.9★ Google rating, branch office in Thane West. We build scalable backend systems, high performance REST APIs and web applications for Mumbai businesses.",
      },
    },
    {
      '@type': 'Question',
      name: 'What Node JS development services does NNC provide in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Mumbai provides full Node JS development services — REST API development, Express JS backend, GraphQL APIs, microservices architecture, real-time applications with WebSockets, database integration (MongoDB, PostgreSQL) and AWS cloud deployment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why choose Node JS for backend development in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Node JS is ideal for scalable backend systems — non-blocking I/O handles thousands of concurrent requests efficiently, making it perfect for APIs, real-time apps and microservices. For Mumbai businesses that need fast, scalable and cost-effective backend development, Node JS is the right choice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build REST APIs with Node JS in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds high performance REST APIs with Node JS and Express JS for Mumbai businesses — authentication (JWT/OAuth), database integration, third-party API connections, rate limiting and full API documentation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Node JS development cost in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A REST API backend with Node JS starts from ₹50,000. A full-stack Node JS web application starts from ₹1,00,000. All projects are fixed-price — no hourly billing, fully scoped before development begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I hire dedicated Node JS developers in Mumbai from NNC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can hire dedicated Node JS developers from NNC Mumbai on a project or retainer basis. All are full-time NNC employees — not freelancers. Meet them at our Thane West, Mumbai office.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a Node JS development office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to discuss your backend requirements and meet the Node JS development team.',
      },
    },
  ],
}

const data = {
  badge: 'Node JS Development · Mumbai',
  h1: 'Node JS Development Company',
  h1Accent: 'in Mumbai',
  tagline:
    'Node JS development company in Mumbai — scalable backend systems, high performance REST APIs, web applications and microservices. Fixed price. Branch office in Thane West.',
  desc:
    'NNC Digital is a Node JS development company in Mumbai building scalable backend systems, high performance REST APIs and web applications for startups, SMEs and enterprises across Mumbai, Thane and Navi Mumbai. Every Node JS project is developed by our in-house backend engineers — API development, database architecture, cloud deployment and microservices — with zero outsourcing, fixed-price contracts and complete source code ownership on delivery.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'Node JS development in Mumbai',
  h2Features: 'Node JS Development Services in Mumbai',
  features: [
    {
      h3: 'REST API Development Mumbai',
      desc: 'High performance REST API development with Node JS and Express JS — JWT/OAuth authentication, database integration (MongoDB/PostgreSQL), rate limiting, versioning and full API documentation for Mumbai businesses.',
    },
    {
      h3: 'Express JS Backend Development Mumbai',
      desc: 'Express JS backend development — middleware architecture, route handling, request validation, error handling and modular codebase structure. Fast, lightweight and production-ready backends for Mumbai applications.',
    },
    {
      h3: 'Node JS Web Application Mumbai',
      desc: 'Full-stack Node JS web applications — React JS or Next JS frontend connected to a Node JS backend with REST APIs, database integration, user authentication and AWS cloud deployment.',
    },
    {
      h3: 'Microservices Development Mumbai',
      desc: 'Microservices architecture with Node JS — service decomposition, inter-service communication (REST/gRPC), Docker containerisation, Kubernetes orchestration and AWS deployment for scalable Mumbai platforms.',
    },
    {
      h3: 'Real-time Application Development Mumbai',
      desc: 'Real-time applications with Node JS and WebSockets — live chat, notifications, dashboards, collaborative tools and real-time data streaming for Mumbai businesses that need instant data updates.',
    },
    {
      h3: 'GraphQL API Development Mumbai',
      desc: 'GraphQL API development with Node JS — schema design, resolvers, subscriptions for real-time data and efficient data fetching that eliminates over-fetching and under-fetching for Mumbai frontend teams.',
    },
    {
      h3: 'Node JS Database Integration Mumbai',
      desc: 'Database integration with Node JS — MongoDB (Mongoose), PostgreSQL (Sequelize/Prisma), Redis for caching, Elasticsearch for search and database optimisation for high-traffic Mumbai applications.',
    },
    {
      h3: 'Node JS Cloud Deployment Mumbai',
      desc: 'Node JS application deployment on AWS — EC2, Lambda (serverless), ECS with Docker, load balancing, auto-scaling, CI/CD pipelines and monitoring setup for Mumbai production environments.',
    },
    {
      h3: 'Hire Node JS Developers Mumbai',
      desc: 'Hire dedicated Node JS developers from NNC Mumbai on a project or retainer basis. All are full-time backend engineers — not freelancers. Meet them at our Thane West branch office.',
    },
  ],
  h2Why: 'Why Choose NNC as Your Node JS Development Company in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — meet backend engineers in person',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to review API architecture, walk through database design and meet the Node JS developers building your backend systems.',
    },
    {
      n: '02',
      h3: 'In-house Node JS team — zero outsourcing',
      body: 'Every Node JS developer, database architect and DevOps engineer is a full-time NNC employee. Consistent backend team from API design to production deployment — no freelancers, no offshore contractors.',
    },
    {
      n: '03',
      h3: 'Scalable architecture from day one',
      body: 'NNC designs Node JS backends for scale — proper separation of concerns, connection pooling, caching strategies and horizontal scaling patterns that support growth from 100 to 1,000,000 requests per day.',
    },
    {
      n: '04',
      h3: 'Full-stack capability — React + Node JS',
      body: 'NNC builds complete full-stack applications — React JS or Next JS frontend connected to Node JS backends. Single team, single contract, single point of accountability for your entire Mumbai web application.',
    },
    {
      n: '05',
      h3: 'Fixed price — fully scoped before development starts',
      body: 'Every Node JS project is scoped in detail and priced upfront. No hourly billing, no scope creep charges. You know the exact cost, timeline and deliverables before a single line of code is written.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has built backend systems for startups, SaaS companies, ecommerce platforms and enterprises across Mumbai. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['Node JS', 'Express JS', 'MongoDB', 'PostgreSQL', 'Redis', 'AWS', 'Docker', 'GraphQL'],
  h2Tech: 'Node JS Development Technology Stack',
  h2Faq: 'Node JS Development Company Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best Node JS development company in Mumbai?',
      a: "NNC Digital is among Mumbai's top Node JS development companies — 565+ projects, 4.9★ Google rating, branch office in Thane West. Scalable backend systems, REST APIs and web applications — all in-house.",
    },
    {
      q: 'Do you build REST APIs with Node JS in Mumbai?',
      a: 'Yes. NNC builds high performance REST APIs with Node JS and Express JS — JWT authentication, database integration, rate limiting and full API documentation. Fixed-price, no hourly billing.',
    },
    {
      q: 'Do you build full-stack applications with Node JS in Mumbai?',
      a: 'Yes. NNC builds full-stack applications — React JS/Next JS frontend connected to Node JS backend with database integration and AWS deployment. Single team, single contract.',
    },
    {
      q: 'How much does Node JS development cost in Mumbai?',
      a: 'A REST API backend starts from ₹50,000. A full-stack Node JS web application starts from ₹1,00,000. All fixed-price — fully scoped upfront.',
    },
    {
      q: 'Can I hire dedicated Node JS developers in Mumbai?',
      a: 'Yes. Hire dedicated Node JS developers from NNC Mumbai on a project or retainer basis. All are full-time NNC employees — not freelancers. Meet them at our Thane West office.',
    },
    {
      q: 'Do you have a Node JS development office in Mumbai?',
      a: 'Yes. NNC has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to discuss your backend requirements and meet the development team.',
    },
  ],
}

export default function NodeJsDevelopmentCompanyMumbaiPage() {
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
