import type { Metadata } from "next"
import { Hero } from "@/components/home/Hero"
import { TrustRibbon } from "@/components/home/TrustRibbon"
import { Evolution } from "@/components/home/Evolution"
import { ServiceBuckets } from "@/components/home/ServiceBuckets"
import { BeforeAfterSlider } from "@/components/home/BeforeAfterSlider"
import { ReviewCarousel } from "@/components/home/ReviewCarousel"
import { MaintenanceTeaser } from "@/components/home/MaintenanceTeaser"
import { FinalCTA } from "@/components/home/FinalCTA"
import { getReviews } from "@/lib/reviews"
import { getDictionary } from "@/lib/i18n/dictionaries"

export async function generateMetadata(): Promise<Metadata> {
  return {}
}

export default async function Home() {
  const reviews = await getReviews()
  const dict = await getDictionary()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "Quick Fix Handyman & Renovations",
    "image": "https://quickfixhandyman.com/og-image.jpg", // Placeholder
    "description": "Premier General Contractor and Handyman service in McMinnville, Oregon.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main St", // Placeholder
      "addressLocality": "McMinnville",
      "addressRegion": "OR",
      "postalCode": "97128",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.2101,
      "longitude": -123.1973
    },
    "url": "https://quickfixhandyman.com",
    "telephone": "+19712677905",
    "email": "quickfixhandyman19@gmail.com",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "areaServed": ["McMinnville", "Salem", "Portland Metro", "Eugene"],
    "priceRange": "$$"
  }

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero dict={dict.hero} />
      <TrustRibbon dict={dict.trustRibbon} />
      <Evolution dict={dict.evolution} />
      <ServiceBuckets dict={dict.serviceBuckets} />
      <BeforeAfterSlider dict={dict.beforeAfter} />
      <ReviewCarousel reviews={reviews} dict={dict.reviews} />
      <MaintenanceTeaser dict={dict.maintenanceTeaser} />
      <FinalCTA dict={dict.finalCTA} />
    </div>
  )
}
