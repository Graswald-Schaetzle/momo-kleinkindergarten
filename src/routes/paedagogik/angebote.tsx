import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/paedagogik/angebote")({
  head: () => ({
    meta: [
      { title: "Angebote — MOMO Kleinkindergarten Remseck" },
      {
        name: "description",
        content:
          "Angebote im MOMO Kleinkindergarten in Remseck am Neckar: altersgerechte Beschäftigung und Förderung für Kinder von 1-3 Jahren.",
      },
      { property: "og:title", content: "Angebote — MOMO Kleinkindergarten Remseck" },
      {
        property: "og:description",
        content: "Angebote im MOMO Kleinkindergarten, Mozartstraße 4, Remseck am Neckar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/paedagogik/angebote" }],
  }),
  component: Angebote,
});

function Angebote() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-12 sm:px-10 md:px-14">
      <h1 className="font-display text-center text-2xl font-normal tracking-[0.04em] sm:text-3xl md:text-4xl">
        Angebote
      </h1>
      <p className="mt-6 text-center font-display text-sm leading-relaxed sm:text-base md:text-lg">
        Inhalt folgt.
      </p>
    </div>
  );
}
