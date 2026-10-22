import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Android App Development Company in Bangalore | NNC Digital',
  description:
    'Top Android app development company in Bangalore. Android app developers, native Android development, Kotlin app development, Java Android development, hire Android developers, Play Store app development, Android application development & enterprise Android app development. Fixed price.',
  alternates: {
    canonical: `${SITE.url}/android-app-development-company-in-bangalore`,
  },
  keywords:
    'android app development company in bangalore, android app developers bangalore, native android app development bangalore, kotlin app development bangalore, java android development bangalore, hire android developers bangalore, play store app development bangalore, android application development bangalore, enterprise android app development bangalore, android app maker bangalore',
  openGraph: {
    title: 'Android App Development Company in Bangalore | NNC Digital',
    description:
      'Android app development company in Bangalore — native Android, Kotlin, Java, Play Store development, enterprise Android apps & hire Android developers. Fixed price.',
    url: `${SITE.url}/android-app-development-company-in-bangalore`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Android App Development Company in Bangalore – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Android App Development Company in Bangalore | NNC Digital',
    description:
      'Android app development company in Bangalore — native Android, Kotlin, Java, Play Store & enterprise Android app development. Fixed price.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Android App Development Company in Bangalore',
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
    'Android App Development',
    'Native Android Development',
    'Kotlin App Development',
    'Java Android Development',
    'Play Store App Development',
    'Enterprise Android App Development',
  ],
  description:
    'Android app development company in Bangalore — native Android development, Kotlin, Java, Play Store publishing, enterprise Android apps and hire Android developers for Bangalore businesses.',
  url: `${SITE.url}/android-app-development-company-in-bangalore`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Android App Development Bangalore — Starter',
      price: '50000',
      priceCurrency: 'INR',
      description: 'Native Android app — core features, UI, backend API integration, Play Store submission and 3 months support.',
    },
    {
      '@type': 'Offer',
      name: 'Enterprise Android App Bangalore',
      price: '150000',
      priceCurrency: 'INR',
      description: 'Enterprise-grade Android application with complex workflows, system integrations, offline capability and admin dashboard.',
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
      name: 'Android App Development Company in Bangalore',
      item: `${SITE.url}/android-app-development-company-in-bangalore`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best Android app development company in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Bangalore's top-rated Android app development companies — 565+ projects delivered, 4.9★ Google rating, headquartered in Whitefield, Bangalore. We build native Android apps in Kotlin and Java for startups, SMEs and enterprise clients across all industries.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build native Android apps in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds native Android app development in Bangalore using Kotlin and Java — delivering fast, performant Android applications that fully leverage Android platform features, hardware APIs and Material Design guidelines. Native apps outperform hybrid apps for complex, performance-sensitive use cases.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you develop Android apps in Kotlin in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC uses Kotlin as the primary language for Android app development in Bangalore — Google\'s recommended language for Android. Kotlin apps are concise, null-safe and fully interoperable with Java, making them easier to maintain and less prone to crashes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build enterprise Android applications in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds enterprise Android app development for Bangalore companies — field force apps, enterprise mobility solutions, ERP-integrated Android apps, offline-capable apps with sync, device management (MDM) compatibility and multi-user role support.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle Play Store submission for Bangalore Android apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC handles full Play Store app development and submission for Bangalore clients — app store listing creation, screenshots, feature graphic, store description, app signing, release track management (internal, closed testing, production) and post-launch monitoring.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Android app development cost in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A native Android app in Bangalore starts from ₹50,000 — covering core features, UI, backend API integration and Play Store submission. Enterprise Android applications with complex workflows and integrations typically cost ₹1,50,000–₹5,00,000. All fixed-price — no hourly billing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have an Android app development office in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital is headquartered in Bangalore at Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit us to review your Android app wireframes, go through UI prototypes and meet the Android development team building your application.',
      },
    },
  ],
}

const data = {
  badge: 'Android App Development · Bangalore',
  h1: 'Android App Development Company',
  h1Accent: 'in Bangalore',
  tagline:
    'Top Android app development company in Bangalore — native Android development, Android app developers, Kotlin app development, Java Android development, hire Android developers, Play Store app development, enterprise Android app development & Android application development. Fixed price.',
  desc:
    'NNC Digital is a specialist Android app development company in Bangalore building native Android applications in Kotlin and Java for startups, SMEs and enterprise clients. From consumer Android apps and on-demand platforms to enterprise mobility solutions and Play Store-ready products — every Android app is built by our in-house Bangalore Android developers with full source code ownership, zero outsourcing and fixed-price delivery.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'Android app development in Bangalore',
  h2Features: 'Android App Development Services in Bangalore',
  features: [
    {
      h3: 'Native Android App Development Bangalore',
      desc: 'Native Android development in Bangalore using Kotlin and Java — leveraging the full Android SDK, hardware APIs, background services and Material Design 3 for fast, polished and reliable Android applications.',
    },
    {
      h3: 'Kotlin App Development Bangalore',
      desc: "Kotlin-first Android development in Bangalore — Google's recommended language for Android. Null-safe, concise and fully interoperable with Java. NNC's Bangalore Android team uses modern Kotlin with Jetpack Compose, Coroutines and Flow.",
    },
    {
      h3: 'Java Android Development Bangalore',
      desc: 'Java Android development for Bangalore businesses requiring Java-based codebases — legacy app maintenance, Java-to-Kotlin migration, new Java Android projects and hybrid Java/Kotlin codebases.',
    },
    {
      h3: 'Android Application Development Bangalore',
      desc: 'End-to-end Android application development in Bangalore — UI/UX design, API integration, local database (Room/SQLite), push notifications, in-app purchases, analytics and Play Store submission. Complete product, not just development.',
    },
    {
      h3: 'Enterprise Android App Development Bangalore',
      desc: 'Enterprise Android app development for Bangalore corporates — field force apps, enterprise mobility solutions, ERP/CRM-integrated Android apps, offline-capable apps with sync, MDM compatibility and multi-role user management.',
    },
    {
      h3: 'Play Store App Development Bangalore',
      desc: 'Full Play Store app development and submission in Bangalore — app signing, store listing, screenshots, feature graphic, store description, release track management (internal, alpha, beta, production) and post-launch crash monitoring.',
    },
    {
      h3: 'Hire Android Developers Bangalore',
      desc: 'Hire dedicated Android developers in Bangalore from NNC — Kotlin and Java experts available on project or monthly retainer. In-house team, transparent daily reporting and consistent code quality with full IP ownership.',
    },
    {
      h3: 'Android App Maker Bangalore',
      desc: 'Custom Android app creation for Bangalore startups and SMEs — from idea to Play Store. Rapid prototyping, MVP development, user testing and iterative builds. Affordable fixed-price packages for early-stage Bangalore businesses.',
    },
    {
      h3: 'Android App Development Bangalore — Integrations',
      desc: 'Android app integrations for Bangalore businesses — payment gateways (Razorpay, PayU, Stripe), maps (Google Maps API), Firebase (push notifications, analytics, crashlytics), social login, SMS OTP and third-party REST APIs.',
    },
  ],
  h2Why: 'Why Choose NNC as Your Android App Development Company in Bangalore?',
  why: [
    {
      n: '01',
      h3: 'Bangalore headquarters — review app designs in person',
      body: 'NNC is headquartered in Bangalore at Prestige Shantiniketan, Whitefield. Visit us to review your Android app wireframes, test UI prototypes on real devices and meet the Kotlin developers building your application.',
    },
    {
      n: '02',
      h3: 'Native Kotlin — not hybrid or cross-platform',
      body: 'NNC builds true native Android apps in Kotlin — not React Native or Flutter wrapped as Android. Native apps deliver better performance, full hardware access and a more polished user experience for Android-first Bangalore businesses.',
    },
    {
      n: '03',
      h3: 'In-house Android team — zero outsourcing',
      body: 'Every Android developer, UI designer and QA engineer is a full-time NNC employee in Bangalore. Consistent team from brief to Play Store launch — no freelancers, no offshore outsourcing.',
    },
    {
      n: '04',
      h3: 'Full stack — design, Android, backend, APIs',
      body: 'NNC handles the complete Android app stack — UI/UX design, Android front-end, Node JS backend, REST APIs, database and DevOps. One team, one point of contact, no integration gaps between vendor teams.',
    },
    {
      n: '05',
      h3: 'Fixed price — fully scoped before development starts',
      body: 'Every Android project is scoped in detail and priced upfront. No hourly billing, no scope creep surprises. You know the exact cost, timeline and feature list before development begins.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has built Android apps for ecommerce, logistics, healthcare, fintech, real estate and enterprise clients across Bangalore. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['Kotlin', 'Java', 'Jetpack Compose', 'Android SDK', 'Firebase', 'Retrofit', 'Room DB', 'Google Play Console'],
  h2Tech: 'Android Development Technology Stack',
  h2Faq: 'Android App Development Company Bangalore — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best Android app development company in Bangalore?',
      a: "NNC Digital is among Bangalore's top Android app development companies — 565+ projects, 4.9★ Google rating, headquartered in Whitefield. Native Android in Kotlin and Java — all built in-house.",
    },
    {
      q: 'Do you build native Android apps in Kotlin in Bangalore?',
      a: "Yes. NNC builds native Android apps in Kotlin — Google's recommended language. Jetpack Compose, Coroutines and full Android SDK integration for Bangalore businesses.",
    },
    {
      q: 'Do you build enterprise Android apps in Bangalore?',
      a: 'Yes. NNC builds enterprise Android applications for Bangalore corporates — field force apps, ERP-integrated apps, offline-capable apps with sync and MDM compatibility.',
    },
    {
      q: 'Do you handle Play Store submission in Bangalore?',
      a: 'Yes. NNC handles full Play Store submission — app signing, store listing, screenshots, release track management and post-launch monitoring.',
    },
    {
      q: 'How much does Android app development cost in Bangalore?',
      a: 'Android apps start from ₹50,000. Enterprise Android applications start from ₹1,50,000. All fixed-price — no hourly billing.',
    },
    {
      q: 'Do you have an Android app development office in Bangalore?',
      a: 'Yes. NNC is headquartered at Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit us to review wireframes and meet the Android development team.',
    },
  ],
}

export default function AndroidAppDevelopmentBangalorePage() {
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
