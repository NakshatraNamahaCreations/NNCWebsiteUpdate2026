/**
 * Landing-page content â€” service Ã— location SEO landing pages.
 * Ported from the standalone "Nakshatra NAMAHA Website landing page" project
 * into the main NNC website. Each published combination renders at
 * /landing/<slug>.
 */

export const LANDING_COMPANY = {
  legalName: 'Nakshatra Namaha Creations',
  tagline: 'Your Digital Solutions Partner',
  siteUrl: 'https://nakshatranamahacreations.com',
  logo: '/assets/nnc-logo.png',
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
    cat: 'website',
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
    cat: 'mobile',
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
    cat: 'crm',
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
    cat: 'marketing',
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
    cat: 'video',
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
    cat: 'website',
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

/**
 * Per-slug SEO overrides.
 * Any key you add here overrides the auto-generated title/description for that
 * exact landing-page slug. Leave the whole map empty to use the template defaults.
 * Example:
 *   'website-development-company-in-bangalore': {
 *     title: 'Custom title here',
 *     description: 'Custom description here',
 *   },
 */
const SEO_OVERRIDES = {
  'crm-software-development-company-in-bangalore': {
    description: 'Best CRM & Custom Software Company in Bangalore. Get SaaS, dashboards and automation solutions from our expert team. Call +91 99005 66466 for a free quote.',
  },
  'website-development-company-in-bangalore': {
    description: 'Best website development company in Bangalore for corporate websites, ecommerce and React/Next.js web apps. Call +91 99005 66466 for a free quote.',
  },
  'corporate-video-production-company-in-bangalore': {
    description: 'Best Corporate Video & Animation Company in Bangalore offering brand films, 2D animation and drone videos. Expert in-house team. Call +91 99005 66466.'
  },
  'website-development-company-in-hyderabad': {
    description: 'Best website development company in Hyderabad for corporate websites, ecommerce and React/Next.js web apps. Call +91 99005 66466 for a free quote.'
  },
  'website-development-company-in-mysuru': {
    description: 'Best website development company in Mysuru for corporate websites, ecommerce and React/Next.js web apps. Call +91 99005 66466 for a free quote.'
  },
  'digital-marketing-agency-in-bangalore': {
    description: 'Best digital marketing & SEO company in Bangalore offering SEO, Google Ads and Meta campaigns focused on revenue growth. Call +91 99005 66466.'
  },
  'website-development-company-in-mumbai': {
    description: 'Best website development company in Mumbai for corporate websites, ecommerce and React/Next.js web apps. Call +91 99005 66466 for a free quote.'
  }
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
  { id: 'website', label: 'Websites' },
  { id: 'mobile', label: 'Mobile apps' },
  { id: 'crm', label: 'CRM & Web apps' },
  { id: 'animation', label: '2D animation' },
  { id: 'video', label: 'Corporate video' },
  { id: 'marketing', label: 'Digital marketing' },
]

// Real NNC projects grouped by service category.
// `cat` matches the SERVICES[*].cat values so each landing page shows only its
// relevant projects. Source of truth lives in src/app/our-works/OurWorksContent.js.
export const PORTFOLIO_ITEMS = [
  // ── Websites ──
  { name: 'Amec Technology', cat: 'website', tags: ['Next.js', 'CMS', 'SEO'], grad: 'linear-gradient(135deg,#1E40AF,#2563EB)', url: 'amectechnology.com', href: 'https://www.amectechnology.com/' },
  { name: 'Casasaga', cat: 'website', tags: ['Next.js', 'CMS', 'SEO'], grad: 'linear-gradient(135deg,#7C3AED,#2563EB)', url: 'casasaga.in', href: 'https://www.casasaga.in/' },
  { name: 'Movixora Logistics', cat: 'website', tags: ['Next.js', 'CMS', 'SEO'], grad: 'linear-gradient(135deg,#0B1F4B,#0ea5e9)', url: 'movixoralogistics.com', href: 'https://www.movixoralogistics.com/' },
  { name: 'Saltech', cat: 'website', tags: ['Next.js', 'CMS', 'SEO'], grad: 'linear-gradient(135deg,#334155,#2196f3)', url: 'saltech.ltd', href: 'https://saltech.ltd/' },
  { name: 'Werner Electrics', cat: 'website', tags: ['Next.js', 'CMS', 'SEO'], grad: 'linear-gradient(135deg,#1e293b,#f59e0b)', url: 'wernerelektrik.com', href: 'https://www.wernerelektrik.com/' },
  { name: 'Thridhavarnam', cat: 'website', tags: ['Next.js', 'Ecommerce', 'SEO'], grad: 'linear-gradient(135deg,#be123c,#f59e0b)', url: 'thridhavarnam.com', href: 'https://www.thridhavarnam.com/' },
  { name: 'V-Do Creatives', cat: 'website', tags: ['Next.js', 'CMS', 'SEO'], grad: 'linear-gradient(135deg,#7c3aed,#ec4899)', url: 'v-do.in', href: 'https://www.v-do.in/' },
  { name: 'Dermfit Clinic', cat: 'website', tags: ['Next.js', 'CMS', 'SEO'], grad: 'linear-gradient(135deg,#0ea5e9,#10b981)', url: 'dermfitclinic.com', href: 'https://dermfitclinic.com/' },
  { name: 'Puran Interiors', cat: 'website', tags: ['Next.js', 'SEO', 'CMS'], grad: 'linear-gradient(135deg,#7C3AED,#2196f3)', url: 'puraninteriors.com', href: 'https://www.puraninteriors.com/' },
  { name: 'Rent Angadi', cat: 'website', tags: ['Next.js', 'Maps API', 'Node.js'], grad: 'linear-gradient(135deg,#D97706,#f59e0b)', url: 'rentangadi.in', href: 'https://rentangadi.in/' },
  { name: 'Chiru Holidays', cat: 'website', tags: ['Next.js', 'CMS', 'Google Maps'], grad: 'linear-gradient(135deg,#D97706,#f97316)', url: 'chiruholidays.com', href: 'https://www.chiruholidays.com/' },
  { name: 'Studio99', cat: 'website', tags: ['Next.js', 'CMS', 'Animations'], grad: 'linear-gradient(135deg,#7C3AED,#ec4899)', url: 'studio99rrnagar.com', href: 'https://studio99rrnagar.com/' },

  // ── Mobile apps ──
  { name: 'Dhoond', cat: 'mobile', tags: ['Flutter', 'Node.js', 'Maps API'], grad: 'linear-gradient(135deg,#1E40AF,#2563EB)', url: 'play.google.com/dhoond', href: 'https://play.google.com/store/apps/details?id=com.ameccodex.dhoond.co' },
  { name: '3040 Property', cat: 'mobile', tags: ['React Native', 'Node.js', 'AWS'], grad: 'linear-gradient(135deg,#D97706,#f59e0b)', url: 'play.google.com/thirtyforty', href: 'https://play.google.com/store/apps/details?id=com.ororegencompanies.thirtyforty' },
  { name: 'Homjee', cat: 'mobile', tags: ['Flutter', 'Node.js', 'Firebase'], grad: 'linear-gradient(135deg,#2563EB,#0ea5e9)', url: 'homjee.in' },
  { name: 'Novus Health', cat: 'mobile', tags: ['Flutter', 'Firebase', 'REST API'], grad: 'linear-gradient(135deg,#6366F1,#7c3aed)', url: 'play.google.com/novus_health_lab', href: 'https://play.google.com/store/apps/details?id=com.novus.novus_health_lab' },
  { name: 'Coffee Mart', cat: 'mobile', tags: ['React Native', 'Node.js', 'Razorpay'], grad: 'linear-gradient(135deg,#92400E,#f59e0b)', url: 'play.google.com/indiancoffeetrader', href: 'https://play.google.com/store/apps/details?id=com.indiancoffeetrader' },
  { name: 'Kangrow Health', cat: 'mobile', tags: ['Flutter', 'Node.js', 'MySQL'], grad: 'linear-gradient(135deg,#16A34A,#10b981)', url: 'play.google.com/kangrow', href: 'https://play.google.com/store/apps/details?id=com.kangrow' },
  { name: 'Vijay Home Services', cat: 'mobile', tags: ['React Native', 'Node.js', 'AWS'], grad: 'linear-gradient(135deg,#059669,#10b981)', url: 'play.google.com/vhs1', href: 'https://play.google.com/store/apps/details?id=com.vhs1' },
  { name: 'Salil Javeri', cat: 'mobile', tags: ['Flutter', 'Node.js', 'Firebase'], grad: 'linear-gradient(135deg,#065f46,#10b981)', url: 'play.google.com/saliljaveri', href: 'https://play.google.com/store/apps/details?id=com.saliljaveri' },

  // ── CRM & Web apps ──
  { name: 'Smira Club CRM', cat: 'crm', tags: ['React.js', 'Node.js', 'MySQL'], grad: 'linear-gradient(135deg,#059669,#10b981)', url: 'smiraclub.in' },
  { name: 'Vijay Home Services CRM', cat: 'crm', tags: ['React.js', 'Node.js', 'MySQL'], grad: 'linear-gradient(135deg,#065f46,#10b981)', url: 'crm.vhs.com' },
  { name: 'Think It', cat: 'crm', tags: ['React.js', 'Node.js', 'Firebase'], grad: 'linear-gradient(135deg,#7C3AED,#2196f3)', url: 'thinkit.app' },
  { name: 'Make My Documents', cat: 'crm', tags: ['React.js', 'Node.js', 'MySQL'], grad: 'linear-gradient(135deg,#2563EB,#0ea5e9)', url: 'crm.makemydocuments.com' },
  { name: 'Ramsnest Ops', cat: 'crm', tags: ['React.js', 'Express', 'MySQL'], grad: 'linear-gradient(135deg,#78350F,#D97706)', url: 'ramsnest.in' },
  { name: 'ProLeverage', cat: 'crm', tags: ['React.js', 'Firebase', 'REST API'], grad: 'linear-gradient(135deg,#6366F1,#7c3aed)', url: 'proleverage.in' },
  { name: 'Nithya Event CRM', cat: 'crm', tags: ['React.js', 'Node.js', 'MySQL'], grad: 'linear-gradient(135deg,#DC2626,#ef4444)', url: 'nithyaevent.in' },
  { name: 'Ecomgyan Admin', cat: 'crm', tags: ['React.js', 'Node.js', 'MySQL'], grad: 'linear-gradient(135deg,#0284C7,#0ea5e9)', url: 'ecomgyan.in' },

  // ── 2D Animation ──
  { name: 'Animation Reel Vol.1', cat: 'animation', tags: ['After Effects', 'Illustrator', 'Motion'], grad: 'linear-gradient(135deg,#7C3AED,#ec4899)', url: 'youtu.be/2IVW069hDGo', href: 'https://youtu.be/2IVW069hDGo' },
  { name: 'Motion Graphics Film', cat: 'animation', tags: ['After Effects', 'Cinema 4D', 'VFX'], grad: 'linear-gradient(135deg,#6366F1,#7c3aed)', url: 'youtu.be/-4sN_QzE_vU', href: 'https://youtu.be/-4sN_QzE_vU' },
  { name: 'Character Animation', cat: 'animation', tags: ['Adobe Animate', 'AE', 'Illustrator'], grad: 'linear-gradient(135deg,#be123c,#ec4899)', url: 'youtu.be/JHd3ocRFiw4', href: 'https://youtu.be/JHd3ocRFiw4' },
  { name: 'Brand Explainer', cat: 'animation', tags: ['After Effects', 'Illustrator', 'Voice Over'], grad: 'linear-gradient(135deg,#F59E0B,#ef4444)', url: 'youtu.be/ov3pOoah8F8', href: 'https://youtu.be/ov3pOoah8F8' },
  { name: 'Social Media Reels', cat: 'animation', tags: ['After Effects', 'Premiere Pro', 'Motion'], grad: 'linear-gradient(135deg,#ec4899,#f97316)', url: 'youtu.be/_Sx2ETyA2PM', href: 'https://youtu.be/_Sx2ETyA2PM' },
  { name: 'Animation Reel Vol.2', cat: 'animation', tags: ['After Effects', 'Illustrator', 'Motion'], grad: 'linear-gradient(135deg,#7c3aed,#2196f3)', url: 'youtu.be/PND2cqMerUs', href: 'https://youtu.be/PND2cqMerUs' },

  // ── Corporate Video ──
  { name: 'NNC Corporate Film', cat: 'video', tags: ['4K Production', 'Drone', 'Colour Grade'], grad: 'linear-gradient(135deg,#DC2626,#ef4444)', url: 'youtu.be/rkxk2hhljqE', href: 'https://youtu.be/rkxk2hhljqE' },
  { name: 'Brand Film', cat: 'video', tags: ['4K Production', 'VFX', 'Sound Design'], grad: 'linear-gradient(135deg,#991B1B,#DC2626)', url: 'youtu.be/lZliMJm5DzM', href: 'https://youtu.be/lZliMJm5DzM' },
  { name: 'Corporate Video', cat: 'video', tags: ['4K Production', 'Colour Grade', 'Sound Design'], grad: 'linear-gradient(135deg,#1e293b,#DC2626)', url: 'youtu.be/iJTVv1HKLIo', href: 'https://youtu.be/iJTVv1HKLIo' },
  { name: 'Client Success Film', cat: 'video', tags: ['4K Production', 'Drone', 'Motion Gfx'], grad: 'linear-gradient(135deg,#334155,#ef4444)', url: 'youtu.be/SzLCHQWqsqA', href: 'https://youtu.be/SzLCHQWqsqA' },
  { name: 'Brand Story Film', cat: 'video', tags: ['4K Production', 'VFX', 'Colour Grade'], grad: 'linear-gradient(135deg,#7f1d1d,#f97316)', url: 'youtu.be/rh_hLGbRpwo', href: 'https://youtu.be/rh_hLGbRpwo' },

  // ── Digital Marketing ──
  { name: 'Puran Interiors SEO', cat: 'marketing', tags: ['On-page SEO', 'Link Building', 'CWV'], grad: 'linear-gradient(135deg,#14532D,#16A34A)', url: 'puraninteriors.com', href: 'https://www.puraninteriors.com/' },
  { name: 'Vijaya Home Services', cat: 'marketing', tags: ['Google Ads', 'Meta Ads', 'Analytics'], grad: 'linear-gradient(135deg,#1E40AF,#3B82F6)', url: 'vijayahomeservices.com', href: 'https://www.vijayahomeservices.com/' },
  { name: 'E-commerce Growth', cat: 'marketing', tags: ['SEO', 'Meta Ads', 'Email'], grad: 'linear-gradient(135deg,#4C1D95,#8B5CF6)', url: 'thridhavarnam.com', href: 'https://www.thridhavarnam.com/' },
]

export const TESTIMONIALS = [
  { name: 'Rahul Mehta', role: 'Founder, Kanchi Silks', rating: 5, quote: 'They rebuilt our store and sales went up within the first month. Fast, professional, and the site is genuinely ours.' },
  { name: 'Ananya Rao', role: 'Director, Meridian Group', rating: 5, quote: 'One team handled everything â€” design, build and SEO. We finally rank for the terms our customers actually search.' },
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
      ...(SEO_OVERRIDES[slug] || {}),
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
