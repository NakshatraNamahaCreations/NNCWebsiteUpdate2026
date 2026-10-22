import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Website Designers in Mumbai | Web Design Experts',
  description:
    'NNC is a quality website designers in Mumbai to create modern and responsive websites, with NNC delivering creative designs that enhance user experience.',
  alternates: {
    canonical: `${SITE.url}/website-designers-in-mumbai`,
  },
  keywords:
    'website designers in mumbai, website designer mumbai, web designer mumbai, website design experts mumbai, professional website designer mumbai, hire website designer mumbai, web design experts mumbai, creative website designer mumbai, responsive website designer mumbai',
  openGraph: {
    title: 'Website Designers in Mumbai | Web Design Experts',
    description:
      'NNC is a quality website designers in Mumbai to create modern and responsive websites, with NNC delivering creative designs that enhance user experience.',
    url: `${SITE.url}/website-designers-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Website Designers in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Website Designers in Mumbai | Web Design Experts',
    description:
      'NNC is a quality website designers in Mumbai to create modern and responsive websites, with NNC delivering creative designs that enhance user experience.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Website Designers in Mumbai',
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
    'Web Design',
    'Responsive Website Design',
    'UI UX Design',
    'Creative Website Design',
    'Corporate Website Design',
    'Landing Page Design',
  ],
  description:
    'Website designers in Mumbai — modern, responsive and creative website designs that enhance user experience. In-house designers, branch office in Thane West.',
  url: `${SITE.url}/website-designers-in-mumbai`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Business Website Design Mumbai',
      price: '24999',
      priceCurrency: 'INR',
      description: 'Custom business website design — modern UI, mobile responsive and PageSpeed 90+.',
    },
    {
      '@type': 'Offer',
      name: 'Corporate Website Design Mumbai',
      price: '49999',
      priceCurrency: 'INR',
      description: 'Full corporate website design with custom UI/UX, CMS integration and SEO setup.',
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
      name: 'Website Designing Company in Mumbai',
      item: `${SITE.url}/website-designing-company-in-mumbai`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Website Designers in Mumbai',
      item: `${SITE.url}/website-designers-in-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I find the best website designers in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital has among Mumbai's best website designers — 565+ projects delivered, 4.9★ Google rating, branch office in Thane West. Our in-house web design experts create modern, responsive websites that enhance user experience and drive business growth.",
      },
    },
    {
      '@type': 'Question',
      name: 'What do website designers at NNC do in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC's website designers in Mumbai handle the full design process — requirements gathering, wireframing, UI design, prototype creation, responsive design for all devices, handoff to developers and post-launch design revisions. Custom designs, no templates.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to hire website designers in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A custom business website design in Mumbai starts from ₹24,999. A full corporate website design starts from ₹49,999. All projects are fixed-price — fully scoped before design begins with no surprise invoices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do NNC website designers create responsive designs in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Every website NNC's designers create in Mumbai is fully responsive — mobile-first design optimised for phones, tablets and desktops with PageSpeed 90+ on all devices. Mobile-first is standard on every project.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do NNC website designers enhance user experience in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. NNC's website designers in Mumbai design with user experience at the core — clear navigation, fast load times, intuitive layouts, accessible colour contrast and conversion-optimised CTAs that guide visitors toward your business goals.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I hire dedicated website designers in Mumbai from NNC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can hire dedicated website designers from NNC Mumbai on a project or retainer basis. All are full-time NNC employees — not freelancers. Meet them at our Thane West, Mumbai office.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do NNC website designers have an office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to review website design mockups and meet the designers working on your project.',
      },
    },
  ],
}

const data = {
  badge: 'Website Designers · Mumbai',
  h1: 'Website Designers',
  h1Accent: 'in Mumbai',
  tagline:
    'Expert website designers in Mumbai — modern, responsive and creative website designs that enhance user experience and grow your business. Custom design, no templates. Office in Thane West. Fixed price.',
  desc:
    "NNC Digital's website designers in Mumbai create modern, responsive and creative websites that enhance user experience for startups, SMEs and enterprises across Mumbai, Thane and Navi Mumbai. Our in-house web design experts deliver custom UI designs — no templates, no page builders — with brand-aligned layouts, mobile-first responsiveness, PageSpeed 90+ and full SEO setup that strengthens your online presence.",
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'website designing in Mumbai',
  h2Features: 'What Our Website Designers Build in Mumbai',
  features: [
    {
      h3: 'Custom Business Website Design Mumbai',
      desc: 'Fully custom business website designs — no templates. Brand-aligned layouts, modern UI, mobile-first responsiveness and PageSpeed 90+ for Mumbai businesses that want a distinctive online presence.',
    },
    {
      h3: 'Corporate Website Design Mumbai',
      desc: 'Professional corporate website designs for Mumbai companies — enterprise-level UI, multi-page architecture, CMS integration, service pages and contact forms built to convert visitors into qualified leads.',
    },
    {
      h3: 'UI UX Design Mumbai',
      desc: 'UI UX design for Mumbai websites and web apps — wireframes, interactive Figma prototypes, design systems and user flow design that prioritises usability, accessibility and conversion rate optimisation.',
    },
    {
      h3: 'Landing Page Design Mumbai',
      desc: 'High converting landing page designs for Mumbai campaigns — single-focus layouts, clear CTAs, trust signals and lead capture forms optimised for Google Ads, Meta Ads and organic traffic.',
    },
    {
      h3: 'Responsive Website Design Mumbai',
      desc: 'Mobile-first responsive designs for all screen sizes — phones, tablets and desktops. Every NNC Mumbai design passes Google Mobile-Friendly Test and achieves PageSpeed 90+ on mobile.',
    },
    {
      h3: 'Ecommerce Website Design Mumbai',
      desc: 'Ecommerce website designs for Mumbai online stores — product page UI, category layouts, checkout flow, cart design and conversion-optimised product listing pages for Shopify and WooCommerce.',
    },
    {
      h3: 'Website Redesign Mumbai',
      desc: 'Website redesign for Mumbai businesses — modernising outdated designs, improving UX, fixing mobile responsiveness, boosting Core Web Vitals and giving your online presence a fresh, professional look.',
    },
    {
      h3: 'SaaS & Web App UI Design Mumbai',
      desc: 'UI design for SaaS products and web applications — dashboard layouts, onboarding flows, settings panels, data tables and component libraries designed for Mumbai product teams.',
    },
    {
      h3: 'Hire Website Designers Mumbai',
      desc: 'Hire dedicated website designers from NNC Mumbai on a project or retainer basis. All are full-time in-house designers — not freelancers. Meet them at our Thane West office.',
    },
  ],
  h2Why: 'Why Hire Website Designers from NNC Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — review designs in person',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to review website mockups on screen, walk through UI decisions and meet the designers building your website.',
    },
    {
      n: '02',
      h3: 'Full-time in-house designers — not freelancers',
      body: 'Every website designer at NNC Mumbai is a full-time employee — consistent, accountable designers who stay with your project from wireframe to launch. No freelancer turnover, no style inconsistencies.',
    },
    {
      n: '03',
      h3: 'Custom design — no templates, no page builders',
      body: "Every website is designed from scratch — custom-coded with Next JS or React. No WordPress page builders, no Wix templates. Genuinely distinctive designs that reflect your Mumbai brand.",
    },
    {
      n: '04',
      h3: 'UX-first — designs built to convert',
      body: "NNC's website designers design with conversion in mind — clear navigation, fast load times, intuitive layouts and well-placed CTAs that turn Mumbai website visitors into leads and customers.",
    },
    {
      n: '05',
      h3: 'Fixed price — fully scoped before design starts',
      body: 'Every design project is scoped in detail and priced upfront. No hourly billing, no surprise charges for extra pages or responsive breakpoints. You know the exact cost before work begins.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has designed websites for startups, SMEs, ecommerce brands and enterprises across Mumbai. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['Figma', 'Next JS', 'React JS', 'Tailwind CSS', 'Framer Motion', 'Adobe XD', 'Webflow', 'WordPress'],
  h2Tech: 'Website Design Technology Stack',
  h2Faq: 'Website Designers Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'Where can I find the best website designers in Mumbai?',
      a: "NNC Digital has among Mumbai's best website designers — 565+ projects, 4.9★ Google rating, office in Thane West. Modern, responsive and creative designs that enhance user experience.",
    },
    {
      q: 'How much does it cost to hire website designers in Mumbai?',
      a: 'A business website design starts from ₹24,999. A corporate website design starts from ₹49,999. All fixed-price — fully scoped before design begins.',
    },
    {
      q: 'Do NNC website designers create responsive designs?',
      a: 'Yes. Every design is mobile-first and fully responsive — PageSpeed 90+ on all devices. Written into every delivery contract.',
    },
    {
      q: 'Can I hire dedicated website designers in Mumbai?',
      a: 'Yes. Hire dedicated website designers from NNC Mumbai on a project or retainer. All are full-time NNC employees — not freelancers. Meet them at our Thane West office.',
    },
    {
      q: 'Do NNC website designers enhance user experience?',
      a: 'Yes. NNC designs with UX at the core — clear navigation, fast load times, intuitive layouts and conversion-optimised CTAs that guide visitors toward your business goals.',
    },
    {
      q: 'Do you have a website design office in Mumbai?',
      a: 'Yes. NNC has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to review mockups and meet the designers.',
    },
  ],
}

export default function WebsiteDesignersInMumbaiPage() {
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
