import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Mobile App Development Services | NNC Digital',
  description: 'NNC develops cross-platform Android and iOS mobile apps using React Native. Healthcare apps, marketplaces, booking platforms, CRM apps and SaaS products. End-to-end delivery.',
  alternates: { canonical: `${SITE.url}/services/mobile-app-development` },
  openGraph: {
    title: 'Mobile App Development Services | NNC Digital',
    description: 'NNC develops cross-platform Android and iOS mobile apps using React Native. End-to-end delivery including Play Store and App Store deployment.',
    url: `${SITE.url}/services/mobile-app-development`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'Mobile App Development Services – NNC Digital' }],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.nakshatranamahacreations.com/services/mobile-app-development#service',
  serviceType: 'Mobile App Development',
  name: 'Mobile App Development Services',
  alternateName: 'Android and iOS App Development',
  description: 'NNC develops cross-platform Android and iOS mobile apps using React Native and native technologies. Healthcare apps, marketplaces, booking platforms, CRM apps and SaaS products. End-to-end delivery including Play Store and App Store deployment, AWS hosting and post-launch support.',
  url: 'https://www.nakshatranamahacreations.com/services/mobile-app-development',
  provider: {
    '@type': 'Organization',
    '@id': 'https://www.nakshatranamahacreations.com#organization',
    name: 'Nakshatra Namaha Creations Private Limited',
    url: 'https://www.nakshatranamahacreations.com',
    telephone: '+91-99005-66466',
    email: 'info@nakshatranamahacreations.com',
    logo: 'https://www.nakshatranamahacreations.com/images/logo.png',
  },
  areaServed: [{ '@type': 'City', name: 'Bangalore' }, { '@type': 'City', name: 'Mumbai' }, { '@type': 'City', name: 'Mysuru' }, { '@type': 'City', name: 'Hyderabad' }, { '@type': 'Country', name: 'India' }],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Mobile App Development Packages',
    itemListElement: [
      { '@type': 'Offer', name: 'Android App Development', description: 'Native Android app with Play Store deployment', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: 'iOS App Development', description: 'Native iOS app with App Store deployment', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: 'React Native Cross-Platform App', description: 'Single codebase Android and iOS app with admin dashboard and backend API', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
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
    { '@type': 'ListItem', position: 3, name: 'Mobile App Development', item: `${SITE.url}/services/mobile-app-development` },
  ],
}

const data = {
  badge: 'Service · Mobile App Development',
  h1: 'Mobile App',
  h1Accent: 'Development',
  tagline: 'Cross-platform Android and iOS apps using React Native. Play Store and App Store deployment. AWS backend. Fixed price.',
  desc: 'NNC develops mobile apps for healthcare, real estate, e-commerce, education and enterprise clients across India. React Native cross-platform apps, native Android and iOS — fully delivered by our in-house 35+ team including UI/UX design, backend API, cloud deployment and store submission.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'mobile app development',
  h2Features: 'Mobile App Development Services We Offer',
  features: [
    { h3: 'React Native Cross-Platform App Development', desc: 'Single codebase apps that run natively on both Android and iOS — faster delivery, consistent UX and lower development cost without sacrificing performance.' },
    { h3: 'Android App Development', desc: 'Native Android apps with Play Store deployment, push notifications, Razorpay integration and backend REST API.' },
    { h3: 'iOS App Development', desc: 'Native iOS apps with App Store deployment, Apple Pay integration, push notifications and Node JS backend.' },
    { h3: 'Healthcare App Development', desc: 'HIPAA-aware healthcare apps — doctor booking, patient management, teleconsultation, lab reports and pharmacy integration.' },
    { h3: 'On-Demand and Marketplace Apps', desc: 'Multi-vendor marketplace and on-demand delivery apps with real-time tracking, driver management and payment gateway.' },
    { h3: 'CRM Mobile App Development', desc: 'Mobile CRM apps for sales teams — lead management, follow-up reminders, pipeline tracking and real-time reporting.' },
  ],
  h2Why: 'Why Choose NNC for Mobile App Development?',
  why: [
    { n: '01', h3: 'End-to-end delivery — design to store submission', body: 'NNC handles the complete app lifecycle — UI/UX design, frontend, backend, cloud deployment, Play Store and App Store submission and post-launch support.' },
    { n: '02', h3: 'React Native specialists — one app, two platforms', body: 'Our React Native developers build cross-platform apps that feel native on both Android and iOS — reducing cost and time-to-market significantly.' },
    { n: '03', h3: 'Fixed price — fully scoped before development', body: 'App price is locked before a line of code is written. No hourly billing, no scope creep, no surprise invoices.' },
    { n: '04', h3: '35+ in-house team — zero outsourcing', body: 'Every app is built by permanent NNC employees. No freelancers, no offshore contractors — consistent delivery accountability.' },
    { n: '05', h3: 'AWS hosting and post-launch support', body: 'All backend APIs run on AWS with auto-scaling, monitoring and 99.9% uptime. Post-launch support included for 3 months.' },
    { n: '06', h3: '565+ projects — 4.9★ Google rating', body: 'Proven track record across healthcare, logistics, education, real estate and enterprise app projects.' },
  ],
  techStack: ['React Native', 'React JS', 'Node JS', 'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS', 'Firebase'],
  h2Tech: 'Mobile App Technology Stack',
  h2Faq: 'Mobile App Development — Frequently Asked Questions',
  faqs: [
    { q: 'How much does mobile app development cost at NNC?', a: 'A basic React Native app starts from ₹1,50,000. A full-featured marketplace or healthcare app starts from ₹4,00,000. All fixed-price.' },
    { q: 'How long does mobile app development take?', a: 'A standard app takes 8–14 weeks. Complex apps with multiple user roles take 16–24 weeks. Timelines are confirmed in the scope document.' },
    { q: 'Do you build both Android and iOS apps?', a: 'Yes. NNC builds React Native cross-platform apps (Android + iOS from one codebase) and native Android and iOS apps.' },
    { q: 'Do you handle Play Store and App Store submission?', a: 'Yes. NNC handles complete store submission including screenshots, descriptions, metadata and compliance review for both stores.' },
    { q: 'Do I own the app source code after delivery?', a: 'Yes. Complete source code ownership transfers to you on final delivery.' },
  ],
}

export default function MobileAppDevelopmentServicePage() {
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
