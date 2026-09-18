import { Project } from "@/data/projects"
import Image from "next/image"
import { ExportIcon } from "@/data/Icons"
import Link from "next/link"

export default function ProjectCard({ title, image, description, tech, link, slug } : Project) {
    return (
        <Link href={`/projects/${slug}`}>
            <div className="flex flex-col w-100 rounded-md border border-hairline overflow-hidden bg-surface-alt hover:border-accent hover:scale-[1.02] transition-all duration-200 cursor-pointer">

                <div className="relative w-full h-50">
                    <Image src={image} alt={title} fill className="object-cover" />            
                    <button
                        type="button"
                        aria-label={`Open ${title} link`}
                        className="absolute top-2 right-2"
                        onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            window.open(link, "_blank", "noopener,noreferrer")
                        }}
                    >
                        <ExportIcon />
                    </button>

                </div>
                <div className="flex flex-1 flex-col justify-start gap-3 bg-surface-raised p-5">
                    <h3 className="text-xl font-semibold text-text">{title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{description}</p>
                    <div className="flex gap-2 mt-auto">
                    {tech.map((item) => {
                        return (
                            <div key={item} className="px-3 py-1 rounded-md bg-tag text-subtle text-sm">
                                {item}
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>    
        </Link>

    )
}