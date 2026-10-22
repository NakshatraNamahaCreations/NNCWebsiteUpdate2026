import LandingPageTemplate, { landingMetadata } from '@/app/landing/LandingPageTemplate'

const SLUG = 'corporate-video-production-company-in-bangalore'

export const metadata = landingMetadata(SLUG)

export default function Page() {
  return <LandingPageTemplate slug={SLUG} />
}
