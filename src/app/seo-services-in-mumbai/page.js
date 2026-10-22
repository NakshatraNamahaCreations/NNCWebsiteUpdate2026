import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'SEO Services in Mumbai | Organic Traffic Growth',
  description:
    'Choose our SEO services in Mumbai to improve rankings and organic traffic, with NNC delivering data driven strategies that generate leads and business growth.',
  alternates: {
    canonical: `${SITE.url}/seo-services-in-mumbai`,
  },
  keywords:
    'seo services in mumbai, seo services mumbai, seo agency mumbai, seo company mumbai, search engine optimisation mumbai, organic seo mumbai, local seo mumbai, technical seo mumbai, on page seo mumbai, seo experts mumbai, seo consultants mumbai',
  openGraph: {
    title: 'SEO Services in Mumbai | Organic Traffic Growth',
    description:
      'Choose our SEO services in Mumbai to improve rankings and organic traffic, with NNC delivering data driven strategies that generate leads and business growth.',
    url: `${SITE.url}/seo-services-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'SEO Services in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'SEO Services in Mumbai | Organic Traffic Growth',
    description:
      'Choose our SEO services in Mumbai to improve rankings and organic traffic, with NNC delivering data driven strategies that generate leads and business growth.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SEO Services in Mumbai',
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
    'SEO Services',
    'Search Engine Optimisation',
    'Technical SEO',
    'On Page SEO',
    'Local SEO',
    'Ecommerce SEO',
    'Link Building',
  ],
  description:
    'SEO services in Mumbai — data driven strategies to improve rankings, grow organic traffic and generate leads for Mumbai businesses. Branch office in Thane West.',
  url: `${SITE.url}/seo-services-in-mumbai`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Local SEO Package Mumbai',
      price: '12000',
      priceCurrency: 'INR',
      description: 'Local SEO for Mumbai businesses — Google Business Profile, local citations and on-page optimisation.',
    },
    {
      '@type': 'Offer',
      name: 'Full SEO Package Mumbai',
      price: '25000',
      priceCurrency: 'INR',
      description: 'Comprehensive SEO — technical audit, on-page, content strategy, link building and monthly reporting.',
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
      name: 'SEO Company in Mumbai',
      item: `${SITE.url}/seo-services-company-in-mumbai`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'SEO Services in Mumbai',
      item: `${SITE.url}/seo-services-in-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What SEO services does NNC offer in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC provides comprehensive SEO services in Mumbai — technical SEO audits, on-page optimisation, content strategy, local SEO, ecommerce SEO, link building, Core Web Vitals improvement and monthly ranking and traffic reports.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why choose NNC for SEO services in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Mumbai's top-rated SEO agencies — 565+ projects delivered, 4.9★ Google rating, branch office in Thane West. Our in-house SEO specialists deliver data driven strategies that improve rankings, grow organic traffic and generate qualified leads for Mumbai businesses.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much do SEO services cost in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A local SEO package for Mumbai businesses starts from ₹12,000 per month. A full SEO package including technical SEO, content and link building starts from ₹25,000 per month. All packages are fixed-fee with clear monthly deliverables.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does SEO take to show results in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most Mumbai businesses see measurable ranking improvements within 3–4 months of consistent SEO work. Local SEO results can appear faster — within 4–8 weeks for Google Business Profile optimisation. Long-term organic traffic growth compounds over 6–12 months.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer local SEO services for Mumbai businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides local SEO services for Mumbai businesses — Google Business Profile optimisation, local citation building, local keyword targeting, review management and hyper-local content strategy to rank for location-based searches across Mumbai, Thane and Navi Mumbai.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer technical SEO services in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides technical SEO services for Mumbai websites — site speed optimisation, Core Web Vitals improvement, crawlability fixes, structured data (schema markup), mobile optimisation, canonical tags and XML sitemap management.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have an SEO office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to review your SEO performance reports and discuss organic growth strategy with our Mumbai SEO team.',
      },
    },
  ],
}

const data = {
  badge: 'SEO Services · Mumbai',
  h1: 'SEO Services',
  h1Accent: 'in Mumbai',
  tagline:
    'Data driven SEO services in Mumbai — improve rankings, grow organic traffic and generate qualified leads. Technical SEO, on-page, local SEO and link building. Office in Thane West. Fixed fee.',
  desc:
    "NNC Digital's SEO services in Mumbai deliver data driven strategies that improve search rankings, grow organic traffic and generate qualified leads for startups, SMEs and enterprises across Mumbai, Thane and Navi Mumbai. Our in-house SEO specialists handle technical SEO, on-page optimisation, content strategy, local SEO and link building — a complete organic growth engine with monthly reporting, full transparency and zero outsourcing.",
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'SEO services in Mumbai',
  h2Features: 'SEO Services We Offer in Mumbai',
  features: [
    {
      h3: 'Technical SEO Services Mumbai',
      desc: 'Technical SEO audit and fixes for Mumbai websites — site speed, Core Web Vitals, crawlability, indexation, structured data (schema markup), mobile optimisation, canonical tags and XML sitemap management.',
    },
    {
      h3: 'On Page SEO Services Mumbai',
      desc: 'On-page SEO optimisation for Mumbai businesses — keyword research, meta titles and descriptions, heading structure, internal linking, content optimisation and image alt text for improved rankings.',
    },
    {
      h3: 'Local SEO Services Mumbai',
      desc: 'Local SEO for Mumbai businesses — Google Business Profile optimisation, local citation building, local keyword targeting, review management and hyper-local content to rank for location-based searches.',
    },
    {
      h3: 'Content Strategy & SEO Writing Mumbai',
      desc: 'SEO content strategy for Mumbai websites — keyword mapping, content gap analysis, blog writing, landing page copy and pillar page architecture that builds topical authority and drives organic traffic.',
    },
    {
      h3: 'Link Building Services Mumbai',
      desc: 'High quality link building for Mumbai websites — editorial outreach, guest posting, digital PR, broken link building and local business directory submissions to build domain authority.',
    },
    {
      h3: 'Ecommerce SEO Services Mumbai',
      desc: 'Ecommerce SEO for Mumbai online stores — product page optimisation, category page SEO, faceted navigation handling, schema markup for products and Shopify or WooCommerce technical SEO fixes.',
    },
    {
      h3: 'Core Web Vitals Optimisation Mumbai',
      desc: 'Core Web Vitals improvement for Mumbai websites — LCP, FID, CLS fixes with image optimisation, code splitting, lazy loading and server response time improvements for PageSpeed 90+.',
    },
    {
      h3: 'SEO Audit Services Mumbai',
      desc: 'Comprehensive SEO audit for Mumbai websites — technical health check, backlink profile analysis, competitor gap analysis, keyword opportunity report and a prioritised action plan for organic growth.',
    },
    {
      h3: 'SEO Reporting & Analytics Mumbai',
      desc: 'Monthly SEO performance reports for Mumbai clients — keyword ranking movements, organic traffic trends, conversion data, backlink growth and actionable next steps. Full transparency, no vanity metric reporting.',
    },
  ],
  h2Why: 'Why Choose NNC for SEO Services in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — review rankings in person',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to review SEO performance dashboards, discuss keyword strategy and meet the SEO specialists working on your website.',
    },
    {
      n: '02',
      h3: 'In-house SEO team — zero outsourcing',
      body: 'Every SEO specialist, content writer and technical analyst is a full-time NNC employee. Consistent strategy, consistent execution and consistent accountability — no freelancers, no white-label agencies.',
    },
    {
      n: '03',
      h3: 'Data driven — rankings, traffic and leads',
      body: "NNC's SEO services are built around business outcomes — organic keyword rankings, qualified traffic growth and lead generation. Every recommendation is backed by data, not guesswork.",
    },
    {
      n: '04',
      h3: 'Full stack SEO — technical, content and links',
      body: 'NNC manages all three pillars of SEO — technical health, content strategy and link authority. Single team, single contract and a complete organic growth engine for your Mumbai website.',
    },
    {
      n: '05',
      h3: 'Fixed fee — clear deliverables every month',
      body: 'Every SEO package is fixed-fee with clear monthly deliverables — audits, optimisations, content pieces and links all agreed upfront. No ambiguous retainers, no surprise invoices.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has delivered SEO campaigns for startups, ecommerce brands, B2B companies and enterprises across Mumbai. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['Semrush', 'Ahrefs', 'Google Search Console', 'GA4', 'Screaming Frog', 'Moz', 'PageSpeed Insights', 'Looker Studio'],
  h2Tech: 'SEO Tools & Technology',
  h2Faq: 'SEO Services Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'What SEO services does NNC offer in Mumbai?',
      a: 'Technical SEO, on-page optimisation, local SEO, content strategy, link building, ecommerce SEO, Core Web Vitals and monthly reporting — all by in-house SEO specialists.',
    },
    {
      q: 'How much do SEO services cost in Mumbai?',
      a: 'Local SEO from ₹12,000/month. Full SEO package from ₹25,000/month. Fixed fee — clear monthly deliverables, no surprise invoices.',
    },
    {
      q: 'How long does SEO take to show results in Mumbai?',
      a: 'Ranking improvements typically appear within 3–4 months. Local SEO results can show in 4–8 weeks. Long-term organic traffic growth compounds over 6–12 months.',
    },
    {
      q: 'Do you offer local SEO services in Mumbai?',
      a: 'Yes. NNC provides local SEO — Google Business Profile optimisation, local citations, local keyword targeting and review management to rank for Mumbai location-based searches.',
    },
    {
      q: 'Do you offer technical SEO services in Mumbai?',
      a: 'Yes. NNC provides technical SEO — site speed, Core Web Vitals, crawlability, schema markup, mobile optimisation and canonical tags. PageSpeed 90+ delivered.',
    },
    {
      q: 'Do you have an SEO office in Mumbai?',
      a: 'Yes. NNC has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to review SEO reports and discuss organic growth strategy.',
    },
  ],
}

export default function SeoServicesInMumbaiPage() {
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
