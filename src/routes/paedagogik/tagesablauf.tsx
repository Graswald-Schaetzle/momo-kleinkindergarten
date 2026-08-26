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
const KNOB = 74; // Überstand des Knopfs oben
const FOOT = 92; // Überstand der Füße unten

/* unregelmäßiges Vieleck – wirkt wie freihand gekritzelt */
function ngon(cx: number, cy: number, r: number, sides: number, jitter = 0.04) {
  const pts: string[] = [];
  for (let i = 0; i < sides; i++) {
    const a = (-90 + (360 / sides) * i) * (Math.PI / 180);
    const rr =
      r *
      (1 +
        jitter * Math.sin(i * 5.3) * 0.6 +
        jitter * Math.cos(i * 2.1) * 0.4 +
        jitter * Math.sin(i * 11.7) * 0.3);
    pts.push(`${(cx + rr * Math.cos(a)).toFixed(1)},${(cy + rr * Math.sin(a)).toFixed(1)}`);
  }
  return pts.join(" ");
}

function pos(i: number, radius: number) {

  // 8 Stationen, beginnend oben (12 Uhr), im Uhrzeigersinn
  const angle = (-90 + i * 45) * (Math.PI / 180);
  return {
    x: CX + radius * Math.cos(angle),
    y: CY + radius * Math.sin(angle),
  };
}

function TagesablaufPage() {
  const [open, setOpen] = useState<number | null>(null);
  const [shake, setShake] = useState(0);

  const select = (i: number) => {
    setOpen((prev) => (prev === i ? null : i));
    setShake((s) => s + 1);
  };
  const isMobile = useIsMobile();
  const rRing = isMobile ? 96 : R_TIME;
  const knobExt = isMobile ? KNOB * 0.3 : KNOB;
  const footExt = isMobile ? FOOT * 0.3 : FOOT;
  const stationR = isMobile ? 242 : 298;

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

      {/* ===== Uhr-Illustration (alle Bildschirmgrößen) ===== */}
      <div className="relative mx-auto mt-8 aspect-square w-full max-w-[760px] md:mt-14">
        <svg
          key={shake}
          viewBox="0 0 600 600"
          className={`h-full w-full overflow-visible ${open !== null ? "momo-clock-shake" : ""}`}
          role="img"
          aria-label="Tagesablauf als gezeichnete Uhr"
        >
          <defs>
            {/* kritzelkratzelige Handzeichnungs-Unruhe wie Filzstift auf Papier */}
            <filter id="wobble" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves={2} seed={9} result="n" />
              <feDisplacementMap in="SourceGraphic" in2="n" scale={12} xChannelSelector="R" yChannelSelector="G" result="wob1" />
              <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves={2} seed={3} result="n2" />
              <feDisplacementMap in="wob1" in2="n2" scale={6} xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>

          {/* Ziffernblatt: dünner kritzeliger Strich auf Seiten-Hintergrund */}
          <g filter="url(#wobble)">
            <polygon points={ngon(CX, CY, rRing, 56, 0.03)} fill="var(--background)" />
            <polygon
              points={ngon(CX, CY, rRing, 56, 0.03)}
              fill="none"
              stroke="var(--ink)"
              strokeWidth={5}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </g>

          {/* Striche statt Zahlen – an den 8 Stationen */}
          <g filter="url(#wobble)">
            {schedule.map((_, n) => {
              const a = (-90 + n * 45) * (Math.PI / 180);
              const rOuter = rRing - (isMobile ? 10 : 16);
              const rInner = rRing - (isMobile ? 32 : 48);
              const isSel = open === n;
              return (
                <line
                  key={n}
                  x1={CX + rOuter * Math.cos(a)}
                  y1={CY + rOuter * Math.sin(a)}
                  x2={CX + rInner * Math.cos(a)}
                  y2={CY + rInner * Math.sin(a)}
                  stroke="var(--ink)"
                  strokeWidth={isSel ? 10 : 7}
                  strokeOpacity={isSel ? 1 : 0.85}
                  strokeLinecap="round"
                />
              );
            })}
          </g>

          {/* Zeiger: kräftige Tuschestriche mit Pfeilspitzen */}
          <g
            filter="url(#wobble)"
            className={open === null ? "momo-hand-spin" : undefined}
            style={
              open !== null
                ? {
                    transformOrigin: "300px 300px",
                    transform: `rotate(${open * 45}deg)`,
                    transition: "transform 700ms cubic-bezier(.34,1.4,.5,1)",
                  }
                : undefined
            }
          >
            {/* langer Zeiger nach oben (zeigt auf die gewählte Station) */}
            <line
              x1={CX}
              y1={CY + rRing * 0.06}
              x2={CX}
              y2={CY - rRing * 0.74}
              stroke="var(--ink)"
              strokeWidth={9}
              strokeLinecap="round"
            />
            {/* Pfeilspitze langer Zeiger */}
            <polygon
              points={`${CX - 9},${CY - rRing * 0.66} ${CX + 9},${CY - rRing * 0.66} ${CX},${CY - rRing * 0.78}`}
              fill="var(--ink)"
            />
            {/* kurzer Zeiger im festen Winkel */}
            <g transform={`rotate(125 ${CX} ${CY})`}>
              <line
                x1={CX}
                y1={CY + rRing * 0.05}
                x2={CX}
                y2={CY - rRing * 0.46}
                stroke="var(--ink)"
                strokeWidth={10}
                strokeLinecap="round"
              />
              <polygon
                points={`${CX - 8},${CY - rRing * 0.4} ${CX + 8},${CY - rRing * 0.4} ${CX},${CY - rRing * 0.5}`}
                fill="var(--ink)"
              />
            </g>
            <circle cx={CX} cy={CY} r={8} fill="var(--ink)" />
          </g>

        </svg>

        {/* Stationen um den Kreis */}
        {schedule.map((item, i) => {
          const { x, y } = pos(i, stationR);
          const leftPct = (x / 600) * 100;
          const topPct = (y / 600) * 100;
          const Icon = item.icon;
          const isOpen = open === i;
          // Diagonal-Stationen außenbündig (Text wächst vom Zentrum weg),
          // achsiale Stationen zentriert – so gibt es keine Kollision mit dem Ziffernblatt.
          // Auf Desktop sind auch die Seitenstationen außenbündig (Platz genug).
          const axial = i % 2 === 0;
          const onRight = leftPct > 50;
          const sideOnDesktop = axial && !isMobile && (leftPct > 62 || leftPct < 38);
          const isLeft = (!axial && !onRight) || (sideOnDesktop && !onRight);
          const isRight = (!axial && onRight) || (sideOnDesktop && onRight);
          const align = isLeft ? "items-end text-right" : isRight ? "items-start text-left" : "items-center text-center";
          const translateX = isLeft ? "-100%" : isRight ? "0%" : "-50%";
          return (
            <button
              key={item.time}
              type="button"
              onClick={() => select(i)}
              className="absolute flex flex-col"
              style={{
                left: `${leftPct}%`,
                top: `${topPct}%`,
                transform: `translate(${translateX}, -50%)`,
              }}
              aria-expanded={isOpen}
            >
              <span className={`flex max-w-[74px] flex-col sm:max-w-none ${align}`}>
                <span className="flex justify-center">
                  <Icon size={isMobile ? 30 : 60} />
                </span>
                <span
                  className={`mt-1 font-display text-[9px] font-normal leading-tight tracking-[0.03em] text-bordeaux sm:text-[12px] md:text-sm ${
                    isOpen ? "underline decoration-bordeaux/50 underline-offset-2" : ""
                  }`}
                >
                  {item.title}
                </span>
                <span className="mt-0.5 font-display text-[8px] font-light leading-tight text-bordeaux/60 sm:text-[10px] md:text-xs">
                  {item.time}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* ===== Mobil: Detail-Feld unter der Uhr ===== */}
      <div className="mx-auto mt-6 max-w-2xl rounded-2xl border border-bordeaux/20 bg-background/80 px-5 py-4 text-center sm:px-8 sm:py-6">
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
                <p className="mt-2 text-[12px] leading-relaxed text-foreground/85">
                  {item.text}
                </p>
                {item.highlights && (
                  <ul className="mt-2 space-y-1 text-left text-[11px] leading-snug text-foreground/80">
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
          <p className="text-[12px] font-light text-foreground/60">
            Tippe auf eine Station des Tages, um mehr zu erfahren.
          </p>
        )}
      </div>
    </section>
  );
}
