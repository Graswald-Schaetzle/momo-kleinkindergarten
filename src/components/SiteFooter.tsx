import { Link } from "@tanstack/react-router";

export function SiteFooter({ color = "text-bordeaux" }: { color?: string }) {
  return (
    <footer className="mt-auto px-6 pb-4 pt-1 text-center sm:px-10 sm:pb-10 sm:pt-3 md:px-14">
      <p className={`${color} text-sm font-bold leading-relaxed sm:text-lg`}>
        Mo-Fr. 07.45 - 13.45 Uhr
        <br />
        <a
          href="https://maps.app.goo.gl/GWdSX3YC2a3odJEM8"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          Mozartstraße 4, 71686 Remseck am Neckar
        </a>
        <br />
        <Link
          to="/kontakt"
          className="underline underline-offset-4"
        >
          Kontakt
        </Link>
      </p>
    </footer>
  );
}
