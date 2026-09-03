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
    <main className="bg-menu-overlay pb-6 text-center">
      <SiteHeader
        logoColor="text-menu-overlay-foreground"
        burgerColor="bg-menu-overlay-foreground"
      />
      <section className="px-6 pt-14 sm:px-10 sm:pt-20 md:px-14">
        <p className="mb-3 font-display text-sm font-normal tracking-[0.12em] text-[#4a3320]">
          1–3 JAHRE
        </p>

        <div className="mx-auto max-w-md rounded-2xl border border-[#4a3320]/20 bg-[#e9dcc3] px-4 py-4 shadow-sm sm:px-6 sm:py-5">
          <p className="font-display text-sm font-normal leading-snug text-[#4a3320] sm:text-base">
            Geborgene, familiäre
            <br />
            Vormittagsbetreuung
          </p>

          <p className="mt-2 font-display text-3xl font-bold text-[#4a3320] sm:text-4xl">
            495&nbsp;€
          </p>
          <p className="text-xs text-[#4a3320]/70">pro Monat</p>

          <ul className="mt-3 divide-y divide-[#4a3320]/15 text-left">
            {features.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2.5 py-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#4a3320]/40 text-[#4a3320]">
                  <Icon size={14} strokeWidth={1.75} />
                </span>
                <span className="text-xs leading-snug text-[#4a3320]">{text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-3 flex items-center gap-2.5 rounded-xl bg-[#4a3320]/10 px-3 py-2.5 text-left">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#4a3320]/20 text-[#4a3320]">
              <Gift size={14} strokeWidth={1.75} />
            </span>
            <span className="text-xs font-bold leading-snug text-[#4a3320]">
              Ein ganzer Monat geschenkt: im August zahlt ihr nichts
            </span>
          </div>

          <Link
            to="/kontakt"
            className="mt-3 block rounded-full bg-[#4a3320] px-8 py-2.5 font-display text-sm font-bold tracking-[0.04em] text-[#e9dcc3] transition-colors hover:bg-[#4a3320]/90"
          >
            Jetzt kennenlernen
          </Link>

          <p className="mt-2 text-xs text-[#4a3320]/60">Für Geschwister gibt es einen Rabatt.</p>
        </div>
      </section>
    </main>
  );
}
