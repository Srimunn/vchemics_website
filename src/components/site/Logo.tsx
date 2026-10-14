import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logo272 from "@/assets/logo-272.webp";
import logo408 from "@/assets/logo-408.webp";
import logo544 from "@/assets/logo-544.webp";

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
      aria-label="Vchemics India Solutions — home"
    >
      <img
        src={logo408}
        srcSet={`${logo272} 272w, ${logo408} 408w, ${logo544} 544w`}
        sizes={
          compact
            ? "(min-width: 768px) 97px, (min-width: 640px) 87px, 78px"
            : "(min-width: 768px) 136px, (min-width: 640px) 117px, 97px"
        }
        alt="Vchemics India Solutions Logo"
        className={cn(
          "w-auto max-w-[240px] sm:max-w-[320px] object-contain transition-all duration-300 group-hover:scale-105",
          compact ? "h-8 sm:h-9 md:h-10" : "h-10 sm:h-12 md:h-14",
          onDark && "brightness-125 contrast-110 drop-shadow-[0_0_14px_rgba(255,255,255,0.85)]",
          className,
        )}
        width={408}
        height={168}
      />
    </Link>
  );
}
