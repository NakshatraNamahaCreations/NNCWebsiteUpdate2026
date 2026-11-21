import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'API Integration Services Company in Bangalore | NNC Digital',
  description: 'Custom API integration services in Bangalore. REST, GraphQL, webhooks and third-party integrations with payment gateways, CRMs, ERPs and SaaS tools.',
  alternates: { canonical: `${SITE.url}/api-integrations` },
  keywords: 'api integration services bangalore, rest api integration, third party api integration, webhook integration, payment gateway integration, crm api integration',
  openGraph: {
    title: 'API Integration Services Company in Bangalore | NNC Digital',
    description: 'REST, GraphQL and webhook integrations with payment gateways, CRMs, ERPs and SaaS tools. Fixed price, well-tested, documented.',
    url: `${SITE.url}/api-integrations`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'API Integration NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'API Integration Services',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: 'Custom API integration services covering REST, GraphQL and webhooks for payment gateways, CRMs, ERPs and SaaS tools.',
  url: `${SITE.url}/api-integrations`,
}

const breadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'API Integrations', item: `${SITE.url}/api-integrations` },
  ],
}

const data = {
  badge: 'API Integrations',
  h1: 'API Integration',
  h1Accent: 'Services',
  tagline: 'REST, GraphQL and webhook integrations with payment gateways, CRMs, ERPs, shipping, communication and SaaS tools — tested and documented.',
  desc: 'NNC Digital builds API integrations between the tools you use — whether that is connecting your website to Razorpay, your CRM to WhatsApp, your ERP to Tally or your app to Shiprocket. Every integration ships with retry logic, logging and monitoring so failures surface immediately — not weeks later in a reconciliation report.',
  stat1: '200+',
  stat1Label: 'Integrations Shipped',
  serviceName: 'API integration and third-party connector development',
  h2Features: 'Everything an API Integration Needs',
  features: [
    { h3: 'Payment Gateways', desc: 'Razorpay, Stripe, PayU, CCAvenue, Cashfree — one-time, subscription, refund and settlement flows.' },
    { h3: 'CRM & Marketing', desc: 'Zoho, HubSpot, Salesforce, Freshworks, Mailchimp — lead sync, contact deduplication and campaign triggers.' },
    { h3: 'ERP & Accounting', desc: 'Tally, Zoho Books, SAP B1, QuickBooks — invoice push, inventory sync and ledger import.' },
    { h3: 'Shipping & Logistics', desc: 'Shiprocket, Delhivery, Blue Dart, iThink Logistics — label generation, tracking and status webhook ingestion.' },
    { h3: 'Communication APIs', desc: 'WhatsApp Business, Twilio, MSG91, Exotel — OTP, transactional notifications and campaign sends.' },
    { h3: 'GST & Govt APIs', desc: 'GSTIN validation, e-invoice (IRN) generation, e-way bill creation and GSTR data export.' },
    { h3: 'Webhook Receivers & Dispatchers', desc: 'Signed webhook endpoints with retry, dedup and dead-letter queues for reliable event-driven architecture.' },
    { h3: 'OAuth & Multi-tenant Auth', desc: 'Google, Microsoft, Apple and custom OAuth 2.0 flows with secure token storage and refresh handling.' },
    { h3: 'Logging, Monitoring & Alerts', desc: 'Every integration ships with structured logs, failure alerts and a dashboard to retry / replay failed events.' },
  ],
  h2Why: 'Why Choose NNC for API Integrations?',
  why: [
    { n: '01', h3: 'Tested — not just wired up', body: 'Every integration ships with unit and contract tests so it keeps working when the third-party API changes — not just on launch day.' },
    { n: '02', h3: 'Retry, dedup and dead-letter — standard', body: 'NNC integrations assume the network, the third party and your database will each fail at some point. Retry, idempotency and DLQ are built in.' },
    { n: '03', h3: 'Observable from day one', body: 'Logs, metrics and failure alerts set up with Sentry / Datadog so you see breakage before customers do.' },
    { n: '04', h3: 'Documented for your future dev', body: 'Every integration ships with a README covering endpoints, auth, payloads, errors and runbook — handover-ready.' },
    { n: '05', h3: '35+ in-house engineers', body: 'Backend developers who have seen most of Indian SaaS and government APIs before. Visit our Bengaluru office and meet them.' },
    { n: '06', h3: '200+ integrations shipped', body: 'Payment, CRM, ERP, shipping, WhatsApp, GST — NNC has built against nearly every API an Indian business touches.' },
  ],
  techStack: ['Node JS', 'Next JS', 'PostgreSQL', 'MongoDB', 'Redis', 'BullMQ', 'Sentry', 'AWS'],
  h2Tech: 'API Integration Technology Stack',
  h2Faq: 'API Integration Frequently Asked Questions',
  faqs: [
    { q: 'How much does an API integration cost?', a: 'Simple integrations (single payment gateway, single webhook listener) start from ₹25,000. Complex multi-step integrations with retry, mapping and a dashboard typically run ₹60,000–₹2L. All pricing is fixed before work starts.' },
    { q: 'How long does an integration take?', a: 'A single payment or notification integration takes 1–2 weeks. A full CRM or ERP sync with field mapping, retry and a monitoring dashboard takes 3–6 weeks. Timelines are agreed upfront.' },
    { q: 'Can you integrate with a legacy system that has no API?', a: 'Often yes. NNC has built integrations with Tally (TDL and XML), SAP (RFC and IDoc), legacy SOAP services and flat-file FTP drops. Feasibility is confirmed before scope is agreed.' },
    { q: 'What if the third-party API fails?', a: 'All NNC integrations include retry with exponential backoff, dead-letter queues for permanent failures, and alerts to Slack / email. Failed events can be replayed from the admin dashboard — no silent data loss.' },
    { q: 'Do you handle ongoing integration maintenance?', a: 'Yes — NNC offers retainer plans covering third-party API updates, failure monitoring and schema changes. Priced per month.' },
    { q: 'Do I own the integration code?', a: 'Yes — completely. On delivery you receive every source file, deployment configuration, secrets management and runbook documentation. No vendor lock-in.' },
  ],
}

export default function APIIntegrationsPage() {
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
