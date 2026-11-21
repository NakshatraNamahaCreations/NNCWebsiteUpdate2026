import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Drone & Aerial Footage Services in Bangalore | NNC Digital',
  description: 'Drone and aerial cinematography services in Bangalore. Real estate flythroughs, factory aerials, event coverage, DGCA-certified pilots and 4K / 6K delivery.',
  alternates: { canonical: `${SITE.url}/drone-aerial-footage` },
  keywords: 'drone videography bangalore, aerial footage services, drone shoot bangalore, real estate drone video, factory aerial video, dgca certified drone',
  openGraph: {
    title: 'Drone & Aerial Footage Services in Bangalore | NNC Digital',
    description: 'Real estate flythroughs, factory aerials and event coverage by DGCA-certified pilots. 4K / 6K delivery with professional edit.',
    url: `${SITE.url}/drone-aerial-footage`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'Drone Aerial Footage NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Drone & Aerial Footage Services',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: 'Drone and aerial cinematography services for real estate, industrial, event and corporate shoots.',
  url: `${SITE.url}/drone-aerial-footage`,
}

const breadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Drone & Aerial Footage', item: `${SITE.url}/drone-aerial-footage` },
  ],
}

const data = {
  badge: 'Drone & Aerial',
  h1: 'Drone & Aerial',
  h1Accent: 'Footage Services',
  tagline: 'Real estate flythroughs, factory and industrial aerials, event coverage and cinematic establishing shots — DGCA-certified pilots, 4K / 6K delivery.',
  desc: 'NNC Digital provides drone and aerial cinematography for real estate projects, manufacturing facilities, large-scale events, resort properties and corporate headquarters. All shoots are flown by DGCA-certified pilots on DJI Inspire, Mavic 3 Cine and FPV platforms — delivered edited, colour-graded and brand-ready.',
  stat1: '300+',
  stat1Label: 'Drone Shoots',
  serviceName: 'drone and aerial cinematography',
  h2Features: 'Everything a Drone Shoot Needs',
  features: [
    { h3: 'DGCA-certified Pilots', desc: 'All NNC drone operators hold DGCA Remote Pilot Certificates — mandatory for commercial drone operations across India.' },
    { h3: 'Pre-flight Permissions', desc: 'NNC handles pre-flight airspace clearance via Digital Sky and local coordination — no shoot day surprises.' },
    { h3: 'Cinema-grade Drones', desc: 'DJI Inspire 3, Mavic 3 Cine and FPV drones — 6K ProRes capture for broadcast-grade delivery.' },
    { h3: 'Real Estate Flythroughs', desc: 'Project reveals, amenity walk-throughs, surroundings and sunrise / sunset establishing shots for residential and commercial real estate.' },
    { h3: 'Factory & Industrial Aerials', desc: 'Manufacturing plants, warehouses, mines and ports — scale and process shots that communicate operational capability.' },
    { h3: 'Event & Wedding Aerials', desc: 'Large gathering coverage — corporate events, conferences, concerts and destination weddings with minimal intrusion.' },
    { h3: 'FPV Dynamic Shots', desc: 'First-person-view drones for dynamic flythrough shots — through corridors, over crowds, around obstacles.' },
    { h3: 'Post-production & Grading', desc: 'DaVinci Resolve colour grading, stabilisation and edit — delivered as a cut film, not raw drone clips.' },
    { h3: 'Multi-platform Cuts', desc: 'Long-form flythrough for website, 30s teaser for social and 15s vertical for Instagram reels — one shoot, all formats.' },
  ],
  h2Why: 'Why Choose NNC for Drone & Aerial?',
  why: [
    { n: '01', h3: 'Licensed, insured, regulated', body: 'DGCA certification and liability insurance on every shoot. NNC is not a hobbyist flying under the radar — commercial drone operations require compliance, and we have it.' },
    { n: '02', h3: 'Cinema-grade capture', body: 'Most agencies fly consumer drones. NNC uses DJI Inspire 3 and Mavic 3 Cine with ProRes 6K capture — the difference is visible on every broadcast or theatre screen.' },
    { n: '03', h3: 'Edit + grade included', body: 'Drone footage needs careful editing, stabilisation and colour grading. NNC delivers the final film — not 200GB of raw clips you need to find an editor for.' },
    { n: '04', h3: 'Permits and airspace handled', body: 'NNC coordinates with local authorities and uses Digital Sky for pre-flight clearance. You never deal with regulatory paperwork.' },
    { n: '05', h3: '35+ in-house team', body: 'Drone pilots, DOPs, editors and colourists — all NNC employees. Visit our Bengaluru office.' },
    { n: '06', h3: '300+ drone shoots delivered', body: 'Real estate projects, factories, resorts, weddings and TV commercial shoots across Karnataka, Maharashtra, Telangana and beyond.' },
  ],
  techStack: ['DJI Inspire 3', 'Mavic 3 Cine', 'FPV Drones', 'DaVinci Resolve', 'Adobe Premiere', 'Digital Sky', 'DGCA Certified', 'ProRes 6K'],
  h2Tech: 'Drone Equipment & Capabilities',
  h2Faq: 'Drone & Aerial Footage Frequently Asked Questions',
  faqs: [
    { q: 'How much does a drone shoot cost?', a: 'Standard real-estate / factory drone shoots at NNC start from ₹20,000 for a half-day with standard edit. Full-day shoots with Inspire 3 and professional edit run ₹60,000–₹1.5L. Multi-day or multi-location projects are quoted on scope.' },
    { q: 'Do you have DGCA permissions?', a: 'Yes — all NNC drone operators hold DGCA Remote Pilot Certificates and we hold the required operator approvals. Required for any legal commercial drone work in India.' },
    { q: 'Can you shoot in restricted airspace / near airports?', a: 'Depends on the exact location. NNC checks airspace classification on Digital Sky before accepting a brief. Some locations need prior ATC coordination; NNC handles that process.' },
    { q: 'What weather conditions do you shoot in?', a: 'Light cloud and overcast — yes. Heavy rain, strong winds (>30 km/h) or low visibility — no. Shoots are rescheduled rather than attempted in unsafe conditions.' },
    { q: 'Do you deliver raw footage or edited film?', a: 'Edited, colour-graded and delivery-ready. Raw footage archives are available at a nominal charge if you need them for future edits.' },
    { q: 'Can you integrate drone footage with a ground-shot film?', a: 'Yes — NNC often combines drone + handheld + interview + animation in a single film. The production pipeline is set up for mixed-format edits.' },
  ],
}

export default function DroneAerialFootagePage() {
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
