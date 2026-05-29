import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Flutter App Development Company in Mysuru | Nakshatra Namaha Creations',
  description: 'Top Flutter app development company in Mysuru. Custom Android & iOS apps from one codebase using Flutter & Dart. 150+ apps delivered. 4.9★ Google. Walk-in Mysuru office. Fixed price. Source code yours. Call +91 99005 66466.',
  alternates: { canonical: `${SITE.url}/flutter-app-development-company-in-mysuru` },
  keywords: [
    'flutter app development company in mysuru',
    'flutter developers mysuru',
    'flutter app development services mysuru',
    'dart app development mysuru',
    'cross platform app development mysuru',
    'hire flutter developers mysuru',
    'flutter web development mysuru',
  ].join(', '),
  openGraph: {
    title: 'Flutter App Development Company in Mysuru | Nakshatra Namaha Creations',
    description: 'Custom Flutter apps for Android & iOS from one codebase. Walk-in Mysuru office. Fixed price. Source code yours.',
    url: `${SITE.url}/flutter-app-development-company-in-mysuru`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Nakshatra Namaha Creations',
    images: [{ url: 'https://s3.eu-north-1.amazonaws.com/admin.nakshatranamahacreations.in/NNC+NEW+LOGO+2020+low+res.png', width: 1200, height: 630, alt: 'Flutter App Development Company Mysuru Nakshatra Namaha Creations' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Flutter App Development Company in Mysuru | Nakshatra Namaha Creations',
    description: 'Custom Flutter apps in Mysuru. Android & iOS from one codebase. Walk-in office. Fixed price.',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Flutter App Development Company in Mysuru',
  description: 'Custom Flutter app development in Mysuru. Android & iOS apps from a single Dart codebase. E-commerce, on-demand, healthcare, fintech and enterprise apps. Play Store & App Store deployment. Walk-in office in JP Nagar, Mysuru.',
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
  serviceType: 'Flutter App Development',
  url: `${SITE.url}/flutter-app-development-company-in-mysuru`,
  offers: [
    { '@type': 'Offer', name: 'MVP Flutter App', price: '75000', priceCurrency: 'INR', description: 'Flutter app with up to 8 screens, REST API backend and Play Store + App Store deployment.' },
    { '@type': 'Offer', name: 'Business Flutter App', price: '175000', priceCurrency: 'INR', description: 'Full-featured Flutter app with admin panel, payment gateway, push notifications and analytics.' },
    { '@type': 'Offer', name: 'Enterprise Flutter Platform', description: 'Custom-scoped enterprise Flutter platform with microservices, multi-role access and CRM integration.' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Flutter App Development Services Mysuru',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Flutter App Development Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dart App Development Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cross Platform App Development Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Flutter Web Development Mysuru' } },
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
    { '@type': 'ListItem', position: 4, name: 'Flutter App Development Mysuru', item: `${SITE.url}/flutter-app-development-company-in-mysuru` },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does Flutter app development cost in Mysuru?', acceptedAnswer: { '@type': 'Answer', text: 'MVP Flutter apps start from ₹75,000. Business apps ₹1,75,000–₹2,50,000. Enterprise platforms scoped individually. All pricing fixed before work begins.' } },
    { '@type': 'Question', name: 'Why choose Flutter over native development?', acceptedAnswer: { '@type': 'Answer', text: 'Flutter delivers Android + iOS from one Dart codebase — saving 30–40% in cost and time. Pixel-perfect custom UI, 60fps animations and near-native performance.' } },
    { '@type': 'Question', name: 'Does Nakshatra Namaha Creations handle Play Store and App Store submission?', acceptedAnswer: { '@type': 'Answer', text: 'Yes completely. We manage submission on both Google Play Store and Apple App Store — listings, screenshots, review responses and release management.' } },
    { '@type': 'Question', name: 'Does Nakshatra Namaha Creations have an office in Mysuru?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Walk-in office at Suswani Towers, JP Nagar 2nd Stage, Mysuru – 570 008. Open Mon–Sat, 9am–7pm.' } },
  ],
}

const data = {
  badge: 'Flutter App Development · Mysuru',
  h1: 'Flutter App Development',
  h1Accent: 'Company in Mysuru',
  tagline: 'Custom Android & iOS apps from a single Dart codebase — pixel-perfect UI, 60fps animations and near-native performance. Walk-in office in JP Nagar, Mysuru. Fixed price. Source code yours.',
  desc: 'Nakshatra Namaha Creations builds high-performance Flutter apps for businesses in Mysuru. One codebase delivers both Android and iOS — saving 30–40% in cost without compromising on quality. Every app is tested on real devices and deployed to both Play Store and App Store by our team. Visit our Mysuru office to discuss your project.',
  stat1: '150+',
  stat1Label: 'Apps Delivered',
  serviceName: 'Flutter app development in Mysuru',
  h2Features: 'What Every Flutter App From Us Includes',
  features: [
    { h3: 'Single Codebase — Android + iOS', desc: "One Dart codebase compiles to native Android and iOS. Ship both platforms simultaneously, maintain one codebase. 30–40% faster than building two separate apps." },
    { h3: 'Pixel-Perfect Custom UI', desc: "Flutter's widget-based architecture gives precise control over every pixel. Custom animations, transitions and micro-interactions that feel native on both platforms." },
    { h3: '60fps Performance Guaranteed', desc: "Flutter compiles to native ARM code — no JavaScript bridge. Smooth 60fps scrolling, animations and transitions even on mid-range devices." },
    { h3: 'Play Store + App Store Deployment', desc: 'Full deployment to both Google Play Store and Apple App Store — listings, screenshots, TestFlight/internal testing and release management handled by our team.' },
    { h3: 'Firebase & Cloud Backend', desc: 'Firebase Auth, Firestore, Cloud Functions and FCM push notifications. Or custom Node JS APIs on AWS — whatever your app requires.' },
    { h3: 'Payment Gateway Integration', desc: 'Razorpay, Stripe, PhonePe, Google Pay, Apple Pay and UPI — all PCI-DSS compliant integrations tested on real payment flows.' },
    { h3: 'Offline Mode & Local Storage', desc: 'Hive, SQLite and shared preferences for offline caching. Your app works without internet and syncs seamlessly when connectivity returns.' },
    { h3: 'Flutter Web & Desktop (Optional)', desc: 'Same codebase can also target web browsers and desktop (Windows, macOS, Linux) — one team, one codebase, every platform.' },
    { h3: '30-Day Post-Launch Support', desc: 'Bug fixes, minor updates and store review responses for 30 days after launch at no extra cost.' },
  ],
  h2Why: 'Why Mysuru Businesses Choose Us for Flutter Apps',
  why: [
    { n: '01', h3: 'Walk-in office in JP Nagar, Mysuru', body: "Visit Suswani Towers, JP Nagar 2nd Stage. Meet your Flutter developers, review designs on a whiteboard, track progress face-to-face. Open Mon–Sat, 9am–7pm." },
    { n: '02', h3: '35+ in-house developers — zero outsourcing', body: "Every Flutter developer, UI designer and QA engineer is a permanent employee. No freelancers, no offshore contractors. Walk in and meet them." },
    { n: '03', h3: 'One codebase — two platforms — 40% savings', body: "Flutter delivers Android + iOS from a single Dart codebase. You pay for one development cycle and get both platforms. Maintenance costs halved." },
    { n: '04', h3: 'Pixel-perfect UI that designers love', body: "Flutter gives us complete control over every pixel — custom animations, branded transitions and micro-interactions that match your Figma designs exactly." },
    { n: '05', h3: 'Fixed price — no surprise invoices', body: "Scope, timeline and price agreed in writing before development begins. In 565+ projects, not one client has been invoiced more than agreed." },
    { n: '06', h3: 'Source code 100% yours on delivery', body: "Full Dart source code, API keys, Firebase credentials, Play Store and App Store access — everything handed over. No lock-in, no monthly fees." },
  ],
  techStack: ['Flutter', 'Dart', 'Firebase', 'Node JS', 'MongoDB', 'AWS', 'Play Store', 'App Store Connect'],
  h2Tech: 'Flutter Development Technology Stack',
  h2Faq: 'Flutter App Development in Mysuru — Questions Answered',
  faqs: [
    { q: 'How much does Flutter app development cost in Mysuru?', a: 'A basic MVP Flutter app starts from ₹75,000. Full-featured business apps range from ₹1,75,000 to ₹2,50,000. Enterprise platforms are scoped individually. All pricing is fixed before work begins — no hourly billing or surprise invoices.' },
    { q: 'Why choose Flutter over React Native?', a: "Flutter compiles to native ARM code with no JavaScript bridge — delivering smoother animations and more precise UI control. It's ideal for design-heavy apps. React Native has a larger ecosystem and is better for apps that share web logic. We recommend the right framework after reviewing your requirements." },
    { q: 'How long does it take to build a Flutter app?', a: 'MVP: 6–8 weeks. Business app: 10–14 weeks. Enterprise platform: 14–24 weeks. You get weekly APK + TestFlight builds throughout development so you can test on your own devices.' },
    { q: 'Will you deploy to both Play Store and App Store?', a: 'Yes — completely. Nakshatra Namaha Creations manages submission on both Google Play Store and Apple App Store including store listings, screenshots, TestFlight beta testing and ongoing release management.' },
    { q: 'Does Nakshatra Namaha Creations have an office in Mysuru?', a: 'Yes. Our Mysuru branch is at Suswani Towers, JP Nagar 2nd Stage, Mysuru – 570 008. Walk in Monday to Saturday, 9am–7pm to meet your Flutter development team. No appointment needed.' },
    { q: 'Can Flutter apps match native performance?', a: "Yes. Flutter compiles directly to native ARM machine code — there's no bridge or interpreter. Apps built in Flutter deliver 60fps animations, fast startup times and smooth scrolling comparable to native Kotlin or Swift apps." },
    { q: 'Do I own the source code?', a: 'Yes — completely and permanently. On delivery you receive the full Dart source code, backend code, Firebase credentials, API keys, Play Store Console and App Store Connect access. Your app is 100% yours.' },
    { q: 'Can the same Flutter code run on web and desktop?', a: 'Yes. Flutter supports web, Windows, macOS and Linux from the same Dart codebase. If your business needs a web dashboard or desktop companion app, we can target those platforms without rewriting.' },
  ],
}

export default function FlutterAppMysuruPage() {
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
