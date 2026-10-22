import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'App Developers in Bangalore | Scalable App Development',
  description:
    'Build high performance mobile apps with expert app developers in Bangalore, where NNC delivers scalable solutions with modern UI and seamless user experience.',
  alternates: {
    canonical: `${SITE.url}/app-developers-in-bangalore`,
  },
  keywords:
    'app developers in bangalore, mobile app developers bangalore, app development bangalore, hire app developers bangalore, android app developers bangalore, ios app developers bangalore, react native developers bangalore, flutter developers bangalore',
  openGraph: {
    title: 'App Developers in Bangalore | Scalable App Development',
    description:
      'Build high performance mobile apps with expert app developers in Bangalore, where NNC delivers scalable solutions with modern UI and seamless user experience.',
    url: `${SITE.url}/app-developers-in-bangalore`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'App Developers in Bangalore – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'App Developers in Bangalore | Scalable App Development',
    description:
      'Build high performance mobile apps with expert app developers in Bangalore, where NNC delivers scalable solutions with modern UI and seamless user experience.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'App Developers in Bangalore',
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
    'App Development',
    'Mobile App Development',
    'Android App Development',
    'iOS App Development',
    'React Native Development',
    'Flutter Development',
  ],
  description:
    'Expert app developers in Bangalore — Android, iOS, React Native and Flutter app development. Scalable mobile apps with modern UI and seamless user experience.',
  url: `${SITE.url}/app-developers-in-bangalore`,
  offers: [
    {
      '@type': 'Offer',
      name: 'MVP App Development Bangalore',
      price: '75000',
      priceCurrency: 'INR',
      description: 'MVP mobile app — React Native, up to 8 screens, backend API, user auth and Play Store deployment.',
    },
    {
      '@type': 'Offer',
      name: 'Full Business App Development Bangalore',
      price: '175000',
      priceCurrency: 'INR',
      description: 'Full-featured business app — React Native or Flutter, up to 20 screens, payment gateway, push notifications, AWS hosting.',
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
      name: 'App Developers in Bangalore',
      item: `${SITE.url}/app-developers-in-bangalore`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I find the best app developers in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital has some of Bangalore's best app developers — 150+ apps delivered, 4.9★ Google rating, 35+ in-house specialists headquartered in Whitefield, Bangalore. We build Android, iOS, React Native and Flutter apps for startups, SMEs and enterprises.",
      },
    },
    {
      '@type': 'Question',
      name: 'What kind of apps do NNC app developers build in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC app developers in Bangalore build all types of mobile apps — e-commerce apps, on-demand service apps, healthcare apps, edtech apps, fintech apps, OTT streaming apps, logistics apps, HRMS apps and custom business applications.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do NNC app developers in Bangalore build Android and iOS apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC app developers build both Android and iOS apps using React Native or Flutter — a single codebase delivering native-quality apps on both platforms, saving 30–40% in development time and cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I hire dedicated app developers in Bangalore from NNC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides dedicated app developers in Bangalore — React Native, Flutter, Android (Kotlin) and iOS (Swift) developers available on project or monthly retainer basis. In-house team with transparent reporting and consistent code quality.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to hire app developers in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An MVP app built by NNC app developers in Bangalore starts from ₹75,000. A full business app starts from ₹1,75,000. All fixed-price projects — scope and cost agreed before development begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do NNC app developers handle Play Store and App Store submission?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC app developers in Bangalore manage the full Play Store and App Store submission process — store listing, screenshots, review responses and release management on both platforms.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are NNC app developers based in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All NNC app developers are full-time employees based at our Bangalore office — Prestige Shantiniketan, Whitefield, Bangalore 560048. Zero outsourcing, zero freelancers. Visit us to meet the team building your app.',
      },
    },
  ],
}

const data = {
  badge: 'App Developers · Bangalore',
  h1: 'App Developers',
  h1Accent: 'in Bangalore',
  tagline:
    'Expert app developers in Bangalore — Android app developers, iOS app developers, React Native developers, Flutter developers. Scalable mobile apps with modern UI and seamless user experience. Fixed price.',
  desc:
    'NNC Digital has a 35+ member in-house team of app developers in Bangalore building high-performance Android and iOS apps using React Native and Flutter. From MVP apps for startups to complex multi-role enterprise platforms — every app is built, tested and deployed by our dedicated Bangalore app development team with zero outsourcing, fixed-price contracts and 100% source code ownership on delivery.',
  stat1: '150+',
  stat1Label: 'Apps Delivered',
  serviceName: 'app development in Bangalore',
  h2Features: 'App Development Services by Our Bangalore Developers',
  features: [
    {
      h3: 'React Native App Developers Bangalore',
      desc: 'React Native developers in Bangalore building cross-platform apps for Android and iOS from a single codebase. 60fps performance, native device APIs and 30–40% faster delivery than separate native builds.',
    },
    {
      h3: 'Flutter App Developers Bangalore',
      desc: 'Flutter developers in Bangalore delivering pixel-perfect, design-heavy apps with smooth animations and consistent UI across Android and iOS. Ideal for consumer apps and brands with strong visual identity.',
    },
    {
      h3: 'Android App Developers Bangalore',
      desc: 'Native Android developers in Bangalore using Kotlin — for apps requiring deep hardware integration, Play Store exclusives or performance-critical features not achievable in cross-platform frameworks.',
    },
    {
      h3: 'iOS App Developers Bangalore',
      desc: 'Native iOS developers in Bangalore using Swift — for apps requiring App Store-specific features, ARKit, CoreML or HealthKit integration. Full App Store submission support included.',
    },
    {
      h3: 'Full Stack App Developers Bangalore',
      desc: 'Full stack app developers in Bangalore covering both mobile and backend — React Native or Flutter frontend, Node JS REST APIs, MongoDB or PostgreSQL database and AWS cloud infrastructure.',
    },
    {
      h3: 'Hire Dedicated App Developers Bangalore',
      desc: 'Hire dedicated app developers from NNC Bangalore — on project or monthly retainer basis. In-house developers with daily stand-ups, weekly demos and transparent progress tracking via project management tools.',
    },
    {
      h3: 'App UI/UX Design Bangalore',
      desc: 'App UI/UX design by our Bangalore developers — Figma wireframes, screen-by-screen UI design and interactive prototypes before any code is written. User-tested designs that maximise retention and engagement.',
    },
    {
      h3: 'App Testing & QA Bangalore',
      desc: 'Rigorous QA by NNC app developers in Bangalore — tested on 15+ real devices, performance benchmarks, crash testing and battery usage analysis before Play Store or App Store submission.',
    },
    {
      h3: 'App Maintenance & Updates Bangalore',
      desc: '30 days post-launch support included. Ongoing app maintenance by our Bangalore developers — OS compatibility updates, performance fixes, new feature development and store listing management.',
    },
  ],
  h2Why: 'Why Choose NNC App Developers in Bangalore?',
  why: [
    {
      n: '01',
      h3: 'Bangalore office — meet your developers in person',
      body: 'NNC is headquartered at Prestige Shantiniketan, Whitefield, Bangalore. Visit us to review app wireframes, test builds on real devices and meet the developers building your app.',
    },
    {
      n: '02',
      h3: '35+ in-house app developers — zero outsourcing',
      body: 'Every React Native, Flutter, Android and iOS developer is a full-time NNC employee in Bangalore. No freelancers, no offshore outsourcing — the same team from kickoff to App Store launch.',
    },
    {
      n: '03',
      h3: 'Weekly APK/TestFlight drops — full visibility',
      body: 'NNC app developers share live builds every week via APK (Android) and TestFlight (iOS). You see and test real progress on your own device throughout development — not just status updates.',
    },
    {
      n: '04',
      h3: 'Fixed price — scope locked before development starts',
      body: 'Every app project is scoped in detail and priced upfront. No hourly billing, no surprise invoices. You know the exact cost, screen count and timeline before your first developer writes a line of code.',
    },
    {
      n: '05',
      h3: 'Source code 100% yours — no lock-in',
      body: 'On delivery you receive the complete app source code, backend code, database schema and all credentials. The app is entirely yours — no ongoing obligation to NNC.',
    },
    {
      n: '06',
      h3: '150+ apps delivered — 4.9★ Google rating',
      body: 'NNC app developers have built on-demand apps, fintech apps, OTT platforms, healthcare apps and enterprise tools across Bangalore. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['React Native', 'Flutter', 'Kotlin', 'Swift', 'Node JS', 'AWS', 'Firebase', 'Figma'],
  h2Tech: 'App Development Technology Stack',
  h2Faq: 'App Developers in Bangalore — Frequently Asked Questions',
  faqs: [
    {
      q: 'Where can I find the best app developers in Bangalore?',
      a: "NNC Digital has Bangalore's top app developers — 150+ apps delivered, 4.9★ rating, 35+ in-house specialists. Android, iOS, React Native and Flutter — all in-house at Whitefield, Bangalore.",
    },
    {
      q: 'Do NNC app developers build Android and iOS apps?',
      a: 'Yes. NNC builds both Android and iOS apps using React Native or Flutter — one codebase, both platforms, saving 30–40% in cost and time.',
    },
    {
      q: 'Can I hire dedicated app developers in Bangalore from NNC?',
      a: 'Yes. NNC provides dedicated app developers on project or monthly retainer — React Native, Flutter, Android and iOS developers with daily stand-ups and transparent reporting.',
    },
    {
      q: 'How much does app development cost in Bangalore?',
      a: 'MVP apps start from ₹75,000. Full business apps start from ₹1,75,000. All fixed-price — scope and cost agreed upfront.',
    },
    {
      q: 'Do NNC app developers handle Play Store and App Store submission?',
      a: 'Yes. NNC manages full submission — store listing, screenshots, review responses and release management on both platforms.',
    },
    {
      q: 'Are NNC app developers based in Bangalore?',
      a: 'Yes. All developers are full-time employees at our Bangalore office — Prestige Shantiniketan, Whitefield, Bangalore 560048. Zero outsourcing.',
    },
  ],
}

export default function AppDevelopersBangalorePage() {
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
