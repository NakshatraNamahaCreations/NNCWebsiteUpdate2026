import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'
import PremiumCTA from '@/components/PremiumCTA'

export const metadata = {
  title: 'Website Design Rajajinagar Bangalore for Business Growth',

  description:
    'Website Design in Rajajinagar Bangalore offering modern UI/UX design, responsive layouts and high-converting websites for startups, SMEs and businesses.',

  alternates: {
    canonical: `${SITE.url}/website-design-rajajinagar-bangalore`,
  },

  keywords:
    'website design rajajinagar bangalore, web design rajajinagar bangalore, website designers rajajinagar, UI UX design rajajinagar bangalore, responsive website design rajajinagar, business website design rajajinagar bangalore',

  openGraph: {
    title: 'Website Design Rajajinagar Bangalore for Business Growth',
    description:
      'Top website design services in Rajajinagar Bangalore creating modern, responsive and high-converting websites.',
    url: `${SITE.url}/website-design-rajajinagar-bangalore`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Website Design Rajajinagar Bangalore – NNC Digital',
      },
    ],
  },
}


const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',

  name: 'Website Design Rajajinagar Bangalore',

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
    { '@type': 'Place', name: 'Rajajinagar' },
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
    'Leading Website Design in Rajajinagar Bangalore offering modern UI/UX design, responsive layouts and high-converting websites for startups, SMEs and growing businesses.',

  url: `${SITE.url}/website-design-rajajinagar-bangalore`,

  offers: [
    {
      '@type': 'Offer',
      name: 'Business Website Design Rajajinagar Bangalore — Starter',
      price: '20000',
      priceCurrency: 'INR',
      description:
        'Professional website design with responsive layouts, UI/UX design and conversion-focused structure.',
    },
    {
      '@type': 'Offer',
      name: 'Custom Website Design Rajajinagar Bangalore',
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
      name: 'Website Design Rajajinagar Bangalore',
      item: `${SITE.url}/website-design-rajajinagar-bangalore`,
    },
  ],
}


const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best website design company in Rajajinagar Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Digital is a trusted provider of website design in Rajajinagar Bangalore offering modern UI/UX design, responsive layouts and high-converting websites.',
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
      name: 'What is the cost of website design in Rajajinagar Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Website design in Rajajinagar Bangalore typically starts from ₹20,000 and varies depending on design complexity and features.',
      },
    },
  ],
}

const data = {
  badge: 'Website Design · Rajajinagar Bangalore',

  h1: 'Website Design',
  h1Accent: 'Rajajinagar Bangalore',

  heroImage: '/assets/images3.png',

  tagline:
    'Top Website Design in Rajajinagar Bangalore creating modern, responsive and high-converting websites. As a trusted Website Design in Rajajinagar Bangalore, we help startups, SMEs and businesses build a strong online presence with expert Website Design in Rajajinagar Bangalore solutions.',

  stat1: '565+',
  stat1Label: 'Projects Delivered',

  serviceName: 'website design rajajinagar bangalore',

  h2Features: 'Website Design Rajajinagar Bangalore',

  featuresSubText:
    'Our Website Design in Rajajinagar Bangalore focuses on creative UI/UX design, responsive layouts and conversion-driven websites. As a leading Website Design in Rajajinagar Bangalore, we create visually appealing and user-friendly digital experiences for businesses in Rajajinagar Bangalore and nearby areas.',

  features: [
    {
      h3: 'Custom Website Design Rajajinagar Bangalore',
      desc: 'As a Website Design in Rajajinagar Bangalore provider, we create custom websites tailored to your brand identity, business goals and user experience.',
    },
    {
      h3: 'Corporate Website Design Rajajinagar Bangalore',
      desc: 'Professional Website Design in Rajajinagar Bangalore with strong branding, clean layouts and modern visuals.',
    },
    {
      h3: 'Business Website Design Rajajinagar Bangalore',
      desc: 'Conversion-focused Website Design in Rajajinagar Bangalore that helps businesses generate leads and improve engagement.',
    },
    {
      h3: 'UI/UX Design Services Rajajinagar Bangalore',
      desc: 'Advanced UI/UX Website Design in Rajajinagar Bangalore with wireframes and user-focused experiences.',
    },
    {
      h3: 'Responsive Website Design Rajajinagar Bangalore',
      desc: 'Mobile-first Website Design in Rajajinagar Bangalore that works seamlessly across all devices.',
    },
    {
      h3: 'Landing Page Design Rajajinagar Bangalore',
      desc: 'High-converting landing pages built using Website Design in Rajajinagar Bangalore strategies.',
    },
    {
      h3: 'Website Redesign Rajajinagar Bangalore',
      desc: 'Upgrade outdated websites into modern Website Design in Rajajinagar Bangalore with improved visuals and performance.',
    },
    {
      h3: 'Affordable Website Design Rajajinagar Bangalore',
      desc: 'Affordable Website Design in Rajajinagar Bangalore for startups and businesses without compromising quality.',
    },
    {
      h3: 'Hire Website Designers Rajajinagar Bangalore',
      desc: 'Hire expert Website Design in Rajajinagar Bangalore professionals skilled in modern UI/UX design.',
    },
  ],

  h2Why: 'Why Choose Our Website Design Rajajinagar Bangalore?',

  why: [
    {
      n: '01',
      h3: 'Trusted Website Design Rajajinagar Bangalore',
      body: 'We are a trusted Website Design in Rajajinagar Bangalore delivering modern and high-performing Website Design in Rajajinagar Bangalore solutions.',
    },
    {
      n: '02',
      h3: 'In-house Design Experts',
      body: 'Our Website Design in Rajajinagar Bangalore team ensures quality, consistency and faster delivery.',
    },
    {
      n: '03',
      h3: 'Modern UI/UX Approach',
      body: 'We use the latest trends to deliver high-quality Website Design in Rajajinagar Bangalore.',
    },
    {
      n: '04',
      h3: 'Conversion-Focused Websites',
      body: 'Our Website Design in Rajajinagar Bangalore is built to convert visitors into leads and customers.',
    },
    {
      n: '05',
      h3: 'Full Ownership & Transparency',
      body: 'Get complete ownership of your Website Design in Rajajinagar Bangalore project.',
    },
    {
      n: '06',
      h3: 'Proven Track Record',
      body: 'We have delivered 565+ Website Design in Rajajinagar Bangalore projects successfully.',
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

  h2Faq: 'Website Design Rajajinagar Bangalore Frequently Asked Questions',

  faqs: [
    {
      q: 'Which is the best website design company in Rajajinagar Bangalore?',
      a: 'NNC is a trusted provider of Website Design in Rajajinagar Bangalore offering modern UI/UX design and responsive websites.',
    },
    {
      q: 'Why choose Website Design Rajajinagar Bangalore?',
      a: 'Website Design in Rajajinagar Bangalore offers high-quality design, better communication and user-focused experiences.',
    },
    {
      q: 'Do you offer custom website design?',
      a: 'Yes, our Website Design in Rajajinagar Bangalore includes fully custom website design tailored to your business.',
    },
    {
      q: 'Do you provide redesign services?',
      a: 'Yes, we offer Website Design in Rajajinagar Bangalore for redesigning outdated websites.',
    },
    {
      q: 'How long does website design take?',
      a: 'Website Design in Rajajinagar Bangalore typically takes 1–3 weeks.',
    },
    {
      q: 'What tools do you use?',
      a: 'We use Figma, Adobe XD and modern tools for Website Design in Rajajinagar Bangalore.',
    },
    {
      q: 'Are your websites mobile-friendly?',
      a: 'Yes, all Website Design in Rajajinagar Bangalore projects are fully responsive.',
    },
  ],
}

export default function WebsiteDesignRajajinagarBangalorePage() {
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
          accent: 'Rajajinagar Bangalore',
          description:
            'Leading Website Design in Rajajinagar Bangalore offering modern UI/UX design, responsive layouts and high-converting websites for startups, SMEs and growing businesses.',
        }}

        cta={{
          title: 'Partner with the Best',
          highlight: 'Website Design Rajajinagar Bangalore',
          description:
            'Looking for professional Website Design in Rajajinagar Bangalore? We create modern, responsive and conversion-focused websites tailored for startups, SMEs and local businesses.',
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
