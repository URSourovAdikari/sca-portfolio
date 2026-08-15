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
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
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
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/3 text-slate-200 transition duration-200 hover:border-cyan-400/60 hover:bg-cyan-500/10 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </Link>
        );
      })}
    </div>
  );
}
