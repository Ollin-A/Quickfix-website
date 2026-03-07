import { ShieldCheck, MapPin, Globe, Star } from "lucide-react"
import type { Dictionary } from "@/lib/i18n/dictionaries"

export function TrustRibbon({ dict }: { dict: Dictionary["trustRibbon"] }) {
    const icons = [ShieldCheck, MapPin, Globe, Star]
    
    const trustItems = dict.map((item, index) => ({
        ...item,
        icon: icons[index]
    }))

    return (
        <div className="relative z-20 -mt-8 px-4 container mx-auto">
            <div className="bg-white/95 backdrop-blur shadow-premium rounded-xl p-6 md:p-8 grid grid-cols-2 gap-x-4 gap-y-6 md:flex md:items-center md:justify-between md:gap-0 border border-slate-100 md:divide-x divide-slate-100">
                {trustItems.map((item, index) => (
                    <div key={index} className="flex flex-col md:flex-row items-center gap-3 md:gap-4 px-0 md:px-4 w-full md:w-auto justify-center md:justify-center first:pl-0 last:pr-0">
                        <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                            <item.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                        </div>
                        <div className="text-center md:text-left">
                            <p className="font-heading font-bold text-primary text-sm md:text-base leading-tight">
                                <span className="hidden md:inline">{item.text}</span>
                                <span className="md:hidden">{item.mobileText}</span>
                            </p>
                            <p className="text-[10px] md:text-xs text-text-muted mt-0.5 font-medium">
                                {item.sub}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
