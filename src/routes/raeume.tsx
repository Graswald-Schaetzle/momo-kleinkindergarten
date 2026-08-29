import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/raeume")({
  head: () => ({
    meta: [
      { title: "Räume — MOMO Kleinkindergarten Remseck" },
      {
        name: "description",
        content:
          "Räume und Gestaltung im MOMO Kleinkindergarten in Remseck am Neckar: eine geborgene Umgebung für Kinder von 1-3 Jahren.",
      },
      { property: "og:title", content: "Räume — MOMO Kleinkindergarten Remseck" },
      {
        property: "og:description",
        content: "Räume im MOMO Kleinkindergarten, Mozartstraße 4, Remseck am Neckar.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/raeume" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/raeume" }],
  }),
  component: Raeume,
});

function Raeume() {
  return (
    <main className="min-h-screen pb-32 text-center">
      <SiteHeader />
      <section className="px-6 pt-20 sm:px-10 md:px-14">
        <h2 className="text-base font-bold sm:text-lg">{"\n"}</h2>
        <p className="mx-auto mt-6 max-w-xl whitespace-pre-line text-base font-bold leading-relaxed sm:text-lg">
          {`Bei uns wächst gerade ein Zuhause heran

Ein kurzer Hinweis vorab: Aktuell befinden sich unsere Räume und unser Garten noch mitten im Bauzustand, es wird gerade noch gestrichen, verlegt und eingerichtet. Im Oktober gestalten wir unseren Garten, und bereits im November könnt ihr hier die ersten Fotos sehen und mit eigenen Augen entdecken, wie liebevoll alles geworden ist.

Uns war von Anfang an eines besonders wichtig: dass hier wirklich jedes Detail mit Bedacht gewählt wird. Von der Wandfarbe über den Boden bis hin zu jedem einzelnen Spielzeug, wir haben uns bei jeder Entscheidung gefragt, was sich für ein Kind warm, geborgen und wohnlich anfühlt. So entsteht Stück für Stück ein Ort, der sich wirklich wie ein zweites Zuhause anfühlt.

Unsere Räume – mit Liebe zum Detail

Unsere Wände bekommen warme, sanfte Farbtöne, die eine ruhige und gemütliche Atmosphäre schaffen, und auch bei der Bodengestaltung setzen wir auf natürliche, wohnliche Materialien, die sich weich und angenehm anfühlen. Unser Spielmaterial besteht fast ausschließlich aus Holz und anderen Naturmaterialien: warm, echt und schön anzufassen. Inspiriert von der Montessori- und Waldorfpädagogik haben wir mit viel Herz ausgesucht, was die Kinder umgibt, darunter liebevoll gestaltetes Spielzeug von Grimms und Ostheimer. Statt direkter, kalter Beleuchtung setzen wir auf indirektes, warmes Licht, das eine sanfte und geborgene Stimmung schafft so, wie man es von zuhause kennt. Jedes Kind bekommt sein eigenes kleines Himmelbett zum Träumen und Ausruhen, dazu eine gemütliche Hochebene zum Kuscheln und Entdecken sowie eine Puppenküche, in der ganz viel Fantasie und kleine Familiengeschichten Platz finden.

Unser Garten – ein kleines Abenteuerreich

Im Oktober gestalten wir unseren Garten komplett neu. Geplant sind unter anderem:

ein Sandbereich zum Buddeln und Bauen
eine Rutsche für den kleinen Nervenkitzel
Klettermöglichkeiten, an denen sich die Kinder ausprobieren können
eine Matschecke, in der mit Wasser und Erde experimentiert werden darf
ein Barfußweg mit unterschiedlichen Materialien und Ebenen – wie eine kleine Fußmassage, bei der die Kinder ganz unterschiedliche Untergründe spüren und ihre Sinne auf spielerische Weise schulen können

Wir freuen uns riesig darauf, euch schon bald mitzunehmen auf diese Verwandlung und im November gemeinsam mit euch die ersten fertigen, herzlichen Ecken unseres neuen Zuhauses zu entdecken.`}
        </p>
      </section>
    </main>
  );
}
