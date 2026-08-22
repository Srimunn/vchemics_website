import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({
  onDark = false,
  className,
}: {
  onDark?: boolean;
  className?: string;
}) {
  return (
    <Link
      to="/"
      className="group inline-flex items-center transition-opacity hover:opacity-90 translate-y-2 sm:translate-y-2.5"
      aria-label="V Chemics India Solutions — home"
    >
      <img
        src="/image.png"
        alt="V Chemics India Solutions Logo"
        className={cn(
          "h-16 sm:h-20 md:h-24 w-auto max-w-[280px] sm:max-w-[360px] object-contain transition-transform duration-200 group-hover:scale-105",
          onDark && "brightness-125 contrast-110 drop-shadow-[0_0_14px_rgba(255,255,255,0.85)]",
          className,
        )}
        width={360}
        height={96}
      />
    </Link>
  );
}
