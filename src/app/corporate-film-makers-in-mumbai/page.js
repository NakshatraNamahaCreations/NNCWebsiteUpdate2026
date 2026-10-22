import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Corporate Film Makers in Mumbai | Marketing Video Production',
  description:
    'Choose corporate film makers in Mumbai to create impactful business videos, with NNC delivering professional films for branding and corporate communication.',
  alternates: {
    canonical: `${SITE.url}/corporate-film-makers-in-mumbai`,
  },
  keywords:
    'corporate film makers in mumbai, corporate film makers mumbai, corporate filmmakers mumbai, corporate film production mumbai, corporate film company mumbai, business film makers mumbai, brand film makers mumbai, marketing video production mumbai, corporate video filmmakers mumbai',
  openGraph: {
    title: 'Corporate Film Makers in Mumbai | Marketing Video Production',
    description:
      'Choose corporate film makers in Mumbai to create impactful business videos, with NNC delivering professional films for branding and corporate communication.',
    url: `${SITE.url}/corporate-film-makers-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Corporate Film Makers in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Corporate Film Makers in Mumbai | Marketing Video Production',
    description:
      'Choose corporate film makers in Mumbai to create impactful business videos, with NNC delivering professional films for branding and corporate communication.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Corporate Film Makers in Mumbai',
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
    'Corporate Film Making',
    'Marketing Video Production',
    'Brand Film Production',
    'Corporate Video Production',
    'Ad Film Production',
    'Business Film Production',
    'Corporate Communication Films',
  ],
  description:
    'Corporate film makers in Mumbai — impactful business videos, professional films for branding and corporate communication. In-house crew, branch office in Thane West.',
  url: `${SITE.url}/corporate-film-makers-in-mumbai`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Corporate Brand Film Mumbai',
      price: '50000',
      priceCurrency: 'INR',
      description: 'Full corporate brand film — scripted, shot and edited for branding and marketing.',
    },
    {
      '@type': 'Offer',
      name: 'Marketing Video Production Mumbai',
      price: '30000',
      priceCurrency: 'INR',
      description: 'Marketing video production for digital platforms, websites and social media.',
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
      name: 'Corporate Film Makers in Mumbai',
      item: `${SITE.url}/corporate-film-makers-in-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I find the best corporate film makers in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital has among Mumbai's best corporate film makers — 200+ videos produced, 4.9★ Google rating, branch office in Thane West. Our in-house team creates impactful business videos and professional films for branding and corporate communication.",
      },
    },
    {
      '@type': 'Question',
      name: 'What types of corporate films does NNC make in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC's corporate film makers in Mumbai produce brand films, company overview films, marketing videos, ad films, investor films, CSR films, facility tour films, employee engagement films and event films — all scripted, shot and edited by our in-house production team.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does corporate film making cost in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A corporate brand film in Mumbai starts from ₹50,000. Marketing video production starts from ₹30,000. Ad film production is scoped by crew size and shoot days. All projects are fixed-price — no surprise invoices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do NNC corporate film makers handle scripting and concept development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. NNC's corporate film makers in Mumbai handle the complete creative process — concept development, scriptwriting, storyboarding, shot planning, shoot production and full post-production including colour grading and sound design.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you produce marketing videos for Mumbai businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC produces marketing videos for Mumbai businesses across all digital platforms — website hero videos, YouTube brand videos, LinkedIn content, social media reels and email marketing videos. Each video is scripted to drive a clear marketing objective.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you produce films for corporate communication in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC produces corporate communication films for Mumbai businesses — internal communications, leadership address films, training videos, HR onboarding films and company policy explainers. Professional quality, delivered on time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do NNC corporate film makers have an office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to discuss your film brief, review scripts and plan shoot logistics with our Mumbai film makers.',
      },
    },
  ],
}

const data = {
  badge: 'Corporate Film Makers · Mumbai',
  h1: 'Corporate Film Makers',
  h1Accent: 'in Mumbai',
  tagline:
    'Expert corporate film makers in Mumbai — impactful business videos, professional brand films and marketing video production for branding and corporate communication. In-house crew. Office in Thane West. Fixed price.',
  desc:
    "NNC Digital's corporate film makers in Mumbai create impactful business videos and professional films for branding, marketing and corporate communication for startups, SMEs and enterprises across Mumbai, Thane and Navi Mumbai. Our in-house film making team handles the complete production lifecycle — concept, script, shoot, editing, colour grading and sound design — delivering high quality corporate films with zero outsourcing and full creative control.",
  stat1: '200+',
  stat1Label: 'Videos Produced',
  serviceName: 'corporate film making in Mumbai',
  h2Features: 'Corporate Film Making Services in Mumbai',
  features: [
    {
      h3: 'Brand Film Making Mumbai',
      desc: "Cinematic brand films that tell your company's story — origin, values, culture and people. NNC's Mumbai film makers handle concept through to colour-graded final cut, ready for website, YouTube and brand campaigns.",
    },
    {
      h3: 'Marketing Video Production Mumbai',
      desc: 'Marketing videos designed to drive business results — website hero videos, product launch films, service explainers and campaign videos for digital marketing across YouTube, LinkedIn and social media.',
    },
    {
      h3: 'Corporate Communication Films Mumbai',
      desc: 'Internal corporate communication films for Mumbai businesses — leadership address videos, town hall recordings, policy explainers, HR onboarding films and company announcement videos.',
    },
    {
      h3: 'Ad Film Production Mumbai',
      desc: 'TV and digital ad film production — concept, script, casting, location, shoot and post-production with colour grading and sound design. Delivered for TV, YouTube, OTT and Meta Ads for Mumbai brands.',
    },
    {
      h3: 'Investor & Pitch Films Mumbai',
      desc: 'Investor presentation films and startup pitch videos for Mumbai businesses — compelling narratives that communicate your vision, traction and market opportunity to investors and stakeholders.',
    },
    {
      h3: 'CSR & Impact Films Mumbai',
      desc: "CSR films, social impact documentaries and sustainability films for Mumbai corporates — authentic storytelling that communicates your brand's commitment to people and planet for stakeholders and media.",
    },
    {
      h3: 'Facility Tour & Product Films Mumbai',
      desc: 'Factory and facility tour films, product launch films and manufacturing process videos for Mumbai businesses — showcasing your operations, quality standards and production capabilities.',
    },
    {
      h3: 'Event & Conference Films Mumbai',
      desc: 'Multi-camera event coverage, conference films, product launch event films and award ceremony videos — NNC captures Mumbai corporate events with professional crew and same-day highlight edits.',
    },
    {
      h3: 'Training & E-learning Video Mumbai',
      desc: 'Corporate training films and e-learning video content for Mumbai businesses — structured, scripted and edited for LMS platforms with clear visual demonstrations and professional narration.',
    },
  ],
  h2Why: 'Why Choose NNC as Your Corporate Film Makers in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — brief us in person',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to walk through your film brief, review scripts and storyboards and plan shoot logistics with our Mumbai film making team.',
    },
    {
      n: '02',
      h3: 'In-house film crew — zero outsourcing',
      body: 'Every director, cinematographer, editor and sound designer is a full-time NNC employee. Consistent creative quality, consistent team accountability — no freelance crew hired per shoot.',
    },
    {
      n: '03',
      h3: 'Films built for business objectives — not just aesthetics',
      body: "NNC's corporate film makers write scripts and design visuals around your business goal — brand awareness, lead generation, investor confidence or internal engagement. Every creative decision serves the objective.",
    },
    {
      n: '04',
      h3: 'Full post-production included — colour, sound, graphics',
      body: 'Every film includes professional colour grading, sound design, licensed background music and motion graphics. No extra invoices for post-production extras after the shoot.',
    },
    {
      n: '05',
      h3: 'Fixed price — no surprise invoices',
      body: 'Every film project is scoped and priced upfront — shoot days, crew, locations and post-production deliverables all agreed in writing. No hourly billing, no surprise charges.',
    },
    {
      n: '06',
      h3: '200+ films produced — 4.9★ Google rating',
      body: 'NNC has produced 200+ corporate films, brand videos and marketing videos for Mumbai businesses across real estate, FMCG, tech, healthcare and manufacturing. 4.9★ on Google.',
    },
  ],
  techStack: ['Sony FX Series', 'DJI Drones', 'Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Audition', 'Lumetri', 'RED Camera'],
  h2Tech: 'Film Production Equipment & Tools',
  h2Faq: 'Corporate Film Makers Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'Where can I find the best corporate film makers in Mumbai?',
      a: "NNC Digital has among Mumbai's best corporate film makers — 200+ videos, 4.9★ Google rating, office in Thane West. Impactful business videos and professional films for branding and corporate communication.",
    },
    {
      q: 'How much does corporate film making cost in Mumbai?',
      a: 'A corporate brand film starts from ₹50,000. Marketing video production from ₹30,000. Ad film production scoped by crew and shoot days. All fixed-price — no surprise invoices.',
    },
    {
      q: 'Do you handle scripting and concept development for corporate films?',
      a: 'Yes. NNC handles complete creative — concept development, scriptwriting, storyboarding, shoot production and full post-production including colour grading and sound design.',
    },
    {
      q: 'Do you produce marketing videos for Mumbai businesses?',
      a: 'Yes. NNC produces marketing videos for website, YouTube, LinkedIn and social media — product launches, service explainers and campaign videos scripted to drive clear marketing objectives.',
    },
    {
      q: 'Do you produce corporate communication films in Mumbai?',
      a: 'Yes. NNC produces internal communications films, leadership address videos, training videos and HR onboarding films for Mumbai businesses.',
    },
    {
      q: 'Do you have a corporate film making office in Mumbai?',
      a: 'Yes. NNC has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to discuss your film brief and plan shoot logistics.',
    },
  ],
}

export default function CorporateFilmMakersInMumbaiPage() {
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
