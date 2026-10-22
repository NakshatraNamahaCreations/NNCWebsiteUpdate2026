import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Custom CRM Development in Mysuru | Nakshatra Namaha Creations',
  description: 'Custom CRM development company in Mysuru. Bespoke CRM software tailored to your industry — real estate, healthcare, manufacturing. No per-user fees. Walk-in Mysuru office. Fixed price. Source code yours. Call +91 99005 66466.',
  alternates: { canonical: `${SITE.url}/custom-crm-development-mysuru` },
  keywords: [
    'custom crm development mysuru',
    'bespoke crm mysuru',
    'tailored crm software mysuru',
    'custom crm solutions mysuru',
    'industry specific crm mysuru',
    'real estate crm development mysuru',
    'healthcare crm development mysuru',
    'manufacturing crm mysuru',
  ].join(', '),
  openGraph: {
    title: 'Custom CRM Development in Mysuru | Nakshatra Namaha Creations',
    description: 'Bespoke CRM software for Mysuru businesses. Industry-specific — real estate, healthcare, manufacturing. Walk-in office. Fixed price.',
    url: `${SITE.url}/custom-crm-development-mysuru`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Nakshatra Namaha Creations',
    images: [{ url: 'https://s3.eu-north-1.amazonaws.com/admin.nakshatranamahacreations.in/NNC+NEW+LOGO+2020+low+res.png', width: 1200, height: 630, alt: 'Custom CRM Development Mysuru Nakshatra Namaha Creations' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Custom CRM Development in Mysuru | Nakshatra Namaha Creations',
    description: 'Bespoke CRM software in Mysuru. Industry-specific. Walk-in office. Fixed price.',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom CRM Development in Mysuru',
  description: 'Bespoke CRM software development in Mysuru. Industry-specific CRM for real estate, healthcare, manufacturing and services. Tailored to your exact workflow. No per-user fees. Walk-in office in JP Nagar, Mysuru.',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Suswani Towers, JP Nagar 2nd Stage',
      addressLocality: 'Mysuru',
      addressRegion: 'Karnataka',
      postalCode: '570008',
      addressCountry: 'IN',
    },
  },
  areaServed: ['Mysuru', 'Mysore', 'Karnataka', 'India'],
  serviceType: 'Custom CRM Development',
  url: `${SITE.url}/custom-crm-development-mysuru`,
  offers: [
    { '@type': 'Offer', name: 'Industry CRM', price: '150000', priceCurrency: 'INR', description: 'Custom CRM tailored to your industry with lead management, reporting and integrations.' },
    { '@type': 'Offer', name: 'Enterprise Custom CRM', description: 'Multi-department CRM with automation workflows, role-based access and third-party integrations.' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Custom CRM Services Mysuru',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Real Estate CRM Development Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Healthcare CRM Development Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Manufacturing CRM Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bespoke CRM Software Mysuru' } },
    ],
  },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/#services` },
    { '@type': 'ListItem', position: 3, name: 'CRM Development', item: `${SITE.url}/crm-software-development-company-in-mysuru` },
    { '@type': 'ListItem', position: 4, name: 'Custom CRM Mysuru', item: `${SITE.url}/custom-crm-development-mysuru` },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is a custom CRM?', acceptedAnswer: { '@type': 'Answer', text: 'A custom CRM is software built specifically for your business workflow — not a generic SaaS tool. It includes only the features you need, matches your exact process and has no per-user monthly fees.' } },
    { '@type': 'Question', name: 'How much does custom CRM development cost in Mysuru?', acceptedAnswer: { '@type': 'Answer', text: 'Industry-specific CRM starts from ₹1,50,000. Enterprise CRM scoped individually. All pricing fixed before work begins.' } },
    { '@type': 'Question', name: 'Does Nakshatra Namaha Creations have an office in Mysuru?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Walk-in office at Suswani Towers, JP Nagar 2nd Stage, Mysuru – 570 008. Open Mon–Sat, 9am–7pm.' } },
    { '@type': 'Question', name: 'Which industries do you build CRM for?', acceptedAnswer: { '@type': 'Answer', text: 'Real estate, healthcare, manufacturing, education, logistics, hospitality, professional services, retail and more. Every CRM is tailored to the industry workflow.' } },
  ],
}

const data = {
  badge: 'Custom CRM · Mysuru',
  h1: 'Custom CRM Development',
  h1Accent: 'in Mysuru',
  tagline: 'Bespoke CRM software tailored to your exact industry workflow — real estate, healthcare, manufacturing and more. No per-user fees. No unused features. Walk-in office in JP Nagar, Mysuru.',
  desc: 'Nakshatra Namaha Creations builds industry-specific CRM software for businesses in Mysuru. Unlike generic SaaS tools, a custom CRM matches how your team actually works — your pipeline stages, your data fields, your reporting needs. No per-user monthly charges. Full source code ownership. Visit our Mysuru office to map your workflow.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'custom CRM development in Mysuru',
  h2Features: 'What Your Custom CRM Will Include',
  features: [
    { h3: 'Industry-Specific Pipeline', desc: 'Not a generic sales funnel — pipeline stages designed for your industry. Property listings for real estate. Patient flow for healthcare. Production orders for manufacturing.' },
    { h3: 'Custom Data Fields & Forms', desc: 'Every field, dropdown and form matches your workflow. No forced fields you never use. Add custom fields anytime without developer help.' },
    { h3: 'Automated Workflows & Triggers', desc: 'Auto-assign leads, send follow-up reminders, trigger WhatsApp messages, update statuses — all based on rules you define.' },
    { h3: 'Industry Dashboards & Reports', desc: 'Real-time dashboards built for your metrics — occupancy rates, patient counts, production output, revenue forecasts. Export to PDF or Excel.' },
    { h3: 'WhatsApp & Communication Hub', desc: 'WhatsApp Business API, email and SMS integrated directly. Full conversation history logged against each record automatically.' },
    { h3: 'Document Management', desc: 'Attach agreements, prescriptions, invoices, floor plans — any document type linked to the relevant record with version control.' },
    { h3: 'Multi-Location & Team Access', desc: 'Role-based access for multiple offices, departments or branches. Field-level permissions ensure each team sees only what they need.' },
    { h3: 'Third-Party Integrations', desc: 'Tally, QuickBooks, Google Workspace, Razorpay, Shopify, custom ERPs — connected via REST APIs or webhooks.' },
    { h3: 'Mobile Access for Field Teams', desc: 'Responsive design works on any device. Field teams log visits, update records and check pipeline from their phones — with offline support.' },
  ],
  h2Why: 'Why Mysuru Businesses Choose Bespoke CRM Over Zoho or Salesforce',
  why: [
    { n: '01', h3: 'Walk-in office in JP Nagar, Mysuru', body: "Visit Suswani Towers, JP Nagar 2nd Stage. Sit with our team, map your exact workflow on a whiteboard and watch your CRM take shape. Open Mon–Sat, 9am–7pm." },
    { n: '02', h3: 'Built for your industry — not a generic template', body: "A real estate CRM looks nothing like a healthcare CRM. We build each system from scratch around your industry's specific data model, pipeline and reporting needs." },
    { n: '03', h3: 'Zero per-user fees — unlimited users forever', body: "Zoho charges ₹1,000–₹4,000/user/month. Salesforce charges ₹2,000–₹25,000. A custom CRM has zero recurring fees. Add 5 or 500 users at no extra cost." },
    { n: '04', h3: 'Source code 100% yours', body: "Full source code, database, admin credentials — everything handed over. No vendor lock-in. Switch hosting, hire your own team, modify anything." },
    { n: '05', h3: '35+ in-house developers', body: "Every developer, designer and PM is a permanent employee. No freelancers. Visit any of our 4 offices and meet the team building your CRM." },
    { n: '06', h3: 'Fixed price — no scope creep', body: "Price locked before development begins. In 565+ projects, not one client has been invoiced more than agreed." },
  ],
  techStack: ['React JS', 'Next JS', 'Node JS', 'MongoDB', 'PostgreSQL', 'AWS', 'Redis', 'WhatsApp API'],
  h2Tech: 'Technology Stack',
  h2Faq: 'Custom CRM Development in Mysuru — Questions Answered',
  faqs: [
    { q: 'What is a custom CRM and how is it different from Zoho?', a: "A custom CRM is software built specifically for your business process. Zoho is a generic SaaS tool where you adapt your workflow to fit their system. With a custom CRM, the software adapts to you — your pipeline stages, your data fields, your reports. And there are no per-user monthly fees." },
    { q: 'How much does custom CRM development cost in Mysuru?', a: 'Industry-specific CRM starts from ₹1,50,000. Enterprise CRM with multi-department access and complex automations is scoped individually. All pricing fixed before work begins — no hourly billing.' },
    { q: 'Which industries do you build CRM for?', a: 'Real estate (property listings, site visits, broker management), healthcare (patient records, appointments, prescriptions), manufacturing (production orders, inventory, dispatch), education, logistics, hospitality, professional services and retail. Each CRM is tailored to the industry.' },
    { q: 'How long does custom CRM development take?', a: 'Industry CRM: 10–14 weeks. Enterprise CRM with automation and integrations: 14–24 weeks. All timelines agreed in writing with weekly staging demos.' },
    { q: 'Does Nakshatra Namaha Creations have an office in Mysuru?', a: 'Yes. Suswani Towers, JP Nagar 2nd Stage, Mysuru – 570 008. Walk in Monday to Saturday, 9am–7pm. No appointment needed.' },
    { q: 'Can I migrate from Zoho or Salesforce?', a: 'Yes. We handle complete data migration — contacts, deals, notes, activity history and custom fields. Your existing workflow is replicated in the new CRM before cutover.' },
    { q: 'Do I own the source code?', a: 'Yes — completely and permanently. Full source code, database schemas, admin credentials and hosting access. No licence fees, no vendor dependency.' },
    { q: 'Can field sales teams use it on mobile?', a: 'Yes. Mobile-responsive admin panel works on any device. Field teams log visits, update leads and check pipeline from their phones — with offline support for areas with poor connectivity.' },
  ],
}

export default function CustomCrmMysuruPage() {
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
