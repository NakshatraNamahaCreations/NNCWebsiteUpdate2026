import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Ecommerce Website Development Company in Mysuru | Nakshatra Namaha Creations',
  description: 'Top ecommerce website development company in Mysuru. Custom online stores on React JS & Next JS — Razorpay, UPI, product catalogues, order management. PageSpeed 90+ guaranteed. Walk-in Mysuru office. Fixed price. Call +91 99005 66466.',
  alternates: { canonical: `${SITE.url}/ecommerce-website-development-mysuru` },
  keywords: [
    'ecommerce website development company mysuru',
    'ecommerce development company in mysuru',
    'ecommerce website design mysuru',
    'online store development mysuru',
    'shopify development company mysuru',
    'woocommerce development mysuru',
    'magento development company mysuru',
    'ecommerce app development mysuru',
    'b2b ecommerce development mysuru',
    'd2c website development mysuru',
    'custom ecommerce platform mysuru',
    'marketplace development company mysuru',
  ].join(', '),
  openGraph: {
    title: 'Ecommerce Website Development Company in Mysuru | Nakshatra Namaha Creations',
    description: 'Custom e-commerce stores for Mysuru businesses. Razorpay, UPI, order management, PageSpeed 90+. Walk-in office. Fixed price.',
    url: `${SITE.url}/ecommerce-website-development-mysuru`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Nakshatra Namaha Creations',
    images: [{ url: 'https://s3.eu-north-1.amazonaws.com/admin.nakshatranamahacreations.in/NNC+NEW+LOGO+2020+low+res.png', width: 1200, height: 630, alt: 'Ecommerce Website Development Mysuru Nakshatra Namaha Creations' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Ecommerce Website Development Company in Mysuru | Nakshatra Namaha Creations',
    description: 'Custom e-commerce stores for Mysuru businesses. Razorpay, PageSpeed 90+. Walk-in office.',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'E-commerce Website Development in Mysuru',
  description: 'Custom e-commerce website development for businesses in Mysuru. Online stores with Razorpay, UPI, product catalogues, inventory management and PageSpeed 90+. Walk-in office in JP Nagar, Mysuru.',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Suswani Towers, JP Nagar 2nd Stage',
      addressLocality: 'Mysuru',
      addressRegion: 'Karnataka',
      postalCode: '570008',
      addressCountry: 'IN',
    },
  },
  areaServed: ['Mysuru', 'Mysore', 'Karnataka', 'India'],
  serviceType: 'E-commerce Website Development',
  url: `${SITE.url}/ecommerce-website-development-mysuru`,
  offers: [
    { '@type': 'Offer', name: 'E-commerce Website', price: '45000', priceCurrency: 'INR', description: 'Full-featured e-commerce store with product catalogue, Razorpay and order management.' },
    { '@type': 'Offer', name: 'D2C E-commerce Platform', price: '75000', priceCurrency: 'INR', description: 'D2C brand store with subscription, loyalty and advanced analytics.' },
    { '@type': 'Offer', name: 'Multi-vendor Marketplace', description: 'Custom-scoped marketplace with seller dashboards, commission engine and payout management.' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'E-commerce Development Services Mysuru',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ecommerce Website Development Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Online Store Development Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'D2C Website Development Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'B2B Ecommerce Development Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Marketplace Development Mysuru' } },
    ],
  },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'E-commerce Development', item: `${SITE.url}/ecommerce-website-development-company` },
    { '@type': 'ListItem', position: 4, name: 'Mysuru', item: `${SITE.url}/ecommerce-website-development-mysuru` },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does an e-commerce website cost in Mysuru?', acceptedAnswer: { '@type': 'Answer', text: 'E-commerce websites start from ₹45,000. Price depends on products, variants, integrations and custom features. All pricing fixed before work begins.' } },
    { '@type': 'Question', name: 'Does Nakshatra Namaha Creations have an office in Mysuru?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Walk-in office at Suswani Towers, JP Nagar 2nd Stage, Mysuru – 570 008. Open Mon–Sat, 9am–7pm.' } },
    { '@type': 'Question', name: 'How long does it take to build an online store?', acceptedAnswer: { '@type': 'Answer', text: 'A standard e-commerce store takes 5–8 weeks. Multi-vendor marketplaces take 10–14 weeks. Timelines agreed in writing.' } },
    { '@type': 'Question', name: 'Which payment gateway do you integrate?', acceptedAnswer: { '@type': 'Answer', text: 'Razorpay (UPI, cards, net banking, EMI, wallets) is standard. Stripe for international. Both configured and tested before launch.' } },
  ],
}

const data = {
  badge: 'E-commerce Development · Mysuru',
  h1: 'Ecommerce Website Development',
  h1Accent: 'Company in Mysuru',
  tagline: 'Custom online stores on React JS & Next JS — Razorpay, UPI, product catalogues, inventory management and PageSpeed 90+. Walk-in office in JP Nagar, Mysuru. Fixed price.',
  desc: 'Nakshatra Namaha Creations builds custom e-commerce websites for D2C brands, retailers and B2B sellers in Mysuru. Each store is built from scratch — no WooCommerce, no Shopify themes — with complete source code ownership, fast load times and checkout optimised for Indian payment methods. Visit our Mysuru office to discuss your project.',
  stat1: '60+',
  stat1Label: 'E-commerce Stores Delivered',
  serviceName: 'e-commerce website development in Mysuru',
  h2Features: 'Everything Your Online Store Needs',
  features: [
    { h3: 'Custom Product Catalogue & Variants', desc: 'Unlimited SKUs, variant combinations (size, colour, material), product filters and intelligent search — built to scale with your business.' },
    { h3: 'Razorpay, Stripe & UPI Integration', desc: 'All major Indian and international payment methods — Razorpay, UPI, credit/debit cards, net banking, EMI and wallets configured before launch.' },
    { h3: 'Order Management & Tracking', desc: 'Admin panel to process orders, update status, generate invoices and give customers live order tracking with notifications.' },
    { h3: 'Inventory & Stock Management', desc: 'Real-time inventory sync, low-stock alerts and automatic out-of-stock handling across all product pages.' },
    { h3: 'Mobile Commerce Optimised', desc: 'Checkout flows designed for mobile — simplified form fields, sticky cart, one-tap payment and 60fps scrolling on every device.' },
    { h3: 'Coupon Codes & Discount Engine', desc: 'Percentage and fixed discounts, BOGO offers, minimum order thresholds, time-limited promo codes and referral coupons.' },
    { h3: 'SEO & Product Schema Markup', desc: 'Every product page includes Product, Offer and Review schemas, SEO titles, canonical URLs and optimised images for Google Shopping.' },
    { h3: 'Multi-vendor Marketplace (Optional)', desc: 'Marketplace architecture for platforms with multiple sellers — individual dashboards, commission management and automated payouts.' },
    { h3: 'Customer Account Portal', desc: 'Order history, wishlists, address book, reorder buttons and loyalty points — all in a clean, branded customer dashboard.' },
  ],
  h2Why: 'Why Mysuru Businesses Choose Nakshatra Namaha Creations for E-commerce',
  why: [
    { n: '01', h3: 'Walk-in office in JP Nagar, Mysuru', body: "Unlike remote agencies, Nakshatra Namaha Creations has a physical office at Suswani Towers, JP Nagar 2nd Stage. Walk in Mon–Sat, 9am–7pm and meet your project team." },
    { n: '02', h3: 'Custom code — not a Shopify or WooCommerce clone', body: "We build from scratch on Next JS. Faster than any plugin-based platform. No monthly SaaS fees. No feature limitations. Source code 100% yours." },
    { n: '03', h3: 'Indian payment methods built in from day one', body: "Razorpay, UPI, NEFT/IMPS, EMI and cash-on-delivery — configured and tested before launch, not bolted on as an afterthought." },
    { n: '04', h3: 'PageSpeed 90+ written into the contract', body: "Slow e-commerce sites lose customers. Our contractual PageSpeed 90+ guarantee means every product page loads fast on mobile and desktop." },
    { n: '05', h3: 'Fixed price — no surprise invoices', body: "E-commerce projects are quoted as a fixed scope. No surprise charges for product import, variant setup or payment gateway configuration." },
    { n: '06', h3: '35+ in-house specialists — zero outsourcing', body: "Every developer, UI designer and QA engineer is a permanent employee. No freelancers. Visit any of our 4 offices and meet them." },
  ],
  techStack: ['React JS', 'Next JS', 'Node JS', 'MongoDB', 'Razorpay', 'Stripe', 'AWS S3', 'Redis'],
  h2Tech: 'E-commerce Technology Stack',
  h2Faq: 'E-commerce Development in Mysuru — Questions Answered',
  faqs: [
    { q: 'How much does an e-commerce website cost in Mysuru?', a: 'E-commerce websites start from ₹45,000. The price depends on number of products, variants, integrations and custom features. All pricing is fixed before work starts — no hourly billing, no surprise invoices for payment gateway setup or product import.' },
    { q: 'Does Nakshatra Namaha Creations have an office in Mysuru?', a: 'Yes. Our Mysuru branch is at Suswani Towers, JP Nagar 2nd Stage, Mysuru – 570 008. Walk in Monday to Saturday, 9am–7pm. Meet your project team in person — no appointment needed.' },
    { q: 'How long does it take to build an online store?', a: 'A standard e-commerce store takes 5–8 weeks from design to launch. Multi-vendor marketplaces or platforms with complex inventory management take 10–14 weeks. Timelines agreed in writing before development begins.' },
    { q: 'Can you migrate my Shopify or WooCommerce store?', a: 'Yes. We have migrated multiple stores from Shopify, WooCommerce and Magento. We handle product data migration, URL structure preservation for SEO and full feature parity before switching over.' },
    { q: 'Which payment gateway do you recommend?', a: 'For India-first stores, we recommend Razorpay — it supports UPI, credit/debit cards, net banking, EMI and wallets in one integration. International stores can use Stripe. Both are configured as standard.' },
    { q: 'Do I own the source code of my e-commerce store?', a: 'Yes — completely and permanently. On delivery you receive every source file, database schema, admin credentials and hosting logins. No Shopify-style monthly fees. No SaaS dependency. Your store is 100% yours.' },
    { q: 'Can the store handle large product catalogues?', a: "Yes. Our e-commerce architecture handles thousands of products with variants, filters and search without performance issues. We've built stores with 10,000+ SKUs that still score 90+ on PageSpeed." },
    { q: 'Do you build on WordPress or WooCommerce?', a: 'No. We build exclusively on React JS and Next JS. These modern frameworks deliver faster load times, better SEO, stronger security and far greater flexibility than WordPress or WooCommerce. Every store is custom-coded.' },
  ],
}

export default function EcommerceMysuruPage() {
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
