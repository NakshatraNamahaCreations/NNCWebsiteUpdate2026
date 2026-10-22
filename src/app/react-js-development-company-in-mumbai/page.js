import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'React JS Development Company in Mumbai | Interactive Website',
  description:
    'We are the best React JS development company in Mumbai to build fast and scalable web apps, with NNC delivering modern UI and high performance solutions.',
  alternates: {
    canonical: `${SITE.url}/react-js-development-company-in-mumbai`,
  },
  keywords:
    'react js development company in mumbai, react js development mumbai, react js developers mumbai, react js web development mumbai, hire react js developers mumbai, react js frontend development mumbai, react js web app mumbai, reactjs company mumbai, react js agency mumbai',
  openGraph: {
    title: 'React JS Development Company in Mumbai | Interactive Website',
    description:
      'We are the best React JS development company in Mumbai to build fast and scalable web apps, with NNC delivering modern UI and high performance solutions.',
    url: `${SITE.url}/react-js-development-company-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'React JS Development Company in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'React JS Development Company in Mumbai | Interactive Website',
    description:
      'We are the best React JS development company in Mumbai to build fast and scalable web apps, with NNC delivering modern UI and high performance solutions.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'React JS Development Company in Mumbai',
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
    'React JS Development',
    'React JS Web Application',
    'React JS Frontend Development',
    'React JS UI Development',
    'Single Page Application Development',
    'React JS Dashboard Development',
  ],
  description:
    'React JS development company in Mumbai — fast and scalable web apps, modern UI and high performance solutions for Mumbai businesses. Branch office in Thane West.',
  url: `${SITE.url}/react-js-development-company-in-mumbai`,
  offers: [
    {
      '@type': 'Offer',
      name: 'React JS Website Mumbai',
      price: '24999',
      priceCurrency: 'INR',
      description: 'Custom React JS website with modern UI, SEO setup and PageSpeed 90+.',
    },
    {
      '@type': 'Offer',
      name: 'React JS Web Application Mumbai',
      price: '75000',
      priceCurrency: 'INR',
      description: 'Full React JS web application with backend API, user auth and dashboard.',
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
      name: 'React JS Development Company in Mumbai',
      item: `${SITE.url}/react-js-development-company-in-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best React JS development company in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Mumbai's top-rated React JS development companies — 565+ projects delivered, 4.9★ Google rating, branch office in Thane West. We build fast and scalable React JS web apps with modern UI and high performance solutions.",
      },
    },
    {
      '@type': 'Question',
      name: 'What React JS development services does NNC provide in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Mumbai provides full React JS development services — custom React JS websites, single page applications (SPAs), React JS web applications, admin dashboards, React JS frontend for Node JS backends, component libraries and React JS migration from legacy frameworks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why choose React JS for web development in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'React JS is the most widely used frontend library — component-based architecture, virtual DOM for high performance rendering, huge ecosystem and excellent developer tooling. For Mumbai businesses it means fast interactive websites, reusable components and easy scalability as your product grows.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build React JS web applications in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds React JS web applications for Mumbai businesses — SPAs, dashboards, portals, SaaS frontends and admin panels. Connected to Node JS or any REST API backend with authentication, state management (Redux/Context) and responsive design.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does React JS development cost in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A React JS website starts from ₹24,999. A React JS web application starts from ₹75,000. All projects are fixed-price — no hourly billing, fully scoped before development begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I hire dedicated React JS developers in Mumbai from NNC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can hire dedicated React JS developers from NNC Mumbai on a project or retainer basis. All are full-time NNC employees — not freelancers. Meet them at our Thane West, Mumbai office.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a React JS development office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to review React JS prototypes and meet the frontend development team.',
      },
    },
  ],
}

const data = {
  badge: 'React JS Development · Mumbai',
  h1: 'React JS Development Company',
  h1Accent: 'in Mumbai',
  tagline:
    'Best React JS development company in Mumbai — fast and scalable web apps, interactive UIs and high performance solutions. Custom React JS websites and web applications. Office in Thane West. Fixed price.',
  desc:
    'NNC Digital is a React JS development company in Mumbai building fast, scalable and interactive web applications for startups, SMEs and enterprises across Mumbai, Thane and Navi Mumbai. From custom React JS websites and single page applications to complex dashboards and SaaS frontends — every project is built by our in-house React JS developers with modern UI design, high performance architecture and zero outsourcing.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'React JS development in Mumbai',
  h2Features: 'React JS Development Services in Mumbai',
  features: [
    {
      h3: 'Custom React JS Website Mumbai',
      desc: 'Custom React JS websites built from scratch — no templates, no WordPress. Component-based architecture, SEO-friendly structure, PageSpeed 90+ and mobile-first responsive design for Mumbai businesses.',
    },
    {
      h3: 'React JS Web Application Mumbai',
      desc: 'React JS single page applications (SPAs) and web apps — user authentication, state management (Redux/Zustand/Context API), REST API integration and responsive UI for Mumbai products and platforms.',
    },
    {
      h3: 'React JS Dashboard Development Mumbai',
      desc: 'Admin dashboards and analytics portals built with React JS — data visualisation (Recharts/D3), role-based access control, real-time updates and complex table/form interfaces for Mumbai businesses.',
    },
    {
      h3: 'React JS Frontend Development Mumbai',
      desc: 'React JS frontend development for existing backends — connecting your Node JS, Python or PHP API to a modern, fast React JS interface. Clean component architecture, TypeScript and full test coverage.',
    },
    {
      h3: 'React JS SaaS Development Mumbai',
      desc: 'React JS frontend for SaaS products — multi-tenant UI, subscription billing flows, onboarding wizards, settings panels and feature-flagged interfaces for Mumbai SaaS startups and scale-ups.',
    },
    {
      h3: 'Interactive UI Development Mumbai',
      desc: 'High-fidelity interactive UIs with React JS — animations (Framer Motion), drag-and-drop interfaces, infinite scroll, real-time updates via WebSocket and smooth transitions that delight Mumbai users.',
    },
    {
      h3: 'React JS Performance Optimisation Mumbai',
      desc: 'React JS performance optimisation — code splitting, lazy loading, memoisation, bundle size reduction, Core Web Vitals improvement and PageSpeed 90+ for existing React JS applications.',
    },
    {
      h3: 'React JS Migration Mumbai',
      desc: 'Migration from legacy frameworks (jQuery, Angular, Vue) to React JS for Mumbai businesses — component-by-component migration strategy that keeps your application live throughout the transition.',
    },
    {
      h3: 'Hire React JS Developers Mumbai',
      desc: 'Hire dedicated React JS developers from NNC Mumbai on a project or retainer basis. All are full-time frontend engineers — not freelancers. Meet them at our Thane West branch office.',
    },
  ],
  h2Why: 'Why Choose NNC as Your React JS Development Company in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — review UI in person',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to review React JS prototypes on screen, walk through component designs and meet the frontend developers building your application.',
    },
    {
      n: '02',
      h3: 'Modern React JS stack — hooks, TypeScript, Vite',
      body: 'NNC builds with the modern React JS ecosystem — React 18, functional components with hooks, TypeScript for type safety, Vite for fast builds and Tailwind CSS or styled-components for design systems.',
    },
    {
      n: '03',
      h3: 'Full-stack capability — React JS + Node JS',
      body: 'NNC builds complete full-stack applications — React JS frontend connected to Node JS or Next JS backend. Single team, single contract, single point of accountability for your entire Mumbai web application.',
    },
    {
      n: '04',
      h3: 'PageSpeed 90+ — contractually guaranteed',
      body: 'Every React JS website and web application is optimised for Core Web Vitals and PageSpeed 90+ on mobile and desktop. Written into the delivery contract — not just a best effort.',
    },
    {
      n: '05',
      h3: 'Fixed price — fully scoped before development starts',
      body: 'Every React JS project is scoped in detail and priced upfront. No hourly billing, no scope creep charges. You know the exact cost, timeline and feature list before development begins.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has built React JS websites and web applications for startups, SaaS companies, ecommerce brands and enterprises across Mumbai. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['React JS', 'TypeScript', 'Next JS', 'Redux', 'Tailwind CSS', 'Node JS', 'Vite', 'Framer Motion'],
  h2Tech: 'React JS Development Technology Stack',
  h2Faq: 'React JS Development Company Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best React JS development company in Mumbai?',
      a: "NNC Digital is among Mumbai's top React JS development companies — 565+ projects, 4.9★ Google rating, branch office in Thane West. Fast and scalable React JS web apps with modern UI and high performance solutions.",
    },
    {
      q: 'Do you build React JS web applications in Mumbai?',
      a: 'Yes. NNC builds React JS SPAs, dashboards, portals and SaaS frontends — connected to Node JS backend with auth, state management and responsive design. Fixed-price, no hourly billing.',
    },
    {
      q: 'How much does React JS development cost in Mumbai?',
      a: 'A React JS website starts from ₹24,999. A React JS web application starts from ₹75,000. All fixed-price — fully scoped upfront.',
    },
    {
      q: 'Can I hire dedicated React JS developers in Mumbai?',
      a: 'Yes. Hire dedicated React JS developers from NNC Mumbai on a project or retainer basis. All are full-time NNC employees — not freelancers. Meet them at our Thane West office.',
    },
    {
      q: 'Do you guarantee PageSpeed 90+ for React JS projects in Mumbai?',
      a: 'Yes. PageSpeed 90+ on mobile and desktop is written into every delivery contract. We optimise Core Web Vitals, bundle size and loading performance before handover.',
    },
    {
      q: 'Do you have a React JS development office in Mumbai?',
      a: 'Yes. NNC has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to review React JS prototypes and meet the frontend team.',
    },
  ],
}

export default function ReactJsDevelopmentCompanyMumbaiPage() {
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
