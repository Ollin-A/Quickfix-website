import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"
import { PageHeader } from "@/components/layout/PageHeader"
import { getDictionary } from "@/lib/i18n/dictionaries"

export async function generateMetadata(): Promise<Metadata> {
    const dict = await getDictionary()
    return {
        title: dict.portfolioSoon.metadata.title,
        description: dict.portfolioSoon.metadata.description,
    }
}

const FACEBOOK_URL = "https://facebook.com/REPLACE_ME"
const INSTAGRAM_URL = "https://instagram.com/REPLACE_ME"

export default async function PortfolioSoonPage() {
    const dict = await getDictionary()
    const pt = dict.portfolioSoon

    return (
        <main className="min-h-screen">
            <PageHeader className="bg-slate-900 text-white py-24 md:py-32 relative overflow-hidden min-h-[60vh] flex flex-col justify-center">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="max-w-3xl mx-auto flex flex-col items-center">
                        <h1 className="text-5xl md:text-7xl font-heading font-extrabold leading-tight mb-6">
                            {pt.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-2 max-w-2xl font-body">
                            {pt.subtitle1}
                        </p>
                        <p className="text-slate-400 mb-10 text-lg">
                            {pt.subtitle2}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-2xl mt-4">
                            <Button asChild size="lg" className="w-full sm:w-auto text-lg px-8 py-6 shadow-xl hover:scale-105 transition-transform bg-blue-600 hover:bg-blue-700 text-white">
                                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                    <Facebook className="h-5 w-5" />
                                    {pt.facebook}
                                </a>
                            </Button>

                            <Button asChild size="lg" className="w-full sm:w-auto text-lg px-8 py-6 shadow-xl hover:scale-105 transition-transform bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 hover:opacity-90 text-white border-0">
                                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                    <Instagram className="h-5 w-5" />
                                    {pt.instagram}
                                </a>
                            </Button>

                            <Button asChild size="lg" variant="default" className="w-full sm:w-auto text-lg px-8 py-6 shadow-xl hover:scale-105 transition-transform bg-primary text-white">
                                <Link href="/contact">
                                    {pt.cta}
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </PageHeader>
        </main>
    )
}
