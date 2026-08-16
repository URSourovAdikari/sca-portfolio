"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { projectStatusOptions, projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export function ProjectsBrowser() {
  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<(typeof projectStatusOptions)[number]>("All");

  const filteredProjects = useMemo(() => {
    return [...projects]
      .sort((a, b) => {
        const statusOrder = { completed: 0, "in-progress": 1, upcoming: 2, experimental: 3, archived: 4 };
        return statusOrder[a.status] - statusOrder[b.status];
      })
      .filter((project) => {
        const matchesStatus = selectedStatus === "All" ||
          (selectedStatus === "Completed" && project.status === "completed") ||
          (selectedStatus === "In Progress" && project.status === "in-progress") ||
          (selectedStatus === "Upcoming" && project.status === "upcoming") ||
          (selectedStatus === "Experimental" && project.status === "experimental") ||
          (selectedStatus === "Archived" && project.status === "archived");

        const matchesSearch =
          project.title.toLowerCase().includes(search.toLowerCase()) ||
          project.description.toLowerCase().includes(search.toLowerCase()) ||
          project.technologies.some((tech) => tech.toLowerCase().includes(search.toLowerCase()));

        return matchesStatus && matchesSearch;
      });
  }, [search, selectedStatus]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 border-t border-white/10 pt-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search projects..."
            aria-label="Search projects"
            className="w-full rounded-full border border-white/10 bg-slate-900/50 py-3 pl-10 pr-3 text-sm text-white outline-none transition focus:border-cyan-400/50"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {projectStatusOptions.map((status) => (
            <button
              key={status}
              type="button"
              onClick={() => setSelectedStatus(status)}
              className={`rounded-full border px-3 py-2 text-[10px] font-medium uppercase tracking-[0.12em] transition ${
                selectedStatus === status
                  ? "border-cyan-400/60 bg-cyan-500/10 text-cyan-300"
                  : "border-white/10 bg-white/2 text-slate-300 hover:border-cyan-400/30 hover:text-white"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="border-t border-dashed border-white/10 pt-8 text-center text-slate-300">
          No projects match your search yet.
        </div>
      )}
    </div>
  );
}
