import { createFileRoute } from "@tanstack/react-router";
import type { ComponentType } from "react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  BreakfastIcon,
  PlayIcon,
  CircleIcon,
  BrushIcon,
  WashIcon,
  MealIcon,
  SleepIcon,
  HomeIcon,
} from "@/components/ChildIcons";

type ChildIcon = ComponentType<{ size?: number; className?: string }>;

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

const schedule: {
  time: string;
  title: string;
  text: string;
  highlights?: string[];
  icon: ChildIcon;
}[] = [
  {
    time: "07:45–09:15",
    title: "Ankommen & Frühstück",
    text: "In ruhiger Atmosphäre werden die Kinder empfangen. Das Frühstück ist offen gestaltet, jedes Kind entscheidet selbst, ob es erst essen oder direkt ins Spiel finden möchte. Um 9:15 Uhr endet die Bringzeit, die Gruppe schließt sich.",
    icon: BreakfastIcon,
  },
  {
    time: "09:15–10:15",
    title: "Freispiel innen & außen",
    text: "Die Kinder spielen nach Interesse drinnen oder im Garten. Kreative Angebote wie Kneten, Malen oder das Gestalten mit Naturmaterialien stehen bereit.",
    icon: PlayIcon,
  },
  {
    time: "10:15",
    title: "Morgenkreis",
    text: "Lieder, Fingerspiele und Rituale im gemeinsamen Kreis markieren den Übergang in die nächste Aktivität.",
    icon: CircleIcon,
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
    icon: BrushIcon,
  },
  {
    time: "11:30",
    title: "Übergangsrituale",
    text: "Die Kinder ziehen sich in Ruhe um. Eine Fuß- und Handwäsche schafft Bewusstsein und Entspannung.",
    icon: WashIcon,
  },
  {
    time: "11:45–12:15",
    title: "Mittagessen",
    text: "Unser Tisch wird mit Blumendekoration geschmückt, und feste Rituale wie das gemeinsame Anzünden einer Kerze und ein Lied vor dem Essen schaffen einen vertrauten Rahmen. Statt Wegwerfprodukten verwenden wir Stoffservietten und Lätzchen für Nachhaltigkeit und Geborgenheit zugleich.",
    icon: MealIcon,
  },
  {
    time: "12:30–Bedarf",
    title: "Schlafenszeit",
    text: "Der Schlafraum ist durch Vorhänge gedämpft, sanfte Düfte und Lieder begleiten das Einschlafen. Jedes Kind wird liebevoll begleitet durch Wiegen, Massage oder die Nähe einer vertrauten Person. Kinder, die nicht einschlafen, erhalten ein ruhiges alternatives Angebot.",
    icon: SleepIcon,
  },
  {
    time: "Bis 13:45",
    title: "Abholzeit",
    text: "Der Tag klingt in ruhiger Atmosphäre aus. Jedes Kind wird einzeln verabschiedet, ganz natürlich entstehen hier wertvolle Tür- und Angelgespräche mit den Eltern.",
    icon: HomeIcon,
  },
];

/* Kreis-Geometrie */
const CX = 300;
const CY = 300;
const R_ICON = 240; // Radius der Icons (außerhalb des Kreises)
const R_TIME = 168; // Radius der Zeit-Labels (auf der Kreisbahn)

function pos(i: number, radius: number) {
  // 8 Stationen, beginnend oben (12 Uhr), im Uhrzeigersinn
  const angle = (-90 + i * 45) * (Math.PI / 180);
  return {
    x: CX + radius * Math.cos(angle),
    y: CY + radius * Math.sin(angle),
  };
}

function TagesablaufPage() {
  const [open, setOpen] = useState<number | null>(0);
  const isMobile = useIsMobile();

  return (
    <section className="mx-auto max-w-3xl px-3 pt-20 sm:px-10 md:max-w-5xl md:px-14 md:pt-24">
      <h2 className="text-center font-display text-xl font-normal tracking-[0.08em] text-bordeaux sm:text-3xl md:text-4xl">
        Unser Tagesablauf
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-center text-xs font-light leading-relaxed text-foreground/70 sm:mt-6 sm:text-sm md:text-base">
        Der Tagesrhythmus gibt den Kindern Sicherheit und Orientierung,
        gleichzeitig bleibt er flexibel, um auf individuelle Bedürfnisse
        einzugehen. Tippe auf eine Station, um mehr zu erfahren.
      </p>

      {/* ===== Uhr-Kreis (alle Bildschirmgrößen) ===== */}
      <div className="relative mx-auto mt-8 aspect-square w-full max-w-[640px] md:mt-14">
        <svg viewBox="0 0 600 600" className="h-full w-full" role="img" aria-label="Tagesablauf als Uhr">
          {/* gestrichelter Kreis */}
          <circle
            cx={CX}
            cy={CY}
            r={R_TIME}
            fill="none"
            stroke="currentColor"
            className="text-bordeaux/40"
            strokeWidth={1.2}
            strokeDasharray="4 5"
          />
          {/* Stunden-Markierungen */}
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (-90 + i * 45) * (Math.PI / 180);
            const x1 = CX + (R_TIME + 10) * Math.cos(a);
            const y1 = CY + (R_TIME + 10) * Math.sin(a);
            const x2 = CX + (R_TIME + 18) * Math.cos(a);
            const y2 = CY + (R_TIME + 18) * Math.sin(a);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="currentColor"
                className="text-bordeaux/40"
                strokeWidth={2}
                strokeLinecap="round"
              />
            );
          })}
          {/* Zeit-Labels direkt auf der Kreisbahn */}
          {schedule.map((item, i) => {
            const { x, y } = pos(i, R_TIME);
            return (
              <text
                key={`time-${item.time}`}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-display"
                fontSize={item.time.length > 10 ? 9.5 : 11}
                fill="currentColor"
                stroke="#F3EFE3"
                strokeWidth={3}
                paintOrder="stroke"
                style={{ letterSpacing: "0.02em" }}
              >
                <tspan className="fill-bordeaux">{item.time}</tspan>
              </text>
            );
          })}
        </svg>

        {/* Stationen um den Kreis */}
        {schedule.map((item, i) => {
          const { x, y } = pos(i, R_ICON);
          const leftPct = (x / 600) * 100;
          const topPct = (y / 600) * 100;
          const Icon = item.icon;
          const isOpen = open === i;
          // Textausrichtung je nach Position
          const isRight = leftPct > 62;
          const isLeft = leftPct < 38;
          const align = isLeft ? "items-end text-right" : isRight ? "items-start text-left" : "items-center text-center";
          const translateX = isLeft ? "-100%" : isRight ? "0%" : "-50%";
          return (
            <button
              key={item.time}
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="absolute flex flex-col"
              style={{
                left: `${leftPct}%`,
                top: `${topPct}%`,
                transform: `translate(${translateX}, -50%)`,
              }}
              aria-expanded={isOpen}
            >
              <span className={`flex max-w-[92px] flex-col sm:max-w-none ${align}`}>
                <span className="flex justify-center">
                  <Icon size={isMobile ? 34 : 60} />
                </span>
                <span
                  className={`mt-1 font-display text-[9px] font-normal leading-tight tracking-[0.03em] text-bordeaux sm:text-[12px] md:text-sm ${
                    isOpen ? "underline decoration-bordeaux/50 underline-offset-2" : ""
                  }`}
                >
                  {item.title}
                </span>
              </span>
            </button>
          );
        })}

        {/* Zentrum: Detail-Feld (ab sm) */}
        <div className="pointer-events-none absolute inset-0 hidden items-center justify-center sm:flex">
          <div className="pointer-events-auto flex max-h-[230px] w-[58%] max-w-[280px] flex-col items-center overflow-y-auto rounded-2xl border border-bordeaux/20 bg-background/80 px-5 py-4 text-center backdrop-blur-sm">
            {open !== null ? (
              (() => {
                const item = schedule[open]!;
                return (
                  <>
                    <span className="font-display text-xs font-normal tracking-wide text-bordeaux/70">
                      {item.time}
                    </span>
                    <h4 className="mt-0.5 font-display text-base font-normal leading-tight tracking-[0.04em] text-bordeaux">
                      {item.title}
                    </h4>
                    <p className="mt-1.5 text-[11px] leading-relaxed text-foreground/85 md:text-[12px]">
                      {item.text}
                    </p>
                    {item.highlights && (
                      <ul className="mt-1.5 space-y-0.5 text-left text-[10px] leading-snug text-foreground/80 md:text-[11px]">
                        {item.highlights.map((h, j) => (
                          <li key={j} className="flex gap-1.5">
                            <span className="text-bordeaux/50">·</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                );
              })()
            ) : (
              <p className="text-[11px] font-light text-foreground/60 md:text-xs">
                Tippe auf eine Station des Tages, um mehr zu erfahren.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ===== Mobil: gestapelte Akkordeon-Liste ===== */}
      <div className="mt-8 sm:hidden">
        {schedule.map((item, i) => {
          const Icon = item.icon;
          const isOpen = open === i;
          return (
            <div key={item.time} className="border-b border-bordeaux/15">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center gap-3 py-3 text-left"
                aria-expanded={isOpen}
              >
                <span className="shrink-0">
                  <Icon size={40} />
                </span>
                <span className="flex flex-1 flex-col">
                  <span className="font-display text-[11px] font-normal tracking-wide text-bordeaux/70">
                    {item.time}
                  </span>
                  <span className="font-display text-sm font-normal tracking-[0.03em] text-bordeaux">
                    {item.title}
                  </span>
                </span>
                <span className={`text-bordeaux/50 transition-transform ${isOpen ? "rotate-90" : ""}`}>
                  ›
                </span>
              </button>
              {isOpen && (
                <div className="pb-4 pl-12 pr-2">
                  <p className="text-[11px] leading-relaxed text-foreground/85">
                    {item.text}
                  </p>
                  {item.highlights && (
                    <ul className="mt-2 space-y-1 text-[11px] leading-snug text-foreground/80">
                      {item.highlights.map((h, j) => (
                        <li key={j} className="flex gap-1.5">
                          <span className="text-bordeaux/50">·</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
