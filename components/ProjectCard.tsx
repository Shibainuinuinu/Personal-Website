import { Project } from "@/data/projects"
import Image from "next/image"
import { ExportIcon } from "@/data/Icons"

export default function ProjectCard({ title, image, description, tech, link } : Project) {
    return (
        <div className="flex flex-col w-100 rounded-md border border-[rgba(255,255,255,0.07)] overflow-hidden bg-[#0d0f16] hover:border-[#7da99e] hover:scale-[1.02] transition-all duration-200 cursor-pointer">

            <div className="relative w-full h-50">
                <Image src={image} alt={title} fill className="object-cover" />            
                <a className="absolute top-2 right-2" href={link} target="_blank">
                    <ExportIcon />
                </a>

            </div>
            <div className="flex flex-1 flex-col justify-start gap-3 bg-[#13161f] p-5">
                <h1 className="text-xl font-semibold text-[#e8eaf0]">{title}</h1>
                <p className="text-sm text-[#a0a8bb] leading-relaxed">{description}</p>
                <div className="flex gap-2 mt-auto">
                {tech.map((item) => {
                    return (
                        <div key={item} className="px-3 py-1 rounded-md bg-[#1a1e2a] text-[#5a6278] text-sm">
                            {item}
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}