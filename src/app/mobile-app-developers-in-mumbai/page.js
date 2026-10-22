import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Mobile App Developers in Mumbai | Enterprise App Development',
  description:
    'Choose mobile app developers in Mumbai to build scalable and high performance apps, with NNC delivering modern UI and Best mobile solutions for business growth.',
  alternates: {
    canonical: `${SITE.url}/mobile-app-developers-in-mumbai`,
  },
  keywords:
    'mobile app developers in mumbai, hire mobile app developers mumbai, best mobile app developers mumbai, mobile app developer mumbai, top mobile app developers mumbai, android app developers mumbai, ios app developers mumbai, react native developers mumbai, flutter developers mumbai, enterprise app developers mumbai',
  openGraph: {
    title: 'Mobile App Developers in Mumbai | Enterprise App Development',
    description:
      'Choose mobile app developers in Mumbai to build scalable and high performance apps, with NNC delivering modern UI and Best mobile solutions for business growth.',
    url: `${SITE.url}/mobile-app-developers-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Mobile App Developers in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Mobile App Developers in Mumbai | Enterprise App Development',
    description:
      'Choose mobile app developers in Mumbai to build scalable and high performance apps, with NNC delivering modern UI and Best mobile solutions for business growth.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile App Developers in Mumbai',
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
    'Mobile App Development',
    'iOS App Development',
    'Android App Development',
    'React Native App Development',
    'Flutter App Development',
    'Enterprise Mobile App Development',
    'On Demand App Development',
  ],
  description:
    'Mobile app developers in Mumbai — scalable, high performance iOS and Android apps with modern UI for business growth. In-house team, weekly builds, branch office in Thane West.',
  url: `${SITE.url}/mobile-app-developers-in-mumbai`,
  offers: [
    {
      '@type': 'Offer',
      name: 'MVP Mobile App Mumbai',
      price: '75000',
      priceCurrency: 'INR',
      description: 'MVP mobile app for iOS & Android with up to 8 screens, basic backend and store deployment.',
    },
    {
      '@type': 'Offer',
      name: 'Enterprise Mobile App Mumbai',
      price: '175000',
      priceCurrency: 'INR',
      description: 'Full-featured enterprise mobile app with admin panel, Razorpay integration and analytics.',
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
      name: 'Mobile App Development Company Mumbai',
      item: `${SITE.url}/mobile-app-development-company-in-mumbai`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Mobile App Developers in Mumbai',
      item: `${SITE.url}/mobile-app-developers-in-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I find the best mobile app developers in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital has among Mumbai's best mobile app developers — 100+ apps delivered, 4.9★ Google rating, branch office in Thane West. Our in-house developers build scalable, high performance iOS and Android apps with modern UI for business growth.",
      },
    },
    {
      '@type': 'Question',
      name: 'What do mobile app developers in Mumbai do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC's mobile app developers in Mumbai handle the full app lifecycle — requirements gathering, UI/UX design, React Native or Flutter development, backend API integration, QA on real devices, Play Store and App Store submission and post-launch support.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to hire mobile app developers in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A mobile app MVP starts from ₹75,000. A full-featured business app typically costs ₹1,50,000–₹2,50,000. Enterprise platforms are scoped individually. All projects are fixed-price — no hourly billing, no surprise invoices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do NNC mobile app developers in Mumbai build enterprise apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. NNC's mobile app developers in Mumbai build enterprise-grade apps with role-based access, ERP/CRM integration, offline sync, biometric authentication and enterprise security — deployed for Mumbai corporates and large businesses.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I hire dedicated mobile app developers in Mumbai from NNC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can hire dedicated mobile app developers from NNC Mumbai on a project or retainer basis. All are full-time NNC employees — not freelancers or outsourced contractors. Meet them at our Thane West, Mumbai office.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will mobile app developers handle Play Store and App Store submission in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — completely. NNC manages the full submission process for both Google Play Store and Apple App Store including listing, screenshots, metadata, content rating, review responses and release management.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do NNC mobile app developers have an office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to test app builds on real devices and meet the development team.',
      },
    },
  ],
}

const data = {
  badge: 'Mobile App Developers · Mumbai',
  h1: 'Mobile App Developers',
  h1Accent: 'in Mumbai',
  tagline:
    'Expert mobile app developers in Mumbai — scalable, high performance iOS and Android apps with modern UI for business growth. Weekly builds. Office in Thane West. Fixed price.',
  desc:
    "NNC Digital's mobile app developers in Mumbai build scalable, high performance iOS and Android applications for startups, SMEs and enterprises across Mumbai, Thane and Navi Mumbai. Our in-house developers deliver modern UI and best mobile solutions using React Native and Flutter — custom apps tailored for business growth with weekly APK and TestFlight builds, zero outsourcing and complete source code ownership on delivery.",
  stat1: '100+',
  stat1Label: 'Mobile Apps Delivered',
  serviceName: 'mobile app development in Mumbai',
  h2Features: 'What Our Mobile App Developers Build in Mumbai',
  features: [
    {
      h3: 'Custom Mobile App Development Mumbai',
      desc: 'Fully bespoke iOS and Android apps built from scratch — no templates, no generic solutions. Every screen, flow and feature is designed and coded to your exact Mumbai business requirements with modern UI.',
    },
    {
      h3: 'React Native App Development Mumbai',
      desc: 'Cross-platform React Native apps that run natively on both iOS and Android from a single JavaScript codebase — faster delivery, lower cost and code sharing with your React web app for Mumbai businesses.',
    },
    {
      h3: 'Flutter App Development Mumbai',
      desc: 'Flutter apps with pixel-perfect UI, 60fps animations and native performance on Android and iOS — ideal for Mumbai businesses that need a visually distinctive and high performance app on both platforms.',
    },
    {
      h3: 'Enterprise Mobile App Development Mumbai',
      desc: 'Enterprise-grade mobile apps for Mumbai corporates — role-based access control, ERP/CRM integration, offline-first local sync, biometric authentication and enterprise-level security architecture.',
    },
    {
      h3: 'On Demand App Development Mumbai',
      desc: 'On-demand service apps for Mumbai — delivery, booking, home services, logistics and marketplace apps with real-time tracking, push notifications, Razorpay/UPI integration and provider dashboards.',
    },
    {
      h3: 'MVP App Development Mumbai',
      desc: 'MVP mobile app for Mumbai startups — core feature set live on iOS and Android in 6–8 weeks, Play Store and App Store ready, with weekly builds shared throughout the development process.',
    },
    {
      h3: 'Ecommerce Mobile App Mumbai',
      desc: 'Ecommerce mobile apps connected to your web store backend — shared inventory, Razorpay/UPI checkout, order tracking, push notifications and loyalty programs for Mumbai D2C and retail brands.',
    },
    {
      h3: 'Store Submission & ASO Mumbai',
      desc: 'Full Play Store and App Store submission managed by NNC — listing, screenshots, metadata, ASO (App Store Optimisation), content rating, review responses and post-launch update releases.',
    },
    {
      h3: 'Hire Mobile App Developers Mumbai',
      desc: 'Hire dedicated mobile app developers from NNC Mumbai on a project or monthly retainer. All are full-time in-house engineers — not freelancers. Meet them at our Thane West office.',
    },
  ],
  h2Why: 'Why Hire Mobile App Developers from NNC Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — meet developers in person',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to test app builds on real iPhones and Android phones and meet the React Native and Flutter developers building your app.',
    },
    {
      n: '02',
      h3: 'Full-time in-house developers — not freelancers',
      body: 'Every mobile app developer at NNC Mumbai is a full-time employee — consistent, accountable engineers who stay with your project from brief to launch. No freelancer turnover, no offshore contractors.',
    },
    {
      n: '03',
      h3: 'Weekly APK & TestFlight builds — full visibility',
      body: 'Every week you receive installable builds for Android (APK) and iOS (TestFlight). Test exactly what is being built at every stage — complete transparency throughout development.',
    },
    {
      n: '04',
      h3: 'Modern UI & high performance — React Native + Flutter',
      body: "NNC's Mumbai developers build modern, high performance apps using React Native and Flutter — smooth 60fps animations, fast load times and native-feel UI that delights your users.",
    },
    {
      n: '05',
      h3: 'Fixed price — no hourly billing surprises',
      body: 'Every project is scoped and priced upfront. No hourly billing, no scope creep invoices, no surprise charges for store submission, payment gateway integration or post-launch fixes within warranty.',
    },
    {
      n: '06',
      h3: '100+ apps delivered — 4.9★ Google rating',
      body: 'NNC has delivered 100+ mobile apps for on-demand services, ecommerce, healthcare, logistics and enterprise clients across Mumbai. 4.9★ on Google.',
    },
  ],
  techStack: ['React Native', 'Flutter', 'Node JS', 'MongoDB', 'Firebase', 'Razorpay', 'AWS', 'Fastlane'],
  h2Tech: 'Mobile App Technology Stack',
  h2Faq: 'Mobile App Developers Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'Where can I find the best mobile app developers in Mumbai?',
      a: "NNC Digital has among Mumbai's best mobile app developers — 100+ apps, 4.9★ Google rating, office in Thane West. Scalable, high performance iOS and Android apps with modern UI for business growth.",
    },
    {
      q: 'How much does it cost to hire mobile app developers in Mumbai?',
      a: 'An MVP app starts from ₹75,000. A full business app typically costs ₹1,50,000–₹2,50,000. Monthly retainer hiring also available. All fixed-price — no hourly billing.',
    },
    {
      q: 'How long does mobile app development take in Mumbai?',
      a: 'An MVP takes 6–8 weeks. A full business app takes 10–14 weeks. Enterprise apps take 14–24 weeks. Every timeline agreed in writing before development begins.',
    },
    {
      q: 'Can I hire dedicated mobile app developers in Mumbai?',
      a: 'Yes. Hire dedicated mobile app developers from NNC Mumbai on a project or retainer. All are full-time NNC employees — not freelancers. Meet them at our Thane West office.',
    },
    {
      q: 'Will your mobile app developers handle store submission?',
      a: 'Yes — completely. NNC manages Play Store and App Store submission including listing, screenshots, content rating, review responses and release management.',
    },
    {
      q: 'Do you have a mobile app development office in Mumbai?',
      a: 'Yes. NNC has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to test builds on real devices and meet the team.',
    },
  ],
}

export default function MobileAppDevelopersInMumbaiPage() {
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
