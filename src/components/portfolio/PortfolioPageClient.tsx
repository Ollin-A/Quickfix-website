"use client"

import * as React from "react"
import { PortfolioFilter } from "@/components/portfolio/PortfolioFilter"
import { ProjectGrid } from "@/components/portfolio/ProjectGrid"
import { ProjectModal } from "@/components/portfolio/ProjectModal"
import type { Project } from "@/types/project"
import { PageHeader } from "@/components/layout/PageHeader"
import type { Dictionary } from "@/lib/i18n/dictionaries"

export function PortfolioPageClient({ dict }: { dict: Dictionary["portfolioPage"] }) {
    const [currentCategory, setCurrentCategory] = React.useState("all")
    const [selectedProject, setSelectedProject] = React.useState<Project | null>(null)
    const [isModalOpen, setIsModalOpen] = React.useState(false)

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project)
        setIsModalOpen(true)
    }

    return (
        <main className="min-h-screen pb-24 bg-background">
            {/* Page Header */}
            <PageHeader className="px-4 text-center mb-16 py-24">
                <div className="container mx-auto">
                    <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-6">
                        {dict.header.titleLine1} <br />
                        <span className="text-slate-400">{dict.header.titleLine2}</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        {dict.header.subtitle}
                    </p>
                </div>
            </PageHeader>

            {/* Filter */}
            <div className="container mx-auto px-4">
                <PortfolioFilter
                    currentCategory={currentCategory}
                    onCategoryChange={setCurrentCategory}
                    dict={dict.filters}
                />

                {/* Grid */}
                <ProjectGrid
                    category={currentCategory}
                    onProjectClick={handleProjectClick}
                    dict={dict.projects}
                />
            </div>

            {/* Modal */}
            <ProjectModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                project={selectedProject}
                dict={dict.modal}
            />
        </main>
    )
}
