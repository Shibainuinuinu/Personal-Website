import Link from "next/link"

/**
 * Rendered whenever notFound() is called from this route segment, or when
 * someone visits a /projects/<slug> URL that doesn't match a real project.
 */
export default function ProjectNotFound() {
  return (
    <main className="min-h-screen w-full text-text flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl">Project not found</h1>
      <p className="text-muted">That project doesn&apos;t exist, or the link has changed.</p>
      <Link
        href="/#projects"
        className="text-muted hover:text-accent transition-all duration-200"
      >
        &larr; Back to projects
      </Link>
    </main>
  )
}
