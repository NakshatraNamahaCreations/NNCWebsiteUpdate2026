import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Logo Design & Brand Identity Agency in Bangalore | NNC Digital',
  description: 'Logo design and brand identity services in Bangalore. Wordmark, symbol and monogram design with full identity systems — colour, typography and brand guidelines.',
  alternates: { canonical: `${SITE.url}/logo-brand-identity` },
  keywords: 'logo design bangalore, brand identity agency, logo designer bangalore, brand design services, visual identity design, custom logo design',
  openGraph: {
    title: 'Logo Design & Brand Identity Agency in Bangalore | NNC Digital',
    description: 'Logos and full identity systems — wordmark, symbol, colour, typography and guidelines. In-house brand designers.',
    url: `${SITE.url}/logo-brand-identity`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'Logo Brand Identity NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Logo Design & Brand Identity',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: 'Logo design and brand identity services covering wordmark, symbol, colour, typography and guidelines.',
  url: `${SITE.url}/logo-brand-identity`,
}

const breadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Logo & Brand Identity', item: `${SITE.url}/logo-brand-identity` },
  ],
}

const data = {
  badge: 'Logo & Brand Identity',
  h1: 'Logo Design &',
  h1Accent: 'Brand Identity',
  tagline: 'Wordmark, symbol and monogram logos backed by full identity systems — colour palette, typography, usage rules and brand guidelines.',
  desc: 'NNC Digital\'s brand design studio creates logos and visual identity systems for startups raising their first round, established businesses rebranding for the next decade and D2C products launching to market. Every engagement goes beyond a logo — delivering a full identity system your in-house team and external vendors can apply consistently across digital, print and packaging.',
  stat1: '400+',
  stat1Label: 'Identities Designed',
  serviceName: 'logo design and brand identity',
  h2Features: 'Everything a Brand Identity Needs',
  features: [
    { h3: 'Brand Discovery Workshop', desc: 'Positioning, audience, personality and visual territory agreed before any logo pencils move — direction set, not guessed.' },
    { h3: 'Logo Design (3-4 Directions)', desc: 'Three to four distinct logo directions explored and presented — wordmark, symbol + wordmark, monogram variations.' },
    { h3: 'Logo Variations & Lockups', desc: 'Primary, secondary, horizontal, vertical, stacked, favicon and single-colour variations — every usage covered.' },
    { h3: 'Colour Palette', desc: 'Primary, secondary and accent colours with HEX, RGB, CMYK and Pantone values for digital and print consistency.' },
    { h3: 'Typography System', desc: 'Primary, secondary and web typefaces chosen with hierarchy, pairing rules and licensing clarified.' },
    { h3: 'Brand Pattern & Graphic Language', desc: 'Signature patterns, iconography and graphic motifs that extend the identity beyond the logo.' },
    { h3: 'Photography & Illustration Direction', desc: 'Guidance on image style, filters, composition and illustration treatment for consistent on-brand visuals.' },
    { h3: 'Brand Guidelines Document', desc: 'PDF brand book covering logo usage, colour, typography, dos / don\'ts and application examples — handover-ready.' },
    { h3: 'Launch Toolkit', desc: 'Social media kit, email signature, business card and letterhead templates applied at delivery — brand ready to go live.' },
  ],
  h2Why: 'Why Choose NNC for Brand Identity?',
  why: [
    { n: '01', h3: 'Strategy before design', body: 'Logos that come from a brief alone age badly. NNC starts with positioning and audience work so the identity is built on strategy, not aesthetic preference.' },
    { n: '02', h3: 'Full system, not just a logo', body: 'A logo in isolation is incomplete. NNC delivers the full identity system — colour, type, patterns and guidelines — so the brand stays consistent across every touchpoint.' },
    { n: '03', h3: 'Fixed scope, fixed revisions', body: 'Every engagement specifies rounds (typically 2 major + 1 minor). No endless revision cycles that drain budget and dilute the identity.' },
    { n: '04', h3: 'Handover-ready documentation', body: 'Final delivery includes a brand guidelines PDF so your in-house marketing and external vendors can apply the identity correctly without constant designer consultation.' },
    { n: '05', h3: '35+ in-house team', body: 'Brand strategists, logo designers, type and colour specialists — all NNC employees. Visit our Bengaluru office.' },
    { n: '06', h3: '400+ identities designed', body: 'Startups, D2C brands, enterprise rebrands, consumer products and service businesses across Indian industries.' },
  ],
  techStack: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Adobe InDesign', 'Procreate', 'Glyphs', 'Pantone System', 'Google Fonts'],
  h2Tech: 'Design Software & Stack',
  h2Faq: 'Logo & Brand Identity Frequently Asked Questions',
  faqs: [
    { q: 'How much does logo design cost?', a: 'Standalone logo design at NNC starts from ₹25,000 (3 directions, 2 revision rounds, final files). Full identity systems with colour, type and brand guidelines run ₹60,000–₹2.5L depending on scope. All pricing fixed upfront.' },
    { q: 'How long does the process take?', a: 'A standalone logo takes 2–3 weeks. A full brand identity with guidelines takes 4–6 weeks. Enterprise rebrands with stakeholder reviews and multi-touchpoint rollouts take 8–14 weeks.' },
    { q: 'How many logo options do we see?', a: '3–4 distinct logo directions in round one. One direction is chosen and refined through 2 further rounds. We do not do 20-option \"logo buffet\" presentations — more options dilute decision-making.' },
    { q: 'What files do I receive?', a: 'Final delivery includes vector files (AI, EPS, SVG, PDF), raster (PNG, JPG), favicon, social avatar sizes and a brand guidelines PDF. Everything your in-house team and vendors will need.' },
    { q: 'Do I own the logo and identity?', a: 'Yes — on final payment, full copyright and ownership transfer to you. Logo is yours to trademark, use and modify permanently.' },
    { q: 'Can NNC also apply the identity to our website / packaging / app?', a: 'Yes — NNC covers website design, packaging design, UI/UX and marketing collateral all in-house. Identity-to-application transitions are seamless when both live in the same studio.' },
  ],
}

export default function LogoBrandIdentityPage() {
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
