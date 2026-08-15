import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const hasGithub = Boolean(project.githubUrl?.trim());
  const hasLive = Boolean(project.liveUrl?.trim());

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 shadow-[0_0_0_1px_rgba(148,163,184,0.08)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_18px_40px_rgba(14,116,144,0.12)]">
      <div className="relative overflow-hidden border-b border-white/10">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={520}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          loading="lazy"
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute left-4 top-4 rounded-full border border-cyan-400/40 bg-slate-950/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-300">
          {project.isDemo ? "Demo Project" : project.category}
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <span className="text-xs uppercase tracking-[0.18em] text-slate-400">{project.year}</span>
        </div>

        <p className="text-sm leading-6 text-slate-300">{project.shortDescription}</p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((technology) => (
            <span
              key={`${project.id}-${technology}`}
              className="rounded-full border border-white/10 bg-white/3 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 pt-2">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
          >
            View Details
          </Link>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            {hasGithub ? (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                GitHub
              </a>
            ) : (
              <span>GitHub</span>
            )}
            <span className="text-slate-600">•</span>
            {hasLive ? (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Live Demo
              </a>
            ) : (
              <span>Coming Soon</span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
