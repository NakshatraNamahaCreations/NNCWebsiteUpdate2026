import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Website Developers in Mysuru | Nakshatra Namaha Creations',
  description: 'Leading website development, app, CRM and digital marketing agency in JP Nagar, Mysuru. Fixed price, 35+ in-house team, PageSpeed 90+ guaranteed.',
  alternates: { canonical: `${SITE.url}/website-developers-in-mysuru` },
  keywords: 'website developers in mysuru, website developer mysuru, web developers mysuru, hire website developers mysuru, best website developers mysuru, website development company mysuru, web developer mysore, website development mysore',
  openGraph: {
    title: 'Website Developers in Mysuru | Nakshatra Namaha Creations',
    description: 'Leading website development, app, CRM and digital marketing agency in JP Nagar, Mysuru. Fixed price, 35+ in-house team, PageSpeed 90+ guaranteed.',
    url: `${SITE.url}/website-developers-in-mysuru`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'Website Developers in Mysuru – NNC Digital' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Website Developers in Mysuru | Nakshatra Namaha Creations',
    description: 'Leading website development, app, CRM and digital marketing agency in JP Nagar, Mysuru. Fixed price, 35+ in-house team, PageSpeed 90+ guaranteed.',
    images: [SITE.teamPhoto],
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://www.nakshatranamahacreations.com/website-developers-in-mysuru#localbusiness',
  name: 'Nakshatra Namaha Creations',
  legalName: 'Nakshatra Namaha Creations Private Limited',
  alternateName: 'NNC Digital Mysuru',
  description: 'Nakshatra Namaha Creations is a leading website development, mobile app development, CRM and digital marketing company in JP Nagar, Mysuru. React JS and Node JS development, Android and iOS apps, corporate video, 2D animation, SEO and B2B digital solutions delivered by a 35+ in-house team across 4 offices in India.',
  url: 'https://www.nakshatranamahacreations.com/website-developers-in-mysuru',
  mainEntityOfPage: 'https://www.nakshatranamahacreations.com/website-developers-in-mysuru',
  logo: 'https://www.nakshatranamahacreations.com/images/logo.png',
  image: ['https://www.nakshatranamahacreations.com/images/mysuru-office-exterior.jpg', 'https://www.nakshatranamahacreations.com/images/mysuru-office-interior.jpg', 'https://www.nakshatranamahacreations.com/images/mysuru-team.jpg'],
  telephone: '+91-99005-66466',
  email: 'info@nakshatranamahacreations.com',
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Credit Card, Debit Card, UPI, Bank Transfer',
  address: { '@type': 'PostalAddress', streetAddress: 'Suswani Towers, Akkamahadevi Road, JP Nagar 2nd Stage, C-Block, JP Nagar', addressLocality: 'Mysuru', addressRegion: 'Karnataka', postalCode: '570031', addressCountry: 'IN' },
  geo: { '@type': 'GeoCoordinates', latitude: 12.2958, longitude: 76.6394 },
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '10:00', closes: '19:00' }],
  areaServed: [{ '@type': 'City', name: 'Mysuru' }, { '@type': 'City', name: 'Mysore' }, { '@type': 'Place', name: 'JP Nagar Mysuru' }, { '@type': 'Place', name: 'Kuvempunagar' }, { '@type': 'Place', name: 'Vijayanagar Mysuru' }, { '@type': 'Place', name: 'Hebbal Mysuru' }, { '@type': 'Place', name: 'Saraswathipuram' }, { '@type': 'Place', name: 'Gokulam' }],
  serviceArea: { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 12.2958, longitude: 76.6394 }, geoRadius: '30000' },
  makesOffer: [{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Development' } }, { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development' } }, { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CRM and Custom Software Development' } }, { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Marketing and SEO' } }, { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '2D Animation and Corporate Video Production' } }, { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Graphic Design and Branding' } }, { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'B2B Marketing' } }],
  knowsAbout: ['React JS Development', 'Node JS Development', 'React Native App Development', 'Next.js Development', 'MongoDB', 'SEO', 'Google Ads', 'CRM Software', 'SaaS Platforms'],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.6', reviewCount: '12', bestRating: '5', worstRating: '1' },
  sameAs: ['https://www.linkedin.com/in/harish-kashyap-65035678', 'https://www.instagram.com/nnc.digitalbengaluru', 'https://www.facebook.com/Nakshatranamahacreations'],
  parentOrganization: { '@type': 'Organization', name: 'Nakshatra Namaha Creations Private Limited', url: 'https://www.nakshatranamahacreations.com', founder: { '@type': 'Person', name: 'Harish Kashyap', jobTitle: 'Founder and Managing Director' } },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Website Developers in Mysuru', item: `${SITE.url}/website-developers-in-mysuru` },
  ],
}

const data = {
  badge: 'Website Developers · Mysuru',
  h1: 'Website Developers',
  h1Accent: 'in Mysuru',
  tagline: 'Expert website developers in Mysuru — fast, scalable and high performance websites. Next JS, React, Node JS. Office in JP Nagar. Fixed price.',
  desc: "NNC Digital's website developers in Mysuru build fast, scalable and high performance websites for startups, SMEs and enterprises. Our in-house development team at JP Nagar delivers modern solutions using Next JS, React JS and Node JS — custom business websites, web applications, ecommerce platforms and full stack solutions with PageSpeed 90+, zero outsourcing and complete source code ownership.",
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'website development in Mysuru',
  h2Features: 'What Our Website Developers Build in Mysuru',
  features: [
    { h3: 'Custom Business Website Development Mysuru', desc: 'Custom business websites built from scratch with Next JS or React — no page builders, no templates. Fast load times, SEO-ready architecture, PageSpeed 90+ and mobile-first responsive design for Mysuru businesses.' },
    { h3: 'Corporate Website Development Mysuru', desc: 'Corporate website development for Mysuru companies — multi-page architecture, CMS integration, service pages, team sections and contact forms built to convert visitors into qualified leads.' },
    { h3: 'Full Stack Web Application Development Mysuru', desc: 'Full stack web applications — React JS or Next JS frontend connected to Node JS backend with REST APIs, database integration and AWS cloud deployment.' },
    { h3: 'E-commerce Website Development Mysuru', desc: 'Ecommerce website development for Mysuru online stores — custom-built platforms with Razorpay/UPI integration, product management and order tracking.' },
    { h3: 'Landing Page Development Mysuru', desc: 'High converting landing pages for Mysuru ad campaigns — fast-loading, conversion-optimised with clear CTAs and lead capture forms.' },
    { h3: 'Website Maintenance and Support Mysuru', desc: 'Ongoing website maintenance and support — bug fixes, content updates, security patches, uptime monitoring and performance optimisation.' },
  ],
  h2Why: 'Why Hire Website Developers from NNC Mysuru?',
  why: [
    { n: '01', h3: 'Mysuru branch office — meet developers in person', body: 'NNC has a branch office at JP Nagar, Mysuru. Visit us to review live development builds and meet the developers building your website.' },
    { n: '02', h3: 'Full-time in-house developers — not freelancers', body: 'Every developer at NNC Mysuru is a full-time employee. Consistent, accountable engineers who stay with your project from kickoff to launch.' },
    { n: '03', h3: 'Modern tech stack — Next JS, React, Node JS', body: 'NNC builds with the modern web stack — Next JS 14, React 18, TypeScript, Node JS and AWS. Fast, scalable and maintainable code.' },
    { n: '04', h3: 'PageSpeed 90+ — contractually guaranteed', body: 'Every website NNC develops achieves PageSpeed 90+ on mobile and desktop. Core Web Vitals compliance is written into every delivery contract.' },
    { n: '05', h3: 'Fixed price — fully scoped before development starts', body: 'Every project is scoped and priced upfront. No hourly billing, no scope creep charges, no surprise invoices.' },
    { n: '06', h3: '565+ projects delivered — 4.6★ Google rating', body: 'NNC has built websites for startups, SMEs, ecommerce brands and enterprises across Mysuru. 4.6★ rated on Google.' },
  ],
  techStack: ['Next JS', 'React JS', 'Node JS', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'AWS'],
  h2Tech: 'Website Development Technology Stack',
  h2Faq: 'Website Developers Mysuru — Frequently Asked Questions',
  faqs: [
    { q: 'Where can I find the best website developers in Mysuru?', a: 'NNC Digital has among the best website developers in Mysuru — 565+ projects, 4.6★ Google rating, office in JP Nagar.' },
    { q: 'How much does it cost to hire website developers in Mysuru?', a: 'A custom business website starts from ₹24,999. A full stack web application starts from ₹75,000. All fixed-price.' },
    { q: 'Do NNC website developers build high performance websites?', a: 'Yes. NNC builds high performance websites using Next JS and React — SSR, image optimisation, code splitting. PageSpeed 90+ guaranteed.' },
    { q: 'Do you have a website development office in Mysuru?', a: 'Yes. NNC branch office is at Suswani Towers, JP Nagar, Mysuru – 570031.' },
  ],
}

export default function WebsiteDevelopersInMysuruPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
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
