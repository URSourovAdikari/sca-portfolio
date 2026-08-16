import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for Sourov Chandra Adikari's portfolio website, covering acceptable use, intellectual property, external links, and project information.",
};

const sections = [
  { id: "acceptance-of-terms", label: "1. Acceptance of Terms" },
  { id: "website-purpose", label: "2. Website Purpose" },
  { id: "intellectual-property", label: "3. Intellectual Property" },
  { id: "portfolio-projects", label: "4. Portfolio Projects" },
  { id: "acceptable-use", label: "5. Acceptable Use" },
  { id: "external-links", label: "6. External Links" },
  { id: "accuracy-of-information", label: "7. Accuracy of Information" },
  { id: "availability", label: "8. Availability" },
  { id: "limitation-of-liability", label: "9. Limitation of Liability" },
  { id: "changes-to-the-website", label: "10. Changes to the Website" },
  { id: "changes-to-these-terms", label: "11. Changes to These Terms" },
  { id: "governing-law-jurisdiction", label: "12. Governing Law / Jurisdiction" },
  { id: "contact", label: "13. Contact" },
] as const;

export default function TermsPage() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mx-auto max-w-5xl px-4 pb-12 pt-4 md:px-6 lg:px-8">
      <div className="mb-8 rounded-[28px] border border-white/10 bg-slate-950/80 p-6 shadow-[0_0_0_1px_rgba(148,163,184,0.08)] md:p-8">
        <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-cyan-300">Legal</p>
        <h1 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Terms &amp; Conditions</h1>
        <p className="mt-3 text-sm text-slate-400">Last updated: {currentDate}</p>
      </div>

      <div className="grid gap-8 xl:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="rounded-[24px] border border-white/10 bg-slate-950/60 p-5 xl:sticky xl:top-6 xl:h-fit">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Contents</p>
          <nav className="mt-4 space-y-2">
            {sections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block rounded-lg border border-white/5 px-3 py-2 text-sm text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-200"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        <article className="space-y-8 rounded-[28px] border border-white/10 bg-slate-950/70 p-6 md:p-8">
          <section id="acceptance-of-terms" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-white">1. Acceptance of Terms</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              By accessing or using this website, you agree to be bound by these Terms &amp; Conditions and any policies
              referenced herein, including the Privacy Policy. If you do not agree with these terms, you should not use the
              website.
            </p>
          </section>

          <section id="website-purpose" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-white">2. Website Purpose</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              This website is primarily a personal professional portfolio for Sourov Chandra Adikari, Full Stack Web Developer.
              It showcases skills, experience, education, projects, resume information, and professional contact details.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              The purpose of the site is informational and professional. It is not an e-commerce platform, a registered company
              storefront, or a service marketplace unless explicitly stated otherwise.
            </p>
          </section>

          <section id="intellectual-property" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-white">3. Intellectual Property</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Original website content, branding, design elements, written content, and original materials appearing on this
              website are protected where applicable by copyright, trademark, and other intellectual property rights.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Visitors may not reproduce, redistribute, republish, or commercially exploit original content from this website
              without appropriate permission from the owner, unless otherwise permitted by applicable law or clearly stated on
              the site.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              This website does not claim ownership over third-party libraries, logos, trademarks, or external assets used by
              other parties. Where applicable, rights remain with their respective owners.
            </p>
          </section>

          <section id="portfolio-projects" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-white">4. Portfolio Projects</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              This portfolio contains project information and portfolio work, including examples such as:
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-base leading-7 text-slate-300">
              <li>SCA Courier — https://sca-courier.vercel.app/</li>
              <li>SCA Shop — https://sca-shop.vercel.app/</li>
              <li>SCA Universe — https://sca-universe.vercel.app/</li>
            </ul>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Project names, screenshots, designs, code, branding, and other intellectual property may belong to their respective
              owner or creator where applicable. This website provides project information for professional portfolio purposes and
              does not claim ownership of third-party project assets.
            </p>
          </section>

          <section id="acceptable-use" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-white">5. Acceptable Use</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Users agree not to use the website to:
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-base leading-7 text-slate-300">
              <li>Attempt unauthorized access</li>
              <li>Abuse the contact form</li>
              <li>Send spam or unsolicited communications</li>
              <li>Submit malicious, abusive, or unlawful content</li>
              <li>Attempt to disrupt the website or its services</li>
              <li>Use the website for unlawful purposes</li>
            </ul>
          </section>

          <section id="external-links" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-white">6. External Links</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              The website may link to external websites, including social media platforms, professional services, and project
              deployments. These external websites are not controlled by this portfolio and may have their own content,
              availability, and privacy practices.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              The owner is not responsible for the content, availability, or privacy practices of external websites.
            </p>
          </section>

          <section id="accuracy-of-information" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-white">7. Accuracy of Information</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Information on this website is provided for general professional and informational purposes. While reasonable care is
              taken to present accurate and up-to-date information, the website owner makes no guarantees about:
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-base leading-7 text-slate-300">
              <li>Availability of the website or any section</li>
              <li>Services or opportunities mentioned</li>
              <li>Project performance or external website availability</li>
              <li>Third-party services, links, or platform behavior</li>
            </ul>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Users should independently verify information when making professional, legal, or business decisions.
            </p>
          </section>

          <section id="availability" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-white">8. Availability</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              This website may be updated, maintained, interrupted, or unavailable at times for maintenance, technical updates, or
              other operational reasons. The owner may modify, suspend, or discontinue any part of the site without prior notice.
            </p>
          </section>

          <section id="limitation-of-liability" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-white">9. Limitation of Liability</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              To the maximum extent permitted by applicable law, the website is provided on an “as available” basis. The owner
              shall not be liable for indirect, incidental, consequential, or punitive damages arising out of or relating to use
              of the website or its content, except where liability cannot lawfully be excluded.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              This limitation of liability applies to direct and indirect losses, interruptions, data loss, or reliance on
              information presented on the website.
            </p>
          </section>

          <section id="changes-to-the-website" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-white">10. Changes to the Website</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              The website owner may update, revise, improve, or remove content, features, or pages at any time. Changes may be
              made to reflect new work, updated project details, or improvements to user experience.
            </p>
          </section>

          <section id="changes-to-these-terms" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-white">11. Changes to These Terms</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              These Terms &amp; Conditions may be updated from time to time to reflect changes in website operations or legal
              requirements. Material changes will be reflected by updating the date above. Continued use of the website after any
              update constitutes acceptance of the revised terms.
            </p>
          </section>

          <section id="governing-law-jurisdiction" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-white">12. Governing Law / Jurisdiction</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              These Terms shall be interpreted in accordance with applicable laws. Any applicable jurisdiction will be determined
              based on the relevant circumstances and applicable law.
            </p>
          </section>

          <section id="contact" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-white">13. Contact</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              If you have questions about these Terms &amp; Conditions or would like to contact the website owner, please email:{" "}
              <a href="mailto:iamsourovadikari@gmail.com" className="text-cyan-300 hover:text-cyan-200">
                iamsourovadikari@gmail.com
              </a>
              .
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              These terms are intended as a general website policy for informational purposes and should be reviewed by a
              qualified legal professional where formal legal compliance is required.
            </p>
          </section>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/5 p-4 text-sm leading-7 text-slate-300">
            <Link href="/" className="inline-flex items-center text-cyan-300 transition hover:text-cyan-200">
              ← Back to homepage
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
