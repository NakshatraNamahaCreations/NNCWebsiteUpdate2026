import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Google Shopping Campaigns Agency in Bangalore | NNC Digital',
  description: 'Google Shopping Ads and Performance Max for e-commerce brands in Bangalore. Merchant Center feed, product targeting, ROAS-focused bidding and reporting.',
  alternates: { canonical: `${SITE.url}/google-shopping-campaigns` },
  keywords: 'google shopping ads bangalore, merchant center agency, performance max ecommerce, shopping campaigns agency, ecommerce ppc bangalore',
  openGraph: {
    title: 'Google Shopping Campaigns Agency in Bangalore | NNC Digital',
    description: 'Google Shopping, Merchant Center and Performance Max managed for e-commerce brands. Feed optimisation + ROAS bidding.',
    url: `${SITE.url}/google-shopping-campaigns`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'Google Shopping Campaigns NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Google Shopping Campaigns',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: 'Google Shopping and Performance Max campaigns for e-commerce brands with Merchant Center feed optimisation.',
  url: `${SITE.url}/google-shopping-campaigns`,
}

const breadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Google Shopping Campaigns', item: `${SITE.url}/google-shopping-campaigns` },
  ],
}

const data = {
  badge: 'Google Shopping',
  h1: 'Google Shopping',
  h1Accent: 'Campaigns for E-commerce',
  tagline: 'Merchant Center feed, Shopping campaigns, Performance Max and ROAS-focused bidding for D2C and marketplace brands across India.',
  desc: 'NNC Digital manages Google Shopping Ads for e-commerce brands that want their products in front of high-intent buyers already searching for them. Every account ships with a properly structured Merchant Center feed, product-group segmentation tuned to margin, and bidding strategies optimised against ROAS targets — not just click volume.',
  stat1: '₹25Cr+',
  stat1Label: 'Shopping Spend Managed',
  serviceName: 'Google Shopping and Performance Max for e-commerce',
  h2Features: 'Everything a Shopping Campaign Needs',
  features: [
    { h3: 'Merchant Center Setup', desc: 'Product feed creation, feed rules, policy compliance and automated feed updates from your store catalogue.' },
    { h3: 'Feed Optimisation', desc: 'Title, description, image, GTIN, brand and category — the attributes that decide whether Google shows your product.' },
    { h3: 'Shopping Campaigns', desc: 'Standard Shopping campaigns with product-group segmentation by margin, bestseller status and stock depth.' },
    { h3: 'Performance Max', desc: 'PMax campaigns with asset groups, audience signals and feed tuning — plus insights to see what PMax is actually spending on.' },
    { h3: 'Dynamic Remarketing', desc: 'Product-level remarketing to cart abandoners and category browsers using Google tag + enhanced conversions.' },
    { h3: 'ROAS-focused Bidding', desc: 'Target ROAS bidding tuned against product margin — not blanket targets that overspend on low-margin SKUs.' },
    { h3: 'Negative Product Exclusions', desc: 'Low-margin, out-of-stock and poorly-converting SKUs excluded from spend so budget flows to winners.' },
    { h3: 'Enhanced Conversions', desc: 'Server-side enhanced conversion imports so bidding stays accurate under cookie restrictions.' },
    { h3: 'Weekly Reports & QBRs', desc: 'ROAS, spend, revenue and product-level performance dashboards — weekly updates, monthly deep dives.' },
  ],
  h2Why: 'Why Choose NNC for Google Shopping?',
  why: [
    { n: '01', h3: 'Feed quality first — then bidding', body: 'Most agencies skip feed work. NNC treats feed title, description and image as the first lever — because a bad feed cannot be bid-strategied out of poor performance.' },
    { n: '02', h3: 'Margin-aware bidding, not blanket ROAS', body: 'NNC tiers products by margin and sets separate ROAS targets per tier. Blanket 400% ROAS targets overspend on low-margin SKUs and underspend on stars.' },
    { n: '03', h3: 'PMax used — not defaulted to', body: 'NNC uses Performance Max where it beats standard Shopping, not everywhere by default. We insist on asset groups and audience signals that give PMax a chance.' },
    { n: '04', h3: 'Developer team handles feed automation', body: 'Shopify, WooCommerce or custom store — NNC\'s developers can automate the feed properly, not stitch together manual CSV uploads.' },
    { n: '05', h3: '35+ in-house team', body: 'Google Ads specialists, feed engineers and e-commerce developers — all NNC employees. Visit our Bengaluru office and meet them.' },
    { n: '06', h3: '₹25Cr+ in Shopping spend managed', body: 'Fashion, electronics, home, grocery and B2B wholesale — NNC runs Shopping across every major Indian e-commerce vertical.' },
  ],
  techStack: ['Google Ads', 'Google Merchant Center', 'Shopify', 'WooCommerce', 'GA4', 'GTM', 'Enhanced Conversions', 'Looker Studio'],
  h2Tech: 'Google Shopping Tools & Stack',
  h2Faq: 'Google Shopping Frequently Asked Questions',
  faqs: [
    { q: 'What is the minimum ad spend for Google Shopping?', a: 'NNC takes on Shopping accounts with a minimum monthly ad spend of ₹75,000. Shopping needs data volume to optimise — below this threshold, ROAS bidding struggles.' },
    { q: 'What does Shopping management cost?', a: 'NNC management fees start from ₹25,000/month flat-fee, or 15% of ad spend (whichever is higher). Feed setup / rebuild is a one-time charge priced separately if needed.' },
    { q: 'My Merchant Center account is suspended — can you help?', a: 'Often yes. NNC has resolved Merchant Center suspensions for policy violations, GTIN mismatches and misrepresentation flags. A quick audit confirms whether reinstatement is realistic before scope is agreed.' },
    { q: 'Shopify / WooCommerce / Magento / custom — which do you work with?', a: 'All of the above. NNC\'s developers handle feed automation across every major Indian e-commerce platform, including custom builds.' },
    { q: 'Do you handle Amazon / Flipkart ads too?', a: 'Separate services. Google Shopping, Amazon Sponsored and Flipkart Ads need different specialists and different reporting. Ask for our marketplace ads service separately.' },
    { q: 'Who owns the Merchant Center and Ads accounts?', a: 'You do — always. NNC operates under your accounts with manager access. If we part ways, accounts, feeds and history stay with you.' },
  ],
}

export default function GoogleShoppingCampaignsPage() {
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
