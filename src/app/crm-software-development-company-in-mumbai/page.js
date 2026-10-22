import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'CRM Software Development Company in Mumbai | NNC Digital',
  description:
    'Top CRM software development company in Mumbai. Custom CRM development, sales CRM, SaaS CRM, lead management, real estate CRM, healthcare CRM, manufacturing CRM — Zoho & Salesforce alternative. Office in Thane West. Fixed price.',
  alternates: {
    canonical: `${SITE.url}/crm-software-development-company-in-mumbai`,
  },
  keywords:
    'crm software development company in mumbai, crm development company in mumbai, crm software mumbai, custom crm software mumbai, enterprise crm development mumbai, sales crm software mumbai, crm developers mumbai, saas crm development mumbai, lead management software mumbai, crm system development mumbai, zoho alternative crm mumbai, salesforce alternative mumbai, custom crm development mumbai, bespoke crm mumbai, tailored crm software mumbai, custom crm solutions mumbai, industry specific crm mumbai, real estate crm development mumbai, healthcare crm development mumbai, manufacturing crm mumbai',
  openGraph: {
    title: 'CRM Software Development Company in Mumbai | NNC Digital',
    description:
      'Custom CRM software development in Mumbai — sales CRM, lead management, real estate CRM, healthcare CRM, SaaS CRM. Zoho & Salesforce alternative. Office in Thane West. Fixed price.',
    url: `${SITE.url}/crm-software-development-company-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'CRM Software Development Company in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'CRM Software Development Company in Mumbai | NNC Digital',
    description:
      'Custom CRM development in Mumbai — sales CRM, lead management, real estate, healthcare & manufacturing CRM. Office in Thane West. Fixed price.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'CRM Software Development Company in Mumbai',
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
    'CRM Software Development',
    'Sales CRM Software',
    'SaaS CRM Development',
    'Lead Management Software',
    'Enterprise CRM Development',
    'Real Estate CRM Development',
    'Healthcare CRM Development',
    'Manufacturing CRM',
    'Bespoke CRM Software',
  ],
  description:
    'Custom CRM software development for Mumbai businesses — sales CRM, lead management, SaaS CRM, real estate CRM, healthcare CRM, manufacturing CRM and enterprise CRM systems. Zoho and Salesforce alternative. Branch office in Thane West.',
  url: `${SITE.url}/crm-software-development-company-in-mumbai`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Starter CRM Mumbai',
      price: '75000',
      priceCurrency: 'INR',
      description: 'Custom CRM with lead management, pipeline, contact database and basic reporting.',
    },
    {
      '@type': 'Offer',
      name: 'Enterprise CRM Mumbai',
      price: '200000',
      priceCurrency: 'INR',
      description: 'Full enterprise CRM with multi-team workflows, automation, API integrations and custom dashboards.',
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
      name: 'Custom CRM Development',
      item: `${SITE.url}/custom-crm-development`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'CRM Software Development Company in Mumbai',
      item: `${SITE.url}/crm-software-development-company-in-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best CRM software development company in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Mumbai's top-rated custom CRM development companies — 565+ projects delivered, 4.9★ Google rating, branch office in Thane West. We build tailored CRM systems for sales, real estate, healthcare, manufacturing and SaaS businesses — not off-the-shelf software.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why build a custom CRM instead of using Zoho or Salesforce in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Zoho and Salesforce are generic platforms with monthly licensing fees that grow with every user. A custom CRM from NNC Mumbai is built around your exact sales process, terminology and workflows — no unused modules, no per-seat SaaS costs and complete source code ownership. For Mumbai businesses with 10+ CRM users, a custom system typically pays for itself within 18–24 months.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does custom CRM development cost in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A starter custom CRM with lead management, pipeline and basic reporting starts from ₹75,000. A full enterprise CRM with multi-team workflows, automation and API integrations typically costs ₹2,00,000–₹5,00,000. All projects are fixed-price — no hourly billing. Visit our Thane West office for a free consultation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build real estate CRM software in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds real estate CRM development solutions for Mumbai property developers, brokers and agencies — lead capture from portals (99acres, MagicBricks, Housing), site visit scheduling, follow-up automation, inventory management and commission tracking. Built specifically for the Mumbai real estate workflow.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you build healthcare CRM software for Mumbai clinics and hospitals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds healthcare CRM development solutions for Mumbai clinics, hospitals and diagnostic centres — patient lead management, appointment scheduling, follow-up reminders, doctor referral tracking and revenue reporting. HIPAA-compliant data handling on request.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build SaaS CRM platforms in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds SaaS CRM development solutions — multi-tenant architecture, subscription billing (Razorpay), role-based access, white-labelling and usage analytics. Ideal for Mumbai software startups building a CRM product to sell to their own customers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a CRM development office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. You can visit us to map your sales process, review CRM wireframes and meet the development team.',
      },
    },
  ],
}

const data = {
  badge: 'CRM Software Development · Mumbai',
  h1: 'CRM Software Development',
  h1Accent: 'Company in Mumbai',
  tagline:
    'Custom CRM development in Mumbai — sales CRM, lead management software, SaaS CRM, enterprise CRM, real estate CRM, healthcare CRM and manufacturing CRM. Zoho & Salesforce alternative. Office in Thane West. Fixed price.',
  desc:
    'NNC Digital is a custom CRM software development company in Mumbai building bespoke CRM systems for sales teams, real estate businesses, healthcare providers, manufacturers and SaaS companies across Mumbai, Thane and Navi Mumbai. Every CRM is built from scratch around your exact workflows — no generic modules, no per-seat SaaS fees, complete source code ownership. Our branch office in Thane West means Mumbai clients can map their processes face-to-face with the development team.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'CRM software development in Mumbai',
  h2Features: 'Custom CRM Development Services in Mumbai',
  features: [
    {
      h3: 'Custom CRM Development Mumbai',
      desc: 'Fully bespoke CRM software built around your exact sales process, pipeline stages, terminology and team structure. No generic modules — every screen, workflow and report is designed for how your Mumbai business actually works.',
    },
    {
      h3: 'Sales CRM Software Mumbai',
      desc: 'Sales CRM with lead capture, pipeline management, activity tracking, follow-up reminders, quotation builder and revenue forecasting — built for Mumbai sales teams across B2B, B2C and enterprise segments.',
    },
    {
      h3: 'Lead Management Software Mumbai',
      desc: 'Centralised lead management capturing enquiries from website, WhatsApp, Facebook, Google Ads and phone — auto-assigned to sales reps with follow-up sequences, status tracking and conversion reporting.',
    },
    {
      h3: 'SaaS CRM Development Mumbai',
      desc: 'Multi-tenant SaaS CRM platforms — subscription billing via Razorpay, role-based access per account, white-label branding, usage analytics and admin super-dashboard. Built for Mumbai startups selling CRM software.',
    },
    {
      h3: 'Enterprise CRM Development Mumbai',
      desc: 'Enterprise CRM systems for large Mumbai businesses — multi-branch management, multi-team hierarchies, approval workflows, ERP integration, advanced analytics and executive dashboards.',
    },
    {
      h3: 'Real Estate CRM Development Mumbai',
      desc: 'Real estate CRM for Mumbai developers, brokers and agencies — lead capture from 99acres, MagicBricks and Housing.com, site visit scheduling, inventory management, commission tracking and post-sale documentation.',
    },
    {
      h3: 'Healthcare CRM Development Mumbai',
      desc: 'Healthcare CRM for Mumbai clinics, hospitals and diagnostic centres — patient lead management, appointment scheduling, doctor referral tracking, follow-up automation and revenue reporting.',
    },
    {
      h3: 'Manufacturing CRM Mumbai',
      desc: 'Manufacturing CRM for Mumbai factories and industrial businesses — dealer/distributor management, order pipeline, quote-to-invoice workflow, territory management and after-sales service tracking.',
    },
    {
      h3: 'Zoho Alternative & Salesforce Alternative Mumbai',
      desc: 'Switch from Zoho or Salesforce to a custom CRM owned outright — no monthly SaaS fees, no unused modules, no per-seat pricing. NNC Mumbai migrates your data and rebuilds your exact workflow in a system you own forever.',
    },
  ],
  h2Why: 'Why Choose NNC as Your CRM Development Company in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — map your process in person',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to walk through your sales process, review CRM wireframes on screen and meet the developers building your system — not just a remote BA on a call.',
    },
    {
      n: '02',
      h3: 'Built around your workflow — not a generic template',
      body: 'Every CRM NNC builds is designed around your exact pipeline stages, team structure and business terminology. No forcing your process into someone else\'s software — the CRM works the way your Mumbai team already works.',
    },
    {
      n: '03',
      h3: 'No monthly SaaS fees — you own it outright',
      body: 'Unlike Zoho, Salesforce or HubSpot, a custom CRM from NNC has zero monthly licensing costs. You own the source code, database and hosting. For teams of 10+ users the cost saving over 2 years typically exceeds the build cost.',
    },
    {
      n: '04',
      h3: 'Industry-specific — real estate, healthcare, manufacturing',
      body: 'NNC has built CRM systems for real estate brokers, hospitals, clinics, manufacturers, distributors and SaaS companies in Mumbai. We understand the specific workflows, compliance requirements and reporting needs of each industry.',
    },
    {
      n: '05',
      h3: 'Fixed price — no surprise invoices',
      body: 'Every CRM project is scoped and priced upfront. No hourly billing, no change orders for additional reports or pipeline stages. The scope is agreed before development starts.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has delivered 565+ software projects across CRM, SaaS platforms and enterprise systems for Mumbai and pan-India clients. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['React JS', 'Node JS', 'MongoDB', 'PostgreSQL', 'Redis', 'Razorpay', 'AWS', 'REST APIs'],
  h2Tech: 'CRM Development Technology Stack',
  h2Faq: 'CRM Software Development Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best custom CRM development company in Mumbai?',
      a: "NNC Digital is among Mumbai's top CRM software development companies — 565+ projects delivered, 4.9★ Google rating, branch office in Thane West. We build tailored CRM systems for sales, real estate, healthcare, manufacturing and SaaS businesses.",
    },
    {
      q: 'Why build a custom CRM instead of Zoho or Salesforce?',
      a: "Custom CRM from NNC means no monthly per-seat fees, no unused modules and a system built around your exact workflow. For Mumbai businesses with 10+ users it typically pays for itself within 18–24 months versus ongoing SaaS licensing costs.",
    },
    {
      q: 'How much does CRM development cost in Mumbai?',
      a: 'A starter CRM with lead management and pipeline starts from ₹75,000. A full enterprise CRM typically costs ₹2,00,000–₹5,00,000. All projects are fixed-price — no hourly billing.',
    },
    {
      q: 'Do you build real estate CRM in Mumbai?',
      a: 'Yes. NNC builds real estate CRM for Mumbai developers and brokers — lead capture from property portals, site visit scheduling, inventory management and commission tracking.',
    },
    {
      q: 'Can you build a SaaS CRM platform in Mumbai?',
      a: 'Yes. NNC builds multi-tenant SaaS CRM platforms with subscription billing, white-labelling and usage analytics — for Mumbai startups selling CRM software to their own clients.',
    },
    {
      q: 'Do you build healthcare and manufacturing CRM in Mumbai?',
      a: 'Yes. NNC builds healthcare CRM for Mumbai clinics and hospitals, and manufacturing CRM for factories and distributors — each built around the specific workflows and reporting needs of that industry.',
    },
  ],
}

export default function CrmSoftwareDevelopmentMumbaiPage() {
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
