import type { Metadata } from "next"
import { PortfolioPageClient } from "@/components/portfolio/PortfolioPageClient"
import { getDictionary } from "@/lib/i18n/dictionaries"

export async function generateMetadata(): Promise<Metadata> {
    const dict = await getDictionary()
    return {
        title: dict.portfolioPage.metadata.title,
        description: dict.portfolioPage.metadata.description,
    }
}

export default async function PortfolioPage() {
    const dict = await getDictionary()
    return <PortfolioPageClient dict={dict.portfolioPage} />
}
