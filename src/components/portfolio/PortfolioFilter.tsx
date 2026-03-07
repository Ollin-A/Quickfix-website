"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Dictionary } from "@/lib/i18n/dictionaries"

interface PortfolioFilterProps {
    currentCategory: string
    onCategoryChange: (category: string) => void
    dict: Dictionary["portfolioPage"]["filters"]
}

export function PortfolioFilter({ currentCategory, onCategoryChange, dict }: PortfolioFilterProps) {
    const categories = [
        { label: dict.all, value: "all" },
        { label: dict.kitchenBath, value: "kitchen-bath" },
        { label: dict.remodel, value: "remodel" },
        { label: dict.exterior, value: "exterior" },
        { label: dict.repairs, value: "repairs" },
    ]

    return (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((category) => (
                <Button
                    key={category.value}
                    variant={currentCategory === category.value ? "default" : "outline"}
                    onClick={() => onCategoryChange(category.value)}
                    className={cn(
                        "rounded-full px-6 transition-all duration-300",
                        currentCategory === category.value
                            ? "shadow-md scale-105"
                            : "border-slate-200 text-slate-600 hover:border-action hover:text-action"
                    )}
                >
                    {category.label}
                </Button>
            ))}
        </div>
    )
}
