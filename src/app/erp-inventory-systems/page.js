import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'ERP & Inventory System Development Company in Bangalore | NNC Digital',
  description: 'Custom ERP and inventory management system development in Bangalore. Multi-warehouse stock, purchase, sales, GST invoicing and manufacturing modules.',
  alternates: { canonical: `${SITE.url}/erp-inventory-systems` },
  keywords: 'erp development bangalore, inventory management software, custom erp, multi warehouse software, manufacturing erp, gst billing software',
  openGraph: {
    title: 'ERP & Inventory System Development Company in Bangalore | NNC Digital',
    description: 'Custom ERP with multi-warehouse, purchase, sales, GST invoicing and manufacturing modules. Fixed price, full source ownership.',
    url: `${SITE.url}/erp-inventory-systems`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'ERP Development NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'ERP & Inventory System Development',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: 'Custom ERP and inventory management system development with multi-warehouse, purchase, sales and GST invoicing.',
  url: `${SITE.url}/erp-inventory-systems`,
}

const breadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'ERP & Inventory Systems', item: `${SITE.url}/erp-inventory-systems` },
  ],
}

const data = {
  badge: 'ERP & Inventory',
  h1: 'ERP & Inventory System',
  h1Accent: 'Development Services',
  tagline: 'Multi-warehouse stock, purchase, sales, GST invoicing and manufacturing modules built for retailers, distributors and manufacturers.',
  desc: 'NNC Digital builds custom ERP and inventory management systems for businesses whose operations have outgrown Tally, Zoho Books or spreadsheets. Every ERP ships with stock, purchase, sales, GST-compliant invoicing and dashboards tuned to how your business actually runs — not a generic template.',
  stat1: '40+',
  stat1Label: 'ERP Deployments',
  serviceName: 'ERP and inventory system development',
  h2Features: 'Everything an ERP Needs',
  features: [
    { h3: 'Multi-warehouse Inventory', desc: 'Real-time stock across unlimited warehouses with transfer, stock-take and low-stock alerts.' },
    { h3: 'Purchase & Vendor Management', desc: 'PO generation, GRN, vendor ledger, three-way match and aging reports in one flow.' },
    { h3: 'Sales, Invoicing & GST', desc: 'GST-compliant invoices, credit notes, e-invoicing and e-way bill generation — HSN codes managed by SKU.' },
    { h3: 'Accounting & Ledger', desc: 'Chart of accounts, journal, ledger, balance sheet and P&L — with Tally / Zoho Books export.' },
    { h3: 'Manufacturing & BOM', desc: 'Bill of materials, work orders, production tracking and material consumption — for assembly and job work.' },
    { h3: 'Barcode & SKU Management', desc: 'Barcode generation, label printing and scan-based GRN / pick / pack flows for warehouse teams.' },
    { h3: 'Mobile Scanner App', desc: 'Android scanner app for warehouse teams — GRN, stock-take, picking and packing on the floor.' },
    { h3: 'Reports & Analytics', desc: 'Stock aging, fast-moving / slow-moving, margin analysis, vendor-wise and item-wise reports — exportable to Excel.' },
    { h3: 'Role-based Access', desc: 'Branch, department and user-level permissions so sales team sees sales, finance sees everything, warehouse sees stock.' },
  ],
  h2Why: 'Why Choose NNC for ERP Development?',
  why: [
    { n: '01', h3: 'Custom ERP — not a bent SAP B1', body: 'NNC builds for how your business runs. Custom fields, custom workflows and custom reports — not a generic ERP template you adapt to.' },
    { n: '02', h3: 'GST, e-invoicing and e-way bills native', body: 'All Indian tax rules built in — GSTR filing export, IRN generation and e-way bill API integration with the GST portal.' },
    { n: '03', h3: 'Scales from ₹5Cr to ₹500Cr turnover', body: 'NNC ERP handles everything from a single warehouse to multi-branch, multi-state, multi-GSTIN operations without re-architecture.' },
    { n: '04', h3: 'Fixed price — no scope creep', body: 'Every ERP project is quoted as a fixed scope. No surprise invoices for a new report, warehouse or user role.' },
    { n: '05', h3: '35+ in-house engineers', body: 'Full-stack developers, UI designers and QA — all NNC employees. Visit our Bengaluru office and meet the team.' },
    { n: '06', h3: '40+ ERP deployments', body: 'Retail chains, wholesale distribution, manufacturing, pharma and food & beverage — NNC has deployed ERPs across every major Indian vertical.' },
  ],
  techStack: ['Next JS', 'Node JS', 'PostgreSQL', 'MongoDB', 'Redis', 'Razorpay', 'GSTN API', 'AWS'],
  h2Tech: 'ERP Technology Stack',
  h2Faq: 'ERP & Inventory System Frequently Asked Questions',
  faqs: [
    { q: 'How much does a custom ERP cost?', a: 'ERP systems at NNC start from ₹2L for a lean inventory + sales + invoicing build, and ₹6L–₹18L for multi-branch, multi-warehouse systems with manufacturing and accounting. All pricing is fixed before work starts.' },
    { q: 'How long does it take?', a: 'A lean ERP (inventory, sales, invoice) takes 8–12 weeks. A full ERP with purchase, manufacturing, accounting and reporting takes 16–28 weeks. Timelines are agreed upfront.' },
    { q: 'Why custom ERP instead of Zoho / Tally / SAP B1?', a: 'Off-the-shelf works until you need non-standard workflows, deep customisation or want to stop paying per-user SaaS fees forever. Custom ERP pays back when you have 20+ users, custom processes or industry-specific needs the off-the-shelf tools do not handle well.' },
    { q: 'Can the ERP sync with Tally / Zoho Books?', a: 'Yes. NNC builds two-way sync with Tally and Zoho Books so your accountant can keep using their tool while operations run on the custom ERP.' },
    { q: 'Is it GST compliant?', a: 'Yes. GSTIN validation, HSN management, GSTR-1 / GSTR-3B export, e-invoicing (IRN) and e-way bill generation are all standard features.' },
    { q: 'Do I own the source code?', a: 'Yes — completely. On delivery you receive every source file, database schema, admin credentials and hosting access. No SaaS lock-in.' },
  ],
}

export default function ERPInventorySystemsPage() {
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
