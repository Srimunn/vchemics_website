import { Camera, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  label?: string;
  className?: string;
  icon?: "camera" | "plus";
}

export function ImagePlaceholder({
  label = "Add Real Photo",
  className,
  icon = "camera",
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col items-center justify-center border-2 border-dashed border-border/80 bg-muted/30 p-6 text-center transition-all duration-300 hover:border-brand-blue/50 hover:bg-muted/50 select-none",
        className,
      )}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-blue/10 text-brand-blue border border-brand-blue/20 shadow-2xs group-hover:scale-105 transition-transform">
          {icon === "plus" ? <Plus className="h-5 w-5" /> : <Camera className="h-5 w-5" />}
        </div>
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
      </div>
    </div>
  );
}
