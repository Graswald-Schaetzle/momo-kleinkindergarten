import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/paedagogik/")({
  head: () => ({
    meta: [
      { title: "Pädagogik — MOMO Kleinkindergarten Remseck" },
      {
        name: "description",
        content:
          "Waldorforientierte Pädagogik im MOMO Kleinkindergarten Remseck: wiederkehrende Rituale, achtsamer Umgang mit der Natur und Vertrauen in die eigene Entwicklung eures Kindes — verbunden mit aktueller Bindungs- und Hirnforschung.",
      },
      { property: "og:title", content: "Pädagogik — MOMO Kleinkindergarten Remseck" },
      {
        property: "og:description",
        content:
          "Waldorforientiert und wissenschaftlich begleitet: sichere Bindungen, Geborgenheit und Lernen durch Beziehung für Kinder von 1-3 Jahren.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/paedagogik" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/paedagogik" }],
  }),
  component: PaedagogikIndex,
});

const schedule: { time: string; title: string; text: string; highlights?: string[] }[] = [
  {
    time: "07:45–09:15",
    title: "Ankommen & offenes Frühstück",
    text: "In ruhiger Atmosphäre werden die Kinder empfangen. Das Frühstück ist offen gestaltet — jedes Kind entscheidet selbst, ob es erst essen oder direkt ins Spiel finden möchte. Um 9:15 Uhr endet die Bringzeit, die Gruppe schließt sich.",
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
    text: "Ein Vorhang trennt den Essbereich vom Spielraum. Die Kinder helfen mit: Obst schneiden, Gemüse waschen, Feinmotorik üben. Der Tisch ist mit saisonaler Blumendekoration gedeckt. Kerze und Lied gehören zu den Ritualen. Stofftücher statt Wegwerfprodukte — Nachhaltigkeit und Geborgenheit zugleich. Frische, regionale, saisonale Mahlzeiten (§ 22 Abs. 3 SGB VIII).",
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

function PaedagogikIndex() {
  return (
    <>
      <section className="mx-auto max-w-2xl px-6 pt-20 sm:px-10 md:px-14">
        <h2 className="text-center font-display text-xl font-normal tracking-[0.08em] sm:text-3xl">
          Pädagogik
        </h2>

        <div className="mt-10 space-y-6 sm:mt-14 sm:space-y-8">
          <p className="text-justify text-sm leading-relaxed sm:text-base sm:leading-relaxed md:text-lg md:leading-relaxed">
            Unsere Pädagogik ist waldorforientiert geprägt von wiederkehrenden Ritualen, einem
            achtsamen Umgang mit der Natur und dem tiefen Vertrauen in die eigene Entwicklung eures
            Kindes. Wir glauben daran, dass Kinder in ihrem eigenen Tempo wachsen dürfen, begleitet
            von einem Alltag, der Struktur und Geborgenheit zugleich schenkt.
          </p>

          <p className="text-justify text-sm leading-relaxed sm:text-base sm:leading-relaxed md:text-lg md:leading-relaxed">
            Für uns steht an erster Stelle, dass jedes Kind mit Liebe, Geduld und ganzem Herzen
            begleitet wird. Kein Kind soll sich bei uns jemals klein oder übersehen fühlen, jedes
            Kind wird gesehen, gehört und so angenommen, wie es ist. Diese liebevolle Haltung ist für
            uns kein Zusatz, sondern das Fundament unserer gesamten Arbeit.
          </p>

          <p className="text-justify text-sm leading-relaxed sm:text-base sm:leading-relaxed md:text-lg md:leading-relaxed">
            Gleichzeitig denken wir modern: Unsere Arbeit orientiert sich an aktuellen Erkenntnissen
            aus Gehirnforschung, Bindungstheorie und Entwicklungspsychologie. Wir verfolgen, was die
            Forschung heute über die ersten Lebensjahre weiß — wie wichtig sichere Bindungen für die
            Gehirnentwicklung sind, wie Geborgenheit das kindliche Nervensystem prägt, wie Kinder
            durch Beziehung und nicht durch Leistung lernen — und lassen dieses Wissen bewusst in
            unseren Alltag einfließen. Deshalb bilden wir uns regelmäßig weiter, tauschen uns
            fachlich aus und hinterfragen unsere pädagogische Arbeit immer wieder neu.
          </p>

          <p className="text-justify text-sm leading-relaxed sm:text-base sm:leading-relaxed md:text-lg md:leading-relaxed">
            So verbinden wir Herzlichkeit mit fundiertem, wissenschaftlich begleitetem Wissen zum
            Wohl eurer Kinder, die bei uns nicht nur behütet, sondern mit Liebe und Verständnis für
            ihre individuelle Entwicklung begleitet werden.
          </p>
        </div>
      </section>
    </>
  );
}
