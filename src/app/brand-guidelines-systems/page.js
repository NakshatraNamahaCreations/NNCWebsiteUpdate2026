import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Brand Guidelines & Design Systems Agency in Bangalore | NNC Digital',
  description: 'Brand guidelines and design systems development in Bangalore. Logo usage, colour, typography, voice and digital design systems in Figma.',
  alternates: { canonical: `${SITE.url}/brand-guidelines-systems` },
  keywords: 'brand guidelines bangalore, brand book design, design system agency, figma design system, brand standards document, visual identity guidelines',
  openGraph: {
    title: 'Brand Guidelines & Design Systems Agency in Bangalore | NNC Digital',
    description: 'Brand books and digital design systems for in-house teams, external vendors and growing product teams. Figma design systems included.',
    url: `${SITE.url}/brand-guidelines-systems`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'Brand Guidelines & Systems NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Brand Guidelines & Design Systems',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: 'Brand guidelines, brand books and digital design systems for growing organisations.',
  url: `${SITE.url}/brand-guidelines-systems`,
}

const breadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Brand Guidelines & Systems', item: `${SITE.url}/brand-guidelines-systems` },
  ],
}

const data = {
  badge: 'Brand Guidelines',
  h1: 'Brand Guidelines &',
  h1Accent: 'Design Systems',
  tagline: 'Brand books, design systems and visual guidelines that keep every touchpoint — ads, website, product UI, packaging — consistent as your team grows.',
  desc: 'NNC Digital builds brand guidelines and design systems for brands whose look and feel is drifting as new designers, vendors and markets come on board. Every engagement delivers a brand guidelines PDF (for marketing teams, ad agencies and print vendors) plus a Figma design system (for product and web teams) — the single source of truth your identity needs to stay recognisable at scale.',
  stat1: '150+',
  stat1Label: 'Guideline Systems Delivered',
  serviceName: 'brand guidelines and design systems development',
  h2Features: 'Everything a Brand Guidelines Project Needs',
  features: [
    { h3: 'Brand Essence & Positioning', desc: 'Brand purpose, promise, values and personality — the written strategy that anchors every design decision.' },
    { h3: 'Logo Usage Rules', desc: 'Primary, secondary, lockups, variations, clear space, minimum size and incorrect usage examples.' },
    { h3: 'Colour System', desc: 'Primary, secondary, accent, neutral and semantic colour with HEX / RGB / CMYK / Pantone and accessibility notes.' },
    { h3: 'Typography System', desc: 'Primary, secondary, display and web type with hierarchy, pairing rules and licensing clarified.' },
    { h3: 'Iconography & Illustration', desc: 'Icon style, stroke rules, illustration treatment and photography direction — consistent across touchpoints.' },
    { h3: 'Voice & Tone Guide', desc: 'How the brand sounds in copy — headlines, body, UX writing, support responses. Examples of \"on-brand\" and \"off-brand\" writing.' },
    { h3: 'Digital Design System (Figma)', desc: 'Component library with tokens, states, variants and usage rules — ready for product and marketing teams to build against.' },
    { h3: 'Application Examples', desc: 'Social media, website, print, packaging, merchandise and signage examples showing the system in action.' },
    { h3: 'Governance & Rollout Plan', desc: 'Who owns the brand, who approves exceptions and how the system evolves — written process, not a one-off PDF handover.' },
  ],
  h2Why: 'Why Choose NNC for Brand Guidelines?',
  why: [
    { n: '01', h3: 'Document + design system — not just a PDF', body: 'Brand books are for marketing teams; design systems are for product teams. NNC delivers both so the identity holds across digital and print.' },
    { n: '02', h3: 'Written for the people using it', body: 'Guidelines designed for in-house marketers, external agencies and print vendors — not a 150-page design academic manifesto no one reads.' },
    { n: '03', h3: 'Figma design system — not just visual rules', body: 'A proper Figma design system means product teams build consistent UI by default — not by hand-checking against a PDF.' },
    { n: '04', h3: 'Governance and rollout included', body: 'Guidelines without governance get ignored in 6 months. NNC includes a rollout plan — training, review process, update cadence.' },
    { n: '05', h3: '35+ in-house team', body: 'Brand strategists, visual designers, UI designers and brand writers — all NNC employees. Visit our Bengaluru office.' },
    { n: '06', h3: '150+ guideline systems delivered', body: 'Startups codifying first identity, enterprises standardising after acquisitions, D2C brands scaling to new markets — NNC has shipped across all three.' },
  ],
  techStack: ['Figma', 'Adobe InDesign', 'Adobe Illustrator', 'Adobe Photoshop', 'Notion', 'Tokens Studio', 'Style Dictionary', 'Pantone System'],
  h2Tech: 'Design Software & Stack',
  h2Faq: 'Brand Guidelines & Design Systems Frequently Asked Questions',
  faqs: [
    { q: 'How much does a brand guidelines project cost?', a: 'A standard brand guidelines PDF (logo, colour, type, usage rules, application examples) at NNC starts from ₹60,000. Full guidelines with Figma design system, voice guide and governance plan run ₹1.5L–₹5L. All pricing fixed upfront.' },
    { q: 'How long does the project take?', a: 'A brand book PDF takes 3–4 weeks. Full guidelines with Figma design system take 6–10 weeks. Enterprise brand standards with stakeholder reviews take 10–16 weeks.' },
    { q: 'We already have a logo — do you redesign or work from it?', a: 'Both options available. NNC can refine or redesign an existing logo if it needs it, or build guidelines directly on top of your current logo. Most engagements start with an audit to recommend the right approach.' },
    { q: 'Do you build the Figma design system too?', a: 'Yes — Figma design systems are our preferred format for digital teams. Components, tokens, variants and documentation shipped in one Figma library.' },
    { q: 'What about voice and tone — do you write guidelines?', a: 'Yes. NNC\'s brand writers develop voice and tone guides — with on-brand / off-brand examples for headlines, body copy, UX writing and support responses.' },
    { q: 'Do you train our team on the guidelines?', a: 'Yes — an onboarding session (remote or in-person) is standard. Larger enterprise rollouts include separate training for marketing, product and external agency teams.' },
  ],
}

export default function BrandGuidelinesSystemsPage() {
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
