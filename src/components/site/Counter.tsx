import { useEffect, useRef, useState } from "react";

export function Counter({
  value,
  suffix = "+",
  duration = 1600,
}: {
  value: number | string;
  suffix?: string;
  duration?: number;
}) {
  const numValue = typeof value === "number" ? value : parseFloat(String(value)) || 0;
  const inferredSuffix =
    typeof value === "string" && (value.includes("%") || value.includes("+"))
      ? value.replace(/^[0-9.]+/, "")
      : suffix;

  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        const start = performance.now();
        let raf = 0;
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(numValue * eased));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [numValue, duration]);

  return (
    <span ref={ref}>
      {n}
      {inferredSuffix}
    </span>
  );
}
