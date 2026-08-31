/* Baustellen-Schild: Das gestreifte Schild bleibt als Zeichnung mittig stehen,
   ohne Animation. Freigestellt auf dem Altrosa-Hintergrund der Seite. */

import schild from "@/assets/bau-schild.png.asset.json";

export function BaustellenAnimation({ className = "" }: { className?: string }) {
  return (
    <div
      className={`mx-auto w-full max-w-[420px] ${className}`}
      role="img"
      aria-label="Gestreiftes Baustellenschild"
    >
      <img
        src={schild.url}
        alt=""
        className="mx-auto h-[120px] w-auto object-contain sm:h-[160px]"
      />
    </div>
  );
}
