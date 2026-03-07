import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AlertTriangle, ShieldAlert } from "lucide-react"
import { PageHeader } from "@/components/layout/PageHeader"
import { getDictionary } from "@/lib/i18n/dictionaries"

export async function generateMetadata(): Promise<Metadata> {
    const dict = await getDictionary()
    return {
        title: dict.servicesSpecialized.metadata.title,
        description: dict.servicesSpecialized.metadata.description,
    }
}

export default async function SpecializedPage() {
    const dict = await getDictionary()
    const sp = dict.servicesSpecialized

    return (
        <main className="min-h-screen">
            {/* Hero */}
            <PageHeader className="bg-slate-900 text-white py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full text-red-400 font-bold text-sm mb-4">
                            <AlertTriangle className="h-4 w-4" /> {sp.hero.badge}
                        </div>
                        <h1 className="text-5xl md:text-7xl font-heading font-extrabold leading-tight mb-6">
                            {sp.hero.headlineLine1} <br />
                            <span className="text-red-500">{sp.hero.headlineLine2}</span>
                        </h1>
                        <p className="text-xl text-slate-400 mb-8 max-w-2xl">
                            {sp.hero.subheadline}
                        </p>
                        <Button asChild size="lg" variant="emergency" className="text-lg px-8 py-6 h-auto">
                            <Link href="/contact">{sp.hero.button}</Link>
                        </Button>
                    </div>
                </div>
            </PageHeader>

            {/* Services List */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sp.services.map((service, i) => (
                            <div key={i} className="p-6 border border-slate-200 rounded-lg hover:border-red-500/50 transition-colors group">
                                <div className="flex items-start gap-4">
                                    <ShieldAlert className="h-8 w-8 text-red-600 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-lg font-bold text-slate-900">{service}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 max-w-4xl mx-auto text-center border-t border-slate-200 pt-16">
                        <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                            {sp.section.title}
                        </h2>
                        <p className="text-lg text-text-muted leading-relaxed mb-8">
                            {sp.section.text}
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {/* Placeholders for certification logos */}
                            <div className="h-16 rounded flex items-center justify-center bg-white border border-slate-200 text-slate-700 font-semibold shadow-sm transition-all duration-200 hover:bg-slate-50 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-[#EA580C]/30 focus-visible:ring-offset-0">IICRC</div>
                            <div className="h-16 rounded flex items-center justify-center bg-white border border-slate-200 text-slate-700 font-semibold shadow-sm transition-all duration-200 hover:bg-slate-50 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-[#EA580C]/30 focus-visible:ring-offset-0">OSHA</div>
                            <div className="h-16 rounded flex items-center justify-center bg-white border border-slate-200 text-slate-700 font-semibold shadow-sm transition-all duration-200 hover:bg-slate-50 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-[#EA580C]/30 focus-visible:ring-offset-0">EPA Lead Safe</div>
                            <div className="h-16 rounded flex items-center justify-center bg-white border border-slate-200 text-slate-700 font-semibold shadow-sm transition-all duration-200 hover:bg-slate-50 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-[#EA580C]/30 focus-visible:ring-offset-0">CCB #234567</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-slate-900 text-white text-center">
                <div className="container mx-auto px-4 max-w-2xl">
                    <h2 className="text-3xl font-heading font-bold mb-6">
                        {sp.cta.title}
                    </h2>
                    <Button asChild size="lg" variant="emergency" className="text-lg px-10 py-8 h-auto rounded-full">
                        <Link href="/contact">{sp.cta.button}</Link>
                    </Button>
                </div>
            </section>
        </main>
    )
}
