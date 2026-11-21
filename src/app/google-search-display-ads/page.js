import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Google Search & Display Ads Agency in Bangalore | NNC Digital',
  description: 'Google Search and Display Ads agency in Bangalore. High-intent keyword campaigns, remarketing, YouTube pre-roll and display banners managed by certified NNC specialists.',
  alternates: { canonical: `${SITE.url}/google-search-display-ads` },
  keywords: 'google search ads agency bangalore, google display ads agency, ppc agency bangalore, remarketing campaigns, display network advertising, search ads management',
  openGraph: {
    title: 'Google Search & Display Ads Agency in Bangalore | NNC Digital',
    description: 'Search ads for high-intent conversions and Display / remarketing for brand recall. In-house certified specialists, transparent reporting.',
    url: `${SITE.url}/google-search-display-ads`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'Google Search & Display Ads NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Google Search & Display Ads',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: 'Google Search and Display Ads management including keyword campaigns, remarketing and display network advertising.',
  url: `${SITE.url}/google-search-display-ads`,
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Google Search & Display Ads', item: `${SITE.url}/google-search-display-ads` },
  ],
}

const data = {
  badge: 'Google Search & Display Ads',
  h1: 'Google Search &',
  h1Accent: 'Display Ads Agency',
  tagline: 'High-intent Search campaigns for immediate conversions and Display / remarketing for recall and re-engagement — managed end-to-end by certified NNC specialists.',
  desc: 'NNC Digital runs Google Search and Display Ads for Indian brands who need both bottom-of-funnel conversions and top-of-funnel awareness working together. Search captures prospects already looking; Display and remarketing stay in front of them until they are ready to buy. Every account ships with conversion tracking, audience architecture and landing pages purpose-built for each campaign — not generic homepage dumps.',
  stat1: '₹45Cr+',
  stat1Label: 'Search & Display Spend Managed',
  serviceName: 'Google Search and Display Ads management',
  h2Features: 'Everything a Search & Display Account Needs',
  features: [
    { h3: 'High-intent Search Campaigns', desc: 'Keyword research, match-type strategy, ad copy variants and bid tuning for the queries that actually convert — not just drive traffic.' },
    { h3: 'Display Network Advertising', desc: 'Visual banner campaigns across 2M+ sites in the Google Display Network with placement targeting and audience signals.' },
    { h3: 'Remarketing & RLSA', desc: 'Dynamic and static remarketing to website visitors, cart abandoners and video viewers — plus remarketing lists for search ads (RLSA) to bid differently on warm traffic.' },
    { h3: 'YouTube Pre-roll & In-stream', desc: 'TrueView in-stream, bumper and video action campaigns to layer awareness onto your Search and Display spend.' },
    { h3: 'Audience & Intent Targeting', desc: 'In-market, affinity, custom intent and first-party audience segmentation — the layer most Display campaigns skip and then wonder why they do not convert.' },
    { h3: 'Ad Copy & Creative Variants', desc: 'Multiple ad copy and display creative variants tested continuously — ad fatigue handled before it decays performance.' },
    { h3: 'Conversion Tracking (GA4 + CAPI)', desc: 'GA4, GTM, enhanced conversions and offline conversion imports — bid strategies optimise on real revenue, not partial browser signal.' },
    { h3: 'Landing Page Builds', desc: 'NNC can build and test ad-dedicated landing pages for every campaign — so expensive clicks hit conversion-optimised destinations.' },
    { h3: 'Weekly Reports & QBRs', desc: 'Weekly Looker Studio dashboards covering cost-per-lead, CPA and ROAS; monthly deep-dive reviews; quarterly business reviews.' },
  ],
  h2Why: 'Why Choose NNC for Google Search & Display?',
  why: [
    { n: '01', h3: 'Search + Display as one strategy', body: 'Most agencies sell Search and Display separately. NNC runs them as one funnel — Display builds the audience Search then converts, and remarketing closes the gap.' },
    { n: '02', h3: 'Certified specialists — not junior executives', body: 'Every NNC Google Ads account is run by a certified specialist with 4+ years of platform experience. No outsourced junior rotating off your account every quarter.' },
    { n: '03', h3: 'Landing pages built for the campaign', body: 'Most agencies run ads to generic homepages. NNC builds campaign-specific landing pages so expensive clicks actually convert — conversion rate typically lifts 2-3x.' },
    { n: '04', h3: 'Reporting on business outcomes', body: 'NNC reports on cost-per-qualified-lead, revenue and ROAS. Not impressions, clicks or vanity CTR metrics that look good but mean nothing.' },
    { n: '05', h3: 'Fixed-fee or percentage — your choice', body: 'Flat monthly retainer or percentage of ad spend with a cap. Transparent pricing agreed upfront — no hidden setup or reporting fees.' },
    { n: '06', h3: '₹45Cr+ in Search & Display spend managed', body: 'E-commerce, real estate, EdTech, healthcare, fintech and B2B — NNC manages Search and Display across every major Indian industry with budgets from ₹50K to ₹50L+ monthly.' },
  ],
  techStack: ['Google Ads', 'Google Display Network', 'YouTube Ads', 'GA4', 'GTM', 'Looker Studio', 'Search Console', 'Server-side GTM'],
  h2Tech: 'Google Search & Display Tools',
  h2Faq: 'Google Search & Display Ads Frequently Asked Questions',
  faqs: [
    { q: 'What is the difference between Search and Display Ads?', a: 'Search Ads show when users actively type a query — they are bottom-of-funnel, high-intent and typically cost more per click but convert at higher rates. Display Ads appear on sites across the Google Display Network — they build awareness, retarget visitors and typically cost much less per click but convert at lower rates. Most high-performing accounts use both.' },
    { q: 'What is the minimum ad spend?', a: 'NNC takes on Google Search + Display accounts with a minimum monthly ad spend of ₹50,000. Below this, limited data volume prevents Google\'s bidding algorithm from optimising reliably.' },
    { q: 'What does Search & Display management cost?', a: 'NNC management fees start from ₹25,000/month for a flat-fee retainer, or 15-20% of ad spend for percentage-based accounts. Landing page builds are priced separately if needed. All fees agreed upfront.' },
    { q: 'How soon can we see conversions?', a: 'Search Ads for strong-fit queries often drive conversions within the first week. Display and remarketing show cumulative lift over 4–8 weeks as the retargeting audience builds. Full performance tuning takes 60–90 days.' },
    { q: 'Do you handle remarketing audiences and conversion tracking setup?', a: 'Yes — audience architecture (RLSA, Customer Match, similar audiences) and conversion tracking (GA4, enhanced conversions, server-side CAPI) are set up as standard before campaigns go live. No campaign launches on broken attribution.' },
    { q: 'Who owns the Google Ads account?', a: 'You do — always. NNC operates under your Google Ads account with manager-level access. If we part ways, your account, history, audiences and conversion data stay with you.' },
  ],
}

export default function GoogleSearchDisplayAdsPage() {
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
