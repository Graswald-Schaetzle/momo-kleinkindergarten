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

const WEB3FORMS_ACCESS_KEY = "3b9891c1-6b78-4d52-a206-0740f795c35e";

function Kontakt() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [files, setFiles] = useState<File[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    const data = new FormData();
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.append("name", form.name);
    data.append("email", form.email);
    data.append("subject", form.subject);
    data.append("message", form.message);
    files.forEach((file) => data.append("attachment", file));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="flex flex-1 flex-col pb-2 text-center text-bordeaux">
      <SiteHeader showSlogan hideTagline />
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
            <div className="flex flex-col gap-1 sm:gap-2">
              <label htmlFor="attachments" className="text-xs font-bold sm:text-base">
                Dateien (optional)
              </label>
              <input
                id="attachments"
                type="file"
                multiple
                onChange={(e) => setFiles(Array.from(e.target.files ?? []))}
                className="hidden"
              />
              <label
                htmlFor="attachments"
                className="flex w-full cursor-pointer items-center gap-2 rounded-md border border-bordeaux/30 bg-white/50 px-3 py-2 text-sm font-normal text-bordeaux/50 transition-colors hover:bg-white/80 sm:px-4 sm:py-3 sm:text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                >
                  <path d="M21.44 11.05 12.25 20.24a5.5 5.5 0 0 1-7.78-7.78l9.19-9.19a3.5 3.5 0 0 1 4.95 4.95L9.42 17.4a1.5 1.5 0 0 1-2.12-2.12l8.49-8.49" />
                </svg>
                Datei anhängen
              </label>
              {files.length > 0 && (
                <p className="text-xs text-bordeaux/70 sm:text-sm">
                  {files.length} {files.length === 1 ? "Datei" : "Dateien"} ausgewählt:{" "}
                  {files.map((f) => f.name).join(", ")}
                </p>
              )}
            </div>
            {error && (
              <p className="text-xs text-red-700 sm:text-sm">
                Beim Versenden ist etwas schiefgelaufen. Bitte versuchen Sie es erneut.
              </p>
            )}

            <button
              type="submit"
              disabled={sending}
              className="mt-1 self-center rounded-md bg-beige-dark px-8 py-2 font-display text-sm font-bold tracking-[0.08em] text-bordeaux transition-colors hover:bg-beige-dark/90 disabled:cursor-not-allowed disabled:opacity-60 sm:mt-2 sm:px-10 sm:py-3 sm:text-base"
            >
              {sending ? "Wird gesendet…" : "Absenden"}
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
