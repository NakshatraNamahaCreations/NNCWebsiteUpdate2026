import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import { StatsBar, ClientsBand } from '@/components/StatsBar'
import Services from '@/components/Services'
import WhyNNC from '@/components/WhyNNC'
import About from '@/components/About'
import {
  CaseStudies,
  Process,
  Testimonials,
  Industries,
  TechStack,
  FaqContact,
  CtaBand,
  SeoKeywords,
  Footer,
  WaFloat,
} from '@/components/Sections'
import AnimObserver from '@/components/AnimObserver'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.nakshatranamahacreations.com#organization',
  name: 'Nakshatra Namaha Creations Private Limited',
  alternateName: ['NNC', 'NNC Digital', 'Nakshatra Namaha Creations'],
  legalName: 'Nakshatra Namaha Creations Private Limited',
  url: 'https://www.nakshatranamahacreations.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.nakshatranamahacreations.com/images/logo.png',
    width: 400,
    height: 100,
  },
  image: 'https://www.nakshatranamahacreations.com/images/og-banner.jpg',
  description: 'Full-stack digital agency delivering website development, mobile app development, CRM software, digital marketing, 2D animation, corporate video and branding. 10+ years, 565+ projects, 35+ in-house team, 4 offices in Bangalore, Mumbai, Mysuru and Hyderabad.',
  foundingDate: '2015-03-07',
  founder: {
    '@type': 'Person',
    name: 'Harish Kashyap',
    jobTitle: 'Founder and Managing Director',
    sameAs: 'https://www.linkedin.com/in/harish-kashyap-65035678',
  },
  numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 35, maxValue: 50 },
  slogan: 'Your Digital Solutions Partner',
  email: 'info@nakshatranamahacreations.com',
  telephone: '+91-99005-66466',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-99005-66466',
      contactType: 'customer service',
      email: 'info@nakshatranamahacreations.com',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Kannada', 'Marathi'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+91-85910-18808',
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Marathi'],
    },
  ],
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: '1st Floor, Darshan Plaza, #392, Dwarakanagar, Channasandra, Rajarajeshwari Nagar',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      postalCode: '560098',
      addressCountry: 'IN',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: '#302, Lodha Signet, Kolshet Road, Kolshet Industrial Area, Thane West',
      addressLocality: 'Thane',
      addressRegion: 'Maharashtra',
      postalCode: '400607',
      addressCountry: 'IN',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'Suswani Towers, Akkamahadevi Road, JP Nagar 2nd Stage, C-Block',
      addressLocality: 'Mysuru',
      addressRegion: 'Karnataka',
      postalCode: '570031',
      addressCountry: 'IN',
    },
  ],
  location: [
    { '@type': 'Place', name: 'NNC Bangalore (Head Office)', geo: { '@type': 'GeoCoordinates', latitude: 12.9063, longitude: 77.5162 } },
    { '@type': 'Place', name: 'NNC Mumbai (Thane West)', geo: { '@type': 'GeoCoordinates', latitude: 19.2183, longitude: 72.9781 } },
    { '@type': 'Place', name: 'NNC Mysuru (JP Nagar)', geo: { '@type': 'GeoCoordinates', latitude: 12.2958, longitude: 76.6394 } },
  ],
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'City', name: 'Bangalore' },
    { '@type': 'City', name: 'Mumbai' },
    { '@type': 'City', name: 'Mysuru' },
    { '@type': 'City', name: 'Hyderabad' },
  ],
  knowsAbout: ['Website Development', 'Mobile App Development', 'React JS', 'Node JS', 'React Native', 'Next.js', 'MongoDB', 'CRM Software', 'SaaS Development', 'Digital Marketing', 'SEO', 'Google Ads', '2D Animation', 'Corporate Video Production', 'Graphic Design', 'Branding', 'B2B Marketing'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'NNC Service Catalogue',
    itemListElement: [
      { '@type': 'OfferCatalog', name: 'Website Development', url: 'https://www.nakshatranamahacreations.com/services/website-development' },
      { '@type': 'OfferCatalog', name: 'Mobile App Development', url: 'https://www.nakshatranamahacreations.com/services/mobile-app-development' },
      { '@type': 'OfferCatalog', name: 'CRM and Custom Software', url: 'https://www.nakshatranamahacreations.com/services/crm-software-development' },
      { '@type': 'OfferCatalog', name: 'Digital Marketing and SEO', url: 'https://www.nakshatranamahacreations.com/services/digital-marketing-seo' },
      { '@type': 'OfferCatalog', name: '2D Animation and Corporate Video', url: 'https://www.nakshatranamahacreations.com/services/animation-corporate-video' },
      { '@type': 'OfferCatalog', name: 'Graphic Design and Branding', url: 'https://www.nakshatranamahacreations.com/services/graphic-design-branding' },
      { '@type': 'OfferCatalog', name: 'B2B Marketing', url: 'https://www.nakshatranamahacreations.com/services/b2b-marketing' },
    ],
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '106', bestRating: '5', worstRating: '1' },
  award: ['10+ years of digital agency operations', '565+ projects delivered', '4.9 star Google rating across offices'],
  sameAs: [
    'https://www.linkedin.com/in/harish-kashyap-65035678',
    'https://www.instagram.com/nnc.digitalbengaluru',
    'https://www.facebook.com/Nakshatranamahacreations',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.nakshatranamahacreations.com#website',
  url: 'https://www.nakshatranamahacreations.com',
  name: 'Nakshatra Namaha Creations',
  description: 'Full-stack digital agency for website, app, CRM, digital marketing, animation and branding.',
  publisher: { '@id': 'https://www.nakshatranamahacreations.com#organization' },
  inLanguage: 'en-IN',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: 'https://www.nakshatranamahacreations.com/search?q={search_term_string}' },
    'query-input': 'required name=search_term_string',
  },
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <ClientsBand />
        <Services />
        <WhyNNC />
        <About />
        <CaseStudies />
        <Process />
        <Testimonials />
        <Industries />
        <TechStack />
        <FaqContact />
        <CtaBand />
        <SeoKeywords />
      </main>
      <Footer />
      <WaFloat />
      {/* Fires IntersectionObserver after hydration */}
      <AnimObserver />
    </>
  )
}
