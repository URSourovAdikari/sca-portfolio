"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, GraduationCap, Home } from "lucide-react";
import { FiMenu, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";
import { navItems, personalInfo } from "@/data/portfolio";
import { SocialLinks } from "@/components/social-links";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [mobileOpen]);

  const navIcons = {
    "/": Home,
    "/about": BriefcaseBusiness,
    "/skills": BriefcaseBusiness,
    "/projects": ArrowUpRight,
    "/experience": BriefcaseBusiness,
    "/education": GraduationCap,
  } as const;

  const sidebarContent = (
    <>
      <div className="flex items-center gap-3 border-b border-white/10 p-5">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-900 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
          <Image src="/developer.jpg" alt={personalInfo.name} fill className="object-cover" />
        </div>
        <div className="flex-1 leading-tight">
          <h2 className="max-w-none text-[12px] font-semibold text-white sm:text-[14px] lg:text-[16px]">
            {personalInfo.name}
          </h2>
          <p className="mt-1 text-[11px] text-slate-300">{personalInfo.title}</p>
        </div>
      </div>

      <nav className="space-y-1 p-4">
        {navItems.map(({ href, label }) => {
          const Icon = navIcons[href as keyof typeof navIcons] ?? Home;
          const active = isActive(pathname, href);

          return (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                active
                  ? "bg-cyan-500/10 text-cyan-300 ring-1 ring-cyan-400/20"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span className="flex items-center gap-3">
                <Icon className="h-4 w-4" />
                {label}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 p-4">
        <SocialLinks className="mb-4" />
        <div className="flex flex-col gap-2">
          <Link
            href="/resume"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2.5 text-sm font-medium text-cyan-200 transition hover:bg-cyan-500/20"
          >
            Resume
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );

  return (
    <div className="mx-auto flex min-h-screen max-w-[1800px] lg:gap-6 lg:p-6">
      <aside className="hidden w-[290px] flex-shrink-0 lg:flex">
        <div className="sticky top-6 flex h-[calc(100vh-3rem)] w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 shadow-[0_0_0_1px_rgba(148,163,184,0.08)] backdrop-blur-sm">
          {sidebarContent}
        </div>
      </aside>

      <div className="flex-1 pb-12 pt-6 lg:pt-0">
        <div className="sticky top-0 z-30 lg:hidden">
          <div className="flex items-center justify-between border-b border-white/10 bg-slate-950/80 px-4 py-3 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-cyan-400/20">
                <Image src="/developer.jpg" alt={personalInfo.name} fill className="object-cover" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-white">Sourov Chandra Adikari</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Full Stack Web Developer</div>
              </div>
            </div>

            <button
              type="button"
              aria-label="Open navigation menu"
              onClick={() => setMobileOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/3 text-white"
            >
              <FiMenu className="h-5 w-5" />
            </button>
          </div>
        </div>

        <main className="mx-auto w-full max-w-6xl px-4 pt-5 lg:px-6 lg:pt-8">{children}</main>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-slate-950/75 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: -320, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -320, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed inset-y-0 left-0 z-50 w-[82%] max-w-[320px] overflow-y-auto border-r border-white/10 bg-slate-950/95 lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-white/10 p-4">
                <div className="text-sm font-semibold text-white">Navigation</div>
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-200"
                >
                  <FiX className="h-4 w-4" />
                </button>
              </div>
              {sidebarContent}
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
