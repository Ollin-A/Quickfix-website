import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function MaintenanceTeaser({ dict }: { dict: Dictionary["maintenanceTeaser"] }) {
    return (
        <section className="py-24 bg-primary text-white overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 hidden lg:block pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    <div className="lg:w-1/2 space-y-6">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-sm font-bold text-action-foreground border border-white/10">
                            <span className="w-2 h-2 rounded-full bg-action animate-pulse" />
                            {dict.badge}
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
                            {dict.headlineLine1}<br />
                            <span className="text-slate-400">{dict.headlineLine2}</span>
                        </h2>
                        <p className="text-slate-300 text-lg max-w-xl">
                            {dict.subheadline}
                        </p>
                        <ul className="space-y-4">
                            {dict.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="h-6 w-6 rounded-full bg-action flex items-center justify-center shrink-0">
                                        <Check className="h-4 w-4 text-white" />
                                    </div>
                                    <span className="font-medium text-slate-100">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-4">
                            <Button asChild size="lg" className="text-lg px-8 shadow-xl bg-action hover:bg-action-hover text-white">
                                <Link href="/maintenance">{dict.buttonText}</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Visual/Card representation could go here, or just text for now as requested */}
                    <div className="lg:w-5/12 hidden lg:block relative">
                        <div className="relative z-10 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl">
                            <div className="space-y-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">{dict.cardTitle}</h3>
                                        <p className="text-slate-400">{dict.cardSub}</p>
                                    </div>
                                    <span className="text-3xl font-bold text-action">{dict.cardPrice}<span className="text-lg text-slate-400 font-normal">{dict.cardPer}</span></span>
                                </div>
                                <div className="h-px bg-white/10 w-full" />
                                <p className="text-sm text-slate-300 italic">
                                    {dict.cardQuote}
                                </p>
                            </div>
                        </div>
                        {/* Decor */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-action/20 blur-3xl rounded-full" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full" />
                    </div>

                </div>
            </div>
        </section>
    )
}
