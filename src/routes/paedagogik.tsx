import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/paedagogik")({
  head: () => ({
    meta: [
      { title: "Pädagogik — MOMO Kleinkindergarten Remseck" },
      {
        name: "description",
        content:
          "Pädagogischer Ansatz im MOMO Kleinkindergarten in Remseck am Neckar: bewusst familiäre Betreuung für Kinder von 1-3 Jahren.",
      },
      { property: "og:title", content: "Pädagogik — MOMO Kleinkindergarten Remseck" },
      {
        property: "og:description",
        content: "Pädagogischer Ansatz im MOMO Kleinkindergarten, Mozartstraße 4, Remseck am Neckar.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/paedagogik" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/paedagogik" }],
  }),
  component: PaedagogikLayout,
});

function PaedagogikLayout() {
  return (
    <main className="pb-4">
      <SiteHeader hideTagline />
      <div className="text-bordeaux">
        <Outlet />
      </div>
    </main>
  );
}
