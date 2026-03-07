"use client"

import Link from "next/link"

import { Check, ShieldCheck, Clock, Hammer, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { PageHeader } from "@/components/layout/PageHeader"
import type { Dictionary } from "@/lib/i18n/dictionaries"

export function MaintenancePageClient({ dict }: { dict: Dictionary["maintenancePage"] }) {
    const featureIcons = [ShieldCheck, Hammer, Clock, Check, Check]
    const features = dict.features.map((text, i) => ({
        icon: featureIcons[i],
        text
    }))

    return (
        <main className="min-h-screen">

            {/* Hero Section */}
            <PageHeader className="relative overflow-hidden py-24 lg:py-32">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-sm font-bold text-action mb-6 border border-white/10">
                            <span className="w-2 h-2 rounded-full bg-action animate-pulse" />
                            {dict.hero.badge}
                        </div>
                        <h1 className="text-5xl md:text-7xl font-heading font-extrabold leading-tight mb-6">
                            {dict.hero.headlineLine1} <br />
                            <span className="text-slate-400">{dict.hero.headlineLine2}</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 max-w-2xl">
                            {dict.hero.subheadline}
                        </p>
                        <Button asChild size="lg" className="text-lg px-8 py-6 shadow-xl bg-action hover:bg-action-hover text-white h-auto">
                            <Link href="/contact">{dict.hero.button}</Link>
                        </Button>
                    </div>
                </div>
                {/* Abstract BG */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 hidden lg:block" />
            </PageHeader>

            {/* Problem vs Solution */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">

                        {/* The Stress (Left) */}
                        <div className="bg-slate-100 p-12 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-slate-500 mb-4">{dict.comparison.oldWay}</h3>
                            <ul className="space-y-4 text-slate-600">
                                <li className="flex items-center gap-3 text-lg opacity-75">
                                    <span className="text-red-500">✕</span> {dict.comparison.old1}
                                </li>
                                <li className="flex items-center gap-3 text-lg opacity-75">
                                    <span className="text-red-500">✕</span> {dict.comparison.old2}
                                </li>
                                <li className="flex items-center gap-3 text-lg opacity-75">
                                    <span className="text-red-500">✕</span> {dict.comparison.old3}
                                </li>
                                <li className="flex items-center gap-3 text-lg opacity-75">
                                    <span className="text-red-500">✕</span> {dict.comparison.old4}
                                </li>
                            </ul>
                        </div>

                        {/* The Solution (Right) */}
                        <div className="bg-primary p-12 flex flex-col justify-center text-white relative">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-action to-primary" />
                            <h3 className="text-2xl font-bold text-white mb-4">{dict.comparison.newWay}</h3>
                            <ul className="space-y-4">
                                {features.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-lg font-medium">
                                        <div className="h-6 w-6 rounded-full bg-action flex items-center justify-center shrink-0">
                                            <item.icon className="h-3.5 w-3.5 text-white" />
                                        </div>
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* ROI Section */}
            <section className="py-16 bg-slate-50 border-y border-slate-200">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                        {dict.roi.quote}
                    </h2>
                    <p className="text-lg text-text-muted leading-relaxed">
                        {dict.roi.p1}
                        <span className="font-bold text-primary">{dict.roi.p2}</span>
                        {dict.roi.p3}
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-12">
                        <div className="h-12 w-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                            <HelpCircle className="h-6 w-6" />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-primary">{dict.faq.title}</h2>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                        {dict.faq.items.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-lg font-bold text-primary text-left">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-base text-text-muted leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <div className="mt-16 text-center">
                        <Card className="bg-primary text-white border-none shadow-premium p-8 max-w-2xl mx-auto">
                            <CardContent className="p-0 space-y-6">
                                <h3 className="text-2xl font-bold">{dict.cta.title}</h3>
                                <p className="text-slate-300">
                                    {dict.cta.subtitle}
                                </p>
                                <Button asChild size="lg" className="w-full text-lg py-8 shadow-xl bg-action hover:bg-action-hover text-white h-auto">
                                    <Link href="/contact">{dict.cta.button}</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

        </main>
    )
}
