import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    notFound();
  }

  const hasGithub = Boolean(project.githubUrl?.trim());
  const hasLive = Boolean(project.liveUrl?.trim());

  return (
    <article className="space-y-8 rounded-[28px] border border-white/10 bg-slate-950/75 p-6 md:p-8">
      <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200">
        <ArrowLeft className="h-4 w-4" />
        Back to Projects
      </Link>

      <div className="overflow-hidden rounded-[26px] border border-white/10 bg-slate-900/80">
        <Image
          src={project.image}
          alt={project.title}
          width={1600}
          height={1000}
          sizes="(max-width: 1024px) 100vw, 1200px"
          loading="lazy"
          className="h-[280px] w-full object-cover md:h-[420px]"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-cyan-300">
                {project.isDemo ? "Demo Project" : project.category}
              </span>
              <span className="rounded-full border border-white/10 bg-white/3 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">
                {project.year}
              </span>
            </div>
            <h1 className="text-4xl font-semibold text-white md:text-5xl">{project.title}</h1>
          </div>

          <p className="text-base leading-8 text-slate-300">{project.fullDescription}</p>

          <div>
            <h2 className="text-xl font-semibold text-white">Key Features</h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="space-y-5 rounded-2xl border border-white/10 bg-slate-900/60 p-5">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Category</p>
            <p className="mt-2 text-lg font-medium text-white">{project.category}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Year</p>
            <p className="mt-2 text-lg font-medium text-white">{project.year}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Technologies</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span key={technology} className="rounded-full border border-white/10 bg-white/3 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-slate-200">
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-2">
            {hasGithub ? (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full border border-white/10 bg-white/3 px-4 py-3 font-medium text-white hover:border-cyan-400/40 hover:text-cyan-200">
                GitHub
              </a>
            ) : (
              <button type="button" disabled className="flex w-full items-center justify-center rounded-full border border-white/10 bg-white/3 px-4 py-3 font-medium text-slate-500">
                GitHub Coming Soon
              </button>
            )}

            {hasLive ? (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full bg-cyan-400 px-4 py-3 font-medium text-slate-950 transition hover:bg-cyan-300">
                Live Demo
              </a>
            ) : (
              <button type="button" disabled className="flex w-full items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-3 font-medium text-cyan-200">
                Coming Soon
              </button>
            )}
          </div>
        </aside>
      </div>
    </article>
  );
}
