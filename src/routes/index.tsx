import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import snoreAudio from "@/assets/momo-schnarchen-2.mp3.asset.json";

// Selbst freigestellte Versionen des Hund-Videos (siehe public/hund/README.md):
// WebM mit echtem Alpha-Kanal für Chrome/Firefox/Android, MP4 mit dem Hund
// direkt auf den Senfton der Seite gerechnet als Fallback für Safari/iOS
// (dort wird Video-Transparenz nicht zuverlässig unterstützt).
const heroVideoWebmUrl = "/hund/momo-hund-alpha.webm";
const heroVideoMp4Url = "/hund/momo-hund-mustard.mp4";
const heroPosterUrl = "/hund/momo-hund-poster.jpg";


export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "MOMO Kleinkindergarten — Kinderbetreuung 1-3 Jahre in Remseck" },
      {
        name: "description",
        content:
          "MOMO Kleinkindergarten in Remseck am Neckar: bewusst familiär mit 9 Kindern und 3 Pädagoginnen. Mo-Fr. 07.45-13.45 Uhr. Eröffnung Januar 2027.",
      },
      { property: "og:title", content: "MOMO Kleinkindergarten — Kinderbetreuung 1-3 Jahre in Remseck" },
      {
        property: "og:description",
        content: "Bewusst familiär gestaltet: 9 Kinder, 3 Pädagoginnen, viel Geborgenheit.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.momo-kleinkindergarten.com/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.momo-kleinkindergarten.com/" }],
  }),
  component: Index,
});

function Index() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  // Persisted muted state: once the user turns the snoring off, it stays off
  // across page navigations until they explicitly turn it back on.
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    // WebKit (Safari) meldet sich fälschlich als fähig, das transparente
    // WebM abzuspielen, verwirft dabei aber den Alpha-Kanal und zeigt den
    // Hund in einem sichtbaren weißen Kasten statt auf dem Senfton der
    // Seite. Das betrifft nicht nur iOS (wo wegen Apples Vorgaben jeder
    // Browser WebKit nutzt), sondern auch Safari auf dem Mac. Deshalb hier
    // gezielt für jedes Safari (mobil und Desktop) auf die vorgerechnete
    // Senfton-MP4 umschalten; Chrome/Firefox/Edge bleiben unverändert bei
    // der transparenten WebM.
    const video = videoRef.current;
    if (!video) return;
    const ua = navigator.userAgent;
    const isIOS =
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isSafari = /^((?!chrome|crios|fxios|edgios|android).)*safari/i.test(ua);
    if (isIOS || isSafari) {
      video.src = heroVideoMp4Url;
      video.load();
    }
  }, []);

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
          className="relative mx-auto mt-20 w-full max-w-5xl px-6 sm:mt-12 sm:max-w-sm sm:px-0 md:mt-12 md:max-w-md md:px-0"
          onClick={toggleSnore}
          role="button"
          aria-pressed={!muted}
          aria-label={muted ? "Schnarchen einschalten" : "Schnarchen ausschalten"}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster={heroPosterUrl}
            aria-label="Animierte Aquarell-Illustration: schlummernder Weimaraner"
            className="relative block w-full cursor-pointer"
          >
            <source src={heroVideoWebmUrl} type="video/webm" />
            <source src={heroVideoMp4Url} type="video/mp4" />
          </video>
          <audio ref={audioRef} src={snoreAudio.url} loop autoPlay preload="auto" />
        </div>

        <p className="mt-8 px-6 font-display text-sm font-normal leading-tight tracking-[0.2em] text-bordeaux sm:mt-8 sm:text-base md:mt-8 md:text-base">Eröffnung Januar 2027</p>
      </div>

    </main>
  );
}

