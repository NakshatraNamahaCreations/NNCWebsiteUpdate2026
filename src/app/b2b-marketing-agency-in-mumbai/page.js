import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'B2B Marketing Agency in Mumbai | Lead Generation Services',
  description:
    'Choose a B2B marketing agency in Mumbai to drive qualified leads and growth, with NNC delivering result focused campaigns and high ROI marketing strategies.',
  alternates: {
    canonical: `${SITE.url}/b2b-marketing-agency-in-mumbai`,
  },
  keywords:
    'b2b marketing agency in mumbai, linkedin lead generation mumbai, b2b lead generation company mumbai, account based marketing mumbai, abm agency mumbai, b2b digital marketing mumbai, enterprise marketing agency mumbai',
  openGraph: {
    title: 'B2B Marketing Agency in Mumbai | Lead Generation Services',
    description:
      'Choose a B2B marketing agency in Mumbai to drive qualified leads and growth, with NNC delivering result focused campaigns and high ROI marketing strategies.',
    url: `${SITE.url}/b2b-marketing-agency-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'B2B Marketing Agency in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'B2B Marketing Agency in Mumbai | Lead Generation Services',
    description:
      'Choose a B2B marketing agency in Mumbai to drive qualified leads and growth, with NNC delivering result focused campaigns and high ROI marketing strategies.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'B2B Marketing Agency in Mumbai',
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
    'LinkedIn Lead Generation',
    'B2B Lead Generation',
    'Account Based Marketing',
    'ABM Agency',
    'B2B Digital Marketing',
    'Enterprise Marketing',
  ],
  description:
    'B2B marketing agency in Mumbai — LinkedIn lead generation, B2B lead generation, account based marketing (ABM), B2B digital marketing and enterprise marketing for Mumbai businesses. Branch office in Thane West.',
  url: `${SITE.url}/b2b-marketing-agency-in-mumbai`,
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
      name: 'Digital Marketing Agency Mumbai',
      item: `${SITE.url}/digital-marketing-agency-in-mumbai`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'B2B Marketing Agency in Mumbai',
      item: `${SITE.url}/b2b-marketing-agency-in-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best B2B marketing agency in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Mumbai's top-rated B2B marketing agencies — 565+ projects delivered, 4.9★ Google rating, branch office in Thane West. We provide LinkedIn lead generation, account based marketing (ABM), B2B digital marketing and enterprise marketing for Mumbai B2B businesses.",
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
      name: 'Do you provide LinkedIn lead generation in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides LinkedIn lead generation for Mumbai B2B companies — LinkedIn Ads (Sponsored Content, Message Ads, Lead Gen Forms), profile optimisation, connection outreach sequences and decision-maker targeting by job title, industry and company size.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is account based marketing and do you offer it in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Account based marketing (ABM) is a B2B strategy that targets specific high-value companies with personalised campaigns rather than broad audiences. NNC provides ABM agency services in Mumbai — target account identification, personalised content, LinkedIn outreach and multi-channel ABM campaigns for Mumbai enterprise sales teams.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer B2B lead generation for Mumbai businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC is a B2B lead generation company in Mumbai — running LinkedIn Ads, Google Ads, SEO and cold outreach campaigns that deliver qualified decision-maker leads. Every lead generation campaign is measured by cost per qualified lead, not just impressions or clicks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide enterprise marketing for large Mumbai companies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides enterprise marketing agency services for large Mumbai businesses — multi-channel B2B campaigns, CRM integration, sales enablement content, lead scoring and ABM programmes targeting enterprise accounts across India.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a B2B marketing office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. You can visit us to discuss your B2B marketing strategy, review lead generation campaign results and meet the team managing your accounts.',
      },
    },
  ],
}

const data = {
  badge: 'B2B Marketing · Mumbai',
  h1: 'B2B Marketing Agency',
  h1Accent: 'in Mumbai',
  tagline:
    'B2B marketing agency in Mumbai — LinkedIn lead generation, B2B lead generation company, account based marketing, ABM agency, B2B digital marketing and enterprise marketing. Office in Thane West.',
  desc:
    'NNC Digital is a dedicated B2B marketing agency in Mumbai helping businesses generate qualified leads from decision-makers across LinkedIn, Google and digital channels. From LinkedIn lead generation and account based marketing (ABM) to B2B digital marketing and enterprise marketing programmes — every campaign is run by our in-house B2B marketing specialists with transparent reporting on leads, pipeline value and cost per acquisition.',
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
      h3: 'B2B Lead Generation Company Mumbai',
      desc: 'Multi-channel B2B lead generation — LinkedIn Ads, Google Search Ads, SEO and email outreach working together to fill your Mumbai sales pipeline with qualified decision-maker leads. Reported by cost per qualified lead.',
    },
    {
      h3: 'Account Based Marketing Mumbai',
      desc: 'Account based marketing (ABM) for Mumbai enterprise sales teams — target account list building, personalised content and creatives, LinkedIn outreach sequences and multi-channel touchpoints designed for high-value accounts.',
    },
    {
      h3: 'ABM Agency Mumbai',
      desc: 'NNC acts as your ABM agency in Mumbai — building ICP (Ideal Customer Profile) definitions, identifying target accounts, crafting personalised messaging for each account tier and running coordinated ABM campaigns across LinkedIn, email and paid channels.',
    },
    {
      h3: 'B2B Digital Marketing Mumbai',
      desc: 'Full B2B digital marketing for Mumbai businesses — Google Ads for B2B search intent, technical SEO for B2B keywords, LinkedIn Ads, content marketing and landing page optimisation for lead conversion.',
    },
    {
      h3: 'Enterprise Marketing Agency Mumbai',
      desc: 'Enterprise marketing programmes for large Mumbai businesses — multi-channel campaigns, sales enablement content, lead scoring models, CRM integration and executive-level reporting on pipeline contribution.',
    },
    {
      h3: 'LinkedIn Ads Management Mumbai',
      desc: 'LinkedIn Ads campaign management for Mumbai B2B brands — Sponsored Content, Sponsored InMail, Dynamic Ads and Lead Gen Forms. Audience refinement, A/B testing and weekly performance reporting.',
    },
    {
      h3: 'B2B Content Marketing Mumbai',
      desc: 'B2B content marketing for Mumbai companies — whitepapers, case studies, thought leadership articles, LinkedIn posts and email sequences that build authority with decision-makers and nurture leads through the sales funnel.',
    },
    {
      h3: 'B2B Marketing Strategy Mumbai',
      desc: 'B2B marketing strategy consulting for Mumbai businesses — ICP definition, buyer journey mapping, channel selection, messaging framework and go-to-market planning for new product launches and market expansion.',
    },
  ],
  h2Why: 'Why Choose NNC as Your B2B Marketing Agency in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — review pipeline results in person',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to review lead generation results, go through LinkedIn campaign performance and align your sales and marketing teams in a single meeting.',
    },
    {
      n: '02',
      h3: 'Reported on leads and pipeline — not vanity metrics',
      body: 'NNC reports B2B marketing results the way Mumbai sales directors want to see them — number of qualified leads, cost per lead, lead source breakdown and pipeline value attributed. Not impressions and click-through rates.',
    },
    {
      n: '03',
      h3: 'LinkedIn specialists — in-house, not outsourced',
      body: 'Every LinkedIn Ads manager, outreach strategist and ABM specialist is a full-time NNC employee. Consistent people managing your LinkedIn lead generation month after month — no freelancer turnover.',
    },
    {
      n: '04',
      h3: 'ABM and broad-reach B2B — both under one roof',
      body: 'NNC runs both targeted ABM programmes for high-value enterprise accounts and broad-reach B2B digital marketing for volume lead generation. Mumbai clients get both motions managed cohesively by one team.',
    },
    {
      n: '05',
      h3: 'No long-term lock-in contracts',
      body: 'NNC operates on monthly retainers with no 12-month lock-in for B2B marketing. Mumbai clients stay because campaigns are generating pipeline — not because they are contractually committed.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has delivered B2B marketing for SaaS, manufacturing, logistics, professional services and technology businesses across Mumbai. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['LinkedIn Campaign Manager', 'Google Ads', 'HubSpot', 'Salesforce', 'Apollo.io', 'Lusha', 'SEMrush', 'Google Analytics 4'],
  h2Tech: 'B2B Marketing Tools & Platforms',
  h2Faq: 'B2B Marketing Agency Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best B2B marketing agency in Mumbai?',
      a: "NNC Digital is among Mumbai's top B2B marketing agencies — 565+ projects, 4.9★ Google rating, office in Thane West. LinkedIn lead generation, ABM, B2B digital marketing and enterprise marketing — all in-house.",
    },
    {
      q: 'Do you provide LinkedIn lead generation in Mumbai?',
      a: 'Yes. NNC provides LinkedIn lead generation for Mumbai B2B companies — Sponsored Content, Message Ads, Lead Gen Forms and outreach sequences targeting decision-makers by title and industry.',
    },
    {
      q: 'What is ABM and do you offer it in Mumbai?',
      a: 'Account based marketing (ABM) targets specific high-value companies with personalised campaigns. NNC is an ABM agency in Mumbai — target account identification, personalised content and multi-channel ABM programmes.',
    },
    {
      q: 'Do you offer B2B lead generation in Mumbai?',
      a: 'Yes. NNC is a B2B lead generation company in Mumbai — LinkedIn Ads, Google Ads and SEO campaigns delivering qualified decision-maker leads. Reported by cost per qualified lead.',
    },
    {
      q: 'Do you provide enterprise marketing in Mumbai?',
      a: 'Yes. NNC provides enterprise marketing agency services for large Mumbai businesses — multi-channel campaigns, sales enablement content, lead scoring and CRM integration.',
    },
    {
      q: 'Do you have a B2B marketing office in Mumbai?',
      a: 'Yes. NNC has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to discuss B2B marketing strategy and review campaign performance.',
    },
  ],
}

export default function B2BMarketingAgencyMumbaiPage() {
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
