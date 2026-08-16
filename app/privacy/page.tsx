import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Sourov Chandra Adikari's professional portfolio website, including the contact form, email processing, and website data practices.",
};

const sections = [
  { id: "introduction", label: "1. Introduction" },
  { id: "information-we-collect", label: "2. Information We Collect" },
  { id: "information-you-provide", label: "3. Information You Provide" },
  { id: "contact-form-information", label: "4. Contact Form Information" },
  { id: "how-information-is-used", label: "5. How Information Is Used" },
  { id: "email-nodemailer-processing", label: "6. Email / Nodemailer Processing" },
  { id: "analytics", label: "7. Analytics" },
  { id: "cookies-and-similar-technologies", label: "8. Cookies and Similar Technologies" },
  { id: "third-party-services", label: "9. Third-Party Services" },
  { id: "data-security", label: "10. Data Security" },
  { id: "data-retention", label: "11. Data Retention" },
  { id: "your-rights", label: "12. Your Rights" },
  { id: "childrens-privacy", label: "13. Children's Privacy" },
  { id: "external-links", label: "14. External Links" },
  { id: "changes-to-this-privacy-policy", label: "15. Changes to This Privacy Policy" },
  { id: "contact", label: "16. Contact" },
] as const;

export default function PrivacyPage() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mx-auto w-full max-w-6xl pb-12 pt-4">
      <div className="mb-8 border-b border-white/10 pb-6">
        <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-cyan-300">Legal</p>
        <h1 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-slate-400">Last updated: {currentDate}</p>
      </div>

      <div className="grid gap-8 xl:grid-cols-[260px_minmax(0,1fr)] xl:gap-12">
        <aside className="xl:sticky xl:top-6 xl:h-fit">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Contents</p>
          <nav className="mt-4 space-y-2 border-l border-white/10 pl-4">
            {sections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block text-sm text-slate-300 transition hover:text-cyan-200"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        <article className="space-y-8">
          <section id="introduction" className="scroll-mt-24 border-t border-white/10 pt-6">
            <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              This Privacy Policy explains how Sourov Chandra Adikari, a Full Stack Web Developer, handles information collected
              through this website. This website is a personal professional portfolio intended to showcase skills, projects,
              experience, education, and professional contact information.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              The website owner is Sourov Chandra Adikari. The website can be reached at https://sourovadikari.xyz, and
              contact requests may be sent to iamsourovadikari@gmail.com.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              This policy is intended to provide a clear overview of the information handled by the website and how it is used.
              It should be reviewed alongside the site&apos;s Terms &amp; Conditions. This page is not legal advice and should be
              reviewed by a qualified legal professional where formal legal compliance is required.
            </p>
          </section>

          <section id="information-we-collect" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-white">2. Information We Collect</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              The website primarily collects information that visitors voluntarily provide through the contact form or external
              communication channels. In normal operation, this may include the information described below:
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-base leading-7 text-slate-300">
              <li>Name</li>
              <li>Email address</li>
              <li>Message content</li>
              <li>Subject line or inquiry topic</li>
              <li>Any other information a visitor chooses to include in their message</li>
            </ul>
            <p className="mt-4 text-base leading-8 text-slate-300">
              The website does not intentionally collect a broad set of personal data beyond what is needed for direct contact
              and communication. No secret or credential data is requested through the public website.
            </p>
          </section>

          <section id="information-you-provide" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-white">3. Information You Provide</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Visitors may choose to provide personal or professional information when contacting the website owner, such as name,
              email address, project details, business inquiries, or other relevant context for a message. This information is
              submitted voluntarily and only to the extent the visitor chooses to provide it.
            </p>
          </section>

          <section id="contact-form-information" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-white">4. Contact Form Information</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Users may voluntarily submit information through the contact form, including:
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-base leading-7 text-slate-300">
              <li>Name</li>
              <li>Email address</li>
              <li>Message</li>
              <li>Any other information the user chooses to provide</li>
            </ul>
            <p className="mt-4 text-base leading-8 text-slate-300">
              This information is used only to respond to inquiries, communicate with the visitor, and handle legitimate contact
              requests. It is not used for advertising, sold to third parties, or shared for unrelated marketing purposes.
            </p>
          </section>

          <section id="how-information-is-used" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-white">5. How Information Is Used</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Information submitted through the website may be used to:
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-base leading-7 text-slate-300">
              <li>Respond to inquiries and messages</li>
              <li>Communicate with the visitor</li>
              <li>Manage legitimate contact requests</li>
              <li>Maintain reasonable records related to website communication and professional correspondence</li>
            </ul>
            <p className="mt-4 text-base leading-8 text-slate-300">
              The website does not use contact form information for advertising campaigns, profiling, or resale.
            </p>
          </section>

          <section id="email-nodemailer-processing" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-white">6. Email / Nodemailer Processing</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              The website&apos;s contact form is processed using a server-side email sending setup built with Node.js and Nodemailer.
              When a message is submitted, the provided name, email address, subject, and message may be transmitted to an
              email service provider configured for delivery through the website&apos;s server environment.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              This setup is used only to deliver submitted inquiries to the configured contact email address. SMTP credentials,
              server configuration values, and environment variables are not exposed through the website. The site is configured
              to redact sensitive environment variable names in error messages when relevant.
            </p>
          </section>

          <section id="analytics" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-white">7. Analytics</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              No dedicated analytics service is currently configured in the application code for this portfolio website. The site
              does not intentionally deploy a separate analytics script or advertising tracking platform in the current
              implementation.
            </p>
          </section>

          <section id="cookies-and-similar-technologies" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-white">8. Cookies and Similar Technologies</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              This website does not currently rely on a custom cookie banner or advertising cookie system. It also does not
              intentionally set tracking cookies for marketing or behavioral analytics in the current implementation.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              If the hosting environment or browser session uses standard technical cookies for essential functionality, those are
              not used for broad marketing or profiling purposes.
            </p>
          </section>

          <section id="third-party-services" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-white">9. Third-Party Services</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              This website uses services that are necessary for hosting and contact delivery, including:
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-base leading-7 text-slate-300">
              <li>Vercel for hosting and deployment</li>
              <li>SMTP/email infrastructure configured through Nodemailer for contact form delivery</li>
              <li>External social and professional platforms such as GitHub, LinkedIn, Facebook, Instagram, and WhatsApp</li>
            </ul>
            <p className="mt-4 text-base leading-8 text-slate-300">
              These external services operate under their own privacy policies and terms. This website does not control those
              services&apos; data handling practices. Visitors should review the privacy policies of any third-party platform they use.
            </p>
          </section>

          <section id="data-security" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-white">10. Data Security</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Reasonable technical and organizational measures are used to help protect submitted information from unauthorized
              access, loss, or misuse. The website does not claim to be completely immune to cyber threats, and no system can be
              guaranteed to be 100% secure.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Visitors should avoid sending sensitive personal information through public contact channels unless necessary.
            </p>
          </section>

          <section id="data-retention" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-white">11. Data Retention</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Submitted contact information may be retained only as reasonably necessary to respond to inquiries, maintain
              legitimate records, or comply with applicable obligations. The website owner does not set a broad automated
              retention period for all contact forms beyond what is reasonably required for professional communication.
            </p>
          </section>

          <section id="your-rights" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-white">12. Your Rights</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Visitors may contact the site owner regarding access to information they submitted, correction of inaccurate
              information, deletion requests where applicable, and privacy questions. The website owner will consider such
              requests in a reasonable and professional manner, subject to applicable law and legitimate record-keeping needs.
            </p>
          </section>

          <section id="childrens-privacy" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-white">13. Children&apos;s Privacy</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              This website is a professional portfolio and is not intentionally designed to collect personal information from
              children. If a child submits a message through the contact form, the information will be handled in the same
              manner as other legitimate contact inquiries, but the site is not intended as a child-directed service.
            </p>
          </section>

          <section id="external-links" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-white">14. External Links</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              This portfolio contains links to external websites including GitHub, LinkedIn, Facebook, Instagram, WhatsApp, and
              project websites. These websites are operated by third parties and are subject to their own privacy policies and
              terms of use. This website is not responsible for the content, practices, or privacy handling of external
              websites.
            </p>
          </section>

          <section id="changes-to-this-privacy-policy" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-white">15. Changes to This Privacy Policy</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              This Privacy Policy may be updated from time to time to reflect changes in the website&apos;s services, technology, or
              legal requirements. Any material changes will be reflected by updating the date above. Continued use of the
              website after changes are posted indicates acceptance of the revised policy.
            </p>
          </section>

          <section id="contact" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-white">16. Contact</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              If you have questions about this Privacy Policy or would like to contact the website owner regarding privacy,
              please email:{" "}
              <a href="mailto:iamsourovadikari@gmail.com" className="text-cyan-300 hover:text-cyan-200">
                iamsourovadikari@gmail.com
              </a>
              .
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              This page is a general website privacy notice intended for informational purposes only. It should be reviewed by a
              qualified legal professional where formal legal compliance is required.
            </p>
          </section>

          <div className="border-t border-white/10 pt-6 text-sm leading-7 text-slate-300">
            <Link href="/" className="inline-flex items-center text-cyan-300 transition hover:text-cyan-200">
              ← Back to homepage
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
