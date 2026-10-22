import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'React Native App Developers in Mumbai | High Performance App',
  description:
    'Build scalable mobile apps with React Native app developers in Mumbai, where NNC delivers fast, high performance cross platform solutions for business growth.',
  alternates: {
    canonical: `${SITE.url}/react-native-app-developers-in-mumbai`,
  },
  keywords:
    'react native app developers in mumbai, react native developers mumbai, hire react native developers mumbai, react native development mumbai, react native mobile app mumbai, cross platform app developers mumbai, react native agency mumbai, react native ios android mumbai',
  openGraph: {
    title: 'React Native App Developers in Mumbai | High Performance App',
    description:
      'Build scalable mobile apps with React Native app developers in Mumbai, where NNC delivers fast, high performance cross platform solutions for business growth.',
    url: `${SITE.url}/react-native-app-developers-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'React Native App Developers in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'React Native App Developers in Mumbai | High Performance App',
    description:
      'Build scalable mobile apps with React Native app developers in Mumbai, where NNC delivers fast, high performance cross platform solutions for business growth.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'React Native App Developers in Mumbai',
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
    { '@type': 'City', name: 'Powai' },
  ],
  serviceType: [
    'React Native App Development',
    'Cross Platform App Development',
    'JavaScript Mobile App Development',
    'iOS App Development',
    'Android App Development',
    'React Native MVP Development',
  ],
  description:
    'React Native app developers in Mumbai — scalable, fast and high performance cross platform iOS and Android apps for business growth. Branch office in Thane West.',
  url: `${SITE.url}/react-native-app-developers-in-mumbai`,
  offers: [
    {
      '@type': 'Offer',
      name: 'React Native MVP App Mumbai',
      price: '75000',
      priceCurrency: 'INR',
      description: 'React Native MVP app for iOS & Android with up to 8 screens, basic backend and store deployment.',
    },
    {
      '@type': 'Offer',
      name: 'React Native Business App Mumbai',
      price: '150000',
      priceCurrency: 'INR',
      description: 'Full-featured React Native app for iOS & Android with admin panel, Razorpay and analytics.',
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
      name: 'React Native App Development Company Mumbai',
      item: `${SITE.url}/react-native-app-development-company-in-mumbai`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'React Native App Developers in Mumbai',
      item: `${SITE.url}/react-native-app-developers-in-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I find the best React Native app developers in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital has among Mumbai's best React Native app developers — 100+ apps delivered, 4.9★ Google rating, branch office in Thane West. Our in-house developers build fast, scalable and high performance cross platform iOS and Android apps for business growth.",
      },
    },
    {
      '@type': 'Question',
      name: 'What do React Native app developers in Mumbai do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC's React Native developers in Mumbai handle the full app lifecycle — requirements analysis, UI/UX design, JavaScript/TypeScript development, state management, REST API integration, QA on real devices, Play Store and App Store submission and post-launch support.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to hire React Native developers in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A React Native MVP app for iOS and Android starts from ₹75,000. A full-featured business app typically costs ₹1,50,000–₹2,50,000. You can also hire React Native developers on a monthly retainer. All projects are fixed-price — no hourly billing, no surprise invoices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do NNC React Native developers in Mumbai build high performance apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. NNC's React Native developers in Mumbai build high performance apps using the Hermes JS engine, optimised FlatList rendering, lazy loading, memoisation and efficient state management — delivering fast, responsive apps that feel native on both iOS and Android.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I hire dedicated React Native developers in Mumbai from NNC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can hire dedicated React Native developers from NNC Mumbai on a project or retainer basis. All are full-time NNC employees — not freelancers or outsourced contractors. Meet them at our Thane West, Mumbai office.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will React Native developers handle Play Store and App Store submission in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — completely. NNC manages the full submission process for both Google Play Store and Apple App Store including listing, screenshots, metadata, content rating, review responses and release management.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do NNC React Native developers have an office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to test React Native builds on real devices and meet the development team.',
      },
    },
  ],
}

const data = {
  badge: 'React Native Developers · Mumbai',
  h1: 'React Native App Developers',
  h1Accent: 'in Mumbai',
  tagline:
    'Expert React Native app developers in Mumbai — scalable, fast and high performance cross platform iOS and Android apps for business growth. Weekly builds. Office in Thane West. Fixed price.',
  desc:
    "NNC Digital's React Native app developers in Mumbai build scalable, high performance cross platform mobile applications for startups, SMEs and enterprises across Mumbai, Thane and Navi Mumbai. Our in-house React Native developers deliver fast iOS and Android apps from a single JavaScript codebase — custom solutions tailored for business growth with weekly APK and TestFlight builds, zero outsourcing and complete source code ownership on delivery.",
  stat1: '100+',
  stat1Label: 'Mobile Apps Delivered',
  serviceName: 'React Native app development in Mumbai',
  h2Features: 'What Our React Native Developers Build in Mumbai',
  features: [
    {
      h3: 'High Performance Cross Platform Apps Mumbai',
      desc: 'React Native apps that run natively on iOS and Android from one JavaScript codebase — Hermes engine, optimised rendering, lazy loading and smooth 60fps animations for a high performance user experience.',
    },
    {
      h3: 'Scalable React Native Architecture Mumbai',
      desc: 'Scalable app architecture with clean folder structure, separation of concerns, Redux or Zustand state management and modular components — built to grow with your Mumbai business without a rewrite.',
    },
    {
      h3: 'React Native MVP App Mumbai',
      desc: 'MVP React Native app for Mumbai startups — core feature set live on iOS and Android in 6–8 weeks, Play Store and App Store ready, with weekly builds shared throughout the development process.',
    },
    {
      h3: 'On-demand & Ecommerce Apps Mumbai',
      desc: 'On-demand service apps, delivery platforms and ecommerce React Native apps with Razorpay/UPI integration, real-time location tracking, push notifications and optimised checkout for Mumbai users.',
    },
    {
      h3: 'Enterprise React Native Apps Mumbai',
      desc: 'Enterprise React Native platforms for Mumbai corporates — role-based access, ERP/CRM integration, offline-first local sync, biometric authentication and secure enterprise deployment.',
    },
    {
      h3: 'React Native + React Web Code Sharing Mumbai',
      desc: "Already have a React web app? NNC's developers share business logic, API hooks and state management between web and mobile — reducing total engineering effort for Mumbai businesses.",
    },
    {
      h3: 'Store Submission & ASO Mumbai',
      desc: 'Full Play Store and App Store submission managed by NNC — listing, screenshots, metadata, content rating, ASO (App Store Optimisation), review responses and post-launch update releases.',
    },
    {
      h3: 'React Native Performance Optimisation Mumbai',
      desc: "Slow React Native app? NNC's Mumbai developers audit and optimise — JS thread profiling, Hermes tuning, FlatList performance, image optimisation and bundle size reduction.",
    },
    {
      h3: 'Hire React Native Developers Mumbai',
      desc: 'Hire dedicated React Native developers from NNC Mumbai on a project or monthly retainer. All are full-time in-house engineers — not freelancers. Meet them at our Thane West office.',
    },
  ],
  h2Why: 'Why Hire React Native App Developers from NNC Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — meet developers in person',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to test React Native builds on real iPhones and Android phones and meet the JavaScript developers building your app.',
    },
    {
      n: '02',
      h3: 'Full-time in-house developers — not freelancers',
      body: 'Every React Native developer at NNC Mumbai is a full-time employee — consistent, accountable engineers who stay with your project from brief to launch. No freelancer turnover, no offshore contractors.',
    },
    {
      n: '03',
      h3: 'Weekly APK & TestFlight builds — full visibility',
      body: 'Every week you receive installable builds for Android (APK) and iOS (TestFlight). Test exactly what is being built at every stage — complete transparency throughout development.',
    },
    {
      n: '04',
      h3: 'High performance apps — Hermes + optimised rendering',
      body: "NNC's React Native developers use the Hermes JS engine, optimised FlatList, memoisation and lazy loading to deliver fast, smooth apps that feel native — not sluggish JavaScript wrappers.",
    },
    {
      n: '05',
      h3: 'Fixed price — no hourly billing surprises',
      body: 'Every project is scoped and priced upfront. No hourly billing, no scope creep invoices, no surprise charges for store submission, Razorpay integration or post-launch fixes within warranty.',
    },
    {
      n: '06',
      h3: '100+ apps delivered — 4.9★ Google rating',
      body: 'NNC has delivered 100+ mobile apps for on-demand services, ecommerce, healthcare, logistics and enterprise clients across Mumbai. 4.9★ on Google.',
    },
  ],
  techStack: ['React Native', 'JavaScript', 'TypeScript', 'Redux', 'Firebase', 'Razorpay', 'REST APIs', 'Fastlane'],
  h2Tech: 'React Native Technology Stack',
  h2Faq: 'React Native App Developers Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'Where can I find the best React Native app developers in Mumbai?',
      a: "NNC Digital has among Mumbai's best React Native developers — 100+ apps, 4.9★ Google rating, office in Thane West. Fast, scalable and high performance cross platform iOS and Android apps.",
    },
    {
      q: 'How much does it cost to hire React Native developers in Mumbai?',
      a: 'A React Native MVP starts from ₹75,000. A full business app typically costs ₹1,50,000–₹2,50,000. Monthly retainer hiring also available. All fixed-price — no hourly billing.',
    },
    {
      q: 'How long does React Native development take in Mumbai?',
      a: 'An MVP takes 6–8 weeks. A full business app takes 10–14 weeks. Enterprise platforms take 14–24 weeks. Every timeline agreed in writing before development begins.',
    },
    {
      q: 'Can I hire dedicated React Native developers in Mumbai?',
      a: 'Yes. Hire dedicated React Native developers from NNC Mumbai on a project or retainer. All are full-time NNC employees — not freelancers. Meet them at our Thane West office.',
    },
    {
      q: 'Will your React Native developers handle store submission?',
      a: 'Yes — completely. NNC manages Play Store and App Store submission including listing, screenshots, content rating, review responses and release management.',
    },
    {
      q: 'Do you have a React Native development office in Mumbai?',
      a: 'Yes. NNC has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to test builds on real devices and meet the team.',
    },
  ],
}

export default function ReactNativeAppDevelopersInMumbaiPage() {
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
