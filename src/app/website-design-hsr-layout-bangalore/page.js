import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'
import PremiumCTA from '@/components/PremiumCTA'

export const metadata = {
  title: 'Website Design HSR Layout Bangalore for Business Growth',

  description:
    'Website Design in HSR Layout Bangalore offering modern UI/UX design, responsive layouts and high-converting websites for startups, SMEs and businesses.',

  alternates: {
    canonical: `${SITE.url}/website-design-hsr-layout-bangalore`,
  },

  keywords:
    'website design hsr layout bangalore, web design hsr layout bangalore, website designers hsr layout, UI UX design hsr layout bangalore, responsive website design hsr layout, business website design hsr layout bangalore',

  openGraph: {
    title: 'Website Design HSR Layout Bangalore for Business Growth',
    description:
      'Top website design services in HSR Layout Bangalore creating modern, responsive and high-converting websites.',
    url: `${SITE.url}/website-design-hsr-layout-bangalore`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Website Design HSR Layout Bangalore – NNC Digital',
      },
    ],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',

  name: 'Website Design HSR Layout Bangalore',

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
    { '@type': 'Place', name: 'HSR Layout' },
    { '@type': 'City', name: 'Bangalore' },
  ],

  serviceType: [
    'Website Design',
    'UI/UX Design',
    'Responsive Website Design',
    'Corporate Website Design',
    'Business Website Design',
    'Landing Page Design',
    'Website Redesign',
  ],

  description:
    'Leading Website Design in HSR Layout Bangalore offering modern UI/UX design, responsive layouts and high-converting websites for startups, SMEs and growing businesses.',

  url: `${SITE.url}/website-design-hsr-layout-bangalore`,

  offers: [
    {
      '@type': 'Offer',
      name: 'Business Website Design HSR Layout Bangalore — Starter',
      price: '20000',
      priceCurrency: 'INR',
      description:
        'Professional website design with responsive layouts, UI/UX design and conversion-focused structure.',
    },
    {
      '@type': 'Offer',
      name: 'Custom Website Design HSR Layout Bangalore',
      price: '50000',
      priceCurrency: 'INR',
      description:
        'Custom website design with modern UI/UX, branding and high-performance layouts tailored for your business.',
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
      name: 'Website Design HSR Layout Bangalore',
      item: `${SITE.url}/website-design-hsr-layout-bangalore`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best website design company in HSR Layout Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Digital is a trusted provider of website design in HSR Layout Bangalore offering modern UI/UX design, responsive layouts and high-converting websites.',
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
        text: 'Yes, all our website designs are mobile-first and fully responsive across all devices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you redesign existing websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we redesign outdated websites into modern, visually appealing and high-performing designs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of website design in HSR Layout Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Website design in HSR Layout Bangalore typically starts from ₹20,000 and varies depending on design complexity and features.',
      },
    },
  ],
}
const data = {
  badge: 'Website Design · HSR Layout Bangalore',

  h1: 'Website Design',
  h1Accent: 'HSR Layout Bangalore',

  heroImage: '/assets/images3.png',

  tagline:
    'Top Website Design in HSR Layout Bangalore creating modern, responsive and high-converting websites. As a trusted Website Design in HSR Layout Bangalore, we help startups, SMEs and businesses build a strong online presence with expert Website Design in HSR Layout Bangalore solutions.',

  stat1: '565+',
  stat1Label: 'Projects Delivered',

  serviceName: 'website design hsr layout bangalore',

  h2Features: 'Website Design HSR Layout Bangalore',

  featuresSubText:
    'Our Website Design in HSR Layout Bangalore focuses on creative UI/UX design, responsive layouts and conversion-driven websites. As a leading Website Design in HSR Layout Bangalore, we deliver visually appealing and user-friendly digital experiences for businesses in HSR Layout Bangalore and nearby areas with expert Website Design in HSR Layout Bangalore.',

  features: [
    {
      h3: 'Custom Website Design HSR Layout Bangalore',
      desc: 'As a Website Design in HSR Layout Bangalore provider, we create custom websites tailored to your brand identity, business goals and user experience.',
    },
    {
      h3: 'Corporate Website Design HSR Layout Bangalore',
      desc: 'Professional Website Design in HSR Layout Bangalore with strong branding, clean layouts and modern visuals for corporate businesses.',
    },
    {
      h3: 'Business Website Design HSR Layout Bangalore',
      desc: 'Conversion-focused Website Design in HSR Layout Bangalore that helps businesses generate leads and improve engagement.',
    },
    {
      h3: 'UI/UX Design Services HSR Layout Bangalore',
      desc: 'Advanced UI/UX Website Design in HSR Layout Bangalore with wireframes, user journeys and interactive prototypes.',
    },
    {
      h3: 'Responsive Website Design HSR Layout Bangalore',
      desc: 'Mobile-first Website Design in HSR Layout Bangalore that works seamlessly across all devices and screen sizes.',
    },
    {
      h3: 'Landing Page Design HSR Layout Bangalore',
      desc: 'High-converting landing pages built using Website Design in HSR Layout Bangalore strategies for marketing campaigns.',
    },
    {
      h3: 'Website Redesign HSR Layout Bangalore',
      desc: 'Upgrade outdated websites into modern Website Design in HSR Layout Bangalore with improved performance and visuals.',
    },
    {
      h3: 'Affordable Website Design HSR Layout Bangalore',
      desc: 'Affordable Website Design in HSR Layout Bangalore for startups and businesses without compromising quality.',
    },
    {
      h3: 'Hire Website Designers HSR Layout Bangalore',
      desc: 'Hire expert Website Design in HSR Layout Bangalore professionals skilled in modern UI/UX design.',
    },
  ],

  h2Why: 'Why Choose Our Website Design HSR Layout Bangalore?',

  why: [
    {
      n: '01',
      h3: 'Trusted Website Design HSR Layout Bangalore',
      body: 'We are a trusted Website Design in HSR Layout Bangalore delivering modern and high-performing Website Design in HSR Layout Bangalore solutions.',
    },
    {
      n: '02',
      h3: 'In-house Design Experts',
      body: 'Our Website Design in HSR Layout Bangalore team ensures quality, consistency and faster delivery.',
    },
    {
      n: '03',
      h3: 'Modern UI/UX Approach',
      body: 'We use the latest trends to deliver high-quality Website Design in HSR Layout Bangalore.',
    },
    {
      n: '04',
      h3: 'Conversion-Focused Websites',
      body: 'Our Website Design in HSR Layout Bangalore is built to convert visitors into leads and customers.',
    },
    {
      n: '05',
      h3: 'Full Ownership & Transparency',
      body: 'Get complete ownership of your Website Design in HSR Layout Bangalore project.',
    },
    {
      n: '06',
      h3: 'Proven Track Record',
      body: 'We have delivered 565+ Website Design in HSR Layout Bangalore projects successfully.',
    },
  ],

  techStack: [
    'Figma',
    'Adobe XD',
    'Photoshop',
    'Illustrator',
    'HTML',
    'CSS',
    'Tailwind CSS',
  ],

  h2Tech: 'Website Design Tools & Technologies',

  h2Faq: 'Website Design HSR Layout Bangalore Frequently Asked Questions',

  faqs: [
    {
      q: 'Which is the best website design company in HSR Layout Bangalore?',
      a: 'NNC is a trusted provider of Website Design in HSR Layout Bangalore offering modern UI/UX design and responsive websites.',
    },
    {
      q: 'Why choose Website Design HSR Layout Bangalore?',
      a: 'Website Design in HSR Layout Bangalore offers high-quality design, better communication and strong user-focused experiences.',
    },
    {
      q: 'Do you offer custom website design?',
      a: 'Yes, our Website Design in HSR Layout Bangalore includes fully custom website design tailored to your business.',
    },
    {
      q: 'Do you provide redesign services?',
      a: 'Yes, we offer Website Design in HSR Layout Bangalore for redesigning outdated websites.',
    },
    {
      q: 'How long does website design take?',
      a: 'Website Design in HSR Layout Bangalore typically takes 1–3 weeks.',
    },
    {
      q: 'What tools do you use?',
      a: 'We use Figma, Adobe XD and modern tools for Website Design in HSR Layout Bangalore.',
    },
    {
      q: 'Are your websites mobile-friendly?',
      a: 'Yes, all Website Design in HSR Layout Bangalore projects are fully responsive.',
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
        title: 'Website Design',
        accent: 'HSR Layout Bangalore',
        description:
            'Leading Website Design in HSR Layout Bangalore offering modern UI/UX design, responsive layouts and high-converting websites. We help startups, SMEs and growing businesses build a strong digital presence with creative and user-focused design solutions.',
        }}

        cta={{
        title: 'Partner with the Best',
        highlight: 'Website Design HSR Layout Bangalore',
        description:
            'Looking for professional Website Design in HSR Layout Bangalore? We create modern, responsive and conversion-focused websites tailored for startups, SMEs and local businesses.',
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
