import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Graphic Design Company in Bangalore | Visual Design Solution',
  description:
    'Work with a graphic design company in Bangalore to create impactful branding and visuals, with NNC delivering designs that drive engagement and growth.',
  alternates: {
    canonical: `${SITE.url}/graphic-design-company-in-bangalore`,
  },
  keywords:
    'graphic design company in bangalore, branding agency bangalore, logo design company bangalore, ui ux design company bangalore, brand identity agency bangalore, packaging design company bangalore, creative agency bangalore, brochure design bangalore, graphic designer bangalore',
  openGraph: {
    title: 'Graphic Design Company in Bangalore | Visual Design Solution',
    description:
      'Work with a graphic design company in Bangalore to create impactful branding and visuals, with NNC delivering designs that drive engagement and growth.',
    url: `${SITE.url}/graphic-design-company-in-bangalore`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Graphic Design Company in Bangalore – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Graphic Design Company in Bangalore | Visual Design Solution',
    description:
      'Work with a graphic design company in Bangalore to create impactful branding and visuals, with NNC delivering designs that drive engagement and growth.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Graphic Design Company in Bangalore',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7th Floor, Magnolia, Prestige Shantiniketan',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      postalCode: '560048',
      addressCountry: 'IN',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Bangalore' },
    { '@type': 'City', name: 'Whitefield' },
    { '@type': 'City', name: 'Electronic City' },
    { '@type': 'City', name: 'Koramangala' },
    { '@type': 'City', name: 'Indiranagar' },
  ],
  serviceType: [
    'Graphic Design',
    'Branding Agency',
    'Logo Design',
    'UI UX Design',
    'Brand Identity Design',
    'Packaging Design',
    'Creative Agency',
  ],
  description:
    'Graphic design company in Bangalore — logo design, brand identity, UI/UX design, packaging design, brochure design and creative design services for Bangalore businesses.',
  url: `${SITE.url}/graphic-design-company-in-bangalore`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Logo & Brand Identity Design Bangalore',
      price: '15000',
      priceCurrency: 'INR',
      description: 'Logo design, brand identity — logo, colour palette, typography and brand guidelines.',
    },
    {
      '@type': 'Offer',
      name: 'Full Branding Package Bangalore',
      price: '40000',
      priceCurrency: 'INR',
      description: 'Complete brand identity package — logo, brand guidelines, stationery, social media templates and marketing collateral.',
    },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Digital Marketing Agency in Bangalore',
      item: `${SITE.url}/digital-marketing-agency-in-bangalore`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Graphic Design Company in Bangalore',
      item: `${SITE.url}/graphic-design-company-in-bangalore`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best graphic design company in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Bangalore's top-rated graphic design companies — 565+ projects delivered, 4.9★ Google rating, headquartered in Whitefield, Bangalore. We provide logo design, brand identity, UI/UX design, packaging design and creative design services for Bangalore businesses.",
      },
    },
    {
      '@type': 'Question',
      name: 'What graphic design services does NNC provide in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Bangalore provides full graphic design services — logo design, brand identity design, brand guidelines, UI/UX design, packaging design, brochure design, social media creatives, presentation design and marketing collateral.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide logo design services in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides logo design for Bangalore businesses — original, scalable vector logos designed around your brand positioning. Every logo comes with colour variants, usage guidelines and source files in AI, EPS, SVG and PNG formats.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide brand identity design in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides complete brand identity design for Bangalore companies — logo, colour palette, typography system, visual language, brand guidelines document, stationery design and social media templates. Everything a growing brand needs to present consistently across all touchpoints.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide UI/UX design services in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides UI/UX design for Bangalore businesses — user research, wireframing, Figma UI design, interactive prototypes and design handoff for web and mobile apps. Design that is both visually strong and conversion-focused.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does graphic design cost in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Logo design in Bangalore starts from ₹15,000. A full brand identity package starts from ₹40,000. UI/UX design for web or mobile is scoped based on the number of screens. All projects are fixed-price — no hourly billing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a graphic design office in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital is headquartered at Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit us to review design concepts, approve brand guidelines and meet the creative team working on your project.',
      },
    },
  ],
}

const data = {
  badge: 'Graphic Design · Bangalore',
  h1: 'Graphic Design Company',
  h1Accent: 'in Bangalore',
  tagline:
    'Top graphic design company in Bangalore — logo design, branding agency, brand identity design, UI UX design, packaging design, creative agency & graphic design services. Fixed price.',
  desc:
    'NNC Digital is a full-service graphic design company in Bangalore creating logos, brand identities, UI/UX designs, packaging designs and marketing collateral for startups, SMEs and enterprises. Every design project is handled by our in-house Bangalore creative team — from concept and strategy to final delivery — with zero outsourcing and fixed-price projects that cover the complete scope upfront.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'graphic design in Bangalore',
  h2Features: 'Graphic Design Services in Bangalore',
  features: [
    {
      h3: 'Logo Design Company Bangalore',
      desc: 'Original logo design for Bangalore businesses — concept exploration, refinement and final delivery in all formats (AI, EPS, SVG, PNG). Logos designed to work across digital, print and signage at any scale.',
    },
    {
      h3: 'Branding Agency Bangalore',
      desc: 'Full branding services for Bangalore companies — brand strategy, visual identity, brand voice and messaging framework. Branding that differentiates your business and creates lasting recognition with your target audience.',
    },
    {
      h3: 'Brand Identity Agency Bangalore',
      desc: 'Complete brand identity design for Bangalore brands — logo, colour palette, typography, visual language, brand guidelines document and asset library. Everything needed to present your brand consistently across all channels.',
    },
    {
      h3: 'UI UX Design Company Bangalore',
      desc: 'UI/UX design for Bangalore web and mobile products — user research, information architecture, wireframes, Figma UI design, interactive prototypes and developer handoff. Design that converts visitors into customers.',
    },
    {
      h3: 'Packaging Design Company Bangalore',
      desc: 'Packaging design for Bangalore FMCG, food, beverage and consumer brands — structural dielines, surface design, typography and print-ready artwork. Packaging that stands out on shelf and builds brand equity.',
    },
    {
      h3: 'Creative Agency Bangalore',
      desc: 'Creative design services for Bangalore businesses — campaign concepts, advertising creatives, social media design, digital banners, OOH designs and integrated creative campaigns across all formats and channels.',
    },
    {
      h3: 'Brochure Design Bangalore',
      desc: 'Brochure and marketing collateral design for Bangalore companies — company profiles, product catalogues, service brochures, presentation decks and sales kits. Print-ready files with professional layout and typography.',
    },
    {
      h3: 'Social Media Design Bangalore',
      desc: 'Social media graphic design for Bangalore brands — Instagram post templates, story designs, LinkedIn creatives, Facebook ad designs and YouTube thumbnails. Consistent visual identity across all social platforms.',
    },
    {
      h3: 'Presentation Design Bangalore',
      desc: 'Presentation design for Bangalore businesses — investor pitch decks, sales presentations, corporate PowerPoint and Keynote design. Data visualisation, infographics and slide layouts that communicate clearly and impress.',
    },
  ],
  h2Why: 'Why Choose NNC as Your Graphic Design Company in Bangalore?',
  why: [
    {
      n: '01',
      h3: 'Bangalore headquarters — review designs in person',
      body: 'NNC is headquartered at Prestige Shantiniketan, Whitefield, Bangalore. Visit us to review logo concepts, approve brand guidelines and meet the creative team working on your project.',
    },
    {
      n: '02',
      h3: 'In-house creative team — zero outsourcing',
      body: 'Every graphic designer, brand strategist and UI/UX designer is a full-time NNC employee in Bangalore. Consistent creative team from brief to final delivery — no freelancers, no offshore outsourcing.',
    },
    {
      n: '03',
      h3: 'Strategy-led design — not just aesthetics',
      body: 'NNC starts every design project with brand strategy. Understanding your audience, competitors and positioning before opening Figma or Illustrator. Design that works commercially, not just visually.',
    },
    {
      n: '04',
      h3: 'All design disciplines — one studio',
      body: 'NNC covers every design discipline under one roof — graphic design, brand identity, UI/UX, packaging, print, digital and motion. One creative partner for all your Bangalore design needs.',
    },
    {
      n: '05',
      h3: 'Fixed price — fully scoped before design starts',
      body: 'Every design project is scoped and priced upfront — number of concepts, revision rounds and final deliverables. No hourly billing, no surprise charges after the first concept is presented.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has delivered graphic design for startups, FMCG brands, SaaS companies, healthcare providers and enterprises across Bangalore. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'After Effects', 'Canva Pro', 'Adobe XD', 'Sketch'],
  h2Tech: 'Graphic Design Tools & Software',
  h2Faq: 'Graphic Design Company Bangalore — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best graphic design company in Bangalore?',
      a: "NNC Digital is among Bangalore's top graphic design companies — 565+ projects, 4.9★ Google rating, headquartered in Whitefield. Logo design, brand identity, UI/UX, packaging and creative design — all in-house.",
    },
    {
      q: 'Do you provide logo design in Bangalore?',
      a: 'Yes. NNC provides logo design for Bangalore businesses — original vector logos with all format deliverables (AI, EPS, SVG, PNG) and usage guidelines.',
    },
    {
      q: 'Do you provide brand identity design in Bangalore?',
      a: 'Yes. NNC provides complete brand identity design — logo, colour palette, typography, brand guidelines and marketing collateral for Bangalore brands.',
    },
    {
      q: 'Do you provide UI/UX design in Bangalore?',
      a: 'Yes. NNC provides UI/UX design for Bangalore web and mobile products — wireframes, Figma UI design, prototypes and developer handoff.',
    },
    {
      q: 'How much does graphic design cost in Bangalore?',
      a: 'Logo design starts from ₹15,000. Full brand identity packages start from ₹40,000. All fixed-price — no hourly billing.',
    },
    {
      q: 'Do you have a graphic design office in Bangalore?',
      a: 'Yes. NNC is headquartered at Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit us to review design concepts and meet the creative team.',
    },
  ],
}

export default function GraphicDesignCompanyBangalorePage() {
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
