import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Graphic Design and Branding Services | NNC Digital',
  description: 'NNC designs complete brand identities including logos, corporate stationery, social media creatives, brochures, packaging and marketing collaterals. Luxury, healthcare, real estate and more.',
  alternates: { canonical: `${SITE.url}/services/graphic-design-branding` },
  openGraph: {
    title: 'Graphic Design and Branding Services | NNC Digital',
    description: 'Logo design, brand identity, social media creatives, brochures and marketing collaterals. In-house design team.',
    url: `${SITE.url}/services/graphic-design-branding`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'Graphic Design and Branding – NNC Digital' }],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.nakshatranamahacreations.com/services/graphic-design-branding#service',
  serviceType: 'Graphic Design and Branding',
  name: 'Graphic Design and Branding Services',
  alternateName: 'Logo Design and Corporate Identity',
  description: 'NNC designs complete brand identities including logos, corporate stationery, social media creatives, brochures, packaging and marketing collaterals. Industry specialisations include luxury, healthcare, real estate, hospitality and professional services.',
  url: 'https://www.nakshatranamahacreations.com/services/graphic-design-branding',
  provider: {
    '@type': 'Organization',
    '@id': 'https://www.nakshatranamahacreations.com#organization',
    name: 'Nakshatra Namaha Creations Private Limited',
    url: 'https://www.nakshatranamahacreations.com',
    telephone: '+91-99005-66466',
    email: 'info@nakshatranamahacreations.com',
    logo: 'https://www.nakshatranamahacreations.com/images/logo.png',
  },
  areaServed: [{ '@type': 'City', name: 'Bangalore' }, { '@type': 'City', name: 'Mumbai' }, { '@type': 'City', name: 'Mysuru' }, { '@type': 'City', name: 'Hyderabad' }, { '@type': 'Country', name: 'India' }],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Branding and Design Packages',
    itemListElement: [
      { '@type': 'Offer', name: 'Logo and Brand Identity', description: 'Logo design with brand guidelines, colour palette, typography and stationery', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: 'Social Media Creatives', description: 'Monthly Instagram, LinkedIn and Facebook creative design packs', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: 'Brochures and Print Collaterals', description: 'Company profile, product brochure, flyer and catalog design', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
    ],
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '106', bestRating: '5' },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Graphic Design and Branding', item: `${SITE.url}/services/graphic-design-branding` },
  ],
}

const data = {
  badge: 'Service · Graphic Design and Branding',
  h1: 'Graphic Design',
  h1Accent: 'and Branding',
  tagline: 'Complete brand identities — logo, guidelines, stationery, social media creatives, brochures and packaging. In-house design team.',
  desc: 'NNC designs brand identities for businesses across luxury, healthcare, real estate, hospitality, fintech and professional services. Logo design, brand guidelines, corporate stationery, social media creative packs, brochures, packaging and marketing collaterals — all created by our in-house design team.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'graphic design and branding',
  h2Features: 'Graphic Design and Branding Services',
  features: [
    { h3: 'Logo Design and Brand Identity', desc: 'Logo design with complete brand guidelines — colour palette, typography, logo usage rules, stationery and brand voice documentation.' },
    { h3: 'Corporate Stationery Design', desc: 'Business cards, letterheads, envelopes, folder designs, email signatures and official document templates aligned to your brand.' },
    { h3: 'Social Media Creative Design', desc: 'Monthly Instagram, Facebook and LinkedIn creative packs — posts, stories, carousels, reels thumbnails and profile graphics.' },
    { h3: 'Brochure and Company Profile Design', desc: 'Multi-page brochures, company profiles, product catalogs and pitch decks — designed for print and digital distribution.' },
    { h3: 'Packaging Design', desc: 'Product packaging design for FMCG, pharma, food and consumer brands — box, label, pouch and display stand design.' },
    { h3: 'Marketing Collateral Design', desc: 'Banners, hoardings, standees, roll-ups, exhibition displays, flyers and event creatives for offline and online campaigns.' },
  ],
  h2Why: 'Why Choose NNC for Graphic Design?',
  why: [
    { n: '01', h3: 'In-house design team — not freelancers', body: 'NNC has a dedicated in-house graphic design team with specialists across branding, print, digital and packaging. No freelancer inconsistency.' },
    { n: '02', h3: 'Industry-specific design experience', body: 'NNC has designed brands for luxury hotels, healthcare groups, real estate developers, law firms, coaching institutes and tech startups.' },
    { n: '03', h3: 'Brand guidelines delivery — not just logo files', body: 'Every branding project includes a comprehensive brand guidelines document — colour codes, font files, do and do-not usage rules and digital asset library.' },
    { n: '04', h3: 'Integrated with web and marketing', body: 'When NNC designs your brand, the same guidelines are applied to your website, ads, social media and print — consistent identity across every channel.' },
    { n: '05', h3: 'Fixed price — defined deliverables', body: 'Every design project has defined deliverables and revision rounds in the scope. No open-ended hourly billing.' },
    { n: '06', h3: '565+ projects — 4.9★ Google rating', body: 'Proven design track record across 10 years and multiple industries.' },
  ],
  techStack: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'Figma', 'Canva Pro', 'CorelDRAW'],
  h2Tech: 'Design Tools',
  h2Faq: 'Graphic Design and Branding — Frequently Asked Questions',
  faqs: [
    { q: 'How much does logo and brand identity design cost?', a: 'A logo design with basic brand guidelines starts from ₹12,000. A complete brand identity package with stationery and guidelines starts from ₹35,000.' },
    { q: 'How long does brand identity design take?', a: 'A logo design takes 1–2 weeks. A complete brand identity package takes 3–4 weeks including revisions.' },
    { q: 'Do you provide social media creative design?', a: 'Yes. Monthly social media creative packs start from ₹8,000/month for Instagram and Facebook creatives.' },
    { q: 'Can you redesign our existing logo?', a: 'Yes. NNC does logo refreshes — modernising existing logos while preserving brand equity. We present 3 directions before the final execution.' },
    { q: 'Do I own all design files after delivery?', a: 'Yes. You receive editable source files (AI, PSD, Figma) and all final export formats on delivery.' },
  ],
}

export default function GraphicDesignBrandingServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
