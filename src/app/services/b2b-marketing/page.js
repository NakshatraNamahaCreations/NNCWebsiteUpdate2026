import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'B2B Marketing and Lead Generation Services | NNC Digital',
  description: 'NNC runs targeted B2B marketing campaigns including LinkedIn lead generation, account-based marketing, cold email outreach, landing page conversion optimisation and CRM-integrated sales pipelines.',
  alternates: { canonical: `${SITE.url}/services/b2b-marketing` },
  openGraph: {
    title: 'B2B Marketing and Lead Generation Services | NNC Digital',
    description: 'LinkedIn lead generation, account-based marketing, cold email outreach and CRM-integrated B2B sales pipelines.',
    url: `${SITE.url}/services/b2b-marketing`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'B2B Marketing and Lead Generation – NNC Digital' }],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.nakshatranamahacreations.com/services/b2b-marketing#service',
  serviceType: 'B2B Marketing',
  name: 'B2B Marketing and Lead Generation Services',
  alternateName: 'B2B Lead Generation and Account-Based Marketing',
  description: 'NNC runs targeted B2B marketing campaigns including LinkedIn lead generation, account-based marketing, cold email outreach, landing page conversion optimisation and CRM-integrated sales pipelines. Works with manufacturing, SaaS, professional services and enterprise clients.',
  url: 'https://www.nakshatranamahacreations.com/services/b2b-marketing',
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
    name: 'B2B Marketing Packages',
    itemListElement: [
      { '@type': 'Offer', name: 'LinkedIn Lead Generation', description: 'Targeted LinkedIn outreach with qualified meeting booking', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: 'Account-Based Marketing', description: 'Target account research, personalised content, multi-channel outreach', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: 'B2B Content and Landing Pages', description: 'Whitepapers, case studies, landing pages and conversion-optimised funnels', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
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
    { '@type': 'ListItem', position: 3, name: 'B2B Marketing', item: `${SITE.url}/services/b2b-marketing` },
  ],
}

const data = {
  badge: 'Service · B2B Marketing',
  h1: 'B2B Marketing and',
  h1Accent: 'Lead Generation',
  tagline: 'LinkedIn lead generation, account-based marketing, cold email outreach and CRM-integrated B2B sales pipelines for manufacturing, SaaS and enterprise clients.',
  desc: 'NNC runs full-funnel B2B marketing campaigns for manufacturing companies, SaaS businesses, professional services firms and enterprise clients across India. LinkedIn outreach, ABM, cold email, content marketing and landing pages — all connected to a CRM pipeline for visibility on every qualified lead.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'B2B marketing',
  h2Features: 'B2B Marketing Services We Offer',
  features: [
    { h3: 'LinkedIn Lead Generation', desc: 'Targeted LinkedIn outreach to decision-makers — ICP research, connection request sequences, message scripts and qualified meeting booking.' },
    { h3: 'Account-Based Marketing (ABM)', desc: 'Target account list building, personalised content creation, multi-channel outreach across LinkedIn, email and display ads for high-value accounts.' },
    { h3: 'Cold Email Outreach', desc: 'Verified B2B email list building, cold email sequence writing, inbox placement optimisation and reply tracking with CRM integration.' },
    { h3: 'B2B Landing Page and Funnel Design', desc: 'Conversion-optimised B2B landing pages, lead magnets, demo request funnels and gated content pages that move prospects down the sales funnel.' },
    { h3: 'B2B Content Marketing', desc: 'Case studies, whitepapers, technical guides, LinkedIn articles and thought leadership content that builds authority and generates inbound leads.' },
    { h3: 'CRM-Integrated Sales Pipeline Setup', desc: 'NNC connects all B2B lead sources to a CRM pipeline — lead scoring, follow-up automation and pipeline visibility for the sales team.' },
  ],
  h2Why: 'Why Choose NNC for B2B Marketing?',
  why: [
    { n: '01', h3: 'CRM + marketing built together', body: 'NNC builds CRM systems and runs B2B marketing — meaning your outreach campaigns feed directly into a custom pipeline built for your sales process.' },
    { n: '02', h3: 'ICP-first — qualified leads not volume', body: 'NNC starts every B2B campaign with an Ideal Customer Profile workshop. Campaigns are targeted at decision-makers who match your ICP — not bulk leads.' },
    { n: '03', h3: 'Multi-channel — LinkedIn, email and content', body: 'B2B buyers need multiple touchpoints. NNC coordinates LinkedIn, cold email and content across the same target account list.' },
    { n: '04', h3: 'Transparent reporting — pipeline visibility', body: 'Monthly reporting shows messages sent, replies, meetings booked, pipeline value and cost per meeting — full visibility.' },
    { n: '05', h3: 'Industry experience — manufacturing, SaaS, services', body: 'NNC has run B2B campaigns for manufacturing companies, SaaS platforms, consulting firms, logistics businesses and enterprise software vendors.' },
    { n: '06', h3: '565+ projects — 4.9★ Google rating', body: 'Proven track record across B2B lead generation and digital marketing projects.' },
  ],
  techStack: ['LinkedIn Sales Navigator', 'Apollo.io', 'HubSpot', 'Lemlist', 'Hunter.io', 'Google Analytics 4', 'Semrush'],
  h2Tech: 'B2B Marketing Tools',
  h2Faq: 'B2B Marketing — Frequently Asked Questions',
  faqs: [
    { q: 'How much does B2B LinkedIn lead generation cost?', a: 'LinkedIn lead generation campaigns start from ₹25,000/month including ICP research, outreach setup, message sequences and meeting booking.' },
    { q: 'How many qualified leads can we expect per month?', a: 'Typical LinkedIn campaigns generate 8–20 qualified conversations per month depending on ICP size, offer and market. We set realistic targets before the campaign starts.' },
    { q: 'Do you handle both marketing and the CRM?', a: 'Yes. NNC builds custom CRM systems and runs B2B marketing — both connected for complete pipeline visibility.' },
    { q: 'What industries does NNC run B2B campaigns for?', a: 'NNC has run B2B campaigns for manufacturing, logistics, SaaS, consulting, real estate developers, enterprise software and professional services firms.' },
    { q: 'Is there a minimum contract period for B2B marketing?', a: 'B2B marketing requires a minimum 3-month commitment to run, measure and optimise. Most clients see meaningful results by month 2.' },
  ],
}

export default function B2bMarketingServicePage() {
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
