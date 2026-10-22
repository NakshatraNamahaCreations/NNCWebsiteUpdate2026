import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Corporate Video Makers in Mumbai | Promotional Video',
  description:
    'Choose corporate video makers in Mumbai to create impactful brand videos, with NNC delivering professional video production for marketing and business growth.',
  alternates: {
    canonical: `${SITE.url}/corporate-video-makers-in-mumbai`,
  },
  keywords:
    'corporate video makers in mumbai, corporate video makers mumbai, promotional video makers mumbai, brand video makers mumbai, corporate video creator mumbai, professional video makers mumbai, promotional video production mumbai, business video makers mumbai, corporate promotional video mumbai',
  openGraph: {
    title: 'Corporate Video Makers in Mumbai | Promotional Video',
    description:
      'Choose corporate video makers in Mumbai to create impactful brand videos, with NNC delivering professional video production for marketing and business growth.',
    url: `${SITE.url}/corporate-video-makers-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Corporate Video Makers in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Corporate Video Makers in Mumbai | Promotional Video',
    description:
      'Choose corporate video makers in Mumbai to create impactful brand videos, with NNC delivering professional video production for marketing and business growth.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Corporate Video Makers in Mumbai',
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
    'Corporate Video Making',
    'Promotional Video Production',
    'Brand Video Production',
    'Corporate Video Production',
    'Marketing Video Production',
    'Business Video Making',
  ],
  description:
    'Corporate video makers in Mumbai — impactful brand videos and promotional video production for marketing and business growth. In-house crew, branch office in Thane West.',
  url: `${SITE.url}/corporate-video-makers-in-mumbai`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Promotional Video Mumbai',
      price: '30000',
      priceCurrency: 'INR',
      description: 'Promotional video for brand, product or service — scripted, shot and edited for digital marketing.',
    },
    {
      '@type': 'Offer',
      name: 'Corporate Brand Video Mumbai',
      price: '50000',
      priceCurrency: 'INR',
      description: 'Full corporate brand video with professional crew, colour grading and sound design.',
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
      name: 'Corporate Video Production Company Mumbai',
      item: `${SITE.url}/corporate-video-production-company-in-mumbai`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Corporate Video Makers in Mumbai',
      item: `${SITE.url}/corporate-video-makers-in-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I find the best corporate video makers in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital has among Mumbai's best corporate video makers — 200+ videos produced, 4.9★ Google rating, branch office in Thane West. Our in-house team creates impactful brand videos and promotional videos for marketing and business growth.",
      },
    },
    {
      '@type': 'Question',
      name: 'What types of corporate videos do NNC video makers produce in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC's corporate video makers in Mumbai produce promotional videos, brand videos, company overview videos, product videos, ad films, social media video content, testimonial videos and event films — all scripted, shot and edited by our in-house production team.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to hire corporate video makers in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A promotional video starts from ₹30,000. A full corporate brand video starts from ₹50,000. All projects are fixed-price — fully scoped before production begins with no surprise invoices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do NNC corporate video makers produce promotional videos in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. NNC's video makers in Mumbai produce promotional videos for brands, products and services — scripted for clear marketing objectives, shot with professional crew and delivered for website, YouTube, social media and digital ad campaigns.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can corporate video makers help grow my Mumbai business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Professional corporate videos significantly improve marketing performance — higher website engagement, better conversion rates and stronger brand trust. NNC designs every video for a clear business goal: leads, brand awareness or sales.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do NNC video makers handle the full production process in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. NNC's corporate video makers in Mumbai handle everything — concept development, scriptwriting, storyboarding, shoot production, editing, colour grading, sound design and final delivery. One team, one contract, zero outsourcing.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do NNC corporate video makers have an office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to discuss your video brief, review scripts and plan your shoot with our Mumbai video makers.',
      },
    },
  ],
}

const data = {
  badge: 'Corporate Video Makers · Mumbai',
  h1: 'Corporate Video Makers',
  h1Accent: 'in Mumbai',
  tagline:
    'Expert corporate video makers in Mumbai — impactful brand videos, promotional videos and professional video production for marketing and business growth. In-house crew. Office in Thane West. Fixed price.',
  desc:
    "NNC Digital's corporate video makers in Mumbai create impactful brand videos and promotional videos for startups, SMEs and enterprises across Mumbai, Thane and Navi Mumbai. Our in-house production team handles everything — concept, script, shoot, editing, colour grading and sound design — delivering professional corporate videos for marketing, website, YouTube and social media that drive measurable business growth.",
  stat1: '200+',
  stat1Label: 'Videos Produced',
  serviceName: 'corporate video making in Mumbai',
  h2Features: 'Corporate Video Making Services in Mumbai',
  features: [
    {
      h3: 'Promotional Video Production Mumbai',
      desc: 'Promotional videos for brands, products and services — scripted for clear marketing objectives, shot with professional crew and delivered for website, YouTube, social media and paid digital campaigns.',
    },
    {
      h3: 'Brand Video Making Mumbai',
      desc: "Impactful brand videos that communicate your company's story, values and culture — cinematic production quality with colour grading and sound design, ready for website and digital brand campaigns.",
    },
    {
      h3: 'Corporate Video Production Mumbai',
      desc: 'End-to-end corporate video production — concept, script, storyboard, shoot, editing and post-production. Delivered for LinkedIn, YouTube, internal communications and investor presentations.',
    },
    {
      h3: 'Product Promotional Video Mumbai',
      desc: 'Promotional product videos for Mumbai ecommerce and D2C brands — lifestyle shoots, feature highlights, unboxing videos and quick-cut social reels for websites, Amazon and Instagram.',
    },
    {
      h3: 'Social Media Video Making Mumbai',
      desc: 'Short-form promotional video content for Instagram Reels, YouTube Shorts and LinkedIn — scripted, shot and edited in vertical and horizontal formats for Mumbai brands with active social channels.',
    },
    {
      h3: 'Ad Film & Commercial Video Mumbai',
      desc: 'TV and digital ad film production for Mumbai brands — concept, script, casting, shoot and full post-production. Delivered for TV, YouTube pre-roll, OTT platforms and Meta Ads campaigns.',
    },
    {
      h3: 'Testimonial Video Making Mumbai',
      desc: 'Client testimonial and case study videos for Mumbai businesses — authentic customer stories and project results that build trust, reduce sales objections and improve website conversion rates.',
    },
    {
      h3: 'Event Highlight Videos Mumbai',
      desc: 'Multi-camera event coverage and highlight videos — product launches, conferences, award ceremonies and corporate events. Same-day edits for social media and full event films for archives.',
    },
    {
      h3: 'Training & Explainer Video Mumbai',
      desc: 'Training videos and explainer video content for Mumbai businesses — clearly structured, professionally scripted and edited for LMS platforms, onboarding portals and customer education.',
    },
  ],
  h2Why: 'Why Choose NNC as Your Corporate Video Makers in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — brief us in person',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to walk through your video brief, review scripts and storyboards and plan shoot logistics with our Mumbai video making team.',
    },
    {
      n: '02',
      h3: 'In-house crew — zero outsourcing',
      body: 'Every director, cinematographer, editor and motion graphics artist is a full-time NNC employee. Consistent quality, consistent team and consistent accountability on every Mumbai video project.',
    },
    {
      n: '03',
      h3: 'Videos built for business growth — not just viewership',
      body: "NNC's video makers write scripts and design visuals around your business objective — brand awareness, lead generation or sales. Every creative decision serves the goal of growing your Mumbai business.",
    },
    {
      n: '04',
      h3: 'Full post-production included — colour, sound, graphics',
      body: 'Every video includes professional colour grading, sound design, licensed background music and motion graphics. No extra invoices for post-production after the shoot.',
    },
    {
      n: '05',
      h3: 'Fixed price — no surprise invoices',
      body: 'Every video project is scoped and priced upfront — shoot days, crew, locations and deliverables agreed in writing. No hourly billing, no surprise charges for extra edit rounds within scope.',
    },
    {
      n: '06',
      h3: '200+ videos produced — 4.9★ Google rating',
      body: 'NNC has produced 200+ corporate videos, promotional videos and brand films for Mumbai businesses across real estate, FMCG, tech, hospitality and manufacturing. 4.9★ on Google.',
    },
  ],
  techStack: ['Sony FX Series', 'DJI Drones', 'Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Audition', 'Lumetri', 'RED Camera'],
  h2Tech: 'Video Production Equipment & Tools',
  h2Faq: 'Corporate Video Makers Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'Where can I find the best corporate video makers in Mumbai?',
      a: "NNC Digital has among Mumbai's best corporate video makers — 200+ videos, 4.9★ Google rating, office in Thane West. Impactful brand videos and promotional videos for marketing and business growth.",
    },
    {
      q: 'How much does it cost to hire corporate video makers in Mumbai?',
      a: 'A promotional video starts from ₹30,000. A full corporate brand video starts from ₹50,000. All fixed-price — fully scoped before production begins, no surprise invoices.',
    },
    {
      q: 'Do you produce promotional videos for Mumbai businesses?',
      a: 'Yes. NNC produces promotional videos for brands, products and services — scripted for clear marketing objectives, shot with professional crew and delivered for website, YouTube and social media.',
    },
    {
      q: 'Do you handle the full video production process in Mumbai?',
      a: 'Yes. NNC handles everything — concept, script, storyboard, shoot, editing, colour grading, sound design and final delivery. One team, zero outsourcing.',
    },
    {
      q: 'Can corporate videos help grow my Mumbai business?',
      a: 'Yes. Professional corporate videos improve marketing performance — higher engagement, better conversion rates and stronger brand trust. Every NNC video is built for a clear business objective.',
    },
    {
      q: 'Do you have a video making office in Mumbai?',
      a: 'Yes. NNC has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to discuss your video brief and meet the production team.',
    },
  ],
}

export default function CorporateVideoMakersInMumbaiPage() {
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
