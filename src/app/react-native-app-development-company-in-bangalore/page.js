import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'React Native App Development Company in Bangalore | NNC Digital',
  description:
    'Top React Native app development company in Bangalore. React Native developers, hire React Native developers, React Native services, JavaScript mobile app development & React Native agency for Bangalore businesses. Fixed price.',
  alternates: {
    canonical: `${SITE.url}/react-native-app-development-company-in-bangalore`,
  },
  keywords:
    'react native app development company in bangalore, react native developers bangalore, hire react native developers bangalore, react native services bangalore, javascript mobile app development bangalore, react native agency bangalore',
  openGraph: {
    title: 'React Native App Development Company in Bangalore | NNC Digital',
    description:
      'React Native app development company in Bangalore — React Native developers, hire React Native developers, JavaScript mobile app development & React Native agency. Fixed price.',
    url: `${SITE.url}/react-native-app-development-company-in-bangalore`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'React Native App Development Company in Bangalore – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'React Native App Development Company in Bangalore | NNC Digital',
    description:
      'React Native app development company in Bangalore — React Native developers, JavaScript mobile apps & hire React Native developers. Fixed price.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'React Native App Development Company in Bangalore',
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
    'React Native App Development',
    'JavaScript Mobile App Development',
    'Cross Platform App Development',
    'React Native Consulting',
  ],
  description:
    'React Native app development company in Bangalore — cross platform Android and iOS apps using React Native and JavaScript for Bangalore businesses. One codebase, both platforms.',
  url: `${SITE.url}/react-native-app-development-company-in-bangalore`,
  offers: [
    {
      '@type': 'Offer',
      name: 'React Native App Development Bangalore — Starter',
      price: '40000',
      priceCurrency: 'INR',
      description: 'React Native cross platform app for Android and iOS — core features, navigation, API integration and store submissions.',
    },
    {
      '@type': 'Offer',
      name: 'React Native App Development Bangalore — Growth',
      price: '90000',
      priceCurrency: 'INR',
      description: 'Full React Native app with complex features — Redux/Context state management, offline support, push notifications and third-party integrations.',
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
      name: 'Mobile App Development Company in Bangalore',
      item: `${SITE.url}/mobile-app-development-company-in-bangalore`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'React Native App Development Company in Bangalore',
      item: `${SITE.url}/react-native-app-development-company-in-bangalore`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best React Native app development company in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Bangalore's top-rated React Native app development companies — 565+ projects delivered, 4.9★ Google rating, headquartered in Whitefield, Bangalore. We build cross platform Android and iOS apps using React Native and JavaScript for startups, SMEs and enterprise clients.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is React Native and why choose it for app development in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "React Native is Facebook's open-source JavaScript framework for building native Android and iOS apps from a single codebase. For Bangalore businesses it means faster development, lower cost than building two separate native apps and the ability to reuse JavaScript skills across web and mobile. NNC builds production React Native apps used by thousands of users.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build React Native apps for both Android and iOS in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds React Native apps for Android and iOS in Bangalore from a single JavaScript codebase. Shared business logic, navigation and API layer — with platform-specific UI adjustments where needed to meet Android Material Design and iOS Human Interface Guidelines.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I hire React Native developers from NNC in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides hire React Native developers services in Bangalore — dedicated React Native developers available on project or monthly retainer basis. In-house team with daily progress reports, code reviews and full IP ownership. No freelancers, no offshore outsourcing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What React Native services does NNC provide in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC provides full React Native services in Bangalore — new app development, React Native migration (from native Android/iOS to React Native), performance optimisation, React Native upgrades, third-party library integration, push notifications, payment gateway integration and Play Store/App Store submission.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does React Native app development cost in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A React Native cross platform app for Android and iOS in Bangalore starts from ₹40,000 — covering core features, navigation, API integration and store submissions for both platforms. Full React Native apps with complex features typically cost ₹90,000–₹2,50,000. Fixed-price — no hourly billing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a React Native development office in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital is headquartered in Bangalore at Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit us to review your React Native app wireframes, test on real Android and iOS devices and meet the JavaScript mobile development team.',
      },
    },
  ],
}

const data = {
  badge: 'React Native Development · Bangalore',
  h1: 'React Native App Development Company',
  h1Accent: 'in Bangalore',
  tagline:
    'Top React Native app development company in Bangalore — React Native developers, hire React Native developers, React Native services, JavaScript mobile app development & React Native agency. One codebase, both platforms. Fixed price.',
  desc:
    'NNC Digital is a specialist React Native app development company in Bangalore building cross platform Android and iOS applications using React Native and JavaScript for startups, SMEs and enterprise clients. From consumer React Native apps and on-demand platforms to enterprise mobile solutions — every React Native project is built by our in-house Bangalore JavaScript developers with full source code ownership, zero outsourcing and fixed-price delivery.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'React Native app development in Bangalore',
  h2Features: 'React Native App Development Services in Bangalore',
  features: [
    {
      h3: 'React Native App Development Bangalore — Android & iOS',
      desc: 'Cross platform React Native development for Bangalore businesses — one JavaScript codebase delivering native-quality Android and iOS apps. Shared logic and navigation with platform-specific UI adjustments for Material Design and HIG compliance.',
    },
    {
      h3: 'React Native Developers Bangalore',
      desc: 'Experienced React Native developers in Bangalore — proficient in React Native CLI, Expo, React Navigation, Redux, Context API, Reanimated and NativeBase. Building production React Native apps with clean architecture and testable codebases.',
    },
    {
      h3: 'Hire React Native Developers Bangalore',
      desc: 'Hire dedicated React Native developers in Bangalore from NNC — JavaScript and React Native experts available on project or monthly retainer. In-house team with daily reporting, code reviews and full IP ownership.',
    },
    {
      h3: 'React Native Services Bangalore — Migration',
      desc: 'React Native migration services for Bangalore businesses — converting existing native Android or iOS apps to React Native for a unified codebase. Code audit, migration planning, phased migration and full QA testing on both platforms.',
    },
    {
      h3: 'JavaScript Mobile App Development Bangalore',
      desc: 'JavaScript mobile app development using React Native for Bangalore businesses — leveraging your existing JavaScript/React skills to build mobile apps. Shared codebase with your web team reduces onboarding time and maintenance overhead.',
    },
    {
      h3: 'React Native Agency Bangalore — Performance Optimisation',
      desc: 'React Native performance optimisation for Bangalore apps — JS thread profiling, Hermes engine configuration, list virtualisation, image caching, lazy loading and bridgeless architecture migration for smoother 60fps UI.',
    },
    {
      h3: 'React Native App Development Bangalore — Integrations',
      desc: 'React Native integrations for Bangalore businesses — Razorpay, Stripe, Firebase (push notifications, analytics, crashlytics), Google Maps, social login (Google, Facebook, Apple), biometric auth, SMS OTP and custom native modules.',
    },
    {
      h3: 'React Native App Development Bangalore — State Management',
      desc: 'Production-ready state management in React Native apps — Redux Toolkit, Zustand or React Context depending on app complexity. Clean architecture with separation of concerns and unit-testable business logic.',
    },
    {
      h3: 'React Native App Development Bangalore — Store Submission',
      desc: 'Full Play Store and App Store submission for React Native apps — release builds, code signing, store listings, screenshots, metadata, TestFlight and closed testing tracks, and post-launch monitoring on both platforms.',
    },
  ],
  h2Why: 'Why Choose NNC as Your React Native App Development Company in Bangalore?',
  why: [
    {
      n: '01',
      h3: 'Bangalore headquarters — test on real Android & iOS devices',
      body: 'NNC is headquartered in Bangalore at Prestige Shantiniketan, Whitefield. Visit us to test your React Native app on real Android and iOS devices, review UI flows and meet the JavaScript mobile developers building your application.',
    },
    {
      n: '02',
      h3: 'One codebase, both platforms — faster & more affordable',
      body: "React Native's shared JavaScript codebase means Bangalore businesses get Android and iOS apps simultaneously for significantly less than two separate native builds. Same quality, faster delivery, lower ongoing maintenance cost.",
    },
    {
      n: '03',
      h3: 'In-house React Native team — zero outsourcing',
      body: 'Every React Native developer, UI designer and QA engineer is a full-time NNC employee in Bangalore. Consistent team from brief to store launch — no freelancers, no offshore outsourcing.',
    },
    {
      n: '04',
      h3: 'Full stack — React Native, Node JS backend, REST APIs',
      body: 'NNC handles the complete React Native app stack — UI/UX design, React Native front-end, Node JS backend, REST APIs, database and DevOps. One team, one point of contact, no integration gaps.',
    },
    {
      n: '05',
      h3: 'Fixed price — fully scoped before development starts',
      body: 'Every React Native project is scoped in detail and priced upfront. No hourly billing, no scope creep surprises. You know the exact cost, timeline and feature list before development begins.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has built React Native apps for ecommerce, logistics, healthcare, fintech and enterprise clients across Bangalore. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['React Native', 'JavaScript', 'TypeScript', 'Redux Toolkit', 'Firebase', 'Expo', 'React Navigation', 'Node JS'],
  h2Tech: 'React Native Development Technology Stack',
  h2Faq: 'React Native App Development Company Bangalore — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best React Native app development company in Bangalore?',
      a: "NNC Digital is among Bangalore's top React Native app development companies — 565+ projects, 4.9★ Google rating, headquartered in Whitefield. Cross platform React Native apps for Android and iOS — all built in-house.",
    },
    {
      q: 'Do you build React Native apps for Android and iOS in Bangalore?',
      a: 'Yes. NNC builds React Native apps for both platforms from a single JavaScript codebase — faster and more affordable than two separate native builds.',
    },
    {
      q: 'Can I hire React Native developers from NNC in Bangalore?',
      a: 'Yes. Hire dedicated React Native developers in Bangalore from NNC — available on project or monthly retainer with daily reporting and full IP ownership.',
    },
    {
      q: 'Do you offer React Native migration services in Bangalore?',
      a: 'Yes. NNC migrates existing native Android or iOS apps to React Native for Bangalore businesses — unified codebase, lower maintenance cost.',
    },
    {
      q: 'How much does React Native app development cost in Bangalore?',
      a: 'React Native apps for Android and iOS start from ₹40,000. Full apps with complex features start from ₹90,000. Fixed-price — no hourly billing.',
    },
    {
      q: 'Do you have a React Native development office in Bangalore?',
      a: 'Yes. NNC is headquartered at Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit us to test on real devices and meet the React Native development team.',
    },
  ],
}

export default function ReactNativeAppDevelopmentBangalorePage() {
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
