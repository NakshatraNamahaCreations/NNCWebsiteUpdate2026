import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'React Native App Development Company in Mumbai | NNC Digital',
  description:
    'Top React Native app development company in Mumbai. Cross-platform iOS & Android apps in React Native & JavaScript, hire React Native developers — office in Thane West. Fixed price. 100+ apps delivered.',
  alternates: {
    canonical: `${SITE.url}/react-native-app-development-company-in-mumbai`,
  },
  keywords:
    'react native app development company in mumbai, react native developers mumbai, hire react native developers mumbai, react native services mumbai, javascript mobile app development mumbai, react native agency mumbai',
  openGraph: {
    title: 'React Native App Development Company in Mumbai | NNC Digital',
    description:
      'Cross-platform React Native & JavaScript app development in Mumbai — iOS & Android from one codebase. Hire React Native developers with office in Thane West. Fixed price.',
    url: `${SITE.url}/react-native-app-development-company-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'React Native App Development Company in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'React Native App Development Company in Mumbai | NNC Digital',
    description:
      'React Native developers in Mumbai — cross-platform iOS & Android apps in JavaScript. Office in Thane West. Fixed price.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'React Native App Development Company in Mumbai',
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
  ],
  description:
    'Cross-platform React Native and JavaScript app development for Mumbai businesses — iOS and Android apps from a single codebase. Branch office in Thane West.',
  url: `${SITE.url}/react-native-app-development-company-in-mumbai`,
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
      name: 'Mobile App Development Mumbai',
      item: `${SITE.url}/mobile-app-development-company-in-mumbai`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'React Native App Development Company in Mumbai',
      item: `${SITE.url}/react-native-app-development-company-in-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best React Native app development company in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Mumbai's top-rated React Native app development companies — 100+ apps delivered, 4.9★ Google rating, branch office in Thane West. We build cross-platform iOS and Android apps in React Native and JavaScript from a single codebase.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is React Native and why use it for my Mumbai app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "React Native is Facebook's open-source JavaScript framework for building native iOS and Android apps from one codebase. For Mumbai businesses it means faster delivery and lower cost than building two separate native apps, while still delivering near-native performance and a genuine platform look-and-feel. It also shares code with React web apps if you have an existing web product.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does React Native app development cost in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A React Native MVP app for iOS and Android starts from ₹75,000. A full-featured React Native business app typically costs ₹1,50,000–₹2,50,000. All projects are fixed-price — no hourly billing, no surprise invoices. Visit our Thane West office for a free consultation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I hire dedicated React Native developers in Mumbai from NNC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can hire dedicated React Native and JavaScript developers from NNC Mumbai on a project or retainer basis. All are full-time NNC employees — not freelancers or outsourced contractors. You can meet them at our Thane West, Mumbai office.',
      },
    },
    {
      '@type': 'Question',
      name: 'React Native vs Flutter — which should I choose for my Mumbai app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "React Native suits businesses in the JavaScript ecosystem or those with an existing React web app — shared JS code, large npm ecosystem and near-native performance. Flutter gives more precise custom UI control and pixel-perfect consistency across devices. NNC's Mumbai team will recommend the right framework after reviewing your requirements and existing tech stack.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle Play Store and App Store submission for React Native apps in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — completely. NNC manages the full submission process for both Google Play Store and Apple App Store including listing, screenshots, metadata, content rating, review responses and release management. Post-launch updates also handled.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a React Native development office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. You can visit us to test React Native builds on real iOS and Android devices and meet the JavaScript development team.',
      },
    },
  ],
}

const data = {
  badge: 'React Native Development · Mumbai',
  h1: 'React Native App Development',
  h1Accent: 'Company in Mumbai',
  tagline:
    'Cross-platform React Native & JavaScript app development in Mumbai — iOS & Android from a single codebase. Hire React Native developers with office in Thane West. Fixed price.',
  desc:
    'NNC Digital is a dedicated React Native app development company in Mumbai building cross-platform iOS and Android applications in JavaScript for startups, SMEs and enterprises across Mumbai, Thane and Navi Mumbai. React Native delivers near-native performance from a single codebase — faster to build, cheaper to maintain and easy to share logic with an existing React web app. Every project is built by our in-house React Native developers with zero outsourcing, weekly builds and complete source code ownership on delivery.',
  stat1: '100+',
  stat1Label: 'Mobile Apps Delivered',
  serviceName: 'React Native app development in Mumbai',
  h2Features: 'React Native App Development Services in Mumbai',
  features: [
    {
      h3: 'React Native App Development Company Mumbai',
      desc: 'Cross-platform React Native apps for iOS and Android from a single JavaScript codebase. Near-native performance, genuine platform UI components and access to all native device APIs — camera, GPS, biometrics and push notifications.',
    },
    {
      h3: 'JavaScript Mobile App Development Mumbai',
      desc: 'Leveraging the world\'s largest developer ecosystem — npm, React hooks, Redux, React Query and hundreds of battle-tested libraries — to build robust, maintainable JavaScript mobile apps for Mumbai businesses.',
    },
    {
      h3: 'React Native Services Mumbai — Full Lifecycle',
      desc: 'End-to-end React Native services — UI/UX design, JavaScript development, state management (Redux/Zustand), REST and GraphQL integration, QA on real devices, Play Store & App Store submission and post-launch support.',
    },
    {
      h3: 'Hire React Native Developers Mumbai',
      desc: 'Hire dedicated React Native and JavaScript developers from NNC Mumbai on a project or retainer basis. All are full-time in-house engineers with proven production app experience — not freelancers.',
    },
    {
      h3: 'React Native Agency Mumbai — Code Sharing with Web',
      desc: 'Already have a React web app? NNC\'s React Native agency team in Mumbai can share business logic, API hooks, state management and utility code between your web and mobile app — reducing total development time significantly.',
    },
    {
      h3: 'On-demand & Ecommerce React Native Apps Mumbai',
      desc: 'On-demand service apps, delivery platforms and ecommerce React Native apps with Razorpay/UPI integration, real-time location tracking, push notifications and optimised checkout for Mumbai consumers.',
    },
    {
      h3: 'React Native MVP & Startup App Development Mumbai',
      desc: 'MVP React Native app development for Mumbai startups — core feature set live on iOS and Android in 6–8 weeks, Play Store and App Store ready, with weekly builds shared throughout development.',
    },
    {
      h3: 'Enterprise React Native App Development Mumbai',
      desc: 'Enterprise React Native platforms for Mumbai corporates — role-based access, ERP/CRM integration, offline-first local sync, biometric authentication and secure enterprise deployment.',
    },
    {
      h3: 'React Native Performance Optimisation Mumbai',
      desc: 'Slow React Native app? NNC\'s Mumbai team audits and optimises — JS thread profiling, Hermes engine tuning, lazy loading, image optimisation and FlatList performance — delivering measurably faster apps.',
    },
  ],
  h2Why: 'Why Choose NNC as Your React Native App Development Company in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — test on real iOS & Android devices',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to test React Native builds on real iPhones and Android phones simultaneously and meet the JavaScript developers building your app.',
    },
    {
      n: '02',
      h3: 'One JavaScript codebase — iOS and Android',
      body: 'React Native delivers a single JS codebase that runs on both platforms. For Mumbai businesses this means faster delivery, lower development cost and one team managing iOS and Android going forward.',
    },
    {
      n: '03',
      h3: 'Shares code with your React web app',
      body: 'If you have or plan a React web app, NNC can share business logic, API layers and state management between web and mobile — reducing total engineering effort and keeping behaviour consistent across platforms.',
    },
    {
      n: '04',
      h3: 'Weekly builds — full visibility throughout',
      body: 'Every week you receive installable APK (Android) and TestFlight (iOS) builds. You test exactly what is being built at every stage — no silent development, no surprises at handover.',
    },
    {
      n: '05',
      h3: 'Fixed price — no hourly billing surprises',
      body: 'Every React Native project is scoped and priced upfront. No hourly billing, no scope creep invoices, no surprise charges for Play Store or App Store submission, Razorpay integration or post-launch fixes.',
    },
    {
      n: '06',
      h3: '100+ apps delivered — startups to enterprises',
      body: 'NNC has delivered 100+ mobile apps for on-demand services, ecommerce, healthcare, logistics and enterprise clients across Mumbai. 4.9★ on Google.',
    },
  ],
  techStack: ['React Native', 'JavaScript', 'TypeScript', 'Redux', 'Firebase', 'Razorpay', 'REST APIs', 'Fastlane'],
  h2Tech: 'React Native Technology Stack',
  h2Faq: 'React Native App Development Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best React Native app development company in Mumbai?',
      a: "NNC Digital is among Mumbai's top React Native development companies — 100+ apps delivered, 4.9★ Google rating, branch office in Thane West. Cross-platform iOS and Android from a single JavaScript codebase. Weekly builds, fixed price, zero outsourcing.",
    },
    {
      q: 'How much does React Native app development cost in Mumbai?',
      a: 'A React Native MVP app for iOS and Android starts from ₹75,000. A full-featured business app typically costs ₹1,50,000–₹2,50,000. All projects are fixed-price — no hourly billing, no surprise invoices.',
    },
    {
      q: 'Can I hire dedicated React Native developers in Mumbai?',
      a: 'Yes. Hire dedicated React Native and JavaScript developers from NNC Mumbai on a project or retainer basis. All are full-time NNC employees — not freelancers. Meet them at our Thane West office.',
    },
    {
      q: 'React Native vs Flutter for my Mumbai app?',
      a: "React Native suits businesses in the JS ecosystem or those with an existing React web app. Flutter gives more precise custom UI control. NNC's Mumbai team recommends the right framework after reviewing your requirements.",
    },
    {
      q: 'Will you handle Play Store and App Store submission?',
      a: 'Yes — completely. NNC manages the full submission for both stores including listing, screenshots, content rating, review responses and release management. Post-launch updates also covered.',
    },
    {
      q: 'How long does React Native development take in Mumbai?',
      a: 'A React Native MVP takes 6–8 weeks. A full business app takes 10–14 weeks. Enterprise platforms take 14–24 weeks. Every timeline is agreed in writing before development begins.',
    },
  ],
}

export default function ReactNativeAppDevelopmentMumbaiPage() {
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
