"use client";
import { useState } from "react"


export default function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: ""})
    const [status, setStatus] = useState("idle")

    const handleChange = (e : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({...form, [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
        e.preventdefault()
        setStatus("submitting")

        try {
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {"Content-type" : "application/json"},
            body: JSON.stringify(form)
        })

        setStatus( res.ok ? "sent" : "error")
        if (res.ok) { setForm({ name: "", email: "", message: ""})}
        } catch {
        setStatus("error")
        }
    }
    return (
        <form 
        onSubmit={handleSubmit} 
        className="flex flex-col gap-4 max-w-lg ">
            <input type="text" name="Name" value={form.name} onChange={handleChange} placeholder="John Doe"/>
            <input type="text" name="Email" value={form.email} onChange={handleChange} placeholder="johndoe@gmail.com"/>
            <textarea name="Message" value={form.message} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    )
}