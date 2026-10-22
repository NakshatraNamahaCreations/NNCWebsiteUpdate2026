import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Social Media Marketing Agency in Mumbai | NNC Digital',
  description:
    'Top social media marketing agency in Mumbai. Instagram marketing, Facebook Ads, Meta Ads, LinkedIn marketing agency, social media management & social media services for Mumbai businesses. Office in Thane West. Transparent reporting.',
  alternates: {
    canonical: `${SITE.url}/social-media-marketing-agency-mumbai`,
  },
  keywords:
    'social media marketing agency mumbai, social media marketing company mumbai, instagram marketing agency mumbai, facebook ads agency mumbai, meta ads agency mumbai, social media management mumbai, linkedin marketing agency mumbai, social media services mumbai',
  openGraph: {
    title: 'Social Media Marketing Agency in Mumbai | NNC Digital',
    description:
      'Social media marketing agency in Mumbai — Instagram marketing, Facebook Ads, Meta Ads, LinkedIn marketing & social media management. Office in Thane West.',
    url: `${SITE.url}/social-media-marketing-agency-mumbai`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Social Media Marketing Agency in Mumbai – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Social Media Marketing Agency in Mumbai | NNC Digital',
    description:
      'Social media marketing agency Mumbai — Instagram, Facebook Ads, Meta Ads, LinkedIn & social media management. Office in Thane West.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Social Media Marketing Agency in Mumbai',
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
    'Instagram Marketing',
    'Facebook Ads',
    'Meta Ads Management',
    'LinkedIn Marketing',
    'Social Media Management',
    'Social Media Advertising',
  ],
  description:
    'Full-service social media marketing agency in Mumbai — Instagram marketing, Facebook Ads, Meta Ads, LinkedIn marketing and social media management for Mumbai businesses. Branch office in Thane West.',
  url: `${SITE.url}/social-media-marketing-agency-mumbai`,
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
      name: 'Social Media Marketing Agency Mumbai',
      item: `${SITE.url}/social-media-marketing-agency-mumbai`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best social media marketing agency in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Mumbai's top-rated social media marketing agencies — 565+ projects delivered, 4.9★ Google rating, branch office in Thane West. We manage Instagram, Facebook, Meta Ads, LinkedIn and YouTube for Mumbai businesses with transparent monthly reporting.",
      },
    },
    {
      '@type': 'Question',
      name: 'What social media services does NNC provide in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Mumbai provides full social media services — Instagram marketing, Facebook Ads management, Meta Ads (Facebook & Instagram), LinkedIn marketing, social media management, content creation, community management and monthly analytics reporting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you run Instagram marketing for Mumbai businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC manages Instagram marketing for Mumbai brands — organic content strategy, Reels creation, story content, influencer tie-ups and Instagram Ads (paid reach, story ads, shopping ads). We report on reach, engagement and follower growth monthly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you manage Facebook Ads and Meta Ads in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC is a Facebook Ads agency and Meta Ads agency in Mumbai — managing campaigns across Facebook and Instagram. Audience research, creative strategy, A/B testing, retargeting, Lookalike audiences and conversion optimisation. We report on leads and revenue, not just reach.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer LinkedIn marketing for Mumbai B2B companies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides LinkedIn marketing agency services for Mumbai B2B businesses — company page management, LinkedIn Ads (Sponsored Content, InMail, Lead Gen Forms), thought leadership content and decision-maker audience targeting.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does social media management include for Mumbai businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC\'s social media management in Mumbai includes monthly content calendar, post design, caption writing, hashtag strategy, scheduling, community management (comments and DMs), story content and monthly performance reporting across all managed platforms.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a social media marketing office in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. You can visit us to discuss your social media strategy, review content calendars and meet the team managing your accounts.',
      },
    },
  ],
}

const data = {
  badge: 'Social Media Marketing · Mumbai',
  h1: 'Social Media Marketing Agency',
  h1Accent: 'in Mumbai',
  tagline:
    'Full-service social media marketing agency in Mumbai — Instagram marketing, Facebook Ads, Meta Ads, LinkedIn marketing agency, social media management & social media services. Office in Thane West.',
  desc:
    'NNC Digital is a dedicated social media marketing agency in Mumbai managing Instagram, Facebook, Meta Ads, LinkedIn and YouTube for businesses across Mumbai, Thane and Navi Mumbai. From organic social media management and content creation to paid Facebook Ads, Meta Ads and LinkedIn campaigns — every account is handled by in-house social media specialists with transparent monthly reporting on real outcomes: reach, engagement, leads and conversions.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'social media marketing in Mumbai',
  h2Features: 'Social Media Marketing Services in Mumbai',
  features: [
    {
      h3: 'Social Media Marketing Company Mumbai',
      desc: 'Full-funnel social media marketing for Mumbai brands — organic content, paid ads, community management and analytics across Instagram, Facebook, LinkedIn and YouTube. One agency, all platforms.',
    },
    {
      h3: 'Instagram Marketing Agency Mumbai',
      desc: 'Instagram marketing in Mumbai — content strategy, Reels creation, story content, carousel posts, hashtag research, influencer collaborations and Instagram Ads. Consistent brand presence that builds followers and drives enquiries.',
    },
    {
      h3: 'Facebook Ads Agency Mumbai',
      desc: 'Facebook Ads management for Mumbai businesses — campaign setup, audience targeting, creative testing, retargeting and conversion optimisation. Campaigns optimised for leads, purchases and store visits not just impressions.',
    },
    {
      h3: 'Meta Ads Agency Mumbai',
      desc: 'Meta Ads (Facebook & Instagram combined) campaign management — Advantage+ audiences, Lookalike targeting, dynamic product ads, lead gen forms and full-funnel retargeting across Meta\'s entire Mumbai audience.',
    },
    {
      h3: 'LinkedIn Marketing Agency Mumbai',
      desc: 'LinkedIn marketing for Mumbai B2B companies — company page management, Sponsored Content, Message Ads, Lead Gen Forms, thought leadership posts and decision-maker targeting by industry, job title and company size.',
    },
    {
      h3: 'Social Media Management Mumbai',
      desc: 'Complete social media management in Mumbai — monthly content calendar, post design, caption writing, scheduling, community management (comments & DMs), story content and monthly performance reports.',
    },
    {
      h3: 'Social Media Services Mumbai — Content Creation',
      desc: 'In-house social media content creation for Mumbai brands — static posts, Reels scripts, carousel design, story templates, product flat-lays and short-form video briefs. Brand-consistent creative every month.',
    },
    {
      h3: 'Social Media Advertising Mumbai — Lead Generation',
      desc: 'Paid social media advertising focused on lead generation for Mumbai businesses — lead form campaigns on Facebook, Instagram and LinkedIn with CRM integration, instant notification and weekly cost-per-lead reporting.',
    },
    {
      h3: 'YouTube & Video Social Media Mumbai',
      desc: 'YouTube channel management, video SEO, thumbnail design, description optimisation and YouTube Ads for Mumbai brands — growing subscribers and driving qualified traffic from video content.',
    },
  ],
  h2Why: 'Why Choose NNC as Your Social Media Marketing Agency in Mumbai?',
  why: [
    {
      n: '01',
      h3: 'Mumbai branch office — meet your social media team',
      body: 'NNC has a branch office at Lodha Signet, Thane West, Mumbai. Visit us to review your content calendar, go through campaign performance in person and meet the Instagram, Meta and LinkedIn specialists on your account.',
    },
    {
      n: '02',
      h3: 'In-house specialists — not outsourced freelancers',
      body: 'Every content creator, Meta Ads manager and LinkedIn specialist is a full-time NNC employee. Consistent people on your account month after month — no handoffs to new freelancers every quarter.',
    },
    {
      n: '03',
      h3: 'Reporting on leads and sales — not vanity metrics',
      body: 'NNC reports on what matters to Mumbai business owners — enquiries from social, cost per lead from Meta Ads, LinkedIn connection requests converted to meetings. Not just reach, likes and follower count.',
    },
    {
      n: '04',
      h3: 'All platforms — Instagram, Facebook, LinkedIn, YouTube',
      body: 'One agency managing all your social media channels with a consistent brand voice and cross-platform content strategy. No need to brief three separate agencies for Instagram, LinkedIn and YouTube.',
    },
    {
      n: '05',
      h3: 'No long-term lock-in contracts',
      body: 'NNC operates on monthly retainers with no 12-month lock-in. Mumbai clients stay because of results — not because they are contractually trapped. Month-to-month flexibility from day one.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has delivered social media marketing for ecommerce, real estate, healthcare, education and B2B businesses across Mumbai. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['Meta Business Suite', 'LinkedIn Campaign Manager', 'Instagram Ads', 'Canva Pro', 'Adobe Express', 'Google Analytics 4', 'Meta Pixel', 'Hootsuite'],
  h2Tech: 'Social Media Tools & Platforms',
  h2Faq: 'Social Media Marketing Agency Mumbai — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best social media marketing agency in Mumbai?',
      a: "NNC Digital is among Mumbai's top social media marketing agencies — 565+ projects, 4.9★ Google rating, office in Thane West. Instagram marketing, Facebook Ads, Meta Ads, LinkedIn and social media management — all in-house.",
    },
    {
      q: 'Do you manage Instagram marketing in Mumbai?',
      a: 'Yes. NNC manages Instagram marketing for Mumbai brands — organic content, Reels, story content and Instagram Ads. Monthly reporting on reach, engagement and follower growth.',
    },
    {
      q: 'Do you run Facebook Ads and Meta Ads in Mumbai?',
      a: 'Yes. NNC is a Facebook Ads and Meta Ads agency in Mumbai — audience targeting, creative testing, retargeting and conversion optimisation. We report on leads and revenue, not just reach.',
    },
    {
      q: 'Do you offer LinkedIn marketing in Mumbai?',
      a: 'Yes. NNC provides LinkedIn marketing for Mumbai B2B companies — company page management, LinkedIn Ads and thought leadership content targeting decision-makers by industry and job title.',
    },
    {
      q: 'What is included in social media management in Mumbai?',
      a: 'Content calendar, post design, caption writing, scheduling, community management, story content and monthly performance reporting across all managed platforms.',
    },
    {
      q: 'Do you have a social media office in Mumbai?',
      a: 'Yes. NNC has a branch office at Lodha Signet, Kolshet Road, Thane West, Mumbai – 400 607. Visit us to review content strategy and campaign reports in person.',
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
