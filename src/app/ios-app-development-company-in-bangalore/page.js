import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'iOS App Development Company in Bangalore | NNC Digital',
  description:
    'Top iOS app development company in Bangalore. iPhone app development, iPad app development, Swift app development, hire iOS developers, native iOS app development, Apple app development & iOS application development for Bangalore businesses. Fixed price.',
  alternates: {
    canonical: `${SITE.url}/ios-app-development-company-in-bangalore`,
  },
  keywords:
    'ios app development company in bangalore, iphone app development bangalore, ipad app development bangalore, swift app development bangalore, hire ios developers bangalore, native ios app development bangalore, apple app development bangalore, ios application development bangalore',
  openGraph: {
    title: 'iOS App Development Company in Bangalore | NNC Digital',
    description:
      'iOS app development company in Bangalore — iPhone app development, iPad app, Swift development, native iOS, Apple app development & hire iOS developers. Fixed price.',
    url: `${SITE.url}/ios-app-development-company-in-bangalore`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'iOS App Development Company in Bangalore – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'iOS App Development Company in Bangalore | NNC Digital',
    description:
      'iOS app development company in Bangalore — iPhone, iPad, Swift, native iOS & Apple app development. Fixed price.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'iOS App Development Company in Bangalore',
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
    'iOS App Development',
    'iPhone App Development',
    'iPad App Development',
    'Swift App Development',
    'Native iOS Development',
    'Apple App Development',
  ],
  description:
    'iOS app development company in Bangalore — iPhone app development, iPad app development, Swift development, native iOS apps and Apple app development for Bangalore businesses.',
  url: `${SITE.url}/ios-app-development-company-in-bangalore`,
  offers: [
    {
      '@type': 'Offer',
      name: 'iPhone App Development Bangalore — Starter',
      price: '50000',
      priceCurrency: 'INR',
      description: 'Native iPhone app — core features, Swift UI, backend API integration, App Store submission and 3 months support.',
    },
    {
      '@type': 'Offer',
      name: 'iPhone & iPad App Bangalore — Enterprise',
      price: '150000',
      priceCurrency: 'INR',
      description: 'Enterprise-grade iOS application for iPhone and iPad — complex workflows, system integrations, offline capability and admin dashboard.',
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
      name: 'iOS App Development Company in Bangalore',
      item: `${SITE.url}/ios-app-development-company-in-bangalore`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best iOS app development company in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Bangalore's top-rated iOS app development companies — 565+ projects delivered, 4.9★ Google rating, headquartered in Whitefield, Bangalore. We build native iPhone and iPad apps in Swift for startups, SMEs and enterprise clients across all industries.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build native iPhone apps in Swift in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. NNC builds native iPhone app development in Bangalore using Swift and SwiftUI — Apple's modern language and UI framework. Native iOS apps deliver better performance, full access to iOS APIs and a polished user experience consistent with Apple's Human Interface Guidelines.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build iPad apps for Bangalore businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds iPad app development for Bangalore businesses — iPad-optimised layouts with Split View, multi-column navigation, Apple Pencil support and iPadOS-specific APIs. Enterprise iPad apps for field operations, presentations, kiosks and data entry workflows.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build enterprise iOS applications in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds enterprise iOS app development for Bangalore companies — field force apps, MDM-compatible enterprise apps, ERP/CRM-integrated iPhone apps, offline-capable apps with background sync and multi-user role management.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle App Store submission for Bangalore iOS apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC handles full App Store submission for Bangalore iOS apps — provisioning profiles, code signing, TestFlight beta distribution, App Store Connect listing, screenshots, app preview videos, metadata and App Review response management.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does iOS app development cost in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A native iPhone app in Bangalore starts from ₹50,000 — covering core features, Swift UI, backend API integration and App Store submission. Enterprise iOS applications for iPhone and iPad typically cost ₹1,50,000–₹5,00,000. All fixed-price — no hourly billing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have an iOS app development office in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital is headquartered in Bangalore at Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit us to review your iPhone app wireframes, test UI prototypes on real Apple devices and meet the iOS development team building your application.',
      },
    },
  ],
}

const data = {
  badge: 'iOS App Development · Bangalore',
  h1: 'iOS App Development Company',
  h1Accent: 'in Bangalore',
  tagline:
    'Top iOS app development company in Bangalore — iPhone app development, iPad app development, Swift app development, native iOS app development, hire iOS developers, Apple app development & iOS application development. Fixed price.',
  desc:
    'NNC Digital is a specialist iOS app development company in Bangalore building native iPhone and iPad applications in Swift and SwiftUI for startups, SMEs and enterprise clients. From consumer iPhone apps and iPad enterprise tools to App Store-ready products — every iOS app is built by our in-house Bangalore iOS developers with full source code ownership, zero outsourcing and fixed-price delivery.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'iOS app development in Bangalore',
  h2Features: 'iOS App Development Services in Bangalore',
  features: [
    {
      h3: 'iPhone App Development Bangalore',
      desc: "Native iPhone app development in Bangalore using Swift and SwiftUI — full access to iOS APIs, Face ID, push notifications, ARKit, CoreML and Apple's Human Interface Guidelines for polished, performant iPhone applications.",
    },
    {
      h3: 'iPad App Development Bangalore',
      desc: 'iPad app development for Bangalore businesses — iPad-optimised layouts with Split View, multi-column navigation, Apple Pencil support and iPadOS-specific APIs. Ideal for enterprise field apps, kiosks and presentation tools.',
    },
    {
      h3: 'Swift App Development Bangalore',
      desc: "Swift-first iOS development in Bangalore — Apple's modern, type-safe language with SwiftUI for declarative UI. Fast, crash-resistant apps with clean codebases that are easy to maintain and extend.",
    },
    {
      h3: 'Native iOS App Development Bangalore',
      desc: 'True native iOS development in Bangalore — not React Native or Flutter wrapped as iOS. Native apps access every iOS platform capability, deliver superior performance and provide an experience indistinguishable from Apple first-party apps.',
    },
    {
      h3: 'Apple App Development Bangalore',
      desc: 'Full Apple platform development in Bangalore — iPhone, iPad and Apple Watch apps. Consistent design language across devices, iCloud sync, Handoff, App Clip support and integration with the broader Apple ecosystem.',
    },
    {
      h3: 'iOS Application Development Bangalore — Enterprise',
      desc: 'Enterprise iOS application development for Bangalore corporates — field force apps, MDM-compatible enterprise distributions, ERP/CRM-integrated iPhone apps, offline-capable apps with background sync and multi-role management.',
    },
    {
      h3: 'Hire iOS Developers Bangalore',
      desc: 'Hire dedicated iOS developers in Bangalore from NNC — Swift and SwiftUI experts available on project or monthly retainer. In-house team, transparent daily reporting and consistent code quality with full IP ownership.',
    },
    {
      h3: 'iOS App Development Bangalore — App Store Submission',
      desc: 'Full App Store submission for Bangalore iOS apps — provisioning profiles, code signing, TestFlight beta distribution, App Store Connect listing, screenshots, app preview videos and App Review management.',
    },
    {
      h3: 'iOS App Development Bangalore — Integrations',
      desc: 'iOS app integrations for Bangalore businesses — payment gateways (Razorpay, Stripe, Apple Pay), Firebase (push notifications, analytics, crashlytics), Maps, Sign in with Apple, HealthKit, CoreLocation and third-party REST APIs.',
    },
  ],
  h2Why: 'Why Choose NNC as Your iOS App Development Company in Bangalore?',
  why: [
    {
      n: '01',
      h3: 'Bangalore headquarters — test on real Apple devices',
      body: 'NNC is headquartered in Bangalore at Prestige Shantiniketan, Whitefield. Visit us to test your iPhone app on real Apple devices, review UI prototypes and meet the Swift developers building your application.',
    },
    {
      n: '02',
      h3: 'Native Swift — not cross-platform wrappers',
      body: 'NNC builds true native iOS apps in Swift — not React Native or Flutter wrappers. Native iOS delivers better performance, full platform API access and a user experience that meets Apple Review guidelines without workarounds.',
    },
    {
      n: '03',
      h3: 'In-house iOS team — zero outsourcing',
      body: 'Every iOS developer, UI designer and QA engineer is a full-time NNC employee in Bangalore. Consistent team from brief to App Store launch — no freelancers, no offshore outsourcing.',
    },
    {
      n: '04',
      h3: 'Full stack — design, iOS, backend, APIs',
      body: 'NNC handles the complete iOS app stack — UI/UX design, Swift front-end, Node JS backend, REST APIs, database and DevOps. One team, one point of contact, no gaps between vendor teams.',
    },
    {
      n: '05',
      h3: 'Fixed price — fully scoped before development starts',
      body: 'Every iOS project is scoped in detail and priced upfront. No hourly billing, no scope creep surprises. You know the exact cost, timeline and feature list before development begins.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has built iOS apps for ecommerce, healthcare, fintech, logistics, real estate and enterprise clients across Bangalore. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['Swift', 'SwiftUI', 'Xcode', 'iOS SDK', 'Firebase', 'Core Data', 'TestFlight', 'App Store Connect'],
  h2Tech: 'iOS Development Technology Stack',
  h2Faq: 'iOS App Development Company Bangalore — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best iOS app development company in Bangalore?',
      a: "NNC Digital is among Bangalore's top iOS app development companies — 565+ projects, 4.9★ Google rating, headquartered in Whitefield. Native iPhone and iPad apps in Swift — all built in-house.",
    },
    {
      q: 'Do you build native iPhone apps in Swift in Bangalore?',
      a: 'Yes. NNC builds native iPhone apps in Swift and SwiftUI — full iOS API access, Face ID, push notifications and ARKit for Bangalore businesses.',
    },
    {
      q: 'Do you build iPad apps in Bangalore?',
      a: 'Yes. NNC builds iPad-optimised apps with Split View, Apple Pencil support and iPadOS-specific APIs for enterprise and consumer use cases.',
    },
    {
      q: 'Do you handle App Store submission in Bangalore?',
      a: 'Yes. NNC handles full App Store submission — code signing, TestFlight, App Store Connect listing, screenshots and App Review management.',
    },
    {
      q: 'How much does iOS app development cost in Bangalore?',
      a: 'iPhone apps start from ₹50,000. Enterprise iOS apps for iPhone and iPad start from ₹1,50,000. All fixed-price — no hourly billing.',
    },
    {
      q: 'Do you have an iOS app development office in Bangalore?',
      a: 'Yes. NNC is headquartered at Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit us to test on real Apple devices and meet the iOS development team.',
    },
  ],
}

export default function IosAppDevelopmentBangalorePage() {
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
