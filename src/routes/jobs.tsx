import { createFileRoute } from "@tanstack/react-router";
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

      <div className="mx-auto max-w-3xl px-6 pt-12 text-center sm:px-10 md:px-14">
        <h1 className="font-display text-2xl font-normal tracking-[0.04em] sm:text-3xl md:text-4xl">
          Jobs
        </h1>
        <p className="mt-6 font-display text-sm leading-relaxed sm:text-base md:text-lg">
          Hier findet ihr bald aktuelle Stellenangebote beim MOMO Kleinkindergarten.
        </p>
      </div>
    </main>
  );
}
