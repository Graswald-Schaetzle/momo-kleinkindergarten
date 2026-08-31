/* Brief-Animation: Ein geschlossener Umschlag öffnet seine Klappe,
   der Brief fährt daraus nach oben und bleibt dann oben stehen.
   Am Brief hängt mit einer Büroklammer ein Foto von Olivia. */

import portrait from "@/assets/olivia-portrait.png.asset.json";

const paragraphs = [
  "Ich bin Olivia. Gründerin von Momo und ab Januar 2027 mit ganzem Herzen für eure Kinder da.",
  "Ich bin staatlich anerkannte Erzieherin (B.A. Sozialwesen) und ausgebildete Waldorfpädagogin. Meine mehrjährige Erfahrungen im Kindergarten-Alltag habe ich unter anderem in Frankreich und Berlin gesammelt. Die Waldorf Pädagogik liegt mir sehr am Herzen gleichzeitig ist es mir wichtig, sie modern zu denken und zu leben, im Einklang mit dem, was wir heute über kindliche Entwicklung wissen.",
  "Der Wunsch, irgendwann eine eigene kleine Krippe zu gründen, hat mich lange begleitet. Jetzt wird er wahr und das an einem ganz besonderen Ort: im Haus meines Großvaters, das ich liebevoll für Momo herrichte. Für mich ist Momo deshalb mehr als ein Projekt, es ist ein echtes Familienprojekt, in das viele persönliche Erinnerungen und viel Herzblut fließen.",
  "Mir ist es ein Anliegen, dass kleine Kinder behutsam aufwachsen dürfen, in einer kleinen Gruppe, und in ihrem eigenen Tempo.",
  "Ich freue mich euch und eure Kinder kennenzulernen!",
];

export function BriefAnimation({ className = "" }: { className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-2xl ${className}`}>
      {/* Fenster, aus dem der Brief nach oben herausfährt */}
      <div className="brief-window relative overflow-hidden pt-6">
        <article className="brief-paper relative mx-auto w-[94%] px-5 py-8 text-left sm:px-10 sm:py-12">
          {/* Foto mit Büroklammer */}
          <figure className="brief-photo absolute -top-4 right-3 w-20 rotate-[5deg] sm:right-6 sm:w-28">
            <div className="bg-white p-1.5 shadow-[0_4px_10px_rgba(43,27,38,0.25)] sm:p-2">
              <img
                src={portrait.url}
                alt="Olivia, Gründerin von MOMO"
                width={400}
                height={720}
                loading="lazy"
                className="block h-auto w-full grayscale"
              />
            </div>
            {/* Büroklammer */}
            <svg
              viewBox="0 0 40 90"
              aria-hidden="true"
              className="absolute -top-5 left-1/2 h-16 w-8 -translate-x-1/2 sm:h-20 sm:w-10"
            >
              <path
                d="M13 78 L13 20 A9 9 0 0 1 31 20 L31 66 A13 13 0 0 1 5 66 L5 26"
                fill="none"
                stroke="#9a9a9a"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M13 78 L13 20 A9 9 0 0 1 31 20 L31 66 A13 13 0 0 1 5 66 L5 26"
                fill="none"
                stroke="#e6e6e6"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </figure>

          <div className="space-y-4 pt-14 text-[13px] leading-relaxed text-bordeaux sm:pt-6 sm:text-base md:text-lg">
            {paragraphs.map((text) => (
              <p key={text.slice(0, 24)} className="text-justify hyphens-auto" lang="de">
                {text}
              </p>
            ))}
          </div>

          <p className="mt-6 text-right font-display text-base tracking-[0.18em] text-bordeaux sm:text-lg">
            MOMO
          </p>
        </article>
      </div>

      {/* Umschlag */}
      <div className="brief-envelope relative mx-auto -mt-16 h-40 w-[85%] max-w-md sm:-mt-20 sm:h-52">
        {/* Umschlag-Körper */}
        <div className="absolute inset-0 rounded-[3px] bg-[#E8C6CD] shadow-[0_10px_24px_rgba(43,27,38,0.18)]" />
        {/* seitliche Faltungen */}
        <div
          className="absolute inset-0 rounded-[3px] bg-[#E3BCC4]"
          style={{ clipPath: "polygon(0 0, 50% 62%, 100% 0, 100% 100%, 0 100%)" }}
        />
        <span className="absolute bottom-5 left-1/2 -translate-x-1/2 font-display text-sm tracking-[0.28em] text-ink sm:text-base">
          MOMO
        </span>
        {/* Klappe, die sich öffnet */}
        <div className="brief-flap absolute inset-x-0 top-0 h-[62%]">
          <div
            className="h-full w-full bg-[#EED2D8]"
            style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
          />
        </div>
      </div>
    </div>
  );
}
