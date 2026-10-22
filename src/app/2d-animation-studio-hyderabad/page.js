import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: '2D Animation Studio Hyderabad | Creative Animation Studio',
  description:
    'Choose our 2D animation studio Hyderabad to create engaging animated videos, with NNC delivering creative animation solutions for branding, marketing.',
  alternates: {
    canonical: `${SITE.url}/2d-animation-studio-hyderabad`,
  },
  keywords:
    '2d animation studio hyderabad, 2d animation hyderabad, animation studio hyderabad, explainer video company hyderabad, animated video hyderabad, 2d animation company hyderabad, whiteboard animation hyderabad, character animation hyderabad, motion graphics hyderabad, animated explainer video hyderabad',
  openGraph: {
    title: '2D Animation Studio Hyderabad | Creative Animation Studio',
    description:
      'Choose our 2D animation studio Hyderabad to create engaging animated videos, with NNC delivering creative animation solutions for branding, marketing.',
    url: `${SITE.url}/2d-animation-studio-hyderabad`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: '2D Animation Studio Hyderabad – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: '2D Animation Studio Hyderabad | Creative Animation Studio',
    description:
      'Choose our 2D animation studio Hyderabad to create engaging animated videos, with NNC delivering creative animation solutions for branding, marketing.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: '2D Animation Studio Hyderabad',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4th Floor, Skootr, Salarpuria Sattva Knowledge City',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: '500081',
      addressCountry: 'IN',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Hyderabad' },
    { '@type': 'City', name: 'Secunderabad' },
    { '@type': 'City', name: 'HITEC City' },
    { '@type': 'City', name: 'Gachibowli' },
    { '@type': 'City', name: 'Banjara Hills' },
  ],
  serviceType: [
    '2D Animation',
    'Explainer Video Production',
    'Whiteboard Animation',
    'Character Animation',
    'Motion Graphics',
    'Animated Explainer Video',
    'Brand Animation',
  ],
  description:
    '2D animation studio in Hyderabad — engaging animated videos and creative animation solutions for branding and marketing. In-house animators.',
  url: `${SITE.url}/2d-animation-studio-hyderabad`,
  offers: [
    {
      '@type': 'Offer',
      name: '2D Explainer Video Hyderabad',
      price: '25000',
      priceCurrency: 'INR',
      description: 'Custom 2D animated explainer video up to 90 seconds with voiceover and background music.',
    },
    {
      '@type': 'Offer',
      name: 'Brand Animation Video Hyderabad',
      price: '35000',
      priceCurrency: 'INR',
      description: 'Full brand animation video with 2D characters, motion graphics and professional audio.',
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
      name: '2D Animation Studio',
      item: `${SITE.url}/2d-animation-studio-in-bangalore`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: '2D Animation Studio Hyderabad',
      item: `${SITE.url}/2d-animation-studio-hyderabad`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best 2D animation studio in Hyderabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Hyderabad's top-rated 2D animation studios — 565+ projects delivered, 4.9★ Google rating. Our in-house animators create engaging animated videos and creative animation solutions for branding and marketing.",
      },
    },
    {
      '@type': 'Question',
      name: 'What 2D animation services does NNC offer in Hyderabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC provides full 2D animation services in Hyderabad — explainer videos, character animation, whiteboard animation, motion graphics, logo animations, brand animation videos, social media animated content and e-learning animations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does 2D animation cost in Hyderabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 2D animated explainer video up to 90 seconds starts from ₹25,000. A full brand animation video starts from ₹35,000. All projects are fixed-price — fully scoped before production begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you create explainer videos for Hyderabad businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC creates animated explainer videos for Hyderabad businesses — scripted, illustrated and animated to explain products, services or processes clearly. Delivered with professional voiceover and background music.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you create whiteboard animation videos in Hyderabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC creates whiteboard animation videos for Hyderabad businesses — hand-drawn style animations ideal for educational content, process explanations and training videos.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does 2D animation take in Hyderabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard 2D explainer video takes 2–3 weeks from brief to delivery. A full brand animation takes 3–4 weeks. All timelines include scripting, storyboarding, animation and audio — agreed before work begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can 2D animation help Hyderabad businesses with marketing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Animated videos significantly improve marketing performance for Hyderabad businesses — higher engagement, better message retention and improved conversion rates on websites, social media and ad campaigns.',
      },
    },
  ],
}

const data = {
  badge: '2D Animation Studio · Hyderabad',
  h1: '2D Animation Studio',
  h1Accent: 'Hyderabad',
  tagline:
    'Creative 2D animation studio in Hyderabad — engaging animated videos, explainer videos, motion graphics and brand animation for marketing and business growth. In-house animators. Fixed price.',
  desc:
    "NNC Digital's 2D animation studio creates engaging animated videos and creative animation solutions for Hyderabad startups, tech companies, SMEs and enterprises. Our in-house animators deliver explainer videos, character animation, whiteboard animation and motion graphics — all scripted and produced in-house for branding and marketing with zero outsourcing and fixed-price packages.",
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: '2D animation in Hyderabad',
  h2Features: '2D Animation Services in Hyderabad',
  features: [
    {
      h3: 'Animated Explainer Videos Hyderabad',
      desc: 'Custom 2D animated explainer videos for Hyderabad businesses — scripted, illustrated and animated to explain products, services or processes clearly. Up to 90 seconds with voiceover and background music.',
    },
    {
      h3: '2D Character Animation Hyderabad',
      desc: '2D character animation for Hyderabad brands — custom illustrated characters, character-driven explainers and mascot animations that create emotional connection with your audience.',
    },
    {
      h3: 'Whiteboard Animation Hyderabad',
      desc: 'Whiteboard animated videos for Hyderabad businesses — hand-drawn style ideal for educational content, process explanations, training videos and complex concept simplification.',
    },
    {
      h3: 'Motion Graphics Videos Hyderabad',
      desc: 'Motion graphics for Hyderabad businesses — kinetic typography, data visualisation, icon animations and After Effects motion design for marketing, presentations and social media.',
    },
    {
      h3: 'Brand Animation Videos Hyderabad',
      desc: "Brand animation videos for Hyderabad companies — brand story animations, product launch videos and brand identity motion design that communicate your brand's values in an engaging format.",
    },
    {
      h3: 'Logo Animation Hyderabad',
      desc: 'Professional logo animations for Hyderabad brands — animated reveals, sting animations and looping logo intros for YouTube channels, website headers and video bumpers.',
    },
    {
      h3: 'Social Media Animated Content Hyderabad',
      desc: 'Short-form animated content for Instagram Reels, YouTube Shorts and LinkedIn — looping animations, story templates and motion graphics optimised for Hyderabad social media audiences.',
    },
    {
      h3: 'Product Demo Animation Hyderabad',
      desc: 'Animated product demo videos for Hyderabad startups and tech companies — app walkthroughs, SaaS product animations, UI demo videos and feature highlights for websites and pitch decks.',
    },
    {
      h3: 'E-learning & Training Animation Hyderabad',
      desc: 'Animated training and e-learning videos for Hyderabad businesses — structured, scripted and animated for LMS platforms with clear visual demonstrations and professional narration.',
    },
  ],
  h2Why: 'Why Choose NNC as Your 2D Animation Studio in Hyderabad?',
  why: [
    {
      n: '01',
      h3: 'Serving Hyderabad — HITEC City to Secunderabad',
      body: "NNC serves Hyderabad's tech and business corridor — HITEC City, Gachibowli, Banjara Hills and Secunderabad. Remote-first with video reviews, storyboard previews and full production transparency.",
    },
    {
      n: '02',
      h3: 'In-house animators — zero outsourcing',
      body: 'Every animator, illustrator and motion designer is a full-time NNC employee. Consistent creative quality, consistent style and consistent accountability — no freelancers, no offshore animators.',
    },
    {
      n: '03',
      h3: 'Script-first approach — clarity before animation',
      body: "NNC's animators write the script before a single frame is drawn. Every animation starts with a clear message and call to action — ensuring your video communicates, not just entertains.",
    },
    {
      n: '04',
      h3: 'Full production included — script, audio, animation',
      body: 'Every animated video includes scriptwriting, voiceover, background music, sound effects and motion design. No extra invoices for audio or revision rounds within scope.',
    },
    {
      n: '05',
      h3: 'Fixed price — no surprise invoices',
      body: 'Every animation project is scoped and priced upfront — duration, style, revisions and deliverables agreed in writing. No hourly billing, no surprise charges.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has created animated videos for tech companies, startups, ecommerce brands and enterprises. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['After Effects', 'Illustrator', 'Animate CC', 'Premiere Pro', 'Audition', 'Cinema 4D', 'Lottie', 'Figma'],
  h2Tech: 'Animation Production Tools',
  h2Faq: '2D Animation Studio Hyderabad — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best 2D animation studio in Hyderabad?',
      a: "NNC Digital — 565+ projects, 4.9★ Google rating. Engaging animated videos and creative animation solutions for branding and marketing in Hyderabad.",
    },
    {
      q: 'How much does 2D animation cost in Hyderabad?',
      a: 'Animated explainer video from ₹25,000. Brand animation video from ₹35,000. All fixed-price — fully scoped before production begins.',
    },
    {
      q: 'Do you create explainer videos for Hyderabad businesses?',
      a: 'Yes. Custom 2D animated explainer videos — scripted, illustrated and animated with voiceover and background music.',
    },
    {
      q: 'Do you create whiteboard animation in Hyderabad?',
      a: 'Yes. Whiteboard animations ideal for educational content, process explanations and training videos.',
    },
    {
      q: 'How long does 2D animation take in Hyderabad?',
      a: 'Explainer video: 2–3 weeks. Brand animation: 3–4 weeks. All timelines agreed before work begins.',
    },
    {
      q: 'Can animation help Hyderabad businesses with marketing?',
      a: 'Yes. Animated videos improve engagement, message retention and conversion rates on websites, social media and ad campaigns.',
    },
  ],
}

export default function AnimationStudioHyderabadPage() {
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
