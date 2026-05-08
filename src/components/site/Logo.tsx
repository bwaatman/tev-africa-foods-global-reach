import { Leaf } from "lucide-react";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-cta shadow-glow">
        <Leaf className="h-5 w-5 text-primary-foreground" strokeWidth={2.2} />
        <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-accent ring-2 ring-background" />
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-display text-lg font-medium tracking-tight ${light ? "text-white" : "text-foreground"}`}>
          TEV Africa
        </span>
        <span className={`text-[10px] font-medium uppercase tracking-[0.18em] ${light ? "text-white/70" : "text-muted-foreground"}`}>
          Foods
        </span>
      </div>
    </div>
  );
}
