import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'React Native App Development Company in Mysuru | Nakshatra Namaha Creations',
  description: 'Top React Native app development company in Mysuru. Cross-platform Android & iOS apps from one JavaScript codebase. 150+ apps delivered. 4.9★ Google. Walk-in Mysuru office. Fixed price. Source code yours. Call +91 99005 66466.',
  alternates: { canonical: `${SITE.url}/react-native-app-development-company-in-mysuru` },
  keywords: [
    'react native app development company in mysuru',
    'react native developers mysuru',
    'hire react native developers mysuru',
    'react native services mysuru',
    'javascript mobile app development mysuru',
    'react native agency mysuru',
  ].join(', '),
  openGraph: {
    title: 'React Native App Development Company in Mysuru | Nakshatra Namaha Creations',
    description: 'Cross-platform React Native apps for Android & iOS. Walk-in Mysuru office. Fixed price. Source code yours.',
    url: `${SITE.url}/react-native-app-development-company-in-mysuru`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Nakshatra Namaha Creations',
    images: [{ url: 'https://s3.eu-north-1.amazonaws.com/admin.nakshatranamahacreations.in/NNC+NEW+LOGO+2020+low+res.png', width: 1200, height: 630, alt: 'React Native App Development Company Mysuru Nakshatra Namaha Creations' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'React Native App Development Company in Mysuru | Nakshatra Namaha Creations',
    description: 'Cross-platform React Native apps in Mysuru. Android & iOS from one codebase. Walk-in office.',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'React Native App Development Company in Mysuru',
  description: 'Cross-platform React Native app development in Mysuru. Android & iOS apps from one JavaScript codebase. E-commerce, on-demand, healthcare, fintech and enterprise apps. Play Store & App Store deployment. Walk-in office in JP Nagar, Mysuru.',
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
  serviceType: 'React Native App Development',
  url: `${SITE.url}/react-native-app-development-company-in-mysuru`,
  offers: [
    { '@type': 'Offer', name: 'MVP React Native App', price: '75000', priceCurrency: 'INR', description: 'React Native app for Android + iOS with up to 8 screens, REST API backend and store deployment.' },
    { '@type': 'Offer', name: 'Business React Native App', price: '175000', priceCurrency: 'INR', description: 'Full-featured cross-platform app with admin panel, payment gateway, push notifications and analytics.' },
    { '@type': 'Offer', name: 'Enterprise React Native Platform', description: 'Custom-scoped enterprise platform with microservices, multi-role access and CRM integration.' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'React Native Development Services Mysuru',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'React Native App Development Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cross Platform App Development Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'JavaScript Mobile App Development Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hire React Native Developers Mysuru' } },
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
    { '@type': 'ListItem', position: 4, name: 'React Native Development Mysuru', item: `${SITE.url}/react-native-app-development-company-in-mysuru` },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does React Native app development cost in Mysuru?', acceptedAnswer: { '@type': 'Answer', text: 'MVP apps start from ₹75,000. Business apps ₹1,75,000–₹2,50,000. Enterprise platforms scoped individually. All pricing fixed before work begins.' } },
    { '@type': 'Question', name: 'Why choose React Native over native development?', acceptedAnswer: { '@type': 'Answer', text: 'React Native delivers Android + iOS from one JavaScript codebase — saving 30–40% in cost. It shares code with React web projects and has a massive npm ecosystem.' } },
    { '@type': 'Question', name: 'Does Nakshatra Namaha Creations have an office in Mysuru?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Walk-in office at Suswani Towers, JP Nagar 2nd Stage, Mysuru – 570 008. Open Mon–Sat, 9am–7pm.' } },
    { '@type': 'Question', name: 'Does Nakshatra Namaha Creations handle store submission?', acceptedAnswer: { '@type': 'Answer', text: 'Yes completely. We manage submission on both Google Play Store and Apple App Store — listings, screenshots, review responses and release management.' } },
  ],
}

const data = {
  badge: 'React Native Development · Mysuru',
  h1: 'React Native App Development',
  h1Accent: 'Company in Mysuru',
  tagline: 'Cross-platform Android & iOS apps from one JavaScript codebase — 30–40% faster delivery, shared web logic and near-native performance. Walk-in office in JP Nagar, Mysuru. Fixed price. Source code yours.',
  desc: 'Nakshatra Namaha Creations builds high-performance React Native apps for businesses in Mysuru. One JavaScript codebase delivers both Android and iOS — cutting development time and cost by 30–40% without sacrificing quality. Our React Native team shares code with your existing React web projects, giving you a unified tech stack across all platforms.',
  stat1: '150+',
  stat1Label: 'Apps Delivered',
  serviceName: 'React Native app development in Mysuru',
  h2Features: 'What Every React Native App From Us Includes',
  features: [
    { h3: 'One Codebase — Android + iOS', desc: 'Write once in JavaScript, ship to both platforms. 30–40% faster than building two separate native apps. Shared business logic, shared UI components.' },
    { h3: 'Near-Native Performance', desc: 'React Native renders using native UI components — not web views. Smooth 60fps scrolling, native gestures and platform-specific animations out of the box.' },
    { h3: 'Shared Code with React Web', desc: 'Already have a React JS website? Share API calls, state management, validation logic and business rules between your web and mobile apps.' },
    { h3: 'Massive npm Ecosystem', desc: 'Access to 2M+ npm packages. Camera, maps, biometrics, Bluetooth, file system — most native features have battle-tested React Native libraries.' },
    { h3: 'Play Store + App Store Deployment', desc: 'Full deployment to both stores — listings, screenshots, TestFlight/internal testing and ongoing release management handled by our team.' },
    { h3: 'Push Notifications & Real-time', desc: 'Firebase Cloud Messaging for targeted push notifications on both platforms. Real-time data with Firestore, WebSockets or custom backends.' },
    { h3: 'Payment Gateway Integration', desc: 'Razorpay, Stripe, PhonePe, Google Pay, Apple Pay and UPI — all PCI-DSS compliant. Tested on real payment flows before launch.' },
    { h3: 'Over-the-Air Updates', desc: 'Push JavaScript updates directly to users without waiting for app store review. Fix bugs and ship features faster with CodePush or EAS Update.' },
    { h3: '30-Day Post-Launch Support', desc: 'Bug fixes, minor updates and store review responses for 30 days after launch at no extra cost.' },
  ],
  h2Why: 'Why Mysuru Businesses Choose Us for React Native',
  why: [
    { n: '01', h3: 'Walk-in office in JP Nagar, Mysuru', body: "Visit Suswani Towers, JP Nagar 2nd Stage. Meet your React Native developers, review designs, track progress face-to-face. Open Mon–Sat, 9am–7pm." },
    { n: '02', h3: '35+ in-house developers — zero outsourcing', body: "Every React Native developer, designer and QA engineer is a permanent employee. No freelancers, no offshore contractors." },
    { n: '03', h3: 'One codebase — two platforms — 40% savings', body: "React Native delivers Android + iOS from a single JavaScript codebase. You pay for one development cycle. Maintenance costs halved." },
    { n: '04', h3: 'Shared stack with React web projects', body: "If your website runs on React JS or Next JS, your React Native app shares the same language, libraries and business logic. One unified tech stack." },
    { n: '05', h3: 'Fixed price — no surprise invoices', body: "Scope, timeline and price agreed in writing before development begins. In 565+ projects, not one client has been invoiced more than agreed." },
    { n: '06', h3: 'Source code 100% yours on delivery', body: "Full JavaScript source code, API keys, Firebase credentials, Play Store and App Store access — everything handed over. No lock-in." },
  ],
  techStack: ['React Native', 'JavaScript', 'TypeScript', 'Firebase', 'Node JS', 'MongoDB', 'AWS', 'Redux'],
  h2Tech: 'React Native Technology Stack',
  h2Faq: 'React Native Development in Mysuru — Questions Answered',
  faqs: [
    { q: 'How much does React Native app development cost in Mysuru?', a: 'A basic MVP starts from ₹75,000. Full-featured business apps range from ₹1,75,000 to ₹2,50,000. Enterprise platforms are scoped individually. All pricing is fixed before work begins — no hourly billing or surprise invoices.' },
    { q: 'React Native or Flutter — which should I choose?', a: "React Native uses JavaScript and has a larger ecosystem with 2M+ npm packages. It's ideal if you already have a React JS website. Flutter uses Dart and gives more precise UI control — better for design-heavy apps. We recommend the right framework after reviewing your requirements." },
    { q: 'How long does it take to build a React Native app?', a: 'MVP: 6–8 weeks. Business app: 10–14 weeks. Enterprise platform: 14–24 weeks. You get weekly APK + TestFlight builds throughout so you can test on your own devices.' },
    { q: 'Can React Native match native app performance?', a: "Yes for most use cases. React Native renders using actual native UI components — not web views. It delivers smooth 60fps performance for scrolling, navigation and animations. For extremely GPU-heavy apps (3D games, AR), native may be better." },
    { q: 'Does Nakshatra Namaha Creations have an office in Mysuru?', a: 'Yes. Our Mysuru branch is at Suswani Towers, JP Nagar 2nd Stage, Mysuru – 570 008. Walk in Monday to Saturday, 9am–7pm to meet your React Native team. No appointment needed.' },
    { q: 'Can I share code between my React website and React Native app?', a: 'Yes — this is one of the biggest advantages of React Native. API services, validation logic, state management (Redux/Zustand), utility functions and TypeScript types can all be shared between your React JS website and React Native mobile app.' },
    { q: 'Do I own the source code?', a: 'Yes — completely and permanently. On delivery you receive the full JavaScript/TypeScript source code, backend code, Firebase credentials, API keys and store access. Your app is 100% yours.' },
    { q: 'Can you push updates without app store review?', a: 'Yes. React Native supports over-the-air (OTA) JavaScript updates using CodePush or EAS Update. Bug fixes and minor feature changes can be pushed directly to users without going through Play Store or App Store review.' },
  ],
}

export default function ReactNativeMysuruPage() {
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
