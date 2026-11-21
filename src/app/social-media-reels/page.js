import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Social Media Reels & Motion Graphics Production in Bangalore | NNC Digital',
  description: 'Social media reel production and motion graphics in Bangalore. Instagram reels, YouTube shorts, LinkedIn motion graphics and vertical video production.',
  alternates: { canonical: `${SITE.url}/social-media-reels` },
  keywords: 'reel production bangalore, social media reels, instagram reel production, motion graphics services, youtube shorts production, vertical video production',
  openGraph: {
    title: 'Social Media Reels & Motion Graphics Production in Bangalore | NNC Digital',
    description: 'Instagram reels, YouTube shorts and motion graphics by NNC in-house editors and motion designers. Scalable monthly reel packages.',
    url: `${SITE.url}/social-media-reels`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'Social Media Reels NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Social Media Reels & Motion Graphics Production',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: 'Social media reel production, motion graphics and vertical video production.',
  url: `${SITE.url}/social-media-reels`,
}

const breadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Social Media Reels', item: `${SITE.url}/social-media-reels` },
  ],
}

const data = {
  badge: 'Social Media Reels',
  h1: 'Social Media Reels &',
  h1Accent: 'Motion Graphics',
  tagline: 'Instagram reels, YouTube shorts, LinkedIn motion graphics and vertical-first video produced monthly by NNC\'s in-house editors and motion designers.',
  desc: 'NNC Digital produces social media reels and motion graphics at scale for D2C brands, service businesses and founder personal brands across India. Monthly packages cover scripting, shoot support, editing, motion graphics, music licensing and platform-specific delivery (Instagram, YouTube Shorts, LinkedIn, Facebook) — all handled by in-house editors.',
  stat1: '5000+',
  stat1Label: 'Reels Delivered',
  serviceName: 'social media reel and motion graphics production',
  h2Features: 'Everything a Reel Package Needs',
  features: [
    { h3: 'Reel Scripting & Hooks', desc: 'Short-form scripts built around proven hooks — because 3-second drop-offs are the reason most reels never reach 1000 views.' },
    { h3: 'Shoot Support (Remote or Studio)', desc: 'NNC supports founder-led shoots at your office, our studio or remotely over video — with shot list and framing guidance.' },
    { h3: 'Editing & Captions', desc: 'Fast-paced editing with on-screen captions, subtitles, text animations and the pacing short-form algorithms reward.' },
    { h3: 'Motion Graphics', desc: 'Animated infographics, lower thirds, callouts and transitions — the layer that makes talking-head content watchable.' },
    { h3: 'Trending Audio & Music', desc: 'Licensed and trending audio applied correctly (tempo-synced cuts) so reels get platform algorithmic boost.' },
    { h3: 'Platform-specific Cuts', desc: 'Same footage delivered as 9:16 Instagram reel, YouTube short, LinkedIn vertical and Facebook reel — formats, captions and pacing all platform-tuned.' },
    { h3: 'Monthly Retainer Packages', desc: 'Fixed monthly volume (e.g. 12 or 20 reels / month) at predictable cost — scale that one-off editors cannot match.' },
    { h3: 'Content Calendar Alignment', desc: 'Reels planned against your content calendar / campaign themes — not disconnected one-offs.' },
    { h3: 'Reel Analytics & Iteration', desc: 'Monthly review of which reels hit, which did not, and what to double down on next month.' },
  ],
  h2Why: 'Why Choose NNC for Reel Production?',
  why: [
    { n: '01', h3: 'Built for scale — 10-20+ reels/month', body: 'Freelance editors burn out past 5–6 reels a month. NNC\'s in-house editor pool scales to 20+ reels / month per brand without quality drop.' },
    { n: '02', h3: 'Reel-specific skill, not general video edit', body: 'NNC editors specialise in short-form — cuts, captions, trending audio handling and hook pacing. Long-form video editing skills do not transfer directly.' },
    { n: '03', h3: 'Scripts + shoots + edit — one team', body: 'Most brands hire a script writer, run their own shoot, then hand footage to an editor. NNC covers all three — faster turnaround, higher consistency.' },
    { n: '04', h3: 'Fixed monthly volume', body: 'Clear monthly deliverable count — not vague \"ongoing reel retainers\". Scope is agreed; budget is predictable.' },
    { n: '05', h3: '35+ in-house team', body: 'Scripters, editors, motion designers and content strategists — all NNC employees. Visit our Bengaluru office.' },
    { n: '06', h3: '5000+ reels delivered', body: 'D2C, EdTech, healthcare, real estate, B2B SaaS and founder personal brands — NNC produces reels for every major Indian content vertical.' },
  ],
  techStack: ['Adobe Premiere Pro', 'After Effects', 'Final Cut Pro', 'CapCut Pro', 'DaVinci Resolve', 'Figma', 'Illustrator', 'Pro Tools'],
  h2Tech: 'Reel Editing Tools & Stack',
  h2Faq: 'Social Media Reels Frequently Asked Questions',
  faqs: [
    { q: 'How much does reel production cost?', a: 'NNC reel packages start from ₹25,000/month for 8 reels (edit-only — you supply footage), and ₹60,000+/month for 15-20 reels with scripting, shoot support and motion graphics. All pricing agreed upfront.' },
    { q: 'What is the turnaround time per reel?', a: 'For retainer clients, each reel typically delivers in 3–5 working days from footage upload. First-draft, revisions and final cut included.' },
    { q: 'Can NNC shoot the reel footage?', a: 'Yes — at your office, our studio or remotely coached. NNC can also work from footage you shoot on phone — short-form content is phone-shoot-friendly when framed right.' },
    { q: 'How do approvals work?', a: 'NNC delivers first drafts via shared drive or WhatsApp. Two rounds of revisions included per reel; additional rounds are available at per-revision rate.' },
    { q: 'Do you handle trending audio correctly?', a: 'Yes. NNC editors keep track of what audio is trending on each platform and cut footage to match beats — the pacing signal that reel algorithms reward.' },
    { q: 'Do I own the reel files?', a: 'Yes — final MP4s, selected raw footage and project files on request. Reels delivered monthly to your preferred shared drive or cloud folder.' },
  ],
}

export default function SocialMediaReelsPage() {
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
