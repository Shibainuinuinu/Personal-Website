import { skillCategories, SkillCategory } from "@/data/skills";
import { SkillCard } from ""


export default function SkillBoard({category, skills} : SkillCategory) {
    return (
        <h1>{category}</h1>
        {skills.map(() => {
            return (
                <SkillCard /> 
            )
        })}

    )
}