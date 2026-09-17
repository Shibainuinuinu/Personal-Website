import { notFound } from "next/navigation"
import { projects, getProjectBySlug } from "@/data/projects"

/**
 * Tells Next.js which slugs exist so all 6 pages are built as static HTML at
 * `npm run build` time instead of being rendered on every request.
 * The returned key ("slug") must match the folder name in [slug].
 */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

/**
 * Sets the <title> and <meta name="description"> for THIS page, overriding the
 * site-wide defaults in app/layout.tsx. Next calls this automatically.
 */
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

/**
 * `PageProps<"/projects/[slug]">` is a Next 16 global helper - the same family as
 * the `LayoutProps<"/">` already used in app/layout.tsx. It types `params` for you
 * from the route path, so you don't hand-write `{ params: Promise<...> }`.
 *
 * `params` is a PROMISE in Next 15+ (it was a plain object in 14 and earlier),
 * which is why this component is `async` and why you must `await` it before
 * reading `slug`.
 */
export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  // notFound() throws, and Next catches that to render not-found.tsx instead.
  // TypeScript knows it never returns, so `project` is narrowed to defined below.
  if (!project) {
    notFound()
  }

  // ---------------------------------------------------------------------------
  // TODO (Kelvin): build the real UI here.
  //
  // Available on `project` - see the Project type in data/projects.ts:
  //   Always present: slug, title, image, description, tech[]
  //   Optional:       role, timeframe, problem, approach, outcome,
  //                   highlights[], link, demo
  //
  // Optional fields can be undefined, so guard them before rendering:
  //   {project.problem && <p>{project.problem}</p>}
  // Without the guard you get empty headings on projects you haven't filled in.
  //
  // For the hero image use next/image with a `fill` parent, the same pattern as
  // components/ProjectCard.tsx:9-10.
  // ---------------------------------------------------------------------------
  return (
    <main className="min-h-screen w-full text-text">
      <h1 className="text-4xl">{project.title}</h1>
      <p>{project.description}</p>
    </main>
  )
}
