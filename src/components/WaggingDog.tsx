/* Sitzender, wacher Weimaraner im Aquarell-Stil der Startseite.
   Kissen und Hund sind getrennte Ebenen: das Kissen steht still,
   nur der Hund wackelt (wedelt) und hechelt leicht. */

import dogImg from "@/assets/wagging-dog-only.png";
import cushionImg from "@/assets/dog-cushion.png";

export function WaggingDog({
  className = "",
  size = 200,
}: {
  className?: string;
  size?: number;
}) {
  const height = (size * 1134) / 928;
  return (
    <div
      className={className}
      style={{
        width: size,
        height,
        position: "relative",
      }}
      role="img"
      aria-label="Wacher, sitzender Hund mit wedelndem Schwanz"
    >
      {/* Kissen – statisch */}
      <img
        src={cushionImg}
        alt=""
        aria-hidden
        loading="lazy"
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          height: "auto",
        }}
      />
      {/* Hund – statisch */}
      <img
        src={dogImg}
        alt="Sitzender Weimaraner"
        loading="lazy"
        style={{
          position: "absolute",
          left: 0,
          top: "1%",
          width: "95.6%",
          height: "auto",
          filter: "drop-shadow(0 2px 6px rgba(43,27,38,0.08))",
        }}
      />
    </div>
  );
}
