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

const FACEBOOK_URL = "https://m.facebook.com/100043146381365/"
const INSTAGRAM_URL = "https://www.instagram.com/quick_fix_handyman?igsh=Mmc2cTN3OHlqanBj"

export default async function PortfolioSoonPage() {
    const dict = await getDictionary()
    const pt = dict.portfolioSoon

    return (
        <main className="flex flex-col min-h-screen bg-white">
            
            <PageHeader className="flex-1 relative overflow-hidden flex flex-col justify-center bg-white py-24 md:py-32">
                
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="max-w-3xl mx-auto flex flex-col items-center">
                        
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight leading-tight max-w-5xl mb-6 text-primary">
                            {pt.title}
                        </h1>
                        
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl font-body leading-relaxed mb-6">
                            {pt.subtitle1}
                        </p>
                        
                        <p className="text-slate-500 mb-10 text-lg font-body">
                            {pt.subtitle2}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-2xl mt-4">
                            <Button asChild size="lg" className="w-full sm:w-auto text-lg px-8 py-6 shadow-xl hover:scale-105 transition-transform bg-blue-600 hover:bg-blue-700 text-white border-0">
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

                            <Button asChild size="lg" variant="default" className="w-full sm:w-auto text-lg px-8 py-6 shadow-xl hover:scale-105 transition-transform bg-action hover:bg-action-hover text-white border-0">
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