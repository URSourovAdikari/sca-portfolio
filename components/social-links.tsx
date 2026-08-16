import Link from "next/link";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { socialLinks } from "@/data/portfolio";

const iconMap = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  whatsapp: FaWhatsapp,
  github: FaGithub,
  linkedin: FaLinkedinIn,
} as const;

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {socialLinks.map(({ href, label, icon }) => {
        const Icon = iconMap[icon];

        return (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-slate-900/80 text-slate-200 shadow-[0_0_0_1px_rgba(148,163,184,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <span className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-cyan-400/0 to-cyan-400/15 opacity-0 transition duration-300 group-hover:opacity-100" />
            <Icon className="relative z-10 h-4 w-4" aria-hidden="true" />
          </Link>
        );
      })}
    </div>
  );
}
