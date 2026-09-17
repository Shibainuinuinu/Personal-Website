"use client"
import { useState } from "react"
import ProjectCard from "./ProjectCard"
import { Project } from "@/data/projects"

export default function Carousel({ Items } : { Items: Project[] }) {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(Items.length / 3)
  return (
    <div className="flex flex-col justify-center items-center gap-20">
        <div key={page} className="flex gap-10 overflow-hidden px-6 py-4 animate-fadeIn">
        {Items.slice(page*3, page*3 + 3).map((item, i) => {
            return (
                <ProjectCard key={i} {...item} />
            )
        })}
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">

        <button onClick={() => setPage( page == 0 ?  totalPages - 1 : page - 1)} className="flex items-center justify-center w-9 h-9 rounded-md border border-hairline bg-surface-raised text-muted hover:border-accent hover:text-accent transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
            </svg>
        </button>

        <div className="flex items-center gap-2">
            {Array.from({length : totalPages}).map((_, i) => {
                return (
                  <div
                    key={i}
                    className={i === page
                        ? "w-6 h-2 rounded-full bg-accent transition-all duration-500"
                        : "w-2 h-2 rounded-full bg-subtle transition-all duration-500"
                    }
                />
                )
            })}
        </div>

        <button onClick={() => setPage( page == totalPages - 1 ? 0 : page + 1)} className="flex items-center justify-center w-9 h-9 rounded-md border border-hairline bg-surface-raised text-muted hover:border-accent hover:text-accent transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
            </svg>
        </button>

        </div>
    </div>

  )
}