import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Corporate & Business Website Development Company in Bangalore | NNC Digital',
  description: 'Custom corporate and business website development in Bangalore. React JS and Next JS corporate websites with CMS, SEO and PageSpeed 90+. 200+ sites delivered.',
  alternates: { canonical: `${SITE.url}/corporate-business-websites` },
  keywords: 'corporate website development bangalore, business website design, company website development, b2b website development, corporate web design agency',
  openGraph: {
    title: 'Corporate & Business Website Development Company in Bangalore | NNC Digital',
    description: 'Corporate and business websites on React JS and Next JS with CMS, SEO and PageSpeed 90+. Fixed price, zero outsourcing.',
    url: `${SITE.url}/corporate-business-websites`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'Corporate Website Development NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Corporate & Business Website Development',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: 'Custom corporate and business website development on React JS and Next JS with CMS, SEO and PageSpeed 90+.',
  url: `${SITE.url}/corporate-business-websites`,
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Corporate & Business Websites', item: `${SITE.url}/corporate-business-websites` },
  ],
}

const data = {
  badge: 'Corporate & Business Websites',
  h1: 'Corporate & Business',
  h1Accent: 'Website Development',
  tagline: 'Custom corporate websites on React JS and Next JS built for credibility, lead generation and long-term SEO. PageSpeed 90+ guaranteed in the contract.',
  desc: 'NNC Digital builds corporate and business websites for Indian enterprises, mid-market companies, consulting firms and B2B service businesses. Every site is custom-coded on React JS or Next JS — no WordPress themes, no page builders — with a content management system your marketing team can update, SEO structure that compounds over years and brand design that holds up against international competitors.',
  stat1: '200+',
  stat1Label: 'Corporate Sites Delivered',
  serviceName: 'corporate and business website development',
  h2Features: 'Everything a Corporate Website Needs',
  features: [
    { h3: 'Custom React JS / Next JS Build', desc: 'Built from scratch in React JS or Next JS — not a WordPress theme. Faster, more flexible and completely yours.' },
    { h3: 'Content Management System', desc: 'Headless CMS or custom admin so your marketing team edits content, publishes news and updates leadership pages without raising a developer ticket.' },
    { h3: 'Services & Solutions Pages', desc: 'Scalable services page architecture with internal linking that passes SEO authority from pillar pages to specific service offerings.' },
    { h3: 'Leadership, Team & Culture', desc: 'Leadership bios, team showcases and culture pages designed to build credibility with enterprise buyers and job candidates alike.' },
    { h3: 'Case Studies & Client Logos', desc: 'Structured case study architecture — challenge, approach, result, metrics — plus client logo walls with trust signals.' },
    { h3: 'Lead Capture Forms', desc: 'Context-specific lead forms with CRM integration (Zoho, HubSpot, Salesforce) and spam protection built in.' },
    { h3: 'Multi-location Office Pages', desc: 'Branch / office location pages with local SEO schema for brands operating across multiple cities.' },
    { h3: 'Blog & Insights Engine', desc: 'Full blog / insights platform with categories, author pages, related posts and newsletter signup — content marketing ready.' },
    { h3: 'Enterprise Security & Compliance', desc: 'SSL, DDOS protection, WAF, security headers and privacy-policy / cookie-consent flows meeting Indian and EU standards.' },
  ],
  h2Why: 'Why Choose NNC for Corporate Websites?',
  why: [
    { n: '01', h3: 'Custom code — not a WordPress theme', body: 'NNC builds from scratch on React JS / Next JS. Faster than any theme-based site, fully flexible as your business evolves and 100% owned by you.' },
    { n: '02', h3: 'PageSpeed 90+ written into the contract', body: 'Slow corporate sites hurt enterprise credibility and SEO. NNC\'s contractual PageSpeed 90+ guarantee means every page loads fast on mobile and desktop.' },
    { n: '03', h3: 'SEO-first information architecture', body: 'Site structure, internal linking and schema are designed with SEO in mind from day one — not bolted on after launch.' },
    { n: '04', h3: 'Fixed price — no change-order invoices', body: 'Corporate projects are scoped and fixed-priced. No surprise invoices for extra pages, CMS fields or integrations once build starts.' },
    { n: '05', h3: '35+ in-house specialists — zero outsourcing', body: 'Developers, UI designers, content strategists and QA — all NNC employees. Visit our Bengaluru office and meet the team working on your site.' },
    { n: '06', h3: '200+ corporate sites delivered', body: 'Enterprise manufacturers, consulting firms, listed companies, B2B service providers and mid-market businesses — NNC has delivered across every major vertical.' },
  ],
  techStack: ['React JS', 'Next JS', 'Node JS', 'Strapi', 'MongoDB', 'PostgreSQL', 'AWS', 'Vercel'],
  h2Tech: 'Corporate Website Technology Stack',
  h2Faq: 'Corporate Website Development Frequently Asked Questions',
  faqs: [
    { q: 'How much does a corporate website cost?', a: 'Corporate websites at NNC start from ₹60,000 for a standard 8–12 page business site, and ₹1.5L–₹5L for larger enterprise sites with CMS, blog, multi-language, case studies and integrations. All pricing is fixed before work starts — no hourly billing.' },
    { q: 'How long does it take to build a corporate website?', a: 'A standard corporate site typically takes 4–6 weeks from design to launch. Enterprise sites with CMS, blog, case studies and multi-language take 8–14 weeks. Timelines are agreed upfront.' },
    { q: 'Can you migrate my existing WordPress / Drupal site?', a: 'Yes. NNC frequently migrates corporate sites from WordPress, Drupal, Wix or Webflow to Next JS. We handle content, media, URL redirects and SEO preservation so you do not lose search rankings in the switch.' },
    { q: 'Will my marketing team be able to update content?', a: 'Yes. Every NNC corporate site ships with a CMS — either a custom admin or headless CMS (Strapi, Sanity) — so your marketing team edits pages, publishes blog posts and updates team bios without developer dependency.' },
    { q: 'Do I own the source code?', a: 'Yes — completely and permanently. On delivery you receive every source file, CMS admin credentials and hosting access. No vendor lock-in, no monthly SaaS fees.' },
    { q: 'Do you handle hosting and maintenance?', a: 'Yes. NNC offers managed hosting on AWS / Vercel with uptime monitoring, backups and security updates — priced per month. Clients who prefer in-house hosting receive full deployment documentation at launch.' },
  ],
}

export default function CorporateBusinessWebsitesPage() {
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
