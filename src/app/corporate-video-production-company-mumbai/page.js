import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Corporate Video Production Company Mumbai | Brand Video',
  description:
    'Choose our corporate video production company Mumbai to create professional brand videos, with NNC delivering engaging business videos for marketing and growth.',
  alternates: {
    canonical: `${SITE.url}/corporate-video-production-company-mumbai`,
  },
  keywords:
    'corporate video production company mumbai, corporate video production mumbai, corporate video company mumbai, business video production mumbai, brand video production mumbai, corporate videography mumbai, corporate video makers mumbai, professional video production mumbai, corporate film production mumbai',
  openGraph: {
    title: 'Corporate Video Production Company Mumbai | Brand Video',
    description:
      'Choose our corporate video production company Mumbai to create professional brand videos, with NNC delivering engaging business videos for marketing and growth.',
    url: `${SITE.url}/corporate-video-production-company-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Corporate Video Production Company Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Corporate Video Production Company Mumbai | Brand Video',
    description:
      'Choose our corporate video production company Mumbai to create professional brand videos, with NNC delivering engaging business videos for marketing and growth.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Corporate Video Production Company Mumbai',
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
    'Corporate Video Production',
    'Brand Video Production',
    'Business Video Production',
    'Ad Film Production',
    'Drone Video Production',
    'Product Video Shoot',
    'Commercial Video Production',
  ],
  description:
    'Corporate video production company Mumbai — professional brand videos, business videos, ad films, drone video and product shoots for marketing and growth. Branch office in Thane West.',
  url: `${SITE.url}/corporate-video-production-company-mumbai`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Corporate Brand Video Mumbai',
      price: '50000',
      priceCurrency: 'INR',
      description: 'Full corporate brand video — scripted, shot and edited with professional crew for marketing and business growth.',
    },
    {
      '@type': 'Offer',
      name: 'Business Video Production Mumbai',
      price: '25000',
      priceCurrency: 'INR',
      description: 'Professional business video production with scripting, shoot and post-production editing.',
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
      name: 'Corporate Video Production Company in Mumbai',
      item: `${SITE.url}/corporate-video-production-company-in-mumbai`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Corporate Video Production Company Mumbai',
      item: `${SITE.url}/corporate-video-production-company-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best corporate video production company in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Mumbai's best corporate video production companies — 200+ videos produced, 4.9★ Google rating, branch office in Thane West. We create professional brand videos and engaging business videos for marketing and growth.",
      },
    },
    {
      '@type': 'Question',
      name: 'What corporate video production services does NNC offer in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Mumbai offers end-to-end corporate video production — brand videos, business videos, ad film production, drone video, product video shoots, testimonial videos, event coverage and social media video content. Every video is scripted, shot and edited by our in-house production team.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does corporate video production cost in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A corporate brand video in Mumbai starts from ₹50,000. Business video production starts from ₹25,000. Ad film production and drone video projects are scoped based on crew size and shoot days. All projects are fixed-price — no surprise invoices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you produce brand videos for Mumbai businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC produces professional brand videos for Mumbai businesses — company story films, culture videos, product launch videos and brand commercials. Scripted, shot and edited to broadcast quality with full colour grading and sound design.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you produce business videos for marketing in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC produces engaging business videos for marketing across Mumbai — website videos, LinkedIn content, YouTube brand videos, social media reels and email marketing video content. All optimised for digital platforms and business growth.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can corporate videos help grow my Mumbai business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Professional corporate videos significantly improve marketing performance — higher website engagement, better conversion rates and stronger brand trust. NNC designs every corporate video for a clear marketing objective: leads, brand awareness or sales conversions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a corporate video production office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to discuss your video brief, review scripts and plan shoot logistics with our Mumbai production team.',
      },
    },
  ],
}

const data = {
  badge: 'Corporate Video Production · Mumbai',
  h1: 'Corporate Video Production',
  h1Accent: 'Company Mumbai',
  tagline:
    'Professional corporate video production company Mumbai — engaging brand videos, business videos, ad films and product shoots for marketing and growth. In-house crew. Office in Thane West. Fixed price.',
  desc:
    "NNC Digital is a corporate video production company in Mumbai creating professional brand videos and engaging business videos for startups, SMEs and enterprises across Mumbai, Thane and Navi Mumbai. Our in-house production team handles everything — scripting, shooting, editing, colour grading and sound design — delivering high quality corporate videos for marketing, website, YouTube, LinkedIn and social media that drive business growth.",
  stat1: '200+',
  stat1Label: 'Videos Produced',
  serviceName: 'corporate video production in Mumbai',
  h2Features: 'Corporate Video Production Services in Mumbai',
  features: [
    {
      h3: 'Brand Video Production Mumbai',
      desc: 'Professional brand videos that tell your company story — origin, culture, mission and people. NNC\'s Mumbai brand video team handles concept through to colour-graded final cut ready for website, YouTube and digital marketing.',
    },
    {
      h3: 'Business Video Production Mumbai',
      desc: 'Engaging business videos for marketing — company overview videos, service explainer videos, facility tours and executive interviews. Scripted and produced to drive leads and build credibility for Mumbai businesses.',
    },
    {
      h3: 'Corporate Video Production Mumbai',
      desc: 'End-to-end corporate video production — concept, script, storyboard, shoot, editing, colour grading and sound design. Delivered for website, YouTube, LinkedIn and internal communication for Mumbai corporates.',
    },
    {
      h3: 'Ad Film Production Mumbai',
      desc: 'TV and digital ad film production for Mumbai brands — concept development, scriptwriting, casting, shoot production and post-production with colour grading and sound design. Delivered for TV, YouTube and Meta Ads.',
    },
    {
      h3: 'Drone Video Production Mumbai',
      desc: 'DGCA-certified drone video production in Mumbai — aerial footage for real estate, construction sites, events, brand films and corporate overviews. Stunning aerial perspectives with all permissions managed.',
    },
    {
      h3: 'Product Video Shoot Mumbai',
      desc: 'Professional product video shoots for Mumbai ecommerce and D2C brands — studio and on-location shoots, 360° product video, lifestyle footage and social media reels for websites, Amazon and Instagram.',
    },
    {
      h3: 'Testimonial & Case Study Videos Mumbai',
      desc: 'Client testimonial videos and case study films for Mumbai businesses — authentic customer stories, project walkthroughs and results-focused content that builds trust and converts prospects.',
    },
    {
      h3: 'Event & Conference Video Mumbai',
      desc: 'Multi-camera event coverage, conference films, award ceremony videos and product launch films — NNC captures Mumbai corporate events with same-day highlight edits for social media.',
    },
    {
      h3: 'Social Media Video Content Mumbai',
      desc: 'Short-form video content for Instagram Reels, YouTube Shorts and LinkedIn — scripted, shot and edited in vertical and horizontal formats for Mumbai brands with active social media channels.',
    },
  ],
  h2Why: 'Why Choose NNC as Your Corporate Video Production Company in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — brief us in person',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to walk through your video brief, review scripts and plan shoot logistics with our Mumbai production team face-to-face.',
    },
    {
      n: '02',
      h3: 'In-house production crew — zero outsourcing',
      body: 'Every director, cinematographer, editor and motion graphics artist is a full-time NNC employee. Consistent quality, consistent team and consistent accountability on every Mumbai corporate video project.',
    },
    {
      n: '03',
      h3: 'Full post-production included — colour, sound, graphics',
      body: 'Every video includes professional colour grading, sound design, background music licensing and motion graphics. No extra invoices for post-production extras after the shoot.',
    },
    {
      n: '04',
      h3: 'Videos built for marketing — not just showpieces',
      body: 'NNC designs every corporate video for a clear business objective — leads, brand awareness or conversions. Scripts are written to engage your audience and drive the viewer to act.',
    },
    {
      n: '05',
      h3: 'Fixed price — no surprise invoices',
      body: 'Every video project is scoped and priced upfront — shoot days, crew size, locations and post-production deliverables. No hourly billing, no surprise charges for extra edit rounds within scope.',
    },
    {
      n: '06',
      h3: '200+ videos produced — 4.9★ Google rating',
      body: 'NNC has produced 200+ corporate videos, brand films, ad films and product videos for Mumbai businesses across real estate, FMCG, tech, hospitality and manufacturing. 4.9★ on Google.',
    },
  ],
  techStack: ['Sony FX Series', 'DJI Drones', 'Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Audition', 'Lumetri', 'RED Camera'],
  h2Tech: 'Video Production Equipment & Tools',
  h2Faq: 'Corporate Video Production Company Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best corporate video production company in Mumbai?',
      a: "NNC Digital is among Mumbai's best corporate video production companies — 200+ videos produced, 4.9★ Google rating, office in Thane West. Professional brand videos and engaging business videos for marketing and growth.",
    },
    {
      q: 'How much does corporate video production cost in Mumbai?',
      a: 'A corporate brand video starts from ₹50,000. Business video production from ₹25,000. Ad film production scoped by shoot days and crew. All fixed-price — no surprise invoices.',
    },
    {
      q: 'Do you produce brand videos for Mumbai businesses?',
      a: 'Yes. NNC produces professional brand videos — company story films, culture videos, product launch videos and brand commercials. Scripted, shot and edited to broadcast quality.',
    },
    {
      q: 'Do you produce business videos for marketing in Mumbai?',
      a: 'Yes. NNC produces business videos for website, LinkedIn, YouTube and social media — company overviews, service explainers and testimonial videos that drive leads and build credibility.',
    },
    {
      q: 'Do you do drone video production in Mumbai?',
      a: 'Yes. NNC provides DGCA-certified drone video production in Mumbai — aerial footage for real estate, construction, events and brand films. We handle all location permissions.',
    },
    {
      q: 'Do you have a video production office in Mumbai?',
      a: 'Yes. NNC has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to discuss your video brief and plan shoot logistics.',
    },
  ],
}

export default function CorporateVideoProductionCompanyMumbaiPage() {
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
