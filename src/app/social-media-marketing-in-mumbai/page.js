import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Social Media Marketing in Mumbai | Paid Social Campaigns',
  description:
    'Choose  NNC for social media marketing in Mumbai to grow your brand and generate leads,we delivering performance driven campaigns across all social media.',
  alternates: {
    canonical: `${SITE.url}/social-media-marketing-in-mumbai`,
  },
  keywords:
    'social media marketing in mumbai, social media marketing mumbai, social media marketing agency mumbai, social media marketing services mumbai, paid social media marketing mumbai, instagram marketing mumbai, facebook marketing mumbai, linkedin marketing mumbai, social media campaigns mumbai, social media advertising mumbai',
  openGraph: {
    title: 'Social Media Marketing in Mumbai | Paid Social Campaigns',
    description:
      'Choose  NNC for social media marketing in Mumbai to grow your brand and generate leads,we delivering performance driven campaigns across all social media.',
    url: `${SITE.url}/social-media-marketing-in-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Social Media Marketing in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Social Media Marketing in Mumbai | Paid Social Campaigns',
    description:
      'Choose  NNC for social media marketing in Mumbai to grow your brand and generate leads,we delivering performance driven campaigns across all social media.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Social Media Marketing in Mumbai',
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
    'Social Media Marketing',
    'Paid Social Campaigns',
    'Instagram Marketing',
    'Facebook Ads',
    'LinkedIn Marketing',
    'Social Media Management',
    'Social Media Advertising',
  ],
  description:
    'Social media marketing in Mumbai — performance driven paid social campaigns, brand growth and lead generation across Instagram, Facebook and LinkedIn. Branch office in Thane West.',
  url: `${SITE.url}/social-media-marketing-in-mumbai`,
  offers: [
    {
      '@type': 'Offer',
      name: 'Social Media Management Mumbai',
      price: '15000',
      priceCurrency: 'INR',
      description: 'Monthly social media management — content calendar, posts, stories and community management.',
    },
    {
      '@type': 'Offer',
      name: 'Paid Social Campaigns Mumbai',
      price: '20000',
      priceCurrency: 'INR',
      description: 'Paid social media campaigns on Instagram and Facebook with targeting, creatives and reporting.',
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
      name: 'Social Media Marketing in Mumbai',
      item: `${SITE.url}/social-media-marketing-in-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What social media marketing services does NNC offer in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC provides full social media marketing services in Mumbai — organic content strategy and management, paid social campaigns (Meta Ads, LinkedIn Ads), Instagram marketing, Facebook advertising, influencer coordination, community management and monthly performance reporting.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why choose NNC for social media marketing in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Mumbai's top-rated digital marketing agencies — 565+ projects delivered, 4.9★ Google rating, branch office in Thane West. Our in-house social media team delivers performance driven campaigns that grow your brand and generate qualified leads across all social platforms.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does social media marketing cost in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Social media management starts from ₹15,000 per month. Paid social campaigns (Meta Ads) start from ₹20,000 per month (management fee, ad spend billed separately). All packages are fixed-fee with clear deliverables.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you run paid social media campaigns in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC runs paid social campaigns for Mumbai businesses across Instagram, Facebook and LinkedIn — audience research, creative strategy, ad copywriting, A/B testing, retargeting, lookalike audiences and full ROI reporting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you manage Instagram marketing for Mumbai brands?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. NNC manages Instagram marketing for Mumbai brands — content calendars, Reels production, story design, paid promotion, hashtag strategy, influencer coordination and community management to grow your following and drive engagement.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can social media marketing generate leads for Mumbai businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC designs social media campaigns specifically for lead generation — Meta lead gen forms, retargeting funnels, WhatsApp click-to-chat ads and LinkedIn lead generation campaigns that deliver qualified prospects for Mumbai businesses.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a social media marketing office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to review campaign performance, discuss social media strategy and meet the team managing your accounts.',
      },
    },
  ],
}

const data = {
  badge: 'Social Media Marketing · Mumbai',
  h1: 'Social Media Marketing',
  h1Accent: 'in Mumbai',
  tagline:
    'Performance driven social media marketing in Mumbai — paid social campaigns, brand growth and lead generation across Instagram, Facebook and LinkedIn. In-house team. Office in Thane West. Fixed fee.',
  desc:
    "NNC Digital delivers social media marketing in Mumbai that grows your brand and generates qualified leads through performance driven campaigns across all social platforms. Our in-house social media team manages organic content strategy, paid social campaigns (Meta Ads, LinkedIn Ads), Instagram marketing and community management for startups, SMEs and enterprises across Mumbai, Thane and Navi Mumbai — zero outsourcing, full transparency and monthly ROI reporting.",
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'social media marketing in Mumbai',
  h2Features: 'Social Media Marketing Services in Mumbai',
  features: [
    {
      h3: 'Paid Social Campaigns Mumbai',
      desc: 'Performance driven paid social campaigns for Mumbai businesses across Instagram, Facebook and LinkedIn — audience targeting, creative strategy, A/B testing, retargeting funnels and full ROI reporting.',
    },
    {
      h3: 'Instagram Marketing Mumbai',
      desc: 'Instagram marketing for Mumbai brands — content calendars, Reels production, story design, paid promotion, hashtag strategy, influencer coordination and community management to grow following and engagement.',
    },
    {
      h3: 'Facebook Advertising Mumbai',
      desc: 'Facebook Ads campaigns for Mumbai businesses — campaign structure, audience segmentation, ad creative, carousel ads, video ads, lead generation forms and conversion-optimised campaign management.',
    },
    {
      h3: 'LinkedIn Marketing Mumbai',
      desc: 'LinkedIn marketing for B2B Mumbai businesses — sponsored content, lead gen forms, message ads, company page management and account-based marketing targeting decision makers by industry and job title.',
    },
    {
      h3: 'Social Media Management Mumbai',
      desc: 'Full social media account management for Mumbai brands — monthly content calendars, post design, copywriting, scheduling, community management and monthly performance reporting across all platforms.',
    },
    {
      h3: 'Meta Ads Lead Generation Mumbai',
      desc: 'Meta lead generation campaigns for Mumbai businesses — lead gen forms, WhatsApp click-to-chat ads, retargeting sequences and lookalike audience campaigns that deliver qualified prospects at low cost per lead.',
    },
    {
      h3: 'Social Media Content Creation Mumbai',
      desc: 'Social media content production for Mumbai brands — graphic design, Reels scripting and editing, carousel design, story templates and short-form video content optimised for each platform algorithm.',
    },
    {
      h3: 'Social Media Strategy Mumbai',
      desc: 'Data-driven social media strategy for Mumbai businesses — platform audit, competitor analysis, audience research, content pillars, posting cadence and KPI framework aligned to your business growth objectives.',
    },
    {
      h3: 'Social Media Reporting & Analytics Mumbai',
      desc: 'Monthly social media performance reports for Mumbai clients — reach, engagement, follower growth, cost per lead, ROAS and actionable recommendations. Full transparency, no vanity metric reporting.',
    },
  ],
  h2Why: 'Why Choose NNC for Social Media Marketing in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — review campaigns in person',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to review social media performance dashboards, discuss content strategy and meet the team managing your campaigns.',
    },
    {
      n: '02',
      h3: 'In-house team — creatives, media buyers and strategists',
      body: 'NNC has in-house social media strategists, graphic designers, video editors and paid media specialists. No account managers outsourcing your work — the team you meet is the team creating your content.',
    },
    {
      n: '03',
      h3: 'Performance driven — leads and revenue, not just likes',
      body: "NNC's social media marketing is built around business outcomes — cost per lead, ROAS and qualified pipeline. Every campaign is structured for conversion, not just follower growth or engagement vanity metrics.",
    },
    {
      n: '04',
      h3: 'Full funnel — organic, paid and retargeting',
      body: 'NNC manages the full social media funnel — organic content for brand building, paid campaigns for lead generation and retargeting sequences for warm audiences. One team managing your entire social presence.',
    },
    {
      n: '05',
      h3: 'Fixed fee — no percentage of ad spend billing',
      body: 'NNC charges a fixed monthly management fee — not a percentage of ad spend. Your budget goes to your campaigns, not to an agency taking a cut of every rupee you spend on ads.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has delivered social media marketing for startups, ecommerce brands, real estate companies and B2B enterprises across Mumbai. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['Meta Ads Manager', 'LinkedIn Campaign Manager', 'Hootsuite', 'Canva Pro', 'CapCut', 'GA4', 'Meta Pixel', 'Semrush'],
  h2Tech: 'Social Media Marketing Tools',
  h2Faq: 'Social Media Marketing Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'What social media marketing services does NNC offer in Mumbai?',
      a: 'Organic content strategy, paid social campaigns (Meta Ads, LinkedIn Ads), Instagram marketing, Facebook advertising, community management and monthly reporting — all in-house.',
    },
    {
      q: 'How much does social media marketing cost in Mumbai?',
      a: 'Social media management from ₹15,000/month. Paid social campaigns from ₹20,000/month (management fee, ad spend separate). Fixed fee — no percentage of ad spend.',
    },
    {
      q: 'Do you run paid social campaigns in Mumbai?',
      a: 'Yes. NNC runs paid campaigns on Instagram, Facebook and LinkedIn — audience targeting, creative strategy, A/B testing, retargeting and full ROI reporting. Meta certified team.',
    },
    {
      q: 'Can social media marketing generate leads for my Mumbai business?',
      a: 'Yes. NNC designs lead generation campaigns using Meta lead gen forms, WhatsApp click-to-chat ads and retargeting funnels that deliver qualified prospects at low cost per lead.',
    },
    {
      q: 'Do you manage Instagram marketing for Mumbai brands?',
      a: 'Yes. NNC manages Instagram content calendars, Reels production, story design, paid promotion, hashtag strategy and community management to grow following and engagement.',
    },
    {
      q: 'Do you have a social media marketing office in Mumbai?',
      a: 'Yes. NNC has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to review campaign performance and discuss social media strategy.',
    },
  ],
}

export default function SocialMediaMarketingMumbaiPage() {
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
