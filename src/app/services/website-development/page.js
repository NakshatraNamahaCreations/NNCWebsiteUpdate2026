import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'
import Link from 'next/link'

export const metadata = {
  title: 'Website Development Services | NNC Digital',
  description: 'NNC builds fast, secure, SEO-ready websites using React JS, Next.js and Node JS. Fixed price, PageSpeed 90+ guaranteed, zero outsourcing. 565+ projects delivered.',
  alternates: { canonical: `${SITE.url}/services/website-development` },
  openGraph: {
    title: 'Website Development Services | NNC Digital',
    description: 'NNC builds fast, secure, SEO-ready websites using React JS, Next.js and Node JS. Fixed price, PageSpeed 90+ guaranteed, zero outsourcing.',
    url: `${SITE.url}/services/website-development`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'Website Development Services â€“ NNC Digital' }],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://nakshatranamahacreations.com/services/website-development#service',
  serviceType: 'Website Development',
  name: 'Website Development Services',
  alternateName: 'Custom Website Design and Development',
  description: 'NNC builds fast, secure, SEO-ready websites using React JS, Next.js and Node JS. Fixed price, PageSpeed 90+ guaranteed, zero outsourcing. Corporate websites, e-commerce, landing pages and web applications delivered by a 35+ in-house team across Bangalore, Mumbai, Mysuru and Hyderabad.',
  url: 'https://nakshatranamahacreations.com/services/website-development',
  provider: {
    '@type': 'Organization',
    '@id': 'https://nakshatranamahacreations.com#organization',
    name: 'Nakshatra Namaha Creations Private Limited',
    url: 'https://nakshatranamahacreations.com',
    telephone: '+91-99005-66466',
    email: 'info@nakshatranamahacreations.com',
    logo: 'https://nakshatranamahacreations.com/images/logo.png',
  },
  areaServed: [{ '@type': 'City', name: 'Bangalore' }, { '@type': 'City', name: 'Mumbai' }, { '@type': 'City', name: 'Mysuru' }, { '@type': 'City', name: 'Hyderabad' }, { '@type': 'Country', name: 'India' }],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Website Development Packages',
    itemListElement: [
      { '@type': 'Offer', name: 'Business Website', description: '5 to 10 page corporate website on React or WordPress with SEO foundation', price: '24999', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: 'E-commerce Website', description: 'Full stack e-commerce platform with payment gateway, product catalog and admin panel', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: 'Custom Web Application', description: 'Next.js and Node JS web application with custom workflows, APIs and dashboard', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
    ],
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '106', bestRating: '5' },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Website Development', item: `${SITE.url}/services/website-development` },
  ],
}

const data = {
  badge: 'Service Â· Website Development',
  h1: 'Website Development',
  h1Accent: 'Services',
  tagline: 'Fast, secure, SEO-ready websites using React JS, Next.js and Node JS. Fixed price. PageSpeed 90+ guaranteed. Zero outsourcing.',
  desc: 'NNC builds corporate websites, e-commerce platforms, landing pages and full stack web applications for businesses across India. Every project is built by our 35+ in-house team â€” not outsourced. Fixed price, complete source code ownership and PageSpeed 90+ delivery guarantee.',
  stat1: '565+',
  stat1Label: 'Websites Delivered',
  serviceName: 'website development',
  h2Features: 'Website Development Services We Offer',
  features: [
    { h3: 'Corporate Website Development', desc: 'Multi-page corporate websites built with Next JS or React â€” service pages, team sections, case studies, lead capture forms and full SEO architecture.' },
    { h3: 'E-commerce Website Development', desc: 'Full stack e-commerce platforms with Razorpay/UPI payment integration, product catalog, inventory management and admin dashboard.' },
    { h3: 'Landing Page Development', desc: 'High converting landing pages for Google Ads and Meta Ads campaigns â€” fast, mobile-optimised and conversion-focused.' },
    { h3: 'Custom Web Application Development', desc: 'Full stack web applications â€” React frontend, Node JS backend, REST APIs, MongoDB/PostgreSQL database and AWS cloud deployment.' },
    { h3: 'Next JS Development', desc: 'Next JS 14 websites with SSR, SSG, ISR, App Router, API routes and full SEO optimisation for maximum search visibility.' },
    { h3: 'Website Maintenance and Support', desc: 'Ongoing maintenance â€” bug fixes, content updates, security patches, uptime monitoring and performance optimisation.' },
  ],
  h2Why: 'Why Choose NNC for Website Development?',
  why: [
    { n: '01', h3: 'Zero outsourcing â€” 35+ in-house developers', body: 'Every line of code is written by permanent NNC employees across our Bangalore, Mumbai, Mysuru and Hyderabad offices. No freelancers, no offshore contractors.' },
    { n: '02', h3: 'PageSpeed 90+ â€” written into every contract', body: 'High performance is not optional at NNC. PageSpeed 90+ on mobile and desktop is contractually guaranteed on every website we deliver.' },
    { n: '03', h3: 'Fixed price â€” fully scoped upfront', body: 'Your website price is locked before a single line of code is written. No hourly billing, no scope creep charges, no surprise invoices.' },
    { n: '04', h3: 'Modern stack â€” Next JS, React, Node JS', body: 'NNC builds with Next JS 14, React 18, TypeScript and Node JS on AWS â€” fast, scalable, maintainable and future-proof.' },
    { n: '05', h3: 'SEO-ready architecture from day one', body: 'Every website NNC builds includes structured data, canonical tags, meta optimization, Core Web Vitals compliance and sitemap setup.' },
    { n: '06', h3: '565+ projects, 4.9â˜… Google rating', body: 'Over 10 years and 565+ website projects across every industry â€” healthcare, real estate, education, e-commerce and more.' },
  ],
  techStack: ['Next JS', 'React JS', 'Node JS', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'AWS'],
  h2Tech: 'Technology Stack',
  h2Faq: 'Website Development â€” Frequently Asked Questions',
  faqs: [
    { q: 'How much does a business website cost at NNC?', a: 'A custom business website starts from â‚¹24,999. A full stack web application starts from â‚¹75,000. All fixed-price â€” fully scoped before development begins.' },
    { q: 'How long does website development take?', a: 'A standard business website takes 3â€“4 weeks. A full stack web application takes 6â€“12 weeks depending on complexity. Timelines are confirmed upfront.' },
    { q: 'Do you build websites for businesses outside Bangalore?', a: 'Yes. NNC has offices in Bangalore, Mumbai, Mysuru and Hyderabad, and delivers website projects for businesses across India and internationally.' },
    { q: 'Is PageSpeed 90+ really guaranteed?', a: 'Yes. Core Web Vitals compliance and PageSpeed 90+ on mobile and desktop is written into every NNC delivery contract.' },
    { q: 'Do I own the source code after delivery?', a: 'Yes. Complete source code ownership transfers to you on final delivery. NNC retains no licence claims.' },
  ],
}

export default function WebsiteDevelopmentServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
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
