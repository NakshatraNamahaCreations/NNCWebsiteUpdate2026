import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Digital Marketing Agency in Mysuru | Nakshatra Namaha Creations',
  description: 'Top digital marketing agency in Mysuru. Google Ads, SEO, social media marketing, lead generation & performance marketing. Real leads, not vanity metrics. Walk-in Mysuru office. Fixed price. Call +91 99005 66466.',
  alternates: { canonical: `${SITE.url}/digital-marketing-agency-in-mysuru` },
  keywords: [
    'digital marketing agency in mysuru',
    'digital marketing company mysuru',
    'digital marketing services mysuru',
    'best digital marketing agency mysuru',
    'top digital marketing company mysuru',
    'digital marketing experts mysuru',
    'online marketing agency mysuru',
    'performance marketing agency mysuru',
    'lead generation agency mysuru',
    'digital marketing consultants mysuru',
  ].join(', '),
  openGraph: {
    title: 'Digital Marketing Agency in Mysuru | Nakshatra Namaha Creations',
    description: 'Google Ads, SEO, social media & lead generation for Mysuru businesses. Real leads reported. Walk-in office. Fixed price.',
    url: `${SITE.url}/digital-marketing-agency-in-mysuru`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Nakshatra Namaha Creations',
    images: [{ url: 'https://s3.eu-north-1.amazonaws.com/admin.nakshatranamahacreations.in/NNC+NEW+LOGO+2020+low+res.png', width: 1200, height: 630, alt: 'Digital Marketing Agency Mysuru Nakshatra Namaha Creations' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Digital Marketing Agency in Mysuru | Nakshatra Namaha Creations',
    description: 'Google Ads, SEO, social media & lead generation in Mysuru. Walk-in office. Real leads.',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Digital Marketing Agency in Mysuru',
  description: 'Full-service digital marketing agency in Mysuru. Google Ads, Facebook & Instagram Ads, SEO, social media management, lead generation and performance marketing. Real leads reported — not vanity metrics. Walk-in office in JP Nagar, Mysuru.',
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
  serviceType: 'Digital Marketing',
  url: `${SITE.url}/digital-marketing-agency-in-mysuru`,
  offers: [
    { '@type': 'Offer', name: 'SEO & Organic Growth', price: '15000', priceCurrency: 'INR', description: 'Monthly SEO — technical audit, on-page optimisation, content strategy and link building.' },
    { '@type': 'Offer', name: 'Google Ads Management', price: '15000', priceCurrency: 'INR', description: 'Google Search, Display & Shopping Ads with conversion tracking and monthly reporting.' },
    { '@type': 'Offer', name: 'Social Media Marketing', price: '12000', priceCurrency: 'INR', description: 'Facebook, Instagram & LinkedIn content, creatives, scheduling and community management.' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Marketing Services Mysuru',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Services Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads Management Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Marketing Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lead Generation Agency Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Performance Marketing Mysuru' } },
    ],
  },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/#services` },
    { '@type': 'ListItem', position: 3, name: 'Digital Marketing Mysuru', item: `${SITE.url}/digital-marketing-agency-in-mysuru` },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does digital marketing cost in Mysuru?', acceptedAnswer: { '@type': 'Answer', text: 'SEO starts from ₹15,000/month. Google Ads management from ₹15,000/month + ad spend. Social media management from ₹12,000/month. All pricing transparent — no hidden fees.' } },
    { '@type': 'Question', name: 'Does Nakshatra Namaha Creations have an office in Mysuru?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Walk-in office at Suswani Towers, JP Nagar 2nd Stage, Mysuru – 570 008. Open Mon–Sat, 9am–7pm.' } },
    { '@type': 'Question', name: 'How long does SEO take to show results?', acceptedAnswer: { '@type': 'Answer', text: 'Typically 3–6 months for meaningful organic traffic improvements. Technical SEO fixes show impact within weeks. We provide monthly reports with clear metrics.' } },
    { '@type': 'Question', name: 'Do you report real leads or just impressions?', acceptedAnswer: { '@type': 'Answer', text: 'Real leads — phone calls, form submissions, WhatsApp messages. We track and report actual enquiries, not vanity metrics like impressions or reach.' } },
  ],
}

const data = {
  badge: 'Digital Marketing · Mysuru',
  h1: 'Digital Marketing Agency',
  h1Accent: 'in Mysuru',
  tagline: 'Google Ads, SEO, social media marketing & lead generation — real leads reported, not vanity metrics. Walk-in office in JP Nagar, Mysuru. Transparent pricing. Monthly reporting.',
  desc: 'Nakshatra Namaha Creations is a full-service digital marketing agency in Mysuru. We run Google Ads, Meta Ads, SEO and social media campaigns that deliver real, trackable leads — phone calls, form submissions and WhatsApp enquiries. No inflated impression counts. No vanity dashboards. Visit our Mysuru office to discuss your growth goals.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'digital marketing in Mysuru',
  h2Features: 'Digital Marketing Services We Deliver',
  features: [
    { h3: 'Google Search & Display Ads', desc: 'Keyword-targeted search campaigns and display remarketing. Conversion tracking, A/B testing and bid optimisation for maximum ROI.' },
    { h3: 'Facebook & Instagram Ads', desc: 'Meta Ads with audience targeting, lookalike audiences, carousel creatives and lead form campaigns. Monthly creative refresh included.' },
    { h3: 'Technical & On-Page SEO', desc: 'Site audit, Core Web Vitals fix, schema markup, internal linking, keyword mapping and content optimisation. Monthly ranking reports.' },
    { h3: 'Local SEO for Mysuru', desc: 'Google Business Profile optimisation, local citations, review management and local keyword targeting to rank in Mysuru searches.' },
    { h3: 'Social Media Management', desc: 'Content calendar, graphic design, copywriting, scheduling and community management across Instagram, Facebook, LinkedIn and X.' },
    { h3: 'Lead Generation Campaigns', desc: 'End-to-end lead funnels — landing page, ad creative, form capture, CRM integration and automated follow-up sequences.' },
    { h3: 'Performance Marketing & ROAS', desc: 'Every campaign optimised for return on ad spend. We track cost-per-lead, cost-per-acquisition and revenue attribution.' },
    { h3: 'Monthly Reporting & Strategy', desc: 'Clear monthly reports with real metrics — leads generated, cost per lead, keyword rankings, ad performance and next month strategy.' },
    { h3: 'WhatsApp & Email Marketing', desc: 'WhatsApp broadcast campaigns, drip email sequences and re-engagement automations integrated with your CRM or lead database.' },
  ],
  h2Why: 'Why Mysuru Businesses Choose Us for Digital Marketing',
  why: [
    { n: '01', h3: 'Walk-in office in JP Nagar, Mysuru', body: "Visit Suswani Towers, JP Nagar 2nd Stage. Sit with our marketing team, review campaign data together and plan strategy face-to-face. Open Mon–Sat, 9am–7pm." },
    { n: '02', h3: 'Real leads reported — not vanity metrics', body: "We report phone calls, form submissions and WhatsApp messages. Not impressions, not reach, not likes. You see exactly how many real enquiries your budget generated." },
    { n: '03', h3: 'In-house creative team — no outsourcing', body: "Ad creatives, social media graphics, video edits and copy — all produced by our 35+ in-house team. No freelance designers. Faster turnarounds, consistent quality." },
    { n: '04', h3: 'Google & Meta certified team', body: "Our marketing specialists are Google Ads certified and Meta Blueprint certified. Running campaigns since 2015 across 200+ businesses." },
    { n: '05', h3: 'Transparent pricing — no hidden fees', body: "Ad spend is yours. Management fee is fixed monthly. No setup charges, no hidden platform fees, no percentage-of-spend markups." },
    { n: '06', h3: 'SEO + Ads + Social under one roof', body: "One agency, one team, one strategy. SEO, Google Ads, Meta Ads and social media all coordinated — not siloed across different vendors." },
  ],
  techStack: ['Google Ads', 'Meta Ads', 'Google Analytics', 'Search Console', 'SEMrush', 'Canva', 'Mailchimp', 'WhatsApp API'],
  h2Tech: 'Marketing Tools & Platforms',
  h2Faq: 'Digital Marketing in Mysuru — Questions Answered',
  faqs: [
    { q: 'How much does digital marketing cost in Mysuru?', a: 'SEO starts from ₹15,000/month. Google Ads management from ₹15,000/month (plus your ad spend budget). Social media management from ₹12,000/month. Comprehensive packages combining all three available. All pricing is transparent with no hidden fees.' },
    { q: 'How long does SEO take to show results?', a: 'Technical SEO fixes can impact performance within weeks. Meaningful organic traffic growth typically takes 3–6 months. We provide monthly reports showing keyword rankings, traffic changes and lead attribution so you see progress every month.' },
    { q: 'Do you report real leads or just impressions?', a: 'Real leads — phone calls, form submissions, WhatsApp messages. We set up conversion tracking on every campaign and report actual enquiries generated. Impressions and reach are secondary metrics, not the headline number.' },
    { q: 'Does Nakshatra Namaha Creations have an office in Mysuru?', a: 'Yes. Our Mysuru branch is at Suswani Towers, JP Nagar 2nd Stage, Mysuru – 570 008. Walk in Monday to Saturday, 9am–7pm. No appointment needed.' },
    { q: 'Can you handle both Google Ads and social media?', a: 'Yes. We run Google Search Ads, Display Ads, Facebook Ads, Instagram Ads, LinkedIn campaigns and social media management — all under one roof with one coordinated strategy.' },
    { q: 'Do I need a website before starting digital marketing?', a: 'For Google Ads and SEO, yes — you need a website or landing page. For social media marketing, you can start with just business profiles. We build websites and landing pages in-house if you need one.' },
    { q: 'How do you measure campaign success?', a: 'Cost per lead, total leads generated, cost per acquisition, keyword ranking positions, organic traffic growth and return on ad spend (ROAS). Every metric reported monthly with clear visuals.' },
    { q: 'Can you help with local Mysuru-area marketing?', a: 'Yes. Local SEO (Google Business Profile, local citations, review management), geo-targeted Google Ads and location-based social media campaigns specifically for Mysuru and surrounding areas.' },
  ],
}

export default function DigitalMarketingMysuruPage() {
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
