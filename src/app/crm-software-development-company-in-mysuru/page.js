import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'CRM Software Development Company in Mysuru | Nakshatra Namaha Creations',
  description: 'Leading CRM software development company in Mysuru. Custom CRM systems, SaaS platforms, lead management and sales automation. Zoho & Salesforce alternative. Walk-in Mysuru office. Fixed price. Source code yours. Call +91 99005 66466.',
  alternates: { canonical: `${SITE.url}/crm-software-development-company-in-mysuru` },
  keywords: [
    'crm software development company in mysuru',
    'crm development company in mysuru',
    'crm software mysuru',
    'custom crm software mysuru',
    'enterprise crm development mysuru',
    'sales crm software mysuru',
    'crm developers mysuru',
    'saas crm development mysuru',
    'lead management software mysuru',
    'crm system development mysuru',
    'zoho alternative crm mysuru',
    'salesforce alternative mysuru',
  ].join(', '),
  openGraph: {
    title: 'CRM Software Development Company in Mysuru | Nakshatra Namaha Creations',
    description: 'Custom CRM systems for Mysuru businesses. Lead management, sales automation, Zoho & Salesforce alternative. Walk-in office. Fixed price.',
    url: `${SITE.url}/crm-software-development-company-in-mysuru`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Nakshatra Namaha Creations',
    images: [{ url: 'https://s3.eu-north-1.amazonaws.com/admin.nakshatranamahacreations.in/NNC+NEW+LOGO+2020+low+res.png', width: 1200, height: 630, alt: 'CRM Software Development Company Mysuru Nakshatra Namaha Creations' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'CRM Software Development Company in Mysuru | Nakshatra Namaha Creations',
    description: 'Custom CRM software in Mysuru. Lead management, sales automation. Walk-in office. Fixed price.',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'CRM Software Development Company in Mysuru',
  description: 'Custom CRM software development in Mysuru. Sales CRM, lead management, SaaS platforms, admin dashboards and enterprise CRM systems. Zoho & Salesforce alternative built to your exact workflow. Walk-in office in JP Nagar, Mysuru.',
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
  serviceType: 'CRM Software Development',
  url: `${SITE.url}/crm-software-development-company-in-mysuru`,
  offers: [
    { '@type': 'Offer', name: 'Sales CRM', price: '150000', priceCurrency: 'INR', description: 'Custom sales CRM with lead pipeline, deal tracking, task management and reporting dashboards.' },
    { '@type': 'Offer', name: 'Enterprise CRM Platform', description: 'Custom-scoped enterprise CRM with multi-department access, automation workflows and third-party integrations.' },
    { '@type': 'Offer', name: 'SaaS CRM Product', description: 'Multi-tenant SaaS CRM with subscription billing, white-labelling and scalable cloud infrastructure.' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'CRM Development Services Mysuru',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom CRM Development Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sales CRM Software Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lead Management Software Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SaaS CRM Development Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Enterprise CRM Development Mysuru' } },
    ],
  },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/#services` },
    { '@type': 'ListItem', position: 3, name: 'CRM & Custom Software', item: `${SITE.url}/custom-crm-development` },
    { '@type': 'ListItem', position: 4, name: 'CRM Development Mysuru', item: `${SITE.url}/crm-software-development-company-in-mysuru` },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does custom CRM development cost in Mysuru?', acceptedAnswer: { '@type': 'Answer', text: 'Sales CRM starts from ₹1,50,000. Enterprise CRM and SaaS platforms are scoped individually. All pricing fixed before work begins — no hourly billing.' } },
    { '@type': 'Question', name: 'How is a custom CRM better than Zoho or Salesforce?', acceptedAnswer: { '@type': 'Answer', text: 'A custom CRM is built to match your exact workflow — no unused features, no per-user monthly fees, no vendor lock-in. You own the source code permanently.' } },
    { '@type': 'Question', name: 'Does Nakshatra Namaha Creations have an office in Mysuru?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Walk-in office at Suswani Towers, JP Nagar 2nd Stage, Mysuru – 570 008. Open Mon–Sat, 9am–7pm.' } },
    { '@type': 'Question', name: 'How long does CRM development take?', acceptedAnswer: { '@type': 'Answer', text: 'Sales CRM: 10–14 weeks. Enterprise CRM: 14–24 weeks. SaaS platform: 16–30 weeks. All timelines agreed in writing before development.' } },
  ],
}

const data = {
  badge: 'CRM Software Development · Mysuru',
  h1: 'CRM Software Development',
  h1Accent: 'Company in Mysuru',
  tagline: 'Custom CRM systems built to match your exact workflow — lead management, sales automation, reporting dashboards and third-party integrations. No per-user fees. No vendor lock-in. Walk-in office in JP Nagar, Mysuru.',
  desc: 'Nakshatra Namaha Creations builds custom CRM software for businesses in Mysuru. Unlike Zoho or Salesforce, a custom CRM is designed around your specific sales process — no unused modules, no monthly per-user charges. Every CRM we build includes full source code ownership, dedicated admin dashboards and integrations with WhatsApp, Razorpay, email and any system your team uses.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'CRM software development in Mysuru',
  h2Features: 'What Every Custom CRM From Us Includes',
  features: [
    { h3: 'Lead Pipeline & Deal Tracking', desc: 'Visual Kanban pipeline for leads and deals. Drag-and-drop stages, automated status updates, win/loss tracking and conversion analytics.' },
    { h3: 'Contact & Company Management', desc: 'Centralised database of contacts, companies and interactions. Full history, notes, tags and custom fields — searchable and filterable.' },
    { h3: 'Task & Activity Management', desc: 'Assign tasks to team members, set deadlines, track follow-ups and get automated reminders. Never miss a lead callback.' },
    { h3: 'Sales Reporting & Dashboards', desc: 'Real-time dashboards showing pipeline value, conversion rates, team performance and revenue forecasts. Export to PDF or Excel.' },
    { h3: 'WhatsApp & Email Integration', desc: 'Send WhatsApp messages, emails and SMS directly from the CRM. Full conversation history logged against each contact automatically.' },
    { h3: 'Razorpay & Payment Tracking', desc: 'Generate payment links, track invoices and reconcile payments — all inside the CRM. Razorpay, Stripe and UPI supported.' },
    { h3: 'Role-Based Access Control', desc: 'Admin, manager, sales rep — each role sees only what they need. Field-level permissions, IP restrictions and audit logs.' },
    { h3: 'API & Third-Party Integrations', desc: 'Connect with Google Workspace, Slack, Tally, QuickBooks, Shopify, custom ERPs and any system via REST APIs or webhooks.' },
    { h3: 'Mobile-Responsive Admin Panel', desc: 'Access your CRM from any device — desktop, tablet or phone. Responsive design with offline capability for field sales teams.' },
  ],
  h2Why: 'Why Mysuru Businesses Choose Us for CRM Development',
  why: [
    { n: '01', h3: 'Walk-in office in JP Nagar, Mysuru', body: "Visit Suswani Towers, JP Nagar 2nd Stage. Sit with our team, map your sales process on a whiteboard and see your CRM take shape. Open Mon–Sat, 9am–7pm." },
    { n: '02', h3: 'Built for your workflow — not a generic template', body: "Unlike Zoho or Salesforce, your CRM is designed around how your team actually works. No unused features. No workarounds. No paying for modules you don't need." },
    { n: '03', h3: 'No per-user monthly fees — ever', body: "SaaS CRMs charge ₹1,000–₹5,000 per user per month. A custom CRM has zero recurring licence fees. Add unlimited users at no extra cost." },
    { n: '04', h3: 'Source code 100% yours on delivery', body: "Full source code, database, admin credentials and hosting access. No vendor dependency, no lock-in, no migration headaches if you want to switch providers." },
    { n: '05', h3: '35+ in-house developers — zero outsourcing', body: "Every developer, designer and PM is a permanent Nakshatra Namaha Creations employee. No freelancers. Walk into any of our 4 offices and meet them." },
    { n: '06', h3: 'Fixed price agreed before work starts', body: "In 565+ projects over 8 years, not one client has been invoiced more than the agreed price. Scope locked before development begins." },
  ],
  techStack: ['React JS', 'Next JS', 'Node JS', 'MongoDB', 'PostgreSQL', 'AWS', 'Redis', 'REST APIs'],
  h2Tech: 'CRM Development Technology Stack',
  h2Faq: 'CRM Development in Mysuru — Questions Answered',
  faqs: [
    { q: 'How much does custom CRM development cost in Mysuru?', a: 'A sales CRM with lead pipeline, deal tracking and reporting typically starts from ₹1,50,000. Enterprise CRM with multi-department access, automation and integrations is scoped individually. SaaS CRM platforms with multi-tenancy start from ₹3,00,000+. All pricing is fixed before work begins.' },
    { q: 'How is a custom CRM better than Zoho or Salesforce?', a: "A custom CRM is built around your exact sales process — no unused features, no per-user monthly fees (Zoho charges ₹1,000–₹4,000/user/month), no vendor lock-in. You own the source code and can add unlimited users at zero extra cost. It's your software, forever." },
    { q: 'How long does it take to build a CRM?', a: 'Sales CRM: 10–14 weeks. Enterprise CRM with automation workflows: 14–24 weeks. SaaS CRM platform: 16–30 weeks. All timelines agreed in writing before development begins with weekly staging demos.' },
    { q: 'Does Nakshatra Namaha Creations have an office in Mysuru?', a: 'Yes. Our Mysuru branch is at Suswani Towers, JP Nagar 2nd Stage, Mysuru – 570 008. Walk in Monday to Saturday, 9am–7pm. No appointment needed.' },
    { q: 'Can the CRM integrate with WhatsApp?', a: 'Yes. We integrate WhatsApp Business API so your sales team can send messages, templates and follow-ups directly from the CRM. Full conversation history is logged against each contact.' },
    { q: 'Can I migrate from Zoho or Salesforce to a custom CRM?', a: 'Yes. We handle full data migration — contacts, deals, notes, activity history and custom fields. We map your existing workflow and replicate it in the new CRM before switching over.' },
    { q: 'Do I own the source code?', a: 'Yes — completely and permanently. On delivery you receive the full source code, database schemas, admin credentials and hosting access. No licence fees, no dependency on Nakshatra Namaha Creations.' },
    { q: 'Can my field sales team use the CRM on mobile?', a: 'Yes. Every CRM we build is mobile-responsive and works on any device. Field sales teams can log visits, update leads and check pipeline from their phones — with offline support for areas with poor connectivity.' },
  ],
}

export default function CrmMysuruPage() {
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
