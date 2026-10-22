import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Custom CRM Development Bangalore | NNC Digital',
  description:
    'Custom CRM development in Bangalore — bespoke CRM, tailored CRM software, custom CRM solutions, industry specific CRM, real estate CRM development, healthcare CRM development & manufacturing CRM. Headquartered in Whitefield, Bangalore. Fixed price.',
  alternates: {
    canonical: `${SITE.url}/custom-crm-development-bangalore`,
  },
  keywords:
    'custom crm development bangalore, bespoke crm bangalore, tailored crm software bangalore, custom crm solutions bangalore, industry specific crm bangalore, real estate crm development bangalore, healthcare crm development bangalore, manufacturing crm bangalore',
  openGraph: {
    title: 'Custom CRM Development Bangalore | NNC Digital',
    description:
      'Bespoke & tailored custom CRM development in Bangalore — real estate CRM, healthcare CRM, manufacturing CRM & industry-specific CRM solutions. Headquartered in Whitefield. Fixed price.',
    url: `${SITE.url}/custom-crm-development-bangalore`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Custom CRM Development Bangalore – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Custom CRM Development Bangalore | NNC Digital',
    description:
      'Custom CRM development Bangalore — bespoke CRM, real estate CRM, healthcare CRM, manufacturing CRM. Headquartered in Whitefield. Fixed price.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom CRM Development Bangalore',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7th Floor, Magnolia, Prestige Shantiniketan',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      postalCode: '560048',
      addressCountry: 'IN',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Bangalore' },
    { '@type': 'City', name: 'Whitefield' },
    { '@type': 'City', name: 'Electronic City' },
    { '@type': 'City', name: 'Koramangala' },
    { '@type': 'City', name: 'Indiranagar' },
  ],
  serviceType: [
    'Custom CRM Development',
    'Bespoke CRM Software',
    'Tailored CRM Software',
    'Industry Specific CRM',
    'Real Estate CRM Development',
    'Healthcare CRM Development',
    'Manufacturing CRM',
    'Custom CRM Solutions',
  ],
  description:
    'Bespoke and tailored custom CRM development for Bangalore businesses — real estate CRM, healthcare CRM, manufacturing CRM and industry-specific CRM solutions built from scratch. Headquartered in Whitefield, Bangalore.',
  url: `${SITE.url}/custom-crm-development-bangalore`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Custom CRM Bangalore — Starter',
      price: '75000',
      priceCurrency: 'INR',
      description: 'Bespoke CRM with lead management, pipeline, contact database and reporting — built around your workflow.',
    },
    {
      '@type': 'Offer',
      name: 'Industry Specific CRM Bangalore',
      price: '150000',
      priceCurrency: 'INR',
      description: 'Tailored CRM for real estate, healthcare or manufacturing with industry-specific workflows and integrations.',
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
      name: 'CRM Software Development Company in Bangalore',
      item: `${SITE.url}/crm-software-development-company-in-bangalore`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Custom CRM Development Bangalore',
      item: `${SITE.url}/custom-crm-development-bangalore`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is custom CRM development and why choose it over Zoho or Salesforce in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Custom CRM development means building a bespoke CRM system designed entirely around your Bangalore business's workflows, terminology and team structure — not adapting your processes to fit generic software. Unlike Zoho or Salesforce, a custom CRM has zero monthly SaaS fees, no unused modules and 100% source code ownership. For Bangalore businesses with 10+ users it typically pays for itself within 18–24 months.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build real estate CRM software for Bangalore businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds real estate CRM development for Bangalore property developers, brokers and agencies — lead capture from property portals, site visit scheduling, unit inventory management, booking and agreement workflows and commission tracking. Built specifically for Bangalore real estate sales cycles.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build healthcare CRM for Bangalore clinics and hospitals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds healthcare CRM development for Bangalore clinics, hospitals, diagnostic centres and wellness brands — patient enquiry management, appointment scheduling, doctor referral tracking, follow-up automation, insurance workflow and revenue reporting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build manufacturing CRM for Bangalore factories and distributors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds manufacturing CRM for Bangalore manufacturers, distributors and industrial companies — dealer and distributor management, inquiry-to-order pipeline, quotation builder, territory management, after-sales service tracking and production-linked order status.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does bespoke and tailored CRM development mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Bespoke CRM and tailored CRM software mean the same thing — a CRM built entirely to your specifications rather than configured from an off-the-shelf platform. NNC's Bangalore team maps your actual sales process, builds every screen and workflow around it, and delivers complete source code ownership with no recurring SaaS fees.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does custom CRM development cost in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A custom CRM starter build in Bangalore starts from ₹75,000 — covering lead management, pipeline, contact database and reporting. Industry-specific CRM systems (real estate, healthcare, manufacturing) with complex workflows typically cost ₹1,50,000–₹4,00,000. All fixed-price — no hourly billing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a custom CRM development office in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital is headquartered at Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit us to map your sales or operations workflow, review CRM wireframes and meet the development team building your bespoke CRM.',
      },
    },
  ],
}

const data = {
  badge: 'Custom CRM Development · Bangalore',
  h1: 'Custom CRM Development',
  h1Accent: 'Bangalore',
  tagline:
    'Bespoke & tailored custom CRM development in Bangalore — custom CRM solutions, industry specific CRM, real estate CRM development, healthcare CRM development & manufacturing CRM. Built around your exact workflow. Headquartered in Whitefield. Fixed price.',
  desc:
    'NNC Digital builds bespoke and tailored custom CRM software for Bangalore businesses across real estate, healthcare, manufacturing, distribution and professional services. Every custom CRM solution is designed from scratch around your exact sales process, team structure and industry-specific workflows — no generic modules, no monthly SaaS fees, 100% source code ownership. Our Bangalore headquarters in Whitefield means clients map their workflows face-to-face with the team building the system.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'custom CRM development in Bangalore',
  h2Features: 'Custom CRM Development Services in Bangalore',
  features: [
    {
      h3: 'Bespoke CRM Bangalore',
      desc: 'Fully bespoke CRM software designed and built from scratch for your Bangalore business — every pipeline stage, field, workflow and report matches how your team actually works. No compromise, no generic template.',
    },
    {
      h3: 'Tailored CRM Software Bangalore',
      desc: 'Tailored CRM software that fits your processes precisely — whether that is a complex multi-stage sales cycle, territory-based lead assignment or custom approval workflows unique to your Bangalore business.',
    },
    {
      h3: 'Custom CRM Solutions Bangalore',
      desc: 'End-to-end custom CRM solutions — requirements discovery, UX design, development, data migration, staff training and post-launch support. A complete solution delivered to Bangalore businesses with zero outsourcing.',
    },
    {
      h3: 'Real Estate CRM Development Bangalore',
      desc: 'Real estate CRM for Bangalore developers, brokers and agencies — lead capture from 99acres, MagicBricks and Housing.com, site visit scheduling, unit inventory, booking workflows, agreement generation and commission tracking.',
    },
    {
      h3: 'Healthcare CRM Development Bangalore',
      desc: 'Healthcare CRM for Bangalore clinics, hospitals and diagnostic centres — patient enquiry management, appointment scheduling, doctor referral tracking, follow-up automation, insurance workflow and revenue reporting.',
    },
    {
      h3: 'Manufacturing CRM Bangalore',
      desc: 'Manufacturing CRM for Bangalore factories and distributors — dealer management, inquiry-to-order pipeline, quotation builder, territory assignment, after-sales service tracking and production-linked order status updates.',
    },
    {
      h3: 'Industry Specific CRM Bangalore',
      desc: 'Industry specific CRM development for any sector — logistics, education, legal, finance, retail, hospitality. NNC Bangalore maps the unique workflows of your industry and builds a CRM that reflects them exactly.',
    },
    {
      h3: 'Custom CRM Bangalore — No SaaS Fees',
      desc: 'Unlike Zoho, Salesforce or HubSpot, a custom CRM from NNC Bangalore has zero monthly licensing costs. You own the source code, database and hosting. One-time build cost, lifetime ownership.',
    },
    {
      h3: 'Custom CRM with Mobile App Bangalore',
      desc: 'Pair your custom CRM with a React Native mobile app for field sales teams — offline-capable lead updates, GPS check-ins, call logging and real-time pipeline visibility on the go for Bangalore field staff.',
    },
  ],
  h2Why: 'Why Choose NNC for Custom CRM Development in Bangalore?',
  why: [
    {
      n: '01',
      h3: 'Bangalore headquarters — map your workflow in person',
      body: 'NNC is headquartered at Prestige Shantiniketan, Whitefield, Bangalore. Visit us to walk through your sales or operations process, review CRM wireframes on screen and meet the developers building your bespoke system.',
    },
    {
      n: '02',
      h3: 'Built 100% around your workflow — not a template',
      body: 'Every bespoke CRM NNC builds starts with a workflow mapping session. Pipeline stages, field names, assignment rules and reports are all designed around how your Bangalore team works — not the other way around.',
    },
    {
      n: '03',
      h3: 'Industry expertise — real estate, healthcare, manufacturing',
      body: 'NNC has built CRM systems for Bangalore real estate brokers, hospitals, clinics, manufacturers and distributors. We understand the specific workflows, compliance requirements and KPIs of each industry.',
    },
    {
      n: '04',
      h3: 'Zero monthly SaaS fees — you own it outright',
      body: 'No Zoho, Salesforce or HubSpot licensing. Your custom CRM is yours — source code, database and hosting credentials handed over on delivery. For Bangalore teams of 10+ users the saving over 2 years typically exceeds the build cost.',
    },
    {
      n: '05',
      h3: 'Fixed price — fully scoped before development starts',
      body: 'Every custom CRM project is scoped in detail and priced upfront. No hourly billing, no change orders for extra fields or reports within the agreed scope.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has delivered 565+ software and CRM projects for Bangalore and pan-India clients. 4.9★ rated on Google with verifiable reviews from real estate, healthcare and manufacturing clients.',
    },
  ],
  techStack: ['React JS', 'Node JS', 'MongoDB', 'PostgreSQL', 'Redis', 'Razorpay', 'AWS', 'REST APIs'],
  h2Tech: 'Custom CRM Technology Stack',
  h2Faq: 'Custom CRM Development Bangalore — Frequently Asked Questions',
  faqs: [
    {
      q: 'What is bespoke and tailored CRM development in Bangalore?',
      a: "Bespoke CRM means a system built entirely to your specifications — every screen, workflow and report designed around your Bangalore business. No generic templates, no unused modules, no monthly SaaS fees. 100% source code ownership.",
    },
    {
      q: 'Do you build real estate CRM in Bangalore?',
      a: 'Yes. NNC builds real estate CRM for Bangalore developers and brokers — lead capture from property portals, site visit scheduling, unit inventory, booking workflows and commission tracking.',
    },
    {
      q: 'Do you build healthcare CRM in Bangalore?',
      a: 'Yes. NNC builds healthcare CRM for Bangalore clinics and hospitals — patient enquiry management, appointment scheduling, referral tracking and follow-up automation.',
    },
    {
      q: 'Do you build manufacturing CRM in Bangalore?',
      a: 'Yes. NNC builds manufacturing CRM for Bangalore factories and distributors — dealer management, inquiry-to-order pipeline, quotation builder and after-sales service tracking.',
    },
    {
      q: 'How much does custom CRM development cost in Bangalore?',
      a: 'A starter custom CRM starts from ₹75,000. Industry-specific CRM (real estate, healthcare, manufacturing) typically costs ₹1,50,000–₹4,00,000. All fixed-price — no hourly billing.',
    },
    {
      q: 'Do you have a CRM development office in Bangalore?',
      a: 'Yes. NNC is headquartered at Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit us to map your workflow and review CRM wireframes in person.',
    },
  ],
}

export default function CustomCrmDevelopmentBangalorePage() {
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
