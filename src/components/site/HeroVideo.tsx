import { useEffect, useRef } from "react";
import { preload } from "react-dom";
import heroPoster from "@/assets/hero-poster-1280.webp";

/**
 * Picture first, video second.
 * The poster (last frame of the video: the finished building) paints immediately and is the
 * LCP element. The video file is only requested after the page has finished loading, downloads
 * in the background (on phones too), and starts playing over the poster when ready.
 * One element on purpose: a separate <video> layered over an <img> is reported as a new,
 * later LCP once it starts playing.
 */
export function HeroVideo({
  src = "/final.mp4",
  className = "absolute inset-0 h-full w-full object-cover",
}: {
  src?: string;
  className?: string;
}) {
  // React hoists this to the top of <head> (ahead of the module preloads); a <video poster>
  // is invisible to the browser's preload scanner, so without it the poster is fetched late.
  preload(heroPoster, { as: "image", fetchPriority: "high" });
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    // Autoplay can be refused (e.g. iOS Low Power Mode): start on the first user gesture instead.
    const playOnGesture = () => {
      video.play().catch(() => {});
      window.removeEventListener("click", playOnGesture);
      window.removeEventListener("scroll", playOnGesture);
      window.removeEventListener("touchstart", playOnGesture);
    };

    const start = () => {
      video.src = src;
      video.load();
      video.play().catch(() => {
        window.addEventListener("click", playOnGesture, { once: true });
        window.addEventListener("scroll", playOnGesture, { once: true, passive: true });
        window.addEventListener("touchstart", playOnGesture, { once: true, passive: true });
      });
    };

    let timer: ReturnType<typeof setTimeout> | undefined;
    const startAfterLoad = () => {
      timer = setTimeout(start, 300);
    };

    if (document.readyState === "complete") startAfterLoad();
    else window.addEventListener("load", startAfterLoad, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", startAfterLoad);
      window.removeEventListener("click", playOnGesture);
      window.removeEventListener("scroll", playOnGesture);
      window.removeEventListener("touchstart", playOnGesture);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      poster={heroPoster}
      muted
      autoPlay
      loop
      playsInline
      preload="none"
      aria-hidden
      className={className}
    >
      <track kind="captions" src="/captions/hero.vtt" srcLang="en" label="English" />
    </video>
  );
}
