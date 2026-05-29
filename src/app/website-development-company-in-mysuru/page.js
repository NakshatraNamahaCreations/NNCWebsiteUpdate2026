import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Website Development Company in Mysuru | Nakshatra Namaha Creations',
  description: 'Top website development company in Mysuru. Custom React JS & Next JS websites — PageSpeed 90+ guaranteed, fixed price, zero outsourcing. Walk-in Mysuru office. 565+ projects since 2015. Call +91 99005 66466.',
  alternates: { canonical: `${SITE.url}/website-development-company-in-mysuru` },
  keywords: [
    'website development company in mysuru',
    'web development company in mysuru',
    'website design company in mysuru',
    'website developers in mysuru',
    'best website development company mysuru',
    'top website development company mysuru',
    'custom website development mysuru',
    'corporate website development mysuru',
    'business website design mysuru',
    'react js development company mysuru',
    'next js development company mysuru',
    'website maker in mysuru',
    'website design services mysuru',
    'affordable website development mysuru',
    'professional website design mysuru',
    'responsive website development mysuru',
    'website development services mysuru',
    'website company mysuru',
    'hire web developers mysuru',
    'web design agency mysuru',
  ].join(', '),
  openGraph: {
    title: 'Website Development Company in Mysuru | Nakshatra Namaha Creations',
    description: 'Custom React JS & Next JS websites for Mysuru businesses. PageSpeed 90+ guaranteed, fixed price. Walk-in office at JP Nagar. 565+ projects delivered.',
    url: `${SITE.url}/website-development-company-in-mysuru`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Nakshatra Namaha Creations',
    images: [{ url: 'https://s3.eu-north-1.amazonaws.com/admin.nakshatranamahacreations.in/NNC+NEW+LOGO+2020+low+res.png', width: 1200, height: 630, alt: 'Website Development Company Mysuru Nakshatra Namaha Creations' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Website Development Company in Mysuru | Nakshatra Namaha Creations',
    description: 'Custom React JS & Next JS websites for Mysuru businesses. PageSpeed 90+ guaranteed. Walk-in office.',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Website Development in Mysuru',
  description: 'Custom React JS and Next JS website development for businesses in Mysuru. Corporate websites, e-commerce, portals and SaaS platforms. PageSpeed 90+ guaranteed, fixed price, zero outsourcing.',
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
  serviceType: 'Website Development',
  url: `${SITE.url}/website-development-company-in-mysuru`,
  offers: [
    { '@type': 'Offer', name: 'Corporate Website', price: '24999', priceCurrency: 'INR', description: 'Custom React JS corporate website with CMS, SEO setup and PageSpeed 90+.' },
    { '@type': 'Offer', name: 'E-commerce Website', price: '45000', priceCurrency: 'INR', description: 'Full e-commerce website with product catalogue, payment gateway and order management.' },
    { '@type': 'Offer', name: 'Web Application / Portal', description: 'Custom-scoped web application with user roles, dashboards and API integrations.' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Website Development Services Mysuru',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Website Development Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-commerce Website Development Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'React JS Development Company Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Next JS Development Company Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Website Design Mysuru' } },
    ],
  },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Website Development Mysuru', item: `${SITE.url}/website-development-company-in-mysuru` },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does a website cost in Mysuru?', acceptedAnswer: { '@type': 'Answer', text: 'Websites start from ₹24,999. E-commerce from ₹45,000. All pricing is fixed before work begins — no hourly billing or surprise invoices.' } },
    { '@type': 'Question', name: 'Does Nakshatra Namaha Creationshave an office in Mysuru?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Nakshatra Namaha Creationshas a walk-in office at Suswani Towers, JP Nagar 2nd Stage, Mysuru – 570 008. Open Mon–Sat, 9am–7pm.' } },
    { '@type': 'Question', name: 'How long does it take to build a website?', acceptedAnswer: { '@type': 'Answer', text: 'A standard website takes 3–5 weeks. E-commerce takes 5–8 weeks. Timelines agreed in writing before development begins.' } },
    { '@type': 'Question', name: 'Will my website rank on Google?', acceptedAnswer: { '@type': 'Answer', text: 'Nakshatra Namaha Creations builds every website with SEO-ready architecture: proper heading structure, schema markup, sitemap.xml and PageSpeed 90+ on mobile and desktop.' } },
  ],
}

const data = {
  badge: 'Website Development · Mysuru',
  h1: 'Website Development Company',
  h1Accent: 'in Mysuru',
  tagline: 'Custom React JS & Next JS websites for Mysuru businesses — designed to rank, convert and perform. PageSpeed 90+ in every delivery contract. Walk-in office in JP Nagar.',
  desc: 'Nakshatra Namaha Creations builds professional websites for companies in Mysuru. Each site is custom-coded on React JS and Next JS — no WordPress, no templates. Designed to rank on Google, load fast on mobile and convert visitors into enquiries. Meet your team at our Mysuru office.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'website development in Mysuru',
  h2Features: "What's Included in Every Website We Build",
  features: [
    { h3: 'Custom Design — No Templates', desc: "Every design is built from scratch in Figma to reflect your brand. No page builder, no WordPress theme. Exclusively yours." },
    { h3: 'React JS & Next JS Development', desc: "Built on the industry's fastest stack — server-side rendering, SEO-ready architecture and PageSpeed 90+ guaranteed contractually." },
    { h3: 'Mobile-First Responsive Layout', desc: 'Over 70% of website visits are mobile. Nakshatra Namaha Creationsdesigns mobile-first and tests across 15+ real device configurations.' },
    { h3: 'SEO-Ready Page Structure', desc: 'Proper H1–H6 hierarchy, schema markup, sitemap.xml, robots.txt, canonical URLs and optimised meta titles.' },
    { h3: 'Content Management System', desc: 'Update pages, team profiles, news and services through an admin panel — no developer needed after launch.' },
    { h3: 'Enquiry Forms & Lead Capture', desc: 'Contact forms, WhatsApp integration and lead funnels connected to your inbox or CRM system.' },
    { h3: 'Third-Party Integrations', desc: 'Google Analytics, HubSpot, Salesforce, Razorpay, Calendly — any system your business relies on.' },
    { h3: 'PageSpeed 90+ Contractual', desc: "Written into your delivery contract. If your website doesn't score 90+ on mobile and desktop, we fix it before you pay." },
    { h3: '30-Day Post-Launch Support', desc: 'One month of bug fixes, minor updates and content changes included at no extra cost after launch.' },
  ],
  h2Why: 'Why Mysuru Businesses Choose Nakshatra Namaha Creations',
  why: [
    { n: '01', h3: 'Walk-in office in JP Nagar, Mysuru', body: "Unlike remote-only agencies, Nakshatra Namaha Creationshas a physical office at Suswani Towers, JP Nagar 2nd Stage. Walk in Mon–Sat, 9am–7pm and meet your project team." },
    { n: '02', h3: '35+ in-house employees — zero outsourcing', body: "Every designer, developer and PM is a permanent Nakshatra Namaha Creationsemployee. No freelancers. Walk into any of our 4 offices and meet them." },
    { n: '03', h3: 'Fixed price agreed before work starts', body: "In 565+ projects over 8 years, not one client has been invoiced more than the agreed price. Scope locked before development begins." },
    { n: '04', h3: 'Source code 100% yours on delivery', body: "Every file, database, admin credential and hosting login is handed over. No platform dependency, no lock-in, no ongoing fees." },
    { n: '05', h3: '4.9★ Google rating — 87 verified reviews', body: "Our track record is public and verifiable. 87 real reviews from real clients on Google. Not a marketing claim — a fact." },
    { n: '06', h3: 'One named PM from start to finish', body: "Dedicated project manager from discovery to handover. Weekly staging updates, direct phone access, no handoffs." },
  ],
  techStack: ['React JS', 'Next JS', 'Node JS', 'MongoDB', 'PostgreSQL', 'AWS', 'Figma', 'Google Analytics'],
  h2Tech: 'Technology Stack We Use',
  h2Faq: 'Website Development in Mysuru — Questions Answered',
  faqs: [
    { q: 'How much does a website cost in Mysuru?', a: 'Websites at Nakshatra Namaha Creationsrange from ₹24,999 to ₹1,50,000+ depending on scope — number of pages, custom features, CMS complexity and integrations. E-commerce starts from ₹45,000. All pricing is fixed before work begins. No hourly billing, no surprise invoices.' },
    { q: 'Does Nakshatra Namaha Creationshave a physical office in Mysuru?', a: 'Yes. Our Mysuru branch is at Suswani Towers, JP Nagar 2nd Stage, Mysuru – 570 008. Walk in Monday to Saturday, 9am–7pm to meet your project team in person. No appointment needed.' },
    { q: 'How long does it take to build a website?', a: 'A standard 10–20 page website takes 3–5 weeks. E-commerce takes 5–8 weeks. Larger portals or web applications take 8–14 weeks. All timelines are agreed in writing before development begins.' },
    { q: 'Will my website rank on Google?', a: "Nakshatra Namaha Creations builds every website with SEO-ready architecture — proper H1–H6 structure, schema markup, sitemap.xml, canonical URLs and PageSpeed 90+. We deliver technically sound websites designed to rank." },
    { q: 'Can I update my website myself after launch?', a: 'Yes. Every website includes a custom admin panel. Your team can update pages, add blog posts, manage enquiries and change content without needing a developer. Training is included at handover.' },
    { q: 'Do you build WordPress websites?', a: 'No. Nakshatra Namaha Creationsbuilds exclusively on React JS and Next JS. These modern frameworks deliver faster load times, better SEO, stronger security and far greater flexibility than WordPress. Every site is custom-coded.' },
    { q: 'What if I already have a website?', a: "Redesigns are one of our most common projects. Nakshatra Namaha Creationsmigrates existing content, preserves SEO rankings and delivers a modern, fast website. We analyse your current site's performance before starting." },
    { q: 'Do I own the source code?', a: 'Yes — completely and permanently. On delivery you receive every source file, database schema, admin credential and hosting login. The website is 100% yours with zero ongoing obligation to Nakshatra Namaha Creations.' },
  ],
}

export default function WebsiteDevelopmentMysuruPage() {
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
