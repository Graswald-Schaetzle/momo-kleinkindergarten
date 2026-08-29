/* Baustellen-Animation: Der Bagger tuckert von links ins Bild, fährt hinter
   dem gestreiften Schild vorbei und verlässt es nach rechts. Alles freigestellt
   auf dem Altrosa-Hintergrund der Seite (kein Rahmen, kein Kasten). */

import schild from "@/assets/bau-schild.png.asset.json";
import bagger from "@/assets/bau-bagger.png.asset.json";

export function BaustellenAnimation({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[420px] overflow-hidden ${className}`}
      role="img"
      aria-label="Ein Bagger tuckert von links hinter einem Baustellenschild vorbei"
    >
      <style>{`
        @keyframes momo-bagger-fahrt {
          0%   { transform: translateX(-140%) translateY(0); }
          48%  { transform: translateX(30%) translateY(-1px); }
          100% { transform: translateX(230%) translateY(0); }
        }
        @keyframes momo-bagger-tuckern {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25%      { transform: translateY(-1.5px) rotate(-0.6deg); }
          75%      { transform: translateY(1.5px) rotate(0.6deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .momo-bagger, .momo-bagger-inner { animation: none !important; }
        }
      `}</style>

      <div className="relative h-[120px] sm:h-[160px]">
        {/* Bagger – fährt hinter dem Schild vorbei */}
        <div
          className="momo-bagger absolute bottom-[6%] left-0 z-0 w-[46%]"
          style={{ animation: "momo-bagger-fahrt 11s linear infinite" }}
        >
          <div
            className="momo-bagger-inner"
            style={{ animation: "momo-bagger-tuckern 0.45s ease-in-out infinite" }}
          >
            <img src={bagger.url} alt="" className="h-auto w-full" />
          </div>
        </div>

        {/* Schild – steht mittig im Vordergrund */}
        <img
          src={schild.url}
          alt=""
          className="absolute bottom-0 left-1/2 z-10 w-[46%] -translate-x-1/2"
        />
      </div>
    </div>
  );
}
