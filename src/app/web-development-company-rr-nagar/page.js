import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'
import PremiumCTA from '@/components/PremiumCTA'

export const metadata = {
  title: 'Web Development Company in RR Nagar for Business Growth',

  description:
    'Web Development Company in RR Nagar offering fast, scalable and responsive websites and web applications for startups, SMEs and growing businesses.',

  alternates: {
    canonical: `${SITE.url}/web-development-company-rr-nagar`,
  },

  keywords:
    'web development company rr nagar, website development rr nagar, web developers rr nagar, custom website development rr nagar, full stack development rr nagar, ecommerce website development rr nagar, responsive website development rr nagar, web application development rr nagar',

  openGraph: {
    title: 'Web Development Company in RR Nagar for Business Growth',
    description:
      'Top web development company in RR Nagar building fast, scalable and high-performance websites and web applications.',
    url: `${SITE.url}/web-development-company-rr-nagar`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Web Development Company in RR Nagar – NNC Digital',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Web Development Company in RR Nagar for Business Growth',
    description:
      'Professional web development company in RR Nagar delivering scalable and high-performance web solutions.',
    images: [SITE.teamPhoto],
  },
}


const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',

  name: 'Web Development Company in RR Nagar',

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
    { '@type': 'Place', name: 'RR Nagar' },
    { '@type': 'Place', name: 'Kengeri' },
    { '@type': 'Place', name: 'BEML Layout' },
    { '@type': 'Place', name: 'Rajarajeshwari Nagar' },
  ],

  serviceType: [
    'Web Development',
    'Custom Website Development',
    'Full Stack Development',
    'Ecommerce Website Development',
    'Web Application Development',
    'Responsive Website Development',
  ],

  description:
    'Leading Web Development Company in RR Nagar offering fast, scalable and high-performance websites and web applications for startups, SMEs and enterprises.',

  url: `${SITE.url}/web-development-company-rr-nagar`,

  offers: [
    {
      '@type': 'Offer',
      name: 'Business Website Development RR Nagar — Starter',
      price: '25000',
      priceCurrency: 'INR',
      description:
        'Professional website development with responsive design, fast loading speed and scalable architecture.',
    },
    {
      '@type': 'Offer',
      name: 'Custom Web Development RR Nagar',
      price: '60000',
      priceCurrency: 'INR',
      description:
        'Custom web development solutions including frontend, backend, APIs and advanced features.',
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
      name: 'Web Development',
      item: `${SITE.url}/web-development`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Web Development Company in RR Nagar',
      item: `${SITE.url}/web-development-company-rr-nagar`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best web development company in RR Nagar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Digital is a trusted web development company in RR Nagar specializing in scalable websites, web applications and performance-driven solutions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What web development services do you provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide custom website development, full stack development, ecommerce development and web application development.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build responsive websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all our websites are mobile-first and fully responsive across all devices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you maintain websites after development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide ongoing website maintenance, updates and performance optimization.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of web development in RR Nagar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Web development costs in RR Nagar typically start from ₹25,000 and vary based on features and complexity.',
      },
    },
  ],
}

const data = {
  badge: 'Web Development Company · RR Nagar',

  h1: 'Web Development Company',
  h1Accent: 'in RR Nagar',

  heroImage: '/assets/images3.png',

  tagline:
    'Top Web Development Company in RR Nagar building fast, scalable and high-performance websites and web applications. As a trusted Web Development Company in RR Nagar, we help startups, SMEs and enterprises grow online.',

  stat1: '565+',
  stat1Label: 'Projects Delivered',

  serviceName: 'web development company in RR Nagar',

  h2Features: 'Web Development Company in RR Nagar',

  featuresSubText:
    'Our Web Development Company in RR Nagar focuses on building scalable, secure and high-performance websites and web applications. As a leading Web Development Company in RR Nagar, we use modern technologies to deliver reliable digital solutions for businesses in RR Nagar and nearby areas.',

  features: [
    {
      h3: 'Custom Website Development RR Nagar',
      desc: 'As a Web Development Company in RR Nagar, we build custom websites tailored to your business goals, user journey and scalability requirements.',
    },
    {
      h3: 'Corporate Website Development RR Nagar',
      desc: 'Professional corporate websites with strong architecture, performance optimization and enterprise-level security.',
    },
    {
      h3: 'Business Website Development RR Nagar',
      desc: 'Conversion-focused business websites designed to generate leads and drive measurable growth.',
    },
    {
      h3: 'Full Stack Development RR Nagar',
      desc: 'Our Web Development Company in RR Nagar provides end-to-end development including frontend, backend, APIs and database integration.',
    },
    {
      h3: 'Responsive Website Development RR Nagar',
      desc: 'Mobile-first websites that perform seamlessly across all devices and screen sizes.',
    },
    {
      h3: 'Ecommerce Website Development RR Nagar',
      desc: 'Scalable ecommerce platforms with secure payment integration, product management and optimized user experience.',
    },
    {
      h3: 'Web Application Development RR Nagar',
      desc: 'We are a Web Development Company in RR Nagar delivering advanced web applications with dashboards, authentication systems and real-time functionality.',
    },
    {
      h3: 'Website Maintenance & Support RR Nagar',
      desc: 'Ongoing maintenance, updates and performance optimization to keep your website secure, fast and up-to-date.',
    },
    {
      h3: 'Hire Web Developers RR Nagar',
      desc: 'Hire experienced web developers in RR Nagar skilled in modern frameworks, APIs and scalable architecture.',
    },
  ],

  h2Why: 'Why Choose Our Web Development Company in RR Nagar?',

  why: [
    {
      n: '01',
      h3: 'Trusted Web Development Company in RR Nagar',
      body: 'We are a trusted Web Development Company in RR Nagar delivering scalable, secure and high-performance websites tailored to business growth.',
    },
    {
      n: '02',
      h3: 'Experienced In-house Developers',
      body: 'Our developers work in-house ensuring clean code, faster delivery and consistent quality.',
    },
    {
      n: '03',
      h3: 'Modern Technology Stack',
      body: 'We use React, Next.js, Node.js and modern frameworks to build high-performance applications.',
    },
    {
      n: '04',
      h3: 'Performance & Speed Optimized',
      body: 'Our websites are optimized for speed, SEO and seamless user experience.',
    },
    {
      n: '05',
      h3: 'Scalable & Future-Ready Solutions',
      body: 'We build systems that grow with your business and adapt to future requirements.',
    },
    {
      n: '06',
      h3: 'Proven Track Record',
      body: 'We have successfully delivered 565+ projects across multiple industries.',
    },
  ],

  techStack: [
    'React',
    'Next.js',
    'Node.js',
    'MongoDB',
    'Express.js',
    'JavaScript',
    'Tailwind CSS',
  ],

  h2Tech: 'Web Development Technologies We Use',

  h2Faq: 'Web Development Company in RR Nagar — Frequently Asked Questions',

  faqs: [
    {
      q: 'Which is the best web development company in RR Nagar?',
      a: 'NNC is a trusted Web Development Company in RR Nagar specializing in scalable websites, web applications and performance-driven solutions.',
    },
    {
      q: 'What web development services do you provide?',
      a: 'We provide custom website development, full stack development, ecommerce development and web application development.',
    },
    {
      q: 'Do you build responsive websites?',
      a: 'Yes, all our websites are mobile-first and fully responsive across all devices.',
    },
    {
      q: 'Do you provide website maintenance?',
      a: 'Yes, we offer ongoing website maintenance, updates and performance optimization services.',
    },
    {
      q: 'How long does web development take?',
      a: 'Web development typically takes 2–6 weeks depending on project complexity and features.',
    },
    {
      q: 'What technologies do you use?',
      a: 'We use React, Next.js, Node.js, MongoDB and modern web technologies.',
    },
    {
      q: 'What is the cost of web development in RR Nagar?',
      a: 'Web development costs in RR Nagar start from ₹25,000 and vary based on features and complexity.',
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
            title: 'Web Development Company',
            accent: 'in RR Nagar',
            description:
            'Leading Web Development Company in RR Nagar building fast, scalable and high-performance websites and web applications for startups, SMEs and enterprises.',
        }}

        cta={{
            title: 'Partner with the Best',
            highlight: 'Web Development Company in RR Nagar',
            description:
            'Looking for a reliable Web Development Company in RR Nagar? We build scalable, secure and high-performance websites tailored for startups, SMEs and growing businesses.',
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
