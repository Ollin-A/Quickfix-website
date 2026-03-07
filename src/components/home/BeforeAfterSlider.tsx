"use client"

import { ComparisonSlider } from "@/components/shared/ComparisonSlider"
import type { Dictionary } from "@/lib/i18n/dictionaries"

export function BeforeAfterSlider({ dict }: { dict: Dictionary["beforeAfter"] }) {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">

                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-action font-bold uppercase tracking-wider text-sm bg-action/5 px-3 py-1 rounded-full inline-block mb-4">
                        {dict.badge}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                        {dict.headline}
                    </h2>
                    <p className="text-text-muted text-lg">
                        {dict.subheadline}
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <ComparisonSlider
                        beforeImage="https://i.imgur.com/J0aVTIQ.jpeg"
                        afterImage="https://i.imgur.com/XgAgFeH.jpeg"
                        beforeLabel={dict.beforeLabel}
                        afterLabel={dict.afterLabel}
                        className="aspect-video"
                    />
                </div>

            </div>
        </section>
    )
}
