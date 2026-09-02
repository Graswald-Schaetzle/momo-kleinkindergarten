import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Users, UtensilsCrossed, Blocks, Droplet, Gift } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/preise")({
  head: () => ({
    meta: [
      { title: "Preise — MOMO Kinderhaus Remseck" },
      {
        name: "description",
        content:
          "Betreuungspreise im MOMO Kinderhaus in Remseck am Neckar für Kinder von 1-3 Jahren.",
      },
      { property: "og:title", content: "Preise — MOMO Kinderhaus Remseck" },
      {
        property: "og:description",
        content: "Betreuungspreise im MOMO Kinderhaus, Mozartstraße 4, Remseck am Neckar.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/preise" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/preise" }],
  }),
  component: Preise,
});

const features: { icon: typeof Clock; text: string }[] = [
  { icon: Clock, text: "Montag bis Freitag, 7:45–13:45 Uhr" },
  { icon: Users, text: "Maximal 9 Kinder, betreut von 3 Pädagoginnen" },
  { icon: UtensilsCrossed, text: "Frühstück, Mittagessen und Snacks inklusive" },
  { icon: Blocks, text: "Montessori- und Waldorf-Material inklusive" },
  { icon: Droplet, text: "Windeln und Pflege von Lillydoo, Weleda und Dr. Hauschka inklusive" },
];

function Preise() {
  return (
    <main className="min-h-screen pb-32 text-center">
      <SiteHeader />
      <section className="px-6 pt-16 sm:px-10 md:px-14">
        <h2 className="font-display text-base font-bold tracking-[0.04em] text-bordeaux sm:text-lg">
          Preise
        </h2>

        <div className="mx-auto mt-8 max-w-md rounded-2xl border border-bordeaux/15 bg-white/60 px-6 py-8 shadow-sm sm:px-10 sm:py-10">
          <p className="font-display text-lg font-normal leading-snug text-ink sm:text-xl">
            Geborgene, familiäre
            <br />
            Vormittagsbetreuung
          </p>

          <p className="mt-6 font-display text-5xl font-bold text-bordeaux sm:text-6xl">
            495&nbsp;€
          </p>
          <p className="mt-1 text-sm text-ink/60 sm:text-base">pro Monat</p>

          <ul className="mt-8 divide-y divide-bordeaux/10 text-left">
            {features.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-4 py-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-bordeaux/30 text-bordeaux">
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <span className="text-sm leading-snug text-ink sm:text-base">{text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-3 rounded-xl bg-mustard/15 px-4 py-4 text-left">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mustard/25 text-bordeaux">
              <Gift size={18} strokeWidth={1.75} />
            </span>
            <span className="text-sm font-bold leading-snug text-bordeaux sm:text-base">
              Ein ganzer Monat geschenkt: im August zahlt ihr nichts
            </span>
          </div>

          <Link
            to="/kontakt"
            className="mt-6 block rounded-full bg-bordeaux px-8 py-3.5 font-display text-base font-bold tracking-[0.04em] text-background transition-colors hover:bg-bordeaux/90"
          >
            Jetzt kennenlernen
          </Link>

          <p className="mt-4 text-xs text-ink/50 sm:text-sm">
            Für Geschwister gibt es einen Rabatt.
          </p>
        </div>
      </section>
    </main>
  );
}
