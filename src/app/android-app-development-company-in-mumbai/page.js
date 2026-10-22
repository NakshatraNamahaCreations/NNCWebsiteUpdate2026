import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Android App Development Company in Mumbai | NNC Digital',
  description:
    'Top Android app development company in Mumbai. Native Android app development, Kotlin & Java apps, Play Store deployment, enterprise Android apps. Hire Android developers in Mumbai — office in Thane West. Fixed price.',
  alternates: {
    canonical: `${SITE.url}/android-app-development-company-in-mumbai`,
  },
  keywords:
    'android app development company in mumbai, android app developers mumbai, native android app development mumbai, kotlin app development mumbai, java android development mumbai, hire android developers mumbai, play store app development mumbai, android application development mumbai, enterprise android app development mumbai, android app maker mumbai',
  openGraph: {
    title: 'Android App Development Company in Mumbai | NNC Digital',
    description:
      'Native Android app development in Mumbai — Kotlin, Java, Play Store deployment, enterprise Android apps. Hire Android developers with office in Thane West. Fixed price.',
    url: `${SITE.url}/android-app-development-company-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Android App Development Company in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Android App Development Company in Mumbai | NNC Digital',
    description:
      'Android app developers in Mumbai — Kotlin, Java, native Android, Play Store deployment. Office in Thane West. Fixed price.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Android App Development Company in Mumbai',
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
    'Android App Development',
    'Native Android App Development',
    'Kotlin App Development',
    'Java Android Development',
    'Enterprise Android App Development',
    'Play Store App Development',
  ],
  description:
    'Native Android app development for Mumbai businesses — Kotlin, Java, Play Store deployment, enterprise Android platforms and custom Android application development. Branch office in Thane West.',
  url: `${SITE.url}/android-app-development-company-in-mumbai`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Android MVP App Mumbai',
      price: '75000',
      priceCurrency: 'INR',
      description: 'Native Android MVP app with up to 8 screens, basic backend and Play Store deployment.',
    },
    {
      '@type': 'Offer',
      name: 'Android Business App Mumbai',
      price: '175000',
      priceCurrency: 'INR',
      description: 'Full-featured native Android app with admin panel, Razorpay integration and analytics.',
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
      name: 'Mobile App Development Mumbai',
      item: `${SITE.url}/mobile-app-development-company-in-mumbai`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Android App Development Company in Mumbai',
      item: `${SITE.url}/android-app-development-company-in-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best Android app development company in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Mumbai's top-rated Android app development companies — 100+ apps delivered, 4.9★ Google rating, branch office in Thane West. We build native Android apps in Kotlin and Java with full Play Store deployment handled end-to-end.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build native Android apps in Kotlin and Java in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds native Android apps in both Kotlin and Java in Mumbai. Kotlin is our preferred language for new Android projects — it is the official Google-recommended language, safer and more concise than Java. For legacy projects or specific requirements, we also work in Java.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Android app development cost in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A native Android MVP app starts from ₹75,000. A full-featured Android business app typically costs ₹1,50,000–₹2,50,000. Enterprise Android platforms are scoped individually. All projects are fixed-price — no hourly billing, no surprise invoices. Visit our Thane West office for a free consultation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will you handle Play Store submission for my Mumbai Android app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — completely. NNC manages the full Play Store submission process including app listing, screenshots, feature graphic, content rating, release management and review response. We also handle post-launch updates and version releases.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I hire dedicated Android developers in Mumbai from NNC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can hire dedicated Android developers from NNC Mumbai on a project or retainer basis. All developers are full-time NNC employees — not freelancers or outsourced contractors. You can meet them at our Thane West, Mumbai office.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build enterprise Android apps for Mumbai businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds enterprise Android applications for Mumbai corporates — role-based access, ERP/CRM integration, offline capability, device management (MDM) support and enterprise-grade security. We have delivered enterprise Android platforms for logistics, healthcare, retail and financial services companies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have an Android app development office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. You can visit us to review Android prototypes, test builds on device and meet the development team.',
      },
    },
  ],
}

const data = {
  badge: 'Android App Development · Mumbai',
  h1: 'Android App Development',
  h1Accent: 'Company in Mumbai',
  tagline:
    'Native Android app development in Mumbai — Kotlin & Java apps, Play Store deployment, enterprise Android platforms and custom Android application development. Hire Android developers with office in Thane West. Fixed price.',
  desc:
    'NNC Digital is a dedicated Android app development company in Mumbai building native Android applications in Kotlin and Java for startups, SMEs and enterprises across Mumbai, Thane and Navi Mumbai. From Play Store MVP apps and custom Android application development to enterprise Android platforms — every app is built by our in-house Android developers with zero outsourcing, full Play Store submission and complete source code ownership on delivery.',
  stat1: '100+',
  stat1Label: 'Mobile Apps Delivered',
  serviceName: 'Android app development in Mumbai',
  h2Features: 'Android App Development Services in Mumbai',
  features: [
    {
      h3: 'Native Android App Development Mumbai',
      desc: 'Fully native Android apps built in Kotlin — the official Google-recommended language. Faster performance, better memory management and tighter integration with Android OS features than any cross-platform alternative.',
    },
    {
      h3: 'Kotlin App Development Mumbai',
      desc: 'Modern Kotlin Android development — null safety, coroutines for async operations, Jetpack Compose UI and clean MVVM architecture. NNC\'s preferred stack for all new Android app projects in Mumbai.',
    },
    {
      h3: 'Java Android Development Mumbai',
      desc: 'Java-based Android development for legacy projects, enterprise systems requiring Java interoperability or clients with existing Java codebases. Full migration from Java to Kotlin also available.',
    },
    {
      h3: 'Play Store App Development Mumbai',
      desc: 'End-to-end Play Store app development — from initial build to Google Play submission, content rating, store listing optimisation (ASO), release management and post-launch update cycles.',
    },
    {
      h3: 'Enterprise Android App Development Mumbai',
      desc: 'Enterprise Android applications for Mumbai corporates — role-based access control, ERP/CRM integration, offline-first capability, device management (MDM) and enterprise-grade security and compliance.',
    },
    {
      h3: 'Android Application Development Mumbai',
      desc: 'Full-lifecycle Android application development — requirements, UI/UX design, development, QA, Play Store submission and post-launch support. Single point of accountability from brief to live app.',
    },
    {
      h3: 'On-demand & Ecommerce Android Apps Mumbai',
      desc: 'On-demand service apps, delivery apps, booking platforms and ecommerce Android apps with Razorpay/UPI integration, real-time tracking, push notifications and seller/driver dashboards.',
    },
    {
      h3: 'Hire Android Developers Mumbai',
      desc: 'Hire dedicated Android developers from NNC Mumbai on a project or retainer basis. All are full-time Kotlin/Java engineers — not freelancers. Meet them at our Thane West branch office.',
    },
    {
      h3: 'Android App Maker Mumbai — Prototyping to Launch',
      desc: 'From wireframes and clickable prototypes through to production build and Play Store launch — NNC acts as your end-to-end Android app maker in Mumbai with weekly progress builds shared throughout.',
    },
  ],
  h2Why: 'Why Choose NNC as Your Android App Development Company in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — meet Android developers in person',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to review your Android app on a real device, test Kotlin builds and meet the engineers writing your code — not just a project manager.',
    },
    {
      n: '02',
      h3: 'Native Kotlin — not a cross-platform compromise',
      body: 'NNC builds true native Android in Kotlin. Faster performance, full access to Android APIs, better battery efficiency and tighter integration with device hardware than React Native or Flutter can deliver.',
    },
    {
      n: '03',
      h3: 'Weekly APK builds — full visibility throughout',
      body: 'Every week you receive a working Android APK to install and test. You see exactly what is being built at every stage — not just a final handover after months of development.',
    },
    {
      n: '04',
      h3: 'Full Play Store submission handled end-to-end',
      body: 'NNC manages the complete Google Play submission — app listing, screenshots, feature graphic, content rating, release tracks and review responses. Post-launch updates and version releases also covered.',
    },
    {
      n: '05',
      h3: 'Fixed price — no hourly billing surprises',
      body: 'Every Android app project is scoped and priced upfront. No hourly billing, no scope creep invoices, no surprise charges for Play Store submission, Razorpay integration or post-launch bug fixes.',
    },
    {
      n: '06',
      h3: '100+ apps delivered — startups to enterprises',
      body: 'NNC has delivered 100+ mobile apps including native Android applications for on-demand services, ecommerce, logistics, healthcare and enterprise clients across Mumbai. 4.9★ on Google.',
    },
  ],
  techStack: ['Kotlin', 'Java', 'Android SDK', 'Jetpack Compose', 'Firebase', 'Razorpay', 'Retrofit', 'Room DB'],
  h2Tech: 'Android Development Technology Stack',
  h2Faq: 'Android App Development Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best Android app development company in Mumbai?',
      a: "NNC Digital is among Mumbai's top Android app development companies — 100+ apps delivered, 4.9★ Google rating, branch office in Thane West. Native Kotlin and Java development, weekly APK builds and full Play Store submission handled end-to-end.",
    },
    {
      q: 'Do you build apps in Kotlin or Java in Mumbai?',
      a: 'NNC builds native Android apps in Kotlin for all new projects — the official Google-recommended language. For legacy systems or Java-specific requirements we also work in Java, and offer Java-to-Kotlin migration.',
    },
    {
      q: 'How much does Android app development cost in Mumbai?',
      a: 'A native Android MVP app starts from ₹75,000. A full business app typically costs ₹1,50,000–₹2,50,000. Enterprise Android platforms are scoped individually. All projects are fixed-price — no hourly billing.',
    },
    {
      q: 'Can I hire dedicated Android developers in Mumbai?',
      a: 'Yes. Hire dedicated Kotlin/Java Android developers from NNC Mumbai on a project or retainer basis. All are full-time NNC employees — not freelancers. Meet them at our Thane West office.',
    },
    {
      q: 'Will you handle Play Store submission for my app?',
      a: 'Yes — completely. NNC manages the full Google Play submission including app listing, screenshots, content rating, release management and review responses. Post-launch updates also covered.',
    },
    {
      q: 'Do you build enterprise Android apps in Mumbai?',
      a: 'Yes. NNC builds enterprise Android applications with role-based access, ERP/CRM integration, offline capability and MDM support for Mumbai corporates in logistics, healthcare, retail and financial services.',
    },
  ],
}

export default function AndroidAppDevelopmentMumbaiPage() {
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
