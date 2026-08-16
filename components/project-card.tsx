import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, GitBranch } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const hasGithub = Boolean(project.githubUrl?.trim());
  const hasLive = Boolean(project.liveUrl?.trim());

  const statusStyles: Record<string, string> = {
    completed: "border-emerald-400/40 bg-emerald-500/10 text-emerald-200",
    "in-progress": "border-amber-400/40 bg-amber-500/10 text-amber-200",
    upcoming: "border-violet-400/40 bg-violet-500/10 text-violet-200",
    experimental: "border-fuchsia-400/40 bg-fuchsia-500/10 text-fuchsia-200",
    archived: "border-slate-400/40 bg-slate-500/10 text-slate-200",
  };

  return (
    <article className="group overflow-hidden border border-white/10 bg-slate-950/40 transition duration-300 hover:border-cyan-400/30 hover:bg-slate-950/60">
      <div className="relative overflow-hidden border-b border-white/10">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={520}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          loading="lazy"
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-cyan-400/30 bg-slate-950/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-sm">
            {project.category}
          </span>
          <span className={`rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] backdrop-blur-sm ${statusStyles[project.status]}`}>
            {project.status.replace("-", " ")}
          </span>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <span className="text-xs uppercase tracking-[0.18em] text-slate-400">{project.year}</span>
        </div>

        <p className="text-sm leading-6 text-slate-300">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={`${project.id}-${technology}`}
              className="rounded-full border border-white/10 bg-white/2 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-3 pt-2">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2.5 text-sm font-medium text-cyan-200 transition hover:border-cyan-300/60 hover:bg-cyan-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            View Case Study
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          <div className="flex flex-col gap-2 sm:flex-row">
            {hasGithub ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} GitHub repository`}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/3 px-4 py-2.5 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <GitBranch className="h-4 w-4" />
                GitHub
              </a>
            ) : null}

            {hasLive ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live demo`}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-cyan-400 px-4 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
