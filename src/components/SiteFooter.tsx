import { Link } from "@tanstack/react-router";

export function SiteFooter({
  color = "text-bordeaux",
  showInstagram = false,
}: {
  color?: string;
  showInstagram?: boolean;
}) {
  return (
    <footer className="mt-16 px-6 pb-4 pt-1 text-center sm:mt-20 sm:px-10 sm:pb-10 sm:pt-3 md:px-14">
      {showInstagram && (
        <div className="-mt-16 flex flex-col items-center gap-1 sm:-mt-20">
          <p className={`${color} text-xs font-bold sm:text-sm`}>Folgt uns auf Instagram</p>
          <a
            href="https://instagram.com/momo.kleinkindergarten"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="MOMO Kleinkindergarten auf Instagram"
            className={`${color} transition-colors hover:opacity-70`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 sm:h-7 sm:w-7"
              aria-hidden="true"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      )}

      <p
        className={`${color} ${showInstagram ? "mt-16 sm:mt-20" : ""} text-sm font-bold leading-relaxed sm:text-lg`}
      >
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
