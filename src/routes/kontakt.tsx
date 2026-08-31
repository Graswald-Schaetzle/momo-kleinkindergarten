import { useState } from "react";
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

function Kontakt() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="flex flex-1 flex-col pb-2 text-center text-bordeaux">
      <SiteHeader />
      <section className="flex flex-1 flex-col items-center justify-center px-4 pb-10 sm:px-10 md:px-14">
        <h2 className="mt-8 font-display text-xl font-normal tracking-[0.08em] sm:mt-12 sm:text-3xl md:mt-16">
          Kontakt
        </h2>


        {submitted ? (
          <div className="mx-auto mt-10 max-w-xl rounded-lg bg-bordeaux/10 px-8 py-10">
            <p className="font-display text-lg font-normal leading-relaxed">
              Vielen Dank! Ihre Nachricht wurde versendet.
              <br />
              Wir melden uns in aller Schnelle bei Ihnen.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-4 flex w-full max-w-xl flex-col gap-3 text-left sm:mt-10 sm:gap-5"
          >
            <div className="flex flex-col gap-1 sm:gap-2">
              <label htmlFor="name" className="text-xs font-bold sm:text-base">
                Name *
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-md border border-bordeaux/30 bg-white/50 px-3 py-2 text-sm text-bordeaux placeholder:text-bordeaux/50 focus:border-bordeaux focus:outline-none sm:px-4 sm:py-3 sm:text-base"
                placeholder="Ihr Name"
              />
            </div>
            <div className="flex flex-col gap-1 sm:gap-2">
              <label htmlFor="email" className="text-xs font-bold sm:text-base">
                E-Mail *
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="rounded-md border border-bordeaux/30 bg-white/50 px-3 py-2 text-sm text-bordeaux placeholder:text-bordeaux/50 focus:border-bordeaux focus:outline-none sm:px-4 sm:py-3 sm:text-base"
                placeholder="ihre@email.de"
              />
            </div>
            <div className="flex flex-col gap-1 sm:gap-2">
              <label htmlFor="subject" className="text-xs font-bold sm:text-base">
                Betreff *
              </label>
              <input
                id="subject"
                type="text"
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="rounded-md border border-bordeaux/30 bg-white/50 px-3 py-2 text-sm text-bordeaux placeholder:text-bordeaux/50 focus:border-bordeaux focus:outline-none sm:px-4 sm:py-3 sm:text-base"
                placeholder="Betreff Ihrer Nachricht"
              />
            </div>
            <div className="flex flex-col gap-1 sm:gap-2">
              <label htmlFor="message" className="text-xs font-bold sm:text-base">
                Nachricht *
              </label>
              <textarea
                id="message"
                required
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="resize-none rounded-md border border-bordeaux/30 bg-white/50 px-3 py-2 text-sm text-bordeaux placeholder:text-bordeaux/50 focus:border-bordeaux focus:outline-none sm:px-4 sm:py-3 sm:text-base"
                placeholder="Ihre Nachricht an uns"
              />
            </div>
            <button
              type="submit"
              className="mt-1 self-center rounded-md bg-bordeaux px-8 py-2 font-display text-sm font-bold tracking-[0.08em] text-white transition-colors hover:bg-bordeaux/90 sm:mt-2 sm:px-10 sm:py-3 sm:text-base"
            >
              Absenden
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
