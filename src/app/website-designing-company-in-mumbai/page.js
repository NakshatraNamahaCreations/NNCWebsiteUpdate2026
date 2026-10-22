import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Website Designing Company in Mumbai | Website Design',
  description:
    'Choose NNC website designing company in Mumbai to create modern and responsive websites,with NNC delivering creative designs that enhance your online presence.',
  alternates: {
    canonical: `${SITE.url}/website-designing-company-in-mumbai`,
  },
  keywords:
    'website designing company in mumbai, website designing mumbai, website design company mumbai, web design company mumbai, website designer mumbai, website designing services mumbai, responsive website design mumbai, creative website design mumbai, professional website designing mumbai, modern website design mumbai',
  openGraph: {
    title: 'Website Designing Company in Mumbai | Website Design',
    description:
      'Choose NNC website designing company in Mumbai to create modern and responsive websites,with NNC delivering creative designs that enhance your online presence.',
    url: `${SITE.url}/website-designing-company-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Website Designing Company in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Website Designing Company in Mumbai | Website Design',
    description:
      'Choose NNC website designing company in Mumbai to create modern and responsive websites,with NNC delivering creative designs that enhance your online presence.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Website Designing Company in Mumbai',
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
    'Website Designing',
    'Web Design',
    'Responsive Website Design',
    'Creative Website Design',
    'Corporate Website Design',
    'Landing Page Design',
    'UI UX Design',
  ],
  description:
    'Website designing company in Mumbai — modern, responsive and creative websites that enhance your online presence. In-house designers, branch office in Thane West.',
  url: `${SITE.url}/website-designing-company-in-mumbai`,
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
      name: 'Website Development Company Mumbai',
      item: `${SITE.url}/website-development-company-in-mumbai`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Website Designing Company in Mumbai',
      item: `${SITE.url}/website-designing-company-in-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best website designing company in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Mumbai's best website designing companies — 565+ projects delivered, 4.9★ Google rating, branch office in Thane West. We create modern, responsive and creative websites that enhance your online presence and drive business growth.",
      },
    },
    {
      '@type': 'Question',
      name: 'What website designing services does NNC offer in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC provides full website designing services in Mumbai — custom business website design, corporate website design, landing page design, ecommerce website design, portfolio websites, UI/UX design and website redesign for existing sites.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does website designing cost in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A custom business website design in Mumbai starts from ₹24,999. A full corporate website design starts from ₹49,999. All projects are fixed-price — fully scoped before design begins with no surprise invoices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you design responsive websites in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every website NNC designs in Mumbai is fully responsive — optimised for mobile, tablet and desktop. Mobile-first design approach with PageSpeed 90+ on all devices delivered as standard on every project.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you design modern and creative websites in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. NNC's website designing team in Mumbai creates modern, creative and visually distinctive websites — custom UI design (no templates), brand-aligned colour schemes, typography and layouts that make your Mumbai business stand out online.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you redesign existing websites in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides website redesign services for Mumbai businesses — modernising outdated designs, improving user experience, fixing mobile responsiveness and improving Core Web Vitals and PageSpeed scores.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a website designing office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to review website design mockups and discuss your project with our Mumbai design team.',
      },
    },
  ],
}

const data = {
  badge: 'Website Designing · Mumbai',
  h1: 'Website Designing Company',
  h1Accent: 'in Mumbai',
  tagline:
    'Best website designing company in Mumbai — modern, responsive and creative websites that enhance your online presence and drive business growth. Custom design, no templates. Office in Thane West. Fixed price.',
  desc:
    "NNC Digital is a website designing company in Mumbai creating modern, responsive and creative websites for startups, SMEs and enterprises across Mumbai, Thane and Navi Mumbai. Our in-house designers deliver custom website designs — no templates, no generic layouts — with brand-aligned UI, mobile-first responsiveness, PageSpeed 90+ and full SEO setup that enhances your online presence and drives business growth.",
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'website designing in Mumbai',
  h2Features: 'Website Designing Services in Mumbai',
  features: [
    {
      h3: 'Custom Business Website Design Mumbai',
      desc: 'Fully custom business website designs built from scratch — no templates. Brand-aligned layouts, modern UI, mobile-first responsiveness and PageSpeed 90+ for Mumbai businesses that want to stand out online.',
    },
    {
      h3: 'Corporate Website Design Mumbai',
      desc: 'Professional corporate website designs for Mumbai companies — enterprise-level UI, multi-page architecture, CMS integration, team pages, service sections and contact forms built to convert visitors into leads.',
    },
    {
      h3: 'Landing Page Design Mumbai',
      desc: 'High converting landing page designs for Mumbai businesses — single-focus layouts, clear CTAs, lead capture forms and A/B test-ready designs optimised for Google Ads, Meta Ads and organic traffic campaigns.',
    },
    {
      h3: 'Responsive Website Design Mumbai',
      desc: 'Mobile-first responsive website design for all screen sizes — phones, tablets and desktops. Every NNC Mumbai website passes Google Mobile-Friendly Test and achieves PageSpeed 90+ on mobile.',
    },
    {
      h3: 'Ecommerce Website Design Mumbai',
      desc: 'Ecommerce website designs for Mumbai online stores — product pages, category layouts, checkout flow design, wishlist and cart UI, optimised for conversions on Shopify, WooCommerce or custom platforms.',
    },
    {
      h3: 'UI UX Design Mumbai',
      desc: 'UI UX design for Mumbai websites and web applications — wireframes, interactive prototypes, design systems, component libraries and user flow design that prioritises usability and conversion.',
    },
    {
      h3: 'Website Redesign Mumbai',
      desc: 'Website redesign for Mumbai businesses — modernising outdated designs, fixing mobile responsiveness, improving UX flow and boosting Core Web Vitals and PageSpeed scores without disrupting existing content.',
    },
    {
      h3: 'Portfolio & Personal Website Design Mumbai',
      desc: 'Portfolio and personal brand website designs for Mumbai professionals, agencies and creatives — showcasing work, skills and services with a modern, visually distinctive design that builds credibility.',
    },
    {
      h3: 'Website Design with SEO Setup Mumbai',
      desc: 'Every NNC website design includes full SEO setup — meta tags, heading structure, image optimisation, schema markup, sitemap and Google Search Console configuration for organic search visibility.',
    },
  ],
  h2Why: 'Why Choose NNC as Your Website Designing Company in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — review designs in person',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to review website mockups on screen, walk through UI decisions and meet the designers building your website.',
    },
    {
      n: '02',
      h3: 'Custom design — no templates, no page builders',
      body: "Every website NNC designs is built from scratch — no WordPress page builders, no Wix templates. Custom-coded with Next JS or React for fast load times, full design control and a genuinely distinctive online presence.",
    },
    {
      n: '03',
      h3: 'Mobile-first — PageSpeed 90+ guaranteed',
      body: 'Every NNC website design is mobile-first and optimised for Core Web Vitals. PageSpeed 90+ on mobile and desktop is written into every delivery contract — not just a best-effort.',
    },
    {
      n: '04',
      h3: 'Design + development — single team',
      body: 'NNC handles design and development under one roof. No handoff issues between separate design and dev agencies. Your website goes from mockup to live code by the same in-house Mumbai team.',
    },
    {
      n: '05',
      h3: 'Fixed price — fully scoped before design starts',
      body: 'Every website design project is scoped in detail and priced upfront. No hourly billing, no scope creep charges, no surprise invoices for responsive breakpoints or SEO setup.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has designed websites for startups, SMEs, ecommerce brands and enterprises across Mumbai. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['Figma', 'Next JS', 'React JS', 'Tailwind CSS', 'Framer Motion', 'Adobe XD', 'Webflow', 'WordPress'],
  h2Tech: 'Website Design Technology Stack',
  h2Faq: 'Website Designing Company Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best website designing company in Mumbai?',
      a: "NNC Digital is among Mumbai's best website designing companies — 565+ projects, 4.9★ Google rating, office in Thane West. Modern, responsive and creative websites with no templates.",
    },
    {
      q: 'How much does website designing cost in Mumbai?',
      a: 'A business website design starts from ₹24,999. A corporate website design starts from ₹49,999. All fixed-price — fully scoped before design begins.',
    },
    {
      q: 'Do you design responsive websites in Mumbai?',
      a: 'Yes. Every website is fully responsive — mobile-first with PageSpeed 90+ on all devices. Written into every delivery contract.',
    },
    {
      q: 'Do you design modern and creative websites in Mumbai?',
      a: 'Yes. NNC creates custom UI design with no templates — brand-aligned layouts, modern typography and creative visuals that make your Mumbai business stand out online.',
    },
    {
      q: 'Do you redesign existing websites in Mumbai?',
      a: 'Yes. NNC redesigns outdated Mumbai websites — modernising design, improving UX, fixing mobile responsiveness and boosting PageSpeed scores.',
    },
    {
      q: 'Do you have a website designing office in Mumbai?',
      a: 'Yes. NNC has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to review mockups and discuss your design project.',
    },
  ],
}

export default function WebsiteDesigningCompanyMumbaiPage() {
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
