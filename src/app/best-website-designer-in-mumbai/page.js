import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Best Website Designer in Mumbai | Digital Website Service',
  description:
    'Choose our best website designer in Mumbai to create modern and responsive websites,with NNC delivering creative designs that boost user engagement and business',
  alternates: {
    canonical: `${SITE.url}/best-website-designer-in-mumbai`,
  },
  keywords:
    'best website designer in mumbai, best website designer mumbai, top website designer mumbai, best web designer mumbai, best website design company mumbai, best website designing mumbai, top web designer mumbai, digital website service mumbai, best website creator mumbai',
  openGraph: {
    title: 'Best Website Designer in Mumbai | Digital Website Service',
    description:
      'Choose our best website designer in Mumbai to create modern and responsive websites,with NNC delivering creative designs that boost user engagement and business',
    url: `${SITE.url}/best-website-designer-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Best Website Designer in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Best Website Designer in Mumbai | Digital Website Service',
    description:
      'Choose our best website designer in Mumbai to create modern and responsive websites,with NNC delivering creative designs that boost user engagement and business',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Best Website Designer in Mumbai',
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
    'Digital Website Service',
    'Custom Website Design',
    'Responsive Website Design',
    'UI UX Design',
    'Creative Website Design',
    'Corporate Website Design',
  ],
  description:
    'Best website designer in Mumbai — modern, responsive and creative websites that boost user engagement and business growth. In-house designers, branch office in Thane West.',
  url: `${SITE.url}/best-website-designer-in-mumbai`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Custom Business Website Design Mumbai',
      price: '24999',
      priceCurrency: 'INR',
      description: 'Custom business website design — modern UI, fully responsive, PageSpeed 90+ and SEO setup.',
    },
    {
      '@type': 'Offer',
      name: 'Corporate Website Design Mumbai',
      price: '49999',
      priceCurrency: 'INR',
      description: 'Full corporate website design with custom UI/UX, CMS integration and full SEO setup.',
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
      name: 'Website Designer in Mumbai',
      item: `${SITE.url}/website-designer-in-mumbai`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Best Website Designer in Mumbai',
      item: `${SITE.url}/best-website-designer-in-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is the best website designer in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Mumbai's best website designers — 565+ projects delivered, 4.9★ Google rating, branch office in Thane West. Our in-house design team creates modern, responsive websites with creative designs that boost user engagement and business growth.",
      },
    },
    {
      '@type': 'Question',
      name: 'What makes NNC the best website designer in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC stands out as Mumbai's best website designer for three reasons — 100% custom designs (no templates), PageSpeed 90+ guaranteed on every project and a full-time in-house team you can meet in person at our Thane West, Mumbai office. 565+ projects delivered, 4.9★ on Google.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does the best website designer in Mumbai charge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A custom business website design starts from ₹24,999. A full corporate website design starts from ₹49,999. All projects are fixed-price — fully scoped before design begins with no surprise invoices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the best website designer in Mumbai create responsive websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Every website NNC designs in Mumbai is fully responsive — mobile-first with PageSpeed 90+ on all devices. Responsive design is standard on every project, written into the delivery contract.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can the best website designer in Mumbai boost user engagement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. NNC's website designers in Mumbai create designs that boost user engagement — intuitive navigation, compelling visual hierarchy, fast load times, clear CTAs and interactive elements that keep visitors on your site and guide them toward your business goals.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does the best website designer in Mumbai offer digital website services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC offers complete digital website services for Mumbai businesses — custom web design, UI UX design, development, SEO setup, hosting, maintenance and performance optimisation. Full service from one agency.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does NNC have a website design office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to review design mockups, meet the designers and discuss your project in person.',
      },
    },
  ],
}

const data = {
  badge: 'Best Website Designer · Mumbai',
  h1: 'Best Website Designer',
  h1Accent: 'in Mumbai',
  tagline:
    'Best website designer in Mumbai — modern, responsive and creative website designs that boost user engagement and business growth. Custom design, no templates, PageSpeed 90+. Office in Thane West. Fixed price.',
  desc:
    "NNC Digital is among the best website designers in Mumbai — creating modern, responsive and creative websites that boost user engagement and business growth for startups, SMEs and enterprises across Mumbai, Thane and Navi Mumbai. Our in-house design team delivers custom UI designs with brand-aligned layouts, mobile-first responsiveness and full digital website services including design, development, SEO and ongoing support — all under one roof.",
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'website designing in Mumbai',
  h2Features: 'Digital Website Services We Offer in Mumbai',
  features: [
    {
      h3: 'Custom Business Website Design Mumbai',
      desc: 'Fully custom business website designs — no templates, no page builders. Brand-aligned modern UI, mobile-first responsiveness and PageSpeed 90+ for Mumbai businesses that want a distinctive, high performing online presence.',
    },
    {
      h3: 'Corporate Website Design Mumbai',
      desc: 'Professional corporate website designs for Mumbai companies — enterprise-level custom UI, multi-page architecture, CMS integration and conversion-focused service pages that generate qualified leads.',
    },
    {
      h3: 'User Engagement Optimised Design Mumbai',
      desc: 'Websites designed to maximise user engagement — intuitive navigation, compelling visual hierarchy, interactive micro-animations, clear CTAs and fast load times that keep Mumbai visitors engaged and converting.',
    },
    {
      h3: 'Responsive Website Design Mumbai',
      desc: 'Mobile-first responsive designs for all screen sizes — phones, tablets and desktops. Every NNC Mumbai design passes Google Mobile-Friendly Test and achieves PageSpeed 90+ on mobile.',
    },
    {
      h3: 'UI UX Design Mumbai',
      desc: 'UI UX design for Mumbai websites and web apps — wireframes, Figma prototypes, user flow mapping and design systems that prioritise usability, accessibility and conversion rate optimisation.',
    },
    {
      h3: 'Landing Page Design Mumbai',
      desc: 'High converting landing page designs for Mumbai businesses — clear CTAs, trust signals, lead capture forms and fast-loading architecture optimised for Google Ads, Meta Ads and organic campaigns.',
    },
    {
      h3: 'Ecommerce Website Design Mumbai',
      desc: 'Custom ecommerce website designs for Mumbai online stores — product page UI, optimised checkout flow and conversion-focused layouts for Shopify, WooCommerce or custom-built platforms.',
    },
    {
      h3: 'Website Redesign Mumbai',
      desc: 'Website redesign for Mumbai businesses — modernising outdated designs, boosting user engagement, improving UX, fixing mobile responsiveness and improving Core Web Vitals and PageSpeed scores.',
    },
    {
      h3: 'Full Digital Website Service Mumbai',
      desc: 'Complete digital website service — custom design, Next JS development, SEO setup, hosting, maintenance and performance monitoring. One agency, one contract, full accountability for your Mumbai website.',
    },
  ],
  h2Why: 'Why NNC is the Best Website Designer in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — review designs in person',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to review custom design mockups, walk through UI decisions and meet the designers building your website.',
    },
    {
      n: '02',
      h3: '100% custom design — no templates, no page builders',
      body: "Every website is designed from scratch — custom layouts, brand-aligned typography and colour systems. No Wix, no WordPress page builders. Genuinely distinctive websites that set your Mumbai business apart.",
    },
    {
      n: '03',
      h3: 'Designs that boost engagement and conversions',
      body: "NNC's designers create websites with user engagement and conversion as the primary objectives — intuitive navigation, compelling CTAs, interactive elements and visual hierarchy that guide visitors toward your business goals.",
    },
    {
      n: '04',
      h3: 'PageSpeed 90+ — contractually guaranteed',
      body: 'Every NNC website achieves PageSpeed 90+ on mobile and desktop. Core Web Vitals compliance is written into every delivery contract — not a best-effort claim.',
    },
    {
      n: '05',
      h3: 'Fixed price — fully scoped before design starts',
      body: 'Every project is scoped and priced upfront — pages, sections, revisions and deliverables all agreed in writing. No hourly billing, no surprise invoices for SEO setup or extra breakpoints.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has designed websites for startups, SMEs, ecommerce brands and enterprises across Mumbai. 4.9★ rated on Google — verified by real Mumbai clients.',
    },
  ],
  techStack: ['Figma', 'Next JS', 'React JS', 'Tailwind CSS', 'Framer Motion', 'Adobe XD', 'Webflow', 'WordPress'],
  h2Tech: 'Website Design Technology Stack',
  h2Faq: 'Best Website Designer Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'Who is the best website designer in Mumbai?',
      a: "NNC Digital is among Mumbai's best website designers — 565+ projects, 4.9★ Google rating, office in Thane West. Modern, responsive and creative designs that boost user engagement and business.",
    },
    {
      q: 'How much does the best website designer in Mumbai charge?',
      a: 'A custom business website design starts from ₹24,999. A corporate website design starts from ₹49,999. All fixed-price — fully scoped before design begins.',
    },
    {
      q: 'Does the best website designer create responsive websites in Mumbai?',
      a: 'Yes. Every website is mobile-first and fully responsive — PageSpeed 90+ on all devices. Written into every delivery contract.',
    },
    {
      q: 'Can a website designer in Mumbai boost user engagement?',
      a: 'Yes. NNC designs with engagement in mind — intuitive navigation, compelling visual hierarchy, fast load times and clear CTAs that keep visitors on your site and convert them.',
    },
    {
      q: 'Do you offer full digital website services in Mumbai?',
      a: 'Yes. NNC provides complete digital website services — custom design, development, SEO setup, hosting, maintenance and performance optimisation. One agency, full accountability.',
    },
    {
      q: 'Do you have a website design office in Mumbai?',
      a: 'Yes. NNC has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to review mockups and meet the design team.',
    },
  ],
}

export default function BestWebsiteDesignerMumbaiPage() {
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
