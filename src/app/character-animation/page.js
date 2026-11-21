import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Character Animation Studio in Bangalore | NNC Digital',
  description: 'Character animation studio in Bangalore. Brand mascots, animated characters, lip-sync animation and 2D cartoon characters for EdTech, kids and D2C brands.',
  alternates: { canonical: `${SITE.url}/character-animation` },
  keywords: 'character animation bangalore, animated character design, brand mascot animation, 2d character animation, lip sync animation, edtech animation',
  openGraph: {
    title: 'Character Animation Studio in Bangalore | NNC Digital',
    description: 'Brand mascots, lip-sync characters and animated storytelling by NNC\'s in-house animation studio. Script, design, rig, animate under one roof.',
    url: `${SITE.url}/character-animation`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'Character Animation NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Character Animation',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: '2D character animation covering brand mascots, animated characters and lip-sync animation.',
  url: `${SITE.url}/character-animation`,
}

const breadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Character Animation', item: `${SITE.url}/character-animation` },
  ],
}

const data = {
  badge: 'Character Animation',
  h1: 'Character Animation',
  h1Accent: 'Studio',
  tagline: 'Brand mascots, lip-sync animation, animated storytelling and kids / EdTech characters designed, rigged and animated by NNC\'s in-house animation studio.',
  desc: 'NNC Digital\'s animation studio specialises in character-driven work — brand mascots that become part of your identity, animated series for EdTech and kids content, and lip-sync cartoon characters for marketing storytelling. Every project covers design, rigging, animation, voiceover and sound design end-to-end, in-house.',
  stat1: '90+',
  stat1Label: 'Character Projects',
  serviceName: 'character animation and animated storytelling',
  h2Features: 'Everything a Character Project Needs',
  features: [
    { h3: 'Character Design & Concept Art', desc: 'Original character designs — personality sheets, expression sheets and pose variations matched to your brand voice.' },
    { h3: 'Rigging for Animation', desc: 'Properly rigged characters in After Effects (Duik / Rubberhose) or Toon Boom — enabling reusable animation across episodes.' },
    { h3: 'Lip-sync Animation', desc: 'Frame-accurate lip-sync to voiceover tracks — the detail that separates premium animation from slideshow motion.' },
    { h3: 'Expression & Emotion', desc: 'Character acting — not just moving arms. NNC animators focus on expression, timing and weight to make characters feel alive.' },
    { h3: 'Background & Environment', desc: 'Bespoke backgrounds, parallax environments and prop design that match the character style and brand palette.' },
    { h3: 'Episodic Series Production', desc: 'For EdTech and kids content, NNC sets up an episodic production pipeline — reusable rigs, backgrounds and style guides to scale weekly output.' },
    { h3: 'Voice Casting & Direction', desc: 'Character voice casting (child, adult, mascot, regional) and voice direction so performance matches the character design.' },
    { h3: 'Sound Design & Foley', desc: 'Custom sound effects, foley and music that match character actions — the audio layer that elevates animation.' },
    { h3: 'Multi-language Episodes', desc: 'One episode, multiple language versions with region-matched voiceover — single rig, single animation master.' },
  ],
  h2Why: 'Why Choose NNC for Character Animation?',
  why: [
    { n: '01', h3: 'Design + animation in one team', body: 'Characters NNC designs are rigged for animation by NNC — no \"character looks great in stills but does not animate well\" gaps.' },
    { n: '02', h3: 'Episodic pipeline — not one-offs', body: 'For brands planning 10+ episodes, NNC builds a reusable pipeline (rigs, backgrounds, style bible) that cuts per-episode cost by 40–60%.' },
    { n: '03', h3: 'Voice casting handled in-house', body: 'From child voices for kids content to regional-dialect mascot voices — NNC runs voice casting end-to-end.' },
    { n: '04', h3: 'Fixed price per episode / project', body: 'Scope and price agreed upfront. No surprise invoices for revisions, additional expressions or music licence.' },
    { n: '05', h3: '35+ in-house team', body: 'Character designers, riggers, animators, voice directors and sound designers — all NNC employees. Visit our Bengaluru office.' },
    { n: '06', h3: '90+ character projects', body: 'Brand mascots, animated series for EdTech, kids content, stop-motion-style brand videos and training animations across industries.' },
  ],
  techStack: ['After Effects', 'Toon Boom', 'Duik Angela', 'Rubberhose', 'Illustrator', 'Photoshop', 'Procreate', 'Pro Tools'],
  h2Tech: 'Character Animation Software & Stack',
  h2Faq: 'Character Animation Frequently Asked Questions',
  faqs: [
    { q: 'How much does character animation cost?', a: 'A single 60s character animation at NNC starts from ₹60,000 (design + rig + 60s animation + VO + sound). Episodic series with reusable rigs cost ₹35,000–₹50,000 per episode after the first. All pricing fixed upfront.' },
    { q: 'How long does a character project take?', a: 'A standalone 60–90s character animation takes 4–6 weeks. Episodic series pipelines take 6–8 weeks to set up, then 2–3 weeks per episode once running.' },
    { q: 'Can we reuse the character across multiple videos?', a: 'Yes — that is exactly what a proper rig is for. Once NNC rigs a character, all future animation uses the same rig. One-time rig cost, repeated use.' },
    { q: 'Do you handle kids / EdTech content?', a: 'Yes. NNC produces animated episodes for EdTech brands and children\'s content creators — including voice casting of child voice artists and age-appropriate storytelling.' },
    { q: 'Multi-language versions?', a: 'Yes. Same animation, multiple voiceover languages — NNC handles translation, voice casting and audio replacement per language.' },
    { q: 'Do I own the character designs and rigs?', a: 'Yes — on delivery you receive final MP4s, character art, rigs and source files. The character is yours to animate again (via NNC or any other studio).' },
  ],
}

export default function CharacterAnimationPage() {
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
