import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Digital Marketing Agency Hyderabad | Conversion Optimization',
  description:
    'Choose our digital marketing agency Hyderabad to boost online visibility and leads, with NNC delivering SEO, ads, and performance driven marketing strategies.',
  alternates: {
    canonical: `${SITE.url}/digital-marketing-agency-hyderabad`,
  },
  keywords:
    'digital marketing agency hyderabad, digital marketing company hyderabad, digital marketing services hyderabad, seo agency hyderabad, google ads agency hyderabad, social media marketing hyderabad, performance marketing hyderabad, online marketing agency hyderabad, best digital marketing agency hyderabad',
  openGraph: {
    title: 'Digital Marketing Agency Hyderabad | Conversion Optimization',
    description:
      'Choose our digital marketing agency Hyderabad to boost online visibility and leads, with NNC delivering SEO, ads, and performance driven marketing strategies.',
    url: `${SITE.url}/digital-marketing-agency-hyderabad`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Digital Marketing Agency Hyderabad – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Digital Marketing Agency Hyderabad | Conversion Optimization',
    description:
      'Choose our digital marketing agency Hyderabad to boost online visibility and leads, with NNC delivering SEO, ads, and performance driven marketing strategies.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Digital Marketing Agency Hyderabad',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4th Floor, Skootr, Salarpuria Sattva Knowledge City',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: '500081',
      addressCountry: 'IN',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Hyderabad' },
    { '@type': 'City', name: 'Secunderabad' },
    { '@type': 'City', name: 'HITEC City' },
    { '@type': 'City', name: 'Gachibowli' },
    { '@type': 'City', name: 'Banjara Hills' },
  ],
  serviceType: [
    'Digital Marketing',
    'SEO Services',
    'Google Ads Management',
    'Social Media Marketing',
    'Performance Marketing',
    'Conversion Optimisation',
    'Content Marketing',
  ],
  description:
    'Digital marketing agency in Hyderabad — SEO, Google Ads, social media marketing and performance-driven strategies to boost online visibility, leads and conversions.',
  url: `${SITE.url}/digital-marketing-agency-hyderabad`,
  offers: [
    {
      '@type': 'Offer',
      name: 'SEO Services Hyderabad',
      price: '15000',
      priceCurrency: 'INR',
      description: 'Monthly SEO — keyword research, on-page optimisation, link building and ranking reports.',
    },
    {
      '@type': 'Offer',
      name: 'Full Digital Marketing Package Hyderabad',
      price: '35000',
      priceCurrency: 'INR',
      description: 'SEO + Google Ads + Social Media — full digital marketing management with monthly reporting.',
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
      name: 'Digital Marketing Agency',
      item: `${SITE.url}/digital-marketing-agency-in-bangalore`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Digital Marketing Agency Hyderabad',
      item: `${SITE.url}/digital-marketing-agency-hyderabad`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best digital marketing agency in Hyderabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Hyderabad's top-rated digital marketing agencies — 565+ projects delivered, 4.9★ Google rating. We deliver SEO, Google Ads, social media marketing and performance-driven strategies that boost online visibility and generate qualified leads for Hyderabad businesses.",
      },
    },
    {
      '@type': 'Question',
      name: 'What digital marketing services does NNC offer in Hyderabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC provides full digital marketing services in Hyderabad — SEO, Google Ads management, Meta Ads, social media marketing, content marketing, email marketing, conversion rate optimisation and monthly performance reporting.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do digital marketing services cost in Hyderabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SEO services start from ₹15,000/month. A full digital marketing package (SEO + Google Ads + Social Media) starts from ₹35,000/month. All packages are fixed-fee with clear monthly deliverables.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer SEO services for Hyderabad businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides SEO services for Hyderabad businesses — technical SEO, on-page optimisation, local SEO, content strategy and link building to improve search rankings and grow organic traffic for HITEC City and Hyderabad companies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you run Google Ads for Hyderabad businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC manages Google Ads campaigns for Hyderabad businesses — Search, Display, Shopping and YouTube campaigns with keyword research, ad copy, bid strategy, conversion tracking and monthly reporting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer conversion optimisation for Hyderabad businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides conversion rate optimisation (CRO) for Hyderabad businesses — landing page optimisation, A/B testing, user journey analysis, form optimisation and heat mapping to turn more Hyderabad website visitors into leads and customers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can NNC digital marketing help Hyderabad businesses grow online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC has helped startups, IT companies, ecommerce brands and enterprises across Hyderabad grow their online visibility, increase qualified leads and improve ROI through data-driven digital marketing strategies.',
      },
    },
  ],
}

const data = {
  badge: 'Digital Marketing Agency · Hyderabad',
  h1: 'Digital Marketing Agency',
  h1Accent: 'Hyderabad',
  tagline:
    'Top digital marketing agency in Hyderabad — SEO, Google Ads, social media and performance-driven strategies to boost online visibility, leads and conversions. Fixed fee. Data driven.',
  desc:
    'NNC Digital is a digital marketing agency serving Hyderabad — delivering SEO, Google Ads, social media marketing and performance-driven strategies that boost online visibility and generate qualified leads for startups, IT companies, ecommerce brands and enterprises across Hyderabad, HITEC City, Gachibowli and Secunderabad. Every campaign is data driven, conversion-focused and reported monthly with full transparency.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'digital marketing in Hyderabad',
  h2Features: 'Digital Marketing Services in Hyderabad',
  features: [
    {
      h3: 'SEO Services Hyderabad',
      desc: 'Search engine optimisation for Hyderabad businesses — technical SEO, on-page optimisation, local SEO, content strategy and link building to improve rankings and grow organic traffic for HITEC City and Hyderabad companies.',
    },
    {
      h3: 'Google Ads Management Hyderabad',
      desc: 'Google Ads campaigns for Hyderabad businesses — Search, Display, Shopping and YouTube with keyword research, ad copy, bid strategy, conversion tracking and monthly performance reporting.',
    },
    {
      h3: 'Meta Ads (Facebook & Instagram) Hyderabad',
      desc: 'Facebook and Instagram ad campaigns for Hyderabad businesses — audience targeting, creative strategy, A/B testing, retargeting, lookalike audiences and lead generation with full ROI reporting.',
    },
    {
      h3: 'Social Media Marketing Hyderabad',
      desc: 'Social media marketing for Hyderabad brands — organic content strategy, paid campaigns, Instagram marketing, LinkedIn marketing and community management across all platforms.',
    },
    {
      h3: 'Conversion Rate Optimisation Hyderabad',
      desc: 'CRO for Hyderabad websites — landing page optimisation, A/B testing, user journey analysis, form optimisation and heat mapping to improve conversion rates and maximise ROI from existing traffic.',
    },
    {
      h3: 'Content Marketing Hyderabad',
      desc: 'Content marketing for Hyderabad businesses — blog strategy, SEO content writing, pillar pages, case studies and thought leadership content that builds authority and drives organic traffic.',
    },
    {
      h3: 'Local SEO Hyderabad',
      desc: 'Local SEO for Hyderabad businesses — Google Business Profile optimisation, local citation building, local keyword targeting and review management to rank for location-based searches across Hyderabad.',
    },
    {
      h3: 'Performance Marketing Hyderabad',
      desc: 'Full funnel performance marketing for Hyderabad — campaign strategy, audience targeting, creative briefing, landing page optimisation and ROI-focused budget allocation across Google and Meta.',
    },
    {
      h3: 'Digital Marketing Reporting Hyderabad',
      desc: 'Monthly digital marketing reports for Hyderabad clients — rankings, organic traffic, cost per lead, ROAS, social engagement and actionable recommendations. Full transparency, no vanity metrics.',
    },
  ],
  h2Why: 'Why Choose NNC as Your Digital Marketing Agency in Hyderabad?',
  why: [
    {
      n: '01',
      h3: 'Serving Hyderabad — HITEC City to Secunderabad',
      body: "NNC serves Hyderabad's full business corridor — HITEC City, Gachibowli, Banjara Hills, Jubilee Hills and Secunderabad. Remote engagement with weekly campaign reviews and full monthly reporting.",
    },
    {
      n: '02',
      h3: 'In-house team — SEO, paid media and social',
      body: 'NNC has in-house SEO specialists, Google Ads certified media buyers and social media managers. No account managers outsourcing your work — the team you speak to is the team running your Hyderabad campaigns.',
    },
    {
      n: '03',
      h3: 'Data driven — conversions, not just traffic',
      body: "NNC's digital marketing is built around business outcomes — qualified leads, cost per acquisition and ROAS. Every Hyderabad campaign is structured for conversion, not just impressions or vanity metrics.",
    },
    {
      n: '04',
      h3: 'Full service — SEO, ads, social and content',
      body: 'NNC manages your entire digital marketing engine — SEO, Google Ads, Meta Ads, social media and content. Single agency, single strategy and complete accountability for your Hyderabad online growth.',
    },
    {
      n: '05',
      h3: 'Fixed fee — clear deliverables every month',
      body: 'Every digital marketing package is fixed-fee with clear monthly deliverables agreed upfront. No ambiguous retainers, no percentage of ad spend billing, no surprise invoices.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has delivered digital marketing campaigns for startups, ecommerce brands, IT companies and enterprises. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['Semrush', 'Google Ads', 'Meta Ads Manager', 'GA4', 'Google Search Console', 'Ahrefs', 'Looker Studio', 'HubSpot'],
  h2Tech: 'Digital Marketing Tools',
  h2Faq: 'Digital Marketing Agency Hyderabad — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best digital marketing agency in Hyderabad?',
      a: "NNC Digital — 565+ projects, 4.9★ Google rating. SEO, Google Ads, social media and performance-driven strategies to boost online visibility and leads for Hyderabad businesses.",
    },
    {
      q: 'How much do digital marketing services cost in Hyderabad?',
      a: 'SEO from ₹15,000/month. Full digital marketing package from ₹35,000/month. Fixed fee — clear monthly deliverables, no surprise invoices.',
    },
    {
      q: 'Do you offer SEO services for Hyderabad businesses?',
      a: 'Yes. Technical SEO, on-page, local SEO, content strategy and link building to improve rankings and grow organic traffic for HITEC City and Hyderabad companies.',
    },
    {
      q: 'Do you run Google Ads for Hyderabad businesses?',
      a: 'Yes. Search, Display, Shopping and YouTube campaigns — keyword research, ad copy, bid strategy, conversion tracking and monthly reporting.',
    },
    {
      q: 'Do you offer conversion optimisation for Hyderabad businesses?',
      a: 'Yes. Landing page optimisation, A/B testing, user journey analysis and heat mapping to turn more Hyderabad website visitors into leads.',
    },
    {
      q: 'Do you serve HITEC City businesses in Hyderabad?',
      a: 'Yes. NNC serves HITEC City, Gachibowli, Banjara Hills and Secunderabad — tech startups, IT companies and enterprises across Hyderabad.',
    },
  ],
}

export default function DigitalMarketingAgencyHyderabadPage() {
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
