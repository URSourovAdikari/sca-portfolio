import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center rounded-[28px] border border-white/10 bg-slate-950/75 p-6 text-center md:p-12">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">404</p>
        <h1 className="text-4xl font-semibold text-white">Page not found</h1>
        <p className="text-slate-300">The page you requested is unavailable.</p>
        <Link href="/" className="inline-flex items-center rounded-full bg-cyan-400 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-300">
          Return home
        </Link>
      </div>
    </div>
  );
}
