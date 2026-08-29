/* Aquarell-Tube: Die volle Tube wird nach und nach leerer, bis die Creme
   vollständig herausgedrückt ist – als reine Bildsequenz ohne Hintergrund. */

import tube1 from "@/assets/tube-1.png.asset.json";
import tube2 from "@/assets/tube-2.png.asset.json";
import tube3 from "@/assets/tube-3.png.asset.json";

const frames = [tube1.url, tube2.url, tube3.url];

export function TubeAnimation({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[420px] ${className}`}
      role="img"
      aria-label="Eine Cremetube wird nach und nach leer gedrückt"
    >
      <div className="relative aspect-[2100/760]">
        {frames.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden
            loading="lazy"
            width={2100}
            height={760}
            className={`tube-frame tube-frame-${i + 1} absolute inset-0 h-full w-full object-contain`}
          />
        ))}
      </div>
    </div>
  );
}
