import { FadeIn } from "@/components/animated-section";
import { experienceTimeline } from "@/data/portfolio";

export const metadata = {
  title: "Experience",
  description: "Experience timeline for Sourov Chandra Adikari, an independent Full Stack Web Developer with a focus on modern web applications.",
};

export default function ExperiencePage() {
  return (
    <FadeIn className="space-y-8 rounded-[28px] border border-white/10 bg-slate-950/75 p-6 md:p-8">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Experience</p>
        <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Building digital products</h1>
      </div>

      <div className="space-y-5">
        {experienceTimeline.map((item) => (
          <article key={item.role} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <h2 className="text-2xl font-semibold text-white">{item.role}</h2>
              <span className="text-sm text-slate-400">{item.period}</span>
            </div>
            <p className="mt-4 text-base leading-7 text-slate-300">{item.description}</p>
            <p className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-500/8 px-3 py-2 text-sm text-cyan-200">
              Achievement: {item.achievement}
            </p>
          </article>
        ))}
      </div>
    </FadeIn>
  );
}
