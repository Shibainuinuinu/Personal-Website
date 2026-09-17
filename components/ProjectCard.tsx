import { Project } from "@/data/projects"
import Image from "next/image"
import { ExportIcon } from "@/data/Icons"

export default function ProjectCard({ title, image, description, tech, link } : Project) {
    return (
        <div className="flex flex-col w-100 rounded-md border border-hairline overflow-hidden bg-surface-alt hover:border-accent hover:scale-[1.02] transition-all duration-200 cursor-pointer">

            <div className="relative w-full h-50">
                <Image src={image} alt={title} fill className="object-cover" />            
                <a className="absolute top-2 right-2" href={link} target="_blank">
                    <ExportIcon />
                </a>

            </div>
            <div className="flex flex-1 flex-col justify-start gap-3 bg-surface-raised p-5">
                <h1 className="text-xl font-semibold text-text">{title}</h1>
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
    )
}