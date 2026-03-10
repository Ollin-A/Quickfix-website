import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Shield, HardHat, Award, ArrowRight } from "lucide-react"
import { PageHeader } from "@/components/layout/PageHeader"
import { getDictionary } from "@/lib/i18n/dictionaries"

export async function generateMetadata(): Promise<Metadata> {
    const dict = await getDictionary()
    return {
        title: dict.aboutPage.metadata.title,
        description: dict.aboutPage.metadata.description,
    }
}

export default async function AboutPage() {
    const dict = await getDictionary()
    const ab = dict.aboutPage

    const credentials = [
        { icon: Shield, text: ab.credentials[0] },
        { icon: HardHat, text: ab.credentials[1] },
        { icon: Award, text: ab.credentials[2] },
        { icon: CheckCircle2, text: ab.credentials[3] },
    ]

    return (
        <main className="min-h-screen">
            {/* Hero */}
            <PageHeader className="relative overflow-hidden py-24">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-action font-bold uppercase tracking-widest text-sm mb-4 block">
                            {ab.hero.eyebrow}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-heading font-extrabold leading-tight mb-8">
                            {ab.hero.headlineLine1} <br />
                            <span className="text-slate-400">{ab.hero.headlineLine2}</span>
                        </h1>
                    </div>
                </div>
                {/* Abstract BG */}
                <div className="absolute inset-0 bg-primary z-0 opacity-90" />
                <div
                    className="absolute inset-0 z-[-1] bg-cover bg-center opacity-40 mix-blend-overlay"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2689&auto=format&fit=crop")' }}
                />
            </PageHeader>

            {/* The Evolution Story */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                                {ab.evolution.title}
                            </h2>
                            <p className="text-lg text-text-muted leading-relaxed">
                                {ab.evolution.p1}
                            </p>
                            <p className="text-lg text-text-muted leading-relaxed" dangerouslySetInnerHTML={{ __html: ab.evolution.p2.replace("**efficiency**", "<strong>efficiency</strong>").replace("**eficiencia**", "<strong>eficiencia</strong>") }} />
                            <p className="text-lg font-bold text-primary italic border-l-4 border-action pl-4 my-6">
                                {ab.evolution.quote}
                            </p>
                        </div>
                        <div className="relative h-[500px] w-full bg-slate-100 rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="https://i.imgur.com/CLXHX99.jpeg"
                                alt="Quick Fix Team on Site"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust & Authority Grid */}
            <section className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                            {ab.trust.title}
                        </h2>
                        <p className="text-text-muted max-w-2xl mx-auto">
                            {ab.trust.text}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {credentials.map((cred, i) => (
                            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-premium transition-shadow group">
                                <div className="h-16 w-16 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <cred.icon className="h-8 w-8 text-primary" />
                                </div>
                                <p className="font-bold text-primary text-lg">{cred.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-3xl relative z-10">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
                        {ab.cta.title}
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/portfolio-soon">
                            <Button size="lg" variant="outline" className="text-lg px-10 py-8 border-white/25 text-white hover:bg-white hover:text-primary h-auto bg-white/5 backdrop-blur-sm transition-colors focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-0">
                                {ab.cta.button1}
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button size="lg" className="text-lg px-10 py-8 shadow-xl bg-action hover:bg-action-hover text-white h-auto group">
                                {ab.cta.button2} <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                </div>
                {/* Paint Splash Effect */}
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-action/20 rounded-full blur-3xl" />
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
            </section>
        </main>
    )
}
