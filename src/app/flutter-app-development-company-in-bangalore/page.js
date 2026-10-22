import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Flutter App Development Company in Bangalore | NNC Digital',
  description:
    'Top Flutter app development company in Bangalore. Flutter developers, Flutter app development services, Dart app development, cross platform app development, hire Flutter developers & Flutter web development for Bangalore businesses. Fixed price.',
  alternates: {
    canonical: `${SITE.url}/flutter-app-development-company-in-bangalore`,
  },
  keywords:
    'flutter app development company in bangalore, flutter developers bangalore, flutter app development services bangalore, dart app development bangalore, cross platform app development bangalore, hire flutter developers bangalore, flutter web development bangalore',
  openGraph: {
    title: 'Flutter App Development Company in Bangalore | NNC Digital',
    description:
      'Flutter app development company in Bangalore — Flutter developers, Dart development, cross platform apps, Flutter web development & hire Flutter developers. Fixed price.',
    url: `${SITE.url}/flutter-app-development-company-in-bangalore`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Flutter App Development Company in Bangalore – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Flutter App Development Company in Bangalore | NNC Digital',
    description:
      'Flutter app development company in Bangalore — Dart, cross platform, Flutter web development & hire Flutter developers. Fixed price.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Flutter App Development Company in Bangalore',
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
    'Flutter App Development',
    'Cross Platform App Development',
    'Dart App Development',
    'Flutter Web Development',
    'Flutter Mobile App Development',
  ],
  description:
    'Flutter app development company in Bangalore — cross platform Android and iOS apps, Flutter web development and Dart app development for Bangalore businesses. One codebase, all platforms.',
  url: `${SITE.url}/flutter-app-development-company-in-bangalore`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Flutter App Development Bangalore — Starter',
      price: '45000',
      priceCurrency: 'INR',
      description: 'Flutter cross platform app for Android and iOS — core features, Material/Cupertino UI, API integration and Play Store + App Store submission.',
    },
    {
      '@type': 'Offer',
      name: 'Flutter App Development Bangalore — Growth',
      price: '100000',
      priceCurrency: 'INR',
      description: 'Full Flutter app with complex features — state management, offline support, custom animations, third-party integrations and Flutter web version.',
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
      name: 'Flutter App Development Company in Bangalore',
      item: `${SITE.url}/flutter-app-development-company-in-bangalore`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best Flutter app development company in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Bangalore's top-rated Flutter app development companies — 565+ projects delivered, 4.9★ Google rating, headquartered in Whitefield, Bangalore. We build cross platform Flutter apps for Android, iOS and web using Dart for startups, SMEs and enterprise clients.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is Flutter and why choose it for app development in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Flutter is Google's open-source UI framework that lets you build Android, iOS and web apps from a single Dart codebase. For Bangalore businesses it means faster development, lower cost than building separate native apps and a consistent UI across all platforms. NNC builds production Flutter apps that are indistinguishable from native in look and performance.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build cross platform apps for Android and iOS in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds cross platform app development in Bangalore using Flutter — one Dart codebase delivering native-quality Android and iOS apps simultaneously. Ideal for Bangalore startups and SMEs who need both platforms without the cost of two separate native builds.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer Flutter web development in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides Flutter web development in Bangalore — extending your Flutter mobile app to a responsive web application from the same codebase. Ideal for SaaS dashboards, admin panels and progressive web apps that need to run on both mobile and browser.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer Dart app development services in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds Flutter apps using Dart — the language that powers Flutter. Our Bangalore Flutter developers are experienced in Dart\'s null safety, async/await patterns, Dart isolates for background processing and Dart\'s strong typing system for maintainable codebases.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Flutter app development cost in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Flutter cross platform app for Android and iOS in Bangalore starts from ₹45,000 — covering core features, UI, API integration and store submissions for both platforms. Full Flutter apps with complex features and Flutter web typically cost ₹1,00,000–₹3,00,000. Fixed-price — no hourly billing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a Flutter development office in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital is headquartered in Bangalore at Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit us to review your Flutter app wireframes, test on real Android and iOS devices and meet the Flutter development team building your application.',
      },
    },
  ],
}

const data = {
  badge: 'Flutter App Development · Bangalore',
  h1: 'Flutter App Development Company',
  h1Accent: 'in Bangalore',
  tagline:
    'Top Flutter app development company in Bangalore — cross platform app development, Flutter developers, Flutter app development services, Dart app development, hire Flutter developers & Flutter web development. One codebase, all platforms. Fixed price.',
  desc:
    'NNC Digital is a specialist Flutter app development company in Bangalore building cross platform Android, iOS and web applications from a single Dart codebase. From consumer Flutter apps and on-demand platforms to enterprise cross platform solutions and Flutter web applications — every Flutter project is built by our in-house Bangalore Flutter developers with full source code ownership, zero outsourcing and fixed-price delivery.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'Flutter app development in Bangalore',
  h2Features: 'Flutter App Development Services in Bangalore',
  features: [
    {
      h3: 'Flutter App Development Bangalore — Android & iOS',
      desc: 'Cross platform Flutter app development for Bangalore businesses — one Dart codebase delivering native-quality Android and iOS apps simultaneously. Faster development, lower cost and consistent UI across both platforms.',
    },
    {
      h3: 'Flutter Developers Bangalore',
      desc: "Experienced Flutter developers in Bangalore — skilled in Dart, Flutter SDK, Riverpod/BLoC state management, custom widget development and Flutter's animation framework. Building production-grade apps since Flutter's stable release.",
    },
    {
      h3: 'Flutter App Development Services Bangalore',
      desc: 'End-to-end Flutter app development services in Bangalore — requirements, UI/UX design, Flutter development, backend API integration, testing on real devices, Play Store and App Store submission and post-launch support.',
    },
    {
      h3: 'Dart App Development Bangalore',
      desc: "Dart-powered Flutter development in Bangalore — null-safe Dart with async/await for smooth API calls, Dart isolates for background processing and strong typing for maintainable, scalable Flutter codebases.",
    },
    {
      h3: 'Cross Platform App Development Bangalore',
      desc: 'Cross platform app development in Bangalore using Flutter — build once, deploy to Android, iOS and web. Ideal for Bangalore startups and SMEs who need both platforms without the cost and time of two separate native builds.',
    },
    {
      h3: 'Hire Flutter Developers Bangalore',
      desc: 'Hire dedicated Flutter developers in Bangalore from NNC — Dart and Flutter experts available on project or monthly retainer. In-house team, daily progress updates and consistent code quality with full IP ownership.',
    },
    {
      h3: 'Flutter Web Development Bangalore',
      desc: 'Flutter web development for Bangalore businesses — extend your Flutter mobile app to a responsive web application from the same codebase. Ideal for SaaS dashboards, admin panels and PWAs.',
    },
    {
      h3: 'Flutter App Development Bangalore — State Management',
      desc: 'Flutter apps built with production-ready state management in Bangalore — Riverpod, BLoC or Provider depending on app complexity. Clean architecture, separation of concerns and testable codebase from day one.',
    },
    {
      h3: 'Flutter App Development Bangalore — Integrations',
      desc: 'Flutter app integrations for Bangalore businesses — Razorpay, Stripe, Firebase (push notifications, analytics, Crashlytics), Google Maps, social login, SMS OTP, REST APIs and real-time features with WebSockets.',
    },
  ],
  h2Why: 'Why Choose NNC as Your Flutter App Development Company in Bangalore?',
  why: [
    {
      n: '01',
      h3: 'Bangalore headquarters — test on real devices',
      body: 'NNC is headquartered in Bangalore at Prestige Shantiniketan, Whitefield. Visit us to test your Flutter app on real Android and iOS devices, review UI prototypes and meet the Dart developers building your application.',
    },
    {
      n: '02',
      h3: 'One codebase, both platforms — half the cost',
      body: "Flutter's single codebase means Bangalore businesses get a fully functional Android and iOS app for significantly less than two separate native builds. Same quality, faster delivery, lower development and maintenance cost.",
    },
    {
      n: '03',
      h3: 'In-house Flutter team — zero outsourcing',
      body: 'Every Flutter developer, UI designer and QA engineer is a full-time NNC employee in Bangalore. Consistent team from brief to store launch — no freelancers, no offshore outsourcing.',
    },
    {
      n: '04',
      h3: 'Full stack — Flutter, backend, APIs, web',
      body: 'NNC handles the complete Flutter app stack — UI/UX design, Flutter front-end, Node JS backend, REST APIs, database and DevOps. One team managing everything from mobile to web.',
    },
    {
      n: '05',
      h3: 'Fixed price — fully scoped before development starts',
      body: 'Every Flutter project is scoped in detail and priced upfront. No hourly billing, no scope creep charges. You know the exact cost, timeline and feature list before work begins.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has built Flutter apps for ecommerce, logistics, healthcare, fintech and enterprise clients across Bangalore. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['Flutter', 'Dart', 'Riverpod', 'BLoC', 'Firebase', 'REST APIs', 'Google Play Console', 'App Store Connect'],
  h2Tech: 'Flutter Development Technology Stack',
  h2Faq: 'Flutter App Development Company Bangalore — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best Flutter app development company in Bangalore?',
      a: "NNC Digital is among Bangalore's top Flutter app development companies — 565+ projects, 4.9★ Google rating, headquartered in Whitefield. Cross platform Flutter apps for Android, iOS and web — all built in-house.",
    },
    {
      q: 'Do you build cross platform apps using Flutter in Bangalore?',
      a: 'Yes. NNC builds cross platform Flutter apps in Bangalore — one Dart codebase delivering Android and iOS apps simultaneously. Faster, more affordable than two separate native builds.',
    },
    {
      q: 'Do you offer Flutter web development in Bangalore?',
      a: 'Yes. NNC provides Flutter web development in Bangalore — extending your Flutter mobile app to a responsive web app from the same codebase. Ideal for dashboards and PWAs.',
    },
    {
      q: 'Can I hire Flutter developers from NNC in Bangalore?',
      a: 'Yes. Hire dedicated Flutter developers in Bangalore from NNC — available on project or monthly retainer with daily reporting and full IP ownership.',
    },
    {
      q: 'How much does Flutter app development cost in Bangalore?',
      a: 'Flutter apps for Android and iOS start from ₹45,000. Full Flutter apps with complex features and web start from ₹1,00,000. Fixed-price — no hourly billing.',
    },
    {
      q: 'Do you have a Flutter development office in Bangalore?',
      a: 'Yes. NNC is headquartered at Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit us to test on real devices and meet the Flutter development team.',
    },
  ],
}

export default function FlutterAppDevelopmentBangalorePage() {
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
