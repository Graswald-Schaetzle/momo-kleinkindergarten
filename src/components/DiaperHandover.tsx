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
          className="absolute left-0 top-1/2 w-[52%] -translate-y-1/2"
        />
        {/* rechte Hand – kommt von rechts herein, nimmt die Tube und verschwindet nach rechts */}
        <img
          src={handRight}
          alt=""
          aria-hidden
          loading="lazy"
          width={1347}
          height={713}
          className="absolute right-0 top-1/2 w-[52%] -translate-y-1/2"
        />
        {/* WELEDA-Tube – wandert von der linken in die rechte Hand und geht mit ihr ab */}
        <img
          src={weledaTube}
          alt=""
          aria-hidden
          loading="lazy"
          width={540}
          height={1251}
          className="absolute left-[38%] top-[16%] w-[7%] rotate-[-6deg]"
        />
      </div>
    </div>
  );
}
