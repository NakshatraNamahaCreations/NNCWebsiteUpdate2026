import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'iOS App Development Company in Mysuru | Nakshatra Namaha Creations',
  description: 'Leading iOS app development company in Mysuru. Custom iPhone & iPad apps on Swift & React Native. App Store deployment included. 150+ apps delivered. 4.9★ Google. Walk-in Mysuru office. Fixed price. Call +91 99005 66466.',
  alternates: { canonical: `${SITE.url}/ios-app-development-company-in-mysuru` },
  keywords: [
    'ios app development company in mysuru',
    'iphone app development mysuru',
    'ipad app development mysuru',
    'swift app development mysuru',
    'hire ios developers mysuru',
    'native ios app development mysuru',
    'apple app development mysuru',
    'ios application development mysuru',
  ].join(', '),
  openGraph: {
    title: 'iOS App Development Company in Mysuru | Nakshatra Namaha Creations',
    description: 'Custom iPhone & iPad apps on Swift & React Native. App Store deployment. Walk-in Mysuru office. Fixed price. Source code yours.',
    url: `${SITE.url}/ios-app-development-company-in-mysuru`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Nakshatra Namaha Creations',
    images: [{ url: 'https://s3.eu-north-1.amazonaws.com/admin.nakshatranamahacreations.in/NNC+NEW+LOGO+2020+low+res.png', width: 1200, height: 630, alt: 'iOS App Development Company Mysuru Nakshatra Namaha Creations' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'iOS App Development Company in Mysuru | Nakshatra Namaha Creations',
    description: 'Custom iPhone & iPad apps in Mysuru. Swift, React Native. Walk-in office. Fixed price.',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'iOS App Development Company in Mysuru',
  description: 'Custom iPhone and iPad app development in Mysuru using Swift and React Native. E-commerce apps, on-demand platforms, healthcare apps, fintech apps and enterprise solutions. App Store submission handled. Walk-in office in JP Nagar, Mysuru.',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Suswani Towers, JP Nagar 2nd Stage',
      addressLocality: 'Mysuru',
      addressRegion: 'Karnataka',
      postalCode: '570008',
      addressCountry: 'IN',
    },
  },
  areaServed: ['Mysuru', 'Mysore', 'Karnataka', 'India'],
  serviceType: 'iOS App Development',
  url: `${SITE.url}/ios-app-development-company-in-mysuru`,
  offers: [
    { '@type': 'Offer', name: 'MVP iOS App', price: '85000', priceCurrency: 'INR', description: 'iPhone app with up to 8 screens, REST API backend and App Store deployment.' },
    { '@type': 'Offer', name: 'Business iOS App', price: '200000', priceCurrency: 'INR', description: 'Full-featured iPhone & iPad app with admin panel, payment gateway and push notifications.' },
    { '@type': 'Offer', name: 'Enterprise iOS Platform', description: 'Custom-scoped enterprise iOS platform with microservices, multi-role access and CRM integration.' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'iOS App Development Services Mysuru',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Swift App Development Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'iPhone App Development Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'iPad App Development Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Native iOS App Development Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'React Native iOS App Mysuru' } },
    ],
  },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/#services` },
    { '@type': 'ListItem', position: 3, name: 'Mobile App Development', item: `${SITE.url}/mobile-app-development-company-in-mysuru` },
    { '@type': 'ListItem', position: 4, name: 'iOS App Development Mysuru', item: `${SITE.url}/ios-app-development-company-in-mysuru` },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does iOS app development cost in Mysuru?', acceptedAnswer: { '@type': 'Answer', text: 'MVP iPhone apps start from ₹85,000. Business apps ₹2,00,000–₹3,00,000. Enterprise platforms scoped individually. All pricing fixed before work begins.' } },
    { '@type': 'Question', name: 'Does Nakshatra Namaha Creations handle App Store submission?', acceptedAnswer: { '@type': 'Answer', text: 'Yes completely. We manage the full Apple App Store submission — app review preparation, store listing, screenshots, description and release management.' } },
    { '@type': 'Question', name: 'Swift or React Native — which should I choose for iOS?', acceptedAnswer: { '@type': 'Answer', text: 'Swift gives the best native performance and access to all Apple APIs (ARKit, CoreML, HealthKit). React Native is ideal if you also need an Android app from the same codebase. We recommend the right approach after reviewing your requirements.' } },
    { '@type': 'Question', name: 'Does Nakshatra Namaha Creations have an office in Mysuru?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Walk-in office at Suswani Towers, JP Nagar 2nd Stage, Mysuru – 570 008. Open Mon–Sat, 9am–7pm.' } },
  ],
}

const data = {
  badge: 'iOS App Development · Mysuru',
  h1: 'iOS App Development',
  h1Accent: 'Company in Mysuru',
  tagline: 'Custom iPhone & iPad apps on Swift & React Native — built by a 35+ member in-house team with a walk-in office in JP Nagar, Mysuru. App Store deployment included. Fixed price. Source code yours.',
  desc: 'Nakshatra Namaha Creations builds high-performance iOS apps for businesses in Mysuru. Native Swift or cross-platform React Native — chosen based on your requirements. Every app is designed for the Apple ecosystem, tested on real iPhones and iPads, and submitted to the App Store by our team. Visit our Mysuru office to discuss your project.',
  stat1: '150+',
  stat1Label: 'Apps Delivered',
  serviceName: 'iOS app development in Mysuru',
  h2Features: 'What Every iOS App From Us Includes',
  features: [
    { h3: 'Native Swift Development', desc: "Apple's primary language for iOS. Type-safe, fast and gives full access to ARKit, CoreML, HealthKit, SiriKit and every native Apple framework." },
    { h3: 'React Native Cross-Platform Option', desc: 'Single codebase for iOS + Android. 30–40% faster delivery with near-native performance. Ideal when you need both platforms from one budget.' },
    { h3: 'Human Interface Guidelines Compliant', desc: "Every app follows Apple's HIG — native navigation patterns, SF Symbols, adaptive layouts and smooth 60fps animations that feel right on iPhone and iPad." },
    { h3: 'App Store Submission & Management', desc: 'Full Apple App Store deployment — app review preparation, store listing, screenshots, TestFlight beta testing and ongoing release management.' },
    { h3: 'Push Notifications & Real-time', desc: 'APNs (Apple Push Notification service) for targeted notifications. Real-time data sync with Firebase, WebSockets or custom backends.' },
    { h3: 'Apple Pay & Payment Integration', desc: 'Apple Pay, Razorpay, Stripe and UPI — seamless in-app purchases and subscription billing configured and tested before launch.' },
    { h3: 'Offline Mode & Core Data', desc: 'Core Data and local caching so your app works without internet. Seamless background sync when connectivity returns.' },
    { h3: 'Analytics & Crash Reporting', desc: 'Firebase Analytics, Crashlytics and App Store Connect analytics configured from day one. Understand user behaviour and fix issues fast.' },
    { h3: '30-Day Post-Launch Support', desc: 'Bug fixes, minor updates and App Store review responses for 30 days after launch at no extra cost.' },
  ],
  h2Why: 'Why Mysuru Businesses Choose Us for iOS Apps',
  why: [
    { n: '01', h3: 'Walk-in office in JP Nagar, Mysuru', body: "Visit Suswani Towers, JP Nagar 2nd Stage. Meet your iOS developers, review designs on a whiteboard, track progress face-to-face. Open Mon–Sat, 9am–7pm." },
    { n: '02', h3: '35+ in-house developers — zero outsourcing', body: "Every iOS developer, UI designer and QA engineer is a permanent employee. No freelancers, no offshore contractors. Walk in and meet them." },
    { n: '03', h3: 'Swift-first for native performance', body: "We build native iOS apps in Swift by default — giving you full access to Apple's ecosystem including ARKit, CoreML, HealthKit and Widgets." },
    { n: '04', h3: 'Tested on real iPhones & iPads', body: "Not just simulators. Every app is tested on real iPhone SE, iPhone 15 series, iPad Air and iPad Pro across iOS 16–18." },
    { n: '05', h3: 'Fixed price — no surprise invoices', body: "Scope, timeline and price agreed in writing before development begins. In 565+ projects, not one client has been invoiced more than agreed." },
    { n: '06', h3: 'Source code 100% yours on delivery', body: "Full source code, API keys, Apple Developer account access, certificates and provisioning profiles — everything handed over. No lock-in." },
  ],
  techStack: ['Swift', 'SwiftUI', 'React Native', 'Firebase', 'Node JS', 'MongoDB', 'AWS', 'App Store Connect'],
  h2Tech: 'iOS Development Technology Stack',
  h2Faq: 'iOS App Development in Mysuru — Questions Answered',
  faqs: [
    { q: 'How much does iOS app development cost in Mysuru?', a: 'A basic MVP iPhone app starts from ₹85,000. Full-featured business apps range from ₹2,00,000 to ₹3,00,000. Enterprise platforms are scoped individually. All pricing is fixed before work begins — no hourly billing or surprise invoices.' },
    { q: 'Swift or React Native — which is better for my iOS app?', a: "Swift gives the best native performance and full access to Apple APIs like ARKit, CoreML, HealthKit and SiriKit. React Native is ideal when you also need an Android app — one codebase saves 30–40% in cost. We recommend the right approach after understanding your requirements." },
    { q: 'How long does it take to build an iPhone app?', a: 'MVP: 6–8 weeks. Business app: 10–14 weeks. Enterprise platform: 14–24 weeks. You get weekly TestFlight builds throughout development so you can test on your own iPhone.' },
    { q: 'Will you handle App Store submission?', a: 'Yes — completely. Nakshatra Namaha Creations manages the full Apple App Store process including app review preparation, store listing optimisation, screenshots, TestFlight beta distribution and ongoing release management.' },
    { q: 'Does Nakshatra Namaha Creations have an office in Mysuru?', a: 'Yes. Our Mysuru branch is at Suswani Towers, JP Nagar 2nd Stage, Mysuru – 570 008. Walk in Monday to Saturday, 9am–7pm to meet your iOS development team. No appointment needed.' },
    { q: 'Can you build for both iOS and Android?', a: 'Yes — using React Native or Flutter. One codebase delivers both iPhone and Android apps, saving 30–40% in development time and cost while maintaining near-native performance on both platforms.' },
    { q: 'Do I own the source code?', a: 'Yes — completely and permanently. On delivery you receive the full iOS source code, backend code, Firebase credentials, Apple Developer certificates, provisioning profiles and App Store Connect access. Your app is 100% yours.' },
    { q: 'Do you build iPad apps as well?', a: 'Yes. We build universal apps that run on both iPhone and iPad with adaptive layouts, or dedicated iPad apps with split-view, drag-and-drop and Apple Pencil support when the use case requires it.' },
  ],
}

export default function IosAppMysuruPage() {
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
