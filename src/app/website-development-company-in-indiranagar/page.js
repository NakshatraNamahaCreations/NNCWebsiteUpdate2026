import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Website Development Company in Indiranagar | Digital Website',
  description:
    'Choose a website development company in Indiranagar to build fast and scalable websites, with NNC delivering modern design and business focused solutions.',
  alternates: {
    canonical: `${SITE.url}/website-development-company-in-indiranagar`,
  },
  keywords:
    'website development company in indiranagar, web development company indiranagar, website design indiranagar bangalore, website developers indiranagar, custom website development indiranagar, business website design indiranagar',
  openGraph: {
    title: 'Website Development Company in Indiranagar | Digital Website',
    description:
      'Choose a website development company in Indiranagar to build fast and scalable websites, with NNC delivering modern design and business focused solutions.',
    url: `${SITE.url}/website-development-company-in-indiranagar`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Website Development Company in Indiranagar – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Website Development Company in Indiranagar | Digital Website',
    description:
      'Choose a website development company in Indiranagar to build fast and scalable websites, with NNC delivering modern design and business focused solutions.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Website Development Company in Indiranagar',
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
    { '@type': 'City', name: 'Indiranagar' },
    { '@type': 'City', name: 'Bangalore' },
    { '@type': 'City', name: 'Koramangala' },
    { '@type': 'City', name: 'HAL' },
    { '@type': 'City', name: 'Whitefield' },
  ],
  serviceType: [
    'Website Development',
    'Web Design',
    'Custom Website Development',
    'Corporate Website Development',
    'React JS Development',
    'Next JS Development',
    'Responsive Web Design',
  ],
  description:
    'Website development company serving Indiranagar, Bangalore — custom websites, corporate website development, React JS, Next JS, responsive web design and business website solutions.',
  url: `${SITE.url}/website-development-company-in-indiranagar`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Business Website for Indiranagar',
      price: '25000',
      priceCurrency: 'INR',
      description: 'Professional business website — up to 10 pages, responsive design, CMS, contact forms and basic SEO setup.',
    },
    {
      '@type': 'Offer',
      name: 'Custom Website Development Indiranagar',
      price: '60000',
      priceCurrency: 'INR',
      description: 'Custom website with React JS or Next JS — bespoke design, advanced functionality, CMS integration and performance optimisation.',
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
      name: 'Website Development Company in Bangalore',
      item: `${SITE.url}/website-development-company-in-bangalore`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Website Development Company in Indiranagar',
      item: `${SITE.url}/website-development-company-in-indiranagar`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best website development company in Indiranagar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Digital is a top-rated website development company serving Indiranagar, Bangalore — 565+ projects delivered, 4.9★ Google rating, headquartered in Whitefield, Bangalore. We build custom websites, corporate websites and React JS/Next JS web applications for Indiranagar businesses.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide website development services in Indiranagar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides full website development services for Indiranagar businesses — custom website design and development, corporate website development, business website design, React JS development, Next JS development and responsive web development.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build custom websites for Indiranagar businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds custom websites for Indiranagar businesses — bespoke design, tailored functionality, CMS integration and performance-optimised build. No templates — every website coded to your exact requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build corporate websites for Indiranagar companies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC builds corporate websites for Indiranagar companies — multi-page corporate sites with service pages, team profiles, blog sections, contact forms and SEO-ready structure.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does website development cost in Indiranagar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A professional business website for Indiranagar businesses starts from ₹25,000. Custom React JS or Next JS websites start from ₹60,000. All fixed-price — no hourly billing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer responsive website development for Indiranagar businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every website NNC builds is fully responsive — mobile-first design tested across all devices with Core Web Vitals optimisation for Google ranking.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can Indiranagar businesses contact NNC for website development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Indiranagar businesses can contact NNC Digital at our Bangalore office — Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit us to review wireframes, approve designs and meet the development team.',
      },
    },
  ],
}

const data = {
  badge: 'Website Development · Indiranagar',
  h1: 'Website Development Company',
  h1Accent: 'in Indiranagar',
  tagline:
    'Website development company in Indiranagar — custom website development, corporate website design, business website design, React JS, Next JS and responsive website development. Fixed price.',
  desc:
    'NNC Digital is a full-service website development company serving Indiranagar, Bangalore — building custom websites, corporate websites, React JS and Next JS web applications and responsive business websites for startups, SMEs and enterprises in Indiranagar. Every website is built by our in-house Bangalore web development team with zero outsourcing, fixed-price projects and complete source code ownership.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'website development in Indiranagar',
  h2Features: 'Website Development Services for Indiranagar Businesses',
  features: [
    {
      h3: 'Custom Website Development Indiranagar',
      desc: 'Custom website development for Indiranagar businesses — bespoke design, tailored functionality, CMS integration and performance-optimised build. No templates — every element coded to your exact specifications.',
    },
    {
      h3: 'Corporate Website Development Indiranagar',
      desc: 'Corporate website development for Indiranagar companies — multi-page corporate sites with service pages, team profiles, case studies, blog and contact forms. Built to generate qualified enquiries.',
    },
    {
      h3: 'Business Website Design Indiranagar',
      desc: 'Professional business website design for Indiranagar SMEs and startups — clean, conversion-focused design with strong calls-to-action, fast load times and mobile-first responsive layouts.',
    },
    {
      h3: 'React JS Development Indiranagar',
      desc: 'React JS development for Indiranagar businesses — dynamic single-page applications, interactive dashboards and component-based websites. Fast, scalable and easy to maintain.',
    },
    {
      h3: 'Next JS Development Indiranagar',
      desc: 'Next JS development for Indiranagar — server-side rendering (SSR), static site generation (SSG) for fast, SEO-friendly websites with excellent Core Web Vitals scores.',
    },
    {
      h3: 'Responsive Website Development Indiranagar',
      desc: 'Fully responsive website development for Indiranagar — mobile-first design tested across all screen sizes with Core Web Vitals optimisation and Google-friendly performance scores.',
    },
    {
      h3: 'E-commerce Website Development Indiranagar',
      desc: 'E-commerce website development for Indiranagar businesses — product catalogues, shopping cart, Razorpay/UPI payment integration, order management and admin dashboard.',
    },
    {
      h3: 'Landing Page Development Indiranagar',
      desc: 'High-converting landing page development for Indiranagar businesses — campaign-specific pages, lead capture forms and fast load times for Google Ads and SEO traffic.',
    },
    {
      h3: 'Website Maintenance Indiranagar',
      desc: 'Ongoing website maintenance for Indiranagar businesses — content updates, performance optimisation, security patches and technical support. Monthly retainer plans available.',
    },
  ],
  h2Why: 'Why Choose NNC as Your Website Development Company in Indiranagar?',
  why: [
    {
      n: '01',
      h3: 'Bangalore-based — serving Indiranagar businesses',
      body: 'NNC is headquartered in Whitefield, Bangalore — easily accessible for Indiranagar clients. Visit us to review wireframes, approve designs and meet the development team building your website.',
    },
    {
      n: '02',
      h3: 'In-house team — zero outsourcing',
      body: 'Every designer, developer and project manager is a full-time NNC employee in Bangalore. Consistent team from brief to launch — no freelancers, no offshore outsourcing.',
    },
    {
      n: '03',
      h3: 'React JS & Next JS — modern, fast, SEO-friendly',
      body: 'NNC builds on React JS and Next JS — delivering websites that outperform WordPress and template builds on Core Web Vitals, page speed and Google Search performance.',
    },
    {
      n: '04',
      h3: 'Fixed price — fully scoped before development starts',
      body: 'Every project is scoped in detail and priced upfront. No hourly billing, no scope creep charges. You know the exact cost, timeline and deliverables before development begins.',
    },
    {
      n: '05',
      h3: 'Source code ownership — no lock-in',
      body: 'You own the source code, design files and hosting credentials on delivery. No platform lock-in, no monthly licensing fees.',
    },
    {
      n: '06',
      h3: '565+ projects — 4.9★ Google rating',
      body: 'NNC has built websites for startups, ecommerce brands, corporates and enterprises across Bangalore. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['React JS', 'Next JS', 'Node JS', 'Tailwind CSS', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Figma'],
  h2Tech: 'Website Development Technology Stack',
  h2Faq: 'Website Development Company Indiranagar — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best website development company in Indiranagar?',
      a: 'NNC Digital — 565+ projects, 4.9★ Google rating, Bangalore-based. Custom websites, React JS, Next JS — all built in-house for Indiranagar businesses.',
    },
    {
      q: 'Do you build custom websites for Indiranagar businesses?',
      a: 'Yes. NNC builds custom websites for Indiranagar — bespoke design, CMS integration and performance-optimised build. No templates.',
    },
    {
      q: 'Do you build corporate websites for Indiranagar companies?',
      a: 'Yes. NNC builds corporate websites for Indiranagar — multi-page sites with service pages, team profiles, blog and contact forms.',
    },
    {
      q: 'How much does website development cost in Indiranagar?',
      a: 'Business websites start from ₹25,000. Custom React JS/Next JS websites start from ₹60,000. All fixed-price.',
    },
    {
      q: 'Do you offer responsive website development for Indiranagar?',
      a: 'Yes. Every website is fully responsive — mobile-first, tested across all devices with Core Web Vitals optimisation.',
    },
    {
      q: 'How can Indiranagar businesses contact NNC?',
      a: 'Visit NNC at Prestige Shantiniketan, Whitefield, Bangalore 560048, or call/WhatsApp us to discuss your project.',
    },
  ],
}

export default function WebsiteDevelopmentIndirangarPage() {
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
