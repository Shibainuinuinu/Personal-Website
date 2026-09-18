import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { projects, getProjectBySlug } from "@/data/projects"
import Reveal from "@/components/Reveal"


// Renders all pages before someone visits them 
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return { title: "Project not found" }
  }

  return {
    title: `${project.title} — Kelvin Fang`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const sections = [
    { heading: "The Problem", body: project.problem },
    { heading: "Approach", body: project.approach },
    { heading: "The Outcome", body: project.outcome },
  ]

  return (
    <main className="min-h-screen w-full bg-surface text-text px-6 md:px-16 py-24">
      <Reveal>
        <Link
          href="/#projects"
          className="inline-block mb-12 text-sm text-muted hover:text-accent transition-colors"
        >
          ← Back to Portfolio
        </Link>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 w-fit">
          <div className="flex-1 flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
            <div className="relative w-full aspect-video rounded-md border border-hairline overflow-hidden bg-surface-alt">
              <Image src={project.image} alt={project.title} fill className="object-cover" />
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start px-4 py-2 rounded-md border border-hairline text-sm hover:border-accent hover:text-accent transition-colors"
              >
                View Code ↗
              </a>
            )}
          </div>

          <div className="flex-1 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-semibold">{project.title}</h1>
              <p className="text-muted leading-relaxed">{project.description}</p>
            </div>

            {sections.map(({ heading, body }) =>
              body && (
                <section key={heading} className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-accent">{heading}</h2>
                  <p className="text-muted leading-relaxed">{body}</p>
                </section>
              )
            )}

            {project.highlights && project.highlights.length > 0 && (
              <section className="flex flex-col gap-3 rounded-md border border-hairline bg-surface-raised p-5">
                <h2 className="text-xl font-semibold text-accent">Highlights</h2>
                <ul className="flex flex-col gap-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-muted leading-relaxed">
                      <span className="text-accent">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-accent">Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <div key={t} className="px-3 py-1 rounded-md bg-tag text-subtle text-sm">
                    {t}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </Reveal>
    </main>
  )
}
