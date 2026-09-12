import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/impressum")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Impressum — MOMO Kleinkindergarten Remseck" },
      {
        name: "description",
        content: "Impressum und Anbieterkennzeichnung des MOMO Kleinkindergarten Remseck.",
      },
      { property: "og:title", content: "Impressum — MOMO Kleinkindergarten Remseck" },
      {
        property: "og:description",
        content: "Impressum und Anbieterkennzeichnung des MOMO Kleinkindergarten Remseck.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.momo-kleinkindergarten.com/impressum" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://www.momo-kleinkindergarten.com/impressum" }],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <main className="min-h-screen pb-32 text-bordeaux">
      <SiteHeader showSlogan hideTagline />

      <section className="mx-auto max-w-2xl px-6 pt-12 sm:px-10 md:px-14">
        <h1 className="text-center font-display text-xl font-normal tracking-[0.08em] sm:text-2xl">
          Impressum
        </h1>

        <div className="mt-8 space-y-6 text-left text-sm leading-relaxed">
          <div>
            <h2 className="font-display text-base font-normal tracking-[0.04em]">
              Angaben gemäß § 5 DDG
            </h2>
            <p className="mt-2">
              Olivia Seiberth
              <br />
              Mozartstraße 4
              <br />
              71686 Remseck am Neckar
            </p>
          </div>

          <div>
            <h2 className="font-display text-base font-normal tracking-[0.04em]">Kontakt</h2>
            <p className="mt-2">
              E-Mail:{" "}
              <a
                href="mailto:leitung@momo-kleinkindergarten.com"
                className="underline underline-offset-4"
              >
                leitung@momo-kleinkindergarten.com
              </a>
              <br />
              Für eine schnelle Kontaktaufnahme nutze gerne auch unser{" "}
              <Link to="/kontakt" className="underline underline-offset-4">
                Kontaktformular
              </Link>
              . Anfragen per E-Mail oder Kontaktformular beantworten wir in der Regel innerhalb
              eines Werktages.
            </p>
          </div>

          <div>
            <h2 className="font-display text-base font-normal tracking-[0.04em]">
              Hinweis zur Unternehmensgründung
            </h2>
            <p className="mt-2">
              Der MOMO Kleinkindergarten wird derzeit im Rahmen der Gründung der Gesellschaft „MOMO
              Kleinkindergarten GmbH" aufgebaut. Der notarielle Gründungstermin ist für den 28.
              September 2026 vorgesehen. Bis zur notariellen Gründung tritt diese Website in Person
              von Olivia Seiberth als Verantwortlicher auf. Nach erfolgter Gründung und Eintragung
              wird dieses Impressum um Handelsregisternummer und weitere gesellschaftsrechtliche
              Angaben ergänzt.
            </p>
          </div>

          <div>
            <h2 className="font-display text-base font-normal tracking-[0.04em]">
              Hinweis zur Betriebserlaubnis
            </h2>
            <p className="mt-2">
              Der geplante Betrieb einer Kindertageseinrichtung bedarf einer Betriebserlaubnis nach
              § 45 SGB VIII. Wir stehen hierzu bereits im Austausch mit der zuständigen
              Aufsichtsbehörde, dem KVJS-Landesjugendamt Baden-Württemberg. Eine Betriebserlaubnis
              liegt derzeit noch nicht vor; der Betreuungsbetrieb wird erst nach deren Erteilung
              aufgenommen.
            </p>
          </div>

          <div>
            <h2 className="font-display text-base font-normal tracking-[0.04em]">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p className="mt-2">Olivia Seiberth, Anschrift wie oben.</p>
          </div>

          <div>
            <h2 className="font-display text-base font-normal tracking-[0.04em]">
              Haftung für Inhalte
            </h2>
            <p className="mt-2">
              Als Diensteanbieterin sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder
              nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt.
            </p>
          </div>

          <div>
            <h2 className="font-display text-base font-normal tracking-[0.04em]">
              Haftung für Links
            </h2>
            <p className="mt-2">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              verantwortlich. Zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar. Bei
              Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </div>

          <div>
            <h2 className="font-display text-base font-normal tracking-[0.04em]">Urheberrecht</h2>
            <p className="mt-2">
              Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und
              jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
              schriftlichen Zustimmung der jeweiligen Autorin bzw. des jeweiligen Autors.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
