import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Paid Marketing Services in Mumbai | Performance Marketing',
  description:
    'Choose our paid marketing services in Mumbai to run high converting ad campaigns, with NNC delivering ROI driven PPC,Google Ads and performance marketing.',
  alternates: {
    canonical: `${SITE.url}/paid-marketing-services-in-mumbai`,
  },
  keywords:
    'paid marketing services in mumbai, paid marketing mumbai, ppc services mumbai, google ads services mumbai, paid advertising mumbai, performance marketing mumbai, paid search marketing mumbai, paid social media marketing mumbai, paid ads agency mumbai, roi driven marketing mumbai',
  openGraph: {
    title: 'Paid Marketing Services in Mumbai | Performance Marketing',
    description:
      'Choose our paid marketing services in Mumbai to run high converting ad campaigns, with NNC delivering ROI driven PPC,Google Ads and performance marketing.',
    url: `${SITE.url}/paid-marketing-services-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Paid Marketing Services in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Paid Marketing Services in Mumbai | Performance Marketing',
    description:
      'Choose our paid marketing services in Mumbai to run high converting ad campaigns, with NNC delivering ROI driven PPC,Google Ads and performance marketing.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Paid Marketing Services in Mumbai',
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
    'Paid Marketing Services',
    'PPC Services',
    'Google Ads Management',
    'Meta Ads Management',
    'Performance Marketing',
    'Paid Search Marketing',
    'Paid Social Media Marketing',
  ],
  description:
    'Paid marketing services in Mumbai — high converting ad campaigns, ROI driven PPC, Google Ads and performance marketing for Mumbai businesses. Branch office in Thane West.',
  url: `${SITE.url}/paid-marketing-services-in-mumbai`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Google Ads Management Mumbai',
      price: '15000',
      priceCurrency: 'INR',
      description: 'Google Ads campaign setup, keyword research, ad copy, bid management and monthly reporting.',
    },
    {
      '@type': 'Offer',
      name: 'Full Paid Marketing Package Mumbai',
      price: '30000',
      priceCurrency: 'INR',
      description: 'Google Ads + Meta Ads + remarketing campaigns with conversion tracking and ROI reporting.',
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
      name: 'Digital Marketing Agency Mumbai',
      item: `${SITE.url}/digital-marketing-agency-in-mumbai`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Paid Marketing Services in Mumbai',
      item: `${SITE.url}/paid-marketing-services-in-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What paid marketing services does NNC offer in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC offers comprehensive paid marketing services in Mumbai — Google Ads (Search, Display, Shopping, YouTube), Meta Ads (Facebook & Instagram), LinkedIn Ads, remarketing campaigns, conversion tracking and full ROI reporting. All managed by NNC's in-house certified paid media team.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why choose NNC for paid marketing services in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Mumbai's top-rated digital marketing agencies — 565+ projects delivered, 4.9★ Google rating, branch office in Thane West. Our paid marketing team is Google Ads and Meta certified, focused on ROI driven campaigns that generate qualified leads and revenue, not just clicks.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much do paid marketing services cost in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google Ads management starts from ₹15,000 per month (management fee, ad spend billed separately). A full paid marketing package including Google Ads and Meta Ads starts from ₹30,000 per month. All packages are fixed-fee — no percentage of ad spend billing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you manage Google Ads for Mumbai businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC manages Google Ads campaigns for Mumbai businesses across Search, Display, Shopping and YouTube — keyword research, ad copy, bid strategy, negative keywords, conversion tracking and monthly performance reports.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you run Meta Ads (Facebook and Instagram) in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC runs Meta Ads campaigns for Mumbai businesses — audience research, creative strategy, A/B testing, retargeting, lookalike audiences, lead generation campaigns and full funnel performance tracking.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can paid marketing services help generate leads for my Mumbai business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Paid marketing is one of the fastest ways to generate qualified leads for Mumbai businesses. NNC designs high converting campaigns with targeted audience segmentation, compelling ad creatives and optimised landing pages to maximise lead quality and minimise cost per acquisition.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a paid marketing office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to review campaign performance, discuss strategy and meet the paid marketing team.',
      },
    },
  ],
}

const data = {
  badge: 'Paid Marketing Services · Mumbai',
  h1: 'Paid Marketing Services',
  h1Accent: 'in Mumbai',
  tagline:
    'ROI driven paid marketing services in Mumbai — high converting Google Ads, Meta Ads, PPC and performance marketing campaigns for business growth. Certified team. Office in Thane West. Fixed fee.',
  desc:
    "NNC Digital delivers paid marketing services in Mumbai that drive qualified leads, high converting traffic and measurable ROI for startups, SMEs and enterprises across Mumbai, Thane and Navi Mumbai. Our in-house certified paid media team manages Google Ads, Meta Ads, LinkedIn Ads and remarketing campaigns — ROI driven PPC, performance marketing and full funnel ad strategies with complete conversion tracking, monthly reporting and zero outsourcing.",
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'paid marketing services in Mumbai',
  h2Features: 'Paid Marketing Services We Offer in Mumbai',
  features: [
    {
      h3: 'Google Ads Management Mumbai',
      desc: 'Google Search, Display, Shopping and YouTube ad campaigns for Mumbai businesses — keyword research, ad copy, bid strategy, Quality Score optimisation, negative keywords and conversion tracking.',
    },
    {
      h3: 'Meta Ads Management Mumbai',
      desc: 'Facebook and Instagram ad campaigns for Mumbai businesses — audience research, creative strategy, A/B testing, retargeting, lookalike audiences, lead generation and full funnel performance tracking.',
    },
    {
      h3: 'PPC Campaign Management Mumbai',
      desc: 'Pay-per-click campaign management across Google and Bing — campaign structure, ad group optimisation, CPC bid management, landing page alignment and weekly performance monitoring for Mumbai businesses.',
    },
    {
      h3: 'Remarketing & Retargeting Mumbai',
      desc: 'Remarketing campaigns that re-engage Mumbai website visitors and app users across Google Display, YouTube, Facebook and Instagram — custom audience segments, dynamic ads and sequential messaging.',
    },
    {
      h3: 'LinkedIn Ads for B2B Mumbai',
      desc: 'LinkedIn Ads for Mumbai B2B businesses — sponsored content, lead gen forms, message ads and account-based marketing targeting decision makers by job title, industry and company size.',
    },
    {
      h3: 'Performance Marketing Mumbai',
      desc: 'Full funnel performance marketing for Mumbai businesses — campaign strategy, creative briefing, audience targeting, landing page optimisation, conversion tracking and ROI focused budget allocation.',
    },
    {
      h3: 'Google Shopping Ads Mumbai',
      desc: 'Google Shopping campaigns for Mumbai ecommerce businesses — product feed optimisation, Shopping ad structure, smart bidding, ROAS targets and integration with Shopify or WooCommerce stores.',
    },
    {
      h3: 'Paid Social Media Marketing Mumbai',
      desc: 'Paid social campaigns across Instagram, Facebook, LinkedIn and YouTube for Mumbai brands — brand awareness, lead generation, app installs and event promotion with platform-native creative formats.',
    },
    {
      h3: 'Conversion Tracking & Reporting Mumbai',
      desc: 'Full conversion tracking setup — Google Tag Manager, GA4, Meta Pixel, phone call tracking and CRM integration. Monthly performance reports with cost per lead, ROAS and actionable recommendations.',
    },
  ],
  h2Why: 'Why Choose NNC for Paid Marketing Services in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — review campaigns in person',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to review campaign performance dashboards, discuss strategy and meet the certified paid media specialists managing your ads.',
    },
    {
      n: '02',
      h3: 'Google Ads & Meta certified — in-house team',
      body: 'Every paid marketing specialist at NNC Mumbai is Google Ads and Meta certified. In-house team — no freelancers, no white-label agencies. The same certified specialists manage your campaigns from setup to optimisation.',
    },
    {
      n: '03',
      h3: 'ROI driven — qualified leads, not just clicks',
      body: "NNC's paid marketing campaigns are built around business outcomes — cost per lead, cost per acquisition and ROAS. Every campaign is structured for conversion, not just impressions or clicks.",
    },
    {
      n: '04',
      h3: 'Fixed fee — no percentage of ad spend billing',
      body: 'NNC charges a fixed monthly management fee — not a percentage of ad spend. Your budget goes to your campaigns, not to an agency taking a cut of every rupee you spend.',
    },
    {
      n: '05',
      h3: 'Full funnel — ads, landing pages and tracking',
      body: 'NNC manages the full paid marketing funnel — ad campaigns, landing page design, conversion tracking and CRM integration. Single team, single accountability for your entire paid marketing engine.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has delivered paid marketing campaigns for startups, ecommerce brands, real estate companies and B2B enterprises across Mumbai. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'GA4', 'Google Tag Manager', 'Meta Pixel', 'Looker Studio', 'Semrush'],
  h2Tech: 'Paid Marketing Technology Stack',
  h2Faq: 'Paid Marketing Services Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'What paid marketing services does NNC offer in Mumbai?',
      a: 'Google Ads (Search, Display, Shopping, YouTube), Meta Ads (Facebook & Instagram), LinkedIn Ads, remarketing campaigns, conversion tracking and full ROI reporting — all managed by certified in-house specialists.',
    },
    {
      q: 'How much do paid marketing services cost in Mumbai?',
      a: 'Google Ads management starts from ₹15,000/month. A full paid marketing package (Google + Meta) starts from ₹30,000/month. Fixed fee — no percentage of ad spend billing.',
    },
    {
      q: 'Do you manage Google Ads for Mumbai businesses?',
      a: 'Yes. NNC manages Google Search, Display, Shopping and YouTube campaigns — keyword research, ad copy, bid strategy, conversion tracking and monthly reporting. Fixed fee, certified team.',
    },
    {
      q: 'Can paid marketing generate leads for my Mumbai business?',
      a: 'Yes. Paid marketing is the fastest way to generate qualified leads. NNC designs high converting campaigns with targeted audiences, compelling creatives and optimised landing pages to maximise lead quality and minimise cost per acquisition.',
    },
    {
      q: 'Do you run Meta Ads in Mumbai?',
      a: 'Yes. NNC runs Facebook and Instagram ad campaigns — audience research, A/B testing, retargeting, lookalike audiences and lead generation. Meta certified team, full performance reporting.',
    },
    {
      q: 'Do you have a paid marketing office in Mumbai?',
      a: 'Yes. NNC has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to review campaign performance and meet the paid marketing team.',
    },
  ],
}

export default function PaidMarketingServicesMumbaiPage() {
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
