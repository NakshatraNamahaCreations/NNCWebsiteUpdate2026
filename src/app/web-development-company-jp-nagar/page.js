import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'
import PremiumCTA from '@/components/PremiumCTA'


export const metadata = {
  title: 'Web Development Company in JP Nagar for Business Growth',

  description:
    'Web Development Company in JP Nagar offering fast, scalable and responsive websites and web applications for startups, SMEs and growing businesses.',

  alternates: {
    canonical: `${SITE.url}/web-development-company-jp-nagar`,
  },

  keywords:
    'web development company jp nagar, website development jp nagar, web developers jp nagar, custom website development jp nagar, full stack development jp nagar, ecommerce website development jp nagar, responsive website development jp nagar, web application development jp nagar',

  openGraph: {
    title: 'Web Development Company in JP Nagar for Business Growth',
    description:
      'Top web development company in JP Nagar building fast, scalable and high-performance websites and web applications.',
    url: `${SITE.url}/web-development-company-jp-nagar`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Web Development Company in JP Nagar – NNC Digital',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Web Development Company in JP Nagar for Business Growth',
    description:
      'Professional web development company in JP Nagar delivering scalable and high-performance web solutions.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',

  name: 'Web Development Company in JP Nagar',

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
    'Web Development',
    'Custom Website Development',
    'Full Stack Development',
    'Ecommerce Website Development',
    'Web Application Development',
    'Responsive Website Development',
  ],

  description:
    'Leading Web Development Company in JP Nagar offering fast, scalable and high-performance websites and web applications for startups, SMEs and enterprises.',

  url: `${SITE.url}/web-development-company-jp-nagar`,

  offers: [
    {
      '@type': 'Offer',
      name: 'Business Website Development JP Nagar — Starter',
      price: '25000',
      priceCurrency: 'INR',
      description:
        'Professional website development with responsive design, fast loading speed and scalable architecture.',
    },
    {
      '@type': 'Offer',
      name: 'Custom Web Development JP Nagar',
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
      name: 'Web Development Company in JP Nagar',
      item: `${SITE.url}/web-development-company-jp-nagar`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best web development company in JP Nagar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Digital is a trusted web development company in JP Nagar specializing in scalable websites, web applications and performance-driven solutions.',
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
      name: 'What is the cost of web development in JP Nagar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Web development in JP Nagar typically starts from ₹25,000 and varies based on features and complexity.',
      },
    },
  ],
}


const data = {
  badge: 'Web Development Company · JP Nagar',

  h1: 'Web Development Company',
  h1Accent: 'in JP Nagar',

  heroImage: '/assets/images3.png',

  tagline:
    'Top Web Development Company in JP Nagar building fast, scalable and high-performance websites and web applications. As a trusted Web Development Company in JP Nagar, we help startups, SMEs and enterprises grow online.',

  stat1: '565+',
  stat1Label: 'Projects Delivered',

  serviceName: 'web development company in JP Nagar',

  h2Features: 'Web Development Company in JP Nagar',

  featuresSubText:
    'Our Web Development Company in JP Nagar focuses on building scalable, secure and high-performance websites and web applications. As a leading Web Development Company in JP Nagar, we use modern technologies to deliver reliable digital solutions for businesses in JP Nagar and nearby areas.',

  features: [
    {
      h3: 'Custom Website Development JP Nagar',
      desc: 'As a Web Development Company in JP Nagar, we build custom websites tailored to your business goals, user journey and scalability requirements.',
    },
    {
      h3: 'Corporate Website Development JP Nagar',
      desc: 'Professional corporate websites with strong architecture, performance optimization and enterprise-level security.',
    },
    {
      h3: 'Business Website Development JP Nagar',
      desc: 'Conversion-focused business websites designed to generate leads and drive measurable growth.',
    },
    {
      h3: 'Full Stack Development JP Nagar',
      desc: 'Our Web Development Company in JP Nagar provides end-to-end development including frontend, backend, APIs and database integration.',
    },
    {
      h3: 'Responsive Website Development JP Nagar',
      desc: 'Mobile-first websites that perform seamlessly across all devices and screen sizes.',
    },
    {
      h3: 'Ecommerce Website Development JP Nagar',
      desc: 'Scalable ecommerce platforms with secure payment integration, product management and optimized user experience.',
    },
    {
      h3: 'Web Application Development JP Nagar',
      desc: 'We are a Web Development Company in JP Nagar delivering advanced web applications with dashboards, authentication systems and real-time functionality.',
    },
    {
      h3: 'Website Maintenance & Support JP Nagar',
      desc: 'Ongoing maintenance, updates and performance optimization to keep your website secure, fast and up-to-date.',
    },
    {
      h3: 'Hire Web Developers JP Nagar',
      desc: 'Hire experienced web developers in JP Nagar skilled in modern frameworks, APIs and scalable architecture.',
    },
  ],

  h2Why: 'Why Choose Our Web Development Company in JP Nagar?',

  why: [
    {
      n: '01',
      h3: 'Trusted Web Development Company in JP Nagar',
      body: 'We are a trusted Web Development Company in JP Nagar delivering scalable, secure and high-performance websites tailored to business growth.',
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

  h2Faq: 'Web Development Company in JP Nagar — Frequently Asked Questions',

  faqs: [
    {
      q: 'Which is the best web development company in JP Nagar?',
      a: 'NNC is a trusted Web Development Company in JP Nagar specializing in scalable websites, web applications and performance-driven solutions.',
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
      q: 'What is the cost of web development in JP Nagar?',
      a: 'Web development in JP Nagar starts from ₹25,000 and varies based on features and complexity.',
    },
  ],
}

export default function WebDevelopmentCompanyJpnagarBangalorePage() {
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
        accent: 'in JP Nagar',
        description:
            'Leading Web Development Company in JP Nagar building fast, scalable and high-performance websites and web applications for startups, SMEs and enterprises.',
        }}

        cta={{
        title: 'Partner with the Best',
        highlight: 'Web Development Company in JP Nagar',
        description:
            'Looking for a reliable Web Development Company in JP Nagar? We build scalable, secure and high-performance websites tailored for startups, SMEs and growing businesses.',
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
