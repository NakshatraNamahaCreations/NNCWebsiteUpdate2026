import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Google Ads Agency in Mumbai | NNC Digital',
  description:
    'Top Google Ads agency in Mumbai. Google Ads management, PPC agency, PPC services, Google Adwords agency, Google Ads experts, Adwords management, Google Ads consultants & pay per click agency for Mumbai businesses. Office in Thane West.',
  alternates: {
    canonical: `${SITE.url}/google-ads-agency-in-mumbai`,
  },
  keywords:
    'google ads agency in mumbai, google ads management mumbai, ppc agency mumbai, ppc services mumbai, google adwords agency mumbai, google ads experts mumbai, adwords management mumbai, google ads consultants mumbai, pay per click agency mumbai',
  openGraph: {
    title: 'Google Ads Agency in Mumbai | NNC Digital',
    description:
      'Google Ads agency in Mumbai — Google Ads management, PPC agency, PPC services, Adwords management & pay per click campaigns for Mumbai businesses. Office in Thane West.',
    url: `${SITE.url}/google-ads-agency-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Google Ads Agency in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Google Ads Agency in Mumbai | NNC Digital',
    description:
      'Google Ads agency in Mumbai — PPC agency, Google Ads management, Adwords management & pay per click services. Office in Thane West.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Google Ads Agency in Mumbai',
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
    'Google Ads Management',
    'PPC Agency',
    'PPC Services',
    'Google Adwords Agency',
    'Pay Per Click Agency',
    'Google Ads Consultants',
    'Adwords Management',
  ],
  description:
    'Google Ads agency in Mumbai — Google Ads management, PPC agency services, Google Adwords management, pay per click campaigns and Google Ads consultancy for Mumbai businesses. Branch office in Thane West.',
  url: `${SITE.url}/google-ads-agency-in-mumbai`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Google Ads Management Mumbai — Starter',
      price: '15000',
      priceCurrency: 'INR',
      description: 'Google Ads campaign setup and monthly management — keyword research, ad copy, bid management and monthly performance report.',
    },
    {
      '@type': 'Offer',
      name: 'Google Ads Management Mumbai — Growth',
      price: '30000',
      priceCurrency: 'INR',
      description: 'Full PPC management — Search, Display, Shopping and Remarketing campaigns with weekly reporting and conversion optimisation.',
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
      name: 'Digital Marketing Agency Mumbai',
      item: `${SITE.url}/digital-marketing-agency-in-mumbai`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Google Ads Agency in Mumbai',
      item: `${SITE.url}/google-ads-agency-in-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best Google Ads agency in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Mumbai's top-rated Google Ads agencies — 565+ projects delivered, 4.9★ Google rating, branch office in Thane West. We provide Google Ads management, PPC services, Adwords management and pay per click campaigns for Mumbai businesses across all industries.",
      },
    },
    {
      '@type': 'Question',
      name: 'What Google Ads and PPC services does NNC provide in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Mumbai provides full Google Ads management — Search campaigns, Display campaigns, Shopping Ads, YouTube Ads, Remarketing and Performance Max. Also includes keyword research, ad copy creation, bid strategy, A/B testing, conversion tracking and weekly performance reporting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you manage Google Search Ads for Mumbai businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC manages Google Search Ads for Mumbai businesses — keyword research, match type strategy, ad copy writing, quality score optimisation, negative keyword management and bid adjustments to maximise leads and revenue at the lowest cost per click.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in Google Ads management in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC's Google Ads management in Mumbai includes account audit, campaign structure setup, keyword research, ad copy creation, audience targeting, bid strategy management, conversion tracking implementation, A/B ad testing, negative keyword updates and monthly/weekly performance reports with cost per lead breakdown.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you run Google Shopping Ads for Mumbai ecommerce businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC manages Google Shopping Ads for Mumbai ecommerce stores — product feed optimisation, Shopping campaign structure, Smart Shopping, Performance Max and product listing ad (PLA) management with ROAS-focused bidding strategies.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Google Ads management cost in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google Ads management in Mumbai starts from ₹15,000/month (management fee) — covering campaign setup, keyword research, ad copy, bid management and monthly reporting. Full PPC management including Search, Display and Remarketing starts from ₹30,000/month. Management fee is separate from your Google Ads spend budget.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a Google Ads office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. You can visit our Mumbai PPC team to review campaign performance, go through keyword strategy and discuss your Google Ads budget allocation in person.',
      },
    },
  ],
}

const data = {
  badge: 'Google Ads & PPC · Mumbai',
  h1: 'Google Ads Agency',
  h1Accent: 'in Mumbai',
  tagline:
    'Top Google Ads agency in Mumbai — Google Ads management, PPC agency, PPC services, Google Adwords agency, Google Ads experts, Adwords management, Google Ads consultants & pay per click agency. Office in Thane West.',
  desc:
    'NNC Digital is a specialist Google Ads agency in Mumbai managing Search, Display, Shopping, YouTube and Remarketing campaigns for businesses across Mumbai, Thane and Navi Mumbai. From PPC agency services and Google Adwords management to pay per click strategy and Google Ads consultancy — every campaign is run by our certified Google Ads experts with weekly reporting on leads, revenue and cost per acquisition. Branch office in Thane West for in-person campaign reviews.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'Google Ads management in Mumbai',
  h2Features: 'Google Ads & PPC Services in Mumbai',
  features: [
    {
      h3: 'Google Ads Management Mumbai',
      desc: 'Full Google Ads management for Mumbai businesses — campaign audit, keyword research, ad copy creation, bid strategy, A/B testing, conversion tracking and weekly performance reports. Search, Display, Shopping and Remarketing under one team.',
    },
    {
      h3: 'PPC Agency Mumbai',
      desc: 'PPC agency services for Mumbai businesses — pay per click strategy, campaign structure, keyword match types, quality score optimisation and bid management focused on maximising leads and revenue at the lowest cost per click.',
    },
    {
      h3: 'PPC Services Mumbai — Search Campaigns',
      desc: 'Google Search Ads management in Mumbai — intent-driven keyword targeting, responsive search ads, ad extensions (callouts, sitelinks, structured snippets), negative keyword management and location-based bid adjustments for Mumbai and suburbs.',
    },
    {
      h3: 'Google Adwords Agency Mumbai',
      desc: 'Google Adwords campaign management for Mumbai businesses — account restructuring, Quality Score improvements, ad relevance optimisation and landing page alignment to reduce cost per click and increase conversion rates.',
    },
    {
      h3: 'Google Ads Experts Mumbai — Display & Remarketing',
      desc: 'Google Display Network and Remarketing campaigns by NNC\'s Mumbai Google Ads experts — audience creation, banner ad design, remarketing list segmentation and frequency capping to re-engage Mumbai visitors and drive conversions.',
    },
    {
      h3: 'Adwords Management Mumbai — Shopping Ads',
      desc: 'Google Shopping Ads management for Mumbai ecommerce stores — product feed optimisation, Shopping campaign structure, Performance Max, Smart Shopping and ROAS-focused bidding to maximise online store revenue.',
    },
    {
      h3: 'Google Ads Consultants Mumbai',
      desc: 'Google Ads consultancy for Mumbai businesses with in-house teams — account audits, campaign strategy reviews, keyword gap analysis and recommendations to improve Quality Score, reduce wasted spend and increase conversion volume.',
    },
    {
      h3: 'Pay Per Click Agency Mumbai — YouTube Ads',
      desc: 'YouTube Ads management as part of NNC\'s pay per click agency services in Mumbai — TrueView In-Stream ads, bumper ads, video discovery ads and YouTube remarketing targeting Mumbai audiences by demographics, interests and search intent.',
    },
    {
      h3: 'Google Ads Agency Mumbai — Conversion Tracking',
      desc: 'Full conversion tracking setup for Mumbai Google Ads campaigns — Google Tag Manager implementation, goal tracking (form fills, calls, purchases), Google Ads conversion import and GA4 integration for accurate ROI measurement.',
    },
  ],
  h2Why: 'Why Choose NNC as Your Google Ads Agency in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — review campaigns in person',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to go through your Google Ads performance report, review keyword strategy and discuss budget allocation face-to-face with the team managing your account.',
    },
    {
      n: '02',
      h3: 'Reported on leads and revenue — not just clicks',
      body: "NNC reports Google Ads results the way Mumbai business owners want — number of leads, cost per lead, revenue attributed to paid search and ROAS. Not just impressions, clicks and CTR.",
    },
    {
      n: '03',
      h3: 'Certified Google Ads experts — in-house',
      body: 'Every Google Ads manager and PPC specialist is a full-time NNC employee. Certified Google Ads experts managing your campaigns consistently month after month — no freelancer handoffs, no offshore outsourcing.',
    },
    {
      n: '04',
      h3: 'All campaign types — Search, Display, Shopping, YouTube',
      body: 'NNC manages every Google Ads campaign type under one roof — Search, Display, Shopping, YouTube, Remarketing and Performance Max. One agency with full visibility across your entire Google Ads account.',
    },
    {
      n: '05',
      h3: 'Fixed management fee — no percentage of spend billing',
      body: 'NNC charges a fixed monthly management fee — not a percentage of your ad spend. No incentive to inflate your budget. Transparent pricing with a defined scope of work each month.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has managed Google Ads for ecommerce, real estate, healthcare, education and B2B businesses across Mumbai. 4.9★ rated on Google with verifiable client reviews from Mumbai businesses.',
    },
  ],
  techStack: ['Google Ads', 'Google Tag Manager', 'Google Analytics 4', 'Google Merchant Center', 'SEMrush', 'Ahrefs', 'Looker Studio', 'Meta Ads Manager'],
  h2Tech: 'Google Ads Tools & Platforms',
  h2Faq: 'Google Ads Agency Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best Google Ads agency in Mumbai?',
      a: "NNC Digital is among Mumbai's top Google Ads agencies — 565+ projects, 4.9★ Google rating, office in Thane West. Google Ads management, PPC services, Shopping Ads and Remarketing — all managed in-house.",
    },
    {
      q: 'What is included in Google Ads management in Mumbai?',
      a: 'Campaign setup, keyword research, ad copy, bid strategy, A/B testing, conversion tracking, negative keywords and weekly performance reports with cost per lead breakdown.',
    },
    {
      q: 'Do you run Google Shopping Ads for Mumbai ecommerce stores?',
      a: 'Yes. NNC manages Google Shopping Ads — product feed optimisation, Performance Max and ROAS-focused bidding for Mumbai ecommerce businesses.',
    },
    {
      q: 'Do you offer Google Ads consultancy in Mumbai?',
      a: 'Yes. NNC provides Google Ads consultancy for Mumbai businesses — account audits, strategy reviews, keyword gap analysis and recommendations for in-house teams.',
    },
    {
      q: 'How much does Google Ads management cost in Mumbai?',
      a: 'Google Ads management starts from ₹15,000/month. Full PPC management including Search, Display and Remarketing starts from ₹30,000/month. Fixed fee — not a percentage of ad spend.',
    },
    {
      q: 'Do you have a Google Ads office in Mumbai?',
      a: 'Yes. NNC has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to review campaign performance and discuss Google Ads strategy in person.',
    },
  ],
}

export default function GoogleAdsAgencyMumbaiPage() {
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
