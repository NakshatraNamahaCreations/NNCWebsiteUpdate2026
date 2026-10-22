import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'
import PremiumCTA from '@/components/PremiumCTA'


export const metadata = {
  title: 'Website Design JP Nagar Bangalore for Business Growth',

  description:
    'Website Design in JP Nagar Bangalore offering UI/UX design, responsive layouts, and high-converting websites for startups and businesses.',

  alternates: {
    canonical: `${SITE.url}/web-development-company-in-rajajinagar`,
  },

  keywords:
    'website design jp nagar bangalore, web design jp nagar bangalore, website designers jp nagar, UI UX design jp nagar bangalore, responsive website design jp nagar, landing page design jp nagar',

  openGraph: {
    title: 'Website Design JP Nagar Bangalore for Business Growth',
    description:
      'Top website design services in JP Nagar Bangalore creating modern, responsive and high-converting websites.',
    url: `${SITE.url}/web-development-company-in-rajajinagar`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Website Design JP Nagar Bangalore – NNC Digital',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Website Design JP Nagar Bangalore for Business Growth',
    description:
      'Professional website design services in JP Nagar Bangalore delivering modern UI/UX and responsive websites.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',

  name: 'Website Design JP Nagar Bangalore',

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
    { '@type': 'Place', name: 'JP Nagar' },
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
    'Leading Website Design in JP Nagar Bangalore offering modern UI/UX design, responsive layouts and high-converting websites.',

  url: `${SITE.url}/web-development-company-in-rajajinagar`,

  offers: [
    {
      '@type': 'Offer',
      name: 'Business Website Design JP Nagar Bangalore — Starter',
      price: '20000',
      priceCurrency: 'INR',
      description:
        'Professional website design with responsive layouts, UI/UX design and conversion-focused structure.',
    },
    {
      '@type': 'Offer',
      name: 'Custom Website Design JP Nagar Bangalore',
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
      name: 'Website Design JP Nagar Bangalore',
      item: `${SITE.url}/web-development-company-in-rajajinagar`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best website design company in JP Nagar Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Digital is a trusted provider of website design in JP Nagar Bangalore offering modern UI/UX design, responsive and high-converting websites.',
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
        text: 'Yes, we redesign outdated websites into modern and high-performing designs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of website design in JP Nagar Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Website design in JP Nagar Bangalore typically starts from ₹20,000 and varies based on design complexity.',
      },
    },
  ],
}

const data = {
  badge: 'Website Design · JP Nagar Bangalore',

  h1: 'Website Design',
  h1Accent: 'JP Nagar Bangalore',

  heroImage: '/assets/images3.png',

  tagline:
    'Top Website Design in JP Nagar Bangalore creating modern, responsive and high-converting websites. As a trusted Website Design in JP Nagar Bangalore, we help startups, SMEs and businesses build a strong online presence.',

  stat1: '565+',
  stat1Label: 'Projects Delivered',

  serviceName: 'website design jp nagar bangalore',

  h2Features: 'Website Design JP Nagar Bangalore',

  featuresSubText:
    'Our Website Design in JP Nagar Bangalore focuses on creative UI/UX design, responsive layouts and conversion-driven websites. As a leading Website Design in JP Nagar Bangalore, we create visually appealing and user-friendly digital experiences for businesses in JP Nagar Bangalore and nearby areas.',

  features: [
    {
      h3: 'Custom Website Design JP Nagar Bangalore',
      desc: 'We create custom website designs tailored to your brand identity, business goals and user experience.',
    },
    {
      h3: 'Corporate Website Design JP Nagar Bangalore',
      desc: 'Professional website designs with strong branding, clean layouts and modern visuals for businesses.',
    },
    {
      h3: 'Business Website Design JP Nagar Bangalore',
      desc: 'Conversion-focused website designs that help businesses generate leads and improve engagement.',
    },
    {
      h3: 'UI/UX Design Services JP Nagar Bangalore',
      desc: 'Advanced UI/UX design with wireframes, user journeys and interactive prototypes.',
    },
    {
      h3: 'Responsive Website Design JP Nagar Bangalore',
      desc: 'Mobile-first website designs that work seamlessly across all devices and screen sizes.',
    },
    {
      h3: 'Landing Page Design JP Nagar Bangalore',
      desc: 'High-converting landing pages designed for marketing campaigns and lead generation.',
    },
    {
      h3: 'Website Redesign JP Nagar Bangalore',
      desc: 'Upgrade outdated websites into modern, visually appealing and high-performing designs.',
    },
    {
      h3: 'Affordable Website Design JP Nagar Bangalore',
      desc: 'Affordable website design solutions for startups and businesses without compromising quality.',
    },
    {
      h3: 'Hire Website Designers JP Nagar Bangalore',
      desc: 'Hire experienced website designers skilled in modern UI/UX design and creative layouts.',
    },
  ],

  h2Why: 'Why Choose Our Website Design JP Nagar Bangalore?',

  why: [
    {
      n: '01',
      h3: 'Trusted Website Design JP Nagar Bangalore',
      body: 'We are a trusted Website Design in JP Nagar Bangalore delivering modern and high-performing website designs.',
    },
    {
      n: '02',
      h3: 'In-house Design Experts',
      body: 'Our designers ensure quality, consistency and faster delivery.',
    },
    {
      n: '03',
      h3: 'Modern UI/UX Approach',
      body: 'We use the latest design trends to create engaging and effective websites.',
    },
    {
      n: '04',
      h3: 'Conversion-Focused Websites',
      body: 'Our websites are designed to convert visitors into leads and customers.',
    },
    {
      n: '05',
      h3: 'Full Ownership & Transparency',
      body: 'Get complete ownership and transparency throughout your project.',
    },
    {
      n: '06',
      h3: 'Proven Track Record',
      body: 'We have successfully delivered 565+ website design projects across industries.',
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

  h2Faq: 'Website Design JP Nagar Bangalore Frequently Asked Questions',

  faqs: [
    {
      q: 'Which is the best website design company in JP Nagar Bangalore?',
      a: 'NNC is a trusted provider of Website Design in JP Nagar Bangalore offering modern UI/UX design and responsive websites.',
    },
    {
      q: 'What website design services do you provide?',
      a: 'We provide UI/UX design, responsive website design, corporate websites, landing pages and website redesign services.',
    },
    {
      q: 'Do you create responsive website designs?',
      a: 'Yes, all our website designs are mobile-first and fully responsive across all devices.',
    },
    {
      q: 'Do you redesign existing websites?',
      a: 'Yes, we upgrade outdated websites into modern and high-performing designs.',
    },
    {
      q: 'How long does website design take?',
      a: 'Website design typically takes 1–3 weeks depending on project complexity.',
    },
    {
      q: 'What tools do you use?',
      a: 'We use Figma, Adobe XD and modern design tools.',
    },
    {
      q: 'Are your websites mobile-friendly?',
      a: 'Yes, all websites are fully responsive and optimized for all devices.',
    },
  ],
}


export default function WebDevelopmentCompanyRajajiNagarBangalorePage() {
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
        accent: 'JP Nagar Bangalore',
        description:
            'Leading Website Design JP Nagar Bangalore offering modern UI/UX design, responsive layouts and high-converting websites for startups, SMEs and growing businesses.',
        }}

        cta={{
        title: 'Partner with the Best',
        highlight: 'Website Design JP Nagar Bangalore',
        description:
            'Looking for professional Website Design JP Nagar Bangalore? We create modern, responsive and conversion-focused website designs tailored for startups, SMEs and local businesses.',
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
