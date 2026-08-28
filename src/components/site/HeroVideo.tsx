import { useEffect, useRef } from "react";

export function HeroVideo({
  src = "/final.mp4",
  poster,
  className = "absolute inset-0 h-full w-full object-cover",
}: {
  src?: string;
  poster?: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const tryPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay policy: attach one-time listener to start playing on first user gesture
          const handleFirstInteraction = () => {
            video.play().catch(() => {});
            window.removeEventListener("click", handleFirstInteraction);
            window.removeEventListener("scroll", handleFirstInteraction);
            window.removeEventListener("touchstart", handleFirstInteraction);
          };
          window.addEventListener("click", handleFirstInteraction, { once: true });
          window.addEventListener("scroll", handleFirstInteraction, { once: true });
          window.addEventListener("touchstart", handleFirstInteraction, { once: true });
        });
      }
    };

    tryPlay();
  }, [src]);

  return (
    <video
      ref={videoRef}
      poster={poster}
      muted
      autoPlay
      loop
      playsInline
      preload="auto"
      className={className}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  );
}
