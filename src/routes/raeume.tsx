import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { MischerAnimation } from "@/components/MischerAnimation";
import schubkarre from "@/assets/schubkarre.png.asset.json";

export const Route = createFileRoute("/raeume")({
  head: () => ({
    meta: [
      { title: "Räume — MOMO Kleinkindergarten Remseck" },
      {
        name: "description",
        content:
          "Räume und Gestaltung im MOMO Kleinkindergarten in Remseck am Neckar: eine geborgene Umgebung für Kinder von 1-3 Jahren.",
      },
      { property: "og:title", content: "Räume — MOMO Kleinkindergarten Remseck" },
      {
        property: "og:description",
        content: "Räume im MOMO Kleinkindergarten, Mozartstraße 4, Remseck am Neckar.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/raeume" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/raeume" }],
  }),
  component: Raeume,
});

function Raeume() {
  return (
    <main className="min-h-screen pb-6">
      <SiteHeader />
      <MischerAnimation className="mt-8 sm:mt-10" />
      <section className="mx-auto max-w-2xl px-6 pt-6 text-bordeaux sm:px-10 md:px-14">
        <h2 className="text-center font-display text-base font-normal tracking-[0.04em] sm:text-lg md:text-xl">
          Bei uns wächst gerade ein Zuhause heran
        </h2>
        <p className="mt-2 text-center font-display text-sm font-normal tracking-[0.12em] text-bordeaux">
          1–3 JAHRE
        </p>
        <div className="mt-6 space-y-6 text-justify text-sm leading-relaxed sm:space-y-8 sm:text-base sm:leading-relaxed md:text-lg md:leading-relaxed">
          <p>
            Gerade verwandeln sich unsere Räume und unser Garten Stück für Stück in ein liebevolles
            Zuhause: Es wird gestrichen, verlegt und mit Herz eingerichtet. Im Oktober gestalten wir
            den Garten, und schon im November zeigen wir euch die ersten Fotos.
          </p>

          <p>
            Uns liegt jedes Detail am Herzen, von der Wandfarbe bis zum kleinsten Spielzeug. Bei
            allem haben wir uns gefragt: Was fühlt sich für ein Kind warm, geborgen und wohlig an?
            So wächst nach und nach ein Ort, der sich wirklich wie ein zweites Zuhause anfühlt.
          </p>

          <h3 className="text-center font-display text-base font-normal tracking-[0.04em] sm:text-lg md:text-xl">
            Unsere Räume, mit ganz viel Herz
          </h3>

          <p>
            Sanfte, warme Farben schaffen eine ruhige, gemütliche Atmosphäre. Unser Spielmaterial
            ist fast ausschließlich aus Holz und Naturmaterialien, warm und schön anzufassen.
            Inspiriert von Montessori und Waldorf haben wir mit viel Liebe ausgesucht, was die
            Kinder umgibt, darunter zauberhaftes Spielzeug von Grimms und Ostheimer. Weiches, warmes
            Licht statt kalter Lampen sorgt für Geborgenheit, wie zuhause. Jedes Kind bekommt sein
            eigenes kleines Himmelbett zum Träumen, eine gemütliche Hochebene zum Kuscheln und
            Entdecken sowie eine Puppenküche voller kleiner Familiengeschichten.
          </p>

          <h3 className="text-center font-display text-base font-normal tracking-[0.04em] sm:text-lg md:text-xl">
            Unser Garten, ein kleines Abenteuerreich
          </h3>

          <p>
            Im Oktober entsteht hier ein Ort zum Buddeln, Rutschen und Klettern, mit einer
             Matschküche zum Experimentieren und einem Barfußweg, der die Sinne der Kinder auf
            spielerische Weise weckt.
          </p>
        </div>
        <img
          src={schubkarre.url}
          alt="Aquarellzeichnung einer Schubkarre mit Spaten"
          className="mx-auto mt-4 w-56 sm:mt-6 sm:w-72 md:w-80"
          loading="lazy"
        />
      </section>
    </main>
  );
}
