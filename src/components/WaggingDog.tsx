/* Sitzender, wacher Weimaraner im Aquarell-Stil der Startseite.
   Das Bild ist ein generiertes Aquarell; der Schwanz wedelt per CSS. */

import dogImg from "@/assets/wagging-dog.png";

export function WaggingDog({
  className = "",
  size = 200,
}: {
  className?: string;
  size?: number;
}) {
  const height = (size * 1077) / 621;
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
      <img
        src={dogImg}
        alt="Sitzender Weimaraner"
        width={size}
        height={height}
        loading="lazy"
        className="dog-wag"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          transformOrigin: "80% 90%",
          animation: "dog-body-sway 1.8s ease-in-out infinite alternate",
        }}
      />
      <style>{`
        @keyframes dog-body-sway {
          0%   { transform: rotate(-1.5deg) translateY(0); }
          100% { transform: rotate(1.5deg) translateY(-2px); }
        }
        .dog-wag {
          filter: drop-shadow(0 2px 6px rgba(43,27,38,0.08));
        }
      `}</style>
    </div>
  );
}
