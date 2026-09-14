import React from "react"
import {
  SiPython,
  SiTypescript,
  SiCplusplus,
  SiPytorch,
  SiScikitlearn,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiLinux,
} from "react-icons/si"
import { FaAws, FaMicrochip } from "react-icons/fa"

export type Skill = {
  name: string
  icon: React.ReactNode
  color?: string        
}

export type SkillCategory = {
  category: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python",     icon: <SiPython />,     color: "#3776AB" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "C++",        icon: <SiCplusplus />,  color: "#00599C" },
      { name: "Assembly",   icon: <FaMicrochip />,  color: "#A97C50" },
    ],
  },
  {
    category: "ML / AI",
    skills: [
      { name: "PyTorch",      icon: <SiPytorch />,     color: "#EE4C2C" },
      { name: "scikit-learn", icon: <SiScikitlearn />, color: "#F7931E" },
    ],
  },
  {
    category: "Web",
    skills: [
      { name: "Next.js",      icon: <SiNextdotjs />,   color: "#FFFFFF" },
      { name: "React",        icon: <SiReact />,       color: "#61DAFB" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "Node.js",      icon: <SiNodedotjs />,   color: "#339933" },
    ],
  },
  {
    category: "Infra",
    skills: [
      { name: "Git",   icon: <SiGit />,   color: "#F05032" },
      { name: "Linux", icon: <SiLinux />, color: "#FCC624" },
      { name: "AWS",   icon: <FaAws />,   color: "#FF9900" },
    ],
  },
]

