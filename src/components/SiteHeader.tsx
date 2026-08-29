import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { MomoLogo } from "@/components/MomoLogo";

type NavItem =
  | { to: string; label: string }
  | { label: string; children: { to: string; label: string }[] };

const navItems: NavItem[] = [
  {
    label: "ÜBER UNS",
    children: [
      { to: "/ueber-uns", label: "Unsere Werte" },
      { to: "/team", label: "Team" },
    ],
  },
  {
    label: "UNSER ALLTAG",
    children: [
      { to: "/paedagogik", label: "Pädagogik" },
      { to: "/paedagogik/tagesablauf", label: "Tagesablauf" },
      { to: "/paedagogik/pflege", label: "Pflege" },
      { to: "/paedagogik/essen", label: "Essen" },
    ],
  },
  { to: "/raeume", label: "RÄUME" },
  { to: "/preise", label: "PREISE" },
  { to: "/jobs", label: "JOBS" },
  { to: "/kontakt", label: "KONTAKT" },

];

export function SiteHeader({
  showSlogan = false,
  hideTagline = false,
  logoColor = "text-bordeaux",
  burgerColor = "bg-bordeaux",
  onMenuOpen,
}: {
  showSlogan?: boolean;
  hideTagline?: boolean;
  logoColor?: string;
  burgerColor?: string;
  onMenuOpen?: () => void;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="px-6 pt-4 text-center sm:px-10 sm:pt-8 md:px-14">
      <button
        type="button"
        onClick={() =>
          setOpen((v) => {
            if (!v) onMenuOpen?.();
            return !v;
          })
        }
        aria-expanded={open}
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        className="fixed left-4 top-4 z-[60] flex h-10 w-10 items-center justify-center sm:left-6 sm:top-6"
      >
        <span className="relative block h-5 w-7">
          <span
            className={`absolute left-0 block h-[2px] w-7 transition-all duration-300 ease-out ${
              open
                ? "top-1/2 rotate-45 bg-menu-overlay-foreground"
                : `top-0 ${burgerColor} burger-bar`
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 block h-[2px] w-7 -translate-y-1/2 ${burgerColor} burger-bar transition-all duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 block h-[2px] w-7 transition-all duration-300 ease-out ${
              open
                ? "top-1/2 -rotate-45 bg-menu-overlay-foreground"
                : `top-full ${burgerColor} burger-bar`
            }`}
          />
        </span>
      </button>

      <div
        className={`fixed inset-0 z-50 bg-menu-overlay transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className={`no-underline flex flex-col items-center pt-10 text-menu-overlay-foreground transition-opacity duration-300 sm:pt-12 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            <MomoLogo className="h-16 text-menu-overlay-foreground sm:h-20 md:h-24" />
          </Link>
          <nav
            aria-label="Hauptnavigation"
            aria-hidden={!open}
            className="flex flex-1 flex-col items-center justify-center gap-6 sm:gap-8"
          >
            {navItems.map((item, i) =>
              "children" in item ? (
                <NavItemWithChildren
                  key={item.label}
                  item={item}
                  index={i}
                  open={open}
                  onNavigate={() => setOpen(false)}
                />
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${120 + i * 80}ms` : "0ms" }}
                  className={`no-underline font-display font-medium tracking-[0.12em] text-menu-overlay-foreground transition-all duration-500 hover:opacity-70 text-xl sm:text-2xl md:text-3xl ${
                    open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
          <footer className="pb-8 pt-4 text-center sm:pb-12">
            <p className="font-display text-sm font-bold leading-relaxed text-menu-overlay-foreground sm:text-lg">
              Mo-Fr. 07.45 - 13.45 Uhr
              <br />
              <a
                href="https://maps.app.goo.gl/GWdSX3YC2a3odJEM8"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline hover:opacity-70"
              >
                Mozartstraße 4, 71686 Remseck am Neckar
              </a>
              <br />
              <Link
                to="/kontakt"
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className="no-underline hover:opacity-70"
              >
                Kontakt
              </Link>
            </p>
          </footer>
        </div>
      </div>


      <Link to="/" className={`no-underline flex flex-col items-center ${logoColor}`}>
        <MomoLogo className="h-20 sm:h-32 md:h-40" />
      </Link>

      {showSlogan && (
        <p className={`mt-4 font-display text-xs font-normal tracking-[0.25em] ${logoColor} sm:mt-6 sm:text-sm`}>
          1–3&nbsp;Jahre
        </p>
      )}

      {showSlogan && !hideTagline && (
        <p className="mt-16 max-w-lg px-4 font-display text-lg font-medium leading-relaxed text-bordeaux sm:mt-24 sm:text-2xl md:mt-32 md:text-3xl">
          Neun Kinder, Drei Pädagoginnen, unendliche Geborgenheit.
        </p>
      )}
    </header>

  );
}

function NavItemWithChildren({
  item,
  index,
  open,
  onNavigate,
}: {
  item: { label: string; children: { to: string; label: string }[] };
  index: number;
  open: boolean;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3 sm:gap-4">
      <button
        type="button"
        tabIndex={open ? 0 : -1}
        onClick={() => setExpanded((v) => !v)}
        style={{ transitionDelay: open ? `${120 + index * 80}ms` : "0ms" }}
        className={`font-display font-medium tracking-[0.12em] text-menu-overlay-foreground transition-all duration-500 hover:opacity-70 text-xl sm:text-2xl md:text-3xl ${
          open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        {item.label}
        <span className="ml-2 inline-block text-sm align-middle transition-transform duration-300">
          {expanded ? "−" : "+"}
        </span>
      </button>
      <div
        className={`flex flex-col items-center gap-2 overflow-hidden transition-all duration-300 sm:gap-3 ${
          expanded ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {item.children.map((child) => (
          <Link
            key={child.to}
            to={child.to}
            tabIndex={open && expanded ? 0 : -1}
            onClick={onNavigate}
            className="no-underline font-display text-base font-normal tracking-[0.08em] text-menu-overlay-foreground opacity-80 transition-opacity hover:opacity-60 sm:text-lg md:text-xl"
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
