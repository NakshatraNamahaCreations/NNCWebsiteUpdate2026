import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Ecommerce Website Development Company in Bangalore | NNC Digital',
  description:
    'Top ecommerce website development company in Bangalore. Ecommerce development company, ecommerce website design, online store development, Shopify development, WooCommerce development, Magento development, B2B ecommerce, D2C website development & marketplace development. Fixed price.',
  alternates: {
    canonical: `${SITE.url}/ecommerce-website-development-company-in-bangalore`,
  },
  keywords:
    'ecommerce website development company bangalore, ecommerce development company in bangalore, ecommerce website design bangalore, online store development bangalore, shopify development company bangalore, woocommerce development bangalore, magento development company bangalore, ecommerce app development bangalore, b2b ecommerce development bangalore, d2c website development bangalore, custom ecommerce platform bangalore, marketplace development company bangalore',
  openGraph: {
    title: 'Ecommerce Website Development Company in Bangalore | NNC Digital',
    description:
      'Ecommerce website development company in Bangalore — Shopify, WooCommerce, Magento, custom ecommerce platforms, D2C, B2B & marketplace development. Fixed price.',
    url: `${SITE.url}/ecommerce-website-development-company-in-bangalore`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Ecommerce Website Development Company in Bangalore – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Ecommerce Website Development Company in Bangalore | NNC Digital',
    description:
      'Ecommerce website development company in Bangalore — Shopify, WooCommerce, Magento, D2C, B2B & marketplace development. Fixed price.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ecommerce Website Development Company in Bangalore',
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
    'Ecommerce Website Development',
    'Shopify Development',
    'WooCommerce Development',
    'Magento Development',
    'Custom Ecommerce Platform',
    'D2C Website Development',
    'B2B Ecommerce Development',
    'Marketplace Development',
  ],
  description:
    'Full-service ecommerce website development company in Bangalore — Shopify, WooCommerce, Magento, custom ecommerce platforms, D2C website development, B2B ecommerce and marketplace development for Bangalore businesses.',
  url: `${SITE.url}/ecommerce-website-development-company-in-bangalore`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Shopify / WooCommerce Store Bangalore',
      price: '35000',
      priceCurrency: 'INR',
      description: 'Ready-to-sell Shopify or WooCommerce store — product catalogue, payment gateway, shipping integration and admin panel.',
    },
    {
      '@type': 'Offer',
      name: 'Custom Ecommerce Platform Bangalore',
      price: '100000',
      priceCurrency: 'INR',
      description: 'Fully custom ecommerce platform — bespoke workflows, multi-vendor marketplace, B2B or D2C with custom pricing, inventory and order management.',
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
      name: 'Website Development Company in Bangalore',
      item: `${SITE.url}/website-development-company-in-bangalore`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Ecommerce Website Development Company in Bangalore',
      item: `${SITE.url}/ecommerce-website-development-company-in-bangalore`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best ecommerce website development company in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Bangalore's top-rated ecommerce development companies — 565+ projects delivered, 4.9★ Google rating, headquartered in Whitefield, Bangalore. We build Shopify stores, WooCommerce stores, Magento websites, custom ecommerce platforms, D2C stores, B2B ecommerce portals and multi-vendor marketplaces.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build Shopify stores for Bangalore businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC is a Shopify development company in Bangalore — custom Shopify theme development, Shopify app integration, payment gateway setup (Razorpay, PayU, Stripe), shipping integrations and Shopify Plus development for high-volume Bangalore ecommerce brands.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer WooCommerce development in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides WooCommerce development for Bangalore businesses — custom WooCommerce themes, plugin development, payment gateway integration, multi-currency setup, subscription products and WooCommerce performance optimisation for large product catalogues.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build D2C and B2B ecommerce websites in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds D2C website development for Bangalore consumer brands — direct-to-consumer stores with brand storytelling, subscription models and loyalty programmes. Also B2B ecommerce development for Bangalore manufacturers and distributors — bulk ordering, account-based pricing, dealer portals and quotation workflows.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build marketplace and multi-vendor platforms in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds marketplace development for Bangalore businesses — multi-vendor ecommerce platforms with seller onboarding, product listing management, commission management, order routing and separate seller and buyer dashboards. Built on custom React JS/Node JS or extended WooCommerce/Magento.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does ecommerce website development cost in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Shopify or WooCommerce store in Bangalore starts from ₹35,000 — covering product catalogue, payment gateway, shipping and admin panel. Custom ecommerce platforms with B2B, D2C or marketplace features start from ₹1,00,000. All fixed-price — no hourly billing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have an ecommerce development office in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital is headquartered in Bangalore at Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit us to review your ecommerce store wireframes, go through platform recommendations and meet the development team building your online store.',
      },
    },
  ],
}

const data = {
  badge: 'Ecommerce Development · Bangalore',
  h1: 'Ecommerce Website Development Company',
  h1Accent: 'in Bangalore',
  tagline:
    'Top ecommerce website development company in Bangalore — Shopify development, WooCommerce development, Magento development, custom ecommerce platform, D2C website development, B2B ecommerce development, marketplace development & online store development. Fixed price.',
  desc:
    'NNC Digital is a full-service ecommerce website development company in Bangalore building Shopify stores, WooCommerce stores, Magento websites, custom ecommerce platforms, D2C websites, B2B ecommerce portals and multi-vendor marketplaces for Bangalore businesses. Every online store is built by our in-house ecommerce development team — bespoke design, payment gateway integration, inventory management, shipping setup and full source code ownership. Fixed-price projects with transparent timelines.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'ecommerce website development in Bangalore',
  h2Features: 'Ecommerce Development Services in Bangalore',
  features: [
    {
      h3: 'Shopify Development Company Bangalore',
      desc: 'Custom Shopify development for Bangalore businesses — Shopify theme development, app integrations, Razorpay/PayU/Stripe payment setup, shipping carrier integrations and Shopify Plus development for high-volume ecommerce brands.',
    },
    {
      h3: 'WooCommerce Development Bangalore',
      desc: 'WooCommerce development for Bangalore online stores — custom themes, plugin development, multi-currency, subscription products, bulk order management and performance optimisation for large product catalogues.',
    },
    {
      h3: 'Magento Development Company Bangalore',
      desc: 'Magento development for enterprise Bangalore ecommerce brands — Magento 2 store setup, custom module development, multi-store configuration, advanced catalogue management and Magento performance tuning.',
    },
    {
      h3: 'Custom Ecommerce Platform Bangalore',
      desc: 'Fully custom ecommerce platform development in Bangalore — built on React JS and Node JS with bespoke workflows, custom pricing engines, inventory management, order processing and admin dashboards designed around your exact business model.',
    },
    {
      h3: 'D2C Website Development Bangalore',
      desc: 'D2C (direct-to-consumer) website development for Bangalore brands — brand-led storefront design, subscription commerce, loyalty programmes, referral systems and direct checkout optimised for conversion.',
    },
    {
      h3: 'B2B Ecommerce Development Bangalore',
      desc: 'B2B ecommerce development for Bangalore manufacturers and distributors — dealer and distributor portals, account-based pricing, bulk order workflows, quotation management, credit terms and GST-compliant invoicing.',
    },
    {
      h3: 'Marketplace Development Company Bangalore',
      desc: 'Multi-vendor marketplace development in Bangalore — seller onboarding, product listing management, commission management, order routing, dispute management and separate seller and buyer dashboards.',
    },
    {
      h3: 'Ecommerce App Development Bangalore',
      desc: 'Mobile ecommerce app development for Bangalore online stores — React Native shopping apps for Android and iOS with product browsing, cart, checkout, order tracking, push notifications and loyalty programme integration.',
    },
    {
      h3: 'Ecommerce Website Design Bangalore',
      desc: 'Conversion-focused ecommerce website design for Bangalore stores — UX research, wireframing, UI design in Figma, product page optimisation, checkout flow design and mobile-first responsive layouts that reduce cart abandonment.',
    },
  ],
  h2Why: 'Why Choose NNC as Your Ecommerce Development Company in Bangalore?',
  why: [
    {
      n: '01',
      h3: 'Bangalore headquarters — review store designs in person',
      body: 'NNC is headquartered in Bangalore at Prestige Shantiniketan, Whitefield. Visit us to review your online store wireframes, approve designs and meet the ecommerce development team building your store.',
    },
    {
      n: '02',
      h3: 'All platforms — Shopify, WooCommerce, Magento, custom',
      body: 'NNC builds on every major ecommerce platform — Shopify, WooCommerce, Magento and fully custom React JS/Node JS platforms. Platform recommendation based on your catalogue size, budget and growth plans — not what we prefer to build.',
    },
    {
      n: '03',
      h3: 'In-house team — zero outsourcing',
      body: 'Every ecommerce designer, developer and QA engineer is a full-time NNC employee in Bangalore. Consistent team from brief to launch — no freelancers, no offshore outsourcing.',
    },
    {
      n: '04',
      h3: 'Full stack — design, development, integrations',
      body: 'NNC handles every layer of ecommerce development — UX design, front-end, back-end, payment gateway integration, shipping APIs, inventory systems and analytics setup. No need to manage multiple vendors.',
    },
    {
      n: '05',
      h3: 'Fixed price — fully scoped before development starts',
      body: 'Every ecommerce project is scoped in detail and priced upfront. No hourly billing, no change order surprises. You know the exact cost, deliverables and timeline before work begins.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has built ecommerce stores for fashion, FMCG, electronics, furniture, healthcare and B2B businesses across Bangalore. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['Shopify', 'WooCommerce', 'Magento', 'React JS', 'Node JS', 'Razorpay', 'Stripe', 'MongoDB'],
  h2Tech: 'Ecommerce Technology Stack',
  h2Faq: 'Ecommerce Development Company Bangalore — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best ecommerce development company in Bangalore?',
      a: "NNC Digital is among Bangalore's top ecommerce development companies — 565+ projects, 4.9★ Google rating, headquartered in Whitefield. Shopify, WooCommerce, Magento, custom platforms, D2C and B2B — all built in-house.",
    },
    {
      q: 'Do you build Shopify stores in Bangalore?',
      a: 'Yes. NNC is a Shopify development company in Bangalore — custom themes, app integrations, Razorpay/Stripe payment setup and Shopify Plus for high-volume brands.',
    },
    {
      q: 'Do you build D2C and B2B ecommerce websites in Bangalore?',
      a: 'Yes. NNC builds D2C stores for consumer brands and B2B ecommerce portals for manufacturers and distributors in Bangalore — account-based pricing, bulk ordering and dealer portals.',
    },
    {
      q: 'Do you build multi-vendor marketplaces in Bangalore?',
      a: 'Yes. NNC builds marketplace development in Bangalore — seller onboarding, commission management, order routing and separate seller/buyer dashboards.',
    },
    {
      q: 'How much does ecommerce website development cost in Bangalore?',
      a: 'Shopify/WooCommerce stores start from ₹35,000. Custom ecommerce platforms start from ₹1,00,000. All fixed-price — no hourly billing.',
    },
    {
      q: 'Do you have an ecommerce development office in Bangalore?',
      a: 'Yes. NNC is headquartered at Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit us to review store wireframes and meet the development team.',
    },
  ],
}

export default function EcommerceWebsiteDevelopmentBangalorePage() {
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
