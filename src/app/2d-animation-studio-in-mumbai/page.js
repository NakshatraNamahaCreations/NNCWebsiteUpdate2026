import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: '2D Animation Studio in Mumbai | Whiteboard Animation Studio',
  description:
    'Choose a 2D animation studio in Mumbai to create engaging animated videos, with NNC delivering creative animation solutions for brands and marketing.',
  alternates: {
    canonical: `${SITE.url}/2d-animation-studio-in-mumbai`,
  },
  keywords:
    '2d animation studio in mumbai, 2d animation company mumbai, explainer video company mumbai, animated explainer videos mumbai, character animation studio mumbai, whiteboard animation mumbai, motion graphics company mumbai, animation services mumbai, product explainer video mumbai',
  openGraph: {
    title: '2D Animation Studio in Mumbai | Whiteboard Animation Studio',
    description:
      'Choose a 2D animation studio in Mumbai to create engaging animated videos, with NNC delivering creative animation solutions for brands and marketing.',
    url: `${SITE.url}/2d-animation-studio-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: '2D Animation Studio in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: '2D Animation Studio in Mumbai | Whiteboard Animation Studio',
    description:
      'Choose a 2D animation studio in Mumbai to create engaging animated videos, with NNC delivering creative animation solutions for brands and marketing.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: '2D Animation Studio in Mumbai',
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
    'Explainer Video Production',
    'Animated Explainer Videos',
    'Character Animation',
    'Whiteboard Animation',
    'Motion Graphics',
    'Product Explainer Video',
    'Animation Services',
  ],
  description:
    '2D animation studio in Mumbai producing explainer videos, animated explainer videos, character animation, whiteboard animation, motion graphics and product explainer videos. Branch office in Thane West.',
  url: `${SITE.url}/2d-animation-studio-in-mumbai`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Explainer Video Mumbai',
      price: '25000',
      priceCurrency: 'INR',
      description: '60-second 2D animated explainer video with voiceover, script and background music.',
    },
    {
      '@type': 'Offer',
      name: 'Character Animation Mumbai',
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
      name: '2D Animation Studio Bangalore',
      item: `${SITE.url}/2d-animation-studio-in-bangalore`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: '2D Animation Studio in Mumbai',
      item: `${SITE.url}/2d-animation-studio-in-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best 2D animation studio in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Mumbai's top-rated 2D animation companies — 565+ projects delivered, 4.9★ Google rating, branch office in Thane West. We produce explainer videos, character animation, whiteboard animation, motion graphics and product explainer videos for Mumbai brands.",
      },
    },
    {
      '@type': 'Question',
      name: 'What types of animation videos does NNC produce in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Mumbai produces 2D animated explainer videos, character animation, whiteboard animation, motion graphics, product explainer videos, SaaS walkthrough videos, app demo videos and corporate brand animation. Every video is scripted, animated and delivered with voiceover and background music.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does an explainer video cost in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 60-second 2D animated explainer video in Mumbai starts from ₹25,000 — includes script, storyboard, animation, voiceover and background music. Character animation and custom motion graphics are priced based on complexity. All projects are fixed-price.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to produce an animated explainer video in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard 60–90 second animated explainer video takes 2–3 weeks from script approval to final delivery. Character animation or longer videos may take 3–5 weeks. Timelines are agreed before production begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you produce product explainer videos for Mumbai businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC produces product explainer videos for Mumbai SaaS companies, app developers, ecommerce brands and physical product businesses — showing how a product works through 2D animation, motion graphics or a mix of both.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer whiteboard animation and motion graphics in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC produces whiteboard animation videos ideal for educational content, training videos and process explainers. We also produce motion graphics for brand intros, social media reels, YouTube outros and UI demonstrations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a 2D animation studio office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. You can visit us to discuss your animation brief, review storyboards and approve style frames before production begins.',
      },
    },
  ],
}

const data = {
  badge: '2D Animation · Mumbai',
  h1: '2D Animation Studio',
  h1Accent: 'in Mumbai',
  tagline:
    '2D animation company in Mumbai — animated explainer videos, character animation, whiteboard animation, motion graphics, product explainer videos & full animation services. Office in Thane West. Fixed price.',
  desc:
    'NNC Digital is a full-service 2D animation studio in Mumbai producing animated explainer videos, character animation, whiteboard animation, motion graphics and product explainer videos for startups, SaaS companies, ecommerce brands and enterprises across Mumbai, Thane and Navi Mumbai. Every video is scripted, storyboarded, animated and delivered with professional voiceover and music — by our in-house animation team with zero outsourcing.',
  stat1: '200+',
  stat1Label: 'Videos Produced',
  serviceName: '2D animation in Mumbai',
  h2Features: '2D Animation Services in Mumbai',
  features: [
    {
      h3: 'Animated Explainer Videos Mumbai',
      desc: 'Clear, engaging 2D animated explainer videos that communicate your product, service or idea in 60–90 seconds. Script, storyboard, animation, voiceover and music — all produced in-house for Mumbai brands.',
    },
    {
      h3: 'Character Animation Studio Mumbai',
      desc: 'Custom character design and character-driven 2D animation — brand mascots, storytelling narratives and personality-led explainer videos that make your Mumbai brand memorable and human.',
    },
    {
      h3: 'Whiteboard Animation Mumbai',
      desc: 'Whiteboard animation videos ideal for educational content, training modules, process explainers and how-it-works videos. Clean, hand-drawn style with professional voiceover — effective for B2B Mumbai audiences.',
    },
    {
      h3: 'Motion Graphics Company Mumbai',
      desc: 'Motion graphics for brand intros, YouTube outros, social media reels, data visualisations, UI/UX demonstrations and corporate presentations — designed and animated by NNC\'s in-house Mumbai motion graphics team.',
    },
    {
      h3: 'Product Explainer Video Mumbai',
      desc: 'Product explainer videos for SaaS platforms, mobile apps, ecommerce products and physical goods — showing exactly how your product works through 2D animation, screencast overlays and motion graphics.',
    },
    {
      h3: '2D Animation Company Mumbai — Full Production',
      desc: 'End-to-end 2D animation production — brief, script writing, voiceover casting, storyboard approval, animation, sound design and final delivery in MP4, MOV and web-optimised formats.',
    },
    {
      h3: 'Animation Services Mumbai — Social & Digital',
      desc: 'Short-form animation for Instagram Reels, YouTube Shorts, LinkedIn and digital ads — looping animations, kinetic typography and branded motion content sized for every platform Mumbai marketers use.',
    },
    {
      h3: 'Explainer Video Company Mumbai — SaaS & Apps',
      desc: 'Specialised in SaaS and app explainer videos for Mumbai tech companies — onboarding videos, feature walkthroughs, investor pitch animations and App Store preview videos that drive installs and conversions.',
    },
    {
      h3: '2D Animation Studio Mumbai — Corporate & Training',
      desc: 'Corporate training videos, compliance animations, HR onboarding content and internal communication videos — produced with your brand colours, characters and terminology for Mumbai corporates.',
    },
  ],
  h2Why: 'Why Choose NNC as Your 2D Animation Studio in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — review storyboards in person',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to walk through your animation brief, review style frames on screen and approve storyboards before a single frame is animated.',
    },
    {
      n: '02',
      h3: 'In-house animators — zero outsourcing',
      body: 'Every scriptwriter, storyboard artist, 2D animator and voice director is a full-time NNC employee. No freelancers, no overseas outsourcing — consistent quality and accountability on every Mumbai project.',
    },
    {
      n: '03',
      h3: 'Script and voiceover included — one fixed price',
      body: 'NNC\'s animation price includes script writing, storyboarding, animation, professional voiceover in your choice of language/accent and background music. No hidden add-on charges after the brief.',
    },
    {
      n: '04',
      h3: 'Two revision rounds included as standard',
      body: 'Every animation project includes two full revision rounds after storyboard approval and after the first animation cut — so the final video matches your brief exactly before delivery.',
    },
    {
      n: '05',
      h3: 'Fixed price — no hourly billing surprises',
      body: 'All animation projects are priced by scope — video length, style complexity and number of characters. Agreed before production starts. No hourly billing, no surprise invoices for voiceover or music.',
    },
    {
      n: '06',
      h3: '200+ videos produced — 4.9★ Google rating',
      body: 'NNC has produced 200+ animation and video projects for startups, SaaS companies, ecommerce brands and enterprises across Mumbai. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['Adobe Animate', 'After Effects', 'Illustrator', 'Premiere Pro', 'Lottie', 'Cinema 4D', 'Audition', 'DaVinci Resolve'],
  h2Tech: 'Animation Production Tools',
  h2Faq: '2D Animation Studio Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best 2D animation studio in Mumbai?',
      a: "NNC Digital is among Mumbai's top 2D animation companies — 200+ videos produced, 4.9★ Google rating, branch office in Thane West. Explainer videos, character animation, whiteboard animation and motion graphics — all in-house.",
    },
    {
      q: 'How much does an animated explainer video cost in Mumbai?',
      a: 'A 60-second 2D animated explainer video starts from ₹25,000 — includes script, storyboard, animation, voiceover and music. Character animation and custom motion graphics are priced by complexity. All fixed-price.',
    },
    {
      q: 'How long does it take to produce an explainer video in Mumbai?',
      a: 'A standard 60–90 second animated explainer video takes 2–3 weeks from script approval to delivery. Character animation or longer videos take 3–5 weeks. All timelines agreed upfront.',
    },
    {
      q: 'Do you produce product explainer videos in Mumbai?',
      a: 'Yes. NNC produces product explainer videos for Mumbai SaaS, app, ecommerce and physical product brands — showing how a product works through 2D animation and motion graphics.',
    },
    {
      q: 'Do you offer whiteboard animation in Mumbai?',
      a: 'Yes. NNC produces whiteboard animation for educational content, training videos and process explainers — clean hand-drawn style with professional voiceover.',
    },
    {
      q: 'Do you create motion graphics for social media in Mumbai?',
      a: 'Yes. NNC produces motion graphics for Instagram Reels, YouTube Shorts, LinkedIn and digital ads — looping animations, kinetic typography and branded motion content for Mumbai marketers.',
    },
  ],
}

export default function AnimationStudioMumbaiPage() {
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
