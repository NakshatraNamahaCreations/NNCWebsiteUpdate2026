import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Marketing Collateral Design Agency in Bangalore | NNC Digital',
  description: 'Marketing collateral design in Bangalore. Brochures, product catalogues, case studies, flyers, banners and sales decks designed by in-house NNC team.',
  alternates: { canonical: `${SITE.url}/marketing-collateral-design` },
  keywords: 'marketing collateral design bangalore, brochure design, catalogue design, flyer design, sales deck design, case study design',
  openGraph: {
    title: 'Marketing Collateral Design Agency in Bangalore | NNC Digital',
    description: 'Brochures, catalogues, case studies, flyers, banners and sales decks by in-house NNC designers. Print-ready, brand-consistent.',
    url: `${SITE.url}/marketing-collateral-design`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'Marketing Collateral Design NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Marketing Collateral Design',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: 'Marketing collateral design including brochures, product catalogues, case studies, flyers, banners and sales decks.',
  url: `${SITE.url}/marketing-collateral-design`,
}

const breadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Marketing Collateral', item: `${SITE.url}/marketing-collateral-design` },
  ],
}

const data = {
  badge: 'Marketing Collateral',
  h1: 'Marketing Collateral',
  h1Accent: 'Design Services',
  tagline: 'Brochures, product catalogues, case studies, flyers, banners, sales decks and trade show material — designed by in-house NNC designers, print-ready.',
  desc: 'NNC Digital designs marketing and sales collateral for brands and sales teams who need polished, on-brand assets to close deals, run campaigns and show up at trade shows. Every piece is designed on your brand guidelines (or NNC-built guidelines), delivered as print-ready files and editable source files you own.',
  stat1: '600+',
  stat1Label: 'Collateral Pieces Designed',
  serviceName: 'marketing collateral design and print-ready creative',
  h2Features: 'Everything a Collateral Program Needs',
  features: [
    { h3: 'Corporate Brochures', desc: 'Bi-fold, tri-fold and multi-page corporate brochures with content hierarchy and print-ready production files.' },
    { h3: 'Product Catalogues', desc: 'Multi-page catalogues with product images, specs, pricing and index — designed for print and digital flip-book export.' },
    { h3: 'Case Studies', desc: 'Branded case study templates — challenge, approach, result — designed for sales use and website publishing.' },
    { h3: 'Sales Decks & Pitch Decks', desc: 'PowerPoint, Keynote and Google Slides decks for sales calls, investor pitches and conference talks.' },
    { h3: 'Flyers & Leaflets', desc: 'A4, A5 and custom-sized flyers for offers, events, launches and campaign activations — print and digital versions.' },
    { h3: 'Posters & Banners', desc: 'Event posters, roll-up banners, standees, backdrops and trade show graphics — print-shop ready.' },
    { h3: 'Annual Reports', desc: 'Multi-page annual report design with financial tables, infographics and executive letters — print and PDF.' },
    { h3: 'Email Campaign Templates', desc: 'Branded HTML email templates editable in Mailchimp, Zoho or SendGrid — mobile-responsive and print-free.' },
    { h3: 'Trade Show & Event Kits', desc: 'Complete event booth kits — signage, backdrops, roller banners, standees, pamphlets and giveaway material design.' },
  ],
  h2Why: 'Why Choose NNC for Marketing Collateral?',
  why: [
    { n: '01', h3: 'Print-ready, not screen-approximate', body: 'CMYK colour, 300 DPI, bleed, crop marks and correct paper specifications — NNC delivers files print shops do not reject.' },
    { n: '02', h3: 'Brand-consistent across collateral', body: 'If NNC built your brand guidelines, we apply them perfectly. If you have existing guidelines, we follow them to the letter.' },
    { n: '03', h3: 'Fixed price per piece or program', body: 'Single-piece and multi-piece program pricing both available. Costs agreed upfront — no surprise invoices for revisions or language variants.' },
    { n: '04', h3: 'Editable source files handed over', body: 'InDesign, Illustrator, PowerPoint or Figma source files delivered — your internal team can update content between major design refreshes.' },
    { n: '05', h3: '35+ in-house team', body: 'Graphic designers, art directors, copy editors and production specialists — all NNC employees. Visit our Bengaluru office.' },
    { n: '06', h3: '600+ collateral pieces delivered', body: 'Enterprise sales teams, D2C launches, startup pitch decks, trade show setups and corporate annual reports — NNC has shipped across every vertical.' },
  ],
  techStack: ['Adobe InDesign', 'Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Keynote', 'PowerPoint', 'Google Slides', 'Pantone System'],
  h2Tech: 'Design Software & Stack',
  h2Faq: 'Marketing Collateral Frequently Asked Questions',
  faqs: [
    { q: 'How much does marketing collateral cost?', a: 'Single pieces (flyer, brochure) start from ₹6,000. Multi-page catalogues and annual reports typically run ₹25,000–₹1.5L depending on page count. Program-level pricing (10+ pieces per quarter) is quoted at discount. All pricing fixed upfront.' },
    { q: 'How long does collateral design take?', a: 'A single flyer or brochure takes 5–10 working days. Multi-page catalogues and annual reports take 3–6 weeks. Program-level engagements establish faster per-piece cycles once brand standards are set.' },
    { q: 'Do you handle print production too?', a: 'NNC designs and delivers print-ready files. Printing can be coordinated through our trusted print partners in Bengaluru / Mumbai or your preferred print vendor — your choice.' },
    { q: 'Can NNC write the content too?', a: 'Yes — NNC\'s in-house copywriters can research, draft and edit collateral copy. Content writing is priced separately from design but regularly bundled.' },
    { q: 'What about multiple language versions?', a: 'NNC can produce collateral in multiple Indian languages — Hindi, Kannada, Tamil, Telugu, Marathi and more. Translation, typesetting and script-specific typography handled.' },
    { q: 'Do I own the design files?', a: 'Yes — complete ownership on delivery. Source files (InDesign, Illustrator, PowerPoint, Figma) and licensed fonts / images handed over.' },
  ],
}

export default function MarketingCollateralDesignPage() {
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
