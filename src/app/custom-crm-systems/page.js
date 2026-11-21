import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Custom CRM Systems Development Company in Bangalore | NNC Digital',
  description: 'Custom CRM system development in Bangalore. Replace Salesforce / Zoho / HubSpot licences with a proprietary CRM built for your exact sales, service and operations workflow.',
  alternates: { canonical: `${SITE.url}/custom-crm-systems` },
  keywords: 'custom crm development bangalore, custom crm systems, proprietary crm software, in house crm development, sales crm development, enterprise crm',
  openGraph: {
    title: 'Custom CRM Systems Development Company in Bangalore | NNC Digital',
    description: 'Proprietary CRM systems built for your exact workflow. No per-user licensing, no SaaS lock-in, full source code ownership.',
    url: `${SITE.url}/custom-crm-systems`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'Custom CRM Systems NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom CRM Systems Development',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: 'Proprietary CRM system development for sales, service and operations teams.',
  url: `${SITE.url}/custom-crm-systems`,
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Custom CRM Systems', item: `${SITE.url}/custom-crm-systems` },
  ],
}

const data = {
  badge: 'Custom CRM Systems',
  h1: 'Custom CRM Systems',
  h1Accent: 'Built for Your Workflow',
  tagline: 'Proprietary CRM systems that match how your sales, service and operations teams actually work — not how Salesforce or Zoho think they should.',
  desc: 'NNC Digital builds custom CRM systems for enterprises, mid-market businesses and growing service brands who have outgrown off-the-shelf CRMs or refuse to pay escalating per-user licensing. Every CRM is designed around your actual workflow — lead capture, qualification, pipeline, deal stages, service tickets, customer history and reporting — with full source code ownership and no monthly SaaS fees forever.',
  stat1: '70+',
  stat1Label: 'CRM Systems Deployed',
  serviceName: 'custom CRM system development',
  h2Features: 'Everything a Custom CRM Needs',
  features: [
    { h3: 'Lead Capture & Qualification', desc: 'Web forms, WhatsApp, IVR, email and ad-channel leads auto-ingested, deduplicated and routed to the right owner by your rules.' },
    { h3: 'Custom Pipeline & Deal Stages', desc: 'Pipeline stages, deal fields and probability rules matched to your exact sales cycle — not a generic Lead-Opportunity-Won template.' },
    { h3: 'Contact & Account 360°', desc: 'Complete customer timeline — emails, calls, meetings, quotes, invoices and support tickets — on a single screen per contact / account.' },
    { h3: 'Activity & Task Management', desc: 'Calls, meetings, follow-ups and tasks with reminders, overdue escalation and daily activity dashboards for sales managers.' },
    { h3: 'Quotes, Proposals & Invoices', desc: 'Built-in quote and proposal generation with branded templates, e-sign integration and automatic conversion to invoice on deal close.' },
    { h3: 'Email, WhatsApp & Call Integration', desc: 'Two-way email sync, WhatsApp Business API messaging and cloud-telephony call logging — every customer interaction in one history.' },
    { h3: 'Role-based Access & Hierarchy', desc: 'Sales rep, manager, regional head and admin roles with record-level ownership, team hierarchy and data visibility rules.' },
    { h3: 'Reports, Forecasts & Dashboards', desc: 'Pipeline velocity, conversion rates, rep-wise performance, forecast accuracy and custom report builder — Excel export included.' },
    { h3: 'Mobile CRM App', desc: 'Dedicated iOS and Android app for field sales and service teams — offline lead capture, meeting notes and quote generation on the go.' },
  ],
  h2Why: 'Why Choose NNC for Custom CRM?',
  why: [
    { n: '01', h3: 'Built for your workflow — not a template', body: 'Off-the-shelf CRMs force your process to match their model. Custom CRM from NNC inverts that — the tool matches how your team already works.' },
    { n: '02', h3: 'No per-user licensing forever', body: 'Pay once to build, host where you want, add users without a per-seat fee. Pays back versus Salesforce / Zoho licences within 12–24 months at most.' },
    { n: '03', h3: 'Integrates with what you already run', body: 'Tally, Zoho Books, WhatsApp Business, Razorpay, Shiprocket, cloud telephony — NNC builds integrations so your CRM is the central hub, not another silo.' },
    { n: '04', h3: 'Fixed price — no scope creep', body: 'Every CRM project is quoted as a fixed scope. No surprise invoices for a new role, module or custom field halfway through build.' },
    { n: '05', h3: '35+ in-house engineers', body: 'Full-stack developers, UI designers and QA — all NNC employees. Visit our Bengaluru office and meet the team working on your CRM.' },
    { n: '06', h3: '70+ CRM systems deployed', body: 'Enterprise sales teams, service businesses, dealership networks, EdTech, healthcare and B2B distribution — NNC has shipped custom CRM across every major Indian vertical.' },
  ],
  techStack: ['Next JS', 'Node JS', 'PostgreSQL', 'MongoDB', 'Redis', 'WhatsApp Business API', 'Razorpay', 'AWS'],
  h2Tech: 'Custom CRM Technology Stack',
  h2Faq: 'Custom CRM Frequently Asked Questions',
  faqs: [
    { q: 'How much does a custom CRM cost?', a: 'Custom CRM systems at NNC start from ₹1.5L for a lean sales-only CRM (lead capture + pipeline + activity). Full-featured CRM with service, quotes, integrations and mobile app typically runs ₹4L–₹12L. All pricing is fixed before work starts — no hourly billing.' },
    { q: 'How long does it take to build?', a: 'A lean sales CRM takes 8–12 weeks. A full-featured CRM with service, quotes, mobile app and integrations takes 14–24 weeks. Timelines are agreed upfront.' },
    { q: 'Why custom CRM instead of Salesforce / Zoho / HubSpot?', a: 'Off-the-shelf CRMs work until you need non-standard workflows, deep customisation or want to stop paying escalating per-user licensing. Custom CRM pays back when you have 25+ users, custom processes or industry-specific needs the off-the-shelf tools do not handle well.' },
    { q: 'Can the CRM integrate with WhatsApp?', a: 'Yes — WhatsApp Business API integration is standard. Two-way messaging, template messages, chatbot handoff and conversation logging all built into the customer timeline.' },
    { q: 'Can we migrate from our existing CRM?', a: 'Yes. NNC frequently migrates from Zoho, Salesforce, HubSpot and spreadsheets to custom CRM. Lead, contact, deal, activity and attachment migration is handled with history preserved.' },
    { q: 'Do I own the source code?', a: 'Yes — completely and permanently. On delivery you receive every source file, database schema, admin credentials and hosting access. No SaaS lock-in, no vendor dependency.' },
  ],
}

export default function CustomCRMSystemsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
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
