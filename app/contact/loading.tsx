export default function ContactLoading() {
  return (
    <div className="space-y-6 rounded-[28px] border border-white/10 bg-slate-950/75 p-6 md:p-8">
      <div className="h-3 w-24 animate-pulse rounded-full bg-slate-700" />
      <div className="h-8 w-72 animate-pulse rounded-full bg-slate-800" />
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/70 p-5">
          <div className="h-10 animate-pulse rounded-xl bg-slate-800" />
          <div className="h-10 animate-pulse rounded-xl bg-slate-800" />
          <div className="h-10 animate-pulse rounded-xl bg-slate-800" />
        </div>
        <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/70 p-5">
          <div className="h-10 animate-pulse rounded-xl bg-slate-800" />
          <div className="h-12 animate-pulse rounded-xl bg-slate-800" />
          <div className="h-24 animate-pulse rounded-xl bg-slate-800" />
          <div className="h-12 animate-pulse rounded-full bg-slate-700" />
        </div>
      </div>
    </div>
  );
}
