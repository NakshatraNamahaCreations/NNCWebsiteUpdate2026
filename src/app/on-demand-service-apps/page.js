import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'On-demand Service App Development Company in Bangalore | NNC Digital',
  description: 'Custom on-demand service app development in Bangalore. Uber-like, Urban Company-like, delivery and home-service apps with real-time tracking, payments and driver / partner management.',
  alternates: { canonical: `${SITE.url}/on-demand-service-apps` },
  keywords: 'on demand app development bangalore, uber clone app, urban company clone, home service app development, delivery app development, service booking app',
  openGraph: {
    title: 'On-demand Service App Development Company in Bangalore | NNC Digital',
    description: 'Customer, service-partner and admin apps with real-time tracking, payments and dispatch. Fixed price, full source code ownership, PageSpeed optimised.',
    url: `${SITE.url}/on-demand-service-apps`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'On-demand Service App Development NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'On-demand Service App Development',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: 'Custom on-demand service app development for home services, delivery, ride-hailing and service marketplaces.',
  url: `${SITE.url}/on-demand-service-apps`,
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'On-demand Service Apps', item: `${SITE.url}/on-demand-service-apps` },
  ],
}

const data = {
  badge: 'On-demand Service Apps',
  h1: 'On-demand Service',
  h1Accent: 'App Development',
  tagline: 'Customer, service-partner and admin apps for home services, deliveries, ride-hailing and service marketplaces — real-time tracking, payments and dispatch built in.',
  desc: 'NNC Digital builds on-demand service apps for founders launching the next Urban Company, UrbanClap or Dunzo-style platform and for established service brands moving from phone bookings to a mobile-first operation. Every build ships three apps — customer, service partner and admin — plus the real-time dispatch logic, GPS tracking and payment flows on-demand platforms live or die on.',
  stat1: '45+',
  stat1Label: 'On-demand Platforms Shipped',
  serviceName: 'on-demand service app development',
  h2Features: 'Everything an On-demand Platform Needs',
  features: [
    { h3: 'Customer App (iOS & Android)', desc: 'Service discovery, booking, scheduling, live tracking, payment and ratings — the complete customer journey in one native-feel app.' },
    { h3: 'Service Partner App', desc: 'Dedicated driver / technician / provider app with job alerts, accept / reject, navigation, in-app earnings and payout history.' },
    { h3: 'Admin Dashboard', desc: 'Web-based control panel to manage services, pricing zones, partners, dispute resolution and real-time operations.' },
    { h3: 'Real-time GPS Tracking', desc: 'Live location of service partner on customer app with ETA — the baseline expectation of any on-demand product today.' },
    { h3: 'Dispatch & Matching Engine', desc: 'Automatic job matching based on proximity, availability, rating and specialisation — the core logic that makes or breaks the platform.' },
    { h3: 'Razorpay, UPI & Wallet', desc: 'In-app payment via UPI, cards, net banking and digital wallets — with partner payouts and commission auto-deduction.' },
    { h3: 'Scheduling & Slot Booking', desc: 'Same-day and advance-booking flows with slot management, cancellation and rescheduling rules configurable by admin.' },
    { h3: 'Ratings, Reviews & Reports', desc: 'Two-way ratings, review moderation, customer feedback flows and partner-performance dashboards.' },
    { h3: 'Push Notifications & SMS', desc: 'Booking, dispatch, arrival, completion and payment notifications over push and SMS — standard across all three apps.' },
  ],
  h2Why: 'Why Choose NNC for On-demand Apps?',
  why: [
    { n: '01', h3: 'Three apps + dispatch — one studio', body: 'Customer app, partner app, admin panel and the real-time dispatch engine all built by NNC in-house. No separate vendors coordinating around a shared database.' },
    { n: '02', h3: 'Cross-platform — launch to both stores faster', body: 'React Native or Flutter delivers iOS and Android customer and partner apps from a single codebase. Half the build cost, same native feel.' },
    { n: '03', h3: 'Indian payments + payouts native', body: 'Razorpay, UPI, cash-on-service and partner payout logic (commission split, GST invoicing) configured and tested before launch — not retrofitted.' },
    { n: '04', h3: 'Fixed price — no scope creep', body: 'Every on-demand build is quoted as a fixed scope. No surprise invoices for dispatch rules, partner onboarding flows or zone-based pricing.' },
    { n: '05', h3: 'Weekly TestFlight / APK builds', body: 'Every sprint ships a build to your device so you can test flow on real hardware — not just screenshots and status updates.' },
    { n: '06', h3: '45+ on-demand platforms shipped', body: 'Home services, grocery delivery, laundry, salon-at-home, car wash, inter-city rides and B2B service marketplaces — NNC has shipped across the full on-demand spectrum.' },
  ],
  techStack: ['React Native', 'Flutter', 'Node JS', 'MongoDB', 'PostgreSQL', 'Google Maps API', 'Razorpay', 'Firebase', 'Socket.io', 'AWS'],
  h2Tech: 'On-demand App Technology Stack',
  h2Faq: 'On-demand Service App Frequently Asked Questions',
  faqs: [
    { q: 'How much does an on-demand service app cost?', a: 'Full on-demand platforms (customer app + partner app + admin dashboard + dispatch engine) at NNC start from ₹3L for a single-city MVP. Multi-city, multi-service platforms with advanced dispatch, zones and surge pricing typically run ₹6L–₹15L. All pricing is fixed before work starts.' },
    { q: 'How long does it take to build?', a: 'A single-city MVP typically takes 12–16 weeks from design to Play Store / App Store launch. Multi-city platforms with full dispatch logic, zone-based pricing and admin reporting take 18–28 weeks. Timelines are agreed upfront.' },
    { q: 'Do I need all three apps or just customer + admin?', a: 'If your service partners are internal staff who schedule via rota, you may skip the partner app and use admin assignment. For gig-based partner networks (freelancers, delivery agents, drivers), the partner app is non-negotiable — it is how jobs get accepted and tracked.' },
    { q: 'Can the app handle multi-city / multi-zone operations?', a: 'Yes. NNC\'s on-demand architecture supports multi-city rollouts, zone-based pricing, city-specific services and localised payment handling — a single codebase scales from one city to 100.' },
    { q: 'How is real-time tracking handled?', a: 'Google Maps API + WebSockets for live location streaming. Partner app sends location every few seconds; customer app receives the stream for ETA and live map tracking. Battery and data usage tuned to not kill the partner\'s phone.' },
    { q: 'Do I own the source code?', a: 'Yes — completely. On delivery you receive every source file, Play Store / App Store credentials, admin access and cloud configuration. No SaaS lock-in.' },
  ],
}

export default function OnDemandServiceAppsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
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
