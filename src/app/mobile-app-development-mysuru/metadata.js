import { MYSURU_APP_PAGE } from '@/data/mobileAppMysuruData'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: MYSURU_APP_PAGE.title,
  description: MYSURU_APP_PAGE.description,
  keywords: MYSURU_APP_PAGE.keywords.join(', '),
  authors: [{ name: SITE.name }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE.url}${MYSURU_APP_PAGE.slug}`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: `${SITE.url}${MYSURU_APP_PAGE.slug}`,
    siteName: 'Nakshatra Namaha Creations',
    title: MYSURU_APP_PAGE.title,
    description: MYSURU_APP_PAGE.description,
    images: [
      {
        url: 'https://s3.eu-north-1.amazonaws.com/admin.nakshatranamahacreations.in/NNC+NEW+LOGO+2020+low+res.png',
        width: 1200,
        height: 630,
        alt: 'Nakshatra Namaha Creations Mobile App Development Company Mysuru',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: MYSURU_APP_PAGE.title,
    description: MYSURU_APP_PAGE.description,
  },
}

/* ── JSON-LD Schemas ─────────────────────────────────────────── */

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile App Development in Mysuru',
  description:
    'Custom Android and iOS mobile app development in Mysuru using React Native and Flutter. Build on-demand apps, e-commerce apps, healthcare apps, fintech apps and enterprise platforms. Walk-in office in JP Nagar, Mysuru.',
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
  areaServed: ['Mysuru', 'Mysore', 'Bengaluru', 'Karnataka', 'India'],
  serviceType: 'Mobile App Development',
  offers: [
    {
      '@type': 'Offer',
      name: 'MVP App Development',
      price: '75000',
      priceCurrency: 'INR',
      description: 'React Native app with up to 8 screens, basic backend and Play Store deployment.',
    },
    {
      '@type': 'Offer',
      name: 'Business App Development',
      price: '175000',
      priceCurrency: 'INR',
      description: 'Full-featured React Native or Flutter app with admin panel, payment gateway and analytics.',
    },
    {
      '@type': 'Offer',
      name: 'Enterprise App Platform',
      description: 'Custom-scoped enterprise mobile platform with microservices, multi-role access and CRM integration.',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'App Development Services Mysuru',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'React Native App Development Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Flutter App Development Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Android App Development Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'iOS App Development Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'On-demand App Development Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-commerce App Development Mysuru' } },
    ],
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/#services` },
    { '@type': 'ListItem', position: 3, name: 'Mobile App Development', item: `${SITE.url}/mobile-app-development-company-in-bangalore` },
    { '@type': 'ListItem', position: 4, name: 'Mysuru', item: `${SITE.url}${MYSURU_APP_PAGE.slug}` },
  ],
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does mobile app development cost in Mysuru?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A basic MVP app starts from ₹75,000. A full-featured business app is typically ₹1,50,000–₹2,50,000. Enterprise platforms are scoped individually. All pricing is fixed before work begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does NNC have a physical office in Mysuru?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC has a walk-in branch office at Suswani Towers, JP Nagar 2nd Stage, Mysuru – 570 008. Open Mon–Sat, 9am–7pm.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a mobile app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An MVP takes 6–8 weeks. A full business app takes 10–14 weeks. Enterprise platforms take 14–24 weeks. Timeline is agreed in writing before development begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'React Native or Flutter — which should I choose?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both deliver Android and iOS apps from one codebase. React Native has a larger ecosystem. Flutter gives more precise UI control. NNC recommends the right framework after reviewing your requirements.',
      },
    },
  ],
}
