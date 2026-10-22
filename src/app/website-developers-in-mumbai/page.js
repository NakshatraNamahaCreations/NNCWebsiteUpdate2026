import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Website Developers in Mumbai | High Performance Websites',
  description:
    'Choose our website developers in Mumbai to build fast and scalable websites, with NNC delivering modern development solutions tailored to your business needs.',
  alternates: {
    canonical: `${SITE.url}/website-developers-in-mumbai`,
  },
  keywords:
    'website developers in mumbai, website developer mumbai, web developers mumbai, hire website developers mumbai, best website developers mumbai, website development experts mumbai, web developer mumbai, full stack developers mumbai, professional website developers mumbai',
  openGraph: {
    title: 'Website Developers in Mumbai | High Performance Websites',
    description:
      'Choose our website developers in Mumbai to build fast and scalable websites, with NNC delivering modern development solutions tailored to your business needs.',
    url: `${SITE.url}/website-developers-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Website Developers in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Website Developers in Mumbai | High Performance Websites',
    description:
      'Choose our website developers in Mumbai to build fast and scalable websites, with NNC delivering modern development solutions tailored to your business needs.',
    images: [SITE.teamPhoto],
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://www.nakshatranamahacreations.com/website-developers-in-mumbai#localbusiness',
  name: 'Nakshatra Namaha Creations',
  legalName: 'Nakshatra Namaha Creations Private Limited',
  alternateName: 'NNC Digital Mumbai',
  description: 'Nakshatra Namaha Creations is a leading website development, mobile app development, CRM and digital marketing company in Thane West, Mumbai. React JS and Node JS development, Android and iOS apps, corporate video, 2D animation, SEO and B2B digital solutions delivered by a 35+ in-house team across 4 offices in India.',
  url: 'https://www.nakshatranamahacreations.com/website-developers-in-mumbai',
  mainEntityOfPage: 'https://www.nakshatranamahacreations.com/website-developers-in-mumbai',
  logo: 'https://www.nakshatranamahacreations.com/images/logo.png',
  image: ['https://www.nakshatranamahacreations.com/images/mumbai-office-exterior.jpg', 'https://www.nakshatranamahacreations.com/images/mumbai-office-interior.jpg', 'https://www.nakshatranamahacreations.com/images/mumbai-team.jpg'],
  telephone: '+91-85910-18808',
  email: 'info@nakshatranamahacreations.com',
  foundingDate: '2015-03-07',
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Credit Card, Debit Card, UPI, Bank Transfer',
  address: { '@type': 'PostalAddress', streetAddress: '#302, Lodha Signet, Kolshet Road, Kolshet Industrial Area', addressLocality: 'Thane West', addressRegion: 'Maharashtra', postalCode: '400607', addressCountry: 'IN' },
  geo: { '@type': 'GeoCoordinates', latitude: 19.2183, longitude: 72.9781 },
  hasMap: 'https://maps.google.com/?cid=11106432787787543210',
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '09:30', closes: '19:30' }],
  areaServed: [{ '@type': 'City', name: 'Thane West' }, { '@type': 'City', name: 'Thane East' }, { '@type': 'City', name: 'Mumbai' }, { '@type': 'Place', name: 'Kolshet' }, { '@type': 'Place', name: 'Ghodbunder Road' }, { '@type': 'Place', name: 'Mulund' }, { '@type': 'Place', name: 'Powai' }, { '@type': 'Place', name: 'Bandra Kurla Complex' }],
  serviceArea: { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 19.2183, longitude: 72.9781 }, geoRadius: '50000' },
  makesOffer: [{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Development' } }, { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development' } }, { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CRM and Custom Software Development' } }, { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Marketing and SEO' } }, { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '2D Animation and Corporate Video Production' } }, { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Graphic Design and Branding' } }, { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'B2B Marketing' } }],
  knowsAbout: ['React JS Development', 'Node JS Development', 'React Native App Development', 'Next.js Development', 'MongoDB', 'SEO', 'Google Ads', 'CRM Software', 'SaaS Platforms'],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '8', bestRating: '5', worstRating: '1' },
  sameAs: ['https://www.linkedin.com/in/harish-kashyap-65035678', 'https://www.instagram.com/nnc.digitalbengaluru', 'https://www.facebook.com/Nakshatranamahacreations'],
  parentOrganization: { '@type': 'Organization', name: 'Nakshatra Namaha Creations Private Limited', url: 'https://www.nakshatranamahacreations.com', founder: { '@type': 'Person', name: 'Harish Kashyap', jobTitle: 'Founder and Managing Director' } },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Website Developers in Mumbai',
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
    'Website Development',
    'Web Development',
    'Full Stack Development',
    'Frontend Development',
    'Backend Development',
    'Custom Website Development',
    'High Performance Website Development',
  ],
  description:
    'Website developers in Mumbai — fast and scalable websites with modern development solutions tailored to your business needs. In-house developers, branch office in Thane West.',
  url: `${SITE.url}/website-developers-in-mumbai`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Business Website Development Mumbai',
      price: '24999',
      priceCurrency: 'INR',
      description: 'Custom business website — Next JS/React, mobile responsive, PageSpeed 90+ and SEO setup.',
    },
    {
      '@type': 'Offer',
      name: 'Full Stack Web Application Mumbai',
      price: '75000',
      priceCurrency: 'INR',
      description: 'Full stack web application with React frontend, Node JS backend, database and cloud deployment.',
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
      name: 'Website Developers in Mumbai',
      item: `${SITE.url}/website-developers-in-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I find the best website developers in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital has among Mumbai's best website developers — 565+ projects delivered, 4.9★ Google rating, branch office in Thane West. Our in-house developers build fast and scalable websites with modern development solutions tailored to your business needs.",
      },
    },
    {
      '@type': 'Question',
      name: 'What do website developers at NNC build in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC's website developers in Mumbai build custom business websites, corporate websites, landing pages, web applications, ecommerce platforms, SaaS frontends and full stack solutions using Next JS, React JS and Node JS — all high performance, mobile responsive and PageSpeed 90+.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to hire website developers in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A custom business website starts from ₹24,999. A full stack web application starts from ₹75,000. All projects are fixed-price — fully scoped before development begins with no surprise invoices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do NNC website developers build high performance websites in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. NNC's website developers in Mumbai build high performance websites using Next JS and React — server-side rendering, static generation, image optimisation, code splitting and lazy loading. PageSpeed 90+ on mobile and desktop is contractually guaranteed.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do NNC website developers build scalable websites in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. NNC's Mumbai developers build scalable websites and web applications — clean code architecture, modular components, API-driven content and cloud deployment on AWS that scales with your business growth.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I hire dedicated website developers in Mumbai from NNC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can hire dedicated website developers from NNC Mumbai on a project or retainer basis. All are full-time NNC employees — not freelancers. Meet them at our Thane West, Mumbai office.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do NNC website developers have an office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to review development demos and meet the developers building your website.',
      },
    },
  ],
}

const data = {
  badge: 'Website Developers · Mumbai',
  h1: 'Website Developers',
  h1Accent: 'in Mumbai',
  tagline:
    'Expert website developers in Mumbai — fast, scalable and high performance websites with modern development solutions tailored to your business. Next JS, React, Node JS. Office in Thane West. Fixed price.',
  desc:
    "NNC Digital's website developers in Mumbai build fast, scalable and high performance websites for startups, SMEs and enterprises across Mumbai, Thane and Navi Mumbai. Our in-house development team delivers modern solutions using Next JS, React JS and Node JS — custom business websites, web applications, ecommerce platforms and full stack solutions with PageSpeed 90+, zero outsourcing and complete source code ownership on delivery.",
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'website development in Mumbai',
  h2Features: 'What Our Website Developers Build in Mumbai',
  features: [
    {
      h3: 'Custom Business Website Development Mumbai',
      desc: 'Custom business websites built from scratch with Next JS or React — no page builders, no templates. Fast load times, SEO-ready architecture, PageSpeed 90+ and mobile-first responsive design for Mumbai businesses.',
    },
    {
      h3: 'Corporate Website Development Mumbai',
      desc: 'Corporate website development for Mumbai companies — multi-page architecture, CMS integration, service pages, team sections and contact forms built to convert visitors into qualified leads.',
    },
    {
      h3: 'Full Stack Web Application Development Mumbai',
      desc: 'Full stack web applications — React JS or Next JS frontend connected to Node JS backend with REST APIs, database integration (MongoDB/PostgreSQL) and AWS cloud deployment for Mumbai businesses.',
    },
    {
      h3: 'High Performance Website Development Mumbai',
      desc: 'High performance websites for Mumbai businesses — server-side rendering, static site generation, image optimisation, code splitting and lazy loading. PageSpeed 90+ on mobile and desktop guaranteed.',
    },
    {
      h3: 'Landing Page Development Mumbai',
      desc: 'High converting landing pages for Mumbai ad campaigns — fast-loading, conversion-optimised with clear CTAs, lead capture forms and A/B test-ready architecture for Google Ads and Meta Ads.',
    },
    {
      h3: 'Ecommerce Website Development Mumbai',
      desc: 'Ecommerce website development for Mumbai online stores — Shopify, WooCommerce or custom-built platforms with Razorpay/UPI integration, product management and order tracking.',
    },
    {
      h3: 'Next JS Development Mumbai',
      desc: 'Next JS website development for Mumbai businesses — SSR, SSG, ISR, App Router, API routes and full SEO optimisation. Fast, modern and scalable Next JS sites built by certified in-house developers.',
    },
    {
      h3: 'Website Maintenance & Support Mumbai',
      desc: 'Ongoing website maintenance and support for Mumbai businesses — bug fixes, content updates, plugin updates, security patches, uptime monitoring and performance optimisation.',
    },
    {
      h3: 'Hire Website Developers Mumbai',
      desc: 'Hire dedicated website developers from NNC Mumbai on a project or retainer basis. All are full-time in-house engineers — not freelancers. Meet them at our Thane West office.',
    },
  ],
  h2Why: 'Why Hire Website Developers from NNC Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — meet developers in person',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to review live development builds, discuss technical requirements and meet the developers building your website.',
    },
    {
      n: '02',
      h3: 'Full-time in-house developers — not freelancers',
      body: 'Every website developer at NNC Mumbai is a full-time employee — consistent, accountable engineers who stay with your project from kickoff to launch. No freelancer turnover, no offshore contractors.',
    },
    {
      n: '03',
      h3: 'Modern tech stack — Next JS, React, Node JS',
      body: "NNC builds with the modern web stack — Next JS 14, React 18, TypeScript, Node JS and AWS. Fast, scalable and maintainable code that grows with your Mumbai business without costly rewrites.",
    },
    {
      n: '04',
      h3: 'PageSpeed 90+ — contractually guaranteed',
      body: 'Every website NNC develops achieves PageSpeed 90+ on mobile and desktop. Core Web Vitals compliance is written into every delivery contract — not just a best-effort.',
    },
    {
      n: '05',
      h3: 'Fixed price — fully scoped before development starts',
      body: 'Every project is scoped and priced upfront. No hourly billing, no scope creep charges, no surprise invoices for SEO setup, responsive breakpoints or cloud deployment.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has built websites for startups, SMEs, ecommerce brands and enterprises across Mumbai. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['Next JS', 'React JS', 'Node JS', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'AWS'],
  h2Tech: 'Website Development Technology Stack',
  h2Faq: 'Website Developers Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'Where can I find the best website developers in Mumbai?',
      a: "NNC Digital has among Mumbai's best website developers — 565+ projects, 4.9★ Google rating, office in Thane West. Fast, scalable and high performance websites with modern solutions.",
    },
    {
      q: 'How much does it cost to hire website developers in Mumbai?',
      a: 'A custom business website starts from ₹24,999. A full stack web application starts from ₹75,000. All fixed-price — fully scoped before development begins.',
    },
    {
      q: 'Do NNC website developers build high performance websites?',
      a: 'Yes. NNC builds high performance websites using Next JS and React — SSR, image optimisation, code splitting and lazy loading. PageSpeed 90+ guaranteed.',
    },
    {
      q: 'Can I hire dedicated website developers in Mumbai?',
      a: 'Yes. Hire dedicated website developers from NNC Mumbai on a project or retainer. All are full-time NNC employees — not freelancers. Meet them at our Thane West office.',
    },
    {
      q: 'Do you build scalable websites in Mumbai?',
      a: 'Yes. NNC builds scalable websites with clean architecture, modular components and AWS cloud deployment that grows with your business.',
    },
    {
      q: 'Do you have a website development office in Mumbai?',
      a: 'Yes. NNC has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to review development demos and meet the team.',
    },
  ],
}

export default function WebsiteDevelopersInMumbaiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
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
