import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Pitch Deck Design Agency in Bangalore | Investor Decks | NNC Digital',
  description: 'Pitch deck design services in Bangalore. Investor decks, sales decks, product decks and conference talks — storytelling + design by NNC in-house team.',
  alternates: { canonical: `${SITE.url}/pitch-deck-design` },
  keywords: 'pitch deck design bangalore, investor deck design, startup pitch deck, sales deck design, series a pitch deck, seed round pitch deck',
  openGraph: {
    title: 'Pitch Deck Design Agency in Bangalore | Investor Decks | NNC Digital',
    description: 'Investor and sales decks that combine clear storytelling with on-brand design. For seed, Series A/B and B2B sales.',
    url: `${SITE.url}/pitch-deck-design`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'Pitch Deck Design NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Pitch Deck Design',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: 'Pitch deck design for startup founders, sales teams and executives.',
  url: `${SITE.url}/pitch-deck-design`,
}

const breadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Pitch Deck Design', item: `${SITE.url}/pitch-deck-design` },
  ],
}

const data = {
  badge: 'Pitch Deck Design',
  h1: 'Pitch Deck',
  h1Accent: 'Design Services',
  tagline: 'Investor pitch decks, sales decks and executive presentations where the story is tight, the data is clear and the visuals do not undo the pitch.',
  desc: 'NNC Digital designs pitch decks for founders raising seed, Series A and Series B rounds, B2B sales teams closing enterprise deals and executives presenting on stage. Every deck starts with narrative — not with slide templates — so the story holds up before we style it. Pricing is fixed, revisions bounded and files delivered in PowerPoint, Keynote, Google Slides or Figma.',
  stat1: '250+',
  stat1Label: 'Decks Designed',
  serviceName: 'pitch deck design and investor presentation development',
  h2Features: 'Everything a Pitch Deck Needs',
  features: [
    { h3: 'Narrative Structuring', desc: 'Problem, insight, solution, market, business model, traction, team, ask — sequenced for an investor\'s attention span, not yours.' },
    { h3: 'Market & Data Visualisation', desc: 'Market size charts, cohort retention, unit economics and growth metrics turned into clean, scannable visuals.' },
    { h3: 'Product Screens & Mockups', desc: 'Product screenshots framed in device mockups and highlighted to show the value prop — not raw UI dumps.' },
    { h3: 'Competitor & Positioning Slides', desc: '2x2 matrices, feature comparisons and positioning maps that make your advantage obvious at a glance.' },
    { h3: 'Team & Advisory Slides', desc: 'Founder bios, advisor credibility and investor logos presented to build trust in 20 seconds.' },
    { h3: 'Traction & Milestones', desc: 'Revenue, users, growth rate and milestone timelines visualised to make trajectory undeniable.' },
    { h3: 'Financials & Projections', desc: 'P&L summaries, cash runway and projection charts clearly readable for finance-trained investors.' },
    { h3: 'Appendix Slides', desc: 'Deep-dive slides (unit economics, go-to-market, tech architecture) held in appendix for investor follow-up meetings.' },
    { h3: 'Editable Source Delivery', desc: 'Final deck in PowerPoint, Keynote, Google Slides or Figma — your team updates numbers for each pitch without redesigning.' },
  ],
  h2Why: 'Why Choose NNC for Pitch Decks?',
  why: [
    { n: '01', h3: 'Narrative first — design second', body: 'Beautiful decks with weak stories still lose. NNC starts with narrative structuring — the story has to hold before we style it.' },
    { n: '02', h3: 'Investor-aware, not template-driven', body: 'NNC designers have shaped decks that have raised across seed, Series A and Series B. We know what seed-stage decks look like vs Series A — the two are not the same.' },
    { n: '03', h3: 'Editable in your tool of choice', body: 'Final decks delivered in PowerPoint, Keynote, Google Slides or Figma — whichever your team actually works in. No vendor lock-in.' },
    { n: '04', h3: 'Fixed scope, fixed price', body: 'Slide count, revision rounds and design scope agreed upfront. No surprise invoices for appendix slides or language variants.' },
    { n: '05', h3: '35+ in-house team', body: 'Deck designers, narrative strategists and data-visualisation specialists — all NNC employees. Visit our Bengaluru office.' },
    { n: '06', h3: '250+ decks designed', body: 'Seed, Series A and Series B investor decks, enterprise sales decks and executive keynote decks across SaaS, D2C, EdTech, fintech and B2B.' },
  ],
  techStack: ['PowerPoint', 'Apple Keynote', 'Google Slides', 'Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Pitch', 'Notion'],
  h2Tech: 'Deck Software & Stack',
  h2Faq: 'Pitch Deck Design Frequently Asked Questions',
  faqs: [
    { q: 'How much does pitch deck design cost?', a: 'Standard pitch deck design (12–18 slides, 2 revision rounds, final source files) at NNC starts from ₹35,000. Full engagement with narrative structuring, investor research and data viz typically runs ₹75,000–₹2.5L. All pricing fixed upfront.' },
    { q: 'How long does deck design take?', a: 'A standard investor or sales deck takes 2–3 weeks. Engagements with deeper narrative work and multiple appendix sections take 4–6 weeks. Rush projects are possible with clear scope.' },
    { q: 'Do you help with the content or just the design?', a: 'Both. NNC can design a deck from content you supply, or structure the narrative and copywriting from a founder brief / interviews. Narrative work is priced as an add-on to design.' },
    { q: 'PowerPoint, Keynote, Google Slides or Figma — which do you use?', a: 'All four — your team\'s tool choice drives the format. Figma for teams who want to maintain the deck in a design system. Google Slides for easy collaboration. Keynote for Apple-native presenters. PowerPoint is still standard for most corporate contexts.' },
    { q: 'Do you include financial model work?', a: 'Design and visualisation of financial projections — yes. Full financial modelling (building a projection model from scratch) is a separate scope; we usually recommend a finance partner for that.' },
    { q: 'Do I own the deck files?', a: 'Yes — full ownership on delivery. Source files, icon assets, licensed fonts / images documented and handed over.' },
  ],
}

export default function PitchDeckDesignPage() {
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
