export default function Loading() {
  return (
    <div className="space-y-6 rounded-[28px] border border-white/10 bg-slate-950/75 p-6 md:p-8">
      <div className="h-3 w-24 animate-pulse rounded-full bg-slate-700" />
      <div className="h-8 w-52 animate-pulse rounded-full bg-slate-800" />
      <div className="space-y-3">
        <div className="h-4 w-full animate-pulse rounded-full bg-slate-800" />
        <div className="h-4 w-5/6 animate-pulse rounded-full bg-slate-800" />
        <div className="h-4 w-4/6 animate-pulse rounded-full bg-slate-800" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="h-52 animate-pulse rounded-2xl bg-slate-800" />
        <div className="h-52 animate-pulse rounded-2xl bg-slate-800" />
      </div>
    </div>
  );
}
