import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Website Designer in Mumbai | Custom Web Designing',
  description:
    'Choose NNC for Best website designer in Mumbai to create modern and responsive websites, with NNC delivering creative designs that enhance business growth.',
  alternates: {
    canonical: `${SITE.url}/website-designer-in-mumbai`,
  },
  keywords:
    'website designer in mumbai, website designer mumbai, web designer in mumbai, best website designer mumbai, custom web designer mumbai, professional website designer mumbai, hire website designer mumbai, freelance website designer mumbai, top website designer mumbai',
  openGraph: {
    title: 'Website Designer in Mumbai | Custom Web Designing',
    description:
      'Choose NNC for Best website designer in Mumbai to create modern and responsive websites, with NNC delivering creative designs that enhance business growth.',
    url: `${SITE.url}/website-designer-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Website Designer in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Website Designer in Mumbai | Custom Web Designing',
    description:
      'Choose NNC for Best website designer in Mumbai to create modern and responsive websites, with NNC delivering creative designs that enhance business growth.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Website Designer in Mumbai',
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
    'Website Design',
    'Custom Web Designing',
    'Responsive Website Design',
    'UI UX Design',
    'Creative Website Design',
    'Corporate Website Design',
    'Landing Page Design',
  ],
  description:
    'Best website designer in Mumbai — modern, responsive and custom website designs that enhance business growth. In-house designers, branch office in Thane West.',
  url: `${SITE.url}/website-designer-in-mumbai`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Custom Business Website Design Mumbai',
      price: '24999',
      priceCurrency: 'INR',
      description: 'Custom business website design — modern UI, fully responsive and PageSpeed 90+.',
    },
    {
      '@type': 'Offer',
      name: 'Corporate Website Design Mumbai',
      price: '49999',
      priceCurrency: 'INR',
      description: 'Full corporate website design with custom UI/UX, CMS and SEO setup.',
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
      name: 'Website Designers in Mumbai',
      item: `${SITE.url}/website-designers-in-mumbai`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Website Designer in Mumbai',
      item: `${SITE.url}/website-designer-in-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I find the best website designer in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital has among Mumbai's best website designers — 565+ projects delivered, 4.9★ Google rating, branch office in Thane West. Our in-house designers create modern, responsive and custom websites that enhance your business growth.",
      },
    },
    {
      '@type': 'Question',
      name: 'What does a website designer at NNC do in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC's website designer in Mumbai handles the complete design process — discovery, wireframing, custom UI design, responsive design for all devices, prototype creation and design handoff to developers. Every design is custom — no templates, no page builders.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a website designer cost in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A custom business website design starts from ₹24,999. A full corporate website design starts from ₹49,999. All projects are fixed-price — fully scoped before design begins with no surprise invoices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do NNC website designers create custom designs in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Every website NNC designs in Mumbai is 100% custom — no templates, no WordPress page builders, no generic layouts. Brand-aligned UI designs that give your Mumbai business a distinctive and professional online presence.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does a website designer in Mumbai help with business growth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. NNC's website designer in Mumbai designs with business growth as the primary goal — conversion-optimised layouts, clear CTAs, fast load times, mobile-first responsiveness and SEO-ready structure that turns website visitors into customers.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I hire a dedicated website designer in Mumbai from NNC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can hire a dedicated website designer from NNC Mumbai on a project or retainer basis. All are full-time NNC employees — not freelancers. Meet them at our Thane West, Mumbai office.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does NNC website designer have an office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to review design mockups and meet the website designer working on your project.',
      },
    },
  ],
}

const data = {
  badge: 'Website Designer · Mumbai',
  h1: 'Website Designer',
  h1Accent: 'in Mumbai',
  tagline:
    'Best website designer in Mumbai — modern, responsive and custom web designing that enhances business growth. Brand-aligned UI, no templates, PageSpeed 90+. Office in Thane West. Fixed price.',
  desc:
    "NNC Digital has among Mumbai's best website designers — creating modern, responsive and custom websites for startups, SMEs and enterprises across Mumbai, Thane and Navi Mumbai. Our in-house web designer delivers brand-aligned custom UI designs with mobile-first responsiveness, PageSpeed 90+ and full SEO setup — no templates, no page builders — ensuring every website enhances your business growth and strengthens your online presence.",
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'website designing in Mumbai',
  h2Features: 'Custom Web Designing Services in Mumbai',
  features: [
    {
      h3: 'Custom Business Website Design Mumbai',
      desc: 'Fully custom business website designs built from scratch — no templates. Brand-aligned layouts, modern UI, mobile-first responsiveness and PageSpeed 90+ for Mumbai businesses that need a distinctive online presence.',
    },
    {
      h3: 'Corporate Website Design Mumbai',
      desc: 'Professional corporate website designs for Mumbai companies — enterprise-level custom UI, multi-page architecture, CMS integration and conversion-focused service pages that generate qualified leads.',
    },
    {
      h3: 'Landing Page Design Mumbai',
      desc: 'High converting custom landing page designs for Mumbai campaigns — single-focus layouts, clear CTAs, lead capture forms and trust signals optimised for Google Ads, Meta Ads and organic traffic.',
    },
    {
      h3: 'Responsive Website Design Mumbai',
      desc: 'Mobile-first responsive website designs for all screen sizes — phones, tablets and desktops. Every NNC Mumbai design passes Google Mobile-Friendly Test and achieves PageSpeed 90+ on mobile.',
    },
    {
      h3: 'UI UX Design Mumbai',
      desc: 'UI UX design for Mumbai websites and web applications — wireframes, Figma prototypes, user flow mapping and design systems that prioritise usability, accessibility and conversion.',
    },
    {
      h3: 'Ecommerce Website Design Mumbai',
      desc: 'Custom ecommerce website designs for Mumbai online stores — product page UI, category layouts, optimised checkout flow and cart design for Shopify, WooCommerce or custom platforms.',
    },
    {
      h3: 'Website Redesign Mumbai',
      desc: 'Custom website redesign for Mumbai businesses — modernising outdated designs, improving UX, fixing mobile responsiveness and boosting Core Web Vitals without disrupting existing SEO.',
    },
    {
      h3: 'Portfolio & Personal Brand Website Design Mumbai',
      desc: 'Portfolio and personal brand website designs for Mumbai professionals and creatives — custom layouts that showcase your work, skills and services with a modern and distinctive visual identity.',
    },
    {
      h3: 'Hire Website Designer Mumbai',
      desc: 'Hire a dedicated website designer from NNC Mumbai on a project or monthly retainer. Full-time in-house designer — not a freelancer. Meet them at our Thane West office.',
    },
  ],
  h2Why: 'Why Choose NNC as Your Website Designer in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — review designs in person',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to review custom design mockups on screen, walk through UI decisions and meet the designer working on your website.',
    },
    {
      n: '02',
      h3: 'Full-time in-house designer — not a freelancer',
      body: 'Every website designer at NNC Mumbai is a full-time employee — consistent design quality, consistent brand understanding and complete accountability from wireframe to final design handoff.',
    },
    {
      n: '03',
      h3: 'Custom design — no templates, no page builders',
      body: "Every website is designed from scratch — custom layouts, custom components, brand-aligned typography and colour systems. No Wix, no WordPress page builders. Genuinely unique designs for your Mumbai business.",
    },
    {
      n: '04',
      h3: 'Design built for business growth — UX + conversion',
      body: "NNC's website designer designs with conversion as the goal — clear navigation, compelling CTAs, trust-building layouts and fast load times that turn Mumbai website visitors into enquiries and sales.",
    },
    {
      n: '05',
      h3: 'Fixed price — fully scoped before design starts',
      body: 'Every design project is scoped and priced upfront — pages, sections, revisions and deliverables all agreed in writing. No hourly billing, no surprise charges for extra breakpoints or SEO metadata.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has designed websites for startups, SMEs, ecommerce brands and enterprises across Mumbai. 4.9★ rated on Google with verifiable client reviews from Mumbai businesses.',
    },
  ],
  techStack: ['Figma', 'Next JS', 'React JS', 'Tailwind CSS', 'Framer Motion', 'Adobe XD', 'Webflow', 'WordPress'],
  h2Tech: 'Website Design Technology Stack',
  h2Faq: 'Website Designer Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'Where can I find the best website designer in Mumbai?',
      a: "NNC Digital has among Mumbai's best website designers — 565+ projects, 4.9★ Google rating, office in Thane West. Modern, responsive and custom web designing for business growth.",
    },
    {
      q: 'How much does a website designer cost in Mumbai?',
      a: 'A custom business website design starts from ₹24,999. A corporate website design starts from ₹49,999. All fixed-price — fully scoped before design begins.',
    },
    {
      q: 'Do NNC website designers create custom designs in Mumbai?',
      a: 'Yes. Every design is 100% custom — no templates, no page builders. Brand-aligned UI that gives your Mumbai business a distinctive online presence.',
    },
    {
      q: 'Can I hire a dedicated website designer in Mumbai?',
      a: 'Yes. Hire a dedicated website designer from NNC Mumbai on a project or retainer. Full-time NNC employee — not a freelancer. Meet them at our Thane West office.',
    },
    {
      q: 'Does a website designer in Mumbai help with business growth?',
      a: 'Yes. NNC designs with business growth as the goal — conversion-optimised layouts, clear CTAs, fast load times and SEO-ready structure that turns visitors into customers.',
    },
    {
      q: 'Do you have a website design office in Mumbai?',
      a: 'Yes. NNC has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to review mockups and meet the designer.',
    },
  ],
}

export default function WebsiteDesignerInMumbaiPage() {
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
