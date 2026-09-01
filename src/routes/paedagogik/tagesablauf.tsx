import { createFileRoute, Link } from "@tanstack/react-router";
import type { ComponentType } from "react";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

/* Xylophon-Töne via Web Audio API – pro Klick ein Ton, die Tonleiter aufsteigend */
let audioCtx: AudioContext | null = null;
let soundIndex = 0;

function actx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  if (audioCtx.state === "suspended") void audioCtx.resume();
  return audioCtx;
}

/* C-Dur-Tonleiter über zwei Oktaven, aufsteigend */
const xyloScale = [
  261.63, // C4
  293.66, // D4
  329.63, // E4
  349.23, // F4
  392.0,  // G4
  440.0,  // A4
  493.88, // B4 (H)
  523.25, // C5
];

/* Xylophon-Synthese: kurzer hölzerner Schlag mit Obertönen.
   Xylophonstangen haben inharmonische Partiellen – typ. 1 : 3 : 9.2.
   Dazu ein kurzes Rauschen für den Mallet-Anschlag. */
function xylophone(c: AudioContext, start: number, freq: number) {
  const dur = 0.6;
  const partials: Array<[number, number]> = [
    [1, 1],       // Grundton
    [3, 0.35],    // erste Oktave + Quinte
    [9.2, 0.12],  // typische Xylophon-Inharmonizität
  ];

  partials.forEach(([mult, g]) => {
    const o = c.createOscillator();
    const env = c.createGain();
    o.type = "triangle";
    o.frequency.setValueAtTime(freq * mult, start);
    env.gain.setValueAtTime(0, start);
    env.gain.linearRampToValueAtTime(0.22 * g, start + 0.004);
    env.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    o.connect(env).connect(c.destination);
    o.start(start);
    o.stop(start + dur + 0.02);
  });

  // Mallet-Anschlag: sehr kurzes bandgefiltertes Rauschen
  const noiseBuf = c.createBuffer(1, c.sampleRate * 0.05, c.sampleRate);
  const nd = noiseBuf.getChannelData(0);
  for (let i = 0; i < nd.length; i++) nd[i] = (Math.random() * 2 - 1) * (1 - i / nd.length);
  const noise = c.createBufferSource();
  noise.buffer = noiseBuf;
  const nf = c.createBiquadFilter();
  nf.type = "bandpass";
  nf.frequency.setValueAtTime(freq * 4, start);
  nf.Q.setValueAtTime(1.2, start);
  const nenv = c.createGain();
  nenv.gain.setValueAtTime(0.12, start);
  nenv.gain.exponentialRampToValueAtTime(0.0001, start + 0.05);
  noise.connect(nf).connect(nenv).connect(c.destination);
  noise.start(start);
  noise.stop(start + 0.06);
}

function playNatureSound() {
  try {
    const c = actx();
    const t = c.currentTime;
    const freq = xyloScale[soundIndex % xyloScale.length]!;
    soundIndex++;
    xylophone(c, t, freq);
  } catch {
    /* AudioContext nicht verfügbar – geräuschlos weiter */
  }
}
import { useIsMobile } from "@/hooks/use-mobile";
import { MomoLogo } from "@/components/MomoLogo";
import tagesuhr from "@/assets/tagesuhr-v2.png.asset.json";
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
    title: "Gemeinsame Aktivitäten",
    text: "Im Mittelpunkt unseres Alltags steht das Freispiel, hier können die Kinder ihren eigenen Interessen nachgehen, ihre Fantasie entfalten und wichtige Erfahrungen selbstbestimmt sammeln. Ergänzend dazu bieten wir immer wieder, abwechslungsreiche Angebote an, die einzelne Schwerpunkte setzen und den Kindern zusätzliche Impulse geben. Dazu zählen zum Beispiel:",
    highlights: [
      "Besuche einer Musikpädagogin mit Liedern, Instrumenten und Bewegung",
      "Besuche einer Kunsttherapeutin mit Bastelaktivitäten",
      "Besuche einer Yoga- und Tanzpädagogin",
      "Spaziergänge in die nähere Umgebung",
      "Spielplatzbesuche und Naturerkundungen",
      "Malen, Basteln und kleine handwerkliche Projekte mit Naturmaterialien",
      "Backen und Kochen",
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
    time: "12:15–Bedarf",
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

/* Zentrum und Radius des Ziffernblatts im Wecker-Bild (viewBox 926x926) */
const DIAL_CX = 463;
const DIAL_CY = 528;
const DIAL_R = 360;

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
  const [pending, setPending] = useState<number | null>(null);
  const [shake, setShake] = useState(0);
  const stopped = open !== null || pending !== null;

  useEffect(() => {
    if (open !== null) document.body.setAttribute("data-overlay-open", "true");
    else document.body.removeAttribute("data-overlay-open");
    return () => document.body.removeAttribute("data-overlay-open");
  }, [open]);

  const select = useCallback((i: number) => {
    if (open !== null || pending !== null) return;
    setShake((s) => s + 1);
    playNatureSound();
    setPending(i);
    setTimeout(() => {
      setOpen(i);
      setPending(null);
    }, 450);
  }, [open, pending]);
  const isMobile = useIsMobile();
  // Cardinal-Stationen (12/3/6/9 Uhr) weiter außen als die diagonalen,
  // damit Schrift und Uhrzeit genug Abstand zur Uhr bekommen.
  const stationRFor = (i: number) => {
    const cardinal = i % 2 === 0;
    return isMobile
      ? cardinal ? 260 : 245
      : cardinal ? 315 : 295;
  };

  return (
    <section className="mx-auto max-w-3xl px-3 pt-12 sm:px-10 md:max-w-5xl md:px-14 md:pt-16">
      <h2 className="text-center font-display text-xl font-normal tracking-[0.08em] text-bordeaux sm:text-3xl md:text-4xl">
        Unser Tagesablauf
      </h2>

      <p className="mx-auto mt-3 max-w-xl text-center text-xs font-light leading-relaxed text-foreground/70 sm:mt-4 sm:text-sm md:text-base">
        Unser Tagesrhythmus gibt den Kindern Sicherheit und Orientierung,
        gleichzeitig bleibt er flexibel, um auf individuelle Bedürfnisse
        einzugehen.
        <span className="mt-1 block text-[10px] italic sm:text-xs md:text-sm">
          Tippe auf eine Station, um mehr zu erfahren.
        </span>
      </p>

      {/* ===== Wecker-Illustration (alle Bildschirmgrößen) ===== */}
      <div className="relative mx-auto mt-10 mb-14 aspect-square w-full max-w-[340px] sm:mt-14 sm:mb-16 sm:max-w-[520px] md:mt-16 md:mb-20 md:max-w-[760px]">
        {/* Aquarell-Wecker mit rotierendem Zeiger-Overlay */}
        <div
          key={shake}
          className={`pointer-events-none absolute inset-0 flex items-center justify-center ${
            stopped ? "momo-clock-shake" : ""
          }`}
        >
             <div className="relative h-[45%] sm:h-[58%] md:h-[62%]" style={{ aspectRatio: "926 / 926" }}>
               <img
                 src={tagesuhr.url}
                 alt="Tagesablauf als gezeichneter Wecker"
                 className="absolute inset-0 h-full w-full object-contain"
                 draggable={false}
               />
               {/* Zeiger: dünne gemalte Striche wie in der Vorlage, drehen sich um das Ziffernblatt-Zentrum */}
               <svg viewBox="0 0 926 926" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
                 <g
                   className={stopped ? undefined : "momo-hand-spin"}
                   style={{
                     transformOrigin: `${DIAL_CX}px ${DIAL_CY}px`,
                     ...(stopped
                       ? {
                           transform: `rotate(${(pending ?? open ?? 0) * 45}deg)`,
                           transition: "transform 700ms cubic-bezier(.34,1.4,.5,1)",
                         }
                       : {}),
                   }}
                 >
                   {/* langer Zeiger nach oben (zeigt auf die gewählte Station) */}
                   <polyline
                     points={wobbleSeg(DIAL_CX, DIAL_CY + DIAL_R * 0.05, DIAL_CX, DIAL_CY - DIAL_R * 0.72, 7, 5, 1.3)}
                     fill="none"
                     stroke="var(--bordeaux)"
                     strokeWidth={9}
                     strokeLinecap="round"
                     strokeLinejoin="round"
                   />
                   {/* kurzer Zeiger im festen Winkel */}
                   <g transform={`rotate(125 ${DIAL_CX} ${DIAL_CY})`}>
                     <polyline
                       points={wobbleSeg(DIAL_CX, DIAL_CY + DIAL_R * 0.04, DIAL_CX, DIAL_CY - DIAL_R * 0.45, 6, 4, 2.1)}
                       fill="none"
                       stroke="var(--bordeaux)"
                       strokeWidth={9}
                       strokeLinecap="round"
                       strokeLinejoin="round"
                     />
                   </g>
                   <circle cx={DIAL_CX} cy={DIAL_CY} r={10} fill="var(--bordeaux)" />
                 </g>
               </svg>
             </div>
        </div>


        {/* Stationen um den Kreis */}
        {schedule.map((item, i) => {
          const { x, y } = pos(i, stationRFor(i));
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
                <span className="flex justify-center text-bordeaux">
                  <Icon size={isMobile ? 56 : 142} />
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

        {/* ===== Detail-Ansicht: Logo oben, Karte mittig, Symbol unten ===== */}
        {open !== null && (
          (() => {
            const item = schedule[open]!;
            const Icon = item.icon;
            return (
              <div className="fixed inset-0 z-30 flex flex-col items-center overflow-y-auto px-5 pb-2 pt-4 sm:px-8 sm:pt-8">
                {/* MOMO-Logo oben – wie auf den anderen Seiten */}
                <Link
                  to="/"
                  className="flex w-full justify-center"
                  aria-label="Zur Startseite"
                >
                  <MomoLogo className="h-20 w-auto text-menu-overlay-foreground sm:h-32 md:h-40" />
                </Link>

                <div className="flex-1" />

                {/* Detail-Karte mittig */}
                <div className="w-[88%] max-w-lg animate-scale-in rounded-2xl border border-menu-overlay-foreground/40 bg-background px-5 py-5 text-center shadow-2xl sm:px-8 sm:py-7">
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

                {/* Gezeichnetes Symbol */}
                <button
                  type="button"
                  onClick={() => setOpen(null)}
                  className="mt-8 flex justify-center sm:mt-10"
                  aria-label="Zurück zur Uhr"
                >
                  <Icon size={isMobile ? 110 : 170} className="text-menu-overlay-foreground" />
                </button>

                <div className="flex-1" />
              </div>
            );
          })()
        )}
      </div>
    </section>
  );
}
