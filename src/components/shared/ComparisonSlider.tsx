"use client"

import * as React from "react"
import { GripVertical } from "lucide-react"
import { cn } from "@/lib/utils"

interface ComparisonSliderProps {
    beforeImage: string
    afterImage: string
    beforeLabel?: string
    afterLabel?: string
    className?: string
}

export function ComparisonSlider({
    beforeImage,
    afterImage,
    beforeLabel = "Before",
    afterLabel = "After",
    className
}: ComparisonSliderProps) {
    const [sliderPosition, setSliderPosition] = React.useState(50)
    const [isDragging, setIsDragging] = React.useState(false)
    const containerRef = React.useRef<HTMLDivElement>(null)

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
        const percentage = (x / rect.width) * 100
        setSliderPosition(percentage)
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return
        handleMove(e.clientX)
    }

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!isDragging) return
        handleMove(e.touches[0].clientX)
    }

    const handleMouseDown = () => setIsDragging(true)
    const handleMouseUp = () => setIsDragging(false)

    React.useEffect(() => {
        document.addEventListener("mouseup", handleMouseUp)
        document.addEventListener("touchend", handleMouseUp)
        return () => {
            document.removeEventListener("mouseup", handleMouseUp)
            document.removeEventListener("touchend", handleMouseUp)
        }
    }, [])

    return (
        <div
            className={cn("relative rounded-2xl overflow-hidden shadow-2xl select-none group touch-pan-y md:touch-auto", className)}
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
        >
            {/* After Image (Background) */}
            <div className="absolute inset-0">
                <img
                    src={afterImage}
                    alt={afterLabel}
                    className="w-full h-full object-cover"
                    draggable={false}
                />
                <div className="absolute top-4 right-4 bg-primary/80 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest pointer-events-none z-10">
                    {afterLabel}
                </div>
            </div>

            {/* Before Image (Foreground - Clipped) */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
                <img
                    src={beforeImage}
                    alt={beforeLabel}
                    className="w-full h-full object-cover"
                    draggable={false}
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest pointer-events-none z-10">
                    {beforeLabel}
                </div>
            </div>

            {/* Drag Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
            >
                <div className="h-10 w-10 bg-action rounded-full border-4 border-white shadow-lg flex items-center justify-center -ml-0.5 transition-transform hover:scale-110 active:scale-95">
                    <GripVertical className="h-5 w-5 text-white" />
                </div>
            </div>
        </div>
    )
}
