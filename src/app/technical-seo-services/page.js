import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Technical SEO & On-page SEO Services in Bangalore | NNC Digital',
  description: 'Technical SEO and on-page optimisation services in Bangalore. Core Web Vitals, schema markup, site architecture, indexing fixes and content optimisation.',
  alternates: { canonical: `${SITE.url}/technical-seo-services` },
  keywords: 'technical seo bangalore, on page seo services, core web vitals optimization, schema markup services, seo audit bangalore, site speed optimization',
  openGraph: {
    title: 'Technical SEO & On-page SEO Services in Bangalore | NNC Digital',
    description: 'Core Web Vitals, schema markup, indexing and on-page SEO handled by in-house NNC specialists. Measured ranking improvements.',
    url: `${SITE.url}/technical-seo-services`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'Technical SEO Services NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Technical SEO & On-page SEO Services',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: 'Technical SEO and on-page optimisation covering Core Web Vitals, schema markup, site architecture and indexing.',
  url: `${SITE.url}/technical-seo-services`,
}

const breadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Technical SEO & On-page', item: `${SITE.url}/technical-seo-services` },
  ],
}

const data = {
  badge: 'Technical & On-page SEO',
  h1: 'Technical SEO &',
  h1Accent: 'On-page Optimisation',
  tagline: 'Core Web Vitals, schema markup, crawl and index fixes, site architecture and on-page optimisation — the technical foundation rankings need.',
  desc: 'NNC Digital delivers technical SEO and on-page optimisation for websites that are losing rankings to competitors despite publishing content. Every engagement starts with a full audit — crawl, index, speed, schema, duplicate content, cannibalisation — and ships a prioritised fix plan with developer-ready tickets and measurable ranking targets.',
  stat1: '200+',
  stat1Label: 'Sites Audited & Optimised',
  serviceName: 'technical SEO and on-page optimisation',
  h2Features: 'Everything a Technical SEO Project Needs',
  features: [
    { h3: 'Full Technical SEO Audit', desc: 'Crawl with Screaming Frog, index-coverage review, log-file analysis and prioritised 90-day fix plan with developer tickets.' },
    { h3: 'Core Web Vitals Optimisation', desc: 'LCP, INP and CLS fixes — image optimisation, code splitting, server response tuning and third-party script control.' },
    { h3: 'Schema Markup Implementation', desc: 'Product, Article, FAQ, LocalBusiness, Breadcrumb and Review schema correctly implemented and validated.' },
    { h3: 'Site Architecture & Internal Linking', desc: 'URL hierarchy, hub-and-spoke internal linking and breadcrumb structure that passes link equity to money pages.' },
    { h3: 'Indexing & Crawl Budget', desc: 'Robots.txt, canonical tags, XML sitemaps and index-bloat cleanup — so Google crawls what matters, not infinite filter URLs.' },
    { h3: 'On-page Content Optimisation', desc: 'Title tag, meta description, H1/H2 structure and keyword-driven content rewrites for priority pages.' },
    { h3: 'Mobile & International SEO', desc: 'Mobile-first indexing, hreflang for multi-country sites and AMP review where it still earns rankings.' },
    { h3: 'Duplicate & Cannibalisation Fixes', desc: 'Content audits to identify duplicate, thin and cannibalising URLs — consolidated or redirected to protect rankings.' },
    { h3: 'Monthly Reporting', desc: 'Rank tracking, Search Console coverage, Core Web Vitals and organic conversion reporting in Looker Studio dashboards.' },
  ],
  h2Why: 'Why Choose NNC for Technical SEO?',
  why: [
    { n: '01', h3: 'Developers + SEO specialists under one roof', body: 'Most agencies audit and hand over tickets your dev team never implements. NNC has in-house developers — audits turn into shipped fixes.' },
    { n: '02', h3: 'Measured against rankings — not activity', body: 'NNC reports on rank movement, Search Console coverage and organic conversions. Not number of meta tags updated.' },
    { n: '03', h3: 'Fixed scope — no endless retainers', body: 'Technical SEO projects are scoped and fixed-priced. Ongoing maintenance is separate and optional.' },
    { n: '04', h3: '35+ in-house team', body: 'SEO specialists, content writers, developers and designers — all NNC employees. Visit our Bengaluru office and meet them.' },
    { n: '05', h3: 'Framework-aware (Next JS, React, WordPress)', body: 'NNC handles technical SEO on modern JS frameworks (Next JS, React) and legacy stacks (WordPress, Drupal, custom PHP) without punting on the hard parts.' },
    { n: '06', h3: '200+ sites audited and optimised', body: 'E-commerce, SaaS, media, local service businesses — NNC has lifted rankings across every major content vertical.' },
  ],
  techStack: ['Screaming Frog', 'Search Console', 'Ahrefs', 'SEMrush', 'PageSpeed Insights', 'Looker Studio', 'GA4', 'Schema.org'],
  h2Tech: 'Technical SEO Tools & Stack',
  h2Faq: 'Technical SEO Frequently Asked Questions',
  faqs: [
    { q: 'How much does technical SEO cost?', a: 'A one-time technical audit at NNC starts from ₹35,000. Full technical SEO implementation (audit + 90-day fix plan + developer work) typically runs ₹1.5L–₹5L depending on site size. All pricing is fixed before work starts.' },
    { q: 'How long until I see ranking improvements?', a: 'Technical fixes typically show in Search Console within 4–6 weeks (coverage, Core Web Vitals). Ranking lift usually becomes measurable 8–16 weeks after implementation. Content-driven ranking takes longer.' },
    { q: 'Do you do on-page content optimisation too?', a: 'Yes — title, meta, H1/H2, internal linking and content rewrites for priority pages are included. Full content strategy and ongoing publishing is a separate service.' },
    { q: 'My site is built on React / Next JS — can you handle SEO?', a: 'Yes. NNC specialises in SEO for modern JS frameworks — SSR / ISR configuration, dynamic metadata, schema and hydration-safe canonical tags. Many agencies punt on this; NNC handles it.' },
    { q: 'Will you do link building?', a: 'Off-page link building is a separate service, priced per month. Technical SEO engagements focus on on-site fixes — which is often where the larger ranking gains are hiding.' },
    { q: 'Do you offer ongoing SEO maintenance?', a: 'Yes — monthly retainers covering rank tracking, Search Console monitoring, content refreshes and competitor analysis. Priced separately from the one-time implementation project.' },
  ],
}

export default function TechnicalSEOServicesPage() {
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
