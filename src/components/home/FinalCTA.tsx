import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function FinalCTA({ dict }: { dict: Dictionary["finalCTA"] }) {
    return (
        <section className="py-24 bg-white text-center">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary leading-tight">
                        {dict.headline}
                    </h2>
                    <p className="text-xl text-text-muted leading-relaxed">
                        {dict.subheadline}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button asChild size="lg" className="w-full sm:w-auto text-lg px-12 py-6 shadow-xl">
                            <Link href="/contact">{dict.getEstimate}</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-lg px-12 py-6">
                            <a href="tel:9712677905">{dict.callUs}</a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
