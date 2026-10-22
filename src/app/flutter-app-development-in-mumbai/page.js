import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Flutter App Development in Mumbai | Cross Platform App',
  description:
    'Choose Flutter app development in Mumbai to build fast and scalable cross platform apps, with NNC delivering high performance mobile solution for your business.',
  alternates: {
    canonical: `${SITE.url}/flutter-app-development-in-mumbai`,
  },
  keywords:
    'flutter app development in mumbai, flutter app development mumbai, flutter developers mumbai, cross platform app development mumbai, dart app development mumbai, flutter mobile app mumbai, hire flutter developers mumbai, flutter app services mumbai, flutter ios android app mumbai',
  openGraph: {
    title: 'Flutter App Development in Mumbai | Cross Platform App',
    description:
      'Choose Flutter app development in Mumbai to build fast and scalable cross platform apps, with NNC delivering high performance mobile solution for your business.',
    url: `${SITE.url}/flutter-app-development-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Flutter App Development in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Flutter App Development in Mumbai | Cross Platform App',
    description:
      'Choose Flutter app development in Mumbai to build fast and scalable cross platform apps, with NNC delivering high performance mobile solution for your business.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Flutter App Development in Mumbai',
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
    'Flutter App Development',
    'Cross Platform App Development',
    'Dart App Development',
    'Flutter Web Development',
    'iOS App Development',
    'Android App Development',
  ],
  description:
    'Flutter app development in Mumbai — fast and scalable cross platform iOS, Android and web apps from a single Dart codebase. High performance mobile solutions for Mumbai businesses. Branch office in Thane West.',
  url: `${SITE.url}/flutter-app-development-in-mumbai`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Flutter MVP App Mumbai',
      price: '75000',
      priceCurrency: 'INR',
      description: 'Flutter MVP app for iOS & Android with up to 8 screens, basic backend and store deployment.',
    },
    {
      '@type': 'Offer',
      name: 'Flutter Business App Mumbai',
      price: '150000',
      priceCurrency: 'INR',
      description: 'Full-featured Flutter app for iOS, Android & web with admin panel, Razorpay integration and analytics.',
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
      name: 'Flutter App Development Company Mumbai',
      item: `${SITE.url}/flutter-app-development-company-in-mumbai`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Flutter App Development in Mumbai',
      item: `${SITE.url}/flutter-app-development-in-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best Flutter app development company in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Mumbai's top-rated Flutter app development companies — 100+ apps delivered, 4.9★ Google rating, branch office in Thane West. We build fast and scalable cross platform iOS and Android apps in Flutter and Dart.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why choose Flutter for cross platform app development in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Flutter delivers fast, scalable cross platform apps for iOS, Android and web from a single Dart codebase. For Mumbai businesses it means faster delivery, lower cost than building separate native apps and pixel-perfect UI on every device. NNC recommends Flutter when visual consistency and budget efficiency are the priority.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Flutter app development cost in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Flutter MVP app for iOS and Android starts from ₹75,000. A full-featured Flutter business app typically costs ₹1,50,000–₹2,50,000. All projects are fixed-price — no hourly billing, no surprise invoices. Visit our Thane West office for a free consultation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does Flutter app development take in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Flutter MVP takes 6–8 weeks. A full business app takes 10–14 weeks. Enterprise platforms take 14–24 weeks. Every timeline is agreed in writing before development begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I hire dedicated Flutter developers in Mumbai from NNC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can hire dedicated Flutter and Dart developers from NNC Mumbai on a project or retainer basis. All are full-time NNC employees — not freelancers or outsourced contractors. Meet them at our Thane West, Mumbai office.',
      },
    },
    {
      '@type': 'Question',
      name: 'Flutter vs React Native — which is better for my Mumbai app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Flutter gives more precise UI control and consistent rendering on all devices — ideal when visual polish and high performance matter. React Native suits teams in the JavaScript ecosystem. NNC's Mumbai team recommends the right framework after reviewing your requirements.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a Flutter development office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to test Flutter builds on real iOS and Android devices and meet the Dart development team.',
      },
    },
  ],
}

const data = {
  badge: 'Flutter App Development · Mumbai',
  h1: 'Flutter App Development',
  h1Accent: 'in Mumbai',
  tagline:
    'Fast and scalable Flutter app development in Mumbai — cross platform iOS, Android and web apps from a single Dart codebase. High performance mobile solutions. Office in Thane West. Fixed price.',
  desc:
    'NNC Digital provides expert Flutter app development in Mumbai for startups, SMEs and enterprises across Mumbai, Thane and Navi Mumbai. Build fast and scalable cross platform apps for iOS and Android from a single Flutter codebase — high performance mobile solutions tailored to your business needs. Pixel-perfect UI, 60fps animations, weekly builds and complete source code ownership on delivery. Visit our branch office in Thane West.',
  stat1: '100+',
  stat1Label: 'Mobile Apps Delivered',
  serviceName: 'Flutter app development in Mumbai',
  h2Features: 'Flutter App Development Services in Mumbai',
  features: [
    {
      h3: 'Cross Platform App Development Mumbai',
      desc: 'One Flutter codebase — iOS, Android and web apps that look and perform identically on every device. Faster to build, cheaper to maintain and easier to update than separate native apps for your Mumbai business.',
    },
    {
      h3: 'Flutter Mobile App Development Mumbai',
      desc: 'End-to-end Flutter mobile app development — UI/UX design, Dart development, state management (Bloc/Riverpod), API integration, QA on real devices, Play Store & App Store submission and post-launch support.',
    },
    {
      h3: 'Dart App Development Mumbai',
      desc: "Expert Dart programming — Flutter's compiled language with strong typing, async/await for clean networking, null safety and hot reload for rapid iteration. Production-grade Dart from day one.",
    },
    {
      h3: 'Flutter Web Development Mumbai',
      desc: 'Deploy your Flutter app as a responsive web application alongside iOS and Android. Same Dart codebase, consistent UI and shared business logic — full platform coverage for Mumbai businesses.',
    },
    {
      h3: 'Flutter MVP & Startup App Mumbai',
      desc: 'MVP Flutter app development for Mumbai startups — core feature set built for iOS and Android in 6–8 weeks, ready for Play Store and App Store submission and investor demos. Fixed scope, fixed price.',
    },
    {
      h3: 'Enterprise Flutter App Development Mumbai',
      desc: 'Enterprise-grade Flutter platforms for Mumbai corporates — role-based access, ERP/CRM integration, offline-first with local sync, multi-language support and secure enterprise deployment via MDM.',
    },
    {
      h3: 'On-demand & Ecommerce Flutter Apps Mumbai',
      desc: 'On-demand service apps, booking platforms and ecommerce Flutter apps with Razorpay/UPI integration, real-time tracking, push notifications and seamless checkout — built for Mumbai businesses.',
    },
    {
      h3: 'Hire Flutter Developers Mumbai',
      desc: 'Hire dedicated Flutter and Dart developers from NNC Mumbai on a project or retainer basis. All are full-time in-house engineers — not freelancers. Meet them at our Thane West branch office.',
    },
    {
      h3: 'Flutter App Maintenance Mumbai',
      desc: 'Ongoing Flutter app maintenance for Mumbai businesses — OS version upgrades, Dart/Flutter SDK updates, performance optimisation, bug fixes and new feature additions for existing Flutter applications.',
    },
  ],
  h2Why: 'Why Choose NNC for Flutter App Development in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — test on real iOS & Android devices',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to test Flutter builds on real iPhones and Android phones side-by-side and meet the Dart developers building your app.',
    },
    {
      n: '02',
      h3: 'One codebase — iOS, Android & web',
      body: 'Flutter delivers a single Dart codebase that runs natively on iOS, Android and web. For Mumbai businesses this means faster launch, lower development cost and one team to maintain everything.',
    },
    {
      n: '03',
      h3: 'Pixel-perfect UI — 60fps on every device',
      body: "Flutter's own rendering engine means your app looks identical on every iPhone and Android device — no platform-specific UI quirks, no compromises on animation smoothness or performance.",
    },
    {
      n: '04',
      h3: 'Weekly builds — full visibility throughout development',
      body: 'Every week you receive installable builds for both iOS (TestFlight) and Android (APK). You test exactly what is being built at every stage — complete transparency from sprint one to launch.',
    },
    {
      n: '05',
      h3: 'Fixed price — no hourly billing surprises',
      body: 'Every Flutter project is scoped and priced upfront. No hourly billing, no scope creep invoices, no surprise charges for Play Store or App Store submission, Razorpay integration or post-launch fixes.',
    },
    {
      n: '06',
      h3: '100+ apps delivered — 4.9★ Google rating',
      body: 'NNC has delivered 100+ mobile apps for on-demand services, ecommerce, healthcare, logistics and enterprise clients across Mumbai. 4.9★ on Google.',
    },
  ],
  techStack: ['Flutter', 'Dart', 'Firebase', 'Bloc', 'Riverpod', 'Razorpay', 'REST APIs', 'Fastlane'],
  h2Tech: 'Flutter Development Technology Stack',
  h2Faq: 'Flutter App Development Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best Flutter app development company in Mumbai?',
      a: "NNC Digital is among Mumbai's top Flutter development companies — 100+ apps delivered, 4.9★ Google rating, branch office in Thane West. Fast and scalable cross platform iOS and Android apps from a single Dart codebase.",
    },
    {
      q: 'How much does Flutter app development cost in Mumbai?',
      a: 'A Flutter MVP app for iOS and Android starts from ₹75,000. A full-featured Flutter business app typically costs ₹1,50,000–₹2,50,000. All projects are fixed-price — no hourly billing.',
    },
    {
      q: 'How long does Flutter app development take in Mumbai?',
      a: 'A Flutter MVP takes 6–8 weeks. A full business app takes 10–14 weeks. Enterprise platforms take 14–24 weeks. Every timeline agreed in writing before development begins.',
    },
    {
      q: 'Can I hire dedicated Flutter developers in Mumbai?',
      a: 'Yes. Hire dedicated Flutter and Dart developers from NNC Mumbai on a project or retainer basis. All are full-time NNC employees — not freelancers. Meet them at our Thane West office.',
    },
    {
      q: 'Flutter or React Native — which should I choose?',
      a: "Flutter gives more precise UI control and consistent rendering — ideal for high performance cross platform apps. React Native suits teams in the JavaScript ecosystem. NNC's Mumbai team recommends after reviewing your requirements.",
    },
    {
      q: 'Do you have a Flutter development office in Mumbai?',
      a: 'Yes. NNC has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to test Flutter builds on real devices and meet the development team.',
    },
  ],
}

export default function FlutterAppDevelopmentInMumbaiPage() {
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
