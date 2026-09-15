import Link from 'next/link'
import { GitHubIcon, LinkedInIcon, ResumeIcon } from "@/data/Icons";

export default function Nav() {
  return (
    <nav className="text-white top-0 z-50 flex mr-15 py-8 justify-end h-10">
      <Link
        className="flex items-center gap-2 text-lg hover:text-[#7da99e] px-5 text-[#a0a8bb] transition-all duration-200"
        href="https://github.com/Shibainuinuinu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon /> Github
      </Link>

      <Link
        className="flex items-center gap-2 text-lg hover:text-[#7da99e] px-5 text-[#a0a8bb] transition-all duration-200"
        href="https://www.linkedin.com/in/fang-kelvin/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon /> LinkedIn
      </Link>

      <Link
        className="flex items-center gap-2 text-lg hover:text-[#7da99e] px-5 text-[#a0a8bb] transition-all duration-200"
        href="Resume"
      >
        <ResumeIcon /> Resume
      </Link>
    </nav>
  );
}