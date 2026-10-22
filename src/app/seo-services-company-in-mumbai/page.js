import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'SEO Services Company in Mumbai | NNC Digital',
  description:
    'Top SEO services company in Mumbai. SEO agency, best SEO company, local SEO services, technical SEO, on page SEO, ecommerce SEO, SEO experts & SEO consultants for Mumbai businesses. Office in Thane West. Fixed price.',
  alternates: {
    canonical: `${SITE.url}/seo-services-company-in-mumbai`,
  },
  keywords:
    'seo services in mumbai, seo company in mumbai, best seo company mumbai, local seo services mumbai, seo agency in mumbai, technical seo services mumbai, on page seo services mumbai, seo experts mumbai, seo consultants mumbai, ecommerce seo services mumbai, hire seo expert mumbai, affordable seo services mumbai',
  openGraph: {
    title: 'SEO Services Company in Mumbai | NNC Digital',
    description:
      'SEO services company in Mumbai — local SEO, technical SEO, on page SEO, ecommerce SEO, SEO experts & SEO consultants for Mumbai businesses. Office in Thane West.',
    url: `${SITE.url}/seo-services-company-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'SEO Services Company in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'SEO Services Company in Mumbai | NNC Digital',
    description:
      'SEO services company in Mumbai — local SEO, technical SEO, ecommerce SEO, SEO experts & affordable SEO services. Office in Thane West.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SEO Services Company in Mumbai',
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
    'SEO Company',
    'Local SEO Services',
    'Technical SEO',
    'On Page SEO',
    'Ecommerce SEO',
    'SEO Agency',
    'SEO Consultants',
  ],
  description:
    'Full-service SEO company in Mumbai — local SEO, technical SEO, on page SEO, ecommerce SEO services, SEO experts and SEO consultants for Mumbai businesses. Branch office in Thane West.',
  url: `${SITE.url}/seo-services-company-in-mumbai`,
  offers: [
    {
      '@type': 'Offer',
      name: 'SEO Services Mumbai — Starter',
      price: '15000',
      priceCurrency: 'INR',
      description: 'Monthly SEO — on page optimisation, technical audit fixes, content optimisation and monthly ranking report.',
    },
    {
      '@type': 'Offer',
      name: 'SEO Services Mumbai — Growth',
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
      name: 'Digital Marketing Agency Mumbai',
      item: `${SITE.url}/digital-marketing-agency-in-mumbai`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'SEO Services Company in Mumbai',
      item: `${SITE.url}/seo-services-company-in-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best SEO company in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Mumbai's top-rated SEO companies — 565+ projects delivered, 4.9★ Google rating, branch office in Thane West. We provide local SEO, technical SEO, on page SEO, ecommerce SEO and full SEO consultancy for Mumbai businesses across all industries.",
      },
    },
    {
      '@type': 'Question',
      name: 'What SEO services does NNC provide in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Mumbai provides full SEO services — technical SEO audit and fixes, on page SEO optimisation, local SEO (Google Business Profile, local citations), ecommerce SEO, link building, content strategy, keyword research and monthly ranking and traffic reports.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer local SEO services for Mumbai businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides local SEO services in Mumbai — Google Business Profile optimisation, local keyword targeting, NAP citation building, local link acquisition and local pack ranking for Mumbai and suburb-specific searches (Thane, Navi Mumbai, Andheri, BKC, Borivali).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is technical SEO and do you provide it in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Technical SEO covers the structural and performance elements that affect how Google crawls and ranks your website — Core Web Vitals, site speed, crawlability, schema markup, canonical tags, duplicate content, XML sitemaps and mobile usability. NNC provides full technical SEO audits and implementation for Mumbai businesses.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide ecommerce SEO services in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides ecommerce SEO for Mumbai online stores — product page optimisation, category page SEO, structured data (Product, Review, BreadcrumbList schemas), site architecture, faceted navigation handling and ecommerce content strategy to drive organic product traffic.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do SEO services cost in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Monthly SEO services in Mumbai start from ₹15,000 — covering on page optimisation, technical fixes and monthly ranking reports. Full SEO packages including technical SEO, local SEO, link building and content typically start from ₹30,000/month. All fixed monthly retainer — no hourly billing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have an SEO office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. You can visit our Mumbai SEO team to review your current rankings, discuss your SEO strategy and go through monthly performance reports in person.',
      },
    },
  ],
}

const data = {
  badge: 'SEO Services · Mumbai',
  h1: 'SEO Services Company',
  h1Accent: 'in Mumbai',
  tagline:
    'Top SEO services company in Mumbai — local SEO services, technical SEO, on page SEO, ecommerce SEO, SEO experts, SEO consultants & affordable SEO services. Office in Thane West. Fixed price.',
  desc:
    'NNC Digital is a full-service SEO company in Mumbai helping businesses rank higher on Google and drive qualified organic traffic. From technical SEO audits and on page SEO optimisation to local SEO, ecommerce SEO and link building — every SEO campaign is managed by our in-house SEO experts and SEO consultants with transparent monthly reporting on rankings, traffic and leads. Our branch office in Thane West means Mumbai clients can review SEO performance and strategy face-to-face.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'SEO services in Mumbai',
  h2Features: 'SEO Services in Mumbai',
  features: [
    {
      h3: 'SEO Company Mumbai',
      desc: 'End-to-end SEO management for Mumbai businesses — keyword research, technical audit, on page optimisation, content strategy, link building and monthly reporting. One dedicated SEO team managing your rankings from day one.',
    },
    {
      h3: 'Local SEO Services Mumbai',
      desc: 'Local SEO for Mumbai businesses — Google Business Profile optimisation, local keyword targeting, NAP citation building, local link acquisition and suburb-level ranking for Thane, Navi Mumbai, Andheri, BKC and Borivali searches.',
    },
    {
      h3: 'Technical SEO Services Mumbai',
      desc: 'Technical SEO audit and implementation for Mumbai websites — Core Web Vitals, site speed optimisation, crawl budget management, schema markup, canonical tags, duplicate content resolution, XML sitemaps and mobile usability fixes.',
    },
    {
      h3: 'On Page SEO Services Mumbai',
      desc: 'On page SEO optimisation for Mumbai businesses — title tags, meta descriptions, heading structure, keyword placement, internal linking, image optimisation and content gap analysis. Every page optimised to rank for its target keyword.',
    },
    {
      h3: 'SEO Agency Mumbai — Link Building',
      desc: 'White-hat link building for Mumbai businesses — guest posting, digital PR, resource link acquisition and niche-relevant backlinks that improve domain authority and push rankings for competitive Mumbai keywords.',
    },
    {
      h3: 'Ecommerce SEO Services Mumbai',
      desc: 'Ecommerce SEO for Mumbai online stores — product and category page optimisation, structured data (Product, Review, BreadcrumbList schemas), faceted navigation management, site architecture and content strategy to drive organic product traffic.',
    },
    {
      h3: 'SEO Experts Mumbai — Content Strategy',
      desc: 'SEO-driven content strategy from NNC\'s Mumbai SEO experts — topic cluster mapping, blog content briefs, pillar page creation and FAQ content targeting high-intent Mumbai search queries that drive leads and enquiries.',
    },
    {
      h3: 'SEO Consultants Mumbai',
      desc: 'Dedicated SEO consultants in Mumbai for audits, strategy reviews and one-time engagements — competitor gap analysis, keyword mapping, site migration support and SEO recommendations for in-house teams to implement.',
    },
    {
      h3: 'Affordable SEO Services Mumbai',
      desc: 'Affordable SEO services for Mumbai SMEs and startups — fixed monthly retainers starting from ₹15,000 with no hourly billing, no hidden charges and transparent monthly ranking and traffic reports.',
    },
  ],
  h2Why: 'Why Choose NNC as Your SEO Company in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — review rankings in person',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to go through your ranking report, review keyword progress and align SEO strategy with your sales and marketing goals face-to-face.',
    },
    {
      n: '02',
      h3: 'Reported on rankings and traffic — not just activity',
      body: 'NNC reports what matters — keyword ranking movements, organic traffic growth, leads from organic search and pages climbing to page one. Not just tasks completed or hours billed.',
    },
    {
      n: '03',
      h3: 'In-house SEO team — not outsourced',
      body: 'Every SEO expert, technical SEO specialist and content strategist is a full-time NNC employee. Consistent team managing your SEO month after month — no offshore outsourcing, no freelancer turnover.',
    },
    {
      n: '04',
      h3: 'Technical + content + local — full-stack SEO',
      body: 'NNC handles every layer of SEO under one roof — technical fixes, on page optimisation, local SEO, content creation and link building. No need to coordinate multiple vendors for different parts of the same campaign.',
    },
    {
      n: '05',
      h3: 'Fixed monthly retainer — no hourly billing',
      body: 'Every SEO retainer is fixed-price with a defined monthly scope. No surprise invoices for extra hours, no billing for every email. Affordable SEO services with full cost predictability for Mumbai businesses.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has delivered SEO for ecommerce, real estate, healthcare, SaaS, education and B2B businesses across Mumbai. 4.9★ rated on Google with verifiable client reviews from Mumbai businesses.',
    },
  ],
  techStack: ['Google Search Console', 'Ahrefs', 'SEMrush', 'Screaming Frog', 'Google Analytics 4', 'Moz', 'Surfer SEO', 'Google Business Profile'],
  h2Tech: 'SEO Tools & Platforms',
  h2Faq: 'SEO Services Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best SEO company in Mumbai?',
      a: "NNC Digital is among Mumbai's top SEO companies — 565+ projects, 4.9★ Google rating, office in Thane West. Local SEO, technical SEO, on page SEO, ecommerce SEO and link building — all in-house.",
    },
    {
      q: 'Do you offer local SEO services in Mumbai?',
      a: 'Yes. NNC provides local SEO for Mumbai businesses — Google Business Profile optimisation, local citations, local link building and suburb-level rankings for Thane, Navi Mumbai, Andheri and BKC.',
    },
    {
      q: 'Do you provide technical SEO services in Mumbai?',
      a: 'Yes. NNC provides full technical SEO — Core Web Vitals, site speed, crawlability, schema markup, canonical tags, mobile usability and XML sitemaps for Mumbai websites.',
    },
    {
      q: 'Do you offer ecommerce SEO services in Mumbai?',
      a: 'Yes. NNC provides ecommerce SEO for Mumbai online stores — product and category page optimisation, structured data, faceted navigation and content strategy to drive organic sales.',
    },
    {
      q: 'How much do SEO services cost in Mumbai?',
      a: 'SEO services in Mumbai start from ₹15,000/month. Full SEO packages including technical SEO, local SEO and link building start from ₹30,000/month. Fixed monthly retainer — no hourly billing.',
    },
    {
      q: 'Do you have an SEO office in Mumbai?',
      a: 'Yes. NNC has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to review rankings and discuss your SEO strategy in person.',
    },
  ],
}

export default function SeoServicesCompanyMumbaiPage() {
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
