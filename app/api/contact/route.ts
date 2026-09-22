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

        const escapeHtml = (str: string) =>
        str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");

        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
        const sentAt = new Date().toLocaleString("en-US", {
        timeZone: "America/Los_Angeles",
        dateStyle: "medium",
        timeStyle: "short",
        });

        await resend.emails.send({
        from: "Portfolio <onboarding@resend.dev>",
        to,
        replyTo: email,
        subject: `New message from ${name}`,
        text: `From: ${name} <${email}>\nSent: ${sentAt}\n\n${message}`,
        html: `
        <div style="margin:0;padding:32px 16px;background:#f4f5f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:10px;overflow:hidden;border:1px solid #e3e5e8;">
            <tr>
                <td style="background:#22272e;padding:20px 28px;">
                <span style="color:#FDFBF7;font-size:16px;font-weight:600;">New portfolio message</span>
                </td>
            </tr>
            <tr>
                <td style="padding:28px;">
                <p style="margin:0 0 4px;font-size:12px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">From</p>
                <p style="margin:0 0 20px;font-size:15px;color:#111827;">
                    ${safeName} &middot;
                    <a href="mailto:${safeEmail}" style="color:#539bf5;text-decoration:none;">${safeEmail}</a>
                </p>

                <p style="margin:0 0 4px;font-size:12px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">Message</p>
                <div style="margin:0 0 24px;padding:16px;background:#f9fafb;border-left:3px solid #539bf5;border-radius:4px;font-size:15px;line-height:1.6;color:#111827;">
                    ${safeMessage}
                </div>

                <a href="mailto:${safeEmail}" style="display:inline-block;background:#539bf5;color:#ffffff;padding:10px 18px;border-radius:6px;font-size:14px;text-decoration:none;">
                    Reply to ${safeName}
                </a>
                </td>
            </tr>
            <tr>
                <td style="padding:14px 28px;border-top:1px solid #e3e5e8;font-size:12px;color:#9ca3af;">
                Sent ${sentAt} via your portfolio contact form
                </td>
            </tr>
            </table>
        </div>`,
        });
        
        return NextResponse.json({ ok : true })
    } catch (err) {
        console.error(err)
        return NextResponse.json({ error: "Something went wrong"}, {status : 500})
    }
}