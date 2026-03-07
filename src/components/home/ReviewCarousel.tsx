"use client"

import { Star, Quote } from "lucide-react"
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import type { UnifiedReview } from "@/lib/reviews"
import AutoScroll from "embla-carousel-auto-scroll"
import React from "react"
import type { Dictionary } from "@/lib/i18n/dictionaries"

interface ReviewCarouselProps {
    reviews: UnifiedReview[];
    dict: Dictionary["reviews"];
}

export function ReviewCarousel({ reviews, dict }: ReviewCarouselProps) {
    const [api, setApi] = React.useState<CarouselApi>()
    const plugin = React.useRef(
        AutoScroll({
            speed: 1,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
        })
    )

    // Manual handlers for granular control over ticker behavior
    const onMouseEnter = React.useCallback(() => {
        const autoScroll = api?.plugins()?.autoScroll
        if (autoScroll) {
            autoScroll.stop()
        }
    }, [api])

    const onMouseLeave = React.useCallback(() => {
        const autoScroll = api?.plugins()?.autoScroll
        if (autoScroll) {
            autoScroll.play()
        }
    }, [api])

    const onPointerDown = React.useCallback(() => {
        const autoScroll = api?.plugins()?.autoScroll
        if (autoScroll) {
            autoScroll.stop()
        }
    }, [api])

    const onPointerUp = React.useCallback(() => {
        const autoScroll = api?.plugins()?.autoScroll
        if (autoScroll) {
            autoScroll.play()
        }
    }, [api])

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                        {dict.headlineLine1}<span className="text-action">{dict.headlineLine2}</span>
                    </h2>
                    <div className="flex items-center justify-center gap-2 text-primary font-bold">
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} className="h-5 w-5 fill-action text-action" />
                            ))}
                        </div>
                        <span>{dict.topRated}</span>
                    </div>
                </div>

                <div
                    className="max-w-[100vw] overflow-hidden"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onPointerDown={onPointerDown}
                    onPointerUp={onPointerUp}
                    onPointerCancel={onPointerUp}
                >
                    <Carousel
                        setApi={setApi}
                        plugins={[plugin.current]}
                        opts={{
                            loop: true,
                            dragFree: true,
                            skipSnaps: true,
                            align: "start",
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4 py-8">
                            {reviews.map((review) => (
                                <CarouselItem key={review.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                    <div className="h-full">
                                        <Card className="h-full border-none shadow-premium bg-white/50 backdrop-blur transition-none hover:shadow-premium hover:translate-y-0 hover:bg-white/50 hover:border-none">
                                            <CardContent className="flex flex-col gap-4 p-8">
                                                <Quote className="h-8 w-8 text-action/20" />
                                                <div className="flex">
                                                    {[...Array(review.rating)].map((_, i) => (
                                                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                    ))}
                                                </div>
                                                <p className="text-text-main flex-grow italic leading-relaxed line-clamp-4">
                                                    &quot;{review.text}&quot;
                                                </p>
                                                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        {review.avatarUrl && (
                                                            <img src={review.avatarUrl} alt={review.author} className="h-8 w-8 rounded-full" />
                                                        )}
                                                        <div>
                                                            <p className="font-bold text-primary text-sm">{review.author}</p>
                                                        </div>
                                                    </div>
                                                    <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded capitalize">
                                                        {review.source}
                                                    </span>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {/* Arrows removed per requirements */}
                    </Carousel>
                </div>

            </div>
        </section>
    )
}
