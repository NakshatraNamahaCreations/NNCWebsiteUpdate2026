import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { Footer } from '@/components/Sections'
import LandingContent from '../LandingContent'
import '../landing.css'
import {
  getLandingPage,
  LANDING_SLUGS,
  LANDING_COMPANY,
} from '@/data/landingPages'

export const dynamicParams = false

export function generateStaticParams() {
  return LANDING_SLUGS.map((slug) => ({ slug }))
}

export function generateMetadata({ params }) {
  const page = getLandingPage(params.slug)
  if (!page) return {}
  const url = `${LANDING_COMPANY.siteUrl}/landing/${page.slug}`
  const title = `${page.seo.title} | NNC`
  const s = page.service.name
  const l = page.location.name
  return {
    title,
    description: page.seo.description,
    keywords: [
      page.keyword,
      `${s} Company in ${l}`,
      `${s.toLowerCase()} company in ${l.toLowerCase()}`,
      `${s} in ${l}`,
      `best ${s.toLowerCase()} in ${l.toLowerCase()}`,
      `${s} agency ${l}`,
      `top ${s.toLowerCase()} companies in ${l.toLowerCase()}`,
    ].join(', '),
    alternates: { canonical: url },
    openGraph: {
      title,
      description: page.seo.description,
      url,
      siteName: 'Nakshatra Namaha Creations',
      locale: 'en_IN',
      type: 'website',
      images: [{ url: LANDING_COMPANY.logo, width: 1200, height: 630, alt: page.keyword }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: page.seo.description,
      images: [LANDING_COMPANY.logo],
    },
  }
}

export default function LandingPage({ params }) {
  const page = getLandingPage(params.slug)
  if (!page) notFound()

  const url = `${LANDING_COMPANY.siteUrl}/landing/${page.slug}`

  /* JSON-LD: Service + FAQ + Breadcrumb for SEO */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: page.keyword,
        serviceType: page.service.name,
        provider: {
          '@type': 'Organization',
          name: LANDING_COMPANY.legalName,
          url: LANDING_COMPANY.siteUrl,
          logo: LANDING_COMPANY.logo,
          telephone: LANDING_COMPANY.phone,
          email: LANDING_COMPANY.email,
        },
        areaServed: page.location.name,
        url,
        description: page.seo.description,
      },
      {
        '@type': 'FAQPage',
        mainEntity: page.faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: LANDING_COMPANY.siteUrl },
          { '@type': 'ListItem', position: 2, name: page.keyword, item: url },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <LandingContent page={page} />
      <Footer />
    </>
  )
}
