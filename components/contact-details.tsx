"use client";

import { useState } from "react";
import { Copy, MapPin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { SocialLinks } from "@/components/social-links";
import { personalInfo } from "@/data/portfolio";

export function ContactDetails() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="space-y-5 border-t border-white/10 pt-5">
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-slate-200">
          <Mail className="h-5 w-5 text-cyan-300" />
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-slate-400">Email</p>
            <a href={`mailto:${personalInfo.email}`} className="text-base text-white hover:text-cyan-200">{personalInfo.email}</a>
          </div>
        </div>

        <div className="flex items-center gap-3 text-slate-200">
          <Phone className="h-5 w-5 text-cyan-300" />
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-slate-400">Phone</p>
            <a href={`tel:${personalInfo.phone}`} className="text-base text-white hover:text-cyan-200">{personalInfo.phone}</a>
          </div>
        </div>

        <div className="flex items-center gap-3 text-slate-200">
          <MapPin className="h-5 w-5 text-cyan-300" />
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-slate-400">Location</p>
            <p className="text-base text-white">{personalInfo.location}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-4">
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="text-sm uppercase tracking-[0.15em] text-slate-400">Social</p>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-slate-200 hover:border-cyan-400/40 hover:text-cyan-200"
          >
            <Copy className="h-3.5 w-3.5" />
            {copied ? "Copied" : "Copy Email"}
          </button>
        </div>
        <SocialLinks />
      </div>

      <Link href="/resume" className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200">
        View resume
      </Link>
    </div>
  );
}
