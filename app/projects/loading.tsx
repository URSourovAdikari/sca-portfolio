export default function ProjectsLoading() {
  return (
    <div className="space-y-6 rounded-[28px] border border-white/10 bg-slate-950/75 p-6 md:p-8">
      <div className="h-3 w-24 animate-pulse rounded-full bg-slate-700" />
      <div className="h-8 w-64 animate-pulse rounded-full bg-slate-800" />
      <div className="h-12 w-full max-w-md animate-pulse rounded-xl bg-slate-800" />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="h-72 animate-pulse rounded-2xl bg-slate-800" />
        ))}
      </div>
    </div>
  );
}
