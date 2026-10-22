import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'CRM and Custom Software Development | NNC Digital',
  description: 'NNC builds custom CRM platforms, SaaS products and business software on React and Node JS with MongoDB. Multi-tenant architecture, role-based access, payment gateway integration.',
  alternates: { canonical: `${SITE.url}/services/crm-software-development` },
  openGraph: {
    title: 'CRM and Custom Software Development | NNC Digital',
    description: 'Custom CRM platforms, SaaS products and business software. Multi-tenant architecture, role-based access, API-ready.',
    url: `${SITE.url}/services/crm-software-development`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'CRM Software Development – NNC Digital' }],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.nakshatranamahacreations.com/services/crm-software-development#service',
  serviceType: 'CRM and Custom Software Development',
  name: 'CRM and Custom Software Development',
  alternateName: 'SaaS and CRM Software Solutions',
  description: 'NNC builds custom CRM platforms, SaaS products and business software on a React and Node JS stack with MongoDB. Multi-tenant architecture, role-based access, payment gateway integration and API-ready. Used by healthcare, real estate, coaching institutes and franchise businesses.',
  url: 'https://www.nakshatranamahacreations.com/services/crm-software-development',
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
    name: 'CRM and Software Packages',
    itemListElement: [
      { '@type': 'Offer', name: 'Business CRM', description: 'Lead management, pipeline tracking, follow-ups, quotations and reports', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: 'SaaS Product Development', description: 'Multi-tenant SaaS product with subscription billing and admin provisioning', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: 'Custom Business Software', description: 'Tailored software for specific industry workflows including healthcare, education and manufacturing', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
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
    { '@type': 'ListItem', position: 3, name: 'CRM Software Development', item: `${SITE.url}/services/crm-software-development` },
  ],
}

const data = {
  badge: 'Service · CRM and Software Development',
  h1: 'CRM and Custom Software',
  h1Accent: 'Development',
  tagline: 'Custom CRM platforms, SaaS products and business software. React + Node JS + MongoDB. Multi-tenant, API-ready. Fixed price.',
  desc: 'NNC builds CRM systems, SaaS platforms and custom business software for healthcare, real estate, coaching institutes, manufacturing and franchise businesses. Multi-tenant architecture, role-based access control, Razorpay payment integration, REST API and AWS deployment — all built by our 35+ in-house engineers.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'CRM and software development',
  h2Features: 'CRM and Software Development Services',
  features: [
    { h3: 'Business CRM Development', desc: 'Custom CRM with lead management, sales pipeline, follow-up reminders, quotation builder, invoice tracking and management reports.' },
    { h3: 'SaaS Product Development', desc: 'Multi-tenant SaaS platforms with subscription billing, tenant admin, user provisioning and API integration — built to scale.' },
    { h3: 'Healthcare Software Development', desc: 'HMS, patient management, appointment booking, lab reports, prescription management and teleconsultation platforms.' },
    { h3: 'ERP and Business Process Software', desc: 'Custom ERP systems for manufacturing, inventory management, purchase orders, HR and accounts payable workflows.' },
    { h3: 'Real Estate CRM', desc: 'Property management CRM with lead tracking, site visit scheduling, payment milestones and buyer portal.' },
    { h3: 'Coaching and Training Management System', desc: 'Student enrollment, batch management, attendance, assessments, fee collection and parent portal for coaching institutes.' },
  ],
  h2Why: 'Why Choose NNC for CRM and Software Development?',
  why: [
    { n: '01', h3: 'Domain expertise across 8+ industries', body: 'NNC has delivered CRM and software projects for healthcare, real estate, education, logistics, manufacturing and franchise businesses.' },
    { n: '02', h3: 'Scalable architecture — multi-tenant, API-ready', body: 'Every platform NNC builds uses multi-tenant architecture with clean REST APIs — ready to integrate with third-party tools from day one.' },
    { n: '03', h3: 'Fixed price — fully scoped before development', body: 'Complete software specification is locked before development starts. No hourly billing, no scope changes without approval.' },
    { n: '04', h3: '35+ in-house engineers — zero outsourcing', body: 'All development is done by permanent NNC engineers. Consistent, accountable delivery from kickoff to go-live.' },
    { n: '05', h3: 'AWS deployment — 99.9% uptime SLA', body: 'All platforms run on AWS with auto-scaling, daily backups, monitoring and 99.9% uptime service levels.' },
    { n: '06', h3: '565+ projects — 4.9★ Google rating', body: 'Proven delivery record across complex software projects. 4.9★ Google rating based on verified client reviews.' },
  ],
  techStack: ['React JS', 'Node JS', 'MongoDB', 'PostgreSQL', 'TypeScript', 'AWS', 'Redis', 'Razorpay'],
  h2Tech: 'Technology Stack',
  h2Faq: 'CRM Software Development — Frequently Asked Questions',
  faqs: [
    { q: 'How much does custom CRM development cost?', a: 'A business CRM starts from ₹2,50,000. A full SaaS platform starts from ₹6,00,000. All fixed-price — scoped before development begins.' },
    { q: 'How long does CRM development take?', a: 'A standard CRM takes 10–16 weeks. A multi-tenant SaaS platform takes 20–32 weeks depending on features.' },
    { q: 'Can NNC integrate the CRM with our existing tools?', a: 'Yes. NNC builds REST APIs and integrates with Razorpay, Zoho, Google Workspace, WhatsApp Business, SMS gateways and more.' },
    { q: 'Do you build mobile apps for the CRM?', a: 'Yes. NNC builds React Native mobile CRM apps for Android and iOS alongside the web platform.' },
    { q: 'Is the source code owned by us after delivery?', a: 'Yes. Complete source code ownership transfers to you on final delivery with no ongoing licence fees.' },
  ],
}

export default function CrmSoftwareDevelopmentServicePage() {
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
