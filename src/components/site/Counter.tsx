import { useEffect, useRef } from "react";

// The final value is always the element's text, so SSR output and crawlers see the
// real number. The count-up is drawn by a ::after overlay (.counter-animating in
// styles.css) that reads data-count; pseudo-element text is not indexed.
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

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let raf = 0;
    const finish = () => {
      el.classList.remove("counter-animating");
      el.removeAttribute("data-count");
    };
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        const start = performance.now();
        el.setAttribute("data-count", `0${inferredSuffix}`);
        el.classList.add("counter-animating");
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.setAttribute("data-count", `${Math.round(numValue * eased)}${inferredSuffix}`);
          if (p < 1) raf = requestAnimationFrame(tick);
          else finish();
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      finish();
    };
  }, [numValue, inferredSuffix, duration]);

  return (
    <span ref={ref} className="counter tabular-nums">
      {`${numValue}${inferredSuffix}`}
    </span>
  );
}
