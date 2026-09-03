/* Betonmischer: Aquarell-LKW ohne Trommel als Basis. Die Trommel ist eine
   Maske (aus dem Originalbild zugeschnitten), in der weiche Aquarell-Streifen
   endlos seitlich durchlaufen – so wirkt es, als drehe sich die Trommel. */

import basis from "@/assets/mischer-basis.png.asset.json";
import trommel from "@/assets/mischer-trommel.png.asset.json";

export function MischerAnimation({ className = "" }: { className?: string }) {
  return (
    <div
      className={`mx-auto w-full max-w-[420px] ${className}`}
      role="img"
      aria-label="Aquarellzeichnung eines Betonmischers mit sich drehender Trommel"
    >
      <div className="relative w-full" style={{ aspectRatio: "1200 / 896" }}>
        {/* Trommel: Streifen laufen in der ausgeschnittenen Silhouette */}
        <div
          aria-hidden
          className="mischer-trommel absolute"
          style={{
            left: "6.67%",
            top: "8.93%",
            width: "55.83%",
            height: "56.36%",
            WebkitMaskImage: `url(${trommel.url})`,
            maskImage: `url(${trommel.url})`,
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />
        <img
          src={basis.url}
          alt=""
          className="absolute inset-0 h-full w-full object-contain"
        />
      </div>
    </div>
  );
}
