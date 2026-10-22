import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: '2D Animation and Corporate Video Production | NNC Digital',
  description: 'NNC produces premium 2D animation, explainer videos, HR and compliance videos, training videos and corporate ad shoots. Explainer videos from ₹18,000/min. In-house storyboard to delivery.',
  alternates: { canonical: `${SITE.url}/services/animation-corporate-video` },
  openGraph: {
    title: '2D Animation and Corporate Video Production | NNC Digital',
    description: 'Premium 2D animation, explainer videos, corporate ad shoots. Explainer videos from ₹18,000/min. In-house team.',
    url: `${SITE.url}/services/animation-corporate-video`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: '2D Animation and Corporate Video – NNC Digital' }],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.nakshatranamahacreations.com/services/animation-corporate-video#service',
  serviceType: '2D Animation and Corporate Video Production',
  name: '2D Animation and Corporate Video Production',
  alternateName: 'Explainer Video and Animation Services',
  description: 'NNC produces premium 2D animation, explainer videos, HR and compliance videos, training videos and corporate ad shoots. Explainer videos starting Rs. 18,000 per minute, corporate ad shoots starting Rs. 50,000. In-house storyboard, illustration, animation and voice-over.',
  url: 'https://www.nakshatranamahacreations.com/services/animation-corporate-video',
  provider: {
    '@type': 'Organization',
    '@id': 'https://www.nakshatranamahacreations.com#organization',
    name: 'Nakshatra Namaha Creations Private Limited',
    url: 'https://www.nakshatranamahacreations.com',
    telephone: '+91-99005-66466',
    email: 'info@nakshatranamahacreations.com',
    logo: 'https://www.nakshatranamahacreations.com/images/logo.png',
  },
  areaServed: [{ '@type': 'City', name: 'Bangalore' }, { '@type': 'City', name: 'Mumbai' }, { '@type': 'City', name: 'Mysuru' }, { '@type': 'City', name: 'Hyderabad' }, { '@type': 'Country', name: 'India' }],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Animation and Video Packages',
    itemListElement: [
      { '@type': 'Offer', name: '2D Explainer Video', description: 'Per minute of animated explainer video with script, storyboard, illustration, animation and voice-over', price: '18000', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: 'Corporate Ad Shoot', description: 'On-location corporate ad film production starting at Rs. 50,000', price: '50000', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: 'HR and Compliance Animation', description: 'Employee training and compliance animated videos for enterprise clients', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
    ],
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '106', bestRating: '5' },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: '2D Animation and Corporate Video', item: `${SITE.url}/services/animation-corporate-video` },
  ],
}

const data = {
  badge: 'Service · Animation and Corporate Video',
  h1: '2D Animation and',
  h1Accent: 'Corporate Video',
  tagline: 'Premium 2D animation, explainer videos and corporate ad shoots. From ₹18,000/min. In-house storyboard, illustration, animation and voice-over.',
  desc: 'NNC produces 2D animated explainer videos, HR and compliance training videos, product demo animations and corporate ad films for businesses across India. Every video is produced in-house — script, storyboard, character design, animation, voice-over and music. No outsourcing.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'animation and corporate video',
  h2Features: 'Animation and Video Production Services',
  features: [
    { h3: '2D Explainer Video Production', desc: 'Animated explainer videos from ₹18,000 per minute — script, storyboard, character design, illustration, animation, voice-over and background music.' },
    { h3: 'Corporate Ad Shoot and Film', desc: 'On-location corporate ad films, product showcase videos and brand films from ₹50,000 — scripting, shoot, editing and colour grading.' },
    { h3: 'HR and Compliance Training Animation', desc: 'Animated training videos for employee onboarding, compliance policies, safety procedures and eLearning modules for enterprise clients.' },
    { h3: 'Product Demo and App Walkthrough Animation', desc: 'Animated product demonstrations, app UI walkthroughs and feature highlight videos for SaaS and tech product companies.' },
    { h3: 'Whiteboard Animation', desc: 'Whiteboard explainer videos for educational content, investor pitches and sales enablement — clear, engaging and professional.' },
    { h3: 'Motion Graphics and Social Media Video', desc: 'Short-form motion graphics, animated logos, Instagram reels and LinkedIn video creatives for digital marketing campaigns.' },
  ],
  h2Why: 'Why Choose NNC for Animation and Video Production?',
  why: [
    { n: '01', h3: 'In-house studio — script to delivery', body: 'NNC has a full in-house animation and video production team. Script writing, storyboard, illustration, animation, voice-over, sound design and post-production — all under one roof.' },
    { n: '02', h3: 'Transparent pricing — from ₹18,000/min', body: 'Explainer video pricing starts from ₹18,000 per minute with a complete breakdown per deliverable. No surprise costs.' },
    { n: '03', h3: 'Enterprise and SME experience', desc: 'NNC has produced animation for large enterprises, pharma companies, coaching institutes, SaaS startups and FMCG brands.' },
    { n: '04', h3: 'Multi-language voice-overs available', body: 'Voice-over in English, Hindi, Kannada, Telugu, Tamil, Marathi and more — in-house or with our verified voice-over artist network.' },
    { n: '05', h3: 'On-time delivery with revision cycles', body: 'Every animation project has clearly defined revision rounds and delivery milestones — no endless back-and-forth.' },
    { n: '06', h3: '565+ projects — 4.9★ Google rating', body: 'Proven production track record across industries. 4.9★ rated on Google with verifiable client reviews.' },
  ],
  techStack: ['Adobe After Effects', 'Adobe Premiere Pro', 'Adobe Illustrator', 'Blender', 'DaVinci Resolve', 'Audacity'],
  h2Tech: 'Production Tools',
  h2Faq: 'Animation and Corporate Video — Frequently Asked Questions',
  faqs: [
    { q: 'How much does a 2D explainer video cost?', a: 'A 2D explainer video starts from ₹18,000 per minute of finished animation. This includes script, storyboard, illustration, animation, voice-over and music.' },
    { q: 'How long does a 2D animation video take to produce?', a: 'A 1-minute explainer video takes 3–4 weeks. A 3-minute video takes 6–8 weeks. Timelines include revision cycles.' },
    { q: 'How much does a corporate ad shoot cost?', a: 'Corporate ad shoots start from ₹50,000 for a half-day shoot with editing. Full-day shoots with multiple setups start from ₹1,20,000.' },
    { q: 'Can you produce videos in multiple languages?', a: 'Yes. NNC produces voice-overs in English, Hindi, Kannada, Telugu, Tamil and Marathi.' },
    { q: 'Do I own the video files after delivery?', a: 'Yes. You receive the final video file in all required formats plus the source project files. Full ownership on delivery.' },
  ],
}

export default function AnimationCorporateVideoServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
