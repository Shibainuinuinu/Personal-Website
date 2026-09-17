import { Skill } from "@/data/skills"

export default function SkillCard({ name, icon, color }: Skill) {
  return (
    <div
      style={{
        "--brand": color,
        "--brand-fade": `${color}55`,
        "--brand-glow": `${color}33`,
      } as React.CSSProperties}
      className="group bg-tag flex flex-col items-center justify-center gap-2 rounded-xl w-[90px] h-[90px]
                 border border-hairline
                 hover:bg-surface-raised hover:border-[var(--brand-fade)] hover:-translate-y-[3px]
                 hover:shadow-[0_6px_16px_var(--brand-glow)]
                 transition-all duration-200 ease-out"
    >
      <div className="text-subtle group-hover:text-[var(--brand)] transition-colors">
        {icon}
      </div>
      <span className="text-[12px] text-center text-subtle group-hover:text-text transition-colors">
        {name}
      </span>
    </div>
  )
}