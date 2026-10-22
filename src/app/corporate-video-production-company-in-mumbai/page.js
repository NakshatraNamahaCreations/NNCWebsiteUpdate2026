import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Corporate Video Production Company in Mumbai | Marketing Video',
  description:
    'Choose a corporate video production company in Mumbai to create brand videos,with NNC delivering professional video solutions for marketing and business growth.',
  alternates: {
    canonical: `${SITE.url}/corporate-video-production-company-in-mumbai`,
  },
  keywords:
    'corporate video production company in mumbai, video production company mumbai, corporate film makers mumbai, brand film production mumbai, ad film production mumbai, drone video production mumbai, product video shoot mumbai, corporate video makers mumbai, commercial video production mumbai',
  openGraph: {
    title: 'Corporate Video Production Company in Mumbai | Marketing Video',
    description:
      'Choose a corporate video production company in Mumbai to create brand videos,with NNC delivering professional video solutions for marketing and business growth.',
    url: `${SITE.url}/corporate-video-production-company-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Corporate Video Production Company in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Corporate Video Production Company in Mumbai | Marketing Video',
    description:
      'Choose a corporate video production company in Mumbai to create brand videos,with NNC delivering professional video solutions for marketing and business growth.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Corporate Video Production Company in Mumbai',
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
    'Brand Film Production',
    'Ad Film Production',
    'Drone Video Production',
    'Product Video Shoot',
    'Commercial Video Production',
    'Corporate Film Making',
  ],
  description:
    'Corporate video production for Mumbai businesses — brand films, ad film production, drone video, product video shoots and commercial video production. Branch office in Thane West.',
  url: `${SITE.url}/corporate-video-production-company-in-mumbai`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Corporate Brand Film Mumbai',
      price: '50000',
      priceCurrency: 'INR',
      description: 'Full corporate brand film — scripted, shot and edited with professional crew.',
    },
    {
      '@type': 'Offer',
      name: 'Product Video Shoot Mumbai',
      price: '25000',
      priceCurrency: 'INR',
      description: 'Professional product video shoot with styling, lighting and post-production editing.',
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
      name: 'Corporate Video Production Company in Mumbai',
      item: `${SITE.url}/corporate-video-production-company-in-mumbai`,
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
        text: "NNC Digital is among Mumbai's top-rated corporate video production companies — 565+ projects delivered, 4.9★ Google rating, branch office in Thane West. We produce brand films, ad films, drone video, product shoots and commercial videos for Mumbai businesses.",
      },
    },
    {
      '@type': 'Question',
      name: 'What types of corporate videos does NNC produce in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Mumbai produces corporate brand films, ad film production, drone and aerial video, product video shoots, testimonial videos, event coverage, commercial video production, training films and social media video content — all scripted, shot and edited by our in-house production team.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does corporate video production cost in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A corporate brand film in Mumbai starts from ₹50,000. Product video shoots start from ₹25,000. Ad film production and drone video projects are scoped based on crew size, shoot days and post-production requirements. All projects are fixed-price — no surprise invoices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you do drone video production in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides drone video production in Mumbai for aerial footage of office buildings, construction sites, events, real estate projects and brand films. Our drone operators are DGCA-certified and handle all necessary permissions for Mumbai shoot locations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you produce ad films for Mumbai brands?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC produces ad film production for Mumbai brands — concept development, scriptwriting, casting, shoot production and post-production editing with colour grading, sound design and motion graphics. Delivered for TV, digital, YouTube and social media.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle product video shoots in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC handles product video shoots for Mumbai ecommerce brands, D2C companies and manufacturers — studio and on-location shoots with professional lighting, styling, 360° product video and lifestyle footage for websites, Amazon and social media.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a video production office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. You can visit us to discuss your video brief, review scripts and plan shoot logistics with our Mumbai production team.',
      },
    },
  ],
}

const data = {
  badge: 'Corporate Video Production · Mumbai',
  h1: 'Corporate Video Production',
  h1Accent: 'Company in Mumbai',
  tagline:
    'Corporate video production in Mumbai — brand films, ad film production, drone video, product video shoots, commercial video production & corporate film makers. Office in Thane West. Fixed price.',
  desc:
    'NNC Digital is a full-service corporate video production company in Mumbai producing brand films, ad films, drone video, product video shoots and commercial video production for businesses across Mumbai, Thane and Navi Mumbai. Every video is scripted, shot and edited by our in-house production team — professional crew, zero outsourcing — with complete post-production including colour grading, sound design and motion graphics. Our branch office in Thane West means Mumbai clients can review concepts and scripts in person.',
  stat1: '200+',
  stat1Label: 'Videos Produced',
  serviceName: 'corporate video production in Mumbai',
  h2Features: 'Corporate Video Production Services in Mumbai',
  features: [
    {
      h3: 'Corporate Video Production Company Mumbai',
      desc: 'End-to-end corporate video production — concept, script, storyboard, shoot, editing, colour grading and sound design. Delivered for website, YouTube, LinkedIn and internal communication for Mumbai corporates.',
    },
    {
      h3: 'Brand Film Production Mumbai',
      desc: 'Cinematic brand films that tell your company story — origin, culture, mission and people. NNC\'s Mumbai brand film production team handles concept through to colour-graded final cut ready for broadcast and digital.',
    },
    {
      h3: 'Ad Film Production Mumbai',
      desc: 'TV and digital ad film production for Mumbai brands — concept development, scriptwriting, casting, location scouting, shoot production, post-production and delivery for TV, YouTube and Meta Ads.',
    },
    {
      h3: 'Drone Video Production Mumbai',
      desc: 'DGCA-certified drone video production in Mumbai — aerial footage for real estate, construction, events, brand films and corporate overviews. Stunning aerial perspectives of Mumbai\'s skyline and locations.',
    },
    {
      h3: 'Product Video Shoot Mumbai',
      desc: 'Professional product video shoots for Mumbai ecommerce and D2C brands — studio and on-location shoots, 360° product video, lifestyle footage and quick-cut social reels for websites, Amazon and Instagram.',
    },
    {
      h3: 'Corporate Film Makers Mumbai',
      desc: 'NNC\'s Mumbai corporate film makers produce boardroom films, investor presentations, facility tours, CSR films and company anniversary videos — scripted and shot to broadcast quality standards.',
    },
    {
      h3: 'Commercial Video Production Mumbai',
      desc: 'Commercial video production for Mumbai retail, FMCG, hospitality and service brands — product commercials, restaurant films, hotel showcases and retail brand videos for TV and digital platforms.',
    },
    {
      h3: 'Corporate Video Makers Mumbai — Events & Testimonials',
      desc: 'Event coverage, conference films, award ceremony videos and client testimonial videos — NNC\'s corporate video makers in Mumbai capture live events with multi-camera setups and same-day highlight edits.',
    },
    {
      h3: 'Video Production Company Mumbai — Social Media Content',
      desc: 'Short-form video content for Instagram Reels, YouTube Shorts and LinkedIn — scripted, shot and edited in vertical and horizontal formats for Mumbai brands running active social media channels.',
    },
  ],
  h2Why: 'Why Choose NNC as Your Corporate Video Production Company in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — brief us in person',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to walk through your video brief, review scripts on screen and plan shoot logistics with our Mumbai production team face-to-face.',
    },
    {
      n: '02',
      h3: 'In-house production crew — zero outsourcing',
      body: 'Every director, cinematographer, editor and motion graphics artist is a full-time NNC employee. No freelance crew hired per-shoot — consistent quality, consistent team and consistent accountability on every Mumbai project.',
    },
    {
      n: '03',
      h3: 'Full post-production included — colour, sound, graphics',
      body: 'Every video production includes professional colour grading, sound design, background music licensing and motion graphics. No extra invoices for "post-production extras" after the shoot.',
    },
    {
      n: '04',
      h3: 'DGCA-certified drone operators for Mumbai shoots',
      body: 'NNC\'s drone video production team in Mumbai is DGCA-certified and handles all necessary BVLOS permits and location permissions — so your aerial shoot runs legally and without delays.',
    },
    {
      n: '05',
      h3: 'Fixed price — no surprise invoices',
      body: 'Every video project is scoped and priced upfront — shoot days, crew size, locations and post-production deliverables. No hourly billing, no surprise charges for extra edit rounds within scope.',
    },
    {
      n: '06',
      h3: '200+ videos produced — 4.9★ Google rating',
      body: 'NNC has produced 200+ corporate videos, brand films, ad films and product videos for Mumbai and pan-India clients across real estate, FMCG, tech, hospitality and manufacturing. 4.9★ on Google.',
    },
  ],
  techStack: ['Sony FX Series', 'DJI Drones', 'Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Audition', 'Lumetri', 'RED Camera'],
  h2Tech: 'Video Production Equipment & Tools',
  h2Faq: 'Corporate Video Production Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best corporate video production company in Mumbai?',
      a: "NNC Digital is among Mumbai's top corporate video production companies — 200+ videos produced, 4.9★ Google rating, branch office in Thane West. Brand films, ad films, drone video, product shoots and commercial video — all in-house.",
    },
    {
      q: 'How much does corporate video production cost in Mumbai?',
      a: 'A corporate brand film starts from ₹50,000. Product video shoots from ₹25,000. Ad film production is scoped by shoot days and crew requirements. All fixed-price — no surprise invoices.',
    },
    {
      q: 'Do you do drone video production in Mumbai?',
      a: 'Yes. NNC provides DGCA-certified drone video production in Mumbai — aerial footage for real estate, construction, events and brand films. We handle all location permissions.',
    },
    {
      q: 'Do you produce ad films for Mumbai brands?',
      a: 'Yes. NNC produces TV and digital ad films for Mumbai brands — concept, script, casting, shoot and post-production delivered for TV, YouTube and Meta Ads.',
    },
    {
      q: 'Do you handle product video shoots in Mumbai?',
      a: 'Yes. NNC handles product video shoots for Mumbai ecommerce and D2C brands — studio shoots, 360° video and lifestyle footage for websites, Amazon and social media.',
    },
    {
      q: 'Do you have a video production office in Mumbai?',
      a: 'Yes. NNC has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to discuss your video brief and plan shoot logistics.',
    },
  ],
}

export default function CorporateVideoProductionMumbaiPage() {
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
