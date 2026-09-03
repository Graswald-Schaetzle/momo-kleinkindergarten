import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/jobs")({
  head: () => ({
    meta: [
      { title: "Jobs — MOMO Kleinkindergarten Remseck" },
      {
        name: "description",
        content:
          "Karriere beim MOMO Kleinkindergarten in Remseck am Neckar. Werde Teil unseres Teams.",
      },
      { property: "og:title", content: "Jobs — MOMO Kleinkindergarten Remseck" },
      {
        property: "og:description",
        content: "Karriere beim MOMO Kleinkindergarten in Remseck am Neckar.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/jobs" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/jobs" }],
  }),
  component: Jobs,
});

function Jobs() {
  return (
    <main className="min-h-screen pb-32">
      <SiteHeader />

      <section className="mx-auto max-w-2xl px-6 pt-12 text-bordeaux sm:px-10 md:px-14">
        <h1 className="text-center font-display text-xl font-normal leading-snug tracking-[0.04em] sm:text-2xl md:text-3xl">
          Erzieherin (m/w/d) mit 33 Wochenstunden ab Januar gesucht
        </h1>

        <div className="mt-6 space-y-6 text-justify text-sm leading-relaxed sm:space-y-8 sm:text-base sm:leading-relaxed md:text-lg md:leading-relaxed">
          <p>Werde Teil unseres Teams und komm gerne zur Arbeit.</p>

          <p>
            Wir sind ein Kleinkindergarten mit großem Herz für Kinder im Alter von 1 bis 3 Jahren
            und Platz für maximal 9 Kinder. Bei uns kennt jede jeden, wir arbeiten eng und familiär
            zusammen, und niemand wird mit den Anforderungen des Alltags allein gelassen. Unser
            Betreuungsschlüssel ist bewusst großzügig angesetzt: Drei Pädagoginnen teilen sich die
            Verantwortung für die Kinder, so bleibt Zeit für echte Zuwendung, ohne dass jemand an
            die Belastungsgrenze kommt.
          </p>

          <p>
            Wir starten ganz neu. Unsere Räume und alle Materialien sind komplett neu, du gestaltest
            den Alltag der Kinder von Anfang an mit. Wir suchen jemanden, der Lust hat, sich mit
            eigenen Ideen einzubringen und unser neues pädagogisches Konzept aktiv mitzugestalten.
            Ein Interesse an Waldorfpädagogik oder Montessori ist bei uns besonders willkommen. Für
            uns steht an erster Stelle, dass sich unser Team wirklich gut versteht.
          </p>

          <h3 className="text-center font-display text-base font-normal tracking-[0.04em] sm:text-lg md:text-xl">
            Was du bei uns findest
          </h3>

          <ul className="list-disc space-y-2 pl-5 text-left">
            <li>Ein herzliches, familiäres Team, in dem man sich aufeinander verlassen kann</li>
            <li>Ein fairer Betreuungsschlüssel, der Überforderung vermeidet</li>
            <li>
              33 Wochenstunden, aufgeteilt in:
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>30 Stunden direkte Arbeit mit den Kindern</li>
                <li>2 Stunden Teamsitzung</li>
                <li>
                  1 Stunde Vorbereitungs-/Nachbereitungszeit, die du auch von zu Hause aus erledigen
                  kannst
                </li>
              </ul>
            </li>
            <li>Arbeitszeiten: Montag bis Freitag von 7:45 bis 13:45 Uhr</li>
            <li>
              Dienstags: nach einer kurzen halbstündigen Pause findet die zweistündige Teamsitzung
              statt
            </li>
            <li>Vergütung in Anlehnung an den Tarif</li>
            <li>Weihnachtsgeld</li>
            <li>
              Ein eigener Pausenraum auf separater Etage, mit gemütlichem Sofa zum Ausruhen und
              eigenem Bad. Hier kannst du in deinen Pausen wirklich abschalten.
            </li>
          </ul>

          <h3 className="text-center font-display text-base font-normal tracking-[0.04em] sm:text-lg md:text-xl">
            Was wir uns von dir wünschen
          </h3>

          <ul className="list-disc space-y-2 pl-5 text-left">
            <li>Eine ausgebildete Erzieherin (m/w/d), die Freude an der Arbeit mit Kindern hat</li>
            <li>Lust, sich mit Herz in ein kleines Team einzubringen</li>
            <li>Freude daran, ein neues Konzept von Beginn an mitzugestalten</li>
            <li>Interesse an Waldorfpädagogik oder Montessori</li>
            <li>Offenheit für einen familiären, unkomplizierten Umgang miteinander</li>
          </ul>

          <h3 className="text-center font-display text-base font-normal tracking-[0.04em] sm:text-lg md:text-xl">
            Klingt das nach dir?
          </h3>

          <p>
            Wenn du dir einen Arbeitsplatz wünschst, an dem du dich wohlfühlst, an dem man
            aufeinander achtgibt und an dem deine Erholung genauso wichtig genommen wird wie deine
            Arbeit, dann freuen wir uns, dich kennenzulernen.
          </p>
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/kontakt"
            className="inline-block rounded-full bg-bordeaux px-10 py-3 font-display text-base font-bold tracking-[0.04em] text-background transition-colors hover:bg-bordeaux/90"
          >
            Bewirb dich jetzt
          </Link>
        </div>
      </section>
    </main>
  );
}
