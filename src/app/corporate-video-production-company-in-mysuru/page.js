import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Corporate Video Production Company in Mysuru | Nakshatra Namaha Creations',
  description: 'Top corporate video production company in Mysuru. Brand films, ad films, drone videography, product shoots & commercial video production. 4K delivery. In-house studio. Walk-in Mysuru office. Call +91 99005 66466.',
  alternates: { canonical: `${SITE.url}/corporate-video-production-company-in-mysuru` },
  keywords: [
    'corporate video production company in mysuru',
    'video production company mysuru',
    'corporate film makers mysuru',
    'brand film production mysuru',
    'ad film production mysuru',
    'drone video production mysuru',
    'product video shoot mysuru',
    'corporate video makers mysuru',
    'commercial video production mysuru',
  ].join(', '),
  openGraph: {
    title: 'Corporate Video Production Company in Mysuru | Nakshatra Namaha Creations',
    description: 'Brand films, ad films, drone videography & product shoots for Mysuru businesses. In-house 4K studio. Walk-in office. Fixed price.',
    url: `${SITE.url}/corporate-video-production-company-in-mysuru`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Nakshatra Namaha Creations',
    images: [{ url: 'https://s3.eu-north-1.amazonaws.com/admin.nakshatranamahacreations.in/NNC+NEW+LOGO+2020+low+res.png', width: 1200, height: 630, alt: 'Corporate Video Production Company Mysuru Nakshatra Namaha Creations' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Corporate Video Production Company in Mysuru | Nakshatra Namaha Creations',
    description: 'Brand films, ad films & drone videos in Mysuru. In-house 4K studio. Walk-in office.',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Corporate Video Production Company in Mysuru',
  description: 'Professional corporate video production in Mysuru. Brand films, ad films, drone videography, product videos and commercial shoots. Full in-house production from scripting to 4K delivery. Walk-in office in JP Nagar, Mysuru.',
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
  serviceType: 'Corporate Video Production',
  url: `${SITE.url}/corporate-video-production-company-in-mysuru`,
  offers: [
    { '@type': 'Offer', name: 'Brand Film Production', price: '50000', priceCurrency: 'INR', description: 'Corporate brand film with scripting, shoot, edit and 4K delivery. Ideal for website, social media and presentations.' },
    { '@type': 'Offer', name: 'Ad Film Production', price: '100000', priceCurrency: 'INR', description: 'Commercial ad film for TV, YouTube and social media with professional crew, casting and post-production.' },
    { '@type': 'Offer', name: 'Enterprise Video Package', description: 'Multi-video annual package — brand film, product videos, event coverage, testimonials and social media edits.' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Video Production Services Mysuru',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Film Production Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ad Film Production Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Drone Video Production Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Product Video Shoot Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Video Production Mysuru' } },
    ],
  },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/#services` },
    { '@type': 'ListItem', position: 3, name: 'Corporate Video Production Mysuru', item: `${SITE.url}/corporate-video-production-company-in-mysuru` },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does corporate video production cost in Mysuru?', acceptedAnswer: { '@type': 'Answer', text: 'Brand films start from ₹50,000. Ad films from ₹1,00,000. Product videos from ₹25,000. Enterprise packages scoped individually. All pricing fixed before production.' } },
    { '@type': 'Question', name: 'Do you have drone and 4K equipment in-house?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We own DJI drones, 4K RED/Sony cinema cameras, gimbal rigs, professional lighting kits and a full edit suite — no rental dependencies.' } },
    { '@type': 'Question', name: 'Does Nakshatra Namaha Creations have an office in Mysuru?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Walk-in office at Suswani Towers, JP Nagar 2nd Stage, Mysuru – 570 008. Open Mon–Sat, 9am–7pm.' } },
    { '@type': 'Question', name: 'How long does video production take?', acceptedAnswer: { '@type': 'Answer', text: 'Brand films: 3–4 weeks from brief to final delivery. Ad films: 5–8 weeks. Product videos: 2–3 weeks. Timelines agreed before production begins.' } },
  ],
}

const data = {
  badge: 'Corporate Video Production · Mysuru',
  h1: 'Corporate Video Production',
  h1Accent: 'Company in Mysuru',
  tagline: 'Brand films, ad films, drone videography, product shoots & commercial video production — full in-house production from scripting to 4K delivery. Walk-in office in JP Nagar, Mysuru. Fixed price.',
  desc: 'Nakshatra Namaha Creations is a full-service corporate video production company in Mysuru. We handle everything in-house — scripting, storyboarding, casting, shooting (including drone), editing, sound design, colour grading and 4K delivery. No third-party crew, no rental equipment, no surprise costs. Visit our Mysuru office to discuss your video project.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'corporate video production in Mysuru',
  h2Features: 'Video Production Services We Deliver',
  features: [
    { h3: 'Corporate Brand Films', desc: 'Company story videos, culture films and corporate profile videos. Ideal for website homepages, investor decks and social media.' },
    { h3: 'Ad Films & TV Commercials', desc: 'Commercial ad films for YouTube, TV, OTT and social media. Professional casting, cinematic production and broadcast-quality delivery.' },
    { h3: 'Drone Videography & Aerial Shots', desc: 'DGCA-compliant drone operations for real estate tours, facility flyovers, event coverage and cinematic aerial storytelling in 4K.' },
    { h3: 'Product Videos & Demos', desc: 'Studio product shoots, 360° spins, hero shots and demo videos for e-commerce, Amazon listings and marketing campaigns.' },
    { h3: 'Event & Conference Coverage', desc: 'Multi-camera event coverage, interview segments, highlight reels and same-day social media edits for conferences and launches.' },
    { h3: 'Testimonial & Case Study Videos', desc: 'Client testimonial interviews, on-location case studies and customer success stories filmed with broadcast-quality audio.' },
    { h3: 'Scripting & Storyboarding', desc: 'Professional scriptwriters and storyboard artists in-house. From concept to shot list — every frame planned before we roll.' },
    { h3: 'Post-Production & VFX', desc: '4K editing, motion graphics, sound design, colour grading and visual effects — all handled in our in-house post-production suite.' },
    { h3: '4K & Multi-Format Delivery', desc: 'Delivered in 4K master with formats for TV (16:9), social media (9:16, 1:1), web (horizontal) and OTT — from one shoot.' },
  ],
  h2Why: 'Why Mysuru Businesses Choose Us for Video Production',
  why: [
    { n: '01', h3: 'Walk-in office in JP Nagar, Mysuru', body: "Visit Suswani Towers, JP Nagar 2nd Stage. Review scripts, storyboards and edits with our team face-to-face. Open Mon–Sat, 9am–7pm." },
    { n: '02', h3: 'Full in-house production — no rentals', body: "We own all our equipment — 4K cinema cameras, DJI drones, gimbals, lighting kits and edit suites. No rental dependencies. No equipment surprise costs." },
    { n: '03', h3: '35+ in-house team — zero outsourcing', body: "Scriptwriters, directors, cinematographers, editors, motion graphics artists — all permanent Nakshatra Namaha Creations employees. No freelance crews." },
    { n: '04', h3: 'Scripting to 4K delivery — one team', body: "One team handles scripting, shooting, editing, sound design and colour grading. No handoffs, no vendor coordination, no mixed quality." },
    { n: '05', h3: 'DGCA-licensed drone operations', body: "Our drone pilots are DGCA-certified with Remote Pilot Licenses. Legally compliant aerial shoots for real estate, events and corporate storytelling." },
    { n: '06', h3: 'Fixed price — no surprise invoices', body: "Script, shoot days, crew, equipment and post — all quoted as a fixed scope before production begins. No hidden costs." },
  ],
  techStack: ['RED Cinema', 'Sony FX3', 'DJI Drones', 'DaVinci Resolve', 'Adobe Premiere', 'After Effects', 'Pro Tools', 'Blackmagic'],
  h2Tech: 'Video Production Equipment & Tools',
  h2Faq: 'Video Production in Mysuru — Questions Answered',
  faqs: [
    { q: 'How much does corporate video production cost in Mysuru?', a: 'Brand films start from ₹50,000. Ad films from ₹1,00,000. Product videos from ₹25,000. Drone shoots from ₹15,000. Enterprise video packages with multiple deliverables are scoped individually. All pricing is fixed before production begins.' },
    { q: 'Do you have in-house drone and 4K camera equipment?', a: 'Yes. We own DJI Mavic 3 Pro and DJI Inspire drones (DGCA-compliant), RED/Sony FX3 cinema cameras, DJI Ronin gimbals, professional lighting kits, audio rigs and a full post-production edit suite. Zero rental dependencies.' },
    { q: 'How long does video production take?', a: 'Brand films: 3–4 weeks from brief to final 4K delivery. Ad films: 5–8 weeks including casting and location scouting. Product videos: 2–3 weeks. Event coverage: same-day social edits + final 4K within 1 week.' },
    { q: 'Does Nakshatra Namaha Creations have an office in Mysuru?', a: 'Yes. Our Mysuru branch is at Suswani Towers, JP Nagar 2nd Stage, Mysuru – 570 008. Walk in Monday to Saturday, 9am–7pm to discuss scripts, review storyboards and preview edits.' },
    { q: 'Can you shoot outside Mysuru?', a: 'Yes. We regularly travel across Karnataka and India for shoots. Travel costs are quoted upfront as part of the fixed price — no surprise invoices.' },
    { q: 'Do you handle scripting and storyboarding?', a: 'Yes. In-house scriptwriters and storyboard artists. Every video starts with a script and visual storyboard approved by you before we shoot. No surprises on shoot day.' },
    { q: 'What formats do you deliver?', a: 'Final masters in 4K (3840×2160). Plus cut-downs for every platform — YouTube (16:9), Instagram Reels/TikTok (9:16), Instagram feed (1:1), LinkedIn and TV broadcast. All from one shoot.' },
    { q: 'Can you produce ad films for TV and YouTube?', a: 'Yes. Broadcast-quality ad films with professional casting, voice-over, colour grading and sound mixing — suitable for TV, OTT platforms, YouTube pre-rolls and social media.' },
  ],
}

export default function CorporateVideoMysuruPage() {
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
