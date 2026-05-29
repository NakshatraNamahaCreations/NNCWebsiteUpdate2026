import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Graphic Design Company in Mysuru | Nakshatra Namaha Creations',
  description: 'Top graphic design company in Mysuru. Logo design, brand identity, UI/UX design, packaging, brochures & creative design. 35+ in-house designers. Walk-in Mysuru office. Fixed price. Call +91 99005 66466.',
  alternates: { canonical: `${SITE.url}/graphic-design-company-in-mysuru` },
  keywords: [
    'graphic design company in mysuru',
    'branding agency mysuru',
    'logo design company mysuru',
    'brand identity design mysuru',
    'ui ux design company mysuru',
    'packaging design company mysuru',
    'brochure design mysuru',
    'brand identity agency mysuru',
    'creative agency mysuru',
  ].join(', '),
  openGraph: {
    title: 'Graphic Design Company in Mysuru | Nakshatra Namaha Creations',
    description: 'Logo, brand identity, UI/UX, packaging & brochure design for Mysuru businesses. In-house designers. Walk-in office. Fixed price.',
    url: `${SITE.url}/graphic-design-company-in-mysuru`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Nakshatra Namaha Creations',
    images: [{ url: 'https://s3.eu-north-1.amazonaws.com/admin.nakshatranamahacreations.in/NNC+NEW+LOGO+2020+low+res.png', width: 1200, height: 630, alt: 'Graphic Design Company Mysuru Nakshatra Namaha Creations' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Graphic Design Company in Mysuru | Nakshatra Namaha Creations',
    description: 'Logo, brand identity, UI/UX & packaging design in Mysuru. Walk-in office. Fixed price.',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Graphic Design Company in Mysuru',
  description: 'Professional graphic design and branding agency in Mysuru. Logo design, brand identity, UI/UX design, packaging design, brochure design and full creative services. 35+ in-house designers. Walk-in office in JP Nagar, Mysuru.',
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
  serviceType: 'Graphic Design',
  url: `${SITE.url}/graphic-design-company-in-mysuru`,
  offers: [
    { '@type': 'Offer', name: 'Logo Design', price: '8000', priceCurrency: 'INR', description: 'Custom logo design with 3 concepts, 2 revision rounds and all brand files delivered.' },
    { '@type': 'Offer', name: 'Brand Identity Package', price: '35000', priceCurrency: 'INR', description: 'Logo, colour palette, typography, business card, letterhead and comprehensive brand guidelines.' },
    { '@type': 'Offer', name: 'UI/UX Design Package', price: '45000', priceCurrency: 'INR', description: 'Complete UI/UX design for website or mobile app with Figma files, prototype and design system.' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Graphic Design Services Mysuru',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Logo Design Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Identity Design Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UI UX Design Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Packaging Design Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brochure Design Mysuru' } },
    ],
  },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/#services` },
    { '@type': 'ListItem', position: 3, name: 'Graphic Design Mysuru', item: `${SITE.url}/graphic-design-company-in-mysuru` },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does graphic design cost in Mysuru?', acceptedAnswer: { '@type': 'Answer', text: 'Logo design from ₹8,000. Brand identity packages from ₹35,000. UI/UX design from ₹45,000. Packaging design from ₹15,000. All pricing fixed before work begins.' } },
    { '@type': 'Question', name: 'How many logo concepts will I get?', acceptedAnswer: { '@type': 'Answer', text: 'Every logo project starts with 3 initial concepts. Once you pick a direction, we include 2 revision rounds. Additional revisions are quoted separately.' } },
    { '@type': 'Question', name: 'Does Nakshatra Namaha Creations have an office in Mysuru?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Walk-in office at Suswani Towers, JP Nagar 2nd Stage, Mysuru – 570 008. Open Mon–Sat, 9am–7pm.' } },
    { '@type': 'Question', name: 'Do I own the design files?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. You receive full copyright, editable source files (AI, PSD, Figma) and exported formats (PNG, SVG, PDF). The designs are 100% yours.' } },
  ],
}

const data = {
  badge: 'Graphic Design · Mysuru',
  h1: 'Graphic Design Company',
  h1Accent: 'in Mysuru',
  tagline: 'Logo design, brand identity, UI/UX, packaging & brochure design — built by 35+ in-house designers. Walk-in office in JP Nagar, Mysuru. Fixed price. Full copyright transfer.',
  desc: 'Nakshatra Namaha Creations is a full-service graphic design and branding agency in Mysuru. From logo design and brand identity to UI/UX design, packaging and print collateral — every project is handled by our in-house design team. You receive all source files, full copyright and a brand ready to use across every touchpoint. Visit our Mysuru office to review our portfolio.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'graphic design in Mysuru',
  h2Features: 'Design Services We Deliver',
  features: [
    { h3: 'Logo Design', desc: 'Custom logo design with 3 initial concepts, 2 revision rounds and full delivery — AI, PSD, SVG, PNG in every required colour variation and format.' },
    { h3: 'Complete Brand Identity', desc: 'Logo, colour palette, typography system, tone of voice, business cards, letterhead, email signatures and comprehensive brand guidelines document.' },
    { h3: 'UI/UX Design for Web & Apps', desc: 'Wireframes, user flows, high-fidelity Figma designs, interactive prototypes and complete design systems — ready for developer handoff.' },
    { h3: 'Packaging Design', desc: 'Product packaging for FMCG, food, cosmetics, apparel and retail — dieline-compliant and print-ready with mockups for presentation.' },
    { h3: 'Brochure & Print Design', desc: 'Corporate brochures, product catalogues, annual reports, flyers, posters and leaflets — print-ready with professional typography.' },
    { h3: 'Social Media Creative Kits', desc: 'Monthly social media creative packages — Instagram posts, stories, reels covers, LinkedIn graphics and campaign banners.' },
    { h3: 'Marketing Collateral', desc: 'Pitch decks, sales presentations, trade show banners, vehicle wraps, signage and event collateral — consistent with your brand guidelines.' },
    { h3: 'Brand Guidelines Document', desc: 'Comprehensive brand bible covering logo usage, colours, typography, imagery, dos and donts — so every vendor stays on-brand.' },
    { h3: 'Illustration & Icon Design', desc: 'Custom illustration systems, icon sets and branded graphics for websites, apps, presentations and marketing materials.' },
  ],
  h2Why: 'Why Mysuru Businesses Choose Us for Graphic Design',
  why: [
    { n: '01', h3: 'Walk-in office in JP Nagar, Mysuru', body: "Visit Suswani Towers, JP Nagar 2nd Stage. Review design concepts, brainstorm brand direction and discuss feedback in person. Open Mon–Sat, 9am–7pm." },
    { n: '02', h3: '35+ in-house designers — zero outsourcing', body: "Every designer is a permanent Nakshatra Namaha Creations employee. Brand designers, UI/UX specialists, packaging designers and illustrators — all under one roof." },
    { n: '03', h3: 'Full copyright transfer — source files yours', body: "On delivery you receive editable AI, PSD and Figma source files plus all export formats. Full copyright transferred. Use anywhere, modify anytime." },
    { n: '04', h3: 'Consistent across every touchpoint', body: "Logo, website, packaging, social media, brochures — all designed by one team following one brand system. No jarring inconsistency between vendors." },
    { n: '05', h3: 'Design + Development under one roof', body: "If your project needs a website or app, the same team builds it. Design handoffs stay pixel-perfect because designers and developers sit together." },
    { n: '06', h3: 'Fixed price — defined revision rounds', body: "Every project quotes a fixed price with clear revision rounds included. No hourly billing. No surprise invoices for extra concepts or formats." },
  ],
  techStack: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'Adobe XD', 'Sketch', 'Procreate', 'Cinema 4D'],
  h2Tech: 'Design Tools & Software',
  h2Faq: 'Graphic Design in Mysuru — Questions Answered',
  faqs: [
    { q: 'How much does graphic design cost in Mysuru?', a: 'Logo design starts from ₹8,000. Complete brand identity packages from ₹35,000. UI/UX design for websites or apps from ₹45,000. Packaging design from ₹15,000. Brochures and print collateral from ₹5,000 per design. All pricing is fixed before work begins.' },
    { q: 'How many concepts and revisions do I get?', a: 'Logo design: 3 initial concepts, 2 revision rounds. Brand identity: 2 direction concepts, 3 revision rounds across all collateral. UI/UX: Low-fidelity wireframes + high-fidelity designs with 3 revision rounds. Additional revisions quoted separately.' },
    { q: 'What file formats will I receive?', a: 'Editable source files — Adobe Illustrator (AI), Photoshop (PSD), Figma files, InDesign (INDD) as relevant. Plus exported formats — SVG, PNG, JPG, PDF, EPS — in every required colour mode and resolution.' },
    { q: 'Does Nakshatra Namaha Creations have an office in Mysuru?', a: 'Yes. Our Mysuru branch is at Suswani Towers, JP Nagar 2nd Stage, Mysuru – 570 008. Walk in Monday to Saturday, 9am–7pm to review portfolio samples and discuss projects.' },
    { q: 'How long does a design project take?', a: 'Logo design: 1–2 weeks. Brand identity package: 3–4 weeks. UI/UX design for websites: 3–5 weeks. UI/UX for mobile apps: 4–6 weeks. Packaging design: 2–3 weeks. Brochures: 1–2 weeks.' },
    { q: 'Do I own the copyright?', a: 'Yes. Full copyright is transferred to you on delivery. You receive all editable source files and can use the designs anywhere, modify them anytime and trademark them if you choose — without any ongoing licence fees.' },
    { q: 'Do you design for printing?', a: 'Yes. Print-ready files with correct bleed, CMYK colour mode and appropriate resolution (300 DPI minimum). We can also coordinate directly with print vendors to ensure colour accuracy and quality.' },
    { q: 'Can you handle UI/UX for both web and mobile?', a: 'Yes. Wireframes, user flows, Figma high-fidelity designs and interactive prototypes for websites and mobile apps. Complete design systems with component libraries ready for developer handoff.' },
  ],
}

export default function GraphicDesignMysuruPage() {
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
