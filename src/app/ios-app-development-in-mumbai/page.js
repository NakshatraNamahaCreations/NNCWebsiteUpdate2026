import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'iOS App Development in Mumbai | iPhone App Experts',
  description:
    'Choose iOS app development in Mumbai to build high performance iPhone apps, with NNC delivering secure, scalable, and user friendly mobile solutions.',
  alternates: {
    canonical: `${SITE.url}/ios-app-development-in-mumbai`,
  },
  keywords:
    'ios app development in mumbai, ios app development mumbai, iphone app development mumbai, iphone app experts mumbai, swift app development mumbai, ios developers mumbai, hire ios developers mumbai, ios mobile app mumbai, apple app development mumbai',
  openGraph: {
    title: 'iOS App Development in Mumbai | iPhone App Experts',
    description:
      'Choose iOS app development in Mumbai to build high performance iPhone apps, with NNC delivering secure, scalable, and user friendly mobile solutions.',
    url: `${SITE.url}/ios-app-development-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'iOS App Development in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'iOS App Development in Mumbai | iPhone App Experts',
    description:
      'Choose iOS app development in Mumbai to build high performance iPhone apps, with NNC delivering secure, scalable, and user friendly mobile solutions.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'iOS App Development in Mumbai',
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
    'iOS App Development',
    'iPhone App Development',
    'iPad App Development',
    'Swift App Development',
    'Native iOS App Development',
    'Enterprise iOS App Development',
    'App Store Deployment',
  ],
  description:
    'iOS app development in Mumbai — high performance, secure and scalable native iPhone apps in Swift. User friendly mobile solutions for Mumbai businesses. Branch office in Thane West.',
  url: `${SITE.url}/ios-app-development-in-mumbai`,
  offers: [
    {
      '@type': 'Offer',
      name: 'iOS MVP App Mumbai',
      price: '75000',
      priceCurrency: 'INR',
      description: 'Native Swift iPhone MVP app with up to 8 screens, basic backend and App Store deployment.',
    },
    {
      '@type': 'Offer',
      name: 'iOS Business App Mumbai',
      price: '175000',
      priceCurrency: 'INR',
      description: 'Full-featured native iPhone & iPad app with admin panel, Razorpay integration and analytics.',
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
      name: 'iOS App Development Company Mumbai',
      item: `${SITE.url}/ios-app-development-company-in-mumbai`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'iOS App Development in Mumbai',
      item: `${SITE.url}/ios-app-development-in-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best iOS app development company in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Mumbai's top-rated iOS app development companies — 100+ apps delivered, 4.9★ Google rating, branch office in Thane West. We build high performance, secure and scalable native iPhone apps in Swift with user friendly mobile solutions.",
      },
    },
    {
      '@type': 'Question',
      name: 'What does iOS app development in Mumbai include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC's iOS app development in Mumbai includes requirements analysis, UI/UX design, native Swift development, QA on real Apple devices, TestFlight beta builds, App Store submission and post-launch support. Every app is built from scratch — secure, scalable and user friendly.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does iPhone app development cost in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A native iOS MVP app starts from ₹75,000. A full-featured iPhone and iPad business app typically costs ₹1,50,000–₹2,50,000. Enterprise iOS platforms are scoped individually. All projects are fixed-price — no hourly billing, no surprise invoices.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does iOS app development take in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An iOS MVP app takes 6–8 weeks. A full business app takes 10–14 weeks. Enterprise platforms take 14–24 weeks. Every timeline is agreed in writing before development begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I hire dedicated iPhone app experts in Mumbai from NNC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can hire dedicated Swift iOS developers from NNC Mumbai on a project or retainer basis. All are full-time NNC employees — not freelancers or outsourced contractors. Meet them at our Thane West, Mumbai office.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will you handle App Store submission for my Mumbai iOS app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — completely. NNC manages the full App Store submission including listing, screenshots, preview videos, metadata, TestFlight beta distribution, review responses and post-launch update releases.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have an iOS app development office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to test iOS builds on real iPhones and iPads and meet the Swift development team.',
      },
    },
  ],
}

const data = {
  badge: 'iOS App Development · Mumbai',
  h1: 'iOS App Development',
  h1Accent: 'in Mumbai',
  tagline:
    'Expert iOS app development in Mumbai — high performance, secure and scalable native iPhone apps in Swift. User friendly mobile solutions for Mumbai businesses. TestFlight builds. Office in Thane West. Fixed price.',
  desc:
    'NNC Digital provides expert iOS app development in Mumbai for startups, SMEs and enterprises across Mumbai, Thane and Navi Mumbai. Build high performance iPhone apps with our in-house Swift developers — secure, scalable and user friendly mobile solutions tailored to your business needs. From App Store MVP apps to enterprise iOS platforms, every project is built with zero outsourcing, weekly TestFlight builds and complete source code ownership on delivery.',
  stat1: '100+',
  stat1Label: 'Mobile Apps Delivered',
  serviceName: 'iOS app development in Mumbai',
  h2Features: 'iOS App Development Services in Mumbai',
  features: [
    {
      h3: 'Native iPhone App Development Mumbai',
      desc: "Fully native iPhone apps built in Swift — Apple's official language. Maximum performance, full access to iOS APIs and tight integration with Face ID, Apple Pay, push notifications and device hardware.",
    },
    {
      h3: 'Swift App Development Mumbai',
      desc: 'Modern Swift development with SwiftUI for declarative interfaces, async/await for clean networking, Combine for reactive data flows and Core Data for offline-first data persistence.',
    },
    {
      h3: 'Secure iOS App Development Mumbai',
      desc: 'Security-first iOS development — encrypted data storage, certificate pinning, biometric authentication (Face ID/Touch ID), secure API communication and Apple security best practices throughout.',
    },
    {
      h3: 'Scalable iOS App Development Mumbai',
      desc: 'Scalable iOS architecture — clean MVVM or VIPER patterns, modular codebase, efficient memory management and optimised API calls ensuring your app performs flawlessly as your Mumbai user base grows.',
    },
    {
      h3: 'App Store Submission Mumbai',
      desc: 'End-to-end App Store submission — listing, screenshots, preview videos, metadata, content rating, TestFlight beta distribution, review responses and release management. Fully handled by NNC Mumbai.',
    },
    {
      h3: 'iPad App Development Mumbai',
      desc: 'Dedicated iPad apps with split-view, multi-window support, Apple Pencil integration and keyboard shortcuts — ideal for enterprise dashboards, field service apps and creative tools for Mumbai businesses.',
    },
    {
      h3: 'Enterprise iOS App Development Mumbai',
      desc: 'Enterprise iOS apps for Mumbai corporates — role-based access, ERP/CRM integration, MDM support, offline-first capability and Apple Business Manager deployment with enterprise-grade security.',
    },
    {
      h3: 'On-demand & Ecommerce iOS Apps Mumbai',
      desc: 'On-demand service apps, booking platforms and ecommerce iOS apps with Apple Pay, Razorpay integration, real-time tracking and push notifications — built for Mumbai consumers.',
    },
    {
      h3: 'Hire iPhone App Experts Mumbai',
      desc: 'Hire dedicated Swift iOS developers from NNC Mumbai on a project or retainer basis. All are full-time Apple-platform engineers — not freelancers. Meet them at our Thane West branch office.',
    },
  ],
  h2Why: 'Why Choose NNC for iOS App Development in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — test on real iPhones & iPads',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to test your iOS app on real iPhone and iPad hardware, review Swift builds face-to-face and meet the developers building your app.',
    },
    {
      n: '02',
      h3: 'Native Swift — high performance and secure',
      body: 'NNC builds true native iOS in Swift. Superior performance, full access to every iOS API, tighter security and a UI that feels exactly like Apple intended — something no cross-platform framework can fully replicate.',
    },
    {
      n: '03',
      h3: 'Weekly TestFlight builds — full visibility throughout',
      body: 'Every week you receive a TestFlight build installable directly on your iPhone or iPad. Test exactly what is being built at every stage — complete transparency from sprint one to App Store launch.',
    },
    {
      n: '04',
      h3: 'Full App Store submission handled end-to-end',
      body: 'NNC manages the complete App Store submission — listing, screenshots, preview videos, content rating, review responses and release management. Post-launch updates and version releases also covered.',
    },
    {
      n: '05',
      h3: 'Fixed price — no hourly billing surprises',
      body: 'Every iOS app project is scoped and priced upfront. No hourly billing, no scope creep invoices, no surprise charges for App Store submission, Apple Pay integration or post-launch bug fixes.',
    },
    {
      n: '06',
      h3: '100+ apps delivered — 4.9★ Google rating',
      body: 'NNC has delivered 100+ mobile apps including native iOS applications for on-demand services, ecommerce, healthcare, logistics and enterprise clients across Mumbai. 4.9★ on Google.',
    },
  ],
  techStack: ['Swift', 'SwiftUI', 'UIKit', 'Xcode', 'Core Data', 'Firebase', 'Razorpay', 'TestFlight'],
  h2Tech: 'iOS Development Technology Stack',
  h2Faq: 'iOS App Development Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best iOS app development company in Mumbai?',
      a: "NNC Digital is among Mumbai's top iOS app development companies — 100+ apps delivered, 4.9★ Google rating, branch office in Thane West. High performance, secure and scalable native Swift iPhone apps.",
    },
    {
      q: 'How much does iOS app development cost in Mumbai?',
      a: 'A native iOS MVP app starts from ₹75,000. A full iPhone and iPad business app typically costs ₹1,50,000–₹2,50,000. Enterprise iOS platforms are scoped individually. All fixed-price — no hourly billing.',
    },
    {
      q: 'How long does iOS app development take in Mumbai?',
      a: 'An iOS MVP takes 6–8 weeks. A full business app takes 10–14 weeks. Enterprise platforms take 14–24 weeks. All timelines agreed in writing before development begins.',
    },
    {
      q: 'Can I hire dedicated iPhone app experts in Mumbai?',
      a: 'Yes. Hire dedicated Swift iOS developers from NNC Mumbai on a project or retainer basis. All are full-time NNC employees — not freelancers. Meet them at our Thane West office.',
    },
    {
      q: 'Will you handle App Store submission for my app?',
      a: 'Yes — completely. NNC manages the full App Store submission including listing, screenshots, TestFlight beta, review responses and release management.',
    },
    {
      q: 'Do you have an iOS development office in Mumbai?',
      a: 'Yes. NNC has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to test builds on real iPhones and iPads and meet the Swift development team.',
    },
  ],
}

export default function IosAppDevelopmentInMumbaiPage() {
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
