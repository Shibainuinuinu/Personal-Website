import Link from 'next/link'
import { GitHubIcon, LinkedInIcon, ResumeIcon } from "@/data/Icons";

export default function Nav() {
  return (
    <nav className="text-white top-0 z-50 flex mr-15 py-8 justify-between items-center h-10">
      <Link
        href="/"
        aria-label="Home"
        className="ml-10 text-xl font-bold tracking-tight hover:text-accent transition-all duration-200"
      >
        KF
      </Link>

      <div className="flex">
      <Link
        className="flex items-center gap-2 text-lg hover:text-accent px-5 text-muted transition-all duration-200"
        href="https://github.com/Shibainuinuinu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon /> Github
      </Link>

      <Link
        className="flex items-center gap-2 text-lg hover:text-accent px-5 text-muted transition-all duration-200"
        href="https://www.linkedin.com/in/fang-kelvin/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon /> LinkedIn
      </Link>

      <Link
        className="flex items-center gap-2 text-lg hover:text-accent px-5 text-muted transition-all duration-200"
        href="/resume"
      >
        <ResumeIcon /> Resume
      </Link>
      </div>
    </nav>
  );
}