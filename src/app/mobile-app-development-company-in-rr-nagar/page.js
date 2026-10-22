import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Mobile App Development Company in RR Nagar | Business Apps',
  description:
    'Choose a mobile app development company in RR Nagar to build scalable Android and iOS apps, with NNC delivering high performance and user friendly solutions.',
  alternates: {
    canonical: `${SITE.url}/mobile-app-development-company-in-rr-nagar`,
  },
  keywords:
    'mobile app development company in rr nagar, app development company rr nagar, mobile app developers rr nagar, android app development rr nagar, ios app development rr nagar, react native development rr nagar, flutter app development rr nagar',
  openGraph: {
    title: 'Mobile App Development Company in RR Nagar | Business Apps',
    description:
      'Choose a mobile app development company in RR Nagar to build scalable Android and iOS apps, with NNC delivering high performance and user friendly solutions.',
    url: `${SITE.url}/mobile-app-development-company-in-rr-nagar`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Mobile App Development Company in RR Nagar – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Mobile App Development Company in RR Nagar | Business Apps',
    description:
      'Choose a mobile app development company in RR Nagar to build scalable Android and iOS apps, with NNC delivering high performance and user friendly solutions.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile App Development Company in RR Nagar',
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
    { '@type': 'City', name: 'RR Nagar' },
    { '@type': 'City', name: 'Bangalore' },
    { '@type': 'City', name: 'Rajajinagar' },
    { '@type': 'City', name: 'Vijayanagar' },
    { '@type': 'City', name: 'Whitefield' },
  ],
  serviceType: [
    'Mobile App Development',
    'Android App Development',
    'iOS App Development',
    'React Native Development',
    'Flutter App Development',
    'Cross Platform App Development',
  ],
  description:
    'Mobile app development company serving RR Nagar, Bangalore — Android and iOS apps built with React Native and Flutter for RR Nagar businesses.',
  url: `${SITE.url}/mobile-app-development-company-in-rr-nagar`,
  offers: [
    {
      '@type': 'Offer',
      name: 'MVP App Development RR Nagar',
      price: '75000',
      priceCurrency: 'INR',
      description: 'MVP mobile app — React Native, Android + iOS, up to 8 screens, backend API, user auth and Play Store deployment.',
    },
    {
      '@type': 'Offer',
      name: 'Business App Development RR Nagar',
      price: '175000',
      priceCurrency: 'INR',
      description: 'Full-featured business app — React Native or Flutter, up to 20 screens, payment gateway, push notifications and AWS hosting.',
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
      name: 'Mobile App Development Company in RR Nagar',
      item: `${SITE.url}/mobile-app-development-company-in-rr-nagar`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best mobile app development company in RR Nagar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Digital is a top-rated mobile app development company serving RR Nagar, Bangalore — 150+ apps delivered, 4.9★ Google rating, 35+ in-house specialists. We build Android and iOS apps using React Native and Flutter for RR Nagar businesses.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide mobile app development services in RR Nagar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides full mobile app development services for RR Nagar businesses — Android app development, iOS app development, React Native cross-platform apps, Flutter apps, UI/UX design, backend API development and Play Store/App Store submission.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build Android and iOS apps for RR Nagar businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds both Android and iOS apps for RR Nagar businesses using React Native or Flutter — a single codebase delivering native-quality apps on both platforms, saving 30–40% in development time and cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of apps do you build for RR Nagar businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC builds all types of mobile apps for RR Nagar businesses — e-commerce apps, on-demand service apps, healthcare apps, business management apps, delivery apps, restaurant apps and custom enterprise mobile applications.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does mobile app development cost in RR Nagar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An MVP app for RR Nagar businesses starts from ₹75,000. A full business app starts from ₹1,75,000. All fixed-price — scope and cost agreed before development begins with no hourly billing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle Play Store and App Store submission for RR Nagar clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC manages full Play Store and App Store submission for RR Nagar clients — store listing, screenshots, review responses and release management on both platforms.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can RR Nagar businesses contact NNC for app development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RR Nagar businesses can contact NNC Digital at our Bangalore office — Prestige Shantiniketan, Whitefield, Bangalore 560048. Call or WhatsApp us to discuss your app requirements and get a fixed-price quote.',
      },
    },
  ],
}

const data = {
  badge: 'Mobile App Development · RR Nagar',
  h1: 'Mobile App Development Company',
  h1Accent: 'in RR Nagar',
  tagline:
    'Mobile app development company in RR Nagar — Android app development, iOS app development, React Native, Flutter and custom business app development. High performance, user friendly. Fixed price.',
  desc:
    'NNC Digital is a full-service mobile app development company serving RR Nagar, Bangalore — building scalable Android and iOS apps using React Native and Flutter for startups, SMEs and enterprises. Every app is developed by our 35+ member in-house Bangalore team with zero outsourcing, fixed-price contracts, weekly build drops and 100% source code ownership on delivery.',
  stat1: '150+',
  stat1Label: 'Apps Delivered',
  serviceName: 'mobile app development in RR Nagar',
  h2Features: 'Mobile App Development Services for RR Nagar Businesses',
  features: [
    {
      h3: 'Android App Development RR Nagar',
      desc: 'Native Android app development for RR Nagar businesses — Kotlin or React Native, designed for the Play Store with deep hardware integration, push notifications and offline support.',
    },
    {
      h3: 'iOS App Development RR Nagar',
      desc: 'iOS app development for RR Nagar businesses — Swift or React Native, App Store optimised with smooth performance across all iPhone and iPad models.',
    },
    {
      h3: 'React Native App Development RR Nagar',
      desc: 'React Native cross-platform apps for RR Nagar — one codebase delivering Android and iOS apps with near-native performance, saving 30–40% in cost and development time.',
    },
    {
      h3: 'Flutter App Development RR Nagar',
      desc: 'Flutter app development for RR Nagar businesses — pixel-perfect UI, smooth animations and consistent experience across Android and iOS. Ideal for consumer-facing apps.',
    },
    {
      h3: 'E-commerce App Development RR Nagar',
      desc: 'E-commerce mobile apps for RR Nagar businesses — product catalogue, cart, Razorpay/UPI payment integration, order tracking and vendor management dashboard.',
    },
    {
      h3: 'On-demand App Development RR Nagar',
      desc: 'On-demand service apps for RR Nagar — customer app, service provider app and admin panel. Real-time booking, GPS tracking and in-app payment.',
    },
    {
      h3: 'Business App Development RR Nagar',
      desc: 'Custom business apps for RR Nagar SMEs — workflow automation, employee management, inventory tracking, reporting dashboards and CRM-integrated mobile applications.',
    },
    {
      h3: 'App UI/UX Design RR Nagar',
      desc: 'App UI/UX design for RR Nagar businesses — Figma wireframes, screen-by-screen UI design and interactive prototypes before development begins. User-tested designs that maximise retention.',
    },
    {
      h3: 'App Maintenance & Support RR Nagar',
      desc: '30 days post-launch support included. Ongoing app maintenance — OS compatibility updates, performance fixes, feature additions and store listing management for RR Nagar clients.',
    },
  ],
  h2Why: 'Why Choose NNC as Your Mobile App Development Company in RR Nagar?',
  why: [
    {
      n: '01',
      h3: 'Bangalore-based — accessible from RR Nagar',
      body: 'NNC is headquartered in Whitefield, Bangalore — easily reachable for RR Nagar clients. Visit us to review app wireframes, test builds on real devices and meet the team building your app.',
    },
    {
      n: '02',
      h3: '35+ in-house developers — zero outsourcing',
      body: 'Every React Native, Flutter, Android and iOS developer is a full-time NNC employee in Bangalore. No freelancers, no offshore work — the same team from kickoff to App Store launch.',
    },
    {
      n: '03',
      h3: 'Weekly builds — full visibility throughout development',
      body: 'NNC shares weekly APK and TestFlight builds so RR Nagar clients can test real progress on their own devices — not just status reports.',
    },
    {
      n: '04',
      h3: 'Fixed price — fully scoped before development starts',
      body: 'Every app project is scoped in detail and priced upfront. No hourly billing, no surprise invoices. You know the exact cost, timeline and feature list before development begins.',
    },
    {
      n: '05',
      h3: 'Source code 100% yours — no lock-in',
      body: 'On delivery you receive the complete app source code, backend code, database schema and all credentials. The app is entirely yours with zero ongoing obligation to NNC.',
    },
    {
      n: '06',
      h3: '150+ apps delivered — 4.9★ Google rating',
      body: 'NNC has built apps for on-demand services, fintech, OTT, healthcare and enterprise clients across Bangalore. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['React Native', 'Flutter', 'Kotlin', 'Swift', 'Node JS', 'AWS', 'Firebase', 'Figma'],
  h2Tech: 'App Development Technology Stack',
  h2Faq: 'Mobile App Development Company RR Nagar — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best mobile app development company in RR Nagar?',
      a: 'NNC Digital — 150+ apps delivered, 4.9★ Google rating, 35+ in-house specialists in Bangalore. Android, iOS, React Native and Flutter — all built in-house.',
    },
    {
      q: 'Do you build Android and iOS apps for RR Nagar businesses?',
      a: 'Yes. NNC builds both Android and iOS apps using React Native or Flutter — one codebase, both platforms, saving 30–40% in cost.',
    },
    {
      q: 'What types of apps do you build for RR Nagar businesses?',
      a: 'E-commerce apps, on-demand apps, healthcare apps, business management apps, delivery apps and custom enterprise mobile applications.',
    },
    {
      q: 'How much does mobile app development cost in RR Nagar?',
      a: 'MVP apps start from ₹75,000. Full business apps start from ₹1,75,000. All fixed-price — scope agreed upfront.',
    },
    {
      q: 'Do you handle Play Store and App Store submission?',
      a: 'Yes. NNC manages full submission — store listing, screenshots, review responses and release management on both platforms.',
    },
    {
      q: 'How can RR Nagar businesses contact NNC?',
      a: 'Visit NNC at Prestige Shantiniketan, Whitefield, Bangalore 560048, or call/WhatsApp us to discuss your app project.',
    },
  ],
}

export default function MobileAppDevelopmentRRNagarPage() {
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
