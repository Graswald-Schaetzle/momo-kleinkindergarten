import { createFileRoute } from "@tanstack/react-router";

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
      <div className="mt-8 space-y-6 text-center font-display text-sm leading-relaxed sm:text-base md:text-lg">
        <p>
          Essen ist bei uns weit mehr als Nahrungsaufnahme – es ist ein sinnliches, gemeinsames Erlebnis und fester Bestandteil unseres pädagogischen Alltags. Wir zelebrieren das gemeinsame Essen bewusst: Der Tisch ist liebevoll jahreszeitlich gedeckt, Blumen schmücken den Tisch, eine Kerze wird angezündet und begleitet die Mahlzeit. Gemeinsam singen wir und bedanken uns fürs Essen.
        </p>
        <p>
          Wir legen großen Wert auf regionale, saisonale Zutaten und verwenden bevorzugt Bio- und Demeter-Produkte. So lernen Kinder ganz natürlich, was gerade wächst und reift, und entwickeln ein Gefühl für die Jahreszeiten durch das, was auf dem Teller landet. Auch der zeitliche Rhythmus spielt eine wichtige Rolle: Bestimmte Gerichte kehren an festen Wochentagen wieder. Aus entwicklungspsychologischer Sicht ist das ein wertvolles Element der pädagogischen Arbeit – wiederkehrende Rituale geben euren Kindern Orientierung, Sicherheit und einen verlässlichen Rhythmus im Alltag.
        </p>
        <p>
          Soweit es möglich ist, lassen wir die Kinder am Kochen teilhaben: Sie schneiden Obst, waschen Gemüse und üben dabei ganz nebenbei ihre Feinmotorik. So erleben Kinder, woher ihr Essen kommt, und sind mit Stolz und Freude an der Zubereitung beteiligt. Für viele Kinder sind es hier auch die ersten eigenen Erfahrungen mit Besteck, die wir geduldig begleiten.
        </p>
        <p>
          Mit warmen, feuchten Tüchern pflegen wir jedes Kind einzeln und liebevoll während oder nach dem Essen, wenn mal etwas am Mund klebt, immer begleitet von einem Lied. Dieser Moment ist für uns mehr als reine Pflege: Er schenkt jedem einzelnen Kind bewusste Aufmerksamkeit, echte Nähe und das Gefühl, gesehen und wahrgenommen zu werden. So hat jeder Übergang beim Essen seinen eigenen kleinen Klang.
        </p>
      </div>
    </div>
  );
}
