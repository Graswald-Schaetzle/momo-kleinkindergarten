import { createFileRoute } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import {
  Coffee,
  Blocks,
  Users,
  Palette,
  Droplets,
  UtensilsCrossed,
  Moon,
  DoorOpen,
} from "lucide-react";

export const Route = createFileRoute("/paedagogik/tagesablauf")({
  head: () => ({
    meta: [
      { title: "Tagesablauf — MOMO Kleinkindergarten Remseck" },
      {
        name: "description",
        content:
          "Der Tagesrhythmus im MOMO Kleinkindergarten Remseck: vom Ankommen um 07:45 Uhr bis zur Abholzeit um 13:45 Uhr — Rituale, Freispiel, Morgenkreis, Mittagessen und Ruhezeit.",
      },
      { property: "og:title", content: "Tagesablauf — MOMO Kleinkindergarten Remseck" },
      {
        property: "og:description",
        content:
          "Ein strukturierter, flexibler Tagesrhythmus, der den Kindern Sicherheit und Geborgenheit gibt.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/paedagogik/tagesablauf" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/paedagogik/tagesablauf" }],
  }),
  component: TagesablaufPage,
});

const schedule: { time: string; title: string; text: string; highlights?: string[]; icon: LucideIcon }[] = [
  {
    time: "07:45–09:15",
    title: "Ankommen & offenes Frühstück",
    text: "In ruhiger Atmosphäre werden die Kinder empfangen. Das Frühstück ist offen gestaltet, jedes Kind entscheidet selbst, ob es erst essen oder direkt ins Spiel finden möchte. Um 9:15 Uhr endet die Bringzeit, die Gruppe schließt sich.",
    icon: Coffee,
  },
  {
    time: "09:15–10:15",
    title: "Freispiel innen & außen",
    text: "Die Kinder spielen nach Interesse drinnen oder im Garten. Kreative Angebote wie Kneten, Malen oder das Gestalten mit Naturmaterialien stehen bereit.",
    icon: Blocks,
  },
  {
    time: "10:15",
    title: "Morgenkreis",
    text: "Lieder, Fingerspiele und Rituale im gemeinsamen Kreis markieren den Übergang in die nächste Aktivität.",
    icon: Users,
  },
  {
    time: "10:25–11:30",
    title: "Gemeinsame Aktivität",
    text: "Der Alltag ist geprägt von viel Freispiel, ergänzt durch wechselnde Angebote, die unterschiedliche Schwerpunkte setzen:",
    highlights: [
      "Besuch von einer Musikpädagogin mit Liedern, Instrumenten und Bewegung",
      "Besuch von einer Kunsttherapeutin mit Bastelaktivitäten",
      "Besuch von einer Yogalehrerin und Tanzpädagogin",
      "Spaziergänge in die nähere Umgebung",
      "Spielplatzbesuche oder Naturerkundungen",
      "Malen, Basteln und kleine handwerkliche Projekte mit Naturmaterialien",
      "Backen und Kochen\u00a0",
    ],
    icon: Palette,
  },
  {
    time: "11:30",
    title: "Rückkehr & Übergangsrituale",
    text: "Die Kinder ziehen sich in Ruhe um. Eine Fuß- und Handwäsche schafft Bewusstsein und Entspannung.",
    icon: Droplets,
  },
  {
    time: "11:45–12:15",
    title: "Gemeinsames Mittagessen",
    text: "Unser Tisch wird mit Blumendekoration geschmückt, und feste Rituale wie das gemeinsame Anzünden einer Kerze und ein Lied vor dem Essen schaffen einen vertrauten Rahmen. Statt Wegwerfprodukten verwenden wir Stoffservietten und Lätzchen für Nachhaltigkeit und Geborgenheit zugleich.",
    icon: UtensilsCrossed,
  },
  {
    time: "12:30–Bedarf",
    title: "Schlafenszeit",
    text: "Der Schlafraum ist durch Vorhänge gedämpft, sanfte Düfte und Lieder begleiten das Einschlafen. Jedes Kind wird liebevoll begleitet durch Wiegen, Massage oder die Nähe einer vertrauten Person. Kinder, die nicht einschlafen, erhalten ein ruhiges alternatives Angebot.",
    icon: Moon,
  },
  {
    time: "Bis 13:45",
    title: "Abholzeit",
    text: "Der Tag klingt in ruhiger Atmosphäre aus. Jedes Kind wird einzeln verabschiedet ganz natürlich entstehen hier wertvolle Tür- und Angelgespräche mit den Eltern.",
    icon: DoorOpen,
  },
];

function Connector({ mirrored }: { mirrored: boolean }) {
  const d = mirrored
    ? "M 50 0 C 92 28, 92 72, 50 100"
    : "M 50 0 C 8 28, 8 72, 50 100";
  return (
    <div className="pointer-events-none hidden h-28 w-full md:block" aria-hidden="true">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <path
          d={d}
          fill="none"
          stroke="currentColor"
          className="text-bordeaux/60"
          strokeWidth="0.7"
          strokeLinecap="round"
          strokeDasharray="2.2 3.2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

function TagesablaufPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-20 sm:px-10 md:max-w-4xl md:px-14 md:pt-24">
      <h2 className="text-center font-display text-xl font-normal tracking-[0.08em] text-bordeaux sm:text-3xl md:text-4xl">
        Unser Tagesablauf
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-center text-xs font-light leading-relaxed text-foreground/70 sm:mt-6 sm:text-sm md:text-base">
        Der Tagesrhythmus gibt den Kindern Sicherheit und Orientierung,
        gleichzeitig bleibt er flexibel, um auf individuelle Bedürfnisse
        einzugehen.
      </p>

      <div className="relative mt-10 sm:mt-14 md:mt-16">
        {/* Gestrichelter Pfad (mobil: senkrecht) */}
        <div
          aria-hidden="true"
          className="absolute left-[7px] top-2 bottom-8 w-px border-l border-dashed border-bordeaux/50 md:hidden"
        />

        {schedule.map((item, i) => {
          const isLeft = i % 2 === 0;
          const Icon = item.icon;
          return (
            <div key={item.time}>
              <div className="relative mb-8 pl-8 sm:mb-10 md:mb-0 md:pl-0">
                {/* Symbol (mobil) */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0.5 flex h-5 w-5 items-center justify-center text-bordeaux md:hidden"
                >
                  <Icon size={18} strokeWidth={1.5} />
                </span>

                <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-[1fr_auto_1fr] md:gap-6">
                  {/* Text-Spalte */}
                  <div
                    className={`${isLeft ? "md:order-1 md:text-right" : "md:order-3 md:text-left"}`}
                  >
                    <span className="font-display text-sm font-normal tracking-wide text-bordeaux sm:text-base md:text-lg">
                      {item.time}
                    </span>
                    <h4 className="mt-0.5 font-display text-base font-normal leading-tight tracking-[0.04em] text-bordeaux sm:text-lg md:text-xl">
                      {item.title}
                    </h4>
                    <p className="mt-1.5 text-[11px] leading-snug text-foreground/85 sm:mt-2 sm:text-sm sm:leading-relaxed md:text-[15px] md:leading-relaxed">
                      {item.text}
                    </p>
                    {item.highlights && (
                      <ul className="mt-2 space-y-1 text-[11px] leading-snug text-foreground/85 sm:text-sm sm:leading-relaxed md:text-[15px] md:leading-relaxed">
                        {item.highlights.map((h, j) => (
                          <li key={j} className="flex gap-2 md:block">
                            <span className="text-bordeaux/50 md:hidden">·</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Symbol (Desktop) */}
                  <div className="hidden md:order-2 md:flex md:justify-center">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-bordeaux/30 bg-background/60 text-bordeaux">
                      <Icon size={20} strokeWidth={1.5} />
                    </span>
                  </div>

                  {/* leere Gegenspalte */}
                  <div className={`hidden md:block ${isLeft ? "md:order-3" : "md:order-1"}`} />
                </div>
              </div>

              {i < schedule.length - 1 && <Connector mirrored={!isLeft} />}
            </div>
          );
        })}
      </div>
    </section>
  );
}

