import Link from "next/link";
import { Download, ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/animated-section";

export const metadata = {
  title: "Resume",
  description: "Resume for Sourov Chandra Adikari, Full Stack Web Developer and student.",
};

export default function ResumePage() {
  return (
    <FadeIn className="space-y-8 rounded-[28px] border border-white/10 bg-slate-950/75 p-6 md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Resume</p>
          <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Professional profile</h1>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-4 py-2.5 font-medium text-white transition hover:border-cyan-400/40 hover:text-cyan-200">
            <ExternalLink className="h-4 w-4" />
            View Resume
          </a>
          <a href="/resume.pdf" download className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2.5 font-medium text-slate-950 transition hover:bg-cyan-300">
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70">
        <iframe src="/resume.pdf" title="Sourov Chandra Adikari Resume" className="h-[760px] w-full" />
      </div>

      <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200">
        Contact me for opportunities
      </Link>
    </FadeIn>
  );
}
