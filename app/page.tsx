import Type from "@/components/Type"
import Carousel from "@/components/Carousel"
import { projects } from "@/data/projects"
import ContactForm from "@/components/ContactForm"
import SkillBoard from "@/components/SkillBoard";
import { skillCategories } from "@/data/skills";
import Reveal from "@/components/Reveal";
import PhotoCollage from "@/components/PhotoCollage";
import ScrollButton from "@/components/ScrollButton";

export default function Home() {
  return (
    <main className="min-h-screen w-full text-text flex flex-col">
      <div className="flex-1 mb-30">
        <Reveal>
          <section className="flex items-center justify-center mt-20">
              <div className="flex-1 flex flex-col justify-start items-center">
                <div className="flex flex-col gap-6">
                  <div className="flex items-baseline">
                    <h1 className="text-5xl">
                      <Type text="Hi, I'm Kelvin" time={160} wait={1500} />
                    </h1>
                    <span className="animate-pulse bold text-5xl">|</span>
                  </div>
                  <p className="max-w-prose text-left text-muted">
                    Third-year Computer Science student at UC Santa Barbara specializing in AI/ML and Fullstack development. 
                  </p>
                  <ScrollButton /> 
                </div>
              </div>
              <div className="flex-1 flex justify-center items-center">
                <PhotoCollage /> 
              </div>
            </section>
        </Reveal>
        <Reveal>
          <section id="projects" className="flex flex-col justify-center items-center mt-60">
            <h2 className="text-5xl mt-10 mb-30">
              Projects
            </h2>
            <Carousel items={projects} />
          </section>
        </Reveal>
 
    <Reveal>
          <section className="mt-60 flex flex-col justify-center items-center">
            <h2 className="text-5xl mt-10 mb-30 text-center">
              Skills
            </h2>
            <SkillBoard skillCategories={skillCategories}/>
          </section>
    </Reveal>
      </div>
      <Reveal>
      <div id="contacts" className="flex flex-col justify-center items-center w-full mb-20">
        <h2 className="text-4xl mb-10 mt-30">Contact Me</h2>
        <ContactForm />
      </div>
      </Reveal>
      <footer className="border-t border-white/20 py-6 flex justify-start">
        <span className="ml-10">
          Kelvin Fang 
        </span>
      </footer>
    </main>

  );
}
