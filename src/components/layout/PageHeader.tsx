import * as React from "react"
import { cn } from "@/lib/utils"

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
}

export function PageHeader({
    className,
    children,
    as: Component = "section",
    ...props
}: PageHeaderProps) {
    return (
        <Component
            className={cn(
                "relative w-full mt-[calc(var(--nav-height)*-1)] pt-[var(--nav-height)]",
                "bg-primary text-white", // Default styles
                className
            )}
            {...props}
        >
            {children}
        </Component>
    )
}
