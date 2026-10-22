import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Website Design Company in Bangalore for Business Growth',

  description:
    'Get modern, high-converting website designs. Choose a trusted Website Design Company in Bangalore for responsive and engaging digital experiences.',

  alternates: {
    canonical: `${SITE.url}/website-design-company-in-bangalore`,
  },

  keywords:
    'website design company in bangalore, web design company in bangalore, website designers in bangalore, UI UX design company bangalore, responsive website design bangalore, business website design bangalore, corporate website design bangalore, professional website design bangalore, affordable website design bangalore, landing page design bangalore, website redesign services bangalore, creative web design agency bangalore, hire website designers bangalore',

  openGraph: {
    title: 'Website Design Company in Bangalore for Business Growth',
    description:
      'Get modern, high-converting website designs that drive leads and engagement. Choose a trusted Website Design Company in Bangalore for creative and responsive digital experiences.',
    url: `${SITE.url}/website-design-company-in-bangalore`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Website Design Company in Bangalore – NNC Digital',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Website Design Company in Bangalore for Business Growth',
    description:
      'Get modern, high-converting website designs that drive leads and engagement. Choose a trusted Website Design Company in Bangalore for creative and responsive digital experiences.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',

  name: 'Website Design Company in Bangalore',

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
    'UI/UX Design',
    'Responsive Website Design',
    'Corporate Website Design',
    'Business Website Design',
    'Landing Page Design',
    'Website Redesign',
  ],

  description:
    'Leading Website Design Company in Bangalore offering UI/UX design, responsive website design, corporate website design and high-converting digital experiences for startups, SMEs and enterprises.',

  url: `${SITE.url}/website-design-company-in-bangalore`,

  offers: [
    {
      '@type': 'Offer',
      name: 'Business Website Design Bangalore — Starter',
      price: '20000',
      priceCurrency: 'INR',
      description:
        'Professional website design — up to 10 pages, responsive layouts, UI/UX design, and conversion-focused structure.',
    },
    {
      '@type': 'Offer',
      name: 'Custom Website Design Bangalore',
      price: '50000',
      priceCurrency: 'INR',
      description:
        'Custom website design with modern UI/UX, branding, interactive elements and high-performance layouts.',
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
      name: 'Website Design Company in Bangalore',
      item: `${SITE.url}/website-design-company-in-bangalore`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best Website Design Company in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Digital is a leading Website Design Company in Bangalore specializing in UI/UX design, responsive website design and modern digital experiences for businesses across industries.',
      },
    },
    {
      '@type': 'Question',
      name: 'What website design services do you provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide website design services including UI/UX design, responsive website design, corporate website design, landing pages and website redesign solutions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you create responsive website designs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all our websites are mobile-first and responsive, ensuring seamless performance across all devices.',
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
      name: 'What is the cost of website design in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Website design costs in Bangalore start from ₹20,000 and vary depending on design complexity, features and project requirements.',
      },
    },
  ],
}

const data = {
  badge: 'Website Design · Bangalore',

  h1: 'Website Design Company',
  h1Accent: 'in Bangalore',
  heroImage: '/assets/images3.png',

  tagline:
    'Leading Website Design Company in Bangalore offering UI/UX design, responsive website design, landing pages and high-converting digital experiences for startups, SMEs and enterprises.',

  stat1: '565+',
  stat1Label: 'Projects Delivered',

  serviceName: 'website design in Bangalore',

  h2Features: 'Website Design Company in Bangalore — Services',

  featuresSubText:
    'As a leading Website Design Company in Bangalore, every project from NNC includes creative UI/UX design, modern layouts and conversion-focused website experiences delivered by in-house experts.',

  features: [
    {
      h3: 'Custom Website Design Bangalore',
      desc: 'As a Website Design Company in Bangalore, we create visually stunning and user-friendly website designs tailored to your brand identity.',
    },
    {
      h3: 'Corporate Website Design Bangalore',
      desc: 'We design professional corporate websites with modern layouts, branding consistency and strong user experience.',
    },
    {
      h3: 'Business Website Design Bangalore',
      desc: 'We build conversion-focused business website designs with clear structure, UI clarity and strong call-to-actions.',
    },
    {
      h3: 'UI/UX Design Company Bangalore',
      desc: 'Our Website Design Company in Bangalore specializes in UI/UX design with wireframes, user journeys and interactive prototypes.',
    },
    {
      h3: 'Responsive Website Design Bangalore',
      desc: 'We design mobile-first responsive websites that work seamlessly across all devices and screen sizes.',
    },
    {
      h3: 'Landing Page Design Bangalore',
      desc: 'High-converting landing page designs focused on leads, sales and user engagement.',
    },
    {
      h3: 'Website Redesign Services Bangalore',
      desc: 'We redesign outdated websites into modern, fast and user-friendly digital experiences.',
    },
    {
      h3: 'Affordable Website Design Bangalore',
      desc: 'Our Website Design Company in Bangalore offers cost-effective solutions for startups and SMEs with high-quality UI design.',
    },
    {
      h3: 'Hire Website Designers Bangalore',
      desc: 'Hire expert website designers in Bangalore skilled in UI/UX, Figma and modern design systems.',
    },
  ],

  h2Why: 'Why Choose NNC as Your Website Design Company in Bangalore?',

  why: [
  {
    n: '01',
    h3: 'Trusted Website Design Company in Bangalore',
    body: 'Work with a reliable Website Design Company in Bangalore focused on modern UI/UX design and high-converting website experiences.',
  },
  {
    n: '02',
    h3: 'In-house design team',
    body: 'Our Website Design Company in Bangalore ensures no outsourcing and delivers consistent design quality from concept to final delivery.',
  },
  {
    n: '03',
    h3: 'Modern design approach',
    body: 'As a Website Design Company in Bangalore, we use the latest UI/UX trends, tools and design systems for better user experience.',
  },
  {
    n: '04',
    h3: 'Conversion-focused layouts',
    body: 'Our Website Design Company in Bangalore creates websites that not only look good but also convert visitors into leads.',
  },
  {
    n: '05',
    h3: 'Full ownership',
    body: 'With our Website Design Company in Bangalore, you get complete design files and ownership without any lock-in.',
  },
  {
    n: '06',
    h3: 'Proven experience',
    body: 'Our Website Design Company in Bangalore has delivered 565+ successful projects across industries with strong client satisfaction.',
  },

  ],

  techStack: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'HTML', 'CSS', 'Tailwind CSS'],

  h2Tech: 'Website Design Tools & Technologies',

  h2Faq: 'Website Design Company in Bangalore — Frequently Asked Questions',

  faqs: [
    {
      q: 'Which is the best Website Design Company in Bangalore?',
      a: 'NNC Digital is a leading Website Design Company in Bangalore specializing in UI/UX design, responsive websites and modern digital experiences.',
    },
    {
      q: 'Why choose a Website Design Company in Bangalore?',
      a: 'Choosing a Website Design Company in Bangalore ensures better design quality, local collaboration and user-focused digital experiences.',
    },
    {
      q: 'Do you design custom websites?',
      a: 'Yes, we create custom website designs tailored to your business goals and brand identity.',
    },
    {
      q: 'Do you provide website redesign services?',
      a: 'Yes, we redesign outdated websites into modern, high-performing and visually appealing designs.',
    },
    {
      q: 'How long does website design take?',
      a: 'Website design typically takes 1–3 weeks depending on complexity and requirements.',
    },
    {
      q: 'What tools do you use for design?',
      a: 'We use tools like Figma, Adobe XD, Photoshop and modern UI frameworks for designing websites.',
    },
    {
      q: 'Do you design mobile-friendly websites?',
      a: 'Yes, all our designs are responsive and optimized for mobile, tablet and desktop devices.',
    },
  ],
}


export default function WebsiteDesignCompanyBangalorePage() {
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
