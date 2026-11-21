import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Social Media Management Agency in Bangalore | NNC Digital',
  description: 'Instagram, LinkedIn, Facebook and YouTube social media management in Bangalore. In-house content, reels, strategy and reporting. Fixed monthly deliverables.',
  alternates: { canonical: `${SITE.url}/social-media-management` },
  keywords: 'social media management bangalore, instagram marketing agency, linkedin management, social media agency bangalore, content calendar, reel production',
  openGraph: {
    title: 'Social Media Management Agency in Bangalore | NNC Digital',
    description: 'Instagram, LinkedIn, Facebook and YouTube managed by in-house NNC team. Content, reels, strategy and reporting under one roof.',
    url: `${SITE.url}/social-media-management`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'Social Media Management NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Social Media Management',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: 'Social media management for Instagram, LinkedIn, Facebook and YouTube with in-house content and reporting.',
  url: `${SITE.url}/social-media-management`,
}

const breadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Social Media Management', item: `${SITE.url}/social-media-management` },
  ],
}

const data = {
  badge: 'Social Media Management',
  h1: 'Social Media',
  h1Accent: 'Management Agency',
  tagline: 'Instagram, LinkedIn, Facebook and YouTube managed end-to-end — strategy, content calendar, in-house reels, carousels and reporting every month.',
  desc: 'NNC Digital runs social media for brands, service businesses and founders across India who need a dependable content engine instead of the usual freelancer churn. Every account ships with a monthly content calendar approved in advance, in-house reels and carousels produced to brand guidelines, platform-specific publishing and reporting on reach, engagement and follower growth.',
  stat1: '80+',
  stat1Label: 'Brands Managed',
  serviceName: 'social media management and content production',
  h2Features: 'Everything a Social Media Account Needs',
  features: [
    { h3: 'Monthly Content Calendar', desc: 'Platform-wise calendar locked in advance so stakeholders approve content before it goes live — not after.' },
    { h3: 'In-house Reels & Video', desc: 'Instagram Reels, YouTube Shorts and LinkedIn videos produced by NNC editors and motion designers. No outsourcing.' },
    { h3: 'Carousels & Static Posts', desc: 'Platform-specific carousels, infographics and static posts produced to brand-consistent design templates.' },
    { h3: 'LinkedIn Thought Leadership', desc: 'Ghostwritten posts, carousels and newsletters for founders and executives — written from your voice, not a generic template.' },
    { h3: 'Platform-specific Captioning', desc: 'Captions written for the algorithm and audience of each platform — Instagram, LinkedIn, Facebook are not the same.' },
    { h3: 'Community Management', desc: 'Comments, DMs and brand-mention response within SLAs — handled by NNC account team, not bots.' },
    { h3: 'Hashtag & Keyword Research', desc: 'Niche-specific hashtag strategy and LinkedIn / YouTube SEO for discovery — not generic popular hashtags.' },
    { h3: 'Reel Scripting & Shoot Support', desc: 'For brands with founder-led content, NNC scripts reels and supports shoots — remote or at your office.' },
    { h3: 'Monthly Reports', desc: 'Reach, engagement, follower growth, top-performing content and platform-specific insights in Looker Studio dashboards.' },
  ],
  h2Why: 'Why Choose NNC for Social Media?',
  why: [
    { n: '01', h3: 'Strategy + production under one roof', body: 'Most agencies strategise; freelancers produce. NNC does both in-house — approved strategy actually ships on time.' },
    { n: '02', h3: 'Reels and video produced in-house', body: 'With motion designers and video editors on staff, NNC produces the reel-heavy content formats that actually drive reach in 2026 — not just static posts.' },
    { n: '03', h3: 'Fixed monthly deliverables', body: 'Clear monthly count — e.g. 12 reels, 8 carousels, 30 stories, 4 LinkedIn long-form posts. No vague "ongoing content" retainers.' },
    { n: '04', h3: 'Reporting on reach + follower quality', body: 'NNC reports on reach, engaged accounts and follower growth — not vanity like-counts.' },
    { n: '05', h3: '35+ in-house team', body: 'Strategists, content writers, designers, video editors and motion designers — all NNC employees. Visit our Bengaluru office and meet them.' },
    { n: '06', h3: '80+ brands managed', body: 'D2C, EdTech, healthcare, real estate, B2B SaaS and founder personal brands — NNC runs social across every major Indian vertical.' },
  ],
  techStack: ['Instagram', 'LinkedIn', 'Facebook', 'YouTube', 'Buffer', 'Canva', 'Adobe Premiere', 'Looker Studio'],
  h2Tech: 'Social Media Tools & Stack',
  h2Faq: 'Social Media Management Frequently Asked Questions',
  faqs: [
    { q: 'What does social media management cost?', a: 'NNC retainers start from ₹35,000/month for a single-platform package (Instagram or LinkedIn with 12 posts + 4 reels). Multi-platform packages with higher reel counts and community management run ₹60,000–₹1.5L/month. All fees agreed upfront.' },
    { q: 'How many posts and reels do you produce per month?', a: 'Standard packages include 12–20 feed posts, 4–8 reels, 20–30 stories and 1–2 long-form videos per month. Exact volume is set in the retainer based on platform and format mix.' },
    { q: 'Do you handle paid promotion of social posts?', a: 'Yes — boosted posts, dark posts and campaign creation can be bundled with the social retainer or run as a separate Meta Ads engagement. We recommend separating the two for clean attribution.' },
    { q: 'How do approvals work?', a: 'NNC shares the content calendar 1–2 weeks before publish date. Approvals happen in a shared drive or Notion with comment threads. Revisions are included; unlimited changes are not.' },
    { q: 'Do you need me to be in reels?', a: 'No — but reels featuring founders / staff / behind-the-scenes outperform purely graphic content by 3-5x. NNC can script and support shoots at your office, or work with your existing BTS footage and voiceover.' },
    { q: 'Who owns the social accounts?', a: 'You do — always. NNC operates under your accounts with assigned editor / manager access. If we part ways, your accounts, content and followers stay with you.' },
  ],
}

export default function SocialMediaManagementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
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
