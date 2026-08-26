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
      {/* Hund – wackelt und hechelt */}
      <img
        src={dogImg}
        alt="Sitzender Weimaraner"
        loading="lazy"
        className="dog-wag"
        style={{
          position: "absolute",
          left: 0,
          top: "1%",
          width: "95.6%",
          height: "auto",
          transformOrigin: "50% 92%",
          animation:
            "dog-wag 1.6s ease-in-out infinite alternate, dog-pant 0.32s ease-in-out infinite alternate",
        }}
      />
      <style>{`
        @keyframes dog-wag {
          0%   { rotate: -1.8deg; }
          100% { rotate: 1.8deg; }
        }
        @keyframes dog-pant {
          0%   { translate: 0 0; }
          100% { translate: 0 2.5px; }
        }
        .dog-wag {
          filter: drop-shadow(0 2px 6px rgba(43,27,38,0.08));
        }
      `}</style>
    </div>
  );
}
