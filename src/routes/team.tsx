import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { BriefAnimation } from "@/components/BriefAnimation";

export const Route = createFileRoute("/team")({
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
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: Team,
});

function Team() {
  return (
    <main className="min-h-screen bg-background pb-24">
      <SiteHeader logoColor="text-black" burgerColor="bg-black" showSlogan hideTagline />

      <div className="mx-auto max-w-3xl px-6 pt-0 sm:px-10 md:px-14">
        <h1 className="font-display text-center text-2xl font-normal tracking-[0.04em] text-ink sm:text-3xl md:text-4xl">
          {"\n"}
        </h1>

        <BriefAnimation className="-mt-16 sm:-mt-24" />
      </div>
    </main>
  );
}

