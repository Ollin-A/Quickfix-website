"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { PageHeader } from "@/components/layout/PageHeader"
import type { Dictionary } from "@/lib/i18n/dictionaries"

export function Hero({ dict }: { dict: Dictionary["hero"] }) {
    return (
        <PageHeader className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            
            {/* Video Background Placeholder */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-slate-900/50 relative">
                    {/* Visual fallback for video */}
                    <div className="absolute inset-0 bg-[url('https://i.imgur.com/j3ujZZY.jpeg')] bg-cover bg-center opacity-40 mix-blend-overlay" />
                    {/* Gradient Overlay for Text Pop */}
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/30 to-transparent z-10 pointer-events-none" />
                </div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center gap-6 pt-16 pb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight lead-tight max-w-5xl"
                >
                    {dict.headlineLine1} <br className="hidden md:block" />
                    <span className="text-white drop-shadow-lg">{dict.headlineLine2}</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-slate-200 max-w-3xl font-body leading-relaxed"
                >
                    {dict.subheadline}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center gap-4 mt-8"
                >
                    <Button asChild size="lg" className="text-lg px-8 py-6 shadow-xl hover:scale-105 transition-transform">
                        <Link href="/contact">{dict.getEstimate}</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition-colors">
                        <Link href="/portfolio-soon">
                            {dict.viewTransformations}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/70 animate-bounce z-20"
            >
                <span className="text-xs uppercase tracking-[0.2em]">{dict.scroll}</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/70 to-transparent" />
            </motion.div>

        </PageHeader>
    )
}