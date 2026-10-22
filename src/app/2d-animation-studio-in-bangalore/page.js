import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: '2D Animation Studio in Bangalore | Animated Video Services',
  description:
    'We are a trusted 2D animation studio in Bangalore creating engaging animated videos for brands, products, marketing and business communication.',
  alternates: {
    canonical: `${SITE.url}/2d-animation-studio-in-bangalore`,
  },
  keywords:
    '2d animation studio in bangalore, 2d animation company bangalore, explainer video company bangalore, animated explainer videos bangalore, character animation studio bangalore, whiteboard animation bangalore, motion graphics company bangalore, animation services bangalore, product explainer video bangalore',
  openGraph: {
    title: '2D Animation Studio in Bangalore | Animated Video Services',
    description:
      'We are a trusted 2D animation studio in Bangalore creating engaging animated videos for brands, products, marketing and business communication.',
    url: `${SITE.url}/2d-animation-studio-in-bangalore`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: '2D Animation Studio in Bangalore – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: '2D Animation Studio in Bangalore | Animated Video Services',
    description:
      'We are a trusted 2D animation studio in Bangalore creating engaging animated videos for brands, products, marketing and business communication.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: '2D Animation Studio in Bangalore',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7th Floor, Magnolia, Prestige Shantiniketan',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      postalCode: '560048',
      addressCountry: 'IN',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Bangalore' },
    { '@type': 'City', name: 'Whitefield' },
    { '@type': 'City', name: 'Electronic City' },
    { '@type': 'City', name: 'Koramangala' },
    { '@type': 'City', name: 'Indiranagar' },
  ],
  serviceType: [
    '2D Animation',
    'Explainer Video',
    'Animated Explainer Video',
    'Character Animation',
    'Whiteboard Animation',
    'Motion Graphics',
    'Product Explainer Video',
  ],
  description:
    '2D animation studio in Bangalore — explainer videos, animated explainer videos, character animation, whiteboard animation, motion graphics and product explainer videos for Bangalore businesses.',
  url: `${SITE.url}/2d-animation-studio-in-bangalore`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Explainer Video Bangalore — Starter',
      price: '20000',
      priceCurrency: 'INR',
      description: '60-second animated explainer video — script, storyboard, 2D animation, voiceover and music.',
    },
    {
      '@type': 'Offer',
      name: 'Character Animation & Motion Graphics Bangalore',
      price: '50000',
      priceCurrency: 'INR',
      description: 'Full character animation or motion graphics video up to 2 minutes — custom characters, detailed animation, voiceover and sound design.',
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
      name: 'Corporate Video Production Bangalore',
      item: `${SITE.url}/corporate-video-production-company-in-bangalore`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: '2D Animation Studio in Bangalore',
      item: `${SITE.url}/2d-animation-studio-in-bangalore`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best 2D animation studio in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Bangalore's top-rated 2D animation studios — 565+ projects delivered, 4.9★ Google rating, headquartered in Whitefield, Bangalore. We produce animated explainer videos, character animation, whiteboard animation, motion graphics and product explainer videos for Bangalore businesses.",
      },
    },
    {
      '@type': 'Question',
      name: 'What animation services does NNC provide in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Bangalore provides full 2D animation services — animated explainer videos, character animation, whiteboard animation, motion graphics, product explainer videos, SaaS onboarding videos, training animations and social media animated content.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you produce animated explainer videos for Bangalore businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC produces animated explainer videos for Bangalore businesses — script writing, storyboarding, 2D character animation, motion graphics, professional voiceover and music. Explainer videos for websites, app stores, investor decks and social media.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you create character animation videos in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC creates character animation for Bangalore brands — custom 2D characters designed to match your brand identity, lip-synced to voiceover with expressive movement and scene transitions. Ideal for brand mascot videos, training content and storytelling campaigns.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you produce motion graphics videos for Bangalore businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC produces motion graphics for Bangalore companies — data visualisation animations, kinetic typography, logo animations, social media motion graphics and motion graphics for corporate presentations and broadcast.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does an animated explainer video cost in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 60-second animated explainer video in Bangalore starts from ₹20,000 — covering script, storyboard, 2D animation, voiceover and music. Character animation and motion graphics videos up to 2 minutes typically cost ₹50,000–₹1,20,000. All fixed-price — no hourly billing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a 2D animation studio office in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital is headquartered at Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit us to review animation style references, approve storyboards and meet the animation team working on your project.',
      },
    },
  ],
}

const data = {
  badge: '2D Animation Studio · Bangalore',
  h1: '2D Animation Studio',
  h1Accent: 'in Bangalore',
  tagline:
    'Top 2D animation studio in Bangalore — animated explainer videos, character animation studio, whiteboard animation, motion graphics company, product explainer video & animation services. Fixed price.',
  desc:
    'NNC Digital is a full-service 2D animation studio in Bangalore producing animated explainer videos, character animation, whiteboard animation, motion graphics and product explainer videos for startups, SaaS companies, FMCG brands and enterprises. Every animation is crafted by our in-house Bangalore animation team — script, storyboard, design, animation, voiceover and delivery — with zero outsourcing and fixed-price projects.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: '2D animation in Bangalore',
  h2Features: '2D Animation Services in Bangalore',
  features: [
    {
      h3: '2D Animation Company Bangalore',
      desc: 'Full-service 2D animation production in Bangalore — script writing, storyboarding, character design, scene animation, voiceover direction, music and sound design. End-to-end animation delivery for any platform or format.',
    },
    {
      h3: 'Explainer Video Company Bangalore',
      desc: 'Animated explainer video production for Bangalore businesses — clear, engaging 60–90 second videos that explain your product, service or process. Ideal for website hero sections, app store listings and sales decks.',
    },
    {
      h3: 'Animated Explainer Videos Bangalore',
      desc: 'Custom animated explainer videos for Bangalore startups and SaaS companies — 2D animation style tailored to your brand, professional voiceover, background music and delivered in MP4, GIF and web-optimised formats.',
    },
    {
      h3: 'Character Animation Studio Bangalore',
      desc: 'Character animation for Bangalore brands — custom 2D characters designed around your brand identity, lip-synced to voiceover with expressive movement. Brand mascot videos, training content and storytelling campaigns.',
    },
    {
      h3: 'Whiteboard Animation Bangalore',
      desc: 'Whiteboard animation videos for Bangalore businesses — hand-drawn style animations that simplify complex concepts, explain workflows and engage audiences. Popular for training videos, educational content and B2B explainers.',
    },
    {
      h3: 'Motion Graphics Company Bangalore',
      desc: 'Motion graphics for Bangalore companies — data visualisation, kinetic typography, logo animations, social media motion graphics and motion graphics for corporate presentations, broadcast and digital advertising.',
    },
    {
      h3: 'Animation Services Bangalore — SaaS & Tech',
      desc: 'Animation services for Bangalore SaaS and tech companies — product demo animations, feature walkthrough videos, onboarding animations and investor pitch animations that make complex software easy to understand.',
    },
    {
      h3: 'Product Explainer Video Bangalore',
      desc: 'Product explainer video production for Bangalore brands — animated product demos, feature highlight videos, unboxing animations and ecommerce product videos for website, Amazon, Flipkart and social media.',
    },
    {
      h3: '2D Animation Bangalore — Social Media Content',
      desc: 'Animated social media content for Bangalore brands — Instagram Reels animations, Facebook animated posts, LinkedIn motion graphics and YouTube animated intros. Short-form animated content that stops the scroll.',
    },
  ],
  h2Why: 'Why Choose NNC as Your 2D Animation Studio in Bangalore?',
  why: [
    {
      n: '01',
      h3: 'Bangalore headquarters — review storyboards in person',
      body: 'NNC is headquartered at Prestige Shantiniketan, Whitefield, Bangalore. Visit us to review animation style references, approve storyboards and meet the animators working on your project.',
    },
    {
      n: '02',
      h3: 'In-house animation team — zero outsourcing',
      body: 'Every scriptwriter, storyboard artist, 2D animator and sound designer is a full-time NNC employee in Bangalore. Consistent creative team from brief to final delivery — no freelancers, no offshore outsourcing.',
    },
    {
      n: '03',
      h3: 'Script-first approach — clarity before animation',
      body: 'NNC starts every animation project with a script review. A clear, well-structured script is more important than animation style. We refine your message before a single frame is drawn.',
    },
    {
      n: '04',
      h3: 'All animation styles — 2D, motion graphics, whiteboard, character',
      body: 'NNC produces every animation style under one roof — 2D flat animation, character animation, whiteboard, kinetic typography and motion graphics. One studio for all your animation needs.',
    },
    {
      n: '05',
      h3: 'Fixed price — fully scoped before production starts',
      body: 'Every animation project is scoped and priced upfront — script, storyboard, animation duration and revision rounds. No hourly billing, no surprise charges after the storyboard is approved.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has produced animation for SaaS, healthcare, education, FMCG and enterprise businesses across Bangalore. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['Adobe Animate', 'After Effects', 'Illustrator', 'Moho', 'DaVinci Resolve', 'Adobe Audition', 'Figma', 'Premiere Pro'],
  h2Tech: 'Animation Tools & Software',
  h2Faq: '2D Animation Studio Bangalore — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best 2D animation studio in Bangalore?',
      a: "NNC Digital is among Bangalore's top 2D animation studios — 565+ projects, 4.9★ Google rating, headquartered in Whitefield. Explainer videos, character animation, whiteboard animation and motion graphics — all in-house.",
    },
    {
      q: 'Do you produce animated explainer videos in Bangalore?',
      a: 'Yes. NNC produces animated explainer videos for Bangalore businesses — script, storyboard, 2D animation, voiceover and music. For website, app store and sales decks.',
    },
    {
      q: 'Do you create character animation videos in Bangalore?',
      a: 'Yes. NNC creates custom 2D character animation for Bangalore brands — brand mascot videos, training content and storytelling campaigns.',
    },
    {
      q: 'Do you produce motion graphics in Bangalore?',
      a: 'Yes. NNC produces motion graphics for Bangalore companies — data visualisation, kinetic typography, logo animations and social media motion graphics.',
    },
    {
      q: 'How much does an animated explainer video cost in Bangalore?',
      a: 'A 60-second explainer video starts from ₹20,000. Character animation and motion graphics up to 2 minutes start from ₹50,000. Fixed-price — no hourly billing.',
    },
    {
      q: 'Do you have a 2D animation studio office in Bangalore?',
      a: 'Yes. NNC is headquartered at Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit us to review storyboards and meet the animation team.',
    },
  ],
}

export default function AnimationStudioBangalorePage() {
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
