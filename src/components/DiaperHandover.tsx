/* Zwei Hände im Wasserfarben-Stil: Die linke Hand kommt mit einer
   WELEDA-Tube herein, die rechte nimmt sie auf der Mitte entgegen und
   verschwindet wieder mit der Tube – danach verschwindet auch die linke.
   Transparente PNGs, damit sie nahtlos im Altrosa-Grund liegen. */

import handLeft from "@/assets/pflege-hand-links.png";
import handRight from "@/assets/pflege-hand-rechts.png";
import weledaTube from "@/assets/weleda-tube.png";

export function DiaperHandover({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[560px] ${className}`}
      role="img"
      aria-label="Eine Hand reicht eine WELEDA-Tube weiter, die andere nimmt sie auf"
    >
      <div className="relative aspect-[2/1]">
        {/* linke Hand – kommt von links herein und verschwindet wieder nach links */}
        <img
          src={handLeft}
          alt=""
          aria-hidden
          loading="lazy"
          width={1340}
          height={655}
          className="dh-left absolute left-0 top-1/2 w-[52%] -translate-y-1/2"
        />
        {/* rechte Hand – kommt von rechts herein, nimmt die Tube und verschwindet nach rechts */}
        <img
          src={handRight}
          alt=""
          aria-hidden
          loading="lazy"
          width={1347}
          height={713}
          className="dh-right absolute right-0 top-1/2 w-[52%] -translate-y-1/2"
        />
        {/* WELEDA-Tube – wandert von der linken in die rechte Hand und geht mit ihr ab */}
        <img
          src={weledaTube}
          alt=""
          aria-hidden
          loading="lazy"
          width={540}
          height={1251}
          className="dh-tube absolute left-[38%] top-[16%] w-[7%]"
        />
      </div>

      <style>{`
        /* 8s loop:
           0–15%  linke Hand kommt herein (mit Tube)
           15–30% rechte Hand kommt von rechts herein
           30–50% Tube wandert zur rechten Hand
           50–68% rechte Hand verschwindet mit der Tube nach rechts
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
        @keyframes dh-tube {
          0%   { transform: translateX(0) rotate(-6deg); opacity: 0; }
          15%  { transform: translateX(0) rotate(-6deg); opacity: 1; }
          30%  { transform: translateX(0) rotate(-3deg); opacity: 1; }
          50%  { transform: translateX(290%) rotate(4deg); opacity: 1; }
          68%  { transform: translateX(950%) rotate(8deg); opacity: 0; }
          100% { transform: translateX(0) rotate(-6deg); opacity: 0; }
        }
        .dh-left  { animation: dh-left 8s ease-in-out infinite; }
        .dh-right { animation: dh-right 8s ease-in-out infinite; }
        .dh-tube  { animation: dh-tube 8s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .dh-left, .dh-right, .dh-tube { animation: none; }
          .dh-left  { transform: translateX(0) translateY(-50%); }
          .dh-right { transform: translateX(0) translateY(-50%); }
          .dh-tube  { transform: translateX(120%) rotate(0deg); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
