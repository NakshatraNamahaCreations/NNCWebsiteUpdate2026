import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'CMS & Content Platform Development Company in Bangalore | NNC Digital',
  description: 'Custom CMS and content platform development in Bangalore. Headless CMS, WordPress, Strapi and custom editorial platforms. 40+ CMS projects delivered.',
  alternates: { canonical: `${SITE.url}/cms-content-platforms` },
  keywords: 'cms development bangalore, content platform development, headless cms, strapi development, custom cms, wordpress development company bangalore',
  openGraph: {
    title: 'CMS & Content Platform Development Company in Bangalore | NNC Digital',
    description: 'Headless, WordPress and custom CMS platforms built by NNC in-house team. Fixed price, PageSpeed 90+, full source code ownership.',
    url: `${SITE.url}/cms-content-platforms`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'CMS Development NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'CMS & Content Platform Development',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: 'Custom CMS, headless CMS, WordPress and content platform development in Bangalore.',
  url: `${SITE.url}/cms-content-platforms`,
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'CMS & Content Platforms', item: `${SITE.url}/cms-content-platforms` },
  ],
}

const data = {
  badge: 'CMS & Content Platforms',
  h1: 'CMS & Content Platform',
  h1Accent: 'Development Services',
  tagline: 'Headless CMS, WordPress and custom editorial platforms built by NNC in-house developers. Fast, SEO-ready and fully brandable.',
  desc: 'NNC Digital builds CMS and content platforms for brands, publishers and marketing teams who need control over content without depending on developers for every update. From headless Strapi and Sanity setups to custom WordPress and fully bespoke editorial systems — every build ships with role-based access, publishing workflows and PageSpeed 90+.',
  stat1: '40+',
  stat1Label: 'CMS Platforms Delivered',
  serviceName: 'CMS and content platform development',
  h2Features: 'Everything a Content Platform Needs',
  features: [
    { h3: 'Headless CMS Architecture', desc: 'Strapi, Sanity or Contentful backends paired with Next JS frontends — content editors publish once, delivered anywhere.' },
    { h3: 'Custom WordPress Builds', desc: 'Custom themes and plugins built from scratch. No bloated page builders, no pre-made themes — fast and fully controlled.' },
    { h3: 'Role-based Publishing Workflow', desc: 'Writer, editor, reviewer and admin roles with draft, review and scheduled-publishing stages built in.' },
    { h3: 'Rich Content Editor', desc: 'Block-based editor with image galleries, embeds, code blocks and custom components matched to your brand design.' },
    { h3: 'SEO & Metadata Controls', desc: 'Per-page title, meta description, Open Graph, canonical URLs and schema markup — editable by non-technical users.' },
    { h3: 'Media Library & CDN', desc: 'Image optimisation, lazy loading and CDN delivery baked in. Editors upload once — delivery is global and fast.' },
    { h3: 'Multi-site & Multi-language', desc: 'Manage multiple brands or languages from a single admin. Translation workflows and regional content routing included.' },
    { h3: 'API-first Content Delivery', desc: 'Every piece of content available as JSON API — pipe into mobile apps, digital signage or third-party systems.' },
    { h3: 'Analytics & Content Insights', desc: 'Built-in traffic, engagement and author dashboards so editors know what performs before pitching the next piece.' },
  ],
  h2Why: 'Why Choose NNC for CMS Development?',
  why: [
    { n: '01', h3: 'Headless or traditional — whichever fits', body: 'NNC does not sell one CMS. We recommend headless (Strapi, Sanity) for performance-critical and multi-channel brands, and WordPress where editor familiarity matters most.' },
    { n: '02', h3: 'Editors can publish without developers', body: 'Every CMS ships with a training session and documentation. Content teams own the day-to-day — no raised ticket for a banner change.' },
    { n: '03', h3: 'PageSpeed 90+ written into the contract', body: 'Next JS frontend, image optimisation, static generation and edge caching — site performance is a deliverable, not a hope.' },
    { n: '04', h3: 'Fixed price, fixed scope', body: 'Pricing is quoted before the project starts. No hourly billing, no surprise invoices for a new content type or role.' },
    { n: '05', h3: '35+ in-house specialists', body: 'Developers, UI designers, QA — all NNC employees. Visit our Bengaluru office and meet the team working on your platform.' },
    { n: '06', h3: '40+ CMS platforms delivered', body: 'News sites, D2C brand hubs, corporate knowledge bases and documentation portals — NNC has built them end to end.' },
  ],
  techStack: ['Next JS', 'Strapi', 'Sanity', 'WordPress', 'Node JS', 'MongoDB', 'PostgreSQL', 'Cloudinary'],
  h2Tech: 'CMS Technology Stack',
  h2Faq: 'CMS & Content Platform Frequently Asked Questions',
  faqs: [
    { q: 'What is the difference between headless and traditional CMS?', a: 'A traditional CMS (like WordPress) couples the editor and the website. A headless CMS (Strapi, Sanity) separates content storage from the frontend — the same content can power a website, mobile app and digital signage. NNC recommends headless when performance and multi-channel delivery matter.' },
    { q: 'How much does CMS development cost?', a: 'CMS projects at NNC start from ₹55,000 for a custom WordPress build and ₹1.2L+ for headless Strapi / Sanity with a Next JS frontend. All pricing is fixed before work starts — no hourly billing.' },
    { q: 'How long does a CMS project take?', a: 'A custom WordPress site typically takes 4–6 weeks. A headless CMS with a Next JS frontend takes 6–10 weeks depending on content types, workflows and integrations. Timelines are agreed upfront.' },
    { q: 'Can you migrate my existing WordPress or Drupal site?', a: 'Yes. NNC handles content, media and URL migration — including SEO preservation with 301 redirects, canonical URLs and schema markup so you do not lose search rankings in the switch.' },
    { q: 'Do editors need technical skills to use the CMS?', a: 'No. Every CMS ships with a role-based editor, visual preview and in-app help. We run a hands-on training session with your content team before launch.' },
    { q: 'Do I own the source code?', a: 'Yes — completely and permanently. On delivery you receive every source file, admin credentials and hosting access. No SaaS lock-in.' },
  ],
}

export default function CMSContentPlatformsPage() {
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
