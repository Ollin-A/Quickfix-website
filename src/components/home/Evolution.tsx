import Image from "next/image"
import type { Dictionary } from "@/lib/i18n/dictionaries"

export function Evolution({ dict }: { dict: Dictionary["evolution"] }) {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Image */}
                    <div className="relative">
                        <div className="aspect-[4/5] md:aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://i.imgur.com/3BIpxw8.jpeg"
                                alt="Quick Fix Team working on a construction site"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-slate-50 rounded-full -z-10" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-action rounded-full -z-10 opacity-20" />
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-6">
                        <span className="text-action font-bold uppercase tracking-wider text-sm bg-action/5 px-3 py-1 rounded-full inline-block">
                            {dict.badge}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary leading-tight">
                            {dict.headlineLine1} <br />
                            <span className="text-slate-400">{dict.headlineLine2}</span>
                        </h2>
                        <div className="space-y-4 text-text-muted text-lg leading-relaxed">
                            <p>
                                {dict.p1}
                            </p>
                            <p>
                                {dict.p2_1}<strong>{dict.p2_bold}</strong>{dict.p2_2}
                            </p>
                            <p>
                                {dict.p3}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
