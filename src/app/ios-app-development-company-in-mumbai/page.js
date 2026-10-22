import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'iOS App Development Company in Mumbai | NNC Digital',
  description:
    'Top iOS app development company in Mumbai. Native iPhone & iPad app development in Swift, App Store deployment, enterprise iOS apps. Hire iOS developers in Mumbai — office in Thane West. Fixed price.',
  alternates: {
    canonical: `${SITE.url}/ios-app-development-company-in-mumbai`,
  },
  keywords:
    'ios app development company in mumbai, iphone app development mumbai, ipad app development mumbai, swift app development mumbai, hire ios developers mumbai, native ios app development mumbai, apple app development mumbai, ios application development mumbai',
  openGraph: {
    title: 'iOS App Development Company in Mumbai | NNC Digital',
    description:
      'Native iPhone & iPad app development in Mumbai — Swift, App Store deployment, enterprise iOS apps. Hire iOS developers with office in Thane West. Fixed price.',
    url: `${SITE.url}/ios-app-development-company-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'iOS App Development Company in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'iOS App Development Company in Mumbai | NNC Digital',
    description:
      'iOS app developers in Mumbai — Swift, native iPhone & iPad apps, App Store deployment. Office in Thane West. Fixed price.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'iOS App Development Company in Mumbai',
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
    'Apple App Development',
    'Enterprise iOS App Development',
    'App Store Deployment',
  ],
  description:
    'Native iOS app development for Mumbai businesses — Swift, iPhone & iPad apps, App Store deployment and enterprise iOS platforms. Branch office in Thane West.',
  url: `${SITE.url}/ios-app-development-company-in-mumbai`,
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
      name: 'Mobile App Development Mumbai',
      item: `${SITE.url}/mobile-app-development-company-in-mumbai`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'iOS App Development Company in Mumbai',
      item: `${SITE.url}/ios-app-development-company-in-mumbai`,
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
        text: "NNC Digital is among Mumbai's top-rated iOS app development companies — 100+ apps delivered, 4.9★ Google rating, branch office in Thane West. We build native iPhone and iPad apps in Swift with full App Store submission handled end-to-end.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build native iPhone and iPad apps in Swift in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds native iOS apps in Swift for both iPhone and iPad in Mumbai. Swift is Apple\'s official language — faster, safer and more expressive than Objective-C. Every app follows Apple\'s Human Interface Guidelines for App Store approval and a premium user experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does iPhone app development cost in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A native iOS MVP app starts from ₹75,000. A full-featured iPhone and iPad business app typically costs ₹1,50,000–₹2,50,000. Enterprise iOS platforms are scoped individually. All projects are fixed-price — no hourly billing, no surprise invoices. Visit our Thane West office for a free consultation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will you handle App Store submission for my Mumbai iOS app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — completely. NNC manages the full App Store submission process including Apple Developer account setup, app listing, screenshots, preview videos, metadata, review responses and TestFlight beta distribution. Post-launch updates and version releases also handled.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I hire dedicated iOS developers in Mumbai from NNC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can hire dedicated Swift iOS developers from NNC Mumbai on a project or retainer basis. All are full-time NNC employees — not freelancers or outsourced contractors. You can meet them at our Thane West, Mumbai office.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build enterprise iOS apps for Mumbai businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds enterprise iOS applications for Mumbai corporates — role-based access, ERP/CRM integration, MDM (Mobile Device Management) support, offline capability and enterprise-grade security. We have delivered enterprise iOS platforms for logistics, healthcare, retail and financial services companies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have an iOS app development office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. You can visit us to test iOS builds on real iPhones and iPads and meet the Swift development team.',
      },
    },
  ],
}

const data = {
  badge: 'iOS App Development · Mumbai',
  h1: 'iOS App Development',
  h1Accent: 'Company in Mumbai',
  tagline:
    'Native iPhone & iPad app development in Mumbai — Swift, App Store deployment, enterprise iOS platforms and custom iOS application development. Hire iOS developers with office in Thane West. Fixed price.',
  desc:
    'NNC Digital is a dedicated iOS app development company in Mumbai building native iPhone and iPad applications in Swift for startups, SMEs and enterprises across Mumbai, Thane and Navi Mumbai. From App Store MVP apps and custom iOS application development to enterprise iOS platforms — every app is built by our in-house iOS developers with zero outsourcing, full App Store submission, TestFlight beta builds and complete source code ownership on delivery.',
  stat1: '100+',
  stat1Label: 'Mobile Apps Delivered',
  serviceName: 'iOS app development in Mumbai',
  h2Features: 'iOS App Development Services in Mumbai',
  features: [
    {
      h3: 'Native iOS App Development Mumbai',
      desc: 'Fully native iPhone and iPad apps built in Swift — Apple\'s official language. Maximum performance, full access to iOS APIs and tight integration with Face ID, Apple Pay, push notifications and device hardware.',
    },
    {
      h3: 'iPhone App Development Mumbai',
      desc: 'iPhone-first iOS apps optimised for every iPhone model — from SE to Pro Max. Fluid animations, responsive layouts and performance tuned to Apple\'s Human Interface Guidelines for fast App Store approval.',
    },
    {
      h3: 'iPad App Development Mumbai',
      desc: 'Dedicated iPad apps with split-view, multi-window support, Apple Pencil integration and keyboard shortcuts — ideal for enterprise dashboards, field service apps and creative tools used by Mumbai businesses.',
    },
    {
      h3: 'Swift App Development Mumbai',
      desc: 'Modern Swift development with SwiftUI for declarative interfaces, async/await for clean networking, Combine for reactive data flows and Core Data for offline-first data persistence.',
    },
    {
      h3: 'Apple App Development & App Store Submission Mumbai',
      desc: 'End-to-end Apple app development — from design and Swift coding through TestFlight beta testing, App Store submission, review responses and post-launch update releases. Fully managed by NNC Mumbai.',
    },
    {
      h3: 'iOS Application Development Mumbai',
      desc: 'Full-lifecycle iOS application development — requirements, UI/UX design, Swift development, QA on real Apple devices, App Store submission and ongoing support. Single point of accountability throughout.',
    },
    {
      h3: 'Enterprise iOS App Development Mumbai',
      desc: 'Enterprise iOS apps for Mumbai corporates — role-based access, ERP/CRM integration, MDM support, offline-first capability, Apple Business Manager deployment and enterprise-grade security.',
    },
    {
      h3: 'On-demand & Ecommerce iOS Apps Mumbai',
      desc: 'On-demand service apps, booking platforms and ecommerce iOS apps with Apple Pay, Razorpay integration, real-time tracking, push notifications and seamless checkout for Mumbai consumers.',
    },
    {
      h3: 'Hire iOS Developers Mumbai',
      desc: 'Hire dedicated Swift iOS developers from NNC Mumbai on a project or retainer basis. All are full-time Apple-platform engineers — not freelancers. Meet them at our Thane West branch office.',
    },
  ],
  h2Why: 'Why Choose NNC as Your iOS App Development Company in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — test on real iPhones & iPads',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to test your iOS app on real iPhone and iPad hardware, review Swift builds face-to-face and meet the developers writing your code.',
    },
    {
      n: '02',
      h3: 'Native Swift — not a cross-platform compromise',
      body: 'NNC builds true native iOS in Swift. Superior performance, full access to every iOS API and a UI that feels exactly like Apple intended — something no cross-platform framework can fully replicate.',
    },
    {
      n: '03',
      h3: 'Weekly TestFlight builds — full visibility throughout',
      body: 'Every week you receive a TestFlight build installable directly on your iPhone or iPad. You test exactly what is being built at every stage — not just a final handover after months of silent development.',
    },
    {
      n: '04',
      h3: 'Full App Store submission handled end-to-end',
      body: 'NNC manages the complete App Store submission — listing, screenshots, preview videos, content rating, review responses and release management. Post-launch updates and version releases also covered.',
    },
    {
      n: '05',
      h3: 'Fixed price — no hourly billing surprises',
      body: 'Every iOS app project is scoped and priced upfront. No hourly billing, no scope creep invoices, no surprise charges for App Store submission, Apple Pay integration or post-launch bug fixes within warranty.',
    },
    {
      n: '06',
      h3: '100+ apps delivered — startups to enterprises',
      body: 'NNC has delivered 100+ mobile apps including native iOS applications for on-demand services, ecommerce, healthcare, logistics and enterprise clients across Mumbai. 4.9★ on Google.',
    },
  ],
  techStack: ['Swift', 'SwiftUI', 'UIKit', 'Xcode', 'Core Data', 'Firebase', 'Razorpay', 'TestFlight'],
  h2Tech: 'iOS Development Technology Stack',
  h2Faq: 'iOS App Development Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best iOS app development company in Mumbai?',
      a: "NNC Digital is among Mumbai's top iOS app development companies — 100+ apps delivered, 4.9★ Google rating, branch office in Thane West. Native Swift development, weekly TestFlight builds and full App Store submission handled end-to-end.",
    },
    {
      q: 'Do you build iPhone and iPad apps in Swift in Mumbai?',
      a: "Yes. NNC builds native iPhone and iPad apps in Swift for all new iOS projects — Apple's official language. We follow Apple's Human Interface Guidelines ensuring fast App Store approval and a premium user experience.",
    },
    {
      q: 'How much does iPhone app development cost in Mumbai?',
      a: 'A native iOS MVP app starts from ₹75,000. A full iPhone and iPad business app typically costs ₹1,50,000–₹2,50,000. Enterprise iOS platforms are scoped individually. All projects are fixed-price — no hourly billing.',
    },
    {
      q: 'Can I hire dedicated iOS developers in Mumbai?',
      a: 'Yes. Hire dedicated Swift iOS developers from NNC Mumbai on a project or retainer basis. All are full-time NNC employees — not freelancers. Meet them at our Thane West office.',
    },
    {
      q: 'Will you handle App Store submission for my app?',
      a: 'Yes — completely. NNC manages the full App Store submission including listing, screenshots, preview videos, content rating, TestFlight beta and review responses. Post-launch updates also covered.',
    },
    {
      q: 'Do you build enterprise iOS apps in Mumbai?',
      a: 'Yes. NNC builds enterprise iOS applications with role-based access, ERP/CRM integration, MDM support and offline capability for Mumbai corporates in logistics, healthcare, retail and financial services.',
    },
  ],
}

export default function IosAppDevelopmentMumbaiPage() {
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
