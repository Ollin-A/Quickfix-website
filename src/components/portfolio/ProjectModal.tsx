"use client"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ComparisonSlider } from "@/components/shared/ComparisonSlider"
import { Calendar, MapPin } from "lucide-react"
import type { Project } from "@/types/project"
import type { Dictionary } from "@/lib/i18n/dictionaries"

interface ProjectModalProps {
    isOpen: boolean
    onClose: () => void
    project: Project | null
    dict: Dictionary["portfolioPage"]["modal"]
}

export function ProjectModal({ isOpen, onClose, project, dict }: ProjectModalProps) {
    if (!project) return null

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0 [&>button]:hidden">

                {/* Header Image / Slider */}
                <div className="w-full aspect-video bg-slate-100 relative">
                    {project.images?.before && project.images?.after ? (
                        <ComparisonSlider
                            beforeImage={project.images.before}
                            afterImage={project.images.after}
                            beforeLabel={dict.beforeLabel}
                            afterLabel={dict.afterLabel}
                            className="w-full h-full rounded-none"
                        />
                    ) : (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                            src={project.images?.after}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    )}
                </div>

                <div className="p-6 md:p-8 space-y-6">
                    <DialogHeader>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                            <Badge variant="secondary" className="bg-action/10 text-action font-bold hover:bg-action/20">
                                {project.category}
                            </Badge>
                        </div>
                        <DialogTitle className="text-3xl font-heading font-bold text-primary">
                            {project.title}
                        </DialogTitle>
                        <div className="flex items-center gap-6 text-sm text-text-muted mt-2">
                            <div className="flex items-center gap-1.5">
                                <MapPin className="h-4 w-4" />
                                {project.location}
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Calendar className="h-4 w-4" />
                                {project.completionDate}
                            </div>
                        </div>
                    </DialogHeader>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            <h4 className="font-bold text-primary text-lg">{dict.challenge}</h4>
                            <p className="text-text-muted leading-relaxed">
                                {project.caseStudy?.challenge || dict.challengeFallback}
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h4 className="font-bold text-primary text-lg">{dict.solution}</h4>
                            <p className="text-text-muted leading-relaxed">
                                {project.caseStudy?.solution || dict.solutionFallback}
                            </p>
                        </div>
                    </div>
                </div>

            </DialogContent>
        </Dialog>
    )
}
