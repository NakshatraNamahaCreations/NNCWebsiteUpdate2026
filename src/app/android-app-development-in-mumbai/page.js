import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Android App Development in Mumbai | Android Software Design',
  description:
    'Choose Android app development in Mumbai to build scalable and high performance apps, with NNC delivering custom solutions tailored to your business needs.',
  alternates: {
    canonical: `${SITE.url}/android-app-development-in-mumbai`,
  },
  keywords:
    'android app development in mumbai, android app development mumbai, android app developers mumbai, native android development mumbai, kotlin app development mumbai, android software development mumbai, custom android app mumbai, hire android developers mumbai, android application development mumbai',
  openGraph: {
    title: 'Android App Development in Mumbai | Android Software Design',
    description:
      'Choose Android app development in Mumbai to build scalable and high performance apps, with NNC delivering custom solutions tailored to your business needs.',
    url: `${SITE.url}/android-app-development-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Android App Development in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Android App Development in Mumbai | Android Software Design',
    description:
      'Choose Android app development in Mumbai to build scalable and high performance apps, with NNC delivering custom solutions tailored to your business needs.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Android App Development in Mumbai',
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
    'Native Android Development',
    'Kotlin App Development',
    'Java Android Development',
    'Enterprise Android App Development',
    'Play Store App Development',
    'Custom Android App Development',
  ],
  description:
    'Android app development in Mumbai — scalable and high performance native Android apps in Kotlin and Java for startups, SMEs and enterprises. Custom solutions, Play Store deployment. Branch office in Thane West.',
  url: `${SITE.url}/android-app-development-in-mumbai`,
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
      name: 'Android App Development Company Mumbai',
      item: `${SITE.url}/android-app-development-company-in-mumbai`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Android App Development in Mumbai',
      item: `${SITE.url}/android-app-development-in-mumbai`,
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
        text: "NNC Digital is among Mumbai's top-rated Android app development companies — 100+ apps delivered, 4.9★ Google rating, branch office in Thane West. We build scalable and high performance native Android apps in Kotlin and Java with custom solutions tailored to your business needs.",
      },
    },
    {
      '@type': 'Question',
      name: 'What does Android app development in Mumbai include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC\'s Android app development in Mumbai includes requirements analysis, UI/UX design, native Kotlin or Java development, QA testing, Play Store submission and post-launch support. Every app is built from scratch — no templates, no cross-platform compromises.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Android app development cost in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A native Android MVP app starts from ₹75,000. A full-featured Android business app typically costs ₹1,50,000–₹2,50,000. Enterprise Android platforms are scoped individually. All projects are fixed-price — no hourly billing, no surprise invoices.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does Android app development take in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An MVP Android app takes 6–8 weeks. A full business app takes 10–14 weeks. Enterprise platforms take 14–24 weeks. Every timeline is agreed in writing before development begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I hire dedicated Android developers in Mumbai from NNC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can hire dedicated Android developers from NNC Mumbai on a project or retainer basis. All developers are full-time NNC employees — not freelancers or outsourced contractors. Meet them at our Thane West office.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle Play Store submission for Android apps in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — completely. NNC manages the full Google Play submission including app listing, screenshots, feature graphic, content rating, release management and review responses. Post-launch updates also covered.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have an Android app development office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to review Android prototypes, test builds on device and meet the development team.',
      },
    },
  ],
}

const data = {
  badge: 'Android App Development · Mumbai',
  h1: 'Android App Development',
  h1Accent: 'in Mumbai',
  tagline:
    'Custom Android app development in Mumbai — scalable, high performance native apps in Kotlin and Java. Play Store deployment, enterprise solutions and on-demand apps. Office in Thane West. Fixed price.',
  desc:
    'NNC Digital provides expert Android app development in Mumbai for startups, SMEs and enterprises across Mumbai, Thane and Navi Mumbai. We build scalable and high performance native Android applications in Kotlin and Java — custom solutions tailored to your specific business needs. From Play Store MVP apps and on-demand delivery apps to enterprise Android platforms — every app is built by our in-house Android development team with zero outsourcing, weekly APK builds and complete source code ownership on delivery.',
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
      desc: 'Modern Kotlin Android development — null safety, coroutines for async operations, Jetpack Compose UI and clean MVVM architecture. Our preferred stack for all new Android app development projects in Mumbai.',
    },
    {
      h3: 'Custom Android App Development Mumbai',
      desc: 'Fully bespoke Android apps built around your exact business requirements — custom workflows, unique UI, specific device integrations and business logic designed exclusively for your Mumbai business.',
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
      h3: 'On-demand Android App Development Mumbai',
      desc: 'On-demand service apps, delivery apps, booking platforms and marketplace Android apps with Razorpay/UPI integration, real-time tracking, push notifications and driver/provider dashboards.',
    },
    {
      h3: 'Android Software Design Mumbai',
      desc: 'End-to-end Android software design — UI/UX wireframes, Material Design 3 interface design, prototyping and user testing before development begins. Beautiful, intuitive Android experiences for Mumbai users.',
    },
    {
      h3: 'Hire Android Developers Mumbai',
      desc: 'Hire dedicated Android developers from NNC Mumbai on a project or retainer basis. All are full-time Kotlin/Java engineers — not freelancers. Meet them at our Thane West branch office.',
    },
    {
      h3: 'Android App Maintenance & Upgrades Mumbai',
      desc: 'Ongoing Android app maintenance for Mumbai businesses — OS version upgrades, API updates, performance optimisation, bug fixes and new feature additions for existing Android applications.',
    },
  ],
  h2Why: 'Why Choose NNC for Android App Development in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — test builds on real devices',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to review your Android app on a real device, test Kotlin builds and meet the engineers writing your code in person.',
    },
    {
      n: '02',
      h3: 'Native Kotlin — scalable and high performance',
      body: 'NNC builds true native Android in Kotlin. Faster performance, full access to Android APIs, better battery efficiency and tighter hardware integration — scalable solutions that grow with your Mumbai business.',
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
      body: 'Every Android app development project is scoped and priced upfront. No hourly billing, no scope creep invoices, no surprise charges for Play Store submission or Razorpay integration.',
    },
    {
      n: '06',
      h3: '100+ apps delivered — 4.9★ Google rating',
      body: 'NNC has delivered 100+ mobile apps including native Android applications for on-demand services, ecommerce, logistics, healthcare and enterprise clients across Mumbai. 4.9★ on Google.',
    },
  ],
  techStack: ['Kotlin', 'Java', 'Android SDK', 'Jetpack Compose', 'Firebase', 'Razorpay', 'Retrofit', 'Room DB'],
  h2Tech: 'Android Development Technology Stack',
  h2Faq: 'Android App Development Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best Android app development company in Mumbai?',
      a: "NNC Digital is among Mumbai's top Android app development companies — 100+ apps delivered, 4.9★ Google rating, branch office in Thane West. Scalable and high performance native Kotlin apps with full Play Store submission.",
    },
    {
      q: 'How much does Android app development cost in Mumbai?',
      a: 'A native Android MVP app starts from ₹75,000. A full business app typically costs ₹1,50,000–₹2,50,000. Enterprise platforms are scoped individually. All fixed-price — no hourly billing.',
    },
    {
      q: 'How long does Android app development take in Mumbai?',
      a: 'An MVP app takes 6–8 weeks. A full business app takes 10–14 weeks. Enterprise platforms take 14–24 weeks. All timelines agreed in writing before development begins.',
    },
    {
      q: 'Can I hire dedicated Android developers in Mumbai?',
      a: 'Yes. Hire dedicated Kotlin/Java Android developers from NNC Mumbai on a project or retainer basis. All are full-time NNC employees — not freelancers. Meet them at our Thane West office.',
    },
    {
      q: 'Will you handle Play Store submission for my app?',
      a: 'Yes — completely. NNC manages the full Google Play submission including app listing, screenshots, content rating, release management and review responses.',
    },
    {
      q: 'Do you have an Android development office in Mumbai?',
      a: 'Yes. NNC has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to test builds on real Android devices and meet the development team.',
    },
  ],
}

export default function AndroidAppDevelopmentInMumbaiPage() {
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
