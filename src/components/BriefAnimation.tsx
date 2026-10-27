/* Brief-Animation: Ein geschlossener Umschlag öffnet sich beim Klick,
   verschwindet dann komplett und macht Platz für den Brief auf
   zerknittertem Papier mit Sternen, Klebeband und Büroklammer – an der
   Klammer hängt ein Foto der jeweiligen Person. Wiederverwendbar für
   jedes Teammitglied, nur Umschlagfarbe, Foto und Text unterscheiden sich. */

import { useState } from "react";
import { MomoLogo } from "@/components/MomoLogo";
import briefpapier from "@/assets/briefpapier-gefaltet.jpg.asset.json";

/* Deterministischer Pseudo-Zufall pro Zeichen, damit die Handschrift
   bei jedem Render identisch bleibt (kein Hydration-Mismatch). */
function seeded(seed: number) {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

/* Rendert Text wortweise mit leichten Schwankungen in Neigung, Höhe,
   Größe und Tintendeckung – wie echte Handschrift mit Kugelschreiber. */
function Handwritten({ text, seedBase }: { text: string; seedBase: number }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, wi) => {
        const r1 = seeded(seedBase + wi * 3 + 1);
        const r2 = seeded(seedBase + wi * 3 + 2);
        const r3 = seeded(seedBase + wi * 3 + 3);
        const rotate = (r1 - 0.5) * 2.4; // ±1.2°
        const lift = (r2 - 0.5) * 0.09; // ±0.045em
        const scale = 0.97 + r3 * 0.06; // 0.97–1.03
        const ink = 0.82 + r2 * 0.18; // wechselnder Druck des Stifts
        return (
          <span
            key={`${wi}-${word.slice(0, 6)}`}
            className="inline-block will-change-transform"
            style={{
              transform: `rotate(${rotate}deg) translateY(${lift}em) scale(${scale})`,
              opacity: ink,
              marginRight: "0.24em",
            }}
          >
            {word}
          </span>
        );
      })}
    </>
  );
}

export interface BriefAnimationProps {
  className?: string;
  name: string;
  role: string;
  photoSrc: string;
  photoAlt: string;
  photoWidthClassName?: string;
  paragraphs: string[];
  envelopeClosedSrc: string;
  envelopeOpenSrc: string;
  envelopeOpenFrontSrc: string;
}

export function BriefAnimation({
  className = "",
  name,
  role,
  photoSrc,
  photoAlt,
  photoWidthClassName = "w-20 sm:w-24",
  paragraphs,
  envelopeClosedSrc,
  envelopeOpenSrc,
  envelopeOpenFrontSrc,
}: BriefAnimationProps) {
  const [open, setOpen] = useState(false);

  /* Geöffneter Zustand: nur der Brief auf dem Papier, Umschlag ist weg. */
  if (open) {
    return (
      <div className={`pt-2 sm:pt-3 ${className}`}>
        <div className="mx-auto mb-2 w-full max-w-3xl sm:mb-3">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Zurück zum Umschlag"
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink/70 transition-colors hover:text-ink"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
          </button>
        </div>

        <div className="brief-letter relative mx-auto w-full max-w-3xl">
          <img src={briefpapier.url} alt="Gefalteter Briefbogen" className="block w-full" />

          {/* Foto hängt wie an einer Klammer oben auf dem Papier. */}
          <figure
            className={`absolute left-1/2 top-[3%] z-10 -translate-x-1/2 rotate-[2deg] ${photoWidthClassName}`}
          >
            <img
              src={photoSrc}
              alt={photoAlt}
              loading="lazy"
              className="block h-auto w-full drop-shadow-[0_4px_6px_rgba(43,27,38,0.28)]"
            />
          </figure>

          {/* Textbereich auf dem Papier, bei Bedarf scrollbar. */}
          <div
            className="absolute left-[6%] right-[6%] z-[5] overflow-y-auto overflow-x-hidden"
            style={{ top: "30%", bottom: "5%" }}
          >
            <div className="pen-ink space-y-2 font-handwritten text-left text-sm leading-snug text-[#26303c] sm:text-base md:text-lg">
              {paragraphs.map((text, i) => (
                <p key={text.slice(0, 24)} className="text-left" lang="de">
                  <Handwritten text={text} seedBase={i * 1000} />
                </p>
              ))}
            </div>
          </div>

          {/* Derselbe Stempel wie auf dem Umschlag, unten auf dem Papier. */}
          <div className="brief-stamp absolute bottom-[2%] left-1/2 z-10 w-16 text-ink sm:w-20">
            <div className="brief-stamp-ring">
              <MomoLogo showSubtitle className="w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* Geschlossener Umschlag mit Spitze und Stempel. */
  return (
    <div className={`pt-20 sm:pt-20 ${className}`}>
      <div className="relative z-40 mb-4 text-center sm:mb-6">
        <p className="font-display text-base italic text-ink sm:text-lg">{"\n"}</p>
        <p className="font-sans text-xs text-ink/70 sm:text-sm">
          Drücke auf den Umschlag, um mehr zu erfahren.
        </p>
      </div>

      <div
        className="relative mx-auto aspect-[100/67] w-[78%] max-w-2xl cursor-pointer sm:w-full"
        role="button"
        tabIndex={0}
        aria-label="Briefumschlag öffnen"
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
          }
        }}
      >
        <div className="absolute bottom-0 left-1/2 z-0 aspect-[995/627] w-[104%] -translate-x-1/2">
          <img
            src={envelopeOpenSrc}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute bottom-0 left-0 w-full"
          />
        </div>

        <div className="absolute bottom-0 left-1/2 z-20 w-[104%] -translate-x-1/2">
          <img
            src={envelopeOpenFrontSrc}
            alt=""
            aria-hidden
            loading="lazy"
            className="block w-full"
          />
          <p className="absolute bottom-[58%] left-1/2 w-full -translate-x-1/2 text-center font-display font-medium leading-snug tracking-[0.12em] text-ink/70 text-sm sm:text-base">
            {name}
            <br />
            {role}
          </p>
          <div className="brief-stamp absolute bottom-[18%] left-1/2 w-[44%] text-ink">
            <div className="brief-stamp-ring">
              <MomoLogo showSubtitle className="w-full" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 z-30 w-[104%] -translate-x-1/2">
          <img
            src={envelopeClosedSrc}
            alt="Geschlossener Briefumschlag"
            loading="lazy"
            className="block w-full"
          />
          <p className="absolute bottom-[58%] left-1/2 w-full -translate-x-1/2 text-center font-display font-medium leading-snug tracking-[0.12em] text-ink/70 text-sm sm:text-base">
            {name}
            <br />
            {role}
          </p>
          <div className="brief-stamp absolute bottom-[7%] left-1/2 w-[44%] text-ink">
            <div className="brief-stamp-ring">
              <MomoLogo showSubtitle className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
