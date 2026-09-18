import Link from "next/link"

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-surface text-text flex flex-col items-center py-10 gap-6">
        <div className="flex items-center justify-between w-full max-w-4xl px-4">
          <div className="flex flex-col justify-start">
            <Link
              href="/"
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              ← Back to Portfolio
            </Link>
            <h1 className="text-2xl font-semibold">Resume</h1>
          </div>
          <a
            href="/Kelvin Fang.pdf"
            download="Kelvin Fang.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-accent text-surface text-sm font-medium hover:opacity-85 transition-all duration-200">
            Download
          </a>
        </div>

        <iframe
          src="/Kelvin Fang.pdf#toolbar=0&navpanes=0&scrollbar=0"
          className="w-full max-w-4xl aspect-8.5/11 rounded-md border border-hairline"
          title="Resume"
        />
    </main>
  );
}