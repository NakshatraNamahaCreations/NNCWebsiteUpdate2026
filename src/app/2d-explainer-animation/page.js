import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: '2D Explainer Animation Studio in Bangalore | NNC Digital',
  description: '2D explainer animation video production in Bangalore. Product explainers, app walkthroughs, SaaS demos and animated marketing videos scripted and animated in-house.',
  alternates: { canonical: `${SITE.url}/2d-explainer-animation` },
  keywords: '2d explainer animation bangalore, explainer video company, animated video creators, product explainer video, saas explainer video, animated marketing video',
  openGraph: {
    title: '2D Explainer Animation Studio in Bangalore | NNC Digital',
    description: 'Product explainers, app walkthroughs and SaaS demos scripted, storyboarded and animated by NNC\'s in-house animation team.',
    url: `${SITE.url}/2d-explainer-animation`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: '2D Explainer Animation NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: '2D Explainer Animation',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: '2D explainer animation and animated marketing video production.',
  url: `${SITE.url}/2d-explainer-animation`,
}

const breadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: '2D Explainer Animation', item: `${SITE.url}/2d-explainer-animation` },
  ],
}

const data = {
  badge: '2D Explainer Animation',
  h1: '2D Explainer',
  h1Accent: 'Animation Studio',
  tagline: 'Product explainers, app walkthroughs, SaaS demos and animated marketing videos scripted, storyboarded, animated and sound-designed in-house.',
  desc: 'NNC Digital\'s animation studio produces 2D explainer videos for SaaS, D2C, EdTech, healthcare and fintech brands across India. Every explainer is scripted from the audience\'s problem — not a product feature list — storyboarded frame by frame, animated in After Effects and delivered with professional voiceover and sound design. Multi-language versions ship from the same master animation.',
  stat1: '220+',
  stat1Label: 'Explainers Delivered',
  serviceName: '2D explainer animation and animated video production',
  h2Features: 'Everything a 2D Explainer Needs',
  features: [
    { h3: 'Audience-first Scriptwriting', desc: 'Scripts open with the audience\'s problem and close with the product\'s payoff — not a founder monologue.' },
    { h3: 'Storyboarding & Style Frames', desc: 'Frame-by-frame storyboards and style frames approved before animation starts — no wasted animation budget on wrong direction.' },
    { h3: 'Character & Scene Design', desc: 'Custom-designed characters, backgrounds and props matched to your brand palette and personality.' },
    { h3: 'After Effects Animation', desc: 'Smooth animation with correct easing, timing and pacing. Not generic Vyond / PowToon template animation.' },
    { h3: 'Professional Voiceover', desc: 'Casted voiceover talent — male / female, English / Hindi / regional — recorded in professional studios.' },
    { h3: 'Sound Design & Music', desc: 'Licensed music, sound effects and audio mastering so the video feels polished — not silent slides with voiceover.' },
    { h3: 'Multi-language Deliveries', desc: 'Single animation, delivered in English, Hindi, Kannada, Tamil, Telugu and more with language-specific voiceovers.' },
    { h3: 'Multi-platform Cuts', desc: '60s YouTube explainer, 30s social cut, 15s teaser and square / vertical reformats from the same master.' },
    { h3: 'Subtitles & Captions', desc: 'Burned-in captions or sidecar SRT files for silent-watch platforms (Instagram, LinkedIn, Facebook).' },
  ],
  h2Why: 'Why Choose NNC for 2D Explainers?',
  why: [
    { n: '01', h3: 'Scripted for the audience — not the brief', body: 'Explainers that start with \"We are X company\" lose viewers in 10 seconds. NNC scripts open with the viewer\'s problem — attention is earned before pitch starts.' },
    { n: '02', h3: 'Custom animation — no template tools', body: 'NNC animates in After Effects with custom characters. We do not sell template-based Vyond or PowToon explainers that look like every other SaaS video.' },
    { n: '03', h3: 'In-house team under one roof', body: 'Scripters, designers, animators, voiceover coordinators and sound designers all on NNC payroll. Deadlines and revisions stay predictable.' },
    { n: '04', h3: 'Fixed price — no scope creep', body: 'Every explainer is quoted as a fixed scope. No surprise invoices for VO revisions, subtitle versions or music licence.' },
    { n: '05', h3: 'Multi-language from one animation', body: 'Shoot animation once; deliver in 5+ Indian languages. Cost add-on is only voiceover and timing adjustment.' },
    { n: '06', h3: '220+ explainers delivered', body: 'SaaS, fintech, EdTech, healthcare, D2C and manufacturing — NNC has animated explainers for every major B2B and B2C category.' },
  ],
  techStack: ['Adobe After Effects', 'Illustrator', 'Photoshop', 'Premiere Pro', 'Audition', 'DaVinci Resolve', 'Figma', 'Pro Tools'],
  h2Tech: 'Animation Software & Stack',
  h2Faq: '2D Explainer Animation Frequently Asked Questions',
  faqs: [
    { q: 'How much does a 2D explainer animation cost?', a: 'Explainers at NNC start from ₹40,000 for a 60s standard-style animation, and ₹1L–₹3L for custom character animation with premium voiceover and sound design. All pricing is fixed before work starts.' },
    { q: 'How long does it take to produce?', a: 'A standard 60–90 second explainer takes 3–5 weeks: scripting (1 week), storyboard (1 week), animation and VO (2 weeks), revisions and delivery (1 week). Faster turnarounds available for simpler scope.' },
    { q: 'Can you produce in Indian regional languages?', a: 'Yes — Hindi, Kannada, Tamil, Telugu, Marathi, Bengali, Gujarati, Malayalam and more. Native-speaker voiceover artists and script translation included.' },
    { q: 'Do I own the final animation and source files?', a: 'Yes — final MP4 deliveries plus After Effects source files are handed over on completion. Future edits can be made by your internal team or by NNC on a per-edit basis.' },
    { q: 'What makes a good explainer brief?', a: 'A one-page brief covering (a) audience, (b) their current problem, (c) what the product does differently, and (d) the single action we want viewers to take after watching. NNC will shape the script around that.' },
    { q: 'Do you handle 3D animation too?', a: 'Yes — 3D product animation, architectural walkthroughs and 3D character animation are separate services. 2D explainers are what this page covers.' },
  ],
}

export default function TwoDExplainerAnimationPage() {
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
