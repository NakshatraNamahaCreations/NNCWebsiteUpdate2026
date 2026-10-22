import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'
import PremiumCTA from '@/components/PremiumCTA'

export const metadata = {
  title: 'Website Design Services Bangalore for Business Growth',

  description:
    'Website Design Services in Bangalore offering modern UI/UX, responsive layouts and high-converting websites for startups, SMEs and growing businesses.',

  alternates: {
    canonical: `${SITE.url}/website-design-services-bangalore`,
  },

  keywords:
    'website design services bangalore, web design company bangalore, website designers bangalore, UI UX design services bangalore, responsive website design bangalore, business website design bangalore, corporate website design bangalore, professional website design bangalore, landing page design bangalore, website redesign services bangalore, creative web design agency bangalore',

  openGraph: {
    title: 'Website Design Services Bangalore for Business Growth',
    description:
      'Get modern, high-converting website design services in Bangalore that drive leads and engagement with responsive and user-focused designs.',
    url: `${SITE.url}/website-design-services-bangalore`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Website Design Services Bangalore – NNC Digital',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Website Design Services Bangalore for Business Growth',
    description:
      'Professional website design services in Bangalore with modern UI/UX, responsive layouts and high-converting website solutions.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',

  name: 'Website Design Services Bangalore',

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
    'Website Design Services',
    'UI/UX Design',
    'Responsive Website Design',
    'Corporate Website Design',
    'Business Website Design',
    'Landing Page Design',
    'Website Redesign',
  ],

  description:
    'Leading website design services in Bangalore offering UI/UX design, responsive websites, corporate websites and high-converting digital experiences.',

  url: `${SITE.url}/website-design-services-bangalore`,

  offers: [
    {
      '@type': 'Offer',
      name: 'Business Website Design Bangalore — Starter',
      price: '20000',
      priceCurrency: 'INR',
      description:
        'Professional website design services with responsive layouts, UI/UX design and conversion-focused structure.',
    },
    {
      '@type': 'Offer',
      name: 'Custom Website Design Bangalore',
      price: '50000',
      priceCurrency: 'INR',
      description:
        'Custom website design with modern UI/UX, branding and high-performance layouts.',
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
      name: 'Website Design Services Bangalore',
      item: `${SITE.url}/website-design-services-bangalore`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best website design service in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Digital is a leading website design service provider in Bangalore specializing in UI/UX design, responsive websites and modern digital experiences.',
      },
    },
    {
      '@type': 'Question',
      name: 'What website design services do you provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide UI/UX design, responsive website design, corporate websites, landing pages and website redesign services.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you create responsive website designs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all our websites are mobile-first and fully responsive across all devices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you redesign existing websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we redesign outdated websites into modern, high-performing and user-friendly digital experiences.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of website design services in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Website design services in Bangalore start from ₹20,000 and vary depending on design complexity and features.',
      },
    },
  ],
}


const data = {
  badge: 'Website Design Services · Bangalore',

  h1: 'Website Design Services',
  h1Accent: 'in Bangalore',

  heroImage: '/assets/images3.png',

  tagline:
    'Top-rated Website Design Services in Bangalore offering modern UI/UX design, responsive websites and high-converting digital experiences for startups, SMEs and enterprises.',

  stat1: '565+',
  stat1Label: 'Projects Delivered',

  serviceName: 'website design services in Bangalore',

  h2Features: 'Website Design Services in Bangalore',

  featuresSubText:
    'Our Website Design Services in Bangalore focus on creative UI/UX design, responsive layouts and conversion-driven websites built by expert website designers in Bangalore.',

  features: [
    {
      h3: 'Custom Website Design Bangalore',
      desc: 'Our Website Design Services in Bangalore include custom website design tailored to your brand identity, business goals and target audience.',
    },
    {
      h3: 'Corporate Website Design Bangalore',
      desc: 'Professional corporate website design services in Bangalore with modern layouts, strong branding and seamless user experience.',
    },
    {
      h3: 'Business Website Design Bangalore',
      desc: 'Conversion-focused business website design services in Bangalore designed to generate leads and drive growth.',
    },
    {
      h3: 'UI/UX Design Services Bangalore',
      desc: 'Advanced UI/UX design services in Bangalore with wireframes, user journeys and interactive prototypes.',
    },
    {
      h3: 'Responsive Website Design Bangalore',
      desc: 'Mobile-first responsive website design services in Bangalore that perform seamlessly across all devices.',
    },
    {
      h3: 'Landing Page Design Bangalore',
      desc: 'High-converting landing page design services in Bangalore built for marketing campaigns and lead generation.',
    },
    {
      h3: 'Website Redesign Services Bangalore',
      desc: 'Upgrade your existing website with our website redesign services in Bangalore for better performance and modern UI.',
    },
    {
      h3: 'Affordable Website Design Bangalore',
      desc: 'Affordable website design services in Bangalore for startups and SMEs without compromising quality.',
    },
    {
      h3: 'Hire Website Designers Bangalore',
      desc: 'Hire professional website designers in Bangalore experienced in UI/UX, Figma and modern design systems.',
    },
  ],

  h2Why: 'Why Choose Our Website Design Services in Bangalore?',

  why: [
    {
      n: '01',
      h3: 'Trusted Website Design Company in Bangalore',
      body: 'We are a trusted provider of Website Design Services in Bangalore delivering modern, user-focused and high-performing websites.',
    },
    {
      n: '02',
      h3: 'In-house Design Experts',
      body: 'Our website designers in Bangalore work in-house ensuring quality, consistency and faster delivery.',
    },
    {
      n: '03',
      h3: 'Modern UI/UX Approach',
      body: 'We use the latest design trends and UI/UX strategies to deliver world-class Website Design Services in Bangalore.',
    },
    {
      n: '04',
      h3: 'Conversion-Focused Websites',
      body: 'Our Website Design Services in Bangalore are built to convert visitors into leads and customers.',
    },
    {
      n: '05',
      h3: 'Full Ownership & Transparency',
      body: 'Get complete ownership of your website with our Website Design Services in Bangalore.',
    },
    {
      n: '06',
      h3: 'Proven Track Record',
      body: 'We have delivered 565+ successful projects through our Website Design Services in Bangalore.',
    },
  ],

  techStack: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'HTML', 'CSS', 'Tailwind CSS'],

  h2Tech: 'Website Design Tools & Technologies',

  h2Faq: 'Website Design Services in Bangalore — Frequently Asked Questions',

  faqs: [
    {
      q: 'Which is the best website design company in Bangalore?',
      a: 'NNC is a leading provider of Website Design Services in Bangalore specializing in UI/UX design and responsive websites.',
    },
    {
      q: 'Why choose website design services in Bangalore?',
      a: 'Website Design Services in Bangalore offer high-quality design, better communication and strong user-focused experiences.',
    },
    {
      q: 'Do you offer custom website design services?',
      a: 'Yes, our Website Design Services in Bangalore include fully custom website design tailored to your business.',
    },
    {
      q: 'Do you provide website redesign services?',
      a: 'Yes, we offer website redesign services in Bangalore to modernize outdated websites.',
    },
    {
      q: 'How long does website design take?',
      a: 'Website design services in Bangalore typically take 1–3 weeks depending on project complexity.',
    },
    {
      q: 'What tools do you use?',
      a: 'We use Figma, Adobe XD, Photoshop and modern UI tools for our Website Design Services in Bangalore.',
    },
    {
      q: 'Are your websites mobile-friendly?',
      a: 'Yes, all our Website Design Services in Bangalore include fully responsive designs.',
    },
  ],
}

export default function WebsiteDesignServiceBangalorePage() {
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
        title: 'Website Design Services',
        accent: 'in Bangalore',
        description:
            'Leading Website Design Services in Bangalore offering UI/UX design, responsive website design, landing pages and high-converting digital experiences for startups, SMEs and enterprises.',
        }}
      cta={{
        title: 'Partner with the Best',
        highlight: 'Website Design Services in Bangalore',
        description:
        'Looking for expert Website Design Services in Bangalore? We create UI/UX-driven, responsive and conversion-focused websites for startups, SMEs and enterprises.',
        }}
        showCTA={true}
        />
      </main>
      
      <SeoKeywords />
      
      <Footer />
      <WaFloat />
      <AnimObserver />
    </>
  )
}
