import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Ecommerce Website Development Company in Mumbai | Shopping',
  description:
    'We are the Best ecommerce website development company in Mumbai to build high converting online stores, with NNC delivering user friendly ecommerce solutions.',
  alternates: {
    canonical: `${SITE.url}/ecommerce-website-development-company-in-mumbai`,
  },
  keywords:
    'ecommerce website development company mumbai, ecommerce development company in mumbai, ecommerce website design mumbai, online store development mumbai, shopify development company mumbai, woocommerce development mumbai, magento development company mumbai, ecommerce app development mumbai, b2b ecommerce development mumbai, d2c website development mumbai, custom ecommerce platform mumbai, marketplace development company mumbai',
  openGraph: {
    title: 'Ecommerce Website Development Company in Mumbai | Shopping',
    description:
      'We are the Best ecommerce website development company in Mumbai to build high converting online stores, with NNC delivering user friendly ecommerce solutions.',
    url: `${SITE.url}/ecommerce-website-development-company-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Ecommerce Website Development Company in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Ecommerce Website Development Company in Mumbai | Shopping',
    description:
      'We are the Best ecommerce website development company in Mumbai to build high converting online stores, with NNC delivering user friendly ecommerce solutions.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ecommerce Website Development Company in Mumbai',
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
  ],
  serviceType: [
    'Ecommerce Website Development',
    'Online Store Development',
    'Ecommerce Website Design',
    'Shopify Development',
    'WooCommerce Development',
    'Magento Development',
    'Ecommerce App Development',
    'B2B Ecommerce Development',
    'D2C Website Development',
    'Custom Ecommerce Platform',
    'Marketplace Development',
  ],
  description:
    'Custom ecommerce website design and development for Mumbai businesses — online store development, Shopify, WooCommerce, Magento, D2C, B2B ecommerce, marketplace and ecommerce app development. Razorpay & UPI built in. PageSpeed 90+ guaranteed.',
  url: `${SITE.url}/ecommerce-website-development-company-in-mumbai`,
  offers: {
    '@type': 'Offer',
    priceCurrency: 'INR',
    price: '45000',
    description: 'Ecommerce website development in Mumbai starting from ₹45,000',
  },
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
      name: 'Ecommerce Development',
      item: `${SITE.url}/ecommerce-website-development-company`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Ecommerce Website Development Company in Mumbai',
      item: `${SITE.url}/ecommerce-website-development-company-in-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best ecommerce website development company in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Mumbai's top-rated ecommerce development companies — 60+ online stores delivered, 4.9★ Google rating, branch office in Thane West. We build custom ecommerce websites on React JS and Next JS, not Shopify or WooCommerce templates. PageSpeed 90+ is contractually guaranteed.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer Shopify development in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC offers Shopify development in Mumbai for brands that need a quick launch or prefer Shopify\'s ecosystem. We also build fully custom ecommerce platforms (React JS + Next JS) that eliminate monthly SaaS fees and give you 100% source code ownership. Our Mumbai team will advise the best fit for your budget and goals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you build a WooCommerce or Magento website in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds WooCommerce development and Magento development solutions in Mumbai for businesses that prefer open-source platforms. We handle theme customisation, plugin development, performance optimisation and hosting setup. For high-traffic stores we typically recommend our custom ecommerce platform over Magento for long-term cost efficiency.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of online store development in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Online store development in Mumbai at NNC starts from ₹45,000. Shopify stores start lower; custom ecommerce platforms, B2B portals and marketplace development are priced based on scope. All projects are fixed-price — no hourly billing, no surprise invoices. Visit our Thane West office for a free consultation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build D2C and B2B ecommerce websites in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds D2C website development for direct-to-consumer brands and B2B ecommerce development for wholesale and bulk-order businesses across Mumbai, Thane and Navi Mumbai. Each platform is built with the exact workflows — pricing tiers, MOQ rules, credit terms — your business model requires.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you build a marketplace or multi-vendor ecommerce platform in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC is a marketplace development company with experience building multi-vendor platforms in Mumbai — individual seller dashboards, commission management, automated payouts and buyer review systems. We have built marketplaces for retail, fashion, electronics and services categories.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you develop ecommerce apps for Mumbai businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides ecommerce app development in Mumbai for both iOS and Android using React Native. The app connects to the same backend as your website — shared inventory, orders and customer accounts. App Store and Play Store deployment is handled end-to-end by our in-house team.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have an office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. You can visit us to discuss your ecommerce project, review wireframes and meet the team building your store.',
      },
    },
  ],
}

const data = {
  badge: 'Ecommerce Development · Mumbai',
  h1: 'Ecommerce Website Development',
  h1Accent: 'Company in Mumbai',
  tagline:
    'Custom ecommerce website design & online store development in Mumbai — Shopify, WooCommerce, Magento, D2C, B2B, marketplace & ecommerce app development. Razorpay & UPI built in. PageSpeed 90+. Branch office in Thane West.',
  desc:
    'NNC Digital is a full-service ecommerce development company in Mumbai building custom online stores, Shopify websites, WooCommerce platforms, Magento solutions, D2C brand stores, B2B ecommerce portals and multi-vendor marketplaces. Every project is delivered from our in-house team — zero outsourcing — with complete source code ownership, Razorpay & UPI payment integration, and a contractual PageSpeed 90+ guarantee. Our branch office in Thane West means Mumbai clients can meet the team in person.',
  stat1: '60+',
  stat1Label: 'Ecommerce Stores Delivered',
  serviceName: 'ecommerce website development in Mumbai',
  h2Features: 'Complete Ecommerce Development Services in Mumbai',
  features: [
    {
      h3: 'Custom Ecommerce Website Design Mumbai',
      desc: 'Pixel-perfect ecommerce website design tailored for Mumbai brands — mobile-first layouts, fast-loading product pages, conversion-optimised checkout and brand-consistent UI across every screen size.',
    },
    {
      h3: 'Online Store Development Mumbai',
      desc: 'End-to-end online store development — product catalogue, variant management, inventory sync, order processing, admin dashboard and customer portal — built on React JS and Next JS for maximum speed.',
    },
    {
      h3: 'Shopify Development Company Mumbai',
      desc: 'Shopify store setup, custom theme development, app integration (Shiprocket, Razorpay, WhatsApp) and Shopify Plus migrations for Mumbai businesses wanting a fast, reliable ecommerce launch.',
    },
    {
      h3: 'WooCommerce Development Mumbai',
      desc: 'WooCommerce development on WordPress — custom themes, plugin development, performance tuning and managed hosting. Ideal for content-rich stores and businesses already invested in the WordPress ecosystem.',
    },
    {
      h3: 'Magento Development Company Mumbai',
      desc: 'Magento development for enterprise and large-catalogue stores — custom modules, multi-store setups, B2B features, ERP integration and Magento 2 migration for Mumbai retailers and distributors.',
    },
    {
      h3: 'Ecommerce App Development Mumbai',
      desc: 'React Native ecommerce app development in Mumbai — iOS and Android apps connected to your web store backend. Shared inventory, push notifications, one-tap UPI checkout and full App Store / Play Store deployment.',
    },
    {
      h3: 'B2B Ecommerce Development Mumbai',
      desc: 'B2B ecommerce platforms with trade pricing, MOQ rules, credit-term management, GST invoicing, bulk order workflows and role-based dashboards — built for Mumbai wholesalers, distributors and manufacturers.',
    },
    {
      h3: 'D2C Website Development Mumbai',
      desc: 'D2C ecommerce websites for direct-to-consumer Mumbai brands — subscription models, loyalty programmes, referral systems, influencer discount codes and Razorpay/UPI checkout optimised for repeat buyers.',
    },
    {
      h3: 'Marketplace Development Company Mumbai',
      desc: 'Multi-vendor marketplace development — seller onboarding, individual dashboards, commission management, automated payouts and dispute resolution. Built for Mumbai-based retail, services and wholesale marketplaces.',
    },
  ],
  h2Why: 'Why Choose NNC as Your Ecommerce Development Company in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — meet us in Thane West',
      body: 'Unlike agencies that operate remotely, NNC has a branch office at Lodha Signet, Thane West, Mumbai. You can walk in, review your ecommerce design on screen and meet the developers building your store.',
    },
    {
      n: '02',
      h3: 'All platforms — custom, Shopify, WooCommerce, Magento',
      body: 'Whether you need a fully custom ecommerce platform, a Shopify store, WooCommerce development or a Magento solution, NNC Mumbai has the in-house expertise to deliver on the platform that fits your business best.',
    },
    {
      n: '03',
      h3: 'Razorpay, UPI & Indian payment methods built in',
      body: 'Every ecommerce store NNC builds includes Razorpay, UPI, net banking, EMI and COD — configured and tested before launch. Critical for Mumbai consumers who expect seamless Indian payment options at checkout.',
    },
    {
      n: '04',
      h3: 'PageSpeed 90+ — written into the contract',
      body: "Slow ecommerce sites lose Mumbai shoppers to competitors. NNC's PageSpeed 90+ guarantee is contractual — every product page, category page and checkout step loads fast on both mobile and desktop.",
    },
    {
      n: '05',
      h3: 'Fixed price — no surprise invoices',
      body: 'Every ecommerce project is scoped and priced upfront — custom platform, Shopify, WooCommerce or Magento. No hourly billing. No extra charges for product imports, payment gateway setup or post-launch fixes.',
    },
    {
      n: '06',
      h3: '60+ ecommerce stores — D2C, B2B and marketplace',
      body: 'NNC has delivered 60+ ecommerce stores across retail, fashion, electronics, food and industrial categories — including D2C brands, B2B portals and multi-vendor marketplaces. 4.9★ on Google.',
    },
  ],
  techStack: ['React JS', 'Next JS', 'Node JS', 'MongoDB', 'Shopify', 'WooCommerce', 'Razorpay', 'Shiprocket'],
  h2Tech: 'Ecommerce Technology Stack',
  h2Faq: 'Ecommerce Development Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best ecommerce website development company in Mumbai?',
      a: "NNC Digital is among Mumbai's top-rated ecommerce development companies — 60+ online stores delivered, 4.9★ Google rating, branch office in Thane West. We handle everything from ecommerce website design and online store development to Shopify, WooCommerce, Magento, D2C, B2B and marketplace development.",
    },
    {
      q: 'Do you offer Shopify development and WooCommerce development in Mumbai?',
      a: "Yes. NNC is a Shopify development company in Mumbai and also builds WooCommerce development solutions. For larger catalogues and enterprise needs we also offer Magento development. Our Mumbai team will recommend the right platform based on your products, budget and growth plans.",
    },
    {
      q: 'What does online store development in Mumbai cost?',
      a: 'Online store development in Mumbai at NNC starts from ₹45,000 for a standard ecommerce website. Shopify stores can be delivered faster at a lower entry cost. Custom ecommerce platforms, B2B portals and marketplace development are quoted based on scope. All projects are fixed-price — no surprises.',
    },
    {
      q: 'Can you build a D2C website and B2B ecommerce platform in Mumbai?',
      a: 'Yes. NNC builds D2C website development for direct-to-consumer brands and B2B ecommerce development for wholesale and bulk-order businesses. Both are custom-built with the exact pricing rules, order flows and dashboards your Mumbai business requires.',
    },
    {
      q: 'Do you build ecommerce apps for Mumbai businesses?',
      a: 'Yes. NNC provides ecommerce app development in Mumbai for iOS and Android using React Native. The app shares the same backend as your website — inventory, orders, customer accounts — so you manage everything from one admin panel.',
    },
    {
      q: 'Can you build a marketplace platform in Mumbai?',
      a: 'Yes. As a marketplace development company, NNC has built multi-vendor platforms with seller onboarding, commission management and automated payouts. We have delivered marketplaces for retail, fashion, electronics and services businesses based in Mumbai.',
    },
  ],
}

export default function EcommerceWebsiteDevelopmentMumbaiPage() {
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
