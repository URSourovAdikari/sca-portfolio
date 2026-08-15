import { FadeIn } from "@/components/animated-section";
import { skills } from "@/data/portfolio";

export const metadata = {
  title: "Skills",
  description: "Technical skills for Sourov Chandra Adikari across frontend, backend, database, and deployment tools.",
};

export default function SkillsPage() {
  const sections = [
    { title: "Frontend", items: skills.frontend },
    { title: "Backend", items: skills.backend },
    { title: "Database", items: skills.database },
    { title: "Tools & Deployment", items: skills.tools },
  ];

  return (
    <FadeIn className="space-y-8 rounded-[28px] border border-white/10 bg-slate-950/75 p-6 md:p-8">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Skills</p>
        <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Focused on modern web development</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {sections.map((section) => (
          <div key={section.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
            <h2 className="text-xl font-semibold text-white">{section.title}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {section.items.map((item) => (
                <span key={item} className="rounded-full border border-cyan-400/20 bg-cyan-500/8 px-3 py-2 text-xs font-medium uppercase tracking-[0.12em] text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </FadeIn>
  );
}
