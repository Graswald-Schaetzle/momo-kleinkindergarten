/* Brief-Animation: Ein geschlossener Umschlag öffnet seine Klappe,
   der Brief fährt ein Stück hoch und bleibt sichtbar IM Umschlag stehen
   (zwischen Klappe und Vordertasche), mit eigenem Scrollbereich für den
   Text. Am Brief hängt mit einer Büroklammer ein Foto von Olivia. */

import { useState } from "react";
import briefmarke from "@/assets/briefmarke-klammer.png";
import { MomoLogo } from "@/components/MomoLogo";
import umschlagZu from "@/assets/umschlag-zu.png";
import umschlagOffen from "@/assets/umschlag-offen.png";
import umschlagOffenFront from "@/assets/umschlag-offen-front.png";

const paragraphs = [
  "Ich bin Olivia. Gründerin von Momo und ab Januar 2027 mit ganzem Herzen für eure Kinder da.",
  "Ich bin staatlich anerkannte Erzieherin (B.A. Sozialwesen) und ausgebildete Waldorfpädagogin. Meine mehrjährige Erfahrungen im Kindergarten-Alltag habe ich unter anderem in Frankreich und Berlin gesammelt. Die Waldorf Pädagogik liegt mir sehr am Herzen gleichzeitig ist es mir wichtig, sie modern zu denken und zu leben, im Einklang mit dem, was wir heute über kindliche Entwicklung wissen.",
  "Der Wunsch, irgendwann eine eigene kleine Krippe zu gründen, hat mich lange begleitet. Jetzt wird er wahr und das an einem ganz besonderen Ort: im Haus meines Großvaters, das ich liebevoll für Momo herrichte. Für mich ist Momo deshalb mehr als ein Projekt, es ist ein echtes Familienprojekt, in das viele persönliche Erinnerungen und viel Herzblut fließen.",
  "Mir ist es ein Anliegen, dass kleine Kinder behutsam aufwachsen dürfen, in einer kleinen Gruppe, und in ihrem eigenen Tempo.",
  "Ich freue mich euch und eure Kinder kennenzulernen!",
];

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

export function BriefAnimation({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`pt-20 sm:pt-32 ${className}`}>
      {!open && (
        <div className="relative z-40 mb-4 text-center sm:mb-6">
          <p className="font-display text-base italic text-ink sm:text-lg">
            {"\n"}
          </p>
          <p className="font-sans text-xs text-ink/70 sm:text-sm">
            Drücke auf den Umschlag, um mehr zu erfahren.
          </p>
        </div>
      )}

      <div
        className={`relative mx-auto w-full max-w-2xl pb-[67%] ${open ? "brief-open" : ""} ${open ? "" : "cursor-pointer"}`}
        role={open ? undefined : "button"}
        tabIndex={open ? undefined : 0}
        aria-label={open ? undefined : "Briefumschlag öffnen"}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (!open && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            setOpen(true);
          }
        }}
      >
      {/* Umschlag-Rückseite mit geöffneter Klappe (hinter dem Brief). */}
      <div className="brief-env-open absolute bottom-0 left-1/2 z-0 aspect-[995/627] w-[104%] -translate-x-1/2">
        <img
          src={umschlagOffen}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute bottom-0 left-0 w-full"
        />
      </div>

      {/* Fenster, in dem der Brief steckt: sitzt zwischen der Klappenkante
          oben und dem unteren Taschenrand, damit ein Stück Vordertasche
          samt Stempel sichtbar bleibt. Eigener Scrollbereich, weil der
          Umschlag nicht wächst, der Text aber länger ist. */}
      <div
        className="brief-window absolute left-1/2 z-[25] w-[62%] -translate-x-1/2 overflow-y-auto overflow-x-hidden"
        style={{ top: "26%", bottom: "13%" }}
      >
        <article className="brief-paper relative min-h-full px-3 py-3 text-left sm:px-5 sm:py-4">
          {/* Foto sitzt dicht am oberen Papierrand; die Büroklammer
              greift über die Kante und ragt seitlich heraus. */}
          <figure className="brief-photo absolute top-1 -right-1 z-10 w-14 rotate-[3deg] sm:top-2 sm:-right-3 sm:w-20">
            <img
              src={briefmarke}
              alt="Olivia, Gründerin von MOMO"
              loading="lazy"
              className="block h-auto w-full drop-shadow-[0_4px_6px_rgba(43,27,38,0.28)]"
            />
          </figure>

          <div className="pen-ink space-y-1.5 pt-1 font-handwritten text-[10px] leading-snug text-pen sm:text-xs md:text-sm">
            {paragraphs.map((text, i) => (
              <p
                key={text.slice(0, 24)}
                className={`text-left ${i === 0 ? "pr-12 sm:pr-16" : ""}`}
                lang="de"
              >
                <Handwritten text={text} seedBase={i * 1000} />
              </p>
            ))}
          </div>
        </article>
      </div>

      {/* Umschlag-Vorderseite (vor dem Brief) + geschlossener Umschlag */}
      <div className="brief-env-open absolute bottom-0 left-1/2 z-20 w-[104%] -translate-x-1/2">
        <img
          src={umschlagOffenFront}
          alt=""
          aria-hidden
          loading="lazy"
          className="block w-full"
        />
        <div className="brief-stamp absolute bottom-[18%] left-1/2 w-[44%] text-ink">
          <div className="brief-stamp-ring">
            <MomoLogo showSubtitle className="w-full" />
          </div>
        </div>
      </div>
      <div className="brief-env-closed absolute bottom-0 left-1/2 z-30 w-[104%] -translate-x-1/2">
        <img
          src={umschlagZu}
          alt="Geschlossener Briefumschlag"
          loading="lazy"
          className="block w-full"
        />
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
