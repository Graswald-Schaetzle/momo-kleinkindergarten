/* Brief-Animation: Ein geschlossener Umschlag öffnet sich beim Klick,
   verschwindet dann komplett und macht Platz für den Brief auf
   zerknittertem Papier mit Sternen, Klebeband und Büroklammer – an der
   Klammer hängt ein Foto von Olivia. */

import { useState } from "react";
import briefmarke from "@/assets/olivia-portrait.png.asset.json";
import { MomoLogo } from "@/components/MomoLogo";
import umschlagZu from "@/assets/umschlag-zu.png";
import umschlagOffen from "@/assets/umschlag-offen.png";
import umschlagOffenFront from "@/assets/umschlag-offen-front.png";
import briefpapier from "@/assets/briefpapier-gefaltet.jpg.asset.json";

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

  /* Geöffneter Zustand: nur der Brief auf dem Papier, Umschlag ist weg. */
  if (open) {
    return (
      <div className={`pt-10 sm:pt-16 ${className}`}>
        <div className="brief-letter relative mx-auto w-full max-w-md">
          <img
            src={briefpapier.url}
            alt="Gefalteter Briefbogen"
            className="block w-full"
          />

          {/* Foto hängt wie an einer Klammer oben auf dem Papier. */}
          <figure className="absolute left-1/2 top-[3%] z-10 w-20 -translate-x-1/2 rotate-[2deg] sm:w-24">
            <img
              src={briefmarke.url}
              alt="Olivia, Gründerin von MOMO"
              loading="lazy"
              className="block h-auto w-full drop-shadow-[0_4px_6px_rgba(43,27,38,0.28)]"
            />
          </figure>

          {/* Textbereich auf dem Papier, bei Bedarf scrollbar. */}
          <div
            className="absolute left-[10%] right-[10%] z-[5] overflow-y-auto overflow-x-hidden"
            style={{ top: "22%", bottom: "7%" }}
          >
            <div className="pen-ink space-y-2 font-handwritten text-left text-[10px] leading-snug text-pen sm:text-xs md:text-sm">
              {paragraphs.map((text, i) => (
                <p key={text.slice(0, 24)} className="text-left" lang="de">
                  <Handwritten text={text} seedBase={i * 1000} />
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* Geschlossener Umschlag mit Spitze und Stempel. */
  return (
    <div className={`pt-20 sm:pt-32 ${className}`}>
      <div className="relative z-40 mb-4 text-center sm:mb-6">
        <p className="font-display text-base italic text-ink sm:text-lg">
          {"\n"}
        </p>
        <p className="font-sans text-xs text-ink/70 sm:text-sm">
          Drücke auf den Umschlag, um mehr zu erfahren.
        </p>
      </div>

      <div
        className="relative mx-auto w-full max-w-2xl cursor-pointer pb-[67%]"
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
            src={umschlagOffen}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute bottom-0 left-0 w-full"
          />
        </div>

        <div className="absolute bottom-0 left-1/2 z-20 w-[104%] -translate-x-1/2">
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
        <div className="absolute bottom-0 left-1/2 z-30 w-[104%] -translate-x-1/2">
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
