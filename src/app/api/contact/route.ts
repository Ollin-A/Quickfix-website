import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

// Define Schema on server as well for double validation
const contactFormSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(10),
    city: z.string().optional(),
    serviceType: z.enum(['handyman', 'remodel', 'emergency', 'maintenance']),
    budget: z.string().optional(),
    urgency: z.string().optional(),
    description: z.string().min(10),
    attachments: z.array(z.string().url()).optional()
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const validatedData = contactFormSchema.parse(body);

        // Send Email to Quick Fix Team
        await resend.emails.send({
            from: 'Quick Fix Website <onboarding@resend.dev>', // Update with verified domain later
            to: ['quickfixhandyman19@gmail.com'], // The client email
            subject: `New Lead: ${validatedData.serviceType.toUpperCase()} - ${validatedData.name}`,
            html: `
                <h1>New Project Inquiry</h1>
                <p><strong>Name:</strong> ${validatedData.name}</p>
                <p><strong>Email:</strong> ${validatedData.email}</p>
                <p><strong>Phone:</strong> ${validatedData.phone}</p>
                <p><strong>City:</strong> ${validatedData.city || 'Not provided'}</p>
                <hr />
                <h2>Project Details</h2>
                <p><strong>Service Type:</strong> ${validatedData.serviceType}</p>
                ${validatedData.budget ? `<p><strong>Estimated Budget:</strong> ${validatedData.budget}</p>` : ''}
                ${validatedData.urgency ? `<p><strong>Urgency:</strong> ${validatedData.urgency}</p>` : ''}
                <p><strong>Description:</strong></p>
                <p>${validatedData.description}</p>
                <hr />
                ${validatedData.attachments && validatedData.attachments.length > 0 ? `
                    <h3>Attachments</h3>
                    <ul>
                        ${validatedData.attachments.map(url => `<li><a href="${url}">View Image</a></li>`).join('')}
                    </ul>
                ` : '<p>No images attached.</p>'}
            `
        });

        // Send Confirmation to User (Optional, good practice)
        // await resend.emails.send({ ... });

        return NextResponse.json({ success: true, message: "Email sent successfully" });

    } catch (error) {
        console.error("Contact Form Error:", error);
        return NextResponse.json({ success: false, error: "Failed to process request" }, { status: 500 });
    }
}
