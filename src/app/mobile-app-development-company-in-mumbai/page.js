import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Mobile App Development Company in Mumbai | Business Apps',
  description:
    'Choose a mobile app development company in Mumbai to build scalable Android and iOS apps, with NNC delivering high performance and user friendly solutions.',
  alternates: {
    canonical: `${SITE.url}/mobile-app-development-company-in-mumbai`,
  },
  keywords:
    'mobile app development company in mumbai, app development company in mumbai, mobile app developers in mumbai, best mobile app development company mumbai, top app development company mumbai, app developers in mumbai, mobile application development mumbai, custom mobile app development mumbai, enterprise mobile app development mumbai, on demand app development mumbai, hire mobile app developers mumbai, app development services mumbai, startup app development mumbai, mvp app development mumbai, app development agency mumbai',
  openGraph: {
    title: 'Mobile App Development Company in Mumbai | Business Apps',
    description:
      'Choose a mobile app development company in Mumbai to build scalable Android and iOS apps, with NNC delivering high performance and user friendly solutions.',
    url: `${SITE.url}/mobile-app-development-company-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Mobile App Development Company in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Mobile App Development Company in Mumbai | Business Apps',
    description:
      'Choose a mobile app development company in Mumbai to build scalable Android and iOS apps, with NNC delivering high performance and user friendly solutions.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile App Development Company in Mumbai',
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
    { '@type': 'City', name: 'BKC' },
    { '@type': 'City', name: 'Powai' },
  ],
  serviceType: [
    'Mobile App Development',
    'iOS App Development',
    'Android App Development',
    'React Native App Development',
    'Flutter App Development',
    'On Demand App Development',
    'Enterprise Mobile App Development',
    'Startup App Development',
    'MVP App Development',
    'Custom Mobile App Development',
  ],
  description:
    'Custom iOS and Android mobile app development for Mumbai businesses — React Native, Flutter, on-demand apps, enterprise platforms, startup MVPs and ecommerce apps. Branch office in Thane West.',
  url: `${SITE.url}/mobile-app-development-company-in-mumbai`,
  offers: [
    {
      '@type': 'Offer',
      name: 'MVP App Development Mumbai',
      price: '75000',
      priceCurrency: 'INR',
      description: 'React Native MVP app with up to 8 screens, basic backend and Play Store deployment.',
    },
    {
      '@type': 'Offer',
      name: 'Business App Development Mumbai',
      price: '175000',
      priceCurrency: 'INR',
      description: 'Full-featured React Native or Flutter app with admin panel, payment gateway and analytics.',
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
      name: 'Mobile App Development',
      item: `${SITE.url}/mobile-app-development-company-in-bangalore`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Mobile App Development Company in Mumbai',
      item: `${SITE.url}/mobile-app-development-company-in-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best mobile app development company in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Mumbai's top-rated mobile app development companies — 100+ apps delivered, 4.9★ Google rating, branch office in Thane West. We build iOS and Android apps on React Native and Flutter with weekly APK/TestFlight builds so you track progress throughout development.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does mobile app development cost in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A startup MVP app starts from ₹75,000. A full-featured business app is typically ₹1,50,000–₹2,50,000. Enterprise mobile platforms are scoped individually. All projects are fixed-price — no hourly billing, no surprise invoices. Visit our Thane West office for a free consultation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build React Native and Flutter apps in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds both React Native and Flutter apps in Mumbai. React Native suits businesses that want a large JavaScript ecosystem and code sharing with a React web app. Flutter delivers more precise UI control. Our Mumbai team will recommend the right framework after reviewing your requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you build on-demand and enterprise apps for Mumbai businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC has built on-demand service apps, delivery apps, booking platforms and enterprise mobile applications for Mumbai clients across logistics, healthcare, retail and financial services. Each app is built from scratch by our in-house team — zero outsourcing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you help Mumbai startups build MVP apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC offers MVP app development for Mumbai startups — a focused build of your core feature set, ready for Play Store and App Store submission within 6–8 weeks. Fixed scope, fixed price. Ideal for validating your product before raising funding.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will you handle Play Store and App Store submission in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — completely. NNC manages the full submission process including store listing, screenshots, metadata, review responses and release management on both Google Play Store and Apple App Store.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I hire dedicated mobile app developers in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can hire dedicated mobile app developers from NNC Mumbai on a project or retainer basis. All developers are full-time NNC employees — not freelancers or outsourced contractors. You can meet them at our Thane West office.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have an office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. You can visit us to discuss your app project, review prototypes and meet the development team.',
      },
    },
  ],
}

const data = {
  badge: 'Mobile App Development · Mumbai',
  h1: 'Mobile App Development',
  h1Accent: 'Company in Mumbai',
  tagline:
    'Custom iOS & Android app development in Mumbai — React Native, Flutter, on-demand apps, enterprise platforms, startup MVPs and ecommerce app development. Weekly builds. Branch office in Thane West. Fixed price.',
  desc:
    'NNC Digital is a full-service mobile app development company in Mumbai building custom iOS and Android applications for startups, SMEs and enterprises across Mumbai, Thane and Navi Mumbai. From MVP app development and startup app development to on-demand app development and enterprise mobile platforms — every app is built by our in-house team using React Native and Flutter. Zero outsourcing, weekly APK/TestFlight builds and complete source code ownership on delivery. Our branch office in Thane West means you can meet the developers in person.',
  stat1: '100+',
  stat1Label: 'Mobile Apps Delivered',
  serviceName: 'mobile app development in Mumbai',
  h2Features: 'Complete Mobile App Development Services in Mumbai',
  features: [
    {
      h3: 'Custom Mobile App Development Mumbai',
      desc: 'Fully bespoke iOS and Android apps built from scratch — no templates, no off-the-shelf frameworks. Every screen, flow and feature is designed and coded to your exact business requirements.',
    },
    {
      h3: 'React Native App Development Mumbai',
      desc: 'Cross-platform React Native apps that run natively on both iOS and Android from a single codebase. Faster delivery, lower cost and a shared JavaScript codebase if you also have a React web app.',
    },
    {
      h3: 'Flutter App Development Mumbai',
      desc: 'Flutter apps with pixel-perfect UI, 60fps animations and native performance on Android and iOS. Ideal for Mumbai businesses that need a visually distinctive app experience across both platforms.',
    },
    {
      h3: 'On Demand App Development Mumbai',
      desc: 'On-demand service apps — delivery, booking, home services, logistics and marketplace apps — with real-time tracking, push notifications, payment gateway integration and driver/provider dashboards.',
    },
    {
      h3: 'Enterprise Mobile App Development Mumbai',
      desc: 'Enterprise-grade mobile platforms with role-based access control, ERP/CRM integration, offline capability, multi-location support and enterprise-level security — built for Mumbai corporates and large businesses.',
    },
    {
      h3: 'Startup App Development & MVP Mumbai',
      desc: 'MVP app development for Mumbai startups — a focused build of your core feature set delivered in 6–8 weeks, ready for Play Store and App Store submission and investor demos.',
    },
    {
      h3: 'Ecommerce Mobile App Development Mumbai',
      desc: 'Ecommerce apps connected to your web store backend — shared inventory, product catalogue, Razorpay/UPI checkout, order tracking and push notification campaigns for Mumbai D2C and retail brands.',
    },
    {
      h3: 'iOS & Android App Development Mumbai',
      desc: 'Native and cross-platform iOS and Android apps — full Play Store and App Store submission, ASO (App Store Optimisation), store listing management and post-launch update releases.',
    },
    {
      h3: 'Hire Mobile App Developers Mumbai',
      desc: 'Hire dedicated mobile app developers from NNC Mumbai on a project or retainer basis. All developers are full-time employees — not freelancers. Meet them at our Thane West branch office.',
    },
  ],
  h2Why: 'Why Choose NNC as Your Mobile App Development Company in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — meet the team in Thane West',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. You can visit, review app prototypes on device and meet the React Native and Flutter developers building your application — no remote-only relationships.',
    },
    {
      n: '02',
      h3: 'Weekly APK & TestFlight builds — full visibility',
      body: 'Every week you receive a working build on Android (APK) and iOS (TestFlight). You see exactly what is being built at every stage — not just a final handover after months of silence.',
    },
    {
      n: '03',
      h3: 'React Native & Flutter — both in-house',
      body: 'NNC has dedicated React Native and Flutter specialists in-house. No switching agencies based on framework. We recommend the right technology for your app after reviewing your requirements and existing tech stack.',
    },
    {
      n: '04',
      h3: 'Fixed price — no hourly billing surprises',
      body: 'Every app project is scoped and priced upfront — MVP, business app or enterprise platform. No hourly billing, no scope creep invoices, no surprise charges for Play Store submission or payment gateway setup.',
    },
    {
      n: '05',
      h3: '35+ in-house specialists — zero outsourcing',
      body: 'Every mobile developer, UI designer and QA engineer is a full-time NNC employee. When you hire NNC Mumbai you hire NNC — not a middleman managing freelancers in another city.',
    },
    {
      n: '06',
      h3: '100+ apps delivered — startups to enterprises',
      body: 'NNC has delivered 100+ mobile apps for on-demand services, ecommerce, healthcare, logistics, fintech and enterprise clients. Mumbai startups through to large corporates. 4.9★ on Google.',
    },
  ],
  techStack: ['React Native', 'Flutter', 'Node JS', 'MongoDB', 'Firebase', 'Razorpay', 'AWS', 'Fastlane'],
  h2Tech: 'Mobile App Technology Stack',
  h2Faq: 'Mobile App Development Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best mobile app development company in Mumbai?',
      a: "NNC Digital is among Mumbai's top-rated app development companies — 100+ apps delivered, 4.9★ Google rating, branch office in Thane West. We build iOS and Android apps using React Native and Flutter. Weekly builds, fixed price, zero outsourcing.",
    },
    {
      q: 'How much does app development cost in Mumbai?',
      a: 'A startup MVP app starts from ₹75,000. A full-featured business app typically costs ₹1,50,000–₹2,50,000. Enterprise mobile platforms are scoped individually. All projects are fixed-price — no hourly billing, no surprise invoices.',
    },
    {
      q: 'How long does it take to build a mobile app in Mumbai?',
      a: 'An MVP app takes 6–8 weeks. A full business app takes 10–14 weeks. Enterprise platforms take 14–24 weeks. Every timeline is agreed in writing before development begins.',
    },
    {
      q: 'Do you build React Native and Flutter apps in Mumbai?',
      a: 'Yes. NNC has in-house React Native and Flutter specialists in Mumbai. We recommend the right framework after reviewing your requirements, budget and existing tech stack.',
    },
    {
      q: 'Can I hire dedicated app developers in Mumbai from NNC?',
      a: 'Yes. You can hire dedicated mobile app developers from NNC Mumbai on a project or retainer basis. All are full-time NNC employees — not freelancers. You can meet them at our Thane West office.',
    },
    {
      q: 'Will you handle Play Store and App Store submission?',
      a: 'Yes — completely. NNC manages the full submission process including store listing, screenshots, metadata, review responses and release management on both Google Play Store and Apple App Store.',
    },
  ],
}

export default function MobileAppDevelopmentMumbaiPage() {
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
