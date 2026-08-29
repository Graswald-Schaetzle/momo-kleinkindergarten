/* Aquarell-Tube als Video: Die Creme fließt kontinuierlich aus der Tube,
   bis diese leer ist und die Creme als Häufchen daneben liegt.
   Das Video läuft einmal durch und bleibt am Ende stehen. */

import tubeVideo from "@/assets/tube-animation.mp4.asset.json";

export function TubeAnimation({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[420px] ${className}`}
      role="img"
      aria-label="Eine Cremetube wird nach und nach leer gedrückt, bis die Creme als Häufchen daneben liegt"
    >
      <video
        src={tubeVideo.url}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="h-auto w-full"
      />
    </div>
  );
}
