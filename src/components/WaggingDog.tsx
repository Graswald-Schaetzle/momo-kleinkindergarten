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
      {/* Hund – Körper steht still */}
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
          clipPath: "polygon(22% 0, 100% 0, 100% 100%, 22% 100%)",
        }}
      />
      {/* Schwanz – wackelt um die Ansatzstelle */}
      <img
        src={dogImg}
        alt=""
        aria-hidden
        loading="lazy"
        style={{
          position: "absolute",
          left: 0,
          top: "1%",
          width: "95.6%",
          height: "auto",
          clipPath: "polygon(0 38%, 30% 38%, 30% 92%, 0 92%)",
          transformOrigin: "25% 64%",
          animation: "dog-tail-wag 0.9s ease-in-out infinite alternate",
        }}
      />
      <style>{`
        @keyframes dog-tail-wag {
          0%   { rotate: -7deg; }
          100% { rotate: 8deg; }
        }
      `}</style>
    </div>
  );
}
