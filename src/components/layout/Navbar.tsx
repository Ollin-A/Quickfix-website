"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, Phone, Globe, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import type { Dictionary } from "@/lib/i18n/dictionaries"

interface NavbarProps {
    dict: Dictionary["navbar"];
    locale: "en" | "es";
}

export function Navbar({ dict, locale }: NavbarProps) {
    const router = useRouter()
    const { scrollY } = useScroll()

    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

    // Determine visual state
    const isTransparent = !isScrolled

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = isScrolled
        if (latest > 50 && !previous) {
            setIsScrolled(true)
        } else if (latest <= 50 && previous) {
            setIsScrolled(false)
        }
    })

    const toggleLanguage = () => {
        const newLocale = locale === "en" ? "es" : "en";
        const isSecure = window.location.protocol === "https:";
        document.cookie = `qf_locale=${newLocale}; Path=/; Max-Age=31536000; SameSite=Lax${isSecure ? '; Secure' : ''}`;
        router.refresh();
    }

    const navLinks = [
        { name: dict.home, href: "/" },
        { name: dict.about, href: "/about" },
        {
            name: dict.services,
            href: "/services", // Only for reference, disabled as link
            hasDropdown: true,
            subItems: [
                { name: dict.remodeling, href: "/services/remodeling" },
                { name: dict.maintenance, href: "/services/handyman" },
                { name: dict.specialized, href: "/services/specialized" },
            ]
        },
        { name: dict.portfolio, href: "/portfolio-soon" },
        { name: dict.maintenancePlan, href: "/maintenance" },
    ]

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 h-[var(--nav-height)] border-b",
                isTransparent
                    ? "bg-black/10 backdrop-blur-sm border-white/5"
                    : "bg-white/70 backdrop-blur-xl border-slate-200/50 shadow-sm"
            )}
        >
            <div
                className={cn(
                    "absolute inset-0 bg-gradient-to-b from-black/60 to-transparent -z-10 transition-opacity duration-300 pointer-events-none",
                    isTransparent ? "opacity-100" : "opacity-0"
                )}
            />

            <div className="container h-full mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center group">
                    <img
                        src="https://i.imgur.com/pElZHcW.png"
                        alt="Quick Fix Handyman Logo"
                        className="h-10 w-auto object-contain transition-opacity group-hover:opacity-90"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            {link.hasDropdown ? (
                                <DropdownMenu modal={false}>
                                    <DropdownMenuTrigger
                                        className={cn(
                                            "group text-sm font-medium transition-colors outline-none flex items-center gap-1 py-2",
                                            isTransparent ? "text-white/90 hover:text-white" : "text-slate-600 hover:text-primary"
                                        )}
                                    >
                                        {link.name}
                                        <ChevronDown className="w-4 h-4 opacity-60 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                                    </DropdownMenuTrigger>

                                    <DropdownMenuContent
                                        align="start"
                                        sideOffset={12}
                                        className={cn(
                                            "w-[280px] p-2.5 rounded-2xl border shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl overflow-hidden",
                                            "data-[state=open]:animate-in data-[state=closed]:animate-out",
                                            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                                            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
                                            "data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2",
                                            isTransparent
                                                ? "bg-black/55 border-white/10 text-white"
                                                : "bg-white/80 border-slate-200/70 text-slate-900"
                                        )}
                                    >
                                        <div className={cn("px-2 pb-2 pt-1.5", isTransparent ? "text-white/60" : "text-slate-500")}>
                                            <div className="text-[11px] font-semibold tracking-[0.18em] uppercase">
                                                {dict.services}
                                            </div>
                                        </div>

                                        <div className={cn("h-px mx-2 mb-2", isTransparent ? "bg-white/10" : "bg-slate-200/70")} />

                                        {link.subItems?.map((sub) => (
                                            <DropdownMenuItem
                                                key={sub.href}
                                                asChild
                                                className={cn(
                                                    "rounded-xl px-3 py-2.5 cursor-pointer select-none outline-none",
                                                    "transition-colors",
                                                    isTransparent
                                                        ? "focus:bg-white/10 hover:bg-white/10 focus:text-white"
                                                        : "focus:bg-slate-100 hover:bg-slate-100 focus:text-slate-900"
                                                )}
                                            >
                                                <Link href={sub.href} className="w-full font-medium">
                                                    {sub.name}
                                                </Link>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors relative",
                                        isTransparent ? "text-white/90 hover:text-white" : "text-slate-600 hover:text-primary"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <Button 
                        onClick={toggleLanguage} 
                        variant="ghost" 
                        size="sm" 
                        className={cn("gap-1 hover:bg-white/10", isTransparent ? "text-white hover:text-white" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100")}
                        aria-label={locale === 'en' ? 'Cambiar a Español' : 'Switch to English'}
                    >
                        <Globe className="h-4 w-4" />
                        <span className="text-xs font-bold">{locale === "en" ? "ES" : "EN"}</span>
                    </Button>

                    <Button asChild className={cn("font-bold shadow-lg transition-all", isTransparent ? "bg-white text-slate-900 hover:bg-white/90" : "bg-primary text-white shadow-premium")}>
                        <Link href="/contact">{dict.getEstimate}</Link>
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div className="flex md:hidden items-center gap-2">
                    <Button 
                        onClick={toggleLanguage} 
                        variant="ghost" 
                        size="icon" 
                        className={cn("", isTransparent ? "text-white hover:bg-white/10" : "text-slate-900 hover:bg-slate-100")}
                        aria-label={locale === 'en' ? 'Cambiar a Español' : 'Switch to English'}
                    >
                        <Globe className="h-4 w-4" />
                        <span className="text-xs font-bold absolute bottom-1 right-1">{locale === "en" ? "ES" : "EN"}</span>
                    </Button>
                    
                    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className={cn("", isTransparent ? "text-white hover:bg-white/10" : "text-slate-900 hover:bg-slate-100")}>
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white/95 backdrop-blur-xl border-l border-slate-200">
                            <SheetHeader>
                                <SheetTitle className="text-left font-heading text-xl text-primary font-bold">Quick Fix Handyman</SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col gap-6 mt-8 h-full overflow-y-auto pb-8">
                                <nav className="flex flex-col gap-2">
                                    {navLinks.map((link) => (
                                        link.hasDropdown ? (
                                            <Accordion key={link.name} type="single" collapsible className="w-full border-none">
                                                <AccordionItem value={link.name} className="border-none">
                                                    <AccordionTrigger className="text-lg font-medium text-slate-800 hover:text-primary transition-colors py-3 hover:no-underline">
                                                        {link.name}
                                                    </AccordionTrigger>
                                                    <AccordionContent className="flex flex-col gap-2 pl-4 pb-2">
                                                        {link.subItems?.map(sub => (
                                                            <Link
                                                                key={sub.name}
                                                                href={sub.href}
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                className="text-base font-medium text-slate-600 hover:text-primary py-2 block"
                                                            >
                                                                {sub.name}
                                                            </Link>
                                                        ))}
                                                    </AccordionContent>
                                                </AccordionItem>
                                            </Accordion>
                                        ) : (
                                            <Link
                                                key={link.name}
                                                href={link.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="text-lg font-medium text-slate-800 hover:text-primary transition-colors py-3 block border-b border-slate-100 last:border-0"
                                            >
                                                {link.name}
                                            </Link>
                                        )
                                    ))}
                                </nav>
                                <div className="flex flex-col gap-4 mt-auto">
                                    <Button asChild className="w-full font-bold shadow-md" size="lg">
                                        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>{dict.getEstimate}</Link>
                                    </Button>
                                    <Button variant="outline" className="w-full gap-2" size="lg">
                                        <Phone className="h-4 w-4" />
                                        {dict.callUs}
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
