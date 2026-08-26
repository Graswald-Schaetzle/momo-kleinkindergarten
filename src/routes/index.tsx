import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import heroVideoWebm from "@/assets/momo-hund-alpha.webm.asset.json";
import heroVideoMp4 from "@/assets/momo-hund-senf3.mp4.asset.json";
import heroPoster from "@/assets/momo-hund-alpha-poster.jpg.asset.json";
import snoreAudio from "@/assets/momo-schnarchen-2.mp3.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MOMO Kinderhaus — Kinderbetreuung 1-3 Jahre in Remseck" },
      {
        name: "description",
        content:
          "MOMO Kinderhaus in Remseck am Neckar: bewusst familiär mit 9 Kindern und 3 Pädagoginnen. Mo-Fr. 07.45-13.45 Uhr. Eröffnung Januar 2027.",
      },
      { property: "og:title", content: "MOMO Kinderhaus — Kinderbetreuung 1-3 Jahre in Remseck" },
      {
        property: "og:description",
        content: "Bewusst familiär gestaltet: 9 Kinder, 3 Pädagoginnen, viel Geborgenheit.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const audioRef = useRef<HTMLAudioElement>(null);
  // Persisted muted state: once the user turns the snoring off, it stays off
  // across page navigations until they explicitly turn it back on.
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.6;

    // Try to autoplay; if the browser blocks it, the user can start it
    // with a single click on the sound toggle.
    void audio.play().then(() => setMuted(false)).catch(() => {
      setMuted(true);
    });

    // Stop the snoring reliably when leaving the homepage — some browsers
    // keep playing a removed audio element unless it is paused explicitly.
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const toggleSnore = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!muted) {
      // Turn OFF.
      audio.pause();
      setMuted(true);
    } else {
      // Turn ON with a single click.
      audio.volume = 0.6;
      void audio.play().then(() => setMuted(false)).catch(() => {});
    }
  };

  return (
    <main className="flex flex-1 flex-col items-center pb-2 text-center">
      <SiteHeader showSlogan />

      <div className="relative mx-auto flex flex-1 w-full max-w-5xl flex-col items-center justify-center py-2">
        <div className="relative mx-auto w-full max-w-5xl overflow-hidden px-6 sm:px-10 md:px-14">

          <video
            autoPlay
            muted
            loop
            playsInline
            poster={heroPoster.url}
            aria-label="Animierte Aquarell-Illustration: schlummernder Weimaraner"
            className="relative w-full"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0, #000 8%, #000 92%, transparent 100%), linear-gradient(to bottom, transparent 0, #000 5%, #000 92%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0, #000 8%, #000 92%, transparent 100%), linear-gradient(to bottom, transparent 0, #000 5%, #000 92%, transparent 100%)",
              WebkitMaskComposite: "source-in",
              maskComposite: "intersect",
            }}
          >
            <source src={heroVideoWebm.url} type="video/webm" />
            <source src={heroVideoMp4.url} type="video/mp4" />
          </video>
          <audio ref={audioRef} src={snoreAudio.url} loop autoPlay preload="auto" />

          <button
            type="button"
            onClick={toggleSnore}
            aria-pressed={!muted}
            aria-label={muted ? "Schnarchen einschalten" : "Schnarchen ausschalten"}
            className="absolute left-8 top-16 z-20 inline-flex items-center transition-opacity hover:opacity-80 sm:left-12 sm:top-24 md:left-16 md:top-32"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-bordeaux sm:h-10 sm:w-10"
              aria-hidden="true"
            >
              <path d="M11 5L6 9H2v6h4l5 4V5z" fill="currentColor" stroke="none" />
              {muted ? (
                <>
                  <line x1="16" y1="9" x2="22" y2="15" />
                  <line x1="22" y1="9" x2="16" y2="15" />
                </>
              ) : (
                <>
                  <path d="M15.5 8.5a5 5 0 0 1 0 7" />
                  <path d="M18.5 5.5a9 9 0 0 1 0 13" />
                </>
              )}
            </svg>
          </button>
        </div>

        <p className="mt-8 px-6 font-display text-xl font-normal leading-tight text-bordeaux sm:mt-12 md:mt-16 sm:text-3xl md:text-4xl">Eröffnung Januar 2027</p>
      </div>

    </main>
  );
}

