import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Local SEO & Google Business Profile Services in Bangalore | NNC Digital',
  description: 'Local SEO and Google Business Profile (GMB) management in Bangalore. Rank in Map Pack, grow reviews, optimise listings and attract local customers.',
  alternates: { canonical: `${SITE.url}/local-seo-gmb` },
  keywords: 'local seo bangalore, google business profile management, gmb optimization, map pack ranking, local citations, local search optimization',
  openGraph: {
    title: 'Local SEO & Google Business Profile Services in Bangalore | NNC Digital',
    description: 'Rank in Google Map Pack, grow reviews and optimise listings. In-house SEO + content team, fixed monthly deliverables.',
    url: `${SITE.url}/local-seo-gmb`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'Local SEO GMB NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Local SEO & Google Business Profile Services',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: 'Local SEO and Google Business Profile management for local service businesses and multi-location brands.',
  url: `${SITE.url}/local-seo-gmb`,
}

const breadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Local SEO & GMB', item: `${SITE.url}/local-seo-gmb` },
  ],
}

const data = {
  badge: 'Local SEO & GMB',
  h1: 'Local SEO &',
  h1Accent: 'Google Business Profile',
  tagline: 'Map Pack rankings, GMB optimisation, review growth and local citations for clinics, restaurants, retail, salons, service businesses and multi-location brands.',
  desc: 'NNC Digital runs local SEO for businesses whose customers find them on Google Maps — clinics, restaurants, salons, retail stores, dealerships and multi-location service chains. Every engagement targets Map Pack rankings, Google Business Profile completion, review flow and local citation consistency. Measurable results: inbound calls, direction requests and form submissions from local search.',
  stat1: '150+',
  stat1Label: 'Local Businesses Optimised',
  serviceName: 'local SEO and Google Business Profile management',
  h2Features: 'Everything a Local SEO Project Needs',
  features: [
    { h3: 'Google Business Profile Setup', desc: 'Category selection, service area, attributes, products and services — the fields that drive Map Pack ranking for your queries.' },
    { h3: 'GBP Content & Posts', desc: 'Weekly GBP posts, offer updates, photos and Q&A management — the signals Google uses to rank fresh and active listings.' },
    { h3: 'Review Generation', desc: 'Automated review-request flows via WhatsApp, SMS and email that turn happy customers into 5-star Google reviews.' },
    { h3: 'Review Response Management', desc: 'Branded, template-based responses to every review — positive and negative — so prospects see an engaged business.' },
    { h3: 'Local Citations & NAP Consistency', desc: 'Submission to JustDial, Sulekha, Yelp, Apple Maps, Bing Places and 40+ India directories with consistent NAP (Name, Address, Phone).' },
    { h3: 'Local Landing Pages', desc: 'Dedicated location pages per branch / service area with local schema markup and reviews embedded.' },
    { h3: 'LocalBusiness Schema', desc: 'Correct LocalBusiness / Service / Review schema on your website so Google ties your brand, service and location signals together.' },
    { h3: 'Rank Tracking (Map + Local)', desc: 'Weekly rank tracking in Map Pack and local organic results for target keywords — by neighbourhood and radius.' },
    { h3: 'Call & Direction Reporting', desc: 'Monthly reports covering GBP calls, direction requests, website clicks and form submissions attributable to local search.' },
  ],
  h2Why: 'Why Choose NNC for Local SEO?',
  why: [
    { n: '01', h3: 'Map Pack-focused — not generic SEO', body: 'Local SEO is different from standard SEO. NNC specialists know GBP quirks, Map Pack ranking signals and local review dynamics specific to Indian search behaviour.' },
    { n: '02', h3: 'Review flow — automated, not ad-hoc', body: 'NNC builds automated review-request flows over WhatsApp and SMS. Review velocity is a Map Pack ranking signal — ad-hoc requests do not move it.' },
    { n: '03', h3: 'Multi-location — one standard, many branches', body: 'For multi-branch retail, clinics or dealerships, NNC runs one playbook across all branches so performance is consistent — not patchy.' },
    { n: '04', h3: '35+ in-house team', body: 'SEO specialists, content writers, developers and designers — all NNC employees. Visit our Bengaluru office and meet them.' },
    { n: '05', h3: 'Fixed monthly scope', body: 'Clear monthly deliverables — GBP posts, citations submitted, reviews generated, rank reports. Not vague "ongoing SEO" retainers.' },
    { n: '06', h3: '150+ local businesses optimised', body: 'Clinics, salons, restaurants, retail, auto dealers and service chains across Bengaluru, Mumbai, Mysuru and Hyderabad.' },
  ],
  techStack: ['Google Business Profile', 'Google Maps', 'Search Console', 'BrightLocal', 'Local Citation Tools', 'WhatsApp Business', 'Looker Studio', 'Schema.org'],
  h2Tech: 'Local SEO Tools & Stack',
  h2Faq: 'Local SEO & GMB Frequently Asked Questions',
  faqs: [
    { q: 'What does Local SEO cost?', a: 'NNC local SEO retainers start from ₹18,000/month for single-location businesses, and ₹45,000+/month for multi-branch chains. Package includes GBP management, review flow, citations and reporting. All fees agreed upfront.' },
    { q: 'How long until I see Map Pack improvements?', a: 'GBP completion fixes show within 2–4 weeks. Map Pack rank improvements for competitive local keywords typically become measurable in 8–16 weeks depending on competition and review velocity.' },
    { q: 'My GBP is suspended — can you help?', a: 'Often yes. NNC has reinstated GBP suspensions for category, name and service-area violations. A quick audit confirms whether reinstatement is realistic before scope is agreed.' },
    { q: 'How do you grow Google reviews?', a: 'NNC builds an automated flow — satisfied customers get a review link via WhatsApp / SMS after their visit or purchase. Review velocity typically 2-5x within 90 days.' },
    { q: 'Can you handle multi-location local SEO?', a: 'Yes. For 2–100+ branches, NNC runs standardised playbooks per location with central reporting. Specialised for clinic chains, retail, dealerships and multi-branch service businesses.' },
    { q: 'Who owns the Google Business Profile and listings?', a: 'You do — always. NNC operates under your Business Profile with manager access. If we part ways, your listings, reviews and history stay with you.' },
  ],
}

export default function LocalSEOGMBPage() {
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
