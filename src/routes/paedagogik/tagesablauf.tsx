import { createFileRoute } from "@tanstack/react-router";
import type { ComponentType } from "react";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
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

/* handgezeichneter Kritzel-Kreis: wenige niedrige Sinus-Wellen, genug Stützstellen
   -> weiche, durchgehend geschlossene wackelige Linie (kein Pixel-Rauschen, keine Spitzen) */
function wobbleCircle(cx: number, cy: number, r: number, sides = 120, amp = 0.02, waves = 6) {
  const pts: string[] = [];
  for (let i = 0; i < sides; i++) {
    const a = (i / sides) * Math.PI * 2;
    const rr =
      r *
      (1 +
        amp * Math.sin(waves * a + 0.3) +
        amp * 0.5 * Math.cos((waves + 2) * a + 1.1));
    pts.push(`${(cx + rr * Math.cos(a)).toFixed(1)},${(cy + rr * Math.sin(a)).toFixed(1)}`);
  }
  return pts.join(" ");
}

/* handgezeichneter Strich: gerade Linie als Polyline mit senkrechtem Jitter */
function wobbleSeg(x1: number, y1: number, x2: number, y2: number, segs = 6, amp = 5, seed = 0) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const nx = -dy / len;
  const ny = dx / len;
  const pts: string[] = [];
  for (let i = 0; i <= segs; i++) {
    const t = i / segs;
    let off = 0;
    if (i !== 0 && i !== segs) {
      off =
        amp * Math.sin(i * 3.7 + seed) * Math.cos(i * 2.1 + seed * 1.7) +
        amp * 0.4 * Math.sin(i * 11.3 + seed);
    }
    pts.push(`${(x1 + dx * t + nx * off).toFixed(1)},${(y1 + dy * t + ny * off).toFixed(1)}`);
  }
  return pts.join(" ");
}

/* leicht gezittertes Dreieck für Pfeilspitzen */
function wobbleTri(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, amp = 2.5, seed = 0) {
  const j = (x: number, y: number, s: number) =>
    `${(x + amp * Math.sin(s * 1.7 + seed)).toFixed(1)},${(y + amp * Math.cos(s * 2.3 + seed)).toFixed(1)}`;
  return `${j(x1, y1, 1)} ${j(x2, y2, 2)} ${j(x3, y3, 3)}`;
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
        Unser Tagesrhythmus gibt den Kindern Sicherheit und Orientierung,
        gleichzeitig bleibt er flexibel, um auf individuelle Bedürfnisse
        einzugehen. Tippe auf eine Station, um mehr zu erfahren.
      </p>

      {/* ===== Uhr-Illustration (alle Bildschirmgrößen) ===== */}
      <div className="relative mx-auto mt-8 aspect-square w-full max-w-[760px] md:mt-14">
        <svg
          key={shake}
          viewBox="0 0 600 600"
          className={`h-full w-full overflow-visible transition-opacity duration-300 ${
            open !== null ? "momo-clock-shake opacity-30" : ""
          }`}
          role="img"
          aria-label="Tagesablauf als gezeichnete Uhr"
        >
          {/* Ziffernblatt: kritzeliger Strich auf Seiten-Hintergrund (geometrisch, keine Pixel-Unruhe) */}

          <g>
            <polygon points={wobbleCircle(CX, CY, rRing)} fill="var(--background)" />
            <polygon
              points={wobbleCircle(CX, CY, rRing)}
              fill="none"
              stroke="var(--ink)"
              strokeWidth={5.5}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </g>

          {/* Striche statt Zahlen – an den 8 Stationen */}
          <g>
            {schedule.map((_, n) => {
              const a = (-90 + n * 45) * (Math.PI / 180);
              const rOuter = rRing - (isMobile ? 10 : 16);
              const rInner = rRing - (isMobile ? 32 : 48);
              const isSel = open === n;
              return (
                <polyline
                  key={n}
                  points={wobbleSeg(
                    CX + rOuter * Math.cos(a),
                    CY + rOuter * Math.sin(a),
                    CX + rInner * Math.cos(a),
                    CY + rInner * Math.sin(a),
                    3,
                    2,
                    n * 1.7
                  )}
                  fill="none"
                  stroke="var(--ink)"
                  strokeWidth={isSel ? 9 : 6.5}
                  strokeOpacity={isSel ? 1 : 0.85}
                  strokeLinecap="round"
                />
              );
            })}
          </g>

          {/* Zeiger: kräftige kritzelige Tuschestriche mit Pfeilspitzen */}
          <g
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
            <polyline
              points={wobbleSeg(CX, CY + rRing * 0.06, CX, CY - rRing * 0.74, 7, 4.5, 1.3)}
              fill="none"
              stroke="var(--ink)"
              strokeWidth={8}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Pfeilspitze langer Zeiger */}
            <polygon
              points={wobbleTri(
                CX - 9,
                CY - rRing * 0.66,
                CX + 9,
                CY - rRing * 0.66,
                CX,
                CY - rRing * 0.78,
                2,
                0.4
              )}
              fill="var(--ink)"
            />
            {/* kurzer Zeiger im festen Winkel */}
            <g transform={`rotate(125 ${CX} ${CY})`}>
              <polyline
                points={wobbleSeg(CX, CY + rRing * 0.05, CX, CY - rRing * 0.46, 6, 4, 2.1)}
                fill="none"
                stroke="var(--ink)"
                strokeWidth={9}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polygon
                points={wobbleTri(
                  CX - 8,
                  CY - rRing * 0.4,
                  CX + 8,
                  CY - rRing * 0.4,
                  CX,
                  CY - rRing * 0.5,
                  2,
                  0.7
                )}
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

        {/* ===== Blauer Vollbild-Hintergrund (wie Hamburger-Menü) ===== */}
        <div
          className={`fixed inset-0 z-20 bg-menu-overlay transition-opacity duration-300 ${
            open !== null ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={() => setOpen(null)}
        />

        {/* ===== Detail-Popup in der Mitte der Uhr ===== */}
        {open !== null && (
          (() => {
            const item = schedule[open]!;
            return (
              <div className="fixed left-1/2 top-1/2 z-30 w-[86%] max-w-lg -translate-x-1/2 -translate-y-1/2 animate-scale-in">
                <div className="max-h-[80vh] overflow-y-auto rounded-2xl border border-menu-overlay-foreground/40 bg-background px-5 py-4 text-center shadow-2xl sm:px-8 sm:py-6">
                  <button
                    type="button"
                    onClick={() => setOpen(null)}
                    aria-label="Zurück zur Uhr"
                    className="float-left -ml-1 flex items-center gap-1 font-display text-[11px] font-light text-bordeaux/80 transition-opacity hover:opacity-70 sm:text-xs"
                  >
                    <ArrowLeft size={16} strokeWidth={1.5} />
                    <span>zurück</span>
                  </button>
                  <span className="block pt-6 font-display text-xs font-normal tracking-wide text-bordeaux/70">
                    {item.time}
                  </span>
                  <h4 className="mt-0.5 font-display text-base font-normal leading-tight tracking-[0.04em] text-bordeaux sm:text-lg">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-[12px] leading-relaxed text-foreground/85 sm:text-sm">
                    {item.text}
                  </p>
                  {item.highlights && (
                    <ul className="mt-2 space-y-1 text-left text-[11px] leading-snug text-foreground/80 sm:text-[13px]">
                      {item.highlights.map((h, j) => (
                        <li key={j} className="flex gap-1.5">
                          <span className="text-bordeaux/50">·</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })()
        )}
      </div>

    </section>
  );
}
