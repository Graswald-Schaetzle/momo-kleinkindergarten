import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { BriefAnimation } from "@/components/BriefAnimation";
import oliviaPortrait from "@/assets/olivia-portrait.png.asset.json";
import umschlagZu from "@/assets/umschlag-zu.png";
import umschlagOffen from "@/assets/umschlag-offen.png";
import umschlagOffenFront from "@/assets/umschlag-offen-front.png";

const oliviaParagraphs = [
  "Ich bin Olivia. Gründerin von Momo und ab Januar 2027 mit ganzem Herzen für eure Kinder da.",
  "Ich bin staatlich anerkannte Erzieherin (B.A. Sozialwesen) und ausgebildete Waldorfpädagogin. Meine mehrjährige Erfahrungen im Kindergarten-Alltag habe ich unter anderem in Frankreich und Berlin gesammelt. Die Waldorf Pädagogik liegt mir sehr am Herzen gleichzeitig ist es mir wichtig, sie modern zu denken und zu leben, im Einklang mit dem, was wir heute über kindliche Entwicklung wissen.",
  "Der Wunsch, irgendwann eine eigene kleine Krippe zu gründen, hat mich lange begleitet. Jetzt wird er wahr und das an einem ganz besonderen Ort: im Haus meiner Großeltern, das ich liebevoll für Momo herrichte. Für mich ist Momo deshalb mehr als ein Projekt, es ist ein echtes Familienprojekt, in das viele persönliche Erinnerungen und viel Herzblut fließen.",
  "Mir ist es ein Anliegen, dass kleine Kinder behutsam aufwachsen dürfen, in einer kleinen Gruppe, und in ihrem eigenen Tempo.",
  "Ich freue mich euch und eure Kinder kennenzulernen!",
];

export const Route = createFileRoute("/team")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Team — MOMO Kleinkindergarten Remseck" },
      {
        name: "description",
        content:
          "Lernt das Team des MOMO Kleinkindergartens kennen: drei Pädagoginnen, die eure Kinder mit Herz und Erfahrung begleiten.",
      },
      { property: "og:title", content: "Team — MOMO Kleinkindergarten Remseck" },
      {
        property: "og:description",
        content: "Drei Pädagoginnen, die eure Kinder mit Herz begleiten.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.momo-kleinkindergarten.com/team" }],
  }),
  component: Team,
});

function Team() {
  return (
    <main className="min-h-screen bg-background pb-24">
      <SiteHeader logoColor="text-black" burgerColor="bg-black" showSlogan hideTagline />

      <div className="mx-auto max-w-3xl px-2 pt-8 sm:px-4 sm:pt-8 md:px-8">
        <h1 className="font-display text-center text-2xl font-normal tracking-[0.04em] text-ink sm:text-3xl md:text-4xl">
          {"\n"}
        </h1>

        <BriefAnimation
          className="mt-8 sm:mt-8"
          name="Olivia"
          role="Gründerin und Leitung"
          photoSrc={oliviaPortrait.url}
          photoAlt="Olivia, Gründerin von MOMO"
          paragraphs={oliviaParagraphs}
          envelopeClosedSrc={umschlagZu}
          envelopeOpenSrc={umschlagOffen}
          envelopeOpenFrontSrc={umschlagOffenFront}
        />
      </div>
    </main>
  );
}
