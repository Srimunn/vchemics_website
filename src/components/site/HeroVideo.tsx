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
    video.currentTime = 0;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.log("Autoplay was prevented, user interaction required:", err);
      });
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      autoPlay
      playsInline
      preload="auto"
      className={className}
    />
  );
}
