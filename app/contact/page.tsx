import dynamic from "next/dynamic";

const ContactDetails = dynamic(() => import("@/components/contact-details").then((mod) => mod.ContactDetails), {
  loading: () => (
    <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/70 p-5">
      <div className="h-5 w-24 animate-pulse rounded-full bg-slate-700" />
      <div className="h-12 animate-pulse rounded-xl bg-slate-800" />
      <div className="h-12 animate-pulse rounded-xl bg-slate-800" />
      <div className="h-12 animate-pulse rounded-xl bg-slate-800" />
    </div>
  ),
});

const ContactForm = dynamic(() => import("@/components/contact-form").then((mod) => mod.ContactForm), {
  loading: () => (
    <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/70 p-5">
      <div className="h-10 animate-pulse rounded-xl bg-slate-800" />
      <div className="h-12 animate-pulse rounded-xl bg-slate-800" />
      <div className="h-28 animate-pulse rounded-xl bg-slate-800" />
      <div className="h-12 animate-pulse rounded-full bg-slate-700" />
    </div>
  ),
});

export const metadata = {
  title: "Contact",
  description: "Contact Sourov Chandra Adikari for collaboration, internship opportunities, and web development work.",
};

export default function ContactPage() {
  return (
    <div className="space-y-8 rounded-[28px] border border-white/10 bg-slate-950/75 p-6 md:p-8">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Contact</p>
        <h1 className="mt-3 text-white">Let&apos;s Build Something Together</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <ContactDetails />

        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
