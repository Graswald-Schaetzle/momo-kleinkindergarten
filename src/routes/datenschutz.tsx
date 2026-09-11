import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung — MOMO Kleinkindergarten Remseck" },
      {
        name: "description",
        content: "Datenschutzerklärung des MOMO Kleinkindergarten Remseck.",
      },
      { property: "og:title", content: "Datenschutzerklärung — MOMO Kleinkindergarten Remseck" },
      {
        property: "og:description",
        content: "Datenschutzerklärung des MOMO Kleinkindergarten Remseck.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/datenschutz" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/datenschutz" }],
  }),
  component: Datenschutz,
});

function Datenschutz() {
  return (
    <main className="min-h-screen pb-32 text-bordeaux">
      <SiteHeader showSlogan hideTagline />

      <section className="mx-auto max-w-2xl px-6 pt-12 sm:px-10 md:px-14">
        <h1 className="text-center font-display text-xl font-normal tracking-[0.08em] sm:text-2xl">
          Datenschutzerklärung
        </h1>

        <div className="mt-8 space-y-6 text-left text-sm leading-relaxed">
          <div>
            <h2 className="font-display text-base font-normal tracking-[0.04em]">
              1. Verantwortlicher
            </h2>
            <p className="mt-2">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              <br />
              Olivia Seiberth
              <br />
              Mozartstraße 4, 71686 Remseck am Neckar
              <br />
              E-Mail:{" "}
              <a
                href="mailto:leitung@momo-kleinkindergarten.com"
                className="underline underline-offset-4"
              >
                leitung@momo-kleinkindergarten.com
              </a>
            </p>
            <p className="mt-2">
              Der MOMO Kleinkindergarten wird derzeit im Rahmen der Gründung der Gesellschaft „MOMO
              Kleinkindergarten GmbH" aufgebaut (notarieller Gründungstermin voraussichtlich 28.
              September 2026). Bis dahin ist Olivia Seiberth persönlich Verantwortliche im Sinne der
              DSGVO.
            </p>
          </div>

          <div>
            <h2 className="font-display text-base font-normal tracking-[0.04em]">
              2. Allgemeines zur Datenverarbeitung
            </h2>
            <p className="mt-2">
              Wir verarbeiten personenbezogene Daten unserer Nutzer*innen grundsätzlich nur, soweit
              dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und
              Leistungen erforderlich ist. Die Verarbeitung erfolgt regelmäßig nur mit Einwilligung
              der Nutzer*innen oder auf Grundlage einer anderen gesetzlichen Erlaubnis, insbesondere
              soweit die Verarbeitung zur Erfüllung vertraglicher oder vorvertraglicher Pflichten
              oder zur Wahrung berechtigter Interessen erforderlich ist (Art. 6 Abs. 1 DSGVO).
            </p>
          </div>

          <div>
            <h2 className="font-display text-base font-normal tracking-[0.04em]">3. Hosting</h2>
            <p className="mt-2">
              Diese Website wird bei Netlify, Inc., 44 Montgomery Street, Suite 300, San Francisco,
              CA 94104, USA gehostet. Beim Aufruf der Website erhebt Netlify automatisch technische
              Daten (z. B. Server-Logfiles wie IP-Adresse, Datum und Uhrzeit des Zugriffs,
              aufgerufene Seite, Browsertyp), die zur Bereitstellung eines sicheren und stabilen
              Betriebs der Website erforderlich sind. Rechtsgrundlage ist unser berechtigtes
              Interesse an einer sicheren und funktionsfähigen Bereitstellung unseres Onlineangebots
              (Art. 6 Abs. 1 lit. f DSGVO). Da Netlify seinen Sitz in den USA hat, kann es dabei zu
              einer Übermittlung personenbezogener Daten in ein Land außerhalb der EU/des EWR
              kommen; wir achten darauf, mit unseren Dienstleistern die nach Art. 44 ff. DSGVO
              erforderlichen Garantien (z. B. EU-Standardvertragsklauseln) zu vereinbaren. Soweit
              erforderlich, schließen wir mit unseren Dienstleistern Vereinbarungen zur
              Auftragsverarbeitung nach Art. 28 DSGVO.
            </p>
          </div>

          <div>
            <h2 className="font-display text-base font-normal tracking-[0.04em]">
              4. Kontaktformular
            </h2>
            <p className="mt-2">
              Für unser Kontaktformular nutzen wir den Formularverarbeitungsdienst Web3Forms. Wenn
              du das Formular ausfüllst, werden die von dir eingegebenen Daten (Name, E-Mail-
              Adresse, Betreff, Nachricht) über die Server von Web3Forms verarbeitet und an unsere
              E-Mail-Adresse leitung@momo-kleinkindergarten.com weitergeleitet, damit wir deine
              Anfrage bearbeiten können. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Bearbeitung
              deiner Anfrage bzw. Anbahnung eines Vertrags) sowie Art. 6 Abs. 1 lit. f DSGVO (unser
              Interesse an einer zuverlässigen technischen Abwicklung). Deine Angaben werden
              gelöscht, sobald sie zur Bearbeitung deiner Anfrage nicht mehr benötigt werden, soweit
              keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Mit Web3Forms besteht,
              soweit erforderlich, eine Vereinbarung zur Auftragsverarbeitung nach Art. 28 DSGVO.
            </p>
          </div>

          <div>
            <h2 className="font-display text-base font-normal tracking-[0.04em]">5. Bewerbungen</h2>
            <p className="mt-2">
              Wenn du dich über unser Kontaktformular bei uns bewirbst, verarbeiten wir die von dir
              übermittelten Angaben und Unterlagen ausschließlich zur Prüfung und Bearbeitung deiner
              Bewerbung. Rechtsgrundlage ist Art. 88 DSGVO i. V. m. § 26 BDSG sowie Art. 6 Abs. 1
              lit. b DSGVO (Anbahnung eines Beschäftigungsverhältnisses). Deine Bewerbungsdaten
              werden gelöscht, sobald sie für die Durchführung des Bewerbungsverfahrens nicht mehr
              erforderlich sind, spätestens sechs Monate nach Abschluss des Verfahrens, sofern du
              nicht einer längeren Speicherung zugestimmt hast oder eine längere Aufbewahrung
              gesetzlich vorgeschrieben ist.
            </p>
          </div>

          <div>
            <h2 className="font-display text-base font-normal tracking-[0.04em]">
              6. Schriftarten
            </h2>
            <p className="mt-2">
              Die auf dieser Website verwendeten Schriftarten sind lokal auf unserem eigenen Server
              eingebunden. Es findet dabei keine Verbindung zu Servern Dritter (z. B. Google) statt
              und es werden keine Daten an Dritte übertragen.
            </p>
          </div>

          <div>
            <h2 className="font-display text-base font-normal tracking-[0.04em]">
              7. Keine Analyse-, Tracking-Tools und Cookies
            </h2>
            <p className="mt-2">
              Wir setzen auf dieser Website keine Analyse-, Tracking- oder Werbetools ein. Es werden
              keine Cookies gesetzt.
            </p>
          </div>

          <div>
            <h2 className="font-display text-base font-normal tracking-[0.04em]">
              8. Deine Rechte
            </h2>
            <p className="mt-2">
              Du hast im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Auskunft über deine gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung deiner Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung deiner Daten (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-2">
              Wende dich hierfür gerne jederzeit an{" "}
              <a
                href="mailto:leitung@momo-kleinkindergarten.com"
                className="underline underline-offset-4"
              >
                leitung@momo-kleinkindergarten.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-display text-base font-normal tracking-[0.04em]">
              9. Beschwerderecht bei der Aufsichtsbehörde
            </h2>
            <p className="mt-2">
              Dir steht zudem ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu, z. B.
              bei der für uns zuständigen:
              <br />
              Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg
              <br />
              Königstraße 10a, 70173 Stuttgart
            </p>
          </div>

          <div>
            <h2 className="font-display text-base font-normal tracking-[0.04em]">
              10. Aktualität dieser Datenschutzerklärung
            </h2>
            <p className="mt-2">
              Diese Datenschutzerklärung ist aktuell gültig (Stand: September 2026). Wir werden sie
              anpassen, sobald Änderungen der Datenverarbeitung dies erforderlich machen, etwa im
              Zuge der Gründung der MOMO Kleinkindergarten GmbH.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
