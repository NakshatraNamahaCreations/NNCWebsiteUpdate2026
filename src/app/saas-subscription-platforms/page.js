import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'SaaS & Subscription Platform Development Company in Bangalore | NNC Digital',
  description: 'Custom SaaS and subscription platform development in Bangalore. Multi-tenant architecture, Razorpay / Stripe billing, admin dashboards and API-first builds.',
  alternates: { canonical: `${SITE.url}/saas-subscription-platforms` },
  keywords: 'saas development company bangalore, subscription platform development, multi tenant saas, b2b saas development, saas product development',
  openGraph: {
    title: 'SaaS & Subscription Platform Development Company in Bangalore | NNC Digital',
    description: 'Multi-tenant SaaS products with Razorpay / Stripe billing, admin dashboards and API-first delivery. Fixed price, full source ownership.',
    url: `${SITE.url}/saas-subscription-platforms`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'SaaS Development NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'SaaS & Subscription Platform Development',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: 'Multi-tenant SaaS and subscription platform development with Razorpay / Stripe billing and admin dashboards.',
  url: `${SITE.url}/saas-subscription-platforms`,
}

const breadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'SaaS & Subscription Platforms', item: `${SITE.url}/saas-subscription-platforms` },
  ],
}

const data = {
  badge: 'SaaS Development',
  h1: 'SaaS & Subscription',
  h1Accent: 'Platform Development',
  tagline: 'Multi-tenant SaaS products with subscription billing, usage metering, admin consoles and API-first delivery. Built for recurring revenue.',
  desc: 'NNC Digital builds SaaS products and subscription platforms for founders and enterprise teams ready to replace spreadsheets, internal tools or legacy software with a modern recurring-revenue business. Every build ships with tenant isolation, Razorpay / Stripe billing, customer and admin dashboards, and the API surface your integrators need.',
  stat1: '30+',
  stat1Label: 'SaaS Products Shipped',
  serviceName: 'SaaS and subscription platform development',
  h2Features: 'Everything a SaaS Product Needs',
  features: [
    { h3: 'Multi-tenant Architecture', desc: 'Secure tenant isolation at the data and auth layer so one customer never sees another customer\'s data — enterprise-grade.' },
    { h3: 'Subscription Billing (Razorpay / Stripe)', desc: 'Monthly and yearly plans, trials, upgrades, downgrades, prorated billing, dunning and tax (GST) handling built in.' },
    { h3: 'Usage Metering & Overages', desc: 'Per-seat, per-API-call or per-event metering with soft caps, hard caps and overage billing rules you configure.' },
    { h3: 'Team, Role & SSO', desc: 'Workspace invites, owner / admin / member roles, Google Workspace SSO and optional SAML for enterprise customers.' },
    { h3: 'Customer Dashboard', desc: 'Usage, invoices, team management and plan upgrades in a polished customer-facing portal.' },
    { h3: 'Admin / Super-admin Console', desc: 'Internal console to onboard customers, view usage, issue credits, manage trials and run cohort reports.' },
    { h3: 'Public API & Webhooks', desc: 'REST / GraphQL API with signed webhooks so customers can integrate your SaaS into their own stack.' },
    { h3: 'In-app Analytics', desc: 'Activation, retention and cohort dashboards built in — know which customers are expanding and which are at risk.' },
    { h3: 'Audit Logs & Compliance', desc: 'Every write action logged with user, time and payload — ready for enterprise security reviews.' },
  ],
  h2Why: 'Why Choose NNC for SaaS Development?',
  why: [
    { n: '01', h3: 'SaaS-specific architecture from day one', body: 'Multi-tenant isolation, billing and metering are designed in — not retrofitted after launch. Saves months of rebuild work later.' },
    { n: '02', h3: 'Indian billing (GST, Razorpay) native', body: 'GST invoicing, Razorpay subscriptions and Indian tax rules built in. Stripe for international customers runs alongside.' },
    { n: '03', h3: 'Fixed price — predictable spend', body: 'Pricing is quoted before work starts. No hourly billing, no surprise invoices for a new billing rule or role.' },
    { n: '04', h3: '35+ in-house engineers — zero outsourcing', body: 'Developers, UI designers and QA — all NNC employees. Visit our Bengaluru office and meet the team working on your product.' },
    { n: '05', h3: 'Scales to real paying customers', body: 'Built on Node JS, PostgreSQL and AWS with caching and queue layers tuned for growth, not toy demos.' },
    { n: '06', h3: '30+ SaaS products shipped', body: 'B2B workflow tools, vertical SaaS for clinics and gyms, marketing SaaS and internal platforms — NNC has shipped end to end.' },
  ],
  techStack: ['Next JS', 'Node JS', 'PostgreSQL', 'Redis', 'Razorpay', 'Stripe', 'AWS', 'Docker'],
  h2Tech: 'SaaS Technology Stack',
  h2Faq: 'SaaS Platform Frequently Asked Questions',
  faqs: [
    { q: 'How much does SaaS development cost?', a: 'SaaS products at NNC start from ₹3L for a lean MVP with billing, auth and a single core workflow. Enterprise-grade multi-tenant SaaS with SSO, API and admin console typically runs ₹6L–₹15L. All pricing is fixed before work starts.' },
    { q: 'How long does it take to build a SaaS product?', a: 'A lean MVP takes 10–14 weeks. A full-featured multi-tenant SaaS with billing, team, API and admin console takes 16–24 weeks. Timelines are agreed upfront.' },
    { q: 'Can you handle Indian GST invoicing and Razorpay subscriptions?', a: 'Yes — both are built in as standard. Razorpay Subscriptions for recurring Indian billing, GST-compliant invoices with HSN codes and Stripe for international customers, all in one platform.' },
    { q: 'Can you migrate my existing product to a SaaS model?', a: 'Yes. NNC frequently takes single-tenant products and moves them to multi-tenant with billing and team management — the retrofit is a known pattern.' },
    { q: 'Do I own the source code?', a: 'Yes — completely. On delivery you receive every source file, database, cloud account access and deployment pipelines. No SaaS lock-in on your SaaS.' },
    { q: 'What about hosting and ongoing operations?', a: 'NNC deploys to your AWS account by default. We also offer managed hosting with monitoring, backups and uptime guarantees — priced separately.' },
  ],
}

export default function SaasSubscriptionPlatformsPage() {
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
