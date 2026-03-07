import Link from "next/link"
import { Facebook, Instagram, MapPin, Mail, Phone } from "lucide-react"
import type { Dictionary } from "@/lib/i18n/dictionaries"

interface FooterProps {
    dict: Dictionary["footer"];
    locale: "en" | "es";
}

export function Footer({ dict, locale }: FooterProps) {
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="font-heading text-2xl font-bold tracking-tight">Quick Fix Handyman</h3>
                        <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
                            {dict.brandDesc}
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            {/* Social Links */}
                            <a
                                href="https://m.facebook.com/100043146381365/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-8 w-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-action transition-colors cursor-pointer"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-4 w-4" />
                            </a>
                            <a
                                href="https://www.instagram.com/quick_fix_handyman?igsh=Mmc2cTN3OHlqanBj"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-8 w-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-action transition-colors cursor-pointer"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-4 w-4" />
                            </a>
                            <a
                                href="https://www.tiktok.com/@quickfixhandymanus?_r=1&_t=ZS-94Tggti7XML"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-8 w-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-action transition-colors cursor-pointer"
                                aria-label="TikTok"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                                    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.8-5.46-.4-2.51.69-5.21 2.7-6.69 1.09-.8 2.38-1.28 3.73-1.44v4.09c-1.25.07-2.47.78-3.08 1.83-.54.94-.52 2.15-.05 3.12.38.77 1.12 1.34 1.96 1.54 1.1.28 2.3-.23 2.98-1.16.54-.73.74-1.67.75-2.59.04-4.8.02-9.61.03-14.41z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-heading font-bold text-lg text-action">{dict.quickLinks}</h4>
                        <ul className="space-y-2 text-sm text-slate-300">
                            <li><Link href="/about" className="hover:text-white transition-colors">{locale === 'en' ? 'About Us' : 'Nosotros'}</Link></li>
                            <li className="flex flex-col gap-2 py-1">
                                <span className="cursor-default">{locale === 'en' ? 'Our Services' : 'Nuestros Servicios'}</span>
                                <div className="flex flex-col gap-2 pl-3 border-l border-white/10">
                                    <Link href="/services/remodeling" className="hover:text-white transition-colors">{locale === 'en' ? 'Complete Remodeling' : 'Remodelación Completa'}</Link>
                                    <Link href="/services/handyman" className="hover:text-white transition-colors">{locale === 'en' ? 'Home Maintenance' : 'Mantenimiento del Hogar'}</Link>
                                    <Link href="/services/specialized" className="hover:text-white transition-colors">{locale === 'en' ? 'Specialized / Emergency' : 'Especializados / Urgencias'}</Link>
                                </div>
                            </li>
                            <li><Link href="/portfolio-soon" className="hover:text-white transition-colors">{locale === 'en' ? 'Portfolio' : 'Proyectos Realizados'}</Link></li>
                            <li><Link href="/maintenance" className="hover:text-white transition-colors">{locale === 'en' ? 'Maintenance Plan' : 'Plan de Mantenimiento'}</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">{dict.contactUs}</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="font-heading font-bold text-lg text-action">{dict.contactUs}</h4>
                        <ul className="space-y-4 text-sm text-slate-300">
                            <li className="flex items-start gap-3">
                                <Phone className="h-5 w-5 text-action shrink-0" />
                                <a href="tel:9712677905" className="hover:text-white transition-colors">(971) 267-7905</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="h-5 w-5 text-action shrink-0" />
                                <a href="mailto:quickfixhandyman19@gmail.com" className="hover:text-white transition-colors">quickfixhandyman19@gmail.com</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-action shrink-0" />
                                <span>McMinnville, OR<br />{dict.serving}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Service Areas */}
                    <div className="space-y-4">
                        <h4 className="font-heading font-bold text-lg text-action">{dict.serving}</h4>
                        <ul className="space-y-2 text-sm text-slate-300">
                            {dict.serviceAreas.map((area, index) => (
                                <li key={index}>{area}</li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-4 text-xs text-slate-400">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <p>&copy; {new Date().getFullYear()} Quick Fix Handyman. {dict.rights}</p>
                        <a
                            href="https://ollin.agency/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Built by OLLIN — opens OLLIN website"
                            className="hover:text-white transition-colors"
                        >
                            {dict.builtBy}
                        </a>
                    </div>
                    <p>CCB# 229622</p>
                </div>
            </div>
        </footer>
    )
}