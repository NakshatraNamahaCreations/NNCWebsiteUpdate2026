import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Product Ad Shoot & Commercial Film Production in Bangalore | NNC Digital',
  description: 'Product ad shoots and commercial film production in Bangalore. TVCs, D2C product videos, e-commerce stills and reels — scripted, shot and edited in-house.',
  alternates: { canonical: `${SITE.url}/product-ad-shoots` },
  keywords: 'product ad shoot bangalore, product video production, commercial film makers, d2c product video, ecommerce video shoot, tvc production',
  openGraph: {
    title: 'Product Ad Shoot & Commercial Film Production in Bangalore | NNC Digital',
    description: 'TVCs, D2C product videos and e-commerce shoots by NNC\'s in-house production team. Script, shoot, edit, grade, deliver.',
    url: `${SITE.url}/product-ad-shoots`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'Product Ad Shoots NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Product Ad Shoot & Commercial Film Production',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: 'Product ad shoots, commercial film production and e-commerce video production.',
  url: `${SITE.url}/product-ad-shoots`,
}

const breadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Product Ad Shoots', item: `${SITE.url}/product-ad-shoots` },
  ],
}

const data = {
  badge: 'Product Ad Shoots',
  h1: 'Product Ad Shoots &',
  h1Accent: 'Commercial Films',
  tagline: 'TV commercials, D2C product videos, e-commerce stills and short-form reels produced by NNC\'s in-house production team. Script to delivery, one studio.',
  desc: 'NNC Digital produces product ad shoots and commercial films for D2C brands, FMCG, electronics, fashion, beauty and B2B industrial products. From a 15-second Instagram reel to a 30s broadcast TVC — NNC handles scripting, casting, locations, product styling, cinematography, edit, colour grading and sound mix under one roof.',
  stat1: '250+',
  stat1Label: 'Ad Shoots Produced',
  serviceName: 'product ad shoots and commercial film production',
  h2Features: 'Everything a Product Shoot Needs',
  features: [
    { h3: 'Script & Shot-list', desc: 'Scripts optimised for the platform (TVC, reel, YouTube, e-commerce) with shot-by-shot shoot plan agreed before shoot day.' },
    { h3: 'Product Styling & Set Design', desc: 'In-house stylists, art directors and set builders — product shots look premium without studio hire costs.' },
    { h3: 'Model & Talent Casting', desc: 'NNC runs casting calls for faces, hands, lifestyle talent and voiceover — matched to your brand positioning.' },
    { h3: 'Cinema-grade Capture', desc: 'RED, Sony FX and BlackMagic cameras with full cine lens kit — broadcast-ready quality across formats.' },
    { h3: 'Macro & Product-close Shots', desc: 'Macro lenses and motion-control rigs for hero product close-ups — the shots that sell D2C and e-commerce.' },
    { h3: 'Edit, Grade & Sound Mix', desc: 'DaVinci Resolve grading and Premiere / FCP edit by NNC editors — delivered with licensed music and sound design.' },
    { h3: 'E-commerce Still Photography', desc: 'White-background product stills, lifestyle shots and 360 spins — shot alongside the video on the same day.' },
    { h3: 'Multi-format Delivery', desc: '30s TVC, 15s reel, 6s pre-roll, square for feed and vertical for stories — one shoot, every format covered.' },
    { h3: 'Multi-language VO', desc: 'English, Hindi and regional-language voiceovers delivered on the same master cut.' },
  ],
  h2Why: 'Why Choose NNC for Product Ad Shoots?',
  why: [
    { n: '01', h3: 'One studio — not three vendors', body: 'Most brands run through a production house, a stills studio, a voiceover artist and an editor. NNC covers all four — one brief, one delivery, zero finger-pointing.' },
    { n: '02', h3: 'In-house stylists and art direction', body: 'Product shots live or die on styling. NNC\'s in-house stylists and art directors make sure shots look premium on camera, not just in person.' },
    { n: '03', h3: 'Fixed-price shoots', body: 'Full shoot days quoted upfront — crew, equipment, location, casting, edit and delivery included. No surprise invoices for colour grade or extra edit versions.' },
    { n: '04', h3: 'Stills + video on the same shoot day', body: 'One shoot captures video and e-commerce stills — massively more cost-effective than separate shoots. Standard NNC practice.' },
    { n: '05', h3: '35+ in-house team', body: 'Directors, DOPs, stylists, editors and colourists — all NNC employees. Visit our Bengaluru office.' },
    { n: '06', h3: '250+ ad shoots produced', body: 'D2C, FMCG, electronics, fashion, beauty and B2B industrial — NNC has shot product ads across every major Indian consumer category.' },
  ],
  techStack: ['RED Cameras', 'Sony FX6 / FX9', 'BlackMagic', 'Cine Lens Kit', 'Motion Control Rigs', 'DaVinci Resolve', 'Premiere Pro', 'Pro Tools'],
  h2Tech: 'Shoot Equipment & Stack',
  h2Faq: 'Product Ad Shoot Frequently Asked Questions',
  faqs: [
    { q: 'How much does a product ad shoot cost?', a: 'Half-day product shoots at NNC start from ₹35,000 (for small product sets, standard edit). Full-day shoots with casting, locations and multiple cuts typically run ₹1L–₹4L. TV-grade commercials with celebrity talent are quoted bespoke.' },
    { q: 'How long does the shoot + edit take?', a: 'A standard D2C product shoot takes 1 shoot day + 2 weeks post-production = 3 weeks total. Multi-location TVCs with casting take 4–8 weeks from brief to final delivery.' },
    { q: 'Do you handle TV broadcast delivery?', a: 'Yes. NNC delivers at full broadcast specs (10-bit ProRes 4K, broadcast-safe colour, embedded loudness normalisation). Delivery to channels, OTT platforms and YouTube handled.' },
    { q: 'Can you shoot stills and video at the same time?', a: 'Yes — standard NNC practice. One shoot day captures hero video, product-close shots and e-commerce stills. Dual team on set. Massively more cost-effective than separate shoots.' },
    { q: 'Where do you shoot?', a: 'NNC owns a shoot studio in Bengaluru and operates out of branches in Mumbai, Mysuru and Hyderabad. For other locations, NNC mobilises crews with full equipment.' },
    { q: 'Do I own the final files?', a: 'Yes — final MP4 / ProRes masters and licensed asset files are handed over on delivery. Selected raw footage can be included on request.' },
  ],
}

export default function ProductAdShootsPage() {
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
