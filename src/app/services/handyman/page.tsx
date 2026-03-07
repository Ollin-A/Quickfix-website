import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Droplets, Zap, Paintbrush, DoorOpen, Hammer, Tv, HelpCircle } from "lucide-react"
import { PageHeader } from "@/components/layout/PageHeader"
import { getDictionary } from "@/lib/i18n/dictionaries"

export async function generateMetadata(): Promise<Metadata> {
    const dict = await getDictionary()
    return {
        title: dict.servicesHandyman.metadata.title,
        description: dict.servicesHandyman.metadata.description,
    }
}

export default async function HandymanPage() {
    const dict = await getDictionary()
    const hm = dict.servicesHandyman

    const services = [
        {
            title: hm.services[0].title,
            description: hm.services[0].description,
            icon: Droplets
        },
        {
            title: hm.services[1].title,
            description: hm.services[1].description,
            icon: Zap
        },
        {
            title: hm.services[2].title,
            description: hm.services[2].description,
            icon: Paintbrush
        },
        {
            title: hm.services[3].title,
            description: hm.services[3].description,
            icon: DoorOpen
        },
        {
            title: hm.services[4].title,
            description: hm.services[4].description,
            icon: Hammer
        },
        {
            title: hm.services[5].title,
            description: hm.services[5].description,
            icon: Tv
        }
    ]

    return (
        <main className="min-h-screen">
            {/* Hero */}
            <PageHeader className="relative overflow-hidden py-24 lg:py-32">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        {/* Pill / Eyebrow (match siblings) */}
                        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-sm font-bold text-action mb-6 border border-white/10">
                            <span className="w-2 h-2 rounded-full bg-action animate-pulse" />
                            {hm.hero.badge}
                        </div>

                        <h1 className="text-5xl md:text-7xl font-heading font-extrabold leading-tight mb-6">
                            {hm.hero.headlineLine1} <br />
                            <span className="text-slate-400">{hm.hero.headlineLine2}</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 max-w-2xl">
                            {hm.hero.subheadline}
                        </p>
                        <Button asChild size="lg" className="text-lg px-8 py-6 bg-action hover:bg-action-hover text-white h-auto">
                            <Link href="/contact">{hm.hero.button}</Link>
                        </Button>
                    </div>
                </div>
            </PageHeader>

            {/* Services List */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, i) => (
                            <div
                                key={i}
                                className="group p-6 border border-slate-200 rounded-lg bg-white transition-all duration-300 hover:shadow-lg hover:border-action/30"
                            >
                                <div className="h-12 w-12 rounded-lg bg-action/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
                                    <service.icon className="h-6 w-6 text-action" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-action transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-lg font-medium text-slate-500">{service.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Integrated Callout */}
                    <div className="mt-10 p-8 border border-slate-200 rounded-lg bg-slate-50 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 bg-white border border-slate-200 rounded-full items-center justify-center shrink-0 hidden md:flex">
                                <HelpCircle className="h-6 w-6 text-slate-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-primary mb-1">{hm.callout.title}</h3>
                                <p className="text-text-muted">{hm.callout.text}</p>
                            </div>
                        </div>
                        <Button
                            asChild
                            variant="outline"
                            className="border-slate-200 text-primary hover:bg-white hover:text-action hover:border-action/30 shrink-0"
                        >
                            <Link href="/contact">{hm.callout.button}</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-primary text-white text-center">
                <div className="container mx-auto px-4 max-w-2xl">
                    <h2 className="text-3xl font-heading font-bold mb-6">
                        {hm.finalCta.title}
                    </h2>
                    <Button
                        asChild
                        size="lg"
                        className="text-lg px-10 py-8 shadow-xl bg-action hover:bg-action-hover text-white h-auto rounded-full group"
                    >
                        <Link href="/contact">
                            {hm.finalCta.button}{" "}
                            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </div>
            </section>
        </main>
    )
}
