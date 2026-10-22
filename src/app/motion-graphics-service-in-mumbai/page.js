import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Motion Graphics Service in Mumbai | Digital Animation',
  description:
    'NNC provides motion graphics service in Mumbai to create engaging visuals,delivering creative animation solutions for branding, marketing, and business growth.',
  alternates: {
    canonical: `${SITE.url}/motion-graphics-service-in-mumbai`,
  },
  keywords:
    'motion graphics service in mumbai, motion graphics mumbai, motion graphics company mumbai, motion graphics agency mumbai, motion graphics design mumbai, digital animation mumbai, motion graphics video mumbai, after effects animation mumbai, motion design service mumbai, animated graphics mumbai',
  openGraph: {
    title: 'Motion Graphics Service in Mumbai | Digital Animation',
    description:
      'NNC provides motion graphics service in Mumbai to create engaging visuals,delivering creative animation solutions for branding, marketing, and business growth.',
    url: `${SITE.url}/motion-graphics-service-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Motion Graphics Service in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Motion Graphics Service in Mumbai | Digital Animation',
    description:
      'NNC provides motion graphics service in Mumbai to create engaging visuals,delivering creative animation solutions for branding, marketing, and business growth.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Motion Graphics Service in Mumbai',
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
    'Motion Graphics Service',
    'Digital Animation',
    'Motion Graphics Design',
    'After Effects Animation',
    'Animated Video Production',
    'Logo Animation',
    'Explainer Video Animation',
  ],
  description:
    'Motion graphics service in Mumbai — engaging visuals and creative animation solutions for branding, marketing and business growth. In-house animators, branch office in Thane West.',
  url: `${SITE.url}/motion-graphics-service-in-mumbai`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Motion Graphics Video Mumbai',
      price: '20000',
      priceCurrency: 'INR',
      description: 'Custom motion graphics video up to 60 seconds for brand, marketing or social media.',
    },
    {
      '@type': 'Offer',
      name: 'Explainer Motion Graphics Mumbai',
      price: '35000',
      priceCurrency: 'INR',
      description: 'Full explainer video with motion graphics, voiceover and background music up to 90 seconds.',
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
      name: 'Motion Graphics Service in Mumbai',
      item: `${SITE.url}/motion-graphics-service-in-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What motion graphics services does NNC offer in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC provides comprehensive motion graphics services in Mumbai — explainer videos, logo animations, brand intro videos, social media motion graphics, UI animations, video infographics, After Effects animations and kinetic typography. All created by our in-house motion designers.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why choose NNC for motion graphics service in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Mumbai's top-rated creative agencies — 565+ projects delivered, 4.9★ Google rating, branch office in Thane West. Our in-house motion designers create engaging visuals and creative animation solutions tailored to your branding and marketing objectives.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does motion graphics service cost in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A custom motion graphics video up to 60 seconds starts from ₹20,000. A full explainer video with voiceover and music starts from ₹35,000. All projects are fixed-price — fully scoped before production begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'What software does NNC use for motion graphics in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC uses Adobe After Effects, Premiere Pro, Illustrator and Cinema 4D for motion graphics production in Mumbai. Our motion designers deliver broadcast-quality animations optimised for digital platforms, social media and video production.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can motion graphics help with branding for Mumbai businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Motion graphics significantly enhance brand identity — animated logos, brand intro videos and consistent motion design language create a professional and memorable brand experience across all digital touchpoints for Mumbai businesses.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you create motion graphics for social media in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC creates social media motion graphics for Mumbai brands — animated Instagram posts, story templates, YouTube intros, LinkedIn video content and short-form Reels optimised for each platform format and algorithm.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a motion graphics studio in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to review motion graphics storyboards and discuss your animation brief with our Mumbai design team.',
      },
    },
  ],
}

const data = {
  badge: 'Motion Graphics Service · Mumbai',
  h1: 'Motion Graphics Service',
  h1Accent: 'in Mumbai',
  tagline:
    'Creative motion graphics service in Mumbai — engaging visuals, digital animation and animated solutions for branding, marketing and business growth. In-house designers. Office in Thane West. Fixed price.',
  desc:
    "NNC Digital provides motion graphics service in Mumbai creating engaging visuals and creative animation solutions for startups, SMEs and enterprises across Mumbai, Thane and Navi Mumbai. Our in-house motion designers deliver digital animation, explainer videos, logo animations, social media motion graphics and brand intro videos — all tailored for branding, marketing and business growth with zero outsourcing.",
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'motion graphics service in Mumbai',
  h2Features: 'Motion Graphics Services We Offer in Mumbai',
  features: [
    {
      h3: 'Explainer Video Motion Graphics Mumbai',
      desc: 'Animated explainer videos with motion graphics — scripted, designed and animated to explain your product, service or process clearly. Up to 90 seconds, delivered with voiceover and background music for Mumbai businesses.',
    },
    {
      h3: 'Logo Animation Mumbai',
      desc: 'Professional logo animations for Mumbai brands — sting animations, reveal effects and looping logo intros for website headers, YouTube intros, video bumpers and digital brand presentations.',
    },
    {
      h3: 'Brand Intro & Outro Videos Mumbai',
      desc: 'Branded intro and outro animations for YouTube channels, corporate videos and social media — consistent motion design identity that reinforces your brand across every Mumbai video touchpoint.',
    },
    {
      h3: 'Social Media Motion Graphics Mumbai',
      desc: 'Animated social media content for Instagram, LinkedIn and YouTube — story templates, post animations, Reels graphics and short-form video content designed for platform algorithms and Mumbai audiences.',
    },
    {
      h3: 'Video Infographics Mumbai',
      desc: 'Animated data visualisations and video infographics for Mumbai businesses — charts, statistics and complex information brought to life with motion graphics for presentations, reports and marketing content.',
    },
    {
      h3: 'After Effects Animation Mumbai',
      desc: 'Custom After Effects animations for Mumbai brands — kinetic typography, particle effects, UI animations, screen recordings with motion overlays and complex composition work for digital marketing.',
    },
    {
      h3: 'UI & App Animation Mumbai',
      desc: 'UI motion design and app animations for Mumbai product teams — micro-interactions, onboarding animations, prototype animations and design system motion guidelines for web and mobile applications.',
    },
    {
      h3: 'Corporate Presentation Animation Mumbai',
      desc: 'Animated PowerPoint and Google Slides presentations for Mumbai businesses — motion graphics slides, animated charts, transition effects and professional visual design for pitches and boardroom presentations.',
    },
    {
      h3: 'Motion Graphics for Video Production Mumbai',
      desc: 'Motion graphics integrated into video production for Mumbai projects — lower thirds, title cards, animated overlays, transitions, end screens and full motion design packages for corporate video and ad films.',
    },
  ],
  h2Why: 'Why Choose NNC for Motion Graphics Service in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — review animations in person',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to review motion graphics storyboards, preview animations and discuss your brief with our in-house Mumbai design team.',
    },
    {
      n: '02',
      h3: 'In-house motion designers — zero outsourcing',
      body: 'Every motion graphics designer and animator is a full-time NNC employee. Consistent creative quality, consistent style and consistent accountability — no freelancers, no offshore animators.',
    },
    {
      n: '03',
      h3: 'Creative solutions built for marketing goals',
      body: "NNC's motion designers create animations with a clear marketing objective — brand awareness, engagement or conversion. Every visual decision is made to support your Mumbai business growth, not just to look impressive.",
    },
    {
      n: '04',
      h3: 'Optimised for every digital platform',
      body: 'Every motion graphics deliverable is optimised for its intended platform — YouTube, Instagram, LinkedIn, website or presentation. Correct aspect ratios, file formats and compression for smooth playback everywhere.',
    },
    {
      n: '05',
      h3: 'Fixed price — no surprise invoices',
      body: 'Every motion graphics project is scoped and priced upfront — video duration, complexity, revisions and deliverables all agreed in writing. No hourly billing, no surprise charges.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has delivered motion graphics and animation projects for Mumbai businesses across tech, FMCG, real estate, healthcare and finance. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['After Effects', 'Premiere Pro', 'Illustrator', 'Cinema 4D', 'Lottie', 'Figma', 'Audition', 'Media Encoder'],
  h2Tech: 'Motion Graphics Technology Stack',
  h2Faq: 'Motion Graphics Service Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'What motion graphics services does NNC offer in Mumbai?',
      a: 'Explainer videos, logo animations, brand intros, social media motion graphics, video infographics, After Effects animations and UI animations — all by in-house motion designers.',
    },
    {
      q: 'How much does motion graphics service cost in Mumbai?',
      a: 'A motion graphics video up to 60 seconds starts from ₹20,000. A full explainer video starts from ₹35,000. All fixed-price — fully scoped before production begins.',
    },
    {
      q: 'Do you create motion graphics for social media in Mumbai?',
      a: 'Yes. NNC creates animated Instagram posts, story templates, YouTube intros, LinkedIn videos and short-form Reels — optimised for each platform format.',
    },
    {
      q: 'Can motion graphics help with branding in Mumbai?',
      a: 'Yes. Animated logos, brand intros and consistent motion design create a professional brand identity across all digital touchpoints for Mumbai businesses.',
    },
    {
      q: 'What software do you use for motion graphics in Mumbai?',
      a: 'Adobe After Effects, Premiere Pro, Illustrator and Cinema 4D — broadcast-quality animations optimised for digital platforms and social media.',
    },
    {
      q: 'Do you have a motion graphics studio in Mumbai?',
      a: 'Yes. NNC has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to review storyboards and discuss your animation brief.',
    },
  ],
}

export default function MotionGraphicsServiceMumbaiPage() {
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
