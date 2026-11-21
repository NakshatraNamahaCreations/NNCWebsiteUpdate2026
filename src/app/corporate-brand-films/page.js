import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Corporate Brand Film Production Company in Bangalore | NNC Digital',
  description: 'Corporate brand film production in Bangalore. Scripting, directing, cinematography and post for founder stories, CSR films and investor videos.',
  alternates: { canonical: `${SITE.url}/corporate-brand-films` },
  keywords: 'corporate brand film bangalore, brand film production, corporate film makers, founder story video, csr film production, company film',
  openGraph: {
    title: 'Corporate Brand Film Production Company in Bangalore | NNC Digital',
    description: 'Brand films scripted, shot and edited by NNC in-house production team. Zero outsourcing from brief to final file.',
    url: `${SITE.url}/corporate-brand-films`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'Corporate Brand Films NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Corporate Brand Film Production',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: 'Corporate brand film production covering scripting, directing, cinematography and post.',
  url: `${SITE.url}/corporate-brand-films`,
}

const breadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Corporate Brand Films', item: `${SITE.url}/corporate-brand-films` },
  ],
}

const data = {
  badge: 'Corporate Brand Films',
  h1: 'Corporate Brand Film',
  h1Accent: 'Production',
  tagline: 'Founder stories, CSR films, investor videos and corporate overview films scripted, shot and edited by NNC\'s in-house production team.',
  desc: 'NNC Digital produces corporate brand films for Indian businesses — from founder story films for websites to investor pitch videos, CSR documentaries and company overview reels for sales teams. Every film is scripted, shot and edited by NNC in-house talent. Zero outsourcing means zero finger-pointing when revisions arrive.',
  stat1: '180+',
  stat1Label: 'Films Delivered',
  serviceName: 'corporate brand film and corporate video production',
  h2Features: 'Everything a Corporate Film Needs',
  features: [
    { h3: 'Script & Storyboarding', desc: 'In-house scriptwriting and shot-wise storyboarding. The film is agreed on paper before cameras come out — no on-set surprises.' },
    { h3: 'Pre-production & Casting', desc: 'Location recce, casting, wardrobe, art direction and shoot planning handled by NNC production coordinators.' },
    { h3: 'Cinema-grade Cinematography', desc: 'RED, BlackMagic and Sony FX cameras with full lighting kit and skilled DOPs on NNC payroll.' },
    { h3: 'Voiceover & Sound Design', desc: 'Professional voiceover casting (male / female, multi-language), music licensing and sound design on every delivery.' },
    { h3: 'Interview Direction', desc: 'Founders and leaders rarely read off a teleprompter well. NNC directors coach on-camera performance for authentic, usable takes.' },
    { h3: 'Edit & Colour Grading', desc: 'DaVinci Resolve colour grading and multi-cut editing — long form for YouTube, short form for social and square for feed.' },
    { h3: 'Motion Graphics & Titles', desc: 'Brand-consistent lower thirds, title cards, logo stings and info-graphic cutaways to break up talking-head footage.' },
    { h3: 'Multi-language Versions', desc: 'Single shoot, delivered in English, Hindi, Kannada or any other Indian language for regional markets.' },
    { h3: 'Multi-platform Cuts', desc: 'Long-form YouTube, 60s LinkedIn, 30s Instagram reel and 6s pre-roll — one shoot, ten deliverables.' },
  ],
  h2Why: 'Why Choose NNC for Corporate Brand Films?',
  why: [
    { n: '01', h3: 'In-house crew — not freelancers stitched together', body: 'Directors, DOPs, sound, editors and colourists all on NNC payroll. Deadlines, revisions and quality stay predictable.' },
    { n: '02', h3: 'Script-first, not shoot-first', body: 'Many agencies rush to shoot and discover the story in the edit. NNC agrees script and storyboard upfront — fewer reshoots, cleaner edits.' },
    { n: '03', h3: 'Fixed price — no scope creep', body: 'Every film is quoted as a fixed scope. No surprise invoices for colour grade, voiceover cast or extra edit versions.' },
    { n: '04', h3: 'Multi-format delivery from one shoot', body: 'One shoot day typically yields 6-10 content pieces — long form film, social cuts, trailer, GIFs and stills — maximising ROI per shoot day.' },
    { n: '05', h3: '35+ in-house team', body: 'Scripters, directors, cinematographers, editors and colourists — all NNC employees. Visit our Bengaluru office.' },
    { n: '06', h3: '180+ films delivered', body: 'Corporate brand films, founder stories, CSR documentaries and pitch videos for brands across tech, manufacturing, healthcare and D2C.' },
  ],
  techStack: ['RED Cameras', 'Sony FX6 / FX9', 'BlackMagic', 'DaVinci Resolve', 'Adobe Premiere', 'After Effects', 'Pro Tools', 'Lighting Kit'],
  h2Tech: 'Film Production Equipment',
  h2Faq: 'Corporate Brand Film Frequently Asked Questions',
  faqs: [
    { q: 'How much does a corporate brand film cost?', a: 'Corporate brand films at NNC start from ₹75,000 for a single-day shoot with standard edit, and ₹2L–₹8L for multi-day shoots with casting, locations and cinema-grade production. All pricing is fixed before work starts.' },
    { q: 'How long does the full production take?', a: 'A standard 2–3 minute brand film takes 3–5 weeks from brief to final delivery (pre-production, shoot, post). Multi-location or multi-language films take 6–10 weeks. Timelines agreed upfront.' },
    { q: 'Do you handle multi-city shoots?', a: 'Yes. NNC teams shoot regularly across Bengaluru, Mumbai, Mysuru and Hyderabad from our own offices, and mobilise crews to any Indian city for client shoots.' },
    { q: 'Can you produce multi-language versions from one shoot?', a: 'Yes — standard practice. Shoot once; deliver in English, Hindi, Kannada, Tamil or Telugu with native voiceovers and subtitles. Cost add-on is usually ₹15–30K per additional language.' },
    { q: 'Do I own the final files and raw footage?', a: 'Final deliverables and selected raw footage — yes, both are handed over. Full raw footage is available at a nominal archival charge if you need it for future edits.' },
    { q: 'Can the film be used for TV commercials?', a: 'Yes — NNC shoots at broadcast-grade (4K ProRes) as standard. Delivery specs for TV, OTT, YouTube and social are all handled from the same master.' },
  ],
}

export default function CorporateBrandFilmsPage() {
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
