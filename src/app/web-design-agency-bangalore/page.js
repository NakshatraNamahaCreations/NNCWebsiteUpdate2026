import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'
import PremiumCTA from '@/components/PremiumCTA'

export const metadata = {
  title: 'Web Design Agency Bangalore for Modern Business Websites',

  description:
    'Top web design agency Bangalore offering modern UI/UX, responsive layouts and high-converting websites for startups, SMEs and businesses.',

  alternates: {
    canonical: `${SITE.url}/web-design-agency-bangalore`,
  },

  keywords:
    'web design agency bangalore, website design agency bangalore, UI UX design agency bangalore, responsive web design bangalore, creative web design agency bangalore',

  openGraph: {
    title: 'Web Design Agency Bangalore for Modern Business Websites',
    description:
      'Work with a leading web design agency Bangalore to build responsive, user-focused and high-converting websites.',
    url: `${SITE.url}/web-design-agency-bangalore`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Web Design Agency Bangalore – NNC Digital',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Web Design Agency Bangalore for Modern Business Websites',
    description:
      'Professional web design agency Bangalore delivering UI/UX-driven and conversion-focused websites.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',

  name: 'Web Design Agency Bangalore',

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
    'Web Design Agency',
    'UI/UX Design',
    'Responsive Website Design',
    'Corporate Website Design',
    'Business Website Design',
    'Landing Page Design',
    'Website Redesign',
  ],

  description:
    'Leading web design agency Bangalore offering modern UI/UX design, responsive websites, corporate websites and high-converting digital experiences for businesses.',

  url: `${SITE.url}/web-design-agency-bangalore`,

  offers: [
    {
      '@type': 'Offer',
      name: 'Business Website Design Bangalore — Starter',
      price: '20000',
      priceCurrency: 'INR',
      description:
        'Professional web design services with responsive layouts, UI/UX design and conversion-focused structure for businesses.',
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
      name: 'Web Design',
      item: `${SITE.url}/website-design`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Web Design Agency Bangalore',
      item: `${SITE.url}/web-design-agency-bangalore`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',

  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best web design agency Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Digital is a leading web design agency Bangalore specializing in UI/UX design, responsive websites and modern digital experiences.',
      },
    },
    {
      '@type': 'Question',
      name: 'What services does a web design agency Bangalore provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A web design agency Bangalore provides UI/UX design, responsive website design, landing pages and website redesign services.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you create responsive websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all websites are mobile-first and fully responsive across all devices.',
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
      name: 'What is the cost of web design in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Web design costs in Bangalore start from ₹20,000 and vary depending on design complexity and features.',
      },
    },
  ],
}

const data = {
  badge: 'Web Design Agency · Bangalore',

  h1: 'Web Design Agency',
  h1Accent: 'in Bangalore',

  heroImage: '/assets/images3.png',

  tagline:
    'Top Web Design Agency Bangalore delivering modern UI/UX design, responsive websites and high-converting digital experiences for startups, SMEs and enterprises.',

  stat1: '565+',
  stat1Label: 'Projects Delivered',

  serviceName: 'web design agency Bangalore',

  h2Features: 'Web Design Agency Bangalore Services',

  featuresSubText:
    'As a leading Web Design Agency Bangalore, we create visually engaging, user-friendly and conversion-driven websites tailored to your business goals.',

  features: [
    {
      h3: 'Custom Website Design Bangalore',
      desc: 'Creative website design tailored to your brand identity, business goals and target audience.',
    },
    {
      h3: 'Corporate Website Design Bangalore',
      desc: 'Professional corporate websites with strong branding, structured layouts and seamless user experience.',
    },
    {
      h3: 'Business Website Design Bangalore',
      desc: 'Conversion-focused websites designed to generate leads and support business growth.',
    },
    {
      h3: 'UI/UX Design Services Bangalore',
      desc: 'Modern UI/UX design with user journeys, wireframes and interactive prototypes.',
    },
    {
      h3: 'Responsive Website Design Bangalore',
      desc: 'Mobile-first responsive websites optimized for all devices and screen sizes.',
    },
    {
      h3: 'Landing Page Design Bangalore',
      desc: 'High-converting landing pages built for marketing campaigns and lead generation.',
    },
    {
      h3: 'Website Redesign Bangalore',
      desc: 'Upgrade outdated websites into modern, visually engaging and user-friendly platforms.',
    },
    {
      h3: 'Creative Web Design Solutions',
      desc: 'Innovative and visually appealing designs crafted by our expert Web Design Agency Bangalore team.',
    },
    {
      h3: 'Hire Web Designers Bangalore',
      desc: 'Work with experienced designers from our Web Design Agency Bangalore skilled in UI/UX and modern design systems.',
    },
  ],

  h2Why: 'Why Choose Our Web Design Agency Bangalore?',

  why: [
    {
      n: '01',
      h3: 'Trusted Web Design Agency',
      body: 'We are a trusted Web Design Agency Bangalore delivering modern, user-focused and high-performing websites.',
    },
    {
      n: '02',
      h3: 'In-house Design Experts',
      body: 'Our Web Design Agency Bangalore team works in-house ensuring quality, consistency and faster delivery.',
    },
    {
      n: '03',
      h3: 'Modern UI/UX Approach',
      body: 'We use the latest design trends and UX strategies to create engaging digital experiences.',
    },
    {
      n: '04',
      h3: 'Conversion-Focused Designs',
      body: 'Our Web Design Agency Bangalore builds websites designed to convert visitors into leads and customers.',
    },
    {
      n: '05',
      h3: 'Full Ownership & Transparency',
      body: 'You get complete ownership and control over your website.',
    },
    {
      n: '06',
      h3: 'Proven Experience',
      body: 'Our Web Design Agency Bangalore has delivered 565+ successful projects across industries.',
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

  h2Tech: 'Web Design Tools & Technologies',

  h2Faq: 'Web Design Agency Bangalore — Frequently Asked Questions',

  faqs: [
    {
      q: 'Which is the best web design agency Bangalore?',
      a: 'NNC is a leading Web Design Agency Bangalore specializing in UI/UX design and responsive websites.',
    },
    {
      q: 'Why choose a web design agency in Bangalore?',
      a: 'A Web Design Agency Bangalore provides creative design, better communication and user-focused website experiences.',
    },
    {
      q: 'Do you offer custom website design?',
      a: 'Yes, our Web Design Agency Bangalore creates custom designs tailored to your brand and business goals.',
    },
    {
      q: 'Do you redesign websites?',
      a: 'Yes, we upgrade outdated websites into modern and high-performing designs.',
    },
    {
      q: 'How long does website design take?',
      a: 'Projects handled by our Web Design Agency Bangalore typically take 1–3 weeks depending on complexity.',
    },
    {
      q: 'What tools do you use?',
      a: 'We use Figma, Adobe XD, Photoshop and modern UI/UX tools.',
    },
    {
      q: 'Are your websites mobile-friendly?',
      a: 'Yes, all websites created by our Web Design Agency Bangalore are fully responsive.',
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
            title: 'Web Design Agency',
            accent: 'in Bangalore',
            description:
            'Leading web design agency Bangalore offering modern UI/UX design, responsive websites and high-converting digital experiences for startups, SMEs and enterprises.',
        }}

        cta={{
            title: 'Partner with the Best',
            highlight: 'Web Design Agency Bangalore',
            description:
            'Looking for a trusted web design agency Bangalore? We create UI/UX-driven, responsive and conversion-focused websites that help your business grow online.',
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
