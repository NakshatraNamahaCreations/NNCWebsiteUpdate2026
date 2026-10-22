import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: '2D Animation Service in Mumbai | Creative Animation Studio',
  description:
    'Choose a 2D animation service in Mumbai to create engaging videos, with NNC delivering creative animation solutions for branding, marketing and business growth.',
  alternates: {
    canonical: `${SITE.url}/2d-animation-service-in-mumbai`,
  },
  keywords:
    '2d animation service in mumbai, 2d animation services mumbai, animation service mumbai, animated video service mumbai, explainer video service mumbai, motion graphics service mumbai, whiteboard animation service mumbai, character animation service mumbai, animation company mumbai',
  openGraph: {
    title: '2D Animation Service in Mumbai | Creative Animation Studio',
    description:
      'Choose a 2D animation service in Mumbai to create engaging videos, with NNC delivering creative animation solutions for branding, marketing and business growth.',
    url: `${SITE.url}/2d-animation-service-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: '2D Animation Service in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: '2D Animation Service in Mumbai | Creative Animation Studio',
    description:
      'Choose a 2D animation service in Mumbai to create engaging videos, with NNC delivering creative animation solutions for branding, marketing and business growth.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: '2D Animation Service in Mumbai',
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
    '2D Animation',
    'Animated Video Production',
    'Explainer Video Service',
    'Character Animation',
    'Whiteboard Animation',
    'Motion Graphics',
    'Product Explainer Video',
    'Animation Services',
  ],
  description:
    '2D animation service in Mumbai — animated explainer videos, character animation, whiteboard animation, motion graphics and product explainer videos for branding and marketing. Branch office in Thane West.',
  url: `${SITE.url}/2d-animation-service-in-mumbai`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Explainer Video Service Mumbai',
      price: '25000',
      priceCurrency: 'INR',
      description: '60-second 2D animated explainer video with voiceover, script and background music.',
    },
    {
      '@type': 'Offer',
      name: 'Character Animation Service Mumbai',
      price: '45000',
      priceCurrency: 'INR',
      description: 'Custom character-driven 2D animation with branded characters and full motion design.',
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
      name: '2D Animation Studio Mumbai',
      item: `${SITE.url}/2d-animation-studio-in-mumbai`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: '2D Animation Service in Mumbai',
      item: `${SITE.url}/2d-animation-service-in-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best 2D animation service in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Mumbai's top-rated 2D animation service providers — 565+ projects delivered, 4.9★ Google rating, branch office in Thane West. We create animated explainer videos, character animation, whiteboard animation and motion graphics for Mumbai brands.",
      },
    },
    {
      '@type': 'Question',
      name: 'What 2D animation services does NNC provide in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Mumbai provides full 2D animation services — animated explainer videos, character animation, whiteboard animation, motion graphics, product explainer videos, SaaS walkthrough videos, app demo videos and corporate brand animation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a 2D animation service cost in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 60-second 2D animated explainer video in Mumbai starts from ₹25,000 — includes script, storyboard, animation, voiceover and background music. Character animation and custom motion graphics are priced based on complexity. All projects are fixed-price.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to produce an animated video in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard 60–90 second animated video takes 2–3 weeks from script approval to final delivery. Character animation or longer videos may take 3–5 weeks. Timelines are agreed before production begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide animation services for branding and marketing in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides 2D animation services specifically for branding and marketing — brand explainer videos, product demos, social media animations, motion graphics for ads and animated content for Instagram Reels and YouTube.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have an animation service office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to discuss your animation brief, review storyboards and approve style frames before production begins.',
      },
    },
  ],
}

const data = {
  badge: '2D Animation · Mumbai',
  h1: '2D Animation Service',
  h1Accent: 'in Mumbai',
  tagline:
    'Creative 2D animation service in Mumbai — animated explainer videos, character animation, whiteboard animation, motion graphics and product videos for branding and marketing. Office in Thane West. Fixed price.',
  desc:
    'NNC Digital provides a full 2D animation service in Mumbai for brands, startups, SaaS companies and enterprises across Mumbai, Thane and Navi Mumbai. From animated explainer videos and character animation to whiteboard animation, motion graphics and product videos — every animation is scripted, storyboarded and produced by our in-house animation team with zero outsourcing. Creative solutions for branding, marketing and business growth.',
  stat1: '200+',
  stat1Label: 'Videos Produced',
  serviceName: '2D animation service in Mumbai',
  h2Features: '2D Animation Services in Mumbai',
  features: [
    {
      h3: 'Animated Explainer Videos Mumbai',
      desc: 'Clear, engaging 2D animated explainer videos that communicate your product, service or idea in 60–90 seconds. Script, storyboard, animation, voiceover and music — all produced in-house for Mumbai brands.',
    },
    {
      h3: 'Character Animation Service Mumbai',
      desc: 'Custom character design and character-driven 2D animation — brand mascots, storytelling narratives and personality-led explainer videos that make your Mumbai brand memorable and distinctive.',
    },
    {
      h3: 'Whiteboard Animation Service Mumbai',
      desc: 'Whiteboard animation ideal for educational content, training modules, process explainers and how-it-works videos. Clean, hand-drawn style with professional voiceover — effective for B2B Mumbai audiences.',
    },
    {
      h3: 'Motion Graphics Service Mumbai',
      desc: "Motion graphics for brand intros, YouTube outros, social media reels, data visualisations, UI/UX demonstrations and corporate presentations — designed and animated by NNC's Mumbai motion graphics team.",
    },
    {
      h3: 'Product Explainer Video Mumbai',
      desc: 'Product explainer videos for SaaS platforms, mobile apps, ecommerce products and physical goods — showing exactly how your product works through 2D animation, screencast overlays and motion graphics.',
    },
    {
      h3: 'Branding Animation Service Mumbai',
      desc: 'Animation for branding — animated logos, brand intro videos, mascot animation and brand story videos that bring your Mumbai brand identity to life across digital and social channels.',
    },
    {
      h3: 'Social Media Animation Mumbai',
      desc: 'Short-form animation for Instagram Reels, YouTube Shorts, LinkedIn and digital ads — looping animations, kinetic typography and branded motion content sized for every platform Mumbai marketers use.',
    },
    {
      h3: 'SaaS & App Animation Service Mumbai',
      desc: 'Specialised animation for Mumbai tech companies — onboarding videos, feature walkthroughs, investor pitch animations and App Store preview videos that drive installs and conversions.',
    },
    {
      h3: 'Corporate Training Animation Mumbai',
      desc: 'Corporate training videos, compliance animations, HR onboarding content and internal communication videos — produced with your brand colours, characters and terminology for Mumbai corporates.',
    },
  ],
  h2Why: 'Why Choose NNC for 2D Animation Service in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — review storyboards in person',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to walk through your animation brief, review style frames on screen and approve storyboards before production begins.',
    },
    {
      n: '02',
      h3: 'In-house animators — zero outsourcing',
      body: 'Every scriptwriter, storyboard artist, 2D animator and voice director is a full-time NNC employee. No freelancers, no overseas outsourcing — consistent quality on every Mumbai project.',
    },
    {
      n: '03',
      h3: 'Script and voiceover included — one fixed price',
      body: "NNC's animation service price includes script writing, storyboarding, animation, professional voiceover and background music. No hidden add-on charges after the brief.",
    },
    {
      n: '04',
      h3: 'Two revision rounds included as standard',
      body: 'Every animation project includes two full revision rounds — after storyboard approval and after the first animation cut — so the final video matches your brief exactly.',
    },
    {
      n: '05',
      h3: 'Fixed price — no hourly billing surprises',
      body: 'All animation projects are priced by scope — video length, style complexity and number of characters. Agreed before production starts. No hourly billing or surprise invoices.',
    },
    {
      n: '06',
      h3: '200+ videos produced — 4.9★ Google rating',
      body: 'NNC has produced 200+ animation and video projects for startups, SaaS companies, ecommerce brands and enterprises across Mumbai. 4.9★ rated on Google.',
    },
  ],
  techStack: ['Adobe Animate', 'After Effects', 'Illustrator', 'Premiere Pro', 'Lottie', 'Cinema 4D', 'Audition', 'DaVinci Resolve'],
  h2Tech: 'Animation Production Tools',
  h2Faq: '2D Animation Service Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best 2D animation service in Mumbai?',
      a: "NNC Digital is among Mumbai's top 2D animation service providers — 200+ videos produced, 4.9★ Google rating, branch office in Thane West. Explainer videos, character animation, whiteboard animation and motion graphics — all in-house.",
    },
    {
      q: 'How much does a 2D animation service cost in Mumbai?',
      a: 'A 60-second animated explainer video starts from ₹25,000 — includes script, storyboard, animation, voiceover and music. Character animation and motion graphics are priced by complexity. All fixed-price.',
    },
    {
      q: 'How long does animation production take in Mumbai?',
      a: 'A standard 60–90 second animated video takes 2–3 weeks from script approval to delivery. Character animation or longer videos take 3–5 weeks. All timelines agreed upfront.',
    },
    {
      q: 'Do you provide animation for branding and marketing in Mumbai?',
      a: 'Yes. NNC provides animation services specifically for branding and marketing — brand explainers, product demos, social media animations and motion graphics for ads.',
    },
    {
      q: 'Do you offer whiteboard animation service in Mumbai?',
      a: 'Yes. NNC produces whiteboard animation for educational content, training videos and process explainers — clean hand-drawn style with professional voiceover.',
    },
    {
      q: 'Do you have an animation service office in Mumbai?',
      a: 'Yes. NNC has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to discuss your animation brief and review storyboards.',
    },
  ],
}

export default function AnimationServiceMumbaiPage() {
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
