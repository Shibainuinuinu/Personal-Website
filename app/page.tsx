"use client";
import Type from "@/components/Type"
import Image from "next/image"
import Carousel from "@/components/Carousel"
import { projects } from "@/data/projects"
import ContactForm from "@/components/ContactForm"
import SkillBoard from "@/components/SkillBoard";
import { skillCategories } from "@/data/skills";

export default function Home() {
  const scrollIntoView = (id : string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen w-full text-[#E8EAF0] flex flex-col">
      <div className="flex-1 mb-30">
        <section className="flex items-center justify-center">
            <div className="flex-1 flex flex-col justify-start items-center">
              <div className="flex flex-col gap-6">
                <div className="flex items-baseline">
                  <span className="text-5xl">
                    <Type text="Hi, I'm Kelvin" time={160} wait={1500} />
                  </span>
                  <span className="animate-pulse bold text-5xl">|</span>
                </div>
                <p className="max-w-prose text-left text-[#a0a8bb]">
                  Third-year Computer Science student at UC Santa Barbara specializing in machine learning and deep learning. 
                </p>
                <div className="flex gap-5">
                  <button onClick={() => scrollIntoView('projects')} className="bg-[#7DA99E] transition-all duration-200 hover:opacity-85 px-5 py-2.5 rounded-md text-[#0B0D13] text-sm transition-all duration-200">View Projects</button>
                  <button onClick={() => scrollIntoView('contacts')} className="hover:border-[#7da99e] hover:text-[#7da99e] px-5 py-2.5 rounded-md text-[#a0a8bb] border-[rgba(255,255,255,0.07)] text-[#5a6278] border-2 text-sm transition-all duration-200">Contact Me</button>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <Image src="public/globe.svg" width={500} height={500} alt="Profile Picture" /> 
            </div>
          </section>


          <section id="projects" className="flex flex-col justify-center items-center mt-60">
            <div className="text-5xl mt-10 mb-30">
              Projects
            </div>
            <Carousel Items={projects} />
          </section>
          

          <section className="mt-60 flex flex-col justify-center items-center">
            <div className="text-5xl mt-10 mb-30 text-center">
              Skills
            </div>
            <SkillBoard skillCategories={skillCategories}/>
          </section>
      </div>

      <div id="contacts" className="flex flex-col justify-center items-center w-full py-6">
        <span className="text-4xl mt-5 mb-10">Contact Me</span> 
        <ContactForm />
      </div>
      <footer className="border-t border-white/5 py-6 flex justify-start">
        <span className="ml-10">
          Kelvin Fang 
        </span>
      </footer>
    </main>

  );
}
