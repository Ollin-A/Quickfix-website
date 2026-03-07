"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion, AnimatePresence } from "framer-motion"
import { createClient } from "@supabase/supabase-js"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2, CheckCircle2 } from "lucide-react"
import type { Dictionary } from "@/lib/i18n/dictionaries"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Schema Factory taking localized validation messages
const createContactFormSchema = (v: Dictionary["contactForm"]["validation"]) => 
    z.object({
        name: z.string().min(2, v.nameRequired),
        email: z.string().email(v.emailInvalid),
        phone: z.string().min(10, v.phoneRequired),
        city: z.string().optional(),
        serviceType: z.enum(['handyman', 'remodel', 'emergency', 'maintenance']),
        budget: z.string().optional(),
        urgency: z.string().optional(),
        description: z.string().min(10, v.detailsRequired),
        attachments: z.array(z.string().url()).optional()
    }).superRefine((data, ctx) => {
        if (data.serviceType === 'remodel' && !data.budget) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: v.budgetRequired,
                path: ["budget"]
            })
        }
        if ((data.serviceType === 'handyman' || data.serviceType === 'emergency') && !data.urgency) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: v.urgencyRequired,
                path: ["urgency"]
            })
        }
    })

export function ContactForm({ dict }: { dict: Dictionary["contactForm"] }) {
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const [isSuccess, setIsSuccess] = React.useState(false)
    const [isUploading, setIsUploading] = React.useState(false)

    // Memoize the schema so it doesn't recreate on every render unless language changes
    const formSchema = React.useMemo(() => createContactFormSchema(dict.validation), [dict.validation])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            description: "",
            serviceType: "handyman",
            attachments: []
        },
    })

    const serviceType = form.watch("serviceType")

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: { value: string[] | undefined, onChange: (value: string[]) => void }) => {
        const files = Array.from(e.target.files || [])
        if (files.length === 0) return

        setIsUploading(true)
        try {
            const newUrls: string[] = []

            for (const file of files) {
                const path = `quickfix_handyman/${Date.now()}_${file.name}`
                
                const { error: uploadError } = await supabase.storage
                    .from('leads-media')
                    .upload(path, file)

                if (uploadError) throw uploadError

                const { data } = supabase.storage
                    .from('leads-media')
                    .getPublicUrl(path)

                newUrls.push(data.publicUrl)
            }

            const currentAttachments = field.value || []
            field.onChange([...currentAttachments, ...newUrls])
        } catch (error) {
            console.error("Upload error:", error)
            alert(dict.alerts.uploadError)
        } finally {
            setIsUploading(false)
            if (e.target) e.target.value = ''
        }
    }

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        try {
            const endpoint = `${process.env.NEXT_PUBLIC_GATEWAY_URL}/api/clients/leads`;
            const response = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...values, tenantId: "quickfix_handyman" }),
            })

            if (!response.ok) throw new Error("Failed to submit form")

            setIsSuccess(true)
        } catch (error) {
            console.error("Form submission error:", error)
            alert(dict.alerts.submitError)
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-12 bg-white rounded-2xl shadow-premium border border-slate-100"
            >
                <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-10 w-10" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">{dict.success.title}</h2>
                <p className="text-text-muted text-lg mb-8">
                    {dict.success.message}
                </p>
                <Button onClick={() => window.location.reload()} variant="outline">
                    {dict.success.newRequest}
                </Button>
            </motion.div>
        )
    }

    return (
        <Card className="border-none shadow-2xl overflow-hidden">
            <div className="bg-primary p-6 text-white text-center">
                <h3 className="text-xl font-bold">{dict.header.title}</h3>
                <p className="text-sm text-slate-300">{dict.header.subtitle}</p>
            </div>
            <CardContent className="p-6 md:p-8 bg-white">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                        {/* Step 1: Identity */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{dict.labels.fullName}</FormLabel>
                                        <FormControl>
                                            <Input placeholder={dict.placeholders.name} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{dict.labels.email}</FormLabel>
                                        <FormControl>
                                            <Input placeholder={dict.placeholders.email} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{dict.labels.phone}</FormLabel>
                                        <FormControl>
                                            <Input placeholder={dict.placeholders.phone} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="city"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{dict.labels.city}</FormLabel>
                                        <FormControl>
                                            <Input placeholder={dict.placeholders.city} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        {/* Step 2: Service Selection */}
                        <FormField
                            control={form.control}
                            name="serviceType"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <FormLabel>{dict.labels.serviceType}</FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="handyman" className="peer sr-only" />
                                                </FormControl>
                                                <FormLabel className="flex-1 cursor-pointer rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent peer-data-[state=checked]:border-action peer-data-[state=checked]:text-action peer-data-[state=checked]:bg-action/5 [&:has([data-state=checked])]:border-primary">
                                                    <span className="font-bold">{dict.serviceOptions.handyman.title}</span>
                                                    <span className="block text-xs font-normal text-muted-foreground">{dict.serviceOptions.handyman.desc}</span>
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="remodel" className="peer sr-only" />
                                                </FormControl>
                                                <FormLabel className="flex-1 cursor-pointer rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent peer-data-[state=checked]:border-action peer-data-[state=checked]:text-action peer-data-[state=checked]:bg-action/5">
                                                    <span className="font-bold">{dict.serviceOptions.remodel.title}</span>
                                                    <span className="block text-xs font-normal text-muted-foreground">{dict.serviceOptions.remodel.desc}</span>
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="emergency" className="peer sr-only" />
                                                </FormControl>
                                                <FormLabel className="flex-1 cursor-pointer rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent peer-data-[state=checked]:border-action peer-data-[state=checked]:text-action peer-data-[state=checked]:bg-action/5">
                                                    <span className="font-bold">{dict.serviceOptions.emergency.title}</span>
                                                    <span className="block text-xs font-normal text-muted-foreground">{dict.serviceOptions.emergency.desc}</span>
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="maintenance" className="peer sr-only" />
                                                </FormControl>
                                                <FormLabel className="flex-1 cursor-pointer rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent peer-data-[state=checked]:border-action peer-data-[state=checked]:text-action peer-data-[state=checked]:bg-action/5">
                                                    <span className="font-bold">{dict.serviceOptions.maintenance.title}</span>
                                                    <span className="block text-xs font-normal text-muted-foreground">{dict.serviceOptions.maintenance.desc}</span>
                                                </FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Step 3: Conditional Logic */}
                        <AnimatePresence>
                            {serviceType === "remodel" && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <FormField
                                        control={form.control}
                                        name="budget"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>{dict.labels.budget}</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder={dict.placeholders.budget} />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="under-5k">{dict.budgetOptions.under5k}</SelectItem>
                                                        <SelectItem value="5k-15k">{dict.budgetOptions.from5kTo15k}</SelectItem>
                                                        <SelectItem value="15k-30k">{dict.budgetOptions.from15kTo30k}</SelectItem>
                                                        <SelectItem value="30k-plus">{dict.budgetOptions.over30k}</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </motion.div>
                            )}

                            {(serviceType === "handyman" || serviceType === "emergency") && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <FormField
                                        control={form.control}
                                        name="urgency"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>{dict.labels.urgency}</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder={dict.placeholders.urgency} />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="24-hours">{dict.urgencyOptions.urgent}</SelectItem>
                                                        <SelectItem value="this-week">{dict.urgencyOptions.thisWeek}</SelectItem>
                                                        <SelectItem value="flexible">{dict.urgencyOptions.flexible}</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Step 4: Details & Upload */}
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{dict.labels.details}</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder={dict.placeholders.details} className="min-h-[120px]" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="attachments"
                            render={({ field }) => (
                                <FormItem className="space-y-2">
                                    <FormLabel>{dict.labels.photos}</FormLabel>
                                    <FormControl>
                                        <div className="border-2 border-dashed border-slate-200 rounded-lg text-center hover:bg-slate-50 transition-colors">
                                            {isUploading ? (
                                                <div className="flex flex-col items-center justify-center p-6 text-slate-500">
                                                    <Loader2 className="h-6 w-6 animate-spin mb-2" />
                                                    <span className="text-sm">{dict.upload.uploading}</span>
                                                </div>
                                            ) : (
                                                <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer p-6">
                                                    {field.value && field.value.length > 0 ? (
                                                        <div className="flex flex-col items-center gap-2">
                                                            <div className="text-green-600 font-medium flex items-center justify-center gap-2">
                                                                <CheckCircle2 className="h-5 w-5" />
                                                                {field.value.length} {dict.upload.uploadedCount}
                                                            </div>
                                                            <p className="text-xs text-slate-400 mt-1">{dict.upload.clickMore}</p>
                                                        </div>
                                                    ) : (
                                                        <div className="flex flex-col items-center justify-center text-slate-500">
                                                            <div className="bg-action hover:bg-action-hover text-white text-sm px-4 py-2 rounded-md mb-2 font-medium transition-colors">
                                                                {dict.upload.chooseFiles}
                                                            </div>
                                                            <span className="text-xs text-slate-400">{dict.upload.imageOnly}</span>
                                                        </div>
                                                    )}
                                                    <input 
                                                        type="file" 
                                                        className="hidden" 
                                                        multiple 
                                                        accept="image/*" 
                                                        onChange={(e) => handleFileUpload(e, field)}
                                                        disabled={isUploading}
                                                    />
                                                </label>
                                            )}
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" size="lg" className="w-full text-lg shadow-xl" disabled={isSubmitting || isUploading}>
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    {dict.submit.sending}
                                </>
                            ) : (
                                dict.submit.button
                            )}
                        </Button>

                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}
