import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getDictionary } from "@/lib/i18n/dictionaries"

export default async function NotFound() {
    const dict = await getDictionary()

    return (
        <div className="flex h-[100vh] w-full flex-col items-center justify-center bg-slate-50 text-center">
            <h2 className="text-4xl font-heading font-bold text-slate-900 mb-4">{dict.notFound.title}</h2>
            <p className="text-xl text-slate-700 mb-8">{dict.notFound.message}</p>
            <Link href="/">
                <Button size="lg" className="bg-primary text-white">{dict.notFound.button}</Button>
            </Link>
        </div>
    )
}
