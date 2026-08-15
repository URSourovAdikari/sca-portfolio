import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="rounded-[28px] border border-white/10 bg-slate-950/75 p-12 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Not Found</p>
      <h1 className="mt-3 text-3xl font-semibold text-white">Project unavailable</h1>
      <Link href="/projects" className="mt-6 inline-flex items-center rounded-full bg-cyan-400 px-5 py-3 font-medium text-slate-950">
        Back to projects
      </Link>
    </div>
  );
}
