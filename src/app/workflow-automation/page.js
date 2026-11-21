import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Workflow Automation Development Company in Bangalore | NNC Digital',
  description: 'Custom workflow automation development in Bangalore. Replace manual processes with approval chains, notifications, integrations and no-code admin controls.',
  alternates: { canonical: `${SITE.url}/workflow-automation` },
  keywords: 'workflow automation bangalore, business process automation, approval workflow software, custom automation development, rpa alternative',
  openGraph: {
    title: 'Workflow Automation Development Company in Bangalore | NNC Digital',
    description: 'Replace manual workflows with approval chains, integrations and automation. Fixed price, full source ownership, measured ROI.',
    url: `${SITE.url}/workflow-automation`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'Workflow Automation NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Workflow Automation Development',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: 'Custom workflow automation development replacing manual business processes with approval chains, integrations and notifications.',
  url: `${SITE.url}/workflow-automation`,
}

const breadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Workflow Automation', item: `${SITE.url}/workflow-automation` },
  ],
}

const data = {
  badge: 'Workflow Automation',
  h1: 'Workflow Automation',
  h1Accent: 'Development Services',
  tagline: 'Replace spreadsheets, email chains and status update meetings with approval workflows, notifications and integrations that run themselves.',
  desc: 'NNC Digital builds custom workflow automation for ops, HR, finance, procurement and sales teams across India. If a process today lives in email threads, Excel sheets or WhatsApp — NNC moves it into a tool that routes, approves, notifies and reports without a human nudge.',
  stat1: '60+',
  stat1Label: 'Workflows Automated',
  serviceName: 'workflow automation development',
  h2Features: 'Everything a Workflow Automation Needs',
  features: [
    { h3: 'Multi-step Approval Chains', desc: 'Sequential or parallel approvals with auto-escalation, delegation and SLA breach alerts built in.' },
    { h3: 'Form Builder & Triggers', desc: 'Drag-and-drop form builder with conditional logic — forms submit, workflows start automatically.' },
    { h3: 'Notifications (Email / WhatsApp / Slack)', desc: 'Stage-wise notifications to right stakeholders over email, WhatsApp, Slack or in-app — configurable by admin.' },
    { h3: 'Integrations with Existing Tools', desc: 'Pull from and push to your CRM, ERP, HRMS, accounting software and payment gateway via API.' },
    { h3: 'Document Generation & E-sign', desc: 'Auto-generate offer letters, invoices, POs and NDAs with e-signature via DocuSign / Digio integration.' },
    { h3: 'SLA Tracking & Escalation', desc: 'Every stage carries an SLA. Breaches trigger escalation to manager / department head automatically.' },
    { h3: 'Audit Trail & Reporting', desc: 'Every action — who, what, when — logged and reportable. Bottleneck reports show where work is stuck.' },
    { h3: 'Role-based Access', desc: 'Workflow-level, stage-level and field-level permissions so sensitive data stays visible to the right people only.' },
    { h3: 'Mobile Approval App', desc: 'Managers approve or reject from mobile — including offline queue for low-connectivity field work.' },
  ],
  h2Why: 'Why Choose NNC for Workflow Automation?',
  why: [
    { n: '01', h3: 'Not off-the-shelf — built for your process', body: 'NNC does not force your process into a template. We build the workflow that matches how you actually operate — approvals, roles and fields included.' },
    { n: '02', h3: 'Measured ROI — hours saved, not features shipped', body: 'Every automation project is scoped with the hours and errors it will eliminate per month, so ROI is clear from day one.' },
    { n: '03', h3: 'Integrates with what you already run', body: 'NNC connects to Zoho, Tally, SAP, HubSpot, WhatsApp Business and whatever else is in your stack — no rip and replace.' },
    { n: '04', h3: 'Fixed price — no scope creep', body: 'Every automation project is quoted as a fixed scope. No surprise invoices for a new workflow branch or integration mid-build.' },
    { n: '05', h3: '35+ in-house engineers', body: 'Full-stack developers, UI designers and QA — all NNC employees. Visit our Bengaluru office and meet the team.' },
    { n: '06', h3: '60+ workflows automated', body: 'Leave approvals, purchase orders, vendor onboarding, invoice processing, discount approvals and QA sign-offs — shipped across industries.' },
  ],
  techStack: ['Next JS', 'Node JS', 'PostgreSQL', 'MongoDB', 'Redis', 'Twilio', 'WhatsApp Business API', 'AWS'],
  h2Tech: 'Workflow Automation Technology Stack',
  h2Faq: 'Workflow Automation Frequently Asked Questions',
  faqs: [
    { q: 'How much does workflow automation cost?', a: 'Workflow automation at NNC starts from ₹60,000 for a single workflow with approvals and notifications, and ₹1.5L+ for multi-workflow systems with integrations and reporting. All pricing is fixed before work starts.' },
    { q: 'How long does it take?', a: 'A single workflow (leave approval, PO, vendor onboarding) typically takes 3–5 weeks. Multi-workflow systems with 5+ processes and integrations take 8–14 weeks. Timelines are agreed upfront.' },
    { q: 'Why build custom instead of using Zoho Creator / Kissflow / Monday?', a: 'Off-the-shelf tools work for standard processes but hit limits on custom logic, deep integrations and per-user SaaS cost at scale. Custom automation pays back when you have 50+ users or non-standard process rules.' },
    { q: 'Can automation integrate with WhatsApp?', a: 'Yes. NNC integrates WhatsApp Business API for notifications, approvals via reply and status updates — standard for Indian ops and sales teams.' },
    { q: 'Can non-technical admins change the workflow later?', a: 'Yes. NNC builds an admin console where ops managers can add stages, roles and notification rules without raising a developer ticket.' },
    { q: 'Do I own the source code?', a: 'Yes — completely. On delivery you receive every source file, database, admin credentials and hosting access. No SaaS lock-in.' },
  ],
}

export default function WorkflowAutomationPage() {
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
