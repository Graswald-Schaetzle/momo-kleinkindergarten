/* Zwei Hände im Wasserfarben-Stil: Die linke Hand kommt mit einer Windel
   herein, die rechte nimmt sie auf der Mitte entgegen und verschwindet
   wieder mit der Windel. Transparente PNGs, damit sie nahtlos im Altrosa-Grund liegen. */

import handLeft from "@/assets/pflege-hand-links.png";
import handRight from "@/assets/pflege-hand-rechts.png";
import diaper from "@/assets/pflege-windel.png";

export function DiaperHandover({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[560px] ${className}`}
      role="img"
      aria-label="Eine Hand reicht eine Windel weiter, die andere nimmt sie auf"
    >
      <div className="relative aspect-[2/1]">
        {/* linke Hand – kommt von links herein und verschwindet wieder nach links */}
        <img
          src={handLeft}
          alt=""
          aria-hidden
          loading="lazy"
          width={1152}
          height={576}
          className="dh-left absolute left-0 top-1/2 w-[52%] -translate-y-1/2"
        />
        {/* rechte Hand – kommt von rechts herein, nimmt die Windel und verschwindet nach rechts */}
        <img
          src={handRight}
          alt=""
          aria-hidden
          loading="lazy"
          width={1152}
          height={576}
          className="dh-right absolute right-0 top-1/2 w-[52%] -translate-y-1/2"
        />
        {/* Windel – wandert von der linken in die rechte Hand und geht mit ihr ab */}
        <img
          src={diaper}
          alt=""
          aria-hidden
          loading="lazy"
          width={816}
          height={816}
          className="dh-diaper absolute left-[34%] top-[30%] w-[15%]"
        />
      </div>

      <style>{`
        /* 8s loop:
           0–15%  linke Hand kommt herein (mit Windel)
           15–30% rechte Hand kommt von rechts herein
           30–50% Windel wandert zur rechten Hand
           50–68% rechte Hand verschwindet mit der Windel nach rechts
           68–85% linke Hand verschwindet nach links
           85–100% Pause, dann Reset */
        @keyframes dh-left {
          0%   { transform: translateX(-115%) translateY(-50%); }
          15%  { transform: translateX(0) translateY(-50%); }
          68%  { transform: translateX(0) translateY(-50%); }
          85%  { transform: translateX(-115%) translateY(-50%); }
          100% { transform: translateX(-115%) translateY(-50%); }
        }
        @keyframes dh-right {
          0%   { transform: translateX(115%) translateY(-50%); }
          30%  { transform: translateX(0) translateY(-50%); }
          50%  { transform: translateX(0) translateY(-50%); }
          68%  { transform: translateX(115%) translateY(-50%); }
          100% { transform: translateX(115%) translateY(-50%); }
        }
        @keyframes dh-diaper {
          0%   { transform: translateX(0) rotate(-4deg); opacity: 0; }
          15%  { transform: translateX(0) rotate(-4deg); opacity: 1; }
          30%  { transform: translateX(0) rotate(-2deg); opacity: 1; }
          50%  { transform: translateX(135%) rotate(3deg); opacity: 1; }
          68%  { transform: translateX(430%) rotate(8deg); opacity: 0; }
          100% { transform: translateX(0) rotate(-4deg); opacity: 0; }
        }
        .dh-left   { animation: dh-left 8s ease-in-out infinite; }
        .dh-right  { animation: dh-right 8s ease-in-out infinite; }
        .dh-diaper { animation: dh-diaper 8s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .dh-left, .dh-right, .dh-diaper { animation: none; }
          .dh-left  { transform: translateX(0) translateY(-50%); }
          .dh-right { transform: translateX(0) translateY(-50%); }
          .dh-diaper { transform: translateX(60%) rotate(0deg); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
