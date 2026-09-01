import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — MOMO Kinderhaus Remseck" },
      {
        name: "description",
        content:
          "Kontakt zum MOMO Kinderhaus, Mozartstraße 4, 71686 Remseck am Neckar. Eröffnung Januar 2027.",
      },
      { property: "og:title", content: "Kontakt — MOMO Kinderhaus Remseck" },
      {
        property: "og:description",
        content: "Mozartstraße 4, 71686 Remseck am Neckar. Eröffnung Januar 2027.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/kontakt" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: Kontakt,
});

const fieldClasses =
  "mt-2 w-full rounded-xl border border-[#ddd0b6] bg-[#fbf8f1] px-4 py-3 text-base text-[#2b2320] placeholder:text-[#b3a488] focus:outline-none focus:ring-2 focus:ring-[#7a2e2e]/40";

function Kontakt() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main className="min-h-screen pb-32 text-center">
      <SiteHeader />
      <section className="px-6 pt-20 sm:px-10 md:px-14">
        <h2 className="text-base font-bold sm:text-lg">Kontakt</h2>
        <p className="mx-auto mt-6 max-w-xl text-base font-bold leading-relaxed sm:text-lg">
          MOMO Kinderhaus
          <br />
          <a
            href="https://maps.app.goo.gl/GWdSX3YC2a3odJEM8"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            Mozartstraße 4, 71686 Remseck am Neckar
          </a>
        </p>

        <form onSubmit={handleSubmit} className="mx-auto mt-12 max-w-xl text-left">
          <div className="mb-6">
            <label htmlFor="name" className="block text-base font-bold text-[#7a2e2e] sm:text-lg">
              Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className={fieldClasses}
              placeholder="Ihr Name"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-base font-bold text-[#7a2e2e] sm:text-lg">
              E-Mail *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={fieldClasses}
              placeholder="ihre@email.de"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="nachricht"
              className="block text-base font-bold text-[#7a2e2e] sm:text-lg"
            >
              Nachricht *
            </label>
            <textarea
              id="nachricht"
              name="nachricht"
              required
              rows={5}
              className={fieldClasses}
              placeholder="Ihre Nachricht an uns"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="rounded-full bg-[#b9ac87] px-10 py-3 text-base font-bold text-[#3f2e1e] transition-colors hover:bg-[#afa179]"
            >
              ABSENDEN
            </button>
          </div>

          {sent ? (
            <p className="mt-6 text-center text-sm font-bold text-[#7a2e2e]" role="status">
              Danke für Ihre Nachricht! Wir melden uns bald bei Ihnen.
            </p>
          ) : null}
        </form>
      </section>
    </main>
  );
}
