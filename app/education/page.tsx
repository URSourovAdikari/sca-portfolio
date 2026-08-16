import { FadeIn } from "@/components/animated-section";
import { educationTimeline, languages } from "@/data/portfolio";

export const metadata = {
  title: "Education",
  description: "Education history and language proficiency for Sourov Chandra Adikari.",
};

export default function EducationPage() {
  return (
    <FadeIn className="space-y-8 py-6 md:py-8">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Education</p>
        <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Academic background</h1>
      </div>

      <div className="space-y-5 border-t border-white/10 pt-5">
        {educationTimeline.map((item) => (
          <article key={`${item.title}-${item.period}`} className="border-t border-white/10 pt-5">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <span className="text-sm text-slate-400">{item.period}</span>
            </div>
            <p className="mt-3 text-base text-slate-300">{item.school}</p>
            <p className="mt-2 text-sm text-cyan-300">{item.detail}</p>
          </article>
        ))}
      </div>

      <div className="border-t border-white/10 pt-5">
        <h2 className="text-xl font-semibold text-white">Languages</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {languages.map(({ language, level }) => (
            <div key={language} className="border-t border-white/10 pt-3">
              <p className="text-sm uppercase tracking-[0.15em] text-slate-400">{language}</p>
              <p className="mt-2 text-base font-medium text-white">{level}</p>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
