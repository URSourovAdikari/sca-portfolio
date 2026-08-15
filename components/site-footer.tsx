import Link from "next/link";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { navItems, personalInfo, socialLinks } from "@/data/portfolio";
import { SocialLinks } from "@/components/social-links";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto w-full max-w-[1800px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <div className="space-y-4">
            <div>
              <p className="text-lg font-semibold text-white">{personalInfo.name}</p>
              <p className="mt-1 text-sm text-slate-300">{personalInfo.title}</p>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-400">
              I build polished, mobile-first web experiences that combine strong product thinking with dependable engineering.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Quick Links</p>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="transition hover:text-cyan-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Connect</p>
            <div className="mt-4 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <SocialLinks />
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                {socialLinks.map(({ href, label }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      title={label}
                      className="transition hover:text-cyan-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Contact</p>
            <div className="space-y-3 text-sm text-slate-300">
              <a href={`mailto:${personalInfo.email}`} className="flex items-start gap-3 break-all transition hover:text-cyan-200">
                <FiMail className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                <span>{personalInfo.email}</span>
              </a>
              <a href={`tel:${personalInfo.phone}`} className="flex items-start gap-3 transition hover:text-cyan-200">
                <FiPhone className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                <span>{personalInfo.phone}</span>
              </a>
              <div className="flex items-start gap-3 text-slate-300">
                <FiMapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Sourov Chandra Adikari. All rights reserved.</p>
          <p>Full Stack Web Developer</p>
        </div>
      </div>
    </footer>
  );
}
