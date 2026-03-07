import type { Metadata } from "next"
import { MaintenancePageClient } from "@/components/features/MaintenancePageClient"
import { getDictionary } from "@/lib/i18n/dictionaries"

export async function generateMetadata(): Promise<Metadata> {
    const dict = await getDictionary()
    return {
        title: dict.maintenancePage.metadata.title,
        description: dict.maintenancePage.metadata.description,
    }
}

export default async function MaintenancePage() {
    const dict = await getDictionary()
    return <MaintenancePageClient dict={dict.maintenancePage} />
}
