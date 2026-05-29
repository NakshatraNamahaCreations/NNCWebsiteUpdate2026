import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'SEO Services Company in Mysuru | Nakshatra Namaha Creations',
  description: 'Best SEO services company in Mysuru. Technical SEO, on-page optimisation, local SEO, ecommerce SEO & link building. Page 1 Google rankings. Walk-in Mysuru office. Transparent monthly reporting. Call +91 99005 66466.',
  alternates: { canonical: `${SITE.url}/seo-services-company-in-mysuru` },
  keywords: [
    'seo services in mysuru',
    'seo company in mysuru',
    'best seo company mysuru',
    'local seo services mysuru',
    'seo agency in mysuru',
    'technical seo services mysuru',
    'on page seo services mysuru',
    'seo experts mysuru',
    'seo consultants mysuru',
    'ecommerce seo services mysuru',
    'hire seo expert mysuru',
    'affordable seo services mysuru',
  ].join(', '),
  openGraph: {
    title: 'SEO Services Company in Mysuru | Nakshatra Namaha Creations',
    description: 'Technical SEO, on-page, local SEO & ecommerce SEO for Mysuru businesses. Page 1 rankings. Walk-in office. Monthly reporting.',
    url: `${SITE.url}/seo-services-company-in-mysuru`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Nakshatra Namaha Creations',
    images: [{ url: 'https://s3.eu-north-1.amazonaws.com/admin.nakshatranamahacreations.in/NNC+NEW+LOGO+2020+low+res.png', width: 1200, height: 630, alt: 'SEO Services Company Mysuru Nakshatra Namaha Creations' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'SEO Services Company in Mysuru | Nakshatra Namaha Creations',
    description: 'Technical SEO, local SEO & on-page optimisation in Mysuru. Walk-in office. Monthly reporting.',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SEO Services Company in Mysuru',
  description: 'Professional SEO services in Mysuru. Technical SEO audits, on-page optimisation, local SEO, ecommerce SEO, link building and content strategy. Monthly ranking reports. Walk-in office in JP Nagar, Mysuru.',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Suswani Towers, JP Nagar 2nd Stage',
      addressLocality: 'Mysuru',
      addressRegion: 'Karnataka',
      postalCode: '570008',
      addressCountry: 'IN',
    },
  },
  areaServed: ['Mysuru', 'Mysore', 'Karnataka', 'India'],
  serviceType: 'SEO Services',
  url: `${SITE.url}/seo-services-company-in-mysuru`,
  offers: [
    { '@type': 'Offer', name: 'Local SEO', price: '12000', priceCurrency: 'INR', description: 'Google Business Profile, local citations, review management and local keyword targeting.' },
    { '@type': 'Offer', name: 'Business SEO', price: '15000', priceCurrency: 'INR', description: 'Technical audit, on-page optimisation, content strategy and monthly reporting.' },
    { '@type': 'Offer', name: 'E-commerce SEO', price: '25000', priceCurrency: 'INR', description: 'Product page SEO, category optimisation, schema markup and Google Shopping integration.' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'SEO Services Mysuru',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Technical SEO Services Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Local SEO Services Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'On Page SEO Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ecommerce SEO Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Consultants Mysuru' } },
    ],
  },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/#services` },
    { '@type': 'ListItem', position: 3, name: 'Digital Marketing', item: `${SITE.url}/digital-marketing-agency-in-mysuru` },
    { '@type': 'ListItem', position: 4, name: 'SEO Services Mysuru', item: `${SITE.url}/seo-services-company-in-mysuru` },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much do SEO services cost in Mysuru?', acceptedAnswer: { '@type': 'Answer', text: 'Local SEO from ₹12,000/month. Business SEO from ₹15,000/month. E-commerce SEO from ₹25,000/month. All pricing transparent with monthly reporting.' } },
    { '@type': 'Question', name: 'How long does SEO take to show results?', acceptedAnswer: { '@type': 'Answer', text: 'Technical fixes show impact within weeks. Meaningful ranking improvements typically take 3–6 months. Monthly reports track progress every step.' } },
    { '@type': 'Question', name: 'Does Nakshatra Namaha Creations have an office in Mysuru?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Walk-in office at Suswani Towers, JP Nagar 2nd Stage, Mysuru – 570 008. Open Mon–Sat, 9am–7pm.' } },
    { '@type': 'Question', name: 'Do you guarantee Page 1 rankings?', acceptedAnswer: { '@type': 'Answer', text: 'No ethical SEO company can guarantee specific rankings. What we guarantee is technically sound optimisation, monthly reporting with clear metrics and a proven methodology that has delivered Page 1 results for clients across 200+ projects.' } },
  ],
}

const data = {
  badge: 'SEO Services · Mysuru',
  h1: 'SEO Services Company',
  h1Accent: 'in Mysuru',
  tagline: 'Technical SEO, on-page optimisation, local SEO & ecommerce SEO — monthly ranking reports with real metrics. Walk-in office in JP Nagar, Mysuru. Transparent pricing. No long-term contracts.',
  desc: 'Nakshatra Namaha Creations delivers professional SEO services for businesses in Mysuru. We fix technical issues, optimise your content, build quality backlinks and track rankings monthly. Every campaign is data-driven — you see exactly which keywords moved, how much organic traffic grew and how many leads came from search. Visit our Mysuru office to review your current SEO health.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'SEO services in Mysuru',
  h2Features: 'SEO Services We Deliver',
  features: [
    { h3: 'Technical SEO Audit & Fixes', desc: 'Comprehensive crawl analysis — fixing broken links, redirect chains, duplicate content, sitemap errors, robots.txt issues and Core Web Vitals failures.' },
    { h3: 'On-Page SEO Optimisation', desc: 'Keyword mapping, H1–H6 structure, meta titles & descriptions, internal linking, image alt tags and content gap analysis for every important page.' },
    { h3: 'Local SEO for Mysuru', desc: 'Google Business Profile optimisation, local citations (Justdial, Sulekha, IndiaMART), review management and geo-targeted keyword strategy.' },
    { h3: 'Keyword Research & Strategy', desc: 'Data-driven keyword selection using search volume, competition analysis and intent mapping. We target keywords that bring buyers — not just traffic.' },
    { h3: 'Content Strategy & Creation', desc: 'Blog posts, service pages and FAQ content written for SEO and humans. Keyword-optimised, original and designed to rank and convert.' },
    { h3: 'Link Building & Off-Page SEO', desc: 'Quality backlinks from relevant directories, guest posts, PR mentions and industry citations. No PBN spam. No bought links.' },
    { h3: 'E-commerce Product SEO', desc: 'Product page optimisation, category structure, Product schema markup, Google Shopping feed and review rich snippets.' },
    { h3: 'Core Web Vitals & PageSpeed', desc: 'LCP, FID and CLS optimisation. Image compression, lazy loading, code splitting and server response time improvements.' },
    { h3: 'Monthly Ranking Reports', desc: 'Clear monthly reports — keyword positions, organic traffic, impressions, clicks, top pages, backlink profile and actionable next steps.' },
  ],
  h2Why: 'Why Mysuru Businesses Choose Us for SEO',
  why: [
    { n: '01', h3: 'Walk-in office in JP Nagar, Mysuru', body: "Visit Suswani Towers, JP Nagar 2nd Stage. Review your ranking data together, ask questions face-to-face and understand exactly what we're doing. Open Mon–Sat, 9am–7pm." },
    { n: '02', h3: 'Real metrics — not vanity dashboards', body: "We report keyword positions, organic traffic growth, leads from search and PageSpeed scores. Not impressions. Not social likes. Metrics that matter to your business." },
    { n: '03', h3: 'We build the websites we optimise', body: "Unlike pure-play SEO agencies, we also build websites on React JS and Next JS. This means we can fix technical issues at the code level — not just flag them in a report." },
    { n: '04', h3: 'No long-term lock-in contracts', body: "Month-to-month engagement. Stay because the results are good, not because of a 12-month contract. Cancel anytime with 30 days notice." },
    { n: '05', h3: '35+ in-house team — no outsourcing', body: "SEO strategists, content writers, technical developers and link builders — all permanent employees. No freelancers working on your site." },
    { n: '06', h3: 'Transparent pricing — no hidden fees', body: "Fixed monthly fee. No setup charges. No platform fees. No percentage-of-revenue markups. You know exactly what you pay every month." },
  ],
  techStack: ['Google Search Console', 'SEMrush', 'Ahrefs', 'Google Analytics', 'Screaming Frog', 'PageSpeed Insights', 'Schema.org', 'Surfer SEO'],
  h2Tech: 'SEO Tools & Platforms We Use',
  h2Faq: 'SEO Services in Mysuru — Questions Answered',
  faqs: [
    { q: 'How much do SEO services cost in Mysuru?', a: 'Local SEO starts from ₹12,000/month. Business SEO from ₹15,000/month. E-commerce SEO from ₹25,000/month. Pricing depends on website size, competition level and target keywords. All pricing is transparent with no hidden charges.' },
    { q: 'How long does SEO take to show results?', a: 'Technical SEO fixes can show impact within 2–4 weeks. Meaningful keyword ranking improvements typically take 3–6 months. We provide monthly reports so you see progress at every stage — not just at the end.' },
    { q: 'Do you guarantee Page 1 Google rankings?', a: 'No ethical SEO company can guarantee specific rankings — Google\'s algorithm has 200+ factors. What we guarantee is technically sound optimisation, proven methodology, monthly reporting and a track record of Page 1 results across 200+ client websites.' },
    { q: 'Does Nakshatra Namaha Creations have an office in Mysuru?', a: 'Yes. Our Mysuru branch is at Suswani Towers, JP Nagar 2nd Stage, Mysuru – 570 008. Walk in Monday to Saturday, 9am–7pm. No appointment needed.' },
    { q: 'What is the difference between on-page and technical SEO?', a: 'On-page SEO optimises visible content — headings, meta titles, keyword usage, internal links and images. Technical SEO fixes backend issues — site speed, crawlability, indexation, redirects, schema markup and Core Web Vitals. Both are essential.' },
    { q: 'Can you help with local SEO for my Mysuru business?', a: 'Yes. We optimise your Google Business Profile, build local citations on Justdial, Sulekha and IndiaMART, manage reviews, add location schema and target geo-specific keywords like "service + Mysuru" to rank in local searches.' },
    { q: 'Do I need to sign a long-term contract?', a: 'No. We work month-to-month. Stay because the results are good — not because of a contract. Cancel anytime with 30 days notice. Most clients stay because SEO compounds over time.' },
    { q: 'Will you also fix my website if it has technical issues?', a: 'Yes. Unlike pure SEO agencies, Nakshatra Namaha Creations also builds websites. We fix technical issues at the code level — Core Web Vitals, page speed, schema markup, server configuration — not just flag them in an audit report.' },
  ],
}

export default function SeoServicesMysuruPage() {
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
