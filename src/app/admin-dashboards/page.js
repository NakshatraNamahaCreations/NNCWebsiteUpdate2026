import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Admin Dashboard Development Company in Bangalore | NNC Digital',
  description: 'Custom admin dashboard and internal tool development in Bangalore. Role-based access, real-time analytics, data tables and REST / GraphQL integrations.',
  alternates: { canonical: `${SITE.url}/admin-dashboards` },
  keywords: 'admin dashboard development bangalore, internal tool development, custom admin panel, operations dashboard, back office software',
  openGraph: {
    title: 'Admin Dashboard Development Company in Bangalore | NNC Digital',
    description: 'Custom admin and operations dashboards with roles, analytics, exports and integrations. Fixed price, full source ownership.',
    url: `${SITE.url}/admin-dashboards`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'Admin Dashboard Development NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Admin Dashboard Development',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: 'Custom admin and operations dashboard development with roles, analytics and integrations.',
  url: `${SITE.url}/admin-dashboards`,
}

const breadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Admin Dashboards', item: `${SITE.url}/admin-dashboards` },
  ],
}

const data = {
  badge: 'Admin Dashboards',
  h1: 'Admin Dashboard',
  h1Accent: 'Development Services',
  tagline: 'Custom admin panels, operations dashboards and internal tools built on React and Next JS — role-based access, real-time data and audit trails included.',
  desc: 'NNC Digital builds admin dashboards and internal tools for operations, finance, sales and leadership teams who need live visibility and single-screen control over customers, orders, inventory or any other business entity. Every build ships with roles, audit logs, data exports and the integrations your team already depends on.',
  stat1: '50+',
  stat1Label: 'Dashboards Delivered',
  serviceName: 'admin dashboard and internal tool development',
  h2Features: 'Everything a Dashboard Needs',
  features: [
    { h3: 'Role-based Access & Permissions', desc: 'Owner, admin, manager and read-only roles with granular permissions at module, row and field level.' },
    { h3: 'Data Tables with Search, Filter, Sort', desc: 'Server-paginated tables that handle millions of rows without performance drops — with inline edit and bulk actions.' },
    { h3: 'Real-time Charts & KPIs', desc: 'Live dashboards for revenue, pipeline, inventory, support tickets — refreshed in real time via web sockets.' },
    { h3: 'CSV / Excel Export', desc: 'One-click export of any table or report to CSV and Excel — with filters applied and audit entry logged.' },
    { h3: 'Audit Logs', desc: 'Every write action logged with user, time and payload — ready for compliance and operational traceability.' },
    { h3: 'Integrations (REST / GraphQL / Webhooks)', desc: 'Pull data from your existing CRM, ERP, payment gateway, delivery partners and any system with an API.' },
    { h3: 'Approval & Workflow Engine', desc: 'Multi-step approvals for discounts, refunds, leaves or any workflow where a human decision is required.' },
    { h3: 'Scheduled Reports & Alerts', desc: 'Automated email / Slack / WhatsApp alerts when thresholds are breached or reports are due.' },
    { h3: 'Responsive & Dark Mode Ready', desc: 'Dashboards work on desktop, tablet and mobile — with built-in dark mode for ops teams on long shifts.' },
  ],
  h2Why: 'Why Choose NNC for Admin Dashboards?',
  why: [
    { n: '01', h3: 'Built for real operations teams', body: 'Dashboards designed with the people who will use them daily — not just the people requesting them. Minimal clicks, keyboard shortcuts, bulk actions throughout.' },
    { n: '02', h3: 'Scales to millions of rows', body: 'Server-paginated tables, indexed queries, caching and streaming exports. Dashboards stay fast as data grows past 1M+ records.' },
    { n: '03', h3: 'Fixed price — no scope creep', body: 'Every dashboard is quoted as a fixed scope. No surprise invoices for a new role, module or integration mid-build.' },
    { n: '04', h3: '35+ in-house engineers', body: 'Full-stack developers, UI designers and QA — all NNC employees. Visit our Bengaluru office and meet the team.' },
    { n: '05', h3: 'Integrates with what you already run', body: 'NNC builds against your existing CRM, ERP, payment gateway and delivery APIs — no rip-and-replace, incremental improvement.' },
    { n: '06', h3: '50+ dashboards delivered', body: 'Sales, operations, finance, support and leadership dashboards shipped across retail, SaaS, logistics, healthcare and manufacturing.' },
  ],
  techStack: ['React JS', 'Next JS', 'Node JS', 'PostgreSQL', 'MongoDB', 'Redis', 'WebSockets', 'AWS'],
  h2Tech: 'Admin Dashboard Technology Stack',
  h2Faq: 'Admin Dashboard Frequently Asked Questions',
  faqs: [
    { q: 'How much does an admin dashboard cost?', a: 'Admin dashboards at NNC start from ₹75,000 for a single-team operations console, and ₹2L+ for full-company dashboards with multiple modules, roles and integrations. All pricing is fixed before work starts.' },
    { q: 'How long does it take to build?', a: 'A standard operations dashboard takes 4–6 weeks. Full-company dashboards with multiple modules and integrations take 8–14 weeks. Timelines are agreed upfront.' },
    { q: 'Can the dashboard pull data from our existing CRM or ERP?', a: 'Yes. NNC builds integrations with most CRMs (Zoho, Salesforce, HubSpot), ERPs (Tally, Zoho Books, SAP) and custom APIs. Data stays in source systems; the dashboard reads and writes via API.' },
    { q: 'Can non-technical users build their own reports?', a: 'Yes. NNC includes a report builder with drag-and-drop columns, filters, grouping and scheduled email delivery — so operations teams can create ad-hoc reports without raising a developer ticket.' },
    { q: 'Is it mobile-friendly?', a: 'Yes. Every NNC dashboard is responsive down to mobile. For field teams (sales, delivery, service) we also build dedicated mobile apps that share the same backend.' },
    { q: 'Do I own the source code?', a: 'Yes — completely. On delivery you receive every source file, database schema, admin credentials and hosting access. No SaaS lock-in.' },
  ],
}

export default function AdminDashboardsPage() {
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
