import { MYSURU_APP_PAGE } from '@/data/mobileAppMysuruData'
import { SITE } from '@/data/siteData'

const SLUG = '/mobile-app-development-company-in-mysuru'

export const metadata = {
  title: 'Mobile App Development Company in Mysuru | Nakshatra Namaha Creations',
  description:
    'Top mobile app development company in Mysuru. Custom Android & iOS apps on React Native & Flutter. 150+ apps delivered. 4.9★ Google. Walk-in Mysuru office. Fixed price. Source code yours. Call +91 99005 66466.',
  keywords: [
    'mobile app development company in mysuru',
    'app development company in mysuru',
    'mobile app developers in mysuru',
    'best mobile app development company mysuru',
    'top app development company mysuru',
    'app developers in mysuru',
    'mobile application development mysuru',
    'custom mobile app development mysuru',
    'enterprise mobile app development mysuru',
    'on demand app development mysuru',
    'hire mobile app developers mysuru',
    'app development services mysuru',
    'startup app development mysuru',
    'mvp app development mysuru',
    'app development agency mysuru',
    'android app development company mysuru',
    'ios app development company mysuru',
    'react native development company mysuru',
    'flutter app development mysuru',
    'cross platform app development mysuru',
  ].join(', '),
  authors: [{ name: SITE.name }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE.url}${SLUG}`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: `${SITE.url}${SLUG}`,
    siteName: 'Nakshatra Namaha Creations',
    title: 'Mobile App Development Company in Mysuru | Nakshatra Namaha Creations',
    description:
      'Top mobile app development company in Mysuru. Custom Android & iOS apps on React Native & Flutter. Walk-in office. Fixed price. Source code yours.',
    images: [
      {
        url: 'https://s3.eu-north-1.amazonaws.com/admin.nakshatranamahacreations.in/NNC+NEW+LOGO+2020+low+res.png',
        width: 1200,
        height: 630,
        alt: 'Mobile App Development Company Mysuru Nakshatra Namaha Creations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Mobile App Development Company in Mysuru | Nakshatra Namaha Creations',
    description:
      'Custom Android & iOS apps in Mysuru. React Native & Flutter. Walk-in office. Fixed price.',
  },
}

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile App Development Company in Mysuru',
  description:
    'Custom Android and iOS mobile app development in Mysuru using React Native and Flutter. On-demand apps, e-commerce apps, healthcare apps, fintech apps and enterprise platforms. Walk-in office in JP Nagar, Mysuru.',
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
  serviceType: 'Mobile App Development',
  offers: [
    { '@type': 'Offer', name: 'MVP App Development', price: '75000', priceCurrency: 'INR', description: 'React Native app with up to 8 screens, basic backend and Play Store deployment.' },
    { '@type': 'Offer', name: 'Business App Development', price: '175000', priceCurrency: 'INR', description: 'Full-featured React Native or Flutter app with admin panel, payment gateway and analytics.' },
    { '@type': 'Offer', name: 'Enterprise App Platform', description: 'Custom-scoped enterprise mobile platform with microservices, multi-role access and CRM integration.' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'App Development Services Mysuru',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development Company Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'React Native App Development Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Flutter App Development Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Android App Development Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'iOS App Development Mysuru' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'On-demand App Development Mysuru' } },
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
    { '@type': 'ListItem', position: 4, name: 'Mysuru', item: `${SITE.url}${SLUG}` },
  ],
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does mobile app development cost in Mysuru?', acceptedAnswer: { '@type': 'Answer', text: 'MVP apps start from ₹75,000. Business apps ₹1,50,000–₹2,50,000. Enterprise platforms scoped individually. All pricing fixed before work begins.' } },
    { '@type': 'Question', name: 'Does Nakshatra Namaha Creations have an office in Mysuru?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Walk-in office at Suswani Towers, JP Nagar 2nd Stage, Mysuru – 570 008. Open Mon–Sat, 9am–7pm.' } },
    { '@type': 'Question', name: 'How long does it take to build a mobile app?', acceptedAnswer: { '@type': 'Answer', text: 'MVP: 6–8 weeks. Business app: 10–14 weeks. Enterprise: 14–24 weeks. Timeline agreed in writing.' } },
    { '@type': 'Question', name: 'React Native or Flutter — which should I choose?', acceptedAnswer: { '@type': 'Answer', text: 'Both deliver Android and iOS from one codebase. React Native has a larger ecosystem. Flutter gives more precise UI control. We recommend the right framework after reviewing your requirements.' } },
  ],
}
