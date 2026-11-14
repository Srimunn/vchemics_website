import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Visible in the server HTML, so crawlers and slow phones see the content before JavaScript loads.
  const [shown, setShown] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const el = ref.current;
    if (!el) return;

    // Content already on screen stays put; only blocks below the fold get the fade-in.
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    setShown(false);

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.01, rootMargin: "120px 0px 120px 0px" },
    );
    io.observe(el);

    // Guaranteed fallback: reveal content after 150ms regardless of observer
    const fallback = setTimeout(() => {
      setShown(true);
    }, 150);

    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  const Comp = Tag as "div";

  return (
    <Comp
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-500 ease-out",
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
