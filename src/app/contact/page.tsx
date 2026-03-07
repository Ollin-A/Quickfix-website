import type { Metadata } from "next"
import { ContactForm } from "@/components/features/ContactForm"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { PageHeader } from "@/components/layout/PageHeader"
import { getDictionary } from "@/lib/i18n/dictionaries"

// We can optionally dynamically generate metadata
export async function generateMetadata(): Promise<Metadata> {
    const dict = await getDictionary()
    return {
        title: dict.contactPage.metadata.title,
        description: dict.contactPage.metadata.description,
    }
}

export default async function ContactPage() {
    const dict = await getDictionary()

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "mainEntity": {
            "@type": "LocalBusiness",
            "name": "Quick Fix Handyman & Renovations",
            "telephone": "+19712677905",
            "email": "quickfixhandyman19@gmail.com",
            "areaServed": ["McMinnville", "Salem", "Portland", "Eugene"]
        }
    }

    return (
        <main className="min-h-screen bg-slate-50 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <PageHeader className="py-20 mb-16 text-center">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6">
                        {dict.contactPage.header.title}
                    </h1>
                    <p className="text-xl text-slate-300">
                        {dict.contactPage.header.subtitle}
                    </p>
                </div>
            </PageHeader>

            <div className="container mx-auto px-4">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">

                    {/* Contact Info Side Panel */}
                    <div className="space-y-8 order-2 lg:order-1">
                        <div className="bg-white p-8 rounded-2xl shadow-premium border border-slate-100 space-y-8">
                            <div>
                                <h3 className="font-bold text-primary text-xl mb-6">{dict.contactPage.infoBoxes.title}</h3>
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <div className="h-10 w-10 bg-action/10 rounded-full flex items-center justify-center shrink-0">
                                            <Phone className="h-5 w-5 text-action" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">{dict.contactPage.infoBoxes.phone}</p>
                                            <a href="tel:9712677905" className="text-lg font-bold text-primary hover:text-action transition-colors">(971) 267-7905</a>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="h-10 w-10 bg-action/10 rounded-full flex items-center justify-center shrink-0">
                                            <Mail className="h-5 w-5 text-action" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">{dict.contactPage.infoBoxes.email}</p>
                                            <a href="mailto:quickfixhandyman19@gmail.com" className="text-lg font-bold text-primary hover:text-action transition-colors break-all">quickfixhandyman19@gmail.com</a>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="h-10 w-10 bg-action/10 rounded-full flex items-center justify-center shrink-0">
                                            <MapPin className="h-5 w-5 text-action" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">{dict.contactPage.infoBoxes.office}</p>
                                            <p className="text-lg font-bold text-primary">McMinnville, OR</p>
                                            <p className="text-sm text-text-muted mt-1">{dict.contactPage.infoBoxes.serviceArea}</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="h-10 w-10 bg-action/10 rounded-full flex items-center justify-center shrink-0">
                                            <Clock className="h-5 w-5 text-action" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">{dict.contactPage.infoBoxes.hours}</p>
                                            <p className="text-lg font-bold text-primary">{dict.contactPage.infoBoxes.hoursValue}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="aspect-square w-full rounded-2xl bg-slate-200 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
                            <iframe
                                src="https://maps.google.com/maps?q=Quick%20Fix%20Handyman,%201026%20NE%20Irvine%20St,%20McMinnville,%20OR%2097128&t=&z=14&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-2 order-1 lg:order-2">
                        <ContactForm dict={dict.contactForm} />
                    </div>

                </div>
            </div>
        </main>
    )
}
