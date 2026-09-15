import { Skill, SkillCategory } from "@/data/skills";
import SkillCard from "@/components/SkillCard";


export default function SkillBoard( { skillCategories }  : { skillCategories : SkillCategory[] }) {
    return (
        <div className="flex flex-col gap-15 w-[80vw] text-[#5a6278]">
            {
                skillCategories.map(({category, skills} : {category : string, skills: Skill[]}) => {
                    return (
                        <div className="flex flex-col justify-start gap-5" key={category}>
                            <h1 className="border-b border-white/5 py-1">{category}</h1>
                            <div className="flex gap-3"> 
                                {skills.map((skill, id) => {
                                    return (
                                        <SkillCard key={id} {...skill} /> 
                                    )
                                })}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}