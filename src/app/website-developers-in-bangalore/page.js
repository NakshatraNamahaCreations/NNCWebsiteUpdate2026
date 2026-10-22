import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Website Developers in Bangalore | Nakshatra Namaha Creations',
  description: 'Leading website development, app, CRM and digital marketing agency in Rajarajeshwari Nagar, Bangalore. Fixed price, 35+ in-house team, PageSpeed 90+ guaranteed.',
  alternates: { canonical: `${SITE.url}/website-developers-in-bangalore` },
  keywords: 'website developers in bangalore, website developer bangalore, web developers bangalore, hire website developers bangalore, best website developers bangalore, website development company bangalore, web developer bangalore, full stack developers bangalore, professional website developers bangalore',
  openGraph: {
    title: 'Website Developers in Bangalore | Nakshatra Namaha Creations',
    description: 'Leading website development, app, CRM and digital marketing agency in Rajarajeshwari Nagar, Bangalore. Fixed price, 35+ in-house team, PageSpeed 90+ guaranteed.',
    url: `${SITE.url}/website-developers-in-bangalore`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'Website Developers in Bangalore – NNC Digital' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Website Developers in Bangalore | Nakshatra Namaha Creations',
    description: 'Leading website development, app, CRM and digital marketing agency in Rajarajeshwari Nagar, Bangalore. Fixed price, 35+ in-house team, PageSpeed 90+ guaranteed.',
    images: [SITE.teamPhoto],
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://www.nakshatranamahacreations.com/website-developers-in-bangalore#localbusiness',
  name: 'Nakshatra Namaha Creations',
  legalName: 'Nakshatra Namaha Creations Private Limited',
  alternateName: 'NNC Digital Bangalore',
  description: 'Nakshatra Namaha Creations is a leading website development, mobile app development, CRM and digital marketing company in Rajarajeshwari Nagar, Bangalore. React JS and Node JS development, Android and iOS apps, corporate video, 2D animation, SEO and B2B digital solutions delivered by a 35+ in-house team across 4 offices in India.',
  url: 'https://www.nakshatranamahacreations.com/website-developers-in-bangalore',
  mainEntityOfPage: 'https://www.nakshatranamahacreations.com/website-developers-in-bangalore',
  logo: 'https://www.nakshatranamahacreations.com/images/logo.png',
  image: ['https://www.nakshatranamahacreations.com/images/bangalore-office-exterior.jpg', 'https://www.nakshatranamahacreations.com/images/bangalore-office-interior.jpg', 'https://www.nakshatranamahacreations.com/images/bangalore-team.jpg'],
  telephone: '+91-99005-66466',
  email: 'info@nakshatranamahacreations.com',
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Credit Card, Debit Card, UPI, Bank Transfer',
  address: { '@type': 'PostalAddress', streetAddress: '1st Floor, Darshan Plaza, #392, Dwarakanagar, Channasandra, Rajarajeshwari Nagar', addressLocality: 'Bangalore', addressRegion: 'Karnataka', postalCode: '560098', addressCountry: 'IN' },
  geo: { '@type': 'GeoCoordinates', latitude: 12.9063, longitude: 77.5162 },
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '10:00', closes: '20:30' }],
  areaServed: [{ '@type': 'City', name: 'Bangalore' }, { '@type': 'City', name: 'Bengaluru' }, { '@type': 'Place', name: 'Rajarajeshwari Nagar' }, { '@type': 'Place', name: 'Channasandra' }, { '@type': 'Place', name: 'Dwarakanagar' }, { '@type': 'Place', name: 'Kengeri' }, { '@type': 'Place', name: 'Jayanagar' }, { '@type': 'Place', name: 'Malleshwaram' }, { '@type': 'Place', name: 'Koramangala' }, { '@type': 'Place', name: 'Indiranagar' }, { '@type': 'Place', name: 'Whitefield' }, { '@type': 'Place', name: 'HSR Layout' }, { '@type': 'Place', name: 'Electronic City' }, { '@type': 'Place', name: 'Marathahalli' }, { '@type': 'Place', name: 'BTM Layout' }],
  serviceArea: { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 12.9063, longitude: 77.5162 }, geoRadius: '40000' },
  makesOffer: [{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Development' } }, { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development' } }, { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CRM and Custom Software Development' } }, { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Marketing and SEO' } }, { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '2D Animation and Corporate Video Production' } }, { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Graphic Design and Branding' } }, { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'B2B Marketing' } }],
  knowsAbout: ['React JS Development', 'Node JS Development', 'React Native App Development', 'Next.js Development', 'MongoDB', 'SEO', 'Google Ads', 'CRM Software', 'SaaS Platforms'],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '86', bestRating: '5', worstRating: '1' },
  sameAs: ['https://www.linkedin.com/in/harish-kashyap-65035678', 'https://www.instagram.com/nnc.digitalbengaluru', 'https://www.facebook.com/Nakshatranamahacreations'],
  parentOrganization: { '@type': 'Organization', name: 'Nakshatra Namaha Creations Private Limited', url: 'https://www.nakshatranamahacreations.com', founder: { '@type': 'Person', name: 'Harish Kashyap', jobTitle: 'Founder and Managing Director' } },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Website Developers in Bangalore', item: `${SITE.url}/website-developers-in-bangalore` },
  ],
}

const data = {
  badge: 'Website Developers · Bangalore',
  h1: 'Website Developers',
  h1Accent: 'in Bangalore',
  tagline: 'Expert website developers in Bangalore — fast, scalable and high performance websites. Next JS, React, Node JS. Head office in Rajarajeshwari Nagar. Fixed price.',
  desc: "NNC Digital's website developers in Bangalore build fast, scalable and high performance websites for startups, SMEs and enterprises. Our in-house development team at our RR Nagar head office delivers modern solutions using Next JS, React JS and Node JS — custom business websites, web applications, ecommerce platforms and full stack solutions with PageSpeed 90+, zero outsourcing and complete source code ownership.",
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'website development in Bangalore',
  h2Features: 'What Our Website Developers Build in Bangalore',
  features: [
    { h3: 'Custom Business Website Development Bangalore', desc: 'Custom business websites built from scratch with Next JS or React — no page builders, no templates. Fast load times, SEO-ready architecture, PageSpeed 90+ and mobile-first responsive design for Bangalore businesses.' },
    { h3: 'Corporate Website Development Bangalore', desc: 'Corporate website development for Bangalore companies — multi-page architecture, CMS integration, service pages, team sections and contact forms built to convert visitors into qualified leads.' },
    { h3: 'Full Stack Web Application Development Bangalore', desc: 'Full stack web applications — React JS or Next JS frontend connected to Node JS backend with REST APIs, database integration (MongoDB/PostgreSQL) and AWS cloud deployment.' },
    { h3: 'High Performance Website Development Bangalore', desc: 'High performance websites — server-side rendering, static site generation, image optimisation, code splitting and lazy loading. PageSpeed 90+ on mobile and desktop guaranteed.' },
    { h3: 'Landing Page Development Bangalore', desc: 'High converting landing pages for Bangalore ad campaigns — fast-loading, conversion-optimised with clear CTAs, lead capture forms and A/B test-ready architecture.' },
    { h3: 'Ecommerce Website Development Bangalore', desc: 'Ecommerce website development for Bangalore online stores — custom-built platforms with Razorpay/UPI integration, product management and order tracking.' },
  ],
  h2Why: 'Why Hire Website Developers from NNC Bangalore?',
  why: [
    { n: '01', h3: 'Bangalore head office — meet developers in person', body: 'NNC head office is at Rajarajeshwari Nagar, Bangalore. Visit us to review live development builds and meet the developers building your website.' },
    { n: '02', h3: 'Full-time in-house developers — not freelancers', body: 'Every developer at NNC Bangalore is a full-time employee. Consistent, accountable engineers who stay with your project from kickoff to launch.' },
    { n: '03', h3: 'Modern tech stack — Next JS, React, Node JS', body: 'NNC builds with the modern web stack — Next JS 14, React 18, TypeScript, Node JS and AWS. Fast, scalable and maintainable code.' },
    { n: '04', h3: 'PageSpeed 90+ — contractually guaranteed', body: 'Every website NNC develops achieves PageSpeed 90+ on mobile and desktop. Core Web Vitals compliance is written into every delivery contract.' },
    { n: '05', h3: 'Fixed price — fully scoped before development starts', body: 'Every project is scoped and priced upfront. No hourly billing, no scope creep charges, no surprise invoices.' },
    { n: '06', h3: '565+ projects delivered — 4.9★ Google rating', body: 'NNC has built websites for startups, SMEs, ecommerce brands and enterprises across Bangalore. 4.9★ rated on Google.' },
  ],
  techStack: ['Next JS', 'React JS', 'Node JS', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'AWS'],
  h2Tech: 'Website Development Technology Stack',
  h2Faq: 'Website Developers Bangalore — Frequently Asked Questions',
  faqs: [
    { q: 'Where can I find the best website developers in Bangalore?', a: 'NNC Digital has among the best website developers in Bangalore — 565+ projects, 4.9★ Google rating, head office in Rajarajeshwari Nagar.' },
    { q: 'How much does it cost to hire website developers in Bangalore?', a: 'A custom business website starts from ₹24,999. A full stack web application starts from ₹75,000. All fixed-price.' },
    { q: 'Do NNC website developers build high performance websites?', a: 'Yes. NNC builds high performance websites using Next JS and React — SSR, image optimisation, code splitting and lazy loading. PageSpeed 90+ guaranteed.' },
    { q: 'Can I hire dedicated website developers in Bangalore?', a: 'Yes. Hire dedicated website developers on a project or retainer. All are full-time NNC employees — not freelancers.' },
    { q: 'Do you have a website development office in Bangalore?', a: 'Yes. NNC head office is at 1st Floor, Darshan Plaza, Rajarajeshwari Nagar, Bangalore – 560098.' },
  ],
}

export default function WebsiteDevelopersInBangalorePage() {
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
