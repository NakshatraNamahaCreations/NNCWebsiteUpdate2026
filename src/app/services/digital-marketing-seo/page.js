import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Digital Marketing and SEO Services | NNC Digital',
  description: 'NNC delivers full-funnel digital marketing including Google Ads, Meta Ads, SEO, social media management and content marketing. Specialist in local SEO and lead generation for Indian businesses.',
  alternates: { canonical: `${SITE.url}/services/digital-marketing-seo` },
  openGraph: {
    title: 'Digital Marketing and SEO Services | NNC Digital',
    description: 'Google Ads, Meta Ads, SEO, social media management and content marketing. ROI-driven campaigns for service businesses in India.',
    url: `${SITE.url}/services/digital-marketing-seo`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'Digital Marketing and SEO – NNC Digital' }],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.nakshatranamahacreations.com/services/digital-marketing-seo#service',
  serviceType: 'Digital Marketing and SEO',
  name: 'Digital Marketing, SEO and Google Ads Services',
  alternateName: 'Performance Marketing and Search Engine Optimization',
  description: 'NNC delivers full-funnel digital marketing including Google Ads, Meta Ads, SEO, social media management and content marketing. Specialist in local SEO, lead generation campaigns and ROI-driven Google Ads architecture for service businesses, coaching institutes, healthcare and e-commerce.',
  url: 'https://www.nakshatranamahacreations.com/services/digital-marketing-seo',
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
    name: 'Digital Marketing Packages',
    itemListElement: [
      { '@type': 'Offer', name: 'Search Engine Optimization', description: 'On-page SEO, technical SEO, local SEO, link building and monthly content', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: 'Google Ads Management', description: 'Campaign architecture, keyword research, ad copy, conversion tracking and monthly optimization', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: 'Social Media Marketing', description: 'Instagram, Facebook and LinkedIn content, creatives, reels and community management', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
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
    { '@type': 'ListItem', position: 3, name: 'Digital Marketing and SEO', item: `${SITE.url}/services/digital-marketing-seo` },
  ],
}

const data = {
  badge: 'Service · Digital Marketing and SEO',
  h1: 'Digital Marketing',
  h1Accent: 'and SEO',
  tagline: 'Google Ads, Meta Ads, SEO, social media and content marketing. ROI-driven campaigns. Local SEO specialists. Fixed monthly retainers.',
  desc: 'NNC delivers full-funnel digital marketing for service businesses, healthcare, coaching institutes, real estate and e-commerce across India. Google Ads, Meta Ads, local SEO, technical SEO, social media management and content marketing — all under one in-house team with transparent monthly reporting.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'digital marketing and SEO',
  h2Features: 'Digital Marketing Services We Offer',
  features: [
    { h3: 'Search Engine Optimization (SEO)', desc: 'Technical SEO audit, on-page optimization, local SEO, link building, content strategy and monthly performance reporting for organic growth.' },
    { h3: 'Google Ads Management', desc: 'Campaign architecture, keyword research, ad copy, landing page alignment, conversion tracking and CPA optimization for Google Search and Display.' },
    { h3: 'Meta Ads (Facebook and Instagram)', desc: 'Lead generation and retargeting campaigns on Facebook and Instagram — audience targeting, creative testing and conversion funnel optimization.' },
    { h3: 'Local SEO and Google Business Profile', desc: 'Google Business Profile optimization, local citation building, map pack ranking and review management for multi-location businesses.' },
    { h3: 'Social Media Marketing', desc: 'Content creation, creative design, reels, post scheduling and community management for Instagram, Facebook and LinkedIn.' },
    { h3: 'Content Marketing', desc: 'Blog strategy, SEO articles, case studies, landing page copy and email marketing campaigns that build authority and generate inbound leads.' },
  ],
  h2Why: 'Why Choose NNC for Digital Marketing?',
  why: [
    { n: '01', h3: 'In-house team — SEO, Ads, content and design', body: 'NNC has dedicated in-house specialists for SEO, Google Ads, Meta Ads, content writing and creative design. No subcontracting to freelancers.' },
    { n: '02', h3: 'Transparent monthly reporting', body: 'Every client gets a monthly report showing ad spend, impressions, clicks, leads, cost per lead and keyword rankings — nothing hidden.' },
    { n: '03', h3: 'Local SEO specialists — GMB Map Pack focus', body: 'NNC specialises in local SEO for multi-city businesses. We have ranked clients in Google Maps top 3 for competitive keywords in Bangalore, Mumbai and Hyderabad.' },
    { n: '04', h3: 'ROI-first — performance over vanity metrics', body: 'Campaigns are optimised for leads and revenue, not just clicks and impressions. Every campaign has clear cost-per-lead targets from month 1.' },
    { n: '05', h3: 'Website and ads built together for higher conversion', body: 'NNC builds and markets websites — meaning landing pages are designed for your specific ad campaigns, not retrofitted.' },
    { n: '06', h3: '565+ projects — 4.9★ Google rating', body: 'Digital marketing track record across healthcare, real estate, education, ecommerce and service businesses.' },
  ],
  techStack: ['Google Ads', 'Meta Ads', 'Google Analytics 4', 'Search Console', 'Semrush', 'Ahrefs', 'Hotjar', 'Mailchimp'],
  h2Tech: 'Tools and Platforms',
  h2Faq: 'Digital Marketing and SEO — Frequently Asked Questions',
  faqs: [
    { q: 'How much does digital marketing cost at NNC?', a: 'SEO retainers start from ₹15,000/month. Google Ads management starts from ₹10,000/month (plus ad spend). Social media packages start from ₹12,000/month.' },
    { q: 'How long before SEO shows results?', a: 'Organic SEO results typically appear in 3–6 months for competitive keywords. Local SEO and Google Maps ranking can improve within 4–8 weeks.' },
    { q: 'Can NNC run Google Ads and SEO together?', a: 'Yes. NNC recommends running Google Ads and SEO together — Ads for immediate leads, SEO for long-term organic growth.' },
    { q: 'Do you work with businesses outside Bangalore?', a: 'Yes. NNC manages digital marketing for businesses across Bangalore, Mumbai, Hyderabad, Mysuru and nationally across India.' },
    { q: 'Is there a minimum contract period?', a: 'SEO and social media require a minimum 3-month commitment. Google Ads management is month-to-month after the initial setup.' },
  ],
}

export default function DigitalMarketingSeoServicePage() {
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
