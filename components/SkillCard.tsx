import { Skill } from "@/data/skills";

export default function SkillCard({ name, icon, color } : Skill) {
    return (
        <div className="bg-[]">
            {icon}
            <h1>{name}</h1>
        </div>
    )
}