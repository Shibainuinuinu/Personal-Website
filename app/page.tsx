"use client";
import Type from "@/components/Type"
import Image from "next/image"
import Carousel from "@/components/Carousel"
import { projects } from "@/data/projects"
import ContactForm from "@/components/ContactForm"

export default function Home() {
  return (
    <main className="bg-[#1c2128] min-h-screen w-full text-[#FDFBF7] flex flex-col">
      <div className="flex-1 mb-30">
        <section className="flex items-center justify-center">
            <div className="flex-1 flex flex-col justify-center items-center gap-6">
              <div className="flex items-baseline">
                <span className="text-5xl">
                  <Type text="Hi, I'm Kelvin" time={160} wait={1500} />
                </span>
                <span className="animate-pulse bold text-5xl">|</span>
              </div>
              <p className="max-w-prose text-center">
                Third-year Computer Science student at UC Santa Barbara specializing in machine learning and deep learning. 
              </p>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <Image src="public/globe.svg" width={500} height={500} alt="Profile Picture" /> 
            </div>
          </section>


          <section className="flex flex-col justify-center items-center">
            <div className="text-5xl mt-10 mb-30">
              Projects
            </div>
            <Carousel Items={projects} />
          </section>
      </div>

      <footer className="flex flex-col justify-center items-center w-full bg-[#22272e]">
        <span className="text-3xl mt-5 mb-10">Contact Me</span> 
        <ContactForm />
      </footer>
    </main>

  );
}
