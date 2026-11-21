import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'UI/UX Design Agency in Bangalore | Web & Mobile App Design | NNC Digital',
  description: 'UI/UX design for web, SaaS and mobile apps in Bangalore. User research, wireframes, prototypes and design systems by in-house NNC product designers.',
  alternates: { canonical: `${SITE.url}/ui-ux-design` },
  keywords: 'ui ux design agency bangalore, product design bangalore, web app ui design, mobile app ux design, saas ui design, figma design agency',
  openGraph: {
    title: 'UI/UX Design Agency in Bangalore | Web & Mobile App Design | NNC Digital',
    description: 'User research, wireframes, prototypes and design systems for web and mobile — handed off ready for engineering. In-house product designers.',
    url: `${SITE.url}/ui-ux-design`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'UI/UX Design NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'UI/UX Design for Web & Mobile Apps',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: 'UI/UX design services for web, SaaS and mobile apps covering user research, wireframes, prototypes and design systems.',
  url: `${SITE.url}/ui-ux-design`,
}

const breadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'UI/UX Design', item: `${SITE.url}/ui-ux-design` },
  ],
}

const data = {
  badge: 'UI/UX Design',
  h1: 'UI/UX Design for',
  h1Accent: 'Web & Mobile Apps',
  tagline: 'User research, wireframes, interactive prototypes and production-ready design systems for web, SaaS and mobile apps — handed off ready for engineering.',
  desc: 'NNC Digital\'s product design team works with SaaS founders, D2C brands, enterprise teams and app startups to design interfaces people actually find easy to use. Every engagement starts with user research and ends with a Figma design system engineering can build from directly — no \"pixel-perfect pretty mockup\" that falls apart in implementation.',
  stat1: '300+',
  stat1Label: 'Products Designed',
  serviceName: 'UI/UX design for web and mobile applications',
  h2Features: 'Everything a UX Engagement Needs',
  features: [
    { h3: 'User Research & Interviews', desc: 'Target user interviews, competitor benchmarking and jobs-to-be-done mapping — the foundation most UI work skips.' },
    { h3: 'User Flows & Information Architecture', desc: 'End-to-end flow mapping and IA before any screen is designed — so the structure holds up under feature expansion.' },
    { h3: 'Wireframes', desc: 'Low-fidelity wireframes to agree structure and behaviour fast — before investing in high-fidelity visuals.' },
    { h3: 'High-fidelity UI Design', desc: 'Pixel-accurate screens for every state — empty, loading, error, success, filled. Not just the happy path.' },
    { h3: 'Interactive Prototypes', desc: 'Figma prototypes with real interactions for user testing and stakeholder approval before engineering kicks off.' },
    { h3: 'Design System in Figma', desc: 'Reusable components, variables and tokens — so the product stays consistent as features and teams scale.' },
    { h3: 'Developer Handover', desc: 'Specs, interaction notes, token exports and Figma inspect-ready files so engineering builds without constant \"design clarifications\".' },
    { h3: 'Usability Testing', desc: 'Moderated and unmoderated usability testing on prototypes or shipped product — with prioritised UX fix recommendations.' },
    { h3: 'Accessibility Review (WCAG)', desc: 'Colour contrast, keyboard navigation, screen reader, focus state and tap target audits to WCAG AA baseline.' },
  ],
  h2Why: 'Why Choose NNC for UI/UX Design?',
  why: [
    { n: '01', h3: 'Product designers — not just visual designers', body: 'NNC designers think in flows, states and edge cases. The deliverable is a usable product, not a pretty screen that breaks in week two of engineering.' },
    { n: '02', h3: 'Design system over one-off screens', body: 'Design systems in Figma mean the product can scale consistently. One-off screens look great until the product adds four new features.' },
    { n: '03', h3: 'Handover engineering can actually build', body: 'NNC designs with tokens, states and components that map cleanly to Tailwind / shadcn / React Native. Not Illustrator exports your engineers have to reverse-engineer.' },
    { n: '04', h3: 'Design + development under one roof', body: 'NNC\'s engineering team can build what NNC designs. Design-engineering gap closes to zero when both live in the same studio.' },
    { n: '05', h3: 'Fixed scope, fixed revisions', body: 'Every engagement specifies scope and revision rounds. No endless iteration cycles that drain budget without shipping.' },
    { n: '06', h3: '300+ products designed', body: 'SaaS, D2C apps, enterprise dashboards, fintech, EdTech, healthcare — NNC has designed interfaces across every major product category.' },
  ],
  techStack: ['Figma', 'FigJam', 'Adobe XD', 'Protopie', 'Maze', 'UserTesting', 'Lottie', 'Principle'],
  h2Tech: 'Design Software & Stack',
  h2Faq: 'UI/UX Design Frequently Asked Questions',
  faqs: [
    { q: 'How much does UI/UX design cost?', a: 'UI/UX design at NNC starts from ₹60,000 for a small product (10–15 screens, basic design system). SaaS product design with research, prototype and full design system runs ₹2L–₹8L. Enterprise products are quoted bespoke.' },
    { q: 'How long does a UI/UX project take?', a: 'A lean MVP design takes 3–5 weeks. A full SaaS or mobile app design with research, system and prototypes takes 6–12 weeks. Enterprise product redesigns take 10–20 weeks depending on scope.' },
    { q: 'Do you do user research or just the UI?', a: 'NNC includes user interviews, competitor analysis and jobs-to-be-done mapping as standard. UI design without upfront research produces screens that look good but miss what users actually need.' },
    { q: 'Can NNC also build what they design?', a: 'Yes — NNC has in-house engineering across web (React / Next JS) and mobile (React Native / Flutter). Design + build under one roof keeps design intent intact through implementation.' },
    { q: 'What files do you hand off?', a: 'Figma files with design system, components, tokens, interactive prototypes, developer-mode specs, Lottie animations and asset exports. Everything engineering needs.' },
    { q: 'Do you work on existing products or only new ones?', a: 'Both. NNC runs product audits on live products (usability, accessibility, conversion) and ships design updates that improve engagement — without full redesigns that break user muscle memory.' },
  ],
}

export default function UIUXDesignPage() {
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
