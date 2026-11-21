import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import ServicePageContent from '@/components/ServicePageContent'
import { SITE } from '@/data/siteData'

export const metadata = {
  title: 'Healthcare & Clinic App Development Company in Bangalore | NNC Digital',
  description: 'Custom healthcare and clinic mobile app development in Bangalore. Appointment booking, teleconsultation, EMR, patient records and HIPAA-ready workflows.',
  alternates: { canonical: `${SITE.url}/healthcare-clinic-app-development` },
  keywords: 'healthcare app development bangalore, clinic mobile app, doctor appointment app, telemedicine app development, emr app, hospital app development',
  openGraph: {
    title: 'Healthcare & Clinic App Development Company in Bangalore | NNC Digital',
    description: 'Appointments, teleconsultation, prescriptions and EMR built by NNC in-house team. Fixed price, PageSpeed optimised, full source code ownership.',
    url: `${SITE.url}/healthcare-clinic-app-development`,
    type: 'website',
    images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: 'Healthcare App Development NNC Digital' }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Healthcare & Clinic App Development',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url, telephone: SITE.phone },
  areaServed: 'India',
  description: 'Healthcare and clinic mobile app development with appointments, teleconsultation, EMR and patient records.',
  url: `${SITE.url}/healthcare-clinic-app-development`,
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Healthcare & Clinic Apps', item: `${SITE.url}/healthcare-clinic-app-development` },
  ],
}

const data = {
  badge: 'Healthcare & Clinic Apps',
  h1: 'Healthcare & Clinic App',
  h1Accent: 'Development Services',
  tagline: 'Appointments, teleconsultation, prescriptions, EMR and patient portals built for clinics, hospitals and diagnostic chains across India.',
  desc: 'NNC Digital builds patient-facing and doctor-facing mobile apps for private clinics, multi-specialty hospitals, diagnostic chains and telemedicine startups. Every build ships with booking, video consultation, digital prescriptions and a clinic-side admin — all designed with the data-safety practices Indian healthcare demands.',
  stat1: '25+',
  stat1Label: 'Healthcare Apps Delivered',
  serviceName: 'healthcare and clinic mobile app development',
  h2Features: 'Everything a Healthcare App Needs',
  features: [
    { h3: 'Appointment Booking & Slots', desc: 'Doctor-wise availability, OPD slot management, waitlists and automatic reminders over SMS and WhatsApp.' },
    { h3: 'Teleconsultation (Video & Chat)', desc: 'Secure video, voice and chat consultation with in-app screen sharing of reports and prescriptions.' },
    { h3: 'Digital Prescription', desc: 'Doctor issues digital prescriptions in-app — searchable drug database, dosage templates and PDF export.' },
    { h3: 'Patient Records & EMR', desc: 'Complete electronic medical record — visits, prescriptions, lab reports, allergies and medical history in one place.' },
    { h3: 'Lab & Diagnostic Integration', desc: 'Book lab tests, upload reports and share results with patients and doctors inside the same app.' },
    { h3: 'Online Payment & Insurance', desc: 'Razorpay / UPI for consultation fees; invoice export for insurance reimbursement workflows.' },
    { h3: 'Doctor & Clinic Admin', desc: 'Separate dashboards for doctors, receptionists and clinic admins with role-based access and permissions.' },
    { h3: 'Reminders & Follow-ups', desc: 'Automated SMS, push and WhatsApp reminders for appointments, medication and follow-up visits.' },
    { h3: 'Reviews & Ratings', desc: 'Post-consultation ratings and feedback collection to help your clinic build trust and improve service.' },
  ],
  h2Why: 'Why Choose NNC for Healthcare App Development?',
  why: [
    { n: '01', h3: 'Data-safety first — Indian healthcare standards', body: 'Encrypted patient data, role-based access, audit logs and secure hosting. NNC follows the data practices Indian clinics and hospitals are expected to meet.' },
    { n: '02', h3: 'Cross-platform — iOS and Android together', body: 'React Native or Flutter deliver both iOS and Android apps from a single codebase. Faster launch, lower cost, same native feel.' },
    { n: '03', h3: 'Teleconsultation built in — not stitched together', body: 'In-house secure video and chat implementation. No per-minute third-party billing eating your margin.' },
    { n: '04', h3: 'Fixed price — no scope creep', body: 'Every healthcare app is quoted as a fixed scope. No surprise invoices for EMR fields, prescription templates or payment integration.' },
    { n: '05', h3: '35+ in-house specialists', body: 'Mobile developers, designers and QA — all NNC employees. Visit our Bengaluru office and meet the team.' },
    { n: '06', h3: '25+ healthcare apps delivered', body: 'Multi-specialty hospitals, dental and dermatology clinics, teleconsultation startups and diagnostic chains — NNC has shipped end-to-end.' },
  ],
  techStack: ['React Native', 'Flutter', 'Node JS', 'MongoDB', 'WebRTC', 'Razorpay', 'Firebase', 'AWS'],
  h2Tech: 'Healthcare App Technology Stack',
  h2Faq: 'Healthcare & Clinic App Frequently Asked Questions',
  faqs: [
    { q: 'How much does a healthcare app cost?', a: 'Healthcare apps at NNC start from ₹1.5L for a standard appointment-booking app, and ₹3L+ with full teleconsultation and EMR. All pricing is fixed before work starts — no hourly billing.' },
    { q: 'How long does it take to build a healthcare app?', a: 'A standard clinic app typically takes 10–14 weeks from design to Play Store / App Store launch. Hospital-grade apps with full EMR may take 16–20 weeks. Timelines are agreed upfront.' },
    { q: 'Is the app HIPAA / Indian data-privacy compliant?', a: 'NNC implements the technical practices required — encryption at rest and in transit, role-based access, audit logging and secure hosting. Final compliance certification depends on your operational policies; NNC provides the technical foundation.' },
    { q: 'Can you integrate with my existing HIS or practice management software?', a: 'Yes. NNC builds integrations with most hospital information systems and practice management tools via API. Custom integrations are quoted as part of the fixed scope.' },
    { q: 'Do you handle teleconsultation video and chat?', a: 'Yes — built in. NNC implements secure WebRTC video and chat so you do not pay per-minute third-party billing. HD video, screen sharing and in-call prescription issue are standard.' },
    { q: 'Do I own the source code?', a: 'Yes — completely. On delivery you receive every source file, Play Store / App Store credentials and admin access. No SaaS lock-in.' },
  ],
}

export default function HealthcareClinicAppPage() {
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
