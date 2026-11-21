import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'iOS & Android App Development Company in Bangalore | NNC Digital',
  description: 'Native iOS and Android app development in Bangalore. Swift, Kotlin, React Native and Flutter builds with weekly TestFlight / APK delivery.',
  alternates: { canonical: `${SITE.url}/ios-android-app-development` },
  keywords: 'ios android app development bangalore, native app development, swift app development, kotlin app development, cross platform mobile app',
  openGraph: {
    title: 'iOS & Android App Development Company in Bangalore | NNC Digital',
    description: 'Native iOS (Swift) and Android (Kotlin) plus cross-platform React Native and Flutter. Fixed price, full source ownership, weekly builds.',
    url: `${SITE.url}/ios-android-app-development`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'iOS & Android App Development NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'iOS & Android App Development',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: 'Native iOS and Android app development with Swift, Kotlin, React Native and Flutter.',
  url: `${SITE.url}/ios-android-app-development`,
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'iOS & Android Apps', item: `${SITE.url}/ios-android-app-development` },
  ],
}

const data = {
  badge: 'iOS & Android Apps',
  h1: 'iOS & Android App',
  h1Accent: 'Development Services',
  tagline: 'Native Swift (iOS) and Kotlin (Android) plus cross-platform React Native and Flutter. Fixed price, weekly builds, full source code ownership.',
  desc: 'NNC Digital builds mobile apps for both the App Store and Google Play — native where platform depth matters (ARKit, Wear OS, background services) and cross-platform where speed and budget matter. 35+ in-house mobile engineers ship to your device every week throughout development.',
  stat1: '150+',
  stat1Label: 'Mobile Apps Delivered',
  serviceName: 'iOS and Android app development',
  h2Features: 'Everything a Mobile App Needs',
  features: [
    { h3: 'Native iOS (Swift / SwiftUI)', desc: 'Pure Swift and SwiftUI for iOS apps that need the latest platform APIs — ARKit, HealthKit, Core ML and Widgets.' },
    { h3: 'Native Android (Kotlin / Jetpack)', desc: 'Kotlin and Jetpack Compose builds for Android apps needing Wear OS, background services or deep platform integration.' },
    { h3: 'Cross-platform (React Native, Flutter)', desc: 'One codebase to both stores — the fast, cost-effective path for most apps. 60% lower build cost than dual native.' },
    { h3: 'Offline-first Sync', desc: 'Local database with background sync for apps used in low-connectivity environments — field service, logistics, rural retail.' },
    { h3: 'Push Notifications', desc: 'FCM / APNS with topic, segment and user-level targeting plus in-app notification center.' },
    { h3: 'Biometric & Social Auth', desc: 'Face ID, Touch ID, fingerprint, Google, Apple and phone-OTP login flows standard.' },
    { h3: 'Payment Integration', desc: 'Razorpay, UPI, Stripe and in-app purchase integration for both platforms — fully tested before launch.' },
    { h3: 'Analytics & Crash Reporting', desc: 'Firebase, Mixpanel and Crashlytics built in with event taxonomy agreed up front so dashboards work from day one.' },
    { h3: 'Play Store & App Store Submission', desc: 'NNC handles store assets, screenshots, ASO, binary signing and review submission on your behalf.' },
  ],
  h2Why: 'Why Choose NNC for iOS & Android Development?',
  why: [
    { n: '01', h3: 'Native or cross-platform — honest advice', body: 'NNC does not default to one stack. We recommend native for platform-heavy apps and cross-platform where speed and budget matter most.' },
    { n: '02', h3: 'Weekly TestFlight / APK builds', body: 'Every sprint ships a build to your device. Track progress on real hardware, not screenshots and status reports.' },
    { n: '03', h3: '35+ in-house mobile specialists', body: 'iOS, Android, React Native and Flutter engineers — all NNC employees. Visit our Bengaluru office and meet them.' },
    { n: '04', h3: 'Fixed price — no scope creep', body: 'Every app is quoted as a fixed scope. No surprise invoices for payment integration, push setup or store submission.' },
    { n: '05', h3: 'Store submission handled end to end', body: 'NNC prepares store listings, ASO assets, signs binaries and manages Apple / Google review so you never touch the dashboards.' },
    { n: '06', h3: '150+ mobile apps delivered', body: 'E-commerce, healthcare, fintech, education, logistics and on-demand service apps — NNC has shipped across every vertical.' },
  ],
  techStack: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Node JS', 'Firebase', 'Razorpay', 'AWS'],
  h2Tech: 'iOS & Android Technology Stack',
  h2Faq: 'iOS & Android App Frequently Asked Questions',
  faqs: [
    { q: 'Should I build native or cross-platform?', a: 'For apps that need platform-specific features (ARKit, HealthKit, Wear OS, background services), native is the right call. For most other apps — where feature parity across iOS and Android matters more than platform depth — cross-platform (React Native / Flutter) ships in 60% of the time at 50% of the cost. NNC advises based on your app, not a default stack.' },
    { q: 'How much does an iOS / Android app cost?', a: 'Apps at NNC start from ₹1.2L for a cross-platform build and ₹2L+ for dual native (iOS + Android). All pricing is fixed before work starts — no hourly billing.' },
    { q: 'How long does it take?', a: 'A standard app typically takes 8–12 weeks from design to Play Store / App Store launch. Complex apps with teleconsultation, chat or heavy offline sync take 14–18 weeks. Timelines are agreed upfront.' },
    { q: 'Do you handle Play Store and App Store submission?', a: 'Yes — end to end. NNC prepares store listings, screenshots, ASO text, signs binaries and manages the Apple / Google review process. Your logins stay with you; we operate under your developer accounts.' },
    { q: 'What happens after launch?', a: 'NNC offers post-launch support packs — bug fixes, OS updates, store policy updates and small feature additions — priced per month. Coverage is agreed up front, not open-ended.' },
    { q: 'Do I own the source code?', a: 'Yes — completely. On delivery you receive every source file, Play Store / App Store credentials, admin access and all cloud configuration. No SaaS lock-in.' },
  ],
}

export default function IosAndroidAppPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
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
