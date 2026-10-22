import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Animated Video Creators in Mumbai | Brand Animation Service',
  description:
    'We are the best animated video creators in Mumbai to produce engaging visuals, with NNC delivering creative animation solutions for branding and marketing.',
  alternates: {
    canonical: `${SITE.url}/animated-video-creators-in-mumbai`,
  },
  keywords:
    'animated video creators in mumbai, animated video creators mumbai, animation video creators mumbai, animated video production mumbai, brand animation mumbai, animated video company mumbai, animation creators mumbai, animated explainer video creators mumbai, 2d animation creators mumbai',
  openGraph: {
    title: 'Animated Video Creators in Mumbai | Brand Animation Service',
    description:
      'We are the best animated video creators in Mumbai to produce engaging visuals, with NNC delivering creative animation solutions for branding and marketing.',
    url: `${SITE.url}/animated-video-creators-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Animated Video Creators in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Animated Video Creators in Mumbai | Brand Animation Service',
    description:
      'We are the best animated video creators in Mumbai to produce engaging visuals, with NNC delivering creative animation solutions for branding and marketing.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Animated Video Creators in Mumbai',
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
  areaServed: [
    { '@type': 'City', name: 'Mumbai' },
    { '@type': 'City', name: 'Thane' },
    { '@type': 'City', name: 'Navi Mumbai' },
    { '@type': 'City', name: 'Andheri' },
    { '@type': 'City', name: 'BKC' },
  ],
  serviceType: [
    'Animated Video Creation',
    'Brand Animation Service',
    '2D Animation',
    'Explainer Video Animation',
    'Motion Graphics',
    'Whiteboard Animation',
    'Character Animation',
  ],
  description:
    'Animated video creators in Mumbai — engaging animated visuals and creative animation solutions for branding and marketing. In-house animators, branch office in Thane West.',
  url: `${SITE.url}/animated-video-creators-in-mumbai`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Animated Explainer Video Mumbai',
      price: '25000',
      priceCurrency: 'INR',
      description: 'Custom animated explainer video up to 90 seconds with voiceover and background music.',
    },
    {
      '@type': 'Offer',
      name: 'Brand Animation Video Mumbai',
      price: '35000',
      priceCurrency: 'INR',
      description: 'Full brand animation video with 2D character animation, motion graphics and professional audio.',
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
      name: '2D Animation Studio in Mumbai',
      item: `${SITE.url}/2d-animation-studio-in-mumbai`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Animated Video Creators in Mumbai',
      item: `${SITE.url}/animated-video-creators-in-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I find the best animated video creators in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital has among Mumbai's best animated video creators — 565+ projects delivered, 4.9★ Google rating, branch office in Thane West. Our in-house animators produce engaging animated visuals and creative animation solutions for branding and marketing.",
      },
    },
    {
      '@type': 'Question',
      name: 'What types of animated videos does NNC create in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC's animated video creators in Mumbai produce 2D explainer videos, brand animation videos, character animation, motion graphics videos, whiteboard animations, product demo animations, social media animated content and logo animations — all scripted and produced in-house.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does animated video creation cost in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An animated explainer video up to 90 seconds starts from ₹25,000. A full brand animation video starts from ₹35,000. All projects are fixed-price — fully scoped before production begins with no surprise invoices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do NNC animated video creators produce brand animation in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. NNC's animated video creators in Mumbai produce brand animation videos — brand story animations, product launch animations, logo reveals and brand identity motion design that communicates your brand values in an engaging visual format.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can animated videos help with marketing for Mumbai businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Animated videos significantly improve marketing performance — higher engagement rates, better message retention and improved conversion rates on landing pages, social media and email campaigns. NNC designs every animated video for a clear marketing objective.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to create an animated video in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard animated explainer video takes 2–3 weeks from brief to delivery. A full brand animation video takes 3–4 weeks. Timelines include scriptwriting, storyboarding, animation and audio production — all agreed before work begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do NNC animated video creators have an office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to review animation storyboards and discuss your video brief with our Mumbai animators.',
      },
    },
  ],
}

const data = {
  badge: 'Animated Video Creators · Mumbai',
  h1: 'Animated Video Creators',
  h1Accent: 'in Mumbai',
  tagline:
    'Best animated video creators in Mumbai — engaging animated visuals and creative animation solutions for branding and marketing. 2D animation, explainers, motion graphics. Office in Thane West. Fixed price.',
  desc:
    "NNC Digital's animated video creators in Mumbai produce engaging animated visuals and creative animation solutions for startups, SMEs and enterprises across Mumbai, Thane and Navi Mumbai. Our in-house animators deliver 2D animation, explainer videos, brand animation, motion graphics and character animation — all scripted and produced in-house for branding, marketing and business growth with zero outsourcing.",
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'animated video creation in Mumbai',
  h2Features: 'Animated Video Services We Create in Mumbai',
  features: [
    {
      h3: 'Animated Explainer Videos Mumbai',
      desc: 'Custom animated explainer videos for Mumbai businesses — scripted, illustrated and animated to explain your product, service or process clearly. Up to 90 seconds with professional voiceover and background music.',
    },
    {
      h3: 'Brand Animation Videos Mumbai',
      desc: "Brand animation videos that bring your company's story, values and products to life — brand story animations, product launch videos and brand identity motion design for Mumbai businesses.",
    },
    {
      h3: '2D Character Animation Mumbai',
      desc: '2D character animation for Mumbai brands — custom illustrated characters, character-driven explainer videos, mascot animations and storytelling animations that create emotional connection with your audience.',
    },
    {
      h3: 'Motion Graphics Videos Mumbai',
      desc: 'Motion graphics animated videos for Mumbai businesses — kinetic typography, data visualisation animations, icon animations and After Effects motion design for marketing, presentations and social media.',
    },
    {
      h3: 'Whiteboard Animation Mumbai',
      desc: 'Whiteboard animated videos for Mumbai businesses — hand-drawn style animations ideal for educational content, process explanations, training videos and complex concept simplification.',
    },
    {
      h3: 'Product Demo Animation Mumbai',
      desc: 'Animated product demo videos for Mumbai startups and tech companies — app walkthroughs, SaaS product animations, UI demo videos and feature highlight animations for websites and pitch decks.',
    },
    {
      h3: 'Social Media Animated Content Mumbai',
      desc: 'Short-form animated video content for Instagram Reels, YouTube Shorts and LinkedIn — looping animations, animated story templates and brand motion content optimised for Mumbai social media audiences.',
    },
    {
      h3: 'Logo Animation Mumbai',
      desc: 'Professional logo animation for Mumbai brands — animated logo reveals, sting animations and looping logo intros for YouTube channels, website headers, video bumpers and brand presentations.',
    },
    {
      h3: 'Training & E-learning Animation Mumbai',
      desc: 'Animated training videos and e-learning content for Mumbai businesses — structured, scripted and animated for LMS platforms with character narrators, process flows and interactive-style animations.',
    },
  ],
  h2Why: 'Why Choose NNC as Your Animated Video Creators in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — review animations in person',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to review storyboards, preview animation drafts and discuss your brief with our in-house Mumbai animators.',
    },
    {
      n: '02',
      h3: 'In-house animators — zero outsourcing',
      body: 'Every animator, illustrator and motion designer is a full-time NNC employee. Consistent creative quality, consistent style and consistent accountability — no freelancers, no offshore animators.',
    },
    {
      n: '03',
      h3: 'Script-first approach — clarity before animation',
      body: "NNC's animated video creators write the script before a single frame is drawn. Every video starts with a clear message, audience and call to action — ensuring your animation communicates, not just entertains.",
    },
    {
      n: '04',
      h3: 'Full production included — script, audio, animation',
      desc: 'Every animated video includes scriptwriting, voiceover, background music, sound effects and motion design. No extra invoices for audio or revisions within agreed scope.',
      body: 'Every animated video includes scriptwriting, voiceover, background music, sound effects and motion design. No extra invoices for audio or revisions within agreed scope.',
    },
    {
      n: '05',
      h3: 'Fixed price — no surprise invoices',
      body: 'Every animated video project is scoped and priced upfront — duration, style, revisions and deliverables all agreed in writing. No hourly billing, no surprise charges.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has created animated videos for Mumbai businesses across tech, FMCG, healthcare, real estate and finance. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['After Effects', 'Illustrator', 'Animate CC', 'Premiere Pro', 'Audition', 'Cinema 4D', 'Lottie', 'Figma'],
  h2Tech: 'Animation Production Tools',
  h2Faq: 'Animated Video Creators Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'Where can I find the best animated video creators in Mumbai?',
      a: "NNC Digital has among Mumbai's best animated video creators — 565+ projects, 4.9★ Google rating, office in Thane West. Engaging animated visuals and creative animation for branding and marketing.",
    },
    {
      q: 'How much does animated video creation cost in Mumbai?',
      a: 'An animated explainer video starts from ₹25,000. A full brand animation video starts from ₹35,000. All fixed-price — fully scoped before production begins.',
    },
    {
      q: 'How long does it take to create an animated video in Mumbai?',
      a: 'A standard explainer video takes 2–3 weeks. A full brand animation takes 3–4 weeks. All timelines agreed before work begins.',
    },
    {
      q: 'Do you create brand animation videos in Mumbai?',
      a: 'Yes. NNC creates brand story animations, product launch animations and brand identity motion design for Mumbai businesses.',
    },
    {
      q: 'Can animated videos help with marketing in Mumbai?',
      a: 'Yes. Animated videos improve engagement, message retention and conversion rates on landing pages, social media and email campaigns.',
    },
    {
      q: 'Do you have an animation studio in Mumbai?',
      a: 'Yes. NNC has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to review storyboards and discuss your animation brief.',
    },
  ],
}

export default function AnimatedVideoCreatorsInMumbaiPage() {
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
