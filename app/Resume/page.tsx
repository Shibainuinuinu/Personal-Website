export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#0B0D13] text-[#E8EAF0] flex flex-col items-center py-10 gap-6">

      <div className="flex items-center justify-between w-full max-w-4xl px-4">
        <h1 className="text-2xl font-semibold">Resume</h1>
        <a
          href="/Kelvin F.pdf"
          download="Kelvin_Fang_Resume.pdf"
          className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#7DA99E] text-[#0B0D13] text-sm font-medium hover:opacity-85 transition-all duration-200">
          Download
        </a>
      </div>

      <iframe
        src="/Kelvin F.pdf#toolbar=0&navpanes=0&scrollbar=0"
        className="w-full max-w-4xl aspect-[8.5/11] rounded-md border border-[rgba(255,255,255,0.07)]"
        title="Resume"
      />
    </main>
  );
}