import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Graphic Design Company in Mumbai | Visual Design Solutions',
  description:
    'We are a  top graphic design company in Mumbai for impactful branding and visuals, with NNC delivering creative design solutions that enhance your business.',
  alternates: {
    canonical: `${SITE.url}/graphic-design-company-in-mumbai`,
  },
  keywords:
    'graphic design company in mumbai, branding agency mumbai, logo design company mumbai, brand identity design mumbai, ui ux design company mumbai, packaging design company mumbai, brochure design mumbai, brand identity agency mumbai, creative agency mumbai',
  openGraph: {
    title: 'Graphic Design Company in Mumbai | Visual Design Solutions',
    description:
      'We are a  top graphic design company in Mumbai for impactful branding and visuals, with NNC delivering creative design solutions that enhance your business.',
    url: `${SITE.url}/graphic-design-company-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Graphic Design Company in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Graphic Design Company in Mumbai | Visual Design Solutions',
    description:
      'We are a  top graphic design company in Mumbai for impactful branding and visuals, with NNC delivering creative design solutions that enhance your business.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Graphic Design Company in Mumbai',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lodha Signet, Kolshet Road, Thane West',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400607',
      addressCountry: 'IN',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Mumbai' },
    { '@type': 'City', name: 'Thane' },
    { '@type': 'City', name: 'Navi Mumbai' },
    { '@type': 'City', name: 'Andheri' },
    { '@type': 'City', name: 'BKC' },
  ],
  serviceType: [
    'Graphic Design',
    'Branding Agency',
    'Logo Design',
    'Brand Identity Design',
    'UI UX Design',
    'Packaging Design',
    'Brochure Design',
    'Creative Agency',
  ],
  description:
    'Full-service graphic design company and branding agency in Mumbai — logo design, brand identity, UI UX design, packaging design, brochure design and creative agency services. Branch office in Thane West.',
  url: `${SITE.url}/graphic-design-company-in-mumbai`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Logo & Brand Identity Mumbai',
      price: '15000',
      priceCurrency: 'INR',
      description: 'Logo design with brand guidelines — colours, typography, usage rules and stationery.',
    },
    {
      '@type': 'Offer',
      name: 'UI UX Design Mumbai',
      price: '35000',
      priceCurrency: 'INR',
      description: 'UI UX design for web or mobile app — wireframes, prototypes and final design files.',
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
      name: 'Graphic Design Company Bangalore',
      item: `${SITE.url}/graphic-design-company-in-bangalore`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Graphic Design Company in Mumbai',
      item: `${SITE.url}/graphic-design-company-in-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best graphic design company in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Mumbai's top-rated graphic design companies and branding agencies — 565+ projects delivered, 4.9★ Google rating, branch office in Thane West. We provide logo design, brand identity, UI UX design, packaging design, brochure design and full creative agency services.",
      },
    },
    {
      '@type': 'Question',
      name: 'What graphic design services does NNC provide in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Mumbai provides logo design, brand identity design, brand guidelines, UI UX design for web and apps, packaging design, brochure and collateral design, social media creative kits, pitch deck design and full creative agency services for Mumbai businesses.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does logo design and branding cost in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A logo design with brand guidelines in Mumbai starts from ₹15,000. Full brand identity systems including logo, colour palette, typography, stationery and brand guidelines start from ₹35,000. All projects are fixed-price. Visit our Thane West office for a consultation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer UI UX design for websites and apps in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides UI UX design for websites and mobile apps in Mumbai — user research, wireframes, interactive prototypes and final Figma design files handed over to your development team or built by NNC. Consistent with brand identity across every screen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you design packaging for Mumbai product brands?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC designs product packaging for Mumbai FMCG, food, cosmetics and retail brands — box design, label design, pouch design and retail-ready packaging that meets print production specifications and stands out on shelf.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you create brochures and marketing collateral in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC designs brochures, company profiles, product catalogues, flyers, presentation decks and all marketing collateral for Mumbai businesses — print-ready files with bleed marks, and digital versions optimised for email and web.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a graphic design office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. You can visit us to review design concepts, approve brand identity systems and meet the creative team working on your project.',
      },
    },
  ],
}

const data = {
  badge: 'Graphic Design & Branding · Mumbai',
  h1: 'Graphic Design Company',
  h1Accent: 'in Mumbai',
  tagline:
    'Full-service graphic design company and branding agency in Mumbai — logo design, brand identity design, UI UX design, packaging design, brochure design and creative agency services. Office in Thane West. Fixed price.',
  desc:
    'NNC Digital is a full-service graphic design company and creative agency in Mumbai delivering logo design, brand identity systems, UI UX design, packaging design, brochure design and complete brand identity agency services for startups, SMEs and enterprises across Mumbai, Thane and Navi Mumbai. Every design is created by our in-house creative team — zero outsourcing — with a process built around your brand strategy, target audience and business goals.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'graphic design in Mumbai',
  h2Features: 'Graphic Design & Branding Services in Mumbai',
  features: [
    {
      h3: 'Branding Agency Mumbai',
      desc: 'Strategic branding for Mumbai businesses — brand positioning, naming, visual identity system, brand voice and complete brand guidelines. Built to differentiate your brand in Mumbai\'s competitive market.',
    },
    {
      h3: 'Logo Design Company Mumbai',
      desc: 'Professional logo design for Mumbai startups, SMEs and enterprises — wordmarks, lettermarks, pictorial marks and combination logos. Delivered in all formats: SVG, PNG, PDF and print-ready EPS.',
    },
    {
      h3: 'Brand Identity Design Mumbai',
      desc: 'Complete brand identity design systems — logo, colour palette, typography, iconography, photography style and usage guidelines. Consistent visual language across every Mumbai brand touchpoint.',
    },
    {
      h3: 'Brand Identity Agency Mumbai',
      desc: 'End-to-end brand identity agency services — brand audit, identity redesign, rebranding strategy and rollout across print, digital, signage and social media for established Mumbai businesses.',
    },
    {
      h3: 'UI UX Design Company Mumbai',
      desc: 'UI UX design for websites and mobile apps — user research, information architecture, wireframes, interactive Figma prototypes and pixel-perfect UI design files. Aligned with your brand identity.',
    },
    {
      h3: 'Packaging Design Company Mumbai',
      desc: 'Product packaging design for Mumbai FMCG, food, cosmetics and retail brands — box design, label design, pouch and sachet design. Print-ready files that meet production specifications and retail shelf standards.',
    },
    {
      h3: 'Brochure Design Mumbai',
      desc: 'Corporate brochures, company profiles, product catalogues, flyers and pitch decks for Mumbai businesses — print-ready with bleed and digital versions optimised for email, web and presentation.',
    },
    {
      h3: 'Creative Agency Mumbai — Social Media & Digital',
      desc: 'Social media creative kits, digital ad creatives, email templates, banner ads and campaign visuals — consistent brand-led creative for Mumbai brands running active digital marketing campaigns.',
    },
    {
      h3: 'Graphic Design Company Mumbai — Pitch Decks & Presentations',
      desc: 'Investor pitch decks, sales presentations and corporate PowerPoint/Keynote templates for Mumbai startups and corporates — designed to communicate clearly and impress in boardrooms and investor meetings.',
    },
  ],
  h2Why: 'Why Choose NNC as Your Graphic Design Company in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — review designs in person',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to review logo concepts on screen, approve brand identity systems in person and meet the designers working on your project.',
    },
    {
      n: '02',
      h3: 'Strategy-led design — not just visuals',
      body: 'NNC\'s Mumbai design process starts with brand strategy — who your audience is, what you stand for and how you need to be perceived. Design that looks good and works hard for your business.',
    },
    {
      n: '03',
      h3: 'In-house creative team — zero outsourcing',
      body: 'Every brand strategist, graphic designer and UI UX designer is a full-time NNC employee. Consistent creative team on your project from brief to delivery — no freelancers, no quality inconsistency.',
    },
    {
      n: '04',
      h3: 'All formats delivered — print and digital ready',
      body: 'Every design project is delivered in all required formats — print-ready PDF with bleed, web-optimised PNG, scalable SVG and editable source files. No chasing for files after the project ends.',
    },
    {
      n: '05',
      h3: 'Fixed price — no hourly billing surprises',
      body: 'Every design project is scoped and priced upfront — logo, brand identity, UI UX or packaging. No hourly billing, no extra charges for revision rounds within scope.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has delivered graphic design and branding for 565+ clients across startups, ecommerce, healthcare, real estate and enterprise in Mumbai. 4.9★ rated on Google.',
    },
  ],
  techStack: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'After Effects', 'Canva Pro', 'Framer', 'Zeplin'],
  h2Tech: 'Design Tools & Software',
  h2Faq: 'Graphic Design Company Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best graphic design company in Mumbai?',
      a: "NNC Digital is among Mumbai's top graphic design and branding agencies — 565+ projects, 4.9★ Google rating, office in Thane West. Logo design, brand identity, UI UX, packaging and brochure design — all in-house.",
    },
    {
      q: 'How much does logo design and branding cost in Mumbai?',
      a: 'Logo design with guidelines starts from ₹15,000. Full brand identity systems start from ₹35,000. All fixed-price — no hourly billing.',
    },
    {
      q: 'Do you offer UI UX design in Mumbai?',
      a: 'Yes. NNC provides UI UX design for websites and apps in Mumbai — wireframes, prototypes and final Figma files. Consistent with your brand identity across every screen.',
    },
    {
      q: 'Do you design packaging for Mumbai brands?',
      a: 'Yes. NNC designs product packaging for Mumbai FMCG, food, cosmetics and retail brands — print-ready files meeting production specifications.',
    },
    {
      q: 'Do you create brochures and marketing collateral in Mumbai?',
      a: 'Yes. NNC designs brochures, company profiles, catalogues, flyers and pitch decks — print-ready and digital versions for Mumbai businesses.',
    },
    {
      q: 'Do you have a graphic design office in Mumbai?',
      a: 'Yes. NNC has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to review design concepts and meet the creative team.',
    },
  ],
}

export default function GraphicDesignCompanyMumbaiPage() {
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
