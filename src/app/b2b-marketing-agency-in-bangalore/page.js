import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'B2B Marketing Agency in Bangalore | Lead Generation Services',
  description:
    'Choose our B2B marketing agency in Bangalore offering lead generation services to attract qualified prospects and drive consistent business growth.',
  alternates: {
    canonical: `${SITE.url}/b2b-marketing-agency-in-bangalore`,
  },
  keywords:
    'b2b marketing agency in bangalore, linkedin lead generation bangalore, b2b lead generation company bangalore, account based marketing bangalore, abm agency bangalore, b2b digital marketing bangalore, enterprise marketing agency bangalore',
  openGraph: {
    title: 'B2B Marketing Agency in Bangalore | Lead Generation Services',
    description:
      'Choose our B2B marketing agency in Bangalore offering lead generation services to attract qualified prospects and drive consistent business growth.',
    url: `${SITE.url}/b2b-marketing-agency-in-bangalore`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'B2B Marketing Agency in Bangalore – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'B2B Marketing Agency in Bangalore | Lead Generation Services',
    description:
      'Choose our B2B marketing agency in Bangalore offering lead generation services to attract qualified prospects and drive consistent business growth.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'B2B Marketing Agency in Bangalore',
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
    'B2B Marketing',
    'LinkedIn Lead Generation',
    'B2B Lead Generation',
    'Account Based Marketing',
    'ABM Agency',
    'B2B Digital Marketing',
    'Enterprise Marketing',
  ],
  description:
    'B2B marketing agency in Bangalore — LinkedIn lead generation, B2B lead generation, account based marketing (ABM), B2B digital marketing and enterprise marketing for Bangalore businesses. Headquartered in Whitefield.',
  url: `${SITE.url}/b2b-marketing-agency-in-bangalore`,
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
      name: 'Digital Marketing Agency in Bangalore',
      item: `${SITE.url}/digital-marketing-agency-in-bangalore`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'B2B Marketing Agency in Bangalore',
      item: `${SITE.url}/b2b-marketing-agency-in-bangalore`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best B2B marketing agency in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Bangalore's top-rated B2B marketing agencies — 565+ projects delivered, 4.9★ Google rating, headquartered in Whitefield, Bangalore. We provide LinkedIn lead generation, account based marketing (ABM), B2B digital marketing and enterprise marketing for Bangalore B2B businesses.",
      },
    },
    {
      '@type': 'Question',
      name: 'What B2B marketing services does NNC provide in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Bangalore provides full B2B marketing services — LinkedIn lead generation, B2B lead generation campaigns, account based marketing (ABM), B2B digital marketing (Google Ads, SEO, content), enterprise marketing strategy and LinkedIn Ads management.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide LinkedIn lead generation in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides LinkedIn lead generation for Bangalore B2B companies — LinkedIn Ads (Sponsored Content, Message Ads, Lead Gen Forms), profile optimisation, connection outreach sequences and decision-maker targeting by job title, industry and company size.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is account based marketing and do you offer it in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Account based marketing (ABM) is a B2B strategy that targets specific high-value companies with personalised campaigns rather than broad audiences. NNC provides ABM agency services in Bangalore — target account identification, personalised content, LinkedIn outreach and multi-channel ABM campaigns for Bangalore enterprise sales teams.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer B2B lead generation for Bangalore businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC is a B2B lead generation company in Bangalore — running LinkedIn Ads, Google Ads, SEO and cold outreach campaigns that deliver qualified decision-maker leads. Every lead generation campaign is measured by cost per qualified lead, not just impressions or clicks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide enterprise marketing for large Bangalore companies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides enterprise marketing agency services for large Bangalore businesses — multi-channel B2B campaigns, CRM integration, sales enablement content, lead scoring and ABM programmes targeting enterprise accounts across India.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a B2B marketing office in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital is headquartered at Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit us to discuss your B2B marketing strategy, review lead generation campaign results and meet the team managing your accounts.',
      },
    },
  ],
}

const data = {
  badge: 'B2B Marketing · Bangalore',
  h1: 'B2B Marketing Agency',
  h1Accent: 'in Bangalore',
  tagline:
    'B2B marketing agency in Bangalore — LinkedIn lead generation, B2B lead generation company, account based marketing, ABM agency, B2B digital marketing and enterprise marketing. Headquartered in Whitefield.',
  desc:
    'NNC Digital is a dedicated B2B marketing agency in Bangalore helping businesses generate qualified leads from decision-makers across LinkedIn, Google and digital channels. From LinkedIn lead generation and account based marketing (ABM) to B2B digital marketing and enterprise marketing programmes — every campaign is run by our in-house B2B marketing specialists with transparent reporting on leads, pipeline value and cost per acquisition.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'B2B marketing in Bangalore',
  h2Features: 'B2B Marketing Services in Bangalore',
  features: [
    {
      h3: 'LinkedIn Lead Generation Bangalore',
      desc: 'LinkedIn lead generation for Bangalore B2B companies — Sponsored Content, Message Ads, Lead Gen Forms and connection outreach sequences targeting decision-makers by job title, industry, company size and seniority.',
    },
    {
      h3: 'B2B Lead Generation Company Bangalore',
      desc: 'Multi-channel B2B lead generation — LinkedIn Ads, Google Search Ads, SEO and email outreach working together to fill your Bangalore sales pipeline with qualified decision-maker leads. Reported by cost per qualified lead.',
    },
    {
      h3: 'Account Based Marketing Bangalore',
      desc: 'Account based marketing (ABM) for Bangalore enterprise sales teams — target account list building, personalised content and creatives, LinkedIn outreach sequences and multi-channel touchpoints designed for high-value accounts.',
    },
    {
      h3: 'ABM Agency Bangalore',
      desc: 'NNC acts as your ABM agency in Bangalore — building ICP (Ideal Customer Profile) definitions, identifying target accounts, crafting personalised messaging for each account tier and running coordinated ABM campaigns across LinkedIn, email and paid channels.',
    },
    {
      h3: 'B2B Digital Marketing Bangalore',
      desc: 'Full B2B digital marketing for Bangalore businesses — Google Ads for B2B search intent, technical SEO for B2B keywords, LinkedIn Ads, content marketing and landing page optimisation for lead conversion.',
    },
    {
      h3: 'Enterprise Marketing Agency Bangalore',
      desc: 'Enterprise marketing programmes for large Bangalore businesses — multi-channel campaigns, sales enablement content, lead scoring models, CRM integration and executive-level reporting on pipeline contribution.',
    },
    {
      h3: 'LinkedIn Ads Management Bangalore',
      desc: 'LinkedIn Ads campaign management for Bangalore B2B brands — Sponsored Content, Sponsored InMail, Dynamic Ads and Lead Gen Forms. Audience refinement, A/B testing and weekly performance reporting.',
    },
    {
      h3: 'B2B Content Marketing Bangalore',
      desc: 'B2B content marketing for Bangalore companies — whitepapers, case studies, thought leadership articles, LinkedIn posts and email sequences that build authority with decision-makers and nurture leads through the sales funnel.',
    },
    {
      h3: 'B2B Marketing Strategy Bangalore',
      desc: 'B2B marketing strategy consulting for Bangalore businesses — ICP definition, buyer journey mapping, channel selection, messaging framework and go-to-market planning for new product launches and market expansion.',
    },
  ],
  h2Why: 'Why Choose NNC as Your B2B Marketing Agency in Bangalore?',
  why: [
    {
      n: '01',
      h3: 'Bangalore headquarters — review pipeline results in person',
      body: 'NNC is headquartered at Prestige Shantiniketan, Whitefield, Bangalore. Visit us to review lead generation results, go through LinkedIn campaign performance and align your sales and marketing teams in a single meeting.',
    },
    {
      n: '02',
      h3: 'Reported on leads and pipeline — not vanity metrics',
      body: 'NNC reports B2B marketing results the way Bangalore sales directors want to see them — number of qualified leads, cost per lead, lead source breakdown and pipeline value attributed. Not impressions and click-through rates.',
    },
    {
      n: '03',
      h3: 'LinkedIn specialists — in-house, not outsourced',
      body: 'Every LinkedIn Ads manager, outreach strategist and ABM specialist is a full-time NNC employee. Consistent people managing your LinkedIn lead generation month after month — no freelancer turnover.',
    },
    {
      n: '04',
      h3: 'ABM and broad-reach B2B — both under one roof',
      body: 'NNC runs both targeted ABM programmes for high-value enterprise accounts and broad-reach B2B digital marketing for volume lead generation. Bangalore clients get both motions managed cohesively by one team.',
    },
    {
      n: '05',
      h3: 'No long-term lock-in contracts',
      body: 'NNC operates on monthly retainers with no 12-month lock-in for B2B marketing. Bangalore clients stay because campaigns are generating pipeline — not because they are contractually committed.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has delivered B2B marketing for SaaS, manufacturing, logistics, professional services and technology businesses across Bangalore. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['LinkedIn Campaign Manager', 'Google Ads', 'HubSpot', 'Salesforce', 'Apollo.io', 'Lusha', 'SEMrush', 'Google Analytics 4'],
  h2Tech: 'B2B Marketing Tools & Platforms',
  h2Faq: 'B2B Marketing Agency Bangalore — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best B2B marketing agency in Bangalore?',
      a: "NNC Digital is among Bangalore's top B2B marketing agencies — 565+ projects, 4.9★ Google rating, headquartered in Whitefield. LinkedIn lead generation, ABM, B2B digital marketing and enterprise marketing — all in-house.",
    },
    {
      q: 'Do you provide LinkedIn lead generation in Bangalore?',
      a: 'Yes. NNC provides LinkedIn lead generation for Bangalore B2B companies — Sponsored Content, Message Ads, Lead Gen Forms and outreach sequences targeting decision-makers by title and industry.',
    },
    {
      q: 'What is ABM and do you offer it in Bangalore?',
      a: 'Account based marketing (ABM) targets specific high-value companies with personalised campaigns. NNC is an ABM agency in Bangalore — target account identification, personalised content and multi-channel ABM programmes.',
    },
    {
      q: 'Do you offer B2B lead generation in Bangalore?',
      a: 'Yes. NNC is a B2B lead generation company in Bangalore — LinkedIn Ads, Google Ads and SEO campaigns delivering qualified decision-maker leads. Reported by cost per qualified lead.',
    },
    {
      q: 'Do you provide enterprise marketing in Bangalore?',
      a: 'Yes. NNC provides enterprise marketing agency services for large Bangalore businesses — multi-channel campaigns, sales enablement content, lead scoring and CRM integration.',
    },
    {
      q: 'Do you have a B2B marketing office in Bangalore?',
      a: 'Yes. NNC is headquartered at Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit us to discuss B2B marketing strategy and review campaign performance.',
    },
  ],
}

export default function B2BMarketingAgencyBangalorePage() {
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
