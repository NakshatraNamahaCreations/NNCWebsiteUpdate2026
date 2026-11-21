import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Social Media Creative Kits & Design Services in Bangalore | NNC Digital',
  description: 'Social media creative kits and design services in Bangalore. Post templates, story kits, carousel decks and reel thumbnails for Instagram, LinkedIn and Facebook.',
  alternates: { canonical: `${SITE.url}/social-media-creative-kits` },
  keywords: 'social media creative kit bangalore, social media design services, instagram design templates, carousel design agency, linkedin creative design',
  openGraph: {
    title: 'Social Media Creative Kits & Design Services in Bangalore | NNC Digital',
    description: 'Post templates, story kits, carousel decks and reel thumbnails for every platform — brand-consistent and ready to publish.',
    url: `${SITE.url}/social-media-creative-kits`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'Social Media Creative Kits NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Social Media Creative Kits',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: 'Social media creative kit design — post templates, stories, carousels and reel thumbnails.',
  url: `${SITE.url}/social-media-creative-kits`,
}

const breadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Social Media Creative Kits', item: `${SITE.url}/social-media-creative-kits` },
  ],
}

const data = {
  badge: 'Social Media Creative',
  h1: 'Social Media',
  h1Accent: 'Creative Kits',
  tagline: 'Post templates, story kits, carousel decks, quote graphics and reel thumbnails — brand-consistent design kits your social team can reuse daily.',
  desc: 'NNC Digital designs social media creative kits for brands who want consistent, on-brand content without hiring a new designer every month. One kit covers post templates, carousels, stories, reel thumbnails and campaign graphics — all editable in Canva or Figma so your internal team can customise and publish without raising a design ticket for every post.',
  stat1: '350+',
  stat1Label: 'Creative Kits Delivered',
  serviceName: 'social media creative kits and template design',
  h2Features: 'Everything a Social Creative Kit Needs',
  features: [
    { h3: 'Post Templates (Instagram, LinkedIn, FB)', desc: 'Single-image post templates for each platform — product launches, offers, testimonials, team highlights and news.' },
    { h3: 'Carousel Templates', desc: 'Multi-slide carousel decks for how-to, listicles, case studies, product showcases and founder thought leadership.' },
    { h3: 'Story & Highlight Covers', desc: 'Instagram story templates (polls, questions, swipe-ups) and branded highlight covers for your profile.' },
    { h3: 'Reel Cover & Thumbnail Design', desc: 'Scroll-stopping reel and YouTube Shorts covers so your short-form content earns the first tap.' },
    { h3: 'Quote & Testimonial Graphics', desc: 'Branded quote cards, customer testimonial designs and founder-voice typography posts.' },
    { h3: 'Campaign Launch Kits', desc: 'Full campaign design — announcement posts, teaser graphics, countdown stories and recap carousels.' },
    { h3: 'Canva / Figma Editable Files', desc: 'Delivered as editable Canva or Figma templates — your social team edits text and swaps images without designer dependency.' },
    { h3: 'Brand-consistent Colour & Type', desc: 'Every template uses your brand palette, typography and photographic treatment — on-brand without discussion.' },
    { h3: 'Platform-specific Sizing', desc: 'Each template sized for its platform — feed, story, reel cover, LinkedIn vertical, Pinterest Pin, YouTube thumbnail.' },
  ],
  h2Why: 'Why Choose NNC for Social Creative Kits?',
  why: [
    { n: '01', h3: 'Kit, not one-off posts', body: 'One-off social design is expensive forever. A kit delivered once lets your team self-serve for months — cost efficient and consistent.' },
    { n: '02', h3: 'Canva / Figma editable — team-friendly', body: 'Templates editable in Canva or Figma mean your marketing team can edit text and swap images without raising a design ticket.' },
    { n: '03', h3: 'Brand consistency built in', body: 'Every template uses your brand palette, type and imagery rules — the posts your social team ships stay recognisable even without designer review.' },
    { n: '04', h3: 'Fixed scope, fixed price', body: 'Kit size (e.g. 25 templates, 15 story designs, 6 campaign kits) is agreed upfront with fixed pricing — no ongoing retainer unless you want one.' },
    { n: '05', h3: '35+ in-house team', body: 'Brand designers, social media designers and motion designers — all NNC employees. Visit our Bengaluru office.' },
    { n: '06', h3: '350+ creative kits delivered', body: 'D2C, service businesses, EdTech, healthcare and founder personal brands — NNC has designed kits across every major Indian content vertical.' },
  ],
  techStack: ['Canva Pro', 'Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'After Effects', 'Procreate', 'Google Fonts'],
  h2Tech: 'Design Software & Stack',
  h2Faq: 'Social Media Creative Kit Frequently Asked Questions',
  faqs: [
    { q: 'How much does a social media creative kit cost?', a: 'Basic creative kits (15–20 templates, single platform) start from ₹20,000. Comprehensive kits across Instagram, LinkedIn, Facebook and YouTube with campaign kits typically run ₹50,000–₹1.5L. All pricing fixed upfront.' },
    { q: 'How long does kit design take?', a: 'A standard single-platform kit takes 2–3 weeks. Multi-platform comprehensive kits with campaign designs take 4–6 weeks. Timelines agreed upfront.' },
    { q: 'Can my marketing team edit the templates?', a: 'Yes — that is the point. NNC delivers in Canva or Figma so non-designers can swap text, images and colours without opening Illustrator or Photoshop.' },
    { q: 'Do you include motion / animated templates?', a: 'Yes — animated text, logo stings and reel cover motion graphics can be included as part of the kit (delivered as Lottie / MP4 / After Effects project files).' },
    { q: 'Do I own the templates and designs?', a: 'Yes — complete ownership on delivery. Templates, source files, fonts and licensing clarifications all handed over.' },
    { q: 'Do you also run the social media day-to-day?', a: 'Yes — see our Social Media Management service. Kits give your internal team tools to run social; management is for when you want NNC to handle strategy, posting and reporting end-to-end.' },
  ],
}

export default function SocialMediaCreativeKitsPage() {
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
