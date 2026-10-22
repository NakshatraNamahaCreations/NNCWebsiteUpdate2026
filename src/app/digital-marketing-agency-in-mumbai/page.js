import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Digital Marketing Agency in Mumbai | Digital Growth Solution',
  description:
    'Choose a digital marketing agency in Mumbai to boost online visibility and leads, with NNC delivering SEO, ads, and performance driven marketing strategies.',
  alternates: {
    canonical: `${SITE.url}/digital-marketing-agency-in-mumbai`,
  },
  keywords:
    'digital marketing agency in mumbai, digital marketing company mumbai, digital marketing services mumbai, best digital marketing agency mumbai, top digital marketing company mumbai, digital marketing experts mumbai, online marketing agency mumbai, performance marketing agency mumbai, lead generation agency mumbai, digital marketing consultants mumbai, seo services in mumbai, seo company in mumbai, best seo company mumbai, local seo services mumbai, seo agency in mumbai, technical seo services mumbai, on page seo services mumbai, seo experts mumbai, seo consultants mumbai, ecommerce seo services mumbai, hire seo expert mumbai, affordable seo services mumbai, google ads agency in mumbai, google ads management mumbai, ppc agency mumbai, ppc services mumbai, google adwords agency mumbai, google ads experts mumbai, adwords management mumbai, google ads consultants mumbai, pay per click agency mumbai, social media marketing agency mumbai, social media marketing company mumbai, instagram marketing agency mumbai, facebook ads agency mumbai, meta ads agency mumbai, social media management mumbai, linkedin marketing agency mumbai, social media services mumbai',
  openGraph: {
    title: 'Digital Marketing Agency in Mumbai | Digital Growth Solution',
    description:
      'Choose a digital marketing agency in Mumbai to boost online visibility and leads, with NNC delivering SEO, ads, and performance driven marketing strategies.',
    url: `${SITE.url}/digital-marketing-agency-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Digital Marketing Agency in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Digital Marketing Agency in Mumbai | Digital Growth Solution',
    description:
      'Choose a digital marketing agency in Mumbai to boost online visibility and leads, with NNC delivering SEO, ads, and performance driven marketing strategies.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Digital Marketing Agency in Mumbai',
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
    { '@type': 'City', name: 'Powai' },
  ],
  serviceType: [
    'Digital Marketing',
    'SEO Services',
    'Google Ads Management',
    'Meta Ads Management',
    'Social Media Marketing',
    'Performance Marketing',
    'Lead Generation',
    'PPC Services',
    'Local SEO',
    'Technical SEO',
    'Ecommerce SEO',
    'LinkedIn Marketing',
  ],
  description:
    'Full-service digital marketing agency in Mumbai — SEO, Google Ads, Meta Ads, social media marketing, performance marketing and lead generation for Mumbai businesses. Branch office in Thane West.',
  url: `${SITE.url}/digital-marketing-agency-in-mumbai`,
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
      name: 'Digital Marketing Agency in Mumbai',
      item: `${SITE.url}/digital-marketing-agency-in-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best digital marketing agency in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Mumbai's top-rated digital marketing agencies — 565+ projects delivered, 4.9★ Google rating, branch office in Thane West. We provide SEO, Google Ads, Meta Ads, social media marketing and performance marketing with transparent weekly reporting.",
      },
    },
    {
      '@type': 'Question',
      name: 'What digital marketing services does NNC provide in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Mumbai provides the full spectrum of digital marketing services — SEO (technical, on-page, local and ecommerce), Google Ads management, Meta Ads (Facebook & Instagram), LinkedIn marketing, social media management and performance marketing with lead generation tracking.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide SEO services in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides comprehensive SEO services in Mumbai — technical SEO audits, on-page optimisation, local SEO and Google Business Profile management, ecommerce SEO and content strategy. All work is done by in-house SEO experts, not outsourced.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you manage Google Ads for Mumbai businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC is a Google Ads agency in Mumbai managing Search, Display, Shopping and Performance Max campaigns. We handle keyword research, ad copy, bid strategy, landing page optimisation and weekly performance reporting. No long-term lock-in contracts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you run Facebook, Instagram and Meta Ads in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC manages Meta Ads (Facebook & Instagram) campaigns for Mumbai businesses — audience research, creative strategy, ad copy, A/B testing and conversion optimisation. We report on actual leads and revenue, not just impressions and clicks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer social media management in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides social media management in Mumbai covering Instagram, Facebook, LinkedIn and YouTube — content calendar, post creation, community management, hashtag strategy and monthly analytics reports.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a digital marketing office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. You can visit us to discuss your digital marketing goals, review campaign reports and meet the team managing your accounts.',
      },
    },
  ],
}

const data = {
  badge: 'Digital Marketing · Mumbai',
  h1: 'Digital Marketing Agency',
  h1Accent: 'in Mumbai',
  tagline:
    'Full-service digital marketing agency in Mumbai — SEO, Google Ads, Meta Ads, social media marketing, performance marketing and lead generation. Transparent reporting. Office in Thane West.',
  desc:
    'NNC Digital is a full-service digital marketing agency in Mumbai providing SEO services, Google Ads management, Meta Ads (Facebook & Instagram), LinkedIn marketing, social media management and performance marketing for businesses across Mumbai, Thane and Navi Mumbai. Every campaign is managed by in-house digital marketing experts — not freelancers — with transparent weekly reporting on real business outcomes: leads, calls and revenue, not just vanity metrics.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'digital marketing in Mumbai',
  h2Features: 'Digital Marketing Services in Mumbai',
  features: [
    {
      h3: 'SEO Services in Mumbai',
      desc: 'Technical SEO audits, on-page optimisation, link building, local SEO, Google Business Profile management and ecommerce SEO — all managed by in-house SEO experts. Rankings tracked and reported weekly.',
    },
    {
      h3: 'Google Ads Agency Mumbai — Search, Shopping & Display',
      desc: 'Google Ads management for Mumbai businesses — Search, Display, Shopping and Performance Max campaigns. Keyword research, ad copy, bid strategy, Quality Score optimisation and landing page recommendations.',
    },
    {
      h3: 'Meta Ads Agency Mumbai — Facebook & Instagram',
      desc: 'Facebook and Instagram (Meta Ads) campaign management — audience targeting, Lookalike audiences, creative strategy, A/B testing, retargeting and conversion optimisation for Mumbai B2C and B2B brands.',
    },
    {
      h3: 'Social Media Marketing Agency Mumbai',
      desc: 'Instagram, Facebook, LinkedIn and YouTube management — content calendar, post design, caption writing, community management, hashtag strategy and monthly performance analytics.',
    },
    {
      h3: 'Performance Marketing & Lead Generation Mumbai',
      desc: 'Performance marketing focused on real outcomes — cost per lead, cost per acquisition and ROAS tracking across Google, Meta and LinkedIn. Lead generation campaigns built around Mumbai audience insights.',
    },
    {
      h3: 'LinkedIn Marketing Agency Mumbai',
      desc: 'LinkedIn marketing for Mumbai B2B companies — company page management, LinkedIn Ads (Sponsored Content, InMail, Lead Gen Forms), thought leadership content and decision-maker targeting.',
    },
    {
      h3: 'Local SEO Services Mumbai',
      desc: 'Local SEO for Mumbai businesses — Google Business Profile optimisation, local citation building, map pack ranking, review management and hyperlocal content for Andheri, BKC, Thane, Powai and Navi Mumbai.',
    },
    {
      h3: 'Ecommerce SEO Services Mumbai',
      desc: 'Ecommerce SEO for Mumbai online stores — product page optimisation, category page SEO, schema markup, crawl budget management and Google Shopping feed optimisation to drive qualified organic traffic.',
    },
    {
      h3: 'PPC Agency Mumbai — Google & Meta',
      desc: 'Pay-per-click (PPC) management across Google Ads and Meta Ads — campaign setup, ongoing optimisation, bid management and transparent monthly reporting with no long-term lock-in contracts.',
    },
  ],
  h2Why: 'Why Choose NNC as Your Digital Marketing Agency in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — meet your account team',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to review campaign strategy, go through weekly reports in person and meet the SEO specialists and ads managers working on your accounts.',
    },
    {
      n: '02',
      h3: 'In-house specialists — not outsourced freelancers',
      body: 'Every SEO expert, Google Ads manager and social media specialist is a full-time NNC employee. When you brief NNC Mumbai you get consistent, accountable people — not a rotating roster of freelancers.',
    },
    {
      n: '03',
      h3: 'Reporting on leads and revenue — not vanity metrics',
      body: 'NNC reports on what matters to Mumbai business owners — enquiries generated, calls tracked, cost per lead and revenue attributed. Not just impressions, clicks and follower counts.',
    },
    {
      n: '04',
      h3: 'Full-service — SEO, Google Ads, Meta Ads, social media',
      body: 'One agency for all digital marketing — SEO, Google Ads, Meta Ads, LinkedIn, social media and performance marketing. Consistent strategy across all channels, single point of accountability.',
    },
    {
      n: '05',
      h3: 'No long-term lock-in contracts',
      body: 'NNC operates on monthly retainers with no 12-month lock-in. If results are not delivered, you are free to leave. Our Mumbai clients stay because of performance, not contracts.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has delivered digital marketing for 565+ clients across ecommerce, real estate, healthcare, education and B2B in Mumbai. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['Google Ads', 'Meta Ads', 'SEMrush', 'Ahrefs', 'Google Analytics 4', 'Search Console', 'Meta Business Suite', 'LinkedIn Ads'],
  h2Tech: 'Digital Marketing Tools & Platforms',
  h2Faq: 'Digital Marketing Agency Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best digital marketing agency in Mumbai?',
      a: "NNC Digital is among Mumbai's top digital marketing agencies — 565+ projects, 4.9★ Google rating, branch office in Thane West. Full-service: SEO, Google Ads, Meta Ads, social media and performance marketing.",
    },
    {
      q: 'Do you provide SEO services in Mumbai?',
      a: 'Yes. NNC provides technical SEO, on-page SEO, local SEO, ecommerce SEO and link building for Mumbai businesses. All managed by in-house SEO experts with weekly ranking and traffic reports.',
    },
    {
      q: 'Do you manage Google Ads and PPC campaigns in Mumbai?',
      a: 'Yes. NNC manages Google Search, Display, Shopping and Performance Max campaigns for Mumbai businesses. Fixed monthly management fee, no percentage-of-spend billing, weekly performance reports.',
    },
    {
      q: 'Do you run Meta Ads (Facebook & Instagram) in Mumbai?',
      a: 'Yes. NNC runs Facebook and Instagram Ads for Mumbai brands — audience targeting, creative strategy, A/B testing and conversion tracking. We report on leads and revenue, not just reach.',
    },
    {
      q: 'Do you offer social media management in Mumbai?',
      a: 'Yes. NNC manages Instagram, Facebook, LinkedIn and YouTube for Mumbai businesses — content creation, posting, community management and monthly analytics reports.',
    },
    {
      q: 'Do you have a digital marketing office in Mumbai?',
      a: 'Yes. NNC has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to discuss campaigns and review reports in person.',
    },
  ],
}

export default function DigitalMarketingAgencyMumbaiPage() {
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
