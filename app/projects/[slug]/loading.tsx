export default function ProjectDetailLoading() {
  return (
    <div className="space-y-6 rounded-[28px] border border-white/10 bg-slate-950/75 p-6 md:p-8">
      <div className="h-5 w-32 animate-pulse rounded-full bg-slate-700" />
      <div className="h-[280px] w-full animate-pulse rounded-[26px] bg-slate-800 md:h-[420px]" />
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <div className="h-6 w-32 animate-pulse rounded-full bg-slate-700" />
          <div className="h-10 w-3/4 animate-pulse rounded-full bg-slate-800" />
          <div className="h-4 w-full animate-pulse rounded-full bg-slate-800" />
          <div className="h-4 w-5/6 animate-pulse rounded-full bg-slate-800" />
          <div className="h-4 w-4/6 animate-pulse rounded-full bg-slate-800" />
        </div>
        <div className="h-64 animate-pulse rounded-2xl bg-slate-800" />
      </div>
    </div>
  );
}
