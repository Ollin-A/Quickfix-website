import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { PageHeader } from "@/components/layout/PageHeader"
import { getDictionary } from "@/lib/i18n/dictionaries"

export async function generateMetadata(): Promise<Metadata> {
    const dict = await getDictionary()
    return {
        title: dict.servicesRemodeling.metadata.title,
        description: dict.servicesRemodeling.metadata.description,
    }
}

export default async function RemodelingPage() {
    const dict = await getDictionary()
    const rm = dict.servicesRemodeling

    return (
        <main className="min-h-screen">

            {/* Hero Section */}
            <PageHeader className="py-24 lg:py-32 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-sm font-bold text-action mb-6 border border-white/10">
                            <span className="w-2 h-2 rounded-full bg-action animate-pulse" />
                            {rm.hero.badge}
                        </div>
                        <h1 className="text-5xl md:text-7xl font-heading font-extrabold leading-tight mb-6">
                            {rm.hero.headlineLine1} <br />
                            <span className="text-slate-400">{rm.hero.headlineLine2}</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 max-w-2xl">
                            {rm.hero.subheadline}
                        </p>
                        <Button asChild size="lg" className="text-lg px-8 py-6 shadow-xl bg-action hover:bg-action-hover text-white h-auto">
                            <Link href="/contact">{rm.hero.button}</Link>
                        </Button>
                    </div>
                </div>
                {/* Abstract BG */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 hidden lg:block" />
            </PageHeader>

            {/* Service List */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                                {rm.section.title}
                            </h2>
                            <p className="text-lg text-text-muted leading-relaxed">
                                {rm.section.text}
                            </p>
                            <ul className="grid gap-4">
                                {rm.services.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-lg font-medium text-primary">
                                        <CheckCircle2 className="h-6 w-6 text-action shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-[600px] bg-slate-100 rounded-2xl overflow-hidden shadow-2xl">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://i.imgur.com/zUfwGBR.jpeg"
                                alt="Remodeling showcase"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-24 bg-slate-50 border-t border-slate-200 text-center">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                        {rm.footerCta.title}
                    </h2>
                    <p className="text-lg text-text-muted mb-8">
                        {rm.footerCta.subtitle}
                    </p>
                    <Button asChild size="lg" variant="default" className="text-lg px-10 py-6 bg-action text-white hover:bg-action-hover h-auto">
                        <Link href="/contact">
                            {rm.footerCta.button} <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </section>

        </main>
    )
}
