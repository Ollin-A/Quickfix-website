import Link from "next/link"
import { ArrowRight, Hammer, Home, Siren } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import type { Dictionary } from "@/lib/i18n/dictionaries"

export function ServiceBuckets({ dict }: { dict: Dictionary["serviceBuckets"] }) {
    const icons = [Hammer, Home, Siren]
    const hrefs = ["/services/remodeling", "/services/handyman", "/services/specialized"]
    const images = [
        "https://i.imgur.com/EEZvPNX.png",
        "https://i.imgur.com/IilrNd0.png",
        "https://i.imgur.com/alyL0vN.png"
    ]

    const services = dict.items.map((item, i) => ({
        ...item,
        icon: icons[i],
        href: hrefs[i],
        image: images[i]
    }))

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                        {dict.headline}
                    </h2>
                    <p className="text-text-muted text-lg">
                        {dict.subheadline}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link href={service.href} key={index} className="group block h-full">
                            <Card className="h-full flex flex-col overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300">
                                {/* Image Header */}
                                <div className="h-48 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors z-10" />
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>

                                <CardHeader>
                                    <div className="h-12 w-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-action group-hover:text-white transition-colors duration-300">
                                        <service.icon className="h-6 w-6 text-primary group-hover:text-white" />
                                    </div>
                                    <CardTitle className="group-hover:text-action transition-colors">
                                        {service.title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="flex-grow">
                                    <CardDescription className="text-base">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>

                                <CardFooter className="pt-0">
                                    <span className="text-sm font-bold text-primary group-hover:text-action flex items-center gap-2 transition-colors">
                                        {dict.learnMore} <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    )
}
