import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Custom CRM Development Mumbai | NNC Digital',
  description:
    'Custom CRM development in Mumbai — bespoke CRM, tailored CRM software, custom CRM solutions, industry specific CRM, real estate CRM development, healthcare CRM development & manufacturing CRM. Office in Thane West. Fixed price.',
  alternates: {
    canonical: `${SITE.url}/custom-crm-development-mumbai`,
  },
  keywords:
    'custom crm development mumbai, bespoke crm mumbai, tailored crm software mumbai, custom crm solutions mumbai, industry specific crm mumbai, real estate crm development mumbai, healthcare crm development mumbai, manufacturing crm mumbai',
  openGraph: {
    title: 'Custom CRM Development Mumbai | NNC Digital',
    description:
      'Bespoke & tailored custom CRM development in Mumbai — real estate CRM, healthcare CRM, manufacturing CRM & industry-specific CRM solutions. Office in Thane West. Fixed price.',
    url: `${SITE.url}/custom-crm-development-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Custom CRM Development Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Custom CRM Development Mumbai | NNC Digital',
    description:
      'Custom CRM development Mumbai — bespoke CRM, real estate CRM, healthcare CRM, manufacturing CRM. Office in Thane West. Fixed price.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom CRM Development Mumbai',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lodha Signet, Kolshet Road, Thane West',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400607',
      addressCountry: 'IN',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Mumbai' },
    { '@type': 'City', name: 'Thane' },
    { '@type': 'City', name: 'Navi Mumbai' },
    { '@type': 'City', name: 'Andheri' },
    { '@type': 'City', name: 'BKC' },
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
    'Bespoke and tailored custom CRM development for Mumbai businesses — real estate CRM, healthcare CRM, manufacturing CRM and industry-specific CRM solutions built from scratch. Branch office in Thane West.',
  url: `${SITE.url}/custom-crm-development-mumbai`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Custom CRM Mumbai — Starter',
      price: '75000',
      priceCurrency: 'INR',
      description: 'Bespoke CRM with lead management, pipeline, contact database and reporting — built around your workflow.',
    },
    {
      '@type': 'Offer',
      name: 'Industry Specific CRM Mumbai',
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
      name: 'CRM Software Development Mumbai',
      item: `${SITE.url}/crm-software-development-company-in-mumbai`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Custom CRM Development Mumbai',
      item: `${SITE.url}/custom-crm-development-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is custom CRM development and why choose it over Zoho or Salesforce in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Custom CRM development means building a bespoke CRM system designed entirely around your Mumbai business's workflows, terminology and team structure — not adapting your processes to fit generic software. Unlike Zoho or Salesforce, a custom CRM has zero monthly SaaS fees, no unused modules and 100% source code ownership. For Mumbai businesses with 10+ users it typically pays for itself within 18–24 months.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build real estate CRM software for Mumbai businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds real estate CRM development for Mumbai property developers, brokers and housing societies — lead capture from 99acres, MagicBricks and Housing.com, site visit scheduling, unit inventory management, booking and agreement workflows and commission tracking. Built specifically for Mumbai real estate sales cycles.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build healthcare CRM for Mumbai clinics and hospitals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds healthcare CRM development for Mumbai clinics, hospitals, diagnostic centres and wellness brands — patient enquiry management, appointment scheduling, doctor referral tracking, follow-up automation, insurance workflow and revenue reporting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build manufacturing CRM for Mumbai factories and distributors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds manufacturing CRM for Mumbai manufacturers, distributors and industrial companies — dealer and distributor management, inquiry-to-order pipeline, quotation builder, territory management, after-sales service tracking and production-linked order status.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does bespoke and tailored CRM development mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Bespoke CRM and tailored CRM software mean the same thing — a CRM built entirely to your specifications rather than configured from an off-the-shelf platform. NNC's Mumbai team maps your actual sales process, builds every screen and workflow around it, and delivers complete source code ownership with no recurring SaaS fees.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does custom CRM development cost in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A custom CRM starter build in Mumbai starts from ₹75,000 — covering lead management, pipeline, contact database and reporting. Industry-specific CRM systems (real estate, healthcare, manufacturing) with complex workflows typically cost ₹1,50,000–₹4,00,000. All fixed-price — no hourly billing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a custom CRM development office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. You can visit us to map your sales or operations workflow, review CRM wireframes and meet the development team building your bespoke CRM.',
      },
    },
  ],
}

const data = {
  badge: 'Custom CRM Development · Mumbai',
  h1: 'Custom CRM Development',
  h1Accent: 'Mumbai',
  tagline:
    'Bespoke & tailored custom CRM development in Mumbai — custom CRM solutions, industry specific CRM, real estate CRM development, healthcare CRM development & manufacturing CRM. Built around your exact workflow. Office in Thane West. Fixed price.',
  desc:
    'NNC Digital builds bespoke and tailored custom CRM software for Mumbai businesses across real estate, healthcare, manufacturing, distribution and professional services. Every custom CRM solution is designed from scratch around your exact sales process, team structure and industry-specific workflows — no generic modules, no monthly SaaS fees, 100% source code ownership. Our branch office in Thane West means Mumbai clients map their workflows face-to-face with the team building the system.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'custom CRM development in Mumbai',
  h2Features: 'Custom CRM Development Services in Mumbai',
  features: [
    {
      h3: 'Bespoke CRM Mumbai',
      desc: 'Fully bespoke CRM software designed and built from scratch for your Mumbai business — every pipeline stage, field, workflow and report matches how your team actually works. No compromise, no generic template.',
    },
    {
      h3: 'Tailored CRM Software Mumbai',
      desc: 'Tailored CRM software that fits your processes precisely — whether that is a complex multi-stage sales cycle, territory-based lead assignment or custom approval workflows unique to your Mumbai business.',
    },
    {
      h3: 'Custom CRM Solutions Mumbai',
      desc: 'End-to-end custom CRM solutions — requirements discovery, UX design, development, data migration, staff training and post-launch support. A complete solution delivered to Mumbai businesses with zero outsourcing.',
    },
    {
      h3: 'Real Estate CRM Development Mumbai',
      desc: 'Real estate CRM for Mumbai developers, brokers and agencies — lead capture from 99acres, MagicBricks and Housing.com, site visit scheduling, unit inventory, booking workflows, agreement generation and commission tracking.',
    },
    {
      h3: 'Healthcare CRM Development Mumbai',
      desc: 'Healthcare CRM for Mumbai clinics, hospitals and diagnostic centres — patient enquiry management, appointment scheduling, doctor referral tracking, follow-up automation, insurance workflow and revenue reporting.',
    },
    {
      h3: 'Manufacturing CRM Mumbai',
      desc: 'Manufacturing CRM for Mumbai factories and distributors — dealer management, inquiry-to-order pipeline, quotation builder, territory assignment, after-sales service tracking and production-linked order status updates.',
    },
    {
      h3: 'Industry Specific CRM Mumbai',
      desc: 'Industry specific CRM development for any sector — logistics, education, legal, finance, retail, hospitality. NNC Mumbai maps the unique workflows of your industry and builds a CRM that reflects them exactly.',
    },
    {
      h3: 'Custom CRM Development Mumbai — No SaaS Fees',
      desc: 'Unlike Zoho, Salesforce or HubSpot, a custom CRM from NNC Mumbai has zero monthly licensing costs. You own the source code, database and hosting. One-time build cost, lifetime ownership.',
    },
    {
      h3: 'Custom CRM with Mobile App Mumbai',
      desc: 'Pair your custom CRM with a React Native mobile app for field sales teams — offline-capable lead updates, GPS check-ins, call logging and real-time pipeline visibility on the go for Mumbai field staff.',
    },
  ],
  h2Why: 'Why Choose NNC for Custom CRM Development in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — map your workflow in person',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to walk through your sales or operations process, review CRM wireframes on screen and meet the developers building your bespoke system.',
    },
    {
      n: '02',
      h3: 'Built 100% around your workflow — not a template',
      body: 'Every bespoke CRM NNC builds starts with a workflow mapping session. Pipeline stages, field names, assignment rules and reports are all designed around how your Mumbai team works — not the other way around.',
    },
    {
      n: '03',
      h3: 'Industry expertise — real estate, healthcare, manufacturing',
      body: 'NNC has built CRM systems for Mumbai real estate brokers, hospitals, clinics, manufacturers and distributors. We understand the specific workflows, compliance requirements and KPIs of each industry.',
    },
    {
      n: '04',
      h3: 'Zero monthly SaaS fees — you own it outright',
      body: 'No Zoho, Salesforce or HubSpot licensing. Your custom CRM is yours — source code, database and hosting credentials handed over on delivery. For Mumbai teams of 10+ users the saving over 2 years typically exceeds the build cost.',
    },
    {
      n: '05',
      h3: 'Fixed price — fully scoped before development starts',
      body: 'Every custom CRM project is scoped in detail and priced upfront. No hourly billing, no change orders for extra fields or reports within the agreed scope.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has delivered 565+ software and CRM projects for Mumbai and pan-India clients. 4.9★ rated on Google with verifiable reviews from real estate, healthcare and manufacturing clients.',
    },
  ],
  techStack: ['React JS', 'Node JS', 'MongoDB', 'PostgreSQL', 'Redis', 'Razorpay', 'AWS', 'REST APIs'],
  h2Tech: 'Custom CRM Technology Stack',
  h2Faq: 'Custom CRM Development Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'What is bespoke and tailored CRM development in Mumbai?',
      a: "Bespoke CRM means a system built entirely to your specifications — every screen, workflow and report designed around your Mumbai business. No generic templates, no unused modules, no monthly SaaS fees. 100% source code ownership.",
    },
    {
      q: 'Do you build real estate CRM in Mumbai?',
      a: 'Yes. NNC builds real estate CRM for Mumbai developers and brokers — lead capture from property portals, site visit scheduling, unit inventory, booking workflows and commission tracking.',
    },
    {
      q: 'Do you build healthcare CRM in Mumbai?',
      a: 'Yes. NNC builds healthcare CRM for Mumbai clinics and hospitals — patient enquiry management, appointment scheduling, referral tracking and follow-up automation.',
    },
    {
      q: 'Do you build manufacturing CRM in Mumbai?',
      a: 'Yes. NNC builds manufacturing CRM for Mumbai factories and distributors — dealer management, inquiry-to-order pipeline, quotation builder and after-sales service tracking.',
    },
    {
      q: 'How much does custom CRM development cost in Mumbai?',
      a: 'A starter custom CRM starts from ₹75,000. Industry-specific CRM (real estate, healthcare, manufacturing) typically costs ₹1,50,000–₹4,00,000. All fixed-price — no hourly billing.',
    },
    {
      q: 'Do you have a CRM development office in Mumbai?',
      a: 'Yes. NNC has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to map your workflow and review CRM wireframes in person.',
    },
  ],
}

export default function CustomCrmDevelopmentMumbaiPage() {
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
