import { FadeIn } from "@/components/animated-section";
import { personalInfo } from "@/data/portfolio";

export const metadata = {
  title: "About",
  description: "Learn more about Sourov Chandra Adikari, a Full Stack Web Developer focused on modern frontends and practical backend systems.",
};

export default function AboutPage() {
  const strengths = [
    "Full Stack Development",
    "React / Next.js",
    "Backend & REST APIs",
    "Responsive UI",
    "Deployment & CI/CD",
  ];

  return (
    <FadeIn className="space-y-8 py-6 md:py-8">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">About</p>
        <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Building thoughtful digital experiences</h1>
      </div>

      <div className="grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5 text-base leading-8 text-slate-300">
          <p>{personalInfo.about}</p>
          <p>
            I enjoy turning ideas into quality products through clean architecture, responsive design, and practical engineering decisions. My work is centered on shipping user-friendly interfaces and maintainable backend systems that are ready for real-world use.
          </p>
          <p>
            I&apos;m especially interested in building polished interfaces, scalable workflows, and products that balance performance, maintainability, and clarity.
          </p>
        </div>

        <div className="space-y-5 border-t border-white/10 pt-5">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Location</p>
            <p className="mt-2 text-lg font-medium text-white">{personalInfo.location}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Career Goal</p>
            <p className="mt-2 text-lg font-medium text-white">{personalInfo.careerGoal}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Core strengths</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {strengths.map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 bg-white/2 px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-slate-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
