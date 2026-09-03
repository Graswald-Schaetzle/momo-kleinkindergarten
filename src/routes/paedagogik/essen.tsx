import { createFileRoute } from "@tanstack/react-router";
import { BesteckAnimation } from "@/components/BesteckAnimation";
import schuesselAsset from "@/assets/schuessel.png.asset.json";

export const Route = createFileRoute("/paedagogik/essen")({
  head: () => ({
    meta: [
      { title: "Essen — MOMO Kleinkindergarten Remseck" },
      {
        name: "description",
        content:
          "Essen im MOMO Kleinkindergarten in Remseck am Neckar: frisches, kindgerechches Essen als Teil des pädagogischen Alltags.",
      },
      { property: "og:title", content: "Essen — MOMO Kleinkindergarten Remseck" },
      {
        property: "og:description",
        content: "Essen im MOMO Kleinkindergarten, Mozartstraße 4, Remseck am Neckar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/paedagogik/essen" }],
  }),
  component: Essen,
});

function Essen() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-12 sm:px-10 md:px-14">
      <h1 className="font-display text-center text-2xl font-normal tracking-[0.04em] sm:text-3xl md:text-4xl">
        Essen
      </h1>
      <p className="mt-2 text-center font-display text-sm font-normal tracking-[0.12em] text-[#4a3320]">
        1–3 JAHRE
      </p>
      <BesteckAnimation />
      <div className="mt-8 space-y-6 text-justify text-sm leading-relaxed sm:text-base md:text-lg">
        <p className="text-center font-bold">Essen als gemeinsames Erlebnis</p>
        <p>
          Bei uns ist Essen weit mehr als Nahrungsaufnahme, es ist ein sinnliches Gemeinschaftserlebnis und fester Bestandteil unseres pädagogischen Alltags. Wir zelebrieren die gemeinsamen Mahlzeiten bewusst: Der Tisch ist liebevoll und jahreszeitlich gedeckt, Blumen schmücken die Tafel, eine Kerze brennt während des Essens. Gemeinsam singen wir und bedanken uns für das, was wir teilen dürfen.
        </p>
        <p className="text-center font-bold">Regional, saisonal, bewusst</p>
        <p>
          Uns liegt viel an regionalen, saisonalen Zutaten, bevorzugt in Bio- und Demeter-Qualität. So erfahren Kinder ganz natürlich, was gerade wächst und reift, und entwickeln über das, was auf ihrem Teller landet, ein Gespür für die Jahreszeiten. Auch der zeitliche Rhythmus hat seinen Platz: Bestimmte Gerichte kehren an festen Wochentagen wieder. Aus entwicklungspsychologischer Sicht sind solche wiederkehrenden Rituale ein wertvoller Baustein unserer Arbeit – sie geben Kindern Orientierung, Sicherheit und einen verlässlichen Rhythmus im Alltag.
        </p>
      </div>
      <img
        src={schuesselAsset.url}
        alt="Aquarellzeichnung eines Stapels bunter Schüsseln"
        className="mx-auto mt-12 w-40 sm:w-52 md:w-64"
      />
    </div>
  );
}
