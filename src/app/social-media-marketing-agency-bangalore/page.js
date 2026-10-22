import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Social Media Marketing Agency in Bangalore | NNC Digital',
  description:
    'Top social media marketing agency in Bangalore. Instagram marketing, Facebook Ads, Meta Ads, LinkedIn marketing agency, social media management & social media services for Bangalore businesses. Headquartered in Whitefield. Transparent reporting.',
  alternates: {
    canonical: `${SITE.url}/social-media-marketing-agency-bangalore`,
  },
  keywords:
    'social media marketing agency bangalore, social media marketing company bangalore, instagram marketing agency bangalore, facebook ads agency bangalore, meta ads agency bangalore, social media management bangalore, linkedin marketing agency bangalore, social media services bangalore',
  openGraph: {
    title: 'Social Media Marketing Agency in Bangalore | NNC Digital',
    description:
      'Social media marketing agency in Bangalore — Instagram marketing, Facebook Ads, Meta Ads, LinkedIn marketing & social media management. Headquartered in Whitefield.',
    url: `${SITE.url}/social-media-marketing-agency-bangalore`,
    type: 'website',
    images: [
      {
        url: SITE.teamPhoto,
        width: 1200,
        height: 630,
        alt: 'Social Media Marketing Agency in Bangalore – NNC Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nncbengaluru',
    title: 'Social Media Marketing Agency in Bangalore | NNC Digital',
    description:
      'Social media marketing agency Bangalore — Instagram, Facebook Ads, Meta Ads, LinkedIn & social media management. Headquartered in Whitefield.',
    images: [SITE.teamPhoto],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Social Media Marketing Agency in Bangalore',
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
    'Social Media Marketing',
    'Instagram Marketing',
    'Facebook Ads',
    'Meta Ads Management',
    'LinkedIn Marketing',
    'Social Media Management',
    'Social Media Advertising',
  ],
  description:
    'Full-service social media marketing agency in Bangalore — Instagram marketing, Facebook Ads, Meta Ads, LinkedIn marketing and social media management for Bangalore businesses. Headquartered in Whitefield.',
  url: `${SITE.url}/social-media-marketing-agency-bangalore`,
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
      name: 'Social Media Marketing Agency Bangalore',
      item: `${SITE.url}/social-media-marketing-agency-bangalore`,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best social media marketing agency in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC Digital is among Bangalore's top-rated social media marketing agencies — 565+ projects delivered, 4.9★ Google rating, headquartered in Whitefield, Bangalore. We manage Instagram, Facebook, Meta Ads, LinkedIn and YouTube for Bangalore businesses with transparent monthly reporting.",
      },
    },
    {
      '@type': 'Question',
      name: 'What social media services does NNC provide in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NNC Bangalore provides full social media services — Instagram marketing, Facebook Ads management, Meta Ads (Facebook & Instagram), LinkedIn marketing, social media management, content creation, community management and monthly analytics reporting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you run Instagram marketing for Bangalore businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC manages Instagram marketing for Bangalore brands — organic content strategy, Reels creation, story content, influencer tie-ups and Instagram Ads (paid reach, story ads, shopping ads). Monthly reporting on reach, engagement and follower growth.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you manage Facebook Ads and Meta Ads in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC is a Facebook Ads agency and Meta Ads agency in Bangalore — managing campaigns across Facebook and Instagram. Audience research, creative strategy, A/B testing, retargeting, Lookalike audiences and conversion optimisation. We report on leads and revenue, not just reach.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer LinkedIn marketing for Bangalore B2B companies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC provides LinkedIn marketing agency services for Bangalore B2B businesses — company page management, LinkedIn Ads (Sponsored Content, InMail, Lead Gen Forms), thought leadership content and decision-maker audience targeting.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does social media management include for Bangalore businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NNC's social media management in Bangalore includes monthly content calendar, post design, caption writing, hashtag strategy, scheduling, community management (comments and DMs), story content and monthly performance reporting across all managed platforms.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a social media marketing office in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. NNC Digital is headquartered at Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit us to discuss your social media strategy, review content calendars and meet the team managing your accounts.',
      },
    },
  ],
}

const data = {
  badge: 'Social Media Marketing · Bangalore',
  h1: 'Social Media Marketing Agency',
  h1Accent: 'in Bangalore',
  tagline:
    'Full-service social media marketing agency in Bangalore — Instagram marketing, Facebook Ads, Meta Ads, LinkedIn marketing agency, social media management & social media services. Headquartered in Whitefield.',
  desc:
    'NNC Digital is a dedicated social media marketing agency in Bangalore managing Instagram, Facebook, Meta Ads, LinkedIn and YouTube for businesses across Bangalore, Whitefield and Electronic City. From organic social media management and content creation to paid Facebook Ads, Meta Ads and LinkedIn campaigns — every account is handled by in-house social media specialists with transparent monthly reporting on real outcomes: reach, engagement, leads and conversions.',
  stat1: '565+',
  stat1Label: 'Projects Delivered',
  serviceName: 'social media marketing in Bangalore',
  h2Features: 'Social Media Marketing Services in Bangalore',
  features: [
    {
      h3: 'Social Media Marketing Company Bangalore',
      desc: 'Full-funnel social media marketing for Bangalore brands — organic content, paid ads, community management and analytics across Instagram, Facebook, LinkedIn and YouTube. One agency, all platforms.',
    },
    {
      h3: 'Instagram Marketing Agency Bangalore',
      desc: 'Instagram marketing in Bangalore — content strategy, Reels creation, story content, carousel posts, hashtag research, influencer collaborations and Instagram Ads. Consistent brand presence that builds followers and drives enquiries.',
    },
    {
      h3: 'Facebook Ads Agency Bangalore',
      desc: 'Facebook Ads management for Bangalore businesses — campaign setup, audience targeting, creative testing, retargeting and conversion optimisation. Campaigns optimised for leads, purchases and store visits not just impressions.',
    },
    {
      h3: 'Meta Ads Agency Bangalore',
      desc: "Meta Ads (Facebook & Instagram combined) campaign management — Advantage+ audiences, Lookalike targeting, dynamic product ads, lead gen forms and full-funnel retargeting across Meta's entire Bangalore audience.",
    },
    {
      h3: 'LinkedIn Marketing Agency Bangalore',
      desc: 'LinkedIn marketing for Bangalore B2B companies — company page management, Sponsored Content, Message Ads, Lead Gen Forms, thought leadership posts and decision-maker targeting by industry, job title and company size.',
    },
    {
      h3: 'Social Media Management Bangalore',
      desc: 'Complete social media management in Bangalore — monthly content calendar, post design, caption writing, scheduling, community management (comments & DMs), story content and monthly performance reports.',
    },
    {
      h3: 'Social Media Services Bangalore — Content Creation',
      desc: 'In-house social media content creation for Bangalore brands — static posts, Reels scripts, carousel design, story templates, product flat-lays and short-form video briefs. Brand-consistent creative every month.',
    },
    {
      h3: 'Social Media Advertising Bangalore — Lead Generation',
      desc: 'Paid social media advertising focused on lead generation for Bangalore businesses — lead form campaigns on Facebook, Instagram and LinkedIn with CRM integration, instant notification and weekly cost-per-lead reporting.',
    },
    {
      h3: 'YouTube & Video Social Media Bangalore',
      desc: 'YouTube channel management, video SEO, thumbnail design, description optimisation and YouTube Ads for Bangalore brands — growing subscribers and driving qualified traffic from video content.',
    },
  ],
  h2Why: 'Why Choose NNC as Your Social Media Marketing Agency in Bangalore?',
  why: [
    {
      n: '01',
      h3: 'Bangalore headquarters — meet your social media team',
      body: 'NNC is headquartered at Prestige Shantiniketan, Whitefield, Bangalore. Visit us to review your content calendar, go through campaign performance in person and meet the Instagram, Meta and LinkedIn specialists on your account.',
    },
    {
      n: '02',
      h3: 'In-house specialists — not outsourced freelancers',
      body: 'Every content creator, Meta Ads manager and LinkedIn specialist is a full-time NNC employee. Consistent people on your account month after month — no handoffs to new freelancers every quarter.',
    },
    {
      n: '03',
      h3: 'Reporting on leads and sales — not vanity metrics',
      body: 'NNC reports on what matters to Bangalore business owners — enquiries from social, cost per lead from Meta Ads, LinkedIn connection requests converted to meetings. Not just reach, likes and follower count.',
    },
    {
      n: '04',
      h3: 'All platforms — Instagram, Facebook, LinkedIn, YouTube',
      body: 'One agency managing all your social media channels with a consistent brand voice and cross-platform content strategy. No need to brief three separate agencies for Instagram, LinkedIn and YouTube.',
    },
    {
      n: '05',
      h3: 'No long-term lock-in contracts',
      body: 'NNC operates on monthly retainers with no 12-month lock-in. Bangalore clients stay because of results — not because they are contractually trapped. Month-to-month flexibility from day one.',
    },
    {
      n: '06',
      h3: '565+ projects delivered — 4.9★ Google rating',
      body: 'NNC has delivered social media marketing for ecommerce, real estate, healthcare, education and B2B businesses across Bangalore. 4.9★ rated on Google with verifiable client reviews.',
    },
  ],
  techStack: ['Meta Business Suite', 'LinkedIn Campaign Manager', 'Instagram Ads', 'Canva Pro', 'Adobe Express', 'Google Analytics 4', 'Meta Pixel', 'Hootsuite'],
  h2Tech: 'Social Media Tools & Platforms',
  h2Faq: 'Social Media Marketing Agency Bangalore — Frequently Asked Questions',
  faqs: [
    {
      q: 'Which is the best social media marketing agency in Bangalore?',
      a: "NNC Digital is among Bangalore's top social media marketing agencies — 565+ projects, 4.9★ Google rating, headquartered in Whitefield. Instagram marketing, Facebook Ads, Meta Ads, LinkedIn and social media management — all in-house.",
    },
    {
      q: 'Do you manage Instagram marketing in Bangalore?',
      a: 'Yes. NNC manages Instagram marketing for Bangalore brands — organic content, Reels, story content and Instagram Ads. Monthly reporting on reach, engagement and follower growth.',
    },
    {
      q: 'Do you run Facebook Ads and Meta Ads in Bangalore?',
      a: 'Yes. NNC is a Facebook Ads and Meta Ads agency in Bangalore — audience targeting, creative testing, retargeting and conversion optimisation. We report on leads and revenue, not just reach.',
    },
    {
      q: 'Do you offer LinkedIn marketing in Bangalore?',
      a: 'Yes. NNC provides LinkedIn marketing for Bangalore B2B companies — company page management, LinkedIn Ads and thought leadership content targeting decision-makers.',
    },
    {
      q: 'What is included in social media management in Bangalore?',
      a: 'Content calendar, post design, caption writing, scheduling, community management, story content and monthly performance reporting across all managed platforms.',
    },
    {
      q: 'Do you have a social media office in Bangalore?',
      a: 'Yes. NNC is headquartered at Prestige Shantiniketan, Whitefield, Bangalore 560048. Visit us to review content strategy and campaign reports in person.',
    },
  ],
}

export default function SocialMediaMarketingBangalorePage() {
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
