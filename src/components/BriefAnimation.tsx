/* Brief-Animation: Ein geschlossener Umschlag öffnet seine Klappe,
   der Brief fährt daraus nach oben und bleibt dann oben stehen.
   Am Brief hängt mit einer Büroklammer ein Foto von Olivia. */

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

export function BriefAnimation({ className = "" }: { className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-2xl pb-[46%] ${className}`}>
      {/* Umschlag-Rückseite mit aufgeklappter Lasche (hinter dem Brief) */}
      <div className="brief-env-open absolute bottom-0 left-1/2 z-0 w-[104%] -translate-x-1/2">
        <img src={umschlagOffen} alt="" aria-hidden loading="lazy" className="block w-full" />
      </div>

      {/* Fenster, aus dem der Brief nach oben herausfährt.
          Ragt mit negativem Abstand in den Umschlag hinein, damit das
          Briefpapier sichtbar IM Umschlag steckt und daraus aufsteigt. */}
      <div className="brief-window relative z-10 -mb-[9%] overflow-hidden pt-8">
        <article className="brief-paper relative mx-auto w-[94%] px-5 pb-28 pt-10 text-left sm:px-10 sm:pb-36 sm:pt-14">
          {/* Foto sitzt dicht am oberen Papierrand; die Büroklammer
              greift über die Kante und ragt seitlich heraus. */}
          <figure className="brief-photo absolute -top-5 -right-3 z-10 w-36 rotate-[3deg] sm:-top-8 sm:-right-8 sm:w-52">
            <img
              src={briefmarke}
              alt="Olivia, Gründerin von MOMO"
              loading="lazy"
              className="block h-auto w-full drop-shadow-[0_6px_10px_rgba(43,27,38,0.28)]"
            />
          </figure>

          <div className="space-y-4 pt-20 text-[13px] leading-relaxed text-bordeaux sm:pt-16 sm:text-base md:text-lg">
            {paragraphs.map((text, i) => (
              <p
                key={text.slice(0, 24)}
                className={`text-justify hyphens-auto ${i === 0 ? "pr-28 sm:pr-44" : ""}`}
                lang="de"
              >
                {text}
              </p>
            ))}
          </div>

          <p className="mt-6 text-right font-display text-base tracking-[0.18em] text-bordeaux sm:text-lg">
            MOMO
          </p>
        </article>
      </div>

      {/* Umschlag-Vorderseite (vor dem Brief) + geschlossener Umschlag */}
      <div className="absolute bottom-0 left-1/2 z-20 w-[104%] -translate-x-1/2">
        <img
          src={umschlagOffenFront}
          alt=""
          aria-hidden
          loading="lazy"
          className="block w-full"
        />
        <MomoLogo
          showSubtitle={false}
          className="absolute bottom-[28%] left-1/2 w-[34%] -translate-x-1/2 text-ink/80 mix-blend-multiply"
        />
      </div>
      <div className="brief-env-closed absolute bottom-0 left-1/2 z-30 w-[104%] -translate-x-1/2">
        <img
          src={umschlagZu}
          alt="Geschlossener Briefumschlag"
          loading="lazy"
          className="block w-full"
        />
        <MomoLogo
          showSubtitle={false}
          className="absolute bottom-[16%] left-1/2 w-[34%] -translate-x-1/2 text-ink/80 mix-blend-multiply"
        />
      </div>
    </div>

  );
}
