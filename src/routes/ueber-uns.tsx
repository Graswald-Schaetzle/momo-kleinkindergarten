import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";

import naeheImg from "@/assets/ueberuns-naehe-clean2.png";
import ruheImg from "@/assets/ueberuns-ruhe-symbol.png";

import ganzheitlichkeitImg from "@/assets/ueberuns-ganzheitlichkeit-2-clean2.png";
import ganzheitlichkeitVideo from "@/assets/film-ganzheitlichkeit.mp4.asset.json";
import naturImg from "@/assets/ueberuns-natur-recolored.png";
import eigenstaendigkeitImg from "@/assets/ueberuns-eigenstaendigkeit-portrait.png";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: "Über uns — MOMO Kleinkindergarten Remseck" },
      {
        name: "description",
        content:
          "Nähe, Ruhe, Ganzheitlichkeit, Natur und Eigenständigkeit: 9 Kinder, 3 Pädagoginnen — bewusst familiäre Betreuung für Kinder von 1-3 Jahren in Remseck am Neckar.",
      },
      { property: "og:title", content: "Über uns — MOMO Kleinkindergarten Remseck" },
      {
        property: "og:description",
        content: "Bewusst familiär: 9 Kinder, 3 Pädagoginnen, viel Geborgenheit.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ueber-uns" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/ueber-uns" }],
  }),
  component: UeberUns,
});

type Section = {
  title: string;
  image: string;
  video?: string;
  alt: string;
  text: string;
  imgMax?: string;
  imgFill?: boolean;
  imgPosition?: string;
  imgAlign?: string;
};

const sections: Section[] = [
  {
    title: "Nähe",
    image: naeheImg,
    alt: "Aquarell-Zeichnung: Pädagogin hält ein Kind im Arm",
    text: "9 Kinder, betreut von 3 festen Pädagoginnen: Das ermöglicht echte Aufmerksamkeit von Bezugspersonen, die euer Kind wirklich kennen. Genau das schenkt eurem Kind die Zuneigung, die es in den ersten Jahren am meisten braucht.",
  },
  {
    title: "Ruhe",
    image: ruheImg,
    alt: "Tuschezeichnung: ein ruhendes Kind mit geschlossenen Augen",
    text: "Bei uns hat der Tag einen ruhigen Klang. Verlässliche Rituale und feste Bezugspersonen geben Halt statt Hektik und schenken eurem Kind: innere Ruhe statt Reizüberflutung. Und natürlich darf dabei gelacht, getobt und laut gespielt werden.",
    imgMax: "max-w-[220px] sm:max-w-sm md:max-w-md",
  },
  {
    title: "Ganzheitlickeit",
    image: ganzheitlichkeitImg,
    video: ganzheitlichkeitVideo.url,
    alt: "Filmaufnahme: barfüßige Kinderfüße laufen über einen Holzboden",
    text: "\nEin Kind ist mehr als sein Verhalten, es ist Körper, Gefühl und Geist zugleich. Deshalb gehört bei uns Barfußlaufen genauso zum Alltag wie gemeinsames Singen. Alle Gefühle bekommen Raum und werden sorgsam begleitet. So darf sich euer Kind mit all seinen Facetten entfalten.",
  },
  {
    title: "Natur",
    image: naturImg,
    alt: "Aquarell-Zeichnung: Figur mit Ästen als Kopf und versteckten Augen, in Bordeaux und Herbsttönen",
    text: "Unser Garten ist ein echter kleiner Naturraum: klettern auf Baumstämmen, matschen mit Wasser und Erde, Vögel beobachten. Kinder lernen hier mit allen Sinnen und in ihrem eigenen Tempo draußen, wo Entdecken noch echt ist.",
  },
  {
    title: "Eigenständikeit",
    image: eigenstaendigkeitImg,
    alt: "Aquarell-Zeichnung: Kind stapelt selbstständig Bauklötze zu einem kleinen Turm",
    text: "Bei uns gibt es feste Rituale und klare Regeln, die dem Alltag Halt geben. Innerhalb dieses verlässlichen Rahmens soll euer Kind aber mitbestimmen, zum Beispiel welches Lied im Morgenkreis gesungen wird oder womit im Freispiel gebaut und gestaltet wird. So erlebt es von Anfang an: Meine Meinung zählt, in einem Rahmen der mich sicher fühlen lässt.",
    imgMax: "max-w-[220px] sm:max-w-[360px] md:max-w-[440px]",
    imgPosition: "w-full object-contain",
    imgAlign: "items-start",
  },
];

function UeberUns() {
  return (
    <main className="min-h-screen pb-32">
      <SiteHeader logoColor="text-black" />

      <p className="mt-2 text-center font-display text-xl font-normal leading-tight tracking-[0.08em] sm:text-3xl md:text-4xl">
        1–3 Jahre
      </p>

      <div className="relative mx-auto max-w-6xl px-6 pt-4 sm:px-10 md:px-14">
        {sections.map((section, i) => {
          const imageFirst = i % 2 === 1;
          return (
            <section
              key={section.title}
              className="grid grid-cols-2 items-stretch gap-4 py-8 sm:gap-10 sm:py-14"
            >
              <div
                className={`${
                  imageFirst ? "order-2" : "order-1"
                } ${imageFirst ? "pl-2 sm:pl-6" : "pr-2 sm:pr-6"} text-left`}
              >
                <h2
                  className={`font-display font-normal leading-tight tracking-[0.04em] hyphens-auto break-words ${
                    section.title.length > 12
                      ? "text-base sm:text-2xl md:text-3xl"
                      : "text-xl sm:text-3xl md:text-4xl"
                  }`}
                  lang="de"
                >
                  {section.title}
                </h2>

                <p className="mt-2 text-justify text-[11px] leading-snug sm:mt-4 sm:text-base sm:leading-relaxed md:text-lg">
                  {section.text}
                </p>
              </div>

              <div
                className={`${imageFirst ? "order-1" : "order-2"} flex h-full items-center justify-center`}
              >
                {section.video ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-label={section.alt}
                    width={1200}
                    height={675}
                    className="w-full max-w-[140px] rounded-none object-cover sm:max-w-[220px] md:max-w-[280px]"
                  >
                    <source src={section.video} type="video/mp4" />
                  </video>

                ) : (
                  <img
                    src={section.image}
                    alt={section.alt}
                    loading="lazy"
                    width={900}
                    height={900}
                    className={`${
                      section.imgFill
                        ? "h-full w-full object-cover object-bottom"
                        : section.imgPosition
                          ? section.imgPosition
                          : "w-full object-contain"
                    } ${
                      section.imgMax ?? "max-w-[140px] sm:max-w-[260px] md:max-w-sm"
                    }`}
                  />
                )}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
