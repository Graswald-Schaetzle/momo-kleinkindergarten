import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import heroVideo from "@/assets/momo-hund3.mp4.asset.json";
import heroVideoWebm from "@/assets/momo-hund3.webm.asset.json";
import heroPoster from "@/assets/momo-hund3-poster.jpg.asset.json";
import snoreAudio from "@/assets/momo-schnarchen-2.mp3.asset.json";
import soundOnIcon from "@/assets/sound-on-watercolor.png";
import soundOffIcon from "@/assets/sound-off-watercolor.png";

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
            className="w-full scale-[1.06]"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0, #000 6%, #000 94%, transparent 100%), linear-gradient(to bottom, transparent 0, #000 6%, #000 94%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0, #000 6%, #000 94%, transparent 100%), linear-gradient(to bottom, transparent 0, #000 6%, #000 94%, transparent 100%)",
              WebkitMaskComposite: "source-in",
              maskComposite: "intersect",
            }}
          >
            <source src={heroVideoWebm.url} type="video/webm" />
            <source src={heroVideo.url} type="video/mp4" />
          </video>
          <audio ref={audioRef} src={snoreAudio.url} loop autoPlay preload="auto" />
        </div>

        <button
          type="button"
          onClick={toggleSnore}
          aria-pressed={!muted}
          aria-label={muted ? "Schnarchen einschalten" : "Schnarchen ausschalten"}
          className="relative z-10 mt-4 inline-flex items-center transition-opacity hover:opacity-80"
        >
          <img
            src={muted ? soundOffIcon : soundOnIcon}
            alt={muted ? "Schnarchen einschalten" : "Schnarchen ausschalten"}
            loading="lazy"
            width={32}
            height={32}
            className="h-8 w-8 object-contain sm:h-10 sm:w-10"
          />
        </button>

        <p className="mt-4 font-display text-xl font-normal leading-tight tracking-[0.08em] text-bordeaux sm:text-3xl md:text-4xl">
          1–3 Jahre
        </p>
        <p className="mt-2 px-6 font-display text-xl font-normal leading-tight text-bordeaux sm:text-3xl md:text-4xl">Eröffnung Januar 2027</p>
      </div>

    </main>
  );
}

