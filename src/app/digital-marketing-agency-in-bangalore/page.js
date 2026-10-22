import LandingPageTemplate, { landingMetadata } from '@/app/landing/LandingPageTemplate'

const SLUG = 'digital-marketing-agency-in-bangalore'

export const metadata = landingMetadata(SLUG)

export default function Page() {
  return <LandingPageTemplate slug={SLUG} />
}
