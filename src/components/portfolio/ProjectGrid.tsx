"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import type { Project } from "@/types/project"
import type { Dictionary } from "@/lib/i18n/dictionaries"

interface ProjectGridProps {
    category: string
    onProjectClick: (project: Project) => void
    dict: Dictionary["portfolioPage"]["projects"]
}

// Mock Data structure for images/categories
const MOCK_PROJECTS_BASE = [
    {
        id: "1",
        category: "kitchen-bath",
        images: {
            before: "https://images.unsplash.com/photo-1556912173-3db996ea0667?q=80&w=2669&auto=format&fit=crop",
            after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop"
        }
    },
    {
        id: "2",
        category: "remodel",
        images: {
            before: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80",
            after: "https://images.unsplash.com/photo-1512918760532-3ed862d89931?q=80"
        }
    },
    {
        id: "3",
        category: "kitchen-bath",
        images: {
            before: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80",
            after: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80"
        }
    },
    {
        id: "4",
        category: "exterior",
        images: {
            after: "https://images.unsplash.com/photo-1592722055106-4b8f36c4b223?q=80",
            before: "https://images.unsplash.com/photo-1533465439709-35c82545d179?q=80"
        }
    },
    {
        id: "5",
        category: "remodel",
        images: {
            after: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80",
            before: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80"
        }
    },
    {
        id: "6",
        category: "repairs",
        images: {
            after: "https://images.unsplash.com/photo-1623354316654-20b1e4c7ba14?q=80",
            before: "https://images.unsplash.com/photo-1623354316654-20b1e4c7ba14?q=80" // Placeholder
        }
    }
]

export function ProjectGrid({ category, onProjectClick, dict }: ProjectGridProps) {
    const projectsWithTranslation: Project[] = React.useMemo(() => {
        return MOCK_PROJECTS_BASE.map(p => {
            const translation = dict[p.id as keyof typeof dict];
            return {
                id: Number(p.id),
                title: translation.title,
                category: p.category,
                location: translation.location,
                completionDate: translation.completion,
                images: p.images,
                caseStudy: {
                    challenge: translation.challenge,
                    solution: translation.solution
                }
            }
        })
    }, [dict])

    const filteredProjects = category === 'all'
        ? projectsWithTranslation
        : projectsWithTranslation.filter(p => p.category === category)

    return (
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 px-4">
            <AnimatePresence>
                {filteredProjects.map((project) => (
                    <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        key={project.id}
                        className="break-inside-avoid relative group rounded-xl overflow-hidden cursor-pointer shadow-lg"
                        onClick={() => onProjectClick(project)}
                    >
                        <div className="relative aspect-[4/5]">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={project.images.after}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
                                <h3 className="text-2xl font-heading font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-slate-300 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {project.location}
                                </p>
                                <div className="mt-6 h-10 w-10 rounded-full bg-action text-white flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                                    <Plus className="h-6 w-6" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
    )
}
