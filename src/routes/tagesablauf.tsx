import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/tagesablauf")({
  head: () => ({
    meta: [
      { title: "Tagesablauf — MOMO Kleinkindergarten Remseck" },
      {
        name: "description",
        content:
          "Der Tagesrhythmus im MOMO Kleinkindergarten: Ankommen, Freispiel, Morgenkreis, gemeinsame Aktivität, Mittagessen und Schlafenszeit — strukturiert und doch flexibel für die Bedürfnisse jedes Kindes.",
      },
      { property: "og:title", content: "Tagesablauf — MOMO Kleinkindergarten Remseck" },
      {
        property: "og:description",
        content:
          "Ein Tag bei MOMO: Rituale, Natur, gemeinsames Essen und Geborgenheit — vom Ankommen bis zur Abholzeit.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/tagesablauf" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/tagesablauf" }],
  }),
  component: Tagesablauf,
});

type ScheduleItem = {
  time: string;
  title: string;
  text: string;
  highlights?: string[];
};

const schedule: ScheduleItem[] = [
  {
    time: "07:45–09:15",
    title: "Ankommen & offenes Frühstück",
    text: "In ruhiger, wertschätzender Atmosphäre werden die Kinder empfangen. Das Frühstück ist offen gestaltet — jedes Kind entscheidet selbst, ob es erst essen oder direkt ins Spiel finden möchte. So wahrt jedes Kind seinen eigenen Rhythmus. Um 9:15 Uhr endet die Bringzeit, die Gruppe schließt sich und der gemeinsame Tag beginnt.",
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
    text: "Je nach Tag erleben die Kinder unterschiedliche Schwerpunkte:",
    highlights: [
      "Musikpädagogin mit Liedern, Instrumenten und Bewegung",
      "Spaziergänge in die nähere Umgebung",
      "Spielplatzbesuche oder Naturerkundungen",
      "Malen, Basteln und kleine handwerkliche Projekte mit Naturmaterialien",
    ],
  },
  {
    time: "11:30",
    title: "Rückkehr & Übergangsrituale",
    text: "Die Kinder ziehen sich in Ruhe um. Eine Fuß- oder Handwäsche schafft Bewusstsein und Entspannung.",
  },
  {
    time: "11:45–12:15",
    title: "Gemeinsames Mittagessen",
    text: "Ein Vorhang trennt den Essbereich vom Spielraum — so entsteht eine klare, ruhige Atmosphäre. Die Kinder helfen aktiv mit: Sie schneiden Obst, waschen Gemüse und üben ihre Feinmotorik. Der Tisch ist mit saisonaler Blumendekoration und Elementen aus der Natur gedeckt. Kerze anzünden und ein gemeinsames Lied gehören zu den Ritualen. Wir nutzen Stofftücher statt Wegwerfprodukte; Lätzchen und Handtücher bestehen aus natürlichen Materialien — Geborgenheit, Körperpflege und Nachhaltigkeit zugleich. Die Mahlzeiten sind frisch, regional und saisonal, kindgerecht zubereitet und ästhetisch angerichtet (§ 22 Abs. 3 SGB VIII). Wasser steht jederzeit frei zur Verfügung. Allergien und Unverträglichkeiten sind in einem individuellen Notfallblatt dokumentiert.",
  },
  {
    time: "12:30–Bedarf",
    title: "Schlafenszeit",
    text: "Der Schlafraum ist durch Vorhänge gedämpft, sanfte Düfte und Lieder begleiten das Einschlafen. Jedes Kind wird liebevoll begleitet — durch Wiegen, eine sanfte Massage oder die Nähe einer vertrauten Person. Kinder, die nicht einschlafen, erhalten ein ruhiges alternatives Angebot. Für eine sichere Schlafumgebung sorgen wir mit angenehmer Raumtemperatur und regelmäßigen Blick- und Atemkontrollen.",
  },
  {
    time: "13:45",
    title: "Abholzeit",
    text: "Der Tag klingt in ruhiger Atmosphäre aus. Jedes Kind wird einzeln verabschiedet und noch einmal bewusst gesehen — ganz natürlich entstehen hier wertvolle Tür- und Angelgespräche mit den Eltern.",
  },
];

function Tagesablauf() {
  return (
    <main className="min-h-screen pb-32">
      <SiteHeader logoColor="text-black" />

      <div className="mx-auto max-w-3xl px-6 pt-4 sm:px-10 md:max-w-4xl md:px-14">
        <h1 className="text-center font-display text-xl font-normal tracking-[0.08em] text-bordeaux sm:text-3xl md:text-4xl">
          Tagesablauf
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm font-light leading-relaxed sm:mt-8 sm:text-base md:mt-10 md:text-lg md:leading-relaxed">
          Der Tagesrhythmus gibt den Kindern Sicherheit und Orientierung,
          gleichzeitig bleibt er flexibel, um auf individuelle Bedürfnisse
          einzugehen{" "}
          <span className="whitespace-nowrap text-bordeaux/70">
            (§ 22a Abs. 2 Satz 1 SGB VIII)
          </span>
          .
        </p>

        {/* Timeline */}
        <div className="relative mt-12 sm:mt-16 md:mt-20">
          {/* Vertical line */}
          <div className="absolute left-[calc(50%-0.5px)] top-0 h-full w-px bg-bordeaux/20" />

          {schedule.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={item.time}
                className="relative mb-10 sm:mb-14 md:mb-16"
              >
                <div className="grid grid-cols-1 items-start gap-2 md:grid-cols-2 md:gap-12">
                  {/* Time column */}
                  <div
                    className={`flex items-center gap-3 md:flex-col md:items-end md:gap-1 ${
                      isLeft ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    {/* Dot on the line */}
                    <span className="absolute left-1/2 top-1.5 -translate-x-1/2 md:top-2">
                      <span className="block h-2.5 w-2.5 rounded-full border-2 border-bordeaux bg-[#F3EFE3]" />
                    </span>
                    <span
                      className={`font-display text-sm font-normal tracking-wide text-bordeaux sm:text-base md:text-lg ${
                        isLeft ? "md:text-right" : "md:text-left md:order-2"
                      }`}
                    >
                      {item.time}
                    </span>
                  </div>

                  {/* Content column */}
                  <div
                    className={`pl-6 md:pl-0 ${
                      isLeft ? "md:order-2 md:pl-6" : "md:order-1 md:pr-6 md:text-right"
                    }`}
                  >
                    <h2 className="font-display text-base font-normal leading-tight tracking-[0.04em] text-bordeaux sm:text-lg md:text-xl">
                      {item.title}
                    </h2>
                    <p
                      className={`mt-2 text-justify text-[11px] leading-snug text-foreground/85 sm:mt-3 sm:text-sm sm:leading-relaxed md:text-[15px] md:leading-relaxed ${
                        !isLeft ? "md:ml-auto md:text-right" : ""
                      }`}
                    >
                      {item.text}
                    </p>
                    {item.highlights && (
                      <ul
                        className={`mt-3 space-y-1.5 text-[11px] leading-snug text-foreground/85 sm:text-sm sm:leading-relaxed md:text-[15px] md:leading-relaxed ${
                          !isLeft ? "md:ml-auto md:max-w-md md:text-right" : ""
                        }`}
                      >
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
      </div>

      <SiteFooter />
    </main>
  );
}
