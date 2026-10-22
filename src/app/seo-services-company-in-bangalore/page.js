import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'SEO Services Company in Bangalore | NNC Digital',
  description:
    'Top SEO services company in Bangalore. SEO agency, best SEO company, local SEO services, technical SEO, on page SEO, SEO experts, SEO consultants, ecommerce SEO, hire SEO expert & affordable SEO services for Bangalore businesses. Headquartered in Whitefield. Fixed price.',
  alternates: {
    canonical: `${SITE.url}/seo-services-company-in-bangalore`,
  },
  keywords:
    'seo services in bangalore, seo company in bangalore, best seo company bangalore, local seo services bangalore, seo agency in bangalore, technical seo services bangalore, on page seo services bangalore, seo experts bangalore, seo consultants bangalore, ecommerce seo services bangalore, hire seo expert bangalore, affordable seo services bangalore',
  openGraph: {
    title: 'SEO Services Company in Bangalore | NNC Digital',
    description:
      'SEO services company in Bangalore — local SEO, technical SEO, on page SEO, ecommerce SEO, SEO experts & SEO consultants for Bangalore businesses. Headquartered in Whitefield.',
    url: `${SITE.url}/seo-services-company-in-bangalore`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'SEO Services Company in Bangalore – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'SEO Services Company in Bangalore | NNC Digital',
    description:
      'SEO services company in Bangalore — local SEO, technical SEO, ecommerce SEO, SEO experts & affordable SEO services. Headquartered in Whitefield.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SEO Services Company in Bangalore',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7th Floor, Magnolia, Prestige Shantiniketan',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      postalCode: '560048',
      addressCountry: 'IN',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Bangalore' },
    { '@type': 'City', name: 'Whitefield' },
    { '@type': 'City', name: 'Electronic City' },
    { '@type': 'City', name: 'Koramangala' },
    { '@type': 'City', name: 'Indiranagar' },
  ],
  serviceType: [
    'SEO Services',
    'Local SEO Services',
    'Technical SEO',
    'On Page SEO',
    'Ecommerce SEO',
    'SEO Agency',
    'SEO Consultants',
  ],
  description:
    'Full-service SEO company in Bangalore — local SEO, technical SEO, on page SEO, ecommerce SEO, SEO experts and SEO consultants for Bangalore businesses. Headquartered in Whitefield, Bangalore.',
  url: `${SITE.url}/seo-services-company-in-bangalore`,
  offers: [
    {
      '@type': 'Offer',
      name: 'SEO Services Bangalore — Starter',
      price: '15000',
      priceCurrency: 'INR',
      description: 'Monthly SEO — on page optimisation, technical audit fixes, content optimisation and monthly ranking report.',
    },
    {
      '@type': 'Offer',
      name: 'SEO Services Bangalore — Growth',
      price: '30000',
      priceCurrency: 'INR',
      description: 'Full SEO — technical SEO, on page, local SEO, link building, content strategy and weekly reporting.',
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
      name: 'Digital Marketing Agency in Bangalore',
      item: `${SITE.url}/digital-marketing-agency-in-bangalore`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'SEO Services Company in Bangalore',
      item: `${SITE.url}/seo-services-company-in-bangalore`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best SEO company in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Bangalore's top-rated SEO companies — 565+ projects delivered, 4.9★ Google rating, headquartered in Whitefield, Bangalore. We provide local SEO, technical SEO, on page SEO, ecommerce SEO and full SEO consultancy for Bangalore businesses across all industries.",
      },
    },
    {
      '@type': 'Question',
      name: 'What SEO services does NNC provide in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Bangalore provides full SEO services — technical SEO audit and fixes, on page SEO optimisation, local SEO (Google Business Profile, local citations), ecommerce SEO, link building, content strategy, keyword research and monthly ranking and traffic reports.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer local SEO services for Bangalore businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides local SEO services in Bangalore — Google Business Profile optimisation, local keyword targeting, NAP citation building, local link acquisition and local pack ranking for Bangalore and suburb-specific searches (Whitefield, Koramangala, Indiranagar, Electronic City, HSR Layout).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is technical SEO and do you provide it in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Technical SEO covers the structural and performance elements that affect how Google crawls and ranks your website — Core Web Vitals, site speed, crawlability, schema markup, canonical tags, duplicate content, XML sitemaps and mobile usability. NNC provides full technical SEO audits and implementation for Bangalore businesses.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide ecommerce SEO services in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides ecommerce SEO for Bangalore online stores — product page optimisation, category page SEO, structured data (Product, Review, BreadcrumbList schemas), site architecture, faceted navigation handling and ecommerce content strategy to drive organic product traffic.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do SEO services cost in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Monthly SEO services in Bangalore start from ₹15,000 — covering on page optimisation, technical fixes and monthly ranking reports. Full SEO packages including technical SEO, local SEO, link building and content typically start from ₹30,000/month. Fixed monthly retainer — no hourly billing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have an SEO office in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital is headquartered at Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit our Bangalore SEO team to review your current rankings, discuss your SEO strategy and go through monthly performance reports in person.',
      },
    },
  ],
}

const data = {
  badge: 'SEO Services · Bangalore',
  h1: 'SEO Services Company',
  h1Accent: 'in Bangalore',
  tagline:
    'Top SEO services company in Bangalore — local SEO services, technical SEO, on page SEO, ecommerce SEO, SEO experts, SEO consultants, hire SEO expert & affordable SEO services. Headquartered in Whitefield. Fixed price.',
  desc:
    'NNC Digital is a full-service SEO company in Bangalore helping businesses rank higher on Google and drive qualified organic traffic. From technical SEO audits and on page SEO optimisation to local SEO, ecommerce SEO and link building — every SEO campaign is managed by our in-house Bangalore SEO experts and SEO consultants with transparent monthly reporting on rankings, traffic and leads.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'SEO services in Bangalore',
  h2Features: 'SEO Services in Bangalore',
  features: [
    {
      h3: 'SEO Company Bangalore',
      desc: 'End-to-end SEO management for Bangalore businesses — keyword research, technical audit, on page optimisation, content strategy, link building and monthly reporting. One dedicated SEO team managing your rankings from day one.',
    },
    {
      h3: 'Local SEO Services Bangalore',
      desc: 'Local SEO for Bangalore businesses — Google Business Profile optimisation, local keyword targeting, NAP citation building, local link acquisition and suburb-level ranking for Whitefield, Koramangala, Indiranagar, Electronic City and HSR Layout searches.',
    },
    {
      h3: 'Technical SEO Services Bangalore',
      desc: 'Technical SEO audit and implementation for Bangalore websites — Core Web Vitals, site speed optimisation, crawl budget management, schema markup, canonical tags, duplicate content resolution, XML sitemaps and mobile usability fixes.',
    },
    {
      h3: 'On Page SEO Services Bangalore',
      desc: 'On page SEO optimisation for Bangalore businesses — title tags, meta descriptions, heading structure, keyword placement, internal linking, image optimisation and content gap analysis. Every page optimised to rank for its target keyword.',
    },
    {
      h3: 'SEO Agency Bangalore — Link Building',
      desc: 'White-hat link building for Bangalore businesses — guest posting, digital PR, resource link acquisition and niche-relevant backlinks that improve domain authority and push rankings for competitive Bangalore keywords.',
    },
    {
      h3: 'Ecommerce SEO Services Bangalore',
      desc: 'Ecommerce SEO for Bangalore online stores — product and category page optimisation, structured data (Product, Review, BreadcrumbList schemas), faceted navigation management, site architecture and content strategy to drive organic product traffic.',
    },
    {
      h3: 'SEO Experts Bangalore — Content Strategy',
      desc: "SEO-driven content strategy from NNC's Bangalore SEO experts — topic cluster mapping, blog content briefs, pillar page creation and FAQ content targeting high-intent Bangalore search queries that drive leads and enquiries.",
    },
    {
      h3: 'SEO Consultants Bangalore',
      desc: 'Dedicated SEO consultants in Bangalore for audits, strategy reviews and one-time engagements — competitor gap analysis, keyword mapping, site migration support and SEO recommendations for in-house teams to implement.',
    },
    {
      h3: 'Affordable SEO Services Bangalore',
      desc: 'Affordable SEO services for Bangalore SMEs and startups — fixed monthly retainers starting from ₹15,000 with no hourly billing, no hidden charges and transparent monthly ranking and traffic reports.',
    },
  ],
  h2Why: 'Why Choose NNC as Your SEO Company in Bangalore?',
  why: [
    {
      n: '01',
      h3: 'Bangalore headquarters — review rankings in person',
      body: 'NNC is headquartered at Prestige Shantiniketan, Whitefield, Bangalore. Visit us to go through your ranking report, review keyword progress and align SEO strategy with your business goals face-to-face.',
    },
    {
      n: '02',
      h3: 'Reported on rankings and traffic — not just activity',
      body: 'NNC reports what matters — keyword ranking movements, organic traffic growth, leads from organic search and pages climbing to page one. Not just tasks completed or hours billed.',
    },
    {
      n: '03',
      h3: 'In-house SEO team — not outsourced',
      body: 'Every SEO expert, technical SEO specialist and content strategist is a full-time NNC employee in Bangalore. Consistent team managing your SEO month after month — no offshore outsourcing, no freelancer turnover.',
    },
    {
      n: '04',
      h3: 'Technical + content + local — full-stack SEO',
      body: 'NNC handles every layer of SEO under one roof — technical fixes, on page optimisation, local SEO, content creation and link building. No need to coordinate multiple vendors for different parts of the same campaign.',
    },
    {
      n: '05',
      h3: 'Fixed monthly retainer — no hourly billing',
      body: 'Every SEO retainer is fixed-price with a defined monthly scope. No surprise invoices, no billing for every email. Affordable SEO services with full cost predictability for Bangalore businesses.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has delivered SEO for ecommerce, real estate, healthcare, SaaS, education and B2B businesses across Bangalore. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['Google Search Console', 'Ahrefs', 'SEMrush', 'Screaming Frog', 'Google Analytics 4', 'Moz', 'Surfer SEO', 'Google Business Profile'],
  h2Tech: 'SEO Tools & Platforms',
  h2Faq: 'SEO Services Bangalore — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best SEO company in Bangalore?',
      a: "NNC Digital is among Bangalore's top SEO companies — 565+ projects, 4.9★ Google rating, headquartered in Whitefield. Local SEO, technical SEO, on page SEO, ecommerce SEO — all in-house.",
    },
    {
      q: 'Do you offer local SEO services in Bangalore?',
      a: 'Yes. NNC provides local SEO for Bangalore businesses — Google Business Profile optimisation, local citations, local link building and suburb-level rankings for Whitefield, Koramangala, Indiranagar and Electronic City.',
    },
    {
      q: 'Do you provide technical SEO services in Bangalore?',
      a: 'Yes. NNC provides full technical SEO — Core Web Vitals, site speed, crawlability, schema markup, canonical tags, mobile usability and XML sitemaps for Bangalore websites.',
    },
    {
      q: 'Do you offer ecommerce SEO services in Bangalore?',
      a: 'Yes. NNC provides ecommerce SEO for Bangalore online stores — product and category page optimisation, structured data, faceted navigation and content strategy.',
    },
    {
      q: 'How much do SEO services cost in Bangalore?',
      a: 'SEO services in Bangalore start from ₹15,000/month. Full SEO packages including technical SEO, local SEO and link building start from ₹30,000/month. Fixed monthly retainer — no hourly billing.',
    },
    {
      q: 'Do you have an SEO office in Bangalore?',
      a: 'Yes. NNC is headquartered at Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit us to review rankings and discuss your SEO strategy in person.',
    },
  ],
}

export default function SeoServicesCompanyBangalorePage() {
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
