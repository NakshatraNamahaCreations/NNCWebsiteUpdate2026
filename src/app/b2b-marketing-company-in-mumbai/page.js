import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'B2B Marketing Company in Mumbai | B2B Digital Marketing',
  description:
    'Choose a B2B marketing company in Mumbai to generate qualified leads and drive growth, with NNC delivering result driven strategies and high ROI campaigns.',
  alternates: {
    canonical: `${SITE.url}/b2b-marketing-company-in-mumbai`,
  },
  keywords:
    'b2b marketing company in mumbai, b2b marketing agency mumbai, b2b digital marketing mumbai, b2b lead generation mumbai, linkedin marketing company mumbai, account based marketing mumbai, enterprise marketing company mumbai, b2b marketing services mumbai',
  openGraph: {
    title: 'B2B Marketing Company in Mumbai | B2B Digital Marketing',
    description:
      'Choose a B2B marketing company in Mumbai to generate qualified leads and drive growth, with NNC delivering result driven strategies and high ROI campaigns.',
    url: `${SITE.url}/b2b-marketing-company-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'B2B Marketing Company in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'B2B Marketing Company in Mumbai | B2B Digital Marketing',
    description:
      'Choose a B2B marketing company in Mumbai to generate qualified leads and drive growth, with NNC delivering result driven strategies and high ROI campaigns.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'B2B Marketing Company in Mumbai',
  provider: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lodha Signet, Kolshet Road, Thane West',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400607',
      addressCountry: 'IN',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Mumbai' },
    { '@type': 'City', name: 'Thane' },
    { '@type': 'City', name: 'Navi Mumbai' },
    { '@type': 'City', name: 'Andheri' },
    { '@type': 'City', name: 'BKC' },
  ],
  serviceType: [
    'B2B Marketing',
    'B2B Digital Marketing',
    'LinkedIn Lead Generation',
    'B2B Lead Generation',
    'Account Based Marketing',
    'Enterprise Marketing',
  ],
  description:
    'B2B marketing company in Mumbai — LinkedIn lead generation, B2B digital marketing, account based marketing, enterprise marketing and high ROI B2B campaigns for Mumbai businesses. Branch office in Thane West.',
  url: `${SITE.url}/b2b-marketing-company-in-mumbai`,
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
      name: 'B2B Marketing Agency Mumbai',
      item: `${SITE.url}/b2b-marketing-agency-in-mumbai`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'B2B Marketing Company in Mumbai',
      item: `${SITE.url}/b2b-marketing-company-in-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best B2B marketing company in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Mumbai's top-rated B2B marketing companies — 565+ projects delivered, 4.9★ Google rating, branch office in Thane West. We deliver result-driven B2B digital marketing, LinkedIn lead generation, account based marketing and high ROI campaigns for Mumbai businesses.",
      },
    },
    {
      '@type': 'Question',
      name: 'What B2B marketing services does NNC provide in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Mumbai provides full B2B marketing services — LinkedIn lead generation, B2B lead generation campaigns, account based marketing (ABM), B2B digital marketing (Google Ads, SEO, content), enterprise marketing strategy and LinkedIn Ads management.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does NNC generate B2B leads for Mumbai businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC uses a multi-channel approach — LinkedIn Ads (Lead Gen Forms, Sponsored Content, Message Ads), Google Search Ads for B2B keywords, SEO for inbound leads and targeted email outreach. Every campaign is measured by cost per qualified lead, not vanity metrics.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer account based marketing (ABM) in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides ABM services for Mumbai enterprise sales teams — target account identification, personalised content, LinkedIn outreach sequences and multi-channel campaigns designed for high-value accounts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide B2B digital marketing in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides full B2B digital marketing for Mumbai businesses — Google Ads for B2B intent keywords, LinkedIn Ads, technical SEO, content marketing and landing page optimisation for lead conversion.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a B2B marketing office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to discuss your B2B marketing strategy, review campaign performance and meet the team managing your accounts.',
      },
    },
  ],
}

const data = {
  badge: 'B2B Marketing · Mumbai',
  h1: 'B2B Marketing Company',
  h1Accent: 'in Mumbai',
  tagline:
    'B2B marketing company in Mumbai — LinkedIn lead generation, B2B digital marketing, account based marketing and high ROI campaigns for Mumbai businesses. Result-driven strategies. Office in Thane West.',
  desc:
    'NNC Digital is a dedicated B2B marketing company in Mumbai helping businesses generate qualified leads from decision-makers across LinkedIn, Google and digital channels. From LinkedIn lead generation and account based marketing (ABM) to B2B digital marketing and enterprise marketing programmes — every campaign is run by our in-house B2B marketing specialists with transparent reporting on leads, pipeline value and cost per acquisition. Visit our branch office in Thane West.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'B2B marketing in Mumbai',
  h2Features: 'B2B Marketing Services in Mumbai',
  features: [
    {
      h3: 'LinkedIn Lead Generation Mumbai',
      desc: 'LinkedIn lead generation for Mumbai B2B companies — Sponsored Content, Message Ads, Lead Gen Forms and connection outreach sequences targeting decision-makers by job title, industry, company size and seniority.',
    },
    {
      h3: 'B2B Lead Generation Mumbai',
      desc: 'Multi-channel B2B lead generation — LinkedIn Ads, Google Search Ads, SEO and email outreach working together to fill your Mumbai sales pipeline with qualified decision-maker leads. Reported by cost per qualified lead.',
    },
    {
      h3: 'Account Based Marketing Mumbai',
      desc: 'ABM for Mumbai enterprise sales teams — target account list building, personalised content and creatives, LinkedIn outreach sequences and multi-channel touchpoints designed for high-value accounts.',
    },
    {
      h3: 'B2B Digital Marketing Mumbai',
      desc: 'Full B2B digital marketing for Mumbai businesses — Google Ads for B2B search intent, technical SEO for B2B keywords, LinkedIn Ads, content marketing and landing page optimisation for lead conversion.',
    },
    {
      h3: 'Enterprise Marketing Mumbai',
      desc: 'Enterprise marketing programmes for large Mumbai businesses — multi-channel campaigns, sales enablement content, lead scoring models, CRM integration and executive-level reporting on pipeline contribution.',
    },
    {
      h3: 'LinkedIn Ads Management Mumbai',
      desc: 'LinkedIn Ads campaign management for Mumbai B2B brands — Sponsored Content, Sponsored InMail, Dynamic Ads and Lead Gen Forms. Audience refinement, A/B testing and weekly performance reporting.',
    },
    {
      h3: 'B2B Content Marketing Mumbai',
      desc: 'B2B content marketing for Mumbai companies — whitepapers, case studies, thought leadership articles, LinkedIn posts and email sequences that build authority with decision-makers and nurture leads through the funnel.',
    },
    {
      h3: 'B2B Google Ads Mumbai',
      desc: 'Google Ads campaigns targeting B2B purchase-intent keywords for Mumbai businesses — Search, Display and Performance Max campaigns with dedicated B2B landing pages and lead form tracking.',
    },
    {
      h3: 'B2B Marketing Strategy Mumbai',
      desc: 'B2B marketing strategy consulting for Mumbai businesses — ICP definition, buyer journey mapping, channel selection, messaging framework and go-to-market planning for new product launches and market expansion.',
    },
  ],
  h2Why: 'Why Choose NNC as Your B2B Marketing Company in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — review pipeline results in person',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to review lead generation results, go through LinkedIn campaign performance and align your sales and marketing teams.',
    },
    {
      n: '02',
      h3: 'Reported on leads and pipeline — not vanity metrics',
      body: 'NNC reports B2B marketing results the way Mumbai sales directors want — number of qualified leads, cost per lead, lead source breakdown and pipeline value attributed. Not impressions and click-through rates.',
    },
    {
      n: '03',
      h3: 'LinkedIn specialists — in-house, not outsourced',
      body: 'Every LinkedIn Ads manager, outreach strategist and ABM specialist is a full-time NNC employee. Consistent people managing your LinkedIn lead generation month after month — no freelancer turnover.',
    },
    {
      n: '04',
      h3: 'ABM and broad-reach B2B — both under one roof',
      body: 'NNC runs both targeted ABM programmes for high-value enterprise accounts and broad-reach B2B digital marketing for volume lead generation. Both motions managed cohesively by one Mumbai team.',
    },
    {
      n: '05',
      h3: 'No long-term lock-in contracts',
      body: 'NNC operates on monthly retainers with no 12-month lock-in. Mumbai clients stay because campaigns are generating pipeline — not because they are contractually committed.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has delivered B2B marketing for SaaS, manufacturing, logistics, professional services and technology businesses across Mumbai. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['LinkedIn Campaign Manager', 'Google Ads', 'HubSpot', 'Salesforce', 'Apollo.io', 'Lusha', 'SEMrush', 'Google Analytics 4'],
  h2Tech: 'B2B Marketing Tools & Platforms',
  h2Faq: 'B2B Marketing Company Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best B2B marketing company in Mumbai?',
      a: "NNC Digital is among Mumbai's top B2B marketing companies — 565+ projects, 4.9★ Google rating, office in Thane West. LinkedIn lead generation, ABM, B2B digital marketing and enterprise marketing — all in-house.",
    },
    {
      q: 'Do you provide LinkedIn lead generation in Mumbai?',
      a: 'Yes. NNC provides LinkedIn lead generation for Mumbai B2B companies — Sponsored Content, Message Ads, Lead Gen Forms and outreach sequences targeting decision-makers by title and industry.',
    },
    {
      q: 'Do you offer account based marketing (ABM) in Mumbai?',
      a: 'Yes. NNC is an ABM company in Mumbai — target account identification, personalised content and multi-channel ABM programmes for enterprise sales teams.',
    },
    {
      q: 'Do you offer B2B lead generation in Mumbai?',
      a: 'Yes. NNC is a B2B lead generation company in Mumbai — LinkedIn Ads, Google Ads and SEO campaigns delivering qualified decision-maker leads. Reported by cost per qualified lead.',
    },
    {
      q: 'Do you provide enterprise marketing in Mumbai?',
      a: 'Yes. NNC provides enterprise marketing services for large Mumbai businesses — multi-channel campaigns, sales enablement content, lead scoring and CRM integration.',
    },
    {
      q: 'Do you have a B2B marketing office in Mumbai?',
      a: 'Yes. NNC has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to discuss B2B marketing strategy and review campaign performance.',
    },
  ],
}

export default function B2BMarketingCompanyMumbaiPage() {
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
