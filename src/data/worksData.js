// ─── NNC Projects — single source of truth ──────────────────────────────────
// Add a new project here and it will appear on both /our-works and the
// "A glimpse of our 2K+ websites" section on every landing page.
// `category` must be one of:
//   'Website Development' | 'Mobile Apps' | 'CRM & Web Apps'
//   | 'Animation' | 'Corporate Video' | 'Digital Marketing'

export const WORKS = [
  // ── Website Development ──
  { name: "Techcultz Lab", type: 'Career Training Website', category: 'Website Development', industry: 'Education', tech: ['Next JS', 'CMS', 'SEO'], result: '3× more lead enquiries', resultColor: '#059669', logo: '', url: 'https://techcultzlab.com/' },
  { name: "Orosent", type: 'E-commerce Website', category: 'Website Development', industry: 'E-commerce', tech: ['Next JS', 'CMS', 'SEO'], result: 'Page 1 Google in 90 days', resultColor: '#059669', logo: '/assets/orosent-logo.svg', url: 'https://orosent.com/' },
  { name: "Amec Technology", type: 'Powertrain, Energy & Mobility Solutions Website', category: 'Website Development', industry: 'Industrial', tech: ['Next JS', 'CMS', 'SEO'], result: '2× qualified B2B leads', resultColor: '#059669', logo: '/assets/amec-logo.jpeg', url: 'https://www.amectechnology.com/' },
  { name: 'Casasaga', type: 'Suites Booking Platform', category: 'Website Development', industry: 'Services', tech: ['Next JS', 'CMS', 'SEO'], result: 'Page 1 Google in 90 days', resultColor: '#059669', logo: '/assets/casasaga-logo.png', url: 'https://www.casasaga.in/' },
  { name: 'Movixora Logistics Pvt Ltd', type: 'Logistics Services Website', category: 'Website Development', industry: 'Logistics', tech: ['Next JS', 'CMS', 'SEO'], result: '2× qualified B2B leads', resultColor: '#059669', logo: '/assets/movixora-logo.webp', url: 'https://www.movixoralogistics.com/' },
  { name: 'Saltech', type: 'Engineering & Control Systems Website', category: 'Website Development', industry: 'Industrial', tech: ['Next JS', 'CMS', 'SEO'], result: '2× qualified B2B leads', resultColor: '#059669', logo: '/assets/saltech-logo.png', url: 'https://saltech.ltd/' },
  { name: "Werner Electrics", type: 'Industrial Control Components Website', category: 'Website Development', tech: ['Next JS', 'CMS', 'SEO'], result: 'Page 1 Google in 90 days', resultColor: '#059669', logo: '/assets/werner-logo.png', url: 'https://www.wernerelektrik.com/' },
  { name: 'Thridhavarnam', type: 'E-commerce Website', category: 'Website Development', tech: ['Next JS', 'CMS', 'SEO'], result: '200+ sales', resultColor: '#059669', logo: '/assets/thridhavarnam-logo.png', url: 'https://www.thridhavarnam.com/' },
  { name: 'V-Do Creatives', type: 'Cinematic Video & Production Studio Website', category: 'Website Development', tech: ['Next JS', 'CMS', 'SEO'], result: '3× more client enquiries', resultColor: '#059669', logo: '/assets/vdo-logo.png', url: 'https://www.v-do.in/' },
  { name: 'VRS Water Purifiers', type: 'E-commerce Website', category: 'Website Development', tech: ['Next JS', 'CMS', 'SEO'], result: '100+ online orders/mo', resultColor: '#059669', logo: '/assets/vrs-logo.png', url: 'https://vrswaterpurifiersalesandservices.com/' },
  { name: '3M Carcare Studio', type: 'Car Care Services Website', category: 'Website Development', tech: ['Next JS', 'CMS', 'SEO'], result: '60% rise in booking enquiries', resultColor: '#059669', logo: '/assets/3m-logo.webp', url: 'https://3mcarcarestudiosarjapur.com/' },
  { name: 'Cycraft', type: 'Cybersecurity Education Website', category: 'Website Development', tech: ['Next JS', 'CMS', 'SEO'], result: '3× more lead enquiries', resultColor: '@2563EB', logo: '/assets/cycraft-logo.webp', url: 'https://cycraft.in/' },
  { name: 'Decor N Art', type: 'E-Commerce Website', category: 'Website Development', tech: ['Next JS', 'CMS', 'SEO'], result: 'Page 1 Google in 90 days', resultColor: '#059669', logo: '/assets/decor-logo.png', url: 'https://decornart.in/' },
  { name: 'Universal Language Translations', type: 'Translation Services Website', category: 'Website Development', tech: ['Next JS', 'CMS', 'SEO'], result: '2× client enquiries', resultColor: '#059669', logo: '/assets/ult-logo.webp', url: 'https://ultlingua.com/' },
  { name: 'Dermfit Clinic', type: 'Clinical Dermatology Website', category: 'Website Development', tech: ['Next JS', 'CMS', 'SEO'], result: '150+ monthly consultations', resultColor: '#059669', logo: '/assets/dermfit-logo.webp', url: 'https://dermfitclinic.com/' },
  { name: 'Eliteinteriorz', type: 'Interior Design Website', category: 'Website Development', tech: ['Next JS', 'CMS', 'SEO'], result: 'Top 3 Google ranking', resultColor: '#059669', logo: '/assets/elite-logo.webp', url: 'https://www.eliteinteriorz.com/' },
  { name: 'Beyond Boundaries', type: 'Education Consulting Services', category: 'Website Development', tech: ['Next JS', 'CMS', 'SEO'], result: 'Top 3 Google ranking', resultColor: '#059669', logo: '/assets/beyond-boundaries-logo.webp', url: 'https://beyondbic.com/' },
  { name: 'Navkar Global Sourcing', type: 'Global Sourcing Website', category: 'Website Development', tech: ['Next JS', 'CMS', 'SEO'], result: 'Top 3 Google ranking', resultColor: '#2563EB', logo: '/assets/navkar-logo.png', url: 'https://www.navkarglobalsourcing.com/' },
  { name: 'Griffin Solutions', type: 'Corporate Gifting Website', category: 'Website Development', tech: ['Next JS', 'CMS', 'SEO'], result: 'Top 3 Google ranking', resultColor: '#2563EB', logo: '/assets/griffin-logo.png', url: 'https://griffinsolutions.in/' },
  { name: 'Tinysmiles', type: 'Photography Portfolio Website', category: 'Website Development', tech: ['Next JS', 'CMS', 'SEO'], result: 'Top 3 Google ranking', resultColor: '#059669', logo: '/assets/tinysmiles-logo.webp', url: 'https://tinysmilesphotography.in/' },
  { name: 'Armedex', type: 'Drug Safety Services Website', category: 'Website Development', tech: ['Next JS', 'CMS', 'SEO'], result: 'Top 3 Google ranking', resultColor: '#2563EB', logo: '/assets/armedex-logo.png', url: 'https://armedexglobal.com/' },
  { name: 'Puran Interiors', type: 'Corporate Website & SEO', category: 'Website Development', industry: 'Interior Design', tech: ['Next JS', 'SEO', 'CMS'], result: 'Page 1 Google in 90 days', resultColor: '#059669', logo: '/assets/puraninteriors.png', url: 'https://www.puraninteriors.com/' },
  { name: 'Brainwave Consultancy', type: 'Education Consultancy Website', category: 'Website Development', tech: ['Next JS', 'CMS', 'SEO'], result: 'Top 5 Google ranking', resultColor: '#4F46E5', logo: '/assets/bc-logo.webp', url: 'https://www.brainwaveconsultancy.in/' },
  { name: 'Novus', type: 'Corporate Website', category: 'Website Development', industry: 'Healthcare', tech: ['Next JS', 'CMS', 'Animations'], result: '95 PageSpeed Score', resultColor: '#2563EB', bg: 'linear-gradient(135deg,#1E40AF,#2563EB)', url: 'https://novushealth.in/' },
  { name: 'Make My Documents', type: 'Service Portal', category: 'Website Development', tech: ['Next JS', 'Node JS', 'MySQL'], result: '200+ daily enquiries', resultColor: '#059669', logo: '/assets/md.png', url: 'https://www.makemydocuments.com/' },
  { name: 'CND Play', type: 'Entertainment Portal', category: 'Mobile Apps', tech: ['React JS', 'CMS', 'AWS S3'], result: '500+ uploads/month', resultColor: '#DC2626', bg: 'linear-gradient(135deg,#991B1B,#DC2626)', url: '' },
  { name: 'Rent Angadi', type: 'Rental Listing Website', category: 'Website Development', industry: 'E-commerce', tech: ['Next JS', 'Maps API', 'Node JS'], result: '1,200+ active listings', resultColor: '#D97706', logo: '/assets/rent-logo.jpg', url: 'https://rentangadi.in/' },
  { name: 'Avyakth Roofing Solutions', type: 'Corporate Website', category: 'Website Development', industry: 'Services', tech: ['React JS', 'CMS', 'SEO'], result: '3× more lead enquiries', resultColor: '#2563EB', logo: '/assets/avyakth-logo.webp', url: 'https://avyakthroofing.com/' },
  { name: 'Ganesh Interiors', type: 'Portfolio & Lead Gen', category: 'Website Development', industry: 'Interior Design', tech: ['Next JS', 'CMS', 'Google Ads'], result: 'Top 3 local search rank', resultColor: '#059669', logo: '/assets/gd.webp', url: 'https://www.ganeshinteriordesigns.com/' },
  { name: 'Perar Infotech', type: 'IT Services Website', category: 'Website Development', tech: ['Next JS', 'SEO', 'Node JS'], result: '40% growth in organic traffic', resultColor: '#7C3AED', logo: '/assets/pi-logo.png', url: 'https://perarinfotech.com/' },
  { name: 'Anuflow Controls', type: 'Industrial Corporate Site', category: 'Website Development', tech: ['React JS', 'CMS', 'SEO'], result: 'Page 1 for 12 keywords', resultColor: '#D97706', logo: '/assets/afc-logo.jpeg', url: 'https://www.anuflowcontrols.com/' },
  { name: 'Learn Telugu Now', type: 'EdTech Learning Platform', category: 'Website Development', tech: ['Next JS', 'Node JS', 'MySQL'], result: '2,000+ enrolled learners', resultColor: '#F97316', logo: '/assets/lt-logo.png', url: 'https://www.learntelugunow.com/' },
  { name: 'Kulkarni Housing', type: 'Real Estate Website', category: 'Website Development', tech: ['Next JS', 'Maps API', 'CMS'], result: '500+ property enquiries/mo', resultColor: '#0284C7', logo: '/assets/kh-logo.webp', url: 'https://www.kulkarnihousing.com/' },
  { name: 'Destination Wedding', type: 'Wedding Portfolio Site', category: 'Website Development', tech: ['Next JS', 'CMS', 'Gallery'], result: '120+ booking enquiries', resultColor: '#DB2777', logo: '/assets/dh-logo.jpeg', url: 'https://destinationweddingcompany.in/' },
  { name: 'CarePro', type: 'Healthcare Service Website', category: 'Website Development', tech: ['React JS', 'Node JS', 'SEO'], result: '80+ daily appointment requests', resultColor: '#059669', logo: '/assets/cr-logo.jpeg', url: 'https://careproaihealth.com/' },
  { name: 'Kangrow Health', type: 'Health & Wellness Platform', category: 'Website Development', tech: ['Next JS', 'Node JS', 'CMS'], result: '4.9★ customer satisfaction', resultColor: '#16A34A', logo: '/assets/kg-logo.png', url: 'https://svkangrowhealth.com/' },
  { name: 'Rent Your PC', type: 'Tech Rental Platform', category: 'Website Development', industry: 'Services', tech: ['React JS', 'Node JS', 'Razorpay'], result: '300+ rentals processed/mo', resultColor: '#6366F1', logo: '/assets/rent-logo.webp', url: 'https://www.rentyourpc.com/' },
  { name: 'Chiru Holidays', type: 'Tour & Travel Website', category: 'Website Development', tech: ['Next JS', 'CMS', 'Google Maps'], result: '250+ tour bookings/month', resultColor: '#D97706', logo: '/assets/chiru-logo.webp', url: 'https://www.chiruholidays.com/' },
  { name: 'Studio99', type: 'Creative Studio Website', category: 'Website Development', tech: ['Next JS', 'CMS', 'Animations'], result: 'Premium brand presence', resultColor: '#7C3AED', logo: '/assets/st99.webp', url: 'https://studio99rrnagar.com/' },

  // ── Mobile Apps ──
  { name: 'Qresq', type: 'On-demand Service App', category: 'Mobile Apps', tech: ['Flutter', 'Node JS', 'Firebase'], result: '1,000+ service requests', resultColor: '#059669', logo: '', url: '' },
  { name: 'Dhoond', type: 'Energy Ecosystem App', category: 'Mobile Apps', tech: ['Flutter', 'Node JS', 'Maps API'], result: '500+ daily searches', resultColor: '#2563EB', logo: '/assets/dhoond-logo.jpeg', url: 'https://play.google.com/store/apps/details?id=com.ameccodex.dhoond.co' },
  { name: "3040 Property", type: 'Real Estate Service App', category: 'Mobile Apps', tech: ['React Native', 'Node JS', 'AWS'], result: '1,000+ property listings', resultColor: '#D97706', logo: '/assets/30-40logo.jpeg', url: 'https://play.google.com/store/apps/details?id=com.ororegencompanies.thirtyforty' },
  { name: "Salil Javeri", type: 'Library App', category: 'Mobile Apps', tech: ['Flutter', 'Node JS', 'Firebase'], result: '100+ books available', resultColor: '#7C3AED', logo: '', url: 'https://play.google.com/store/apps/details?id=com.saliljaveri' },
  { name: 'Homjee', type: 'Home Services App', category: 'Mobile Apps', tech: ['Flutter', 'Node JS', 'Firebase'], result: '5,000+ service bookings', resultColor: '#2563EB', logo: '/assets/logo.png' },
  { name: 'Rent Angadi', type: 'Rental Marketplace App', category: 'Mobile Apps', industry: 'E-commerce', tech: ['React Native', 'Node JS', 'Maps API'], result: '1,200+ active listings', resultColor: '#D97706', logo: '/assets/rent-logo.jpg' },
  { name: 'Novus', type: 'Business Management App', category: 'Mobile Apps', industry: 'Healthcare', tech: ['Flutter', 'Firebase', 'REST API'], result: '95 performance score', resultColor: '#6366F1', logo: '/assets/novus-logo.webp', url: 'https://play.google.com/store/apps/details?id=com.novus.novus_health_lab' },
  { name: 'Coffee Mart', type: 'Food & Beverage Ordering App', category: 'Mobile Apps', tech: ['React Native', 'Node JS', 'Razorpay'], result: '800+ daily orders processed', resultColor: '#92400E', logo: '/assets/cf-logo.jpeg', url: 'https://play.google.com/store/apps/details?id=com.indiancoffeetrader' },
  { name: 'Kangrow Health', type: 'Health & Wellness App', category: 'Mobile Apps', tech: ['Flutter', 'Node JS', 'MySQL'], result: '4.8★ on Play Store', resultColor: '#16A34A', logo: '/assets/kg-logo.png', url: 'https://play.google.com/store/apps/details?id=com.kangrow' },
  { name: 'Vijay Home Services', type: 'On-demand Service App', category: 'Mobile Apps', tech: ['React Native', 'Node JS', 'AWS'], result: '340% booking growth', resultColor: '#059669', logo: '/assets/vhs-logo.png', url: 'https://play.google.com/store/apps/details?id=com.vhs1' },
  { name: 'Think It', type: 'Productivity & Ideas App', category: 'Mobile Apps', tech: ['Flutter', 'Firebase', 'Hive DB'], result: '10,000+ active users', resultColor: '#7C3AED', logo: '/assets/th-logo.png' },
  { name: 'Make My Documents', type: 'Document Service App', category: 'Mobile Apps', tech: ['React Native', 'Node JS', 'MySQL'], result: '200+ daily document requests', resultColor: '#DC2626', logo: '/assets/md.png' },


  // ── CRM & Web Apps ──
  { name: 'Smira Club', type: 'Membership based Travel Booking CRM', category: 'CRM & Web Apps', tech: ['React JS', 'Node JS', 'MySQL'], result: '3× repeat bookings', resultColor: '#059669', logo: '/assets/smira-logo.svg' },
  { name: 'Vijay Home Services', type: 'Service Booking CRM', category: 'CRM & Web Apps', tech: ['React JS', 'Node JS', 'MySQL'], result: '340% booking growth', resultColor: '#059669', logo: '/assets/vhs-logo.png' },
  { name: 'Think It', type: 'Project Management CRM', category: 'CRM & Web Apps', tech: ['React JS', 'Node JS', 'Firebase'], result: '10,000+ active users', resultColor: '#7C3AED', logo: '/assets/th-logo.png' },
  { name: 'Make My Documents', type: 'Document Management CRM', category: 'CRM & Web Apps', tech: ['React JS', 'Node JS', 'MySQL'], result: '200+ daily requests handled', resultColor: '#2563EB', logo: '/assets/md.png' },
  { name: 'Ramsnest', type: 'Operations Dashboard', category: 'CRM & Web Apps', tech: ['React JS', 'Express', 'MySQL'], result: '80% less manual work', resultColor: '#D97706', bg: 'linear-gradient(135deg,#78350F,#D97706)' },
  { name: 'Classy Capture', type: 'Photography Studio CRM', category: 'CRM & Web Apps', tech: ['React JS', 'Node JS', 'AWS S3'], result: '3× faster booking flow', resultColor: '#DB2777', bg: 'linear-gradient(135deg,#9D174D,#EC4899)' },
  { name: 'Rent Angadi', type: 'Rental Management CRM', category: 'CRM & Web Apps', industry: 'E-commerce', tech: ['React JS', 'Node JS', 'Maps API'], result: '1,200+ listings managed', resultColor: '#F97316', logo: '/assets/rent-logo.jpg' },
  { name: 'Kangrow Health', type: 'Healthcare CRM', category: 'CRM & Web Apps', tech: ['React JS', 'Node JS', 'MySQL'], result: '4.9★ patient satisfaction', resultColor: '#16A34A', logo: '/assets/kg-logo.png' },
  { name: 'Coffee Mart', type: 'F&B Order Management CRM', category: 'CRM & Web Apps', tech: ['React JS', 'Node JS', 'Razorpay'], result: '800+ daily orders tracked', resultColor: '#92400E', logo: '/assets/cf-logo.jpeg' },
  { name: 'Ecomgyan', type: 'E-learning Admin CRM', category: 'CRM & Web Apps', tech: ['React JS', 'Node JS', 'MySQL'], result: '5,000+ learners managed', resultColor: '#0284C7', logo: '/assets/eg.webp' },
  { name: 'ProLeverage', type: 'Finance & Investment CRM', category: 'CRM & Web Apps', tech: ['React JS', 'Firebase', 'REST API'], result: '10,000+ investor profiles', resultColor: '#6366F1', logo: '/assets/pr.png' },
  { name: 'Nithya Event', type: 'Event Management CRM', category: 'CRM & Web Apps', tech: ['React JS', 'Node JS', 'MySQL'], result: '500+ events organised', resultColor: '#DC2626', logo: '/assets/nt-logo.png' },
  { name: 'Tarus Technology', type: 'IT Services CRM', category: 'CRM & Web Apps', tech: ['React JS', 'Node JS', 'Postgres'], result: '40% fewer support tickets', resultColor: '#2563EB', logo: '/assets/tt-logo.jpeg' },

  // ── Animation ──

  // ── Corporate Video ──
  { name: 'NNC Corporate Film', type: '4K Corporate Video', category: 'Corporate Video', tech: ['4K Production', 'Drone', 'Colour Grade'], result: 'Premium brand film', videoId: 'rkxk2hhljqE' },
  { name: 'Brand Film', type: 'Corporate Brand Video', category: 'Corporate Video', tech: ['4K Production', 'VFX', 'Sound Design'], result: 'Cinematic brand story', videoId: 'lZliMJm5DzM' },
  { name: 'Corporate Video', type: '4K Corporate Film', category: 'Corporate Video', tech: ['4K Production', 'Colour Grade', 'Sound Design'], result: 'Professional brand story', videoId: 'iJTVv1HKLIo' },
  { name: 'Client Success Film', type: 'Brand Documentary', category: 'Corporate Video', tech: ['4K Production', 'Drone', 'Motion Gfx'], result: 'Impactful brand story', videoId: 'SzLCHQWqsqA' },
  { name: 'Brand Story Film', type: '4K Corporate Video', category: 'Corporate Video', tech: ['4K Production', 'VFX', 'Colour Grade'], result: 'Cinematic brand identity', videoId: 'rh_hLGbRpwo' },

  // ── Digital Marketing ──
  { name: 'Puran Interiors SEO', type: 'Google SEO Campaign', category: 'Digital Marketing', tech: ['On-page SEO', 'Link Building', 'CWV'], result: 'Page 1 Google in 90 days', resultColor: '#059669', bg: 'linear-gradient(135deg,#14532D,#16A34A)' },
  { name: 'Vijaya Home Services', type: 'Meta & Google Ads', category: 'Digital Marketing', tech: ['Google Ads', 'Meta Ads', 'Analytics'], result: '3.2× ROAS on ad spend', resultColor: '#2563EB', bg: 'linear-gradient(135deg,#1E40AF,#3B82F6)' },
  { name: 'E-commerce Growth', type: 'Full Funnel Marketing', category: 'Digital Marketing', tech: ['SEO', 'Meta Ads', 'Email Marketing'], result: '180% revenue in 4 months', resultColor: '#7C3AED', bg: 'linear-gradient(135deg,#4C1D95,#8B5CF6)' },

  // ── Videos ──

  // ── Animation Videos ──
  { name: 'Animation Reel Vol.1', type: '2D Animation', category: 'Animation', tech: ['After Effects', 'Illustrator', 'Motion Design'], result: 'Brand storytelling', videoId: '2IVW069hDGo' },
  { name: 'Motion Graphics Film', type: 'Motion Graphics', category: 'Animation', tech: ['After Effects', 'Cinema 4D', 'VFX'], result: 'Premium visual quality', videoId: '-4sN_QzE_vU' },
  { name: 'Character Animation', type: 'Character Animation', category: 'Animation', tech: ['Adobe Animate', 'After Effects', 'Illustrator'], result: 'Full character rigging', videoId: 'JHd3ocRFiw4' },
  { name: 'Product Animation', type: '3D Product Showcase', category: 'Animation', tech: ['Cinema 4D', 'After Effects', 'Colour Grade'], result: 'Used in ad campaigns', videoId: 'G5QmqH8jwEA' },
  { name: 'Brand Explainer', type: 'Explainer Animation', category: 'Animation', tech: ['After Effects', 'Illustrator', 'Voice Over'], result: '2M+ views', videoId: 'ov3pOoah8F8' },
  { name: 'Social Media Reels', type: 'Animated Reels Pack', category: 'Animation', tech: ['After Effects', 'Premiere Pro', 'Motion Gfx'], result: '3× engagement boost', videoId: '_Sx2ETyA2PM' },
  { name: 'Animation Showcase', type: '2D & Motion Animation', category: 'Animation', tech: ['After Effects', 'Illustrator', 'Motion Design'], result: 'Award-worthy visuals', videoId: 'OCcw65d7zXQ' },
  { name: 'Animation Reel Vol.2', type: '2D Animation', category: 'Animation', tech: ['After Effects', 'Illustrator', 'Motion Design'], result: 'Creative storytelling', videoId: 'PND2cqMerUs' },
  { name: 'Motion Design Reel', type: 'Motion Graphics', category: 'Animation', tech: ['After Effects', 'Cinema 4D', 'Premiere Pro'], result: 'High-impact visuals', videoId: 'gigcIj4HrAc' },
  { name: 'Animation Reel Vol.3', type: '2D Animation', category: 'Animation', tech: ['After Effects', 'Illustrator', 'Motion Design'], result: 'Creative animation work', videoId: 'F_GUkFhIpPI' },
  { name: 'Animation Reel Vol.4', type: '2D Animation', category: 'Animation', tech: ['After Effects', 'Illustrator', 'Motion Design'], result: 'Stunning visual storytelling', videoId: 'G-HyMJsBveo' },
]

// Map Our Works `category` → the id the landing portfolio section expects.
export const CATEGORY_TO_LANDING_ID = {
  'Website Development': 'website',
  'Mobile Apps': 'mobile',
  'CRM & Web Apps': 'crm',
  'Animation': 'animation',
  'Corporate Video': 'video',
  'Digital Marketing': 'marketing',
}

// Fallback gradient palette — used for landing thumbnails when a work has no `bg`.
const GRAD_PALETTE = [
  'linear-gradient(135deg,#1E40AF,#2563EB)',
  'linear-gradient(135deg,#7C3AED,#2563EB)',
  'linear-gradient(135deg,#0B1F4B,#0ea5e9)',
  'linear-gradient(135deg,#334155,#2196f3)',
  'linear-gradient(135deg,#1e293b,#f59e0b)',
  'linear-gradient(135deg,#be123c,#f59e0b)',
  'linear-gradient(135deg,#7c3aed,#ec4899)',
  'linear-gradient(135deg,#0ea5e9,#10b981)',
  'linear-gradient(135deg,#059669,#10b981)',
  'linear-gradient(135deg,#D97706,#f59e0b)',
  'linear-gradient(135deg,#6366F1,#7c3aed)',
  'linear-gradient(135deg,#DC2626,#ef4444)',
]

// Strip protocol + leading www. to give a compact host-only display string.
function compactUrl(u) {
  if (!u) return ''
  return u.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/+$/, '')
}

// Derive the shape expected by the landing portfolio section
// (src/app/landing/LandingContent.js). Keep this in sync with
// PORTFOLIO_CATEGORIES in src/data/landingPages.js.
export const WORKS_FOR_LANDING = WORKS.map((w, i) => {
  const videoHref = w.videoId ? `https://youtu.be/${w.videoId}` : undefined
  const href = w.url || videoHref || undefined
  return {
    name: w.name,
    cat: CATEGORY_TO_LANDING_ID[w.category] || 'website',
    tags: w.tech || [],
    grad: w.bg || GRAD_PALETTE[i % GRAD_PALETTE.length],
    url: w.url ? compactUrl(w.url) : (w.videoId ? `youtu.be/${w.videoId}` : ''),
    href,
  }
})
