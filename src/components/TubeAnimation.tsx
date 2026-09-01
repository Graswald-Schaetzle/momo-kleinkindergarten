/* Aquarell-Tube als Video: Die Creme fließt kontinuierlich aus der Tube,
   bis diese leer ist und die Creme als Häufchen daneben liegt.
   Das Video läuft einmal durch und bleibt am Ende stehen. */

import tubeVideo from "@/assets/tube-animation.webm";

export function TubeAnimation({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[420px] ${className}`}
      role="img"
      aria-label="Eine Cremetube wird nach und nach leer gedrückt, bis die Creme als Häufchen daneben liegt"
    >
      <svg className="absolute size-0" aria-hidden="true">
        <defs>
          <filter id="tube-bg-match" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="
                1.0087 0      0      0 0
                0      1.0048 0      0 0
                0      0      1.0148 0 0
                0      0      0      1 0"
            />
          </filter>
        </defs>
      </svg>
      <video
        src={tubeVideo}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="h-auto w-full"
        style={{ filter: "url(#tube-bg-match)" }}
      />
    </div>
  );
}
