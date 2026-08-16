import { FadeIn } from "@/components/animated-section";
import { experienceTimeline } from "@/data/portfolio";

export const metadata = {
  title: "Experience",
  description: "Experience timeline for Sourov Chandra Adikari, an independent Full Stack Web Developer with a focus on modern web applications.",
};

export default function ExperiencePage() {
  return (
    <FadeIn className="space-y-8 py-6 md:py-8">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Experience</p>
        <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Building digital products</h1>
      </div>

      <div className="space-y-5 border-t border-white/10 pt-5">
        {experienceTimeline.map((item) => (
          <article key={item.role} className="border-t border-white/10 pt-5">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <h2 className="text-2xl font-semibold text-white">{item.role}</h2>
              <span className="text-sm text-slate-400">{item.period}</span>
            </div>
            <p className="mt-4 text-base leading-7 text-slate-300">{item.description}</p>
            <p className="mt-4 text-sm text-cyan-200">
              Achievement: {item.achievement}
            </p>
          </article>
        ))}
      </div>
    </FadeIn>
  );
}
