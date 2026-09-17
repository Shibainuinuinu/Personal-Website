"use client";

export default function ScrollButton() {
    const scrollIntoView = (id : string) => {
        document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        });
    };

    return (
        <div className="flex gap-5">
            <button onClick={() => scrollIntoView('projects')} className="bg-accent transition-all duration-200 hover:opacity-85 px-5 py-2.5 rounded-md text-surface text-sm transition-all duration-200">View Projects</button>
            <button onClick={() => scrollIntoView('contacts')} className="hover:border-accent hover:text-accent px-5 py-2.5 rounded-md text-muted border-hairline text-subtle border-2 text-sm transition-all duration-200">Contact Me</button>
        </div>
    )
}