"use client";
import { useState, ChangeEvent, SubmitEvent } from "react"
import Ellipsis from "./Ellipsis";

export default function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: ""})
    const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle")
    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleChange = (e : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({...form, [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e : SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus("submitting")

        try {
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {"Content-type" : "application/json"},
            body: JSON.stringify(form)
        })
        
        const data = await res.json() 
        if (res.ok) {
            setStatus("sent")
            setForm({ name: "", email: "", message: "" })
        } else {
            setStatus("error")
            setErrorMessage(data.error || "Something went wrong. Please try again.")
        }
    } catch {
        setStatus("error")
        setErrorMessage("Network error. Please check your connection.")
    }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full max-w-lg"
        >
            <label htmlFor="name">Name</label>
            <input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="bg-[#1c2128] border border-[#373e47] rounded-md px-4 py-3 placeholder-[#636e7b] focus:outline-none focus:border-[#539bf5] focus:ring-1 focus:ring-[#539bf5] transition-colors"
            />

            <label htmlFor="email">Email</label>
            <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="johndoe@gmail.com"
            required
            className="bg-[#1c2128] border border-[#373e47] rounded-md px-4 py-3 placeholder-[#636e7b] focus:outline-none focus:border-[#539bf5] focus:ring-1 focus:ring-[#539bf5] transition-colors"
            />

            <label htmlFor="message">Message</label>
            <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What's on your mind?"
            required
            rows={5}
            className="bg-[#1c2128] border border-[#373e47] rounded-md px-4 py-3 placeholder-[#636e7b] focus:outline-none focus:border-[#539bf5] focus:ring-1 focus:ring-[#539bf5] transition-colors resize-none"
            />

            {status === "sent" && (
            <div aria-live="polite" className="bg-green-500/10 border border-green-500/30 text-green-400 rounded-md px-4 py-3 text-sm">
                Your message has been sent — I&apos;ll get back to you soon.
            </div>
            )}

            {status === "error" && (
            <div aria-live="polite" className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-md px-4 py-3 text-sm">
                {`${errorMessage} Please try again, or email me directly at ${process.env.NEXT_PUBLIC_CONTACT_EMAIL
}`}
            </div>
            )}
            
            <button
            type="submit"
            disabled={status == "submitting"}
            className="bg-accent hover:opacity-85 text-surface font-medium rounded-md px-4 py-3 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === "submitting" ? (
                <>Sending<Ellipsis text={"..."} time={300} /></>
                ) : "Send Message"}
            </button>

        </form>
    )   
}