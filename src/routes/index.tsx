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

  const stopSnoring = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setMuted(true);
  };

  return (
    <main className="flex flex-1 flex-col items-center pb-2 text-center">
      <SiteHeader showSlogan onMenuOpen={stopSnoring} />

      <div className="relative mx-auto flex flex-1 w-full max-w-5xl flex-col items-center justify-center py-2">
        <div
          className="relative mx-auto mt-20 w-full max-w-5xl overflow-hidden px-6 sm:mt-28 sm:px-10 md:mt-36 md:px-14"
          onClick={toggleSnore}
          role="button"
          aria-pressed={!muted}
          aria-label={muted ? "Schnarchen einschalten" : "Schnarchen ausschalten"}
        >
          {/* Das Video hat einen cremefarbenen Kartenhintergrund statt echter
              Transparenz. Ein mask-image auf <video> wird von iOS Safari oft
              ignoriert, daher liegt "mix-blend-mode: multiply" hier auf einem
              umschließenden <div> (nicht direkt auf dem <video>) – Weiß/Creme
              verschwindet dadurch pixelgenau im Seitenhintergrund, unabhängig
              von der genauen Form der Karte. Weißer Div-Hintergrund sorgt
              dafür, dass auch während des Ladens (bevor das Video sichtbar
              ist) schon korrekt mit der Seitenfarbe verschmolzen wird. */}
          <div
            className="relative"
            style={{ backgroundColor: "#fff", mixBlendMode: "multiply" }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={heroPoster.url}
              aria-label="Animierte Aquarell-Illustration: schlummernder Weimaraner"
              className="relative block w-full cursor-pointer"
            >
              <source src={heroVideoWebm.url} type="video/webm" />
              <source src={heroVideoMp4.url} type="video/mp4" />
            </video>
          </div>
          <audio ref={audioRef} src={snoreAudio.url} loop autoPlay preload="auto" />
        </div>

        <p className="mt-8 px-6 font-display text-sm font-normal leading-tight tracking-[0.2em] text-bordeaux sm:mt-12 sm:text-base md:mt-16 md:text-lg">Eröffnung Januar 2027</p>
      </div>

    </main>
  );
}

