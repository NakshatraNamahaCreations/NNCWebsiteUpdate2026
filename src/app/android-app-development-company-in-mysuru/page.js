import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Android App Development Company in Mysuru | Nakshatra Namaha Creations',
  description: 'Leading Android app development company in Mysuru. Custom Android apps on Kotlin, Java & React Native. Play Store deployment included. 150+ apps delivered. 4.9★ Google. Walk-in Mysuru office. Fixed price. Call +91 99005 66466.',
  alternates: { canonical: `${SITE.url}/android-app-development-company-in-mysuru` },
  keywords: [
    'android app development company in mysuru',
    'android app developers mysuru',
    'native android app development mysuru',
    'kotlin app development mysuru',
    'java android development mysuru',
    'hire android developers mysuru',
    'play store app development mysuru',
    'android application development mysuru',
    'enterprise android app development mysuru',
    'android app maker mysuru',
  ].join(', '),
  openGraph: {
    title: 'Android App Development Company in Mysuru | Nakshatra Namaha Creations',
    description: 'Custom Android apps on Kotlin & React Native. Play Store deployment. Walk-in Mysuru office. Fixed price. Source code yours.',
    url: `${SITE.url}/android-app-development-company-in-mysuru`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Nakshatra Namaha Creations',
    images: [{ url: 'https://s3.eu-north-1.amazonaws.com/admin.nakshatranamahacreations.in/NNC+NEW+LOGO+2020+low+res.png', width: 1200, height: 630, alt: 'Android App Development Company Mysuru Nakshatra Namaha Creations' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Android App Development Company in Mysuru | Nakshatra Namaha Creations',
    description: 'Custom Android apps in Mysuru. Kotlin, Java, React Native. Walk-in office. Fixed price.',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Android App Development Company in Mysuru',
  description: 'Custom Android app development in Mysuru using Kotlin, Java and React Native. On-demand apps, e-commerce apps, enterprise platforms. Play Store submission handled. Walk-in office in JP Nagar, Mysuru.',
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
  serviceType: 'Android App Development',
  url: `${SITE.url}/android-app-development-company-in-mysuru`,
  offers: [
    { '@type': 'Offer', name: 'MVP Android App', price: '75000', priceCurrency: 'INR', description: 'Android app with up to 8 screens, REST API backend and Play Store deployment.' },
    { '@type': 'Offer', name: 'Business Android App', price: '175000', priceCurrency: 'INR', description: 'Full-featured Android app with admin panel, payment gateway and push notifications.' },
    { '@type': 'Offer', name: 'Enterprise Android Platform', description: 'Custom-scoped enterprise Android platform with microservices and CRM integration.' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Android App Development Services Mysuru',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kotlin App Development Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Native Android App Development Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'React Native Android App Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Enterprise Android App Development Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Play Store App Development Mysuru' } },
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
    { '@type': 'ListItem', position: 4, name: 'Android App Development Mysuru', item: `${SITE.url}/android-app-development-company-in-mysuru` },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does Android app development cost in Mysuru?', acceptedAnswer: { '@type': 'Answer', text: 'MVP Android apps start from ₹75,000. Business apps ₹1,75,000–₹2,50,000. Enterprise platforms scoped individually. All pricing fixed before work begins.' } },
    { '@type': 'Question', name: 'Kotlin or Java — which should I choose for my Android app?', acceptedAnswer: { '@type': 'Answer', text: 'Kotlin is the modern standard recommended by Google. It is faster to develop, safer and fully interoperable with Java. We recommend Kotlin for new projects and Java only when integrating with legacy systems.' } },
    { '@type': 'Question', name: 'Does Nakshatra Namaha Creations handle Play Store submission?', acceptedAnswer: { '@type': 'Answer', text: 'Yes completely. We manage the full Play Store submission — store listing, screenshots, description, review responses and release management.' } },
    { '@type': 'Question', name: 'Does Nakshatra Namaha Creations have an office in Mysuru?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Walk-in office at Suswani Towers, JP Nagar 2nd Stage, Mysuru – 570 008. Open Mon–Sat, 9am–7pm.' } },
  ],
}

const data = {
  badge: 'Android App Development · Mysuru',
  h1: 'Android App Development',
  h1Accent: 'Company in Mysuru',
  tagline: 'Custom Android apps on Kotlin, Java & React Native — built by a 35+ member in-house team with a walk-in office in JP Nagar, Mysuru. Play Store deployment included. Fixed price. Source code yours.',
  desc: 'Nakshatra Namaha Creations builds high-performance Android apps for businesses in Mysuru. Native Kotlin, Java or cross-platform React Native — chosen based on your requirements. Every app is tested on 15+ real devices, optimised for battery and performance, and deployed to the Google Play Store by our team. Meet us at our Mysuru office.',
  stat1: '150+',
  stat1Label: 'Apps Delivered',
  serviceName: 'Android app development in Mysuru',
  h2Features: 'What Every Android App From Us Includes',
  features: [
    { h3: 'Native Kotlin Development', desc: "Google's recommended language for Android. Type-safe, concise and fully interoperable with Java. Near-native performance on every device." },
    { h3: 'React Native Cross-Platform Option', desc: 'Single codebase for Android + iOS. 30–40% faster delivery with near-native performance. Ideal for startups and MVPs.' },
    { h3: 'Material Design 3 UI', desc: "Every app follows Google's latest Material Design guidelines — adaptive layouts, dynamic colour, smooth animations and accessibility built in." },
    { h3: 'Play Store Submission & Management', desc: 'Full Play Store deployment — store listing, screenshots, description, review responses and release management handled by our team.' },
    { h3: 'Push Notifications & Real-time', desc: 'Firebase Cloud Messaging for targeted push notifications. Real-time data sync with Firestore or custom WebSocket backends.' },
    { h3: 'Payment Gateway Integration', desc: 'Razorpay, PhonePe, Google Pay, Stripe and UPI — all PCI-DSS compliant. Tested on real payment flows before launch.' },
    { h3: 'Offline Mode & Local Storage', desc: 'Room database and SQLite caching so your app works without internet and syncs seamlessly when connectivity returns.' },
    { h3: 'Analytics & Crash Reporting', desc: 'Firebase Analytics, Crashlytics and custom event tracking configured from day one. Know exactly how users interact with your app.' },
    { h3: '30-Day Post-Launch Support', desc: 'Bug fixes, minor updates and Play Store review responses for 30 days after launch at no extra cost.' },
  ],
  h2Why: 'Why Mysuru Businesses Choose Us for Android Apps',
  why: [
    { n: '01', h3: 'Walk-in office in JP Nagar, Mysuru', body: "Visit Suswani Towers, JP Nagar 2nd Stage. Meet your Android developers, review designs on a whiteboard, track progress face-to-face. Open Mon–Sat, 9am–7pm." },
    { n: '02', h3: '35+ in-house developers — zero outsourcing', body: "Every Android developer, designer and QA engineer is a permanent employee. No freelancers, no offshore contractors. Walk in and meet them." },
    { n: '03', h3: 'Kotlin-first, not Java-first', body: "We build new Android apps in Kotlin by default — Google's recommended language. Faster development, fewer bugs, better maintainability than legacy Java." },
    { n: '04', h3: 'Tested on 15+ real Android devices', body: "Not just emulators. Every app is tested on real Samsung, OnePlus, Xiaomi, Pixel and budget Android devices before Play Store submission." },
    { n: '05', h3: 'Fixed price — no surprise invoices', body: "Scope, timeline and price agreed in writing before development begins. In 565+ projects, not one client has been invoiced more than agreed." },
    { n: '06', h3: 'Source code 100% yours on delivery', body: "Full source code, API keys, Firebase credentials, Play Store access — everything handed over. No lock-in, no monthly fees." },
  ],
  techStack: ['Kotlin', 'Java', 'React Native', 'Firebase', 'Node JS', 'MongoDB', 'AWS', 'Google Play Console'],
  h2Tech: 'Android Development Technology Stack',
  h2Faq: 'Android App Development in Mysuru — Questions Answered',
  faqs: [
    { q: 'How much does Android app development cost in Mysuru?', a: 'A basic MVP Android app starts from ₹75,000. Full-featured business apps range from ₹1,75,000 to ₹2,50,000. Enterprise platforms are scoped individually. All pricing is fixed before work begins — no hourly billing or surprise invoices.' },
    { q: 'Kotlin or Java — which is better for my Android app?', a: "Kotlin is the modern standard recommended by Google. It's faster to write, safer (null-safe by default) and fully interoperable with Java. We recommend Kotlin for all new Android projects. Java is used only when integrating with legacy codebases." },
    { q: 'How long does it take to build an Android app?', a: 'MVP: 6–8 weeks. Business app: 10–14 weeks. Enterprise platform: 14–24 weeks. You get weekly APK builds throughout development so you can test on your own phone.' },
    { q: 'Will you handle Play Store submission?', a: 'Yes — completely. Nakshatra Namaha Creations manages the full Google Play Store submission process including store listing, screenshots, app description, review responses and ongoing release management.' },
    { q: 'Does Nakshatra Namaha Creations have an office in Mysuru?', a: 'Yes. Our Mysuru branch is at Suswani Towers, JP Nagar 2nd Stage, Mysuru – 570 008. Walk in Monday to Saturday, 9am–7pm to meet your Android development team. No appointment needed.' },
    { q: 'Can you build for both Android and iOS from one codebase?', a: 'Yes — using React Native or Flutter. One codebase delivers both Android and iOS apps, saving 30–40% in development time and cost while maintaining near-native performance on both platforms.' },
    { q: 'Do I own the source code?', a: 'Yes — completely and permanently. On delivery you receive the full Android source code, backend code, Firebase credentials, API keys and Play Store Console access. Your app is 100% yours.' },
    { q: 'What Android devices do you test on?', a: 'Every app is tested on 15+ real devices including Samsung Galaxy series, OnePlus, Xiaomi, Google Pixel, Vivo and budget Android devices. We test across Android 10–14 and multiple screen sizes.' },
  ],
}

export default function AndroidAppMysuruPage() {
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
