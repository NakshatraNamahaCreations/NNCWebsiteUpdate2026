import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Website Development Company in Mumbai | Professional Website',
  description: 'NNC is the Best website development company in Mumbai to build fast and scalable websites, we deliver modern design and business focused solutions.',
  alternates: { canonical: `${SITE.url}/website-development-company-in-mumbai` },
  keywords: [
    'website development company in mumbai',
    'web development company in mumbai',
    'website design company in mumbai',
    'website developers in mumbai',
    'best website development company mumbai',
    'top website development company mumbai',
    'custom website development mumbai',
    'corporate website development mumbai',
    'business website design mumbai',
    'react js development company mumbai',
    'next js development company mumbai',
    'website maker in mumbai',
    'website design services mumbai',
    'affordable website development mumbai',
    'professional website design mumbai',
    'responsive website development mumbai',
    'website development services mumbai',
    'website company mumbai',
    'hire web developers mumbai',
    'web design agency mumbai',
  ].join(', '),
  openGraph: {
    title: 'Website Development Company in Mumbai | Professional Website',
    description: 'NNC is the Best website development company in Mumbai to build fast and scalable websites, we deliver modern design and business focused solutions.',
    url: `${SITE.url}/website-development-company-in-mumbai`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Nakshatra Namaha Creations',
    images: [{ url: 'https://s3.eu-north-1.amazonaws.com/admin.nakshatranamahacreations.in/NNC+NEW+LOGO+2020+low+res.png', width: 1200, height: 630, alt: 'Website Development Company Mumbai Nakshatra Namaha Creations' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Website Development Company in Mumbai | Professional Website',
    description: 'NNC is the Best website development company in Mumbai to build fast and scalable websites, we deliver modern design and business focused solutions.',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Website Development in Mumbai',
  description: 'Custom React JS and Next JS website development for businesses in Mumbai. Corporate websites, e-commerce, portals and SaaS platforms. PageSpeed 90+ guaranteed, fixed price, zero outsourcing. Walk-in office at Thane West.',
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
  areaServed: ['Mumbai', 'Thane', 'Navi Mumbai', 'Maharashtra', 'India'],
  serviceType: 'Website Development',
  url: `${SITE.url}/website-development-company-in-mumbai`,
  offers: [
    { '@type': 'Offer', name: 'Corporate Website', price: '24999', priceCurrency: 'INR', description: 'Custom React JS corporate website with CMS, SEO setup and PageSpeed 90+.' },
    { '@type': 'Offer', name: 'E-commerce Website', price: '45000', priceCurrency: 'INR', description: 'Full e-commerce website with product catalogue, payment gateway and order management.' },
    { '@type': 'Offer', name: 'Web Application / Portal', description: 'Custom-scoped web application with user roles, dashboards and API integrations.' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Website Development Services Mumbai',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Website Development Mumbai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-commerce Website Development Mumbai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'React JS Development Company Mumbai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Next JS Development Company Mumbai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Website Design Mumbai' } },
    ],
  },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Website Development Mumbai', item: `${SITE.url}/website-development-company-in-mumbai` },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does a website cost in Mumbai?', acceptedAnswer: { '@type': 'Answer', text: 'Websites start from ₹24,999. E-commerce from ₹45,000. All pricing is fixed before work begins — no hourly billing or surprise invoices.' } },
    { '@type': 'Question', name: 'Does Nakshatra Namaha Creations have an office in Mumbai?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Walk-in office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Open Mon–Sat, 9am–7pm.' } },
    { '@type': 'Question', name: 'How long does it take to build a website?', acceptedAnswer: { '@type': 'Answer', text: 'A standard website takes 3–5 weeks. E-commerce takes 5–8 weeks. Timelines agreed in writing before development begins.' } },
    { '@type': 'Question', name: 'Will my website rank on Google?', acceptedAnswer: { '@type': 'Answer', text: 'We build every website with SEO-ready architecture: proper heading structure, schema markup, sitemap.xml and PageSpeed 90+ on mobile and desktop.' } },
  ],
}

const data = {
  badge: 'Website Development · Mumbai',
  h1: 'Website Development Company',
  h1Accent: 'in Mumbai',
  tagline: 'Custom React JS & Next JS websites for Mumbai businesses — designed to rank, convert and perform. PageSpeed 90+ in every delivery contract. Walk-in office in Thane West.',
  desc: 'Nakshatra Namaha Creations builds professional websites for companies in Mumbai. Each site is custom-coded on React JS and Next JS — no WordPress, no templates. Designed to rank on Google, load fast on mobile and convert visitors into enquiries. Meet your team at our Mumbai office at Thane West.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'website development in Mumbai',
  h2Features: "What's Included in Every Website We Build",
  features: [
    { h3: 'Custom Design — No Templates', desc: "Every design is built from scratch in Figma to reflect your brand. No page builder, no WordPress theme. Exclusively yours." },
    { h3: 'React JS & Next JS Development', desc: "Built on the industry's fastest stack — server-side rendering, SEO-ready architecture and PageSpeed 90+ guaranteed contractually." },
    { h3: 'Mobile-First Responsive Layout', desc: 'Over 70% of website visits are mobile. We design mobile-first and test across 15+ real device configurations.' },
    { h3: 'SEO-Ready Page Structure', desc: 'Proper H1–H6 hierarchy, schema markup, sitemap.xml, robots.txt, canonical URLs and optimised meta titles.' },
    { h3: 'Content Management System', desc: 'Update pages, team profiles, news and services through an admin panel — no developer needed after launch.' },
    { h3: 'Enquiry Forms & Lead Capture', desc: 'Contact forms, WhatsApp integration and lead funnels connected to your inbox or CRM system.' },
    { h3: 'Third-Party Integrations', desc: 'Google Analytics, HubSpot, Salesforce, Razorpay, Calendly — any system your business relies on.' },
    { h3: 'PageSpeed 90+ Contractual', desc: "Written into your delivery contract. If your website doesn't score 90+ on mobile and desktop, we fix it before you pay." },
    { h3: '30-Day Post-Launch Support', desc: 'One month of bug fixes, minor updates and content changes included at no extra cost after launch.' },
  ],
  h2Why: 'Why Mumbai Businesses Choose Nakshatra Namaha Creations',
  why: [
    { n: '01', h3: 'Walk-in office in Thane West, Mumbai', body: "Unlike remote-only agencies, we have a physical office at Lodha Signet, Kolshet Road, Thane West. Walk in Mon–Sat, 9am–7pm and meet your project team." },
    { n: '02', h3: '35+ in-house employees — zero outsourcing', body: "Every designer, developer and PM is a permanent employee. No freelancers. Walk into any of our 4 offices and meet them." },
    { n: '03', h3: 'Fixed price agreed before work starts', body: "In 565+ projects over 8 years, not one client has been invoiced more than the agreed price. Scope locked before development begins." },
    { n: '04', h3: 'Source code 100% yours on delivery', body: "Every file, database, admin credential and hosting login is handed over. No platform dependency, no lock-in, no ongoing fees." },
    { n: '05', h3: '4.9★ Google rating — 87 verified reviews', body: "Our track record is public and verifiable. 87 real reviews from real clients on Google. Not a marketing claim — a fact." },
    { n: '06', h3: 'One named PM from start to finish', body: "Dedicated project manager from discovery to handover. Weekly staging updates, direct phone access, no handoffs." },
  ],
  techStack: ['React JS', 'Next JS', 'Node JS', 'MongoDB', 'PostgreSQL', 'AWS', 'Figma', 'Google Analytics'],
  h2Tech: 'Technology Stack We Use',
  h2Faq: 'Website Development in Mumbai — Questions Answered',
  faqs: [
    { q: 'How much does a website cost in Mumbai?', a: 'Websites range from ₹24,999 to ₹1,50,000+ depending on scope — number of pages, custom features, CMS complexity and integrations. E-commerce starts from ₹45,000. All pricing is fixed before work begins. No hourly billing, no surprise invoices.' },
    { q: 'Does Nakshatra Namaha Creations have a physical office in Mumbai?', a: 'Yes. Our Mumbai branch is at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Walk in Monday to Saturday, 9am–7pm to meet your project team in person. No appointment needed.' },
    { q: 'How long does it take to build a website?', a: 'A standard 10–20 page website takes 3–5 weeks. E-commerce takes 5–8 weeks. Larger portals or web applications take 8–14 weeks. All timelines are agreed in writing before development begins.' },
    { q: 'Will my website rank on Google?', a: "We build every website with SEO-ready architecture — proper H1–H6 structure, schema markup, sitemap.xml, canonical URLs and PageSpeed 90+. We deliver technically sound websites designed to rank." },
    { q: 'Can I update my website myself after launch?', a: 'Yes. Every website includes a custom admin panel. Your team can update pages, add blog posts, manage enquiries and change content without needing a developer. Training is included at handover.' },
    { q: 'Do you build WordPress websites?', a: 'No. We build exclusively on React JS and Next JS. These modern frameworks deliver faster load times, better SEO, stronger security and far greater flexibility than WordPress. Every site is custom-coded.' },
    { q: 'What if I already have a website?', a: "Redesigns are one of our most common projects. We migrate existing content, preserve SEO rankings and deliver a modern, fast website. We analyse your current site's performance before starting." },
    { q: 'Do I own the source code?', a: 'Yes — completely and permanently. On delivery you receive every source file, database schema, admin credential and hosting login. The website is 100% yours with zero ongoing obligation.' },
  ],
}

export default function WebsiteDevelopmentMumbaiPage() {
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
