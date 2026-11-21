import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Google Ads Management Agency in Bangalore | NNC Digital',
  description: 'Google Search and Display Ads management in Bangalore. Lead-gen, e-commerce and brand campaigns managed by certified NNC specialists. Transparent reporting.',
  alternates: { canonical: `${SITE.url}/google-ads-management` },
  keywords: 'google ads agency bangalore, google ads management, search ads management, display ads agency, ppc agency bangalore, google ads specialist',
  openGraph: {
    title: 'Google Ads Management Agency in Bangalore | NNC Digital',
    description: 'Search, Display and Performance Max campaigns managed by in-house NNC specialists. Transparent reporting, fixed fee options.',
    url: `${SITE.url}/google-ads-management`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'Google Ads Management NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Google Ads Management',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: 'Google Search and Display Ads management by certified in-house specialists.',
  url: `${SITE.url}/google-ads-management`,
}

const breadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Google Ads Management', item: `${SITE.url}/google-ads-management` },
  ],
}

const data = {
  badge: 'Google Ads Management',
  h1: 'Google Search &',
  h1Accent: 'Display Ads Management',
  tagline: 'Search, Display, Performance Max and YouTube campaigns managed by Google Ads certified NNC specialists. Transparent reporting on real business outcomes.',
  desc: 'NNC Digital manages Google Ads for brands and growth teams across India who care more about cost-per-qualified-lead than vanity impression counts. Every account ships with conversion tracking, bid strategy tuned to margin, landing pages built to convert and weekly reporting on the numbers that actually matter.',
  stat1: '₹60Cr+',
  stat1Label: 'Ad Spend Managed',
  serviceName: 'Google Ads management and PPC campaigns',
  h2Features: 'Everything a Google Ads Account Needs',
  features: [
    { h3: 'Search Campaigns', desc: 'High-intent keyword research, ad copy variations and quality-score optimisation for maximum relevant clicks.' },
    { h3: 'Display & Remarketing', desc: 'Visual banner campaigns and remarketing audiences that bring warm traffic back to convert.' },
    { h3: 'Performance Max', desc: 'Cross-channel Performance Max campaigns tuned on first-party conversion data — not Google defaults.' },
    { h3: 'YouTube Video Ads', desc: 'TrueView in-stream, bumper and video action campaigns to drive awareness and conversions.' },
    { h3: 'Conversion Tracking Setup', desc: 'GA4, GTM, enhanced conversions and offline conversion imports — so bid strategies work against real revenue.' },
    { h3: 'Landing Page Optimisation', desc: 'NNC can build and test ad-dedicated landing pages for every campaign so you are not sending expensive clicks to a slow homepage.' },
    { h3: 'Audience Research', desc: 'In-market, affinity, custom intent and first-party audience segmentation — not generic demographic targeting.' },
    { h3: 'Weekly Reports & QBRs', desc: 'Weekly dashboards + monthly deep-dives and quarterly strategy reviews with your NNC account manager.' },
    { h3: 'Negative Keyword Management', desc: 'Continuous search term review and negative-keyword addition so budget is not wasted on irrelevant queries.' },
  ],
  h2Why: 'Why Choose NNC for Google Ads?',
  why: [
    { n: '01', h3: 'In-house specialists — not junior account executives', body: 'Every NNC Google Ads account is run by a certified specialist with 4+ years of platform experience. No outsourced junior rotating off your account every quarter.' },
    { n: '02', h3: 'Reporting on real business outcomes', body: 'NNC reports on cost-per-qualified-lead, revenue, ROAS — not impressions, clicks and CTR vanity metrics.' },
    { n: '03', h3: 'Fixed-fee or percentage — your choice', body: 'Flat monthly retainer or percentage of ad spend with a cap. Transparent pricing agreed upfront.' },
    { n: '04', h3: 'Landing pages built for the campaign', body: 'Most agencies manage ads but send clicks to your generic homepage. NNC builds campaign-specific landing pages so conversion rate actually lifts.' },
    { n: '05', h3: '35+ in-house team', body: 'Ads specialists, landing-page developers, analysts and creative designers — all NNC employees. Visit our Bengaluru office and meet them.' },
    { n: '06', h3: '₹60Cr+ in ad spend managed', body: 'NNC manages Google Ads for e-commerce, real estate, EdTech, healthcare and B2B SaaS clients with monthly budgets from ₹50K to ₹50L+.' },
  ],
  techStack: ['Google Ads', 'GA4', 'GTM', 'Looker Studio', 'Search Console', 'Meta Pixel', 'Server-side GTM', 'Google Merchant Center'],
  h2Tech: 'Google Ads Tools & Stack',
  h2Faq: 'Google Ads Management Frequently Asked Questions',
  faqs: [
    { q: 'What is the minimum ad spend you work with?', a: 'NNC takes on Google Ads accounts with a minimum monthly ad spend of ₹50,000. Below this, the mathematics of management-fee vs expected returns rarely works out in the client\'s favour.' },
    { q: 'What does Google Ads management cost?', a: 'NNC management fees start from ₹25,000/month for a flat-fee retainer, or 15-20% of ad spend (whichever is higher) for percentage-based accounts. All fees are agreed upfront — no hidden setup or reporting charges.' },
    { q: 'How quickly can you launch my first campaign?', a: 'First campaigns typically launch within 7–10 working days — including account audit, keyword research, ad copy, conversion tracking and landing page setup. Faster launches are possible for straightforward accounts.' },
    { q: 'Do you have Google Partner status?', a: 'Yes. NNC is a Google Partner agency with certified specialists across Search, Display, Shopping and Video. Platform access to Google reps and beta features included.' },
    { q: 'Who owns the Google Ads account?', a: 'You do — always. NNC operates under your Google Ads account with manager-level access. If we part ways, your account, history and audiences stay with you.' },
    { q: 'What kind of reporting do you provide?', a: 'Weekly Looker Studio dashboards covering spend, conversions, cost-per-conversion and ROAS. Monthly deep-dive reports with analysis and recommendations. Quarterly business reviews with strategy decisions for the next quarter.' },
  ],
}

export default function GoogleAdsManagementPage() {
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
