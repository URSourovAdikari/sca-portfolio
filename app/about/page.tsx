import { FadeIn } from "@/components/animated-section";
import { personalInfo } from "@/data/portfolio";

export const metadata = {
  title: "About",
  description: "Learn more about Sourov Chandra Adikari, a Full Stack Web Developer focused on modern frontends and practical backend systems.",
};

export default function AboutPage() {
  return (
    <FadeIn className="space-y-8 rounded-[28px] border border-white/10 bg-slate-950/75 p-6 md:p-8">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">About</p>
        <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Building thoughtful digital experiences</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5 text-base leading-8 text-slate-300">
          <p>{personalInfo.about}</p>
          <p>
            I enjoy turning ideas into quality products through clean architecture, responsive design, and practical engineering decisions. My work is shaped by curiosity, attention to detail, and a focus on delivering smooth user experiences.
          </p>
          <p>
            I&apos;m especially interested in building interfaces that feel polished, scalable systems that stay maintainable, and products that balance design, performance, and reliability.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
          <div className="space-y-5">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Location</p>
              <p className="mt-2 text-lg font-medium text-white">{personalInfo.location}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Career Goal</p>
              <p className="mt-2 text-lg font-medium text-white">{personalInfo.careerGoal}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Primary Stack</p>
              <p className="mt-2 text-lg font-medium text-white">React • Next.js • TypeScript • Node.js</p>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
