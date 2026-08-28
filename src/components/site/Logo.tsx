import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({
  onDark = false,
  compact = false,
  className,
}: {
  onDark?: boolean;
  compact?: boolean;
  className?: string;
}) {
  return (
    <Link
      to="/"
      className="group inline-flex items-center transition-opacity hover:opacity-90"
      aria-label="VChemics India Solutions — home"
    >
      <img
        src="/image.png"
        alt="VChemics India Solutions Logo"
        className={cn(
          "w-auto max-w-[240px] sm:max-w-[320px] object-contain transition-all duration-300 group-hover:scale-105",
          compact ? "h-10 sm:h-12 md:h-13" : "h-14 sm:h-18 md:h-20",
          onDark && "brightness-125 contrast-110 drop-shadow-[0_0_14px_rgba(255,255,255,0.85)]",
          className,
        )}
        width={360}
        height={96}
      />
    </Link>
  );
}
