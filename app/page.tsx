import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { ArrowRight, Download, Mail, MapPin, Sparkles, Star } from "lucide-react";
import { FadeIn } from "@/components/animated-section";
import { ProjectCard } from "@/components/project-card";
import { SocialLinks } from "@/components/social-links";
import { educationTimeline, experienceTimeline, personalInfo, skills } from "@/data/portfolio";
import { featuredProjects } from "@/data/projects";

export const metadata = {
  title: "Home",
  description: "Sourov Chandra Adikari is a Full Stack Web Developer building modern web applications with React, Next.js, TypeScript, and Node.js.",
};

function HomeHero() {
  const expertise = ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind"];
  const stats = [
    { value: "5+", label: "Projects launched" },
    { value: "1.5y+", label: "Hands-on building" },
    { value: "100%", label: "Focused on quality" },
  ];

  return (
    <FadeIn className="relative overflow-hidden border-t border-white/10 py-6 md:py-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.24em] text-cyan-200">
            <Sparkles className="h-3.5 w-3.5" />
            Student • Developer • Problem Solver
          </div>

          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.26em] text-slate-400">Hi, I&apos;m Sourov Chandra Adikari</p>
            <h1 className="max-w-xl text-white">I build polished digital products people enjoy using.</h1>
            <p className="max-w-xl text-base leading-7 text-slate-300 md:text-lg">
              I design and build clean, scalable web experiences with a strong focus on product thinking, responsive interfaces, and dependable engineering.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="/projects" className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-300">
              View My Work
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="/resume.pdf" download className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-5 py-3 font-medium text-white transition hover:border-cyan-400/40 hover:text-cyan-200">
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-5 py-3 font-medium text-white transition hover:border-cyan-400/40 hover:text-cyan-200">
              <Mail className="h-4 w-4" />
              Let&apos;s Talk
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-cyan-300" /> {personalInfo.location}</span>
            <span className="inline-flex items-center gap-2"><Star className="h-4 w-4 text-cyan-300" /> Available for internship / junior roles</span>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {expertise.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/2 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-200">
                {item}
              </span>
            ))}
          </div>

          <div className="grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="py-2">
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>

          <SocialLinks className="pt-1" />
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute -right-6 -top-8 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -bottom-8 left-4 h-28 w-28 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative w-full max-w-[430px] overflow-hidden rounded-[26px] border border-white/10 bg-slate-950/60 p-2">
            <div className="absolute inset-x-4 top-4 z-10 flex items-center justify-between rounded-full border border-white/10 bg-slate-950/80 px-3 py-2 backdrop-blur-sm">
              <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-cyan-200">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                Available for work
              </span>
              <span className="text-[10px] uppercase tracking-[0.14em] text-slate-400">Remote / On-site</span>
            </div>

            <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-slate-950">
              <Image
                src="/developer.jpg"
                alt="Sourov Chandra Adikari"
                width={760}
                height={860}
                sizes="(max-width: 1024px) 100vw, 430px"
                className="h-[500px] w-full object-cover md:h-[560px]"
                priority
              />
            </div>

            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-slate-950/80 p-4 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">Currently</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">Independent Full Stack Developer</h3>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-slate-300">
                  2023 – Present
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

function AboutSkillsSection() {
  const stackGroups = [
    { title: "Frontend", items: skills.frontend },
    { title: "Backend", items: skills.backend },
    { title: "Database", items: skills.database },
    { title: "Tools", items: skills.tools },
  ];

  return (
    <FadeIn className="grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-2">
      <section className="space-y-5 py-1">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">About</p>
        <h2 className="mt-4 text-white">Developer with a product mindset</h2>
        <p className="mt-4 text-base leading-7 text-slate-300">{personalInfo.about}</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="border-t border-white/10 pt-3">
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Strengths</p>
            <p className="mt-2 text-sm text-slate-200">Full Stack Development</p>
          </div>
          <div className="border-t border-white/10 pt-3">
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Focus</p>
            <p className="mt-2 text-sm text-slate-200">Responsive UI & clean APIs</p>
          </div>
        </div>
        <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200">
          More about me <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <section className="space-y-5 py-1">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Core Stack</p>
        <div className="mt-5 space-y-4">
          {stackGroups.map((group) => (
            <div key={group.title} className="border-t border-white/10 pt-4">
              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">{group.title}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-white/2 px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Link href="/skills" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200">
          Explore skills <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </FadeIn>
  );
}

function FeaturedProjectsSection() {
  return (
    <section className="space-y-6 border-t border-white/10 pt-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Featured Projects</p>
          <h2 className="mt-2 text-white">Projects I&apos;ve Built</h2>
        </div>
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200">
          View All Projects <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.slice(0, 3).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

function ExperienceEducationSection() {
  return (
    <section className="grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-2">
      <div className="space-y-5">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Experience</p>
        <div className="mt-5 space-y-5">
          {experienceTimeline.map((item) => (
            <div key={item.role} className="border-t border-white/10 pt-4">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                <span className="text-sm text-slate-400">{item.period}</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
              <p className="mt-2 text-sm text-cyan-300">{item.achievement}</p>
            </div>
          ))}
        </div>
        <Link href="/experience" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200">
          See experience <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="space-y-5">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Education</p>
        <div className="mt-5 space-y-4">
          {educationTimeline.map((item) => (
            <div key={`${item.school}-${item.period}`} className="border-t border-white/10 pt-4">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <span className="text-sm text-slate-400">{item.period}</span>
              </div>
              <p className="mt-2 text-sm text-slate-300">{item.school}</p>
              <p className="mt-1 text-sm text-cyan-300">{item.detail}</p>
            </div>
          ))}
        </div>
        <Link href="/education" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200">
          View education <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="border-t border-white/10 pt-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Let&apos;s talk</p>
          <h2 className="mt-2 text-white">Open to internships and junior opportunities</h2>
        </div>
        <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-300">
          Contact me
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function SectionFallback() {
  return (
    <div className="animate-pulse space-y-6 rounded-3xl border border-white/10 bg-slate-950/75 p-6">
      <div className="h-3 w-24 rounded-full bg-slate-700" />
      <div className="h-8 w-2/3 rounded-full bg-slate-700" />
      <div className="space-y-3">
        <div className="h-4 w-full rounded-full bg-slate-800" />
        <div className="h-4 w-5/6 rounded-full bg-slate-800" />
        <div className="h-4 w-4/6 rounded-full bg-slate-800" />
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-5rem)] space-y-8 pb-6">
      <HomeHero />

      <Suspense fallback={<SectionFallback />}>
        <AboutSkillsSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <FeaturedProjectsSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <ExperienceEducationSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <CTASection />
      </Suspense>
    </div>
  );
}
