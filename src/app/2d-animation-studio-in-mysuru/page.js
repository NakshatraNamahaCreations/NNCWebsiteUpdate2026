import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: '2D Animation Studio in Mysuru | Nakshatra Namaha Creations',
  description: 'Leading 2D animation studio in Mysuru. Explainer videos, character animation, whiteboard animations, motion graphics & product explainer videos. Script to delivery in-house. Walk-in Mysuru office. Fixed price. Call +91 99005 66466.',
  alternates: { canonical: `${SITE.url}/2d-animation-studio-in-mysuru` },
  keywords: [
    '2d animation studio in mysuru',
    '2d animation company mysuru',
    'explainer video company mysuru',
    'animated explainer videos mysuru',
    'character animation studio mysuru',
    'whiteboard animation mysuru',
    'motion graphics company mysuru',
    'animation services mysuru',
    'product explainer video mysuru',
  ].join(', '),
  openGraph: {
    title: '2D Animation Studio in Mysuru | Nakshatra Namaha Creations',
    description: 'Explainer videos, character animation, whiteboard animations & motion graphics for Mysuru businesses. Walk-in office. Fixed price.',
    url: `${SITE.url}/2d-animation-studio-in-mysuru`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Nakshatra Namaha Creations',
    images: [{ url: 'https://s3.eu-north-1.amazonaws.com/admin.nakshatranamahacreations.in/NNC+NEW+LOGO+2020+low+res.png', width: 1200, height: 630, alt: '2D Animation Studio Mysuru Nakshatra Namaha Creations' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: '2D Animation Studio in Mysuru | Nakshatra Namaha Creations',
    description: 'Explainer videos, character animation & motion graphics in Mysuru. Walk-in office. Fixed price.',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: '2D Animation Studio in Mysuru',
  description: 'Professional 2D animation studio in Mysuru. Explainer videos, animated explainer videos, character animation, whiteboard animations, motion graphics and product explainer videos. Script to delivery handled in-house. Walk-in office in JP Nagar, Mysuru.',
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
  serviceType: '2D Animation',
  url: `${SITE.url}/2d-animation-studio-in-mysuru`,
  offers: [
    { '@type': 'Offer', name: 'Explainer Video (60 sec)', price: '18000', priceCurrency: 'INR', description: 'Scripted 60-second 2D explainer video with voice-over, motion graphics and delivery in multiple formats.' },
    { '@type': 'Offer', name: 'Character Animation', price: '35000', priceCurrency: 'INR', description: 'Custom character design and animation with lip-sync, expressions and full scene composition.' },
    { '@type': 'Offer', name: 'Enterprise Animation Package', description: 'Multi-video animation package — explainer, training videos, product demos and social media edits.' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: '2D Animation Services Mysuru',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Explainer Video Company Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Character Animation Studio Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Whiteboard Animation Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Motion Graphics Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Product Explainer Video Mysuru' } },
    ],
  },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/#services` },
    { '@type': 'ListItem', position: 3, name: '2D Animation Studio Mysuru', item: `${SITE.url}/2d-animation-studio-in-mysuru` },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does 2D animation cost in Mysuru?', acceptedAnswer: { '@type': 'Answer', text: '60-second explainer videos start from ₹18,000/minute. Character animation from ₹35,000. Whiteboard animations from ₹15,000/minute. All pricing fixed before production.' } },
    { '@type': 'Question', name: 'How long does a 2D animation take?', acceptedAnswer: { '@type': 'Answer', text: 'A 60-second explainer: 2–3 weeks from script to delivery. Character animation: 3–5 weeks. Motion graphics: 1–2 weeks. Timelines agreed upfront.' } },
    { '@type': 'Question', name: 'Does Nakshatra Namaha Creations have an office in Mysuru?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Walk-in office at Suswani Towers, JP Nagar 2nd Stage, Mysuru – 570 008. Open Mon–Sat, 9am–7pm.' } },
    { '@type': 'Question', name: 'Do you handle scripting and voice-over?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. In-house scriptwriters and a network of voice-over artists in English, Hindi, Kannada and other Indian languages. End-to-end production.' } },
  ],
}

const data = {
  badge: '2D Animation · Mysuru',
  h1: '2D Animation Studio',
  h1Accent: 'in Mysuru',
  tagline: 'Explainer videos, character animation, whiteboard animations, motion graphics & product explainer videos — script to delivery, entirely in-house. Walk-in office in JP Nagar, Mysuru. Fixed price.',
  desc: 'Nakshatra Namaha Creations is a full-service 2D animation studio in Mysuru. We handle everything in-house — scripting, storyboarding, character design, illustration, animation, voice-over and sound design. Every project is delivered in HD or 4K with formats optimised for YouTube, social media, websites and presentations. Visit our Mysuru office to review style samples and discuss your project.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: '2D animation in Mysuru',
  h2Features: 'Animation Services We Deliver',
  features: [
    { h3: 'Animated Explainer Videos', desc: '30s to 2-minute explainer videos that simplify complex ideas — perfect for website hero sections, product launches and investor pitches.' },
    { h3: 'Character Animation', desc: 'Custom character design with lip-sync, facial expressions and full scene composition. Ideal for brand mascots, storytelling and training videos.' },
    { h3: 'Whiteboard Animation', desc: 'Hand-drawn whiteboard animations with voice-over — engaging for educational content, process walkthroughs and corporate training.' },
    { h3: 'Motion Graphics', desc: 'Kinetic typography, infographic animation and data visualisation for social media, presentations and advertising campaigns.' },
    { h3: 'Product Explainer Videos', desc: 'Show how your product works with clean, engaging 2D animations — ideal for SaaS, apps, hardware and e-commerce.' },
    { h3: 'Social Media Reels & Shorts', desc: 'Short-form animated content for Instagram Reels, YouTube Shorts, TikTok and LinkedIn — sized for every platform.' },
    { h3: 'Training & E-Learning Videos', desc: 'Animated course modules, onboarding videos and training content with quiz overlays and chapter markers.' },
    { h3: 'Scripting & Voice-Over', desc: 'In-house scriptwriters and a network of voice-over artists in English, Hindi, Kannada, Tamil, Telugu and other Indian languages.' },
    { h3: 'Multi-Format Delivery', desc: 'HD/4K master files plus social cut-downs for Instagram (1:1, 9:16), YouTube (16:9), LinkedIn and WhatsApp Status.' },
  ],
  h2Why: 'Why Mysuru Businesses Choose Us for 2D Animation',
  why: [
    { n: '01', h3: 'Walk-in office in JP Nagar, Mysuru', body: "Visit Suswani Towers, JP Nagar 2nd Stage. Review scripts, storyboards and animation previews with our team face-to-face. Open Mon–Sat, 9am–7pm." },
    { n: '02', h3: 'Script to delivery — entirely in-house', body: "Scriptwriters, storyboard artists, illustrators, animators, sound designers — all under one roof. No outsourced animation farms, no inconsistent quality." },
    { n: '03', h3: '35+ in-house team — permanent employees', body: "Every animator, illustrator and scriptwriter is a full-time Nakshatra Namaha Creations employee. No freelancers. Walk in and meet them." },
    { n: '04', h3: 'Custom style — not template animations', body: "Every animation is designed from scratch to match your brand colours, typography and tone. No stock template videos with just your logo swapped in." },
    { n: '05', h3: 'Multi-language voice-over network', body: "Professional voice-over artists in English, Hindi, Kannada, Tamil, Telugu, Malayalam and more. One animation, multiple language versions if needed." },
    { n: '06', h3: 'Fixed price — no surprise invoices', body: "Script, animation scope, revisions and delivery formats quoted upfront. No hidden charges for extra renders or format exports." },
  ],
  techStack: ['Adobe After Effects', 'Adobe Illustrator', 'Adobe Animate', 'Moho', 'Toon Boom', 'Adobe Premiere', 'Pro Tools', 'Cinema 4D'],
  h2Tech: 'Animation Software & Tools',
  h2Faq: '2D Animation in Mysuru — Questions Answered',
  faqs: [
    { q: 'How much does 2D animation cost in Mysuru?', a: 'Explainer videos start from ₹18,000 per minute. Character animation from ₹35,000 per minute. Whiteboard animations from ₹15,000 per minute. Motion graphics start from ₹12,000 per minute. All pricing is fixed before production — no hourly billing.' },
    { q: 'How long does a 2D animation project take?', a: 'A 60-second explainer video takes 2–3 weeks from script approval to final delivery. Character animation with custom design: 3–5 weeks. Motion graphics: 1–2 weeks. Whiteboard animation: 2 weeks. All timelines agreed upfront with milestone reviews.' },
    { q: 'Do you handle scripting and voice-over?', a: 'Yes — both in-house. Our scriptwriters craft engaging, concise scripts optimised for your target audience. We partner with professional voice-over artists in English, Hindi, Kannada, Tamil, Telugu and other Indian languages.' },
    { q: 'Does Nakshatra Namaha Creations have an office in Mysuru?', a: 'Yes. Our Mysuru branch is at Suswani Towers, JP Nagar 2nd Stage, Mysuru – 570 008. Walk in Monday to Saturday, 9am–7pm to review style samples, scripts and storyboards.' },
    { q: "Can I get revisions during the project?", a: 'Yes. Our process includes 3 review milestones — script, storyboard and animatic — before final animation. Minor revisions at each stage are included. Major scope changes are quoted separately to keep pricing predictable.' },
    { q: 'What animation styles do you offer?', a: 'Flat illustration, character-driven, whiteboard, kinetic typography, infographic/data-driven, stop-motion style and hybrid live-action + animation. We match style to your brand and message — not a one-size-fits-all template.' },
    { q: 'Do you handle social media cut-downs?', a: 'Yes. Every project includes format delivery for Instagram (1:1, 9:16), YouTube (16:9), LinkedIn, WhatsApp Status and TikTok from the same master animation. No additional charges for format exports.' },
    { q: 'Can you animate existing illustrations or characters?', a: 'Yes. If you have existing brand illustrations, characters or style guides, we animate using your assets. If not, our illustrators design custom characters and scenes matching your brand identity.' },
  ],
}

export default function AnimationStudioMysuruPage() {
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
