import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Web Development Company in Bangalore for Business Growth',

  description:
    'Get high performance web solutions that drive leads and sales. Choose a trusted web development company in Bangalore for scalable digital growth.',

  alternates: {
    canonical: `${SITE.url}/web-development-company-in-bangalore`,
  },

  keywords:
    'web development company in bangalore, website development company in bangalore, web development services bangalore, website design company in bangalore, web developers in bangalore, best web development company bangalore, custom web development bangalore, corporate web development bangalore, business website development bangalore, react js development company bangalore, next js development company bangalore, web design agency bangalore, hire web developers bangalore',

  openGraph: {
    title: 'Web Development Company in Bangalore for Business Growth',
    description:
      'Get high performance web solutions that drive leads and sales. Choose a trusted web development company in Bangalore for scalable digital growth.',
    url: `${SITE.url}/web-development-company-in-bangalore`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Web Development Company in Bangalore – NNC Digital',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Web Development Company in Bangalore for Business Growth',
    description:
      'Get high performance web solutions that drive leads and sales. Choose a trusted web development company in Bangalore for scalable digital growth.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',

  name: 'Web Development Company in Bangalore',

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
    'Web Development',
    'Website Development',
    'Website Design',
    'Custom Web Development',
    'Corporate Web Development',
    'React JS Development',
    'Next JS Development',
    'Responsive Web Design',
  ],

  description:
    'Leading Web Development Company in Bangalore offering custom web development, website development, corporate solutions, React JS, Next JS and scalable web applications for startups, SMEs and enterprises.',

  url: `${SITE.url}/web-development-company-in-bangalore`,

  offers: [
    {
      '@type': 'Offer',
      name: 'Business Website Bangalore — Starter',
      price: '25000',
      priceCurrency: 'INR',
      description:
        'Professional business website — up to 10 pages, responsive design, CMS, contact forms and basic SEO setup.',
    },
    {
      '@type': 'Offer',
      name: 'Custom Web Development Bangalore',
      price: '60000',
      priceCurrency: 'INR',
      description:
        'Custom web application with React JS or Next JS — advanced functionality, CMS integration and performance optimisation.',
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
      name: 'Web Development Company in Bangalore',
      item: `${SITE.url}/web-development-company-in-bangalore`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best Web Development Company in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is one of the top-rated web development companies in Bangalore with 565+ projects delivered and a 4.9★ Google rating. We build custom web applications, corporate websites, React JS and Next JS solutions, and scalable digital platforms for businesses across industries.",
      },
    },
    {
      '@type': 'Question',
      name: 'What web development services does NNC provide in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC provides complete web development services in Bangalore including custom web development, website development, corporate website solutions, React JS and Next JS development, responsive web design, CMS development, landing pages and ongoing maintenance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build React JS and Next JS web applications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC is a React JS and Next JS web development company in Bangalore building fast, scalable and SEO-friendly applications using SSR, SSG and modern architecture. Ideal for SaaS platforms, dashboards and enterprise solutions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build corporate and business websites in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We build corporate and business websites including service pages, team sections, blogs, and lead-generation pages. All websites are designed to reflect your brand and convert visitors into enquiries.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer responsive web development in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every web solution we build is fully responsive, mobile-first and optimized for performance across all devices with strong Core Web Vitals scores.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of web development in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Web development costs in Bangalore start from ₹25,000 for business websites. Custom web applications using React JS or Next JS start from ₹60,000 depending on features and complexity.',
      },
    },
  ],
}

const data = {
  badge: 'Web Development · Bangalore',

  h1: 'Web Development Company',
  h1Accent: 'in Bangalore',
  heroImage: '/assets/images2.png',

  tagline:
    'Leading Web Development Company in Bangalore offering custom web development, website development, corporate solutions, React JS, Next JS and scalable digital platforms for startups, SMEs and enterprises.',

  stat1: '565+',
  stat1Label: 'Projects Delivered',

  serviceName: 'web development in Bangalore',

  // ✅ UPDATED HEADING
  h2Features: 'Web Development Company in Bangalore — Services',

  // ✅ ADD THIS (for right-side text)
  featuresSubText:
    'As a leading Web Development Company in Bangalore, every project from NNC includes capabilities delivered by permanent in-house specialists with no outsourcing and no compromises.',

    features: [
  {
    h3: 'Custom Web Development Bangalore',
    desc: 'As a Web Development Company in Bangalore, we build custom web solutions tailored to your business — scalable architecture and performance-driven development.',
  },
  {
    h3: 'Corporate Website Development Bangalore',
    desc: 'As a trusted Web Development Company in Bangalore, we create professional corporate websites with service pages, case studies and lead generation funnels designed for business growth.',
  },
  {
    h3: 'Business Website Design Bangalore',
    desc: 'We design conversion-focused business websites with modern UI, strong CTAs and mobile-first responsive layouts.',
  },
  {
    h3: 'React JS Development Company Bangalore',
    desc: 'We build fast, scalable React JS applications ideal for dashboards, portals and SaaS platforms.',
  },
  {
    h3: 'Next JS Development Company Bangalore',
    desc: 'Our Web Development Company in Bangalore delivers SEO-friendly Next JS applications with SSR and high-performance architecture.',
  },
  {
    h3: 'Responsive Web Development Bangalore',
    desc: 'We deliver mobile-first websites optimized for speed, usability and performance across all devices.',
  },
  {
    h3: 'Website Design Services Bangalore',
    desc: 'We provide UI/UX design, wireframes, Figma design and frontend development services.',
  },
  {
    h3: 'Affordable Web Development Bangalore',
    desc: 'Our Web Development Company in Bangalore offers cost-effective solutions for startups and SMEs with fixed pricing.',
  },
  {
    h3: 'Hire Web Developers Bangalore',
    desc: 'Hire expert developers from a Web Development Company in Bangalore skilled in React, Next, Node and full-stack development.',
  },
    ],

  h2Why: 'Why Choose NNC as Your Web Development Company in Bangalore?',

    why: [
    {
        n: '01',
        h3: 'Trusted Web Development Company in Bangalore',
        body: 'Work with a reliable team based in Bangalore for faster communication and better execution.',
    },
    {
        n: '02',
        h3: 'In-house development',
        body: 'We ensure no outsourcing and consistent quality from start to finish.',
    },
    {
        n: '03',
        h3: 'Modern tech stack',
        body: 'Our Web Development Company in Bangalore uses React JS, Next JS and modern frameworks for scalability.',
    },
    {
        n: '04',
        h3: 'Transparent pricing',
        body: 'Fixed pricing with clear deliverables — no hidden costs or surprises.',
    },
    {
        n: '05',
        h3: 'Full ownership',
        body: 'You get complete source code and design ownership without any lock-in.',
    },
    {
        n: '06',
        h3: 'Proven experience',
        body: 'Our Web Development Company in Bangalore has delivered 565+ successful projects across industries.',
    },
    ],

  techStack: ['React JS', 'Next JS', 'Node JS', 'Tailwind CSS', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Figma'],

  h2Tech: 'Web Development Technology Stack',

  h2Faq: 'Web Development Company in Bangalore — Frequently Asked Questions',

  faqs: [
    {
      q: 'Which is the best Web Development Company in Bangalore?',
      a: 'NNC Digital is a leading Web Development Company in Bangalore with expertise in custom web solutions, React JS and Next JS applications.',
    },
    {
      q: 'Why choose a Web Development Company in Bangalore?',
      a: 'Choosing a Web Development Company in Bangalore ensures better communication, scalability and high-quality digital solutions.',
    },
    {
      q: 'Do you build custom web applications?',
      a: 'Yes, as a Web Development Company in Bangalore, we build scalable custom web applications tailored to your business requirements.',
    },
    {
      q: 'Do you provide ongoing support?',
      a: 'Yes, our Web Development Company in Bangalore offers maintenance, updates and performance optimization services.',
    },
    {
      q: 'How long does it take to develop a website?',
      a: 'The timeline depends on the project scope. A Web Development Company in Bangalore typically takes 2–4 weeks for business websites.',
    },
    {
      q: 'What technologies do you use for web development?',
      a: 'Our Web Development Company in Bangalore uses React JS, Next JS, Node JS, Tailwind CSS and modern backend technologies.',
    },
    {
      q: 'Do you provide SEO-friendly web development?',
      a: 'Yes, our Web Development Company in Bangalore builds SEO-friendly websites with fast loading speed and mobile responsiveness.',
    },
  ],
}


export default function WebsiteDevelopmentCompanyBangalorePage() {
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
