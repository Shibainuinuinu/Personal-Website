import { Skill } from "@/data/skills"

export default function SkillCard({ name, icon, color }: Skill) {
  return (
    <div
      style={{
        "--brand": color,
        "--brand-fade": `${color}55`,
        "--brand-glow": `${color}33`,
      } as React.CSSProperties}
      className="group bg-[#1a1e2a] flex flex-col items-center justify-center gap-2 rounded-xl w-[90px] h-[90px]
                 border border-[rgba(255,255,255,0.07)]
                 hover:bg-[#13161f] hover:border-[var(--brand-fade)] hover:-translate-y-[3px]
                 hover:shadow-[0_6px_16px_var(--brand-glow)]
                 transition-all duration-200 ease-out"
    >
      <div className="text-[#5a6278] group-hover:text-[var(--brand)] transition-colors">
        {icon}
      </div>
      <span className="text-[12px] text-center text-[#5a6278] group-hover:text-[#e8eaf0] transition-colors">
        {name}
      </span>
    </div>
  )
}