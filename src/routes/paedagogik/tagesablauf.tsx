import { createFileRoute } from "@tanstack/react-router";

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

const schedule: { time: string; title: string; text: string; highlights?: string[] }[] = [
  {
    time: "07:45–09:15",
    title: "Ankommen & offenes Frühstück",
    text: "In ruhiger Atmosphäre werden die Kinder empfangen. Das Frühstück ist offen gestaltet, jedes Kind entscheidet selbst, ob es erst essen oder direkt ins Spiel finden möchte. Um 9:15 Uhr endet die Bringzeit, die Gruppe schließt sich.",
  },
  {
    time: "09:15–10:15",
    title: "Freispiel innen & außen",
    text: "Die Kinder spielen nach Interesse drinnen oder im Garten. Kreative Angebote wie Kneten, Malen oder das Gestalten mit Naturmaterialien stehen bereit.",
  },
  {
    time: "10:15",
    title: "Morgenkreis",
    text: "Lieder, Fingerspiele und Rituale im gemeinsamen Kreis markieren den Übergang in die nächste Aktivität.",
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
  },
  {
    time: "11:30",
    title: "Rückkehr & Übergangsrituale",
    text: "Die Kinder ziehen sich in Ruhe um. Eine Fuß- und Handwäsche schafft Bewusstsein und Entspannung.",
  },
  {
    time: "11:45–12:15",
    title: "Gemeinsames Mittagessen",
    text: "Ein Vorhang trennt den Essbereich liebevoll vom Spielraum ab. Gedeckt wird der Tisch mit saisonaler Blumendekoration, und feste Rituale wie das gemeinsame Anzünden einer Kerze und ein Lied vor dem Essen schaffen einen vertrauten Rahmen. Statt Wegwerfprodukten verwenden wir Stoffservietten für Nachhaltigkeit und Geborgenheit zugleich.\u00a0",
  },
  {
    time: "12:30–Bedarf",
    title: "Schlafenszeit",
    text: "Der Schlafraum ist durch Vorhänge gedämpft, sanfte Düfte und Lieder begleiten das Einschlafen. Jedes Kind wird liebevoll begleitet — durch Wiegen, Massage oder die Nähe einer vertrauten Person. Kinder, die nicht einschlafen, erhalten ein ruhiges alternatives Angebot.",
  },
  {
    time: "13:45",
    title: "Abholzeit",
    text: "Der Tag klingt in ruhiger Atmosphäre aus. Jedes Kind wird einzeln verabschiedet — ganz natürlich entstehen hier wertvolle Tür- und Angelgespräche mit den Eltern.",
  },
];

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
        {/* Vertical line removed */}

        {schedule.map((item, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div key={item.time} className="relative mb-8 sm:mb-12 md:mb-14">
              <div className="grid grid-cols-1 items-start gap-1 md:grid-cols-2 md:gap-10">
                {/* Time */}
                <div className={`flex items-center gap-3 md:flex-col md:items-end md:gap-1 ${isLeft ? "md:order-1" : "md:order-2"}`}>
                  <span className={`font-display text-sm font-normal tracking-wide text-bordeaux sm:text-base md:text-lg ${isLeft ? "md:text-right" : "md:text-left md:order-2"}`}>
                    {item.time}
                  </span>
                </div>

                {/* Content */}
                <div className={`pl-6 md:pl-0 ${isLeft ? "md:order-2 md:pl-6" : "md:order-1 md:pr-6 md:text-right"}`}>
                  <h4 className="font-display text-base font-normal leading-tight tracking-[0.04em] text-bordeaux sm:text-lg md:text-xl">
                    {item.title}
                  </h4>
                  <p className={`mt-1.5 text-justify text-[11px] leading-snug text-foreground/85 sm:mt-2 sm:text-sm sm:leading-relaxed md:text-[15px] md:leading-relaxed ${!isLeft ? "md:ml-auto md:text-right" : ""}`}>
                    {item.text}
                  </p>
                  {item.highlights && (
                    <ul className={`mt-2 space-y-1 text-[11px] leading-snug text-foreground/85 sm:text-sm sm:leading-relaxed md:text-[15px] md:leading-relaxed ${!isLeft ? "md:ml-auto md:max-w-md md:text-right" : ""}`}>
                      {item.highlights.map((h, j) => (
                        <li key={j} className="flex gap-2 md:inline-block">
                          <span className="text-bordeaux/50">·</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
