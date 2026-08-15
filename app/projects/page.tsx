import dynamic from "next/dynamic";

const ProjectsBrowser = dynamic(
  () => import("@/components/projects-browser").then((mod) => mod.ProjectsBrowser),
  {
    loading: () => (
      <div className="space-y-4 rounded-2xl border border-white/10 bg-slate-950/75 p-4">
        <div className="h-11 w-full max-w-md animate-pulse rounded-xl bg-slate-800" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-72 animate-pulse rounded-2xl bg-slate-800" />
          ))}
        </div>
      </div>
    ),
  },
);

export const metadata = {
  title: "Projects",
  description: "Selected projects by Sourov Chandra Adikari, including SCA Courier and SCA Shop, built with Next.js, TypeScript, Node.js, and modern product design.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-8 rounded-[28px] border border-white/10 bg-slate-950/75 p-6 md:p-8">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Projects</p>
        <h1 className="mt-3 text-white">Selected work</h1>
      </div>

      <ProjectsBrowser />
    </div>
  );
}
