/**
 * Landing-page content — service × location SEO landing pages.
 * Ported from the standalone "Nakshatra NAMAHA Website landing page" project
 * into the main NNC website. Each published combination renders at
 * /landing/<slug>.
 */

export const LANDING_COMPANY = {
  legalName: 'Nakshatra Namaha Creations',
  tagline: 'Your Digital Solutions Partner',
  siteUrl: 'https://www.nakshatranamahacreations.com',
  logo: 'https://s3.eu-north-1.amazonaws.com/admin.nakshatranamahacreations.in/NNC+NEW+LOGO+2020+low+res.png',
  foundedYear: 2015,
  phone: '+91 99005 66466',
  phoneDigits: '919900566466',
  email: 'info@nakshatranamahacreations.com',
  stats: { googleRating: '4.9', reviewCount: '87', teamSize: '35+', websites: '2K+' },
}

const SERVICES = {
  'website-development': {
    name: 'Website Development',
    slugPattern: 'website-development-company-in-{location}',
    summary: 'Corporate websites, ecommerce platforms and web apps built on React and Next.js.',
    deliverables: [
      { title: 'Corporate Websites', description: 'Brand led marketing sites that load fast and rank.' },
      { title: 'Ecommerce Platforms', description: 'Storefronts with payments, catalogue and order flows.' },
      { title: 'Web Applications & Portals', description: 'Dashboards, customer portals and internal tools.' },
      { title: 'Landing Pages', description: 'Conversion focused pages for campaigns and launches.' },
      { title: 'CMS Platforms', description: 'Edit your own content without calling a developer.' },
      { title: 'Progressive Web Apps', description: 'App like experiences that install from the browser.' },
    ],
  },
  'mobile-app-development': {
    name: 'Mobile App Development',
    slugPattern: 'mobile-app-development-company-in-{location}',
    summary: 'iOS and Android apps built with React Native and Flutter from a single codebase.',
    deliverables: [
      { title: 'React Native Apps', description: 'One codebase shipping to both iOS and Android.' },
      { title: 'Flutter Apps', description: 'High performance cross platform builds.' },
      { title: 'Native iOS & Android', description: 'Platform native builds where they are warranted.' },
      { title: 'On-demand Apps', description: 'Booking, delivery and service marketplaces.' },
      { title: 'Ecommerce Apps', description: 'Mobile storefronts with payments built in.' },
      { title: 'App Maintenance', description: 'Updates, monitoring and store submissions.' },
    ],
  },
  'crm-custom-software': {
    name: 'CRM & Custom Software',
    slugPattern: 'crm-software-development-company-in-{location}',
    summary: 'SaaS products, dashboards and automations built around how you actually work.',
    deliverables: [
      { title: 'Custom CRM Systems', description: 'Track leads, deals and customers your way.' },
      { title: 'SaaS Platforms', description: 'Subscription products built to scale.' },
      { title: 'Admin Dashboards', description: 'Real-time visibility across your business.' },
      { title: 'Workflow Automation', description: 'Replace manual work with software.' },
      { title: 'ERP & Inventory', description: 'Stock, orders and operations in one place.' },
      { title: 'API Integrations', description: 'Connect the tools you already use.' },
    ],
  },
  'digital-marketing': {
    name: 'Digital Marketing & SEO',
    slugPattern: 'digital-marketing-agency-in-{location}',
    summary: 'SEO, Google Ads and Meta campaigns measured against revenue, not impressions.',
    deliverables: [
      { title: 'Search Engine Optimisation', description: 'Rank for the terms your buyers search.' },
      { title: 'Google Ads', description: 'Search and shopping campaigns that convert.' },
      { title: 'Meta Ads', description: 'Facebook and Instagram campaigns that sell.' },
      { title: 'Social Media Management', description: 'Consistent presence, handled for you.' },
      { title: 'Local SEO & GMB', description: 'Show up in your city and on the map.' },
      { title: 'Analytics & Reporting', description: 'Clear reports tied to business outcomes.' },
    ],
  },
  'corporate-video': {
    name: 'Corporate Video & Animation',
    slugPattern: 'corporate-video-production-company-in-{location}',
    summary: 'Brand films, 2D animation and drone work produced end to end in house.',
    deliverables: [
      { title: 'Corporate Brand Films', description: 'Films that tell your company story.' },
      { title: '2D Explainer Animation', description: 'Make complex offerings simple.' },
      { title: 'Product Ad Shoots', description: 'Studio and on-location product films.' },
      { title: 'Drone & Aerial', description: 'Cinematic aerial coverage.' },
      { title: 'Social Media Reels', description: 'Short-form video that performs.' },
      { title: 'Motion Graphics', description: 'Animated titles, logos and graphics.' },
    ],
  },
  'graphic-design-branding': {
    name: 'Graphic Design & Branding',
    slugPattern: 'branding-agency-in-{location}',
    summary: 'Logo, UI/UX and complete brand identity systems.',
    deliverables: [
      { title: 'Logo & Identity', description: 'Marks, palettes and type systems.' },
      { title: 'Brand Guidelines', description: 'A consistent look across every touchpoint.' },
      { title: 'UI/UX Design', description: 'Interfaces designed for web and apps.' },
      { title: 'Social Media Kits', description: 'Templates your team can run with.' },
      { title: 'Marketing Collateral', description: 'Brochures, decks and print design.' },
      { title: 'Packaging Design', description: 'Retail-ready packaging that stands out.' },
    ],
  },
}

const LOCATIONS = {
  bangalore: { name: 'Bangalore', region: 'Karnataka' },
  mumbai: { name: 'Mumbai', region: 'Maharashtra' },
  mysuru: { name: 'Mysuru', region: 'Karnataka' },
  hyderabad: { name: 'Hyderabad', region: 'Telangana' },
}

/* Which service/location combos are published (opted in explicitly). */
const PUBLISHED = [
  { service: 'website-development', locations: ['bangalore', 'mumbai', 'mysuru', 'hyderabad'] },
  { service: 'mobile-app-development', locations: ['bangalore'] },
  { service: 'crm-custom-software', locations: ['bangalore'] },
  { service: 'digital-marketing', locations: ['bangalore'] },
  { service: 'corporate-video', locations: ['bangalore'] },
  { service: 'graphic-design-branding', locations: ['bangalore'] },
]

export const DIFFERENTIATORS = [
  { title: 'PageSpeed 90+ guaranteed', description: 'Written into the service contract, not promised in a sales call.' },
  { title: 'You own the source code', description: 'No platform lock in. The codebase is yours on delivery.' },
  { title: 'Agreed scope, no surprises', description: 'You approve the scope up front, with a clear timeline.' },
  { title: 'Zero outsourcing', description: 'Built entirely by our in house team. No subcontractors.' },
  { title: 'Modern tech stack', description: 'React, Next.js, Node.js, TypeScript and Tailwind CSS.' },
  { title: 'A decade of delivery', description: 'Across 10+ industry verticals since 2015.' },
]

export const PROBLEM_CATEGORIES = [{"label":"Losing business online","headline":"You're invisible where it matters most","problems":["Customers can't find us on Google when they search for our services.","Competitors with weaker products outrank us on search.","Our website gets visitors but almost no enquiries.","We rely entirely on referrals and word of mouth.","People visit our site, then leave without contacting us.","We have no idea where our leads actually come from.","Our phone stopped ringing after competitors went digital.","We lose customers to businesses that simply look more professional online.","Prospects assume we're small because of our outdated site.","We can't compete with the organised players in our city."]},{"label":"Outdated & unprofessional","headline":"First impressions are made in seconds","problems":["Our website looks like it was built ten years ago.","The design feels cheap and it hurts our brand.","Our site doesn't reflect the quality of our work.","It's embarrassing to share our website link with clients.","Our logo and branding are inconsistent across pages.","The site is a template everyone else in our industry also uses.","Half the pages still have placeholder or dummy content.","Our website hasn't been updated in years.","The photos are low quality and stretched out of shape.","Nothing about the site feels premium."]},{"label":"Slow & broken","headline":"Every second of load time costs you customers","problems":["Our website takes forever to load.","Pages freeze or crash on older phones.","Images take several seconds to appear.","Customers leave before the site even loads.","Our Google PageSpeed score is deep in the red.","Contact forms fail silently and we never get the enquiry.","Links lead to 404 pages.","The site goes down and we don't even find out.","Every update seems to break something else.","Our hosting is unreliable and painfully slow."]},{"label":"Mobile experience","headline":"Most of your visitors are on a phone","problems":["Our site is barely usable on a phone.","Buttons are too small to tap on mobile.","Text overflows off the edge of the screen.","Customers have to pinch and zoom just to read us.","The mobile menu doesn't open properly.","Most of our traffic is mobile, but the site was built for desktop.","Checkout is impossible to complete on a phone.","The call and WhatsApp buttons are buried or missing.","The mobile layout looks nothing like the desktop one.","We lose mobile visitors within seconds."]},{"label":"Search visibility","headline":"If they can't find you, they can't buy from you","problems":["We don't show up in local searches.","Our Google Business Profile isn't linked to our site.","We have no blog or content to rank for.","Competitors own page one while we sit on page five.","We paid for SEO and saw zero results.","Our pages have no proper titles or descriptions.","Google can't tell what our business actually does.","We have no schema or structured data.","Our site isn't being indexed properly.","We rank for our own name and nothing else."]},{"label":"Conversion & leads","headline":"Traffic means nothing without conversions","problems":["Visitors don't know what to do next on our site.","There's no clear call to action anywhere.","Our enquiry form asks too much and people give up.","We can't capture leads after office hours.","There's no way to book a call or demo online.","Our pricing is unclear, so people never enquire.","We get traffic but a terrible conversion rate.","Nothing on the site builds trust with a new visitor.","We can't run ads because we have no landing page.","Every ad click lands on a generic homepage and bounces."]},{"label":"Selling online","headline":"Selling online should be effortless","problems":["We simply can't sell our products online.","Our online store is clunky and hard to use.","The payment gateway keeps failing at checkout.","We lose sales to abandoned carts every day.","Managing inventory on our site is a nightmare.","We can't run discount codes or offers easily.","Customers can't track their own orders.","Shipping and tax calculations are always wrong.","Our store looks untrustworthy, so people don't pay.","We're stuck paying heavy fees on marketplace platforms."]},{"label":"Content & brand","headline":"Your brand deserves to be seen properly","problems":["We have no professional photos or videos of our work.","Our content doesn't explain why we're different.","We can't tell our story properly online.","Our reviews and testimonials are hidden away.","We have no case studies to show real results.","Our brand looks different on every platform.","We can't produce content consistently.","Our copy is full of jargon customers don't understand.","We have no video content at all.","Our social media and website don't match."]},{"label":"Control & ownership","headline":"It's your website, so you should own it","problems":["We have to call a developer for every tiny change.","Nobody knows who owns our website login.","We're locked into a platform we can't leave.","We don't even own our own source code.","Our previous developer simply disappeared.","Updating a single price takes days.","We're scared to touch the site in case it breaks.","We pay monthly for something we can't control.","Our domain and hosting are in someone else's name.","We have no backups if something goes wrong."]},{"label":"Trust & security","headline":"Trust is won or lost in an instant","problems":["Our site shows Not Secure in the browser bar.","We have no SSL certificate.","Customer data isn't stored safely.","We're genuinely worried about getting hacked.","Spam floods our contact form daily.","We have no privacy policy or terms of service.","Fake enquiries waste our team's time.","Our payment page doesn't look secure.","We can't prove online that we're a legitimate business.","A security warning is scaring customers away."]},{"label":"Past agency experience","headline":"You've been burned by an agency before","problems":["Every agency we hired overpromised and underdelivered.","Freelancers went silent halfway through the project.","We paid a premium and got a template.","Nobody explained the process to us.","The final bill was double the quote.","Our project dragged on for months with no end.","We were passed around offshore teams we never met.","Support vanished the moment we paid.","We never got trained on how to use our own site.","We're tired of starting over with a new vendor every year."]},{"label":"Growth & scale","headline":"Your website should scale with you","problems":["Our website can't handle traffic spikes during campaigns.","We can't launch new products or pages quickly.","Our tools don't talk to each other, like CRM, WhatsApp and email.","We manually copy leads between systems.","We can't grow without hiring more people.","Our processes are stuck on spreadsheets and paper.","We have no dashboard to see how the business is doing.","Expanding to a new city means starting from scratch online.","We can't measure the ROI of our marketing.","We know we're leaving money on the table online."]}]

export const TOTAL_PROBLEMS = PROBLEM_CATEGORIES.reduce((s, c) => s + c.problems.length, 0)

export const PORTFOLIO_CATEGORIES = [
  { id: 'all', label: 'All work' },
  { id: 'animated', label: 'Parallax & animated' },
  { id: 'ecommerce', label: 'Ecommerce' },
  { id: 'landing', label: 'Landing pages' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'webapp', label: 'Web apps & portals' },
  { id: 'mobile', label: 'Mobile apps' },
]

export const PORTFOLIO_ITEMS = [{"name":"Aurora Studios","cat":"animated","tags":["Parallax","GSAP","Next.js"],"grad":"linear-gradient(135deg,#7c3aed,#2196f3)","url":"aurorastudios.com"},{"name":"Vertex Motion","cat":"animated","tags":["Animation","WebGL","Framer"],"grad":"linear-gradient(135deg,#0ea5e9,#10b981)","url":"vertexmotion.io"},{"name":"Lumen Interiors","cat":"animated","tags":["Parallax","Gallery","Next.js"],"grad":"linear-gradient(135deg,#f59e0b,#ef4444)","url":"lumeninteriors.in"},{"name":"Nimbus Travel","cat":"animated","tags":["Interactive","Maps","Animation"],"grad":"linear-gradient(135deg,#2196f3,#00c6ff)","url":"nimbustravel.com"},{"name":"Kanchi Silks","cat":"ecommerce","tags":["Ecommerce","Payments","Catalogue"],"grad":"linear-gradient(135deg,#be123c,#f59e0b)","url":"kanchisilks.com"},{"name":"FreshCart","cat":"ecommerce","tags":["Ecommerce","Delivery","PWA"],"grad":"linear-gradient(135deg,#10b981,#0ea5e9)","url":"freshcart.in"},{"name":"Pulse Fitness Gear","cat":"ecommerce","tags":["Ecommerce","Subscriptions","Reviews"],"grad":"linear-gradient(135deg,#1e293b,#f97316)","url":"pulsegear.com"},{"name":"Bloom & Co","cat":"ecommerce","tags":["Ecommerce","Scheduling","Gifting"],"grad":"linear-gradient(135deg,#ec4899,#7c3aed)","url":"bloomandco.in"},{"name":"Craft Cellar","cat":"ecommerce","tags":["Marketplace","Multi vendor","Payments"],"grad":"linear-gradient(135deg,#78350f,#f59e0b)","url":"craftcellar.com"},{"name":"LaunchPad SaaS","cat":"landing","tags":["Landing page","Conversion","A/B ready"],"grad":"linear-gradient(135deg,#2563eb,#0ea5e9)","url":"launchpad.app"},{"name":"MediBook","cat":"landing","tags":["Landing page","Booking","Healthcare"],"grad":"linear-gradient(135deg,#0ea5e9,#10b981)","url":"medibook.in"},{"name":"EstateOne","cat":"landing","tags":["Landing page","Real estate","Lead gen"],"grad":"linear-gradient(135deg,#334155,#2196f3)","url":"estateone.in"},{"name":"EventPro","cat":"landing","tags":["Landing page","Ticketing","Events"],"grad":"linear-gradient(135deg,#7c3aed,#ec4899)","url":"eventpro.live"},{"name":"Meridian Group","cat":"corporate","tags":["Corporate","Multi brand","CMS"],"grad":"linear-gradient(135deg,#0b1f4b,#1a7ad4)","url":"meridiangroup.com"},{"name":"BuildRight Constructions","cat":"corporate","tags":["Corporate","Portfolio","Lead gen"],"grad":"linear-gradient(135deg,#334155,#f59e0b)","url":"buildright.in"},{"name":"Sterling Finance","cat":"corporate","tags":["Corporate","Finance","Calculators"],"grad":"linear-gradient(135deg,#065f46,#10b981)","url":"sterlingfinance.in"},{"name":"CareWell Hospitals","cat":"corporate","tags":["Corporate","Healthcare","Booking"],"grad":"linear-gradient(135deg,#0ea5e9,#2563eb)","url":"carewell.health"},{"name":"LogiMove","cat":"corporate","tags":["Corporate","Logistics","Enquiry"],"grad":"linear-gradient(135deg,#1e293b,#0ea5e9)","url":"logimove.com"},{"name":"ClinicOS","cat":"webapp","tags":["Web app","Dashboard","SaaS"],"grad":"linear-gradient(135deg,#2563eb,#7c3aed)","url":"app.clinicos.in"},{"name":"EduTrack","cat":"webapp","tags":["Web app","ERP","Portal"],"grad":"linear-gradient(135deg,#0ea5e9,#10b981)","url":"edutrack.school"},{"name":"FleetIQ","cat":"webapp","tags":["Web app","Real time","Analytics"],"grad":"linear-gradient(135deg,#0b1f4b,#0ea5e9)","url":"app.fleetiq.io"},{"name":"HR Hub","cat":"webapp","tags":["Web app","HR","Automation"],"grad":"linear-gradient(135deg,#7c3aed,#2196f3)","url":"app.hrhub.in"},{"name":"QuickServe","cat":"mobile","tags":["Mobile","React Native","Payments"],"grad":"linear-gradient(135deg,#f97316,#ef4444)","url":"quickserve.app"},{"name":"FitPulse","cat":"mobile","tags":["Mobile","Flutter","Wearables"],"grad":"linear-gradient(135deg,#10b981,#0ea5e9)","url":"fitpulse.app"}]

export const TESTIMONIALS = [
  { name: 'Rahul Mehta', role: 'Founder, Kanchi Silks', rating: 5, quote: 'They rebuilt our store and sales went up within the first month. Fast, professional, and the site is genuinely ours.' },
  { name: 'Ananya Rao', role: 'Director, Meridian Group', rating: 5, quote: 'One team handled everything — design, build and SEO. We finally rank for the terms our customers actually search.' },
  { name: 'Vikram Shetty', role: 'CEO, FleetIQ', rating: 5, quote: 'The dashboard they built runs our whole operation. Clean code, delivered on time, and they handed us everything.' },
  { name: 'Priya Nair', role: 'Owner, Bloom & Co', rating: 5, quote: 'Our old site was embarrassing. The new one loads instantly and looks premium. Enquiries have doubled.' },
  { name: 'Arjun Kapoor', role: 'Partner, Sterling Finance', rating: 5, quote: 'PageSpeed 90+ in the contract was not a gimmick. They delivered exactly that, and the design is beautiful.' },
  { name: 'Sneha Iyer', role: 'Marketing Head, CareWell', rating: 5, quote: 'Responsive team, in-house and reachable. They understood healthcare and built a site patients trust.' },
]

export const PROCESS_STEPS = [
  { title: 'Discover', description: 'We map your goals, audience and the problems costing you money, before any design.' },
  { title: 'Design', description: 'You approve the scope and a clickable design that matches your brand.' },
  { title: 'Build', description: 'Our in house team builds it on React & Next.js, fast, with PageSpeed 90+ baked in.' },
  { title: 'Launch & grow', description: 'We ship, hand you the source code, and can drive traffic with SEO and ads.' },
]

function buildFaqs(serviceName, locationName, keyword) {
  return [
    {
      question: `Which is the best ${serviceName.toLowerCase()} company in ${locationName}?`,
      answer: `${keyword} is how our clients describe ${LANDING_COMPANY.legalName}. We are an in house team in ${locationName}, delivering since ${LANDING_COMPANY.foundedYear}, rated ${LANDING_COMPANY.stats.googleRating} on Google, and you own everything we build.`,
    },
    {
      question: `How long does a ${serviceName.toLowerCase()} project take in ${locationName}?`,
      answer: `It depends on scope, but we agree a clear timeline up front and stick to it. Share your requirements and we will map out the milestones with you.`,
    },
    {
      question: `Do you outsource any of the work?`,
      answer: `No. As the ${keyword}, every project is delivered by our ${LANDING_COMPANY.stats.teamSize} in house team. We do not subcontract, which is why we can commit to timelines and quality in writing.`,
    },
    {
      question: `Do I own the source code?`,
      answer: `Yes. You own the source code outright on delivery, with no platform lock in. You are free to host it or hand it to another team at any point.`,
    },
    {
      question: `How much does it cost?`,
      answer: `Every project is scoped and priced up front so there are no surprises. Call ${LANDING_COMPANY.phone} or request a free quote and we will send a clear, fixed proposal.`,
    },
  ]
}

function buildPage(serviceId, locationId) {
  const service = SERVICES[serviceId]
  const location = LOCATIONS[locationId]
  const slug = service.slugPattern.replace('{location}', locationId)
  const keyword = `Best ${service.name} Company in ${location.name}`
  return {
    slug,
    keyword,
    service,
    location,
    seo: {
      title: keyword,
      description: `${keyword}. ${service.summary} In house team in ${location.name}, delivering since ${LANDING_COMPANY.foundedYear}. Call ${LANDING_COMPANY.phone} for a free quote.`,
    },
    faqs: buildFaqs(service.name, location.name, keyword),
  }
}

/* Build all published landing pages */
export const LANDING_PAGES = PUBLISHED.flatMap((p) =>
  p.locations.map((loc) => buildPage(p.service, loc)),
)

export const LANDING_SLUGS = LANDING_PAGES.map((p) => p.slug)

export function getLandingPage(slug) {
  return LANDING_PAGES.find((p) => p.slug === slug)
}
