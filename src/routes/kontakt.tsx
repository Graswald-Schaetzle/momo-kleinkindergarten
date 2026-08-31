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

        <div className="mt-10 flex flex-col items-center gap-3 sm:mt-14">
          <p className="text-sm font-bold sm:text-base">Folgt uns auf Instagram</p>
          <a
            href="https://instagram.com/momo.kleinkindergarten"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="MOMO Kleinkindergarten auf Instagram"
            className="text-bordeaux transition-colors hover:text-bordeaux/70"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8 sm:h-9 sm:w-9"
              aria-hidden="true"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
