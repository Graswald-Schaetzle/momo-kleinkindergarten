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
    text: "Die Kinder werden in einer ruhigen, wertschätzenden Atmosphäre empfangen. Manche haben bereits zuhaus gefrühstückt, andere bringen noch Hunger mit. Deshalb ist das Frühstück offen und partizipativ gestaltet: Jedes Kind darf selbst entscheiden, ob es zunächst essen oder direkt ins Spiel kommen möchte. So gelingt ein sanftes Ankommen, bei dem jedes Kind seinen eigenen Rhythmus wahren darf. Um 9:15 Uhr endet die Bringzeit, die Gruppe wird geschlossen und wir gestalten den weiteren Tag gemeinsam.",
  },
  {
    time: "09:15–10:15",
    title: "Freispiel innen & außen",
    text: "Die Kinder spielen nach Interesse drinnen oder im Garten. Kreative Angebote wie Kneten, Malen oder das Arbeiten mit Naturmaterialien stehen bereit.",
  },
  {
    time: "10:15",
    title: "Morgenkreis",
    text: "Ein gemeinsamer Kreis mit Liedern, Fingerspielen und Ritualen markiert den Übergang in die nächste gemeinsame Aktivität.",
  },
  {
    time: "10:25–11:30",
    title: "Gemeinsame Aktivität",
    text: "Nach dem Morgenkreis erleben die Kinder je nach Tag unterschiedliche Schwerpunkte:",
    highlights: [
      "Besuch einer Musikpädagogin mit Liedern, Instrumenten und Bewegung",
      "Spaziergänge in die nähere Umgebung",
      "Spielplatzbesuche oder Naturerkundungen",
      "Künstlerisch-kreative Aktivitäten wie Malen, Basteln oder kleine handwerkliche Projekte mit Naturmaterialien",
    ],
  },
  {
    time: "11:30",
    title: "Rückkehr & Übergangsrituale",
    text: "Die Kinder ziehen sich in Ruhe um. Kleine Rituale wie eine Fuß- oder Handwäsche schaffen Bewusstsein und Entspannung.",
  },
  {
    time: "11:45–12:15",
    title: "Gemeinsames Mittagessen",
    text: "Der Essbereich wird durch ein Vorhangsystem bewusst vom Spielraum abgetrennt. Dadurch entsteht eine klare, ruhige Atmosphäre, in der das Essen mit allen Sinnen erlebt werden kann. Die Kinder werden aktiv einbezogen: Sie schneiden Obst, waschen Gemüse und üben dabei ihre Feinmotorik. Der Tisch ist liebevoll gedeckt mit einer Blumendekoration, die sich an den Jahreszeiten orientiert, sowie kleinen, saisonalen Elementen aus der Natur. Zu den Ritualen gehören das gemeinsame Anzünden der Kerze und ein Lied. Auf diese Weise lernen die Kinder Achtsamkeit, Umgang mit möglichen Gefahren und die Bedeutung wiederkehrender Rituale kennen. Beim Essen nutzen wir Stofftücher anstelle von Wegwerfprodukten. Lätzchen, Handtücher und Waschtücher bestehen aus natürlichen Materialien. Dies vermittelt nicht nur Geborgenheit und Körperpflege, sondern fördert auch Umweltbewusstsein und Nachhaltigkeit. Gemäß § 22 Abs. 3 SGB VIII bieten wir eine gesunde, ausgewogene Ernährung, die frisch, regional und saisonal ist. Die Mahlzeiten werden kindgerecht zubereitet und ästhetisch angerichtet, sodass die Kinder Essen mit allen Sinnen erleben können. Wasser steht jederzeit frei zur Verfügung. Allergien und Unverträglichkeiten werden anhand eines individuellen Notfallblatts dokumentiert.",
  },
  {
    time: "12:30–Bedarf",
    title: "Schlafenszeit",
    text: "Der Schlafraum ist durch Vorhänge gedämpft, Düfte und sanfte Lieder begleiten das Einschlafen. Jedes Kind wird liebevoll begleitet durch Wiegen, eine sanfte Massage, Handauflegen oder einfach durch die beruhigende Nähe einer vertrauten Person. So findet jedes Kind die Unterstützung, die es braucht, um in den Schlaf zu kommen. Kinder, die trotz Ruhephase nicht einschlafen, werden von einer pädagogischen Fachkraft liebevoll begleitet und erhalten ein ruhiges alternatives Angebot. Schlafsicherheit ist ein weiterer Baustein unseres Gesundheitskonzepts: Wir sorgen für eine sichere Schlafumgebung, eine angenehme Raumtemperatur und regelmäßige Blick- und Atemkontrollen.",
  },
  {
    time: "13:45",
    title: "Abholzeit",
    text: "Der Tag endet in ruhiger, gelöster Atmosphäre. Die Kinder werden einzeln verabschiedet, wodurch jedes Kind noch einmal bewusst gesehen wird. In dieser Zeit entstehen ganz natürlich wertvolle Tür- und Angelgespräche mit den Eltern.",
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
