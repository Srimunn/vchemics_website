import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlaceholderBadgeProps {
  className?: string;
  label?: string;
}

export function PlaceholderBadge({
  className,
  label = "Representative Image",
}: PlaceholderBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-amber-500/90 text-amber-950 px-2.5 py-0.5 font-mono text-[0.65rem] font-bold uppercase tracking-wider backdrop-blur-md shadow-md border border-amber-400/40",
        className,
      )}
    >
      <AlertCircle className="h-3 w-3 text-amber-950" />
      <span>{label}</span>
    </span>
  );
}
