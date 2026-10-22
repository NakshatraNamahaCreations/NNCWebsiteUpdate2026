import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Website Designing Company in Jayanagar | Creative Web Design',
  description:
    'Choose a website designing company in Jayanagar to create modern and responsive websites, with NNC delivering creative designs that enhance your brand presence.',
  alternates: {
    canonical: `${SITE.url}/website-designing-company-in-jayanagar`,
  },
  keywords:
    'website designing company in jayanagar, website design company jayanagar, web design jayanagar bangalore, website designers jayanagar, custom website design jayanagar, creative web design jayanagar',
  openGraph: {
    title: 'Website Designing Company in Jayanagar | Creative Web Design',
    description:
      'Choose a website designing company in Jayanagar to create modern and responsive websites, with NNC delivering creative designs that enhance your brand presence.',
    url: `${SITE.url}/website-designing-company-in-jayanagar`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Website Designing Company in Jayanagar – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Website Designing Company in Jayanagar | Creative Web Design',
    description:
      'Choose a website designing company in Jayanagar to create modern and responsive websites, with NNC delivering creative designs that enhance your brand presence.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Website Designing Company in Jayanagar',
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
    { '@type': 'City', name: 'Jayanagar' },
    { '@type': 'City', name: 'Bangalore' },
    { '@type': 'City', name: 'JP Nagar' },
    { '@type': 'City', name: 'Banashankari' },
    { '@type': 'City', name: 'Whitefield' },
  ],
  serviceType: [
    'Website Design',
    'Web Design',
    'Custom Website Design',
    'Corporate Website Design',
    'UI UX Design',
    'Responsive Web Design',
    'Creative Web Design',
  ],
  description:
    'Website designing company serving Jayanagar, Bangalore — creative web design, custom website design, corporate website design, UI/UX design and responsive website design for Jayanagar businesses.',
  url: `${SITE.url}/website-designing-company-in-jayanagar`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Business Website Design Jayanagar',
      price: '25000',
      priceCurrency: 'INR',
      description: 'Professional business website design — up to 10 pages, responsive design, CMS, contact forms and basic SEO setup.',
    },
    {
      '@type': 'Offer',
      name: 'Custom Website Design Jayanagar',
      price: '60000',
      priceCurrency: 'INR',
      description: 'Custom website design with React JS or Next JS — bespoke UI/UX design, advanced functionality and performance optimisation.',
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
      name: 'Website Designing Company in Jayanagar',
      item: `${SITE.url}/website-designing-company-in-jayanagar`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best website designing company in Jayanagar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Digital is a top-rated website designing company serving Jayanagar, Bangalore — 565+ projects delivered, 4.9★ Google rating, headquartered in Whitefield, Bangalore. We create modern, responsive and creative website designs for Jayanagar businesses.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide website designing services in Jayanagar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides full website designing services for Jayanagar businesses — custom website design, corporate website design, UI/UX design, responsive design, landing page design, e-commerce design and brand-aligned creative web design.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you create custom website designs for Jayanagar businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC creates custom website designs for Jayanagar businesses — UX research, wireframing, Figma UI design and pixel-perfect front-end development. Every design is tailored to your brand and conversion goals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you design responsive websites for Jayanagar businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every website NNC designs is fully responsive — mobile-first design tested across all devices with Core Web Vitals optimisation for Google ranking.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does website designing cost in Jayanagar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Business website design in Jayanagar starts from ₹25,000. Custom UI/UX design with React JS or Next JS starts from ₹60,000. All fixed-price — no hourly billing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you also develop the website after designing it for Jayanagar clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC handles both design and development — from Figma UI design to React JS/Next JS development and deployment. Jayanagar clients get a single team managing design, development, testing and launch.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can Jayanagar businesses contact NNC for website designing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jayanagar businesses can contact NNC Digital at our Bangalore office — Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit us to review design references, approve wireframes and meet the design team.',
      },
    },
  ],
}

const data = {
  badge: 'Website Designing · Jayanagar',
  h1: 'Website Designing Company',
  h1Accent: 'in Jayanagar',
  tagline:
    'Website designing company in Jayanagar — creative web design, custom website design, corporate website design, UI UX design and responsive website design. Fixed price.',
  desc:
    'NNC Digital is a full-service website designing company serving Jayanagar, Bangalore — creating modern, responsive and brand-aligned websites for startups, SMEs and enterprises. From UX research and wireframing to Figma UI design and pixel-perfect development, every website design is handled by our in-house Bangalore creative team with zero outsourcing and fixed-price projects.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'website designing in Jayanagar',
  h2Features: 'Website Designing Services for Jayanagar Businesses',
  features: [
    {
      h3: 'Custom Website Design Jayanagar',
      desc: 'Custom website design for Jayanagar businesses — UX research, wireframing, Figma UI design and pixel-perfect development. Every design tailored to your brand identity and business goals.',
    },
    {
      h3: 'Corporate Website Design Jayanagar',
      desc: 'Corporate website design for Jayanagar companies — professional multi-page layouts with service pages, team profiles, case studies and contact forms. Designed to build credibility and generate enquiries.',
    },
    {
      h3: 'Business Website Design Jayanagar',
      desc: 'Business website design for Jayanagar SMEs and startups — clean, conversion-focused layouts with strong calls-to-action, fast load times and mobile-first responsive design.',
    },
    {
      h3: 'UI UX Design Jayanagar',
      desc: 'UI/UX design for Jayanagar businesses — user journey mapping, wireframes, interactive Figma prototypes and design handoff for web and mobile applications. Design that converts visitors into customers.',
    },
    {
      h3: 'Responsive Website Design Jayanagar',
      desc: 'Fully responsive website design for Jayanagar — mobile-first layouts tested across all screen sizes with Core Web Vitals optimisation and Google-friendly performance scores.',
    },
    {
      h3: 'E-commerce Website Design Jayanagar',
      desc: 'E-commerce website design for Jayanagar businesses — product catalogue layouts, cart and checkout design, payment gateway UI and admin dashboard design for online stores.',
    },
    {
      h3: 'Landing Page Design Jayanagar',
      desc: 'High-converting landing page design for Jayanagar businesses — campaign-specific layouts, lead capture forms, trust signals and fast-loading design for Google Ads and SEO traffic.',
    },
    {
      h3: 'React JS & Next JS Website Design Jayanagar',
      desc: 'Modern website design built on React JS or Next JS for Jayanagar businesses — fast, SEO-friendly and component-based design that outperforms WordPress and template-based builds.',
    },
    {
      h3: 'Website Redesign Jayanagar',
      desc: 'Website redesign for Jayanagar businesses — audit of existing site, UX improvements, modern visual refresh and performance optimisation. Keep your content, upgrade your design and performance.',
    },
  ],
  h2Why: 'Why Choose NNC as Your Website Designing Company in Jayanagar?',
  why: [
    {
      n: '01',
      h3: 'Bangalore-based — serving Jayanagar businesses',
      body: 'NNC is headquartered in Whitefield, Bangalore — easily accessible for Jayanagar clients. Visit us to review design concepts, approve wireframes and meet the designers working on your website.',
    },
    {
      n: '02',
      h3: 'In-house design team — zero outsourcing',
      body: 'Every UI/UX designer, graphic designer and front-end developer is a full-time NNC employee in Bangalore. Consistent creative team from brief to final delivery.',
    },
    {
      n: '03',
      h3: 'Strategy-led design — not just aesthetics',
      body: 'NNC starts every website design with UX strategy. Understanding your audience, competitors and conversion goals before opening Figma. Design that performs commercially, not just visually.',
    },
    {
      n: '04',
      h3: 'Design and development under one roof',
      body: 'NNC handles both design and development — Figma UI design to React JS/Next JS build. No handoff gaps, no lost design fidelity. What you approve in Figma is what launches on the web.',
    },
    {
      n: '05',
      h3: 'Fixed price — fully scoped before design starts',
      body: 'Every design project is scoped and priced upfront — number of pages, screens, revision rounds and deliverables. No hourly billing, no surprise charges.',
    },
    {
      n: '06',
      h3: '565+ projects — 4.9★ Google rating',
      body: 'NNC has designed websites for startups, ecommerce brands, corporates and healthcare companies across Bangalore. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['Figma', 'React JS', 'Next JS', 'Tailwind CSS', 'Adobe XD', 'Adobe Illustrator', 'Photoshop', 'Framer'],
  h2Tech: 'Website Design Tools & Technology',
  h2Faq: 'Website Designing Company Jayanagar — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best website designing company in Jayanagar?',
      a: 'NNC Digital — 565+ projects, 4.9★ Google rating, Bangalore-based. Creative web design, UI/UX, responsive design — all in-house for Jayanagar businesses.',
    },
    {
      q: 'Do you create custom website designs for Jayanagar businesses?',
      a: 'Yes. NNC creates custom website designs — UX research, wireframes, Figma UI design and pixel-perfect development tailored to your brand.',
    },
    {
      q: 'Do you design responsive websites for Jayanagar?',
      a: 'Yes. Every website NNC designs is fully responsive — mobile-first, tested across all devices with Core Web Vitals optimisation.',
    },
    {
      q: 'Do you handle both design and development for Jayanagar clients?',
      a: 'Yes. NNC handles design and development under one roof — Figma to React JS/Next JS build with no handoff gaps.',
    },
    {
      q: 'How much does website designing cost in Jayanagar?',
      a: 'Business website design starts from ₹25,000. Custom UI/UX design starts from ₹60,000. All fixed-price.',
    },
    {
      q: 'How can Jayanagar businesses contact NNC?',
      a: 'Visit NNC at Prestige Shantiniketan, Whitefield, Bangalore 560048, or call/WhatsApp us to discuss your design project.',
    },
  ],
}

export default function WebsiteDesigningJayanagarPage() {
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
