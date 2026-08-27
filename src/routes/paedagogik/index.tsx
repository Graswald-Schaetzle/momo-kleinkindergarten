import { createFileRoute } from "@tanstack/react-router";

import sternBlau from "@/assets/stern-blau.png";
import sternGruen from "@/assets/stern-gruen.png";
import sternWeiss from "@/assets/stern-weiss.png";

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

function PaedagogikIndex() {
  return (
    <>
      <section className="relative mx-auto max-w-2xl px-6 pt-8 sm:px-10 sm:pt-12 md:px-14">
        <style>{`
          @keyframes momo-star-float {
            0%   { transform: translateY(0) rotate(-4deg); }
            100% { transform: translateY(-10px) rotate(5deg); }
          }
          .momo-star {
            animation: momo-star-float 7s ease-in-out infinite alternate;
          }
          .momo-star-2 { animation-duration: 9s; animation-delay: -3s; }
          .momo-star-3 { animation-duration: 8s; animation-delay: -5s; }
          @media (prefers-reduced-motion: reduce) {
            .momo-star { animation: none; }
          }
        `}</style>

        {/* Sterne neben der Überschrift */}
        <div className="relative flex items-center justify-center gap-4 sm:gap-6">
          <h2 className="text-center font-display text-xl font-normal tracking-[0.08em] sm:text-3xl">
            Pädagogik
          </h2>
          <img
            src={sternWeiss}
            alt=""
            aria-hidden
            loading="lazy"
            width={640}
            height={640}
            className="momo-star momo-star-2 pointer-events-none w-40 select-none mix-blend-multiply sm:w-56 md:w-64"
          />
        </div>





        <div className="mt-6 space-y-6 sm:mt-8 sm:space-y-8">
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
            Forschung heute über die ersten Lebensjahre weiß, wie wichtig sichere Bindungen für die
            Gehirnentwicklung sind, wie Geborgenheit das kindliche Nervensystem prägt, wie Kinder
            durch Beziehung und nicht durch Leistung lernen, und lassen dieses Wissen bewusst in
            unseren Alltag einfließen. Deshalb bilden wir uns regelmäßig weiter, tauschen uns
            fachlich aus und hinterfragen unsere pädagogische Arbeit immer wieder neu.
          </p>

          <p className="text-justify text-sm leading-relaxed sm:text-base sm:leading-relaxed md:text-lg md:leading-relaxed">
            So verbinden wir Herzlichkeit mit fundiertem, wissenschaftlich begleitetem Wissen zum
            Wohl eurer Kinder, die bei uns nicht nur behütet, sondern mit Liebe und Verständnis für
            ihre individuelle Entwicklung begleitet werden.
          </p>
        </div>

        {/* Sterne unten: blauer Stern links, grüner Stern mittig */}
        <div className="relative mt-10 flex min-h-[12rem] items-end justify-center sm:mt-14">
          <img
            src={sternBlau}
            alt=""
            aria-hidden
            loading="lazy"
            width={640}
            height={640}
            className="momo-star momo-star-1 pointer-events-none absolute bottom-0 left-0 w-32 select-none mix-blend-multiply sm:w-44 md:w-52"
          />
          <img
            src={sternGruen}
            alt=""
            aria-hidden
            loading="lazy"
            width={640}
            height={640}
            className="momo-star momo-star-3 pointer-events-none w-32 select-none mix-blend-multiply sm:w-48 md:w-56"
          />
        </div>
      </section>
    </>
  );
}
