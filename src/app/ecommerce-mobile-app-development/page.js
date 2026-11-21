import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'E-commerce Mobile App Development Company in Bangalore | NNC Digital',
  description: 'Custom e-commerce mobile app development in Bangalore. iOS, Android, React Native and Flutter shopping apps with Razorpay, cart, orders and push notifications.',
  alternates: { canonical: `${SITE.url}/ecommerce-mobile-app-development` },
  keywords: 'ecommerce mobile app development bangalore, shopping app development, online store mobile app, react native ecommerce app, flutter ecommerce app',
  openGraph: {
    title: 'E-commerce Mobile App Development Company in Bangalore | NNC Digital',
    description: 'Native-feel shopping apps with Razorpay, cart, orders and live tracking. Fixed price, PageSpeed optimised, full source code ownership.',
    url: `${SITE.url}/ecommerce-mobile-app-development`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'E-commerce Mobile App Development NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'E-commerce Mobile App Development',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: 'Custom e-commerce mobile app development for iOS and Android with Razorpay, cart, orders and push notifications.',
  url: `${SITE.url}/ecommerce-mobile-app-development`,
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'E-commerce Mobile Apps', item: `${SITE.url}/ecommerce-mobile-app-development` },
  ],
}

const data = {
  badge: 'E-commerce Mobile Apps',
  h1: 'E-commerce Mobile App',
  h1Accent: 'Development for iOS & Android',
  tagline: 'Native-feel shopping apps with product catalogue, variants, Razorpay checkout, live order tracking and push notifications. Fixed price.',
  desc: 'NNC Digital builds e-commerce mobile apps for D2C brands, retailers and marketplaces across India. Each app ships with a full product catalogue, variant management, Razorpay / UPI checkout, order tracking and an admin panel that syncs with your existing website or runs standalone.',
  stat1: '35+',
  stat1Label: 'E-commerce Apps Delivered',
  serviceName: 'e-commerce mobile app development',
  h2Features: 'Everything a Shopping App Needs',
  features: [
    { h3: 'Product Catalogue & Variants', desc: 'Unlimited SKUs with variant support (size, colour, material), smart filters and instant in-app search.' },
    { h3: 'Razorpay, UPI & Wallets', desc: 'All major Indian payment methods built in — UPI, credit/debit cards, net banking, EMI and popular wallets.' },
    { h3: 'Cart, Checkout & Guest Orders', desc: 'Persistent cart, saved address book, guest checkout and one-tap reorder designed for mobile thumbs.' },
    { h3: 'Live Order Tracking & Push', desc: 'Push notifications at every order stage — placed, packed, shipped, out-for-delivery, delivered.' },
    { h3: 'Wishlist & Loyalty', desc: 'Personal wishlist, recently viewed, referral codes and loyalty-points engine to lift repeat purchase.' },
    { h3: 'Website Sync (Optional)', desc: 'Two-way inventory, orders and customer sync with your existing website or Shopify / WooCommerce store.' },
    { h3: 'Admin Dashboard', desc: 'Web-based admin to manage products, inventory, orders, customers and promotions from any browser.' },
    { h3: 'Coupons & Flash Sales', desc: 'Percentage, fixed and BOGO discount engines with time-boxed sale banners and push triggers.' },
    { h3: 'Analytics & Funnels', desc: 'Built-in cart-abandonment, funnel and customer-cohort analytics so you can see what converts.' },
  ],
  h2Why: 'Why Choose NNC for E-commerce Mobile Apps?',
  why: [
    { n: '01', h3: 'Cross-platform — one codebase, both stores', body: 'React Native or Flutter deliver a single codebase that ships to Google Play and the App Store. Half the build cost, same native feel.' },
    { n: '02', h3: 'Indian payment methods built in', body: 'Razorpay, UPI, EMI and cash-on-delivery configured and tested before launch — not bolted on at the end.' },
    { n: '03', h3: 'Fixed price — no scope creep', body: 'Every e-commerce app is quoted as a fixed scope. No surprise invoices for payment integration or notification setup.' },
    { n: '04', h3: '35+ in-house mobile specialists', body: 'React Native, Flutter, iOS and Android engineers — all NNC employees. Visit our Bengaluru office and meet them.' },
    { n: '05', h3: 'Weekly TestFlight / APK builds', body: 'Every sprint ships a build to your device. Track progress in real hardware, not screenshots and status updates.' },
    { n: '06', h3: '35+ shopping apps delivered', body: 'D2C, fashion, grocery, electronics and B2B wholesale apps — NNC has shipped across every major e-commerce vertical.' },
  ],
  techStack: ['React Native', 'Flutter', 'Node JS', 'MongoDB', 'Razorpay', 'Firebase', 'OneSignal', 'AWS S3'],
  h2Tech: 'E-commerce App Technology Stack',
  h2Faq: 'E-commerce Mobile App Frequently Asked Questions',
  faqs: [
    { q: 'How much does an e-commerce mobile app cost?', a: 'E-commerce mobile apps at NNC start from ₹1.2L for a cross-platform React Native / Flutter build. Final pricing depends on catalogue size, integrations and custom features. All pricing is fixed before work starts.' },
    { q: 'How long does it take to build an e-commerce app?', a: 'A standard shopping app typically takes 8–12 weeks from design to Play Store / App Store launch. Marketplace apps with multi-vendor support may take 14–18 weeks. Timelines are agreed upfront.' },
    { q: 'Do I need separate iOS and Android apps?', a: 'No. NNC builds cross-platform using React Native or Flutter — a single codebase ships to both stores. Native iOS or Android is available if you have platform-specific needs (ARKit, Wear OS, etc.).' },
    { q: 'Can the app sync with my existing website?', a: 'Yes. NNC builds two-way sync for inventory, orders and customers with your existing WooCommerce, Shopify or custom website so both channels stay aligned in real time.' },
    { q: 'Which payment gateway do you integrate?', a: 'Razorpay is the default for India — it covers UPI, cards, net banking and EMI in one integration. Stripe for international stores. Both are configured by NNC as standard.' },
    { q: 'Do I own the source code?', a: 'Yes — completely. On delivery you receive every source file, Play Store / App Store credentials, admin access and hosting logins. No SaaS lock-in.' },
  ],
}

export default function EcommerceMobileAppPage() {
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
