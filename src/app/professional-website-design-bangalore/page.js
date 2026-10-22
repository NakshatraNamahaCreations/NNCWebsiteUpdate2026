import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'
import PremiumCTA from '@/components/PremiumCTA'

export const metadata = {
  title: 'Professional Website Design Bangalore for Business Growth',

  description:
    'Professional website design Bangalore with modern UI/UX, responsive layouts and high-converting websites for startups, SMEs and growing businesses.',

  alternates: {
    canonical: `${SITE.url}/professional-website-design-bangalore`,
  },

  keywords:
    'professional website design bangalore, website design company bangalore, UI UX design bangalore, responsive website design bangalore, business website design bangalore, custom website design bangalore',

  openGraph: {
    title: 'Professional Website Design Bangalore for Business Growth',
    description:
      'Build visually stunning, responsive and high-performing websites with a professional website design company in Bangalore.',
    url: `${SITE.url}/professional-website-design-bangalore`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Professional Website Design Bangalore – NNC Digital',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Professional Website Design Bangalore for Business Growth',
    description:
      'Professional website design Bangalore services for modern, responsive and conversion-focused websites.',
    images: [SITE.teamPhoto],
  },
}


const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',

  name: 'Professional Website Design Bangalore',

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
    'Website Design',
    'UI UX Design',
    'Responsive Website Design',
    'Custom Website Design',
    'Business Website Design',
    'Landing Page Design',
  ],

  description:
    'Professional website design Bangalore offering modern UI/UX, responsive layouts and conversion-focused websites for startups, SMEs and enterprises.',

  url: `${SITE.url}/professional-website-design-bangalore`,

  offers: [
    {
      '@type': 'Offer',
      name: 'Starter Website Design Bangalore',
      price: '15000',
      priceCurrency: 'INR',
      description:
        'Professional website design package with responsive layouts, UI design and essential pages for small businesses.',
    },
    {
      '@type': 'Offer',
      name: 'Custom Website Design Bangalore',
      price: '40000',
      priceCurrency: 'INR',
      description:
        'Custom-designed website with modern UI/UX, responsive layouts and performance optimization.',
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
      name: 'Website Design',
      item: `${SITE.url}/website-design`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Professional Website Design Bangalore',
      item: `${SITE.url}/professional-website-design-bangalore`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is professional website design Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Professional website design Bangalore focuses on creating visually appealing, user-friendly and responsive websites for businesses.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does website design cost in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Website design costs in Bangalore vary based on features, UI complexity and project requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide responsive website design?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all websites are designed to be fully responsive and optimized for all devices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get a custom website design?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer custom website design solutions tailored to your brand and business goals.',
      },
    },
  ],
}

const data = {
  badge: 'Professional Website Design · Bangalore',

  h1: 'Professional Website Design',
  h1Accent: 'in Bangalore',
  heroImage: '/assets/images3.png',

  tagline:
    'Professional Website Design Bangalore services focused on modern UI/UX, visually engaging layouts and high-performing websites for startups, SMEs and growing businesses.',

  stat1: '565+',
  stat1Label: 'Projects Delivered',

  serviceName: 'Professional Website Design Bangalore',

  h2Features: 'Professional Website Design Bangalore Services',

  featuresSubText:
    'As a trusted provider of Professional Website Design Bangalore, we create visually stunning UI/UX, responsive layouts and conversion-focused website designs. Our professional website design in Bangalore helps businesses build a strong online presence.',

  features: [
    {
      h3: 'Custom Website Design Bangalore',
      desc: 'Our Professional Website Design Bangalore services include custom-designed websites tailored to your brand identity and user experience.',
    },
    {
      h3: 'Corporate Website Design Bangalore',
      desc: 'Professional corporate website designs with strong branding, structured layouts and premium UI aesthetics.',
    },
    {
      h3: 'Business Website Design Bangalore',
      desc: 'Professional Website Design Bangalore solutions for businesses looking to generate leads and build credibility online.',
    },
    {
      h3: 'UI/UX Website Design Bangalore',
      desc: 'Modern UI/UX design integrated into our Professional Website Design Bangalore services to improve user engagement and conversions.',
    },
    {
      h3: 'Responsive Website Design Bangalore',
      desc: 'Mobile-first responsive website design ensuring seamless performance across all devices.',
    },
    {
      h3: 'Landing Page Design Bangalore',
      desc: 'High-converting landing page designs built under our Professional Website Design Bangalore services for marketing campaigns.',
    },
    {
      h3: 'Website Redesign Bangalore',
      desc: 'Upgrade outdated websites with our Professional Website Design Bangalore solutions for modern look and performance.',
    },
    {
      h3: 'Creative Web Design Bangalore',
      desc: 'Innovative and visually engaging designs crafted under our Professional Website Design Bangalore services.',
    },
    {
      h3: 'Hire Website Designers Bangalore',
      desc: 'Work with expert designers delivering Professional Website Design Bangalore using modern UI/UX trends.',
    },
  ],

  h2Why: 'Why Choose NNC for Professional Website Design Bangalore?',

  why: [
    {
      n: '01',
      h3: 'Premium Design Quality',
      body: 'Our Professional Website Design Bangalore services focus on high-quality visuals, modern UI and attention to detail.',
    },
    {
      n: '02',
      h3: 'In-house Design Team',
      body: 'All Professional Website Design Bangalore projects are handled by our in-house designers for consistent quality.',
    },
    {
      n: '03',
      h3: 'Modern UI/UX Approach',
      body: 'We use the latest design trends to deliver Professional Website Design Bangalore solutions that are visually appealing and functional.',
    },
    {
      n: '04',
      h3: 'Conversion-Focused Design',
      body: 'Our Professional Website Design Bangalore services are built to improve user engagement and generate leads.',
    },
    {
      n: '05',
      h3: 'Full Ownership',
      body: 'With our Professional Website Design Bangalore services, you get complete ownership of your website.',
    },
    {
      n: '06',
      h3: 'Proven Experience',
      body: 'We have delivered 565+ successful projects through our Professional Website Design Bangalore services.',
    },
  ],

  techStack: [
    'React',
    'Next.js',
    'HTML',
    'CSS',
    'Tailwind CSS',
    'JavaScript',
  ],

  h2Tech: 'Website Design Technologies',

  h2Faq: 'Professional Website Design Bangalore — Frequently Asked Questions',

  faqs: [
    {
      q: 'What is Professional Website Design Bangalore?',
      a: 'Professional Website Design Bangalore focuses on creating visually appealing, user-friendly and responsive websites for businesses.',
    },
    {
      q: 'How much does website design cost in Bangalore?',
      a: 'Professional website design in Bangalore pricing depends on UI complexity, features and business requirements.',
    },
    {
      q: 'Do you design responsive websites?',
      a: 'Yes, all our Professional Website Design Bangalore services include fully responsive website designs.',
    },
    {
      q: 'Can I get a custom website design?',
      a: 'Yes, we offer Professional Website Design Bangalore solutions tailored to your brand and business goals.',
    },
    {
      q: 'Do you redesign existing websites?',
      a: 'Yes, we upgrade websites through our Professional Website Design Bangalore services to modern UI/UX standards.',
    },
    {
      q: 'What tools do you use for design?',
      a: 'We use modern design tools and frameworks to deliver Professional Website Design Bangalore solutions.',
    },
    {
      q: 'How long does website design take?',
      a: 'Professional Website Design Bangalore projects usually take 1–3 weeks depending on requirements.',
    },
  ],
}


export default function ProfessionalWebsiteDevelopmentBangalorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>

        <ServicePageContent 
        data={data} 

        customHero={{
        title: 'Professional Website Design',
        accent: 'in Bangalore',
        description:
            'Looking for Professional Website Design Bangalore? We create visually stunning, user-friendly and responsive websites with modern UI/UX design, tailored for startups, SMEs and growing businesses.',
        }}

        cta={{
        title: 'Partner with the Best',
        highlight: 'Professional Website Design Bangalore',
        description:
            'Work with a trusted team for Professional Website Design Bangalore to create visually engaging, responsive and conversion-focused websites that elevate your brand and grow your business online.',
        }}

        showCTA={true}/>

      </main>
      
      <SeoKeywords />
      
      <Footer />
      <WaFloat />
      <AnimObserver />
    </>
  )
}
