/* Zwei Hände reichen sich von den Seiten eine Windel – gezeichnet im Stil
   der Werte-Illustrationen. Die Windel wandert von der linken in die rechte
   Hand, die sie dann mitnimmt. */

import handLeft from "@/assets/pflege-hand-links.png";
import handRight from "@/assets/pflege-hand-rechts.png";
import diaper from "@/assets/pflege-windel.png";

export function DiaperHandover({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[520px] ${className}`}
      role="img"
      aria-label="Zwei Hände reichen einander eine Windel"
    >
      <div className="relative aspect-[2/1]">
        {/* linke Hand */}
        <img
          src={handLeft}
          alt=""
          aria-hidden
          loading="lazy"
          width={1024}
          height={512}
          className="absolute left-0 top-1/2 w-[52%] -translate-y-1/2 mix-blend-multiply opacity-90 diaper-hand-left"
        />
        {/* rechte Hand */}
        <img
          src={handRight}
          alt=""
          aria-hidden
          loading="lazy"
          width={1024}
          height={512}
          className="absolute right-0 top-1/2 w-[52%] -translate-y-1/2 mix-blend-multiply opacity-90 diaper-hand-right"
        />
        {/* Windel */}
        <img
          src={diaper}
          alt=""
          aria-hidden
          loading="lazy"
          width={512}
          height={512}
          className="absolute left-[22%] top-[26%] w-[20%] mix-blend-multiply diaper-move"
        />
      </div>

      <style>{`
        @keyframes diaper-move {
          0%   { transform: translate(0, 0) rotate(-4deg); opacity: 1; }
          35%  { transform: translate(140%, -14%) rotate(4deg); opacity: 1; }
          60%  { transform: translate(230%, 0) rotate(0deg); opacity: 1; }
          85%  { transform: translate(330%, 6%) rotate(8deg); opacity: 0; }
          100% { transform: translate(0, 0) rotate(-4deg); opacity: 0; }
        }
        @keyframes diaper-hand-left {
          0%, 40%  { transform: translate(0, -50%); }
          70%,100% { transform: translate(-6%, -50%); }
        }
        @keyframes diaper-hand-right {
          0%, 30%   { transform: translate(0, -50%); }
          60%       { transform: translate(-3%, -50%); }
          85%, 100% { transform: translate(10%, -50%); }
        }
        .diaper-move  { animation: diaper-move 6s ease-in-out infinite; }
        .diaper-hand-left  { animation: diaper-hand-left 6s ease-in-out infinite; }
        .diaper-hand-right { animation: diaper-hand-right 6s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .diaper-move, .diaper-hand-left, .diaper-hand-right { animation: none; }
        }
      `}</style>
    </div>
  );
}
