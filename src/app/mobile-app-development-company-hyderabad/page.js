import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Mobile App Development Company Hyderabad | Enterprise Apps',
  description:
    'Choose our  mobile app development company Hyderabad to build scalable apps, with NNC delivering high performance Android and iOS solutions for business growth.',
  alternates: {
    canonical: `${SITE.url}/mobile-app-development-company-hyderabad`,
  },
  keywords:
    'mobile app development company hyderabad, app development company hyderabad, mobile app developers hyderabad, android app development hyderabad, ios app development hyderabad, react native app development hyderabad, flutter app development hyderabad, enterprise app development hyderabad, on demand app development hyderabad, hire mobile app developers hyderabad',
  openGraph: {
    title: 'Mobile App Development Company Hyderabad | Enterprise Apps',
    description:
      'Choose our  mobile app development company Hyderabad to build scalable apps, with NNC delivering high performance Android and iOS solutions for business growth.',
    url: `${SITE.url}/mobile-app-development-company-hyderabad`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Mobile App Development Company Hyderabad – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Mobile App Development Company Hyderabad | Enterprise Apps',
    description:
      'Choose our  mobile app development company Hyderabad to build scalable apps, with NNC delivering high performance Android and iOS solutions for business growth.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile App Development Company Hyderabad',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4th Floor, Skootr, Salarpuria Sattva Knowledge City',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: '500081',
      addressCountry: 'IN',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Hyderabad' },
    { '@type': 'City', name: 'Secunderabad' },
    { '@type': 'City', name: 'HITEC City' },
    { '@type': 'City', name: 'Gachibowli' },
    { '@type': 'City', name: 'Banjara Hills' },
  ],
  serviceType: [
    'Mobile App Development',
    'iOS App Development',
    'Android App Development',
    'React Native App Development',
    'Flutter App Development',
    'Enterprise App Development',
    'On Demand App Development',
  ],
  description:
    'Mobile app development company in Hyderabad — scalable, high performance Android and iOS apps for business growth. React Native, Flutter, enterprise apps and startup MVPs.',
  url: `${SITE.url}/mobile-app-development-company-hyderabad`,
  offers: [
    {
      '@type': 'Offer',
      name: 'MVP App Development Hyderabad',
      price: '75000',
      priceCurrency: 'INR',
      description: 'React Native MVP app with up to 8 screens, basic backend and Play Store deployment.',
    },
    {
      '@type': 'Offer',
      name: 'Enterprise Mobile App Hyderabad',
      price: '175000',
      priceCurrency: 'INR',
      description: 'Full-featured enterprise mobile app with admin panel, payment gateway and analytics.',
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
      name: 'Mobile App Development Company Hyderabad',
      item: `${SITE.url}/mobile-app-development-company-hyderabad`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best mobile app development company in Hyderabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Hyderabad's top-rated mobile app development companies — 100+ apps delivered, 4.9★ Google rating. We build scalable, high performance Android and iOS apps using React Native and Flutter for Hyderabad startups, SMEs and enterprises.",
      },
    },
    {
      '@type': 'Question',
      name: 'What mobile app development services does NNC offer in Hyderabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC provides full mobile app development services in Hyderabad — iOS app development, Android app development, React Native cross-platform apps, Flutter apps, enterprise mobile platforms, on-demand apps, startup MVPs and Play Store/App Store submission.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does mobile app development cost in Hyderabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A startup MVP app starts from ₹75,000. A full-featured business app is typically ₹1,50,000–₹2,50,000. Enterprise mobile platforms are scoped individually. All projects are fixed-price — no hourly billing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build enterprise apps for Hyderabad businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds enterprise mobile apps for Hyderabad businesses — role-based access control, ERP/CRM integration, offline capability, biometric authentication and enterprise-level security. Built for HITEC City corporates and large Hyderabad enterprises.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build React Native and Flutter apps in Hyderabad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds both React Native and Flutter apps for Hyderabad clients. React Native suits businesses with JavaScript ecosystems; Flutter delivers precise UI control. Our team recommends the right framework after reviewing your requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will you handle Play Store and App Store submission for Hyderabad clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — completely. NNC manages the full submission process including store listing, screenshots, metadata, content rating, review responses and release management on both Google Play Store and Apple App Store.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I hire dedicated mobile app developers for my Hyderabad project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can hire dedicated mobile app developers from NNC on a project or retainer basis. All are full-time NNC employees — not freelancers. Weekly APK and TestFlight builds keep you fully informed throughout development.',
      },
    },
  ],
}

const data = {
  badge: 'Mobile App Development · Hyderabad',
  h1: 'Mobile App Development',
  h1Accent: 'Company Hyderabad',
  tagline:
    'Top mobile app development company in Hyderabad — scalable, high performance Android and iOS apps for enterprise, startups and business growth. React Native, Flutter, weekly builds. Fixed price.',
  desc:
    'NNC Digital is a full-service mobile app development company serving Hyderabad businesses — building scalable, high performance Android and iOS applications for startups, SMEs and enterprises across Hyderabad, HITEC City, Gachibowli and Secunderabad. From MVP app development and on-demand platforms to enterprise mobile solutions — every app is built by our in-house React Native and Flutter developers with weekly APK/TestFlight builds, zero outsourcing and complete source code ownership on delivery.',
  stat1: '100+',
  stat1Label: 'Mobile Apps Delivered',
  serviceName: 'mobile app development in Hyderabad',
  h2Features: 'Mobile App Development Services in Hyderabad',
  features: [
    {
      h3: 'React Native App Development Hyderabad',
      desc: 'Cross-platform React Native apps that run natively on iOS and Android from a single codebase — faster delivery, lower cost and high performance for Hyderabad startups and enterprises.',
    },
    {
      h3: 'Flutter App Development Hyderabad',
      desc: 'Flutter apps with pixel-perfect UI, 60fps animations and native performance on Android and iOS — ideal for Hyderabad businesses that need a visually distinctive app across both platforms.',
    },
    {
      h3: 'Android App Development Hyderabad',
      desc: 'Custom Android app development for Hyderabad businesses — Kotlin/Java or React Native, Google Play Store submission, Material Design UI and integration with REST APIs and Firebase.',
    },
    {
      h3: 'iOS App Development Hyderabad',
      desc: 'Custom iOS app development for Hyderabad businesses — Swift or React Native, App Store submission, Apple Human Interface Guidelines UI and secure backend integration.',
    },
    {
      h3: 'Enterprise Mobile App Development Hyderabad',
      desc: 'Enterprise mobile platforms for Hyderabad corporates — role-based access control, ERP/CRM integration, offline sync, biometric authentication and enterprise-level security for HITEC City businesses.',
    },
    {
      h3: 'On Demand App Development Hyderabad',
      desc: 'On-demand service apps for Hyderabad — delivery, booking, home services and logistics apps with real-time tracking, push notifications, Razorpay/UPI integration and provider dashboards.',
    },
    {
      h3: 'Startup MVP App Development Hyderabad',
      desc: 'MVP app development for Hyderabad startups — core feature set live on iOS and Android in 6–8 weeks, Play Store and App Store ready, with weekly builds throughout the development process.',
    },
    {
      h3: 'Ecommerce Mobile App Hyderabad',
      desc: 'Ecommerce mobile apps for Hyderabad D2C and retail brands — Razorpay/UPI checkout, product catalogue, order tracking, push notifications and loyalty programs connected to your web store.',
    },
    {
      h3: 'Hire Mobile App Developers Hyderabad',
      desc: 'Hire dedicated mobile app developers for your Hyderabad project on a project or retainer basis. Full-time in-house React Native and Flutter engineers — not freelancers. Weekly builds and full transparency.',
    },
  ],
  h2Why: 'Why Choose NNC as Your Mobile App Development Company in Hyderabad?',
  why: [
    {
      n: '01',
      h3: 'Serving Hyderabad — HITEC City to Gachibowli',
      body: "NNC serves Hyderabad's entire tech corridor — HITEC City, Gachibowli, Banjara Hills and Secunderabad. Remote-first engagement with weekly video check-ins, APK builds and full project transparency throughout development.",
    },
    {
      n: '02',
      h3: 'Weekly APK & TestFlight builds — full visibility',
      body: 'Every week you receive working builds for Android (APK) and iOS (TestFlight). Test exactly what is being built at every stage — complete transparency from kickoff to launch.',
    },
    {
      n: '03',
      h3: 'React Native & Flutter — both in-house',
      body: 'NNC has dedicated React Native and Flutter specialists in-house. We recommend the right technology for your Hyderabad project after reviewing your requirements, budget and existing tech stack.',
    },
    {
      n: '04',
      h3: 'Enterprise & startup experience — Hyderabad scale',
      body: "NNC has built enterprise mobile apps for large corporates and MVPs for funded startups. Whether you're a HITEC City enterprise or a Hyderabad startup, we deliver the right solution at the right scale.",
    },
    {
      n: '05',
      h3: 'Fixed price — no hourly billing surprises',
      body: 'Every app project is scoped and priced upfront. No hourly billing, no scope creep invoices, no surprise charges for Play Store submission or payment gateway integration.',
    },
    {
      n: '06',
      h3: '100+ apps delivered — 4.9★ Google rating',
      body: 'NNC has delivered 100+ mobile apps for on-demand services, ecommerce, healthcare, logistics and enterprise clients. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['React Native', 'Flutter', 'Node JS', 'MongoDB', 'Firebase', 'Razorpay', 'AWS', 'Fastlane'],
  h2Tech: 'Mobile App Technology Stack',
  h2Faq: 'Mobile App Development Company Hyderabad — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best mobile app development company in Hyderabad?',
      a: "NNC Digital — 100+ apps delivered, 4.9★ Google rating. Scalable, high performance Android and iOS apps using React Native and Flutter for Hyderabad businesses. Weekly builds, fixed price.",
    },
    {
      q: 'How much does mobile app development cost in Hyderabad?',
      a: 'MVP app from ₹75,000. Full business app ₹1,50,000–₹2,50,000. Enterprise platforms scoped individually. All fixed-price — no hourly billing.',
    },
    {
      q: 'Do you build enterprise apps for Hyderabad businesses?',
      a: 'Yes. NNC builds enterprise apps for HITEC City corporates — role-based access, ERP/CRM integration, offline sync and biometric authentication.',
    },
    {
      q: 'Do you build React Native and Flutter apps in Hyderabad?',
      a: 'Yes. NNC has in-house React Native and Flutter specialists. We recommend the right framework after reviewing your Hyderabad project requirements.',
    },
    {
      q: 'Will you handle Play Store and App Store submission for Hyderabad clients?',
      a: 'Yes — completely. NNC manages full Play Store and App Store submission including listing, screenshots, content rating and review responses.',
    },
    {
      q: 'Can I hire dedicated mobile app developers for my Hyderabad project?',
      a: 'Yes. Hire dedicated React Native and Flutter developers on a project or retainer. Full-time NNC employees — not freelancers. Weekly APK and TestFlight builds throughout.',
    },
  ],
}

export default function MobileAppDevelopmentHyderabadPage() {
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
