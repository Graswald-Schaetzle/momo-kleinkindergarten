import { createFileRoute } from "@tanstack/react-router";

import lillydooAsset from "@/assets/lillydoo.png.asset.json";
import weledaAsset from "@/assets/weleda.png.asset.json";
import hauschkaAsset from "@/assets/dr-hauschka.png.asset.json";
import { TubeAnimation } from "@/components/TubeAnimation";

const brands = [
  { src: weledaAsset.url, alt: "WELEDA" },
  { src: hauschkaAsset.url, alt: "Dr. Hauschka" },
  { src: lillydooAsset.url, alt: "LILLYDOO" },
];

export const Route = createFileRoute("/paedagogik/pflege")({
  head: () => ({
    meta: [
      { title: "Pflege — MOMO Kleinkindergarten Remseck" },
      {
        name: "description",
        content:
          "Pflege im MOMO Kleinkindergarten in Remseck am Neckar: individuelle, einfühlsame Begleitung im Kita-Alltag für Kinder von 1-3 Jahren.",
      },
      { property: "og:title", content: "Pflege — MOMO Kleinkindergarten Remseck" },
      {
        property: "og:description",
        content: "Pflege im MOMO Kleinkindergarten, Mozartstraße 4, Remseck am Neckar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/paedagogik/pflege" }],
  }),
  component: Pflege,
});

function Pflege() {
  return (
    <>
      <section className="mx-auto max-w-2xl px-6 pt-10 sm:px-10 sm:pt-14 md:px-14">
        <h1 className="font-display text-center text-2xl font-normal tracking-[0.08em] sm:text-3xl">
          Pflege
        </h1>

        <TubeAnimation className="mt-2 sm:mt-3" />


        <div className="mt-6 space-y-6 sm:mt-8 sm:space-y-8">
          <p className="text-justify text-sm leading-relaxed sm:text-base sm:leading-relaxed md:text-lg md:leading-relaxed">
            Pflege ist für uns eine Handlung im Tagesablauf, die zu einem besonders zarten,
            intimen Moment der Begegnung wird. Jedes Kind wird von uns mit Respekt und
            Achtsamkeit begleitet, sein Körper wird liebevoll wahrgenommen. Wir wickeln nach
            Bedarf des Kindes, nicht nach starrem Zeitplan so nehmen wir jedes Kind in seinem
            eigenen Rhythmus ernst.
          </p>

          <p className="text-justify text-sm leading-relaxed sm:text-base sm:leading-relaxed md:text-lg md:leading-relaxed">
            Vor dem Schlafengehen gestalten wir kleine, wiederkehrende Rituale, die Ruhe und
            Geborgenheit schenken: Wir salben sanft die Füßchen mit hochwertigem Öl, begleiten
            das Kind mit ruhigen Bewegungen und schaffen so einen bewussten Übergang vom Tag in
            die Ruhe. Der sanfte Klang einer Klangschale und Gesang begleiten das Einschlafen
            und geben jedem Kind ein vertrautes, beruhigendes Signal: Zeit fürs Loslassen.
          </p>

          <p className="text-justify text-sm leading-relaxed sm:text-base sm:leading-relaxed md:text-lg md:leading-relaxed">
            Bei der Wahl unserer Pflegeprodukte legen wir größten Wert auf Qualität und
            Verträglichkeit. Wir verwenden ausschließlich Windeln von{" "}
            <span className="font-medium">LILLYDOO</span> sowie Pflegetücher, Öle und Cremes von{" "}
            <span className="font-medium">WELEDA</span> und{" "}
            <span className="font-medium">Dr. Hauschka</span>, die speziell auf die empfindliche
            Haut kleiner Kinder abgestimmt sind. So verbinden wir liebevolle Zuwendung mit
            hochwertiger, bewusst ausgewählter Pflege, die eurem Kind guttut.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 pt-20 pb-24 sm:px-10 sm:pt-28 sm:pb-32 md:px-14">
        <div className="flex flex-nowrap items-center justify-center gap-x-8 sm:gap-x-14">
          {brands.map((b) => (
            <img
              key={b.alt}
              src={b.src}
              alt={b.alt}
              loading="lazy"
              className="h-14 w-auto opacity-80 mix-blend-multiply sm:h-14 md:h-14 object-contain"
            />
          ))}
        </div>
      </section>

    </>
  );
}
