import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'B2B Marketing Agency in Mysuru | Nakshatra Namaha Creations',
  description: 'Top B2B marketing agency in Mysuru. LinkedIn lead generation, account-based marketing (ABM), enterprise pipeline building & B2B digital marketing. Walk-in Mysuru office. Fixed price. Call +91 99005 66466.',
  alternates: { canonical: `${SITE.url}/b2b-marketing-agency-in-mysuru` },
  keywords: [
    'b2b marketing agency in mysuru',
    'linkedin lead generation mysuru',
    'b2b lead generation company mysuru',
    'account based marketing mysuru',
    'abm agency mysuru',
    'b2b digital marketing mysuru',
    'enterprise marketing agency mysuru',
  ].join(', '),
  openGraph: {
    title: 'B2B Marketing Agency in Mysuru | Nakshatra Namaha Creations',
    description: 'LinkedIn lead generation, ABM, B2B digital marketing & enterprise pipeline building for Mysuru businesses. Walk-in office. Fixed price.',
    url: `${SITE.url}/b2b-marketing-agency-in-mysuru`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Nakshatra Namaha Creations',
    images: [{ url: 'https://s3.eu-north-1.amazonaws.com/admin.nakshatranamahacreations.in/NNC+NEW+LOGO+2020+low+res.png', width: 1200, height: 630, alt: 'B2B Marketing Agency Mysuru Nakshatra Namaha Creations' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'B2B Marketing Agency in Mysuru | Nakshatra Namaha Creations',
    description: 'LinkedIn lead generation, ABM & B2B digital marketing in Mysuru. Walk-in office. Fixed price.',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'B2B Marketing Agency in Mysuru',
  description: 'Full-service B2B marketing agency in Mysuru. LinkedIn lead generation, account-based marketing (ABM), email outreach, B2B content marketing and enterprise pipeline building. Walk-in office in JP Nagar, Mysuru.',
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
  serviceType: 'B2B Marketing',
  url: `${SITE.url}/b2b-marketing-agency-in-mysuru`,
  offers: [
    { '@type': 'Offer', name: 'LinkedIn Lead Generation', price: '25000', priceCurrency: 'INR', description: 'Monthly LinkedIn outreach — prospect research, connection requests, messaging sequences and lead qualification.' },
    { '@type': 'Offer', name: 'Account-Based Marketing (ABM)', price: '50000', priceCurrency: 'INR', description: 'ABM programmes targeting named accounts with personalised outreach, content and multi-channel campaigns.' },
    { '@type': 'Offer', name: 'Enterprise B2B Marketing', description: 'Full-stack B2B marketing — LinkedIn, email, content, webinars and sales enablement for enterprise clients.' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'B2B Marketing Services Mysuru',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LinkedIn Lead Generation Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Account Based Marketing Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'B2B Lead Generation Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Enterprise Marketing Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'B2B Digital Marketing Mysuru' } },
    ],
  },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/#services` },
    { '@type': 'ListItem', position: 3, name: 'Digital Marketing', item: `${SITE.url}/digital-marketing-agency-in-mysuru` },
    { '@type': 'ListItem', position: 4, name: 'B2B Marketing Mysuru', item: `${SITE.url}/b2b-marketing-agency-in-mysuru` },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does B2B marketing cost in Mysuru?', acceptedAnswer: { '@type': 'Answer', text: 'LinkedIn lead generation starts from ₹25,000/month. ABM programmes from ₹50,000/month. Enterprise B2B engagements are scoped individually. All pricing transparent.' } },
    { '@type': 'Question', name: 'What is Account-Based Marketing (ABM)?', acceptedAnswer: { '@type': 'Answer', text: 'ABM targets specific named accounts with personalised outreach, content and campaigns — instead of broad lead generation. It delivers higher-quality leads for enterprise sales.' } },
    { '@type': 'Question', name: 'Does Nakshatra Namaha Creations have an office in Mysuru?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Walk-in office at Suswani Towers, JP Nagar 2nd Stage, Mysuru – 570 008. Open Mon–Sat, 9am–7pm.' } },
    { '@type': 'Question', name: 'Do you report real qualified leads?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We track and report actual qualified leads — company name, contact, role, engagement level — not vanity metrics like LinkedIn impressions.' } },
  ],
}

const data = {
  badge: 'B2B Marketing · Mysuru',
  h1: 'B2B Marketing Agency',
  h1Accent: 'in Mysuru',
  tagline: 'LinkedIn lead generation, account-based marketing (ABM) and enterprise pipeline building — qualified B2B leads reported monthly. Walk-in office in JP Nagar, Mysuru. Fixed price. Real metrics.',
  desc: 'Nakshatra Namaha Creations is a B2B-focused marketing agency in Mysuru. We help B2B businesses generate qualified leads through LinkedIn outreach, account-based marketing (ABM), email campaigns and content marketing. Every engagement is optimised for enterprise sales cycles — not volume-based consumer marketing. Visit our Mysuru office to plan your pipeline strategy.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'B2B marketing in Mysuru',
  h2Features: 'B2B Marketing Services We Deliver',
  features: [
    { h3: 'LinkedIn Lead Generation', desc: 'Prospect research, targeted connection requests, personalised messaging sequences and lead qualification — all focused on decision-makers in your target industries.' },
    { h3: 'Account-Based Marketing (ABM)', desc: 'Named-account targeting with personalised outreach, custom content and multi-channel campaigns. Higher-quality pipeline for enterprise sales teams.' },
    { h3: 'B2B Email Outreach', desc: 'Cold email sequences, warm nurture flows and re-engagement campaigns. Deliverability-optimised, CAN-SPAM compliant and integrated with your CRM.' },
    { h3: 'ICP & Buyer Persona Research', desc: 'Ideal Customer Profile (ICP) definition, buyer persona mapping and firmographic targeting so every campaign reaches the right decision-makers.' },
    { h3: 'B2B Content Marketing', desc: 'Thought leadership articles, case studies, whitepapers and LinkedIn posts written to establish authority and generate inbound enquiries.' },
    { h3: 'Enterprise Pipeline Building', desc: 'End-to-end pipeline — prospect list, outreach sequence, qualification call, demo booking and handover to your sales team.' },
    { h3: 'Sales Enablement Content', desc: 'Case studies, battle cards, proposal templates and product one-pagers that help your sales team close enterprise deals faster.' },
    { h3: 'CRM Integration & Reporting', desc: 'Every lead tracked in your CRM (HubSpot, Salesforce, Zoho or custom). Monthly reports showing pipeline value, conversion rates and ROI.' },
    { h3: 'LinkedIn Ads & Retargeting', desc: 'Sponsored content, message ads and website retargeting on LinkedIn — specifically built for B2B audiences and enterprise budgets.' },
  ],
  h2Why: 'Why Mysuru B2B Businesses Choose Us',
  why: [
    { n: '01', h3: 'Walk-in office in JP Nagar, Mysuru', body: "Visit Suswani Towers, JP Nagar 2nd Stage. Sit with our B2B marketing team, review pipeline data together and plan outreach strategy face-to-face. Open Mon–Sat, 9am–7pm." },
    { n: '02', h3: 'Qualified leads reported — not vanity metrics', body: "We report company names, contacts, roles and engagement levels — not LinkedIn impressions or email opens. Metrics that matter to B2B sales pipelines." },
    { n: '03', h3: 'B2B-specialised team — not consumer marketers', body: "Our B2B specialists understand enterprise sales cycles, ICPs and buyer committees. Not repurposed consumer marketing playbooks." },
    { n: '04', h3: 'LinkedIn + Email + ABM under one roof', body: "One agency coordinating LinkedIn outreach, email campaigns and ABM — not siloed across different vendors with conflicting messaging." },
    { n: '05', h3: '35+ in-house team — zero outsourcing', body: "Every strategist, copywriter, researcher and campaign manager is a permanent employee. No freelancers, no offshore SDR farms." },
    { n: '06', h3: 'Transparent pricing — no hidden fees', body: "Fixed monthly fee. No per-lead charges. No platform markups. You know exactly what you pay and what you get every month." },
  ],
  techStack: ['LinkedIn Sales Navigator', 'HubSpot', 'Apollo', 'Lemlist', 'Clearbit', 'Google Analytics', 'Calendly', 'Zapier'],
  h2Tech: 'B2B Marketing Tools We Use',
  h2Faq: 'B2B Marketing in Mysuru — Questions Answered',
  faqs: [
    { q: 'How much does B2B marketing cost in Mysuru?', a: 'LinkedIn lead generation starts from ₹25,000/month. ABM programmes from ₹50,000/month. Enterprise B2B engagements with content, LinkedIn, email and sales enablement are scoped individually. All pricing is transparent — no hidden fees.' },
    { q: 'What is Account-Based Marketing (ABM)?', a: 'ABM focuses on specific named accounts (companies you want as customers) rather than broad lead generation. Each account gets personalised outreach, custom content and multi-channel touchpoints. It delivers higher-quality pipeline for enterprise sales teams where deal sizes are large.' },
    { q: 'How is B2B marketing different from B2C?', a: "B2B sales cycles are longer (3–12 months), involve multiple decision-makers, require higher trust-building and focus on ROI rather than emotion. Our B2B playbook is built for these dynamics — not adapted from consumer marketing." },
    { q: 'Does Nakshatra Namaha Creations have an office in Mysuru?', a: 'Yes. Our Mysuru branch is at Suswani Towers, JP Nagar 2nd Stage, Mysuru – 570 008. Walk in Monday to Saturday, 9am–7pm. No appointment needed.' },
    { q: 'How long does B2B marketing take to show results?', a: 'LinkedIn outreach can generate qualified leads within 4–6 weeks. Full pipeline impact (closed-won deals) typically takes 3–6 months given longer B2B sales cycles. We report monthly progress at every stage.' },
    { q: 'Can you work with our existing CRM?', a: 'Yes. We integrate with HubSpot, Salesforce, Zoho CRM, Pipedrive and custom CRMs. Every lead is tracked end-to-end — from outreach to qualified conversation to demo booking.' },
    { q: 'Do you target specific industries?', a: 'Yes. We target decision-makers in your Ideal Customer Profile (ICP) — specific industries, company sizes, job titles and geographies. No spray-and-pray outreach.' },
    { q: 'Is LinkedIn really effective for B2B in India?', a: "Yes — 100M+ Indian professionals are on LinkedIn including almost every enterprise decision-maker. LinkedIn outreach targeted at specific roles (CEO, CTO, Head of Procurement) delivers significantly higher response rates than cold email alone." },
  ],
}

export default function B2bMarketingMysuruPage() {
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
