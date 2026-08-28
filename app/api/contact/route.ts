import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
    try {
        const body = await request.json() 
        const { name, email, message } = body

        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing fields"}, {status : 400})
        }
        
        const to = process.env.CONTACT_EMAIL
        if (!to) {
            return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
        }

        await resend.emails.send({
            from : "Portfolio <onboarding@resend.dev>",
            to: to,
            replyTo: email,
            subject: `Message from ${name}`,
            text: message
        })

        return NextResponse.json({ ok : true })
    } catch (err) {
        console.error(err)
        return NextResponse.json({ error: "Something went wrong"}, {status : 500})
    }
}