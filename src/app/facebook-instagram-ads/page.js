import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Facebook & Instagram Ads Agency in Bangalore | NNC Digital',
  description: 'Facebook and Instagram (Meta) Ads management in Bangalore. Lead-gen, e-commerce, app installs and brand campaigns with in-house creatives and reporting.',
  alternates: { canonical: `${SITE.url}/facebook-instagram-ads` },
  keywords: 'facebook ads agency bangalore, instagram ads agency, meta ads management, social media ads, facebook lead gen agency, instagram shopping ads',
  openGraph: {
    title: 'Facebook & Instagram Ads Agency in Bangalore | NNC Digital',
    description: 'Lead-gen, e-commerce and app install campaigns on Facebook & Instagram. Creatives, targeting and reporting handled in-house.',
    url: `${SITE.url}/facebook-instagram-ads`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'Facebook Instagram Ads NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Facebook & Instagram Ads Management',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: 'Meta Ads management (Facebook & Instagram) covering creatives, targeting, reporting and conversion tracking.',
  url: `${SITE.url}/facebook-instagram-ads`,
}

const breadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Facebook & Instagram Ads', item: `${SITE.url}/facebook-instagram-ads` },
  ],
}

const data = {
  badge: 'Facebook & Instagram Ads',
  h1: 'Facebook & Instagram',
  h1Accent: 'Ads Agency',
  tagline: 'Meta Ads managed by NNC in-house specialists — creative, copy, targeting and optimisation handled under one roof. Reporting on lead quality, not impressions.',
  desc: 'NNC Digital manages Facebook and Instagram Ads for D2C brands, service businesses and app companies across India. Every account ships with an in-house creative team producing weekly fresh static, carousel and reel ad variants, Meta Pixel + Conversions API set up correctly, and reporting focused on cost-per-qualified-lead and ROAS.',
  stat1: '₹40Cr+',
  stat1Label: 'Meta Ad Spend Managed',
  serviceName: 'Facebook and Instagram (Meta) Ads management',
  h2Features: 'Everything a Meta Ads Account Needs',
  features: [
    { h3: 'Lead Generation Campaigns', desc: 'Instant Forms, WhatsApp click-to-chat and landing page lead-gen tuned to cost-per-qualified-lead — not raw lead count.' },
    { h3: 'E-commerce & Catalogue Sales', desc: 'Dynamic product ads, catalogue sales and Advantage+ Shopping campaigns pulling from your product feed.' },
    { h3: 'App Install & App Engagement', desc: 'App install and in-app event campaigns optimised to purchase, registration or any custom app event.' },
    { h3: 'In-house Creative Team', desc: 'Weekly fresh static, carousel, reel and story ad variants produced by NNC designers and video editors.' },
    { h3: 'Advanced Audience Targeting', desc: 'Lookalike audiences from your first-party data, retargeting from Pixel + CAPI, and interest-stacking tuned to your niche.' },
    { h3: 'Meta Pixel & Conversions API', desc: 'Server-side CAPI implementation so campaigns stay accurate under iOS 14.5+ privacy restrictions.' },
    { h3: 'WhatsApp Ads Integration', desc: 'Click-to-WhatsApp campaigns with chatbot handoff — standard for lead gen in Indian service businesses.' },
    { h3: 'Landing Page Builds', desc: 'NNC can build and test campaign-specific landing pages so expensive clicks hit conversion-optimised destinations.' },
    { h3: 'Weekly Reports & Monthly Reviews', desc: 'Looker Studio dashboards weekly, deep-dive reviews monthly covering spend, conversions and ROAS.' },
  ],
  h2Why: 'Why Choose NNC for Meta Ads?',
  why: [
    { n: '01', h3: 'Creative + media buying in one agency', body: 'Most agencies buy media and outsource creative. NNC\'s in-house design team produces weekly fresh ad variants — creative fatigue handled before it kills performance.' },
    { n: '02', h3: 'Conversions API done right', body: 'Server-side CAPI and deduplication set up correctly so campaigns optimise on accurate signal — not partial browser data.' },
    { n: '03', h3: 'Reporting on lead quality — not lead count', body: 'NNC reports on cost-per-qualified-lead with CRM feedback loops. Garbage leads get filtered; campaigns optimise against sales-worthy inquiries.' },
    { n: '04', h3: 'Fixed-fee or percentage — your choice', body: 'Flat monthly retainer or percentage of ad spend with a cap. Transparent pricing agreed upfront.' },
    { n: '05', h3: '35+ in-house team', body: 'Meta specialists, creative designers, video editors and analysts — all NNC employees. Visit our Bengaluru office and meet them.' },
    { n: '06', h3: '₹40Cr+ in Meta ad spend managed', body: 'D2C fashion, EdTech, real estate, healthcare and app companies — NNC runs Meta Ads across every major Indian consumer vertical.' },
  ],
  techStack: ['Meta Ads Manager', 'Meta Pixel', 'Conversions API', 'WhatsApp Business', 'GA4', 'Looker Studio', 'Catalogue Manager', 'Server-side GTM'],
  h2Tech: 'Meta Ads Tools & Stack',
  h2Faq: 'Facebook & Instagram Ads Frequently Asked Questions',
  faqs: [
    { q: 'What is the minimum ad spend you work with?', a: 'NNC takes on Meta Ads accounts with a minimum monthly ad spend of ₹40,000. Below this, limited data volume makes Meta\'s algorithm unable to optimise reliably.' },
    { q: 'What does Meta Ads management cost?', a: 'NNC management fees start from ₹20,000/month for a flat-fee retainer, or 15–20% of ad spend with creative production included. All fees agreed upfront.' },
    { q: 'How often do you refresh ad creatives?', a: 'For active accounts, NNC produces 6–12 fresh creative variants per month across static, carousel, reel and video formats. Creative fatigue is a top-3 reason Meta campaigns decay — we handle it before it bites.' },
    { q: 'Can you run WhatsApp lead-gen campaigns?', a: 'Yes — click-to-WhatsApp is now standard for Indian lead-gen. NNC builds the campaign, the WhatsApp greeting flow and optional chatbot handoff for qualification.' },
    { q: 'Do you handle Instagram influencer campaigns?', a: 'Partnership Ads (whitelisted / boosted influencer content) yes. End-to-end influencer management (contracting, payments) is a separate service — ask us.' },
    { q: 'Who owns the Ads Manager account?', a: 'You do — always. NNC operates under your Business Manager with assigned partner access. Account, pixel, audiences and history stay with you.' },
  ],
}

export default function FacebookInstagramAdsPage() {
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
